webpackHotUpdate_N_E("pages/post",{

/***/ "./components/Post/List/RightDetail.js":
/*!*********************************************!*\
  !*** ./components/Post/List/RightDetail.js ***!
  \*********************************************/
/*! exports provided: RightDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightDetail\", function() { return RightDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../NoResult */ \"./components/NoResult.js\");\n/* harmony import */ var _NoImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../NoImg */ \"./components/NoImg.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/components/Post/List/RightDetail.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction RightDetail(_ref) {\n  var _this = this;\n\n  var _ref$posts = _ref.posts,\n      posts = _ref$posts === void 0 ? [] : _ref$posts,\n      _ref$more = _ref.more,\n      more = _ref$more === void 0 ? function () {} : _ref$more;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, posts.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      key: post.id,\n      className: \"mb-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      xs: 12,\n      className: \"p-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 19\n      }\n    }, post.img ? __jsx(\"img\", {\n      className: \"mb-3\",\n      src: post.img,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 33\n      }\n    }) : __jsx(_NoImg__WEBPACK_IMPORTED_MODULE_4__[\"NoImg\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 75\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 19\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: {\n        pathname: \"/post\",\n        query: {\n          post: post.url\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 23\n      }\n    }, __jsx(\"h6\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 25\n      }\n    }, post.title), ' ')), __jsx(\"p\", {\n      className: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }\n    }, post.description.slice(0, 80), \"...\"))));\n  }), more ? __jsx(\"pre\", {\n    onClick: function onClick() {\n      more();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"Xem th\\xEAm\") : null) : __jsx(_NoResult__WEBPACK_IMPORTED_MODULE_3__[\"NoResult\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }));\n}\n_c = RightDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"RightDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0xpc3QvUmlnaHREZXRhaWwuanM/YjY2MyJdLCJuYW1lcyI6WyJSaWdodERldGFpbCIsInBvc3RzIiwibW9yZSIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsImltZyIsInBhdGhuYW1lIiwicXVlcnkiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxXQUFULE9BQXNEO0FBQUE7O0FBQUEsd0JBQS9CQyxLQUErQjtBQUFBLE1BQS9CQSxLQUErQiwyQkFBdkIsRUFBdUI7QUFBQSx1QkFBbkJDLElBQW1CO0FBQUEsTUFBbkJBLElBQW1CLDBCQUFaLFlBQU0sQ0FBRSxDQUFJO0FBQzNELFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBQUssQ0FBQ0UsTUFBTixHQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsV0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhDQUFEO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWY7QUFBbUIsZUFBUyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxlQUFTLEVBQUMsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNFLEdBQUwsR0FBVztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUcsRUFBRUYsSUFBSSxDQUFDRSxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVgsR0FBcUQsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHhELENBREYsRUFJRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQ0UsVUFBSSxFQUFFO0FBQUVDLGdCQUFRLFNBQVY7QUFBcUJDLGFBQUssRUFBRTtBQUFFSixjQUFJLEVBQUVBLElBQUksQ0FBQ0s7QUFBYjtBQUE1QixPQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTCxJQUFJLENBQUNNLEtBQVYsQ0FERixFQUN3QixHQUR4QixDQUhGLENBREYsRUFTRTtBQUFHLGVBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUJOLElBQUksQ0FBQ08sV0FBTCxDQUFpQkMsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEIsRUFBMUIsQ0FBakIsUUFURixDQUpGLENBREYsQ0FERjtBQW9CRCxHQXJCQSxDQURILEVBdUJHWCxJQUFJLEdBQ0g7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkEsVUFBSTtBQUNMLEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxHQVFELElBL0JOLENBREQsR0FtQ0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENKLENBREY7QUF5Q0Q7S0ExQ2VGLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QvTGlzdC9SaWdodERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgTm9SZXN1bHQgfSBmcm9tICcuLi8uLi9Ob1Jlc3VsdCc7XG5pbXBvcnQgeyBOb0ltZyB9IGZyb20gJy4uLy4uL05vSW1nJztcbmV4cG9ydCBmdW5jdGlvbiBSaWdodERldGFpbCh7IHBvc3RzID0gW10sIG1vcmUgPSAoKSA9PiB7fSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3Bvc3RzLmxlbmd0aCA/IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8Um93IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5pbWcgPyA8aW1nIGNsYXNzTmFtZT1cIm1iLTNcIiBzcmM9e3Bvc3QuaW1nfSAvPiA6IDxOb0ltZyAvPn1cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiBgL3Bvc3RgLCBxdWVyeTogeyBwb3N0OiBwb3N0LnVybCB9IH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cG9zdC50aXRsZX08L2g2PnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e3Bvc3QuZGVzY3JpcHRpb24uc2xpY2UoMCwgODApfS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7bW9yZSA/IChcbiAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vcmUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWGVtIHRow6ptXG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOb1Jlc3VsdCAvPlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post/List/RightDetail.js\n");

/***/ })

})