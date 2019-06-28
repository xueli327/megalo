<config>
{
  "usingComponents": {
    "van-popup": "../../../native/vant/popup/index",
    "van-icon": "../../../native/vant/icon/index",
  },
   navigationBarTitleText: ''
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    <activeBanner></activeBanner>
    <goodsDetail></goodsDetail>
    <groupList></groupList>
    <lackPeoples v-if="this.$route.query.fromPage!=='assemblePage'"></lackPeoples> <!-- 参团详情才显示 -->
    <playStep @onOpenRole="open_Role"></playStep>
    <playDirection></playDirection>
    <playDetail></playDetail>
    <shopArea></shopArea>
    <groupButton @onOpenGroup="open_Group"></groupButton>
    <!-- 活动规则弹框 -->
    <van-popup
        :show="isShow"
        position="bottom"
        close-on-click-overlay="true"
        custom-class="custom"
        >
        <div class="popue_role">
          <van-icon class="icon_cross" name="cross" size="20px" @click="isShow=false" />
          <h3>拼团规则</h3>
          <div class="role_list">
            <div class="role_items">
              <h4>1、基本流程</h4>
              <p>支付成功即可开团/参团——邀请好友参团——在团有效期内人满 则成团，逾期未成团自动退款</p>
            </div>
            <div class="role_items">
              <h4>2、拼团限制</h4>
              <p>同一个拼团活动，每个用户只能开或参加一个团。</p>
            </div>
            <div class="role_items">
              <h4>3、拼团失败</h4>
              <p>在拼团有效期内没有达到人数，则拼团失败。系统会1-2个工作日 内将所支付的款项原路退回。</p>
            </div>
            <div class="role_items">
              <h4>4、取消订单</h4>
              <p>一旦付款则不能取消订单，可等拼团失败后订单自动取消。</p>
            </div>
            <div class="role_items">
              <h4>5、活动解释</h4>
              <p>活动最终解释权归商家所有。</p>
            </div>
          </div>
        </div>
    </van-popup>
    <!-- 选择拼团人数弹框 -->
     <van-popup
        :show="isShowPeople"
        position="bottom"
        close-on-click-overlay="true"
        custom-class="custom1"
        >
        <div class="popue_people">
          <van-icon class="icon_cross" name="cross" size="20px" @click="isShowPeople=false" />
          <div class="check_people">
              <h3>选择拼团人数</h3>
              <div class="check">
                <div class="check_groups">
                  <p class="num">2人成团</p>
                  <p class="price">￥99.99</p>
                </div>
                <div class="check_groups last">
                  <p class="num">2人成团</p>
                  <p class="price">￥99.99</p>
                </div>
              </div>
          </div>
          <div class="btn" @click="linktoOrder">
            立即开团(￥99.99)
             <!-- 跳转确认订单 -->
          </div>
        </div>
    </van-popup>
  </div> 
</template>
<script>
import activeBanner from "@/components/assembles/activeBanner";
import lackPeoples from "@/components/assembles/lackPeoples";
import groupList from "@/components/assembles/groupList";
import goodsDetail from "@/components/assembles/goodsDetail";
import playStep from "@/components/assembles/playStep";
import playDirection from "@/components/assembles/playDirection";
import playDetail from "@/components/assembles/playDetail";
import shopArea from "@/components/assembles/shopArea";
import groupButton from "@/components/assembles/groupButton";

export default {
  props: ["fromPage"],
  data() {
    return {
      isShow: false,
      isShowPeople: false
    };
  },
  components: {
    activeBanner,
    lackPeoples,
    groupList,
    goodsDetail,
    playStep,
    playDirection,
    playDetail,
    shopArea,
    groupButton
  },
  watch: {},
  beforeCreate() {},
  created() {
    console.log("this.$route.query.fromPage", this.$route.query.fromPage);

    if (this.$route.query.fromPage !== "assemblePage") {
      wx.setNavigationBarTitle({
        title: "参团详情"
      });
    } else if (this.$route.query.fromPage === "assemblePage") {
      wx.setNavigationBarTitle({
        title: "拼团详情"
      });
    }

    // this.currentPage = this.$route.query.fromPage;
  },
  beforeMount() {},
  mounted() {},
  events: {},
  computed: {},
  onLoad(options) {
    console.log("options", options);
  },
  onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload() {},

  methods: {
    linktoOrder() {
      this.$router.push({
        path: `/pages/user/orders/orders?fromBtnType=OPENGROUP`
      });
    },
    open_Role() {
      this.isShow = true;
    },
    open_Group() {
      this.isShowPeople = true;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_detail_wrapper {
  padding: 0 0 46px 0;
  box-sizing: border-box;
  .play_way,
  .play_direction,
  .good_detail,
  .play_detail,
  .shops_area {
    margin-bottom: 8px;
  }
  .play_way_name {
    height: 35px;
    color: #232628;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 15px;
    align-items: center;
  }
  .custom {
    width: 375px;
    height: 369px;
  }
  .popue_role {
    width: 100%;
    height: 100%;
    padding: 32px 14px 14px 14px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px 5px 0px 0px;
    position: relative;
    h3 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 14px;
    }
    .role_list {
      .role_items {
        margin-bottom: 4px;
        h4 {
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          margin-bottom: 4px;
        }
        p {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          color: rgba(155, 155, 155, 1);
          line-height: 19px;
        }
      }
    }
  }
  .icon_cross {
    position: absolute;
    right: 14px;
    top: 14px;
  }
  .custom1 {
    height: 198px;
    width: 100%;
  }
  .popue_people {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px 5px 0px 0px;
    position: relative;
    .check_people {
      padding: 32px 14px 14px 14px;
      box-sizing: border-box;
      height: 152px;
      h3 {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 25px;
      }
      .check {
        display: flex;
        justify-content: space-around;
        .check_groups {
          width: 118px;
          height: 42px;
          background: rgba(232, 232, 232, 1);
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px 0 0 0;
          box-sizing: border-box;
          .price {
            font-size: 15px;
            font-weight: 500;
          }
          .num {
            font-size: 12px;
          }
        }
        .last {
          background: #f07e1e;
          color: #fff;
        }
      }
    }
    .btn {
      background: #f07e1e;
      width: 100%;
      height: 46px;
      font-size: 18px;
      color: #fff;
      line-height: 46px;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
