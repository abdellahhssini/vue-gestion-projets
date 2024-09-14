<template>
<<<<<<< HEAD
    <div class="col-sm-4 mb-3">
        <button type="button" class="card special-card" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">Create New Project</h5>
            </div>
        </button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Project : </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input v-model="projectName" placeholder="Add a project" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" @click="newProject">Save</button>
                </div>
            </div>
        </div>
    </div>
    
=======
    <input @keyup.enter="newProject" v-model="projectName" placeholder="Add a project" />
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
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