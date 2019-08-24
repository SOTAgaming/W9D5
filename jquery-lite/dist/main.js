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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(nodes) {\n    this.nodes = nodes;\n    this.functions = [];\n  }\n\n  html(content) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].innerHTML = content;\n    }\n  }\n\n  empty() {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].innerHTML = \"\";\n    }\n  }\n\n  append(arg) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      if(typeof arg === \"string\") {\n        let inner = this.nodes[i].innerHTML;\n        let newInner = inner.concat(arg);\n        this.nodes[i].innerHTML = newInner;\n      } else if (arg instanceof HTMLElement) {\n        this.nodes[i].appendChild(arg);\n      } else {\n        debugger\n          for (let j = 0; j < arg.nodes.length; j++) {\n            this.nodes[i].appendChild(arg.nodes[j]);\n          }\n      }\n    }\n  }\n\n  attr(attribute, value) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].setAttribute(attribute, value);\n    }\n  }\n\n  addClass(c) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].classList.add(c);\n    }\n  }\n\n  removeClass(c) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].classList.remove(c);\n    }\n  }\n\n  children() {\n    let children = [];\n    for (let i = 0; i < this.nodes.length; i++) {\n      let curChildren = Array.from(this.nodes[i].children);\n      children.push(curChildren);\n    }\n    return new DomNodeCollection(children);\n  }\n\n  parent() {\n    let parent = [];\n    for (let i = 0; i < this.nodes.length; i++) {\n      parent.push(this.nodes[i].parentElement);\n      debugger\n    }\n    return new DomNodeCollection(parent);\n  }\n\n  find(selector) {\n    let nodes = [];\n    for (let i = 0; i < this.nodes.length; i++) {\n      let cur = this.nodes[i].querySelectorAll(selector);\n      nodes.push(cur);\n    }\n    return nodes;\n  }\n  \n  remove() {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].parentNode.removeChild(this.nodes[i]);\n    }\n  }\n\n  on(event, cb) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].addEventListener(event, cb);\n      this.nodes[i][event] = cb;\n    }\n  }\n\n  off(event) {\n    for (let i = 0; i < this.nodes.length; i++) {\n      this.nodes[i].removeEventListener(event, this.nodes[i][event] );\n      this.nodes[i][event] = null;\n    }\n  }\n}\n\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$l = (arg) => {\n    if (arg instanceof HTMLElement) {\n      let node = new DomNodeCollection([arg]);\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        for (let i = 0; i < node.functions.length; i++) {\n          node.functions[i]();\n        }\n      })\n    } else {\n      let nodes = Array.from(document.querySelectorAll(arg));\n      let nodeCollection = new DomNodeCollection(nodes);\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        for (let i = 0; i < nodeCollection.functions.length; i++) {\n          nodeCollection.functions[i]();\n        }\n      })\n      return nodeCollection;\n    }\n\n  };\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });