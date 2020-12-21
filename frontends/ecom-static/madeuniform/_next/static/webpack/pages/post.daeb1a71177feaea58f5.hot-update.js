webpackHotUpdate_N_E("pages/post",{

/***/ "./components/Post/List/RightDetail.js":
/*!*********************************************!*\
  !*** ./components/Post/List/RightDetail.js ***!
  \*********************************************/
/*! exports provided: RightDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightDetail\", function() { return RightDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../NoResult */ \"./components/NoResult.js\");\n/* harmony import */ var _NoImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../NoImg */ \"./components/NoImg.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/components/Post/List/RightDetail.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction RightDetail(_ref) {\n  var _this = this;\n\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? [] : _ref$posts,\n      _ref$more = _ref.more,\n      more = _ref$more === void 0 ? function () {} : _ref$more;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: {\n        pathname: \"/post\",\n        query: {\n          post: post.url\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 19\n      }\n    }, __jsx(\"h6\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }\n    }, post.title), ' ')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      key: post.id,\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      xs: 12,\n      md: 4,\n      lg: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, post.img ? __jsx(\"img\", {\n      src: post.img,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 33\n      }\n    }) : __jsx(_NoImg__WEBPACK_IMPORTED_MODULE_4__[\"NoImg\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 58\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"text-justify\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    }, post.description))));\n  }), more ? __jsx(\"pre\", {\n    onClick: function onClick() {\n      more();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Xem th\\xEAm\") : null) : __jsx(_NoResult__WEBPACK_IMPORTED_MODULE_3__[\"NoResult\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }));\n}\n_c = RightDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"RightDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0xpc3QvUmlnaHREZXRhaWwuanM/YjY2MyJdLCJuYW1lcyI6WyJSaWdodERldGFpbCIsInBvc3RzIiwibW9yZSIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJwYXRobmFtZSIsInF1ZXJ5IiwidXJsIiwidGl0bGUiLCJpZCIsImltZyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsV0FBVCxPQUFzRDtBQUFBOztBQUFBLHdCQUEvQkMsS0FBK0I7QUFBQSxNQUEvQkEsS0FBK0IsMkJBQXZCLEVBQXVCO0FBQUEsdUJBQW5CQyxJQUFtQjtBQUFBLE1BQW5CQSxJQUFtQiwwQkFBWixZQUFNLENBQUUsQ0FBSTtBQUMzRCxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLE1BQU4sR0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLFdBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRTtBQUFFQyxnQkFBUSxTQUFWO0FBQXFCQyxhQUFLLEVBQUU7QUFBRUYsY0FBSSxFQUFFQSxJQUFJLENBQUNHO0FBQWI7QUFBNUIsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsSUFBSSxDQUFDSSxLQUFWLENBREYsRUFDd0IsR0FEeEIsQ0FERixDQURGLEVBTUUsTUFBQyw4Q0FBRDtBQUFLLFNBQUcsRUFBRUosSUFBSSxDQUFDSyxFQUFmO0FBQW1CLGVBQVMsRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLENBQWpCO0FBQW9CLFFBQUUsRUFBRSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLElBQUksQ0FBQ00sR0FBTCxHQUFXO0FBQUssU0FBRyxFQUFFTixJQUFJLENBQUNNLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFYLEdBQW9DLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR2QyxDQURGLEVBSUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCTixJQUFJLENBQUNPLFdBQWxDLENBREYsQ0FKRixDQU5GLENBREY7QUFpQkQsR0FsQkEsQ0FESCxFQW9CR1YsSUFBSSxHQUNIO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JBLFVBQUk7QUFDTCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsR0FRRCxJQTVCTixDQURELEdBZ0NDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDSixDQURGO0FBc0NEO0tBdkNlRixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0L0xpc3QvUmlnaHREZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IE5vUmVzdWx0IH0gZnJvbSAnLi4vLi4vTm9SZXN1bHQnO1xuaW1wb3J0IHsgTm9JbWcgfSBmcm9tICcuLi8uLi9Ob0ltZyc7XG5leHBvcnQgZnVuY3Rpb24gUmlnaHREZXRhaWwoeyBwb3N0cyA9IFtdLCBtb3JlID0gKCkgPT4ge30gfSkge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9wb3N0YCwgcXVlcnk6IHsgcG9zdDogcG9zdC51cmwgfSB9fT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8aDY+e3Bvc3QudGl0bGV9PC9oNj57JyAnfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8Um93IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs0fSBsZz17M30+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmltZyA/IDxpbWcgc3JjPXtwb3N0LmltZ30gLz4gOiA8Tm9JbWcgLz59XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7bW9yZSA/IChcbiAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWGVtIHRow6ptXG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb1Jlc3VsdCAvPlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post/List/RightDetail.js\n");

/***/ }),

