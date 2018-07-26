import Vue from 'vue'
import Router from 'vue-router'
import Jul3 from '@/components/Jul3'
import Jul4 from '../components/Jul4'
import Jul5 from '../components/Jul5'
import Jul7 from '../components/Jul7'
import Jul10 from '../components/Jul10'
import Jul11 from '../components/Jul11'
import Jul14 from '../components/Jul14'
import Jul26 from '../components/Jul26'


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
    },
    {
      path: '/Jul10',
      name: 'Jul10',
      component: Jul10
    },
    {
      path: '/Jul11',
      name: '/Jul11',
      component: Jul11
    },
    {
      path: '/Jul14',
      name: '/Jul14',
      component: Jul14
    },
    {
      path: '/Jul26',
      name: '/Jul26',
      component: Jul26
    }
  ]
})
