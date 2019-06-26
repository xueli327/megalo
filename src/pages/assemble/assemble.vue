<config>
{
  "usingComponents": {
    "van-card": "../../native/vant/card/index",
    "van-button": "../../native/vant/button/index"
  }
}
</config>
<template>
  <div class="assemble_wrapper">
    <h2>拼团推荐</h2>
    <div v-for="(item,idx) in list" class="assemble_main" :key="idx">
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
        @click="linkto"
        >
        <div slot="footer">
          <van-button size="mini">5人团</van-button>
        </div>
      </van-card>
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
          title: "商品名称",
          tag: "商品",
          desc: "商品描述",
          price: 100,
          origin_price: 200,
          imageURL:
            "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
        },
        {
          title: "商品名称",
          tag: "商品",
          desc: "商品描述",
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
        path: "/pages/assemble/assembleDetail",
        query: { id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .assemble_wrapper {
  .desc {
    margin: 20px 0 10px 0;
  }
  .custom {
    margin-bottom: 20px;
  }
  .pic,
  .title_hq {
    margin-top: 20px;
  }
}
</style>
