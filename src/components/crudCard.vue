<template>
    <div class="card premier">
        <div class="card-header bg-primary text-white">
            {{ list.name }}
        </div>
        <div class="card-body">
            <div v-for="card in cards" :key="card._id" class="mb-2">
                <div class="d-flex justify-content-between align-items-center">
                    <input @keyup.enter="updateCard(card._id, $event)" :value="card.contenu" class="form-control"/>
                    <button @click="deleteCard(card._id)" class="btn btn-primary btn-sm ml-2">DELETE</button>
                </div>
            </div>
        </div>
        <div class="cards">
            <InputCard @new-card="addNewCard" />
        </div>
    </div>
</template>
<script>
import InputCard from "./InputCard.vue";
import { getAllCards, addCard, updateCard, deleteCard } from '../api/CardService';
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
        }
    },
    async created(){
        try {
            console.log(this.list);
            this.cards = await getAllCards(this.list._idList);
        } catch (error){
            console.error('Error in cards:',error);
        }
    },
    methods: {
        async addNewCard(card){
            try{
                card._idListCard = this.list._idList;
                console.log(card._idListCard);
                const cardId = await addCard(card);
                card._id = cardId;
                console.log(card);
                this.cards.push(card);
            } catch (error){
                console.error('Error adding card ',error);
            }
        },
        async updateCard(_cardID, event){
            const cardin = this.cards.findIndex(card => card._id === _cardID);
            if(cardin !== -1){
                const updatedCard = { ...this.cards[cardin], contenu: event.target.value };
                try {
                    await updateCard(_cardID, updatedCard);
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
        }
    },
    components: {
        InputCard
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