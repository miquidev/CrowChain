"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/on-exit-leak-free";
exports.ids = ["vendor-chunks/on-exit-leak-free"];
exports.modules = {

/***/ "(ssr)/./node_modules/on-exit-leak-free/index.js":
/*!*************************************************!*\
  !*** ./node_modules/on-exit-leak-free/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\nfunction genWrap(wraps, ref, fn, event) {\n    function wrap() {\n        const obj = ref.deref();\n        // This should alway happen, however GC is\n        // undeterministic so it might happen.\n        /* istanbul ignore else */ if (obj !== undefined) {\n            fn(obj, event);\n        }\n    }\n    wraps[event] = wrap;\n    process.once(event, wrap);\n}\nconst registry = new FinalizationRegistry(clear);\nconst map = new WeakMap();\nfunction clear(wraps) {\n    process.removeListener(\"exit\", wraps.exit);\n    process.removeListener(\"beforeExit\", wraps.beforeExit);\n}\nfunction register(obj, fn) {\n    if (obj === undefined) {\n        throw new Error(\"the object can't be undefined\");\n    }\n    const ref = new WeakRef(obj);\n    const wraps = {};\n    map.set(obj, wraps);\n    registry.register(obj, wraps);\n    genWrap(wraps, ref, fn, \"exit\");\n    genWrap(wraps, ref, fn, \"beforeExit\");\n}\nfunction unregister(obj) {\n    const wraps = map.get(obj);\n    map.delete(obj);\n    if (wraps) {\n        clear(wraps);\n    }\n    registry.unregister(obj);\n}\nmodule.exports = {\n    register,\n    unregister\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxTQUFTQSxRQUFTQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxLQUFLO0lBQ3JDLFNBQVNDO1FBQ1AsTUFBTUMsTUFBTUosSUFBSUssS0FBSztRQUNyQiwwQ0FBMEM7UUFDMUMsc0NBQXNDO1FBQ3RDLHdCQUF3QixHQUN4QixJQUFJRCxRQUFRRSxXQUFXO1lBQ3JCTCxHQUFHRyxLQUFLRjtRQUNWO0lBQ0Y7SUFFQUgsS0FBSyxDQUFDRyxNQUFNLEdBQUdDO0lBQ2ZJLFFBQVFDLElBQUksQ0FBQ04sT0FBT0M7QUFDdEI7QUFFQSxNQUFNTSxXQUFXLElBQUlDLHFCQUFxQkM7QUFDMUMsTUFBTUMsTUFBTSxJQUFJQztBQUVoQixTQUFTRixNQUFPWixLQUFLO0lBQ25CUSxRQUFRTyxjQUFjLENBQUMsUUFBUWYsTUFBTWdCLElBQUk7SUFDekNSLFFBQVFPLGNBQWMsQ0FBQyxjQUFjZixNQUFNaUIsVUFBVTtBQUN2RDtBQUVBLFNBQVNDLFNBQVViLEdBQUcsRUFBRUgsRUFBRTtJQUN4QixJQUFJRyxRQUFRRSxXQUFXO1FBQ3JCLE1BQU0sSUFBSVksTUFBTTtJQUNsQjtJQUNBLE1BQU1sQixNQUFNLElBQUltQixRQUFRZjtJQUV4QixNQUFNTCxRQUFRLENBQUM7SUFDZmEsSUFBSVEsR0FBRyxDQUFDaEIsS0FBS0w7SUFDYlUsU0FBU1EsUUFBUSxDQUFDYixLQUFLTDtJQUV2QkQsUUFBUUMsT0FBT0MsS0FBS0MsSUFBSTtJQUN4QkgsUUFBUUMsT0FBT0MsS0FBS0MsSUFBSTtBQUMxQjtBQUVBLFNBQVNvQixXQUFZakIsR0FBRztJQUN0QixNQUFNTCxRQUFRYSxJQUFJVSxHQUFHLENBQUNsQjtJQUN0QlEsSUFBSVcsTUFBTSxDQUFDbkI7SUFDWCxJQUFJTCxPQUFPO1FBQ1RZLE1BQU1aO0lBQ1I7SUFDQVUsU0FBU1ksVUFBVSxDQUFDakI7QUFDdEI7QUFFQW9CLE9BQU9DLE9BQU8sR0FBRztJQUNmUjtJQUNBSTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2ZhcHAvLi9ub2RlX21vZHVsZXMvb24tZXhpdC1sZWFrLWZyZWUvaW5kZXguanM/Mzk4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2VuV3JhcCAod3JhcHMsIHJlZiwgZm4sIGV2ZW50KSB7XG4gIGZ1bmN0aW9uIHdyYXAgKCkge1xuICAgIGNvbnN0IG9iaiA9IHJlZi5kZXJlZigpXG4gICAgLy8gVGhpcyBzaG91bGQgYWx3YXkgaGFwcGVuLCBob3dldmVyIEdDIGlzXG4gICAgLy8gdW5kZXRlcm1pbmlzdGljIHNvIGl0IG1pZ2h0IGhhcHBlbi5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm4ob2JqLCBldmVudClcbiAgICB9XG4gIH1cblxuICB3cmFwc1tldmVudF0gPSB3cmFwXG4gIHByb2Nlc3Mub25jZShldmVudCwgd3JhcClcbn1cblxuY29uc3QgcmVnaXN0cnkgPSBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkoY2xlYXIpXG5jb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpXG5cbmZ1bmN0aW9uIGNsZWFyICh3cmFwcykge1xuICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCdleGl0Jywgd3JhcHMuZXhpdClcbiAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcignYmVmb3JlRXhpdCcsIHdyYXBzLmJlZm9yZUV4aXQpXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyIChvYmosIGZuKSB7XG4gIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGhlIG9iamVjdCBjYW5cXCd0IGJlIHVuZGVmaW5lZCcpXG4gIH1cbiAgY29uc3QgcmVmID0gbmV3IFdlYWtSZWYob2JqKVxuXG4gIGNvbnN0IHdyYXBzID0ge31cbiAgbWFwLnNldChvYmosIHdyYXBzKVxuICByZWdpc3RyeS5yZWdpc3RlcihvYmosIHdyYXBzKVxuXG4gIGdlbldyYXAod3JhcHMsIHJlZiwgZm4sICdleGl0JylcbiAgZ2VuV3JhcCh3cmFwcywgcmVmLCBmbiwgJ2JlZm9yZUV4aXQnKVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyIChvYmopIHtcbiAgY29uc3Qgd3JhcHMgPSBtYXAuZ2V0KG9iailcbiAgbWFwLmRlbGV0ZShvYmopXG4gIGlmICh3cmFwcykge1xuICAgIGNsZWFyKHdyYXBzKVxuICB9XG4gIHJlZ2lzdHJ5LnVucmVnaXN0ZXIob2JqKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVnaXN0ZXIsXG4gIHVucmVnaXN0ZXJcbn1cbiJdLCJuYW1lcyI6WyJnZW5XcmFwIiwid3JhcHMiLCJyZWYiLCJmbiIsImV2ZW50Iiwid3JhcCIsIm9iaiIsImRlcmVmIiwidW5kZWZpbmVkIiwicHJvY2VzcyIsIm9uY2UiLCJyZWdpc3RyeSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiY2xlYXIiLCJtYXAiLCJXZWFrTWFwIiwicmVtb3ZlTGlzdGVuZXIiLCJleGl0IiwiYmVmb3JlRXhpdCIsInJlZ2lzdGVyIiwiRXJyb3IiLCJXZWFrUmVmIiwic2V0IiwidW5yZWdpc3RlciIsImdldCIsImRlbGV0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/on-exit-leak-free/index.js\n");

/***/ })

};
;