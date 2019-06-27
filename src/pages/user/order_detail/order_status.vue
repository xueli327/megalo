
<template>
  <div class="order">
    <div class="message">
        <p class="status">待支付</p>
        <p class="time" v-if="!!countDownTimes">剩余时间</p>
    </div>
    <div class="text">
        根据不同的值显示不同的 {{countDownTimes}}
    </div>
    <div class="price">
        支付¥78.9
    </div>
  </div>
</template>
<style lang="scss">
.order {
  .message {
    display: flex;
    justify-content: space-between;
  }
}
</style>
<script>
import countDown from "@/mixins/countDown";
export default {
  mixins: [countDown],
  components: {},
  data() {
    return {
      active: 0,
      countDownTimes: ""
    };
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
  onShow() {
   //this.getCountDown("1561694268", "day");
  },
  onHide() {},
  onUnload() {},
  methods: {
    // getCountDown(timestamp, type) {
    //   let that = this;
    //   setInterval(function() {
    //     var nowTime = new Date();
    //     var endTime = new Date(timestamp * 1000);
    //     var t = endTime.getTime() - nowTime.getTime();
    //     var d = Math.floor(t / 1000 / 60 / 60 / 24);
    //     var hour = Math.floor((t / 1000 / 60 / 60) % 24);
    //     var min = Math.floor((t / 1000 / 60) % 60);
    //     var sec = Math.floor((t / 1000) % 60);
    //    if(t<0){
    //        that.countDownTimes=""
    //        return ;
    //    }
    //     if (hour < 10) {
    //       hour = "0" + hour;
    //     }
    //     if (min < 10) {
    //       min = "0" + min;
    //     }
    //     if (sec < 10) {
    //       sec = "0" + sec;
    //     }
    //     if (type === "noday") {
    //       this.countDownTimes = hour + "时" + min + "分" + sec + "秒";
    //     } else if (type === "day") {
    //       this.countDownTimes =
    //         d + "天" + hour + "时" + min + "分" + sec + "秒";
    //     }
    //   }, 1000);
    // }
  }
};
</script>

