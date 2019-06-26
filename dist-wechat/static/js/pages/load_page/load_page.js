(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/load_page/load_page"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/load_page/load_page.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=template&id=6967e3ed&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { h_: 0 } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.flag,
            expression: "flag"
          }
        ],
        attrs: { h_: 1 }
      },
      [_c("van-loading", { attrs: { h_: 2 } })],
      1
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.flag,
            expression: "!flag"
          }
        ],
        attrs: { h_: 3 }
      },
      [
        _c("van-popup", { attrs: { show: !_vm.flag, h_: 4 } }, [
          _c(
            "div",
            { attrs: { h_: 5 } },
            [
              _c(
                "van-button",
                { attrs: { h_: 7 }, on: { getuserinfo: _vm.bindGetUserInfo } },
                []
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/mixins/login.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_login__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      flag: true
    };
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    var that = this;
    var accountInfo = wx.getAccountInfoSync();
    this.setAppId(accountInfo.miniProgram.appId); // 如果store中存在userinfo，不再执行下面的任务

    wx.getSetting({
      success: function success(res) {
        if (!res.authSetting["scope.userInfo"]) {
          that.flag = !that.flag;
        } else {
          //if (that.userinfo) {
          that.$router.push({
            path: '/pages/home/home',
            reLaunch: true
          }); // return;
          //}
        }
      }
    });
  },
  onLoad: function onLoad(options) {},
  onReady: function onReady() {},
  onShow: function onShow() {
    console.log("Page [my] onShow");
  },
  onHide: function onHide() {
    console.log("Page [my] onHide");
  },
  onUnload: function onUnload() {},
  methods: {
    bindGetUserInfo: function bindGetUserInfo(e) {
      var userInfo = e.detail.userInfo;

      if (userInfo) {
        this.oAuth();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/load_page/load_page.vue?vue&type=template&id=6967e3ed&");
/* harmony import */ var _load_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/load_page/load_page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/load_page/load_page.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/load_page/load_page.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _load_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/load_page/load_page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/mixins/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/store/user.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['appid', 'userinfo'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    setAppId: _store_user__WEBPACK_IMPORTED_MODULE_1__["SET_APP_ID"],
    setUserInfo: _store_user__WEBPACK_IMPORTED_MODULE_1__["SET_USER_INFO"]
  }), {
    // 微信的登录
    wxLogin: function wxLogin() {
      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
            console.log(res, '微信返回的信息');
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    },
    oAuth: function oAuth() {
      var code = this.wxLogin();
      code.then(function (res) {
        console.log(res);
      });
    }
  })
});

/***/ }),

/***/ "./src/pages/load_page/load_page.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/load_page/load_page.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/load_page/load_page.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_load_page_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/load_page/load_page.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/load_page/load_page.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/load_page/load_page.vue?vue&type=template&id=6967e3ed&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=template&id=6967e3ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_load_page_vue_vue_type_template_id_6967e3ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/pages/load_page/load_page.vue");


/***/ })

},[[1,"runtime","vendor","common"]]]);
//# sourceMappingURL=load_page.js.map