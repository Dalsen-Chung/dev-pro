// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'              //暂时用不上
import ElementUI from 'element-ui'   //按需引入
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from 'echarts'    //按需引入

Vue.config.productionTip = false
Vue.prototype.$http = axios
// Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
// Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
