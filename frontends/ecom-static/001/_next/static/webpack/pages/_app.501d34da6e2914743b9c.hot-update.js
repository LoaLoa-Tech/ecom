webpackHotUpdate_N_E("pages/_app",{

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: orderCountVar, newOrderVar, newOrderCountVar, customerVar, refetchCustomer, cache, initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderCountVar", function() { return orderCountVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newOrderVar", function() { return newOrderVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newOrderCountVar", function() { return newOrderCountVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerVar", function() { return customerVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refetchCustomer", function() { return refetchCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ "./node_modules/@apollo/client/link/context/index.js");
/* harmony import */ var _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client/link/http */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action */ "./apollo/action.js");




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var orderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["makeVar"])(0);
var newOrderVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["makeVar"])(false);
var newOrderCountVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["makeVar"])();
var customerVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["makeVar"])({
  id: null
});
var refetchCustomer = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["makeVar"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]();
var uri = (true ? 'https://ecommerce.loaloa.tech' : undefined) + '/admin/api';
console.log(uri);
var httpLink = new _apollo_client_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLink"]({
  uri: uri,
  credentials: 'same-origin'
});
var authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__["setContext"])(function (_, _ref2) {
  var headers = _ref2.headers;

  if (true) {
    var token = localStorage.getItem('token');
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        authorization: token ? "Bearer ".concat(token) : ''
      })
    };
  }
});

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
    ssrMode: false,
    link: authLink.concat(httpLink),
    cache: cache
  });
}

var apolloClient;
function initializeApollo() {
  var _apolloClient2;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (false) {}
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    Object(_action__WEBPACK_IMPORTED_MODULE_7__["init"])();
    return initializeApollo(initialState);
  }, [initialState]);
  return store;
}

