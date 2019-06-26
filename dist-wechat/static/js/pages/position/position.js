(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/position/position"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue?vue&type=template&id=fa6a2c0a&":
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
    _c("map", {
      attrs: { latitude: _vm.latitude, longitude: _vm.longitude, h_: 1 }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
var QQMapWX = __webpack_require__("./src/static/qqmap-wx-jssdk.js");

var qqmapsdk;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      latitude: 0,
      longitude: 0
    };
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount: function beforeMount() {
    console.log("Page [my] Vue beforeMount");
  },
  mounted: function mounted() {},
  onLoad: function onLoad(options) {
    var that = this;
    this.latitude = options.latitude;
    this.longitude = options.longitude;
    qqmapsdk = new QQMapWX({
      key: "HEEBZ-VQRLX-C334C-7JZ3J-YBT52-W4BC2" // 必填

    });
    this.moveToLocation();
  },
  onReady: function onReady() {},
  onShow: function onShow() {},
  onHide: function onHide() {},
  onUnload: function onUnload() {},
  methods: {
    moveToLocation: function moveToLocation() {
      var that = this;
      wx.chooseLocation({
        success: function success(res) {
          console.log(res, 'kkkkk');
          console.log(res.name); //选择地点之后返回到原来页面

          that.$router.push({
            path: '/pages/home/home',
            query: _objectSpread({}, res)
          }); // wx.navigateTo({
          //     url: "/pages/home/home?address=" + res.name
          // });
        },
        fail: function fail(err) {
          that.$router.push('/pages/home/home');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/position/position.vue?vue&type=template&id=fa6a2c0a&");
/* harmony import */ var _position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/position/position.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/position/position.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/position/position.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xueli_Desktop_mini_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xueli_Desktop_mini_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/position/position.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/position/position.vue?vue&type=template&id=fa6a2c0a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue?vue&type=template&id=fa6a2c0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_fa6a2c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/pages/position/position.vue");


/***/ })

},[[4,"runtime","vendor","common"]]]);
//# sourceMappingURL=position.js.map