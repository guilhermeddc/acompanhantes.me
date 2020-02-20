import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../views/Catalog.vue'
import Advertise from '../views/Advertise.vue'
import Cities from '../views/Cities.vue'
import Contact from '../views/Contact.vue'
import Models from '../views/Models.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:city',
    name: 'Catalog',
    component: Catalog,
    children: [
      {
        path: ':nome',
        name: 'Models',
        component: Models
      }
    ]
  },
  {
    path: 'anuncie',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
