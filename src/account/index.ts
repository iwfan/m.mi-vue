import Vue from 'vue'
import Account from './Account.vue'
import 'normalize.css'
import '@/assets/css/reset.styl'
Vue.config.productionTip = false

new Vue({
  render: h => h(Account)
}).$mount('#app')
