<template>
    <div class="banner_active">
        <swiper circular="true" class="slider-wrapper" autoplay="true" duration="1000" indicator-dots="true">
            <swiper-item class="slide-item" v-for="(item,idx) in imgUrls" :key="idx">
                <img :src="item"/>
            </swiper-item>
        </swiper>
        <div class="message">
            <span class="price">79.90</span>
            <div class="tag">8人团</div>
            <div>
                距离开始:<countDown :times='times' :type='type'></countDown>
                <!-- 参团详情不显示倒计时 -->
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
    height: 400px;
    .slide-item img {
      width: 100%;
      height: 100%;
    }
  }
  .message {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: #ccc;
    justify-content: space-around;
    margin-bottom: 20px;
    .tag {
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #666;
    }
  }
}
</style>


