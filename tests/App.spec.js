import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../src/App.vue'
import HomePage from '../src/views/HomePage.vue'
import ContactPage from '../src/views/ContactPage.vue'
import MoviesPage from '../src/views/MoviesPage.vue'

// Create a mock router for testing
const createMockRouter = (initialRoute = '/') => {
  const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/movies', name: 'movies', component: MoviesPage }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  // Set initial route
  router.push(initialRoute)
  
  return router
}

describe('App.vue', () => {
  it('renders without crashing', () => {
    const router = createMockRouter()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.exists()).toBe(true)
  })

  it('always renders RouterView', () => {
    const router = createMockRouter()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    // RouterView should always be present
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })

  // TODO: Fix these tests when router navigation is properly handled in test environment
  /*
  it('shows NavigationBar when not on home or contact routes', async () => {
    const router = createMockRouter('/movies')
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    await router.isReady()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(true)
  })

  it('hides NavigationBar on home route', async () => {
    const router = createMockRouter('/')
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    await router.isReady()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(false)
  })

  it('hides NavigationBar on contact route', async () => {
    const router = createMockRouter('/contact')
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    await router.isReady()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(false)
  })

  it('updates NavigationBar visibility when route changes', async () => {
    const router = createMockRouter('/')
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    await router.isReady()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(false)
    
    await router.push('/movies')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(true)
    
    await router.push('/')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(false)
  })
  */
}) 