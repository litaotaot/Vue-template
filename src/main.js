import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router/router'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI, { size: window.innerWidth > 1366 ? 'medium' : 'mini' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
