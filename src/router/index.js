import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home'
import Card from '../page/CardPage'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    name: 'card',
    path: '/card/:id',
    component: Card,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
