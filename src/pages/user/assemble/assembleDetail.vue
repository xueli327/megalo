<config>
{
  "usingComponents": {
    "van-popup": "../../../native/vant/popup/index",
  },
   navigationBarTitleText: ''
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    <activeBanner></activeBanner>
    <goodsDetail></goodsDetail>
    <groupList></groupList>
    <lackPeoples v-if="this.$route.query.fromPage!=='assemblePage'"></lackPeoples> <!-- 参团详情才显示 -->
    <playStep @onOpenRole="openRoleF"></playStep>
    <playDirection></playDirection>
    <playDetail></playDetail>
    <shopArea></shopArea>
    <groupButton></groupButton>
    <van-popup
        :show="isShow"
        position="bottom"
        >
        内容
    </van-popup>
  </div> 
</template>
<script>
import activeBanner from "@/components/assembles/activeBanner";
import lackPeoples from "@/components/assembles/lackPeoples";
import groupList from "@/components/assembles/groupList";
import goodsDetail from "@/components/assembles/goodsDetail";
import playStep from "@/components/assembles/playStep";
import playDirection from "@/components/assembles/playDirection";
import playDetail from "@/components/assembles/playDetail";
import shopArea from "@/components/assembles/shopArea";
import groupButton from "@/components/assembles/groupButton";


export default {
  props: ["fromPage"],
  data() {
    return {
      isShow: false
    };
  },
  components: {
    activeBanner,
    lackPeoples,
    groupList,
    goodsDetail,
    playStep,
    playDirection,
    playDetail,
    shopArea,
    groupButton
  },
  watch: {},
  beforeCreate() {},
  created() {
    console.log('this.$route.query.fromPage',this.$route.query.fromPage);
    
    if(this.$route.query.fromPage!=='assemblePage'){
       wx.setNavigationBarTitle({
        title: '参团详情'
      })
    }else if(this.$route.query.fromPage==='assemblePage'){
       wx.setNavigationBarTitle({
        title: '拼团详情'
      })
    }
    
    // this.currentPage = this.$route.query.fromPage;
  },
  beforeMount() {},
  mounted() {},
  events: {},
  computed: {},
  onLoad(options) {
    console.log("options", options);
  },
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
    openRoleF(){
      this.isShow=true
    }
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
  .shops_area {
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
