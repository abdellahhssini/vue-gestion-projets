<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <a class="navbar-brand" href="#">Project Management</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sign Up</h5>
              <form @submit.prevent="signup">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="email"
                    class="form-control"
                    id="username"
                    v-model="username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
                <div v-if="error" class="mt-2 alert alert-danger">{{ error }}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
</template>
<script>
import { registerUser } from '@/api/UserService';

export default {
    name: 'signup',
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
        async signup(){
            const response = await registerUser(this.username, this.password);
            console.log('Sign Up Succesfuly : ',response.data);
            this.$router.push('/');
        }
    },
}
</script>