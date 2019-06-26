(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/agreement/agreement.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/assemble/assemble.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/assemble/assembleDetail.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/home/home.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/load_page/load_page.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/my/my.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=template&id=2aaf882d&scoped=true&":
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
    {
      class: _vm.isIphoneX ? "isIphoneX" : "",
      attrs: { sc_: "v-2aaf882d", h_: 0 }
    },
    [
      _c(
        "ul",
        { attrs: { h_: 1 } },
        _vm._l(
          _vm.navList,
          function(item, index, item_i2) {
            var f_ = item_i2 !== undefined ? item_i2 : index
            return _c(
              "li",
              {
                key: index,
                class: item.isSpecial ? "wrapSpecial" : "",
                attrs: { h_: 2, f_: f_, k_: "index" },
                on: {
                  click: function($event) {
                    _vm.selectNavItem(index, item.pagePath)
                  }
                }
              },
              [
                _c("p", { attrs: { h_: 3, f_: f_ } }, [
                  _c("img", {
                    class: item.isSpecial ? "imgSpecial" : "",
                    attrs: {
                      src:
                        _vm.selectNavIndex == index
                          ? item.selectedIconPath
                          : item.iconPath,
                      h_: 4,
                      f_: f_
                    }
                  })
                ]),
                _c(
                  "p",
                  {
                    class: _vm.selectNavIndex == index ? "active" : "",
                    attrs: { h_: 5, f_: f_ }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.text) +
                        " \n            ",
                      6,
                      f_
                    )
                  ]
                )
              ]
            )
          },
          [2],
          _vm._self
        ),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=template&id=04ac836e&scoped=true&":
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
    {
      class: _vm.isIphoneX ? "isIphoneX" : "",
      attrs: { sc_: "v-04ac836e", h_: 0 }
    },
    [
      _c(
        "ul",
        { attrs: { h_: 1 } },
        _vm._l(
          _vm.navList,
          function(item, index, item_i2) {
            var f_ = item_i2 !== undefined ? item_i2 : index
            return _c(
              "li",
              {
                key: index,
                class: item.isSpecial ? "wrapSpecial" : "",
                attrs: { h_: 2, f_: f_, k_: "index" },
                on: {
                  click: function($event) {
                    _vm.selectNavItem(index, item.pagePath)
                  }
                }
              },
              [
                _c("p", { attrs: { h_: 3, f_: f_ } }, [
                  _c("img", {
                    class: item.isSpecial ? "imgSpecial" : "",
                    attrs: {
                      src:
                        _vm.selectNavIndex == index
                          ? item.selectedIconPath
                          : item.iconPath,
                      h_: 4,
                      f_: f_
                    }
                  })
                ]),
                _c(
                  "p",
                  {
                    class: _vm.selectNavIndex == index ? "active" : "",
                    attrs: { h_: 5, f_: f_ }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.text) +
                        " \n            ",
                      6,
                      f_
                    )
                  ]
                )
              ]
            )
          },
          [2],
          _vm._self
        ),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=template&id=7b1a6b7e&":
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
    [
      _c("editor", { attrs: { h_: 1 } }),
      _c("tab-bar", { attrs: { selectNavIndex: 0, h_: 2, c_: 0 } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=template&id=754b2ef1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { h_: 0 } }, [])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=template&id=341b081b&scoped=true&":
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
    { attrs: { sc_: "v-341b081b", h_: 0 } },
    [
      _c("h2", { attrs: { h_: 1 } }, []),
      _vm._l(
        _vm.list,
        function(item, idx, item_i2) {
          var f_ = item_i2 !== undefined ? item_i2 : idx
          return _c(
            "div",
            { key: idx, attrs: { h_: 3, f_: f_, k_: "idx" } },
            [
              _c(
                "van-card",
                {
                  attrs: {
                    id: item.tag,
                    tag: item.tag,
                    price: item.price,
                    desc: item.desc,
                    title: item.title,
                    "origin-price": item.origin_price,
                    thumb: item.imageURL,
                    "lazy-load": true,
                    h_: 4,
                    f_: f_
                  },
                  on: { click: _vm.linkto }
                },
                [
                  _c(
                    "div",
                    {
                      attrs: { slot: "footer", h_: 5, f_: f_ },
                      slot: "footer"
                    },
                    [_c("van-button", { attrs: { h_: 6, f_: f_ } }, [])],
                    1
                  )
                ]
              )
            ],
            1
          )
        },
        [3],
        _vm._self
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=template&id=45060468&scoped=true&":
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
    { attrs: { sc_: "v-45060468", h_: 0 } },
    [
      _c(
        "swiper",
        { attrs: { h_: 2 } },
        _vm._l(
          _vm.imgUrls,
          function(item, idx, item_i2) {
            var f_ = item_i2 !== undefined ? item_i2 : idx
            return _c(
              "swiper-item",
              { key: idx, attrs: { h_: 3, f_: f_, k_: "idx" } },
              [_c("img", { attrs: { src: item, h_: 4, f_: f_ } })]
            )
          },
          [3],
          _vm._self
        ),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=template&id=087d42bb&":
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
    [
      _c("button", { attrs: { h_: 1 }, on: { click: _vm.linkto } }, []),
      _c("button", { attrs: { h_: 3 }, on: { click: _vm.getScancode } }, []),
      _c(
        "picker",
        {
          attrs: { value: _vm.dateTime1, range: _vm.dateTimeArray1, h_: 5 },
          on: {
            change: _vm.changeDateTime1,
            columnchange: _vm.changeDateTimeColumn1
          }
        },
        [
          _c("view", { attrs: { h_: 6 } }, [
            _vm._v(
              "\n      选择日期时间 " +
                _vm._s(_vm.dateTimeArray1[0][_vm.dateTime1[0]]) +
                "-" +
                _vm._s(_vm.dateTimeArray1[1][_vm.dateTime1[1]]) +
                "-" +
                _vm._s(_vm.dateTimeArray1[2][_vm.dateTime1[2]]) +
                " " +
                _vm._s(_vm.dateTimeArray1[3][_vm.dateTime1[3]]) +
                ":" +
                _vm._s(_vm.dateTimeArray1[4][_vm.dateTime1[4]]) +
                "\n    ",
              7
            )
          ])
        ],
        1
      ),
      _c("div", { attrs: { h_: 8 } }, [
        _vm._v("\n    " + _vm._s(_vm.isIphonex) + "\n  ", 9)
      ]),
      _c("tab-bar", { attrs: { selectNavIndex: 0, h_: 10, c_: 0 } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=style&index=0&id=2aaf882d&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=style&index=0&id=04ac836e&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=style&index=0&id=341b081b&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=style&index=0&id=45060468&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@megalo/vhtml-plugin/index.js":
/***/ (function(module, exports, __webpack_require__) {

var octoParse = __webpack_require__("./node_modules/octoparse/lib/index.js");

module.exports = {
  install(Vue, options) {
    Vue.prototype.$htmlParse = function (str) {
      var nodes = octoParse.htmlParse(str);
      return nodes;
    };
  }

};

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
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
 // import { close } from 'fs';

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectNavIndex"],
  computed: {
    isIphoneX: function isIphoneX() {
      return true; //   return this.$store.getters.isIphoneX;
    }
  },
  data: function data() {
    return {
      color: "#979795",
      selectedColor: "#45b7af",
      navList: [{
        pagePath: "/pages/home/home",
        iconPath: "native/tabbar/home.png",
        selectedIconPath: "native/tabbar/home_on.png",
        text: "首页"
      }, {
        pagePath: "/pages/my/my",
        iconPath: "/native/tabbar/mine.png",
        selectedIconPath: "native/tabbar/mine_on.png",
        text: "我的"
      }]
    };
  },
  methods: {
    /**
     * 点击导航栏
     */
    selectNavItem: function selectNavItem(index, pagePath) {
      console.log(this.index);
      console.log(pagePath);

      if (index === this.selectNavIndex) {
        return false;
      }

      this.bindNavigateTo(pagePath);
    },

    /**
     * 路由跳转
     */
    bindNavigateTo: function bindNavigateTo(url) {
      wx.reLaunch({
        url: url
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
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
 //console.log(systemInfo,'systemInfo*******systemInfo*****')
// import { close } from 'fs';

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectNavIndex"],
  computed: {
    isIphoneX: function isIphoneX() {// return true;
      // return this.systemInfo()
    }
  },
  data: function data() {
    return {
      color: "#979795",
      selectedColor: "#45b7af",
      navList: [{
        pagePath: "/pages/home/home",
        iconPath: "native/tabbar/home.png",
        selectedIconPath: "native/tabbar/home_on.png",
        text: "首页"
      }, {
        pagePath: "/pages/my/my",
        iconPath: "/native/tabbar/mine.png",
        selectedIconPath: "native/tabbar/mine_on.png",
        text: "我的"
      }]
    };
  },
  methods: {
    // ...mapMutations({
    //   systemInfo: GET_SYSTEMINFO_SUCCESS
    // }),

    /**
     * 点击导航栏
     */
    selectNavItem: function selectNavItem(index, pagePath) {
      console.log(this.index);
      console.log(pagePath);

      if (index === this.selectNavIndex) {
        return false;
      }

      this.bindNavigateTo(pagePath);
    },

    /**
     * 路由跳转
     */
    bindNavigateTo: function bindNavigateTo(url) {
      wx.reLaunch({
        url: url
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_adminTabbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/adminTabbar.vue");
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
  components: {
    tabBar: _components_adminTabbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png",
      color: "#007d37",
      acc: "hello bigMeow",
      list: [{
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }, {
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }, {
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }, {
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created: function created() {
    wx.login({
      success: function success(res) {
        console.log(res, 'res');
      }
    });
    console.log("Page [my] Vue created");
    var appInstance = getApp();
    console.log(appInstance.globalData); // I am global data
  },
  beforeMount: function beforeMount() {
    console.log("Page [my] Vue beforeMount");
  },
  mounted: function mounted() {
    console.log("Page [my] Vue mounted");
  },
  onLoad: function onLoad(options) {
    // Do some initialize when page load.
    console.log("Page [my] onLoad");
  },
  onReady: function onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow: function onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide: function onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload: function onUnload() {
    // Do something when page close.
    console.log("Page [my] onUnload");
  },

  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    linkto: function linkto(e) {
      var id = e.currentTarget.id;
      this.$router.push({
        path: '/pages/detail/detail',
        query: {
          id: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {};
  },
  beforeCreate: function beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  onLoad: function onLoad(options) {},
  onReady: function onReady() {},
  onShow: function onShow() {},
  onHide: function onHide() {},
  onUnload: function onUnload() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/throttle.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      list: [{
        title: "商品名称",
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }, {
        title: "商品名称",
        tag: "商品",
        desc: "商品描述",
        price: 100,
        origin_price: 200,
        imageURL: "https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isIphoneX"])),
  onLoad: function onLoad(options) {
    this.getSystemInfo();
    console.log(" this.$store", this.$store);
    console.log("isIphoneX", this.isIphoneX);
  },
  onReady: function onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow: function onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide: function onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload: function onUnload() {},
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["getSystemInfo"]), {
    // linkto: throttle(this.linkto),
    linkto: function linkto(e) {
      console.log("qaaaaaaaaa", e);
      var id = e.currentTarget.id;
      this.$router.push({
        path: "/pages/assemble/assembleDetail",
        query: {
          id: id
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  components: {},
  data: function data() {
    return {
      imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640']
    };
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  computed: {},
  onLoad: function onLoad(options) {},
  onReady: function onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow: function onShow() {
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide: function onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload: function onUnload() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tabbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/tabbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/store/user.js");
/* harmony import */ var _store_systemInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/store/systemInfo.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var QQMapWX = __webpack_require__("./src/static/qqmap-wx-jssdk.js");

var dateTimePicker = __webpack_require__("./src/utils/dateTimePicker.js");

var qqmapsdk;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    tabBar: _components_tabbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      latitude: 0,
      longitude: 0,
      date: "2018-10-01",
      time: "12:00",
      dateTimeArray: null,
      dateTime: null,
      dateTimeArray1: null,
      dateTime1: null,
      startYear: 2000,
      endYear: 2050
    };
  },
  computed: {
    isIphonex: function isIphonex() {
      console.log(this.getSystemInfo());
    }
  },
  beforeCreate: function beforeCreate() {
    console.log("Page [my] Vue beforeCreate");
  },
  created: function created() {
    var obj = dateTimePicker.dateTimePicker(this._data.startYear, this._data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this._data.startYear, this._data.endYear); // 精确到分的处理，将数组的秒去掉

    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    this._data.dateTime = obj.dateTime;
    this._data.dateTimeArray = obj.dateTimeArray;
    this._data.dateTimeArray1 = obj1.dateTimeArray;
    this._data.dateTime1 = obj1.dateTime;
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  // computed: {
  //   ...mapGetters("home", ["systemInfos"])
  // },
  onLoad: function onLoad(options) {
    var that = this; // **********地图的调用*********** //

    qqmapsdk = new QQMapWX({
      key: "HEEBZ-VQRLX-C334C-7JZ3J-YBT52-W4BC2" // 必填

    });
    wx.getLocation({
      type: "gcj02",
      //返回可以用于wx.openLocation的经纬度
      success: function success(res) {
        that.latitude = res.latitude;
        that.longitude = res.longitude;
      }
    }); // Do some initialize when page load.

    console.log("Page [my] onLoad");
    this.$flyio.get("http://192.144.205.76:8081/gift/list").then(function (d) {
      //输出请求数据
      // this[types.GET_SYSTMINFO]();
      // console.log("获取手机型号", this.systemInfos);
      //输出响应头
      console.log(d.header);
    }).catch(function (err) {
      console.log(err.status, err.message);
    });
  },
  onReady: function onReady() {
    // Do something when page ready.
    console.log("Page [my] onReady");
  },
  onShow: function onShow() {
    // console.log(this,'this')
    // console.log(this.selectComponent('#picker-date'))
    // Do something when page show.
    console.log("Page [my] onShow");
  },
  onHide: function onHide() {
    // Do something when page hide.
    console.log("Page [my] onHide");
  },
  onUnload: function onUnload() {},

  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])({
    getSystemInfo: _store_systemInfo__WEBPACK_IMPORTED_MODULE_3__["GET_SYSTEMINFO_SUCCESS"]
  }), {
    onInput: function onInput(event) {},
    linkto: function linkto() {
      this.$router.push("/pages/agreement/agreement");
    },
    changeDateTime1: function changeDateTime1(e) {
      this._data.dateTime1 = e.detail.value;
    },
    changeDateTimeColumn1: function changeDateTimeColumn1(e) {
      var arr = this._data.dateTime1,
          dateArr = this._data.dateTimeArray1;
      arr[e.detail.column] = e.detail.value;
      dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
      this._data.dateTimeArray1 = dateArr;
      this._data.dateTime1 = arr;
    },
    getScancode: function getScancode() {
      this.$router.push({
        path: "/pages/position/position",
        query: {
          latitude: this.latitude,
          longitude: this.longitude
        }
      });
    }
  })
});

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

/***/ "./node_modules/flyio/dist/npm/wx.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 13);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports = {
        type: function type(ob) {
          return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
        },
        isObject: function isObject(ob, real) {
          if (real) {
            return this.type(ob) === "object";
          } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
          }
        },
        isFormData: function isFormData(val) {
          return typeof FormData !== 'undefined' && val instanceof FormData;
        },
        trim: function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        encode: function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        },
        formatParams: function formatParams(data) {
          var str = "";
          var first = true;
          var that = this;

          if (!this.isObject(data)) {
            return data;
          }

          function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);

            if (type == "array") {
              sub.forEach(function (e, i) {
                if (!that.isObject(e)) i = "";

                _encode(e, path + ('%5B' + i + '%5D'));
              });
            } else if (type == "object") {
              for (var key in sub) {
                if (path) {
                  _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                } else {
                  _encode(sub[key], encode(key));
                }
              }
            } else {
              if (!first) {
                str += "&";
              }

              first = false;
              str += path + "=" + encode(sub);
            }
          }

          _encode(data, "");

          return str;
        },
        // Do not overwrite existing attributes
        merge: function merge(a, b) {
          for (var key in b) {
            if (!a.hasOwnProperty(key)) {
              a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
              this.merge(a[key], b[key]);
            }
          }

          return a;
        }
      };
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /*
       * author: wendu
       * email: 824783146@qq.com
       **/


      var util = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined"; //EngineWrapper can help  generating  a  http engine quickly through a adapter

      function EngineWrapper(adapter) {
        var AjaxEngine = function () {
          function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout

            this.responseURL = "";
            this.responseHeaders = {};
          }

          _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
              this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
          }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
              this.readyState = state;

              this._call("onreadystatechange");
            }
          }, {
            key: "open",
            value: function open(method, url) {
              this.method = method;

              if (!url) {
                url = location.href;
              } else {
                url = util.trim(url);

                if (url.indexOf("http") !== 0) {
                  // Normalize the request url
                  if (isBrowser) {
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }
              }

              this.responseURL = url;

              this._changeReadyState(1);
            }
          }, {
            key: "send",
            value: function send(arg) {
              var _this = this;

              arg = arg || null;
              var self = this;

              if (adapter) {
                var request = {
                  method: self.method,
                  url: self.responseURL,
                  headers: self.requestHeaders || {},
                  body: arg
                };
                util.merge(request, self._options || {});

                if (request.method === "GET") {
                  request.body = null;
                }

                self._changeReadyState(3);

                var timer = void 0;
                self.timeout = self.timeout || 0;

                if (self.timeout > 0) {
                  timer = setTimeout(function () {
                    if (self.readyState === 3) {
                      _this._call("onloadend");

                      self._changeReadyState(0);

                      self._call("ontimeout");
                    }
                  }, self.timeout);
                }

                request.timeout = self.timeout;
                adapter(request, function (response) {
                  function getAndDelete(key) {
                    var t = response[key];
                    delete response[key];
                    return t;
                  } // If the request has already timeout, return


                  if (self.readyState !== 3) return;
                  clearTimeout(timer); // Make sure the type of status is integer

                  self.status = getAndDelete("statusCode") - 0;
                  var responseText = getAndDelete("responseText");
                  var statusMessage = getAndDelete("statusMessage"); // Network error, set the status code 0

                  if (!self.status) {
                    self.statusText = responseText;

                    self._call("onerror", {
                      msg: statusMessage
                    });
                  } else {
                    // Parsing the response headers to array in a object,  because
                    // there may be multiple values with the same header name
                    var responseHeaders = getAndDelete("headers");
                    var headers = {};

                    for (var field in responseHeaders) {
                      var value = responseHeaders[field];
                      var key = field.toLowerCase(); // Is array

                      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        headers[key] = value;
                      } else {
                        headers[key] = headers[key] || [];
                        headers[key].push(value);
                      }
                    }

                    var cookies = headers["set-cookie"];

                    if (isBrowser && cookies) {
                      cookies.forEach(function (e) {
                        // Remove the http-Only property of the  cookie
                        // so that JavaScript can operate it.
                        document.cookie = e.replace(/;\s*httpOnly/ig, "");
                      });
                    }

                    self.responseHeaders = headers; // Set the fields of engine from response

                    self.statusText = statusMessage || "";
                    self.response = self.responseText = responseText;
                    self._response = response;

                    self._changeReadyState(4);

                    self._call("onload");
                  }

                  self._call("onloadend");
                });
              } else {
                console.error("Ajax require adapter");
              }
            }
          }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
              this.requestHeaders[util.trim(key)] = value;
            }
          }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
              return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
          }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
              var str = "";

              for (var key in this.responseHeaders) {
                str += key + ":" + this.getResponseHeader(key) + "\r\n";
              }

              return str || null;
            }
          }, {
            key: "abort",
            value: function abort(msg) {
              this._changeReadyState(0);

              this._call("onerror", {
                msg: msg
              });

              this._call("onloadend");
            }
          }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
              adapter = requestAdapter;
            }
          }]);

          return AjaxEngine;
        }();

        return AjaxEngine;
      } // learn more about keep-loader: https://github.com/wendux/keep-loader


      ;
      module.exports = EngineWrapper;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      function KEEP(_, cb) {
        cb();
      }

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var utils = __webpack_require__(0);

      var isBrowser = typeof document !== "undefined";

      var Fly = function () {
        function Fly(engine) {
          _classCallCheck(this, Fly);

          this.engine = engine || XMLHttpRequest;
          this.default = this; //For typeScript

          /**
           * Add  lock/unlock API for interceptor.
           *
           * Once an request/response interceptor is locked, the incoming request/response
           * will be added to a queue before they enter the interceptor, they will not be
           * continued  until the interceptor is unlocked.
           *
           * @param [interceptor] either is interceptors.request or interceptors.response
           */

          function wrap(interceptor) {
            var resolve = void 0;
            var reject = void 0;

            function _clear() {
              interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
              lock: function lock() {
                if (!resolve) {
                  interceptor.p = new Promise(function (_resolve, _reject) {
                    resolve = _resolve;
                    reject = _reject;
                  });
                }
              },
              unlock: function unlock() {
                if (resolve) {
                  resolve();

                  _clear();
                }
              },
              clear: function clear() {
                if (reject) {
                  reject("cancel");

                  _clear();
                }
              }
            });
          }

          var interceptors = this.interceptors = {
            response: {
              use: function use(handler, onerror) {
                this.handler = handler;
                this.onerror = onerror;
              }
            },
            request: {
              use: function use(handler) {
                this.handler = handler;
              }
            }
          };
          var irq = interceptors.request;
          var irp = interceptors.response;
          wrap(irp);
          wrap(irq);
          this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {},
            // Default Url params
            parseJson: true,
            // Convert response data to JSON object automatically.
            withCredentials: false
          };
        }

        _createClass(Fly, [{
          key: "request",
          value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
              if (utils.isObject(url)) {
                options = url;
                url = options.url;
              }

              options = options || {};
              options.headers = options.headers || {};

              function isPromise(p) {
                // some  polyfill implementation of Promise may be not standard,
                // so, we test by duck-typing
                return p && p.then && p.catch;
              }
              /**
               * If the request/response interceptor has been locked，
               * the new request/response will enter a queue. otherwise, it will be performed directly.
               * @param [promise] if the promise exist, means the interceptor is  locked.
               * @param [callback]
               */


              function enqueueIfLocked(promise, callback) {
                if (promise) {
                  promise.then(function () {
                    callback();
                  });
                } else {
                  callback();
                }
              } // make the http request


              function makeRequest(options) {
                data = options.body; // Normalize the request url

                url = utils.trim(options.url);
                var baseUrl = utils.trim(options.baseURL || "");
                if (!url && isBrowser && !baseUrl) url = location.href;

                if (url.indexOf("http") !== 0) {
                  var isAbsolute = url[0] === "/";

                  if (!baseUrl && isBrowser) {
                    var arr = location.pathname.split("/");
                    arr.pop();
                    baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                  }

                  if (baseUrl[baseUrl.length - 1] !== "/") {
                    baseUrl += "/";
                  }

                  url = baseUrl + (isAbsolute ? url.substr(1) : url);

                  if (isBrowser) {
                    // Normalize the url which contains the ".." or ".", such as
                    // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                    var t = document.createElement("a");
                    t.href = url;
                    url = t.href;
                  }
                }

                var responseType = utils.trim(options.responseType || "");
                var needQuery = ["GET", "HEAD", "DELETE", "OPTION"].indexOf(options.method) !== -1;
                var dataType = utils.type(data);
                var params = options.params || {}; // merge url params when the method is "GET" (data is object)

                if (needQuery && dataType === "object") {
                  params = utils.merge(data, params);
                } // encode params to String


                params = utils.formatParams(params); // save url params

                var _params = [];

                if (params) {
                  _params.push(params);
                } // Add data to url params when the method is "GET" (data is String)


                if (needQuery && data && dataType === "string") {
                  _params.push(data);
                } // make the final url


                if (_params.length > 0) {
                  url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                }

                engine.open(options.method, url); // try catch for ie >=9

                try {
                  engine.withCredentials = !!options.withCredentials;
                  engine.timeout = options.timeout || 0;

                  if (responseType !== "stream") {
                    engine.responseType = responseType;
                  }
                } catch (e) {}

                var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase]; // default content type

                var _contentType = "application/x-www-form-urlencoded"; // If the request data is json object, transforming it  to json string,
                // and set request content-type to "json". In browser,  the data will
                // be sent as RequestBody instead of FormData

                if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                  data = utils.formatParams(data);
                } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                  _contentType = 'application/json;charset=utf-8';
                  data = JSON.stringify(data);
                } //If user doesn't set content-type, set default.


                if (!(customContentType || needQuery)) {
                  options.headers[contentType] = _contentType;
                }

                for (var k in options.headers) {
                  if (k === contentType && utils.isFormData(data)) {
                    // Delete the content-type, Let the browser set it
                    delete options.headers[k];
                  } else {
                    try {
                      // In browser environment, some header fields are readonly,
                      // write will cause the exception .
                      engine.setRequestHeader(k, options.headers[k]);
                    } catch (e) {}
                  }
                }

                function onresult(handler, data, type) {
                  enqueueIfLocked(responseInterceptor.p, function () {
                    if (handler) {
                      //如果失败，添加请求信息
                      if (type) {
                        data.request = options;
                      }

                      var ret = handler.call(responseInterceptor, data, Promise);
                      data = ret === undefined ? data : ret;
                    }

                    if (!isPromise(data)) {
                      data = Promise[type === 0 ? "resolve" : "reject"](data);
                    }

                    data.then(function (d) {
                      resolve(d);
                    }).catch(function (e) {
                      reject(e);
                    });
                  });
                }

                function onerror(e) {
                  e.engine = engine;
                  onresult(responseInterceptor.onerror, e, -1);
                }

                function Err(msg, status) {
                  this.message = msg;
                  this.status = status;
                }

                engine.onload = function () {
                  try {
                    // The xhr of IE9 has not response field
                    var response = engine.response || engine.responseText;

                    if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1 // Some third engine implementation may transform the response text to json object automatically,
                    // so we should test the type of response before transforming it
                    && !utils.isObject(response)) {
                      response = JSON.parse(response);
                    }

                    var headers = engine.responseHeaders; // In browser

                    if (!headers) {
                      headers = {};
                      var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                      items.pop();
                      items.forEach(function (e) {
                        if (!e) return;
                        var key = e.split(":")[0];
                        headers[key] = engine.getResponseHeader(key);
                      });
                    }

                    var status = engine.status;
                    var statusText = engine.statusText;
                    var _data = {
                      data: response,
                      headers: headers,
                      status: status,
                      statusText: statusText
                    }; // The _response filed of engine is set in  adapter which be called in engine-wrapper.js

                    utils.merge(_data, engine._response);

                    if (status >= 200 && status < 300 || status === 304) {
                      _data.engine = engine;
                      _data.request = options;
                      onresult(responseInterceptor.handler, _data, 0);
                    } else {
                      var e = new Err(statusText, status);
                      e.response = _data;
                      onerror(e);
                    }
                  } catch (e) {
                    onerror(new Err(e.msg, engine.status));
                  }
                };

                engine.onerror = function (e) {
                  onerror(new Err(e.msg || "Network Error", 0));
                };

                engine.ontimeout = function () {
                  onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                };

                engine._options = options;
                setTimeout(function () {
                  engine.send(needQuery ? null : data);
                }, 0);
              }

              enqueueIfLocked(requestInterceptor.p, function () {
                utils.merge(options, JSON.parse(JSON.stringify(_this.config)));
                var headers = options.headers;
                headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                delete headers[contentTypeLowerCase];
                options.body = data || options.body;
                url = utils.trim(url || "");
                options.method = options.method.toUpperCase();
                options.url = url;
                var ret = options;

                if (requestInterceptorHandler) {
                  ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                }

                if (!isPromise(ret)) {
                  ret = Promise.resolve(ret);
                }

                ret.then(function (d) {
                  //if options continue
                  if (d === options) {
                    makeRequest(d);
                  } else {
                    resolve(d);
                  }
                }, function (err) {
                  reject(err);
                });
              });
            });
            promise.engine = engine;
            return promise;
          }
        }, {
          key: "all",
          value: function all(promises) {
            return Promise.all(promises);
          }
        }, {
          key: "spread",
          value: function spread(callback) {
            return function (arr) {
              return callback.apply(null, arr);
            };
          }
        }]);

        return Fly;
      }(); //For typeScript


      Fly.default = Fly;
      ["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
        Fly.prototype[e] = function (url, data, option) {
          return this.request(url, data, utils.merge({
            method: e
          }, option));
        };
      });
      ["lock", "unlock", "clear"].forEach(function (e) {
        Fly.prototype[e] = function () {
          this.interceptors.request[e]();
        };
      }); // Learn more about keep-loader: https://github.com/wendux/keep-loader

      ;
      module.exports = Fly;
      /***/
    },,,,,
    /* 3 */

    /* 4 */

    /* 5 */

    /* 6 */

    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //微信小程序适配器

      module.exports = function (request, responseCallback) {
        var con = {
          method: request.method,
          url: request.url,
          dataType: request.dataType || undefined,
          header: request.headers,
          data: request.body || {},
          responseType: request.responseType || 'text',
          success: function success(res) {
            responseCallback({
              statusCode: res.statusCode,
              responseText: res.data,
              headers: res.header,
              statusMessage: res.errMsg
            });
          },
          fail: function fail(res) {
            responseCallback({
              statusCode: res.statusCode || 0,
              statusMessage: res.errMsg
            });
          }
        };
        wx.request(con);
      };
      /***/

    },,,,,,
    /* 8 */

    /* 9 */

    /* 10 */

    /* 11 */

    /* 12 */

    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict"; //微信小程序入口

      var _Fly = __webpack_require__(2);

      var EngineWrapper = __webpack_require__(1);

      var adapter = __webpack_require__(7);

      var wxEngine = EngineWrapper(adapter);

      module.exports = function (engine) {
        return new _Fly(engine || wxEngine);
      };
      /***/

    }])
  );
});

