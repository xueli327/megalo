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
      <div class="right_text">
        <p class="user_name">用户名</p>
        <p>美容院名称</p>
      </div>
      <div class="icon_right">
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
      </div>
      
    </div>
    <div class="order">
      <div class="order_top">
        <div class="order_title">
          订单记录
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
    <div class="manager" @click="routerto">
      <p class="text">商家钱包</p>
      <div>
        <span>112000元</span>
        <van-icon name="arrow" color="#1F1F1F" size="12px"/>
      </div>
    </div>   
    <tab-bar :selectNavIndex="1"></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/adminTabbar";
import mixin_check from "@/mixins/getCode";
export default {
  mixins: [mixin_check],
  components: {
    tabBar
  },
  data() {
    return {
      showModel: false,
      phone: "",
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
    routerto () {
      this.$router.push('/pages/admin/merchant_wallet/merchant_wallet')
    }
  }
};
</script>

<style lang="scss" scoped>
._img {
  width: 60px;
  height: 60px;
  padding-right: 14px;
}

.center_wrap {
  font-family: PingFangSC-Regular;
  .top {
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    padding-top: 12px;
    background: #fff;
    height: 84px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    .user_name {
      font-size: 18px;
      color: #232628;
      letter-spacing: -0.43px;
      text-align: left;
      font-weight: normal;
    }
    .icon_right {
      flex: 1;
      text-align: right;
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
    padding-right: 14px;
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
      padding-right: 14px;
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
    .text {
      font-size: 15px;
      color: #232628;
      font-weight: normal;
    }
  }
}

.model {
  .inner-box {
    width: 600px;
    height: 300px;
    background: #fff;
  }
  .title {
    font-size: 15px;
    font-weight: 400;
  }
}
</style>
