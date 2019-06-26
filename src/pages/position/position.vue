<template>
    <div id="map-wrap">
       <map id="qqMap" style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" show-location></map>
    </div>
</template>
<script>
var QQMapWX = require("../../static/qqmap-wx-jssdk.js");
var qqmapsdk;

export default {
  data() {
    return {
      latitude: 0,
      longitude: 0
    };
  },
  beforeCreate() {
  },
  created() {
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount() {
    console.log("Page [my] Vue beforeMount");
  },
  mounted() {},
  onLoad(options) {
    let that = this    
    this.latitude = options.latitude
    this.longitude = options.longitude
    qqmapsdk = new QQMapWX({
      key: "HEEBZ-VQRLX-C334C-7JZ3J-YBT52-W4BC2" // 必填
    });
    this.moveToLocation()
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {},
  methods: {
    moveToLocation: function() {
      var that = this;
      wx.chooseLocation({
        success: function(res) {
          console.log(res,'kkkkk')
          console.log(res.name);
          //选择地点之后返回到原来页面
          that.$router.push({
            path:'/pages/home/home',
            query:{...res}
          })
            // wx.navigateTo({
            //     url: "/pages/home/home?address=" + res.name
            // });
        },
        fail: function(err) {
          that.$router.push('/pages/home/home')
        }
      });
    }
  }
};
</script>
