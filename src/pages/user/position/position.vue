<config>
{
   navigationBarTitleText:'位置信息'
}
</config>
<template>
    <div id="map-wrap">
       <map id="qqMap" :style="{width:'100%','height':height}" 
            :latitude="latitude" :longitude="longitude" 
            show-location
            :markers="markers"></map>
    </div>
</template>
<script>
var QQMapWX = require("../../../static/qqmap-wx-jssdk.js");
var qqmapsdk;
export default {
  data() {
    return {
      latitude: 0,
      height:'330px',
      longitude: 0,
      show_location:'',
      markers: [
        {
          id: 0,
          latitude: '',
          longitude: ''
        }
      ]
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
  onLoad(options) {
    let that = this;
    this.latitude = Number(options.latitude);
    this.longitude = Number(options.longitude);
    this.markers[0].latitude = Number(options.latitude)
    this.markers[0].longitude = Number(options.longitude)
    if(options.show_location == undefined){
      this.moveToLocation()
    }else{
      this.height = '100vh';
    }
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {
    moveToLocation: function() {
      var that = this;
      wx.chooseLocation({
        success: function(res) {
          console.log(res, "kkkkk");
          console.log(res.name);
          //选择地点之后返回到原来页面
          that.$router.push({
            path: "/pages/user/home/home",
            query: { ...res }
          });
          // wx.navigateTo({
          //     url: "/pages/home/home?address=" + res.name
          // });
        },
        fail: function(err) {
          that.$router.push("/pages/home/home");
        }
      });
    }
  }
};
</script>
