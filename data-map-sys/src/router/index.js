import Vue from 'vue'
import Router from 'vue-router'
import DataCenter from '@/pages/DataCenter'
import PaymentBusiness from '@/pages/pay/PaymentBusiness'
import SmartCity from '@/pages/city/SmartCity'
import IdcBusiness from '@/pages/idc/IdcBusiness'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DataCenter,
      children: [
        {
          path: '/',
          name: 'payment-business',
          component: PaymentBusiness
        },
        {
          path: 'payment-business',
          component: PaymentBusiness
        },
        {
          path: 'smart-city',
          name: 'smart-city',
          component: SmartCity
        },
        {
          path: 'idc-business',
          name: 'idc-business',
          component: IdcBusiness
        }
      ]
    }
  ]
})
