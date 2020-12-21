webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/frames/News.js":
/*!***********************************!*\
  !*** ./components/frames/News.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _Hashtag_List_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hashtag/List/index */ \"./components/Hashtag/List/index.js\");\n/* harmony import */ var _Post_List_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Post/List/index */ \"./components/Post/List/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/huy/Documents/ecom-static/components/frames/News.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar News = function News() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var hashtag = query.hashtag;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      mor = _useState[0],\n      setMor = _useState[1];\n\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"my-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    md: 4,\n    lg: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_Hashtag_List_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    option: \"Sider\",\n    setMor: setMor,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(_Hashtag_List_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    option: \"Breadcrumb\",\n    onChoose: function onChoose(hashtag) {\n      return sethashtag(hashtag.url);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(_Post_List_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    PostWhereInput: {\n      hashtags_some: {\n        url: hashtag\n      }\n    },\n    mor: mor,\n    setMor: setMor,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(News, \"BCiLXY1HkyE23YGbTzhMrwaFTfg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mcmFtZXMvTmV3cy5qcz9lYmIzIl0sIm5hbWVzIjpbIk5ld3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImhhc2h0YWciLCJ1c2VTdGF0ZSIsIm1vciIsInNldE1vciIsInNldGhhc2h0YWciLCJ1cmwiLCJoYXNodGFnc19zb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNFLEtBQW5CO0FBRmlCLE1BR1RDLE9BSFMsR0FHR0QsS0FISCxDQUdUQyxPQUhTOztBQUFBLGtCQUlLQyxzREFBUSxDQUFDLElBQUQsQ0FKYjtBQUFBLE1BSVZDLEdBSlU7QUFBQSxNQUlMQyxNQUpLOztBQUtqQixTQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBRSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFVLFVBQU0sRUFBQyxPQUFqQjtBQUF5QixVQUFNLEVBQUVBLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFVBQU0sRUFBQyxZQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDSCxPQUFEO0FBQUEsYUFBYUksVUFBVSxDQUFDSixPQUFPLENBQUNLLEdBQVQsQ0FBdkI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsd0RBQUQ7QUFDRSxrQkFBYyxFQUFFO0FBQUVDLG1CQUFhLEVBQUU7QUFBRUQsV0FBRyxFQUFFTDtBQUFQO0FBQWpCLEtBRGxCO0FBRUUsT0FBRyxFQUFFRSxHQUZQO0FBR0UsVUFBTSxFQUFFQyxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLENBREYsQ0FERjtBQW9CRCxDQXpCRDs7R0FBTVAsSTtVQUNXRSxxRDs7O0tBRFhGLEk7QUEwQlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mcmFtZXMvTmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBIYXNodGFncyBmcm9tICcuLi9IYXNodGFnL0xpc3QvaW5kZXgnO1xuaW1wb3J0IFBvc3RzIGZyb20gJy4uL1Bvc3QvTGlzdC9pbmRleCc7XG5jb25zdCBOZXdzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCB7IGhhc2h0YWcgfSA9IHF1ZXJ5O1xuICBjb25zdCBbbW9yLCBzZXRNb3JdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cbiAgICAgICAgICA8SGFzaHRhZ3Mgb3B0aW9uPVwiU2lkZXJcIiBzZXRNb3I9e3NldE1vcn0gLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEhhc2h0YWdzXG4gICAgICAgICAgICBvcHRpb249XCJCcmVhZGNydW1iXCJcbiAgICAgICAgICAgIG9uQ2hvb3NlPXsoaGFzaHRhZykgPT4gc2V0aGFzaHRhZyhoYXNodGFnLnVybCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UG9zdHNcbiAgICAgICAgICAgIFBvc3RXaGVyZUlucHV0PXt7IGhhc2h0YWdzX3NvbWU6IHsgdXJsOiBoYXNodGFnIH0gfX1cbiAgICAgICAgICAgIG1vcj17bW9yfVxuICAgICAgICAgICAgc2V0TW9yPXtzZXRNb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/frames/News.js\n");

/***/ })

})