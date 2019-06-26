<config>
{
  "usingComponents": {
    "van-loading": "../../native/vant/loading/index",
    "van-button": "../../native/vant/button/index",
    "van-popup": "../../native/vant/popup/index"
  },
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTitleText": "加载中...",
}
</config>
<template>
  <div class="app">
    <div v-show="flag">
      <van-loading type="spinner" size="50px" />
    </div>
    <div v-show="!flag">
      <van-popup :show="!flag">
       <div class="content">
            登录后即可操作
        <van-button size="large" type="info" open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">微信登录</van-button>
       </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import login from "@/mixins/login";
export default {
  mixins: [login],
  data() {
    return {
      flag: true
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    const that = this;
    const accountInfo = wx.getAccountInfoSync();
    this.setAppId(accountInfo.miniProgram.appId);
    // 如果store中存在userinfo，不再执行下面的任务
    wx.getSetting({
      success(res) {
        if (!res.authSetting["scope.userInfo"]) {
          that.flag = !that.flag;
        } else {
          //if (that.userinfo) {
            that.$router.push({ path: '/pages/home/home', reLaunch: true })
           // return;
          //}
        }
      }
    });
  },
  onLoad(options) {
    
  },
  onReady() {},
  onShow() {
    console.log("Page [my] onShow");
  },
  onHide() {
    console.log("Page [my] onHide");
  },
  onUnload() {},
  methods: {
    bindGetUserInfo (e) {
      const { userInfo } = e.detail
      if(userInfo){
        this.oAuth()
      }
    }
  }
};
</script>

<style lang="scss" >
.app {
  text-align: center;
  margin-top: 290rpx;
  .content {
    padding: 10rpx;
    background: #fff;
  }
}
</style>
