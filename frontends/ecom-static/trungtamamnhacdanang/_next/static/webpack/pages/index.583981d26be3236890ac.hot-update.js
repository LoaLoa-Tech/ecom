webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layouts/HomeLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/HomeLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_shared_footers_FooterSecond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/shared/footers/FooterSecond */ \"./components/shared/footers/FooterSecond.js\");\n/* harmony import */ var _components_partials_common_InstagramImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/partials/common/InstagramImages */ \"./components/partials/common/InstagramImages.js\");\n/* harmony import */ var _components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDefault */ \"./components/shared/headers/HeaderDefault.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/huy/New Volume/linux/apps/trungtamamnhacdanang/components/layouts/HomeLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar HomeLayout = function HomeLayout(_ref) {\n  var children = _ref.children,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Homepage' : _ref$title;\n  return __jsx(\"div\", {\n    className: \"__site-layout\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, \"Trung T\\xE2m \\xC2m Nh\\u1EA1c \\u0110\\xE0 N\\u1EB5ng - \", title)), __jsx(_components_shared_headers_HeaderDefault__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"fixed transparent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    id: \"homepage-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, children), __jsx(_components_partials_common_InstagramImages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }), __jsx(_components_shared_footers_FooterSecond__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    classes: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c = HomeLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL0hvbWVMYXlvdXQuanM/OTQyNyJdLCJuYW1lcyI6WyJIb21lTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFzQztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSx3QkFBekJDLEtBQXlCO0FBQUEsTUFBekJBLEtBQXlCLDJCQUFqQixVQUFpQjtBQUNyRCxTQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBQW9DQSxLQUFwQyxDQURKLENBREosRUFJSSxNQUFDLGdGQUFEO0FBQWUsYUFBUyxFQUFDLG1CQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFNLE1BQUUsRUFBQyxrQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCRCxRQUE3QixDQUxKLEVBTUksTUFBQyxtRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSSxNQUFDLCtFQUFEO0FBQWMsV0FBTyxFQUFDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURKO0FBV0gsQ0FaRDs7S0FBTUQsVTtBQWFTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0cy9Ib21lTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyU2Vjb25kIGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvZm9vdGVycy9Gb290ZXJTZWNvbmQnO1xuaW1wb3J0IEluc3RhZ3JhbUltYWdlcyBmcm9tICd+L2NvbXBvbmVudHMvcGFydGlhbHMvY29tbW9uL0luc3RhZ3JhbUltYWdlcyc7XG5pbXBvcnQgSGVhZGVyRGVmYXVsdCBmcm9tICd+L2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlcnMvSGVhZGVyRGVmYXVsdCc7XG5jb25zdCBIb21lTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0hvbWVwYWdlJyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfX3NpdGUtbGF5b3V0XCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VHJ1bmcgVMOibSDDgm0gTmjhuqFjIMSQw6AgTuG6tW5nIC0ge3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyRGVmYXVsdCBjbGFzc05hbWU9XCJmaXhlZCB0cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICA8bWFpbiBpZD1cImhvbWVwYWdlLXByaW1hcnlcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICAgICAgPEluc3RhZ3JhbUltYWdlcyAvPlxuICAgICAgICAgICAgPEZvb3RlclNlY29uZCBjbGFzc2VzPVwiZGFya1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/HomeLayout.js\n");

/***/ })

})