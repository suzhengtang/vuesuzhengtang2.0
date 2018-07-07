import Vue from 'vue'
import Router from 'vue-router'
import Jul3 from '@/components/Jul3'
import Jul4 from '../components/Jul4'
import Jul5 from '../components/Jul5'
import Jul7 from '../components/Jul7'


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
    },
    {
      path: '/Jul5',
      name: 'Jul5',
      component: Jul5
    },
    {
      path: '/Jul7',
      name: 'Jul7',
      component: Jul7
    }
  ]
})
