<template>
    <div class="good_detail">
        <div class="titles">
            <div class="title_text text_ellipsis">小气泡美肤（超微小气泡）小气泡 小气泡美肤超微小气泡小气泡…</div>
            <div class="share">
              <img src="../../static/imgs/fenxiang.png" alt="">
              <span>分享</span>
            </div>
        </div>
        <div class="group_buy">
          <div class="tags">
              <span class="tag">2人团  | ￥99.9</span>
              <span class="tag">8人团  | ￥99.9</span>
          </div>
          <span class="join_people">200人已参加活动</span>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {};
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
.good_detail {
    padding: 14px;
    box-sizing: border-box;
    background: #fff;
    .titles {
      display: flex;
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 500;
      .title_text{
        margin-right: 40px;
        max-height: 50px;
        line-height:25px;
      }
      .share {
        width: 100px;
        text-align: center;
        font-size: 11px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        img{
          width: 20px;
          height: 20px;
          margin-bottom: 3px;
        }
      }
    }
    .group_buy{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .join_people{
        font-size: 12px;
        color: #9B9B9B;
      }
    }
    .tags {
      display: flex;
      .tag {
        padding: 2px 5px;
        box-sizing: border-box;
        background: #F5F5F5;
        text-align: center;
        margin-right: 6px;
        font-size: 12px;
        color: #9B9B9B;
      }
    }
  }
</style>


