import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import store from './store'
import router from './router/router'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import App from './App.vue'

import './assets/icons/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI, { size: window.innerWidth > 1366 ? 'medium' : 'mini' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
