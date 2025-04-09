import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'
import CountdownPage from '../views/CountdownPage.vue'
import ShoppingCartPage from '../views/ShoppingCartPage.vue'
import CustomDirectivePage from '../views/CustomDirectivePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetailsPage,
    props: true
  }, 
  {
    path: '/countdown',
    name: 'countdown',
    component: CountdownPage
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: ShoppingCartPage
  },
  {
    path: '/custom-directive',
    name: 'custom-directive',
    component: CustomDirectivePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 