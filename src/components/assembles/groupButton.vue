<template>
  <div class="btn_wrapper">
     <!-- <div class="btns">分享给好友</div> -->
     <div class="spell">
        <div class="btns oldprice">
          <span class="number">¥399.9</span>
          <span class="title" @click="linktoOrder('ORIGINALBUY')">原价购买</span>
          <!-- 跳转确认订单 -->
        </div>
        <div class="btns" @click="onOpenGroup">
          <span class="number">¥79.99</span>
          <span class="title">立即开团</span>
        </div>
     </div>
     <!-- <div class="btns">立即开团</div> --><!-- 参团详情 -->    
     
     <!-- <div class="btns" @click="linktoOrder('JOINGROUP')">立即参团</div> --> <!-- 跳转确认订单 -->
     
     
     <!-- <div class="over">活动已结束</div> -->
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
  methods: {
    linktoOrder(val) {
      this.$router.push({
        path: `/pages/user/orders/orders?fromBtnType=${val}`
      });
    },
    onOpenGroup(){
      this.$emit("onOpenGroup")
    }
  }
};
</script>
<style lang="scss" scoped>
.btn_wrapper {
  width: 100%;
  height: 46px;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #fff;
  .btns {
    width: 100%;
    height: 100%;
    background: #f07e1e;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
  }
  .spell {
    display: flex;
    height: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
    }
    .oldprice {
      background: #f8b62d;
    }
    .number {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  .over {
    background: #e8e8e8;
    color: #9b9b9b;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>


