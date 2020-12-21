webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product/List/index.js":
/*!******************************************!*\
  !*** ./components/Product/List/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apollo */ \"./apollo/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ \"./components/Loading.js\");\n/* harmony import */ var _One__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./One */ \"./components/Product/List/One.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/Documents/ecom-static/components/Product/List/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query($first: Int, $skip: Int, $product: ProductWhereInput) {\\n        allProducts(first: $first, skip: $skip, where: $product) {\\n          id\\n          name\\n          file {\\n            publicUrl\\n          }\\n          image {\\n            publicUrl\\n          }\\n          altImages\\n          url\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Products = function Products(_ref) {\n  _s();\n\n  var _ref$option = _ref.option,\n      option = _ref$option === void 0 ? 1 : _ref$option,\n      ProductWhereInput = _ref.ProductWhereInput,\n      _ref$limit = _ref.limit,\n      limit = _ref$limit === void 0 ? 3 : _ref$limit,\n      mor = _ref.mor,\n      _ref$setMor = _ref.setMor,\n      setMor = _ref$setMor === void 0 ? function () {} : _ref$setMor;\n  console.log(mor); // data\n\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_apollo__WEBPACK_IMPORTED_MODULE_5__[\"SellerContext\"]);\n  var variables = {\n    product: _objectSpread({\n      seller: theme.seller\n    }, ProductWhereInput),\n    first: limit,\n    skip: 0\n  };\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject()), {\n    variables: variables\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      fetchMore = _useQuery.fetchMore; // method\n\n\n  var more = mor ? function () {\n    try {\n      var _data$allProducts;\n\n      variables.skip = data === null || data === void 0 ? void 0 : (_data$allProducts = data.allProducts) === null || _data$allProducts === void 0 ? void 0 : _data$allProducts.length;\n      fetchMore({\n        variables: variables,\n        updateQuery: function updateQuery(prev, _ref2) {\n          var _fetchMoreResult$allP;\n\n          var fetchMoreResult = _ref2.fetchMoreResult;\n\n          if (!((_fetchMoreResult$allP = fetchMoreResult.allProducts) === null || _fetchMoreResult$allP === void 0 ? void 0 : _fetchMoreResult$allP.length)) {\n            setMor(false);\n            return prev;\n          }\n\n          return Object.assign({}, prev, {\n            allProducts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev.allProducts), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult.allProducts))\n          });\n        }\n      });\n    } catch (e) {}\n  } : false; // modify\n\n  var products = data === null || data === void 0 ? void 0 : data.allProducts.map(function (product) {\n    var _product$file, _product$altImages;\n\n    return _objectSpread(_objectSpread({}, product), {}, {\n      guide: theme.server + (product === null || product === void 0 ? void 0 : (_product$file = product.file) === null || _product$file === void 0 ? void 0 : _product$file.publicUrl),\n      imgs: [(product === null || product === void 0 ? void 0 : product.image) ? theme.server + product.image.publicUrl : null, product === null || product === void 0 ? void 0 : (_product$altImages = product.altImages) === null || _product$altImages === void 0 ? void 0 : _product$altImages.split(',')]\n    });\n  }); // render\n\n  if (!(error || loading)) {\n    switch (option) {\n      case 1:\n        return __jsx(_One__WEBPACK_IMPORTED_MODULE_7__[\"One\"], {\n          products: products,\n          more: more,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 16\n          }\n        });\n\n      default:\n        return __jsx(\"pre\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 16\n          }\n        }, \"Invalid components.\");\n    }\n  } else return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__[\"Loading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  });\n};\n\n_s(Products, \"JEwRpp2iSDyeflaBlu2ZhDRpqPg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0L0xpc3QvaW5kZXguanM/OTU0ZSJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsIm9wdGlvbiIsIlByb2R1Y3RXaGVyZUlucHV0IiwibGltaXQiLCJtb3IiLCJzZXRNb3IiLCJjb25zb2xlIiwibG9nIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiU2VsbGVyQ29udGV4dCIsInZhcmlhYmxlcyIsInByb2R1Y3QiLCJzZWxsZXIiLCJmaXJzdCIsInNraXAiLCJ1c2VRdWVyeSIsImdxbCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJmZXRjaE1vcmUiLCJtb3JlIiwiYWxsUHJvZHVjdHMiLCJsZW5ndGgiLCJ1cGRhdGVRdWVyeSIsInByZXYiLCJmZXRjaE1vcmVSZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJlIiwicHJvZHVjdHMiLCJtYXAiLCJndWlkZSIsInNlcnZlciIsImZpbGUiLCJwdWJsaWNVcmwiLCJpbWdzIiwiaW1hZ2UiLCJhbHRJbWFnZXMiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BTVg7QUFBQTs7QUFBQSx5QkFMSkMsTUFLSTtBQUFBLE1BTEpBLE1BS0ksNEJBTEssQ0FLTDtBQUFBLE1BSkpDLGlCQUlJLFFBSkpBLGlCQUlJO0FBQUEsd0JBSEpDLEtBR0k7QUFBQSxNQUhKQSxLQUdJLDJCQUhJLENBR0o7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSx5QkFESkMsTUFDSTtBQUFBLE1BREpBLE1BQ0ksNEJBREssWUFBTSxDQUFFLENBQ2I7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFESSxDQUVKOztBQUNBLE1BQUlJLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ0MscURBQUQsQ0FBdEI7QUFDQSxNQUFJQyxTQUFTLEdBQUc7QUFDZEMsV0FBTztBQUFJQyxZQUFNLEVBQUVMLEtBQUssQ0FBQ0s7QUFBbEIsT0FBNkJYLGlCQUE3QixDQURPO0FBRWRZLFNBQUssRUFBRVgsS0FGTztBQUdkWSxRQUFJLEVBQUU7QUFIUSxHQUFoQjs7QUFKSSxrQkFTd0NDLCtEQUFRLENBQ2xEQywwREFEa0QscUJBaUJsRDtBQUFFTixhQUFTLEVBQVRBO0FBQUYsR0FqQmtELENBVGhEO0FBQUEsTUFTSU8sSUFUSixhQVNJQSxJQVRKO0FBQUEsTUFTVUMsS0FUVixhQVNVQSxLQVRWO0FBQUEsTUFTaUJDLE9BVGpCLGFBU2lCQSxPQVRqQjtBQUFBLE1BUzBCQyxTQVQxQixhQVMwQkEsU0FUMUIsRUE2Qko7OztBQUNBLE1BQU1DLElBQUksR0FBR2xCLEdBQUcsR0FDWixZQUFNO0FBQ0osUUFBSTtBQUFBOztBQUNGTyxlQUFTLENBQUNJLElBQVYsR0FBaUJHLElBQWpCLGFBQWlCQSxJQUFqQiw0Q0FBaUJBLElBQUksQ0FBRUssV0FBdkIsc0RBQWlCLGtCQUFtQkMsTUFBcEM7QUFDQUgsZUFBUyxDQUFDO0FBQ1JWLGlCQUFTLEVBQVRBLFNBRFE7QUFFUmMsbUJBQVcsRUFBRSxxQkFBQ0MsSUFBRCxTQUErQjtBQUFBOztBQUFBLGNBQXRCQyxlQUFzQixTQUF0QkEsZUFBc0I7O0FBQzFDLGNBQUksMkJBQUNBLGVBQWUsQ0FBQ0osV0FBakIsMERBQUMsc0JBQTZCQyxNQUE5QixDQUFKLEVBQTBDO0FBQ3hDbkIsa0JBQU0sQ0FBQyxLQUFELENBQU47QUFDQSxtQkFBT3FCLElBQVA7QUFDRDs7QUFDRCxpQkFBT0UsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsSUFBbEIsRUFBd0I7QUFDN0JILHVCQUFXLHlHQUNORyxJQUFJLENBQUNILFdBREMsZ0dBRU5JLGVBQWUsQ0FBQ0osV0FGVjtBQURrQixXQUF4QixDQUFQO0FBTUQ7QUFiTyxPQUFELENBQVQ7QUFlRCxLQWpCRCxDQWlCRSxPQUFPTyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEdBcEJXLEdBcUJaLEtBckJKLENBOUJJLENBb0RKOztBQUNBLE1BQU1DLFFBQVEsR0FBR2IsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVLLFdBQU4sQ0FBa0JTLEdBQWxCLENBQXNCLFVBQUNwQixPQUFELEVBQWE7QUFBQTs7QUFDbEQsMkNBQ0tBLE9BREw7QUFFRXFCLFdBQUssRUFBRXpCLEtBQUssQ0FBQzBCLE1BQU4sSUFBZXRCLE9BQWYsYUFBZUEsT0FBZix3Q0FBZUEsT0FBTyxDQUFFdUIsSUFBeEIsa0RBQWUsY0FBZUMsU0FBOUIsQ0FGVDtBQUdFQyxVQUFJLEVBQUUsQ0FDSixDQUFBekIsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUUwQixLQUFULElBQWlCOUIsS0FBSyxDQUFDMEIsTUFBTixHQUFldEIsT0FBTyxDQUFDMEIsS0FBUixDQUFjRixTQUE5QyxHQUEwRCxJQUR0RCxFQUVKeEIsT0FGSSxhQUVKQSxPQUZJLDZDQUVKQSxPQUFPLENBQUUyQixTQUZMLHVEQUVKLG1CQUFvQkMsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FGSTtBQUhSO0FBUUQsR0FUZ0IsQ0FBakIsQ0FyREksQ0ErREo7O0FBQ0EsTUFBSSxFQUFFckIsS0FBSyxJQUFJQyxPQUFYLENBQUosRUFBeUI7QUFDdkIsWUFBUW5CLE1BQVI7QUFDRSxXQUFLLENBQUw7QUFDRSxlQUFPLE1BQUMsd0NBQUQ7QUFBSyxrQkFBUSxFQUFFOEIsUUFBZjtBQUF5QixjQUFJLEVBQUVULElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDs7QUFDRjtBQUNFLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUpKO0FBTUQsR0FQRCxNQU9PLE9BQU8sTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDUixDQTlFRDs7R0FBTXRCLFE7VUFld0NnQix1RDs7O0tBZnhDaEIsUTtBQStFU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvTGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFF1ZXJ5LCBTZWxsZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vYXBvbGxvJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uL0xvYWRpbmcnO1xyXG5pbXBvcnQgeyBPbmUgfSBmcm9tICcuL09uZSc7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICh7XHJcbiAgb3B0aW9uID0gMSxcclxuICBQcm9kdWN0V2hlcmVJbnB1dCxcclxuICBsaW1pdCA9IDMsXHJcbiAgbW9yLFxyXG4gIHNldE1vciA9ICgpID0+IHt9XHJcbn0pID0+IHtcclxuICBjb25zb2xlLmxvZyhtb3IpO1xyXG4gIC8vIGRhdGFcclxuICBsZXQgdGhlbWUgPSB1c2VDb250ZXh0KFNlbGxlckNvbnRleHQpO1xyXG4gIGxldCB2YXJpYWJsZXMgPSB7XHJcbiAgICBwcm9kdWN0OiB7IHNlbGxlcjogdGhlbWUuc2VsbGVyLCAuLi5Qcm9kdWN0V2hlcmVJbnB1dCB9LFxyXG4gICAgZmlyc3Q6IGxpbWl0LFxyXG4gICAgc2tpcDogMFxyXG4gIH07XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZywgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShcclxuICAgIGdxbGBcclxuICAgICAgcXVlcnkoJGZpcnN0OiBJbnQsICRza2lwOiBJbnQsICRwcm9kdWN0OiBQcm9kdWN0V2hlcmVJbnB1dCkge1xyXG4gICAgICAgIGFsbFByb2R1Y3RzKGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwLCB3aGVyZTogJHByb2R1Y3QpIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBmaWxlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHB1YmxpY1VybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWx0SW1hZ2VzXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgICB7IHZhcmlhYmxlcyB9XHJcbiAgKTtcclxuXHJcbiAgLy8gbWV0aG9kXHJcbiAgY29uc3QgbW9yZSA9IG1vclxyXG4gICAgPyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhcmlhYmxlcy5za2lwID0gZGF0YT8uYWxsUHJvZHVjdHM/Lmxlbmd0aDtcclxuICAgICAgICAgIGZldGNoTW9yZSh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcclxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQuYWxsUHJvZHVjdHM/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TW9yKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICAgICAgYWxsUHJvZHVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgLi4ucHJldi5hbGxQcm9kdWN0cyxcclxuICAgICAgICAgICAgICAgICAgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgIH1cclxuICAgIDogZmFsc2U7XHJcbiAgLy8gbW9kaWZ5XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBkYXRhPy5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgIGd1aWRlOiB0aGVtZS5zZXJ2ZXIgKyBwcm9kdWN0Py5maWxlPy5wdWJsaWNVcmwsXHJcbiAgICAgIGltZ3M6IFtcclxuICAgICAgICBwcm9kdWN0Py5pbWFnZSA/IHRoZW1lLnNlcnZlciArIHByb2R1Y3QuaW1hZ2UucHVibGljVXJsIDogbnVsbCxcclxuICAgICAgICBwcm9kdWN0Py5hbHRJbWFnZXM/LnNwbGl0KCcsJylcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9KTtcclxuICAvLyByZW5kZXJcclxuICBpZiAoIShlcnJvciB8fCBsb2FkaW5nKSkge1xyXG4gICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiA8T25lIHByb2R1Y3RzPXtwcm9kdWN0c30gbW9yZT17bW9yZX0gLz47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxwcmU+SW52YWxpZCBjb21wb25lbnRzLjwvcHJlPjtcclxuICAgIH1cclxuICB9IGVsc2UgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product/List/index.js\n");

/***/ })

})