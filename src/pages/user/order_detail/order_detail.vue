<config>
{
  "usingComponents": {
    "van-card": "../../../native/vant/card/index"
  },
   navigationBarTitleText:'订单详情'
}
</config>
<template>
  <div class="order-detail">
    <orderStatus></orderStatus>
    <group></group>
    <goods></goods>
    <contactInformation></contactInformation>
    <businessInformation></businessInformation>
    <orderMessage></orderMessage>
    <div class="group">
        <button>取消订单</button>
        <button>立即支付</button>
    </div>
    <div class="group">
        <button open-type="share">邀请好友参团</button>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import businessInformation from "./business_information";
import group from "./group";
import goods from "./goods";
import contactInformation from "./contact_information";
import orderMessage from "./order_message";
import orderStatus from "./order_status";

export default {
  components: {
    businessInformation,
    contactInformation,
    orderMessage,
    orderStatus,
    group
  },
  data() {
    return {
      active: 0
    };
  },
  beforeCreate() {},
  onShareAppMessage(res) {
       return {
      title: '我是重新获取的名字',
      path: '/page/user?id=123',
      imageUrl: 'https://storagecdn.xuetangx.com/public_assets/xuetangx/course_introduction/20190522143446973409'
    }
    console.log("分享啦");
  },
  created() {
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount() {
    console.log("Page [my] Vue beforeMount");
  },
  mounted() {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {
    onChange(e) {
      console.log(e);
    }
  }
};
</script>

