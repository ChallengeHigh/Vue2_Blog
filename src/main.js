import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.use(ElementUI)

import axios from 'axios'
// 配置axios基本请求路径
// axios.defaults.baseURL = 'https://api.aixue21.com'
axios.defaults.baseURL = 'http://local.api.aixue21.com'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
