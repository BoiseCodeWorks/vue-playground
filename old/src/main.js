import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePrism from 'vue-prism'

Vue.use(VuePrism)

import 'prismjs/themes/prism.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
