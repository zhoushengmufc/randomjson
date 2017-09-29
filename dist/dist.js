(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["randomjson"] = factory();
	else
		root["randomjson"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits) {
	var count;
	if (tNumber !== undefined) {
		fNumber = Number(fNumber);
		tNumber = Number(tNumber);
		count = Math.floor(fNumber + Math.random() * (tNumber - fNumber + 1));
	}
	else if (sNumber !== undefined) {
		fNumber = Number(fNumber);
		count = Math.floor(fNumber + Math.random() * (maxBits - fNumber + 1));
	}
	else if (fNumber !== undefined) {
		fNumber = Number(fNumber);
		count = fNumber;
	}
	else {
		count = Math.floor(generalFNumber + Math.random() * (generalTNumber - generalFNumber + 1));
	}
	return count;
}
module.exports = randomCount;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var randomCount = __webpack_require__(0);
var maxBits = 20;
var generalFNumber = 1;
var generalTNumber = 10;
function arrayRandom(arr, fNumber, sNumber, tNumber) {
	var count;
	var newArr;
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	newArr = new Array(count);
	for (var i = 0; i < count; i++) {
		newArr[i] = arr[0]; 
	}
	newArr = newArr.concat(arr.slice(1));
	return newArr;
}
module.exports = arrayRandom;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function randomBoolean() {
	return (Math.random() > 0.5? true: false); 
}
module.exports = randomBoolean;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var randomCount = __webpack_require__(0);
// 常用288字
var str = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较长将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海地口东导器压志世金增争';
var maxBits = 288;
var generalFNumber = 5;
var generalTNumber = 20;
function randomString(fNumber, sNumber, tNumber) {
	var count;
	var res = '';

	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	while (count) {
		res += str[randomCount(0, ',287', 287)]
		count--;
	}
	return res;
}
module.exports = randomString;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function randomFloat(intDigit, decDigit) {
	var intDigit = intDigit? intDigit: 2;
	var decDigit = decDigit? decDigit: 2;
	var intNumber = Math.floor(Math.random() * Math.pow(10, intDigit));
	return intNumber + parseFloat(Math.random().toFixed(decDigit));
}
module.exports = randomFloat;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var defaultWidth = 400;
var defaultHeight = 400;
function randomImage(width, sNumber, height) {
	var iWidth = width? width: defaultWidth;
	var iHeight = height? height: defaultHeight;
	return 'https://dummyimage.com/' + iWidth + 'x' + iHeight;
}
module.exports = randomImage;



/***/ }),
/* 6 */
/***/ (function(module, exports) {

function randomNull() {
	return null;
}
module.exports = randomNull;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var randomCount = __webpack_require__(0);
var maxBits = 308;
var generalFNumber = 1;
var generalTNumber = 10;
function randomNumber(fNumber, sNumber, tNumber) {
	var conut;
	var numberRes;
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	return Math.floor(Math.pow(10, count-1) + Math.random() * (Math.pow(10, count) - Math.pow(10, count-1))); 
}
module.exports = randomNumber;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function numberRange(minNumber, maxNumber, orNumbers) {
	if (minNumber && maxNumber) {
		var minDigit = getDigit(minNumber);
		var maxDigit = getDigit(maxNumber);
		var digit = Math.max(minDigit, maxDigit);
		var minNumber = Number(minNumber);
		var maxNumber = Number(maxNumber);
		var tempMin;
		var tempMax;
		if (minNumber > maxNumber) {
			tempMax = maxNumber;
			tempMin = minNumber;
			minNumber = tempMax;
			maxNumber = tempMin;
		}
		return parseFloat((minNumber + Math.random() * (maxNumber - minNumber)).toFixed(digit));
	}
	else {
		var orNumbersArr = orNumbers.split(',');
		var randomIndex = Math.floor(Math.random() * orNumbersArr.length);
		return Number(orNumbersArr[randomIndex]);
	}
}
function getDigit(numberStr) {
	var numberArr = numberStr.split('.');
	if (numberArr.length === 1) {
		return 0;
	}
	else {
		return numberArr[1].length;
	}
}
module.exports = numberRange;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var randomCount = __webpack_require__(0);
var str = 'abcdefghijklmnopqrstuvwxyz';
var maxBits = 26;
var generalFNumber = 5;
var generalTNumber = 20;
function randomString(fNumber, sNumber, tNumber) {
	var count;
	var res = '';
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	while (count) {
		res += str[randomCount(0, ',25', 25)]
		count--;
	}
	return res;
}
module.exports = randomString;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var randomNumber = __webpack_require__(7);
var randomString = __webpack_require__(9);
var randomNull = __webpack_require__(6);
var randomBoolean = __webpack_require__(2)
var randomArray = __webpack_require__(1);

var randomChinese = __webpack_require__(3);
var numberRange = __webpack_require__(8);
var randomFloat = __webpack_require__(4);

var randomImage = __webpack_require__(5);

// json type
var typeJson = ['number', 'string', 'null', 'boolean', 'array', 'object'];
// custom type
var customType = ['chinese', 'float', 'image', 'url', 'email', 'date', 'tel', 'index'];
// Syntax Character
// var syntaxCharacter = ['*', '+', '?', '[', ']', ',', '{@', '{', '}', '|', '-'];
var syntaxCharacter = ['\\*', '\\+', '\\?', '\\[', '\\]', ',', '<@', '>', '\\{', '\\}', '\\|', '\\-'];

var typeKeys = typeJson.concat(customType);
// or regexp
var orTxtReg = /\|/;
// Quantifier regexp
var quanReg = /(\{(\d+)(,(\d*))?\})?/;
// numberRange
var numberRangeReg = /\[(?:(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?(?:,(?:\d+(?:\.\d+)?))*))\]/;
// keyReg
var keyReg = new RegExp('(' + typeKeys.join('|') + ')(?:\\{(\\d+)(,(\\d*))?\\})?');
// optionalReg
var optionalReg = new RegExp('(' + '\\[(.*?)\\]' + ')(?:\\{(\\d+)(,(\\d*))?\\})?');
// array Quantifier regexp
var arrQuanReg = /^(.*)<@(?:\{(\d+)(,(\d*))?\})?>/;

var syntaxSignReg = /<@(.*?)>/g;
// loop json
function main(modelJson) {
    var randomJson = {};
    readObject('', modelJson, randomJson);
    return randomJson;
}
// read object
function readObject(pro, obj, upperObj, bindIndex) {
    for (var p in obj) {
        if (getJsonType(obj[p]) === 'array') {
            var syntaxMatch = p.match(arrQuanReg);
            var proStr = '';
            if (syntaxMatch !== null) {
                proStr = syntaxMatch[1];
            }
            else {
                proStr = p;
            }
            upperObj[proStr] = [];
            readArray(p, obj[p], upperObj[proStr]);
        }
        else if (getJsonType(obj[p]) === 'object') {
            upperObj[p] = {};
            readObject(p, obj[p], upperObj[p]);
        }
        else {
            parseCharactor(p, obj[p], upperObj, bindIndex);
        }
    }
}
// read array
function readArray(key, arr, upperObj) {
    var syntaxMatch = key.match(arrQuanReg);
    var leftArr;
    if (syntaxMatch !== null) {
        arr = randomArray(arr, syntaxMatch[2], syntaxMatch[3], syntaxMatch[4]);
    }
    arr.forEach(function (item, index) {
        if (getJsonType(item) === 'object') {
            upperObj[index] = {};
            readObject(index, item, upperObj[index], index + 1);
        }
        else if (getJsonType(item) === 'array') {
            readArray(index, item, upperObj[index]);
        }
        else {
            parseCharactor(index, item, upperObj, index + 1);
        }
    });
}
// parse charactors
function parseCharactor(keyCha, valueCha, upperObj, bindIndex) {
    if (getJsonType(valueCha) === 'null' || getJsonType(valueCha) === 'number' || getJsonType(valueCha) === 'boolean') {
        upperObj[keyCha] = valueCha;
        return;
    }
    // var syntaxMatch = valueCha.match(syntaxSignReg);
    var syntaxExec = syntaxSignReg.exec(valueCha);
    var copyValue = valueCha;
    var synTxt = '';
    var isSyn = false;
    while (syntaxExec) {
        isSyn = true;
        synTxt = syntaxExec[1];
        if (RegExp.rightContext === '' && RegExp.leftContext === '') {
            copyValue = handleTxt(synTxt, bindIndex);
        }
        else {
            copyValue = copyValue.replace(syntaxExec[0], handleTxt(synTxt, bindIndex));
        }  
        syntaxExec = syntaxSignReg.exec(valueCha);
    }
    upperObj[keyCha] = copyValue; 
    if (!isSyn) {
        upperObj[keyCha] = valueCha;
    }
}
function handleTxt(synTxt, bindIndex) {
    var orMatch = synTxt.match(orTxtReg);
    if (orMatch !== null) {
        console.log(synTxt);
        var orArr = synTxt.split('|');
        var orArrLen = orArr.length;
        var randomIndex = Math.floor(Math.random() * orArrLen);
        synTxt = orArr[randomIndex];
    }
    var keyRes = synTxt.match(keyReg);
    var numberRangeRes = synTxt.match(numberRangeReg);
    if (keyRes !== null) {
        return randomByType(synTxt, keyRes[1], keyRes[2], keyRes[3], keyRes[4], bindIndex);
    }
    else if (numberRangeRes !== null) {
        return numberRange(numberRangeRes[1], numberRangeRes[2], numberRangeRes[3]);
    }
    else {
        return synTxt;
    }
}
function randomByType(synTxt, keyType, fNumber, sNumber, tNumber, bindIndex) {
    if (keyType === 'number') {
        return randomNumber(fNumber, sNumber, tNumber);
    }
    else if (keyType === 'string') {
        return randomString(fNumber, sNumber, tNumber);
    }
    else if (keyType === 'boolean') {
        return randomBoolean();
    }
    else if (keyType === 'null') {
        return randomNull();
    }
    else if (keyType === 'chinese') {
        return randomChinese(fNumber, sNumber, tNumber);
    }
    else if (keyType === 'index') {
        return bindIndex;
    }
    else if (keyType === 'float') {
        return randomFloat(fNumber, tNumber);
    }
    else if (keyType === 'image') {
        return randomImage(fNumber, sNumber, tNumber);
    }
    else {
        return synTxt;
    }
}
// get json type
function getJsonType(arg1) {
    if (arg1 === null) {
        return 'null';
    }
    else if (typeof arg1 === 'string') {
        return 'string';
    }
    else if (typeof arg1 === 'number') {
        return 'number';
    }
    else if (typeof arg1 === 'boolean') {
        return 'boolean';
    }
    else if (Object.prototype.toString.call(arg1) === '[object Array]') {
        return 'array';
    }
    else if (Object.prototype.toString.call(arg1) === '[object Object]') {
        return 'object';
    }
    else {
        throw new Error('illegal type');
    } 
}

module.exports = main;

/***/ })
/******/ ]);
});