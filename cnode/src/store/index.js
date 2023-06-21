import Vue from 'vue'
import Vuex from 'vuex'
import detail from './detail'
import home from './home'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    user
  }
})
