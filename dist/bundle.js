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

/***/ "./Maps/militiry.png":
/*!***************************!*\
  !*** ./Maps/militiry.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"33ed5be44a385e6dfc299156cd1d4cb5.png\");\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./Maps/militiry.png?");

/***/ }),

/***/ "./src/changeMap.js":
/*!**************************!*\
  !*** ./src/changeMap.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = function changeMap() {\r\n    const changeMapButton = document.querySelector('#change-map')\r\n\r\n    changeMapButton.addEventListener('click', changeMap)\r\n    const img = document.querySelector('img')\r\n    img.src = './Maps/redChurch.png'\r\n    console.log(img.src);\r\n}\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/changeMap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Maps_militiry_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maps/militiry.png */ \"./Maps/militiry.png\");\n\r\n\r\nlet changeMap = __webpack_require__(/*! ./changeMap.js */ \"./src/changeMap.js\")\r\nchangeMap()\r\n\r\nlet readFromTxt = __webpack_require__(/*! ./readFromTxt.js */ \"./src/readFromTxt.js\")\r\nreadFromTxt()\r\n\r\nlet saveToTxt = __webpack_require__(/*! ./saveToTxt.js */ \"./src/saveToTxt.js\")\r\nsaveToTxt()\r\n\r\nconst map = document.querySelector('.map');\r\nmap.src = _Maps_militiry_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/index.js?");

/***/ }),

/***/ "./src/readFromTxt.js":
/*!****************************!*\
  !*** ./src/readFromTxt.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = function readFronTxt() {\r\n    const readButton = document.querySelector('#read-button')\r\n\r\n    readButton.addEventListener('click', readFronTxt)\r\n    // 1 读取 txt，并转化为对象 \r\n    const mapPosInfo = JSON.parse(`{\r\n        \"军工厂\":[\r\n            {\"hunter\":[313,242],\"surviver\":[[354,364],[510,374],[594,294],[596,211]]},\r\n            {\"hunter\":[213,142],\"surviver\":[[354,364],[510,374],[594,294],[596,211]]}\r\n        ],\r\n        \"红教堂\":{\"hunter\":[369,200],\"surviver\":[[532,496],[541,346],[613,259],[689,205]]}\r\n    }`)\r\n    console.log('readInfo:', mapPosInfo);\r\n\r\n    // 2 TODO: 将 mapInfo 的所有监管者的位置，显示在图片上（军工厂2个红点）\r\n    // const mapInfo = mapPosInfo['军工厂']\r\n    // const hunterPos = mapInfo['hunter']\r\n    // const hunterPos = document.createElement(...)\r\n\r\n    // 3 TODO: 监管者点击后，显示出求生者位置（1个红点 + 4个蓝点）\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/readFromTxt.js?");

/***/ }),

/***/ "./src/saveToTxt.js":
/*!**************************!*\
  !*** ./src/saveToTxt.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = function saveToTxt() {\r\n    const markButton = document.querySelector('#mark-button')\r\n    markButton.addEventListener('click', saveToTxt)\r\n    const img = document.querySelector('img')\r\n    console.log('点击监管者 & 4个求生者的坐标');\r\n\r\n    // 1 为图片绑定点击事件\r\n    const positions = []\r\n    let clickCounts = 5\r\n    img.addEventListener('mousedown', (event) => {\r\n        if (clickCounts-- > 0) {\r\n            // console.log(`remain ${clickCounts} positions`);\r\n            // 1 获得点击坐标\r\n            positions.push([\r\n                event.offsetX,\r\n                event.offsetY\r\n            ])\r\n        }\r\n        \r\n        if (clickCounts === 0) {\r\n            // 2 保存到特定数据结构的对象\r\n            const mapName = '军工厂'\r\n            const mapPosInfo = {}\r\n            mapPosInfo[mapName] = {\r\n                    hunter: positions[0],\r\n                    surviver: positions.slice(1)\r\n                \r\n            }\r\n\r\n            // 3 存储到 txt 文件\r\n            // fs.writeFile('characterPositions.txt', mapPosInfo)\r\n            console.log(JSON.stringify(mapPosInfo));\r\n\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/saveToTxt.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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