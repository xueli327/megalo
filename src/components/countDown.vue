<template>
  <span>{{countDownTimes}}</span>
</template>

<script>
// import { close } from 'fs';
export default {
  props:['times','type'],
  computed: {
   
  },
  data() {
    return {
        countDownTimes: ''
    };
  },
  created(){
        this.getCountDown(this.times,this.type)
  },
  mounted(){
  },
  methods: {
    getCountDown(timestamp,type) {
        var that=this
        setInterval(function () {
            var nowTime = new Date();
            var endTime = new Date(timestamp * 1000);
            var t = endTime.getTime() - nowTime.getTime();
            var d=Math.floor(t/1000/60/60/24);
            var hour = Math.floor(t / 1000 / 60 / 60 % 24);
            var min = Math.floor(t / 1000 / 60 % 60);
            var sec = Math.floor(t / 1000 % 60);

            if (hour < 10) {
                hour = "0" + hour;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (type==='noday'){
                that.countDownTimes =  hour + "时" + min + "分" + sec + '秒'
            } else if (type === 'day'){
                console.log('countDownTimes', that.countDownTimes);
                that.countDownTimes = d + '天' + hour + "时" + min + "分" + sec + '秒'
            }
           
        }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-wrap{

}
</style>