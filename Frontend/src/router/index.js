import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home1',
    component: Home
  },
  {
    path: '/login',
    name: 'Login1',
    component: () => import(/* webpackChunkName: "home2" */ '../views/Login1.vue')
  },
  {
    path: '/profile',
    name: 'Profile1',
    component: () => import(/* webpackChunkName: "home2" */ '../views/Profile1.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router