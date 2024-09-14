<template>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <a class="navbar-brand" href="#">Project Management</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'project'}">Projects</router-link>
            </li>
          </ul>
          <button @click="logout" class="btn btn-outline-light ml-auto justify-content-end">Logout</button>
        </div>
      </nav>
      <router-view />
    </body>
      
  </template>
  
  <script>
  export default {
    name: 'page',
    data() {
      return {
        user: {}
      };
    },
    created(){
      const userData = JSON.parse(localStorage.getItem('user'));
      if(userData){
        this.user = userData;
      }
    },
    methods: {
      logout() {
        localStorage.removeItem("user");
        this.user = {};

        this.$router.push({ name: "login" });
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #295173;
    margin-top: 60px;
  }
  
  body {
    padding-top: 35px; /* Padding to offset the fixed navbar */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .navbar-brand {
    margin-left: 20px; /* Ajustez la valeur selon l'espace que vous souhaitez */
  }
  
  </style>
  