webpackHotUpdate_N_E("pages/post",{

/***/ "./components/Post/List/RightDetail.js":
/*!*********************************************!*\
  !*** ./components/Post/List/RightDetail.js ***!
  \*********************************************/
/*! exports provided: RightDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightDetail\", function() { return RightDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../NoResult */ \"./components/NoResult.js\");\n/* harmony import */ var _NoImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../NoImg */ \"./components/NoImg.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/components/Post/List/RightDetail.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction RightDetail(_ref) {\n  var _this = this;\n\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? [] : _ref$posts,\n      _ref$more = _ref.more,\n      more = _ref$more === void 0 ? function () {} : _ref$more;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: {\n        pathname: \"/post\",\n        query: {\n          post: post.url\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 19\n      }\n    }, __jsx(\"h6\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }\n    }, post.title), ' ')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      key: post.id,\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      xs: 12,\n      md: 4,\n      lg: 3,\n      className: \"p-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, post.img ? __jsx(\"img\", {\n      src: post.img,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 33\n      }\n    }) : __jsx(_NoImg__WEBPACK_IMPORTED_MODULE_4__[\"NoImg\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 58\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    }, post.description.slice(0, 80), \"...\"))));\n  }), more ? __jsx(\"pre\", {\n    onClick: function onClick() {\n      more();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Xem th\\xEAm\") : null) : __jsx(_NoResult__WEBPACK_IMPORTED_MODULE_3__[\"NoResult\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }));\n}\n_c = RightDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"RightDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0xpc3QvUmlnaHREZXRhaWwuanM/YjY2MyJdLCJuYW1lcyI6WyJSaWdodERldGFpbCIsInBvc3RzIiwibW9yZSIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJwYXRobmFtZSIsInF1ZXJ5IiwidXJsIiwidGl0bGUiLCJpZCIsImltZyIsImRlc2NyaXB0aW9uIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULE9BQXNEO0FBQUE7O0FBQUEsd0JBQS9CQyxLQUErQjtBQUFBLE1BQS9CQSxLQUErQiwyQkFBdkIsRUFBdUI7QUFBQSx1QkFBbkJDLElBQW1CO0FBQUEsTUFBbkJBLElBQW1CLDBCQUFaLFlBQU0sQ0FBRSxDQUFJO0FBQzNELFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBQUssQ0FBQ0UsTUFBTixHQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsV0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFO0FBQUVDLGdCQUFRLFNBQVY7QUFBcUJDLGFBQUssRUFBRTtBQUFFRixjQUFJLEVBQUVBLElBQUksQ0FBQ0c7QUFBYjtBQUE1QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxJQUFJLENBQUNJLEtBQVYsQ0FERixFQUN3QixHQUR4QixDQURGLENBREYsRUFNRSxNQUFDLDhDQUFEO0FBQUssU0FBRyxFQUFFSixJQUFJLENBQUNLLEVBQWY7QUFBbUIsZUFBUyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFLENBQXhCO0FBQTJCLGVBQVMsRUFBQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dMLElBQUksQ0FBQ00sR0FBTCxHQUFXO0FBQUssU0FBRyxFQUFFTixJQUFJLENBQUNNLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFYLEdBQW9DLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR2QyxDQURGLEVBSUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCTixJQUFJLENBQUNPLFdBQUwsQ0FBaUJDLEtBQWpCLENBQXVCLENBQXZCLEVBQXlCLEVBQXpCLENBQWpCLFFBREYsQ0FKRixDQU5GLENBREY7QUFpQkQsR0FsQkEsQ0FESCxFQW9CR1gsSUFBSSxHQUNIO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JBLFVBQUk7QUFDTCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREcsR0FRRCxJQTVCTixDQURELEdBZ0NDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDSixDQURGO0FBc0NEO0tBdkNlRixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0L0xpc3QvUmlnaHREZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IE5vUmVzdWx0IH0gZnJvbSAnLi4vLi4vTm9SZXN1bHQnO1xuaW1wb3J0IHsgTm9JbWcgfSBmcm9tICcuLi8uLi9Ob0ltZyc7XG5leHBvcnQgZnVuY3Rpb24gUmlnaHREZXRhaWwoeyBwb3N0cyA9IFtdLCBtb3JlID0gKCkgPT4ge30gfSkge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9wb3N0YCwgcXVlcnk6IHsgcG9zdDogcG9zdC51cmwgfSB9fT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8aDY+e3Bvc3QudGl0bGV9PC9oNj57JyAnfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8Um93IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs0fSBsZz17M30gY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmltZyA/IDxpbWcgc3JjPXtwb3N0LmltZ30gLz4gOiA8Tm9JbWcgLz59XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntwb3N0LmRlc2NyaXB0aW9uLnNsaWNlKDAsODApfS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7bW9yZSA/IChcbiAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWGVtIHRow6ptXG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb1Jlc3VsdCAvPlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post/List/RightDetail.js\n");

/***/ })

})