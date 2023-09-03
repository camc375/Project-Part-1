import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aqualink',
      name: 'aqualink',
      component: () => import('../views/AqualinkView.vue')
    },
    {
      path: '/blackburn',
      name: 'blackburn',
      component: () => import('../views/BlackburnView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/StoreView.vue')
    }
  ]
})

export default router
