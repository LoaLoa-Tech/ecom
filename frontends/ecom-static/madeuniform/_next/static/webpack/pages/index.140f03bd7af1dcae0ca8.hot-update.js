webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Banner/One.js":
false,

/***/ "./components/Banner/index.js":
false,

/***/ "./components/Product/List/One.js":
/*!****************************************!*\
  !*** ./components/Product/List/One.js ***!
  \****************************************/
/*! exports provided: One */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"One\", function() { return One; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../NoResult */ \"./components/NoResult.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/components/Product/List/One.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction One(_ref) {\n  var _this = this;\n\n  var _ref$products = _ref.products,\n      products = _ref$products === void 0 ? [] : _ref$products,\n      hasMore = _ref.hasMore,\n      _ref$more = _ref.more,\n      more = _ref$more === void 0 ? function () {} : _ref$more;\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, products.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, products.map(function (product) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      key: product.id,\n      xs: 6,\n      md: 6,\n      lg: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      classNam: \"mb-5\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: product.imgs[0],\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 19\n      }\n    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: {\n        pathname: \"/product\",\n        query: {\n          detail: product.url\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 21\n      }\n    }, product.name))));\n  }), more ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    onClick: function onClick() {\n      more();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: {\n      cursor: 'pointer'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdExpandMore\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }), \"Xem th\\xEAm.\")) : null) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(_NoResult__WEBPACK_IMPORTED_MODULE_3__[\"NoResult\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  })));\n}\n_c = One;\n\nvar _c;\n\n$RefreshReg$(_c, \"One\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L0xpc3QvT25lLmpzPzdhMTgiXSwibmFtZXMiOlsiT25lIiwicHJvZHVjdHMiLCJoYXNNb3JlIiwibW9yZSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImltZ3MiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZGV0YWlsIiwidXJsIiwibmFtZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLEdBQVQsT0FJSjtBQUFBOztBQUFBLDJCQUhEQyxRQUdDO0FBQUEsTUFIREEsUUFHQyw4QkFIVSxFQUdWO0FBQUEsTUFGREMsT0FFQyxRQUZEQSxPQUVDO0FBQUEsdUJBRERDLElBQ0M7QUFBQSxNQUREQSxJQUNDLDBCQURNLFlBQU0sQ0FBRSxDQUNkO0FBQ0QsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFBUSxDQUFDRyxNQUFULEdBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUN6QixXQUNFLE1BQUMsOENBQUQ7QUFBSyxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsRUFBbEI7QUFBc0IsUUFBRSxFQUFFLENBQTFCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssY0FBUSxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxDQUFiLENBQVY7QUFBMkIsZUFBUyxFQUFDLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsWUFESjtBQUVKQyxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUwsT0FBTyxDQUFDTTtBQUFsQjtBQUZILE9BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSU4sT0FBTyxDQUFDTyxJQUFaLENBTkYsQ0FGRixDQURGLENBREY7QUFlRCxHQWhCQSxDQURILEVBa0JHVixJQUFJLEdBQ0gsTUFBQyw4Q0FBRDtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiQSxVQUFJO0FBQ0wsS0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBRyxTQUFLLEVBQUU7QUFBRVcsWUFBTSxFQUFFO0FBQVYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsaUJBTEYsQ0FERyxHQVdELElBN0JOLENBREQsR0FpQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQ0osQ0FERjtBQXlDRDtLQTlDZWQsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC9MaXN0L09uZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBOb1Jlc3VsdCB9IGZyb20gJy4uLy4uL05vUmVzdWx0JztcclxuaW1wb3J0IHsgTWRFeHBhbmRNb3JlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5leHBvcnQgZnVuY3Rpb24gT25lKHtcclxuICBwcm9kdWN0cyA9IFtdLFxyXG4gIGhhc01vcmUsXHJcbiAgbW9yZSA9ICgpID0+IHt9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIHtwcm9kdWN0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDb2wga2V5PXtwcm9kdWN0LmlkfSB4cz17Nn0gbWQ9ezZ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW09XCJtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltZ3NbMF19IGNsYXNzTmFtZT1cIm1iLTNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3RgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgZGV0YWlsOiBwcm9kdWN0LnVybCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntwcm9kdWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAge21vcmU/IChcclxuICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vcmUoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8TWRFeHBhbmRNb3JlIC8+XHJcbiAgICAgICAgICAgICAgICBYZW0gdGjDqm0uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxOb1Jlc3VsdCAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICApfVxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product/List/One.js\n");

