import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/media',
    },
    {
      path: '/media',
      name: 'home',
      component: HomeView
    },
    {
      path: '/media/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/media/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    }
  ]
})

export default router
