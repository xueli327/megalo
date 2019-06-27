<config>
{
  "usingComponents": {
    "van-card": "../../../native/vant/card/index",
    "van-button": "../../../native/vant/button/index"
  },
  navigationBarTitleText: '美小智'
}
</config>
<template>
  <div class="assemble_wrapper">
    <div v-for="(item,idx) in list" class="assemble_main" :key="idx">
      <h3>奥利菲斯轻奢皮肤管理机构（方庄店）</h3>
      <van-card
        :id="item.tag"
        :tag="item.tag"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :origin-price="item.origin_price"
        :thumb="item.imageURL"
        :lazy-load='true'
        thumb-class="pic"
        title-class="title_hq"
        price-class="price"
        custom-class="custom"
        thumb-mode="aspectFit"
        desc-class='desc'
        origin-price-class="origin_price"
        @click="linkto"
        >
      </van-card>
       <span class="tags">5人团</span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import throttle from "@/utils/throttle";

export default {
  components: {},
  data() {
    return {
      list: [
        {
          title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          tag: "商品",
          desc: "北京/朝阳",
          price: 79.99,
          origin_price: 200,
          imageURL:
            "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
        },
        {
          title: "商品名称",
          tag: "商品",
          desc: "北京/朝阳",
          price: 100,
          origin_price: 200,
          imageURL:
            "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
        }
      ]
    };
  },
  beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created() {},
  beforeMount() {},
  mounted() {},
  computed: {
    ...mapGetters(["isIphoneX"])
  },
  onLoad(options) {
    this.getSystemInfo();
    console.log(" this.$store", this.$store);

    console.log("isIphoneX", this.isIphoneX);
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
    ...mapActions(["getSystemInfo"]),
    // linkto: throttle(this.linkto),
    linkto(e) {
      console.log("qaaaaaaaaa", e);

      let id = e.currentTarget.id;
      this.$router.push({
        path: "/pages/user/assemble/assembleDetail",
        query: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_wrapper {
  .assemble_main {
    position: relative;
    margin-top: 8px;
    h3 {
      height: 37px;
      background: #fff;
      border: 1px solid #f5f5f5;
      padding: 0 14px;
      box-sizing: border-box;
      line-height: 37px;
      font-size: 15px;
      color: #232628;
    }
    .custom {
      height: 114px;
      background: #fff;
      padding: 12px 14px 14px 14px;
      box-sizing: border-box;
    }
    .title_hq {
      font-size: 14px;
      line-height: 20px;
      height: 40px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .pic {
      width: 103px;
      height: 87px;
    }
    .price,
    .title_hq,
    .desc {
      margin-left: 8px;
    }
    .price {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #f07e1e;
    }
    .desc {
      margin-bottom: 8px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: #9b9b9b;
    }
    .origin_price {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #9b9b9b;
    }
    .tags {
      width: 32px;
      height: 16px;
      display: inline-block;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #9b9b9b;
      position: absolute;
      bottom: 14px;
      right: 14px;
      background: #f5f5f5;
      border-radius: 3px;
    }
  }
}
</style>
