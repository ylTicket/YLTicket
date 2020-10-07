import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false
import './assets/reset.css'


import moment from 'moment'
moment.locale('zh-cn');
Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
