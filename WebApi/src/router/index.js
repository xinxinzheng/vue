import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Index from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }, 
    {
        path: '/index',
        component: resolve => require(['../components/index.vue'], resolve)
    },
    {
        path: '/angular-api',
        component: resolve => require(['../components/angular-api/index.vue'], resolve)
    }
  ]
})
