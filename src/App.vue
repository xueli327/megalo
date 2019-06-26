
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
