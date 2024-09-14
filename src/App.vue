<template>
  <router-view />
</template>

<script>
import Login from './components/login.vue';
import router from './router';

export default {
  name: 'App',
  components:{
    Login
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
