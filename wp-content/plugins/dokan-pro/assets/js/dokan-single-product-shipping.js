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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/dokan-single-product-shipping.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/dokan-single-product-shipping.js":
/*!********************************************************!*\
  !*** ./assets/src/js/dokan-single-product-shipping.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// For single page shipping calculation scripts;\n(function ($) {\n  $(document).ready(function () {\n    $('.dokan-shipping-calculate-wrapper').on('change', 'select#dokan-shipping-country', function (e) {\n      e.preventDefault();\n      var self = $(this),\n          data = {\n        'action': 'dokan_shipping_country_select',\n        'country_id': self.val(),\n        'author_id': self.data('author_id')\n      };\n\n      if (self.val() != '') {\n        $.post(dokan.ajaxurl, data, function (resp) {\n          if (resp.success) {\n            self.closest('.dokan-shipping-calculate-wrapper').find('.dokan-shipping-state-wrapper').html(resp.data);\n            self.closest('.dokan-shipping-calculate-wrapper').find('.dokan-shipping-price-wrapper').html('');\n          }\n        });\n      } else {\n        self.closest('.dokan-shipping-calculate-wrapper').find('.dokan-shipping-price-wrapper').html('');\n        self.closest('.dokan-shipping-calculate-wrapper').find('.dokan-shipping-state-wrapper').html('');\n      }\n    });\n    $('.dokan-shipping-calculate-wrapper').on('keydown', '#dokan-shipping-qty', function (e) {\n      // Allow: backspace, delete, tab, escape, enter and .\n      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 91, 107, 109, 110, 187, 189, 190]) !== -1 || // Allow: Ctrl+A\n      e.keyCode == 65 && e.ctrlKey === true || // Allow: home, end, left, right\n      e.keyCode >= 35 && e.keyCode <= 39) {\n        // let it happen, don't do anything\n        return;\n      } // Ensure that it is a number and stop the keypress\n\n\n      if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {\n        e.preventDefault();\n      }\n    });\n    $('.dokan-shipping-calculate-wrapper').on('click', 'button.dokan-shipping-calculator', function (e) {\n      e.preventDefault();\n      var self = $(this),\n          data = {\n        'action': 'dokan_shipping_calculator',\n        'country_id': self.closest('.dokan-shipping-calculate-wrapper').find('select.dokan-shipping-country').val(),\n        'product_id': self.closest('.dokan-shipping-calculate-wrapper').find('select.dokan-shipping-country').data('product_id'),\n        'author_id': self.closest('.dokan-shipping-calculate-wrapper').find('select.dokan-shipping-country').data('author_id'),\n        'quantity': self.closest('.dokan-shipping-calculate-wrapper').find('input.dokan-shipping-qty').val(),\n        'state': self.closest('.dokan-shipping-calculate-wrapper').find('select.dokan-shipping-state').val()\n      };\n      $.post(dokan.ajaxurl, data, function (resp) {\n        if (resp.success) {\n          self.closest('.dokan-shipping-calculate-wrapper').find('.dokan-shipping-price-wrapper').html(resp.data);\n        }\n      });\n    });\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./assets/src/js/dokan-single-product-shipping.js?");

/***/ })

/******/ });