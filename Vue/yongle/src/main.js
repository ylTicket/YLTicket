import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// 引入全局样式
import './assets/reset.css'

new Vue({
  render: h => h(App)
}).$mount('#app')
