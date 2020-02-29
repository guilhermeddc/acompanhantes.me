import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './plugins/api'

require('typeface-odibee-sans')

Vue.use(Axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
