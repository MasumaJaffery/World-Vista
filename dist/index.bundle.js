/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/icons/3D-Globe.svg */ \"./src/assets/icons/3D-Globe.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #2389ff;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: row;\n  gap: 2.5rem;\n}\n\n/* BODY STYLE */\n\n.card-body {\n  padding: 1px !important;\n}\n\n.countries {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  padding: 2rem;\n}\n\n.country {\n  margin: 0.6rem;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.125);\n}\n\nh5 {\n  text-align: center;\n  padding: 1rem;\n}\n\nimg {\n  border-bottom: 1px solid #312f2f;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.btn {\n  width: 100%;\n  margin-top: 0.125rem;\n}\n\n.popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.form-container {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  max-width: 400px;\n}\n\nh1 {\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"date\"] {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nbutton {\n  width: 100%;\n  padding: 10px;\n  background-color: #4caf50;\n  color: #fff;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n.close-button {\n  background-color: transparent;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  float: right;\n  color: black;\n  position: relative;\n  bottom: 81px;\n  left: 180px;\n}\n\n.close-button:hover {\n  background-color: initial;\n  color: initial;\n}\n\niframe {\n  width: 100%;\n  height: 30%;\n}\n\nfooter {\n  background-color: aliceblue;\n  text-align: center;\n}\n\n/* HERE THE STYLE FOR POPUP */\n\n.popup-container {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  background-color: rgb(232, 224, 224);\n  padding: 12px;\n  position: fixed;\n  width: 50vw;\n  height: 45vw;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  border-radius: 5px;\n  overflow-y: scroll;\n}\n\n.over-lay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(3, 0, 0, 0.6);\n  z-index: 9999;\n}\n\n.countery-datail {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  text-align: start;\n}\n\n.country-capital {\n  padding-left: 12px;\n}\n\n.country-continent {\n  padding-left: 12px;\n}\n\n.country-flag {\n  width: 300px;\n  height: 200px;\n  text-align: center;\n  box-shadow: 2px 8px 4px rgba(0, 0, 0, 0.2);\n  background-color: aliceblue;\n}\n\n.popup-icon {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 9999;\n}\n\n.country-name {\n  padding: 20px;\n}\n\n.comments-form {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  max-width: 90%;\n}\n\n.comments-list {\n  gap: 2px;\n}\n\n.comment-text {\n  max-width: 350px;\n}\n\n@media screen and (max-width: 768px) {\n  .popup-container {\n    width: 90vw;\n    height: 90vh;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module-capstone--2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module-capstone--2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module-capstone--2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/countries.js */ \"./src/modules/countries.js\");\n/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_countries_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reservation.js */ \"./src/modules/reservation.js\");\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_reservation_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack://module-capstone--2/./src/index.js?");

