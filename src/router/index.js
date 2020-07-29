import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Compare from '../views/Compare.vue'
import ContactUs from '../views/ContactUs'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  },
  {
    path: '/contactUs',
    name: 'contact-us',
    component: ContactUs
  }
]

const router = new VueRouter({
  routes
})

export default router
