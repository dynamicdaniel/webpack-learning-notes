webpackJsonp([1],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_recur__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_recur___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_recur__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useMomentRecur__ = __webpack_require__(137);
var _console, _console2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var today = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format('YYYY-MM-DD HH:mm:ss');
var preWeek = __WEBPACK_IMPORTED_MODULE_1_moment_recur___default()().recur().every(1).days(7);
console.log('%c today', 'color:green', today, '\n');

(_console = console).log.apply(_console, ['%c preWeek', 'color:dodgerblue'].concat(_toConsumableArray(preWeek), ['\n']));

(_console2 = console).log.apply(_console2, ['%c useMomentRecur', 'color:red'].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_2__useMomentRecur__["a" /* default */]), ['\n']));

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 2,
	"./af.js": 2,
	"./ar": 3,
	"./ar-dz": 4,
	"./ar-dz.js": 4,
	"./ar-kw": 5,
	"./ar-kw.js": 5,
	"./ar-ly": 6,
	"./ar-ly.js": 6,
	"./ar-ma": 7,
	"./ar-ma.js": 7,
	"./ar-sa": 8,
	"./ar-sa.js": 8,
	"./ar-tn": 9,
	"./ar-tn.js": 9,
	"./ar.js": 3,
	"./az": 10,
	"./az.js": 10,
	"./be": 11,
	"./be.js": 11,
	"./bg": 12,
	"./bg.js": 12,
	"./bm": 13,
	"./bm.js": 13,
	"./bn": 14,
	"./bn.js": 14,
	"./bo": 15,
	"./bo.js": 15,
	"./br": 16,
	"./br.js": 16,
	"./bs": 17,
	"./bs.js": 17,
	"./ca": 18,
	"./ca.js": 18,
	"./cs": 19,
	"./cs.js": 19,
	"./cv": 20,
	"./cv.js": 20,
	"./cy": 21,
	"./cy.js": 21,
	"./da": 22,
	"./da.js": 22,
	"./de": 23,
	"./de-at": 24,
	"./de-at.js": 24,
	"./de-ch": 25,
	"./de-ch.js": 25,
	"./de.js": 23,
	"./dv": 26,
	"./dv.js": 26,
	"./el": 27,
	"./el.js": 27,
	"./en-au": 28,
	"./en-au.js": 28,
	"./en-ca": 29,
	"./en-ca.js": 29,
	"./en-gb": 30,
	"./en-gb.js": 30,
	"./en-ie": 31,
	"./en-ie.js": 31,
	"./en-il": 32,
	"./en-il.js": 32,
	"./en-in": 33,
	"./en-in.js": 33,
	"./en-nz": 34,
	"./en-nz.js": 34,
	"./en-sg": 35,
	"./en-sg.js": 35,
	"./eo": 36,
	"./eo.js": 36,
	"./es": 37,
	"./es-do": 38,
	"./es-do.js": 38,
	"./es-us": 39,
	"./es-us.js": 39,
	"./es.js": 37,
	"./et": 40,
	"./et.js": 40,
	"./eu": 41,
	"./eu.js": 41,
	"./fa": 42,
	"./fa.js": 42,
	"./fi": 43,
	"./fi.js": 43,
	"./fil": 44,
	"./fil.js": 44,
	"./fo": 45,
	"./fo.js": 45,
	"./fr": 46,
	"./fr-ca": 47,
	"./fr-ca.js": 47,
	"./fr-ch": 48,
	"./fr-ch.js": 48,
	"./fr.js": 46,
	"./fy": 49,
	"./fy.js": 49,
	"./ga": 50,
	"./ga.js": 50,
	"./gd": 51,
	"./gd.js": 51,
	"./gl": 52,
	"./gl.js": 52,
	"./gom-deva": 53,
	"./gom-deva.js": 53,
	"./gom-latn": 54,
	"./gom-latn.js": 54,
	"./gu": 55,
	"./gu.js": 55,
	"./he": 56,
	"./he.js": 56,
	"./hi": 57,
	"./hi.js": 57,
	"./hr": 58,
	"./hr.js": 58,
	"./hu": 59,
	"./hu.js": 59,
	"./hy-am": 60,
	"./hy-am.js": 60,
	"./id": 61,
	"./id.js": 61,
	"./is": 62,
	"./is.js": 62,
	"./it": 63,
	"./it-ch": 64,
	"./it-ch.js": 64,
	"./it.js": 63,
	"./ja": 65,
	"./ja.js": 65,
	"./jv": 66,
	"./jv.js": 66,
	"./ka": 67,
	"./ka.js": 67,
	"./kk": 68,
	"./kk.js": 68,
	"./km": 69,
	"./km.js": 69,
	"./kn": 70,
	"./kn.js": 70,
	"./ko": 71,
	"./ko.js": 71,
	"./ku": 72,
	"./ku.js": 72,
	"./ky": 73,
	"./ky.js": 73,
	"./lb": 74,
	"./lb.js": 74,
	"./lo": 75,
	"./lo.js": 75,
	"./lt": 76,
	"./lt.js": 76,
	"./lv": 77,
	"./lv.js": 77,
	"./me": 78,
	"./me.js": 78,
	"./mi": 79,
	"./mi.js": 79,
	"./mk": 80,
	"./mk.js": 80,
	"./ml": 81,
	"./ml.js": 81,
	"./mn": 82,
	"./mn.js": 82,
	"./mr": 83,
	"./mr.js": 83,
	"./ms": 84,
	"./ms-my": 85,
	"./ms-my.js": 85,
	"./ms.js": 84,
	"./mt": 86,
	"./mt.js": 86,
	"./my": 87,
	"./my.js": 87,
	"./nb": 88,
	"./nb.js": 88,
	"./ne": 89,
	"./ne.js": 89,
	"./nl": 90,
	"./nl-be": 91,
	"./nl-be.js": 91,
	"./nl.js": 90,
	"./nn": 92,
	"./nn.js": 92,
	"./oc-lnc": 93,
	"./oc-lnc.js": 93,
	"./pa-in": 94,
	"./pa-in.js": 94,
	"./pl": 95,
	"./pl.js": 95,
	"./pt": 96,
	"./pt-br": 97,
	"./pt-br.js": 97,
	"./pt.js": 96,
	"./ro": 98,
	"./ro.js": 98,
	"./ru": 99,
	"./ru.js": 99,
	"./sd": 100,
	"./sd.js": 100,
	"./se": 101,
	"./se.js": 101,
	"./si": 102,
	"./si.js": 102,
	"./sk": 103,
	"./sk.js": 103,
	"./sl": 104,
	"./sl.js": 104,
	"./sq": 105,
	"./sq.js": 105,
	"./sr": 106,
	"./sr-cyrl": 107,
	"./sr-cyrl.js": 107,
	"./sr.js": 106,
	"./ss": 108,
	"./ss.js": 108,
	"./sv": 109,
	"./sv.js": 109,
	"./sw": 110,
	"./sw.js": 110,
	"./ta": 111,
	"./ta.js": 111,
	"./te": 112,
	"./te.js": 112,
	"./tet": 113,
	"./tet.js": 113,
	"./tg": 114,
	"./tg.js": 114,
	"./th": 115,
	"./th.js": 115,
	"./tl-ph": 116,
	"./tl-ph.js": 116,
	"./tlh": 117,
	"./tlh.js": 117,
	"./tr": 118,
	"./tr.js": 118,
	"./tzl": 119,
	"./tzl.js": 119,
	"./tzm": 120,
	"./tzm-latn": 121,
	"./tzm-latn.js": 121,
	"./tzm.js": 120,
	"./ug-cn": 122,
	"./ug-cn.js": 122,
	"./uk": 123,
	"./uk.js": 123,
	"./ur": 124,
	"./ur.js": 124,
	"./uz": 125,
	"./uz-latn": 126,
	"./uz-latn.js": 126,
	"./uz.js": 125,
	"./vi": 127,
	"./vi.js": 127,
	"./x-pseudo": 128,
	"./x-pseudo.js": 128,
	"./yo": 129,
	"./yo.js": 129,
	"./zh-cn": 130,
	"./zh-cn.js": 130,
	"./zh-hk": 131,
	"./zh-hk.js": 131,
	"./zh-mo": 132,
	"./zh-mo.js": 132,
	"./zh-tw": 133,
	"./zh-tw.js": 133
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 136;

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_recur__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_recur___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_recur__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(138);



var test = __WEBPACK_IMPORTED_MODULE_1_moment_recur___default()(__WEBPACK_IMPORTED_MODULE_0_moment___default.a).recur().every(1).days();
var v = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* add */])(2, 3);
var str = test.next(7, 'YYYY-MM-DD');
console.log(v);
/* harmony default export */ __webpack_exports__["a"] = (str);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
var add = function add(a, b) {
  return a + b;
};

/***/ })

},[135]);