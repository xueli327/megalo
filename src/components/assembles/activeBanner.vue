<template>
    <div class="banner_active">
        <swiper circular="true" class="slider-wrapper" autoplay="true" duration="1000" indicator-dots="true">
            <swiper-item class="slide-item" v-for="(item,idx) in imgUrls" :key="idx">
                <img :src="item"/>
            </swiper-item>
        </swiper>
        <div class="message">
            <div class="message_left">
              <div class="price_message">
                <span class="price">¥79.90</span>
                <div class="tag">8人团</div>
              </div>
              <div class="oldprice">
                ￥699.00
              </div>
            </div>
            <div class="message_right">
              <div>距离开始还剩</div>
              <!-- <countDown :times='times' :type='type'></countDown> -->
            </div>
        </div>
    </div>
</template>
<script>
import countDown from "@/components/countDown";
export default {
  data() {
    return {
        times: "1561626799",
        type: "day",
        imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ]
    };
  },
  components:{
    countDown
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
.banner_active {
  .slider-wrapper {
    width: 100%;
    height: 249x;
    .slide-item img {
      width: 100%;
      height: 100%;
    }
  }
  .message {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    background: #232628;
    justify-content: space-between;
    padding: 0 14px;
    box-sizing: border-box;
    .price_message{
      display: flex;
      align-items: center;
      .price{
        color: #F07E1E;
        font-size:20px;
        margin-right: 8px;
      }
      .tag {
        width: 42px;
        height: 16px;
        text-align: center;
        color: #9B9B9B;
        font-size: 12px;
        background:#F5F5F5;
      }
    }
    .oldprice{
      color: #fff;
      font-size: 12px;
      margin-top: 3px;
      text-decoration: line-through;
    }
    .message_right{
      color: #fff;
      font-size: 12px;
      text-align: left;
    }
  }
}
</style>


