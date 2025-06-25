import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ComingSoonView from '../views/ComingSoonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/maintenance',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'coming-soon',
      component: ComingSoonView,
    },
  ],
})

export default router
