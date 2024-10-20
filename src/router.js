import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;