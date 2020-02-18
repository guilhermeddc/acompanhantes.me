import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Advertise from '../views/Advertise.vue'
import Cities from '../views/Cities.vue'
import Contact from '../views/Contact.vue'
import Models from '../views/Models.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anuncie',
    name: 'Advertise',
    component: Advertise
  },
  {
    path: '/cidade',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/modelos',
    name: 'Models',
    component: Models
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
