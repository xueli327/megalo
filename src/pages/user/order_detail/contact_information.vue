
<template>
  <div class="concat_information">
    <div class="title">
        联系方式
    </div>
    <div class="name">
        <span>
            姓名：
        </span>
        XXXXX
    </div>
     <div class="phone">
        <span>
            手机号：
        </span>
        XXXXX
    </div>
  </div>
</template>
<style lang="scss">
.concat_information{

}
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

