import Vue from 'vue'
import router from 'src/route'
import App from './App.vue'
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
