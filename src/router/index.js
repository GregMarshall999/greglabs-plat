import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ContactPage from '@/views/ContactPage.vue'
import RelaysPage from '@/views/projects/RelaysPage.vue'
import medLevelRoutes from './med-level.routes'
import i18n, { STORAGE_KEY, syncDocumentLang } from '@/i18n'

const base = 'base'

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    meta: { projectGroup: base },
    component: HomePage
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { projectGroup: base },
    component: ContactPage
  },
  {
    path: '/projects/relays',
    name: 'relays',
    meta: { projectGroup: base },
    component: RelaysPage
  },
  ...medLevelRoutes
]

function withLocale(routes, locale) {
  if (locale === 'en') {
    return routes.map(r => ({
      ...r,
      meta: { ...r.meta, locale: 'en' }
    }))
  }
  return routes.map(r => ({
    ...r,
    path: r.path === '/' ? '/fr' : `/fr${r.path}`,
    name: `fr-${r.name}`,
    meta: { ...r.meta, locale: 'fr' }
  }))
}

const routes = [
  ...withLocale(baseRoutes, 'en'),
  ...withLocale(baseRoutes, 'fr')
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  const locale = to.meta.locale || 'en'
  i18n.global.locale.value = locale
  syncDocumentLang(locale)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale)
  }
})

export default router
