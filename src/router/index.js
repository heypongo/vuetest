import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js';
import Home from '../views/Home.vue'
import Restaurants from '../views/Restaurants.vue'
import RestaurantDetails from '../views/RestaurantDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/restaurants",
      name: "Restaurants",
      component: Restaurants,
    },
    {
      path: "/restaurant/:restaurantId",
      name: "restaurantDetails",
      component: RestaurantDetails,
    },
  ]
})

export default router
