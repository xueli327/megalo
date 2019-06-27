<template>
  <div class="play_way">
    <div class="play_way_name"> 
      <span>拼团玩法</span>
      <span>详情 ></span>
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
    return {};
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.step {
  padding: 30px 0;
  .step_num,
  .step_bot {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
  }
  .step_bot div {
    width: 33%;
  }
  .num {
    margin: 0 20px;
  }
  .line {
    width: 200px;
    height: 4px;
    background: #ccc;
  }
}
</style>


