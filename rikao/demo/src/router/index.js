/*
 * @Author: your name
 * @Date: 2020-10-16 08:10:40
 * @LastEditTime: 2020-10-16 08:16:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rikao\demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/list',
    name:'List',
    component:()=>import('../views/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
