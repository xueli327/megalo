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
import store from "../store/getSystemInfo";
import { mapGetters } from "vuex";
import { GET_SYSTEMINFO_SUCCESS } from "../store/getSystemInfo";
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
          pagePath: "/pages/home/home",
          iconPath: "native/tabbar/home.png",
          selectedIconPath: "native/tabbar/home_on.png",
          text: "首页"
        },
        {
          pagePath: "/pages/my/my",
          iconPath: "/native/tabbar/mine.png",
          selectedIconPath: "native/tabbar/mine_on.png",
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
  height: 92px;
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
        height: 56px;
        text-align: center;
        position: relative;
        img {
          width: 56px;
          height: 56px;
          &.imgSpecial {
            width: 84px;
            height: 84px;
          }
        }
      }
      .tabbar-text {
        text-align: center;
        line-height: 36px;
        color: #979795;
        font-size: 22px;
        &.active {
          color: #45b7af;
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