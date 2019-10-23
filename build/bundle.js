/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import proxy from 'express-http-proxy';
var app = (0, _express2.default)();

// app.use('/graphql',
//     proxy('http://localhost:4000/graphql')
// )

app.use(_express2.default.static("public"), function (req, res, next) {
  console.log("Not Found");
  console.log(req.path);
  next();
});

// setting enviroment variables ;
var PORT = process.env.PORT || 3100;
var DOMAIN = process.env.DOMAIN || "http://localhost:" + PORT + "/";

app.get("*", function (req, res) {
  res.send("\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <title>Gt. Times</title>\n            <!--Import Google Icon Font-->\n             <base href=" + DOMAIN + "/>\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n            <link href=\"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Jomolhari&display=swap\" rel=\"stylesheet\">\n            <!--Import materialize.css-->\n            <link type=\"text/css\" rel=\"stylesheet\" href=\"css/materialize.min.css\"  media=\"screen,projection\"/>\n            <link type=\"text/css\" rel=\"stylesheet\" href=\"css/custom.css\"  media=\"screen,projection\"/>\n            <!--Let browser know website is optimized for mobile-->\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n        </head>\n        <body>\n        <div id=\"root\"></div>\n        <script type=\"text/javascript\" src=\"js/materialize.min.js\"></script>\n        <script src=\"main.bundle.js\" ></script>\n        </body>\n        </html>\n\n        ");
});

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })
/******/ ]);