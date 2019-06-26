<config>
{
  "usingComponents": {
    "van-swipe-cell": "../../native/vant/swipe-cell/index"
  }
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    商品详情

  </div>
</template>
<script>
export default {
  components: {
    
  },
  data() {
    return {};
  },
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
}
</style>
