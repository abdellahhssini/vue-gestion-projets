<template>
    <div class="list">
        <div v-for="projec in projects" :key="projec._id">
            <lists :project=projec />
        </div>
    </div>
    <div>
        <addproject @new-project="addNewProject"/>
    </div>
</template>
<script>
import addproject from "./addproject.vue";
import lists from './lists.vue';
import { getAllProjects , addProject } from '../api/ProjectService';
export default {
    name: 'projects',
    components:{
        addproject,
        lists
    },
    data(){
        return{
            projects:[],
            id: '66ab7657765774cc5c93b4e9',
        }
    },
    async projets(){
        try {
            this.projects = await getAllProjects(this.id);
        } catch (error){
            console.error('Error in projects:',error);
        }
    },
    methods:{
        async addNewProject(project){
            try {
                project._idUser = this.id;
                const idProject = await addProject(project);
                console.log(idProject);
                project._id = idProject; 
                this.projects.push(project);
            } catch (error){
                console.error('Error adding project ',error);
            }
        }
    }
}
</script>