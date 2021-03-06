import Vue from 'vue'
import App from './App'
import '../static/css/base.css'
import store from './store'

/* eslint-disable no-new */
//创建事件总线
Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
