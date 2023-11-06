import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/blog',
      name: 'blog',
      component: HomeView
    },
    {
      path: "/blog/:id",
      name: 'blogPostView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogPostView.vue'),
    },
    {
      path: "/editor",
      name: 'blogEditorView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogEditorView.vue'),
    },
  ]
})

export default router
