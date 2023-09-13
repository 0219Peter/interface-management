import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import loginAcount from '../views/login/loginAcount.vue'
import registerAcount from '../views/login/registerAcount.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: loginAcount
  }, {
    path: '/register',
    name: 'register',
    component: registerAcount
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
