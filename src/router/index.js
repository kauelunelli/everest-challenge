import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateUser from '../views/CreateUser.vue'
import UserDetails from '../views/UserDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'cadastro',
    component: CreateUser
  },
  {
    path: '/users/:id',
    name: 'userDetails',
    component: UserDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