_s(useApollo, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvL2NsaWVudC5qcyJdLCJuYW1lcyI6WyJvcmRlckNvdW50VmFyIiwibWFrZVZhciIsIm5ld09yZGVyVmFyIiwibmV3T3JkZXJDb3VudFZhciIsImN1c3RvbWVyVmFyIiwiaWQiLCJyZWZldGNoQ3VzdG9tZXIiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ1cmkiLCJjb25zb2xlIiwibG9nIiwiaHR0cExpbmsiLCJIdHRwTGluayIsImNyZWRlbnRpYWxzIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwiXyIsImhlYWRlcnMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhdXRob3JpemF0aW9uIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJjb25jYXQiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDTyxJQUFNQSxhQUFhLEdBQUdDLDhEQUFPLENBQUMsQ0FBRCxDQUE3QjtBQUNBLElBQU1DLFdBQVcsR0FBR0QsOERBQU8sQ0FBQyxLQUFELENBQTNCO0FBQ0EsSUFBTUUsZ0JBQWdCLEdBQUdGLDhEQUFPLEVBQWhDO0FBQ0EsSUFBTUcsV0FBVyxHQUFHSCw4REFBTyxDQUFDO0FBQUNJLElBQUUsRUFBRTtBQUFMLENBQUQsQ0FBM0I7QUFDQSxJQUFNQyxlQUFlLEdBQUdMLDhEQUFPLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxHQUEvQjtBQUVBLElBQUlNLEtBQUssR0FBRyxJQUFJQyw0REFBSixFQUFaO0FBQ1AsSUFBTUMsR0FBRyxHQUNQLENBQUMsT0FDRywrQkFESCxHQUVHLFNBRkosSUFFK0IsWUFIakM7QUFJQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxJQUFNRyxRQUFRLEdBQUcsSUFBSUMsaUVBQUosQ0FBYTtBQUM1QkosS0FBRyxFQUFIQSxHQUQ0QjtBQUU1QkssYUFBVyxFQUFFO0FBRmUsQ0FBYixDQUFqQjtBQUlBLElBQU1DLFFBQVEsR0FBR0MsOEVBQVUsQ0FBQyxVQUFDQyxDQUFELFNBQWtCO0FBQUEsTUFBYkMsT0FBYSxTQUFiQSxPQUFhOztBQUM1QyxZQUFtQztBQUNqQyxRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0EsV0FBTztBQUNMSCxhQUFPLGtDQUNGQSxPQURFO0FBRUxJLHFCQUFhLEVBQUVILEtBQUssb0JBQWFBLEtBQWIsSUFBdUI7QUFGdEM7QUFERixLQUFQO0FBTUQ7QUFDRixDQVYwQixDQUEzQjs7QUFXQSxTQUFTSSxrQkFBVCxHQUE4QjtBQUM1QixTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxXQUFPLE9BRGU7QUFFdEJDLFFBQUksRUFBRVgsUUFBUSxDQUFDWSxNQUFULENBQWdCZixRQUFoQixDQUZnQjtBQUd0QkwsU0FBSyxFQUFMQTtBQUhzQixHQUFqQixDQUFQO0FBS0Q7O0FBRUQsSUFBSXFCLFlBQUo7QUFDTyxTQUFTQyxnQkFBVCxHQUErQztBQUFBOztBQUFBLE1BQXJCQyxZQUFxQix1RUFBTixJQUFNOztBQUNwRCxNQUFNQyxhQUFhLHFCQUFHSCxZQUFILDJEQUFtQkwsa0JBQWtCLEVBQXhEOztBQUNBLE1BQUlPLFlBQUosRUFBa0I7QUFDaEJDLGlCQUFhLENBQUN4QixLQUFkLENBQW9CeUIsT0FBcEIsQ0FBNEJGLFlBQTVCO0FBQ0Q7O0FBQ0QsYUFBbUM7QUFDbkMsTUFBSSxDQUFDRixZQUFMLEVBQW1CQSxZQUFZLEdBQUdHLGFBQWY7QUFDbkIsU0FBT0EsYUFBUDtBQUNEO0FBQ00sU0FBU0UsU0FBVCxDQUFtQkgsWUFBbkIsRUFBaUM7QUFBQTs7QUFDdEMsTUFBTUksS0FBSyxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDMUJDLHdEQUFJO0FBRUosV0FBT1AsZ0JBQWdCLENBQUNDLFlBQUQsQ0FBdkI7QUFDRCxHQUpvQixFQUlsQixDQUFDQSxZQUFELENBSmtCLENBQXJCO0FBS0EsU0FBT0ksS0FBUDtBQUNEOztHQVBlRCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTAxZDM0ZGE2ZTI5MTQ3NDNiOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Fwb2xsb0NsaWVudH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XHJcbmltcG9ydCB7SHR0cExpbmt9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cCc7XHJcblxyXG5pbXBvcnQge0luTWVtb3J5Q2FjaGUsIG1ha2VWYXIsIGdxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge2luaXR9IGZyb20gJy4vYWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IG9yZGVyQ291bnRWYXIgPSBtYWtlVmFyKDApO1xyXG5leHBvcnQgY29uc3QgbmV3T3JkZXJWYXIgPSBtYWtlVmFyKGZhbHNlKTtcclxuZXhwb3J0IGNvbnN0IG5ld09yZGVyQ291bnRWYXIgPSBtYWtlVmFyKCk7XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lclZhciA9IG1ha2VWYXIoe2lkOiBudWxsfSk7XHJcbmV4cG9ydCBjb25zdCByZWZldGNoQ3VzdG9tZXIgPSBtYWtlVmFyKGFzeW5jICgpID0+IHt9KTtcclxuXHJcbmV4cG9ydCBsZXQgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpO1xyXG5jb25zdCB1cmkgPVxyXG4gIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/ICdodHRwczovL2Vjb21tZXJjZS5sb2Fsb2EudGVjaCdcclxuICAgIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NjAwNycpICsgJy9hZG1pbi9hcGknO1xyXG5jb25zb2xlLmxvZyh1cmkpO1xyXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XHJcbiAgdXJpLFxyXG4gIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG59KTtcclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7aGVhZGVyc30pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJycsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufSk7XHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZSxcclxuICB9KTtcclxufVxyXG5cclxubGV0IGFwb2xsb0NsaWVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XHJcbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSk7XHJcbiAgfSwgW2luaXRpYWxTdGF0ZV0pO1xyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9