/***/ }),

/***/ "./node_modules/megalo-router-patch/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods = __webpack_require__("./node_modules/megalo-router-patch/dist/utils/methods.js");

var _query = __webpack_require__("./node_modules/megalo-router-patch/dist/utils/query.js");

var _Vue = void 0;

var routerPatch = {
  install: function install(Vue, options) {
    if (this.installed && _Vue === Vue) return;
    this.installed = true;
    _Vue = Vue;
    var _route = {};
    var _router = {};

    var handleMixin = function handleMixin(that) {
      if (that.$parent) return;
      var $mp = that.$root.$mp;
      _route = (0, _query.parseRoute)($mp);
      _router = {
        app: that,
        mode: 'history',
        currentRoute: _route,
        push: function push(location, complete, fail, success) {
          return (0, _methods.push)(location, complete, fail, success, $mp.platform);
        },
        replace: function replace(location, complete, fail, success) {
          return (0, _methods.replace)(location, complete, fail, success, $mp.platform);
        },
        go: function go(delta) {
          return (0, _methods.go)(delta, $mp.platform);
        },
        back: function back() {
          return (0, _methods.back)($mp.platform);
        }
      };
    };

    Vue.mixin({
      onShow: function onShow() {
        handleMixin(this);
      },
      beforeCreate: function beforeCreate() {
        handleMixin(this);
      }
    });
    Object.defineProperty(Vue.prototype, '$router', {
      get: function get() {
        return _router;
      }
    });
    Object.defineProperty(Vue.prototype, '$route', {
      get: function get() {
        return _route;
      }
    });
  }
};
exports.default = routerPatch;

/***/ }),

/***/ "./node_modules/megalo-router-patch/dist/utils/methods.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = exports.push = exports.back = exports.go = undefined;

var _query = __webpack_require__("./node_modules/megalo-router-patch/dist/utils/query.js");

var go = function go(delta) {
  var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wechat';
  platform == 'wechat' && wx.navigateBack({
    delta: delta
  });
  platform == 'swan' && swan.navigateBack({
    delta: delta
  });
  platform == 'alipay' && my.navigateBack({
    delta: delta
  });
};

var back = function back() {
  var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wechat';
  platform == 'wechat' && wx.navigateBack();
  platform == 'swan' && swan.navigateBack();
  platform == 'alipay' && my.navigateBack();
};

var replace = function replace(location, complete, fail, success) {
  var platform = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'wechat';
  var url = (0, _query.parseUrl)(location);
  platform == 'wechat' && wx.redirectTo({
    url: url,
    complete: complete,
    fail: fail,
    success: success
  });
  platform == 'swan' && swan.redirectTo({
    url: url,
    complete: complete,
    fail: fail,
    success: success
  });
  platform == 'alipay' && my.redirectTo({
    url: url,
    complete: complete,
    fail: fail,
    success: success
  });
};

var push = function push(location, complete, fail, success) {
  var platform = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'wechat';
  var url = (0, _query.parseUrl)(location);
  var params = {
    url: url,
    complete: complete,
    fail: fail,
    success: success
  };

  if (location.isTab) {
    platform == 'wechat' && wx.switchTab(params);
    platform == 'swan' && swan.switchTab(params);
    platform == 'alipay' && my.switchTab(params);
    return;
  }

  if (location.reLaunch) {
    platform == 'wechat' && wx.reLaunch(params);
    platform == 'swan' && swan.reLaunch(params);
    platform == 'alipay' && my.reLaunch(params);
    return;
  }

  platform == 'wechat' && wx.navigateTo(params);
  platform == 'swan' && swan.navigateTo(params);
  platform == 'alipay' && my.navigateTo(params);
};

exports.go = go;
exports.back = back;
exports.push = push;
exports.replace = replace;

/***/ }),

/***/ "./node_modules/megalo-router-patch/dist/utils/query.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var stringifyQuery = function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return key;
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }

        if (val2 === null) {
          result.push(key);
        } else {
          result.push(key + '=' + val2);
        }
      });
      return result.join('&');
    }

    return key + '=' + val;
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? '?' + res : '';
};

var parseUrl = function parseUrl(location) {
  if (typeof location === 'string') return location;
  var path = location.path,
      query = location.query;
  var queryStr = stringifyQuery(query);
  return '' + path + queryStr;
};

var parseRoute = function parseRoute($mp) {
  var _$mp = $mp || {};

  var path = _$mp.page && _$mp.page.route;
  return {
    path: '/' + path,
    query: _$mp.query,
    fullPath: parseUrl({
      path: '/' + path,
      query: _$mp.query
    }),
    name: path && path.replace(/\/(\w)/g, function ($0, $1) {
      return $1.toUpperCase();
    })
  };
};

exports.parseUrl = parseUrl;
exports.parseRoute = parseRoute;

/***/ }),

