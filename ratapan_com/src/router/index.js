import { createRouter, createWebHistory } from 'vue-router'
import Init from './routes/init_router'
import Home from './routes/home_router'
import Blog from './routes/blog_router'
import Tools from './routes/tools_router'
import About from './routes/about_router'
import Service from './routes/service_router'

const routes = [
  ...Init.InitList,
  ...Home.HomeList,
  ...Blog.BlogList,
  ...Tools.ToolList,
  ...About.AboutList,
  ...Service.ServiceList,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
