(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable-pro"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable-pro"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable-pro")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _handsontablePro = _interopRequireDefault(__webpack_require__(0));

var _dictionary;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var C = _handsontablePro.default.languages.dictionaryKeys;
var dictionary = (_dictionary = {
  languageCode: 'lv-LV'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Ievietot rindu aug????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Ievietot rindu apak????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Ievietot kolonnu pa kreisi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Ievietot kolonnu pa labi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Dz??st rindu', 'Dz??st rindas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Dz??st kolonnu', 'Dz??st kolonnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Atsaukt'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'P??rtais??t'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Las????anas re????ms'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Not??r??t kolonnu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Izvietojums'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Pa kreisi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centr??ts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Pa labi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Izl??dzin??ts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Aug????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Pa vidu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Apak????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Iesald??t kolonnu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Atsald??t kolonnu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Robe??as'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Aug????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Pa labi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Apak????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Pa kreisi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'No??emt robe??u(-as)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Pievienot koment??ru'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Labot koment??ru'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Dz??st koment??ru'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Las????anas re????ma koment??rs'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Sapludin??t ????nas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Nesapludin??t ??unas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kop??t'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Izgriezt'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Ievietot pak??rtoto rindu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Atdal??t no vec??ka'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Pal??pt kolonnu', 'Pal??pt kolonnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['R??d??t kolonnu', 'R??d??t kolonnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Pal??pt rindu', 'Pasl??pt rindas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['R??d??t rindu', 'R??d??t rindas']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nekas'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Ir tuk??s'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Nav tuk??s'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Vien??ds ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Nav vien??ds ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'S??kas ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Beidzas ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Satur'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Nesatur'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Liel??ks par'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Liel??ks vai vien??ds ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Maz??ks par'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Maz??ks vai vien??ds ar'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Ir starp'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nav starp'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'P??c'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Pirms'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??odien'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'R??tdien'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Vakar'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Tuk??as ????nas'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtr??t p??c nosac??juma'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtr??t p??c v??rt??bas'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Un'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Vai'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Izv??l??ties visu'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Not??r??t'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'Labi'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Atcelt'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Mekl??t'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'V??rt??ba'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Otra v??rt??ba'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ })

/******/ })["___"];
});