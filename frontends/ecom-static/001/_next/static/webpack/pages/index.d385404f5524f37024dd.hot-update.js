webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Product/imageProduct.js":
/*!********************************************!*\
  !*** ./components/Product/imageProduct.js ***!
  \********************************************/
/*! exports provided: ImgProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgProduct\", function() { return ImgProduct; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _apollo_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo/action */ \"./apollo/action.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/SellerProvider */ \"./components/src/SellerProvider.js\");\n\n\n\nvar _jsxFileName = \"/media/huy/New Volume/linux/apps/ecom-ui/components/Product/imageProduct.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    query {\\n      wishlist @client\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nfunction ImgProduct(_ref) {\n  _s();\n\n  var _data$wishlist, _ImgSrcs$imgIndex, _ImgSrcs$imgIndex$fil, _ImgSrcs$imgIndex2, _ImgSrcs$imgIndex2$fi;\n\n  var product = _ref.product,\n      style = _ref.style,\n      onClick = _ref.onClick;\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_src_SellerProvider__WEBPACK_IMPORTED_MODULE_7__[\"SellerContext\"]);\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject())),\n      data = _useQuery.data;\n\n  var isInWishlist = data === null || data === void 0 ? void 0 : (_data$wishlist = data.wishlist) === null || _data$wishlist === void 0 ? void 0 : _data$wishlist.some(function (item) {\n    return item.id === product.id;\n  });\n  var ImgSrcs = (product === null || product === void 0 ? void 0 : product.images) || [];\n\n  if (product.image) {\n    ImgSrcs = [{\n      file: product.image\n    }].concat(ImgSrcs);\n  }\n\n  if (product.altImages) {\n    ImgSrcs = altImages.slice(\",\").concat(ImgSrcs);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      imgIndex = _useState[0],\n      setImgIndex = _useState[1];\n\n  return __jsx(\"div\", {\n    style: {\n      position: \"inherit\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: ImgSrcs[imgIndex] ? theme.server + ((_ImgSrcs$imgIndex = ImgSrcs[imgIndex]) === null || _ImgSrcs$imgIndex === void 0 ? void 0 : (_ImgSrcs$imgIndex$fil = _ImgSrcs$imgIndex.file) === null || _ImgSrcs$imgIndex$fil === void 0 ? void 0 : _ImgSrcs$imgIndex$fil.publicUrl) : \"/assets/img/no-image.jpg\",\n    onClick: onClick,\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      width: \"100%\",\n      cursor: \"pointer\"\n    }),\n    key: (_ImgSrcs$imgIndex2 = ImgSrcs[imgIndex]) === null || _ImgSrcs$imgIndex2 === void 0 ? void 0 : (_ImgSrcs$imgIndex2$fi = _ImgSrcs$imgIndex2.file) === null || _ImgSrcs$imgIndex2$fi === void 0 ? void 0 : _ImgSrcs$imgIndex2$fi.publicUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"i\", {\n    onClick: function onClick() {\n      return isInWishlist ? Object(_apollo_action__WEBPACK_IMPORTED_MODULE_5__[\"removeWishListItem\"])(product) : Object(_apollo_action__WEBPACK_IMPORTED_MODULE_5__[\"addProductToLocalWishlist\"])(product);\n    },\n    style: theme.css.btnIcon(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, isInWishlist ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdDoneAll\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 25\n    }\n  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__[\"IoIosHeartEmpty\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 41\n    }\n  })));\n}\n\n_s(ImgProduct, \"32z2390r2VsAnW9zyFtWFPrN3Dw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n_c = ImgProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"ImgProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L2ltYWdlUHJvZHVjdC5qcz9lYzkyIl0sIm5hbWVzIjpbIkltZ1Byb2R1Y3QiLCJwcm9kdWN0Iiwic3R5bGUiLCJvbkNsaWNrIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiU2VsbGVyQ29udGV4dCIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImlzSW5XaXNobGlzdCIsIndpc2hsaXN0Iiwic29tZSIsIml0ZW0iLCJpZCIsIkltZ1NyY3MiLCJpbWFnZXMiLCJpbWFnZSIsImZpbGUiLCJjb25jYXQiLCJhbHRJbWFnZXMiLCJzbGljZSIsInVzZVN0YXRlIiwiaW1nSW5kZXgiLCJzZXRJbWdJbmRleCIsInBvc2l0aW9uIiwic2VydmVyIiwicHVibGljVXJsIiwid2lkdGgiLCJjdXJzb3IiLCJyZW1vdmVXaXNoTGlzdEl0ZW0iLCJhZGRQcm9kdWN0VG9Mb2NhbFdpc2hsaXN0IiwiY3NzIiwiYnRuSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVPLFNBQVNBLFVBQVQsT0FBaUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN0RCxNQUFNQyxLQUFLLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXhCOztBQURzRCxrQkFFckNDLCtEQUFRLENBQUNDLDBEQUFELG9CQUY2QjtBQUFBLE1BRTlDQyxJQUY4QyxhQUU5Q0EsSUFGOEM7O0FBUXRELE1BQU1DLFlBQVksR0FBR0QsSUFBSCxhQUFHQSxJQUFILHlDQUFHQSxJQUFJLENBQUVFLFFBQVQsbURBQUcsZUFBZ0JDLElBQWhCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLEVBQUwsS0FBWWIsT0FBTyxDQUFDYSxFQUE5QjtBQUFBLEdBQXJCLENBQXJCO0FBRUEsTUFBSUMsT0FBTyxHQUFHLENBQUFkLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFZSxNQUFULEtBQW1CLEVBQWpDOztBQUNBLE1BQUlmLE9BQU8sQ0FBQ2dCLEtBQVosRUFBbUI7QUFDakJGLFdBQU8sR0FBRyxDQUFDO0FBQUVHLFVBQUksRUFBRWpCLE9BQU8sQ0FBQ2dCO0FBQWhCLEtBQUQsRUFBMEJFLE1BQTFCLENBQWlDSixPQUFqQyxDQUFWO0FBQ0Q7O0FBQ0QsTUFBSWQsT0FBTyxDQUFDbUIsU0FBWixFQUF1QjtBQUNyQkwsV0FBTyxHQUFHSyxTQUFTLENBQUNDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJGLE1BQXJCLENBQTRCSixPQUE1QixDQUFWO0FBQ0Q7O0FBaEJxRCxrQkFpQnRCTyxzREFBUSxDQUFDLENBQUQsQ0FqQmM7QUFBQSxNQWlCL0NDLFFBakIrQztBQUFBLE1BaUJyQ0MsV0FqQnFDOztBQW1CdEQsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUNFLE9BQUcsRUFDRFYsT0FBTyxDQUFDUSxRQUFELENBQVAsR0FDSW5CLEtBQUssQ0FBQ3NCLE1BQU4seUJBQWVYLE9BQU8sQ0FBQ1EsUUFBRCxDQUF0QiwrRUFBZSxrQkFBbUJMLElBQWxDLDBEQUFlLHNCQUF5QlMsU0FBeEMsQ0FESixHQUVJLDBCQUpSO0FBTUUsV0FBTyxFQUFFeEIsT0FOWDtBQU9FLFNBQUssa0NBQU9ELEtBQVA7QUFBYzBCLFdBQUssRUFBRSxNQUFyQjtBQUE2QkMsWUFBTSxFQUFFO0FBQXJDLE1BUFA7QUFRRSxPQUFHLHdCQUFFZCxPQUFPLENBQUNRLFFBQUQsQ0FBVCxnRkFBRSxtQkFBbUJMLElBQXJCLDBEQUFFLHNCQUF5QlMsU0FSaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBaUJFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFDUGpCLFlBQVksR0FDUm9CLHlFQUFrQixDQUFDN0IsT0FBRCxDQURWLEdBRVI4QixnRkFBeUIsQ0FBQzlCLE9BQUQsQ0FIdEI7QUFBQSxLQURYO0FBTUUsU0FBSyxFQUFFRyxLQUFLLENBQUM0QixHQUFOLENBQVVDLE9BQVYsRUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUd2QixZQUFZLEdBQUcsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBbUIsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUmxDLENBakJGLENBREY7QUE4QkQ7O0dBakRlVixVO1VBRUdPLHVEOzs7S0FGSFAsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC9pbWFnZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb0lvc0hlYXJ0RW1wdHksIElvSW9zSGVhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IE1kQ29tcGFyZUFycm93cywgTWREb25lQWxsIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge1xuICByZW1vdmVXaXNoTGlzdEl0ZW0sXG4gIGFkZFByb2R1Y3RUb0xvY2FsV2lzaGxpc3QsXG4gIGFkZFByb2R1Y3RUb0xvY2FsQ29tcGFyZSxcbn0gZnJvbSBcIi4uLy4uL2Fwb2xsby9hY3Rpb25cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFNlbGxlckNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL1NlbGxlclByb3ZpZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBJbWdQcm9kdWN0KHsgcHJvZHVjdCwgc3R5bGUsIG9uQ2xpY2sgfSkge1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoU2VsbGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHdpc2hsaXN0IEBjbGllbnRcbiAgICB9XG4gIGApO1xuXG4gIGNvbnN0IGlzSW5XaXNobGlzdCA9IGRhdGE/Lndpc2hsaXN0Py5zb21lKChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKTtcblxuICBsZXQgSW1nU3JjcyA9IHByb2R1Y3Q/LmltYWdlcyB8fCBbXTtcbiAgaWYgKHByb2R1Y3QuaW1hZ2UpIHtcbiAgICBJbWdTcmNzID0gW3sgZmlsZTogcHJvZHVjdC5pbWFnZSB9XS5jb25jYXQoSW1nU3Jjcyk7XG4gIH1cbiAgaWYgKHByb2R1Y3QuYWx0SW1hZ2VzKSB7XG4gICAgSW1nU3JjcyA9IGFsdEltYWdlcy5zbGljZShcIixcIikuY29uY2F0KEltZ1NyY3MpO1xuICB9XG4gIGNvbnN0IFtpbWdJbmRleCwgc2V0SW1nSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogXCJpbmhlcml0XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBJbWdTcmNzW2ltZ0luZGV4XVxuICAgICAgICAgICAgPyB0aGVtZS5zZXJ2ZXIgKyBJbWdTcmNzW2ltZ0luZGV4XT8uZmlsZT8ucHVibGljVXJsXG4gICAgICAgICAgICA6IFwiL2Fzc2V0cy9pbWcvbm8taW1hZ2UuanBnXCJcbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSwgd2lkdGg6IFwiMTAwJVwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgIGtleT17SW1nU3Jjc1tpbWdJbmRleF0/LmZpbGU/LnB1YmxpY1VybH1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBpY29uIHdpc2hsaXN0ICovfVxuICAgICAgPGlcbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBpc0luV2lzaGxpc3RcbiAgICAgICAgICAgID8gcmVtb3ZlV2lzaExpc3RJdGVtKHByb2R1Y3QpXG4gICAgICAgICAgICA6IGFkZFByb2R1Y3RUb0xvY2FsV2lzaGxpc3QocHJvZHVjdClcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17dGhlbWUuY3NzLmJ0bkljb24oKX1cbiAgICAgID5cbiAgICAgICAge2lzSW5XaXNobGlzdCA/IDxNZERvbmVBbGwgLz4gOiA8SW9Jb3NIZWFydEVtcHR5IC8+fVxuICAgICAgPC9pPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product/imageProduct.js\n");

/***/ })

})