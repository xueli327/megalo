<template>
  <div class="tabbar-wrap" :class="isIphoneX? 'isIphoneX':''">
      <ul class="tabbar">
          <li class="tabbar-item" v-for="(item, index) in navList" 
          :key="index"      
          @click="selectNavItem(index, item.pagePath)"
          :class="item.isSpecial ? 'wrapSpecial':''">
              <p class="tabbar-icon" >
                  <img alt="tabbar-icon" 
                  :src="selectNavIndex == index? item.selectedIconPath : item.iconPath" 
                  :class="item.isSpecial ? 'imgSpecial':''"
                  >
              </p>
              <p class="tabbar-text" :class="selectNavIndex == index? 'active':''">
                  {{item.text}} 
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//console.log(systemInfo,'systemInfo*******systemInfo*****')
// import { close } from 'fs';
export default {
  props: ["selectNavIndex"],
  computed: {
    isIphoneX() {
      
      // return true;
      // return this.systemInfo()
    }
  },
  data() {
    return {
      color: "#979795",
      selectedColor: "#45b7af",
      navList: [
        {
          pagePath: "/pages/admin/index/index",
          iconPath: "native/tabbar/shouye-zhihui@2x.png",
          selectedIconPath: "native/tabbar/shouye-dianji@2x.png",
          text: "首页"
        },
        {
          pagePath: "/pages/admin/my_center/my_center",
          iconPath: "/native/tabbar/wode-weidian@2x.png",
          selectedIconPath: "native/tabbar/wode-dianji@2x.png",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    // ...mapMutations({
    //   systemInfo: GET_SYSTEMINFO_SUCCESS
    // }),
    /**
     * 点击导航栏
     */
    selectNavItem(index, pagePath) {
      console.log(this.index);
      console.log(pagePath);

      if (index === this.selectNavIndex) {
        return false;
      }

      this.bindNavigateTo(pagePath);
    },
    /**
     * 路由跳转
     */
    bindNavigateTo(url) {
      wx.reLaunch({
        url
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabbar-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  padding-top: 6px;
  box-shadow: 0 0 2px #c4c4c4;
  background: #fff;
  &.isIphoneX {
    padding-bottom: 66rpx;
  }
  .tabbar {
    display: flex;
    .tabbar-item {
      flex: 1;
      .tabbar-icon {
        height: 20px;
        text-align: center;
        position: relative;
        img {
          width: 20px;
          height: 20px;
          &.imgSpecial {
            width: 20px;
            height: 20px;
          }
        }
      }
      .tabbar-text {
        text-align: center;
        margin-top: 3px;
        //line-height: 36px;
        color: #A7ABAF;
        font-size: 10px;
        &.active {
          color: #232628;;
        }
      }
      &.wrapSpecial {
        .tabbar-icon {
        }
      }
    }
  }
}
</style>