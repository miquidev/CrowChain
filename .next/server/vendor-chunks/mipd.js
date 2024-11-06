"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mipd";
exports.ids = ["vendor-chunks/mipd"];
exports.modules = {

/***/ "(ssr)/./node_modules/mipd/dist/esm/store.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/store.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/mipd/dist/esm/utils.js\");\n\nfunction createStore() {\n    const listeners = new Set();\n    let providerDetails = [];\n    const request = ()=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.requestProviders)((providerDetail)=>{\n            if (providerDetails.some(({ info })=>info.uuid === providerDetail.info.uuid)) return;\n            providerDetails = [\n                ...providerDetails,\n                providerDetail\n            ];\n            listeners.forEach((listener)=>listener(providerDetails, {\n                    added: [\n                        providerDetail\n                    ]\n                }));\n        });\n    let unwatch = request();\n    return {\n        _listeners () {\n            return listeners;\n        },\n        clear () {\n            listeners.forEach((listener)=>listener([], {\n                    removed: [\n                        ...providerDetails\n                    ]\n                }));\n            providerDetails = [];\n        },\n        destroy () {\n            this.clear();\n            listeners.clear();\n            unwatch?.();\n        },\n        findProvider ({ rdns }) {\n            return providerDetails.find((providerDetail)=>providerDetail.info.rdns === rdns);\n        },\n        getProviders () {\n            return providerDetails;\n        },\n        reset () {\n            this.clear();\n            unwatch?.();\n            unwatch = request();\n        },\n        subscribe (listener, { emitImmediately } = {}) {\n            listeners.add(listener);\n            if (emitImmediately) listener(providerDetails, {\n                added: providerDetails\n            });\n            return ()=>listeners.delete(listener);\n        }\n    };\n} //# sourceMappingURL=store.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxTQUFTQztJQUNaLE1BQU1DLFlBQVksSUFBSUM7SUFDdEIsSUFBSUMsa0JBQWtCLEVBQUU7SUFDeEIsTUFBTUMsVUFBVSxJQUFNTCwyREFBZ0JBLENBQUMsQ0FBQ007WUFDcEMsSUFBSUYsZ0JBQWdCRyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUUsR0FBS0EsS0FBS0MsSUFBSSxLQUFLSCxlQUFlRSxJQUFJLENBQUNDLElBQUksR0FDekU7WUFDSkwsa0JBQWtCO21CQUFJQTtnQkFBaUJFO2FBQWU7WUFDdERKLFVBQVVRLE9BQU8sQ0FBQyxDQUFDQyxXQUFhQSxTQUFTUCxpQkFBaUI7b0JBQUVRLE9BQU87d0JBQUNOO3FCQUFlO2dCQUFDO1FBQ3hGO0lBQ0EsSUFBSU8sVUFBVVI7SUFDZCxPQUFPO1FBQ0hTO1lBQ0ksT0FBT1o7UUFDWDtRQUNBYTtZQUNJYixVQUFVUSxPQUFPLENBQUMsQ0FBQ0MsV0FBYUEsU0FBUyxFQUFFLEVBQUU7b0JBQUVLLFNBQVM7MkJBQUlaO3FCQUFnQjtnQkFBQztZQUM3RUEsa0JBQWtCLEVBQUU7UUFDeEI7UUFDQWE7WUFDSSxJQUFJLENBQUNGLEtBQUs7WUFDVmIsVUFBVWEsS0FBSztZQUNmRjtRQUNKO1FBQ0FLLGNBQWEsRUFBRUMsSUFBSSxFQUFFO1lBQ2pCLE9BQU9mLGdCQUFnQmdCLElBQUksQ0FBQyxDQUFDZCxpQkFBbUJBLGVBQWVFLElBQUksQ0FBQ1csSUFBSSxLQUFLQTtRQUNqRjtRQUNBRTtZQUNJLE9BQU9qQjtRQUNYO1FBQ0FrQjtZQUNJLElBQUksQ0FBQ1AsS0FBSztZQUNWRjtZQUNBQSxVQUFVUjtRQUNkO1FBQ0FrQixXQUFVWixRQUFRLEVBQUUsRUFBRWEsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDdEIsVUFBVXVCLEdBQUcsQ0FBQ2Q7WUFDZCxJQUFJYSxpQkFDQWIsU0FBU1AsaUJBQWlCO2dCQUFFUSxPQUFPUjtZQUFnQjtZQUN2RCxPQUFPLElBQU1GLFVBQVV3QixNQUFNLENBQUNmO1FBQ2xDO0lBQ0o7QUFDSixFQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NmYXBwLy4vbm9kZV9tb2R1bGVzL21pcGQvZGlzdC9lc20vc3RvcmUuanM/M2JmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0UHJvdmlkZXJzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUoKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIGxldCBwcm92aWRlckRldGFpbHMgPSBbXTtcbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4gcmVxdWVzdFByb3ZpZGVycygocHJvdmlkZXJEZXRhaWwpID0+IHtcbiAgICAgICAgaWYgKHByb3ZpZGVyRGV0YWlscy5zb21lKCh7IGluZm8gfSkgPT4gaW5mby51dWlkID09PSBwcm92aWRlckRldGFpbC5pbmZvLnV1aWQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwcm92aWRlckRldGFpbHMgPSBbLi4ucHJvdmlkZXJEZXRhaWxzLCBwcm92aWRlckRldGFpbF07XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIocHJvdmlkZXJEZXRhaWxzLCB7IGFkZGVkOiBbcHJvdmlkZXJEZXRhaWxdIH0pKTtcbiAgICB9KTtcbiAgICBsZXQgdW53YXRjaCA9IHJlcXVlc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBfbGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKFtdLCB7IHJlbW92ZWQ6IFsuLi5wcm92aWRlckRldGFpbHNdIH0pKTtcbiAgICAgICAgICAgIHByb3ZpZGVyRGV0YWlscyA9IFtdO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICB1bndhdGNoPy4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluZFByb3ZpZGVyKHsgcmRucyB9KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJEZXRhaWxzLmZpbmQoKHByb3ZpZGVyRGV0YWlsKSA9PiBwcm92aWRlckRldGFpbC5pbmZvLnJkbnMgPT09IHJkbnMpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm92aWRlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJEZXRhaWxzO1xuICAgICAgICB9LFxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHVud2F0Y2g/LigpO1xuICAgICAgICAgICAgdW53YXRjaCA9IHJlcXVlc3QoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3Vic2NyaWJlKGxpc3RlbmVyLCB7IGVtaXRJbW1lZGlhdGVseSB9ID0ge30pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKGVtaXRJbW1lZGlhdGVseSlcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihwcm92aWRlckRldGFpbHMsIHsgYWRkZWQ6IHByb3ZpZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmUuanMubWFwIl0sIm5hbWVzIjpbInJlcXVlc3RQcm92aWRlcnMiLCJjcmVhdGVTdG9yZSIsImxpc3RlbmVycyIsIlNldCIsInByb3ZpZGVyRGV0YWlscyIsInJlcXVlc3QiLCJwcm92aWRlckRldGFpbCIsInNvbWUiLCJpbmZvIiwidXVpZCIsImZvckVhY2giLCJsaXN0ZW5lciIsImFkZGVkIiwidW53YXRjaCIsIl9saXN0ZW5lcnMiLCJjbGVhciIsInJlbW92ZWQiLCJkZXN0cm95IiwiZmluZFByb3ZpZGVyIiwicmRucyIsImZpbmQiLCJnZXRQcm92aWRlcnMiLCJyZXNldCIsInN1YnNjcmliZSIsImVtaXRJbW1lZGlhdGVseSIsImFkZCIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mipd/dist/esm/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announceProvider: () => (/* binding */ announceProvider),\n/* harmony export */   requestProviders: () => (/* binding */ requestProviders)\n/* harmony export */ });\n/**\n * Announces an EIP-1193 Provider.\n */ function announceProvider(detail) {\n    const event = new CustomEvent(\"eip6963:announceProvider\", {\n        detail: Object.freeze(detail)\n    });\n    window.dispatchEvent(event);\n    const handler = ()=>window.dispatchEvent(event);\n    window.addEventListener(\"eip6963:requestProvider\", handler);\n    return ()=>window.removeEventListener(\"eip6963:requestProvider\", handler);\n}\n/**\n * Watches for EIP-1193 Providers to be announced.\n */ function requestProviders(listener) {\n    if (true) return;\n    const handler = (event)=>listener(event.detail);\n    window.addEventListener(\"eip6963:announceProvider\", handler);\n    window.dispatchEvent(new CustomEvent(\"eip6963:requestProvider\"));\n    return ()=>window.removeEventListener(\"eip6963:announceProvider\", handler);\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztDQUVDLEdBQ00sU0FBU0EsaUJBQWlCQyxNQUFNO0lBQ25DLE1BQU1DLFFBQVEsSUFBSUMsWUFBWSw0QkFBNEI7UUFBRUYsUUFBUUcsT0FBT0MsTUFBTSxDQUFDSjtJQUFRO0lBQzFGSyxPQUFPQyxhQUFhLENBQUNMO0lBQ3JCLE1BQU1NLFVBQVUsSUFBTUYsT0FBT0MsYUFBYSxDQUFDTDtJQUMzQ0ksT0FBT0csZ0JBQWdCLENBQUMsMkJBQTJCRDtJQUNuRCxPQUFPLElBQU1GLE9BQU9JLG1CQUFtQixDQUFDLDJCQUEyQkY7QUFDdkU7QUFDQTs7Q0FFQyxHQUNNLFNBQVNHLGlCQUFpQkMsUUFBUTtJQUNyQyxJQUFJLElBQWtCLEVBQ2xCO0lBQ0osTUFBTUosVUFBVSxDQUFDTixRQUFVVSxTQUFTVixNQUFNRCxNQUFNO0lBQ2hESyxPQUFPRyxnQkFBZ0IsQ0FBQyw0QkFBNEJEO0lBQ3BERixPQUFPQyxhQUFhLENBQUMsSUFBSUosWUFBWTtJQUNyQyxPQUFPLElBQU1HLE9BQU9JLG1CQUFtQixDQUFDLDRCQUE0QkY7QUFDeEUsRUFDQSxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZmFwcC8uL25vZGVfbW9kdWxlcy9taXBkL2Rpc3QvZXNtL3V0aWxzLmpzPzJmMTciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbm5vdW5jZXMgYW4gRUlQLTExOTMgUHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbm5vdW5jZVByb3ZpZGVyKGRldGFpbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdlaXA2OTYzOmFubm91bmNlUHJvdmlkZXInLCB7IGRldGFpbDogT2JqZWN0LmZyZWV6ZShkZXRhaWwpIH0pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlaXA2OTYzOnJlcXVlc3RQcm92aWRlcicsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWlwNjk2MzpyZXF1ZXN0UHJvdmlkZXInLCBoYW5kbGVyKTtcbn1cbi8qKlxuICogV2F0Y2hlcyBmb3IgRUlQLTExOTMgUHJvdmlkZXJzIHRvIGJlIGFubm91bmNlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RQcm92aWRlcnMobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiBsaXN0ZW5lcihldmVudC5kZXRhaWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlaXA2OTYzOmFubm91bmNlUHJvdmlkZXInLCBoYW5kbGVyKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2VpcDY5NjM6cmVxdWVzdFByb3ZpZGVyJykpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZWlwNjk2Mzphbm5vdW5jZVByb3ZpZGVyJywgaGFuZGxlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiXSwibmFtZXMiOlsiYW5ub3VuY2VQcm92aWRlciIsImRldGFpbCIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJPYmplY3QiLCJmcmVlemUiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWVzdFByb3ZpZGVycyIsImxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/utils.js\n");

/***/ })

};
;