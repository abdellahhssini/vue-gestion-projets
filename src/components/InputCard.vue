<template>
    <div >
        <input @keyup.enter="newCard" v-model="cardContenu" placeholder="Add a card" class="form-control mb-2"/>
    </div>
</template>
<script>
export default {
    name: 'InputCard',
    data(){
        return {
            cardContenu: '',
        }
    },
    methods: {
        newCard() {
            if (this.cardContenu.trim() !== ''){
                const card = {
                    contenu: this.cardContenu,
                };
                this.$emit('new-card',card);
                this.cardContenu='';
            }
        }
    }
}
</script>
<style>
    
</style>