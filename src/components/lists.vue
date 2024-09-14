<template>
    <div class="container mt-4">
        <div class="row mb-3">
<<<<<<< HEAD
            <div class="col text-bg-primary p-3">
                <h4 v-if="!isEditingName" @click="toggleEditName" >{{ project.name }}</h4>
                <input v-else 
                :value="project.name" 
                @blur="editProjectName(projectId, $event)" 
                @keyup.enter="editProjectName(projectId, $event)" 
                @keydown.esc="cancelEditName" 
                class="form-control w-50 mx-auto" 
                type="text" />
            </div>
        </div>
        <div class="row">
            <div v-for="lis in lists" :key="lis._idList" class="col-md-4 mb-3">
                <crudCard :list=lis @list-deleted="suppressionList"/>
=======
            <div class="col">
                <h4 class="project-name text-dark bg-light">{{ project.name }}</h4>
            </div>
        </div>
        <div class="row">
            <div v-for="lis in lists" :key="lis._id" class="col-md-4 mb-3">
                <crudCard :list=lis />
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <InList @new-list="addNewList"/>
            </div>
        </div>
    </div>
    
</template>
<script>
import InList from './InList.vue'; 
import crudCard from './crudCard.vue'
import { getAllLists , addList } from '../api/ListService';
<<<<<<< HEAD
import { getProjectById, updateProject } from '../api/ProjectService';
=======
import { getProjectById } from '../api/ProjectService';
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
export default {
    name: 'lists',
    components:{
        InList,
        crudCard
    },
    data(){
        return{
            lists:[],
            projectId: this.$route.params.projectId,
<<<<<<< HEAD
            project: {},
            isEditingName: false,
=======
            project: {}
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
        }
    },
    
    async created() {
        await this.fetchProject(); 
        await this.affect();
    },
    methods:{
        async addNewList(list){
            try{
                list._idProject = this.project._idProject;
                const ListId = await addList(list);
<<<<<<< HEAD
                list._idList = ListId;
=======
                list._id = ListId;
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
                this.lists.push(list);
            } catch (error){
                console.error('Error adding list ',error);
            }
        },
        async fetchProject() {
            try {
                this.project = await getProjectById(this.projectId); 
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        },
        async affect(){
            try {
                this.lists = await getAllLists(this.project._idProject);
            } catch (error){
                console.error('Error in lists:',error);
            }
        },
<<<<<<< HEAD
        toggleEditName(){
            this.isEditingName = true;
        },
        async editProjectName(idproject, event){
            var updatedProjectName = event.target.value;
            this.project.name = updatedProjectName;
            if(updatedProjectName.trim()){
                const updatedProject = {
                    ...this.project ,
                    name : this.updatedProjectName 
                };
                try {
                    await updateProject(idproject, updatedProject);

                }catch (error) {
                    console.error('Error updating project name:',error);
                }
            }
            this.isEditingName = false;
        },
        cancelEditName(){
            this.isEditingName = false;
            this.updatedProjectName = this.project.name;
        },
        suppressionList(ListId){
            this.lists = this.lists.filter(list => list._idList !== ListId);
        }
=======
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    }
}
</script>
<style>
.project-name {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 0.25rem;
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>