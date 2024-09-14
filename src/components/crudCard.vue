<template>
    <div class="card premier">
        <div class="card-header bg-white text-primary d-flex justify-content-between align-items-center" >
            <h5 v-if="!listNameEdited" @click="toeditName" class="mb-0 text-center">{{ list.name  }}</h5>
            <input v-else 
            :value="list.name"
            @keyup.enter="editListName(list._idList, $event)"
            @keydown.esc="cancelEditName"
            class="form-control w-50 mx-auto"
            type="text" />
            <button @click="deleteList(list._idList)" class="btn btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px">
                    <path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/>
                </svg>
            </button>
        </div>
        <div class="card-body">
            <draggable  :list="cards" 
                        group="cards"
                        @start="drag=true"
                        @add="onCardDrop" 
                        item-key="_id" class="list-group">
                <template #item="{element}">
                    <div :key="element._id" class="mb-2 list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 v-if="!cardedited" @click="toeditCard">{{ element.contenu }}</h6>
                            <input v-else @keyup.enter="updateCard(element._id, $event)" @keydown.esc="cancelEditCard" :value="element.contenu" class="form-control"/>
                            <button @click="deleteCard(element._id)" class="btn btn-primary btn-sm ml-2">DELETE</button>
                        </div>
                    </div>
                </template>
            </draggable>     
        </div>
        <div class="cards">
            <InputCard @new-card="addNewCard" />
        </div>
        
    </div>
</template>
<script>

import InputCard from "./InputCard.vue";
import { getAllCards, addCard, editCard, deleteCard } from '../api/CardService';
import draggable from "vuedraggable";
import { deleteListCard, updateListCard } from "@/api/ListService";

export default {
    name: 'crudCard',
    props: {
        list: {
            type: Object,
            default: () => ({
                name: '',
            })
        }
    },
    data(){
        return {
            cards: [],
            drag: false,
            listNameEdited: false,
            cardedited: false
        }
    },
    async created(){
        try {
            this.cards = await getAllCards(this.list._idList);
            console.log('Cards loaded:',this.cards);
        } catch (error){
            console.error('Error in cards:',error);
        }
    },
    methods: {
        async addNewCard(card){
            try{
                card._idListCard = this.list._idList;
                const cardId = await addCard(card);
                card._id = cardId;
                this.cards.push(card);
            } catch (error){
                console.error('Error adding card ',error);
            }
        },
        async updateCard(_cardID, event){
            const cardin = this.cards.findIndex(card => card._id === _cardID);
            if(cardin !== -1){
                const updatedCard = {
                     ...this.cards[cardin], 
                     contenu: event.target.value 
                };
                try {
                    await editCard(_cardID, updatedCard);
                    this.cards.splice(cardin, 1, updatedCard);
                } catch(error){
                    console.error('Error updating card ',error);
                }
            }
            this.cardedited = false;
        },
        async deleteCard(_cardID) {
            try {
                this.cards = this.cards.filter(card => card._id !== _cardID);
                await deleteCard(_cardID);
                
            } catch (error){
                console.error('Error deleting card ',error);
            }
        },
        async onCardDrop (event){
            const { newIndex } = event;
            const draggedCard = this.cards[newIndex];
            console.log(draggedCard);
            console.log(this.list._idList);
            if (draggedCard && draggedCard._idListCard !== this.list._idList) {
                try {
                    draggedCard._idListCard = this.list._idList;
                    await editCard(draggedCard._id, draggedCard);

                    console.log(`Card ${draggedCard._id} moved to list ${this.list._idList}`);
                } catch (error) {
                console.error('Error updating card _idListCard:', error);
                }
            }
        },
        toeditCard(){
            this.cardedited = true;
        },
        toeditName(){
            this.listNameEdited = true;
        },
        async editListName(idlist, event){
            var NameList = event.target.value;
            this.list.name = NameList;
            if(NameList.trim()){
                const updatedList = {
                    ...this.list,
                    name : NameList
                };
                try {
                    await updateListCard(idlist, updatedList);
                } catch (error){
                    console.error('Error updating List name: ',error);
                }
            }
            this.listNameEdited = false;
        },
        cancelEditCard(){
            this.cardedited = false;
        },
        cancelEditName(){
            this.listNameEdited = false;
        },
        async deleteList(ListId){

            try {
                await deleteListCard(ListId);
                this.$emit('list-deleted', ListId);
            } catch (error) {
                console.error('Error deleting List:', error);
            }
        }
    },
    components: {
        InputCard,
        draggable
    }
}
</script>
<style>
    .cards {
        margin-bottom: 10px
    }
    .premier {
        border: solid 1px;
        padding: 1rem;
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25) ;
        margin: auto;
        background-color: #295173;
    }
    .premier:hover{
        border: 2px solid var(--primary);
    }
    .premier h4 {
        border-bottom: 1px solid var(--davys-grey);
        padding-bottom: 1rem;
        margin-bottom: 0.5rem;
    }
    .btn-icon {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: inherit;
    }

    .btn-icon svg {
        fill: currentColor;
    }
</style>