<template>
  <div class="shops_area">
    <div class="shop_name">奥利菲斯轻奢皮肤管理机构（方庄店）</div>
    <div class="shop_address">地址：朝阳区贝克大街221B号</div>
    <div class="btns">
        <div><img src="../../static/imgs/icon-dizhi@2x.png" alt="">门店地图</div>
        <div><img src="../../static/imgs/icon-phone@2x.png" alt="">商家电话</div>
    </div>
  </div>
</template>
<script>
//fromPage===ordersPage确认订单
export default {
  props: ["fromPage"],
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
.shops_area {
  padding: 14px;
  box-sizing: border-box;
  height: 112px;
  background: #fff;
  .shop_name {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .shop_address {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    margin-bottom: 8px;
  }
  .btns {
    display: flex;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    div {
      width: 75px;
      height: 24px;
      margin-right: 14px;
      border-radius: 3px 4px 4px 4px;
      border: 1px solid rgba(232, 232, 232, 1);
      display: flex;
      align-items: center;
      padding-left: 4px;
      box-sizing: border-box;
      img{
        margin-right: 4px;
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>