/***/ "./node_modules/megalo/dist/megalo.mp.esm.js":
/***/ (function(module, exports, __webpack_require__) {

// fix env
try {
  if (!global) global = {};
  global.process = global.process || {};
  global.process.env = global.process.env || {};
  global.App = global.App || App;
  global.Page = global.Page || Page;
  global.Component = global.Component || Component;
  global.getApp = global.getApp || getApp;
} catch (e) {}

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';
  /*  */

  var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }
  /**
   * Check if value is primitive.
   */


  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
    typeof value === 'symbol' || typeof value === 'boolean';
  }
  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */


  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }
  /**
   * Get the raw type string of a value, e.g., [object Object].
   */


  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }
  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */


  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }
  /**
   * Check if val is a valid array index.
   */


  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
  }
  /**
   * Convert a value to a string that is actually rendered.
   */


  function toString(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }
  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */


  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }
  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */


  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');

    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }

    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }
  /**
   * Check if a tag is a built-in tag.
   */


  var isBuiltInTag = makeMap('slot,component', true);
  /**
   * Check if an attribute is a reserved attribute.
   */

  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
  /**
   * Remove an item from an array.
   */

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);

      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }
  /**
   * Check whether an object has the property.
   */


  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  /**
   * Create a cached version of a pure function.
   */


  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delimited string.
   */


  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });
  /**
   * Capitalize a string.
   */

  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */

  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });
  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */

  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;
  /**
   * Convert an Array-like object to a real Array.
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);

    while (i--) {
      ret[i] = list[i + start];
    }

    return ret;
  }
  /**
   * Mix properties into target object.
   */


  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }

    return to;
  }
  /**
   * Merge an Array of Objects into a single Object.
   */


  function toObject(arr) {
    var res = {};

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }

    return res;
  }
  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */


  function noop(a, b, c) {}
  /**
   * Always return false.
   */


  var no = function (a, b, c) {
    return false;
  };
  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */


  var identity = function (_) {
    return _;
  };
  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */


  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }

    var isObjectA = isObject(a);
    var isObjectB = isObject(b);

    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);

        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }
  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */


  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }

    return -1;
  }
  /**
   * Ensure a function is called only once.
   */


  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';
  var ASSET_TYPES = ['component', 'directive', 'filter'];
  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "production" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "production" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };
  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */

  var unicodeLetters = 'a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD';
  /**
   * Check if a string starts with $ or _
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }
  /**
   * Define a property.
   */


  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }
  /**
   * Parse simple path.
   */


  var bailRE = new RegExp("[^" + unicodeLetters + ".$_\\d]");

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }

    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }

        obj = obj[segments[i]];
      }

      return obj;
    };
  }
  /*  */
  // can we use __proto__?


  var hasProto = '__proto__' in {}; // Browser environment sniffing

  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

  var nativeWatch = {}.watch;

  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {}
      }); // https://github.com/facebook/flow/issues/285

      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  } // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV


  var _isServer;

  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }

    return _isServer;
  }; // detect devtools


  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  /* istanbul ignore next */

  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */
  // $flow-disable-line


  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set =
    /*@__PURE__*/
    function () {
      function Set() {
        this.set = Object.create(null);
      }

      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };

      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };

      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }
  /*  */


  var warn = noop;
  /*  */

  var uid = 0;
  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */

  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();

    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }; // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.


  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }
  /*  */


  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = {
    child: {
      configurable: true
    }
  }; // DEPRECATED: alias for componentInstance for backwards compat.

  /* istanbul ignore next */

  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function (text) {
    if (text === void 0) text = '';
    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  } // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.


  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data, // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }
  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */


  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
  /**
   * Intercept mutating methods and emit events
   */

  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observeArray(inserted);
      } // notify change


      ob.dep.notify();
      return result;
    });
  });
  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */

  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }
  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */


  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }

      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };
  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */


  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };
  /**
   * Observe a list of Array items.
   */


  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }; // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */


  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }
  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */

  /* istanbul ignore next */


  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }
  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */


  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }

    var ob;

    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }

    if (asRootData && ob) {
      ob.vmCount++;
    }

    return ob;
  }
  /**
   * Define a reactive property on an Object.
   */


  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property && property.configurable === false) {
      return;
    } // cater for pre-defined getter/setters


    var getter = property && property.get;
    var setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;

        if (Dep.target) {
          dep.depend();

          if (childOb) {
            childOb.dep.depend();

            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }

        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */

        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        } // #7981: for accessor properties without setter


        if (getter && !setter) {
          return;
        }

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }
  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */


  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }

    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      return val;
    }

    if (!ob) {
      target[key] = val;
      return val;
    }

    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }
  /**
   * Delete a property and trigger change if necessary.
   */


  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }

    var ob = target.__ob__;

    if (target._isVue || ob && ob.vmCount) {
      return;
    }

    if (!hasOwn(target, key)) {
      return;
    }

    delete target[key];

    if (!ob) {
      return;
    }

    ob.dep.notify();
  }
  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */


  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();

      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }
  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */


  var strats = config.optionMergeStrategies;
  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    if (!from) {
      return to;
    }

    var key, toVal, fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i]; // in case the object is already observed...

      if (key === '__ob__') {
        continue;
      }

      toVal = to[key];
      fromVal = from[key];

      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    return to;
  }
  /**
   * Data
   */


  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      } // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.


      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        return parentVal;
      }

      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };
  /**
   * Hooks and props are merged as arrays.
   */


  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];

    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }

    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });
  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);

    if (childVal) {
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });
  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }

    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */


    if (!childVal) {
      return Object.create(parentVal || null);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = {};
    extend(ret, parentVal);

    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];

      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }

      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }

    return ret;
  };
  /**
   * Other object hashes.
   */


  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "production" !== 'production') {
      assertObjectType(key, childVal, vm);
    }

    if (!parentVal) {
      return childVal;
    }

    var ret = Object.create(null);
    extend(ret, parentVal);

    if (childVal) {
      extend(ret, childVal);
    }

    return ret;
  };

  strats.provide = mergeDataOrFn;
  /**
   * Default strategy.
   */

  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };
  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */


  function normalizeProps(options, vm) {
    var props = options.props;

    if (!props) {
      return;
    }

    var res = {};
    var i, val, name;

    if (Array.isArray(props)) {
      i = props.length;

      while (i--) {
        val = props[i];

        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    }

    options.props = res;
  }
  /**
   * Normalize all injections into Object-based format
   */


  function normalizeInject(options, vm) {
    var inject = options.inject;

    if (!inject) {
      return;
    }

    var normalized = options.inject = {};

    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = {
          from: inject[i]
        };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({
          from: key
        }, val) : {
          from: val
        };
      }
    }
  }
  /**
   * Normalize raw function directives into object format.
   */


  function normalizeDirectives(options) {
    var dirs = options.directives;

    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];

        if (typeof def$$1 === 'function') {
          dirs[key] = {
            bind: def$$1,
            update: def$$1
          };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }
  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */


  function mergeOptions(parent, child, vm) {
    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child); // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.

    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;

    for (key in parent) {
      mergeField(key);
    }

    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }

    return options;
  }
  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */


  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }

    var assets = options[type]; // check local registration variations first

    if (hasOwn(assets, id)) {
      return assets[id];
    }

    var camelizedId = camelize(id);

    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }

    var PascalCaseId = capitalize(camelizedId);

    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    } // fallback to prototype chain


    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    return res;
  }
  /*  */


  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key]; // boolean casting

    var booleanIndex = getTypeIndex(Boolean, prop.type);

    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);

        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    } // check default value


    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
      // make sure to observe it.

      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }

    return value;
  }
  /**
   * Get the default value of a prop.
   */


  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }

    var def = prop.default; // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger

    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    } // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context


    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }
  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */


  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }

    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }

    return -1;
  }
  /*  */


  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;

    try {
      res = args ? handler.apply(context, args) : handler.call(context);

      if (res && !res._isVue && isPromise(res)) {
        res.catch(function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        });
      }
    } catch (e) {
      handleError(e, vm, info);
    }

    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }

    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
  /*  */


  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;

    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  } // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).


  var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:

  /* istanbul ignore next, $flow-disable-line */

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();

    timerFunc = function () {
      p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.

      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });

    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;

    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!pending) {
      pending = true;
      timerFunc();
    } // $flow-disable-line


    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }
  /*  */

  /* not type checking this file because flow doesn't play well with Proxy */

  /*  */


  var seenObjects = new _Set();
  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */

  function traverse(val) {
    _traverse(val, seenObjects);

    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);

    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }

    if (val.__ob__) {
      var depId = val.__ob__.dep.id;

      if (seen.has(depId)) {
        return;
      }

      seen.add(depId);
    }

    if (isA) {
      i = val.length;

      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;

      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }
  /*  */


  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;
      var fns = invoker.fns;

      if (Array.isArray(fns)) {
        var cloned = fns.slice();

        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }

    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;

    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) ;else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }

        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }

        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }

    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }
  /*  */


  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
      // and prevent memory leak

      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }
  /*  */


  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;

    if (isUndef(propOptions)) {
      return;
    }

    var res = {};
    var attrs = data.attrs;
    var props = data.props;

    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];

        if (!preserve) {
          delete hash[key];
        }

        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];

        if (!preserve) {
          delete hash[altKey];
        }

        return true;
      }
    }

    return false;
  }
  /*  */
  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:
  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.


  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }

    return children;
  } // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.


  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;

    for (i = 0; i < children.length; i++) {
      c = children[i];

      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }

      lastIndex = res.length - 1;
      last = res[lastIndex]; //  nested

      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }

          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }

          res.push(c);
        }
      }
    }

    return res;
  }
  /*  */


  function initProvide(vm) {
    var provide = vm.$options.provide;

    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);

    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key]);
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]; // #6574 in case the inject object is observed...

        if (key === '__ob__') {
          continue;
        }

        var provideKey = inject[key].from;
        var source = vm;

        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }

          source = source.$parent;
        }

        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          }
        }
      }

      return result;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */


  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }

    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      } // named slots should only be respected if the vnode was rendered in the
      // same context.


      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);

        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    } // ignore slots that contains only whitespace


    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }

    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }
  /*  */


  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;

    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (slots.$stable && prevSlots && prevSlots !== emptyObject && Object.keys(normalSlots).length === 0) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};

      for (var key in slots) {
        if (slots[key] && key[0] !== '$') {
          res[key] = normalizeScopedSlot(normalSlots, key, slots[key]);
        }
      }
    } // expose normal slots on scopedSlots


    for (var key$1 in normalSlots) {
      if (!(key$1 in res)) {
        res[key$1] = proxyNormalSlot(normalSlots, key$1);
      }
    } // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error


    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }

    def(res, '$stable', slots ? !!slots.$stable : true);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && res.length === 0 ? undefined : res;
    }; // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.


    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }

    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function renderList(val, render) {
    var ret, i, l, keys, key;

    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);

      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);

      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();

        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);

        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }

    if (!isDef(ret)) {
      ret = [];
    }

    ret._isVList = true;
    return ret;
  }
  /*  */

  /**
   * Runtime helper for rendering <slot>
   */


  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;

    if (scopedSlotFn) {
      // scoped slot
      props = props || {};

      if (bindObject) {
        props = extend(extend({}, bindObject), props);
      }

      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;

    if (target) {
      return this.$createElement('template', {
        slot: target
      }, nodes);
    } else {
      return nodes;
    }
  }
  /*  */

  /**
   * Runtime helper for resolving filters
   */


  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }
  /*  */


  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }
  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */


  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }
  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */


  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) ;else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }

        var hash;

        var loop = function (key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }

          var camelizedKey = camelize(key);

          if (!(key in hash) && !(camelizedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});

              on["update:" + camelizedKey] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop(key);
      }
    }

    return data;
  }
  /*  */

  /**
   * Runtime helper for rendering static trees.
   */


  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.

    if (tree && !isInFor) {
      return tree;
    } // otherwise, render a fresh tree.


    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }
  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */


  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }
  /*  */


  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) ;else {
        var on = data.on = data.on ? extend({}, data.on) : {};

        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }

    return data;
  }
  /*  */


  function resolveScopedSlots(fns, // see flow/vnode
  hasDynamicKeys, res) {
    res = res || {
      $stable: !hasDynamicKeys
    };

    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];

      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, hasDynamicKeys, res);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }

        res[slot.key] = slot.fn;
      }
    }

    return res;
  }
  /*  */


  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];

      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      }
    }

    return baseObj;
  } // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.


  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }
  /*  */


  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }
  /*  */


  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;
    var options = Ctor.options; // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check

    var contextVm;

    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent); // $flow-disable-line

      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent; // $flow-disable-line

      parent = parent._original;
    }

    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);

    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }

      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    }); // support for compiled functional template

    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options; // pre-resolve slots for renderSlot()

      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);

        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }

        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;

    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }

      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);

      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }

      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;

    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }

    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }
  /*  */

  /*  */

  /*  */

  /*  */
  // inline hooks to be invoked on component VNodes during patch


  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow

        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },
    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },
    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }

      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    },
    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;

      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true
          /* direct */
          );
        }
      }
    }
  };
  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base; // plain options object: turn it into a constructor

    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    } // if at this stage it's not a constructor or an async component factory,
    // reject.


    if (typeof Ctor !== 'function') {
      return;
    } // async component


    var asyncFactory;

    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {}; // resolve constructor options in case global mixins are applied after
    // component constructor creation

    resolveConstructorOptions(Ctor); // transform component v-model data into props & events

    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    } // extract props


    var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    } // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners


    var listeners = data.on; // replace with listeners with .native modifier
    // so it gets processed during parent component patch.

    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot
      // work around flow
      var slot = data.slot;
      data = {};

      if (slot) {
        data.slot = slot;
      }
    } // install component management hooks onto the placeholder node


    installComponentHooks(data); // return a placeholder vnode

    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
      Ctor: Ctor,
      propsData: propsData,
      listeners: listeners,
      tag: tag,
      children: children
    }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    }; // check inline-template render functions

    var inlineTemplate = vnode.data.inlineTemplate;

    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});

    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];

      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };

    merged._merged = true;
    return merged;
  } // transform component v-model info (value and callback) into
  // prop and event handler respectively.


  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';
    (data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;

    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }
  /*  */


  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
  // without getting yelled at by flow

  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }

    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      return createEmptyVNode();
    } // object syntax in v-bind


    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }

    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    } // support single function children as default scoped slot


    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;

    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }

      if (isDef(data)) {
        registerDeepBindings(data);
      }

      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;

    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }

    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];

        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  } // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes


  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }

    if (isObject(data.class)) {
      traverse(data.class);
    }
  }
  /*  */


  function initRender(vm) {
    vm._vnode = null; // the root of the child tree

    vm._staticTrees = null; // v-once cached trees

    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates

    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    }; // normalization is always applied for the public version, used in
    // user-written render functions.


    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    }; // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated


    var parentData = parentVnode && parentVnode.data;
    /* istanbul ignore else */

    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      } // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.


      vm.$vnode = _parentVnode; // render self

      var vnode;

      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render"); // return error render result,
        // or previous vnode to prevent render error causing blank component

        /* istanbul ignore else */

        {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      } // if the returned array contains only a single node, allow it


      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      } // return empty vnode in case the render function errored out


      if (!(vnode instanceof VNode)) {
        vnode = createEmptyVNode();
      } // set parent


      vnode.parent = _parentVnode;
      return vnode;
    };
  }
  /*  */


  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }

    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = {
      data: data,
      context: context,
      children: children,
      tag: tag
    };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    var owner = currentRenderingInstance;

    if (isDef(factory.owners)) {
      // already pending
      factory.owners.push(owner);
    } else {
      var owners = factory.owners = [owner];
      var sync = true;

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)

        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });
      var reject = once(function (reason) {
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });
      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);

            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject(null);
              }
            }, res.timeout);
          }
        }
      }

      sync = false; // return in case resolved synchronously

      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }
  /*  */


  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }
  /*  */


  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];

        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }
  /*  */

  /*  */


  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false; // init parent attached events

    var listeners = vm.$options._parentListeners;

    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);

      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;

    Vue.prototype.$on = function (event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup

        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;

      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this; // all

      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";

        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }

      return vm;
    };
  }
  /*  */


  var activeInstance = null;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options; // locate first non-abstract parent

    var parent = options.parent;

    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }

      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;
    vm.$children = [];
    vm.$refs = {};
    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.

      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
        /* removeOnly */
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }

      restoreActiveInstance(); // update __vue__ reference

      if (prevEl) {
        prevEl.__vue__ = null;
      }

      if (vm.$el) {
        vm.$el.__vue__ = vm;
      } // if parent is an HOC, update its $el as well


      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      } // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.

    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;

      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;

      if (vm._isBeingDestroyed) {
        return;
      }

      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true; // remove self from parent

      var parent = vm.$parent;

      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      } // teardown watchers


      if (vm._watcher) {
        vm._watcher.teardown();
      }

      var i = vm._watchers.length;

      while (i--) {
        vm._watchers[i].teardown();
      } // remove reference from data ob
      // frozen object may not have observer.


      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      } // call the last hook...


      vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

      vm.__patch__(vm._vnode, null); // fire destroyed hook


      callHook(vm, 'destroyed'); // turn off all instance listeners.

      vm.$off(); // remove __vue__ reference

      if (vm.$el) {
        vm.$el.__vue__ = null;
      } // release circular reference (#6759)


      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;

    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
    }

    callHook(vm, 'beforeMount');
    var updateComponent;
    /* istanbul ignore if */

    {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    } // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined

    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true
    /* isRenderWatcher */
    );
    hydrating = false; // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook

    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.
    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var hasDynamicScopedSlot = !!(parentVnode.data.scopedSlots && !parentVnode.data.scopedSlots.$stable || vm.$scopedSlots !== emptyObject && !vm.$scopedSlots.$stable); // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.

    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }

    vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render

    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject; // update props

    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?

        props[key] = validateProp(key, propOptions, propsData, vm);
      }

      toggleObserving(true); // keep a copy of raw propsData

      vm.$options.propsData = propsData;
    } // update listeners


    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }

    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;

      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }

    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;

      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;

      if (isInInactiveTree(vm)) {
        return;
      }
    }

    if (!vm._inactive) {
      vm._inactive = true;

      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }

      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";

    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }

    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }

    popTarget();
  }
  /*  */


  var queue = [];
  var activatedChildren = [];
  var has = {};
  var waiting = false;
  var flushing = false;
  var index = 0;
  /**
   * Reset the scheduler's state.
   */

  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    waiting = flushing = false;
  } // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.


  var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

  var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.

  if (inBrowser && getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    getNow = function () {
      return performance.now();
    };
  }
  /**
   * Flush both queues and run the watchers.
   */


  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id; // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.

    queue.sort(function (a, b) {
      return a.id - b.id;
    }); // do not cache length because more watchers might be pushed
    // as we run existing watchers

    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];

      if (watcher.before) {
        watcher.before();
      }

      id = watcher.id;
      has[id] = null;
      watcher.run();
    } // keep copies of post queues before resetting state


    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();
    resetSchedulerState(); // call component updated and activated hooks

    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue); // devtool hook

    /* istanbul ignore if */

    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;

    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;

      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }
  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */


  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true
      /* true */
      );
    }
  }
  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */


  function queueWatcher(watcher) {
    var id = watcher.id;

    if (has[id] == null) {
      has[id] = true;

      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;

        while (i > index && queue[i].id > watcher.id) {
          i--;
        }

        queue.splice(i + 1, 0, watcher);
      } // queue the flush


      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }
  /*  */


  var uid$2 = 0;
  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */

  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;

    if (isRenderWatcher) {
      vm._watcher = this;
    }

    vm._watchers.push(this); // options


    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }

    this.cb = cb;
    this.id = ++uid$2; // uid for batching

    this.active = true;
    this.dirty = this.lazy; // for lazy watchers

    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = ''; // parse expression for getter

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);

      if (!this.getter) {
        this.getter = noop;
      }
    }

    this.value = this.lazy ? undefined : this.get();
  };
  /**
   * Evaluate the getter, and re-collect dependencies.
   */


  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }

      popTarget();
      this.cleanupDeps();
    }

    return value;
  };
  /**
   * Add a dependency to this directive.
   */


  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;

    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);

      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };
  /**
   * Clean up for dependency collection.
   */


  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;

    while (i--) {
      var dep = this.deps[i];

      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }

    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */


  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */


  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();

      if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;

        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };
  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */


  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };
  /**
   * Depend on all deps collected by this watcher.
   */


  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;

    while (i--) {
      this.deps[i].depend();
    }
  };
  /**
   * Remove self from all dependencies' subscriber list.
   */


  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }

      var i = this.deps.length;

      while (i--) {
        this.deps[i].removeSub(this);
      }

      this.active = false;
    }
  };
  /*  */


  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };

    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;

    if (opts.props) {
      initProps(vm, opts.props);
    }

    if (opts.methods) {
      initMethods(vm, opts.methods);
    }

    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true
      /* asRootData */
      );
    }

    if (opts.computed) {
      initComputed(vm, opts.computed);
    }

    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.

    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent; // root instance props should be converted

    if (!isRoot) {
      toggleObserving(false);
    }

    var loop = function (key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */

      {
        defineReactive$$1(props, key, value);
      } // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.

      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);

    toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

    if (!isPlainObject(data)) {
      data = {};
    } // proxy data on instance


    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;

    while (i--) {
      var key = keys[i];
      if (props && hasOwn(props, key)) ;else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    } // observe data


    observe(data, true
    /* asRootData */
    );
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();

    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      } // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.


      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }

    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];

      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }

        if (Dep.target) {
          watcher.depend();
        }

        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;

    for (var key in methods) {
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];

      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }

    if (typeof handler === 'string') {
      handler = vm[handler];
    }

    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};

    dataDef.get = function () {
      return this._data;
    };

    var propsDef = {};

    propsDef.get = function () {
      return this._props;
    };

    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);
    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;

      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }

      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);

      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }

      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }
  /*  */


  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this; // a uid

      vm._uid = uid$3++; // a flag to avoid this being observed

      vm._isVue = true; // merge options

      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */


      {
        vm._renderProxy = vm;
      } // expose real self

      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props

      initState(vm);
      initProvide(vm); // resolve provide after data/props

      callHook(vm, 'created');

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;

    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;

      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

        var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }

        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;

    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }

        modified[key] = latest[key];
      }
    }

    return modified;
  }

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);
  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      } // additional parameters


      var args = toArray(arguments, 1);
      args.unshift(this);

      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }

      installedPlugins.push(plugin);
      return this;
    };
  }
  /*  */


  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }
  /*  */


  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;
    /**
     * Class inheritance
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;

      var Sub = function VueComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.

      if (Sub.options.props) {
        initProps$1(Sub);
      }

      if (Sub.options.computed) {
        initComputed$1(Sub);
      } // allow further extension/mixin/plugin usage


      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use; // create asset registers, so extended classes
      // can have their private assets too.

      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      }); // enable recursive self-lookup

      if (name) {
        Sub.options.components[name] = Sub;
      } // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.


      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options); // cache constructor

      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;

    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;

    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }
  /*  */


  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }

          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }

          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }
  /*  */


  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */


    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;

    for (var key in cache) {
      var cachedNode = cache[key];

      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);

        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];

    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }

    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];
  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,
    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },
    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },
    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },
    mounted: function mounted() {
      var this$1 = this;
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },
    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;

      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;

        if ( // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance; // make current key freshest

          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key); // prune oldest entry

          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }

      return vnode || slot && slot[0];
    }
  };
  var builtInComponents = {
    KeepAlive: KeepAlive
  };
  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};

    configDef.get = function () {
      return config;
    };

    Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.

    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };
    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick; // 2.6 explicit observable API

    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    }); // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.

    Vue.options._base = Vue;
    extend(Vue.options.components, builtInComponents);
    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);
  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });
  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  }); // expose FunctionalRenderContext for ssr runtime helper installation

  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });
  Vue.version = '2.6.6';
  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data; // let parentNode = vnode
    // let childNode = vnode
    // while (isDef(childNode.componentInstance)) {
    //   childNode = childNode.componentInstance._vnode
    //   if (childNode && childNode.data) {
    // data = mergeClassData(childNode.data, data)
    // }
    // }
    // while (isDef(parentNode = parentNode.parent)) {
    // if (parentNode && parentNode.data) {
    // data = mergeClassData(data, parentNode.data)
    // }
    // }
    // mp: no need to update static class

    return renderClass(data.class);
  } // function mergeClassData (child: VNodeData, parent: VNodeData): {
  //   staticClass: string,
  //   class: any
  // } {
  //   return {
  //     staticClass: concat(child.staticClass, parent.staticClass),
  //     class: isDef(child.class)
  //       ? [child.class, parent.class]
  //       : parent.class
  //   }
  // }


  function renderClass(dynamicClass) {
    if (isDef(dynamicClass)) {
      return concat(stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */


    return undefined;
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }

    if (isObject(value)) {
      return stringifyObject(value);
    }

    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */


    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;

    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }

        res += stringified;
      }
    }

    return res;
  }

  function stringifyObject(value) {
    var res = '';

    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }

        res += key;
      }
    }

    return res;
  }
  /**
   * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
   *
   * @param  {function}   func      传入函数
   * @param  {number}     wait      表示时间窗口的间隔
   * @param  {object}     [options] 如果想忽略开始边界上的调用，传入{leading: false}。
   * @param  {boolean}    [options.leading=true] 如果想忽略开始边界上的调用，传入{leading: false}。
   * @param  {number|boolean}    [options.leadingDelay=false] 开始边界上的调用延时，传入{leadingDelay: 0}。
   * @param  {boolean}    [options.trailing=true] 如果想忽略结尾边界上的调用，传入{trailing: false}
   *
   * @return {Function}
   *
   * @example
   * const throttleCallback = throttle(callback, 100);
   *
   */


  function throttle(func, wait, options) {
    if (options === void 0) options = {};
    var context, args, result;
    var timeout = null;
    var leadingDelay = options.leadingDelay === undefined ? false : options.leadingDelay; // 上次执行时间点

    var previous = 0; // 延迟执行函数

    var later = function () {
      // 若设定了开始边界不执行选项，上次执行时间始终为0
      previous = options.leading === false ? 0 : +new Date();
      timeout = null; // $flow-disable-line

      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    };

    return function () {
      var now = +new Date(); // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。

      if (!previous && options.leading === false) {
        previous = now;
      } // 延迟执行时间间隔


      var remaining = wait - (now - previous);
      context = this;
      args = arguments; // eslint-disable-line
      // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
      // remaining大于时间窗口wait，表示客户端系统时间被调整过

      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;

        if (leadingDelay === false) {
          result = func.apply(context, args);
        } else {
          setTimeout(function () {
            result = func.apply(context, args);
          }, leadingDelay);
        }

        if (!timeout) {
          context = args = null;
        } // 如果延迟执行不存在，且没有设定结尾边界不执行选项

      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  }

  function aop(fn, options) {
    if (options === void 0) options = {};
    var before = options.before;
    var after = options.after;
    return function () {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len];

      var self = this;

      if (before) {
        before.call.apply(before, [self, args].concat(args));
      }

      var ret = fn.call.apply(fn, [self].concat(args));

      if (after) {
        after.call.apply(after, [self, ret].concat(args, [ret]));
      }

      return ret;
    };
  }

  var Buffer = function Buffer() {
    this.buff = {};
  };

  Buffer.prototype.push = function push(data) {
    Object.assign(this.buff, data);
  };

  Buffer.prototype.pop = function pop() {
    var data = Object.assign({}, this.buff);
    this.buff = {};
    return data;
  };

  Buffer.prototype.shouldUpdateBuffer = function shouldUpdateBuffer(key, value) {
    if (!this.has(key)) {
      return true;
    }

    return !this.isEqual(key, value);
  };

  Buffer.prototype.isEqual = function isEqual(key, value) {
    return this.buff[key] !== undefined && this.buff[key] === value;
  };

  Buffer.prototype.has = function has(key) {
    return this.buff.hasOwnProperty(key);
  };

  function getMPPlatform() {
    var platform = '';
    /* eslint-disable */

    if (!platform) {
      platform = typeof tt !== 'undefined' ? 'toutiao' : typeof swan !== 'undefined' ? 'swan' : typeof my !== 'undefined' ? 'alipay' : typeof wx !== 'undefined' ? 'wechat' : 'unknown';
    }

    return platform;
  }

  var ROOT_DATA_VAR = '$root';
  var HOLDER_VAR = 'h';
  var SLOT_HOLDER_VAR = 's';
  var SCOPE_ID_VAR = 'd';
  var VM_ID_VAR = 'c';
  var VM_ID_PREFIX = 'cp';
  var VM_ID_SEP = 'v';
  var LIST_TAIL_SEPS = {
    swan: '_',
    wechat: '-',
    toutiao: '-',
    alipay: '-'
  };
  var HOLDER_TYPE_VARS = {
    text: 't',
    vtext: 'vt',
    if: '_if',
    for: 'li',
    class: 'cl',
    rootClass: 'rcl',
    style: 'st',
    value: 'value',
    vhtml: 'html',
    vshow: 'vs',
    slot: 'slot'
  };
  /*  */

  var notEmpty = function (e) {
    return !!e;
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  var isReservedTag = function (tag) {
    return isHTMLTag(tag);
  }; // these are reserved for web because they are directly compiled away
  // during template compilation


  var isReservedAttr = makeMap('style,class'); // Elements that you can, intentionally, leave open (and which close themselves)
  // more flexable than web

  var canBeLeftOpenTag = makeMap('web,spinner,switch,video,textarea,canvas,' + 'indicator,marquee,countdown', true);
  var isUnaryTag = makeMap('embed,img,image,input,link,meta', true);

  function mustUseProp() {
    /* console.log('mustUseProp') */
  }

  function getTagNamespace() {
    /* console.log('getTagNamespace') */
  }

  function isUnknownElement() {
    /* console.log('isUnknownElement') */
  }

  var eventTypeMap = {
    tap: ['tap', 'click'],
    begin: ['regionchange'],
    end: ['regionchange']
  };

  function getValue(obj, path) {
    if (obj === void 0) obj = {};
    if (path === void 0) path = '';
    var paths = typeof path === 'string' ? path.split('.') : path;
    return paths.reduce(function (prev, k) {
      /* istanbul ignore if */
      if (prev && isDef(prev)) {
        prev = prev[k];
      }

      return prev;
    }, obj);
  }

  function deepEqual(a, b) {
    var aType = typeof a;
    var bType = typeof b;

    if (aType !== 'object' || bType !== 'object' || aType !== bType) {
      return a === b || a === '' && b === undefined || a === undefined && b === '';
    } else {
      if (Array.isArray(a)) {
        if (a.length !== b.length) {
          return false;
        }
      }

      for (var k in a) {
        if (!deepEqual(a[k], b[k])) {
          return false;
        }
      }
    }

    return true;
  }

  var sep = null;

  function updateSep(vm) {
    if (!sep) {
      sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
    }
  }

  function getHid(vm, vnode) {
    if (vnode === void 0) vnode = {};
    updateSep(vm);
    var data = vnode.data;
    if (data === void 0) data = {};
    var h_ = isDef(data.h_) ? data.h_ : data.attrs && data.attrs.h_;
    var f_ = isDef(data.f_) ? data.f_ : data.attrs && data.attrs.f_;

    if (isDef(f_)) {
      return "" + h_ + sep + f_;
    }

    return h_;
  }

  function getScopeId(vm) {
    var vnode = vm._vnode;
    var data = vnode.data;
    if (data === void 0) data = {};
    var sc_ = isDef(data.sc_) ? data.sc_ : data.attrs && data.attrs.sc_;
    return sc_;
  }

  function calculateScopeId(vm) {
    var scopeIds = [];
    var cursor = vm;
    var prev = null;

    while (cursor) {
      if (prev === null || !isSlotParent(cursor, prev)) {
        var scopeId = getScopeId(cursor);

        if (scopeId) {
          scopeIds.unshift(scopeId);
        }
      }

      prev = cursor;
      cursor = cursor.$parent;
    }

    return scopeIds.join(' ') || '';
  }

  function getVM(vm, id) {
    if (vm === void 0) vm = {};
    var res;

    if (getVMId(vm) === "" + id) {
      return vm;
    }

    var $children = vm.$children;

    for (var i = 0; i < $children.length; ++i) {
      res = getVM($children[i], id);
      /* istanbul ignore else */

      if (res) {
        return res;
      }
    }
  }

  function getCid(vm) {
    var $vnode = vm.$vnode;
    var cid = $vnode && $vnode.data && $vnode.data.attrs.c_;
    cid = cid || '0';
    return cid;
  }

  function getFid(vm) {
    var $vnode = vm.$vnode;
    var fid = $vnode && $vnode.data && $vnode.data.attrs.f_;
    return fid;
  }

  function getFidPath(vm) {
    updateSep(vm);
    var fids = [];
    var cursor = vm;

    while (cursor) {
      var fid = getFid(cursor);

      if (isDef(fid)) {
        fids.unshift(fid);
      }

      cursor = cursor.$parent;
    }

    return fids.join(sep) || undefined;
  }

  function getVMId(vm) {
    var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
    var res = [];
    var fids = [];
    var cursor = vm;

    while (cursor) {
      var tmp = getCid(cursor);
      var fidPath = getFidPath(cursor);

      if (cursor !== vm && isDef(fidPath)) {
        tmp += "" + sep + fidPath;
      }

      var fid$1 = getFid(cursor);

      if (cursor !== vm && isDef(fid$1)) {
        fids.unshift(fid$1);
      }

      res.unshift(tmp);
      cursor = cursor.$parent;
    }

    var vmId = res.join(VM_ID_SEP);
    var fid = getFid(vm);

    if (isDef(fid)) {
      fids.push(fid);
    }

    if (fids.length) {
      return "" + vmId + sep + fids.join(sep);
    }

    return vmId;
  }

  function isSlotParent(parent, child) {
    var ref = child || {};
    var $vnode = ref.$vnode;
    if ($vnode === void 0) $vnode = {};
    var childSlotParentUId = $vnode._mpSlotParentUId;
    return isDef(childSlotParentUId) && childSlotParentUId === parent._uid;
  } // export function getVMParentId (vm) {
  //   if (vm.$parent) {
  //     return getVMId(vm.$parent)
  //   }
  //   return ''
  // }


  function isEmptyObj(obj) {
    if (obj === void 0) obj = {};
    return Object.keys(obj).length === 0;
  }

  function initVMToMP(vm) {
    var obj; // const sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat

    vm = vm || this;
    var vmId = getVMId(vm);
    var scopeId = calculateScopeId(vm);
    var $vnode = vm.$vnode;
    if ($vnode === void 0) $vnode = '';
    var info = {
      cid: vmId,
      cpath: "" + vmId + VM_ID_SEP
    };
    var prefix = ROOT_DATA_VAR + "." + vmId;

    vm.$mp._update((obj = {}, obj[prefix + ".n"] = $vnode.tag || '$root', obj[prefix + "." + SCOPE_ID_VAR] = ' ' + (scopeId || ''), obj[prefix + "." + VM_ID_VAR] = info.cid, obj[prefix + "." + VM_ID_PREFIX] = info.cpath, obj));
  }

  function updateMPData(type, data, vnode) {
    var obj;
    if (type === void 0) type = HOLDER_TYPE_VARS.text;
    var vm = this;
    var vmId = getVMId(vm);
    var hid = getHid(vm, vnode);
    var camelizedType = camelize(type);
    var holderVar = vnode.slotContext && vnode.context !== vnode.slotContext ? SLOT_HOLDER_VAR : HOLDER_VAR;
    var dataPaths = [ROOT_DATA_VAR, vmId, holderVar, hid, camelizedType];
    var dataPathStr = dataPaths.join('.');
    var curValue = getValue(vm.$mp.page.data, dataPaths);
    /* istanbul ignore else */

    if (isDef(hid)) {
      var isDeepEqual = deepEqual(curValue, data);
      /* istanbul ignore else */

      if (!isDeepEqual || vm.$mp._shouldUpdateBuffer(dataPathStr, data)) {
        vm.$mp._update((obj = {}, obj[dataPathStr] = data, obj));
      }
    }
  }

  function createUpdateFn(page, options) {
    var buffer = new Buffer();

    var __refreshInterval = options.__refreshInterval || 50;

    function doUpdate() {
      var data = buffer.pop();

      if (!isEmptyObj(data) && page.setData) {
        page.setData(data);
      }
    }

    var throttleSetData = throttle(function () {
      doUpdate();
    }, __refreshInterval, {
      leadingDelay: 0
    });
    return {
      update: function update(data) {
        buffer.push(data);
        throttleSetData();
      },
      instantUpdate: function instantUpdate() {
        doUpdate();
      },
      shouldUpdateBuffer: function shouldUpdateBuffer(key, value) {
        return buffer.shouldUpdateBuffer(key, value);
      }
    };
  }

  function updateVnodeToMP(vnode, key, value) {
    if (key === void 0) key = HOLDER_TYPE_VARS.text;
    var context = vnode.context;
    var slotContext = vnode.slotContext;
    var realContext = slotContext || context;
    realContext && realContext.$updateMPData(key, value, vnode);
    /* istanbul ignore if */

    if (!realContext) {
      console.warn('update text with no context', key, value, vnode);
    }
  }

  var sep$1 = '';

  function assertHid(vnode, hid) {
    var data = vnode.data;
    if (data === void 0) data = {};
    var attrs = data.attrs;
    if (attrs === void 0) attrs = {};
    var h_ = attrs.h_;
    var f_ = attrs.f_;
    var curHid = isDef(f_) ? "" + h_ + sep$1 + f_ : h_;
    return "" + curHid === "" + hid;
  }

  function proxyEvent(rootVM, event) {
    if (!sep$1) {
      sep$1 = LIST_TAIL_SEPS[rootVM.$mp.platform] || LIST_TAIL_SEPS.wechat;
    }

    var type = event.type;
    var detail = event.detail;
    if (detail === void 0) detail = {};
    var target = event.currentTarget || event.target;
    var dataset = target.dataset;
    if (dataset === void 0) dataset = {};
    var cid = dataset.cid;
    var hid = dataset.hid;
    var vm = getVM(rootVM, cid);
    var handlers = getHandlers(vm, type, hid);
    var $event = Object.assign({}, event);
    Object.assign(event.target, {
      value: detail.value
    });
    handlers.forEach(function (handler) {
      handler($event);
    });
  }

  function getVnode(vnode, hid) {
    if (vnode === void 0) vnode = {};
    var children = vnode.children;
    if (children === void 0) children = [];

    if (assertHid(vnode, hid)) {
      return vnode;
    }

    for (var i = 0, len = children.length; i < len; ++i) {
      var res = getVnode(children[i], hid);

      if (res) {
        return res;
      }
    }
  }

  var eventPrefixes = ['', '!', '~'];

  function getHandlers(vm, rawType, hid) {
    var res = [];
    /* istanbul ignore if */

    if (!vm) {
      return res;
    }

    var vnode = getVnode(vm._vnode, hid);

    if (!vnode) {
      return res;
    }
    /* istanbul ignore if */


    if (!assertHid(vnode, hid)) {
      return res;
    }

    res = getHandlersFromVnode(vm, vnode, rawType);
    return res;
  }

  function getHandlersFromVnode(vm, vnode, rawType) {
    var elm = vnode.elm;
    var data = vnode.data;
    if (data === void 0) data = {};
    var dataOn = data.on || {};
    var on = elm.on;
    if (on === void 0) on = {};
    var type = rawType.toLowerCase();
    var eventTypes = eventTypeMap[type] || [type];
    var handlerIsUndefined = true;

    if (type !== rawType) {
      eventTypes.push(rawType);
    }

    var res = eventTypes.reduce(function (buf, event) {
      var handler = on[event];
      /* istanbul ignore if */

      if (Array.isArray(handler)) {
        buf = buf.concat(handler);
      } // try to find registered undefined handler
      // if the handler is defined, set handlerIsUndefined to be true
      // otherwise, throw an error


      eventPrefixes.forEach(function (prefix) {
        var dataEventName = prefix + event;

        if (dataOn.hasOwnProperty(dataEventName) && dataOn[dataEventName] !== undefined) {
          handlerIsUndefined = false;
        }
      });
      return buf;
    }, []); // throws error if an undefined handler is registered

    if (handlerIsUndefined) {
      var msg = "event: handler for \"" + rawType + "\" is undefined";
      var error = new Error(msg);
      handleError(error, vm, msg);
    }

    return res;
  }
  /*  */


  var sep$2 = null;
  /**
   * Runtime helper for rendering <slot>
   */

  function afterRenderSlot$$1(nodes, name, fallback, props, bindObject) {
    if (!sep$2) {
      sep$2 = LIST_TAIL_SEPS[this.$mp.platform] || LIST_TAIL_SEPS.wechat;
    } // single tag:
    // <CompA><span slot-scope="props">{{ props.msg }}</span></CompA>


    if (nodes && nodes.tag) {
      nodes = [nodes];
    }

    if (!nodes || !nodes.length) {
      return nodes;
    }

    var firstNode = getFirstNode(nodes);

    if (firstNode.__slotWalked) {
      return nodes;
    }

    firstNode.__slotWalked = true;
    var slotFid = props.f_;
    var hostFId = this.$vnode.data.attrs.f_;
    walkVnodes(nodes, {
      hostFId: hostFId,
      slotContext: this,
      slotFid: slotFid
    });
    return nodes;
  }

  function getFidPath$1(vm) {
    var fids = [];
    var cursor = vm;

    while (cursor) {
      var fid = getFid(cursor);

      if (isDef(fid)) {
        fids.unshift(fid);
      }

      cursor = cursor.$parent;
    }

    return fids.join(sep$2) || undefined;
  }

  function walkVnodes(nodes, ref) {
    if (nodes === void 0) nodes = [];
    var hostFid = ref.hostFid;
    var slotContext = ref.slotContext;
    var slotFid = ref.slotFid;
    var fidPath = getFidPath$1(slotContext);
    var parentUId = slotContext._uid;
    nodes.forEach(function (node) {
      setSlotContextAndParentUid(node, slotContext, parentUId); // update vnode hid in scoped slot with the slot host's actual fid

      if (node.data && node.data.attrs) {
        if (/^vue-component/.test(node.tag)) {
          node.data.attrs.f_ = resolveFid([slotFid, node.data.attrs.f_]);
        } else {
          node.data.attrs.f_ = resolveFid([fidPath, slotFid, node.data.attrs.f_]);
        }
      } else if (node.data) {
        node.data.f_ = resolveFid([fidPath, slotFid, node.data.f_]);
      }

      walkVnodes(node.children, {
        hostFid: hostFid,
        slotContext: slotContext,
        fidPath: fidPath,
        slotFid: slotFid
      });
      renderIf(node, {
        fidPath: fidPath,
        slotFid: slotFid,
        slotContext: slotContext
      });

      if (node.__renderListFn) {
        var renderListVnode = node.__renderListVnode;
        renderListVnode.data.attrs.f_ = resolveFid([fidPath, slotFid, renderListVnode.data.attrs.f_]);
        renderListVnode.slotContext = slotContext;

        node.__renderListFn();
      }
    });
  }

  function renderIf(node, ref) {
    var fidPath = ref.fidPath;
    var slotFid = ref.slotFid;
    var slotContext = ref.slotContext;

    if (node.data && node.data.attrs && node.data.attrs.i_) {
      var i_ = node.data.attrs.i_;

      for (var i = 0, len = i_.length; i < len; i += 3) {
        var cond = i_[i];
        var _ifHid = i_[i + 1];
        var _ifFid = i_[i + 2];
        var realIfFid = resolveFid([fidPath, slotFid, _ifFid]);
        var ifNode = {
          slotContext: slotContext,
          data: {
            attrs: {
              h_: _ifHid,
              f_: realIfFid
            }
          }
        };
        updateVnodeToMP(ifNode, HOLDER_TYPE_VARS.if, cond);
      }
    }
  }

  function resolveFid(ids) {
    if (ids === void 0) ids = [];
    return ids.filter(function (e) {
      return isDef(e) && e !== '';
    }).join(sep$2) || undefined;
  }

  function getFirstNode(nodes) {
    var firstNode = nodes;

    while (firstNode && Array.isArray(firstNode)) {
      firstNode = firstNode[0];
    }

    return firstNode;
  }

  function setSlotContextAndParentUid(node, slotContext, parentUId) {
    var componentOptions = node.componentOptions;

    if (componentOptions) {
      node._mpSlotParentUId = parentUId;
    }

    node.slotContext = slotContext;
  }

  function renderIf$$1(cond, h_, f_) {
    var cloneVnode = {
      context: this,
      data: {
        attrs: {
          h_: h_,
          f_: f_
        }
      }
    };
    updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.if, cond);
    return cond;
  }
  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */


  function afterRenderList(ret, val, render, forInfo, context) {
    updateListToMP(ret, val, forInfo, context);
  } // TODO: support for destructuring
  // TODO: keys collecting method needs improve for
  // <li v-for="i in 3" :key="i"></li>


  function updateListToMP(vnodeList, val, forInfo, context) {
    if (vnodeList === void 0) vnodeList = [];
    var firstItem = vnodeList[0];
    var forKeys;
    var list = [];

    if (!firstItem) {
      vnodeList.push(new VNode('div'));
      firstItem = vnodeList[0];
    }
    /* istanbul ignore else */


    if (firstItem) {
      // collect v-key
      if (Array.isArray(firstItem)) {
        forKeys = firstItem.map(function (e) {
          var ref = e.data ||
          /* istanbul ignore next */
          {};
          var attrs = ref.attrs;
          if (attrs === void 0) attrs = {};
          var k_ = attrs.k_;
          if (k_ === void 0) k_ = '';
          return k_;
        });
      } else {
        var ref = firstItem.data || {};
        var attrs = ref.attrs;
        if (attrs === void 0) attrs = {};
        var k_ = attrs.k_;
        if (k_ === void 0) k_ = '';
        forKeys = [k_];
      }

      forKeys = forKeys.filter(function (e) {
        return e;
      }); // generate list array with v-key value

      var valToList = [];
      /* istanbul ignore else */

      if (Array.isArray(val) || typeof val === 'string') {
        valToList = new Array(val.length);

        for (var i = 0, l = val.length; i < l; i++) {
          valToList[i] = val[i];
        }
      } else if (typeof val === 'number') {
        valToList = new Array(val);

        for (var i$1 = 0; i$1 < val; i$1++) {
          valToList[i$1] = i$1;
        }
      } else if (isObject(val)) {
        valToList = Object.keys(val).map(function (e, i) {
          return i;
        });
      }

      list = valToList.map(function (e, i) {
        if (forKeys.length === 0) {
          return i;
        }

        return forKeys.reduce(function (res, k) {
          res[k.replace(/\./g, '_')] = getValue(val[i], k);
          return res;
        }, {});
      });
    }

    var cloneVnode = {
      context: context,
      data: {
        attrs: {
          h_: forInfo[0],
          f_: forInfo[1]
        }
      }
    }; // TODO: try not disable key diff in patching process
    // key will reuse existing vnode which won't update the vnode content
    // see unit test: with key
    // list won't update after this.list.reverse() if it's not disable
    // if is a scoped slot list

    if (firstItem && !firstItem.fn) {
      vnodeList.forEach(function (vnode) {
        if (Array.isArray(vnode)) {
          vnode.forEach(function (c) {
            delete c.key;
          });
        } else {
          delete vnode.key;
        }
      });
    }

    updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.for, list);
    var fnStoreNode = Array.isArray(firstItem) ? firstItem[0] : firstItem;

    if (fnStoreNode) {
      fnStoreNode.__renderListFn = function (vnode) {
        updateVnodeToMP(vnode || cloneVnode, HOLDER_TYPE_VARS.for, list);
      };

      fnStoreNode.__renderListVnode = cloneVnode;
    }
  }

  var app = null;

  function initRootVM(mpVM, opt, query) {
    if (opt === void 0) opt = {};
    if (query === void 0) query = {};
    var options = opt.options;
    var Component = opt.Component;
    var platform = opt.platform;
    var mpType = options.mpType;
    var mpVMOptions = query;
    var ref = createUpdateFn(mpVM, options);
    var update = ref.update;
    var instantUpdate = ref.instantUpdate;
    var shouldUpdateBuffer = ref.shouldUpdateBuffer;
    var $mp = {
      platform: platform,
      status: 'load',
      query: mpVMOptions,
      options: mpVMOptions,
      _update: update,
      _instantUpdate: instantUpdate,
      _shouldUpdateBuffer: shouldUpdateBuffer
    };

    if (mpType === 'app') {
      app = mpVM;
      Object.assign($mp, {
        app: app
      });
    } else {
      Object.assign($mp, {
        page: mpVM,
        app: app
      });
    }

    Object.assign(options, {
      $mp: $mp
    });
    var rootVM = new Component(options);
    return rootVM;
  }
  /*  */


  function createElement$1(tagName, vnode) {
    return {
      on: {}
    };
  }

  function createElementNS(namespace, tagName) {
    return {};
  }

  function createTextNode(text, vnode) {
    updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
    return {
      text: text
    };
  }

  function createComment(text) {
    return {
      text: text
    };
  }

  function insertBefore(parentNode, newNode, referenceNode) {}

  function removeChild(node, child) {}

  function appendChild(node, child) {}

  function parentNode(node) {
    return {};
  }

  function nextSibling(node) {
    return {};
  }

  function tagName(node) {
    return '#';
  }

  function setTextContent(node, text, vnode) {
    updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
    return {};
  }

  function setStyleScope(node, scopeId, vnode) {
    return {};
  }

  function setAttribute(node, scopeId, v, vnode) {
    return {};
  }

  var nodeOps =
  /*#__PURE__*/
  Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope,
    setAttribute: setAttribute
  });
  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;

    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;

    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }
  /* istanbul ignore file */


  var emptyNode = new VNode('', {}, []);
  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error)) && a.data && b.data && a.data.attrs && b.data.attrs && a.data.attrs.h_ === b.data.attrs.h_ && a.data.attrs.f_ === b.data.attrs.f_;
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }

    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB;
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};

    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;

      if (isDef(key)) {
        map[key] = i;
      }
    }

    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};
    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];

      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }

      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check

      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;

      if (isDef(tag)) {
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);
        /* istanbul ignore if */

        {
          createChildren(vnode, children, insertedVnodeQueue);

          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }

          insert(parentElm, vnode.elm, refElm);
        }
      } else {
        vnode.elm = isTrue(vnode.isComment) ? nodeOps.createComment(vnode.text) : nodeOps.createTextNode(vnode.text, vnode);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;

      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false
          /* hydrating */
          );
        } // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.


        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);

          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }

      vnode.elm = vnode.componentInstance.$el;

      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode); // make sure to invoke the insert hook

        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i; // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.

      var innerNode = vnode;

      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;

        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }

          insertedVnodeQueue.push(innerNode);
          break;
        }
      } // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself


      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text), vnode));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }

      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }

      i = vnode.data.hook; // Reuse variable

      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }

        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.


    function setScope(vnode) {
      var i;

      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;

        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }

          ancestor = ancestor.parent;
        }
      } // for slot content they should also get the scopeId from the host instance.


      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }

        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }

      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];

        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;

        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        } // recursively invoke hooks on child component root node


        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }

        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }

        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions

      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }

          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];

            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }

          newStartVnode = newCh[++newStartIdx];
        }
      }

      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];

        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }

        return;
      } // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.


      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;

      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;

      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }

        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }

      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '', vnode);
          }

          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '', vnode);
        }
      } else if (oldVnode.text !== vnode.text || oldVnode.data && vnode.data && oldVnode.data.h_ !== vnode.data.h_) {
        nodeOps.setTextContent(elm, vnode.text, vnode);
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    } // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).


    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }

      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true
          /* hydrating */
          );
        }

        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }

      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;

              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }

                childNode = childNode.nextSibling;
              } // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.


              if (!childrenMatch || childNode) {
                return false;
              }
            }
          }
        }

        if (isDef(data)) {
          var fullInvoke = false;

          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }

          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }

      return true;
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);

        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }

            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              }
            } // either not server-rendered, or hydration failed.
            // create an empty node and replace it


            oldVnode = emptyNodeAt(oldVnode);
          } // replacing existing element


          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm); // create new node

          createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);

            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }

              ancestor.elm = vnode.elm;

              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                } // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.


                var insert = ancestor.data.hook.insert;

                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }

              ancestor = ancestor.parent;
            }
          } // destroy old node


          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }
  /*  */


  function createTextVNode$1(val, h_, f_) {
    var vnode = new VNode(undefined, {
      h_: h_,
      f_: f_
    }, undefined, String(val), undefined, this);
    return vnode;
  }
  /*  */
  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow


  function beforeCreateElement(args, context, tag, data, children, normalizationType, alwaysNormalize) {
    var childrenIndex = 3;

    if (Array.isArray(data) || isPrimitive(data)) {
      childrenIndex = 2;
      normalizationType = children;
      children = data;
      data = undefined;
    }

    args[childrenIndex] = normalizeChildren$1(children);
  }

  function normalizeChildren$1(children) {
    if (children === void 0) children = [];
    var res = [];

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];

      if (Array.isArray(child)) {
        res = res.concat(normalizeChildren$1(child));
      } else if (child) {
        res.push(child);
      }
    }

    return res;
  }
  /*  */


  var isHTMLTag$1 = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.

  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
  var isTextInputType = makeMap('text,number,password,search,email,tel,url');
  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode$1 = new VNode('', {}, []);
  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode$1);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode$1;
    var isDestroy = vnode === emptyNode$1;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
    var dirsWithInsert = [];
    var dirsWithPostpatch = [];
    var key, oldDir, dir;

    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];

      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);

        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);

        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };

      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);

    if (!dirs) {
      // $flow-disable-line
      return res;
    }

    var i, dir;

    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];

      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }

      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    } // $flow-disable-line


    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];

    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];
  /*  */

  var ignoreKeys = ['h_', 'f_', 'k_', 'c_', 'b_', 'sc_'];

  function isIgnoreKey(key) {
    return ignoreKeys.indexOf(key) > -1 || /^_if_/.test(key);
  }

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;

    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }

    var key, cur, old;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      if (isIgnoreKey(key)) {
        continue;
      }

      cur = attrs[key] !== undefined ? attrs[key] : '';
      old = oldAttrs[key]; // only update daynamic attrs in runtime

      if (key !== 'slot' && (old !== cur || attrs.h_ !== oldAttrs.h_ || // if it's not html tag, attribute can be object
      // just update it if is changes
      // TODO: optimize performance, diff the Array or Object first
      !isHTMLTag(vnode.tag) && typeof cur === 'object')) {
        // if using local image file, set path to the root
        if (cur && vnode.tag === 'img' && key === 'src' && !/^\/|:\/\/|data:/.test(cur)) {
          cur = "/" + cur;
        }

        updateVnodeToMP(vnode, key, cur);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };
  /*  */

  function updateClass(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);
    var rootClass;
    var rootVnode;

    if (isDef(vnode.componentInstance)) {
      var ref = vnode.data;
      var staticClass = ref.staticClass;
      if (staticClass === void 0) staticClass = '';
      var rootClassList = (cls || '').split(/\s+/).concat(staticClass.split(/\s+/)).filter(function (e) {
        return e;
      });
      rootVnode = vnode.componentInstance._vnode;
      rootClass = rootClassList.join(' ');
      cls = undefined;
    }

    if (isDef(cls)) {
      vnode.elm.class = cls;
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.class, cls);
    }

    if (isDef(rootClass)) {
      updateVnodeToMP(rootVnode, HOLDER_TYPE_VARS.rootClass, rootClass);
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };
  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key]; // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)

      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }

        if (cur === oldProps[key]) {
          continue;
        }
        /* istanbul ignore else */


        if (key === 'innerHTML') {
          var ref = vnode.context;
          var $htmlParse = ref.$htmlParse;

          if ($htmlParse) {
            var htmlNodes = $htmlParse(cur);
            updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, htmlNodes);
          } else {
            updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, cur);
          }

          return;
        } else if (key === 'textContent') {
          updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vtext, cur);
          return;
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur; // avoid resetting cursor position when value is the same

        var strCur = isUndef(cur) ? '' : String(cur);

        if (shouldUpdateValue(elm, strCur)) {
          if (elm.value !== strCur) {
            elm.value = strCur;
            updateVnodeToMP(vnode, key, strCur);
          }
        }
      } else if (elm[key] !== cur) {
        elm[key] = cur;
        updateVnodeToMP(vnode, key, cur);
      }
    }
  } // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true; // #6157
    // work around IE bug when accessing document.activeElement in an iframe

    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}

    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime

    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false;
      }

      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }

      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }

    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };
  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  }); // merge static and dynamic style data on the same vnode

  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    // return data.staticStyle
    //   ? extend(data.staticStyle, style)
    //   : style
    // mp: no need to update staticStyle

    return style;
  } // normalize possible array / string values into Object


  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }

    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }

    return bindingStyle;
  }
  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */


  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;

      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;

        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;

    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }

    return res;
  }
  /*  */


  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/; // const setProp = (el, name, val) => {
  //   /* istanbul ignore if */
  //   if (cssVarRE.test(name)) {
  //     el.style.setProperty(name, val)
  //   } else if (importantRE.test(val)) {
  //     el.style.setProperty(name, val.replace(importantRE, ''), 'important')
  //   } else {
  //     const normalizedName = normalize(name)
  //     if (Array.isArray(val)) {
  //       // Support values array created by autoprefixer, e.g.
  //       // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
  //       // Set them one by one, and the browser will only set those it can recognize
  //       for (let i = 0, len = val.length; i < len; i++) {
  //         el.style[normalizedName] = val[i]
  //       }
  //     } else {
  //       el.style[normalizedName] = val
  //     }
  //   }
  // }
  // const vendorNames = ['Webkit', 'Moz', 'ms']
  // let emptyStyle
  // const normalize = cached(function (prop) {
  //   emptyStyle = emptyStyle || {}
  //   prop = camelize(prop)
  //   if (prop !== 'filter' && (prop in emptyStyle)) {
  //     return prop
  //   }
  //   const capName = prop.charAt(0).toUpperCase() + prop.slice(1)
  //   for (let i = 0; i < vendorNames.length; i++) {
  //     const name = vendorNames[i] + capName
  //     if (name in emptyStyle) {
  //       return name
  //     }
  //   }
  //   return prop
  // })

  var normalize = cached(function (prop) {
    if (prop === void 0) prop = '';
    return prop.replace(/[A-Z]/g, function (e) {
      return "-" + e.toLowerCase();
    });
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    } // const el: any = vnode.elm
    // const oldStaticStyle: any = oldData.staticStyle
    // const oldStyleBinding: any = oldData.normalizedStyle || oldData.style || {}
    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    // const oldStyle = oldStaticStyle || oldStyleBinding


    var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.

    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
    var newStyle = getStyle(vnode, true);
    var res = [];
    var cur = Object.keys(newStyle).reduce(function (res, name) {
      var val = newStyle[name];
      var normalizedName = normalize(name);

      if (val === undefined || val === null || val === false) {
        return res;
      }

      if (cssVarRE.test(name)) {
        res.push(name + ": " + val);
      } else if (importantRE.test(val)) {
        res.push(normalizedName + ": " + val);
      } else {
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            res.push(normalizedName + ": " + val[i]);
          }
        } else {
          res.push(normalizedName + ": " + val);
        }
      }

      return res;
    }, res).filter(notEmpty).join('; ');
    updateVnodeToMP(vnode, HOLDER_TYPE_VARS.style, cur);
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };
  /*  */

  var target$1;

  function createOnceHandler$1(name, handler, capture) {
    var _target = target$1; // save current target element in closure

    return function onceHandler() {
      var res = handler.apply(null, arguments);

      if (res !== null) {
        remove$2(name, onceHandler, capture, _target);
      }
    };
  }

  function add$1(name, handler) {
    /* istanbul ignore else */
    if (!target$1.on[name]) {
      target$1.on[name] = [];
    }

    target$1.on[name].push(handler);
  }

  function remove$2(name, handler, capture, _target) {
    if (!handler) {
      return;
    }

    var realTarget = _target || target$1;
    var realHanlder = handler._withTask || handler;
    /* istanbul ignore else */

    if (realTarget.on[name]) {
      var index = realTarget.on[name].indexOf(realHanlder);
      /* istanbul ignore else */

      if (index > -1) {
        realTarget.on[name].splice(index, 1);
      }
    }
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }

    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };
  var platformModules = [attrs, klass, domProps, style, events];
  /*  */
  // the directive module should be applied last, after all
  // built-in modules have been applied.

  var modules = platformModules.concat(baseModules);
  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });

  function walkInTree(vm, fn, options) {
    if (options === void 0) options = {};
    var result;
    var bottomToTop = options.bottomToTop;
    if (bottomToTop === void 0) bottomToTop = false;

    if (!bottomToTop) {
      result = fn(vm);
    }
    /* istanbul ignore else */


    if (vm.$children) {
      for (var i = vm.$children.length - 1; i >= 0; i--) {
        var child = vm.$children[i];
        result = walkInTree(child, fn, options) || result;
      }
    }

    if (bottomToTop) {
      result = fn(vm);
    }

    return result;
  }

  function doCallHook(vm, hook, options) {
    var handlers = vm.$options[hook] || [];

    if (!Array.isArray(handlers)) {
      handlers = [handlers];
    }

    return handlers.reduce(function (res, handler) {
      try {
        return handler.call(vm, options);
      } catch (err) {
        handleError(err, vm, "lifecycle hook error \"" + hook + "\"");
      }
    }, undefined);
  }

  function callHook$2(vm, hook, options) {
    /* istanbul ignore if */
    if (!vm) {
      return;
    }

    var result;

    if (hook === 'onReady') {
      result = walkInTree(vm, function (curVM) {
        doCallHook(curVM, hook, options);
      }, {
        bottomToTop: true
      });
    } else {
      result = walkInTree(vm, function (curVM) {
        return doCallHook(curVM, hook, options);
      });
    }

    if (hook === 'onUnload') {
      var rootVM = vm.$root;
      rootVM.$destroy();
    }

    return result;
  }

  function installHooks(pageOptions, vueOptions, hooks) {
    hooks.forEach(function (hook) {
      if (vueOptions[hook] || // hooks definition is store in options in typescript
      vueOptions.options && vueOptions.options[hook]) {
        pageOptions[hook] = function hookFn(options) {
          return callHook$2(this.rootVM, hook, options);
        };
      }
    });
  }

  var page = {};
  var hooks$2 = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onTitleClick'];

  page.init = function init(vueOptions) {
    var obj;
    var pageOptions = {
      // 生命周期函数--监听页面加载
      data: (obj = {}, obj[ROOT_DATA_VAR] = {}, obj),
      onLoad: function onLoad(options) {
        var rootVM = this.rootVM = initRootVM(this, vueOptions, options);
        callHook$2(rootVM, 'onLoad', options);
        rootVM.$mount();

        rootVM.$mp._instantUpdate();
      },
      onReady: function onReady(options) {
        var rootVM = this.rootVM;
        var mp = rootVM.$mp;
        mp.status = 'ready';
        callHook$2(rootVM, 'onReady', options);
      },
      onShow: function onShow(options) {
        var rootVM = this.rootVM;
        var mp = rootVM.$mp;
        mp.status = 'show';
        callHook$2(rootVM, 'onShow', options);
      },
      onHide: function onHide(options) {
        var rootVM = this.rootVM;
        var mp = rootVM.$mp;
        mp.status = 'hide';
        callHook$2(rootVM, 'onHide', options);
      },
      onUnload: function onUnload(options) {
        var rootVM = this.rootVM;
        var mp = rootVM.$mp;
        mp.status = 'unload';
        callHook$2(rootVM, 'onUnload', options);
      },
      _pe: function _pe(e) {
        this.proxyEvent(e);
      },
      proxyEvent: function proxyEvent$1(e) {
        var rootVM = this.rootVM;
        proxyEvent(rootVM, e);
      }
    };
    installHooks(pageOptions, vueOptions.options, hooks$2);
    Page(pageOptions);
  };

  var app$1 = {};
  var hooks$3 = ['onShow', 'onHide', 'onError', 'onPageNotFound'];

  app$1.init = function (vueOptions) {
    var mpApp;
    /* istanbul ignore else */

    if (typeof my === 'undefined') {
      mpApp = App;
    } else {
      // 支付宝小程序中 App() 必须在 app.js 里调用，且不能调用多次。
      mpApp = my.__megalo.App; // eslint-disable-line
    }

    var appOptions = {
      data: {},
      globalData: {},
      onLaunch: function onLaunch(options) {
        if (options === void 0) options = {};
        var rootVM = this.rootVM = initRootVM(this, vueOptions, options.query);
        var ref = rootVM.$options;
        var globalData = ref.globalData;
        this.globalData = globalData && (typeof globalData === 'function' ? globalData.call(rootVM, options) : globalData) || {};
        rootVM.globalData = this.globalData;
        rootVM.$mount();
        callHook$2(rootVM, 'onLaunch', options);
      }
    };
    installHooks(appOptions, vueOptions.options, hooks$3);
    mpApp(appOptions);
  };

  function initMP(vm, options) {
    var mpType = options.mpType;
    if (mpType === void 0) mpType = 'page';
    var _mpPlatform = vm._mpPlatform;
    /* istanbul ignore else */

    if (mpType === 'app') {
      app$1.init({
        Component: vm.constructor,
        options: options,
        platform: _mpPlatform
      });
    } else if (mpType === 'page') {
      page.init({
        Component: vm.constructor,
        options: options,
        platform: _mpPlatform
      });
    }
  }
  /*  */
  // import { isTextInputType } from 'mp/util/element'
  // import { looseEqual, looseIndexOf } from 'shared/util'
  // import { mergeVNodeHook } from 'core/vdom/helpers/index'
  // import { warn } from 'core/util/index'

  /* istanbul ignore if */
  // if (isIE9) {
  //   // http://www.matts411.com/post/internet-explorer-9-oninput/
  //   document.addEventListener('selectionchange', () => {
  //     const el = document.activeElement
  //     if (el && el.vmodel) {
  //       trigger(el, 'input')
  //     }
  //   })
  // }


  var directive = {
    update: function update(el, ref, vnode) {
      var value = ref.value;
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.value, value);
    },
    inserted: function inserted(el, binding, vnode, oldVnode) {// if (vnode.tag === 'select') {
      //   // #6903
      //   if (oldVnode.elm && !oldVnode.elm._vOptions) {
      //     mergeVNodeHook(vnode, 'postpatch', () => {
      //       directive.componentUpdated(el, binding, vnode)
      //     })
      //   } else {
      //     setSelected(el, binding, vnode.context)
      //   }
      //   el._vOptions = [].map.call(el.options, getValue)
      // } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      //   el._vModifiers = binding.modifiers
      //   if (!binding.modifiers.lazy) {
      //     el.addEventListener('compositionstart', onCompositionStart)
      //     el.addEventListener('compositionend', onCompositionEnd)
      //     // Safari < 10.2 & UIWebView doesn't fire compositionend when
      //     // switching focus before confirming composition choice
      //     // this also fixes the issue where some browsers e.g. iOS Chrome
      //     // fires "change" instead of "input" on autocomplete.
      //     el.addEventListener('change', onCompositionEnd)
      //     /* istanbul ignore if */
      //     if (isIE9) {
      //       el.vmodel = true
      //     }
      //   }
      // }
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {// if (vnode.tag === 'select') {
      //   setSelected(el, binding, vnode.context)
      //   // in case the options rendered by v-for have changed,
      //   // it's possible that the value is out-of-sync with the rendered options.
      //   // detect such cases and filter out values that no longer has a matching
      //   // option in the DOM.
      //   const prevOptions = el._vOptions
      //   const curOptions = el._vOptions = [].map.call(el.options, getValue)
      //   if (curOptions.some((o, i) => !looseEqual(o, prevOptions[i]))) {
      //     // trigger change event if
      //     // no matching option found for at least one value
      //     const needReset = el.multiple
      //       ? binding.value.some(v => hasNoMatchingOption(v, curOptions))
      //       : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)
      //     if (needReset) {
      //       trigger(el, 'change')
      //     }
      //   }
      // }
    }
  };
  /*  */

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;
      /* istanbul ignore else */

      if (value !== oldValue) {
        updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
      }
    },
    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      if (value !== oldValue) {
        updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
      }
    },
    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {// if (!isDestroy) {
      //   el.style.display = el.__vOriginalDisplay
      // }
    }
  };
  var platformDirectives = {
    model: directive,
    show: show
  };
  /*  */
  // install platform specific utils

  var VueConfig = Vue.config;
  VueConfig.mustUseProp = mustUseProp;
  VueConfig.isReservedTag = isReservedTag;
  VueConfig.isReservedAttr = isReservedAttr;
  VueConfig.getTagNamespace = getTagNamespace;
  VueConfig.isUnknownElement = isUnknownElement;
  updateOptionMergeStrategies(VueConfig); // install platform runtime directives & components

  extend(Vue.options.directives, platformDirectives); // install platform patch function

  Vue.prototype.__patch__ = patch;
  Vue.prototype._v = createTextVNode$1;
  Vue.prototype._ri = renderIf$$1;
  Vue.prototype.$updateMPData = updateMPData;
  Vue.prototype._l = aop(Vue.prototype._l, {
    after: afterRenderList
  });
  var oInit = Vue.prototype._init;

  Vue.prototype._init = function (options) {
    if (options === void 0) options = {};

    if (!Vue.prototype._mpPlatform) {
      Vue.prototype._mpPlatform = getMPPlatform();
    }

    var $mp = options.$mp;
    var parent = options.parent;
    if (parent === void 0) parent = {};
    var mpType = options.mpType;
    if (mpType === void 0) mpType = '';
    $mp = $mp || parent.$mp;

    if (!$mp && mpType) {
      initMP(this, options);
    } else if ($mp) {
      delete options.$mp;
      this.$mp = $mp;
      oInit.call(this, options);
      this._t = aop(this._t, {
        after: afterRenderSlot$$1
      });
      this._c = aop(this._c, {
        before: beforeCreateElement
      });
      return this;
    } else {
      oInit.call(this, options);
      return this;
    }
  }; // public mount method


  Vue.prototype.$mount = function (el, hydrating) {
    if (this.$mp) {
      var vm = mountComponent(this, undefined, undefined);
      initVMToMP(vm);
      return vm;
    }
  };

  function updateOptionMergeStrategies(VueConfig) {
    var mergeHook = VueConfig.optionMergeStrategies.created;
    var strats = [// Page
    'onLoad', 'onReady', 'onShow', 'onUnload', 'onHide', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onTitleClick', // App
    'onLaunch', 'onError', 'onPageNotFound'].reduce(function (res, hook) {
      res[hook] = mergeHook;
      return res;
    }, {});
    Object.assign(VueConfig.optionMergeStrategies, strats);
  }
  /*  */


  Vue.megaloVersion = '0.10.1';
  return Vue;
});

