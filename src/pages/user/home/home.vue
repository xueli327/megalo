<config>
{
  "usingComponents": {
    "van-card": "../../../native/vant/card/index",
    "van-button": "../../../native/vant/button/index"
  }
}
</config>
<template>
  <div class="app">
            <van-button size="large" type="info" open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">微信登录</van-button>

    <button @click="linkto">服务协议页面</button>
    <button @click='getScancode'>获取位置</button>
     <picker mode="multiSelector" :value="dateTime1" @change="changeDateTime1" @columnchange="changeDateTimeColumn1" :range="dateTimeArray1">
      <view class="tui-picker-detail">
        选择日期时间 {{dateTimeArray1[0][dateTime1[0]]}}-{{dateTimeArray1[1][dateTime1[1]]}}-{{dateTimeArray1[2][dateTime1[2]]}} {{dateTimeArray1[3][dateTime1[3]]}}:{{dateTimeArray1[4][dateTime1[4]]}}
      </view>
  </picker>
    <div>
      {{isIphonex}}--------{{systemInfo}}
    </div>
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>
<script>
import tabBar from "@/components/tabBar";
import login from '@/mixins/login'
import { mapGetters, mapActions, mapMutations } from "vuex";
import { SET_APP_ID, SET_USER_INFO } from "@/store/user";
// import { getSystemInfo } from "@/store/systemInfo";
var QQMapWX = require("../../../static/qqmap-wx-jssdk.js");
var dateTimePicker = require("../../../utils/dateTimePicker.js");
var qqmapsdk;
export default {
  mixins:[login],
  components: {
    tabBar
  },
  computed: {
    ...mapGetters(["systemInfo", "isIphoneX"])
  },
  data() {
    return {
      latitude: 0,
      longitude: 0,
      date: "2018-10-01",
      time: "12:00",
      dateTimeArray: null,
      dateTime: null,
      dateTimeArray1: null,
      dateTime1: null,
      startYear: 2000,
      endYear: 2050
    };
  },
  beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created() {
    console.log(this.isIphonex, "this.isIphonex");
    var obj = dateTimePicker.dateTimePicker(
      this._data.startYear,
      this._data.endYear
    );
    var obj1 = dateTimePicker.dateTimePicker(
      this._data.startYear,
      this._data.endYear
    );
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    this._data.dateTime = obj.dateTime;
    this._data.dateTimeArray = obj.dateTimeArray;
    this._data.dateTimeArray1 = obj1.dateTimeArray;
    this._data.dateTime1 = obj1.dateTime;
  },
  beforeMount() {},
  mounted() {},
  // computed: {
  //   ...mapGetters("home", ["systemInfos"])
  // },
  onLoad(options) {
    let that = this;
     console.log(options,'options.scene')
    //console.log(this.getSystemInfo());
    // **********地图的调用*********** //
    qqmapsdk = new QQMapWX({
      key: "HEEBZ-VQRLX-C334C-7JZ3J-YBT52-W4BC2" // 必填
    });
    wx.getLocation({
      type: "gcj02", //返回可以用于wx.openLocation的经纬度
      success(res) {
        that.latitude = res.latitude;
        that.longitude = res.longitude;
      }
    });

    // Do some initialize when page load.
    console.log("Page [my] onLoad");
    this.$flyio
      .get("http://192.144.205.76:8081/gift/list")
      .then(d => {
        //输出请求数据
        // this[types.GET_SYSTMINFO]();
        // console.log("获取手机型号", this.systemInfos);
        //输出响应头
        console.log(d.header);
      })
      .catch(err => {
        console.log(err.status, err.message);
      });
  },
  onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow() {
    console.log(options.scene,'options.scene')
    // console.log(this,'this')
    // console.log(this.selectComponent('#picker-date'))
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload() {},

  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    ...mapActions["getSystemInfo"],
    bindGetUserInfo(e) {
      wx.openSetting({
        success(res) {
          console.log(res.authSetting);
          // res.authSetting = {
          //   "scope.userInfo": true,
          //   "scope.userLocation": true
          // }
        }
      });
      const { userInfo } = e.detail;
      console.log(userInfo);
      if (userInfo) {
        this.oAuth();
      } else {
        console.log("jjjj");
      }
    },
    onInput(event) {},
    linkto() {
      this.$router.push("/pages/user/agreement/agreement");
    },
    changeDateTime1(e) {
      this._data.dateTime1 = e.detail.value;
    },
    changeDateTimeColumn1(e) {
      var arr = this._data.dateTime1,
        dateArr = this._data.dateTimeArray1;
      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(
        dateArr[0][arr[0]],
        dateArr[1][arr[1]]
      );
      this._data.dateTimeArray1 = dateArr;
      this._data.dateTime1 = arr;
    },
    getScancode() {
      this.$router.push({
        path: "/pages/user/position/position",
        query: { latitude: this.latitude, longitude: this.longitude }
      });
    }
  }
};
</script>

<style lang="scss" >
.app {
  .octoParse-li {
  }
  .custom {
    margin-bottom: 20px;
  }
  img {
    width: 800rpx;
    height: 200rpx;
  }
  .box {
    padding: 10px;
    text-align: center;
  }
  .tag_class {
    background: green;
    color: red;
  }
  .title_hq {
    color: pink;
    font-size: 40rpx;
  }
  .line {
    height: 30rpx;
  }
  .price {
    color: pink;
    font-size: 50rpx;
  }
}
</style>
