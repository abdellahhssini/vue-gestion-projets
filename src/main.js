import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import draggable from "vuedraggable"

const app = createApp(App);

app.component('draggable', draggable);

app.use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
