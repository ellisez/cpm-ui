import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/pages/Search.vue')
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('@/pages/Component.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
