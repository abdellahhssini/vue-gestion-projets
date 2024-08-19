<template>
    <input @keyup.enter="newProject" v-model="projectName" placeholder="Add a project" />
</template>
<script>
    export default {
        name: 'addProject',
        data(){
            return{
                projectName: '',
            }
        },
        methods: {
            newProject() {
                if (this.projectName.trim() !== ''){
                    const project = {
                        name: this.projectName,
                    };
                    this.$emit('new-project',project);
                    this.projectName='';
                }
            }
        }
    }
</script>