/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ (() => {

eval("const getcountry = async () => {\n  try {\n    const response = await fetch('https://restcountries.com/v3.1/all');\n    const data = await response.json();\n    data.forEach((item) => {\n      postcountry(item);\n    });\n  } catch (error) {\n    console.log('Error');\n  }\n};\ngetcountry();\n\nconst postcountry = async (data) => {\n  const countries = document.querySelector('.countries');\n  const country = document.createElement('div');\n  country.className = 'country';\n  country.innerHTML = `\n    <div class=\"card country\" style=\"width: 18rem;\">\n      <img src=${data.flags.svg} class=\"card-img-top\" alt=\"...\" style=\"object-fit: cover; width: 100%; height: 12rem;\">\n      <div class=\"card-body\">\n        <h5>${data.name.common}</h5>\n        <div class=\"comment\">\n          <button type=\"button\" class=\"btn btn-commentt btn-primary\" data-country=\"${data.name.common}\">Comment</button>\n        </div>\n        <div class=\"reservation\">\n          <button type=\"button\" class=\"btn btn-comment btn-success btn-reservation\">Reservations</button>\n        </div>\n      </div>\n    </div>`;\n  countries.appendChild(country);\n};\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/countries.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ (() => {

eval("const openPopup = async (countryDetails) => {\n  // Create the popup container\n  const popContainer = document.createElement('div');\n  popContainer.classList.add('popup-container', 'card');\n\n  const counteryDetail = document.createElement('div');\n  counteryDetail.classList.add('countery-datail');\n\n  const icon = document.createElement('i');\n  icon.classList.add('fas', 'fa-times', 'popup-icon');\n\n  const countryFlagEl = document.createElement('img');\n  countryFlagEl.classList.add('country-flag');\n  countryFlagEl.src = countryDetails.flags.png;\n\n  const countryNameEl = document.createElement('h1');\n  countryNameEl.classList.add('country-name');\n  countryNameEl.textContent = countryDetails.name.common;\n\n  const countryPopulationEl = document.createElement('div');\n  countryPopulationEl.classList.add('country-population');\n  countryPopulationEl.textContent = `Population: ${countryDetails.population}`;\n\n  const countryCapitalEl = document.createElement('div');\n  countryCapitalEl.classList.add('country-capital');\n  countryCapitalEl.textContent = `Capital: ${countryDetails.capital}`;\n\n  const countryAreaEl = document.createElement('div');\n  countryAreaEl.classList.add('country-area');\n  countryAreaEl.textContent = `Area: ${countryDetails.area} km²`;\n\n  const countryContinentEl = document.createElement('div');\n  countryContinentEl.classList.add('country-continent');\n  countryContinentEl.textContent = `Continent: ${countryDetails.region}`;\n\n  const commentsContainer = document.createElement('div');\n  commentsContainer.classList.add('comments-container');\n\n  const commentsCounter = document.createElement('div');\n  commentsCounter.classList.add('comments-counter');\n\n  const commentsTitle = document.createElement('h3');\n  commentsTitle.classList.add('comment-title');\n\n  const commentsCount = document.createElement('span');\n  commentsCount.classList.add('comments-count');\n\n  const commentsList = document.createElement('div');\n  commentsList.classList.add('comments-list');\n\n  const commentsForm = document.createElement('form');\n  commentsForm.classList.add('comments-form');\n\n  const nameInput = document.createElement('input');\n  nameInput.setAttribute('type', 'text');\n  nameInput.setAttribute('placeholder', 'Your Name');\n  nameInput.classList.add('name-input');\n\n  const commentInput = document.createElement('textarea');\n  commentInput.setAttribute('placeholder', 'Your Comment');\n  commentInput.classList.add('comment-input');\n\n  const submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.classList.add('submit-button');\n  submitButton.textContent = 'Submit';\n\n  commentsForm.appendChild(nameInput);\n  commentsForm.appendChild(commentInput);\n  commentsForm.appendChild(submitButton);\n\n  const overlay = document.createElement('div');\n  overlay.classList.add('over-lay');\n\n  document.body.appendChild(overlay);\n  popContainer.appendChild(icon);\n  popContainer.appendChild(countryFlagEl);\n  popContainer.appendChild(countryNameEl);\n  popContainer.appendChild(counteryDetail);\n  counteryDetail.appendChild(countryPopulationEl);\n  counteryDetail.appendChild(countryCapitalEl);\n  counteryDetail.appendChild(countryAreaEl);\n  counteryDetail.appendChild(countryContinentEl);\n  popContainer.appendChild(commentsContainer);\n  commentsContainer.appendChild(commentsCounter);\n  commentsContainer.appendChild(commentsList);\n  commentsCounter.appendChild(commentsTitle);\n  commentsCounter.appendChild(commentsCount);\n  commentsContainer.appendChild(commentsForm);\n\n  // Add event listener to close the popup when the icon is clicked\n  icon.addEventListener('click', () => {\n    popContainer.style.display = 'none';\n    overlay.style.display = 'none';\n  });\n\n  const displayComment = (comment) => {\n    const commentEl = document.createElement('div');\n    commentEl.classList.add('comment');\n\n    const commentText = document.createElement('div');\n    commentText.classList.add('comment-text');\n\n    const commentInfo = `${comment.date} - ${comment.username}: ${comment.comment}`;\n    commentText.textContent = commentInfo;\n\n    commentEl.appendChild(commentText);\n    commentsList.appendChild(commentEl);\n  };\n\n  // Fetch and display comments\n  try {\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments?item_id=${encodeURIComponent(\n        countryDetails.name.common\n      )}`\n    );\n    const comments = await response.json();\n    const commentCount = comments.length;\n    const commentText = commentCount !== 0 ? `Comment(${commentCount})` : 'Comment(0)';\n    commentsCount.textContent = commentText;\n\n    comments.forEach((comment) => {\n      displayComment(comment);\n    });\n  } catch (error) {\n    console.log('Error:', error);\n  }\n\n  commentsForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const name = nameInput.value;\n    const comment = commentInput.value;\n\n    if (!name || !comment) {\n      // Check if name or comment input is empty\n      return;\n    }\n\n    nameInput.value = '';\n    commentInput.value = '';\n\n    const currentDate = new Date().toISOString(); // Save current date in ISO format\n\n    try {\n      const response = await fetch(\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/comments`,\n        {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({\n            item_id: countryDetails.name.common,\n            username: name,\n            comment,\n            date: currentDate,\n          }),\n        }\n      );\n      if (response.ok) {\n        const newComment = {\n          username: name,\n          comment,\n          date: currentDate,\n        };\n        displayComment(newComment);\n        const commentCount = commentsList.childElementCount;\n        commentsCount.textContent = `${commentCount} Comment${commentCount !== 1 ? 's' : ''}`;\n      } else {\n        console.log('Error: Failed to save comment');\n      }\n    } catch (error) {\n      console.log('Error:', error);\n    }\n  });\n\n  document.body.appendChild(popContainer);\n};\n\ndocument.addEventListener('click', async (event) => {\n  if (event.target.classList.contains('btn-commentt')) {\n    const countryName = event.target.getAttribute('data-country');\n\n    try {\n      const response = await fetch(\n        `https://restcountries.com/v3.1/name/${countryName}`\n      );\n      const [countryDetails] = await response.json();\n      await openPopup(countryDetails);\n    } catch (error) {\n      console.log('Error:', error);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ (() => {

eval("const createReservationForm = () => {\n    const popupContainer = document.createElement('div');\n    popupContainer.className = 'popup';\n\n    const formContainer = document.createElement('div');\n    formContainer.className = 'form-container';\n\n    const title = document.createElement('h1');\n    title.textContent = 'Add a Reservation';\n\n    const closeButton = document.createElement('button');\n    closeButton.className = 'close-button';\n    closeButton.innerHTML = '&times;';\n    closeButton.addEventListener('click', () => {\n        popupContainer.remove();\n    });\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.placeholder = 'Your Name';\n\n    const startDateInput = document.createElement('input');\n    startDateInput.type = 'date';\n    startDateInput.placeholder = 'Start Date';\n\n    const endDateInput = document.createElement('input');\n    endDateInput.type = 'date';\n    endDateInput.placeholder = 'End Date';\n\n    const reserveButton = document.createElement('button');\n    reserveButton.textContent = 'Reserve';\n    reserveButton.addEventListener('click', async () => {\n        const reservationData = {\n            name: nameInput.value,\n            startDate: startDateInput.value,\n            endDate: endDateInput.value\n        };\n\n        try {\n            const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abcdefg/reservations', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(reservationData)\n            });\n\n            if (response.ok) {\n                const reservationInfo = document.createElement('div');\n                reservationInfo.innerHTML = `\n          <h3>Reservation Details:</h3>\n          <p>Name: ${reservationData.name}</p>\n          <p>Start Date: ${reservationData.startDate}</p>\n          <p>End Date: ${reservationData.endDate}</p>\n        `;\n                formContainer.appendChild(reservationInfo);\n            } else {\n                const errorLabel = document.createElement('label');\n                errorLabel.textContent = 'Error recording reservation';\n                formContainer.appendChild(errorLabel);\n            }\n        } catch (error) {\n            const errorLabel = document.createElement('label');\n            errorLabel.textContent = `Error: ${error}`;\n            formContainer.appendChild(errorLabel);\n        }\n    });\n\n    // Append the elements to the form container\n    formContainer.appendChild(title);\n    formContainer.appendChild(closeButton);\n    formContainer.appendChild(nameInput);\n    formContainer.appendChild(startDateInput);\n    formContainer.appendChild(endDateInput);\n    formContainer.appendChild(reserveButton);\n\n    popupContainer.appendChild(formContainer);\n\n    document.body.appendChild(popupContainer);\n};\n\ndocument.addEventListener('click', function (event) {\n    if (event.target.classList.contains('btn-reservation')) {\n        createReservationForm();\n    }\n});\n\n//# sourceURL=webpack://module-capstone--2/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/assets/icons/3D-Globe.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/3D-Globe.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a82808e3ee102059b09e.svg\";\n\n//# sourceURL=webpack://module-capstone--2/./src/assets/icons/3D-Globe.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;