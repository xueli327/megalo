<template>

  <div class="lack_people">
    <!-- 拼团显示 -->
    <!--<div class="lack_people_top">
      <span>5人团还差2人， <countDown :times='times' :type='type'></countDown></span>
      <span>该团已满，请参与正在进行的拼团或立即开团</span>
      <span>拼团失败，请参与正在进行的拼团或立即开团</span>
      <span>该团已满，活动已结束</span>
    </div> -->
    <!-- 确认订单显示  -->
    <div class="lack_people_top" v-if="fromPage==='ordersPage'"> 
      <span>【正在开团】立即支付，即可开团成功</span> 
    </div>
    <div class="lack_people_list">
        <div class="items">
          <img class="item_img" src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
          <span class="tag">待支付</span>
          <img class="group_leader" src="../../static/imgs/tuanzhang@2x.png" alt="">
        </div>
        <div class="items">
          <img class="item_img" src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
        </div>
    </div>
  </div>
</template>
<script>
import countDown from "@/components/countDown";
export default {
  props: ["fromPage"],
  data() {
    return {
      times: "1561626799",
      type: "noday"
    };
  },
  components: {
    countDown
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
.lack_people {
  padding: 0px 14px 14px 14px;
  box-sizing: border-box;
  height: 105px;
  background: #fff;
  margin-bottom: 8px;
  .lack_people_top {
    height: 55px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
  }
  .lack_people_list {
    display: flex;
    .items {
      margin-right: 14px;
      width: 36px;
      height: 36px;
      position: relative;
      .item_img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      .group_leader {
        width: 12px;
        height: 16px;
        position: absolute;
        right: -4px;
        top: -4px;
      }
      .tag {
        position: absolute;
        width: 36px;
        height: 14px;
        display: block;
        left: 0;
        bottom: 0;
        background: #f07e1e;
        border-radius: 0px 0px 3px 3px;
        font-size: 9px;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>