/***/ "./components/Post/List/index.js":
/*!***************************************!*\
  !*** ./components/Post/List/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apollo */ \"./apollo/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading */ \"./components/Loading.js\");\n/* harmony import */ var _One__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./One */ \"./components/Post/List/One.js\");\n/* harmony import */ var _RightDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RightDetail */ \"./components/Post/List/RightDetail.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/Documents/ecom-static/components/Post/List/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n      query($first: Int, $skip: Int, $post: PostWhereInput) {\\n        allPosts(first: $first, skip: $skip, where: $post) {\\n          id\\n          title\\n          file {\\n            publicUrl\\n          }\\n          url\\n          description\\n        }\\n      }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Posts = function Posts(_ref) {\n  _s();\n\n  var _ref$option = _ref.option,\n      option = _ref$option === void 0 ? 1 : _ref$option,\n      PostWhereInput = _ref.PostWhereInput,\n      _ref$limit = _ref.limit,\n      limit = _ref$limit === void 0 ? 3 : _ref$limit,\n      mor = _ref.mor,\n      _ref$setMor = _ref.setMor,\n      setMor = _ref$setMor === void 0 ? function () {} : _ref$setMor;\n  // data\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_apollo__WEBPACK_IMPORTED_MODULE_5__[\"SellerContext\"]);\n  var variables = {\n    post: _objectSpread({\n      seller: theme.seller\n    }, PostWhereInput),\n    first: limit,\n    skip: 0\n  };\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"gql\"])(_templateObject()), {\n    variables: variables\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      fetchMore = _useQuery.fetchMore; // method\n\n\n  var more = mor ? function () {\n    try {\n      var _data$allPosts;\n\n      variables.skip = data === null || data === void 0 ? void 0 : (_data$allPosts = data.allPosts) === null || _data$allPosts === void 0 ? void 0 : _data$allPosts.length;\n      fetchMore({\n        variables: variables,\n        updateQuery: function updateQuery(prev, _ref2) {\n          var _fetchMoreResult$allP;\n\n          var fetchMoreResult = _ref2.fetchMoreResult;\n\n          if (!((_fetchMoreResult$allP = fetchMoreResult.allPosts) === null || _fetchMoreResult$allP === void 0 ? void 0 : _fetchMoreResult$allP.length)) {\n            setMor(false);\n            return prev;\n          }\n\n          return Object.assign({}, prev, {\n            allPosts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev.allPosts), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult.allPosts))\n          });\n        }\n      });\n    } catch (e) {\n      setMor(false);\n    }\n  } : false; // modify\n\n  var posts = data === null || data === void 0 ? void 0 : data.allPosts.map(function (post) {\n    var _post$file;\n\n    return _objectSpread(_objectSpread({}, post), {}, {\n      img: (post === null || post === void 0 ? void 0 : post.file) ? theme.server + (post === null || post === void 0 ? void 0 : (_post$file = post.file) === null || _post$file === void 0 ? void 0 : _post$file.publicUrl) : null\n    });\n  });\n  console.log(data === null || data === void 0 ? void 0 : data.allPosts); // render\n\n  if (!(error || loading)) {\n    switch (option) {\n      case 1:\n        return __jsx(_One__WEBPACK_IMPORTED_MODULE_7__[\"One\"], {\n          posts: posts,\n          more: more,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 16\n          }\n        });\n\n      case 'RightDetail':\n        return __jsx(_RightDetail__WEBPACK_IMPORTED_MODULE_8__[\"RightDetail\"], {\n          posts: posts,\n          more: more,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 16\n          }\n        });\n\n      default:\n        return __jsx(\"pre\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 16\n          }\n        }, \"Invalid components.\");\n    }\n  } else return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_6__[\"Loading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  });\n};\n\n_s(Posts, \"JEwRpp2iSDyeflaBlu2ZhDRpqPg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0xpc3QvaW5kZXguanM/NzBiYyJdLCJuYW1lcyI6WyJQb3N0cyIsIm9wdGlvbiIsIlBvc3RXaGVyZUlucHV0IiwibGltaXQiLCJtb3IiLCJzZXRNb3IiLCJ0aGVtZSIsInVzZUNvbnRleHQiLCJTZWxsZXJDb250ZXh0IiwidmFyaWFibGVzIiwicG9zdCIsInNlbGxlciIsImZpcnN0Iiwic2tpcCIsInVzZVF1ZXJ5IiwiZ3FsIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImZldGNoTW9yZSIsIm1vcmUiLCJhbGxQb3N0cyIsImxlbmd0aCIsInVwZGF0ZVF1ZXJ5IiwicHJldiIsImZldGNoTW9yZVJlc3VsdCIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJwb3N0cyIsIm1hcCIsImltZyIsImZpbGUiLCJzZXJ2ZXIiLCJwdWJsaWNVcmwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FNUjtBQUFBOztBQUFBLHlCQUxKQyxNQUtJO0FBQUEsTUFMSkEsTUFLSSw0QkFMSyxDQUtMO0FBQUEsTUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsd0JBSEpDLEtBR0k7QUFBQSxNQUhKQSxLQUdJLDJCQUhJLENBR0o7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSx5QkFESkMsTUFDSTtBQUFBLE1BREpBLE1BQ0ksNEJBREssWUFBTSxDQUFFLENBQ2I7QUFDSjtBQUNBLE1BQUlDLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ0MscURBQUQsQ0FBdEI7QUFDQSxNQUFJQyxTQUFTLEdBQUc7QUFDZEMsUUFBSTtBQUFJQyxZQUFNLEVBQUVMLEtBQUssQ0FBQ0s7QUFBbEIsT0FBNkJULGNBQTdCLENBRFU7QUFFZFUsU0FBSyxFQUFF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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFF1ZXJ5LCBTZWxsZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vYXBvbGxvJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4uLy4uL0xvYWRpbmcnO1xyXG5pbXBvcnQgeyBPbmUgfSBmcm9tICcuL09uZSc7XHJcbmltcG9ydCB7IFJpZ2h0RGV0YWlsIH0gZnJvbSAnLi9SaWdodERldGFpbCc7XHJcblxyXG5jb25zdCBQb3N0cyA9ICh7XHJcbiAgb3B0aW9uID0gMSxcclxuICBQb3N0V2hlcmVJbnB1dCxcclxuICBsaW1pdCA9IDMsXHJcbiAgbW9yLFxyXG4gIHNldE1vciA9ICgpID0+IHt9XHJcbn0pID0+IHtcclxuICAvLyBkYXRhXHJcbiAgbGV0IHRoZW1lID0gdXNlQ29udGV4dChTZWxsZXJDb250ZXh0KTtcclxuICBsZXQgdmFyaWFibGVzID0ge1xyXG4gICAgcG9zdDogeyBzZWxsZXI6IHRoZW1lLnNlbGxlciwgLi4uUG9zdFdoZXJlSW5wdXQgfSxcclxuICAgIGZpcnN0OiBsaW1pdCxcclxuICAgIHNraXA6IDBcclxuICB9O1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoXHJcbiAgICBncWxgXHJcbiAgICAgIHF1ZXJ5KCRmaXJzdDogSW50LCAkc2tpcDogSW50LCAkcG9zdDogUG9zdFdoZXJlSW5wdXQpIHtcclxuICAgICAgICBhbGxQb3N0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCwgd2hlcmU6ICRwb3N0KSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGZpbGUge1xyXG4gICAgICAgICAgICBwdWJsaWNVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgICB7IHZhcmlhYmxlcyB9XHJcbiAgKTtcclxuXHJcbiAgLy8gbWV0aG9kXHJcbiAgY29uc3QgbW9yZSA9IG1vclxyXG4gICAgPyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhcmlhYmxlcy5za2lwID0gZGF0YT8uYWxsUG9zdHM/Lmxlbmd0aDtcclxuICAgICAgICAgIGZldGNoTW9yZSh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcclxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHM/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TW9yKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHNldE1vcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICA6IGZhbHNlO1xyXG4gIC8vIG1vZGlmeVxyXG4gIGNvbnN0IHBvc3RzID0gZGF0YT8uYWxsUG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5wb3N0LFxyXG4gICAgICBpbWc6IHBvc3Q/LmZpbGUgPyB0aGVtZS5zZXJ2ZXIgKyBwb3N0Py5maWxlPy5wdWJsaWNVcmwgOiBudWxsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGE/LmFsbFBvc3RzKTtcclxuICAvLyByZW5kZXJcclxuICBpZiAoIShlcnJvciB8fCBsb2FkaW5nKSkge1xyXG4gICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiA8T25lIHBvc3RzPXtwb3N0c30gbW9yZT17bW9yZX0gLz47XHJcbiAgICAgIGNhc2UgJ1JpZ2h0RGV0YWlsJzpcclxuICAgICAgICByZXR1cm4gPFJpZ2h0RGV0YWlsIHBvc3RzPXtwb3N0c30gbW9yZT17bW9yZX0gLz47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxwcmU+SW52YWxpZCBjb21wb25lbnRzLjwvcHJlPjtcclxuICAgIH1cclxuICB9IGVsc2UgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post/List/index.js\n");

/***/ })

})