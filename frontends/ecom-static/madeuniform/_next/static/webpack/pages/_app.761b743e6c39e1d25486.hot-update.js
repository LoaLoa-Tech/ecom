webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Category/List/Sider.js":
/*!*******************************************!*\
  !*** ./components/Category/List/Sider.js ***!
  \*******************************************/
/*! exports provided: Sider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sider\", function() { return Sider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nvar _jsxFileName = \"/home/huy/Documents/ecom-static/components/Category/List/Sider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Sider(_ref) {\n  _s();\n\n  var _this = this;\n\n  var _ref$categories = _ref.categories,\n      categories = _ref$categories === void 0 ? [] : _ref$categories,\n      _ref$onChoose = _ref.onChoose,\n      onChoose = _ref$onChoose === void 0 ? function () {} : _ref$onChoose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      more = _useState[0],\n      setMore = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(7),\n      limit = _useState2[0],\n      setLimit = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window.innerWidth < 768) setLimit(0);\n  });\n  return __jsx(\"div\", {\n    className: \"sticky-top\",\n    style: {\n      top: 60\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"ListGroup\"], {\n    className: \"mb-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, categories.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, categories.slice(0, more ? categories.length : limit).map(function (category) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"ListGroupItem\"], {\n      key: category.url,\n      onClick: function onClick() {\n        setMore(false);\n        onChoose(category);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, category.name);\n  }), categories.length > limit ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"ListGroupItem\"], {\n    key: \"more\",\n    onClick: function onClick() {\n      return setMore(!more);\n    },\n    className: \"text-secondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, more ? __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdExpandLess\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 31\n    }\n  }), \" \\u1EA8n b\\u1EDBt\") : __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 63\n    }\n  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdExpandMore\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 69\n    }\n  }), \" M\\u1EDF r\\u1ED9ng danh m\\u1EE5c\")) : null) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"ListGroupItem\"], {\n    key: \"no-result\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"no result.\"))));\n}\n\n_s(Sider, \"xWtHaEywBQCmWoCjGJWyeSWI9MU=\");\n\n_c = Sider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Sider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS9MaXN0L1NpZGVyLmpzPzIxOWEiXSwibmFtZXMiOlsiU2lkZXIiLCJjYXRlZ29yaWVzIiwib25DaG9vc2UiLCJ1c2VTdGF0ZSIsIm1vcmUiLCJzZXRNb3JlIiwibGltaXQiLCJzZXRMaW1pdCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ0b3AiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsImNhdGVnb3J5IiwidXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxLQUFULE9BQXlEO0FBQUE7O0FBQUE7O0FBQUEsNkJBQXhDQyxVQUF3QztBQUFBLE1BQXhDQSxVQUF3QyxnQ0FBM0IsRUFBMkI7QUFBQSwyQkFBdkJDLFFBQXVCO0FBQUEsTUFBdkJBLFFBQXVCLDhCQUFaLFlBQU0sQ0FBRSxDQUFJOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FBQyxLQUFELENBRDhCO0FBQUEsTUFDdkRDLElBRHVEO0FBQUEsTUFDakRDLE9BRGlEOztBQUFBLG1CQUVwQ0Ysc0RBQVEsQ0FBQyxDQUFELENBRjRCO0FBQUEsTUFFdkRHLEtBRnVEO0FBQUEsTUFFaERDLFFBRmdEOztBQUc5REMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCSCxRQUFRLENBQUMsQ0FBRCxDQUFSO0FBQzlCLEdBRlEsQ0FBVDtBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUEyQixTQUFLLEVBQUU7QUFBQ0ksU0FBRyxFQUFDO0FBQUwsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixVQUFVLENBQUNXLE1BQVgsR0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsVUFBVSxDQUNSWSxLQURGLENBQ1EsQ0FEUixFQUNXVCxJQUFJLEdBQUdILFVBQVUsQ0FBQ1csTUFBZCxHQUF1Qk4sS0FEdEMsRUFFRVEsR0FGRixDQUVNLFVBQUNDLFFBQUQsRUFBYztBQUNqQixXQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsR0FEaEI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYlgsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBSCxnQkFBUSxDQUFDYSxRQUFELENBQVI7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR0EsUUFBUSxDQUFDRSxJQVBaLENBREY7QUFXRCxHQWRGLENBREgsRUFnQkdoQixVQUFVLENBQUNXLE1BQVgsR0FBb0JOLEtBQXBCLEdBQ0MsTUFBQyx3REFBRDtBQUNFLE9BQUcsRUFBQyxNQUROO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLEtBRlg7QUFHRSxhQUFTLEVBQUMsZ0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHQSxJQUFJLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFOLHNCQUFILEdBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTixxQ0FMaEQsQ0FERCxHQVFHLElBeEJOLENBREQsR0E0QkMsTUFBQyx3REFBRDtBQUFlLE9BQUcsRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQTdCSixDQURGLENBREY7QUFzQ0Q7O0dBNUNlSixLOztLQUFBQSxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXRlZ29yeS9MaXN0L1NpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaU91dGxpbmVNZW51VW5mb2xkIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHtNZEV4cGFuZExlc3MsIE1kRXhwYW5kTW9yZX0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHsgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5leHBvcnQgZnVuY3Rpb24gU2lkZXIoeyBjYXRlZ29yaWVzID0gW10sIG9uQ2hvb3NlID0gKCkgPT4ge30gfSkge1xuICBjb25zdCBbbW9yZSwgc2V0TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoNyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSBzZXRMaW1pdCgwKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktdG9wXCJzdHlsZT17e3RvcDo2MH19PlxuICAgICAgPExpc3RHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA/IChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllc1xuICAgICAgICAgICAgICAuc2xpY2UoMCwgbW9yZSA/IGNhdGVnb3JpZXMubGVuZ3RoIDogbGltaXQpXG4gICAgICAgICAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkudXJsfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9yZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgb25DaG9vc2UoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IGxpbWl0ID8gKFxuICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVxuICAgICAgICAgICAgICAgIGtleT1cIm1vcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vcmUoIW1vcmUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttb3JlID8gPHNwYW4+PE1kRXhwYW5kTGVzcy8+IOG6qG4gYuG7m3Q8L3NwYW4+IDogPHNwYW4+PE1kRXhwYW5kTW9yZS8+IE3hu58gcuG7mW5nIGRhbmggbeG7pWM8L3NwYW4+fVxuICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGtleT1cIm5vLXJlc3VsdFwiPlxuICAgICAgICAgICAgPHByZT5ubyByZXN1bHQuPC9wcmU+XG4gICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICApfVxuICAgICAgPC9MaXN0R3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Category/List/Sider.js\n");

/***/ })

})