import Vue from 'vue'
import router from 'src/route'
import App from './App.vue'
import { Field, Button, Header, Tabbar, TabItem, Cell, Radio, Checklist, Spinner, Swipe, SwipeItem } from 'mint-ui'
import store from 'src/store'
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
Vue.component(Spinner.name, Spinner)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
