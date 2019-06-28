
<template>
<div class="group_list_wraper">
    <div class="play_way_name"> 
      <span>2人正在拼团，可直接参与</span>
    </div>
    <swiper circular="true" class="slider-wrapper" vertical="true" autoplay="true" duration="2000"  display-multiple-items="2">
        <swiper-item class="slide-item" v-for="(item,idx) in msgList" :key="idx">
            <div class="items">
                <div class="items_name">
                    <img src="../../static/imgs/megalo_logo.png" alt="">
                    <span>青青</span>
                </div>
                <div class="item_people">
                    <div class="time">
                        <p class="people">5人成团，还差<span>2</span>人拼成</p>
                        <p class="time_num">剩余01：22：23</p>
                    </div>
                    <div class="tag">立即参团</div>
                </div>
            </div>
        </swiper-item>
    </swiper>
</div>
 
</template>
<script>
export default {
  data() {
    return {
      toView: "red",
      scrollTop: 100,
      msgList: [
        { title: "1 热点城市渐迎零折扣时代" },
        { title: "2 你能省多少话费？" },
        { title: "3:被要求给他人伴唱" },
        { title: "4 热点城市渐迎零折扣时代" },
        { title: "5 你能省多少话费？" },
        { title: "6:被要求给他人伴唱" },
        { title: "7 热点城市渐迎零折扣时代" },
        { title: "8 你能省多少话费？" },
        { title: "9:被要求给他人伴唱" },
        { title: "10 热点城市渐迎零折扣时代" },
      ]
    };
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
  methods: {
    upper: function(e) {
      console.log("upperupper", e);
    },
    lower: function(e) {
      console.log("lowerlower", e);
    },
    scroll: function(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.group_list_wraper {
  padding: 0 14px 14px 14px;
  box-sizing: border-box;
  background: #fff;
  margin-bottom: 8px;
  .play_way_name {
    height: 49px;
  }
}
.slider-wrapper {
  width: 100%;
  height: 167px;
  .slide-item{
border-bottom:1px solid #F5F5F5;
  }
  .slide-item .items {
    width: 100%;
    height:92px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .items_name {
        margin-right:70px;
        display: flex;
        align-items: center;
      img {
        width: 36px;
        height: 36px;
        margin-right: 8px;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .item_people {
      display: flex;
      align-items: center;
      .time {
        p{
            text-align: right;
        }
        .people {
          font-size: 12px;
          span {
            color: #f07e1e;
          }
        }
        .time_num{
            font-size:11px;
            line-height:16px;
        }
        
      }
      .tag {
        width: 60px;
        height: 24px;
        background: rgba(240, 126, 30, 1);
        border-radius: 3px;
        font-size:12px;
        color: #fff;
        margin-left: 16px;
        text-align: center;
        line-height: 24px;
      }
    }
  }
}
</style>


