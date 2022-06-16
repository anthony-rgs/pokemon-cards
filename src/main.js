import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'

const vueApp = createApp(App)

vueApp.use(Router)
vueApp.mount('#app')
