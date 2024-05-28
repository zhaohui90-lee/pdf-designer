import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'canvas',
      component: () => import('../views/CanvasView.vue')
    },
    {
      path: '/render',
      name: 'render',
      component: () => import('../views/RenderView.vue')
    }
  ]
})

export default router
