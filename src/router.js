import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import LoginPage from "./components/LoginPage.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";


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
  },
  {
    name: 'LoginPage',
    component: LoginPage,
    path: '/login'
  },
  {
    name: 'AddRestaurant',
    component: AddRestaurant,
    path: '/add'
  },
  {
    name: 'UpdateRestaurant',
    component: UpdateRestaurant,
    path: '/update'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;