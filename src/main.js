import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import MegaloRouterPatch from 'megalo-router-patch'
import http from './utils/request'
Vue.use(MegaloRouterPatch)
Vue.use(VHtmlPlugin)
Vue.use(Vuex)
Vue.prototype.$flyio = http
const store = require('./store').default
Vue.prototype.$store = store
const app = new Vue(App)

app.$mount()
export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/user/load_page/load_page',
      'pages/user/order_detail/order_detail',
      'pages/user/my_order/my_order',
      'pages/user/home/home',
      'pages/user/my/my',
      'pages/user/position/position',
      'pages/user/agreement/agreement',
      'pages/user/assemble/assemble',
      'pages/user/assemble/assembleDetail',
      'pages/user/orders/orders'
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "”美小智“要获取您的地理位置，是否允许？" 
      }
    },
    subPackages: [{
        root: "pages/admin",
        pages: [
          'index/index',
          'my_center/my_center',
          'merchant_wallet/merchant_wallet',
          'withdrawals/withdrawals',
          'withdrawals_detail/withdrawals_detail'
        ]
      }

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo project',
      navigationBarTextStyle: 'black'
    }
  }
}