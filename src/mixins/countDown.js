
export default {
    data(){
        return{
            countDownTimes: '阿斯顿法国红酒和割发代首'
        }
    },
    methods: {
        getCountDown(timestamp,type) {
            let that = this
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
                    that.countDownTimes = d + '天' + hour + "时" + min + "分" + sec + '秒'
                 }
                 console.log('countDownTimes', that.countDownTimes);
             }, 1000);
            
        }
    }
}