<template>
    <div class="good_detail">
        <div class="titles">
            <span>单人炫彩高端光疗美甲套餐（纯植物胶）富强民主文明和谐自由平等公正法治...</span>
            <span class="share">分享</span>
        </div>
        <div class="prices">
            <span>单买价 ￥699.90</span>
            <span>200人已参与活动</span>
        </div>
        <div class="tags">
            <span>2人团  | ￥99.9</span>
            <span>8人团  | ￥99.9</span>
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
    padding: 15px 20px;
    box-sizing: border-box;
    background: pink;
    .titles {
      display: flex;
      margin-bottom: 20px;
      .share {
        display: block;
        width: 250px;
        text-align: center;
      }
    }
    .prices {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .tags {
      display: flex;
      span {
        display: block;
        width: auto;
        padding: 0 10px;
        box-sizing: border-box;
        background: #ccc;
        text-align: center;
        margin-right: 10px;
      }
    }
  }
</style>


