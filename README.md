# megalo-demo_test

## 运行

微信小程序：

```bash
npm run dev:wechat
请求使用 flyio 可以跨平台使用
文档地址：https://wendux.github.io/dist/#/doc/flyio/readme
```

支付宝小程序：

```bash
npm run dev:alipay
```

百度智能小程序：

```bash
npm run dev:swan
```

##说明
1、vuex的使用和我们平时vue项目中的使用一样
2、megalo-router-patch的使用参照：https://github.com/geminate/megalo-router-patch

// 跳转至某页面(字符串形式)   --->   navigateTo()
this.$router.push('/pages/home/index')

// 跳转至某页面(对象形式)   --->   navigateTo()
this.$router.push({ path: '/pages/home/index' })

// 跳转至某页面(带参数)   --->   navigateTo()
this.$router.push({ path: '/pages/home/index', query: { id: 1 } })

// Tab 切换   --->   switchTab()
this.$router.push({ path: '/pages/home/index', isTab: true })

// 重启至某页面   --->   reLaunch()
this.$router.push({ path: '/pages/home/index', reLaunch: true })

##目录结构
```
api --> 数据接口的封装m每个页面对应页面独立的文件
components --> 公共组件
pages --> 对应页面结构
pages/admin --> 为副包的页面即商家版
static --> 静态文件目录
store --> 项目数据store文件管理目录


