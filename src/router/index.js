import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from '../views/Resume.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'resume',
    component: Resume
  },
]

const router = new VueRouter({
  routes
})

export default router
