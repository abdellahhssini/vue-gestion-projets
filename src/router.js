import { createRouter, createWebHistory } from 'vue-router';
import lists from "./components/lists.vue";
import ListerProjects from './components/listerProjects.vue';
import Page from './views/page.vue';
import Login from './components/login.vue';
import Signup from './components/signup.vue';
import Home from './views/home.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/private',
    component: Page,
    children: [
      {
        path: '',
        redirect: ''
      },
      {
        path: 'home',
        name: 'home',
        props: (route) => ({user: JSON.parse(localStorage.getItem('user'))}),
        component: Home
      },
      {
      path: 'project',
      name: 'project',
      props: (route) => ({userId: JSON.parse(localStorage.getItem('user'))._id}),
      component: ListerProjects
    },
    {
      path: 'lists/:projectId',
      name: 'lists',
      component: lists
    }] 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
