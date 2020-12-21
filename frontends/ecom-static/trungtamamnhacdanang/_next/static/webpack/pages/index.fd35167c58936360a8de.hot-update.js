webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/headers/HeaderDefault.js":
/*!****************************************************!*\
  !*** ./components/shared/headers/HeaderDefault.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/public/data/menu.json */ \"./public/data/menu.json\");\nvar _public_data_menu_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/public/data/menu.json */ \"./public/data/menu.json\", 1);\n/* harmony import */ var _components_shared_menu_MenuDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/shared/menu/MenuDefault */ \"./components/shared/menu/MenuDefault.js\");\n/* harmony import */ var _components_elements_SocialLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/elements/SocialLinks */ \"./components/elements/SocialLinks.js\");\n/* harmony import */ var _components_elements_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/elements/Logo */ \"./components/elements/Logo.js\");\n/* harmony import */ var _store_app_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/store/app/action */ \"./store/app/action.js\");\n/* harmony import */ var _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utilities/common-helpers */ \"./utilities/common-helpers.js\");\n/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/utilities/product-helper */ \"./utilities/product-helper.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _store_collection_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/store/collection/action */ \"./store/collection/action.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/huy/New Volume/linux/apps/trungtamamnhacdanang/components/shared/headers/HeaderDefault.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nvar HeaderDefault = function HeaderDefault(_ref) {\n  _s();\n\n  var className = _ref.className,\n      hashtags = _ref.hashtags;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      formatPrimaryMenu = _useState[0],\n      setFormatPrimaryMenu = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  function handleOpenSearchBox() {\n    dispatch(Object(_store_app_action__WEBPACK_IMPORTED_MODULE_6__[\"toggleSearchBox\"])(true));\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (true) {\n      window.addEventListener('scroll', _utilities_common_helpers__WEBPACK_IMPORTED_MODULE_7__[\"stickyHeader\"]);\n    } // console.log(collection.hashtags)\n\n  }); //fetch hashtag\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_store_collection_action__WEBPACK_IMPORTED_MODULE_10__[\"getHashtags\"])());\n  }, []); //watch hashtag change\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // console.log('hashtag change');\n    setFormatPrimaryMenu(Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_8__[\"prepareMenuWithHashtag\"])(hashtags));\n  }, [hashtags]);\n  return __jsx(\"header\", {\n    className: \"header header--default \".concat(className && className),\n    id: \"header-sticky\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"header__left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/img/logo.png\",\n    alt: \"Logo\",\n    style: {\n      maxHeight: 36\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  })))), __jsx(\"div\", {\n    className: \"header__center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(_components_shared_menu_MenuDefault__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: formatPrimaryMenu,\n    className: \"menu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"header__right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"header__search\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"header__search-btn\",\n    onClick: handleOpenSearchBox,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"feather icon icon-search\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }))))));\n};\n\n_s(HeaderDefault, \"D//jNRPuCDSNySs+sPnTXTRTmug=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n\n_c = HeaderDefault;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    hashtags: state.collection.hashtags\n  };\n})(HeaderDefault));\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderDefault\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEZWZhdWx0LmpzPzhmNTAiXSwibmFtZXMiOlsiSGVhZGVyRGVmYXVsdCIsImNsYXNzTmFtZSIsImhhc2h0YWdzIiwidXNlU3RhdGUiLCJmb3JtYXRQcmltYXJ5TWVudSIsInNldEZvcm1hdFByaW1hcnlNZW51IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZU9wZW5TZWFyY2hCb3giLCJ0b2dnbGVTZWFyY2hCb3giLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RpY2t5SGVhZGVyIiwiZ2V0SGFzaHRhZ3MiLCJwcmVwYXJlTWVudVdpdGhIYXNodGFnIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXhIZWlnaHQiLCJjb25uZWN0Iiwic3RhdGUiLCJjb2xsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDMUNDLGlCQUQwQztBQUFBLE1BQ3ZCQyxvQkFEdUI7O0FBR2pELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EsV0FBU0MsbUJBQVQsR0FBK0I7QUFDN0JGLFlBQVEsQ0FBQ0cseUVBQWUsQ0FBQyxJQUFELENBQWhCLENBQVI7QUFDRDs7QUFDREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkJDLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLHNFQUFsQztBQUNELEtBSGEsQ0FJZDs7QUFDRCxHQUxRLENBQVQsQ0FQaUQsQ0FhakQ7O0FBQ0FILHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUNRLDZFQUFXLEVBQVosQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQsQ0FkaUQsQ0FpQmpEOztBQUNBSix5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBTCx3QkFBb0IsQ0FBQ1Usd0ZBQXNCLENBQUNiLFFBQUQsQ0FBdkIsQ0FBcEI7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsUUFBRCxDQUhNLENBQVQ7QUFJQSxTQUNFO0FBQ0UsYUFBUyxtQ0FBNEJELFNBQVMsSUFBSUEsU0FBekMsQ0FEWDtBQUVFLE1BQUUsRUFBQyxlQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFFO0FBQUVlLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxnQkFBVSxFQUFFO0FBQS9CLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLHNCQUROO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFpQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFBYSxRQUFJLEVBQUVkLGlCQUFuQjtBQUFzQyxhQUFTLEVBQUMsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakNGLEVBb0NFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFrQyxXQUFPLEVBQUVJLG1CQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGRixDQXBDRixDQUpGLENBREY7QUFvREQsQ0ExRUQ7O0dBQU1SLGE7VUFHYU8sdUQ7OztLQUhiUCxhO0FBNEVTbUIsMEhBQU8sQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUFFbEIsWUFBUSxFQUFFa0IsS0FBSyxDQUFDQyxVQUFOLENBQWlCbkI7QUFBN0IsR0FBWjtBQUFBLENBQUQsQ0FBUCxDQUNiRixhQURhLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRlZmF1bHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcHJpbWFyeU1lbnUgfSBmcm9tICd+L3B1YmxpYy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgTWVudURlZmF1bHQgZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9tZW51L01lbnVEZWZhdWx0JztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICd+L2NvbXBvbmVudHMvZWxlbWVudHMvU29jaWFsTGlua3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnfi9jb21wb25lbnRzL2VsZW1lbnRzL0xvZ28nO1xuaW1wb3J0IHsgdG9nZ2xlU2VhcmNoQm94IH0gZnJvbSAnfi9zdG9yZS9hcHAvYWN0aW9uJztcbmltcG9ydCB7IHN0aWNreUhlYWRlciB9IGZyb20gJ34vdXRpbGl0aWVzL2NvbW1vbi1oZWxwZXJzJztcbmltcG9ydCB7IHByZXBhcmVNZW51V2l0aEhhc2h0YWcgfSBmcm9tICd+L3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0SGFzaHRhZ3MgfSBmcm9tICd+L3N0b3JlL2NvbGxlY3Rpb24vYWN0aW9uJztcblxuY29uc3QgSGVhZGVyRGVmYXVsdCA9ICh7IGNsYXNzTmFtZSwgaGFzaHRhZ3MgfSkgPT4ge1xuICBjb25zdCBbZm9ybWF0UHJpbWFyeU1lbnUsIHNldEZvcm1hdFByaW1hcnlNZW51XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGZ1bmN0aW9uIGhhbmRsZU9wZW5TZWFyY2hCb3goKSB7XG4gICAgZGlzcGF0Y2godG9nZ2xlU2VhcmNoQm94KHRydWUpKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGlja3lIZWFkZXIpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhjb2xsZWN0aW9uLmhhc2h0YWdzKVxuICB9KTtcbiAgLy9mZXRjaCBoYXNodGFnXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0SGFzaHRhZ3MoKSk7XG4gIH0sIFtdKTtcbiAgLy93YXRjaCBoYXNodGFnIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYXNodGFnIGNoYW5nZScpO1xuICAgIHNldEZvcm1hdFByaW1hcnlNZW51KHByZXBhcmVNZW51V2l0aEhhc2h0YWcoaGFzaHRhZ3MpKTtcbiAgfSwgW2hhc2h0YWdzXSk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyIGhlYWRlci0tZGVmYXVsdCAke2NsYXNzTmFtZSAmJiBjbGFzc05hbWV9YH1cbiAgICAgIGlkPVwiaGVhZGVyLXN0aWNreVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xlZnRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDM2IH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsvKiA8TG9nbyAvPiAqL31cbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIvc3RhdGljL2ltZy9sb2dvLXdoaXRlLnN2Z1wiIGFsdD1cIkxvZ29cIiAvPiAqL31cbiAgICAgICAgICB7Lyoge2NsYXNzTmFtZSAmJiBjbGFzc05hbWUuaW5jbHVkZXMoJ3RyYW5zcGFyZW50JykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1sb2dvIHdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3NvbC1sb2dvLTQucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPXt7IH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNGRkMxMDcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFkaWQgVHJhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jZW50ZXJcIj5cbiAgICAgICAgICA8TWVudURlZmF1bHQgZGF0YT17Zm9ybWF0UHJpbWFyeU1lbnV9IGNsYXNzTmFtZT1cIm1lbnVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3JpZ2h0XCI+XG4gICAgICAgICAgey8qICA8U29jaWFsTGlua3MvPiovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2hcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZU9wZW5TZWFyY2hCb3h9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmZWF0aGVyIGljb24gaWNvbi1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gKHsgaGFzaHRhZ3M6IHN0YXRlLmNvbGxlY3Rpb24uaGFzaHRhZ3MgfSkpKFxuICBIZWFkZXJEZWZhdWx0XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/headers/HeaderDefault.js\n");

/***/ })

})