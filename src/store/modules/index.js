import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import authority from './modules/authority'

export default new Vuex.Store({
  modules: {
    authority
  }
})
