import Vue from 'vue'
import Account from './Account.vue'
import 'normalize.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(Account)
}).$mount('#app')
