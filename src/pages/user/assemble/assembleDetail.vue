<config>
{
  "usingComponents": {
    "van-swipe-cell": "../../native/vant/swipe-cell/index"
  }
}
</config>
<template>
  <div class="assemble_detail_wrapper">
    商品详情
    <swiper circular="true" class="slider-wrapper" autoplay="true" duration="1000" indicator-dots="true">
        <swiper-item class="slide-item" v-for="(item,idx) in imgUrls" :key="idx">
            <img :src="item"/>
        </swiper-item>
    </swiper>
  </div> 
</template>
<script>
import countDown from "@/mixins/countDown";
export default {
  data() {
    return {
    imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ]
    };
  },
  components: {
      
  },
  mixins: [countDown],
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  computed: {},
  onLoad(options) {},
  onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow() {
      this.getCountDown('1561626799','day')
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_detail_wrapper {
    .slider-wrapper{
        width: 100%;
        height: 200px;
        .slide-item img{
            width: 100%;
            height:100%;
        }
    }
}
</style>
