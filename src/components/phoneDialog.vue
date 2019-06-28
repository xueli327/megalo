<config>
{
  "usingComponents": {
     "van-notify": "../native/vant/notify/index"
  },
}
</config>
<template>
    <div>
    <!-- 弹框 -->
    <van-popup :show="is_show" class="model">
      <div class="close" @click="close">
        <van-icon name="cross" color="#1F1F1F" size="20px"/>
      </div>
      <div class="inner-box">
        <div class="title">
          绑定手机号
        </div>
        <div class="group">
          <div class="area_code">
            中国 +86
          </div>
          <input type="number" placeholder="输入手机号" class="write_phone" placeholder-style="font-size:14px;color:rgba(155,155,155,1);line-height:20px;" v-model="phone">
        </div>
         <div class="group">
          <input type="number" placeholder="输入验证码" class="code" placeholder-style="font-size:14px;color:rgba(155,155,155,1);line-height:20px;" v-model="code">
          <div class="getcode"  @click="send">
            {{codeTxt}}
          </div>
        </div>
        <button class="submit">确定绑定</button>
      </div>
    </van-popup>
    <van-notify id="van-notify" />
</div>
</template>

<script>
import mixin_check from "@/mixins/getCode";
import Notify from "../native/vant/notify/notify";

export default {
  props: ["is_show", "type"],
  mixins: [mixin_check],
  computed: {},
  data() {
    return {
      showModel: true,
      countDownTimes: "",
      phone: "",
      code: "",
      is_show: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    send() {
      this.sendCode({
        phone: this.phone
      });
      if (this.errPhone) {
        Notify({
          text: "手机号格式不正确",
          duration: 1000,
          selector: "#van-notify"
        });
      }
    },
    close() {
      this.is_show = false;
    },
    show() {
      this.is_show = true;
    }
  },
  watch: {
    is_show(val) {
      console.log(val, "valvala");
    }
  }
};
</script>
<style lang="scss" scoped>
.submit {
  width: 238px;
  height: 30px;
  background: rgba(240, 126, 30, 1);
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  margin-top: 22px;
  line-height: 30px;
  &::after {
    border: none;
  }
}
.model {
  .inner-box {
    width: 270px;
    height: 262px;
    border-radius: 5px;
    background: #fff;
  }
  .title {
    font-size: 15px;
    font-weight: 500;
    color: #1f1f1f;
    margin-top: 43px;
    text-align: center;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 14px;
  }
  .group {
    width: 242px;
    height: 46px;
    border-bottom: 1px solid rgba(245, 245, 245, 1);
    background: #fff;
    // line-height: 46px;
    display: flex;
    margin: auto;
    align-items: center;
    .area_code {
      font-size: 14px;
      font-weight: 400;
      color: rgba(31, 31, 31, 1);
      width: 78px;
    }
    .write_phone {
      height: 46px;
      //margin-left: 20px;
    }
    .code {
    }
    .getcode {
      width: 75px;
      height: 24px;
      border-radius: 3px;
      line-height: 24px;
      color: rgba(35, 38, 40, 1);
      font-size: 12px;
      text-align: center;
      border: 1px solid rgba(155, 155, 155, 1);
    }
  }
}
</style>