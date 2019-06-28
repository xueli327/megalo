<config>
{
  "usingComponents": {
    "van-dialog": "../../../native/vant/dialog/index"
  }
}
</config>
<template>
<div class="box">
    <van-dialog id="van-dialog" />
    <div class="button_wrap">
        <button class="cancel" @click="cancel">取消订单</button>
        <button class="pay" @click="pay">立即支付</button>
        <!-- <van-dialog id="van-dialog"/> -->
    </div>
</div>
  
</template>
<style lang="scss">
.button_wrap {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  button {
    flex: 1;
  }
}
</style>
<script>
import Dialog from "../../../native/vant/dialog/dialog";
export default {
  components: {},
  data() {
    return {};
  },
  beforeCreate() {},
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
    cancel(e) {
      Dialog.confirm({
        title: "取消订单",
        message: "订单取消后无法恢复，确定要取消订单？",
        asyncClose: true
      })
        .then(() => {
          //   setTimeout(() => {
          //     Dialog.close();
          //   }, 1000);
        })
        .catch(() => {
          Dialog.close();
        });
    },
    postCancel() {},
    pay () {
        
    }
  }
};
</script>

