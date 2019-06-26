<config>
{
  "usingComponents": {
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
    <div class="message">
      <span class="price">79.90</span>
      <div class="tag">8人团</div>
      <countDown :times='times' :type='type'></countDown>
    </div>
  </div> 
</template>
<script>
import countDown from "@/components/countDown";
export default {
  data() {
    return {
    times:'1561626799',
    type:'day',
    imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ]
    };
  },
  components: {
      countDown
  },
  watch:{
    },
  beforeCreate() {},
  created() {
   
  },
  beforeMount() {},
  mounted() {
   
  },
  computed: {},
  onLoad(options) {},
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

  methods: {}
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_detail_wrapper {
    .slider-wrapper{
        width: 100%;
        height: 400px;
        .slide-item img{
            width: 100%;
            height:100%;
        }
    }
    .message{
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      background: #ccc;
      justify-content: space-around;
      .tag{
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #666;
      }
    }
}
</style>
