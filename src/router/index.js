import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/start',
    name: 'start',
    component: function () {
      return import(/* webpackChunkName: "start" */ '../views/Start.vue')
    }
  },
  {
    path: '/expressions',
    name: 'expressions',
    component: function () {
      return import(/* webpackChunkName: "expressions" */ '../views/Expressions.vue')
    }
  },
  {
    path: '/bindings',
    name: 'bindings',
    component: function () {
      return import(/* webpackChunkName: "bindings" */ '../views/Bindings.vue')
    }
  },
  {
    path: '/looping',
    name: 'looping',
    component: function () {
      return import(/* webpackChunkName: "looping" */ '../views/Looping.vue')
    }
  },
  {
    path: '/computed-properties',
    name: 'computed-properties',
    component: function () {
      return import(/* webpackChunkName: "computed-properties" */ '../views/ComputedProperties.vue')
    }
  },
  {
    path: '/conditional-rendering',
    name: 'conditional-rendering',
    component: function () {
      return import(/* webpackChunkName: "conditional-rendering" */ '../views/ConditionalRendering.vue')
    }
  },
  {
    path: '/events',
    name: 'events',
    component: function () {
      return import(/* webpackChunkName: "events" */ '../views/Events.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
