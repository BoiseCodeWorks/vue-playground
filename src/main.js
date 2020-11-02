import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'

createApp(App).use(router).use(VuePrism).mount('#app')
