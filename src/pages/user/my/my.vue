<config>
{
  "usingComponents": {
     "van-icon": "../../../native/vant/icon/index",
     "van-popup": "../../../native/vant/popup/index",
     "van-notify": "../../../native/vant/notify/index"
  },
   navigationBarTitleText:"我的",
   backgroundColor:'#F5F5F5'
}
</config>
<template>
  <div class="center_wrap">
    <div class="top">
      <img class="avator" src="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png" alt="">
      <p class="user_name">用户名</p>
    </div>
    <button class="phone" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" >
        <div>
          <span class="phone_text">手机号</span>
          <span class="no_bind">未绑定</span>
        </div>
      <div>
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
      </div>
    </button>
    <div class="order">
      <div class="order_top">
        <div class="order_title">
          我的订单
        </div>
        <div class="more">
          <div class="text">查看全部</div>
          <van-icon name="arrow" color="#1F1F1F" size="12px"/>
        </div>
      </div>
       <div class="group_list">
          <div class="list" v-for="item in status_list" :key="item">
            <div class="icon">
              {{item.icon}}
            </div>
            <div class="text">
               {{item.text}}
            </div>
          </div>
        </div>
    </div>
    <div class="manager">
      <p class="text">我是店长</p>
      <div>
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
      </div>
    </div>
    <tab-bar :selectNavIndex="1"></tab-bar>
    <phoneDialog  ref="phoneDialog"></phoneDialog>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import phoneDialog from "@/components/phoneDialog";
export default {
  components: {
    tabBar,
    phoneDialog
  },
  data() {
    return {
      showModel: false,
      phone: "",
      code: "",
      status_list: [
        {
          icon: "",
          text: "待支付",
          url: ""
        },
        {
          icon: "",
          text: "拼团中",
          url: ""
        },
        {
          icon: "",
          text: "已成团",
          url: ""
        },
        {
          icon: "",
          text: "已退款",
          url: ""
        }
      ]
    };
  },
  beforeCreate() {},
  created() {
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
        this.$refs.phoneDialog.show();
      }
    },
    userInfoHandler(e) {
      console.log(e, "userInfoHandler");
    }
  }
};
</script>

<style lang="scss" scoped>
._img {
  width: 60px;
  height: 60px;
  // padding-right: 14px;
}
.submit {
  width: 238px;
  height: 30px;
  background: rgba(240, 126, 30, 1);
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  margin-top: 22px;
  line-height: 30px;
  &::after {
    border: none;
  }
}
.center_wrap {
  font-family: PingFangSC-Regular;
  width: 100%;
  overflow-x: hidden;
  .top {
    padding-left: 14px;
    // padding-right: 14px;
    display: flex;
    padding-top: 12px;
    background: #fff;
    height: 84px;
    align-items: center;
    width: 100%;
    .user_name {
      font-size: 18px;
      color: #232628;
      letter-spacing: -0.43px;
      text-align: left;
      font-weight: normal;
    }
  }
  .phone {
    height: 49px;
    line-height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-top: 8px;
    padding-left: 14px;
    // padding-right: 14px;
    border-radius: 0;
    &:after {
      border: none;
      border-radius: 0;
    }
    .phone_text {
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #232628;
      letter-spacing: 0;
    }
    .no_bind {
      color: rgba(155, 155, 155, 1);
      font-size: 12px;
      padding-left: 24px;
    }
  }
  .order {
    margin-top: 8px;
    background: #fff;
    .order_top {
      display: flex;
      justify-content: space-between;
      border: 1px solid #f5f5f5;
      height: 50px;
      line-height: 50px;
      padding-left: 14px;
      // padding-right: 14px;
      .order_title {
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #232628;
        letter-spacing: 0;
      }
      .more {
        display: flex;
        .text {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #9b9b9b;
          letter-spacing: 0;
          padding-right: 10px;
        }
      }
    }
    .group_list {
      display: flex;
      padding-left: 14px;
      padding-right: 27px;
      justify-content: space-between;
      align-items: center;
      .list {
        width: 45px;
        text-align: center;
        margin-top: 23px;
        margin-bottom: 14px;
        .icon {
          margin-bottom: 13px;
        }
        .text {
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #232628;
          letter-spacing: 0;
        }
      }
    }
  }
  .manager {
    display: flex;
    justify-content: space-between;
    height: 49px;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    margin-top: 8px;
    padding: 0 14px;
    .line{

    }
    .text {
      font-size: 15px;
      color: #232628;
      font-weight: normal;
    }
  }
}

.model {
  .inner-box {
    width: 270px;
    height: 262px;
    border-radius: 5px;
    background: #fff;
  }
  .title {
    font-size: 15px;
    font-weight: 500;
    color: #1f1f1f;
    margin-top: 43px;
    text-align: center;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 14px;
  }
  .group {
    width: 242px;
    height: 46px;
    border-bottom: 1px solid rgba(245, 245, 245, 1);
    background: #fff;
    // line-height: 46px;
    display: flex;
    margin: auto;
    align-items: center;
    .area_code {
      font-size: 14px;
      font-weight: 400;
      color: rgba(31, 31, 31, 1);
      width: 78px;
    }
    .write_phone {
      height: 46px;
      //margin-left: 20px;
    }
    .code {
    }
    .getcode {
      width: 75px;
      height: 24px;
      border-radius: 3px;
      line-height: 24px;
      color: rgba(35, 38, 40, 1);
      font-size: 12px;
      text-align: center;
      border: 1px solid rgba(155, 155, 155, 1);
    }
  }
}
</style>
