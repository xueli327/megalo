<config>
{
  navigationBarTitleText: '拼团详情'
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    <activeBanner></activeBanner>
    <!-- <lackPeoples></lackPeoples> -->
    <!-- 参团详情才显示lackPeoples -->
    <goodsDetail></goodsDetail>
    <playStep></playStep>
    <playDirection></playDirection>
    <playDetail></playDetail>
    <shopArea></shopArea>
    <groupButton></groupButton>
  </div> 
</template>
<script>
import activeBanner from "@/components/assembles/activeBanner";
import lackPeoples from "@/components/assembles/lackPeoples";
import goodsDetail from "@/components/assembles/goodsDetail";
import playStep from "@/components/assembles/playStep";
import playDirection from '@/components/assembles/playDirection'
import playDetail from '@/components/assembles/playDetail'
import shopArea from '@/components/assembles/shopArea'
import groupButton from '@/components/assembles/groupButton'



export default {
  data() {
    return {
    };
  },
  components: {
    activeBanner,
    lackPeoples,
    goodsDetail,
    playStep,
    playDirection,
    playDetail,
    shopArea,
    groupButton
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  events:{
   
  },
  computed: {},
  onLoad(options) {},
  onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload() {},

  methods: {

  }
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_detail_wrapper {
  padding: 0 0 46px 0;
  box-sizing: border-box;
  .play_way,
  .play_direction,
  .good_detail,
  .play_detail,
  .shops_area{
    margin-bottom: 8px;
  }
  .play_way_name {
      height: 35px;
      color: #232628;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      font-size: 15px;
      align-items: center;
    }
}
</style>
