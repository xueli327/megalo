import {
  mapGetters,
  mapMutations
} from 'vuex'
import {
  SET_APP_ID,
  SET_USER_INFO
} from '@/store/user'

export default {
  data() {
    return {
      user: {}
    }
  },
  computed: {
    ...mapGetters([
      'appid',
      'userinfo'
    ])
  },
  methods: {
    ...mapMutations({
      setAppId: SET_APP_ID,
      setUserInfo: SET_USER_INFO
    }),
    // 微信的登录
    wxLogin() {
      return new Promise((resolve, reject) => {
        wx.login({
          success: res => {
            console.log(res, '微信返回的信息')
            resolve(res)
          },
          fail: err => {
            reject(err)
          }
        })
      })
    },
    oAuth() {
      const code = this.wxLogin()
      code.then(res => {
        console.log(res)
      })
    }
  }
}