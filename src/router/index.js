import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/404',  
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue') },  
  { path: '*', redirect: '/404' },  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Changelog.vue')
  },
  {
    path: '/cover-letter-generator',
    name: 'Cover Letter Generator',
    component: () => import(/* webpackChunkName: "about" */ '../views/CL-generator.vue')
  },
  {
    path: '/select-template',
    name: 'Select template',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectTemplate.vue')
  },
  {
    path: '/cv-generator/alea',
    name: 'Alea',
    component: () => import(/* webpackChunkName: "about" */ '../views/Template-Alea.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