/***/ }),

/***/ "./node_modules/octoparse/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _octoParse = __webpack_require__("./node_modules/octoparse/lib/octoParse.js");

var _mountAction = _interopRequireDefault(__webpack_require__("./node_modules/octoparse/lib/mountAction.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var octoparse = {
  htmlParse: _octoParse.htmlParse,
  install: _octoParse.install,
  mountAction: _mountAction["default"]
};
module.exports = octoparse;
var _default = octoparse;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/octoparse/lib/mountAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0; // 图片点击事件

function octoParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.currentTarget.dataset.src;
  var tagFrom = e.currentTarget.dataset.from;

  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl,
      // 当前显示图片的http链接
      // urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
      urls: [nowImgUrl]
    });
  }
} /// a 跳转事件


function octoParseTagATap(e) {
  var href = e.currentTarget.dataset.src;
} /// 默认事件


function defaultEvent(e) {}

function mountDefaultAction(wx) {
  wx.octoParseImgTap = octoParseImgTap;
  wx.octoParseTagATap = octoParseTagATap;
  wx.defaultEvent = defaultEvent;
} /////eventMap增加事件


function addEvent2EventMap(eventMap, opt) {
  if (opt.filter) {
    if (opt.filter.indexOf('#') === 0) {
      var id = opt.filter.slice(1);

      if (!eventMap['id'][id]) {
        eventMap['id'][id] = {}; // eventMap['id'][id] = Object.assign(eventMap['id'][id], opt.events); 
      }

      eventMap['id'][id] = Object.assign(eventMap['id'][id], opt.events);
    } else if (opt.filter.indexOf('.') === 0) {
      var className = opt.filter.slice(1);

      if (!eventMap['class'][className]) {
        eventMap['class'][className] = {}; // eventMap['class'][className] = Object.assign(eventMap['class'][className], opt.events);
      }

      eventMap['class'][className] = Object.assign(eventMap['class'][className], opt.events);
    }
  } else if (!opt.filter) {
    eventMap['base'] = Object.assign(eventMap['base'], opt.events);
  }
}

