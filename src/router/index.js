import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(path) {
  return () => import(`../pages/${path}`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadPage("Home.vue")
  },
  {
    path: '/expressions',
    name: 'expressions',
    component: loadPage("Expressions.vue")
  },
  {
    path: '/bindings',
    name: 'bindings',
    component: loadPage("Bindings.vue")
  },
  {
    path: '/looping',
    name: 'looping',
    component: loadPage("Looping.vue")
  },
  {
    path: '/computed-properties',
    name: 'computed-properties',
    component: loadPage("ComputedProperties.vue")
  },
  {
    path: '/conditional-rendering',
    name: 'conditional-rendering',
    component: loadPage("ConditionalRendering.vue")
  },
  {
    path: '/events',
    name: 'events',
    component: loadPage("Events.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
