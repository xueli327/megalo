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
                placeholder="请输入用户名"
                :error-message='errorUser'
            />
            <van-field
                v-model="phone"
                label="手机号"
                placeholder="请输入手机号"
                :error-message="errorPhone"
                :border='false'
                use-button-slot>
                <van-button slot="button" size="small" type="primary">获取手机号</van-button>
            </van-field>
        </van-cell-group>
    </div>
    <lackPeoples :fromPage="fromPage"></lackPeoples>
    <van-card
        price="79.99"
        title="单人炫彩高端光疗美甲套餐（纯植物胶）"
        thumb="https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
        thumb-class="pic"
        title-class="title_hq"
        price-class="price"
        custom-class="custom"
        >
        <div slot="footer">
          <van-button size="mini">3人团</van-button>
        </div>
      </van-card>
      <shopArea :fromPage="fromPage"></shopArea>
      <div class="order_btn">
          实际付款：
          <span>￥89.90</span>
          <div class="pays">立即支付</div>
      </div>
  </div>
</template>
<script>
import lackPeoples from "@/components/assembles/lackPeoples";
import shopArea from '@/components/assembles/shopArea'
export default {
  data() {
    return {
        fromPage:'ordersPage',
        username:'',
        errorUser:'',//请输入用户名
        phone:'',
        errorPhone:''//手机号格式错误
    };
  },
  components:{
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
    margin-top: 20px;
 .address{
     padding: 20px;
     box-sizing: border-box;
     margin-bottom: 20px;
     h3{
         height: 60px;
         line-height: 60px;
         border-bottom: 2px solid #ccc;
     }
 }
 .custom{
     margin-bottom: 20px;
 }
 .order_btn{
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    justify-content: space-around;
    .pays{
        width: 40%;
        height: 100%;
        background: olive;
        text-align: center;
        line-height: 80px;
    }
 }
}
</style>