function findClassInRule(ruleClass, classStr) {
  var res = '';
  if (!classStr) return res;
  var classArray = classStr.split(' ');
  var length = classArray.length;

  for (var i = length - 1; i >= 0; i--) {
    var className = classArray[i].slice(1);

    if (ruleClass[className]) {
      res = className;
      break;
    }
  }

  return res;
} /////返回默认方法


function defaultEventName(e) {
  switch (e.type) {
    case 'tap':
      if (e.currentTarget.dataset.tag == 'img') {
        octoParseImgTap(e);
      } else if (e.currentTarget.dataset.tag == 'a') {
        octoParseTagATap(e);
      }

      break;

    default:
      defaultEvent(e);
  }
} ////生成挂载代理事件


function generateAgentFunc(optionArray) {
  var rule = {};

  if (Array.isArray(optionArray)) {
    optionArray.forEach(function (opt) {
      if (!rule[opt.tag]) {
        rule[opt.tag] = {
          base: {},
          "class": {},
          id: {}
        };
        addEvent2EventMap(rule[opt.tag], opt);
      } else {
        addEvent2EventMap(rule[opt.tag], opt);
      }
    });
  }

  return function (e) {
    var dataset = e.currentTarget.dataset;

    if (dataset && rule[dataset.tag]) {
      if (rule[dataset.tag]['id'][dataset.id]) {
        rule[dataset.tag]['id'][dataset.id][e.type](e);
      } else if (findClassInRule(rule[dataset.tag]['class'], dataset["class"])) {
        var className = findClassInRule(rule[dataset.tag]['class'], dataset["class"]);
        rule[dataset.tag]['class'][className][e.type](e);
      } else if (typeof rule[dataset.tag]['base'][e.type] == 'function') {
        rule[dataset.tag]['base'][e.type](e);
      } else {
        defaultEventName(e);
      }
    } else {
      return defaultEventName(e);
    }
  };
} /////事件挂载函数


