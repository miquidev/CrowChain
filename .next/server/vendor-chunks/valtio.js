"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valtio";
exports.ids = ["vendor-chunks/valtio"];
exports.modules = {

/***/ "(ssr)/./node_modules/valtio/esm/vanilla.mjs":
/*!*********************************************!*\
  !*** ./node_modules/valtio/esm/vanilla.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion),\n/* harmony export */   proxy: () => (/* binding */ proxy),\n/* harmony export */   ref: () => (/* binding */ ref),\n/* harmony export */   snapshot: () => (/* binding */ snapshot),\n/* harmony export */   subscribe: () => (/* binding */ subscribe),\n/* harmony export */   unstable_buildProxyFunction: () => (/* binding */ unstable_buildProxyFunction)\n/* harmony export */ });\n/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ \"(ssr)/./node_modules/proxy-compare/dist/index.modern.js\");\n\nconst isObject = (x)=>typeof x === \"object\" && x !== null;\nconst proxyStateMap = /* @__PURE__ */ new WeakMap();\nconst refSet = /* @__PURE__ */ new WeakSet();\nconst buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler)=>new Proxy(target, handler), canProxy = (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise)=>{\n    switch(promise.status){\n        case \"fulfilled\":\n            return promise.value;\n        case \"rejected\":\n            throw promise.reason;\n        default:\n            throw promise;\n    }\n}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise)=>{\n    const cache = snapCache.get(target);\n    if ((cache == null ? void 0 : cache[0]) === version) {\n        return cache[1];\n    }\n    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));\n    (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);\n    snapCache.set(target, [\n        version,\n        snap\n    ]);\n    Reflect.ownKeys(target).forEach((key)=>{\n        if (Object.getOwnPropertyDescriptor(snap, key)) {\n            return;\n        }\n        const value = Reflect.get(target, key);\n        const desc = {\n            value,\n            enumerable: true,\n            // This is intentional to avoid copying with proxy-compare.\n            // It's still non-writable, so it avoids assigning a value.\n            configurable: true\n        };\n        if (refSet.has(value)) {\n            (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);\n        } else if (value instanceof Promise) {\n            delete desc.value;\n            desc.get = ()=>handlePromise(value);\n        } else if (proxyStateMap.has(value)) {\n            const [target2, ensureVersion] = proxyStateMap.get(value);\n            desc.value = createSnapshot(target2, ensureVersion(), handlePromise);\n        }\n        Object.defineProperty(snap, key, desc);\n    });\n    return Object.preventExtensions(snap);\n}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [\n    1,\n    1\n], proxyFunction = (initialObject)=>{\n    if (!isObject(initialObject)) {\n        throw new Error(\"object required\");\n    }\n    const found = proxyCache.get(initialObject);\n    if (found) {\n        return found;\n    }\n    let version = versionHolder[0];\n    const listeners = /* @__PURE__ */ new Set();\n    const notifyUpdate = (op, nextVersion = ++versionHolder[0])=>{\n        if (version !== nextVersion) {\n            version = nextVersion;\n            listeners.forEach((listener)=>listener(op, nextVersion));\n        }\n    };\n    let checkVersion = versionHolder[1];\n    const ensureVersion = (nextCheckVersion = ++versionHolder[1])=>{\n        if (checkVersion !== nextCheckVersion && !listeners.size) {\n            checkVersion = nextCheckVersion;\n            propProxyStates.forEach(([propProxyState])=>{\n                const propVersion = propProxyState[1](nextCheckVersion);\n                if (propVersion > version) {\n                    version = propVersion;\n                }\n            });\n        }\n        return version;\n    };\n    const createPropListener = (prop)=>(op, nextVersion)=>{\n            const newOp = [\n                ...op\n            ];\n            newOp[1] = [\n                prop,\n                ...newOp[1]\n            ];\n            notifyUpdate(newOp, nextVersion);\n        };\n    const propProxyStates = /* @__PURE__ */ new Map();\n    const addPropListener = (prop, propProxyState)=>{\n        if (( false ? 0 : void 0) !== \"production\" && propProxyStates.has(prop)) {\n            throw new Error(\"prop listener already exists\");\n        }\n        if (listeners.size) {\n            const remove = propProxyState[3](createPropListener(prop));\n            propProxyStates.set(prop, [\n                propProxyState,\n                remove\n            ]);\n        } else {\n            propProxyStates.set(prop, [\n                propProxyState\n            ]);\n        }\n    };\n    const removePropListener = (prop)=>{\n        var _a;\n        const entry = propProxyStates.get(prop);\n        if (entry) {\n            propProxyStates.delete(prop);\n            (_a = entry[1]) == null ? void 0 : _a.call(entry);\n        }\n    };\n    const addListener = (listener)=>{\n        listeners.add(listener);\n        if (listeners.size === 1) {\n            propProxyStates.forEach(([propProxyState, prevRemove], prop)=>{\n                if (( false ? 0 : void 0) !== \"production\" && prevRemove) {\n                    throw new Error(\"remove already exists\");\n                }\n                const remove = propProxyState[3](createPropListener(prop));\n                propProxyStates.set(prop, [\n                    propProxyState,\n                    remove\n                ]);\n            });\n        }\n        const removeListener = ()=>{\n            listeners.delete(listener);\n            if (listeners.size === 0) {\n                propProxyStates.forEach(([propProxyState, remove], prop)=>{\n                    if (remove) {\n                        remove();\n                        propProxyStates.set(prop, [\n                            propProxyState\n                        ]);\n                    }\n                });\n            }\n        };\n        return removeListener;\n    };\n    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));\n    const handler = {\n        deleteProperty (target, prop) {\n            const prevValue = Reflect.get(target, prop);\n            removePropListener(prop);\n            const deleted = Reflect.deleteProperty(target, prop);\n            if (deleted) {\n                notifyUpdate([\n                    \"delete\",\n                    [\n                        prop\n                    ],\n                    prevValue\n                ]);\n            }\n            return deleted;\n        },\n        set (target, prop, value, receiver) {\n            const hasPrevValue = Reflect.has(target, prop);\n            const prevValue = Reflect.get(target, prop, receiver);\n            if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {\n                return true;\n            }\n            removePropListener(prop);\n            if (isObject(value)) {\n                value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;\n            }\n            let nextValue = value;\n            if (value instanceof Promise) {\n                value.then((v)=>{\n                    value.status = \"fulfilled\";\n                    value.value = v;\n                    notifyUpdate([\n                        \"resolve\",\n                        [\n                            prop\n                        ],\n                        v\n                    ]);\n                }).catch((e)=>{\n                    value.status = \"rejected\";\n                    value.reason = e;\n                    notifyUpdate([\n                        \"reject\",\n                        [\n                            prop\n                        ],\n                        e\n                    ]);\n                });\n            } else {\n                if (!proxyStateMap.has(value) && canProxy(value)) {\n                    nextValue = proxyFunction(value);\n                }\n                const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);\n                if (childProxyState) {\n                    addPropListener(prop, childProxyState);\n                }\n            }\n            Reflect.set(target, prop, nextValue, receiver);\n            notifyUpdate([\n                \"set\",\n                [\n                    prop\n                ],\n                value,\n                prevValue\n            ]);\n            return true;\n        }\n    };\n    const proxyObject = newProxy(baseObject, handler);\n    proxyCache.set(initialObject, proxyObject);\n    const proxyState = [\n        baseObject,\n        ensureVersion,\n        createSnapshot,\n        addListener\n    ];\n    proxyStateMap.set(proxyObject, proxyState);\n    Reflect.ownKeys(initialObject).forEach((key)=>{\n        const desc = Object.getOwnPropertyDescriptor(initialObject, key);\n        if (\"value\" in desc) {\n            proxyObject[key] = initialObject[key];\n            delete desc.value;\n            delete desc.writable;\n        }\n        Object.defineProperty(baseObject, key, desc);\n    });\n    return proxyObject;\n})=>[\n        // public functions\n        proxyFunction,\n        // shared state\n        proxyStateMap,\n        refSet,\n        // internal things\n        objectIs,\n        newProxy,\n        canProxy,\n        defaultHandlePromise,\n        snapCache,\n        createSnapshot,\n        proxyCache,\n        versionHolder\n    ];\nconst [defaultProxyFunction] = buildProxyFunction();\nfunction proxy(initialObject = {}) {\n    return defaultProxyFunction(initialObject);\n}\nfunction getVersion(proxyObject) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    return proxyState == null ? void 0 : proxyState[1]();\n}\nfunction subscribe(proxyObject, callback, notifyInSync) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n        console.warn(\"Please use proxy object\");\n    }\n    let promise;\n    const ops = [];\n    const addListener = proxyState[3];\n    let isListenerActive = false;\n    const listener = (op)=>{\n        ops.push(op);\n        if (notifyInSync) {\n            callback(ops.splice(0));\n            return;\n        }\n        if (!promise) {\n            promise = Promise.resolve().then(()=>{\n                promise = void 0;\n                if (isListenerActive) {\n                    callback(ops.splice(0));\n                }\n            });\n        }\n    };\n    const removeListener = addListener(listener);\n    isListenerActive = true;\n    return ()=>{\n        isListenerActive = false;\n        removeListener();\n    };\n}\nfunction snapshot(proxyObject, handlePromise) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n        console.warn(\"Please use proxy object\");\n    }\n    const [target, ensureVersion, createSnapshot] = proxyState;\n    return createSnapshot(target, ensureVersion(), handlePromise);\n}\nfunction ref(obj) {\n    refSet.add(obj);\n    return obj;\n}\nconst unstable_buildProxyFunction = buildProxyFunction;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBEO0FBRTFELE1BQU1FLFdBQVcsQ0FBQ0MsSUFBTSxPQUFPQSxNQUFNLFlBQVlBLE1BQU07QUFDdkQsTUFBTUMsZ0JBQWdCLGFBQWEsR0FBRyxJQUFJQztBQUMxQyxNQUFNQyxTQUFTLGFBQWEsR0FBRyxJQUFJQztBQUNuQyxNQUFNQyxxQkFBcUIsQ0FBQ0MsV0FBV0MsT0FBT0MsRUFBRSxFQUFFQyxXQUFXLENBQUNDLFFBQVFDLFVBQVksSUFBSUMsTUFBTUYsUUFBUUMsUUFBUSxFQUFFRSxXQUFXLENBQUNiLElBQU1ELFNBQVNDLE1BQU0sQ0FBQ0csT0FBT1csR0FBRyxDQUFDZCxNQUFPZSxDQUFBQSxNQUFNQyxPQUFPLENBQUNoQixNQUFNLENBQUVpQixDQUFBQSxPQUFPQyxRQUFRLElBQUlsQixDQUFBQSxDQUFDLEtBQU0sQ0FBRUEsQ0FBQUEsYUFBYUUsT0FBTSxLQUFNLENBQUVGLENBQUFBLGFBQWFJLE9BQU0sS0FBTSxDQUFFSixDQUFBQSxhQUFhbUIsS0FBSSxLQUFNLENBQUVuQixDQUFBQSxhQUFhb0IsTUFBSyxLQUFNLENBQUVwQixDQUFBQSxhQUFhcUIsSUFBRyxLQUFNLENBQUVyQixDQUFBQSxhQUFhc0IsTUFBSyxLQUFNLENBQUV0QixDQUFBQSxhQUFhdUIsTUFBSyxLQUFNLENBQUV2QixDQUFBQSxhQUFhd0IsV0FBVSxDQUFFLEVBQUVDLHVCQUF1QixDQUFDQztJQUMxYixPQUFRQSxRQUFRQyxNQUFNO1FBQ3BCLEtBQUs7WUFDSCxPQUFPRCxRQUFRRSxLQUFLO1FBQ3RCLEtBQUs7WUFDSCxNQUFNRixRQUFRRyxNQUFNO1FBQ3RCO1lBQ0UsTUFBTUg7SUFDVjtBQUNGLENBQUMsRUFBRUksWUFBWSxhQUFhLEdBQUcsSUFBSTVCLFNBQVMsRUFBRTZCLGlCQUFpQixDQUFDckIsUUFBUXNCLFNBQVNDLGdCQUFnQlIsb0JBQW9C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SThDLGNBQWM7WUFDaEJELFNBQVNJLElBQUlHLE1BQU0sQ0FBQztZQUNwQjtRQUNGO1FBQ0EsSUFBSSxDQUFDdkYsU0FBUztZQUNaQSxVQUFVc0IsUUFBUWtFLE9BQU8sR0FBR3BCLElBQUksQ0FBQztnQkFDL0JwRSxVQUFVLEtBQUs7Z0JBQ2YsSUFBSXFGLGtCQUFrQjtvQkFDcEJMLFNBQVNJLElBQUlHLE1BQU0sQ0FBQztnQkFDdEI7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxNQUFNM0IsaUJBQWlCSCxZQUFZcEI7SUFDbkNnRCxtQkFBbUI7SUFDbkIsT0FBTztRQUNMQSxtQkFBbUI7UUFDbkJ6QjtJQUNGO0FBQ0Y7QUFDQSxTQUFTNkIsU0FBU2hCLFdBQVcsRUFBRWxFLGFBQWE7SUFDMUMsTUFBTW1FLGFBQWFuRyxjQUFja0MsR0FBRyxDQUFDZ0U7SUFDckMsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxnQkFBZ0IsQ0FBQ0MsWUFBWTtRQUNyRlEsUUFBUUMsSUFBSSxDQUFDO0lBQ2Y7SUFDQSxNQUFNLENBQUNuRyxRQUFRd0MsZUFBZW5CLGVBQWUsR0FBR3FFO0lBQ2hELE9BQU9yRSxlQUFlckIsUUFBUXdDLGlCQUFpQmpCO0FBQ2pEO0FBQ0EsU0FBU21GLElBQUlDLEdBQUc7SUFDZGxILE9BQU9pRixHQUFHLENBQUNpQztJQUNYLE9BQU9BO0FBQ1Q7QUFDQSxNQUFNQyw4QkFBOEJqSDtBQUVnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NmYXBwLy4vbm9kZV9tb2R1bGVzL3ZhbHRpby9lc20vdmFuaWxsYS5tanM/YzE5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXJrVG9UcmFjaywgZ2V0VW50cmFja2VkIH0gZnJvbSAncHJveHktY29tcGFyZSc7XG5cbmNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggIT09IG51bGw7XG5jb25zdCBwcm94eVN0YXRlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZWZTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtTZXQoKTtcbmNvbnN0IGJ1aWxkUHJveHlGdW5jdGlvbiA9IChvYmplY3RJcyA9IE9iamVjdC5pcywgbmV3UHJveHkgPSAodGFyZ2V0LCBoYW5kbGVyKSA9PiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKSwgY2FuUHJveHkgPSAoeCkgPT4gaXNPYmplY3QoeCkgJiYgIXJlZlNldC5oYXMoeCkgJiYgKEFycmF5LmlzQXJyYXkoeCkgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4geCkpICYmICEoeCBpbnN0YW5jZW9mIFdlYWtNYXApICYmICEoeCBpbnN0YW5jZW9mIFdlYWtTZXQpICYmICEoeCBpbnN0YW5jZW9mIEVycm9yKSAmJiAhKHggaW5zdGFuY2VvZiBOdW1iZXIpICYmICEoeCBpbnN0YW5jZW9mIERhdGUpICYmICEoeCBpbnN0YW5jZW9mIFN0cmluZykgJiYgISh4IGluc3RhbmNlb2YgUmVnRXhwKSAmJiAhKHggaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciksIGRlZmF1bHRIYW5kbGVQcm9taXNlID0gKHByb21pc2UpID0+IHtcbiAgc3dpdGNoIChwcm9taXNlLnN0YXR1cykge1xuICAgIGNhc2UgXCJmdWxmaWxsZWRcIjpcbiAgICAgIHJldHVybiBwcm9taXNlLnZhbHVlO1xuICAgIGNhc2UgXCJyZWplY3RlZFwiOlxuICAgICAgdGhyb3cgcHJvbWlzZS5yZWFzb247XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IHByb21pc2U7XG4gIH1cbn0sIHNuYXBDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpLCBjcmVhdGVTbmFwc2hvdCA9ICh0YXJnZXQsIHZlcnNpb24sIGhhbmRsZVByb21pc2UgPSBkZWZhdWx0SGFuZGxlUHJvbWlzZSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IHNuYXBDYWNoZS5nZXQodGFyZ2V0KTtcbiAgaWYgKChjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGVbMF0pID09PSB2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGNhY2hlWzFdO1xuICB9XG4gIGNvbnN0IHNuYXAgPSBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCkpO1xuICBtYXJrVG9UcmFjayhzbmFwLCB0cnVlKTtcbiAgc25hcENhY2hlLnNldCh0YXJnZXQsIFt2ZXJzaW9uLCBzbmFwXSk7XG4gIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNuYXAsIGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSk7XG4gICAgY29uc3QgZGVzYyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWwgdG8gYXZvaWQgY29weWluZyB3aXRoIHByb3h5LWNvbXBhcmUuXG4gICAgICAvLyBJdCdzIHN0aWxsIG5vbi13cml0YWJsZSwgc28gaXQgYXZvaWRzIGFzc2lnbmluZyBhIHZhbHVlLlxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBpZiAocmVmU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgIG1hcmtUb1RyYWNrKHZhbHVlLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgICAgZGVzYy5nZXQgPSAoKSA9PiBoYW5kbGVQcm9taXNlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHByb3h5U3RhdGVNYXAuaGFzKHZhbHVlKSkge1xuICAgICAgY29uc3QgW3RhcmdldDIsIGVuc3VyZVZlcnNpb25dID0gcHJveHlTdGF0ZU1hcC5nZXQoXG4gICAgICAgIHZhbHVlXG4gICAgICApO1xuICAgICAgZGVzYy52YWx1ZSA9IGNyZWF0ZVNuYXBzaG90KFxuICAgICAgICB0YXJnZXQyLFxuICAgICAgICBlbnN1cmVWZXJzaW9uKCksXG4gICAgICAgIGhhbmRsZVByb21pc2VcbiAgICAgICk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzbmFwLCBrZXksIGRlc2MpO1xuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhzbmFwKTtcbn0sIHByb3h5Q2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgdmVyc2lvbkhvbGRlciA9IFsxLCAxXSwgcHJveHlGdW5jdGlvbiA9IChpbml0aWFsT2JqZWN0KSA9PiB7XG4gIGlmICghaXNPYmplY3QoaW5pdGlhbE9iamVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJvYmplY3QgcmVxdWlyZWRcIik7XG4gIH1cbiAgY29uc3QgZm91bmQgPSBwcm94eUNhY2hlLmdldChpbml0aWFsT2JqZWN0KTtcbiAgaWYgKGZvdW5kKSB7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIGxldCB2ZXJzaW9uID0gdmVyc2lvbkhvbGRlclswXTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgbm90aWZ5VXBkYXRlID0gKG9wLCBuZXh0VmVyc2lvbiA9ICsrdmVyc2lvbkhvbGRlclswXSkgPT4ge1xuICAgIGlmICh2ZXJzaW9uICE9PSBuZXh0VmVyc2lvbikge1xuICAgICAgdmVyc2lvbiA9IG5leHRWZXJzaW9uO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihvcCwgbmV4dFZlcnNpb24pKTtcbiAgICB9XG4gIH07XG4gIGxldCBjaGVja1ZlcnNpb24gPSB2ZXJzaW9uSG9sZGVyWzFdO1xuICBjb25zdCBlbnN1cmVWZXJzaW9uID0gKG5leHRDaGVja1ZlcnNpb24gPSArK3ZlcnNpb25Ib2xkZXJbMV0pID0+IHtcbiAgICBpZiAoY2hlY2tWZXJzaW9uICE9PSBuZXh0Q2hlY2tWZXJzaW9uICYmICFsaXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgY2hlY2tWZXJzaW9uID0gbmV4dENoZWNrVmVyc2lvbjtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BWZXJzaW9uID0gcHJvcFByb3h5U3RhdGVbMV0obmV4dENoZWNrVmVyc2lvbik7XG4gICAgICAgIGlmIChwcm9wVmVyc2lvbiA+IHZlcnNpb24pIHtcbiAgICAgICAgICB2ZXJzaW9uID0gcHJvcFZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfTtcbiAgY29uc3QgY3JlYXRlUHJvcExpc3RlbmVyID0gKHByb3ApID0+IChvcCwgbmV4dFZlcnNpb24pID0+IHtcbiAgICBjb25zdCBuZXdPcCA9IFsuLi5vcF07XG4gICAgbmV3T3BbMV0gPSBbcHJvcCwgLi4ubmV3T3BbMV1dO1xuICAgIG5vdGlmeVVwZGF0ZShuZXdPcCwgbmV4dFZlcnNpb24pO1xuICB9O1xuICBjb25zdCBwcm9wUHJveHlTdGF0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBjb25zdCBhZGRQcm9wTGlzdGVuZXIgPSAocHJvcCwgcHJvcFByb3h5U3RhdGUpID0+IHtcbiAgICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvcFByb3h5U3RhdGVzLmhhcyhwcm9wKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvcCBsaXN0ZW5lciBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9XG4gICAgaWYgKGxpc3RlbmVycy5zaXplKSB7XG4gICAgICBjb25zdCByZW1vdmUgPSBwcm9wUHJveHlTdGF0ZVszXShjcmVhdGVQcm9wTGlzdGVuZXIocHJvcCkpO1xuICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuc2V0KHByb3AsIFtwcm9wUHJveHlTdGF0ZV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvcExpc3RlbmVyID0gKHByb3ApID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZW50cnkgPSBwcm9wUHJveHlTdGF0ZXMuZ2V0KHByb3ApO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmRlbGV0ZShwcm9wKTtcbiAgICAgIChfYSA9IGVudHJ5WzFdKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChlbnRyeSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZSwgcHJldlJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIHByZXZSZW1vdmUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW1vdmUgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gcHJvcFByb3h5U3RhdGVbM10oY3JlYXRlUHJvcExpc3RlbmVyKHByb3ApKTtcbiAgICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICBpZiAobGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgcHJvcFByb3h5U3RhdGVzLmZvckVhY2goKFtwcm9wUHJveHlTdGF0ZSwgcmVtb3ZlXSwgcHJvcCkgPT4ge1xuICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHJlbW92ZUxpc3RlbmVyO1xuICB9O1xuICBjb25zdCBiYXNlT2JqZWN0ID0gQXJyYXkuaXNBcnJheShpbml0aWFsT2JqZWN0KSA/IFtdIDogT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5pdGlhbE9iamVjdCkpO1xuICBjb25zdCBoYW5kbGVyID0ge1xuICAgIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCkge1xuICAgICAgY29uc3QgcHJldlZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wKTtcbiAgICAgIHJlbW92ZVByb3BMaXN0ZW5lcihwcm9wKTtcbiAgICAgIGNvbnN0IGRlbGV0ZWQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcCk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub3RpZnlVcGRhdGUoW1wiZGVsZXRlXCIsIFtwcm9wXSwgcHJldlZhbHVlXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsZXRlZDtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgY29uc3QgaGFzUHJldlZhbHVlID0gUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wKTtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgICAgaWYgKGhhc1ByZXZWYWx1ZSAmJiAob2JqZWN0SXMocHJldlZhbHVlLCB2YWx1ZSkgfHwgcHJveHlDYWNoZS5oYXModmFsdWUpICYmIG9iamVjdElzKHByZXZWYWx1ZSwgcHJveHlDYWNoZS5nZXQodmFsdWUpKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZW1vdmVQcm9wTGlzdGVuZXIocHJvcCk7XG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0VW50cmFja2VkKHZhbHVlKSB8fCB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBuZXh0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFsdWUudGhlbigodikgPT4ge1xuICAgICAgICAgIHZhbHVlLnN0YXR1cyA9IFwiZnVsZmlsbGVkXCI7XG4gICAgICAgICAgdmFsdWUudmFsdWUgPSB2O1xuICAgICAgICAgIG5vdGlmeVVwZGF0ZShbXCJyZXNvbHZlXCIsIFtwcm9wXSwgdl0pO1xuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIHZhbHVlLnN0YXR1cyA9IFwicmVqZWN0ZWRcIjtcbiAgICAgICAgICB2YWx1ZS5yZWFzb24gPSBlO1xuICAgICAgICAgIG5vdGlmeVVwZGF0ZShbXCJyZWplY3RcIiwgW3Byb3BdLCBlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkgJiYgY2FuUHJveHkodmFsdWUpKSB7XG4gICAgICAgICAgbmV4dFZhbHVlID0gcHJveHlGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRQcm94eVN0YXRlID0gIXJlZlNldC5oYXMobmV4dFZhbHVlKSAmJiBwcm94eVN0YXRlTWFwLmdldChuZXh0VmFsdWUpO1xuICAgICAgICBpZiAoY2hpbGRQcm94eVN0YXRlKSB7XG4gICAgICAgICAgYWRkUHJvcExpc3RlbmVyKHByb3AsIGNoaWxkUHJveHlTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcCwgbmV4dFZhbHVlLCByZWNlaXZlcik7XG4gICAgICBub3RpZnlVcGRhdGUoW1wic2V0XCIsIFtwcm9wXSwgdmFsdWUsIHByZXZWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICBjb25zdCBwcm94eU9iamVjdCA9IG5ld1Byb3h5KGJhc2VPYmplY3QsIGhhbmRsZXIpO1xuICBwcm94eUNhY2hlLnNldChpbml0aWFsT2JqZWN0LCBwcm94eU9iamVjdCk7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBbXG4gICAgYmFzZU9iamVjdCxcbiAgICBlbnN1cmVWZXJzaW9uLFxuICAgIGNyZWF0ZVNuYXBzaG90LFxuICAgIGFkZExpc3RlbmVyXG4gIF07XG4gIHByb3h5U3RhdGVNYXAuc2V0KHByb3h5T2JqZWN0LCBwcm94eVN0YXRlKTtcbiAgUmVmbGVjdC5vd25LZXlzKGluaXRpYWxPYmplY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgaW5pdGlhbE9iamVjdCxcbiAgICAgIGtleVxuICAgICk7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICBwcm94eU9iamVjdFtrZXldID0gaW5pdGlhbE9iamVjdFtrZXldO1xuICAgICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJhc2VPYmplY3QsIGtleSwgZGVzYyk7XG4gIH0pO1xuICByZXR1cm4gcHJveHlPYmplY3Q7XG59KSA9PiBbXG4gIC8vIHB1YmxpYyBmdW5jdGlvbnNcbiAgcHJveHlGdW5jdGlvbixcbiAgLy8gc2hhcmVkIHN0YXRlXG4gIHByb3h5U3RhdGVNYXAsXG4gIHJlZlNldCxcbiAgLy8gaW50ZXJuYWwgdGhpbmdzXG4gIG9iamVjdElzLFxuICBuZXdQcm94eSxcbiAgY2FuUHJveHksXG4gIGRlZmF1bHRIYW5kbGVQcm9taXNlLFxuICBzbmFwQ2FjaGUsXG4gIGNyZWF0ZVNuYXBzaG90LFxuICBwcm94eUNhY2hlLFxuICB2ZXJzaW9uSG9sZGVyXG5dO1xuY29uc3QgW2RlZmF1bHRQcm94eUZ1bmN0aW9uXSA9IGJ1aWxkUHJveHlGdW5jdGlvbigpO1xuZnVuY3Rpb24gcHJveHkoaW5pdGlhbE9iamVjdCA9IHt9KSB7XG4gIHJldHVybiBkZWZhdWx0UHJveHlGdW5jdGlvbihpbml0aWFsT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGdldFZlcnNpb24ocHJveHlPYmplY3QpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgcmV0dXJuIHByb3h5U3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IHByb3h5U3RhdGVbMV0oKTtcbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShwcm94eU9iamVjdCwgY2FsbGJhY2ssIG5vdGlmeUluU3luYykge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXByb3h5U3RhdGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJQbGVhc2UgdXNlIHByb3h5IG9iamVjdFwiKTtcbiAgfVxuICBsZXQgcHJvbWlzZTtcbiAgY29uc3Qgb3BzID0gW107XG4gIGNvbnN0IGFkZExpc3RlbmVyID0gcHJveHlTdGF0ZVszXTtcbiAgbGV0IGlzTGlzdGVuZXJBY3RpdmUgPSBmYWxzZTtcbiAgY29uc3QgbGlzdGVuZXIgPSAob3ApID0+IHtcbiAgICBvcHMucHVzaChvcCk7XG4gICAgaWYgKG5vdGlmeUluU3luYykge1xuICAgICAgY2FsbGJhY2sob3BzLnNwbGljZSgwKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9taXNlID0gdm9pZCAwO1xuICAgICAgICBpZiAoaXNMaXN0ZW5lckFjdGl2ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKG9wcy5zcGxpY2UoMCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZUxpc3RlbmVyID0gYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICBpc0xpc3RlbmVyQWN0aXZlID0gdHJ1ZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpc0xpc3RlbmVyQWN0aXZlID0gZmFsc2U7XG4gICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNuYXBzaG90KHByb3h5T2JqZWN0LCBoYW5kbGVQcm9taXNlKSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcHJveHlTdGF0ZSkge1xuICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSB1c2UgcHJveHkgb2JqZWN0XCIpO1xuICB9XG4gIGNvbnN0IFt0YXJnZXQsIGVuc3VyZVZlcnNpb24sIGNyZWF0ZVNuYXBzaG90XSA9IHByb3h5U3RhdGU7XG4gIHJldHVybiBjcmVhdGVTbmFwc2hvdCh0YXJnZXQsIGVuc3VyZVZlcnNpb24oKSwgaGFuZGxlUHJvbWlzZSk7XG59XG5mdW5jdGlvbiByZWYob2JqKSB7XG4gIHJlZlNldC5hZGQob2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cbmNvbnN0IHVuc3RhYmxlX2J1aWxkUHJveHlGdW5jdGlvbiA9IGJ1aWxkUHJveHlGdW5jdGlvbjtcblxuZXhwb3J0IHsgZ2V0VmVyc2lvbiwgcHJveHksIHJlZiwgc25hcHNob3QsIHN1YnNjcmliZSwgdW5zdGFibGVfYnVpbGRQcm94eUZ1bmN0aW9uIH07XG4iXSwibmFtZXMiOlsibWFya1RvVHJhY2siLCJnZXRVbnRyYWNrZWQiLCJpc09iamVjdCIsIngiLCJwcm94eVN0YXRlTWFwIiwiV2Vha01hcCIsInJlZlNldCIsIldlYWtTZXQiLCJidWlsZFByb3h5RnVuY3Rpb24iLCJvYmplY3RJcyIsIk9iamVjdCIsImlzIiwibmV3UHJveHkiLCJ0YXJnZXQiLCJoYW5kbGVyIiwiUHJveHkiLCJjYW5Qcm94eSIsImhhcyIsIkFycmF5IiwiaXNBcnJheSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiRXJyb3IiLCJOdW1iZXIiLCJEYXRlIiwiU3RyaW5nIiwiUmVnRXhwIiwiQXJyYXlCdWZmZXIiLCJkZWZhdWx0SGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJzdGF0dXMiLCJ2YWx1ZSIsInJlYXNvbiIsInNuYXBDYWNoZSIsImNyZWF0ZVNuYXBzaG90IiwidmVyc2lvbiIsImhhbmRsZVByb21pc2UiLCJjYWNoZSIsImdldCIsInNuYXAiLCJjcmVhdGUiLCJnZXRQcm90b3R5cGVPZiIsInNldCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiZm9yRWFjaCIsImtleSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRlc2MiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiUHJvbWlzZSIsInRhcmdldDIiLCJlbnN1cmVWZXJzaW9uIiwiZGVmaW5lUHJvcGVydHkiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInByb3h5Q2FjaGUiLCJ2ZXJzaW9uSG9sZGVyIiwicHJveHlGdW5jdGlvbiIsImluaXRpYWxPYmplY3QiLCJmb3VuZCIsImxpc3RlbmVycyIsIlNldCIsIm5vdGlmeVVwZGF0ZSIsIm9wIiwibmV4dFZlcnNpb24iLCJsaXN0ZW5lciIsImNoZWNrVmVyc2lvbiIsIm5leHRDaGVja1ZlcnNpb24iLCJzaXplIiwicHJvcFByb3h5U3RhdGVzIiwicHJvcFByb3h5U3RhdGUiLCJwcm9wVmVyc2lvbiIsImNyZWF0ZVByb3BMaXN0ZW5lciIsInByb3AiLCJuZXdPcCIsIk1hcCIsImFkZFByb3BMaXN0ZW5lciIsImVudiIsIk1PREUiLCJyZW1vdmUiLCJyZW1vdmVQcm9wTGlzdGVuZXIiLCJfYSIsImVudHJ5IiwiZGVsZXRlIiwiY2FsbCIsImFkZExpc3RlbmVyIiwiYWRkIiwicHJldlJlbW92ZSIsInJlbW92ZUxpc3RlbmVyIiwiYmFzZU9iamVjdCIsImRlbGV0ZVByb3BlcnR5IiwicHJldlZhbHVlIiwiZGVsZXRlZCIsInJlY2VpdmVyIiwiaGFzUHJldlZhbHVlIiwibmV4dFZhbHVlIiwidGhlbiIsInYiLCJjYXRjaCIsImUiLCJjaGlsZFByb3h5U3RhdGUiLCJwcm94eU9iamVjdCIsInByb3h5U3RhdGUiLCJ3cml0YWJsZSIsImRlZmF1bHRQcm94eUZ1bmN0aW9uIiwicHJveHkiLCJnZXRWZXJzaW9uIiwic3Vic2NyaWJlIiwiY2FsbGJhY2siLCJub3RpZnlJblN5bmMiLCJjb25zb2xlIiwid2FybiIsIm9wcyIsImlzTGlzdGVuZXJBY3RpdmUiLCJwdXNoIiwic3BsaWNlIiwicmVzb2x2ZSIsInNuYXBzaG90IiwicmVmIiwib2JqIiwidW5zdGFibGVfYnVpbGRQcm94eUZ1bmN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/valtio/esm/vanilla.mjs\n");

/***/ })

};
;