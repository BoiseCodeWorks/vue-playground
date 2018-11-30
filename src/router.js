import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: function () {
        return import(/* webpackChunkName: "start" */ './views/Start.vue')
      }
    },
    {
      path: '/expressions',
      name: 'expressions',
      component: function () {
        return import(/* webpackChunkName: "expressions" */ './views/Expressions.vue')
      }
    },
    {
      path: '/bindings',
      name: 'bindings',
      component: function () {
        return import(/* webpackChunkName: "bindings" */ './views/Bindings.vue')
      }
    }
  ]
})
