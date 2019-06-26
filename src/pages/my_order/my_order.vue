<template>
  <div class="order-wrap">
    <tabs></tabs>
  </div>
</template>
<style lang="scss">
.order-wrap {

}
</style>

<script>
import tabs from '@/components/tabs'
export default {
  comments:{
    tabs
  },
  data() {
    return {};
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

