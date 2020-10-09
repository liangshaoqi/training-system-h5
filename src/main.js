import Vue from 'vue'
import router from 'src/route'
import App from './App.vue'
import { Field, Button, Header, Tabbar, TabItem, Cell, Radio, Checklist } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/reset.css'

Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Cell.name, Cell)
Vue.component(Radio.name, Radio)
Vue.component(Checklist.name, Checklist)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
