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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function a(ctx) {\n//     ctx.body = {\n//\n//     }\n//    \n// }\n//\n// module.exports = {\n//     a\n// }\nmodule.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from a!!\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLEdBQVYsRUFBZTtBQUM1QkEsS0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDUCxlQUFXO0FBREosR0FBWDtBQUdILENBSkQiLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhKGN0eCkge1xyXG4vLyAgICAgY3R4LmJvZHkgPSB7XHJcbi8vXHJcbi8vICAgICB9XHJcbi8vICAgIFxyXG4vLyB9XHJcbi8vXHJcbi8vIG1vZHVsZS5leHBvcnRzID0ge1xyXG4vLyAgICAgYVxyXG4vLyB9XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGEhIVwiXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    \"message\": \"hello from b\"\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxHQUFWLEVBQWU7QUFDNUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1AsZUFBVztBQURKLEdBQVg7QUFHSCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICBjdHguYm9keSA9IHtcclxuICAgICAgICBcIm1lc3NhZ2VcIjogXCJoZWxsbyBmcm9tIGJcIlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst app = new koa();\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst router = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n\napp.use(helmet());\napp.use(statics(path.join(__dirname, '../public')));\napp.use(router());\napp.listen(8091);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJrb2EiLCJyZXF1aXJlIiwicGF0aCIsImFwcCIsImhlbG1ldCIsInN0YXRpY3MiLCJyb3V0ZXIiLCJ1c2UiLCJqb2luIiwiX19kaXJuYW1lIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQSx1REFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNRSxHQUFHLEdBQUcsSUFBSUgsR0FBSixFQUFaOztBQUNBLE1BQU1JLE1BQU0sR0FBR0gsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNSSxPQUFPLEdBQUdKLG1CQUFPLENBQUMsOEJBQUQsQ0FBdkI7O0FBR0EsTUFBTUssTUFBTSxHQUFHTCxtQkFBTyxDQUFDLCtDQUFELENBQXRCOztBQUVBRSxHQUFHLENBQUNJLEdBQUosQ0FBUUgsTUFBTSxFQUFkO0FBQ0FELEdBQUcsQ0FBQ0ksR0FBSixDQUFRRixPQUFPLENBQUNILElBQUksQ0FBQ00sSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFdBQXJCLENBQUQsQ0FBZjtBQUNBTixHQUFHLENBQUNJLEdBQUosQ0FBUUQsTUFBTSxFQUFkO0FBRUFILEdBQUcsQ0FBQ08sTUFBSixDQUFXLElBQVgsRSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtvYSA9IHJlcXVpcmUoJ2tvYScpXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuY29uc3QgYXBwID0gbmV3IGtvYSgpXHJcbmNvbnN0IGhlbG1ldCA9IHJlcXVpcmUoJ2tvYS1oZWxtZXQnKVxyXG5jb25zdCBzdGF0aWNzID0gcmVxdWlyZSgna29hLXN0YXRpYycpXHJcblxyXG5cclxuY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvcm91dGVzJylcclxuXHJcbmFwcC51c2UoaGVsbWV0KCkpXHJcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpKVxyXG5hcHAudXNlKHJvdXRlcigpKVxyXG5cclxuYXBwLmxpc3Rlbig4MDkxKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRouter.js":
/*!*******************************!*\
  !*** ./src/routes/aRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZXIuanM/OTJiYyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYSIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosRUFBZjtBQUdBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9hUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpXHJcbmNvbnN0IGEgPSByZXF1aXJlKCcuLi9hcGkvYScpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvYScsIGEpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/aRouter.js\n");

/***/ }),

/***/ "./src/routes/bRouter.js":
/*!*******************************!*\
  !*** ./src/routes/bRouter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZXIuanM/MmZlNyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwiYiIsInJvdXRlciIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw4QkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsZ0NBQUQsQ0FBakI7O0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlILE1BQUosRUFBZjtBQUdBRyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxJQUFYLEVBQWlCRixDQUFqQjtBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9iUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUm91dGVyID0gcmVxdWlyZSgna29hLXJvdXRlcicpXHJcbmNvbnN0IGIgPSByZXF1aXJlKCcuLi9hcGkvYicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvYicsIGIpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/bRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aroutes = __webpack_require__(/*! ./aRouter */ \"./src/routes/aRouter.js\");\n\nconst broutes = __webpack_require__(/*! ./bRouter */ \"./src/routes/bRouter.js\");\n\nmodule.exports = combineRoutes(aroutes, broutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXMiLCJyZXF1aXJlIiwiYXJvdXRlcyIsImJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFhLEdBQUdDLG1CQUFPLENBQUMsZ0RBQUQsQ0FBN0I7O0FBRUEsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDBDQUFELENBQXZCOztBQUNBLE1BQU1FLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQywwQ0FBRCxDQUF2Qjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxhQUFhLENBQzFCRSxPQUQwQixFQUUxQkMsT0FGMEIsQ0FBOUIiLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbWJpbmVSb3V0ZXMgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJylcclxuXHJcbmNvbnN0IGFyb3V0ZXMgPSByZXF1aXJlKCcuL2FSb3V0ZXInKVxyXG5jb25zdCBicm91dGVzID0gcmVxdWlyZSgnLi9iUm91dGVyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJvdXRlcyhcclxuICAgIGFyb3V0ZXMsXHJcbiAgICBicm91dGVzXHJcbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });