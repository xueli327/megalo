<config>
{
  "usingComponents": {
  }
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    <activeBanner></activeBanner>
    <lackPeoples></lackPeoples><!-- 参团详情才显示lackPeoples -->
    <goodsDetail></goodsDetail>
    <playStep></playStep>
    <playDirection></playDirection>
    <playDetail></playDetail>
    <shopArea></shopArea>
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
    shopArea
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
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

  methods: {}
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_detail_wrapper {
  .play_way,
  .play_direction,
  .good_detail,
  .play_detail{
    margin-bottom: 20px;
  }
  .play_way_name {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      justify-content: space-between;
      border-bottom: 2px solid #ccc;
    }
}
</style>
