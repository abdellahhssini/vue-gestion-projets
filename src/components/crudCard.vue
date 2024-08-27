<template>
    <div class="card premier">
        <div class="card-header bg-primary text-white" :data-list-id="list._idList">
            {{ list.name  }}  {{ list._idList }}
        </div>
        <div class="card-body">
            <draggable  :list="cards" 
                        group="cards"
                        @start="drag=true"
                        @end="onCardDrop" 
                        item-key="_id" class="list-group">
                <template #item="{element}">
                    <div :key="element._id" class="mb-2 list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <input @keyup.enter="updateCard(element._id, $event)" :value="element.contenu" class="form-control"/>
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
        },
        async deleteCard(_cardID) {
            try {
                this.cards = this.cards.filter(card => card._id !== _cardID);
                await deleteCard(_cardID);
                
            } catch (error){
                console.error('Error deleting card ',error);
            }
        },
        onCardDrop (event){
            const ogEvent = event.originalEvent;
            const toListId = event.to.getAttribute('data-list-id');
            
            console.log(event.to);

            console.log(toListId);
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
    
</style>