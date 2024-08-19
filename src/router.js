import { createRouter, createWebHistory } from 'vue-router';
import lists from "./components/lists.vue";
import ListerProjects from './components/listerProjects.vue';

const routes = [
  {
    path: '/project',
    name: 'project',
    component: ListerProjects
  },
  {
    path: '/lists/:projectId',
    name: 'lists',
    component: lists
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
