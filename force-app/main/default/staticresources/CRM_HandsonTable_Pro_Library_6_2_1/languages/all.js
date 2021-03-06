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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
  languageCode: 'de-CH'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einf??gen oberhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einf??gen unterhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einf??gen links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einf??gen rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile l??schen', 'Zeilen l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte l??schen', 'Spalten l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'R??ckgangig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzuf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorg??ngerzeile abkoppeln'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Enth??lt'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enth??lt nicht'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Gr??sser als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Gr??sser gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Ausserhalb'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Nach'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Vor'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Heute'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Und'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Oder'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Alles ausw??hlen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 2 */
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
  languageCode: 'de-DE'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einf??gen oberhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einf??gen unterhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einf??gen links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einf??gen rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile l??schen', 'Zeilen l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte l??schen', 'Spalten l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'R??ckgangig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzuf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorg??ngerzeile abkoppeln'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Enth??lt'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enth??lt nicht'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Gr????er als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Gr????er gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Au??erhalb'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Nach'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Vor'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Heute'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Und'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Oder'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Alles ausw??hlen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 3 */
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
  languageCode: 'en-US'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insert row above'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insert row below'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insert column left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insert column right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Remove row', 'Remove rows']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Remove column', 'Remove columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Undo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Redo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Read only'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Clear column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Center'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justify'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Top'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Middle'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Bottom'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Freeze column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Unfreeze column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Borders'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Top'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Bottom'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Remove border(s)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Add comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edit comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Delete comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Read-only comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Merge cells'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Unmerge cells'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copy'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Cut'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insert child row'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Detach from parent'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Hide column', 'Hide columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Show column', 'Show columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Hide row', 'Hide rows']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Show row', 'Show rows']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'None'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Is empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is not empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Is equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is not equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begins with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Ends with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contains'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Does not contain'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Greater than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Greater than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Less than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Less than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Is between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Is not between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'After'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Before'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Today'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Tomorrow'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Yesterday'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Blank cells'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filter by condition'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filter by value'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'And'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Or'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Select all'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Clear'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancel'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Search'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Value'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Second value'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 4 */
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
  languageCode: 'es-MX'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insertar fila arriba'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insertar fila abajo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insertar columna izquierda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insertar columna derecha'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Eliminar fila', 'Eliminar filas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Eliminar columna', 'Eliminar columnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Deshacer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Rehacer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Solo lectura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Limpiar columna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alineaci??n'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Izquierda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centro'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Derecha'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justificar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Medio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Congelar columna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Descongelar columna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordes'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Derecho'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Izquierdo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Quitar borde(s)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Agregar comentario'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Editar comentario'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Borrar comentario'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Comentario Solo de lectura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Unir celdas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Separar celdas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copiar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Cortar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insertar fila hija'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Separar del padre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Esconder columna', 'Esconder columnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Mostrar columna', 'Mostrar columnas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Esconder fila', 'Esconder filas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Mostrar fila', 'Mostrar filas']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Ninguna'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Est?? vac??o'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'No est?? vac??o'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Es igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'No es igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Comienza con'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina con'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contiene'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'No contiene'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Mayor que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Mayor o igual que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Menor que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Menor o igual que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Es entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'No es entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Despu??s'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Antes'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Hoy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Ma??ana'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Ayer'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Celdas vac??as'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrar por condici??n'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrar por valor'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Y'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'O'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Seleccionar todo'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Borrar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancelar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Buscar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valor'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Valor secundario'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 5 */
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
  languageCode: 'fr-FR'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Ins??rer une ligne en haut'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Ins??rer une ligne en bas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Ins??rer une colonne ?? gauche'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Ins??rer une colonne ?? droite'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Supprimer une ligne', 'Supprimer les lignes']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Supprimer une colonne', 'Supprimer les colonnes']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Annuler'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'R??tablir'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Lecture seule'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Effacer la colonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignement'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Gauche'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Droite'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justifi??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'En haut'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Au milieu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'En bas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Figer la colonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Lib??rer la colonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordures'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Sup??rieure'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Droite'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inf??rieure'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Gauche'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Pas de bordure'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Ajouter commentaire'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Modifier commentaire'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Supprimer commentaire'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Commentaire en lecture seule'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Fusionner les cellules'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'S??parer les cellules'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copier'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Couper'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Ins??rer une sous-ligne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'D??tacher de la ligne pr??c??dente'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Masquer colonne', 'Masquer les colonnes']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Afficher colonne', 'Afficher les colonnes']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Masquer ligne', 'Masquer les lignes']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Afficher ligne', 'Afficher les lignes']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Aucun'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Est vide'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'N\'est pas vide'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Egal ??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Est diff??rent de'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Commence par'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Finit par'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contient'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Ne contient pas'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Sup??rieur ??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Sup??rieur ou ??gal ??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Inf??rieur ??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Inf??rieur ou ??gal ??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Est compris entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'N\'est pas compris entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Apr??s le'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Avant le'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Aujourd\'hui'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Demain'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Hier'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Cellules vides'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrer par conditions'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrer par valeurs'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Et'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Ou'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Tout s??lectionner'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Effacer la s??lection'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Annuler'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Chercher'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valeur'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Valeur de remplacement'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 6 */
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
  languageCode: 'it-IT'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Inserisci riga sopra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Inserisci riga sotto'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Inserisci colonna a sinistra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Inserisci colonna a destra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Rimuovi riga', 'Rimuovi righe']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Rimuovi colonna', 'Rimuovi colonne']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Annulla'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Ripeti'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Sola lettura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Svuota colonna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Allineamento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Sinistra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centro'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Destra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Giustificato'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'In alto'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'A met??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'In basso'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Blocca colonna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Sblocca colonna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordi'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Sopra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Destra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Sotto'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Sinistra'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Rimuovi bordo(i)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Aggiungi commento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Modifica commento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Rimuovi commento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Commento in sola lettura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Unisci celle'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Separa celle'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copia'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Taglia'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Inserisci riga figlia'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Scollega da riga madre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Nascondi colonna', 'Nascondi colonne']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Mostra colonna', 'Mostra colonne']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Nascondi riga', 'Nascondi righe']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Mostra riga', 'Mostra righe']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nessuna'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '?? vuoto'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Non ?? vuoto'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '?? uguale a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?? diverso da'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Inizia con'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina con'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contiene'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Non contiene'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Maggiore'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Maggiore o uguale'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Minore'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Minore o uguale'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '?? compreso tra'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Non ?? compreso tra'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Dopo'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Prima'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Oggi'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Domani'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Ieri'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Celle vuote'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtra per condizione'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtra per valore'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'E'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'O'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Seleziona tutto'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Pulisci'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Annulla'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Cerca'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valore'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Sostituisci con'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 7 */
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
  languageCode: 'ja-JP'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '????????????(??????)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '??????????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['???????????????', '???????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['???????????????', '???????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '???????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '??????'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '?????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '???2'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 8 */
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
  languageCode: 'ko-KR'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '????????? ??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '???????????? ??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '????????? ??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '???????????? ??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['??? ??????', '?????? ??? ??????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['??? ??????', '?????? ??? ??????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '??? ?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '??? ?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '????????? ?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '?????? ?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '??? ?????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '?????? ??? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '??????????????? ??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['??? ?????????', '?????? ??? ?????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['??? ????????? ??????', '?????? ??? ????????? ??????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['??? ?????????', '?????? ??? ?????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['??? ????????? ??????', '?????? ??? ????????? ??????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '?????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '??? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '?????? ???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '?????? ???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '?????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '??????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '????????? ??????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '??? ??????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '?????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '?????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '????????? ???'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */
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
  languageCode: 'nb-NO'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Sett inn over'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Sett inn under'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Sett inn til venstre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Sett inn til h??yre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Fjern rad', 'Fjern rader']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Fjern kolonne', 'Fjern kolonner']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Angre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Gj??r om'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Skrivebeskyttet'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'T??m kolonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Juster'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Venstre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Midtstill'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'H??yre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Tilpasset'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '??verst'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'P?? midten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Nederst'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Frys kolonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Frigi kolonne'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Kantlinjer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Over'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Til h??yre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Under'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Til venstre'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Fjern kantlinje(r)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Legg til kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Endre kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Fjern kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Skrivebeskytt kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Sl?? sammen celler'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Opphev sammensl??ing'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopier'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Klipp ut'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Sett inn underrad'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Frigi fra gruppe'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Skjul kolonne', 'Skjul kolonner']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Vis kolonne', 'Vis kolonner']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Skjul rad', 'Skjul rader']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Vis rad', 'Vis rader']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Ingen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Er tom'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Er ikke tom'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Er lik'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Er ikke lik'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begynner med'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Slutter med'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Inneholder'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Inneholder ikke'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'St??rre enn'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'St??rre enn eller lik'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Mindre enn'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mindre enn eller lik'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Er mellom'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Er ikke mellom'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Etter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'F??r'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'I dag'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'I morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'I g??r'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Tomme celler'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrer etter betingelse'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrer etter verdi'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Og'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Eller'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Velg alle'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'T??m'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Avbryt'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'S??k'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Verdi'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Andre verdi'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 11 */
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
  languageCode: 'nl-NL'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Rij boven invoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Rij onder invoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Kolom links invoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Kolom rechts invoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Rij verwijderen', 'Rijen verwijderen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Kolom verwijderen', 'Kolommen verwijderen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Ongedaan maken'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Opnieuw uitvoeren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Alleen lezen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Kolom leegmaken'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Uitlijning'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Gecentreerd'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Uitvullen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Boven'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Midden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Onder'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Kolom blokkeren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Kolom blokkering opheffen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Randen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Boven'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Onder'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Rand(en) verwijderen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Opmerking toevoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Opmerking bewerken'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Opmerking verwijderen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Opmerking Alleen-lezen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Cellen samenvoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Samenvoeging van cellen opheffen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopi??ren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Knippen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Geneste rij invoegen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Geneste rij ontkoppelen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Kolom verbergen', 'Kolommen verbergen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Kolom zichbaar maken', 'Kolommen zichtbaar maken']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Rij verbergen', 'Rijen verbergen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Rij zichtbaar maken', 'Rijen zichtbaar maken']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Geen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Is leeg'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is niet leeg'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Is gelijk aan'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is niet gelijk aan'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begint met'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Eindigt op'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Bevat'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Bevat niet'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Is groter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Is groter of gelijk aan'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Is kleiner dan'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Is kleiner dan of gelijk aan'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Is tussen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Ligt niet tussen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Voor'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Vandaag'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Gisteren'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Cellen leegmaken'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filteren op conditie'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filteren op waarde'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'En'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Of'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Alles selecteren'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Leeg maken'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Annuleren'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Zoeken'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Waarde'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Tweede waarde'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 12 */
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
  languageCode: 'pl-PL'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Wstaw wiersz powy??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Wstaw wiersz poni??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Wstaw kolumn?? z lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Wstaw kolumn?? z prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Usu?? wiersz', 'Usu?? wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Usu?? kolumn??', 'Usu?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Cofnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Pon??w'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Wyczy???? kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Wyr??wnanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Do lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Do ??rodka'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Do prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Wyjustuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Do g??ry'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Wy??rodkuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Do do??u'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Zablokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Odblokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Obramowanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Kraw??d?? g??rna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Kraw??d?? prawa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Kraw??d?? dolna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Kraw??d?? lewa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Usu?? obramowanie(a)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Dodaj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edytuj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Usu?? komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Komentarz tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Scal kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Rozdziel kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopiuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Wytnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Wstaw wiersz podrz??dny'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Od????cz od nadrz??dnego'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ukryj kolumn??', 'Ukryj kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Poka?? kolumn??', 'Poka?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ukryj wiersz', 'Ukryj wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Poka?? wiersz', 'Poka?? wiersze']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Brak'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Kom??rka jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Kom??rka nie jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Jest r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Jest r????ne od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Tekst zaczyna si?? od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Tekst ko??czy si?? na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Tekst zawiera fragment'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Tekst nie zawiera fragmentu'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Wi??ksze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Wi??ksze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Mniejsze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mniejsze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nie jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Data p????niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Data wcze??niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Dzisiaj'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Jutro'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Wczoraj'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Puste miejsca'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtruj wg warunku'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtruj wg warto??ci'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Oraz'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Lub'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Zaznacz wszystko'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Wyczy????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Anuluj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Szukaj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Warto????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Druga warto????'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 13 */
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
  languageCode: 'pt-BR'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Inserir linha acima'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Inserir linha abaixo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Inserir coluna esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Inserir coluna direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Excluir linha', 'Excluir linhas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Excluir coluna', 'Excluir colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Desfazer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Refazer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Somente leitura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Limpar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alinhamento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centralizado'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justificado'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Meio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Congelar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Descongelar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Excluir bordas(s)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Incluir coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Editar coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Remover coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Coment??rio somente leitura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Mesclar c??lulas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Desfazer mesclagem de c??lulas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copiar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Recortar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Inserir linha filha'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Desanexar da linha pai'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ocultar coluna', 'Ocultar colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Exibir coluna', 'Exibir colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ocultar linha', 'Ocultar linhas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Exibir linha', 'Exibir linhas']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nenhum'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '?? vazio'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'N??o ?? vazio'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '?? igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?? diferente de'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Come??a com'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina com'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Cont??m'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'N??o cont??m'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Maior que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Maior ou igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Menor que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Maior ou igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Est?? entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'N??o est?? entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Depois'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Antes'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Hoje'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Amanh??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Ontem'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'C??lulas vazias'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrar por condi????o'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrar por valor'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'E'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Ou'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Selecionar tudo'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Limpar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancelar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Localizar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valor'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Segundo valor'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 14 */
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
  languageCode: 'ru-RU'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '???????????????? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '???????????????? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '???????????????? ?????????????? ??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '???????????????? ?????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['?????????????? ????????????', '?????????????? ????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['?????????????? ??????????????', '?????????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '???????????? ?????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '???????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '???? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '???? ?????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '???? ???????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '???? ?????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '?????????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '?????????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '?????????????? ??????????????(??)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '???????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '?????????????????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '?????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '?????????????????????? ???????????? ?????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '???????????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '?????????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '???????????????? ???????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '???????????????? ???? ????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['???????????? ??????????????', '???????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['???????????????? ??????????????', '???????????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['???????????? ????????????', '???????????? ????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['???????????????? ????????????', '???????????????? ????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '??????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '???????????????????? ????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '?????????????????????????? ????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '???? ????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '???????????? ?????? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '???????????? ?????? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '???????????? ????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '???????????? ???? ??????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '???????????? ???? ????????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '??'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '?????????????? ??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '????????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '???????????? ????????????????'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 15 */
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
  languageCode: 'zh-CN'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '???????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '???????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '???'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '?????????'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 16 */
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
  languageCode: 'zh-TW'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '???'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '?????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '?????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '???????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '???'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '?????????'), _dictionary);

_handsontablePro.default.languages.registerLanguageDictionary(dictionary);

var _default = dictionary;
exports.default = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _deCH = _interopRequireDefault(__webpack_require__(1));

exports.deCH = _deCH.default;

var _deDE = _interopRequireDefault(__webpack_require__(2));

exports.deDE = _deDE.default;

var _enUS = _interopRequireDefault(__webpack_require__(3));

exports.enUS = _enUS.default;

var _esMX = _interopRequireDefault(__webpack_require__(4));

exports.esMX = _esMX.default;

var _frFR = _interopRequireDefault(__webpack_require__(5));

exports.frFR = _frFR.default;

var _itIT = _interopRequireDefault(__webpack_require__(6));

exports.itIT = _itIT.default;

var _jaJP = _interopRequireDefault(__webpack_require__(7));

exports.jaJP = _jaJP.default;

var _koKR = _interopRequireDefault(__webpack_require__(8));

exports.koKR = _koKR.default;

var _lvLV = _interopRequireDefault(__webpack_require__(9));

exports.lvLV = _lvLV.default;

var _nbNO = _interopRequireDefault(__webpack_require__(10));

exports.nbNO = _nbNO.default;

var _nlNL = _interopRequireDefault(__webpack_require__(11));

exports.nlNL = _nlNL.default;

var _plPL = _interopRequireDefault(__webpack_require__(12));

exports.plPL = _plPL.default;

var _ptBR = _interopRequireDefault(__webpack_require__(13));

exports.ptBR = _ptBR.default;

var _ruRU = _interopRequireDefault(__webpack_require__(14));

exports.ruRU = _ruRU.default;

var _zhCN = _interopRequireDefault(__webpack_require__(15));

exports.zhCN = _zhCN.default;

var _zhTW = _interopRequireDefault(__webpack_require__(16));

exports.zhTW = _zhTW.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ])["___"];
});