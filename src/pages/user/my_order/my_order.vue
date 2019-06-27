<config>
{
  "usingComponents": {
    "van-tab": "../../../native/vant/tab/index",
    "van-tabs": "../../../native/vant/tabs/index",
    "van-card": "../../../native/vant/card/index"
  },
   navigationBarTitleText:'我的订单'
}
</config>
<template>
  <div class="order-wrap">
     <van-tabs :active="active"  @change="onChange">
        <van-tab title="全部">
          <order-list>
            <template #user="{status}">
              <!-- <button v-if="status ==1 ">aaaa</button>
              <button v-if="status ==0 ">bbbb</button> -->
            </template>
          </order-list>
        </van-tab>
        <van-tab title="待支付">
          <order-list>
            <template #user="{status}">
               <button >待支付</button>
              <!-- <button v-if="status ==1 ">aaaa</button>
              <button v-if="status ==0 ">bbbb</button> -->
            </template>
          </order-list>
        </van-tab>
        <van-tab title="拼团中">
          <order-list>
            <template #user="{status}">
               <button >拼团中</button>
              <!-- <button v-if="status ==1 ">aaaa</button>
              <button v-if="status ==0 ">bbbb</button> -->
            </template>
          </order-list>
        </van-tab>
        <van-tab title="已成团">
          <order-list>
            <template #user="{status}">
              <button >已成团</button>
              <!-- <button v-if="status ==1 ">aaaa</button>
              <button v-if="status ==0 ">bbbb</button> -->
            </template>
          </order-list>
        </van-tab>
        <van-tab title="已退款">
          <order-list>
            <template #user="{status}">
              <button >已退款</button>
              <!-- <button v-if="status ==1 ">aaaa</button>
              <button v-if="status ==0 ">bbbb</button> -->
            </template>
          </order-list>
        </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="scss">
</style>
<script>
import orderList from "./order_list";
export default {
  components: {
    orderList
  },
  data() {
    return {
      active: 0
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
  methods: {
    onChange(e) {
      console.log(e);
    }
  }
};
</script>

