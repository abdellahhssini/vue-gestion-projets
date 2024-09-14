<template>
    <!--Lister les projets-->
    <div class="container">
        <div class="row">
<<<<<<< HEAD
            <div class="col-sm-4 mb-3" v-for="project in projects" :key="project._idProject">
                <div class="card-container position-relative">
                    <router-link  :to="{ name: 'lists', params: { projectId: project._idProject } }" class="card" style="width: 100%;">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                        </div>
                    </router-link>
                    <button @click="removeProject(project._idProject)" class="btn btn-light position-absolute top-0 end-0 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/></svg>
                    </button>
                </div>   
            </div>
            <addproject @new-project="addNewProject"/>
=======
                <div class="col-sm-4 mb-3" v-for="project in projects" :key="project._idProject">
                    <div v-if=project._idProject>
                        <router-link  :to="{ name: 'lists', params: { projectId: project._idProject } }" class="card" style="width: 100%;">
                            <div class="card-body">
                                <h5 class="card-title">{{ project.name }}</h5>
                            </div>
                        </router-link>
                    </div>   
                </div>
            <div class="col-sm-4 mb-3">
                <button type="button" class="card special-card" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Create New Project</h5>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <!--Modal Du Creation-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Project : </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <addproject @new-project="addNewProject"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" >Save</button>
                </div>
            </div>
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
        </div>
    </div>
</template>
<script>
import addproject from './addproject.vue';
<<<<<<< HEAD
import { getAllProjects , addProject, deleteProject } from '../api/ProjectService';
=======
import { getAllProjects , addProject } from '../api/ProjectService';
import router from '@/router';
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9

export default {
    name: 'listerProjects',
    components:{
<<<<<<< HEAD
        addproject
    },
    props: {
        userId: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            projects:[],
        }
    },
    created() {
        this.getprojects();
    },
    methods:{
        async addNewProject(project){
            try {
                project._idUser = this.userId;
                project._idProject = await addProject(project);
=======
        projects,
        addproject
    },
    data(){
        return{
            projects:[],
            _idUs: '66ab7657765774cc5c93b4e9',
        }
    },
    methods:{
        async addNewProject(project){
            try {
                project._idUser = this._idUs;
                const idProject = await addProject(project);
                project._id = idProject;
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
                this.projects.push(project);
            } catch (error){
                console.error('Error adding project ',error);
            }
        },
        async getprojects(){
            try {
<<<<<<< HEAD
                console.log(this.userId);
                this.projects = await getAllProjects(this.userId);
            } catch (error){
                console.error('Error in projects:',error);
            }
        },
        async removeProject(projectId){
            try {
                await deleteProject(projectId);
                this.projects = this.projects.filter(project => project._idProject !== projectId);
            } catch (error) {
                console.error('Error deleting project:', error);
            }
        }
    },
    
=======
                this.projects = await getAllProjects(this._idUs);
            } catch (error){
                console.error('Error in projects:',error);
            }
        }
    },
    mounted() {
        this.getprojects();
    }
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
}
</script>
<style>
a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: none;
    color: inherit;
}

.card-title {
    margin-bottom: 0; 
}

.special-card {
  background-color: #28a745; 
  color: white; 
  border: 2px solid #218838; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.special-card .card-title {
  font-weight: bold; 
  font-size: 1.25rem; 
}

.special-card:hover {
  background-color: #218838; 
  border-color: #1e7e34; 
}

</style>