
<template>
  <div class="withdrawals">
    <div class="title">
        体现到
    </div>
    <div class="way">
        <img src="http://storagecdn.xuetangx.com/public_assets/xuetangx/course_introduction/20190627173915503362" alt="" >
        <div class="way_text">
            微信零钱
        </div>
    </div>
    <div class="handel">
      <div class="text">提现金额</div>
      <div class="enter">
        <span>¥</span>
        <input type="number" @input="changeEnter" v-model="enter" >
      </div>
      <div class="tips">
        
        <template v-if="!enter || enter == 0 ">
           <div class="sum">
            可提现6500元
           </div>
          <div class="full_withdrawal" @click="fullwithdrawal">
            全部提现
          </div>
        </template>
       <template v-if="enter < sum && enter > 0 ">
        额外扣除{{service_fee}}服务费（费率0.10%）
       </template>
      </div>
      <div class="err_tip" v-if='enter > sum'>
        输入金额超出零钱余额
      </div>
    </div>
    <button @click="Postwithdraw">确认提现</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      enter:'',
      sum: 500,
      service_fee:0
    };
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
    //输入框
    changeEnter(e) {
      this.enter <=  this.sum  ? this.serviceFeeFn() :  '';
      //console.log(this.enter);
    },
    //全部提现
    fullwithdrawal() {
      console.log("全部提现");
    },
    serviceFeeFn () {

    },
    Postwithdraw () {
      
    }
  }
};
</script>

<style lang="scss" scoped>
._img {
  width: 20px;
  height: 20px;
}
.withdrawals {
  font-family: PingFangSC-Medium;
  .way {
    display: flex;
    border: 1px solid red;
    border-right: none;
    border-left: none;
    padding: 0 14px;
    background: #fff;
    height: 40px;
    align-items: center;
    .way_text {
      font-family: PingFangSC-Medium;
      margin-left: 20px;
    }
  }
  .handel {
    padding: 0 14px;
    background: #fff;
    .enter {
      display: flex;
    }
  }
  .err_tip{
    color: red;
  }
  .tips {
    display: flex;
    justify-content: space-between;
  }
}
</style>
