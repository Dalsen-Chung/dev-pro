// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'              //暂时用不上
import { Container, Main, Header, Footer, Tabs, TabPane, Table, TableColumn, Menu, MenuItem } from 'element-ui'
import axios from 'axios'
// import echarts from 'echarts'    //按需引入

Vue.config.productionTip = false
Vue.prototype.$http = axios
// Vue.prototype.$echarts = echarts
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
// Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
