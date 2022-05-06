import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateCustomer from '../views/CreateCustomer.vue'
import CustomerDetails from '../views/CustomerDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: CreateCustomer
  },
  {
    path: '/customer/:id',
    name: 'customerDetails',
    component: CustomerDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
