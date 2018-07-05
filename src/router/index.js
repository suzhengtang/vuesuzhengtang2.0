import Vue from 'vue'
import Router from 'vue-router'
import Jul3 from '@/components/Jul3'
import Jul4 from '../components/Jul4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jul3',
      component: Jul3
    },
    {
      path: '/Jul4',
      name: 'Jul4',
      component: Jul4
    }
  ]
})
