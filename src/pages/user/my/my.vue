<config>
{
  "usingComponents": {
     "van-icon": "../../../native/vant/icon/index",
     "van-popup": "../../../native/vant/popup/index"
  },
   navigationBarTitleText:"我的",
   backgroundColor:'#F5F5F5'
}
</config>
<template>
  <div class="center_wrap">
    <div class="top">
      <img class="avator" src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
      <p>用户名</p>
    </div>
    <div class="phone">
      手机号
      <van-icon name="arrow" />
      <button class="button" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">未绑定</button>
    </div>
    <div class="order">
      <div class="top">
        <div>
          我的订单
        </div>
        <div>
          查看全部
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <van-popup :show="showModel" class="model">
      <div class="inner-box">
        <div class="title">
          绑定手机号
        </div>
        <div class="enter_phone">
          <input type="text" placeholder="输入手机号" v-model="phone">
          <button @click="send">{{codeTxt}}</button>
        </div>
      </div>
    </van-popup>
    <tab-bar :selectNavIndex="1"></tab-bar>

  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import mixin_check from "@/mixins/getCode";
export default {
  mixins: [mixin_check],
  components: {
    tabBar
  },
  data() {
    return {
      showModel: false,
      phone: ""
    };
  },
  beforeCreate() {},
  created() {
    console.log("Page [my] Vue created");
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount() {},
  mounted() {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},

  methods: {
    getPhoneNumber(e) {
      let msg = e.detail.encryptedData;
      if (msg) {
      } else {
        this.showModel = true;
      }
    },
    send() {
      console.log(this.phone);
      this.sendCode({
        phone: this.phone
      });
    },
    userInfoHandler(e) {
      console.log(e, "userInfoHandler");
    },
    checkphone() {
      let reg = /^1(3|4|5|7|8)\d{9}$/;
    }
  }
};
</script>

<style lang="scss" scoped>
._img {
  width: 60px;
  height: 60px;
}
/deep/ .center_wrap {
  button {
    display: inline;
    background-color: #fff;
    padding: 0;
    line-height: 0;
    border: 0;
  }
  .center_wrap {
    .top {
      display: flex;
      height: 160px;
      background: red;
      align-items: center;
      justify-content: space-between;
      margin-left: 14px;
      .phone {
      }
    }
  }
  .order {
    .top {
      display: flex;
      justify-content: space-between;
      // flex-direction
    }
  }
  .model {
    .inner-box {
      width: 600px;
      height: 300px;
      background: #fff;
    }
    .title {
    }
  }
}
</style>
