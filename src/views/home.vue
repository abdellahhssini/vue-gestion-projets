<template>
    <div class="d-flex justify-content-center align-items-center min-vh-50">
        <div class="card" style="width: 18rem;">
            <img :src = "userImage" class="card-img-top" alt="User Icon">
            <div class="card-body">
                <h5 class="card-title">Username : <span class="text-primary">{{ user.username }}</span></h5>
                <p class="card-text">Role : <span class="text-primary">User</span></p>
                <a href="/private/project" class="btn btn-primary">Your Projects</a>
            </div>
        </div>
    </div>
</template>
<script>
import userImage from '../assets/eleve.png';
export default {
    name: 'home',
    props: {
        user: {}
    },
    data(){
        return {
            userImage
        }
    }
}
</script>