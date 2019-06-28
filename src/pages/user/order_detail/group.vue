
<template>
  <div class="order">
    还差几人开团
    
  </div>
</template>
<style lang="scss">
</style>
<script>
export default {
  components: {
    
  },
  data() {
    return {
      active: 0
    };
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
  methods: {
    onChange(e) {
      console.log(e);
    }
  }
};
</script>

