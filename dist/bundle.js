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

/***/ "./src/changeMap.js":
/*!**************************!*\
  !*** ./src/changeMap.js ***!
  \**************************/
/***/ ((module) => {

eval("\r\n\r\n\r\nmodule.exports = function changeMap() {\r\n    const changeMapButton = document.querySelector('#change-map')\r\n\r\n    changeMapButton.addEventListener('click', changeMap)\r\n    const img = document.querySelector('img')\r\n    img.src = './Maps/redChurch.png'\r\n    console.log(img.src);\r\n}\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/changeMap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nlet changeMap = __webpack_require__(/*! ./changeMap.js */ \"./src/changeMap.js\")\r\nchangeMap()\r\n\r\nlet readFromTxt = __webpack_require__(/*! ./readFromTxt.js */ \"./src/readFromTxt.js\")\r\nreadFromTxt()\r\n\r\nlet saveToTxt = __webpack_require__(/*! ./saveToTxt.js */ \"./src/saveToTxt.js\")\r\nsaveToTxt()\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/index.js?");

/***/ }),

/***/ "./src/readFromTxt.js":
/*!****************************!*\
  !*** ./src/readFromTxt.js ***!
  \****************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function readFronTxt() {\r\n    const readButton = document.querySelector('#read-button')\r\n\r\n    readButton.addEventListener('click', readFronTxt)\r\n    // 1 读取 txt，并转化为对象 \r\n    const mapPosInfo = JSON.parse(`{\r\n        \"军工厂\":[\r\n            {\"hunter\":[313,242],\"surviver\":[[354,364],[510,374],[594,294],[596,211]]},\r\n            {\"hunter\":[213,142],\"surviver\":[[354,364],[510,374],[594,294],[596,211]]}\r\n        ],\r\n        \"红教堂\":{\"hunter\":[369,200],\"surviver\":[[532,496],[541,346],[613,259],[689,205]]}\r\n    }`)\r\n    console.log('readInfo:', mapPosInfo);\r\n\r\n    // 2 TODO: 将 mapInfo 的所有监管者的位置，显示在图片上（军工厂2个红点）\r\n    // const mapInfo = mapPosInfo['军工厂']\r\n    // const hunterPos = mapInfo['hunter']\r\n    // const hunterPos = document.createElement(...)\r\n\r\n    // 3 TODO: 监管者点击后，显示出求生者位置（1个红点 + 4个蓝点）\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/readFromTxt.js?");

/***/ }),

/***/ "./src/saveToTxt.js":
/*!**************************!*\
  !*** ./src/saveToTxt.js ***!
  \**************************/
/***/ ((module) => {

eval("\r\n\r\n\r\nmodule.exports = function saveToTxt() {\r\n    const markButton = document.querySelector('#mark-button')\r\n    markButton.addEventListener('click', saveToTxt)\r\n    const img = document.querySelector('img')\r\n    console.log('点击监管者 & 4个求生者的坐标');\r\n\r\n    // 1 为图片绑定点击事件\r\n    const positions = []\r\n    let clickCounts = 5\r\n    img.addEventListener('mousedown', (event) => {\r\n        if (clickCounts-- > 0) {\r\n            // console.log(`remain ${clickCounts} positions`);\r\n            // 1 获得点击坐标\r\n            positions.push([\r\n                event.offsetX,\r\n                event.offsetY\r\n            ])\r\n        }\r\n        \r\n        if (clickCounts === 0) {\r\n            // 2 保存到特定数据结构的对象\r\n            const mapName = '军工厂'\r\n            const mapPosInfo = {}\r\n            mapPosInfo[mapName] = {\r\n                    hunter: positions[0],\r\n                    surviver: positions.slice(1)\r\n                \r\n            }\r\n\r\n            // 3 存储到 txt 文件\r\n            // fs.writeFile('characterPositions.txt', mapPosInfo)\r\n            console.log(JSON.stringify(mapPosInfo));\r\n\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://identityv-hunter-divine-eyes/./src/saveToTxt.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;