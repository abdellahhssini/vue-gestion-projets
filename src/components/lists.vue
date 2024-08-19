<template>
    <div class="container mt-4">
        <div class="row mb-3">
            <div class="col">
                <h4 class="project-name text-dark bg-light">{{ project.name }}</h4>
            </div>
        </div>
        <div class="row">
            <div v-for="lis in lists" :key="lis._id" class="col-md-4 mb-3">
                <crudCard :list=lis />
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
import { getProjectById } from '../api/ProjectService';
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
            project: {}
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
                console.log(ListId);
                list._id = ListId;
                this.lists.push(list);
                console.log(list);
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
                console.log("lists",await getAllLists(this.project._idProject));
            } catch (error){
                console.error('Error in lists:',error);
            }
        },
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