/***/ }),

/***/ "./components/Product/List/index.js":
/*!******************************************!*\
  !*** ./components/Product/List/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apollo */ \"./apollo/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ \"./components/Loading.js\");\n/* harmony import */ var _One__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./One */ \"./components/Product/List/One.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/Documents/ecom-static/components/Product/List/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query($first: Int, $skip: Int, $product: ProductWhereInput) {\\n        allProducts(first: $first, skip: $skip, where: $product) {\\n          id\\n          name\\n          file {\\n            publicUrl\\n          }\\n          image {\\n            publicUrl\\n          }\\n          images {\\n            file {\\n              publicUrl\\n            }\\n          }\\n          altImages\\n          url\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var _ref$option = _ref.option,\n      option = _ref$option === void 0 ? 1 : _ref$option,\n      ProductWhereInput = _ref.ProductWhereInput,\n      _ref$limit = _ref.limit,\n      limit = _ref$limit === void 0 ? 3 : _ref$limit,\n      mor = _ref.mor,\n      _ref$setMor = _ref.setMor,\n      setMor = _ref$setMor === void 0 ? function () {} : _ref$setMor;\n  console.log(mor); // data\n\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_apollo__WEBPACK_IMPORTED_MODULE_5__[\"SellerContext\"]);\n  var variables = {\n    product: _objectSpread({\n      seller: theme.seller\n    }, ProductWhereInput),\n    first: limit,\n    skip: 0\n  };\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject()), {\n    variables: variables\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      fetchMore = _useQuery.fetchMore; // method\n\n\n  var more = mor ? function () {\n    try {\n      var _data$allProducts;\n\n      variables.skip = data === null || data === void 0 ? void 0 : (_data$allProducts = data.allProducts) === null || _data$allProducts === void 0 ? void 0 : _data$allProducts.length;\n      fetchMore({\n        variables: variables,\n        updateQuery: function updateQuery(prev, _ref2) {\n          var _fetchMoreResult$allP;\n\n          var fetchMoreResult = _ref2.fetchMoreResult;\n\n          if (!((_fetchMoreResult$allP = fetchMoreResult.allProducts) === null || _fetchMoreResult$allP === void 0 ? void 0 : _fetchMoreResult$allP.length)) {\n            setMor(false);\n            return prev;\n          }\n\n          return Object.assign({}, prev, {\n            allProducts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev.allProducts), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult.allProducts))\n          });\n        }\n      });\n    } catch (e) {}\n  } : false; // modify\n\n  var products = data === null || data === void 0 ? void 0 : data.allProducts.map(function (product) {\n    var _product$altImages, _product$images, _product$file;\n\n    var imgs = (product === null || product === void 0 ? void 0 : product.image) ? [theme.server + product.image.publicUrl] : [];\n    imgs = imgs.concat((product === null || product === void 0 ? void 0 : (_product$altImages = product.altImages) === null || _product$altImages === void 0 ? void 0 : _product$altImages.split(',')) || []);\n    imgs = imgs.concat(product === null || product === void 0 ? void 0 : (_product$images = product.images) === null || _product$images === void 0 ? void 0 : _product$images.map(function (img) {\n      return theme.server + img.file.publicUrl;\n    }));\n    console.log(imgs);\n    return _objectSpread(_objectSpread({}, product), {}, {\n      guide: theme.server + (product === null || product === void 0 ? void 0 : (_product$file = product.file) === null || _product$file === void 0 ? void 0 : _product$file.publicUrl),\n      imgs: imgs\n    });\n  }); // render\n\n  if (!(error || loading)) {\n    switch (option) {\n      case 1:\n        return __jsx(_One__WEBPACK_IMPORTED_MODULE_7__[\"One\"], {\n          products: products,\n          more: more,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 16\n          }\n        });\n\n      default:\n        return __jsx(\"pre\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 16\n          }\n        }, \"Invalid components.\");\n    }\n  } else return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__[\"Loading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  });\n};\n\n_s(Products, \"JEwRpp2iSDyeflaBlu2ZhDRpqPg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L0xpc3QvaW5kZXguanM/OTU0ZSJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsIm9wdGlvbiIsIlByb2R1Y3RXaGVyZUlucHV0IiwibGltaXQiLCJtb3IiLCJzZXRNb3IiLCJjb25zb2xlIiwibG9nIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiU2VsbGVyQ29udGV4dCIsInZhcmlhYmxlcyIsInByb2R1Y3QiLCJzZWxsZXIiLCJmaXJzdCIsInNraXAiLCJ1c2VRdWVyeSIsImdxbCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJmZXRjaE1vcmUiLCJtb3JlIiwiYWxsUHJvZHVjdHMiLCJsZW5ndGgiLCJ1cGRhdGVRdWVyeSIsInByZXYiLCJmZXRjaE1vcmVSZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJlIiwicHJvZHVjdHMiLCJtYXAiLCJpbWdzIiwiaW1hZ2UiLCJzZXJ2ZXIiLCJwdWJsaWNVcmwiLCJjb25jYXQiLCJhbHRJbWFnZXMiLCJzcGxpdCIsImltYWdlcyIsImltZyIsImZpbGUiLCJndWlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BTVg7QUFBQTs7QUFBQSx5QkFMSkMsTUFLSTtBQUFBLE1BTEpBLE1BS0ksNEJBTEssQ0FLTDtBQUFBLE1BSkpDLGlCQUlJLFFBSkpBLGlCQUlJO0FBQUEsd0JBSEpDLEtBR0k7QUFBQSxNQUhKQSxLQUdJLDJCQUhJLENBR0o7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSx5QkFESkMsTUFDSTtBQUFBLE1BREpBLE1BQ0ksNEJBREssWUFBTSxDQUFFLENBQ2I7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFESSxDQUVKOztBQUNBLE1BQUlJLEtBQUssR0FBR0Msd0RBQVUsQ0FB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T0FBWCxDQUFKLEVBQXlCO0FBQ3ZCLFlBQVFuQixNQUFSO0FBQ0UsV0FBSyxDQUFMO0FBQ0UsZUFBTyxNQUFDLHdDQUFEO0FBQUssa0JBQVEsRUFBRThCLFFBQWY7QUFBeUIsY0FBSSxFQUFFVCxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7O0FBQ0Y7QUFDRSxlQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVA7QUFKSjtBQU1ELEdBUEQsTUFPTyxPQUFPLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ1IsQ0F0RkQ7O0dBQU10QixRO1VBZXdDZ0IsdUQ7OztLQWZ4Q2hCLFE7QUF1RlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0L0xpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdWVyeSwgU2VsbGVyQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2Fwb2xsbyc7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuLi8uLi9Mb2FkaW5nJztcclxuaW1wb3J0IHsgT25lIH0gZnJvbSAnLi9PbmUnO1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAoe1xyXG4gIG9wdGlvbiA9IDEsXHJcbiAgUHJvZHVjdFdoZXJlSW5wdXQsXHJcbiAgbGltaXQgPSAzLFxyXG4gIG1vcixcclxuICBzZXRNb3IgPSAoKSA9PiB7fVxyXG59KSA9PiB7XHJcbiAgY29uc29sZS5sb2cobW9yKTtcclxuICAvLyBkYXRhXHJcbiAgbGV0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuICBsZXQgdmFyaWFibGVzID0ge1xyXG4gICAgcHJvZHVjdDogeyBzZWxsZXI6IHRoZW1lLnNlbGxlciwgLi4uUHJvZHVjdFdoZXJlSW5wdXQgfSxcclxuICAgIGZpcnN0OiBsaW1pdCxcclxuICAgIHNraXA6IDBcclxuICB9O1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoXHJcbiAgICBncWxgXHJcbiAgICAgIHF1ZXJ5KCRmaXJzdDogSW50LCAkc2tpcDogSW50LCAkcHJvZHVjdDogUHJvZHVjdFdoZXJlSW5wdXQpIHtcclxuICAgICAgICBhbGxQcm9kdWN0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCwgd2hlcmU6ICRwcm9kdWN0KSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgZmlsZSB7XHJcbiAgICAgICAgICAgIHB1YmxpY1VybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgICAgIGZpbGUge1xyXG4gICAgICAgICAgICAgIHB1YmxpY1VybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbHRJbWFnZXNcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYCxcclxuICAgIHsgdmFyaWFibGVzIH1cclxuICApO1xyXG5cclxuICAvLyBtZXRob2RcclxuICBjb25zdCBtb3JlID0gbW9yXHJcbiAgICA/ICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdmFyaWFibGVzLnNraXAgPSBkYXRhPy5hbGxQcm9kdWN0cz8ubGVuZ3RoO1xyXG4gICAgICAgICAgZmV0Y2hNb3JlKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzLFxyXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXYsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdC5hbGxQcm9kdWN0cz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2LCB7XHJcbiAgICAgICAgICAgICAgICBhbGxQcm9kdWN0czogW1xyXG4gICAgICAgICAgICAgICAgICAuLi5wcmV2LmFsbFByb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgICAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgfVxyXG4gICAgOiBmYWxzZTtcclxuICAvLyBtb2RpZnlcclxuICBjb25zdCBwcm9kdWN0cyA9IGRhdGE/LmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IGltZ3MgPSBwcm9kdWN0Py5pbWFnZSA/IFt0aGVtZS5zZXJ2ZXIgKyBwcm9kdWN0LmltYWdlLnB1YmxpY1VybF0gOiBbXTtcclxuICAgIGltZ3MgPSBpbWdzLmNvbmNhdChwcm9kdWN0Py5hbHRJbWFnZXM/LnNwbGl0KCcsJykgfHwgW10pO1xyXG4gICAgaW1ncyA9IGltZ3MuY29uY2F0KFxyXG4gICAgICBwcm9kdWN0Py5pbWFnZXM/Lm1hcCgoaW1nKSA9PiB0aGVtZS5zZXJ2ZXIgKyBpbWcuZmlsZS5wdWJsaWNVcmwpXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coaW1ncyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICBndWlkZTogdGhlbWUuc2VydmVyICsgcHJvZHVjdD8uZmlsZT8ucHVibGljVXJsLFxyXG4gICAgICBpbWdzXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIC8vIHJlbmRlclxyXG4gIGlmICghKGVycm9yIHx8IGxvYWRpbmcpKSB7XHJcbiAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIDxPbmUgcHJvZHVjdHM9e3Byb2R1Y3RzfSBtb3JlPXttb3JlfSAvPjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPHByZT5JbnZhbGlkIGNvbXBvbmVudHMuPC9wcmU+O1xyXG4gICAgfVxyXG4gIH0gZWxzZSByZXR1cm4gPExvYWRpbmcgLz47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product/List/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Product_List_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product/List/index */ \"./components/Product/List/index.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Index() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  });\n}\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFJRDs7S0FMUUEsSztBQU1NQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdC9MaXN0L2luZGV4J1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})