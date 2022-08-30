import { createRouter, createWebHistory } from 'vue-router'
import Home from './home_router'
import Service from './service_router'

const routes = [
  ...Home.HomeList,
  ...Service.ServiceList,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
