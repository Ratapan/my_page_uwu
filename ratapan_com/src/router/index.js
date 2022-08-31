import { createRouter, createWebHistory } from 'vue-router'
import Home from './home_router'
import Blog from './blog_router'
import Tools from './tools_router'
import About from './about_router'
import Service from './service_router'

const routes = [
  ...Home.HomeList,
  ...Blog.BlogList,
  ...Tools.ToolList,
  ...About.AboutList,
  ...Service.ServiceList
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
