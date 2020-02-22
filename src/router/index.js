import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../views/Catalog.vue'
import Advertise from '../views/Advertise.vue'
import Terms from '../views/Terms.vue'
import Contact from '../views/Contact.vue'
import Models from '../views/Models.vue'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:city',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/:city/:id',
    name: 'Models',
    component: Models
  },
  {
    path: 'anuncie',
    name: 'Advertise',
    component: Advertise
  },
  {
    path: '/termos-de-uso',
    name: 'Terms',
    component: Terms
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
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
