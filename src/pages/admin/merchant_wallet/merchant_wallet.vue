<config>
{
  "usingComponents": {
     "van-icon": "../../../native/vant/icon/index",
     "van-popup": "../../../native/vant/popup/index"
  },
   navigationBarTitleText:"商家钱包",
   backgroundColor:'#F5F5F5'
}
</config>
<template>
  <div class="merchant_wallet">
    <div class="top">
        <div class="account_balance">
            账户余额（元）
        </div>   
        <div class="money">
            111100
        </div>
    </div>
    <div class="group" v-for="item in text" :key="item" @click="linkto(item)">
       <div class="text">
           {{item.name}}
       </div>
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
    </div>
    <!-- <div class="group">
       <div class="text">
           提现
       </div>
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
    </div>
      <div class="group">
        <div class="text">
           交易记录
        </div>
         <van-icon name="arrow" color="#1F1F1F" size="12px"/>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: [
        {
          name: "提现",
          path: ""
        },
        {
          name: "交易记录",
          path: ""
        }
      ]
    };
  },
  beforeCreate() {},
  created() {
    console.log("Page [my] Vue created");
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount() {},
  mounted() {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},

  methods: {
    linkto(d) {
        console.log(d,'dddddd')
    }
  }
};
</script>

<style lang="scss" scoped>
.merchant_wallet {
  .top {
    background: #fff;
    text-align: center;
    margin-bottom: 10px;
    .account_balance {
    }
    .money {
    }
  }
  .group {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 0 14px;
    margin-bottom: 10px;
  }
}
</style>
