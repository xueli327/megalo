<config>
{
  "usingComponents": {
    "van-tab": "../../../native/vant/tab/index",
    "van-tabs": "../../../native/vant/tabs/index"
  },
   navigationBarTitleText:'我的订单'
}
</config>
<template>
  <div class="order-wrap">
     <van-tabs :active="active"  bind:change="onChange">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<style lang="scss">
</style>
<script>
import tabs from '@/components/tabs'
//console.log(tabs)
export default {
  components:{
   // tabs
  },
  data() {
    return {
      active:1
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
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {}
};
</script>

