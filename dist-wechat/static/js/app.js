(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  onLaunch: function onLaunch(options) {//wx.hideTabBar()
    // Do something initial when launch.
  },
  onShow: function onShow(options) {
    //  wx.hideTabBar()
    // Do something when show.
    console.log("App onShow");
  },
  onHide: function onHide() {
    //  wx.hideTabBar()
    // Do something when hide.
    console.log("App onHide");
  },
  onError: function onError(msg) {
    console.log("App onError");
    console.log(msg);
  },
  globalData: function globalData() {
    return {
      a: "I am global data",
      appid: "wxe9adb0ec709438d9",
      secret: "111111"
    };
  }
});

/***/ }),

/***/ "./src/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = _interopRequireDefault(__webpack_require__("./src/App.vue"));

var _vue = _interopRequireDefault(__webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js"));

var _vuex = _interopRequireDefault(__webpack_require__("./node_modules/vuex/dist/vuex.esm.js"));

var _vhtmlPlugin = _interopRequireDefault(__webpack_require__("./node_modules/@megalo/vhtml-plugin/index.js"));

var _megaloRouterPatch = _interopRequireDefault(__webpack_require__("./node_modules/megalo-router-patch/dist/index.js"));

var _request = _interopRequireDefault(__webpack_require__("./src/utils/request.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_vue.default.use(_megaloRouterPatch.default);

_vue.default.use(_vhtmlPlugin.default);

_vue.default.use(_vuex.default);

_vue.default.prototype.$flyio = _request.default;

var store = __webpack_require__("./src/store/index.js").default;

_vue.default.prototype.$store = store;
_App.default.mpType = "app";
var app = new _vue.default(_App.default);
app.$mount();

/***/ }),

/***/ "./src/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/store/user.js");
/* harmony import */ var _getSystemInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/store/getSystemInfo.js");



/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
  modules: {
    user: _user__WEBPACK_IMPORTED_MODULE_1__["user"],
    systemInfo: _getSystemInfo__WEBPACK_IMPORTED_MODULE_2__["systemInfo"]
  }
}));

/***/ }),

/***/ "./src/utils/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Fly = __webpack_require__("./node_modules/flyio/dist/npm/wx.js");

var fly = new Fly();
fly.interceptors.request.use(function (request) {
  request.timeout = 30000;

  if (wx.getStorageSync('token')) {//检查本地缓存是否有token存在没有则重新获取
    // request.headers = {//设置请求头
    //     "content-type": "application/json",
    //     "cld.stats.page_entry": wx.getStorageSync('scene'),
    //     "version": app.globalData.version,
    //     "token": wx.getStorageSync('token')
    // }
    // return request;
  } else {// fly.lock();//锁住请求
      // return app.Load().then(res => {//重新获取token
      //     request.timeout = 30000,
      //         request.headers = {//设置请求头
      //             "content-type": "application/json",
      //             "cld.stats.page_entry": wx.getStorageSync('scene'),
      //             "version": app.globalData.version,
      //         "token": wx.getStorageSync('token')
      //         }
      //     wx.showLoading({
      //         title: "加载中",
      //         mask: true,
      //     });
      //     fly.unlock();//解锁请求
      //     return request;//继续之前的请求
      // })
    }
});
fly.interceptors.response.use(function (response) {
  return response; //请求成功之后将返回值返回
}, function (err) {
  //请求出错，根据返回状态码判断出错原因
  console.log(err);
  wx.hideLoading();

  if (err.status == 0) {
    return "网络连接异常";
  } else if (err.status == 1) {
    return "网络连接超时";
  } else if (err.status == 401) {
    return "用户未登录";
  } else {
    if (err.response.data.message) {
      return err.response.data.message;
    } else {
      return '请求数据失败,请稍后再试';
    }
  }

  ; // Do something with response error
});
/* harmony default export */ __webpack_exports__["default"] = (fly);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.js");


/***/ })

},[[0,"runtime","vendor","common"]]]);
//# sourceMappingURL=app.js.map