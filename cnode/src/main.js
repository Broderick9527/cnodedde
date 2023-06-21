// 进度条样式
import * as API from '@/api/request.js'
import '@/assets/js/flexible.js'
import '@/utils/element-ui'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 挂载请求到Vue原型上
Vue.prototype.$API = API

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
