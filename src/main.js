import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import { Message } from 'element-ui'
// import { Button } from 'element-ui';
// Vue.use(Button)
Vue.prototype.$Message = Message;


Vue.config.productionTip = false
//修复路由重复点击报错问题

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
