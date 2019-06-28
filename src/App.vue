
<script>
export default {
  onLaunch(options) {
    //wx.hideTabBar()
    // Do something initial when launch.
  },
  onShow(options) {
    //  wx.hideTabBar()
    // Do something when show.
    console.log("App onShow");
  },
  onHide() {
    //  wx.hideTabBar()
    // Do something when hide.
    console.log("App onHide");
  },
  onError(msg) {
    console.log("App onError");
    console.log(msg);
  },
  globalData() {
    return {
      a: "I am global data",
      appid: "wxe9adb0ec709438d9",
      secret: "111111"
    };
  }
};
</script>
<style lang="scss">
<<<<<<< HEAD
page {
  font-family: PingFangSC-Medium;
  overflow-x: hidden;
  background: #f5f5f5;
}
=======
  page{
    background: #F5F5F5;
    font-family: PingFangSC-Medium;
    color: #232628;
  }
  .text_ellipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
>>>>>>> 615f257b55c1b2091494aa828ebcbe56bd10c3eb
</style>