function mountAction(wx, optionArray) {
  // mountDefaultAction(wx);  ////挂载默认事件
  // registerEvent2Page(wx, optionArray);  ////在page上注册所有的事件
  var agentFunc = generateAgentFunc(optionArray);
  wx.agentFunc = agentFunc; ////注册代理事件
} // module.exports = {
//     mountAction: mountAction
// }


var _default = mountAction;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/octoparse/lib/octoParse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlParse = htmlParse;
exports.install = install;

var _html2json = __webpack_require__("./node_modules/octoparse/lib/parse/html2json.js");
/**
 * utils函数引入
 **/
// function agentFunc(){
// };

/**
 * 主函数入口区
 **/


function htmlParse() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<div></div>';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var transData = {}; //存放转化后的数据

  var res = {}; //返回的数据

  transData = (0, _html2json.html2json)(data, 'root', options); // console.log('解析结果是', transData);

  res = transData;
  return res;
}
/**
 * plugin挂载方法
 **/


function install(Vue) {
  Vue.prototype.$htmlParse = htmlParse;
  Vue.prototype.$agentFunc = agentFunc;
}

/***/ }),

/***/ "./node_modules/octoparse/lib/parse/constant/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__placeImgeUrlHttps = exports.special = exports.fillAttrs = exports.closeSelf = exports.inline = exports.block = exports.empty = exports.attr = exports.endTag = exports.startTag = void 0; // Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
exports.startTag = startTag;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
exports.endTag = endTag;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; // Empty Elements - HTML 5

exports.attr = attr;
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"); // Block Elements - HTML 5

exports.empty = empty;
var block = makeMap("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"); // Inline Elements - HTML 5

exports.block = block;
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,let"); // Elements that you can, intentionally, leave open
// (and which close themselves)

exports.inline = inline;
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"); // Attributes that have their values filled in disabled="disabled"

exports.closeSelf = closeSelf;
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"); // Special Elements (can contain anything)

exports.fillAttrs = fillAttrs;
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
exports.special = special;
var __placeImgeUrlHttps = "https";
exports.__placeImgeUrlHttps = __placeImgeUrlHttps;

