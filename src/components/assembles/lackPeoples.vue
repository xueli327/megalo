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
          <img src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
          <span class="tag">团长</span>
        </div>
        <div class="items">
          <img src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
          <span class="tag">团长</span>
        </div>
    </div>
  </div>
</template>
<script>
import countDown from "@/components/countDown";
export default {
  props:["fromPage"],
  data() {
    return {
      times: "1561626799",
      type: "noday",
    }
  },
  components:{
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
.lack_people{
  padding: 20px;
  box-sizing: border-box;
  .lack_people_top{
    margin-bottom: 10px;
    border-bottom: 2px solid #ccc;
  }
  .lack_people_list{  
      display: flex;
      .items{
        width: 80px;
        height: 80px;
        margin-right: 18px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .tag{
          position: absolute;
          height:35px;
          width: 80px;
          display: block;
          left: 0;
          bottom: 0;
          background: #ccc;
          font-size: 20px;
        }
      }
  }
}
</style>


