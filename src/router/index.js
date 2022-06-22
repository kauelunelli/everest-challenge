import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/UsersList.vue'
import CreateUser from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'users',
    component: Home
  },
  {
    path: '/register',
    name: 'cadastro',
    component: CreateUser
  },
]

const router = new VueRouter({
  routes
})

export default router
