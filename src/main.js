import Vue from 'vue'
import App from './App.vue'
import ElementUI from './element/index';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/common/common.css'//引入全局通用样式

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')