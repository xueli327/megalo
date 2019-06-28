import {
    isvalidPhone
} from '@/utils/validate'

export default {
    data() {
        return {
            codeTxt: '获取验证码',
            codeTime: 60,
            codeTimer: null,
            canclick: true,
            errPhone: false
        }
    },
    destroyed() {
        this.clearCodeTimer()
    },
    methods: {
        clearCodeTimer() {
            this.codeTime = 60
            this.codeTxt = `获取验证码`
            clearInterval(this.codeTimer)
            this.canclick = true
        },
        // 获取验证码
        sendCode(data) {
            //调用接口  sendCode(data)
            if (!isvalidPhone(data)) {
                this.errPhone = true
                // wx.showToast({
                //     title: '手机号格式错误',
                //     icon: 'none',
                //     duration: 2000
                //   })
            } else {
                this.errPhone = false
                if(this.canclick){
                    this.codeTxt = `${--this.codeTime}秒重新发送`
                    this.codeTimer = setInterval(() => {
                        if (this.codeTime > 0) {
                            this.codeTxt = `${--this.codeTime}秒重新发送`
                            this.canclick = false
                        } else {
                            this.clearCodeTimer()

                        }

                    }, 1000)
                }
               
            }

        },
        // 验证码校验是否正确
        isCode(rule, data, callback) {
            //const res = await check_code(data)
            //res.data.success ? callback() : callback(new Error(res.data.msg))
        }

    }
}