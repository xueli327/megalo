
<template>
  <div class="app">
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>
<script>
import tabBar from "@/components/adminTabbar";

export default {
  components: {
    tabBar
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created() {
    wx.login({
      success(res) {
        console.log(res, "res");
      }
    });
    console.log("Page [my] Vue created");
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount() {
    console.log("Page [my] Vue beforeMount");
  },
  mounted() {
    console.log("Page [my] Vue mounted");
  },
  onLoad(options) {
    // Do some initialize when page load.
    console.log("Page [my] onLoad");
  },
  onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload() {
    // Do something when page close.
    console.log("Page [my] onUnload");
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    linkto(e) {
      let id = e.currentTarget.id;
      this.$router.push({ path: "/pages/user/detail/detail", query: { id } });
    }
  }
};
</script>

<style lang="scss" >
.app {
  .custom {
    margin-bottom: 20px;
  }
  .tag_class {
    background: green;
    color: red;
  }
  .title_hq {
    color: pink;
    font-size: 40rpx;
  }
  .line {
    height: 30rpx;
  }
  .price {
    color: pink;
    font-size: 50rpx;
  }
}
</style>