function makeMap(str) {
  var obj = {},
      items = str.split(",");

  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/octoparse/lib/parse/html2json.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html2json = html2json;

var _index = __webpack_require__("./node_modules/octoparse/lib/parse/utils/index.js");

var _htmlparser = __webpack_require__("./node_modules/octoparse/lib/parse/htmlparser.js");

var _decode = _interopRequireDefault(__webpack_require__("./node_modules/octoparse/lib/parse/utils/decode.js"));

var _index2 = __webpack_require__("./node_modules/octoparse/lib/parse/constant/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 * 
 */


function html2json(html) {
  var bindName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'root';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}; //处理字符串

  html = (0, _index.removeDOCTYPE)(html);
  html = (0, _index.trimHtml)(html);
  html = (0, _decode["default"])(html); //生成node节点

  var bufArray = [];
  var results = {
    node: bindName,
    nodes: [],
    images: [],
    imageUrls: []
  };
  var index = 0;
  (0, _htmlparser.HTMLParser)(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        node: 'element',
        tag: tag
      };

      if (bufArray.length === 0) {
        node.index = index.toString();
        index += 1;
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        node.index = parent.index + '.' + parent.nodes.length;
      }

      if (_index2.block[tag]) {
        node.tagType = "block";
      } else if (_index2.inline[tag]) {
        node.tagType = "inline";
      } else if (_index2.closeSelf[tag]) {
        node.tagType = "closeSelf";
      }

      if (attrs.length !== 0) {
        node.attr = attrs.reduce(function (pre, attr) {
          var name = attr.name;
          var value = attr.value;

          if (name == 'class') {
            // console.dir(value);
            //  value = value.join("")
            node.classStr = value;
          } // has multi attibutes
          // make it array of attribute


          if (name == 'style') {
            node.styleStr = value;
          }

          if (value.match(/ /) && name !== 'style') {
            value = value.split(' ');
          } else if (value.match(/;/) && name === 'style') {
            value = value.split(';');
          } // if attr already exists
          // merge it


          if (pre[name]) {
            if (Array.isArray(pre[name])) {
              // already array, push to last
              pre[name].push(value);
            } else {
              // single value, make it array
              pre[name] = [pre[name], value];
            }
          } else {
            // not exist, put it
            pre[name] = value;
          }

          return pre;
        }, {});
      } //对img添加额外数据


      if (node.tag === 'img') {
        node.imgIndex = results.images.length;
        var imgUrl = node.attr.src;

        if (imgUrl[0] == '') {
          imgUrl.splice(0, 1);
        }

        imgUrl = (0, _index.urlToHttpUrl)(imgUrl, _index2.__placeImgeUrlHttps);
        node.attr.src = imgUrl;
        node.from = bindName; // node.bindtap = test;

        results.images.push(node);
        results.imageUrls.push(imgUrl);
      } // 处理font标签样式属性


      if (node.tag === 'font') {
        var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
        var styleAttrs = {
          'color': 'color',
          'face': 'font-family',
          'size': 'font-size'
        };
        if (!node.attr.style) node.attr.style = [];
        if (!node.styleStr) node.styleStr = '';

        for (var key in styleAttrs) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.attr.style.push(styleAttrs[key]);
            node.attr.style.push(value);
            node.styleStr += styleAttrs[key] + ': ' + value + ';';
          }
        }
      } //临时记录source资源


      if (node.tag === 'source') {
        results.source = node.attr.src;
      }

      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var parent = bufArray[0] || results;

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }

      if (!node.styleStr) {
        node.styleStr = '';
      }

      if (!node.classStr) {
        node.classStr = '';
      } ////调用插件


      if (options && Array.isArray(options.plugins)) {
        options.plugins.forEach(function (plugin) {
          if (typeof plugin === 'function') {
            plugin(node);
          }
        });
      } ////调用visitors 


      if (options && options.visitors) {
        var func = options.visitors;

        if (func[node.tag]) {
          func[node.tag](node);
        }
      }
    },
    end: function end(tag) {
      //debug(tag);
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) console.error('invalid state: mismatch end tag'); //当有缓存source资源时于于video补上src资源

      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      //debug(text);
      var node = {
        node: 'text',
        text: text // textArray:transEmojiStr(text)

      };

      if (bufArray.length === 0) {
        node.index = index.toString();
        index += 1;
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        node.index = parent.index + '.' + parent.nodes.length;
        parent.nodes.push(node);
      }
    },
    comment: function comment(text) {//debug(text);
      // var node = {
      //     node: 'comment',
      //     text: text,
      // };
      // var parent = bufArray[0];
      // if (parent.nodes === undefined) {
      //     parent.nodes = [];
      // }
      // parent.nodes.push(node);
    }
  });
  return results.nodes;
}

;

/***/ }),

/***/ "./node_modules/octoparse/lib/parse/htmlparser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLParser = HTMLParser;

var _index = __webpack_require__("./node_modules/octoparse/lib/parse/constant/index.js");
/**
 * 
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 * 
 */


function HTMLParser(html, handler) {
  var index,
      chars,
      match,
      stack = [],
      last = html;

  stack.last = function () {
    return this[this.length - 1];
  };

  while (html) {
    chars = true; // console.log('stack.last是', stack.last());
    // Make sure we're not in a script or style element

    if (!stack.last() || !_index.special[stack.last()]) {
      // Comment
      if (html.indexOf("<!--") == 0) {
        index = html.indexOf("-->");

        if (index >= 0) {
          if (handler.comment) handler.comment(html.substring(4, index));
          html = html.substring(index + 3);
          chars = false;
        } // end tag

      } else if (html.indexOf("</") == 0) {
        match = html.match(_index.endTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(_index.endTag, parseEndTag); ///这句话干嘛用的？
          // console.log('替换完成后的match[0]是', match[0]);

          chars = false;
        } // start tag

      } else if (html.indexOf("<") == 0) {
        match = html.match(_index.startTag); // console.log('match的是', match);

        if (match) {
          html = html.substring(match[0].length); // console.log('replace前的是', match[0])	

          match[0].replace(_index.startTag, parseStartTag); // console.log('replace后的是', match[0])

          chars = false;
        }
      }

      if (chars) {
        index = html.indexOf("<");
        var text = '';

        while (index === 0) {
          text += "<";
          html = html.substring(1);
          index = html.indexOf("<");
        }

        text += index < 0 ? html : html.substring(0, index);
        html = index < 0 ? "" : html.substring(index);
        if (handler.chars) handler.chars(text);
      }
    } else {
      html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
        if (handler.chars) handler.chars(text);
        return "";
      });
      parseEndTag("", stack.last());
    }

    if (html == last) throw "Parse Error: " + html;
    last = html;
  } // Clean up any remaining tags


  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (_index.block[tagName]) {
      while (stack.last() && _index.inline[stack.last()]) {
        parseEndTag("", stack.last());
      }
    }

    if (_index.closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag("", tagName);
    }

    unary = _index.empty[tagName] || !!unary;
    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = []; // console.log('rest是', rest);

      rest.replace(_index.attr, function (match, name) {
        // console.log('match是', match);
        // console.log('name是', name);
        // console.log('arguments是',arguments.length)
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : _index.fillAttrs[name] ? name : ""; // console.log('value是', value);

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"

        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    if (!tagName) var pos = 0; // Find the closest opened tag of the same type
    else {
        tagName = tagName.toLowerCase();

        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) break;
        }
      }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) handler.end(stack[i]);
      } // Remove the open elements from the stack


      stack.length = pos;
    }
  }
}

;

/***/ }),

/***/ "./node_modules/octoparse/lib/parse/utils/decode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = strDecode; // HTML 支持的数学符号

function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '∀');
  str = str.replace(/&part;/g, '∂');
  str = str.replace(/&exists;/g, '∃');
  str = str.replace(/&empty;/g, '∅');
  str = str.replace(/&nabla;/g, '∇');
  str = str.replace(/&isin;/g, '∈');
  str = str.replace(/&notin;/g, '∉');
  str = str.replace(/&ni;/g, '∋');
  str = str.replace(/&prod;/g, '∏');
  str = str.replace(/&sum;/g, '∑');
  str = str.replace(/&minus;/g, '−');
  str = str.replace(/&lowast;/g, '∗');
  str = str.replace(/&radic;/g, '√');
  str = str.replace(/&prop;/g, '∝');
  str = str.replace(/&infin;/g, '∞');
  str = str.replace(/&ang;/g, '∠');
  str = str.replace(/&and;/g, '∧');
  str = str.replace(/&or;/g, '∨');
  str = str.replace(/&cap;/g, '∩');
  str = str.replace(/&cap;/g, '∪');
  str = str.replace(/&int;/g, '∫');
  str = str.replace(/&there4;/g, '∴');
  str = str.replace(/&sim;/g, '∼');
  str = str.replace(/&cong;/g, '≅');
  str = str.replace(/&asymp;/g, '≈');
  str = str.replace(/&ne;/g, '≠');
  str = str.replace(/&le;/g, '≤');
  str = str.replace(/&ge;/g, '≥');
  str = str.replace(/&sub;/g, '⊂');
  str = str.replace(/&sup;/g, '⊃');
  str = str.replace(/&nsub;/g, '⊄');
  str = str.replace(/&sube;/g, '⊆');
  str = str.replace(/&supe;/g, '⊇');
  str = str.replace(/&oplus;/g, '⊕');
  str = str.replace(/&otimes;/g, '⊗');
  str = str.replace(/&perp;/g, '⊥');
  str = str.replace(/&sdot;/g, '⋅');
  return str;
} //HTML 支持的希腊字母


function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, 'Α');
  str = str.replace(/&Beta;/g, 'Β');
  str = str.replace(/&Gamma;/g, 'Γ');
  str = str.replace(/&Delta;/g, 'Δ');
  str = str.replace(/&Epsilon;/g, 'Ε');
  str = str.replace(/&Zeta;/g, 'Ζ');
  str = str.replace(/&Eta;/g, 'Η');
  str = str.replace(/&Theta;/g, 'Θ');
  str = str.replace(/&Iota;/g, 'Ι');
  str = str.replace(/&Kappa;/g, 'Κ');
  str = str.replace(/&Lambda;/g, 'Λ');
  str = str.replace(/&Mu;/g, 'Μ');
  str = str.replace(/&Nu;/g, 'Ν');
  str = str.replace(/&Xi;/g, 'Ν');
  str = str.replace(/&Omicron;/g, 'Ο');
  str = str.replace(/&Pi;/g, 'Π');
  str = str.replace(/&Rho;/g, 'Ρ');
  str = str.replace(/&Sigma;/g, 'Σ');
  str = str.replace(/&Tau;/g, 'Τ');
  str = str.replace(/&Upsilon;/g, 'Υ');
  str = str.replace(/&Phi;/g, 'Φ');
  str = str.replace(/&Chi;/g, 'Χ');
  str = str.replace(/&Psi;/g, 'Ψ');
  str = str.replace(/&Omega;/g, 'Ω');
  str = str.replace(/&alpha;/g, 'α');
  str = str.replace(/&beta;/g, 'β');
  str = str.replace(/&gamma;/g, 'γ');
  str = str.replace(/&delta;/g, 'δ');
  str = str.replace(/&epsilon;/g, 'ε');
  str = str.replace(/&zeta;/g, 'ζ');
  str = str.replace(/&eta;/g, 'η');
  str = str.replace(/&theta;/g, 'θ');
  str = str.replace(/&iota;/g, 'ι');
  str = str.replace(/&kappa;/g, 'κ');
  str = str.replace(/&lambda;/g, 'λ');
  str = str.replace(/&mu;/g, 'μ');
  str = str.replace(/&nu;/g, 'ν');
  str = str.replace(/&xi;/g, 'ξ');
  str = str.replace(/&omicron;/g, 'ο');
  str = str.replace(/&pi;/g, 'π');
  str = str.replace(/&rho;/g, 'ρ');
  str = str.replace(/&sigmaf;/g, 'ς');
  str = str.replace(/&sigma;/g, 'σ');
  str = str.replace(/&tau;/g, 'τ');
  str = str.replace(/&upsilon;/g, 'υ');
  str = str.replace(/&phi;/g, 'φ');
  str = str.replace(/&chi;/g, 'χ');
  str = str.replace(/&psi;/g, 'ψ');
  str = str.replace(/&omega;/g, 'ω');
  str = str.replace(/&thetasym;/g, 'ϑ');
  str = str.replace(/&upsih;/g, 'ϒ');
  str = str.replace(/&piv;/g, 'ϖ');
  str = str.replace(/&middot;/g, '·');
  return str;
} // 


function strcharacterDiscode(str) {
  // 加入常用解析
  str = str.replace(/&nbsp;/g, '\xa0');
  str = str.replace(/&quot;/g, "'");
  str = str.replace(/&amp;/g, '&'); // str = str.replace(/&lt;/g, '‹');
  // str = str.replace(/&gt;/g, '›');

  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8226;/g, '•');
  return str;
} // HTML 支持的其他实体


function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, 'Œ');
  str = str.replace(/&oelig;/g, 'œ');
  str = str.replace(/&Scaron;/g, 'Š');
  str = str.replace(/&scaron;/g, 'š');
  str = str.replace(/&Yuml;/g, 'Ÿ');
  str = str.replace(/&fnof;/g, 'ƒ');
  str = str.replace(/&circ;/g, 'ˆ');
  str = str.replace(/&tilde;/g, '˜');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '–');
  str = str.replace(/&mdash;/g, '—');
  str = str.replace(/&lsquo;/g, '‘');
  str = str.replace(/&rsquo;/g, '’');
  str = str.replace(/&sbquo;/g, '‚');
  str = str.replace(/&ldquo;/g, '“');
  str = str.replace(/&rdquo;/g, '”');
  str = str.replace(/&bdquo;/g, '„');
  str = str.replace(/&dagger;/g, '†');
  str = str.replace(/&Dagger;/g, '‡');
  str = str.replace(/&bull;/g, '•');
  str = str.replace(/&hellip;/g, '…');
  str = str.replace(/&permil;/g, '‰');
  str = str.replace(/&prime;/g, '′');
  str = str.replace(/&Prime;/g, '″');
  str = str.replace(/&lsaquo;/g, '‹');
  str = str.replace(/&rsaquo;/g, '›');
  str = str.replace(/&oline;/g, '‾');
  str = str.replace(/&euro;/g, '€');
  str = str.replace(/&trade;/g, '™');
  str = str.replace(/&larr;/g, '←');
  str = str.replace(/&uarr;/g, '↑');
  str = str.replace(/&rarr;/g, '→');
  str = str.replace(/&darr;/g, '↓');
  str = str.replace(/&harr;/g, '↔');
  str = str.replace(/&crarr;/g, '↵');
  str = str.replace(/&lceil;/g, '⌈');
  str = str.replace(/&rceil;/g, '⌉');
  str = str.replace(/&lfloor;/g, '⌊');
  str = str.replace(/&rfloor;/g, '⌋');
  str = str.replace(/&loz;/g, '◊');
  str = str.replace(/&spades;/g, '♠');
  str = str.replace(/&clubs;/g, '♣');
  str = str.replace(/&hearts;/g, '♥');
  str = str.replace(/&diams;/g, '♦');
  str = str.replace(/&#39;/g, '\'');
  return str;
}

function strMoreDiscode(str) {
  str = str.replace(/\r\n/g, "");
  str = str.replace(/\n/g, "");
  str = str.replace(/code/g, "wxxxcode-style");
  return str;
}

function strDecode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  str = strMoreDiscode(str);
  return str;
}

/***/ }),

/***/ "./node_modules/octoparse/lib/parse/utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlToHttpUrl = urlToHttpUrl;
exports.removeDOCTYPE = removeDOCTYPE;
exports.trimHtml = trimHtml;

function urlToHttpUrl(url, rep) {
  var patt1 = new RegExp("^//");
  var result = patt1.test(url);

  if (result) {
    url = rep + ":" + url;
  }

  return url;
}

function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\>\n/, '').replace(/<.*!DOCTYPE.*\>\n/, '');
}

function trimHtml(html) {
  return html.replace(/\r?\n+/g, '').replace(/<!--.*?-->/ig, '').replace(/\/\*.*?\*\//ig, '').replace(/[ ]+</ig, '<');
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/admin/index/index.vue?vue&type=template&id=7b1a6b7e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/admin/index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/admin/index/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/admin/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/agreement/agreement.vue?vue&type=template&id=754b2ef1&");
/* harmony import */ var _agreement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/agreement/agreement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/agreement/agreement.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/agreement/agreement.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _agreement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/agreement/agreement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/assemble/assemble.vue?vue&type=template&id=341b081b&scoped=true&");
/* harmony import */ var _assemble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/assemble/assemble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/assemble/assemble.vue?vue&type=style&index=0&id=341b081b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/assemble/assemble.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _assemble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "341b081b",
  null
  
)

/* custom blocks */

if (typeof _assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/assemble/assemble.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/assemble/assembleDetail.vue?vue&type=template&id=45060468&scoped=true&");
/* harmony import */ var _assembleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/assemble/assembleDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/assemble/assembleDetail.vue?vue&type=style&index=0&id=45060468&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/assemble/assembleDetail.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _assembleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45060468",
  null
  
)

/* custom blocks */

if (typeof _assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/assemble/assembleDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/home/home.vue?vue&type=template&id=087d42bb&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/pages/home/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/pages/home/home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/pages/home/home.vue?vue&type=custom&index=0&blockType=config");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/home/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({
      beforeCreate: vuexInit
    });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;

    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;

      _init.call(this, options);
    };
  }
  /**
   * Vuex init hook, injected into each instances init hooks list.
   */


  function vuexInit() {
    var options = this.$options; // store injection

    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }

  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });
  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */


function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
} // Base data struct for store's module, package with some attribute and method


var Module = function Module(rawModule, runtime) {
  this.runtime = runtime; // Store some children item

  this._children = Object.create(null); // Store the origin module object which passed by programmer

  this._rawModule = rawModule;
  var rawState = rawModule.state; // Store the origin module's state

  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = {
  namespaced: {
    configurable: true
  }
};

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;

  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }

  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }

  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);

  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  } // register nested modules


  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (!parent.getChild(key).runtime) {
    return;
  }

  parent.removeChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  } // update target module


  targetModule.update(newModule); // update nested modules

  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        }

        return;
      }

      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var functionAssert = {
  assert: function (value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function (value) {
    return typeof value === 'function' || typeof value === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }

    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";

  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }

  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {}; // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731

  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false; // store internal state

  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue(); // bind commit and dispatch to self

  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;

  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };

  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  }; // strict mode


  this.strict = strict;
  var state = this._modules.root.state; // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters

  installModule(this, state, [], this._modules.root); // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)

  resetStoreVM(this, state); // apply plugins

  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });
  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;

  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = {
  state: {
    configurable: true
  }
};

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this; // check object-style commit

  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];

  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }

    return;
  }

  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.forEach(function (sub) {
    return sub(mutation, this$1.state);
  });

  if ( true && options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this; // check object-style dispatch

  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];

  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }

    return;
  }

  try {
    this._actionSubscribers.filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1.state);
    });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return result.then(function (res) {
    try {
      this$1._actionSubscribers.filter(function (sub) {
        return sub.after;
      }).forEach(function (sub) {
        return sub.after(action, this$1.state);
      });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }

    return res;
  });
};

Store.prototype.subscribe = function subscribe(fn) {
  return genericSubscribe(fn, this._subscribers);
};

Store.prototype.subscribeAction = function subscribeAction(fn) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }

  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {
    path = [path];
  }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);

  installModule(this, this.state, path, this._modules.get(path), options.preserveState); // reset store to update getters...

  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {
    path = [path];
  }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);

  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });

  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);

  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }

  return function () {
    var i = subs.indexOf(fn);

    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state; // init all modules

  installModule(store, state, [], store._modules.root, true); // reset vm

  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm; // bind store public getters

  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure enviroment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () {
        return store._vm[key];
      },
      enumerable: true // for local getters

    });
  }); // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins

  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent; // enable strict mode for new vm

  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }

    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;

  var namespace = store._modules.getNamespace(path); // register in namespace map


  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  } // set state


  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];

    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */


function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;

        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;

        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    }
  }; // getters and state object must be gotten lazily
  // because they will be changed by vm update

  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function () {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};
  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {
      return;
    } // extract local getter type


    var localType = type.slice(splitPos); // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.

    Object.defineProperty(gettersProxy, localType, {
      get: function () {
        return store.getters[type];
      },
      enumerable: true
    });
  });
  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);

    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }

    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);

        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }

    return;
  }

  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, {
    deep: true,
    sync: true
  });
}

function getNestedState(state, path) {
  return path.length ? path.reduce(function (state, key) {
    return state[key];
  }, state) : state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return {
    type: type,
    payload: payload,
    options: options
  };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
    }

    return;
  }

  Vue = _Vue;
  applyMixin(Vue);
}
/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */


