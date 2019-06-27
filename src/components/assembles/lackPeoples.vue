<template>
  <div class="lack_people">
    <div class="lack_people_top">
      <span>5人团还差2人，</span>
      <countDown :times='times' :type='type'></countDown>
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


