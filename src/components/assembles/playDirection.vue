<template>
    <div class="play_direction">
        <div class="play_way_name"> 
            <span>拼团描述</span>
        </div>
        <ol class="direction_list">
            <li>1、皮肤检测分析</li>
            <li>2、温和卸妆</li>
            <li>3、细胞更新洁面乳酪温和洁面</li>
            <li>4、酵素热喷软化角质</li>
            <li>5、纳米化妆水助氧</li>
            <li>6、3D透明质酸原液导入</li>
            <li>7、电离子导入安瓶</li>
        </ol>
    </div>
</template>
<script>
export default {
  data() {
    return {};
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
.play_direction{
    background: #fff;
    padding: 14px;
    box-sizing: border-box;
    .direction_list{
        list-style-type: decimal;
        font-size:14px;
        font-weight:500;
        font-family:PingFangSC-Medium;
        li{
            margin-bottom: 8px;
            line-height:23px;
            list-style-position:inside;
        }
    }
}
</style>


