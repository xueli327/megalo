<config>{
  "usingComponents": {
    "van-icon": "../../native/native/vant/icon/index",
  }
}
</config>
<template>
  <div class="play_way">
    <div class="play_way_name"> 
      <span>拼团玩法</span>
      <span class="more" @click="onOpenRole">详情<van-icon name="arrow" color="#1F1F1F" size="12px"/></span>
    </div>
    <div class="step">
      <div class="step_num">
        <div class="num">1</div>
        <div class="line"></div>
        <div class="num">2</div>
        <div class="line"></div>
        <div class="num">3</div>
      </div>
      <div class="step_bot">
        <div>支付开团/参团</div>
        <div>邀请好友参团</div>
        <div>人满成团,不满退款</div>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {
    onOpenRole() {
     this.$emit('onOpenRole')
    },
    onClose() {}
  }
};
</script>
<style lang="scss" scoped>
.play_way {
  height: 129px;
  background: #fff;
  padding: 0 14px 14px 14px;
  box-sizing: border-box;
  .play_way_name {
    height: 49px;
    font-size: 15px;
    font-weight: 500;
    align-items: center;
    .more {
      color: #9b9b9b;
      font-size: 12px;
      display: flex;
      align-items: center;
      // i{
      //   color: #1F1F1F;
      //   font-size: 18px;
      //   margin-left: 10px;
      // }
    }
  }
}
.step {
  padding: 13px 15px 12px 15px;
  box-sizing: border-box;
  width: 100%;
  height: 66px;
  border-radius: 5px;
  background: #f5f5f5;
  .step_num,
  .step_bot {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .step_bot {
    margin-top: 9px;
    font-size: 11px;
  }
  .step_bot div {
    width: 33%;
  }
  .num {
    width: 16px;
    height: 16px;
    background: #232628;
    font-size: 12px;
    color: #fff;
    border-radius: 100%;
    line-height: 16px;
    text-align: center;
  }
  .line {
    width: 104px;
    height: 3px;
    background: #232628;
  }
}
</style>


