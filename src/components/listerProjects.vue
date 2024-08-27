<template>
    <!--Lister les projets-->
    <div class="container">
        <div class="row">
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
        </div>
    </div>
</template>
<script>
import addproject from './addproject.vue';
import { getAllProjects , addProject } from '../api/ProjectService';
import router from '@/router';

export default {
    name: 'listerProjects',
    components:{
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
                this.projects.push(project);
            } catch (error){
                console.error('Error adding project ',error);
            }
        },
        async getprojects(){
            try {
                this.projects = await getAllProjects(this._idUs);
            } catch (error){
                console.error('Error in projects:',error);
            }
        }
    },
    mounted() {
        this.getprojects();
    }
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