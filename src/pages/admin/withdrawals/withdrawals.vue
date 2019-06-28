
<template>
  <div class="withdrawals">
    <div class="title">
        体现到
    </div>
    <div class="way">
        <img src="" alt="">
        <div class="way_text">
            微信零钱
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  data() {
    return {};
  },
  beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created() {
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
    
  }
};
</script>

<style lang="scss" scoped>
.withdrawals{
    .way{
        display: flex;
        border:1px 0 1px 0 solid red;
        img{
            width: 20px;
            height: 20px;
        }
        .way_text{
            margin-left: 20px;
        }
    }
}
</style>
