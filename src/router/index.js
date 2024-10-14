import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//  view means `pages` like in `next.`js

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
