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
      
      'pages/user/assemble/assembleDetail',
      'pages/user/load_page/load_page',
      'pages/user/home/home',
      'pages/user/my/my',
      'pages/user/position/position',
      'pages/user/agreement/agreement',
      'page/user/assemble/assemble'
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "获取您的位置信息"
      }
    },
    subPackages: [{
        root: "pages/admin",
        pages: [
          'index/index',
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