var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);

        if (!module) {
          return;
        }

        state = module.context.state;
        getters = module.context.getters;
      }

      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    }; // mark vuex getter for devtools


    res[key].vuex = true;
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len]; // Get the commit method from store


      var commit = this.$store.commit;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);

        if (!module) {
          return;
        }

        commit = module.context.commit;
      }

      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val; // The namespace has been mutated by normalizeNamespace

    val = namespace + val;

    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }

      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }

      return this.$store.getters[val];
    }; // mark vuex getter for devtools


    res[key].vuex = true;
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],
          len = arguments.length;

      while (len--) args[len] = arguments[len]; // get dispatch function from store


      var dispatch = this.$store.dispatch;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);

        if (!module) {
          return;
        }

        dispatch = module.context.dispatch;
      }

      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */

var createNamespacedHelpers = function (namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};
/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */


function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}
/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */


function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }

    return fn(namespace, map);
  };
}
/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */


function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];

  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }

  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.1.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};
/* harmony default export */ __webpack_exports__["default"] = (index_esm);


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

/***/ "./src/components/adminTabbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/adminTabbar.vue?vue&type=template&id=2aaf882d&scoped=true&");
/* harmony import */ var _adminTabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/adminTabbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/adminTabbar.vue?vue&type=style&index=0&id=2aaf882d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adminTabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2aaf882d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/adminTabbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/adminTabbar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/adminTabbar.vue?vue&type=style&index=0&id=2aaf882d&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=style&index=0&id=2aaf882d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_style_index_0_id_2aaf882d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/adminTabbar.vue?vue&type=template&id=2aaf882d&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/adminTabbar.vue?vue&type=template&id=2aaf882d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_adminTabbar_vue_vue_type_template_id_2aaf882d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/tabbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/tabbar.vue?vue&type=template&id=04ac836e&scoped=true&");
/* harmony import */ var _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/tabbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/tabbar.vue?vue&type=style&index=0&id=04ac836e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04ac836e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/tabbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/tabbar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/tabbar.vue?vue&type=style&index=0&id=04ac836e&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=style&index=0&id=04ac836e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_style_index_0_id_04ac836e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/tabbar.vue?vue&type=template&id=04ac836e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/components/tabbar.vue?vue&type=template&id=04ac836e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tabbar_vue_vue_type_template_id_04ac836e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/pages/admin/index/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_admin_index_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_admin_index_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_admin_index_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/admin/index/index.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/admin/index/index.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/admin/index/index.vue?vue&type=template&id=7b1a6b7e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/admin/index/index.vue?vue&type=template&id=7b1a6b7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7b1a6b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/agreement/agreement.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_agreement_agreement_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_agreement_agreement_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_agreement_agreement_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/agreement/agreement.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/agreement/agreement.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_agreement_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/agreement/agreement.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/agreement/agreement.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/agreement/agreement.vue?vue&type=template&id=754b2ef1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/agreement/agreement.vue?vue&type=template&id=754b2ef1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_agreement_vue_vue_type_template_id_754b2ef1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/assemble/assemble.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assemble_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assemble_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assemble_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/assemble/assemble.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/assemble/assemble.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assemble_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/assemble/assemble.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/assemble/assemble.vue?vue&type=style&index=0&id=341b081b&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=style&index=0&id=341b081b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_style_index_0_id_341b081b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/assemble/assemble.vue?vue&type=template&id=341b081b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assemble.vue?vue&type=template&id=341b081b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assemble_vue_vue_type_template_id_341b081b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/assemble/assembleDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assembleDetail_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assembleDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_assemble_assembleDetail_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/assemble/assembleDetail.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/assemble/assembleDetail.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_assembleDetail_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/assemble/assembleDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/assemble/assembleDetail.vue?vue&type=style&index=0&id=45060468&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=style&index=0&id=45060468&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_style_index_0_id_45060468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/assemble/assembleDetail.vue?vue&type=template&id=45060468&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/assemble/assembleDetail.vue?vue&type=template&id=45060468&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_assembleDetail_vue_vue_type_template_id_45060468_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/home/home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_home_home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_home_home_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_home_home_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

/***/ }),

/***/ "./src/pages/home/home.vue?vue&type=custom&index=0&blockType=config":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/config.js!./node_modules/vue-loader/lib/index.js!./src/pages/home/home.vue?vue&type=custom&index=0&blockType=config");
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_frameworks_vue_loader_config_js_node_modules_vue_loader_lib_index_js_home_vue_vue_type_custom_index_0_blockType_config__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/home/home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/home/home.vue?vue&type=style&index=0&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/px2rpx-loader/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_px2rpx_loader_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/home/home.vue?vue&type=template&id=087d42bb&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/@megalo/target/lib/loaders/multi-platform-style.js!./node_modules/vue-loader/lib/index.js?!./src/pages/home/home.vue?vue&type=template&id=087d42bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_megalo_target_lib_loaders_multi_platform_style_js_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_087d42bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/load_page/load_page.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/load_page/load_page.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_load_page_load_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

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

/***/ "./src/pages/my/my.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/my/my.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_my_my_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

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

/***/ "./src/pages/position/position.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/index.js?!./src/pages/position/position.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/megalo/dist/megalo.mp.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);

        
        
        _Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = "page";
        new vue__WEBPACK_IMPORTED_MODULE_1___default.a(_Users_xiaoyanxue_Desktop_all_work2_megalo_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_xiaoyanxue_Desktop_all_work2_megalo_src_pages_position_position_vue__WEBPACK_IMPORTED_MODULE_0__["default"]).$mount();
      

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

/***/ "./src/static/qqmap-wx-jssdk.js":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 微信小程序JavaScriptSDK
 * 
 * @version 1.2
 * @date 2019-03-06
 * @author v_ylyue@tencent.com
 */
var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var URL_DIRECTION = BASE_URL + 'direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  /**
  * md5加密方法
  * 版权所有©2011 Sebastian Tschan，https：//blueimp.net
  */
  safeAdd: function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  },
  bitRotateLeft: function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  },
  md5cmn: function md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff: function md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5gg: function md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5hh: function md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii: function md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5: function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }

    return [a, b, c, d];
  },
  binl2rstr: function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;

    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }

    return output;
  },
  rstr2binl: function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;

    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }

    var length8 = input.length * 8;

    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }

    return output;
  },
  rstrMD5: function rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5: function rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;

    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }

    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
  },
  rstr2hex: function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;

    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }

    return output;
  },
  str2rstrUTF8: function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5: function rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5: function hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5: function rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5: function hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },
  md5: function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }

      return this.rawMD5(string);
    }

    if (!raw) {
      return this.hexHMACMD5(key, string);
    }

    return this.rawHMACMD5(key, string);
  },

  /**
   * 得到md5加密后的sig参数
   * @param {Object} requestParam 接口参数
   * @param {String} sk签名字符串
   * @param {String} featrue 方法名
   * @return 返回加密后的sig参数
   */
  getSig: function getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function (key) {
      requestArr.push(key + '=' + requestParam[key]);
    });

    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }

    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }

    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }

    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }

    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }

    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }

    sig = this.md5(sig);
    return sig;
  },

  /**
   * 得到终点query字符串
   * @param {Array|String} 检索数据
   */
  location2query: function location2query(data) {
    if (typeof data == 'string') {
      return data;
    }

    var query = '';

    for (var i = 0; i < data.length; i++) {
      var d = data[i];

      if (!!query) {
        query += ';';
      }

      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }

      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }

    return query;
  },

  /**
   * 计算角度
   */
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },

  /**
   * 处理终点location数组
   * @return 返回终点数组
   */
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];

    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }

    return endLocation;
  },

  /**
   * 计算两点间直线距离
   * @param a 表示纬度差
   * @param b 表示经度差
   * @return 返回的是距离，单位m
   */
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },

  /**
   * 使用微信接口进行定位
   */
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },

  /**
   * 获取location参数
   */
  getLocationParam: function getLocationParam(location) {
    if (typeof location == 'string') {
      var locationArr = location.split(',');

      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }

    return location;
  },

  /**
   * 回调函数默认处理
   */
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};

    param.fail = param.fail || function () {};

    param.complete = param.complete || function () {};
  },

  /**
   * 验证param对应的key值是否为空
   * 
   * @param {Object} param 接口参数
   * @param {String} key 对应参数的key
   */
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }

    return false;
  },

  /**
   * 验证参数中是否存在检索词keyword
   * 
   * @param {Object} param 接口参数
   */
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },

  /**
   * 验证location值
   * 
   * @param {Object} param 接口参数
   */
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);

    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }

    return true;
  },

  /**
   * 构造错误数据结构
   * @param {Number} errCode 错误码
   * @param {Number} errMsg 错误描述
   */
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },

  /**
   * 
   * 数据处理函数
   * 根据传入参数不同处理不同数据
   * @param {String} feature 功能名称
   * search 地点搜索
   * suggest关键词提示
   * reverseGeocoder逆地址解析
   * geocoder地址解析
   * getCityList获取城市列表：父集
   * getDistrictByCityId获取区县列表：子集
   * calculateDistance距离计算
   * @param {Object} param 接口参数
   * @param {Object} data 数据
   */
  handleData: function handleData(param, data, feature) {
    if (feature == 'search') {
      var searchResult = data.data;
      var searchSimplify = [];

      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }

      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature == 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];

      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }

      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature == 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };

      if (reverseGeocoderResult.pois) {
        //判断是否返回周边poi
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];

        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }

        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature == 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature == 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature == 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature == 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];

      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }

      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else if (feature == 'direction') {
      var direction = data.result.routes;
      param.success(data, direction);
    } else {
      param.success(data);
    }
  },

  /**
   * 构造微信请求参数，公共属性处理
   * 
   * @param {Object} param 接口参数
   * @param {Object} param 配置项
   * @param {String} feature 方法名
   */
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      "content-type": "application/json"
    };
    options.method = 'GET';

    options.success = function (res) {
      var data = res.data;

      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };

    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    options.complete = function (res) {
      var statusCode = +res.statusCode;

      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }

        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;

            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }

            break;
          }

        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };

    return options;
  },

  /**
   * 处理用户参数是否传入坐标进行不同的处理
   */
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;

    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };

    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };

    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};

var QQMapWX =
/*#__PURE__*/
function () {
  /**
   * 构造函数
   * 
   * @param {Object} options 接口参数,key 为必选参数
   */
  function QQMapWX(options) {
    _classCallCheck(this, QQMapWX);

    if (!options.key) {
      throw Error('key值不能为空');
    }

    this.key = options.key;
  }

  _createClass(QQMapWX, [{
    key: "search",

    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */
    value: function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }

      if (options.filter) {
        requestParam.filter = options.filter;
      }

      var distance = options.distance || "1000";
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null; //判断城市限定参数

      if (options.region) {
        region = options.region;
      } //矩形限定坐标(暂时只支持字符串格式)


      if (options.rectangle) {
        rectangle = options.rectangle;
      }

      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          //城市限定参数拼接
          requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else if (rectangle && !region) {
          //矩形搜索
          requestParam.boundary = "rectangle(" + rectangle + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else {
          requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",

    /**
     * sug模糊检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-suggestion.html
     */
    value: function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (!Utils.checkKeyword(options)) {
        return;
      }

      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        //控制显示条数
        page_index: options.page_index || 1,
        //控制页数
        get_subpois: options.get_subpois || 0,
        //返回子地点
        output: 'json',
        key: that.key
      }; //长地址

      if (options.address_format) {
        requestParam.address_format = options.address_format;
      } //过滤


      if (options.filter) {
        requestParam.filter = options.filter;
      } //排序


      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }

          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, "suggest"));
      }
    }
  }, {
    key: "reverseGeocoder",

    /**
     * 逆地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-gcoder.html
     */
    value: function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };

      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",

    /**
     * 地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-geocoder.html
     */
    value: function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }

      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      }; //城市限定

      if (options.region) {
        requestParam.region = options.region;
      }

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",

    /**
     * 获取城市列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    value: function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",

    /**
     * 获取对应城市ID的区县列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    value: function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }

      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };

      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
      }

      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",

    /**
     * 用于单起点到多终点的路线距离(非直线距离)计算：
     * 支持两种距离计算方式：步行和驾车。
     * 起点到终点最大限制直线距离10公里。
     *
     * 新增直线距离计算。
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-distance.html
     */
    value: function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };

      if (options.from) {
        options.location = options.from;
      } //计算直线距离


      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to); //处理终点坐标

          var data = {
            message: "query ok",
            result: {
              elements: []
            },
            status: 0
          };

          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              //将坐标存入
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }

          var calculateResult = data.result.elements;
          var distanceResult = [];

          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }

          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };

        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;

          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
          }

          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };

        Utils.locationProcess(options, locationsuccess);
      }
    }
  }, {
    key: "direction",

    /**
     * 路线规划：
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * https://lbs.qq.com/webservice_v1/guide-road.html
     */
    value: function direction(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);

      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }

      var requestParam = {
        output: 'json',
        key: that.key
      }; //to格式处理

      if (typeof options.to == 'string') {
        requestParam.to = options.to;
      } else {
        requestParam.to = options.to.latitude + ',' + options.to.longitude;
      } //初始化局部请求域名


      var SET_URL_DIRECTION = null; //设置默认mode属性

      options.mode = options.mode || MODE.driving; //设置请求域名

      SET_URL_DIRECTION = URL_DIRECTION + options.mode;

      if (options.from) {
        options.location = options.from;
      }

      if (options.mode == MODE.driving) {
        if (options.from_poi) {
          requestParam.from_poi = options.from_poi;
        }

        if (options.heading) {
          requestParam.heading = options.heading;
        }

        if (options.speed) {
          requestParam.speed = options.speed;
        }

        if (options.accuracy) {
          requestParam.accuracy = options.accuracy;
        }

        if (options.road_type) {
          requestParam.road_type = options.road_type;
        }

        if (options.to_poi) {
          requestParam.to_poi = options.to_poi;
        }

        if (options.from_track) {
          requestParam.from_track = options.from_track;
        }

        if (options.waypoints) {
          requestParam.waypoints = options.waypoints;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }

        if (options.plate_number) {
          requestParam.plate_number = options.plate_number;
        }
      }

      if (options.mode == MODE.transit) {
        if (options.departure_time) {
          requestParam.departure_time = options.departure_time;
        }

        if (options.policy) {
          requestParam.policy = options.policy;
        }
      }

      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);
        }

        wx.request(Utils.buildWxRequestConfig(options, {
          url: SET_URL_DIRECTION,
          data: requestParam
        }, 'direction'));
      };

      Utils.locationProcess(options, locationsuccess);
    }
  }]);

  return QQMapWX;
}();

;
module.exports = QQMapWX;

/***/ }),

/***/ "./src/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/store/user.js");
/* harmony import */ var _systemInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/store/systemInfo.js");



/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
  modules: {
    user: _user__WEBPACK_IMPORTED_MODULE_1__["user"],
    systemInfo: _systemInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
}));

/***/ }),

/***/ "./src/store/systemInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYSTEMINFO_SUCCESS", function() { return GET_SYSTEMINFO_SUCCESS; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_SYSTEMINFO_SUCCESS = 'GET_SYSTEMINFO_SUCCESS';
var state = {
  systemInfo: ''
};

var mutations = _defineProperty({}, GET_SYSTEMINFO_SUCCESS, function (state, systemInfo) {
  state.systemInfo = systemInfo;
});

var actions = {
  getSystemInfo: function getSystemInfo(_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    return new Promise(function (resolve, reject) {
      console.log(state);

      if (state.systemInfo) {
        resolve(state.systemInfo);
      } else {
        wx.getSystemInfo({
          success: function success(res) {
            console.log('res', res);
            commit('GET_SYSTEMINFO_SUCCESS', res);
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      }
    });
  }
};
var getters = {
  isIphoneX: function isIphoneX(state) {
    return state.systemInfo ? state.systemInfo.model.includes("iPhone X") : false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APP_ID", function() { return SET_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_INFO", function() { return SET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_APP_ID = 'SET_APP_ID';
var SET_USER_INFO = 'SET_USER_INFO';
var state = {
  appid: '',
  userinfo: null
};
var mutations = (_mutations = {}, _defineProperty(_mutations, SET_APP_ID, function (state, appid) {
  state.appid = appid;
}), _defineProperty(_mutations, SET_USER_INFO, function (state, userinfo) {
  state.userinfo = userinfo;
}), _mutations);
var actions = {};
var getters = {
  appid: function appid(state) {
    return state.appid;
  },
  userinfo: function userinfo(state) {
    return state.userinfo;
  }
};
var user = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

/***/ }),

/***/ "./src/utils/dateTimePicker.js":
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function withData(param) {
  return param < 10 ? '0' + param : '' + param;
}

function getLoopArray(start, end, num) {
  var start = start || 0;
  var num = num || 0;
  var end = end || 1;
  var array = [];

  for (var i = start; i <= end; i++) {
    if (num) {
      i % num === 0 ? array.push(withData(i)) : '';
    } else {
      array.push(withData(i));
    }
  }

  return array;
}

function getMonthDay(year, month) {
  var flag = year % 400 == 0 || year % 4 == 0 && year % 100 != 0,
      array = null;

  switch (month) {
    case '01':
    case '03':
    case '05':
    case '07':
    case '08':
    case '10':
    case '12':
      array = getLoopArray(1, 31);
      break;

    case '04':
    case '06':
    case '09':
    case '11':
      array = getLoopArray(1, 30);
      break;

    case '02':
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28);
      break;

    default:
      array = '月份格式不正确，请重新输入！';
  }

  return array;
}

function getNewDateArry() {
  // 当前时间的处理
  var newDate = new Date();
  var year = withData(newDate.getFullYear()),
      mont = withData(newDate.getMonth() + 1),
      date = withData(newDate.getDate()),
      hour = withData(newDate.getHours()),
      minu = withData(newDate.getMinutes()),
      seco = withData(newDate.getSeconds());
  return [year, mont, date, hour, minu, seco];
}

function dateTimePicker(startYear, endYear, date) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime = [],
      dateTimeArray = [[], [], [], [], [], []];
  var start = startYear || 1978;
  var end = endYear || 2100; // 默认开始显示数据

  var defaultDate = date ? [].concat(_toConsumableArray(date.split(' ')[0].split('-')), _toConsumableArray(date.split(' ')[1].split(':'))) : getNewDateArry(); // 处理联动列表数据

  /*年月日 时分秒*/

  dateTimeArray[0] = getLoopArray(start, end);
  dateTimeArray[1] = getLoopArray(1, 12);
  dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray[3] = getLoopArray(0, 23);
  dateTimeArray[4] = getLoopArray(0, 59, 5);
  dateTimeArray[5] = getLoopArray(0, 59);
  dateTimeArray.forEach(function (current, index) {
    dateTime.push(current.indexOf(defaultDate[index]));
  });
  return {
    dateTimeArray: dateTimeArray,
    dateTime: dateTime
  };
}

module.exports = {
  dateTimePicker: dateTimePicker,
  getMonthDay: getMonthDay
};

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

/***/ "./src/utils/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//节流
/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var _lastTime = null;
  return function () {
    var _newTime = Date.now();

    if (!_lastTime || _newTime - _lastTime >= wait) {
      fn.apply(this, arguments);
    }

    _lastTime = _newTime;
  };
});

/***/ })

}]);
//# sourceMappingURL=vendor.js.map