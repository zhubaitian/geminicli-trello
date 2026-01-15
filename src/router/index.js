import { createRouter, createWebHistory } from 'vue-router'
import Board from '../components/Board.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Board',
    component: Board
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
