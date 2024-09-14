<template>
    <input @keyup.enter="newList" v-model="listName" placeholder="Add a list" />
</template>
<script>
    export default {
        name: 'InList',
        data(){
            return{
                listName: '',
            }
        },
        methods: {
            newList() {
                if (this.listName.trim() !== ''){
                    const list = {
                        name: this.listName, 
                    };
                    this.$emit('new-list',list);
                    this.nameContenu='';
                }
            }
        }
    }
</script>