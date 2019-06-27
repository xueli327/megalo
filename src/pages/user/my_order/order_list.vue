
<template>
  <div class="order-wrap">
    <div class="list">
        <div class="name">
            <p>
                namenamenamenamenamename
            </p>
            <p class="status">

            </p>
         </div>
            <div class="card">
                <div class="left">
                    <img src="" alt="">
                </div>
                <div class="right">
                    <p class="name">商品名称</p>
                    <div class="right_bom">
                        <p>价钱</p>
                        <p>几人团</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <slot :status="status" name="user"> </slot>
            </div>
       
    </div>
  </div>
</template>
<style lang="scss">
.order-wrap {
  .card {
    display: flex;
    flex-direction: row;
    width: 750px;
    height: 200px;
    .left {
      width: 200px;
    }
    .right {
      flex: 1;
      .right_bom {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .bottom{
      width: 750px;
      height: 200px;
      background: red;
  }
}
</style>
<script>
export default {
  data() {
    return {
      status: 0,
      msg: 1,
      imageURL: "https://www.baidu.com"
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

