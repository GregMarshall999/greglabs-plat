import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import medLevelRoutes from './med-level.routes'

const base = 'base';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      projectGroup: base,
    },
    component: HomePage
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      projectGroup: base,
    },
    component: ContactPage
  }, 
  ...medLevelRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 