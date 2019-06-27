<template>
  <div class="btn_wrapper">
     <!-- <div class="btns">分享给好友</div> -->
     <!-- <div class="spell">
        <div class="btns oldprice">
          <span>¥399.9</span>
          <span class="title">原价购买</span>
        </div>
        <div class="btns">
          <span>¥399.9</span>
          <span class="title">立即开团</span>
        </div>
     </div> -->
     <!-- <div class="btns">立即开团</div> --><!-- 参团详情 -->    
     
     <div class="btns" @click="linktoOrder">立即参团</div><!-- 参团详情 -->
     
     <!-- <div class="btns">活动已结束</div> -->
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
    linktoOrder(){
      console.log(222);
      
       this.$router.push({
        path: "/pages/user/orders/orders"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.btn_wrapper{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #fff;
    .btns{
        width: 100%;
        height: 80px;
        background: red;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .spell{
      display: flex;
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        .title{
          font-size: 30px;
        }
      }
      .oldprice{
        background:coral;
      }
    }
}
</style>


