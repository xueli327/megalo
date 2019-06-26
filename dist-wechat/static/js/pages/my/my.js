(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/my/my.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=template&id=93be0cca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { h_: 0 } },
    [_c("tab-bar", { attrs: { selectNavIndex: 1, h_: 2, c_: 0 } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/tabbar.vue");
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
  components: {
    tabBar: _components_tabbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      logo: 'https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png',
      color: '#007d37',
      acc: 'hello bigMeow'
    };
  },
  beforeCreate: function beforeCreate() {
    console.log('Page [my] Vue beforeCreate');
  },
  created: function created() {
    console.log('Page [my] Vue created');
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount: function beforeMount() {
    console.log('Page [my] Vue beforeMount');
  },
  mounted: function mounted() {
    console.log('Page [my] Vue mounted');
  },
  onLoad: function onLoad(options) {
    // Do some initialize when page load.
    console.log('Page [my] onLoad');
  },
  onReady: function onReady() {
    // Do something when page ready.
    console.log('Page [my] onReady');
  },
  onShow: function onShow() {
    // Do something when page show.
    console.log('Page [my] onShow');
  },
  onHide: function onHide() {
    // Do something when page hide.
    console.log('Page [my] onHide');
  },
  onUnload: function onUnload() {
    // Do something when page close.
    console.log('Page [my] onUnload');
  },

  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    changeStat: function changeStat() {
      this.t++;
      this.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/my/my.vue?vue&type=template&id=93be0cca&");
/* harmony import */ var _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/my/my.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/my/my.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/my/my.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/my/my.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/my/my.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/my/my.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/my/my.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_my_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/my/my.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/my/my.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/my/my.vue?vue&type=template&id=93be0cca&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=template&id=93be0cca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_my_vue_vue_type_template_id_93be0cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/pages/my/my.vue");


/***/ })

},[[3,"runtime","vendor","common"]]]);
//# sourceMappingURL=my.js.map