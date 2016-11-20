import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
