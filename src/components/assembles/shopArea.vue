<template>
  <div class="shops_area">
    <div class="shop_name">奥利菲斯轻奢皮肤管理机构（方庄店）</div>
    <div class="shop_address">地址：朝阳区贝克大街221B号</div>
    <div class="btns">
        <button size="small" type="default">门店地图</button>
        <button size="small" type="default">商家电话</button>
    </div>
  </div>
</template>
<script>
//fromPage===ordersPage确认订单
export default {
  props:["fromPage"],
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
  methods: {}
};
</script>
<style lang="scss" scoped>
.shops_area {
  padding: 20px;
  box-sizing: border-box;
  .shop_name{

  }
  .shop_address{

  }
  .btns{
      display: flex;
      button{
          width: 200px;
      }
  }
}
</style>


