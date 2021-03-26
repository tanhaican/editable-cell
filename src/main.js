import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

new Vue({
  render: h => h(App),
}).$mount('#app')
