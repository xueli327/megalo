
<config>
{
    "usingComponents": {
        "van-icon": "../../../native/vant/icon/index"
    }

}
</config>
<template>
  <div class="business_information">
    <div class="title">
        商家信息
    </div>
    <div class="name">
        方庄店
    </div>
    <div class="adress">
        北京市朝阳区绿地中心
    </div>
    <div class="btn">
        <van-icon name="close" />
        <button @click="formSubmit">
            <van-icon name="location-o" info="9" />
             门店地图
        </button>
        <button @click="callGetPhone" data-phone="13261788959">
             联系商家
        </button>
    </div>
  </div>
</template>
<style lang="scss">
.business_information {
  .btn {
    display: flex;
  }
}
</style>
<script>
var QQMapWX = require("../../../static/qqmap-wx-jssdk.js");
var qqmapsdk;
export default {
  components: {},
  data() {
    return {
      active: 0
    };
  },
  beforeCreate() {},
  created() {
    qqmapsdk = new QQMapWX({
      key: "HEEBZ-VQRLX-C334C-7JZ3J-YBT52-W4BC2" // 必填
    });
    console.log(qqmapsdk, "qqmapsdkqqmapsdkqqmapsdk");
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
    //打电话
    callGetPhone(e) {
      let telPhone = e.currentTarget.dataset.phone;
      this.callPhone(telPhone);
    },
    //打电话
    callPhone(d) {
      wx.makePhoneCall({
        phoneNumber: d //仅为示例，并非真实的电话号码
      });
    },
    formSubmit(e) {
      var that = this; //调用地址解析接口
      qqmapsdk.geocoder({
        //获取表单传入地址
        address: "北京市丰台区六里桥10号院", //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
        success: function(res) {
          console.log(res,'resresres')
          var res = res.result;
          var latitude = res.location.lat;
          var longitude = res.location.lng; //根据地址解析在地图上标记解析地址位置
          that.$router.push({
            path: "/pages/user/position/position",
            query: { latitude: latitude, longitude: longitude,show_location:0 }
          });
        },
        fail: function(error) {
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    }
  }
};
</script>

