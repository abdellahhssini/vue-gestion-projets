<template>
  <!--navbar navbar-expand-lg bg-body-tertiary -->
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <a class="navbar-brand" href="#">Project Management</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project">Projects</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </body>
    
</template>

<script>
export default {
  name: 'App',
  
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
