<config>
{
  "usingComponents": {
      'van-cell-group':'../../../native/vant/cell-group/index',
      'van-field':'../../../native/vant/field/index',
      'van-button':'../../../native/vant/button/index',
      "van-card": "../../../native/vant/card/index",
  },
   navigationBarTitleText: '确认订单'
}
</config>
<template>
  <div class="order_wraper">
    <div class="address">
        <h3>联系方式</h3>
        <van-cell-group>
            <van-field
                v-model="username"
                label="用户名"
                placeholder="如何称呼您"
                :error-message='errorUser'
            />
            <van-field
                v-model="phone"
                label="手机号"
                placeholder="如何联系您"
                :error-message="errorPhone"
                :border='false'
                input-class="inp"
                use-button-slot>
                <div slot="button"  class="btn">获取手机号</div>
            </van-field>
        </van-cell-group>
    </div>
    <lackPeoples :fromPage="fromPage"></lackPeoples>
    <div class="card">
        <van-card
            price="79.99"
            title="单人炫彩高端光疗美甲套餐（纯植物胶）"
            thumb="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
            thumb-class="thumb_pic"
            title-class="title_hq"
            price-class="price"
            custom-class="custom"
            >
        </van-card>
        <span class="tags">5人团</span>
    </div>
    
      <shopArea :fromPage="fromPage"></shopArea>
      <div class="order_btn">
          <div class="nowprice">
              实际付款：
            <span>￥89.90</span>
          </div>
          <div class="pays">立即支付</div>
      </div>
  </div>
</template>
<script>
import lackPeoples from "@/components/assembles/lackPeoples";
import shopArea from "@/components/assembles/shopArea";
export default {
  data() {
    return {
      fromPage: "ordersPage",
      username: "",
      errorUser: "", //请输入用户名
      phone: "",
      errorPhone: "" //手机号格式错误
    };
  },
  components: {
    lackPeoples,
    shopArea
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
/deep/ .order_wraper {
  margin-top: 8px;
  .address {
    height: 139px;
    padding: 14px;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 8px;
    h3 {
      height: 25px;
      line-height: 25px;
      font-size: 15px;
      font-weight: 500;
    }
    .inp {
      font-size: 15px;
    }
    .van-cell {
      padding: 10px 15px 10px 0px;
      box-sizing: border-box;
    }
    .van-cell__title {
      max-width: 72px !important;
      min-width: 72px !important;
      font-size: 15px;
    }
    .btn {
      width: 75px;
      height: 24px;
      border-radius: 3px;
      border: 1px solid rgba(155, 155, 155, 1);
      font-size: 12px;
      color: #232628;
      text-align: center;
      line-height: 24px;
    }
  }
  .card {
    padding: 14px;
    box-sizing: border-box;
    height: 108px;
    background: #fff;
    margin-bottom: 8px;
    position: relative;
    .tags {
      position: absolute;
      right: 14px;
      bottom: 14px;
      width: 42px;
      height: 16px;
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #9b9b9b;
      background: #f5f5f5;
      border-radius: 3px;
      line-height: 16px;
      text-align: center;
    }
  }
  .custom {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0;
  }
  .order_btn {
    width: 100%;
    height: 46px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    .nowprice {
      width: 223px;
      height: 100%;
      background: #fff;
      font-size: 14px;
      color: #9b9b9b;
      font-weight: 500;
      display: flex;
      align-items: center;
      padding-left: 14px;
      box-sizing: border-box;
      span {
        color: #f07e1e;
        font-size: 18px;
        font-weight: 500;
      }
    }
    .pays {
      width: 152px;
      height: 100%;
      background: #f07e1e;
      text-align: center;
      line-height: 46px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
  }
  .thumb_pic {
    width: 94px;
    height: 79px;
    margin-right: 8px;
  }
  .price {
    color: #f07e1e;
    font-size: 20px;
    font-weight: 500;
  }
  .title_hq {
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-bottom: 18px;
  }
}
</style>


