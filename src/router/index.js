import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import RelaysPage from '@/views/projects/RelaysPage.vue'
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
  {
    path: '/projects/relays',
    name: 'relays',
    meta: {
      projectGroup: base,
    },
    component: RelaysPage
  }, 
  ...medLevelRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (e.g., browser back/forward), use it
    if (savedPosition) {
      return savedPosition;
    }
    // Otherwise, scroll to top
    return { top: 0 };
  }
})

export default router 