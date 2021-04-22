var battlePlantation =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, process) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports = XMLHttpRequest;

},{}],3:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MediaFileReader = require('./MediaFileReader');

var ArrayFileReader =
/*#__PURE__*/
function (_MediaFileReader) {
  _inherits(ArrayFileReader, _MediaFileReader);

  function ArrayFileReader(array) {
    var _this;

    _classCallCheck(this, ArrayFileReader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayFileReader).call(this));

    _defineProperty(_assertThisInitialized(_this), "_array", void 0);

    _defineProperty(_assertThisInitialized(_this), "_size", void 0);

    _this._array = array;
    _this._size = array.length;
    _this._isInitialized = true;
    return _this;
  }

  _createClass(ArrayFileReader, [{
    key: "init",
    value: function init(callbacks) {
      setTimeout(callbacks.onSuccess, 0);
    }
  }, {
    key: "loadRange",
    value: function loadRange(range, callbacks) {
      setTimeout(callbacks.onSuccess, 0);
    }
  }, {
    key: "getByteAt",
    value: function getByteAt(offset) {
      if (offset >= this._array.length) {
        throw new Error("Offset " + offset + " hasn't been loaded yet.");
      }

      return this._array[offset];
    }
  }], [{
    key: "canReadFile",
    value: function canReadFile(file) {
      return Array.isArray(file) || typeof Buffer === 'function' && Buffer.isBuffer(file);
    }
  }]);

  return ArrayFileReader;
}(MediaFileReader);

module.exports = ArrayFileReader;

},{"./MediaFileReader":11}],4:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChunkedFileData = require('./ChunkedFileData');

var MediaFileReader = require('./MediaFileReader');

var BlobFileReader =
/*#__PURE__*/
function (_MediaFileReader) {
  _inherits(BlobFileReader, _MediaFileReader);

  function BlobFileReader(blob) {
    var _this;

    _classCallCheck(this, BlobFileReader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlobFileReader).call(this));

    _defineProperty(_assertThisInitialized(_this), "_blob", void 0);

    _defineProperty(_assertThisInitialized(_this), "_fileData", void 0);

    _this._blob = blob;
    _this._fileData = new ChunkedFileData();
    return _this;
  }

  _createClass(BlobFileReader, [{
    key: "_init",
    value: function _init(callbacks) {
      this._size = this._blob.size;
      setTimeout(callbacks.onSuccess, 1);
    }
  }, {
    key: "loadRange",
    value: function loadRange(range, callbacks) {
      var self = this; // $FlowIssue - flow isn't aware of mozSlice or webkitSlice

      var blobSlice = this._blob.slice || this._blob.mozSlice || this._blob.webkitSlice;
      var blob = blobSlice.call(this._blob, range[0], range[1] + 1);
      var browserFileReader = new FileReader();

      browserFileReader.onloadend = function (event) {
        var intArray = new Uint8Array(browserFileReader.result);

        self._fileData.addData(range[0], intArray);

        callbacks.onSuccess();
      };

      browserFileReader.onerror = browserFileReader.onabort = function (event) {
        if (callbacks.onError) {
          callbacks.onError({
            "type": "blob",
            "info": browserFileReader.error
          });
        }
      };

      browserFileReader.readAsArrayBuffer(blob);
    }
  }, {
    key: "getByteAt",
    value: function getByteAt(offset) {
      return this._fileData.getByteAt(offset);
    }
  }], [{
    key: "canReadFile",
    value: function canReadFile(file) {
      return typeof Blob !== "undefined" && file instanceof Blob || // File extends Blob but it seems that File instanceof Blob doesn't
      // quite work as expected in Cordova/PhoneGap.
      typeof File !== "undefined" && file instanceof File;
    }
  }]);

  return BlobFileReader;
}(MediaFileReader);

module.exports = BlobFileReader;

},{"./ChunkedFileData":5,"./MediaFileReader":11}],5:[function(require,module,exports){
/**
 * This class represents a file that might not have all its data loaded yet.
 * It is used when loading the entire file is not an option because it's too
 * expensive. Instead, parts of the file are loaded and added only when needed.
 * From a reading point of view is as if the entire file is loaded. The
 * exception is when the data is not available yet, an error will be thrown.
 * This class does not load the data, it just manages it. It provides operations
 * to add and read data from the file.
 *
 * 
 */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOT_FOUND = -1;

var ChunkedFileData =
/*#__PURE__*/
function () {
  _createClass(ChunkedFileData, null, [{
    key: "NOT_FOUND",
    // $FlowIssue - get/set properties not yet supported
    get: function get() {
      return NOT_FOUND;
    }
  }]);

  function ChunkedFileData() {
    _classCallCheck(this, ChunkedFileData);

    _defineProperty(this, "_fileData", void 0);

    this._fileData = [];
  }
  /**
   * Adds data to the file storage at a specific offset.
   */


  _createClass(ChunkedFileData, [{
    key: "addData",
    value: function addData(offset, data) {
      var offsetEnd = offset + data.length - 1;

      var chunkRange = this._getChunkRange(offset, offsetEnd);

      if (chunkRange.startIx === NOT_FOUND) {
        this._fileData.splice(chunkRange.insertIx || 0, 0, {
          offset: offset,
          data: data
        });
      } else {
        // If the data to add collides with existing chunks we prepend and
        // append data from the half colliding chunks to make the collision at
        // 100%. The new data can then replace all the colliding chunkes.
        var firstChunk = this._fileData[chunkRange.startIx];
        var lastChunk = this._fileData[chunkRange.endIx];
        var needsPrepend = offset > firstChunk.offset;
        var needsAppend = offsetEnd < lastChunk.offset + lastChunk.data.length - 1;
        var chunk = {
          offset: Math.min(offset, firstChunk.offset),
          data: data
        };

        if (needsPrepend) {
          var slicedData = this._sliceData(firstChunk.data, 0, offset - firstChunk.offset);

          chunk.data = this._concatData(slicedData, data);
        }

        if (needsAppend) {
          // Use the lastChunk because the slice logic is easier to handle.
          var slicedData = this._sliceData(chunk.data, 0, lastChunk.offset - chunk.offset);

          chunk.data = this._concatData(slicedData, lastChunk.data);
        }

        this._fileData.splice(chunkRange.startIx, chunkRange.endIx - chunkRange.startIx + 1, chunk);
      }
    }
  }, {
    key: "_concatData",
    value: function _concatData(dataA, dataB) {
      // TypedArrays don't support concat.
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(dataA)) {
        // $FlowIssue - flow thinks dataAandB is a string but it's not
        var dataAandB = new dataA.constructor(dataA.length + dataB.length); // $FlowIssue - flow thinks dataAandB is a string but it's not

        dataAandB.set(dataA, 0); // $FlowIssue - flow thinks dataAandB is a string but it's not

        dataAandB.set(dataB, dataA.length);
        return dataAandB;
      } else {
        // $FlowIssue - flow thinks dataAandB is a TypedArray but it's not
        return dataA.concat(dataB);
      }
    }
  }, {
    key: "_sliceData",
    value: function _sliceData(data, begin, end) {
      // Some TypeArray implementations do not support slice yet.
      if (data.slice) {
        return data.slice(begin, end);
      } else {
        // $FlowIssue - flow thinks data is a string but it's not
        return data.subarray(begin, end);
      }
    }
    /**
     * Finds the chunk range that overlaps the [offsetStart-1,offsetEnd+1] range.
     * When a chunk is adjacent to the offset we still consider it part of the
     * range (this is the situation of offsetStart-1 or offsetEnd+1).
     * When no chunks are found `insertIx` denotes the index where the data
     * should be inserted in the data list (startIx == NOT_FOUND and endIX ==
     * NOT_FOUND).
     */

  }, {
    key: "_getChunkRange",
    value: function _getChunkRange(offsetStart, offsetEnd) {
      var startChunkIx = NOT_FOUND;
      var endChunkIx = NOT_FOUND;
      var insertIx = 0; // Could use binary search but not expecting that many blocks to exist.

      for (var i = 0; i < this._fileData.length; i++, insertIx = i) {
        var chunkOffsetStart = this._fileData[i].offset;
        var chunkOffsetEnd = chunkOffsetStart + this._fileData[i].data.length;

        if (offsetEnd < chunkOffsetStart - 1) {
          // This offset range doesn't overlap with any chunks.
          break;
        } // If it is adjacent we still consider it part of the range because
        // we're going end up with a single block with all contiguous data.


        if (offsetStart <= chunkOffsetEnd + 1 && offsetEnd >= chunkOffsetStart - 1) {
          startChunkIx = i;
          break;
        }
      } // No starting chunk was found, meaning that the offset is either before
      // or after the current stored chunks.


      if (startChunkIx === NOT_FOUND) {
        return {
          startIx: NOT_FOUND,
          endIx: NOT_FOUND,
          insertIx: insertIx
        };
      } // Find the ending chunk.


      for (var i = startChunkIx; i < this._fileData.length; i++) {
        var chunkOffsetStart = this._fileData[i].offset;
        var chunkOffsetEnd = chunkOffsetStart + this._fileData[i].data.length;

        if (offsetEnd >= chunkOffsetStart - 1) {
          // Candidate for the end chunk, it doesn't mean it is yet.
          endChunkIx = i;
        }

        if (offsetEnd <= chunkOffsetEnd + 1) {
          break;
        }
      }

      if (endChunkIx === NOT_FOUND) {
        endChunkIx = startChunkIx;
      }

      return {
        startIx: startChunkIx,
        endIx: endChunkIx
      };
    }
  }, {
    key: "hasDataRange",
    value: function hasDataRange(offsetStart, offsetEnd) {
      for (var i = 0; i < this._fileData.length; i++) {
        var chunk = this._fileData[i];

        if (offsetEnd < chunk.offset) {
          return false;
        }

        if (offsetStart >= chunk.offset && offsetEnd < chunk.offset + chunk.data.length) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "getByteAt",
    value: function getByteAt(offset) {
      var dataChunk;

      for (var i = 0; i < this._fileData.length; i++) {
        var dataChunkStart = this._fileData[i].offset;
        var dataChunkEnd = dataChunkStart + this._fileData[i].data.length - 1;

        if (offset >= dataChunkStart && offset <= dataChunkEnd) {
          dataChunk = this._fileData[i];
          break;
        }
      }

      if (dataChunk) {
        return dataChunk.data[offset - dataChunk.offset];
      }

      throw new Error("Offset " + offset + " hasn't been loaded yet.");
    }
  }]);

  return ChunkedFileData;
}();

module.exports = ChunkedFileData;

},{}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MediaTagReader = require('./MediaTagReader');
/* The first 4 bytes of a FLAC file describes the header for the file. If these
 * bytes respectively read "fLaC", we can determine it is a FLAC file.
 */


var FLAC_HEADER_SIZE = 4;
/* FLAC metadata is stored in blocks containing data ranging from STREAMINFO to
 * VORBIS_COMMENT, which is what we want to work with.
 *
 * Each metadata header is 4 bytes long, with the first byte determining whether
 * it is the last metadata block before the audio data and what the block type is.
 * This first byte can further be split into 8 bits, with the first bit being the
 * last-metadata-block flag, and the last three bits being the block type.
 *
 * Since the specification states that the decimal value for a VORBIS_COMMENT block
 * type is 4, the two possibilities for the comment block header values are:
 * - 00000100 (Not a last metadata comment block, value of 4)
 * - 10000100 (A last metadata comment block, value of 132)
 *
 * Similarly, the picture block header values are 6 and 128.
 *
 * All values for METADATA_BLOCK_HEADER can be found here.
 * https://xiph.org/flac/format.html#metadata_block_header
 */

var COMMENT_HEADERS = [4, 132];
var PICTURE_HEADERS = [6, 134]; // These are the possible image types as defined by the FLAC specification.

var IMAGE_TYPES = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"];

/**
 * Class representing a MediaTagReader that parses FLAC tags.
 */
var FLACTagReader =
/*#__PURE__*/
function (_MediaTagReader) {
  _inherits(FLACTagReader, _MediaTagReader);

  function FLACTagReader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FLACTagReader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FLACTagReader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_commentOffset", void 0);

    _defineProperty(_assertThisInitialized(_this), "_pictureOffset", void 0);

    return _this;
  }

  _createClass(FLACTagReader, [{
    key: "_loadData",

    /**
     * Function called to load the data from the file.
     *
     * To begin processing the blocks, the next 4 bytes after the initial 4 bytes
     * (bytes 4 through 7) are loaded. From there, the rest of the loading process
     * is passed on to the _loadBlock function, which will handle the rest of the
     * parsing for the metadata blocks.
     *
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {LoadCallbackType} callbacks - The callback to call once _loadData is completed.
     */
    value: function _loadData(mediaFileReader, callbacks) {
      var self = this;
      mediaFileReader.loadRange([4, 7], {
        onSuccess: function onSuccess() {
          self._loadBlock(mediaFileReader, 4, callbacks);
        }
      });
    }
    /**
     * Special internal function used to parse the different FLAC blocks.
     *
     * The FLAC specification doesn't specify a specific location for metadata to resign, but
     * dictates that it may be in one of various blocks located throughout the file. To load the
     * metadata, we must locate the header first. This can be done by reading the first byte of
     * each block to determine the block type. After the block type comes a 24 bit integer that stores
     * the length of the block as big endian. Using this, we locate the block and store the offset for
     * parsing later.
     *
     * After each block has been parsed, the _nextBlock function is called in order
     * to parse the information of the next block. All blocks need to be parsed in order to find
     * all of the picture and comment blocks.
     *
     * More info on the FLAC specification may be found here:
     * https://xiph.org/flac/format.html
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {number} offset - The offset to start checking the header from.
     * @param {LoadCallbackType} callbacks - The callback to call once the header has been found.
     */

  }, {
    key: "_loadBlock",
    value: function _loadBlock(mediaFileReader, offset, callbacks) {
      var self = this;
      /* As mentioned above, this first byte is loaded to see what metadata type
       * this block represents.
       */

      var blockHeader = mediaFileReader.getByteAt(offset);
      /* The last three bytes (integer 24) contain a value representing the length
       * of the following metadata block. The 1 is added in order to shift the offset
       * by one to get the last three bytes in the block header.
       */

      var blockSize = mediaFileReader.getInteger24At(offset + 1, true);
      /* This conditional checks if blockHeader (the byte retrieved representing the
       * type of the header) is one the headers we are looking for.
       *
       * If that is not true, the block is skipped over and the next range is loaded:
       * - offset + 4 + blockSize adds 4 to skip over the initial metadata header and
       * blockSize to skip over the block overall, placing it at the head of the next
       * metadata header.
       * - offset + 4 + 4 + blockSize does the same thing as the previous block with
       * the exception of adding another 4 bytes to move it to the end of the new metadata
       * header.
       */

      if (COMMENT_HEADERS.indexOf(blockHeader) !== -1) {
        /* 4 is added to offset to move it to the head of the actual metadata.
         * The range starting from offsetMatadata (the beginning of the block)
         * and offsetMetadata + blockSize (the end of the block) is loaded.
         */
        var offsetMetadata = offset + 4;
        mediaFileReader.loadRange([offsetMetadata, offsetMetadata + blockSize], {
          onSuccess: function onSuccess() {
            self._commentOffset = offsetMetadata;

            self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
          }
        });
      } else if (PICTURE_HEADERS.indexOf(blockHeader) !== -1) {
        var offsetMetadata = offset + 4;
        mediaFileReader.loadRange([offsetMetadata, offsetMetadata + blockSize], {
          onSuccess: function onSuccess() {
            self._pictureOffset = offsetMetadata;

            self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
          }
        });
      } else {
        self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
      }
    }
    /**
     * Internal function used to load the next range and respective block.
     *
     * If the metadata block that was identified is not the last block before the
     * audio blocks, the function will continue loading the next blocks. If it is
     * the last block (identified by any values greater than 127, see FLAC spec.),
     * the function will determine whether a comment block had been identified.
     *
     * If the block does not exist, the error callback is called. Otherwise, the function
     * will call the success callback, allowing data parsing to begin.
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {number} offset - The offset that the existing header was located at.
     * @param {number} blockHeader - An integer reflecting the header type of the block.
     * @param {number} blockSize - The size of the previously processed header.
     * @param {LoadCallbackType} callbacks - The callback functions to be called.
     */

  }, {
    key: "_nextBlock",
    value: function _nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks) {
      var self = this;

      if (blockHeader > 127) {
        if (!self._commentOffset) {
          callbacks.onError({
            "type": "loadData",
            "info": "Comment block could not be found."
          });
        } else {
          callbacks.onSuccess();
        }
      } else {
        mediaFileReader.loadRange([offset + 4 + blockSize, offset + 4 + 4 + blockSize], {
          onSuccess: function onSuccess() {
            self._loadBlock(mediaFileReader, offset + 4 + blockSize, callbacks);
          }
        });
      }
    }
    /**
     * Parses the data and returns the tags.
     *
     * This is an overview of the VorbisComment format and what this function attempts to
     * retrieve:
     * - First 4 bytes: a long that contains the length of the vendor string.
     * - Next n bytes: the vendor string encoded in UTF-8.
     * - Next 4 bytes: a long representing how many comments are in this block
     * For each comment that exists:
     * - First 4 bytes: a long representing the length of the comment
     * - Next n bytes: the comment encoded in UTF-8.
     * The comment string will usually appear in a format similar to:
     * ARTIST=me
     *
     * Note that the longs and integers in this block are encoded in little endian
     * as opposed to big endian for the rest of the FLAC spec.
     * @param {MediaFileReader} data - The MediaFileReader to parse the file with.
     * @param {Array<string>} [tags] - Optional tags to also be retrieved from the file.
     * @return {TagType} - An object containing the tag information for the file.
     */

  }, {
    key: "_parseData",
    value: function _parseData(data, tags) {
      var vendorLength = data.getLongAt(this._commentOffset, false);
      var offsetVendor = this._commentOffset + 4;
      /* This line is able to retrieve the vendor string that the VorbisComment block
       * contains. However, it is not part of the tags that JSMediaTags normally retrieves,
       * and is therefore commented out.
       */
      // var vendor = data.getStringWithCharsetAt(offsetVendor, vendorLength, "utf-8").toString();

      var offsetList = vendorLength + offsetVendor;
      /* To get the metadata from the block, we first get the long that contains the
       * number of actual comment values that are existent within the block.
       *
       * As we loop through all of the comment blocks, we get the data length in order to
       * get the right size string, and then determine which category that string falls under.
       * The dataOffset variable is constantly updated so that it is at the beginning of the
       * comment that is currently being parsed.
       *
       * Additions of 4 here are used to move the offset past the first 4 bytes which only contain
       * the length of the comment.
       */

      var numComments = data.getLongAt(offsetList, false);
      var dataOffset = offsetList + 4;
      var title, artist, album, track, genre, picture;

      for (var i = 0; i < numComments; i++) {
        var _dataLength = data.getLongAt(dataOffset, false);

        var s = data.getStringWithCharsetAt(dataOffset + 4, _dataLength, "utf-8").toString();
        var d = s.indexOf("=");
        var split = [s.slice(0, d), s.slice(d + 1)];

        switch (split[0]) {
          case "TITLE":
            title = split[1];
            break;

          case "ARTIST":
            artist = split[1];
            break;

          case "ALBUM":
            album = split[1];
            break;

          case "TRACKNUMBER":
            track = split[1];
            break;

          case "GENRE":
            genre = split[1];
            break;
        }

        dataOffset += 4 + _dataLength;
      }
      /* If a picture offset was found and assigned, then the reader will start processing
       * the picture block from that point.
       *
       * All the lengths for the picture data can be found online here:
       * https://xiph.org/flac/format.html#metadata_block_picture
       */


      if (this._pictureOffset) {
        var imageType = data.getLongAt(this._pictureOffset, true);
        var offsetMimeLength = this._pictureOffset + 4;
        var mimeLength = data.getLongAt(offsetMimeLength, true);
        var offsetMime = offsetMimeLength + 4;
        var mime = data.getStringAt(offsetMime, mimeLength);
        var offsetDescriptionLength = offsetMime + mimeLength;
        var descriptionLength = data.getLongAt(offsetDescriptionLength, true);
        var offsetDescription = offsetDescriptionLength + 4;
        var description = data.getStringWithCharsetAt(offsetDescription, descriptionLength, "utf-8").toString();
        var offsetDataLength = offsetDescription + descriptionLength + 16;
        var dataLength = data.getLongAt(offsetDataLength, true);
        var offsetData = offsetDataLength + 4;
        var imageData = data.getBytesAt(offsetData, dataLength, true);
        picture = {
          format: mime,
          type: IMAGE_TYPES[imageType],
          description: description,
          data: imageData
        };
      }

      var tag = {
        type: "FLAC",
        version: "1",
        tags: {
          "title": title,
          "artist": artist,
          "album": album,
          "track": track,
          "genre": genre,
          "picture": picture
        }
      };
      return tag;
    }
  }], [{
    key: "getTagIdentifierByteRange",

    /**
     * Gets the byte range for the tag identifier.
     *
     * Because the Vorbis comment block is not guaranteed to be in a specified
     * location, we can only load the first 4 bytes of the file to confirm it
     * is a FLAC first.
     *
     * @return {ByteRange} The byte range that identifies the tag for a FLAC.
     */
    value: function getTagIdentifierByteRange() {
      return {
        offset: 0,
        length: FLAC_HEADER_SIZE
      };
    }
    /**
     * Determines whether or not this reader can read a certain tag format.
     *
     * This checks that the first 4 characters in the file are fLaC, which
     * according to the FLAC file specification should be the characters that
     * indicate a FLAC file.
     *
     * @return {boolean} True if the header is fLaC, false otherwise.
     */

  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 4));
      return id === 'fLaC';
    }
  }]);

  return FLACTagReader;
}(MediaTagReader);

module.exports = FLACTagReader;

},{"./MediaTagReader":12}],7:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MediaTagReader = require('./MediaTagReader');

var MediaFileReader = require('./MediaFileReader');

var ID3v1TagReader =
/*#__PURE__*/
function (_MediaTagReader) {
  _inherits(ID3v1TagReader, _MediaTagReader);

  function ID3v1TagReader() {
    _classCallCheck(this, ID3v1TagReader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ID3v1TagReader).apply(this, arguments));
  }

  _createClass(ID3v1TagReader, [{
    key: "_loadData",
    value: function _loadData(mediaFileReader, callbacks) {
      var fileSize = mediaFileReader.getSize();
      mediaFileReader.loadRange([fileSize - 128, fileSize - 1], callbacks);
    }
  }, {
    key: "_parseData",
    value: function _parseData(data, tags) {
      var offset = data.getSize() - 128;
      var title = data.getStringWithCharsetAt(offset + 3, 30).toString();
      var artist = data.getStringWithCharsetAt(offset + 33, 30).toString();
      var album = data.getStringWithCharsetAt(offset + 63, 30).toString();
      var year = data.getStringWithCharsetAt(offset + 93, 4).toString();
      var trackFlag = data.getByteAt(offset + 97 + 28);
      var track = data.getByteAt(offset + 97 + 29);

      if (trackFlag == 0 && track != 0) {
        var version = "1.1";
        var comment = data.getStringWithCharsetAt(offset + 97, 28).toString();
      } else {
        var version = "1.0";
        var comment = data.getStringWithCharsetAt(offset + 97, 30).toString();
        track = 0;
      }

      var genreIdx = data.getByteAt(offset + 97 + 30);

      if (genreIdx < 255) {
        var genre = GENRES[genreIdx];
      } else {
        var genre = "";
      }

      var tag = {
        "type": "ID3",
        "version": version,
        "tags": {
          "title": title,
          "artist": artist,
          "album": album,
          "year": year,
          "comment": comment,
          "genre": genre
        }
      };

      if (track) {
        // $FlowIssue - flow is not happy with adding properties
        tag.tags.track = track;
      }

      return tag;
    }
  }], [{
    key: "getTagIdentifierByteRange",
    value: function getTagIdentifierByteRange() {
      // The identifier is TAG and is at offset: -128. However, to avoid a
      // fetch for the tag identifier and another for the data, we load the
      // entire data since it's so small.
      return {
        offset: -128,
        length: 128
      };
    }
  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 3));
      return id === "TAG";
    }
  }]);

  return ID3v1TagReader;
}(MediaTagReader);

var GENRES = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "Acapella", "Euro-House", "Dance Hall"];
module.exports = ID3v1TagReader;

},{"./MediaFileReader":11,"./MediaTagReader":12}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MediaFileReader = require('./MediaFileReader');

var StringUtils = require('./StringUtils');

var ArrayFileReader = require('./ArrayFileReader');

var FRAME_DESCRIPTIONS = {
  // v2.2
  "BUF": "Recommended buffer size",
  "CNT": "Play counter",
  "COM": "Comments",
  "CRA": "Audio encryption",
  "CRM": "Encrypted meta frame",
  "ETC": "Event timing codes",
  "EQU": "Equalization",
  "GEO": "General encapsulated object",
  "IPL": "Involved people list",
  "LNK": "Linked information",
  "MCI": "Music CD Identifier",
  "MLL": "MPEG location lookup table",
  "PIC": "Attached picture",
  "POP": "Popularimeter",
  "REV": "Reverb",
  "RVA": "Relative volume adjustment",
  "SLT": "Synchronized lyric/text",
  "STC": "Synced tempo codes",
  "TAL": "Album/Movie/Show title",
  "TBP": "BPM (Beats Per Minute)",
  "TCM": "Composer",
  "TCO": "Content type",
  "TCR": "Copyright message",
  "TDA": "Date",
  "TDY": "Playlist delay",
  "TEN": "Encoded by",
  "TFT": "File type",
  "TIM": "Time",
  "TKE": "Initial key",
  "TLA": "Language(s)",
  "TLE": "Length",
  "TMT": "Media type",
  "TOA": "Original artist(s)/performer(s)",
  "TOF": "Original filename",
  "TOL": "Original Lyricist(s)/text writer(s)",
  "TOR": "Original release year",
  "TOT": "Original album/Movie/Show title",
  "TP1": "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
  "TP2": "Band/Orchestra/Accompaniment",
  "TP3": "Conductor/Performer refinement",
  "TP4": "Interpreted, remixed, or otherwise modified by",
  "TPA": "Part of a set",
  "TPB": "Publisher",
  "TRC": "ISRC (International Standard Recording Code)",
  "TRD": "Recording dates",
  "TRK": "Track number/Position in set",
  "TSI": "Size",
  "TSS": "Software/hardware and settings used for encoding",
  "TT1": "Content group description",
  "TT2": "Title/Songname/Content description",
  "TT3": "Subtitle/Description refinement",
  "TXT": "Lyricist/text writer",
  "TXX": "User defined text information frame",
  "TYE": "Year",
  "UFI": "Unique file identifier",
  "ULT": "Unsychronized lyric/text transcription",
  "WAF": "Official audio file webpage",
  "WAR": "Official artist/performer webpage",
  "WAS": "Official audio source webpage",
  "WCM": "Commercial information",
  "WCP": "Copyright/Legal information",
  "WPB": "Publishers official webpage",
  "WXX": "User defined URL link frame",
  // v2.3
  "AENC": "Audio encryption",
  "APIC": "Attached picture",
  "ASPI": "Audio seek point index",
  "CHAP": "Chapter",
  "CTOC": "Table of contents",
  "COMM": "Comments",
  "COMR": "Commercial frame",
  "ENCR": "Encryption method registration",
  "EQU2": "Equalisation (2)",
  "EQUA": "Equalization",
  "ETCO": "Event timing codes",
  "GEOB": "General encapsulated object",
  "GRID": "Group identification registration",
  "IPLS": "Involved people list",
  "LINK": "Linked information",
  "MCDI": "Music CD identifier",
  "MLLT": "MPEG location lookup table",
  "OWNE": "Ownership frame",
  "PRIV": "Private frame",
  "PCNT": "Play counter",
  "POPM": "Popularimeter",
  "POSS": "Position synchronisation frame",
  "RBUF": "Recommended buffer size",
  "RVA2": "Relative volume adjustment (2)",
  "RVAD": "Relative volume adjustment",
  "RVRB": "Reverb",
  "SEEK": "Seek frame",
  "SYLT": "Synchronized lyric/text",
  "SYTC": "Synchronized tempo codes",
  "TALB": "Album/Movie/Show title",
  "TBPM": "BPM (beats per minute)",
  "TCOM": "Composer",
  "TCON": "Content type",
  "TCOP": "Copyright message",
  "TDAT": "Date",
  "TDLY": "Playlist delay",
  "TDRC": "Recording time",
  "TDRL": "Release time",
  "TDTG": "Tagging time",
  "TENC": "Encoded by",
  "TEXT": "Lyricist/Text writer",
  "TFLT": "File type",
  "TIME": "Time",
  "TIPL": "Involved people list",
  "TIT1": "Content group description",
  "TIT2": "Title/songname/content description",
  "TIT3": "Subtitle/Description refinement",
  "TKEY": "Initial key",
  "TLAN": "Language(s)",
  "TLEN": "Length",
  "TMCL": "Musician credits list",
  "TMED": "Media type",
  "TMOO": "Mood",
  "TOAL": "Original album/movie/show title",
  "TOFN": "Original filename",
  "TOLY": "Original lyricist(s)/text writer(s)",
  "TOPE": "Original artist(s)/performer(s)",
  "TORY": "Original release year",
  "TOWN": "File owner/licensee",
  "TPE1": "Lead performer(s)/Soloist(s)",
  "TPE2": "Band/orchestra/accompaniment",
  "TPE3": "Conductor/performer refinement",
  "TPE4": "Interpreted, remixed, or otherwise modified by",
  "TPOS": "Part of a set",
  "TPRO": "Produced notice",
  "TPUB": "Publisher",
  "TRCK": "Track number/Position in set",
  "TRDA": "Recording dates",
  "TRSN": "Internet radio station name",
  "TRSO": "Internet radio station owner",
  "TSOA": "Album sort order",
  "TSOP": "Performer sort order",
  "TSOT": "Title sort order",
  "TSIZ": "Size",
  "TSRC": "ISRC (international standard recording code)",
  "TSSE": "Software/Hardware and settings used for encoding",
  "TSST": "Set subtitle",
  "TYER": "Year",
  "TXXX": "User defined text information frame",
  "UFID": "Unique file identifier",
  "USER": "Terms of use",
  "USLT": "Unsychronized lyric/text transcription",
  "WCOM": "Commercial information",
  "WCOP": "Copyright/Legal information",
  "WOAF": "Official audio file webpage",
  "WOAR": "Official artist/performer webpage",
  "WOAS": "Official audio source webpage",
  "WORS": "Official internet radio station homepage",
  "WPAY": "Payment",
  "WPUB": "Publishers official webpage",
  "WXXX": "User defined URL link frame"
};

var ID3v2FrameReader =
/*#__PURE__*/
function () {
  function ID3v2FrameReader() {
    _classCallCheck(this, ID3v2FrameReader);
  }

  _createClass(ID3v2FrameReader, null, [{
    key: "getFrameReaderFunction",
    value: function getFrameReaderFunction(frameId) {
      if (frameId in frameReaderFunctions) {
        return frameReaderFunctions[frameId];
      } else if (frameId[0] === "T") {
        // All frame ids starting with T are text tags.
        return frameReaderFunctions["T*"];
      } else if (frameId[0] === "W") {
        // All frame ids starting with W are url tags.
        return frameReaderFunctions["W*"];
      } else {
        return null;
      }
    }
    /**
     * All the frames consists of a frame header followed by one or more fields
     * containing the actual information.
     * The frame ID made out of the characters capital A-Z and 0-9. Identifiers
     * beginning with "X", "Y" and "Z" are for experimental use and free for
     * everyone to use, without the need to set the experimental bit in the tag
     * header. Have in mind that someone else might have used the same identifier
     * as you. All other identifiers are either used or reserved for future use.
     * The frame ID is followed by a size descriptor, making a total header size
     * of ten bytes in every frame. The size is calculated as frame size excluding
     * frame header (frame size - 10).
     */

  }, {
    key: "readFrames",
    value: function readFrames(offset, end, data, id3header, tags) {
      var frames = {};

      var frameHeaderSize = this._getFrameHeaderSize(id3header); // console.log('header', id3header);


      while ( // we should be able to read at least the frame header
      offset < end - frameHeaderSize) {
        var header = this._readFrameHeader(data, offset, id3header);

        var frameId = header.id; // No frame ID sometimes means it's the last frame (GTFO).

        if (!frameId) {
          break;
        }

        var flags = header.flags;
        var frameSize = header.size;
        var frameDataOffset = offset + header.headerSize;
        var frameData = data; // console.log(offset, frameId, header.size + header.headerSize, flags && flags.format.unsynchronisation);
        // advance data offset to the next frame data

        offset += header.headerSize + header.size; // skip unwanted tags

        if (tags && tags.indexOf(frameId) === -1) {
          continue;
        } // Workaround: MP3ext V3.3.17 places a non-compliant padding string at
        // the end of the ID3v2 header. A string like "MP3ext V3.3.19(ansi)"
        // is added multiple times at the end of the ID3 tag. More information
        // about this issue can be found at
        // https://github.com/aadsm/jsmediatags/issues/58#issuecomment-313865336


        if (frameId === 'MP3e' || frameId === '\x00MP3' || frameId === '\x00\x00MP' || frameId === ' MP3') {
          break;
        }

        var unsyncData;

        if (flags && flags.format.unsynchronisation) {
          frameData = this.getUnsyncFileReader(frameData, frameDataOffset, frameSize);
          frameDataOffset = 0;
          frameSize = frameData.getSize();
        } // the first 4 bytes are the real data size
        // (after unsynchronisation && encryption)


        if (flags && flags.format.data_length_indicator) {
          // var frameDataSize = frameData.getSynchsafeInteger32At(frameDataOffset);
          frameDataOffset += 4;
          frameSize -= 4;
        }

        var readFrameFunc = ID3v2FrameReader.getFrameReaderFunction(frameId);
        var parsedData = readFrameFunc ? readFrameFunc.apply(this, [frameDataOffset, frameSize, frameData, flags, id3header]) : null;

        var desc = this._getFrameDescription(frameId);

        var frame = {
          id: frameId,
          size: frameSize,
          description: desc,
          data: parsedData
        };

        if (frameId in frames) {
          if (frames[frameId].id) {
            frames[frameId] = [frames[frameId]];
          }

          frames[frameId].push(frame);
        } else {
          frames[frameId] = frame;
        }
      }

      return frames;
    }
  }, {
    key: "_getFrameHeaderSize",
    value: function _getFrameHeaderSize(id3header) {
      var major = id3header.major;

      if (major == 2) {
        return 6;
      } else if (major == 3 || major == 4) {
        return 10;
      } else {
        return 0;
      }
    }
  }, {
    key: "_readFrameHeader",
    value: function _readFrameHeader(data, offset, id3header) {
      var major = id3header.major;
      var flags = null;

      var frameHeaderSize = this._getFrameHeaderSize(id3header);

      switch (major) {
        case 2:
          var frameId = data.getStringAt(offset, 3);
          var frameSize = data.getInteger24At(offset + 3, true);
          break;

        case 3:
          var frameId = data.getStringAt(offset, 4);
          var frameSize = data.getLongAt(offset + 4, true);
          break;

        case 4:
          var frameId = data.getStringAt(offset, 4);
          var frameSize = data.getSynchsafeInteger32At(offset + 4);
          break;
      }

      if (frameId == String.fromCharCode(0, 0, 0) || frameId == String.fromCharCode(0, 0, 0, 0)) {
        frameId = "";
      } // if frameId is empty then it's the last frame


      if (frameId) {
        // read frame message and format flags
        if (major > 2) {
          flags = this._readFrameFlags(data, offset + 8);
        }
      }

      return {
        "id": frameId || "",
        "size": frameSize || 0,
        "headerSize": frameHeaderSize || 0,
        "flags": flags
      };
    }
  }, {
    key: "_readFrameFlags",
    value: function _readFrameFlags(data, offset) {
      return {
        message: {
          tag_alter_preservation: data.isBitSetAt(offset, 6),
          file_alter_preservation: data.isBitSetAt(offset, 5),
          read_only: data.isBitSetAt(offset, 4)
        },
        format: {
          grouping_identity: data.isBitSetAt(offset + 1, 7),
          compression: data.isBitSetAt(offset + 1, 3),
          encryption: data.isBitSetAt(offset + 1, 2),
          unsynchronisation: data.isBitSetAt(offset + 1, 1),
          data_length_indicator: data.isBitSetAt(offset + 1, 0)
        }
      };
    }
  }, {
    key: "_getFrameDescription",
    value: function _getFrameDescription(frameId) {
      if (frameId in FRAME_DESCRIPTIONS) {
        return FRAME_DESCRIPTIONS[frameId];
      } else {
        return 'Unknown';
      }
    }
  }, {
    key: "getUnsyncFileReader",
    value: function getUnsyncFileReader(data, offset, size) {
      var frameData = data.getBytesAt(offset, size);

      for (var i = 0; i < frameData.length - 1; i++) {
        if (frameData[i] === 0xff && frameData[i + 1] === 0x00) {
          frameData.splice(i + 1, 1);
        }
      }

      return new ArrayFileReader(frameData);
    }
  }]);

  return ID3v2FrameReader;
}();

;
var frameReaderFunctions = {};

frameReaderFunctions['APIC'] = function readPictureFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));

  switch (id3header && id3header.major) {
    case 2:
      var format = data.getStringAt(offset + 1, 3);
      offset += 4;
      break;

    case 3:
    case 4:
      var format = data.getStringWithCharsetAt(offset + 1, length - 1);
      offset += 1 + format.bytesReadCount;
      break;

    default:
      throw new Error("Couldn't read ID3v2 major version.");
  }

  var bite = data.getByteAt(offset);
  var type = PICTURE_TYPE[bite];
  var desc = data.getStringWithCharsetAt(offset + 1, length - (offset - start) - 1, charset);
  offset += 1 + desc.bytesReadCount;
  return {
    "format": format.toString(),
    "type": type,
    "description": desc.toString(),
    "data": data.getBytesAt(offset, start + length - offset)
  };
}; // ID3v2 chapters according to http://id3.org/id3v2-chapters-1.0


frameReaderFunctions['CHAP'] = function readChapterFrame(offset, length, data, flags, id3header) {
  var originalOffset = offset;
  var result = {};
  var id = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  result.id = id.toString();
  offset += id.bytesReadCount;
  result.startTime = data.getLongAt(offset, true);
  offset += 4;
  result.endTime = data.getLongAt(offset, true);
  offset += 4;
  result.startOffset = data.getLongAt(offset, true);
  offset += 4;
  result.endOffset = data.getLongAt(offset, true);
  offset += 4;
  var remainingLength = length - (offset - originalOffset);
  result.subFrames = this.readFrames(offset, offset + remainingLength, data, id3header);
  return result;
}; // ID3v2 table of contents according to http://id3.org/id3v2-chapters-1.0


frameReaderFunctions['CTOC'] = function readTableOfContentsFrame(offset, length, data, flags, id3header) {
  var originalOffset = offset;
  var result = {
    childElementIds: [],
    id: undefined,
    topLevel: undefined,
    ordered: undefined,
    entryCount: undefined,
    subFrames: undefined
  };
  var id = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  result.id = id.toString();
  offset += id.bytesReadCount;
  result.topLevel = data.isBitSetAt(offset, 1);
  result.ordered = data.isBitSetAt(offset, 0);
  offset++;
  result.entryCount = data.getByteAt(offset);
  offset++;

  for (var i = 0; i < result.entryCount; i++) {
    var childId = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length - (offset - originalOffset)));
    result.childElementIds.push(childId.toString());
    offset += childId.bytesReadCount;
  }

  var remainingLength = length - (offset - originalOffset);
  result.subFrames = this.readFrames(offset, offset + remainingLength, data, id3header);
  return result;
};

frameReaderFunctions['COMM'] = function readCommentsFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));
  var language = data.getStringAt(offset + 1, 3);
  var shortdesc = data.getStringWithCharsetAt(offset + 4, length - 4, charset);
  offset += 4 + shortdesc.bytesReadCount;
  var text = data.getStringWithCharsetAt(offset, start + length - offset, charset);
  return {
    language: language,
    short_description: shortdesc.toString(),
    text: text.toString()
  };
};

frameReaderFunctions['COM'] = frameReaderFunctions['COMM'];

frameReaderFunctions['PIC'] = function (offset, length, data, flags, id3header) {
  return frameReaderFunctions['APIC'](offset, length, data, flags, id3header);
};

frameReaderFunctions['PCNT'] = function readCounterFrame(offset, length, data, flags, id3header) {
  // FIXME: implement the rest of the spec
  return data.getLongAt(offset, false);
};

frameReaderFunctions['CNT'] = frameReaderFunctions['PCNT'];

frameReaderFunctions['T*'] = function readTextFrame(offset, length, data, flags, id3header) {
  var charset = getTextEncoding(data.getByteAt(offset));
  return data.getStringWithCharsetAt(offset + 1, length - 1, charset).toString();
};

frameReaderFunctions['TXXX'] = function readTextFrame(offset, length, data, flags, id3header) {
  var charset = getTextEncoding(data.getByteAt(offset));
  return getUserDefinedFields(offset, length, data, charset);
};

frameReaderFunctions['WXXX'] = function readUrlFrame(offset, length, data, flags, id3header) {
  if (length === 0) {
    return null;
  }

  var charset = getTextEncoding(data.getByteAt(offset));
  return getUserDefinedFields(offset, length, data, charset);
};

frameReaderFunctions['W*'] = function readUrlFrame(offset, length, data, flags, id3header) {
  if (length === 0) {
    return null;
  }

  return data.getStringWithCharsetAt(offset, length, 'iso-8859-1').toString();
};

frameReaderFunctions['TCON'] = function readGenreFrame(offset, length, data, flags) {
  var text = frameReaderFunctions['T*'].apply(this, arguments);
  return text.replace(/^\(\d+\)/, '');
};

frameReaderFunctions['TCO'] = frameReaderFunctions['TCON'];

frameReaderFunctions['USLT'] = function readLyricsFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));
  var language = data.getStringAt(offset + 1, 3);
  var descriptor = data.getStringWithCharsetAt(offset + 4, length - 4, charset);
  offset += 4 + descriptor.bytesReadCount;
  var lyrics = data.getStringWithCharsetAt(offset, start + length - offset, charset);
  return {
    language: language,
    descriptor: descriptor.toString(),
    lyrics: lyrics.toString()
  };
};

frameReaderFunctions['ULT'] = frameReaderFunctions['USLT'];

frameReaderFunctions['UFID'] = function readLyricsFrame(offset, length, data, flags, id3header) {
  var ownerIdentifier = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  offset += ownerIdentifier.bytesReadCount;
  var identifier = data.getBytesAt(offset, length - ownerIdentifier.bytesReadCount);
  return {
    ownerIdentifier: ownerIdentifier.toString(),
    identifier: identifier
  };
};

function getTextEncoding(bite) {
  var charset;

  switch (bite) {
    case 0x00:
      charset = 'iso-8859-1';
      break;

    case 0x01:
      charset = 'utf-16';
      break;

    case 0x02:
      charset = 'utf-16be';
      break;

    case 0x03:
      charset = 'utf-8';
      break;

    default:
      charset = 'iso-8859-1';
  }

  return charset;
} // Handles reading description/data from either http://id3.org/id3v2.3.0#User_defined_text_information_frame
// and http://id3.org/id3v2.3.0#User_defined_URL_link_frame


function getUserDefinedFields(offset, length, data, charset) {
  var userDesc = data.getStringWithCharsetAt(offset + 1, length - 1, charset);
  var userDefinedData = data.getStringWithCharsetAt(offset + 1 + userDesc.bytesReadCount, length - 1 - userDesc.bytesReadCount, charset);
  return {
    user_description: userDesc.toString(),
    data: userDefinedData.toString()
  };
}

var PICTURE_TYPE = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"];
module.exports = ID3v2FrameReader;

},{"./ArrayFileReader":3,"./MediaFileReader":11,"./StringUtils":13}],9:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MediaTagReader = require('./MediaTagReader');

var MediaFileReader = require('./MediaFileReader');

var ID3v2FrameReader = require('./ID3v2FrameReader');

var ID3_HEADER_SIZE = 10;

var ID3v2TagReader =
/*#__PURE__*/
function (_MediaTagReader) {
  _inherits(ID3v2TagReader, _MediaTagReader);

  function ID3v2TagReader() {
    _classCallCheck(this, ID3v2TagReader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ID3v2TagReader).apply(this, arguments));
  }

  _createClass(ID3v2TagReader, [{
    key: "_loadData",
    value: function _loadData(mediaFileReader, callbacks) {
      mediaFileReader.loadRange([6, 9], {
        onSuccess: function onSuccess() {
          mediaFileReader.loadRange( // The tag size does not include the header size.
          [0, ID3_HEADER_SIZE + mediaFileReader.getSynchsafeInteger32At(6) - 1], callbacks);
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_parseData",
    value: function _parseData(data, tags) {
      var offset = 0;
      var major = data.getByteAt(offset + 3);

      if (major > 4) {
        return {
          "type": "ID3",
          "version": ">2.4",
          "tags": {}
        };
      }

      var revision = data.getByteAt(offset + 4);
      var unsynch = data.isBitSetAt(offset + 5, 7);
      var xheader = data.isBitSetAt(offset + 5, 6);
      var xindicator = data.isBitSetAt(offset + 5, 5);
      var size = data.getSynchsafeInteger32At(offset + 6);
      offset += 10;

      if (xheader) {
        // We skip the extended header and don't offer support for it right now.
        if (major === 4) {
          var xheadersize = data.getSynchsafeInteger32At(offset);
          offset += xheadersize;
        } else {
          var xheadersize = data.getLongAt(offset, true); // The 'Extended header size', currently 6 or 10 bytes, excludes itself.

          offset += xheadersize + 4;
        }
      }

      var id3 = {
        "type": "ID3",
        "version": '2.' + major + '.' + revision,
        "major": major,
        "revision": revision,
        "flags": {
          "unsynchronisation": unsynch,
          "extended_header": xheader,
          "experimental_indicator": xindicator,
          // TODO: footer_present
          "footer_present": false
        },
        "size": size,
        "tags": {}
      };

      if (tags) {
        var expandedTags = this._expandShortcutTags(tags);
      }

      var offsetEnd = size + 10
      /*header size*/
      ; // When this flag is set the entire tag needs to be un-unsynchronised
      // before parsing each individual frame. Individual frame sizes might not
      // take unsynchronisation into consideration when it's set on the tag
      // header.

      if (id3.flags.unsynchronisation) {
        data = ID3v2FrameReader.getUnsyncFileReader(data, offset, size);
        offset = 0;
        offsetEnd = data.getSize();
      }

      var frames = ID3v2FrameReader.readFrames(offset, offsetEnd, data, id3, expandedTags); // create shortcuts for most common data.

      for (var name in SHORTCUTS) {
        if (SHORTCUTS.hasOwnProperty(name)) {
          var frameData = this._getFrameData(frames, SHORTCUTS[name]);

          if (frameData) {
            id3.tags[name] = frameData;
          }
        }
      }

      for (var frame in frames) {
        if (frames.hasOwnProperty(frame)) {
          id3.tags[frame] = frames[frame];
        }
      }

      return id3;
    }
  }, {
    key: "_getFrameData",
    value: function _getFrameData(frames, ids) {
      var frame;

      for (var i = 0, id; id = ids[i]; i++) {
        if (id in frames) {
          if (frames[id] instanceof Array) {
            frame = frames[id][0];
          } else {
            frame = frames[id];
          }

          return frame.data;
        }
      }
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return SHORTCUTS;
    }
  }], [{
    key: "getTagIdentifierByteRange",
    value: function getTagIdentifierByteRange() {
      // ID3 header
      return {
        offset: 0,
        length: ID3_HEADER_SIZE
      };
    }
  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 3));
      return id === 'ID3';
    }
  }]);

  return ID3v2TagReader;
}(MediaTagReader);

var SHORTCUTS = {
  "title": ["TIT2", "TT2"],
  "artist": ["TPE1", "TP1"],
  "album": ["TALB", "TAL"],
  "year": ["TYER", "TYE"],
  "comment": ["COMM", "COM"],
  "track": ["TRCK", "TRK"],
  "genre": ["TCON", "TCO"],
  "picture": ["APIC", "PIC"],
  "lyrics": ["USLT", "ULT"]
};
module.exports = ID3v2TagReader;

},{"./ID3v2FrameReader":8,"./MediaFileReader":11,"./MediaTagReader":12}],10:[function(require,module,exports){
/**
 * Support for iTunes-style m4a tags
 * See:
 *   http://atomicparsley.sourceforge.net/mpeg-4files.html
 *   http://developer.apple.com/mac/library/documentation/QuickTime/QTFF/Metadata/Metadata.html
 * Authored by Joshua Kifer <joshua.kifer gmail.com>
 * 
 */
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MediaTagReader = require('./MediaTagReader');

var MediaFileReader = require('./MediaFileReader');

var MP4TagReader =
/*#__PURE__*/
function (_MediaTagReader) {
  _inherits(MP4TagReader, _MediaTagReader);

  function MP4TagReader() {
    _classCallCheck(this, MP4TagReader);

    return _possibleConstructorReturn(this, _getPrototypeOf(MP4TagReader).apply(this, arguments));
  }

  _createClass(MP4TagReader, [{
    key: "_loadData",
    value: function _loadData(mediaFileReader, callbacks) {
      // MP4 metadata isn't located in a specific location of the file. Roughly
      // speaking, it's composed of blocks chained together like a linked list.
      // These blocks are called atoms (or boxes).
      // Each atom of the list can have its own child linked list. Atoms in this
      // situation do not possess any data and are called "container" as they only
      // contain other atoms.
      // Other atoms represent a particular set of data, like audio, video or
      // metadata. In order to find and load all the interesting atoms we need
      // to traverse the entire linked list of atoms and only load the ones
      // associated with metadata.
      // The metadata atoms can be find under the "moov.udta.meta.ilst" hierarchy.
      var self = this; // Load the header of the first atom

      mediaFileReader.loadRange([0, 16], {
        onSuccess: function onSuccess() {
          self._loadAtom(mediaFileReader, 0, "", callbacks);
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_loadAtom",
    value: function _loadAtom(mediaFileReader, offset, parentAtomFullName, callbacks) {
      if (offset >= mediaFileReader.getSize()) {
        callbacks.onSuccess();
        return;
      }

      var self = this; // 8 is the size of the atomSize and atomName fields.
      // When reading the current block we always read 8 more bytes in order
      // to also read the header of the next block.

      var atomSize = mediaFileReader.getLongAt(offset, true);

      if (atomSize == 0 || isNaN(atomSize)) {
        callbacks.onSuccess();
        return;
      }

      var atomName = mediaFileReader.getStringAt(offset + 4, 4); // console.log(parentAtomFullName, atomName, atomSize);
      // Container atoms (no actual data)

      if (this._isContainerAtom(atomName)) {
        if (atomName == "meta") {
          // The "meta" atom breaks convention and is a container with data.
          offset += 4; // next_item_id (uint32)
        }

        var atomFullName = (parentAtomFullName ? parentAtomFullName + "." : "") + atomName;

        if (atomFullName === "moov.udta.meta.ilst") {
          mediaFileReader.loadRange([offset, offset + atomSize], callbacks);
        } else {
          mediaFileReader.loadRange([offset + 8, offset + 8 + 8], {
            onSuccess: function onSuccess() {
              self._loadAtom(mediaFileReader, offset + 8, atomFullName, callbacks);
            },
            onError: callbacks.onError
          });
        }
      } else {
        mediaFileReader.loadRange([offset + atomSize, offset + atomSize + 8], {
          onSuccess: function onSuccess() {
            self._loadAtom(mediaFileReader, offset + atomSize, parentAtomFullName, callbacks);
          },
          onError: callbacks.onError
        });
      }
    }
  }, {
    key: "_isContainerAtom",
    value: function _isContainerAtom(atomName) {
      return ["moov", "udta", "meta", "ilst"].indexOf(atomName) >= 0;
    }
  }, {
    key: "_canReadAtom",
    value: function _canReadAtom(atomName) {
      return atomName !== "----";
    }
  }, {
    key: "_parseData",
    value: function _parseData(data, tagsToRead) {
      var tags = {};
      tagsToRead = this._expandShortcutTags(tagsToRead);

      this._readAtom(tags, data, 0, data.getSize(), tagsToRead); // create shortcuts for most common data.


      for (var name in SHORTCUTS) {
        if (SHORTCUTS.hasOwnProperty(name)) {
          var tag = tags[SHORTCUTS[name]];

          if (tag) {
            if (name === "track") {
              tags[name] = tag.data.track;
            } else {
              tags[name] = tag.data;
            }
          }
        }
      }

      return {
        "type": "MP4",
        "ftyp": data.getStringAt(8, 4),
        "version": data.getLongAt(12, true),
        "tags": tags
      };
    }
  }, {
    key: "_readAtom",
    value: function _readAtom(tags, data, offset, length, tagsToRead, parentAtomFullName, indent) {
      indent = indent === undefined ? "" : indent + "  ";
      var seek = offset;

      while (seek < offset + length) {
        var atomSize = data.getLongAt(seek, true);

        if (atomSize == 0) {
          return;
        }

        var atomName = data.getStringAt(seek + 4, 4); // console.log(seek, parentAtomFullName, atomName, atomSize);

        if (this._isContainerAtom(atomName)) {
          if (atomName == "meta") {
            seek += 4; // next_item_id (uint32)
          }

          var atomFullName = (parentAtomFullName ? parentAtomFullName + "." : "") + atomName;

          this._readAtom(tags, data, seek + 8, atomSize - 8, tagsToRead, atomFullName, indent);

          return;
        } // Value atoms


        if ((!tagsToRead || tagsToRead.indexOf(atomName) >= 0) && parentAtomFullName === "moov.udta.meta.ilst" && this._canReadAtom(atomName)) {
          tags[atomName] = this._readMetadataAtom(data, seek);
        }

        seek += atomSize;
      }
    }
  }, {
    key: "_readMetadataAtom",
    value: function _readMetadataAtom(data, offset) {
      // 16: name + size + "data" + size (4 bytes each)
      var METADATA_HEADER = 16;
      var atomSize = data.getLongAt(offset, true);
      var atomName = data.getStringAt(offset + 4, 4);
      var klass = data.getInteger24At(offset + METADATA_HEADER + 1, true);
      var type = TYPES[klass];
      var atomData;

      if (atomName == "trkn") {
        atomData = {
          "track": data.getByteAt(offset + METADATA_HEADER + 11),
          "total": data.getByteAt(offset + METADATA_HEADER + 13)
        };
      } else if (atomName == "disk") {
        atomData = {
          "disk": data.getByteAt(offset + METADATA_HEADER + 11),
          "total": data.getByteAt(offset + METADATA_HEADER + 13)
        };
      } else {
        // 4: atom version (1 byte) + atom flags (3 bytes)
        // 4: NULL (usually locale indicator)
        var atomHeader = METADATA_HEADER + 4 + 4;
        var dataStart = offset + atomHeader;
        var dataLength = atomSize - atomHeader;
        var atomData; // Workaround for covers being parsed as 'uint8' type despite being an 'covr' atom

        if (atomName === 'covr' && type === 'uint8') {
          type = 'jpeg';
        }

        switch (type) {
          case "text":
            atomData = data.getStringWithCharsetAt(dataStart, dataLength, "utf-8").toString();
            break;

          case "uint8":
            atomData = data.getShortAt(dataStart, false);
            break;

          case "int":
          case "uint":
            // Though the QuickTime spec doesn't state it, there are 64-bit values
            // such as plID (Playlist/Collection ID). With its single 64-bit floating
            // point number type, these are hard to parse and pass in JavaScript.
            // The high word of plID seems to always be zero, so, as this is the
            // only current 64-bit atom handled, it is parsed from its 32-bit
            // low word as an unsigned long.
            //
            var intReader = type == 'int' ? dataLength == 1 ? data.getSByteAt : dataLength == 2 ? data.getSShortAt : dataLength == 4 ? data.getSLongAt : data.getLongAt : dataLength == 1 ? data.getByteAt : dataLength == 2 ? data.getShortAt : data.getLongAt; // $FlowFixMe - getByteAt doesn't receive a second argument

            atomData = intReader.call(data, dataStart + (dataLength == 8 ? 4 : 0), true);
            break;

          case "jpeg":
          case "png":
            atomData = {
              "format": "image/" + type,
              "data": data.getBytesAt(dataStart, dataLength)
            };
            break;
        }
      }

      return {
        id: atomName,
        size: atomSize,
        description: ATOM_DESCRIPTIONS[atomName] || "Unknown",
        data: atomData
      };
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return SHORTCUTS;
    }
  }], [{
    key: "getTagIdentifierByteRange",
    value: function getTagIdentifierByteRange() {
      // The tag identifier is located in [4, 8] but since we'll need to reader
      // the header of the first block anyway, we load it instead to avoid
      // making two requests.
      return {
        offset: 0,
        length: 16
      };
    }
  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(4, 8));
      return id === "ftyp";
    }
  }]);

  return MP4TagReader;
}(MediaTagReader);
/*
 * https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW35
*/


var TYPES = {
  "0": "uint8",
  "1": "text",
  "13": "jpeg",
  "14": "png",
  "21": "int",
  "22": "uint"
};
var ATOM_DESCRIPTIONS = {
  "©alb": "Album",
  "©ART": "Artist",
  "aART": "Album Artist",
  "©day": "Release Date",
  "©nam": "Title",
  "©gen": "Genre",
  "gnre": "Genre",
  "trkn": "Track Number",
  "©wrt": "Composer",
  "©too": "Encoding Tool",
  "©enc": "Encoded By",
  "cprt": "Copyright",
  "covr": "Cover Art",
  "©grp": "Grouping",
  "keyw": "Keywords",
  "©lyr": "Lyrics",
  "©cmt": "Comment",
  "tmpo": "Tempo",
  "cpil": "Compilation",
  "disk": "Disc Number",
  "tvsh": "TV Show Name",
  "tven": "TV Episode ID",
  "tvsn": "TV Season",
  "tves": "TV Episode",
  "tvnn": "TV Network",
  "desc": "Description",
  "ldes": "Long Description",
  "sonm": "Sort Name",
  "soar": "Sort Artist",
  "soaa": "Sort Album",
  "soco": "Sort Composer",
  "sosn": "Sort Show",
  "purd": "Purchase Date",
  "pcst": "Podcast",
  "purl": "Podcast URL",
  "catg": "Category",
  "hdvd": "HD Video",
  "stik": "Media Type",
  "rtng": "Content Rating",
  "pgap": "Gapless Playback",
  "apID": "Purchase Account",
  "sfID": "Country Code",
  "atID": "Artist ID",
  "cnID": "Catalog ID",
  "plID": "Collection ID",
  "geID": "Genre ID",
  "xid ": "Vendor Information",
  "flvr": "Codec Flavor"
};
var UNSUPPORTED_ATOMS = {
  "----": 1
};
var SHORTCUTS = {
  "title": "©nam",
  "artist": "©ART",
  "album": "©alb",
  "year": "©day",
  "comment": "©cmt",
  "track": "trkn",
  "genre": "©gen",
  "picture": "covr",
  "lyrics": "©lyr"
};
module.exports = MP4TagReader;

},{"./MediaFileReader":11,"./MediaTagReader":12}],11:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StringUtils = require('./StringUtils');

var MediaFileReader =
/*#__PURE__*/
function () {
  function MediaFileReader(path) {
    _classCallCheck(this, MediaFileReader);

    _defineProperty(this, "_isInitialized", void 0);

    _defineProperty(this, "_size", void 0);

    this._isInitialized = false;
    this._size = 0;
  }
  /**
   * Decides if this media file reader is able to read the given file.
   */


  _createClass(MediaFileReader, [{
    key: "init",

    /**
     * This function needs to be called before any other function.
     * Loads the necessary initial information from the file.
     */
    value: function init(callbacks) {
      var self = this;

      if (this._isInitialized) {
        setTimeout(callbacks.onSuccess, 1);
      } else {
        return this._init({
          onSuccess: function onSuccess() {
            self._isInitialized = true;
            callbacks.onSuccess();
          },
          onError: callbacks.onError
        });
      }
    }
  }, {
    key: "_init",
    value: function _init(callbacks) {
      throw new Error("Must implement init function");
    }
    /**
     * @param range The start and end indexes of the range to load.
     *        Ex: [0, 7] load bytes 0 to 7 inclusive.
     */

  }, {
    key: "loadRange",
    value: function loadRange(range, callbacks) {
      throw new Error("Must implement loadRange function");
    }
    /**
     * @return The size of the file in bytes.
     */

  }, {
    key: "getSize",
    value: function getSize() {
      if (!this._isInitialized) {
        throw new Error("init() must be called first.");
      }

      return this._size;
    }
  }, {
    key: "getByteAt",
    value: function getByteAt(offset) {
      throw new Error("Must implement getByteAt function");
    }
  }, {
    key: "getBytesAt",
    value: function getBytesAt(offset, length) {
      var bytes = new Array(length);

      for (var i = 0; i < length; i++) {
        bytes[i] = this.getByteAt(offset + i);
      }

      return bytes;
    }
  }, {
    key: "isBitSetAt",
    value: function isBitSetAt(offset, bit) {
      var iByte = this.getByteAt(offset);
      return (iByte & 1 << bit) != 0;
    }
  }, {
    key: "getSByteAt",
    value: function getSByteAt(offset) {
      var iByte = this.getByteAt(offset);

      if (iByte > 127) {
        return iByte - 256;
      } else {
        return iByte;
      }
    }
  }, {
    key: "getShortAt",
    value: function getShortAt(offset, isBigEndian) {
      var iShort = isBigEndian ? (this.getByteAt(offset) << 8) + this.getByteAt(offset + 1) : (this.getByteAt(offset + 1) << 8) + this.getByteAt(offset);

      if (iShort < 0) {
        iShort += 65536;
      }

      return iShort;
    }
  }, {
    key: "getSShortAt",
    value: function getSShortAt(offset, isBigEndian) {
      var iUShort = this.getShortAt(offset, isBigEndian);

      if (iUShort > 32767) {
        return iUShort - 65536;
      } else {
        return iUShort;
      }
    }
  }, {
    key: "getLongAt",
    value: function getLongAt(offset, isBigEndian) {
      var iByte1 = this.getByteAt(offset),
          iByte2 = this.getByteAt(offset + 1),
          iByte3 = this.getByteAt(offset + 2),
          iByte4 = this.getByteAt(offset + 3);
      var iLong = isBigEndian ? (((iByte1 << 8) + iByte2 << 8) + iByte3 << 8) + iByte4 : (((iByte4 << 8) + iByte3 << 8) + iByte2 << 8) + iByte1;

      if (iLong < 0) {
        iLong += 4294967296;
      }

      return iLong;
    }
  }, {
    key: "getSLongAt",
    value: function getSLongAt(offset, isBigEndian) {
      var iULong = this.getLongAt(offset, isBigEndian);

      if (iULong > 2147483647) {
        return iULong - 4294967296;
      } else {
        return iULong;
      }
    }
  }, {
    key: "getInteger24At",
    value: function getInteger24At(offset, isBigEndian) {
      var iByte1 = this.getByteAt(offset),
          iByte2 = this.getByteAt(offset + 1),
          iByte3 = this.getByteAt(offset + 2);
      var iInteger = isBigEndian ? ((iByte1 << 8) + iByte2 << 8) + iByte3 : ((iByte3 << 8) + iByte2 << 8) + iByte1;

      if (iInteger < 0) {
        iInteger += 16777216;
      }

      return iInteger;
    }
  }, {
    key: "getStringAt",
    value: function getStringAt(offset, length) {
      var string = [];

      for (var i = offset, j = 0; i < offset + length; i++, j++) {
        string[j] = String.fromCharCode(this.getByteAt(i));
      }

      return string.join("");
    }
  }, {
    key: "getStringWithCharsetAt",
    value: function getStringWithCharsetAt(offset, length, charset) {
      var bytes = this.getBytesAt(offset, length);
      var string;

      switch ((charset || '').toLowerCase()) {
        case "utf-16":
        case "utf-16le":
        case "utf-16be":
          string = StringUtils.readUTF16String(bytes, charset === "utf-16be");
          break;

        case "utf-8":
          string = StringUtils.readUTF8String(bytes);
          break;

        default:
          string = StringUtils.readNullTerminatedString(bytes);
          break;
      }

      return string;
    }
  }, {
    key: "getCharAt",
    value: function getCharAt(offset) {
      return String.fromCharCode(this.getByteAt(offset));
    }
    /**
     * The ID3v2 tag/frame size is encoded with four bytes where the most
     * significant bit (bit 7) is set to zero in every byte, making a total of 28
     * bits. The zeroed bits are ignored, so a 257 bytes long tag is represented
     * as $00 00 02 01.
     */

  }, {
    key: "getSynchsafeInteger32At",
    value: function getSynchsafeInteger32At(offset) {
      var size1 = this.getByteAt(offset);
      var size2 = this.getByteAt(offset + 1);
      var size3 = this.getByteAt(offset + 2);
      var size4 = this.getByteAt(offset + 3); // 0x7f = 0b01111111

      var size = size4 & 0x7f | (size3 & 0x7f) << 7 | (size2 & 0x7f) << 14 | (size1 & 0x7f) << 21;
      return size;
    }
  }], [{
    key: "canReadFile",
    value: function canReadFile(file) {
      throw new Error("Must implement canReadFile function");
    }
  }]);

  return MediaFileReader;
}();

module.exports = MediaFileReader;

},{"./StringUtils":13}],12:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MediaFileReader = require('./MediaFileReader');

var MediaTagReader =
/*#__PURE__*/
function () {
  function MediaTagReader(mediaFileReader) {
    _classCallCheck(this, MediaTagReader);

    _defineProperty(this, "_mediaFileReader", void 0);

    _defineProperty(this, "_tags", void 0);

    this._mediaFileReader = mediaFileReader;
    this._tags = null;
  }
  /**
   * Returns the byte range that needs to be loaded and fed to
   * _canReadTagFormat in order to identify if the file contains tag
   * information that can be read.
   */


  _createClass(MediaTagReader, [{
    key: "setTagsToRead",
    value: function setTagsToRead(tags) {
      this._tags = tags;
      return this;
    }
  }, {
    key: "read",
    value: function read(callbacks) {
      var self = this;

      this._mediaFileReader.init({
        onSuccess: function onSuccess() {
          self._loadData(self._mediaFileReader, {
            onSuccess: function onSuccess() {
              try {
                var tags = self._parseData(self._mediaFileReader, self._tags);
              } catch (ex) {
                if (callbacks.onError) {
                  callbacks.onError({
                    "type": "parseData",
                    "info": ex.message
                  });
                  return;
                }
              } // TODO: destroy mediaFileReader


              callbacks.onSuccess(tags);
            },
            onError: callbacks.onError
          });
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return {};
    }
    /**
     * Load the necessary bytes from the media file.
     */

  }, {
    key: "_loadData",
    value: function _loadData(mediaFileReader, callbacks) {
      throw new Error("Must implement _loadData function");
    }
    /**
     * Parse the loaded data to read the media tags.
     */

  }, {
    key: "_parseData",
    value: function _parseData(mediaFileReader, tags) {
      throw new Error("Must implement _parseData function");
    }
  }, {
    key: "_expandShortcutTags",
    value: function _expandShortcutTags(tagsWithShortcuts) {
      if (!tagsWithShortcuts) {
        return null;
      }

      var tags = [];
      var shortcuts = this.getShortcuts();

      for (var i = 0, tagOrShortcut; tagOrShortcut = tagsWithShortcuts[i]; i++) {
        tags = tags.concat(shortcuts[tagOrShortcut] || [tagOrShortcut]);
      }

      return tags;
    }
  }], [{
    key: "getTagIdentifierByteRange",
    value: function getTagIdentifierByteRange() {
      throw new Error("Must implement");
    }
    /**
     * Given a tag identifier (read from the file byte positions speficied by
     * getTagIdentifierByteRange) this function checks if it can read the tag
     * format or not.
     */

  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      throw new Error("Must implement");
    }
  }]);

  return MediaTagReader;
}();

module.exports = MediaTagReader;

},{"./MediaFileReader":11}],13:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InternalDecodedString =
/*#__PURE__*/
function () {
  function InternalDecodedString(value, bytesReadCount) {
    _classCallCheck(this, InternalDecodedString);

    _defineProperty(this, "_value", void 0);

    _defineProperty(this, "bytesReadCount", void 0);

    _defineProperty(this, "length", void 0);

    this._value = value;
    this.bytesReadCount = bytesReadCount;
    this.length = value.length;
  }

  _createClass(InternalDecodedString, [{
    key: "toString",
    value: function toString() {
      return this._value;
    }
  }]);

  return InternalDecodedString;
}();

var StringUtils = {
  readUTF16String: function readUTF16String(bytes, bigEndian, maxBytes) {
    var ix = 0;
    var offset1 = 1,
        offset2 = 0;
    maxBytes = Math.min(maxBytes || bytes.length, bytes.length);

    if (bytes[0] == 0xFE && bytes[1] == 0xFF) {
      bigEndian = true;
      ix = 2;
    } else if (bytes[0] == 0xFF && bytes[1] == 0xFE) {
      bigEndian = false;
      ix = 2;
    }

    if (bigEndian) {
      offset1 = 0;
      offset2 = 1;
    }

    var arr = [];

    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix + offset1];
      var byte2 = bytes[ix + offset2];
      var word1 = (byte1 << 8) + byte2;
      ix += 2;

      if (word1 == 0x0000) {
        break;
      } else if (byte1 < 0xD8 || byte1 >= 0xE0) {
        arr[j] = String.fromCharCode(word1);
      } else {
        var byte3 = bytes[ix + offset1];
        var byte4 = bytes[ix + offset2];
        var word2 = (byte3 << 8) + byte4;
        ix += 2;
        arr[j] = String.fromCharCode(word1, word2);
      }
    }

    return new InternalDecodedString(arr.join(""), ix);
  },
  readUTF8String: function readUTF8String(bytes, maxBytes) {
    var ix = 0;
    maxBytes = Math.min(maxBytes || bytes.length, bytes.length);

    if (bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF) {
      ix = 3;
    }

    var arr = [];

    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix++];

      if (byte1 == 0x00) {
        break;
      } else if (byte1 < 0x80) {
        arr[j] = String.fromCharCode(byte1);
      } else if (byte1 >= 0xC2 && byte1 < 0xE0) {
        var byte2 = bytes[ix++];
        arr[j] = String.fromCharCode(((byte1 & 0x1F) << 6) + (byte2 & 0x3F));
      } else if (byte1 >= 0xE0 && byte1 < 0xF0) {
        var byte2 = bytes[ix++];
        var byte3 = bytes[ix++];
        arr[j] = String.fromCharCode(((byte1 & 0xFF) << 12) + ((byte2 & 0x3F) << 6) + (byte3 & 0x3F));
      } else if (byte1 >= 0xF0 && byte1 < 0xF5) {
        var byte2 = bytes[ix++];
        var byte3 = bytes[ix++];
        var byte4 = bytes[ix++];
        var codepoint = ((byte1 & 0x07) << 18) + ((byte2 & 0x3F) << 12) + ((byte3 & 0x3F) << 6) + (byte4 & 0x3F) - 0x10000;
        arr[j] = String.fromCharCode((codepoint >> 10) + 0xD800, (codepoint & 0x3FF) + 0xDC00);
      }
    }

    return new InternalDecodedString(arr.join(""), ix);
  },
  readNullTerminatedString: function readNullTerminatedString(bytes, maxBytes) {
    var arr = [];
    maxBytes = maxBytes || bytes.length;

    for (var i = 0; i < maxBytes;) {
      var byte1 = bytes[i++];

      if (byte1 == 0x00) {
        break;
      }

      arr[i - 1] = String.fromCharCode(byte1);
    }

    return new InternalDecodedString(arr.join(""), i);
  }
};
module.exports = StringUtils;

},{}],14:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChunkedFileData = require('./ChunkedFileData');

var MediaFileReader = require('./MediaFileReader');

var CHUNK_SIZE = 1024;

var XhrFileReader =
/*#__PURE__*/
function (_MediaFileReader) {
  _inherits(XhrFileReader, _MediaFileReader);

  function XhrFileReader(url) {
    var _this;

    _classCallCheck(this, XhrFileReader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(XhrFileReader).call(this));

    _defineProperty(_assertThisInitialized(_this), "_url", void 0);

    _defineProperty(_assertThisInitialized(_this), "_fileData", void 0);

    _this._url = url;
    _this._fileData = new ChunkedFileData();
    return _this;
  }

  _createClass(XhrFileReader, [{
    key: "_init",
    value: function _init(callbacks) {
      if (XhrFileReader._config.avoidHeadRequests) {
        this._fetchSizeWithGetRequest(callbacks);
      } else {
        this._fetchSizeWithHeadRequest(callbacks);
      }
    }
  }, {
    key: "_fetchSizeWithHeadRequest",
    value: function _fetchSizeWithHeadRequest(callbacks) {
      var self = this;

      this._makeXHRRequest("HEAD", null, {
        onSuccess: function onSuccess(xhr) {
          var contentLength = self._parseContentLength(xhr);

          if (contentLength) {
            self._size = contentLength;
            callbacks.onSuccess();
          } else {
            // Content-Length not provided by the server, fallback to
            // GET requests.
            self._fetchSizeWithGetRequest(callbacks);
          }
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_fetchSizeWithGetRequest",
    value: function _fetchSizeWithGetRequest(callbacks) {
      var self = this;

      var range = this._roundRangeToChunkMultiple([0, 0]);

      this._makeXHRRequest("GET", range, {
        onSuccess: function onSuccess(xhr) {
          var contentRange = self._parseContentRange(xhr);

          var data = self._getXhrResponseContent(xhr);

          if (contentRange) {
            if (contentRange.instanceLength == null) {
              // Last resort, server is not able to tell us the content length,
              // need to fetch entire file then.
              self._fetchEntireFile(callbacks);

              return;
            }

            self._size = contentRange.instanceLength;
          } else {
            // Range request not supported, we got the entire file
            self._size = data.length;
          }

          self._fileData.addData(0, data);

          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_fetchEntireFile",
    value: function _fetchEntireFile(callbacks) {
      var self = this;

      this._makeXHRRequest("GET", null, {
        onSuccess: function onSuccess(xhr) {
          var data = self._getXhrResponseContent(xhr);

          self._size = data.length;

          self._fileData.addData(0, data);

          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_getXhrResponseContent",
    value: function _getXhrResponseContent(xhr) {
      return xhr.responseBody || xhr.responseText || "";
    }
  }, {
    key: "_parseContentLength",
    value: function _parseContentLength(xhr) {
      var contentLength = this._getResponseHeader(xhr, "Content-Length");

      if (contentLength == null) {
        return contentLength;
      } else {
        return parseInt(contentLength, 10);
      }
    }
  }, {
    key: "_parseContentRange",
    value: function _parseContentRange(xhr) {
      var contentRange = this._getResponseHeader(xhr, "Content-Range");

      if (contentRange) {
        var parsedContentRange = contentRange.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);

        if (!parsedContentRange) {
          throw new Error("FIXME: Unknown Content-Range syntax: " + contentRange);
        }

        return {
          firstBytePosition: parseInt(parsedContentRange[1], 10),
          lastBytePosition: parseInt(parsedContentRange[2], 10),
          instanceLength: parsedContentRange[3] ? parseInt(parsedContentRange[3], 10) : null
        };
      } else {
        return null;
      }
    }
  }, {
    key: "loadRange",
    value: function loadRange(range, callbacks) {
      var self = this;

      if (self._fileData.hasDataRange(range[0], Math.min(self._size, range[1]))) {
        setTimeout(callbacks.onSuccess, 1);
        return;
      } // Always download in multiples of CHUNK_SIZE. If we're going to make a
      // request might as well get a chunk that makes sense. The big cost is
      // establishing the connection so getting 10bytes or 1K doesn't really
      // make a difference.


      range = this._roundRangeToChunkMultiple(range); // Upper range should not be greater than max file size

      range[1] = Math.min(self._size, range[1]);

      this._makeXHRRequest("GET", range, {
        onSuccess: function onSuccess(xhr) {
          var data = self._getXhrResponseContent(xhr);

          self._fileData.addData(range[0], data);

          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_roundRangeToChunkMultiple",
    value: function _roundRangeToChunkMultiple(range) {
      var length = range[1] - range[0] + 1;
      var newLength = Math.ceil(length / CHUNK_SIZE) * CHUNK_SIZE;
      return [range[0], range[0] + newLength - 1];
    }
  }, {
    key: "_makeXHRRequest",
    value: function _makeXHRRequest(method, range, callbacks) {
      var xhr = this._createXHRObject();

      xhr.open(method, this._url);

      var onXHRLoad = function onXHRLoad() {
        // 200 - OK
        // 206 - Partial Content
        // $FlowIssue - xhr will not be null here
        if (xhr.status === 200 || xhr.status === 206) {
          callbacks.onSuccess(xhr);
        } else if (callbacks.onError) {
          callbacks.onError({
            "type": "xhr",
            "info": "Unexpected HTTP status " + xhr.status + ".",
            "xhr": xhr
          });
        }

        xhr = null;
      };

      if (typeof xhr.onload !== 'undefined') {
        xhr.onload = onXHRLoad;

        xhr.onerror = function () {
          if (callbacks.onError) {
            callbacks.onError({
              "type": "xhr",
              "info": "Generic XHR error, check xhr object.",
              "xhr": xhr
            });
          }
        };
      } else {
        xhr.onreadystatechange = function () {
          // $FlowIssue - xhr will not be null here
          if (xhr.readyState === 4) {
            onXHRLoad();
          }
        };
      }

      if (XhrFileReader._config.timeoutInSec) {
        xhr.timeout = XhrFileReader._config.timeoutInSec * 1000;

        xhr.ontimeout = function () {
          if (callbacks.onError) {
            callbacks.onError({
              "type": "xhr",
              // $FlowIssue - xhr.timeout will not be null
              "info": "Timeout after " + xhr.timeout / 1000 + "s. Use jsmediatags.Config.setXhrTimeout to override.",
              "xhr": xhr
            });
          }
        };
      }

      xhr.overrideMimeType("text/plain; charset=x-user-defined");

      if (range) {
        this._setRequestHeader(xhr, "Range", "bytes=" + range[0] + "-" + range[1]);
      }

      this._setRequestHeader(xhr, "If-Modified-Since", "Sat, 01 Jan 1970 00:00:00 GMT");

      xhr.send(null);
    }
  }, {
    key: "_setRequestHeader",
    value: function _setRequestHeader(xhr, headerName, headerValue) {
      if (XhrFileReader._config.disallowedXhrHeaders.indexOf(headerName.toLowerCase()) < 0) {
        xhr.setRequestHeader(headerName, headerValue);
      }
    }
  }, {
    key: "_hasResponseHeader",
    value: function _hasResponseHeader(xhr, headerName) {
      var allResponseHeaders = xhr.getAllResponseHeaders();

      if (!allResponseHeaders) {
        return false;
      }

      var headers = allResponseHeaders.split("\r\n");
      var headerNames = [];

      for (var i = 0; i < headers.length; i++) {
        headerNames[i] = headers[i].split(":")[0].toLowerCase();
      }

      return headerNames.indexOf(headerName.toLowerCase()) >= 0;
    }
  }, {
    key: "_getResponseHeader",
    value: function _getResponseHeader(xhr, headerName) {
      if (!this._hasResponseHeader(xhr, headerName)) {
        return null;
      }

      return xhr.getResponseHeader(headerName);
    }
  }, {
    key: "getByteAt",
    value: function getByteAt(offset) {
      var character = this._fileData.getByteAt(offset);

      return character.charCodeAt(0) & 0xff;
    }
  }, {
    key: "_isWebWorker",
    value: function _isWebWorker() {
      return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    }
  }, {
    key: "_createXHRObject",
    value: function _createXHRObject() {
      if (typeof window === "undefined" && !this._isWebWorker()) {
        // $FlowIssue - flow is not able to recognize this module.
        return new (require("xhr2").XMLHttpRequest)();
      }

      if (typeof XMLHttpRequest !== "undefined") {
        return new XMLHttpRequest();
      }

      throw new Error("XMLHttpRequest is not supported");
    }
  }], [{
    key: "canReadFile",
    value: function canReadFile(file) {
      return typeof file === 'string' && /^[a-z]+:\/\//i.test(file);
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      for (var key in config) {
        if (config.hasOwnProperty(key)) {
          this._config[key] = config[key];
        }
      }

      var disallowedXhrHeaders = this._config.disallowedXhrHeaders;

      for (var i = 0; i < disallowedXhrHeaders.length; i++) {
        disallowedXhrHeaders[i] = disallowedXhrHeaders[i].toLowerCase();
      }
    }
  }]);

  return XhrFileReader;
}(MediaFileReader);

_defineProperty(XhrFileReader, "_config", void 0);

XhrFileReader._config = {
  avoidHeadRequests: false,
  disallowedXhrHeaders: [],
  timeoutInSec: 30
};
module.exports = XhrFileReader;

},{"./ChunkedFileData":5,"./MediaFileReader":11,"xhr2":2}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MediaFileReader = require("./MediaFileReader");

var XhrFileReader = require("./XhrFileReader");

var BlobFileReader = require("./BlobFileReader");

var ArrayFileReader = require("./ArrayFileReader");

var MediaTagReader = require("./MediaTagReader");

var ID3v1TagReader = require("./ID3v1TagReader");

var ID3v2TagReader = require("./ID3v2TagReader");

var MP4TagReader = require("./MP4TagReader");

var FLACTagReader = require("./FLACTagReader");

var mediaFileReaders = [];
var mediaTagReaders = [];

function read(location, callbacks) {
  new Reader(location).read(callbacks);
}

function isRangeValid(range, fileSize) {
  var invalidPositiveRange = range.offset >= 0 && range.offset + range.length >= fileSize;
  var invalidNegativeRange = range.offset < 0 && (-range.offset > fileSize || range.offset + range.length > 0);
  return !(invalidPositiveRange || invalidNegativeRange);
}

var Reader =
/*#__PURE__*/
function () {
  function Reader(file) {
    _classCallCheck(this, Reader);

    _defineProperty(this, "_file", void 0);

    _defineProperty(this, "_tagsToRead", void 0);

    _defineProperty(this, "_fileReader", void 0);

    _defineProperty(this, "_tagReader", void 0);

    this._file = file;
  }

  _createClass(Reader, [{
    key: "setTagsToRead",
    value: function setTagsToRead(tagsToRead) {
      this._tagsToRead = tagsToRead;
      return this;
    }
  }, {
    key: "setFileReader",
    value: function setFileReader(fileReader) {
      this._fileReader = fileReader;
      return this;
    }
  }, {
    key: "setTagReader",
    value: function setTagReader(tagReader) {
      this._tagReader = tagReader;
      return this;
    }
  }, {
    key: "read",
    value: function read(callbacks) {
      var FileReader = this._getFileReader();

      var fileReader = new FileReader(this._file);
      var self = this;
      fileReader.init({
        onSuccess: function onSuccess() {
          self._getTagReader(fileReader, {
            onSuccess: function onSuccess(TagReader) {
              new TagReader(fileReader).setTagsToRead(self._tagsToRead).read(callbacks);
            },
            onError: callbacks.onError
          });
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_getFileReader",
    value: function _getFileReader() {
      if (this._fileReader) {
        return this._fileReader;
      } else {
        return this._findFileReader();
      }
    }
  }, {
    key: "_findFileReader",
    value: function _findFileReader() {
      for (var i = 0; i < mediaFileReaders.length; i++) {
        if (mediaFileReaders[i].canReadFile(this._file)) {
          return mediaFileReaders[i];
        }
      }

      throw new Error("No suitable file reader found for " + this._file);
    }
  }, {
    key: "_getTagReader",
    value: function _getTagReader(fileReader, callbacks) {
      if (this._tagReader) {
        var tagReader = this._tagReader;
        setTimeout(function () {
          callbacks.onSuccess(tagReader);
        }, 1);
      } else {
        this._findTagReader(fileReader, callbacks);
      }
    }
  }, {
    key: "_findTagReader",
    value: function _findTagReader(fileReader, callbacks) {
      // We don't want to make multiple fetches per tag reader to get the tag
      // identifier. The strategy here is to combine all the tag identifier
      // ranges into one and make a single fetch. This is particularly important
      // in file readers that have expensive loads like the XHR one.
      // However, with this strategy we run into the problem of loading the
      // entire file because tag identifiers might be at the start or end of
      // the file.
      // To get around this we divide the tag readers into two categories, the
      // ones that read their tag identifiers from the start of the file and the
      // ones that read from the end of the file.
      var tagReadersAtFileStart = [];
      var tagReadersAtFileEnd = [];
      var fileSize = fileReader.getSize();

      for (var i = 0; i < mediaTagReaders.length; i++) {
        var range = mediaTagReaders[i].getTagIdentifierByteRange();

        if (!isRangeValid(range, fileSize)) {
          continue;
        }

        if (range.offset >= 0 && range.offset < fileSize / 2 || range.offset < 0 && range.offset < -fileSize / 2) {
          tagReadersAtFileStart.push(mediaTagReaders[i]);
        } else {
          tagReadersAtFileEnd.push(mediaTagReaders[i]);
        }
      }

      var tagsLoaded = false;
      var loadTagIdentifiersCallbacks = {
        onSuccess: function onSuccess() {
          if (!tagsLoaded) {
            // We're expecting to load two sets of tag identifiers. This flag
            // indicates when the first one has been loaded.
            tagsLoaded = true;
            return;
          }

          for (var i = 0; i < mediaTagReaders.length; i++) {
            var range = mediaTagReaders[i].getTagIdentifierByteRange();

            if (!isRangeValid(range, fileSize)) {
              continue;
            }

            try {
              var tagIndentifier = fileReader.getBytesAt(range.offset >= 0 ? range.offset : range.offset + fileSize, range.length);
            } catch (ex) {
              if (callbacks.onError) {
                callbacks.onError({
                  "type": "fileReader",
                  "info": ex.message
                });
              }

              return;
            }

            if (mediaTagReaders[i].canReadTagFormat(tagIndentifier)) {
              callbacks.onSuccess(mediaTagReaders[i]);
              return;
            }
          }

          if (callbacks.onError) {
            callbacks.onError({
              "type": "tagFormat",
              "info": "No suitable tag reader found"
            });
          }
        },
        onError: callbacks.onError
      };

      this._loadTagIdentifierRanges(fileReader, tagReadersAtFileStart, loadTagIdentifiersCallbacks);

      this._loadTagIdentifierRanges(fileReader, tagReadersAtFileEnd, loadTagIdentifiersCallbacks);
    }
  }, {
    key: "_loadTagIdentifierRanges",
    value: function _loadTagIdentifierRanges(fileReader, tagReaders, callbacks) {
      if (tagReaders.length === 0) {
        // Force async
        setTimeout(callbacks.onSuccess, 1);
        return;
      }

      var tagIdentifierRange = [Number.MAX_VALUE, 0];
      var fileSize = fileReader.getSize(); // Create a super set of all ranges so we can load them all at once.
      // Might need to rethink this approach if there are tag ranges too far
      // a part from each other. We're good for now though.

      for (var i = 0; i < tagReaders.length; i++) {
        var range = tagReaders[i].getTagIdentifierByteRange();
        var start = range.offset >= 0 ? range.offset : range.offset + fileSize;
        var end = start + range.length - 1;
        tagIdentifierRange[0] = Math.min(start, tagIdentifierRange[0]);
        tagIdentifierRange[1] = Math.max(end, tagIdentifierRange[1]);
      }

      fileReader.loadRange(tagIdentifierRange, callbacks);
    }
  }]);

  return Reader;
}();

var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "addFileReader",
    value: function addFileReader(fileReader) {
      mediaFileReaders.push(fileReader);
      return Config;
    }
  }, {
    key: "addTagReader",
    value: function addTagReader(tagReader) {
      mediaTagReaders.push(tagReader);
      return Config;
    }
  }, {
    key: "removeTagReader",
    value: function removeTagReader(tagReader) {
      var tagReaderIx = mediaTagReaders.indexOf(tagReader);

      if (tagReaderIx >= 0) {
        mediaTagReaders.splice(tagReaderIx, 1);
      }

      return Config;
    }
  }, {
    key: "EXPERIMENTAL_avoidHeadRequests",
    value: function EXPERIMENTAL_avoidHeadRequests() {
      XhrFileReader.setConfig({
        avoidHeadRequests: true
      });
    }
  }, {
    key: "setDisallowedXhrHeaders",
    value: function setDisallowedXhrHeaders(disallowedXhrHeaders) {
      XhrFileReader.setConfig({
        disallowedXhrHeaders: disallowedXhrHeaders
      });
    }
  }, {
    key: "setXhrTimeoutInSec",
    value: function setXhrTimeoutInSec(timeoutInSec) {
      XhrFileReader.setConfig({
        timeoutInSec: timeoutInSec
      });
    }
  }]);

  return Config;
}();

Config.addFileReader(XhrFileReader).addFileReader(BlobFileReader).addFileReader(ArrayFileReader).addTagReader(ID3v2TagReader).addTagReader(ID3v1TagReader).addTagReader(MP4TagReader).addTagReader(FLACTagReader);

if (typeof process !== "undefined" && !process.browser) {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    var ReactNativeFileReader = require('./ReactNativeFileReader');

    Config.addFileReader(ReactNativeFileReader);
  } else {
    var NodeFileReader = require('./NodeFileReader');

    Config.addFileReader(NodeFileReader);
  }
}

module.exports = {
  "read": read,
  "Reader": Reader,
  "Config": Config
};

},{"./ArrayFileReader":3,"./BlobFileReader":4,"./FLACTagReader":6,"./ID3v1TagReader":7,"./ID3v2TagReader":9,"./MP4TagReader":10,"./MediaFileReader":11,"./MediaTagReader":12,"./NodeFileReader":1,"./ReactNativeFileReader":1,"./XhrFileReader":14}]},{},[15])(15)
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2).Buffer, __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(4)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(6)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "PIXI"
var external_PIXI_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/model/TiledSpritesheet.ts

var TiledSpritesheet_TiledSpritesheet = /** @class */ (function () {
    function TiledSpritesheet(texture, border, tileWidth, tileHeight, rows, columns) {
        this.border = border;
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;
        this.rows = rows;
        this.columns = columns;
        this.bigTexture = texture;
        this.bigTexture.baseTexture.scaleMode = external_PIXI_["SCALE_MODES"].NEAREST;
        this.textures = [];
    }
    TiledSpritesheet.prototype.getTexture = function (gid) {
        //Check wether textures was allready framed form spritesheet
        if (this.textures[gid]) {
            return this.textures[gid];
        }
        else {
            //Calculate row and column from gid
            var row = Math.floor((gid - 1) / this.columns);
            var column = (gid - 1) % this.columns;
            var tileWidth = this.tileWidth;
            var tileHeight = this.tileHeight;
            var x = column * tileWidth + column * this.border;
            var y = row * tileHeight + row * this.border;
            var t = new external_PIXI_["Texture"](this.bigTexture.baseTexture, new external_PIXI_["Rectangle"](x, y, tileWidth, tileHeight));
            //Save Texture in cache array
            this.textures[gid] = t;
            return t;
        }
    };
    return TiledSpritesheet;
}());


// CONCATENATED MODULE: ./src/model/Items.ts
var ITEM;
(function (ITEM) {
    ITEM["TOMATO_PLANT"] = "tomato_plant";
    ITEM["TOMATO_PROJECTILE"] = "tomato_projectile";
    ITEM["PUMPKIN_PLANT"] = "pumpkin_plant";
    ITEM["TNT_PUMPKIN"] = "tnt_pumpkin";
    ITEM["WALL"] = "wall";
    ITEM["HAND"] = "hand";
})(ITEM || (ITEM = {}));


// CONCATENATED MODULE: ./src/model/Balancing.ts

var Balancing = {
    tree: {
        defaultHealth: 1,
        cropCount: 4,
    },
    wall: {
        defaultHealth: 3,
    },
    tntPumpkin: {
        explosionDamage: 1.5,
    },
    player: {
        speed: 4,
        hitDamage: 0.1,
        knockdown: 2000,
    },
    tower: {
        defaultHealth: 10,
        cooldown: 6 //How often this Object wiggles until it is again vulnerable
    },
    tomatoProjectile: {
        speed: 7,
        hitDamage: 0.3,
        inventoryLimit: 10,
    },
    tomatoPlant: {
        growStepTime: 5000,
        crops: [
            { type: ITEM.TOMATO_PROJECTILE, count: 2 },
            { type: ITEM.TOMATO_PLANT, count: 4 },
        ],
        startSeeds: 5,
    },
    pumpkinPlant: {
        growStepTime: 10000,
        crops: [
            { type: ITEM.TNT_PUMPKIN, count: 2 },
            { type: ITEM.PUMPKIN_PLANT, count: 3 },
        ],
        startSeeds: 5,
    },
};


// CONCATENATED MODULE: ./src/model/Constants.ts
var Constants = {
    ASSET_PATH: "data/assets",
    MAP_PATH: "data/maps",
    SOUND_PATH: "data/assets/sound",
    MUSIC_PATH: "data/assets/music",
};


// CONCATENATED MODULE: ./src/model/HitEvent.ts
var HitEvent = /** @class */ (function () {
    function HitEvent(initiator, damage) {
        this.initiator = initiator;
        this.damage = damage;
    }
    return HitEvent;
}());


// CONCATENATED MODULE: ./src/model/UpdateScheduler.ts
var UpdateScheduler = /** @class */ (function () {
    function UpdateScheduler() {
        var _this = this;
        this.clients = {};
        this.isPaused = false;
        this.doStep = function (delta) {
            if (!_this.isPaused) {
                for (var i in _this.clients) {
                    var currentCallback = _this.clients[i].callback;
                    currentCallback(delta);
                }
            }
        };
    }
    UpdateScheduler.prototype.register = function (id, callback) {
        this.clients[id] = {
            callback: callback
        };
    };
    UpdateScheduler.prototype.unregister = function (id) {
        delete this.clients[id];
    };
    /**
     * Asynchronus Promise for waiting the given time in ms
     * This does NOT pause or stop the UpdateScheduler
     */
    UpdateScheduler.wait = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    return UpdateScheduler;
}());


// CONCATENATED MODULE: ./src/model/TomatoProjectile.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TomatoProjectile_TomatoProjectile = /** @class */ (function (_super) {
    __extends(TomatoProjectile, _super);
    function TomatoProjectile(x, y, direction, initiator) {
        var _this = _super.call(this, gameManager.atlasSpritesheet.getTexture("tomato_projectile_fly")) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.animations = [];
        _this.explodable = false; //Tomato is not explodable at initialisation to avoid hitting the creating Player instantly
        _this.doStep = function (delta) {
            //Calculate theoretically next position
            var newX = _this.x + _this.vx * delta;
            var newY = _this.y + _this.vy * delta;
            //Get all tiles that would be touched by the player
            var xRange = {
                from: Math.floor((newX - _this.width / 2) / gameManager.map.finalTileWidth),
                to: Math.floor((newX + _this.width / 2) / gameManager.map.finalTileWidth)
            };
            var yRange = {
                from: Math.floor((newY - _this.height / 2) / gameManager.map.finalTileHeight),
                to: Math.floor((newY + _this.height / 2) / gameManager.map.finalTileHeight)
            };
            //Check if the tomato hits a Player
            for (var _i = 0, _a = gameManager.map.players; _i < _a.length; _i++) {
                var player = _a[_i];
                var hitbox = player.getHitbox();
                if (_this.x < hitbox.rightX && _this.x + _this.width > hitbox.leftX && _this.y < hitbox.lowerY && _this.y + _this.height > hitbox.upperY) {
                    //Fly into the Player
                    _this.x += _this.vx * 2;
                    _this.y += _this.vy * 2;
                    _this.smash(player);
                    return;
                }
            }
            //Check if at least one of this new positions would be in a solid tile or out of the map
            for (var x = xRange.from; x <= xRange.to; x++) {
                for (var y = yRange.from; y <= yRange.to; y++) {
                    if (gameManager.map.getTile(x, y) == undefined || gameManager.map.getTile(x, y).tileObject) {
                        var blockedTile = gameManager.map.getTile(x, y);
                        //Fly into the tileObject
                        _this.x += _this.vx * 2;
                        _this.y += _this.vy * 2;
                        _this.smash(blockedTile);
                        return;
                    }
                }
            }
            //If no collision, just fly your way
            _this.x = newX;
            _this.y = newY;
            _this.rotation += 0.5 * delta;
            _this.explodable = true;
        };
        _this.id = TomatoProjectile.getNewId();
        _this.x = x;
        _this.y = y;
        _this.initiator = initiator;
        _this.scale = new external_PIXI_["Point"](2, 2);
        _this.x += _this.width;
        _this.y += _this.height;
        _this.anchor.set(0.5);
        switch (direction) {
            case DIRECTION.UP:
                _this.vy = -1 * Balancing.tomatoProjectile.speed;
                break;
            case DIRECTION.DOWN:
                _this.vy = 1 * Balancing.tomatoProjectile.speed;
                break;
            case DIRECTION.LEFT:
                _this.vx = -1 * Balancing.tomatoProjectile.speed;
                break;
            case DIRECTION.RIGHT:
                _this.vx = 1 * Balancing.tomatoProjectile.speed;
                break;
        }
        for (var i = 0; i < 6; i++) {
            var textureName = "tomato_projectile_smash_" + i;
            var texture = gameManager.atlasSpritesheet.getTexture(textureName);
            _this.animations.push(texture);
        }
        gameManager.updateScheduler.register(_this.id, _this.doStep);
        gameManager.map.extraStuffContainer.addChild(_this);
        TomatoProjectile.throwSound.play();
        return _this;
    }
    TomatoProjectile.getNewId = function () {
        return "tomato_projectile_" + TomatoProjectile.idCounter++;
    };
    TomatoProjectile.prototype.smash = function (collider) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, frame;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.explodable) return [3 /*break*/, 5];
                        gameManager.updateScheduler.unregister(this.id);
                        TomatoProjectile.smashSound.play(); //Play Smash sound
                        //Trigger Hit event on hitten tile or Player
                        if (collider) {
                            collider.onHit(new HitEvent(this.initiator, Balancing.tomatoProjectile.hitDamage));
                        }
                        _i = 0, _a = this.animations;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        frame = _a[_i];
                        this.texture = frame;
                        return [4 /*yield*/, UpdateScheduler.wait(40)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.destroy();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TomatoProjectile.idCounter = 0;
    TomatoProjectile.throwSound = new Audio(Constants.SOUND_PATH + "/snap.mp3");
    TomatoProjectile.smashSound = new Audio(Constants.SOUND_PATH + "/smash.mp3");
    return TomatoProjectile;
}(external_PIXI_["Sprite"]));


// CONCATENATED MODULE: ./src/model/Inventory.ts


var Inventory_Inventory = /** @class */ (function () {
    function Inventory() {
        this.tomato_projectile = 0;
        this.tnt_pumpkin = 0;
        this.tomato_plant = Balancing.tomatoPlant.startSeeds;
        this.pumpkin_plant = Balancing.pumpkinPlant.startSeeds;
        this.wall = 0;
    }
    Inventory.prototype.getItem = function (itemType) {
        switch (itemType) {
            case ITEM.TOMATO_PLANT:
                if (this.tomato_plant > 0) {
                    this.tomato_plant--;
                    return true;
                }
                break;
            case ITEM.PUMPKIN_PLANT:
                if (this.pumpkin_plant > 0) {
                    this.pumpkin_plant--;
                    return true;
                }
                break;
            case ITEM.TOMATO_PROJECTILE:
                if (this.tomato_projectile > 0) {
                    this.tomato_projectile--;
                    return true;
                }
                break;
            case ITEM.TNT_PUMPKIN:
                if (this.tnt_pumpkin > 0) {
                    this.tnt_pumpkin--;
                    return true;
                }
                break;
            case ITEM.WALL:
                if (this.wall > 0) {
                    this.wall--;
                    return true;
                }
                break;
        }
        console.log("Cant get " + itemType + ". Inventory is empty!");
        return false;
    };
    Inventory.prototype.giveItem = function (itemType, count) {
        console.log("give " + itemType + " x " + count);
        switch (itemType) {
            case ITEM.TOMATO_PROJECTILE:
                this.tomato_projectile += count;
                break;
            case ITEM.TNT_PUMPKIN:
                this.tnt_pumpkin += count;
                break;
            case ITEM.WALL:
                this.wall += count;
                break;
            case ITEM.TOMATO_PLANT:
                this.tomato_plant += count;
                break;
            case ITEM.PUMPKIN_PLANT:
                this.pumpkin_plant += count;
                break;
        }
    };
    return Inventory;
}());


// CONCATENATED MODULE: ./src/model/Player.ts
var Player_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Player_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var DIRECTION;
(function (DIRECTION) {
    DIRECTION["UP"] = "up";
    DIRECTION["RIGHT"] = "right";
    DIRECTION["DOWN"] = "down";
    DIRECTION["LEFT"] = "left";
    DIRECTION["STOP"] = "stop";
})(DIRECTION || (DIRECTION = {}));
;
var Player_Player = /** @class */ (function () {
    function Player(x, y, map, playerId) {
        var _this = this;
        //A hex value of a color all player's sprites are tinted with
        this.color = 0xFFFFFF;
        this.keyDown = function (event) {
            if (event.key != _this.lastKey && !_this.stunned) {
                _this.lastKey = event.key;
                switch (event.key) {
                    case _this.upKey:
                        _this.changeDirection(DIRECTION.UP);
                        _this.vy = -1 * Balancing.player.speed;
                        break;
                    case _this.downKey:
                        _this.changeDirection(DIRECTION.DOWN);
                        _this.vy = 1 * Balancing.player.speed;
                        break;
                    case _this.leftKey:
                        _this.changeDirection(DIRECTION.LEFT);
                        _this.vx = -1 * Balancing.player.speed;
                        break;
                    case _this.rightKey:
                        _this.changeDirection(DIRECTION.RIGHT);
                        _this.vx = 1 * Balancing.player.speed;
                        break;
                    case _this.placeKey:
                        _this.onPlace();
                        break;
                    case _this.selectKey:
                        _this.switchPlaceMode();
                        break;
                }
            }
        };
        this.keyUp = function (event) {
            _this.lastKey = "";
            switch (event.key) {
                case _this.upKey:
                    _this.changeDirection(DIRECTION.STOP);
                    _this.vy = 0;
                    break;
                case _this.downKey:
                    _this.changeDirection(DIRECTION.STOP);
                    _this.vy = 0;
                    break;
                case _this.leftKey:
                    _this.changeDirection(DIRECTION.STOP);
                    _this.vx = 0;
                    break;
                case _this.rightKey:
                    _this.changeDirection(DIRECTION.STOP);
                    _this.vx = 0;
                    break;
            }
        };
        this.doStep = function (delta) {
            if (!_this.stunned) {
                var hitbox = _this.getHitbox();
                var stepX = _this.vx * delta;
                var stepY = _this.vy * delta;
                var tileWidth = _this.map.finalTileWidth;
                var tileHeight = _this.map.finalTileHeight;
                //Get all tiles that would be touched by the player if he would do a step in direction (stepX|stepY)
                var xRange = {
                    from: Math.floor((hitbox.leftX + stepX) / tileWidth),
                    to: Math.floor((hitbox.rightX + stepX) / tileWidth)
                };
                var yRange = {
                    from: Math.floor((hitbox.upperY + stepY) / tileHeight),
                    to: Math.floor((hitbox.lowerY + stepY) / tileHeight)
                };
                //Check if at least one of this new positions would be in a solid tile or out of the map
                var blocked = false;
                for (var x = xRange.from; x <= xRange.to; x++) {
                    for (var y = yRange.from; y <= yRange.to; y++) {
                        if (_this.map.getTile(x, y) == undefined || (_this.map.getTile(x, y).tileObject && _this.map.getTile(x, y).tileObject.solid)) {
                            blocked = true;
                        }
                    }
                }
                if (blocked == false) {
                    _this.sprite.x += stepX;
                    _this.sprite.y += stepY;
                    //Tint the new currentTile
                    _this.tintCurrentTile();
                }
            }
        };
        this.onPlace = function () {
            if (!_this.stunned) {
                var currentTile = _this.getCurrentTile();
                //Create hitEvent if placeMode is HAND
                if (_this.placeMode == ITEM.HAND) {
                    var currentTile_1 = _this.getCurrentTile();
                    currentTile_1.onHit(new HitEvent(_this, Balancing.player.hitDamage));
                    return;
                }
                //Create Tomato if neccessary
                if (_this.placeMode == ITEM.TOMATO_PROJECTILE && _this.inventory.getItem(ITEM.TOMATO_PROJECTILE)) {
                    new TomatoProjectile_TomatoProjectile(_this.sprite.x, _this.sprite.y, _this.currentDirection, _this);
                    return;
                }
                //Else place tileObject if ressources are in inventory
                else if (_this.inventory.getItem(_this.placeMode)) {
                    _this.playAnimation("put");
                    currentTile.onPlace(_this.placeMode);
                }
            }
        };
        this.onHit = function (hitEvent) { return Player_awaiter(_this, void 0, void 0, function () {
            return Player_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.stunned) return [3 /*break*/, 2];
                        this.stunned = true;
                        Player.damageSound.play();
                        this.wiggle(3);
                        return [4 /*yield*/, UpdateScheduler.wait(Balancing.player.knockdown)];
                    case 1:
                        _a.sent();
                        this.stunned = false;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory_Inventory();
        this.placeMode = ITEM.TOMATO_PLANT;
        this.loadAnimations();
        this.sprite = new external_PIXI_["extras"].AnimatedSprite(this.animations.walk[DIRECTION.DOWN]);
        this.sprite.tint = this.color;
        this.currentDirection = DIRECTION.DOWN;
        this.sprite.x = x;
        this.sprite.y = y;
        this.vx = 0;
        this.vy = 0;
        this.sprite.scale = Player.SPRITE_SCALE;
        this.sprite.animationSpeed = 0.13;
        this.sprite.loop = true;
        this.lastKey = "";
        //register key events
        gameManager.keyboardManager.registerKey(gameManager.keyboardManager.ANY_KEY, this.keyDown, this.keyUp, "player" + playerId);
        gameManager.updateScheduler.register("player" + playerId, this.doStep);
    }
    Player.prototype.getHitbox = function () {
        return {
            leftX: this.sprite.x + Player.HITBOX_TOLERANCE_HORIZONTAL,
            rightX: this.sprite.x + this.sprite.width - Player.HITBOX_TOLERANCE_HORIZONTAL,
            upperY: this.sprite.y + Player.HITBOX_TOLERANCE_TOP,
            lowerY: this.sprite.y + this.sprite.height
        };
    };
    Player.prototype.loadAnimations = function () {
        var animations = {
            walk: {
                up: 3,
                down: 3,
                left: 3,
                right: 3
            },
            put: {
                up: 3,
                down: 3,
                left: 3,
                right: 3
            }
        };
        for (var stateName in animations) {
            for (var subStateName in animations[stateName]) {
                var numberOfFrames = animations[stateName][subStateName];
                var currentFramesArray = [];
                for (var i = 0; i < numberOfFrames; i++) {
                    var textureName = "player_" + stateName + "_" + subStateName + "_" + i;
                    var texture = gameManager.atlasSpritesheet.getTexture(textureName);
                    currentFramesArray.push(texture);
                }
                animations[stateName][subStateName] = currentFramesArray;
            }
        }
        this.animations = animations;
    };
    Player.prototype.switchPlaceMode = function () {
        switch (this.placeMode) {
            case ITEM.PUMPKIN_PLANT:
                this.placeMode = ITEM.TNT_PUMPKIN;
                break;
            case ITEM.TNT_PUMPKIN:
                this.placeMode = ITEM.TOMATO_PLANT;
                break;
            case ITEM.TOMATO_PLANT:
                this.placeMode = ITEM.TOMATO_PROJECTILE;
                break;
            case ITEM.TOMATO_PROJECTILE:
                this.placeMode = ITEM.WALL;
                break;
            case ITEM.WALL:
                this.placeMode = ITEM.HAND;
                break;
            case ITEM.HAND:
                this.placeMode = ITEM.PUMPKIN_PLANT;
                break;
        }
        console.log("Changed PlaceMode. New mode is: " + this.placeMode);
    };
    Player.prototype.changeDirection = function (direction) {
        if (this.stunned) {
            //Player is stunned and can't change it's direction
            return;
        }
        if (direction == DIRECTION.STOP) {
            this.sprite.stop();
        }
        else {
            this.sprite.textures = this.animations.walk[direction];
            this.sprite.play();
            this.currentDirection = direction;
        }
    };
    Player.prototype.playAnimation = function (state) {
        return Player_awaiter(this, void 0, void 0, function () {
            var frames, _i, frames_1, frame, i;
            return Player_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frames = this.animations[state][this.currentDirection];
                        this.stunned = true;
                        this.sprite.stop();
                        _i = 0, frames_1 = frames;
                        _a.label = 1;
                    case 1:
                        if (!(_i < frames_1.length)) return [3 /*break*/, 4];
                        frame = frames_1[_i];
                        this.sprite.texture = frame;
                        return [4 /*yield*/, UpdateScheduler.wait(50)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: 
                    //Wait a moment
                    return [4 /*yield*/, UpdateScheduler.wait(80)];
                    case 5:
                        //Wait a moment
                        _a.sent();
                        i = frames.length - 1;
                        _a.label = 6;
                    case 6:
                        if (!(i >= 0)) return [3 /*break*/, 9];
                        this.sprite.texture = frames[i];
                        return [4 /*yield*/, UpdateScheduler.wait(50)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i--;
                        return [3 /*break*/, 6];
                    case 9:
                        //Restore last direction's texture
                        this.stunned = false;
                        this.changeDirection(this.currentDirection);
                        this.sprite.stop();
                        return [2 /*return*/];
                }
            });
        });
    };
    Player.prototype.setKeys = function (upKey, downKey, leftKey, rightKey, actionKey, selectKey, placeKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.selectKey = selectKey;
        this.placeKey = placeKey;
    };
    Player.prototype.setColor = function (color) {
        this.color = color;
        this.sprite.tint = color;
    };
    /**
    * Returns the currently active Tile.
    * This is always the tile the player's standing on.
    */
    Player.prototype.getCurrentTile = function () {
        var gridX = Math.floor((this.sprite.x + this.sprite.width / 2) / this.map.finalTileWidth);
        var gridY = Math.floor((this.sprite.y + this.sprite.height / 2) / this.map.finalTileHeight);
        return this.map.getTile(gridX, gridY);
    };
    Player.prototype.tintCurrentTile = function () {
        if (this.lastTintedTile) {
            this.lastTintedTile.setTint(0xFFFFFF);
        }
        var ct = this.getCurrentTile();
        if (ct) {
            ct.setTint(this.color);
        }
        this.lastTintedTile = ct;
    };
    Player.prototype.wiggle = function (times) {
        return Player_awaiter(this, void 0, void 0, function () {
            var radiant;
            return Player_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        radiant = 0.1;
                        this.sprite.x += this.sprite.width / 2;
                        this.sprite.y += this.sprite.height / 2;
                        this.sprite.anchor.set(0.5);
                        _a.label = 1;
                    case 1:
                        if (!(times > 0)) return [3 /*break*/, 6];
                        this.sprite.rotation += radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 2:
                        _a.sent();
                        this.sprite.rotation -= radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 3:
                        _a.sent();
                        this.sprite.rotation -= radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 4:
                        _a.sent();
                        this.sprite.rotation += radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 5:
                        _a.sent();
                        times--;
                        return [3 /*break*/, 1];
                    case 6:
                        //Epilog
                        this.sprite.x -= this.sprite.width / 2;
                        this.sprite.y -= this.sprite.height / 2;
                        this.sprite.anchor.set(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Player.SPRITE_WIDTH = 96 / 3;
    Player.SPRITE_HEIGHT = 144 / 4;
    Player.SPRITE_SCALE = new external_PIXI_["Point"](1.5, 1.5);
    Player.HITBOX_TOLERANCE_HORIZONTAL = 10;
    Player.HITBOX_TOLERANCE_TOP = 10;
    Player.damageSound = new Audio(Constants.SOUND_PATH + "/autsch.mp3");
    return Player;
}());


// CONCATENATED MODULE: ./src/model/TileObject.ts
var TileObject_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TileObject_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TileObject_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TileObject_TileObject = /** @class */ (function (_super) {
    TileObject_extends(TileObject, _super);
    function TileObject(texture, mother, solid) {
        var _this = _super.call(this, texture) || this;
        _this.solid = false;
        _this.vulnerable = true;
        _this.tryToBecomeSolid = function () {
            if (!_this.mother.isOccupiedByAnyPlayer()) {
                _this.tint = 0xFFFFFF;
                _this.solid = true;
            }
        };
        _this.mother = mother;
        _this.mother.addTileObject(_this);
        //set render coordinates
        _this.x = _this.mother.x;
        _this.y = _this.mother.y;
        //Set timer for solid tiles
        if (solid) {
            _this.tint = 0xAAAAAA;
            gameManager.updateScheduler.register("wait_to_become_solid_" + _this.mother.gridX + "_" + _this.mother.gridY, _this.tryToBecomeSolid);
        }
        return _this;
    }
    TileObject.prototype.onHit = function (hitevent) { };
    ;
    TileObject.prototype.onDestroy = function (initiator) {
        delete this.mother.tileObject;
        this.destroy();
    };
    ;
    TileObject.prototype.wiggle = function (times) {
        return TileObject_awaiter(this, void 0, void 0, function () {
            var radiant;
            return TileObject_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        radiant = 0.07;
                        this.x += this.width / 2;
                        this.y += this.height / 2;
                        this.anchor.set(0.5);
                        _a.label = 1;
                    case 1:
                        if (!(times > 0)) return [3 /*break*/, 6];
                        this.rotation += radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 2:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 3:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 4:
                        _a.sent();
                        this.rotation += radiant;
                        return [4 /*yield*/, UpdateScheduler.wait(30)];
                    case 5:
                        _a.sent();
                        times--;
                        return [3 /*break*/, 1];
                    case 6:
                        //Epilog
                        this.x -= this.width / 2;
                        this.y -= this.height / 2;
                        this.anchor.set(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    TileObject.prototype.shrink = function () {
        return TileObject_awaiter(this, void 0, void 0, function () {
            var scaleDiff;
            return TileObject_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scaleDiff = 0.2;
                        //Change anchor
                        this.x += this.width / 2;
                        this.y += this.height;
                        this.anchor.set(0.5, 1);
                        _a.label = 1;
                    case 1:
                        if (!(this.scale.x > 0 && this.scale.y > 0)) return [3 /*break*/, 3];
                        this.scale.x -= scaleDiff;
                        this.scale.y -= scaleDiff;
                        return [4 /*yield*/, UpdateScheduler.wait(10)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        //Epilog
                        this.anchor.set(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    TileObject.prototype.blink = function (times) {
        return TileObject_awaiter(this, void 0, void 0, function () {
            return TileObject_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(times > 0)) return [3 /*break*/, 3];
                        //Give the tileobject a green tint
                        this.tint = 0xFFAAAA;
                        return [4 /*yield*/, UpdateScheduler.wait(200)];
                    case 1:
                        _a.sent();
                        //Remove the tint
                        this.tint = 0xFFFFFF;
                        return [4 /*yield*/, UpdateScheduler.wait(200)];
                    case 2:
                        _a.sent();
                        times--;
                        return [3 /*break*/, 0];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TileObject.onHitSound = new Audio(Constants.SOUND_PATH + "/hit.mp3");
    TileObject.onDestroySound = new Audio(Constants.SOUND_PATH + "/blob.mp3");
    return TileObject;
}(external_PIXI_["Sprite"]));


// CONCATENATED MODULE: ./src/model/TntPumpkin.ts
var TntPumpkin_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TntPumpkin_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TntPumpkin_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TntPumpkin_TntPumpkin = /** @class */ (function (_super) {
    TntPumpkin_extends(TntPumpkin, _super);
    function TntPumpkin(mother) {
        var _this = _super.call(this, gameManager.atlasSpritesheet.getTexture("pumpkin_idle"), mother) || this;
        _this.loadAnimations();
        return _this;
    }
    TntPumpkin.prototype.onHit = function (hitEvent) {
        return TntPumpkin_awaiter(this, void 0, void 0, function () {
            var tilesAround, _i, tilesAround_1, tile;
            return TntPumpkin_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.vulnerable && hitEvent.damage > 0)) return [3 /*break*/, 3];
                        this.vulnerable = false;
                        this.wiggle(1);
                        TntPumpkin.tickSound.play();
                        //Blink very dangerous
                        return [4 /*yield*/, this.blink(4)];
                    case 1:
                        //Blink very dangerous
                        _a.sent();
                        tilesAround = this.getTilesAround();
                        for (_i = 0, tilesAround_1 = tilesAround; _i < tilesAround_1.length; _i++) {
                            tile = tilesAround_1[_i];
                            tile.onHit(new HitEvent(hitEvent.initiator, Balancing.tntPumpkin.explosionDamage));
                        }
                        //Explode!!!
                        TntPumpkin.explodeSound.play();
                        return [4 /*yield*/, this.playAnimation("explode")];
                    case 2:
                        _a.sent();
                        //Destroy pumpkin :-(
                        this.onDestroy(hitEvent.initiator);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TntPumpkin.prototype.loadAnimations = function () {
        var animations = {
            explode: 12
        };
        for (var stateName in animations) {
            var numberOfFrames = animations[stateName];
            var currentFramesArray = [];
            for (var i = 0; i < numberOfFrames; i++) {
                var textureName = "pumpkin_" + stateName + "_" + i;
                var texture = gameManager.atlasSpritesheet.getTexture(textureName);
                currentFramesArray.push(texture);
            }
            animations[stateName] = currentFramesArray;
        }
        this.animations = animations;
    };
    TntPumpkin.prototype.playAnimation = function (state) {
        return TntPumpkin_awaiter(this, void 0, void 0, function () {
            var frames, _i, frames_1, frame;
            return TntPumpkin_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frames = this.animations[state];
                        _i = 0, frames_1 = frames;
                        _a.label = 1;
                    case 1:
                        if (!(_i < frames_1.length)) return [3 /*break*/, 4];
                        frame = frames_1[_i];
                        this.texture = frame;
                        return [4 /*yield*/, UpdateScheduler.wait(50)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns an array of tiles that are orthogonal to it's own tile.
     * This array holds only existing tiles and no undefined values.
     */
    TntPumpkin.prototype.getTilesAround = function () {
        var myX = this.mother.gridX;
        var myY = this.mother.gridY;
        var tiles = [];
        tiles.push(gameManager.map.getTile(myX + 1, myY));
        tiles.push(gameManager.map.getTile(myX - 1, myY));
        tiles.push(gameManager.map.getTile(myX, myY + 1));
        tiles.push(gameManager.map.getTile(myX, myY - 1));
        //Filter not existing tiles
        var toReturn = [];
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var tile = tiles_1[_i];
            if (tile) {
                toReturn.push(tile);
            }
        }
        return toReturn;
    };
    TntPumpkin.testExplosion = function () {
        var p = new TntPumpkin(gameManager.map.getTile(1, 0));
        new TntPumpkin(gameManager.map.getTile(2, 0));
        p.onHit(new HitEvent(gameManager.map.players[0], 1));
    };
    TntPumpkin.tickSound = new Audio(Constants.SOUND_PATH + "/klick.mp3");
    TntPumpkin.explodeSound = new Audio(Constants.SOUND_PATH + "/explode.mp3");
    return TntPumpkin;
}(TileObject_TileObject));


// CONCATENATED MODULE: ./src/model/StatusBar.ts
var StatusBar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StatusBar_StatusBar = /** @class */ (function (_super) {
    StatusBar_extends(StatusBar, _super);
    function StatusBar(mother, visible, progress, borderColor, progressColor) {
        var _this = _super.call(this) || this;
        _this.mother = mother;
        _this.visible = visible === undefined ? true : visible;
        _this.progress = progress || 1;
        _this.borderColor = borderColor || 0xFF0000;
        _this.progressColor = progressColor || 0x00FF00;
        //Add to pixi container
        var map = mother.mother.map;
        map.extraStuffContainer.addChild(_this);
        //position relative to mother
        _this.x = mother.x;
        _this.y = mother.y;
        _this.width = mother.width;
        _this.height = mother.height;
        //Draw frame
        _this.borderRectangle = new external_PIXI_["Graphics"]();
        _this.borderRectangle.lineStyle(StatusBar.LINE_THICKNESS, _this.borderColor);
        _this.borderRectangle.drawRect(0, 0, map.finalTileWidth, StatusBar.LINE_THICKNESS * 3);
        _this.addChild(_this.borderRectangle);
        _this.setProgress(_this.progress);
        return _this;
    }
    StatusBar.prototype.updateView = function () {
        //Clear last progress Shape
        if (this.progressShape) {
            this.removeChild(this.progressShape);
        }
        if (this.progress >= 0.1) { //Draw too small progress looks ugly
            //Draw new progressbar
            this.progressShape = new external_PIXI_["Graphics"]();
            //Don't worry about this crazy +1/-1 pixels, they are crazy, but necessary
            var lineWidth = 64 * this.progress - StatusBar.LINE_THICKNESS + 1;
            var thick = StatusBar.LINE_THICKNESS * 2;
            this.progressShape.lineStyle(thick, this.progressColor)
                .moveTo(StatusBar.LINE_THICKNESS - 1, thick - 1)
                .lineTo(lineWidth, thick - 1);
            this.addChild(this.progressShape);
        }
    };
    StatusBar.prototype.setProgress = function (progress) {
        if (progress < 0 || progress > 1) {
            throw Error("Can't set progress lower than 0 or higher than 1");
        }
        this.progress = progress;
        this.updateView();
    };
    StatusBar.LINE_THICKNESS = 3;
    return StatusBar;
}(external_PIXI_["Container"]));


// CONCATENATED MODULE: ./src/model/Wall.ts
var Wall_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wall_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Wall_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Wall_Wall = /** @class */ (function (_super) {
    Wall_extends(Wall, _super);
    function Wall(mother) {
        var _this = _super.call(this, gameManager.tiledSpritesheet.getTexture(949), mother, true) || this;
        _this.health = Balancing.wall.defaultHealth;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        return _this;
    }
    Wall.prototype.onHit = function (hitEvent) {
        return Wall_awaiter(this, void 0, void 0, function () {
            return Wall_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.vulnerable) return [3 /*break*/, 3];
                        this.health -= hitEvent.damage;
                        if (!(this.health < 0.01)) return [3 /*break*/, 1];
                        this.onDestroy(hitEvent.initiator);
                        return [3 /*break*/, 3];
                    case 1:
                        this.vulnerable = false;
                        this.statusBar.visible = true;
                        this.statusBar.setProgress(this.health / Balancing.wall.defaultHealth);
                        Wall.onHitSound.play();
                        return [4 /*yield*/, this.wiggle(3)];
                    case 2:
                        _a.sent();
                        this.vulnerable = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Wall.prototype.onDestroy = function (initiator) {
        return Wall_awaiter(this, void 0, void 0, function () {
            return Wall_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.vulnerable = false;
                        Wall.onDestroySound.play();
                        this.statusBar.destroy({ children: true });
                        return [4 /*yield*/, this.shrink()];
                    case 1:
                        _a.sent();
                        _super.prototype.onDestroy.call(this, initiator);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Wall;
}(TileObject_TileObject));


// CONCATENATED MODULE: ./src/model/Plant.ts
var Plant_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Plant_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Plant_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Plant = /** @class */ (function (_super) {
    Plant_extends(Plant, _super);
    function Plant(texture, mother) {
        var _this = _super.call(this, texture, mother) || this;
        _this.vulnerable = false;
        _this.grow();
        return _this;
    }
    Plant.prototype.onHit = function (hitEvent) {
        return Plant_awaiter(this, void 0, void 0, function () {
            var _i, _a, crop;
            return Plant_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.vulnerable) {
                            return [2 /*return*/];
                        }
                        this.vulnerable = false;
                        return [4 /*yield*/, hitEvent.initiator.playAnimation("put")];
                    case 1:
                        _b.sent();
                        //Harvest yourself
                        for (_i = 0, _a = this.crops; _i < _a.length; _i++) {
                            crop = _a[_i];
                            hitEvent.initiator.inventory.giveItem(crop.type, crop.count);
                        }
                        //give the initiator the items
                        return [4 /*yield*/, this.shrink()];
                    case 2:
                        //give the initiator the items
                        _b.sent();
                        this.onDestroy(hitEvent.initiator);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plant.growStates = 5;
    return Plant;
}(TileObject_TileObject));


// CONCATENATED MODULE: ./src/model/TomatoPlant.ts
var TomatoPlant_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TomatoPlant_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TomatoPlant_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TomatoPlant_TomatoPlant = /** @class */ (function (_super) {
    TomatoPlant_extends(TomatoPlant, _super);
    function TomatoPlant(mother) {
        var _this = _super.call(this, gameManager.atlasSpritesheet.getTexture("tomato_plant_0"), mother) || this;
        _this.crops = Balancing.tomatoPlant.crops;
        return _this;
    }
    TomatoPlant.prototype.grow = function () {
        return TomatoPlant_awaiter(this, void 0, void 0, function () {
            var growStep;
            return TomatoPlant_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        growStep = 1;
                        _a.label = 1;
                    case 1:
                        if (!(growStep < TomatoPlant.growStates)) return [3 /*break*/, 4];
                        return [4 /*yield*/, UpdateScheduler.wait(Balancing.tomatoPlant.growStepTime)];
                    case 2:
                        _a.sent();
                        this.texture = gameManager.atlasSpritesheet.getTexture("tomato_plant_" + growStep);
                        _a.label = 3;
                    case 3:
                        growStep++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.vulnerable = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    return TomatoPlant;
}(Plant));


// CONCATENATED MODULE: ./src/model/PumpkinPlant.ts
var PumpkinPlant_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PumpkinPlant_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var PumpkinPlant_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PumpkinPlant_PumpkinPlant = /** @class */ (function (_super) {
    PumpkinPlant_extends(PumpkinPlant, _super);
    function PumpkinPlant(mother) {
        var _this = _super.call(this, gameManager.atlasSpritesheet.getTexture("pumpkin_plant_0"), mother) || this;
        _this.crops = Balancing.pumpkinPlant.crops;
        return _this;
    }
    PumpkinPlant.prototype.grow = function () {
        return PumpkinPlant_awaiter(this, void 0, void 0, function () {
            var growStep;
            return PumpkinPlant_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        growStep = 1;
                        _a.label = 1;
                    case 1:
                        if (!(growStep < PumpkinPlant.growStates)) return [3 /*break*/, 4];
                        return [4 /*yield*/, UpdateScheduler.wait(Balancing.pumpkinPlant.growStepTime)];
                    case 2:
                        _a.sent();
                        this.texture = gameManager.atlasSpritesheet.getTexture("pumpkin_plant_" + growStep);
                        _a.label = 3;
                    case 3:
                        growStep++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.vulnerable = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    return PumpkinPlant;
}(Plant));


// CONCATENATED MODULE: ./src/model/Tile.ts
var Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Tile_Tile = /** @class */ (function (_super) {
    Tile_extends(Tile, _super);
    function Tile(texture, gridX, gridY, map) {
        var _this = _super.call(this, texture) || this;
        _this.gridX = gridX;
        _this.gridY = gridY;
        _this.map = map;
        //calculate own render coordinates
        _this.x = gridX * map.finalTileWidth;
        _this.y = gridY * map.finalTileHeight;
        return _this;
    }
    Tile.prototype.addTileObject = function (newTileObject) {
        if (this.isFree()) {
            this.tileObject = newTileObject;
            newTileObject.scale = TiledMap_TiledMap.SPRITE_SCALE;
            this.map.tileObjectContainer.addChild(newTileObject);
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }
    };
    Tile.prototype.onHit = function (hitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    };
    Tile.prototype.onPlace = function (objectType) {
        if (this.isFree()) {
            switch (objectType) {
                case ITEM.TOMATO_PLANT:
                    new TomatoPlant_TomatoPlant(this);
                    break;
                case ITEM.PUMPKIN_PLANT:
                    new PumpkinPlant_PumpkinPlant(this);
                    break;
                case ITEM.TNT_PUMPKIN:
                    new TntPumpkin_TntPumpkin(this);
                    break;
                case ITEM.WALL:
                    new Wall_Wall(this);
                    break;
            }
        }
    };
    Tile.prototype.isFree = function () {
        return this.tileObject ? false : true;
    };
    /**
     * Checks wether this tile is occuped by any player and returns the first player that occupies this tile.
     * Returns undefined if this tile is not occupied
     */
    Tile.prototype.isOccupiedBy = function () {
        for (var _i = 0, _a = this.map.players; _i < _a.length; _i++) {
            var player = _a[_i];
            //Get all tiles that would be touched by the player
            var xRange = {
                from: Math.floor(player.sprite.x / this.map.finalTileWidth),
                to: Math.floor((player.sprite.x + player.sprite.width) / this.map.finalTileWidth)
            };
            var yRange = {
                from: Math.floor(player.sprite.y / this.map.finalTileHeight),
                to: Math.floor((player.sprite.y + player.sprite.height) / this.map.finalTileHeight)
            };
            if (this.gridX >= xRange.from && this.gridX <= xRange.to && this.gridY >= yRange.from && this.gridY <= yRange.to) {
                return player;
            }
        }
        return undefined;
    };
    /**
     * Checks wether this tile is occuped by any player and returns true if there is any player on this tile.
     */
    Tile.prototype.isOccupiedByAnyPlayer = function () {
        var player = this.isOccupiedBy();
        if (player === undefined) {
            return false;
        }
        else {
            //console.log("occupied by player" + player.playerId);
            return true;
        }
    };
    Tile.prototype.setTint = function (color) {
        this.tint = color;
        if (!this.isFree()) {
            this.tileObject.tint = color;
        }
    };
    return Tile;
}(external_PIXI_["Sprite"]));


// CONCATENATED MODULE: ./src/model/Tower.ts
var Tower_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tower_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Tower_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Tower_Tower = /** @class */ (function (_super) {
    Tower_extends(Tower, _super);
    function Tower(texture, mother, ownerId) {
        var _this = _super.call(this, texture, mother, true) || this;
        _this.health = Balancing.tower.defaultHealth;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        _this.ownerId = ownerId;
        return _this;
    }
    Tower.prototype.onHit = function (hitEvent) {
        return Tower_awaiter(this, void 0, void 0, function () {
            var tileHeight, tileWidth;
            return Tower_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.vulnerable) return [3 /*break*/, 3];
                        this.health -= hitEvent.damage;
                        if (!(this.health < 0.01)) return [3 /*break*/, 1];
                        this.onDestroy(hitEvent.initiator);
                        return [3 /*break*/, 3];
                    case 1:
                        this.vulnerable = false;
                        this.statusBar.visible = true;
                        this.statusBar.setProgress(this.health / Balancing.tower.defaultHealth);
                        Tower.onHitSound.play();
                        return [4 /*yield*/, this.wiggle(Balancing.tower.cooldown)];
                    case 2:
                        _a.sent();
                        tileHeight = this.mother.map.finalTileHeight;
                        tileWidth = this.mother.map.finalTileWidth;
                        if (this.mother.gridY - 1 >= 0) {
                            new TomatoProjectile_TomatoProjectile(this.x, (this.mother.gridY - 1) * tileHeight, DIRECTION.UP, this.getOwner());
                        }
                        if (this.mother.gridX - 1 >= 0) {
                            new TomatoProjectile_TomatoProjectile((this.mother.gridX - 1) * tileWidth, this.y, DIRECTION.LEFT, this.getOwner());
                        }
                        if (this.mother.gridY + 1 >= 0) {
                            new TomatoProjectile_TomatoProjectile(this.x, (this.mother.gridY + 1) * tileHeight, DIRECTION.DOWN, this.getOwner());
                        }
                        if (this.mother.gridX + 1 >= 0) {
                            new TomatoProjectile_TomatoProjectile((this.mother.gridX + 1) * tileWidth, this.y, DIRECTION.RIGHT, this.getOwner());
                        }
                        this.vulnerable = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Tower.prototype.onDestroy = function (initiator) {
        alert("Player" + this.ownerId + " has lost!");
    };
    Tower.prototype.getOwner = function () {
        return gameManager.map.players[this.ownerId];
    };
    return Tower;
}(TileObject_TileObject));


// CONCATENATED MODULE: ./src/model/Tree.ts
var Tree_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Tree_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Tree_Tree = /** @class */ (function (_super) {
    Tree_extends(Tree, _super);
    function Tree(texture, mother) {
        var _this = _super.call(this, texture, mother) || this;
        _this.health = Balancing.tree.defaultHealth;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        return _this;
    }
    Tree.prototype.onHit = function (hitEvent) {
        return Tree_awaiter(this, void 0, void 0, function () {
            return Tree_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.vulnerable) return [3 /*break*/, 3];
                        this.health -= hitEvent.damage;
                        if (!(this.health < 0.01)) return [3 /*break*/, 1];
                        this.onDestroy(hitEvent.initiator);
                        return [3 /*break*/, 3];
                    case 1:
                        this.vulnerable = false;
                        this.statusBar.visible = true;
                        this.statusBar.setProgress(this.health / Balancing.tree.defaultHealth);
                        Tree.onHitSound.play();
                        return [4 /*yield*/, this.wiggle(3)];
                    case 2:
                        _a.sent();
                        this.vulnerable = true;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    Tree.prototype.onDestroy = function (initiator) {
        return Tree_awaiter(this, void 0, void 0, function () {
            return Tree_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.vulnerable = false;
                        initiator.inventory.giveItem(ITEM.WALL, Balancing.tree.cropCount);
                        Tree.onDestroySound.play();
                        this.statusBar.destroy({ children: true });
                        return [4 /*yield*/, this.shrink()];
                    case 1:
                        _a.sent();
                        _super.prototype.onDestroy.call(this, initiator);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Tree;
}(TileObject_TileObject));


// CONCATENATED MODULE: ./src/model/TiledMap.ts
var TiledMap_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var TiledMap_TiledMap = /** @class */ (function (_super) {
    TiledMap_extends(TiledMap, _super);
    function TiledMap() {
        var _this = _super.call(this) || this;
        _this.tileContainer = new external_PIXI_["Container"]();
        _this.addChild(_this.tileContainer);
        _this.tileObjectContainer = new external_PIXI_["Container"]();
        _this.addChild(_this.tileObjectContainer);
        _this.playerContainer = new external_PIXI_["Container"]();
        _this.addChild(_this.playerContainer);
        _this.extraStuffContainer = new external_PIXI_["Container"]();
        _this.addChild(_this.extraStuffContainer);
        _this.players = [];
        return _this;
    }
    TiledMap.prototype.getMapObjectProperty = function (mapObject, name) {
        for (var _i = 0, _a = mapObject.properties; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (prop.name == name) {
                return prop.value;
            }
        }
    };
    //Loads the map with spritesheet. Last parameter is callback function which is called after parsing the map with the new parsed map as parameter
    TiledMap.loadMap = function (mapData) {
        var map = new TiledMap();
        var tiledSpritesheet = gameManager.tiledSpritesheet;
        var atlasSpritesheet = gameManager.atlasSpritesheet;
        var SPRITE_SCALE = new external_PIXI_["Point"](TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
        map.finalTileWidth = tiledSpritesheet.tileWidth * SPRITE_SCALE.x;
        map.finalTileHeight = tiledSpritesheet.tileHeight * SPRITE_SCALE.y;
        //Build all TileLayers first
        for (var _i = 0, _a = mapData.layers; _i < _a.length; _i++) {
            var tl = _a[_i];
            if (tl.type == "tilelayer") {
                map.gridWidth = tl.width;
                map.gridHeight = tl.height;
                //Init map's tiles array
                map.tiles = new Array(map.gridHeight);
                for (var i = 0; i < map.tiles.length; i++) {
                    map.tiles[i] = new Array(map.gridWidth);
                }
                //Generate Tiles for each tile to the container
                for (var row = 0; row < tl.height; row++) {
                    for (var column = 0; column < tl.width; column++) {
                        var index = row * tl.width + column;
                        if (tl.data[index] > 0) {
                            var texture = tiledSpritesheet.getTexture(tl.data[index]);
                            var newTile = new Tile_Tile(texture, column, row, map);
                            map.addTile(newTile);
                        }
                    }
                }
            }
        }
        //Iterate through Object Layers
        for (var _b = 0, _c = mapData.layers; _b < _c.length; _b++) {
            var tl = _c[_b];
            if (tl.type == "objectgroup") {
                //Add all players first
                for (var _d = 0, _e = tl.objects; _d < _e.length; _d++) {
                    var co = _e[_d];
                    /*
                    *      _____  _
                    *     |  __ \| |
                    *     | |__) | | __ _ _   _  ___ _ __
                    *     |  ___/| |/ _` | | | |/ _ \ '__|
                    *     | |    | | (_| | |_| |  __/ |
                    *     |_|    |_|\__,_|\__, |\___|_|
                    *                      __/ |
                    *                     |___/
                    */
                    if (co.type == "player") {
                        var x = Math.round(co.x * SPRITE_SCALE.x);
                        var y = (Math.round(co.y) - co.height) * SPRITE_SCALE.y; // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner
                        var playerId = map.getMapObjectProperty(co, "playerId");
                        var newPlayer = new Player_Player(x, y, map, playerId);
                        map.addPlayer(newPlayer);
                    }
                }
                //Generate Sprites for each object to the container
                for (var _f = 0, _g = tl.objects; _f < _g.length; _f++) {
                    var co = _g[_f];
                    /*
                     *      _______
                     *     |__   __|
                     *        | | _____      _____ _ __
                     *        | |/ _ \ \ /\ / / _ \ '__|
                     *        | | (_) \ V  V /  __/ |
                     *        |_|\___/ \_/\_/ \___|_|
                     *
                     *
                     */
                    if (co.type == "tower") {
                        var texture = tiledSpritesheet.getTexture(co.gid);
                        var ownerId = map.getMapObjectProperty(co, "owner");
                        var mother = map.getTileNearestTo(co);
                        var newTower = new Tower_Tower(texture, mother, ownerId);
                        map.addTileObject(newTower);
                    }
                    /*
                     *      _______
                     *     |__   __|
                     *        | |_ __ ___  ___
                     *        | | '__/ _ \/ _ \
                     *        | | | |  __/  __/
                     *        |_|_|  \___|\___|
                     *
                     *
                     */
                    else if (co.type == "tree") {
                        var texture = tiledSpritesheet.getTexture(co.gid);
                        var mother = map.getTileNearestTo(co);
                        var newTree = new Tree_Tree(texture, mother);
                        map.addTileObject(newTree);
                    }
                    /***
                     *     __          __   _ _
                     *     \ \        / /  | | |
                     *      \ \  /\  / /_ _| | |
                     *       \ \/  \/ / _` | | |
                     *        \  /\  / (_| | | |
                     *         \/  \/ \__,_|_|_|
                     *
                     *
                     */
                    else if (co.type == "wall") {
                        var mother = map.getTileNearestTo(co);
                        map.addTileObject(new Wall_Wall(mother));
                    }
                }
            }
        }
        return map;
    };
    TiledMap.prototype.addPlayer = function (player) {
        //player.sprite.scale = TiledMap.SPRITE_SCALE;
        this.players[player.playerId] = player;
        this.playerContainer.addChild(player.sprite);
    };
    TiledMap.prototype.addTileObject = function (tileObject) {
        tileObject.scale = TiledMap.SPRITE_SCALE;
        this.playerContainer.addChild(tileObject);
    };
    TiledMap.prototype.addTile = function (tile) {
        tile.x = tile.gridX * gameManager.tiledSpritesheet.tileWidth * TiledMap.SPRITE_SCALE.x;
        tile.y = tile.gridY * gameManager.tiledSpritesheet.tileHeight * TiledMap.SPRITE_SCALE.y;
        tile.scale = TiledMap.SPRITE_SCALE;
        this.tiles[tile.gridY][tile.gridX] = tile;
        this.tileContainer.addChild(tile);
    };
    /**
     * Returns the tile at position specified by x and y grid coordinates
     * Returns undefined if there is no tile at this coordinates
     * @param gridX x-coordinate
     * @param gridY y-coordinate
     */
    TiledMap.prototype.getTile = function (gridX, gridY) {
        if (this.tiles[gridY]) {
            return this.tiles[gridY][gridX];
        }
        else {
            return undefined;
        }
    };
    TiledMap.prototype.pause = function () {
        this.isPaused = true;
    };
    TiledMap.prototype.play = function () {
        this.isPaused = false;
    };
    TiledMap.prototype.getObjectCoordinates = function (mapObject) {
        //an Object can be placed "between" tiles in tiled map editor. But evnts can be triggered only from whole tiles. So the obejccts position is mapped to the nearest Tile
        var originalX = mapObject.x * TiledMap.SPRITE_SCALE.x;
        var xTiles = originalX / this.finalTileWidth;
        xTiles = Math.round(xTiles);
        var originalY = (mapObject.y - mapObject.height) * TiledMap.SPRITE_SCALE.y; // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner              
        var yTiles = originalY / this.finalTileHeight;
        yTiles = Math.round(yTiles);
        return { gridX: xTiles, gridY: yTiles };
    };
    TiledMap.prototype.getTileNearestTo = function (mapObject) {
        var pos = this.getObjectCoordinates(mapObject);
        return this.tiles[pos.gridY][pos.gridX];
    };
    TiledMap.MAP_ZOOM = 4;
    TiledMap.SPRITE_SCALE = new external_PIXI_["Point"](TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
    return TiledMap;
}(external_PIXI_["Container"]));


// CONCATENATED MODULE: ./src/model/KeyboardManager.ts
var KeyboardManager = /** @class */ (function () {
    function KeyboardManager() {
        var _this = this;
        this.keyUps = {};
        this.keyDowns = {};
        this.ANY_KEY = "any_key";
        this.onKeyUp = function (event) {
            for (var i in _this.keyUps) {
                var element = _this.keyUps[i];
                if (element.key == _this.ANY_KEY || event.key == element.key) {
                    if (typeof element.onKeyUp == "function") {
                        element.onKeyUp(event);
                    }
                }
            }
        };
        this.onKeyDown = function (event) {
            for (var i in _this.keyDowns) {
                var element = _this.keyDowns[i];
                if (element.key == _this.ANY_KEY || event.key == element.key) {
                    if (typeof element.onKeyDown == "function") {
                        element.onKeyDown(event);
                    }
                }
            }
        };
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
    }
    KeyboardManager.prototype.registerKey = function (key, onKeyDown, onKeyUp, identifier) {
        this.keyDowns[identifier] = { key: key, onKeyDown: onKeyDown };
        this.keyUps[identifier] = { key: key, onKeyUp: onKeyUp };
    };
    KeyboardManager.prototype.unregisterKey = function (identifier) {
        delete this.keyDowns[identifier];
        delete this.keyUps[identifier];
    };
    return KeyboardManager;
}());


// CONCATENATED MODULE: ./src/model/AtlasSpritesheet.ts

var AtlasSpritesheet_AtlasSpritesheet = /** @class */ (function () {
    function AtlasSpritesheet(texture, atlasData) {
        this.atlasData = atlasData;
        this.bigTexture = texture;
        this.bigTexture.baseTexture.scaleMode = external_PIXI_["SCALE_MODES"].NEAREST;
    }
    AtlasSpritesheet.prototype.getTexture = function (name) {
        var props = this.atlasData.items[name];
        if (props == undefined) {
            throw new Error("Can't find texture '" + name + "' in spritesheet");
        }
        return new external_PIXI_["Texture"](this.bigTexture.baseTexture, new external_PIXI_["Rectangle"](props.x, props.y, props.width, props.height));
    };
    return AtlasSpritesheet;
}());


// CONCATENATED MODULE: ./src/ui/uiConstants.ts
var uiConstants = {
    menuBar: {
        height: 115,
        icon: {
            scale: 3,
        },
        inventory: {
            spacing: 3,
            spriteSize: 16,
        }
    },
    stage: {
        width: 1020,
        height: 500,
    }
};
/* harmony default export */ var ui_uiConstants = (uiConstants);

// CONCATENATED MODULE: ./src/ui/playerMenu.ts
var playerMenu_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var playerMenu_PlayerMenu = /** @class */ (function (_super) {
    playerMenu_extends(PlayerMenu, _super);
    function PlayerMenu(player, width, x) {
        var _this = _super.call(this) || this;
        _this.tomatoProjectileSprites = [];
        _this.doStep = function () {
            _this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(_this.player.placeMode);
            //display tomatoes
            for (var index = 0; index < _this.tomatoProjectileSprites.length; index++) {
                if (index < _this.player.inventory.tomato_projectile) {
                    _this.tomatoProjectileSprites[index].tint = 0xFFFFFF;
                }
                else {
                    _this.tomatoProjectileSprites[index].tint = 0x222222;
                }
            }
        };
        _this.player = player;
        _this.y = ui_uiConstants.stage.height - ui_uiConstants.menuBar.height;
        _this.x = x;
        var bgShape = new external_PIXI_["Graphics"]();
        bgShape.beginFill(player.color);
        bgShape.drawRect(0, 0, width, ui_uiConstants.menuBar.height);
        bgShape.endFill();
        _this.addChild(bgShape);
        var ai = new external_PIXI_["Sprite"](gameManager.atlasSpritesheet.getTexture(player.placeMode));
        ai.scale.set(ui_uiConstants.menuBar.icon.scale);
        ai.x = (ui_uiConstants.menuBar.height - ai.width) / 2;
        ai.y = (ui_uiConstants.menuBar.height - ai.width) / 2;
        _this.addChild(ai);
        _this.actionIcon = ai;
        //Create tomato sprites
        var offsetX = _this.width - ((ui_uiConstants.menuBar.inventory.spacing + ui_uiConstants.menuBar.inventory.spriteSize) * Balancing.tomatoProjectile.inventoryLimit);
        for (var i = 0; i < Balancing.tomatoProjectile.inventoryLimit; i++) {
            var sprite = new external_PIXI_["Sprite"](gameManager.atlasSpritesheet.getTexture(ITEM.TOMATO_PROJECTILE));
            sprite.x = (ui_uiConstants.menuBar.inventory.spriteSize + ui_uiConstants.menuBar.inventory.spacing) * i + offsetX;
            sprite.y = 5;
            _this.tomatoProjectileSprites.push(sprite);
            _this.addChild(sprite);
        }
        gameManager.updateScheduler.register("playerMenu" + player.playerId, _this.doStep);
        return _this;
    }
    return PlayerMenu;
}(external_PIXI_["Container"]));
/* harmony default export */ var ui_playerMenu = (playerMenu_PlayerMenu);

// CONCATENATED MODULE: ./src/ui/menuBar.ts
var menuBar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var menuBar_MenuBar = /** @class */ (function (_super) {
    menuBar_extends(MenuBar, _super);
    function MenuBar(players) {
        var _this = _super.call(this) || this;
        _this.playerMenus = [];
        for (var i = 0; i < players.length; i++) {
            var menuWidth = ui_uiConstants.stage.width / players.length;
            var playerMenu = new ui_playerMenu(players[i], menuWidth, menuWidth * i);
            _this.playerMenus.push(playerMenu);
            _this.addChild(playerMenu);
        }
        return _this;
    }
    return MenuBar;
}(external_PIXI_["Container"]));
/* harmony default export */ var menuBar = (menuBar_MenuBar);

// EXTERNAL MODULE: ./node_modules/jsmediatags/dist/jsmediatags.js
var jsmediatags = __webpack_require__(1);

// CONCATENATED MODULE: ./src/music/MusicPlayer.ts
var MusicPlayer_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var MusicPlayer_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MusicPlayer_MusicPlayer = /** @class */ (function () {
    function MusicPlayer(htmlParent) {
        var _this = this;
        this.playlist = [];
        this.playlistPosition = 0;
        this.play = function () {
            if (!_this.audio) {
                _this.loadMusicAt(_this.playlistPosition);
            }
            _this.audio.play();
        };
        this.pause = function () {
            if (_this.audio) {
                _this.audio.pause();
            }
        };
        this.nextTrack = function () {
            if (_this.audio) {
                _this.audio.pause();
            }
            _this.loadMusicAt(++_this.playlistPosition % _this.playlist.length);
            _this.play();
        };
        var html = "\n            <style>\n            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n                #container{\n                    position: absolute;\n                    margin: 10px 38px;\n                }\n\n                .musicPlayer{\n                    background-color: #212121e0;\n                    width: 400px;\n                    border-radius: 5px;\n                    border: 3px solid #616161;\n                    color: white;\n                    font-family: 'VT323', monospace;\n                    display: flex;\n                    padding: 15px;\n                }\n                .musicPlayerCover{}\n                .musicPlayerTitle{\n                    font-size: 20pt;\n                }\n                .musicPlayerArtist{\n                    font-size: 15pt;\n                }\n                .musicPlayerInfo{\n                    padding: 0px 15px;\n                }\n            </style>\n\n            <div class=\"musicPlayer\" style=\"display:none\">\n                <img class=\"musicPlayerCover\" width=\"80px\" src=\"https://www.superjojo.de/main/pics/mensa.png\">\n                <div class=\"musicPlayerInfo\">\n                    <div class=\"musicPlayerTitle\">\n                        Deep and funky music\n                    </div>\n                    <div class=\"musicPlayerArtist\">\n                        Mister bombastic\n                    </div>\n                </div>\n            </div>\n        ";
        htmlParent.innerHTML += html;
    }
    MusicPlayer.prototype.addMusic = function (path) {
        this.playlist.push(path);
    };
    MusicPlayer.prototype.loadMusicAt = function (pos) {
        return MusicPlayer_awaiter(this, void 0, void 0, function () {
            var path, resp, blob;
            return MusicPlayer_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.playlistPosition = pos;
                        path = this.playlist[pos];
                        if (path == undefined) {
                            console.warn("[Music Player] Cant play music. Music cant be found in playlist!");
                            return [2 /*return*/];
                        }
                        this.audio = new Audio(path);
                        this.audio.onended = this.nextTrack;
                        return [4 /*yield*/, fetch('http://127.0.0.1:8887/' + path)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.blob()];
                    case 2:
                        blob = _a.sent();
                        jsmediatags["read"](blob, {
                            onSuccess: function (data) {
                                console.log(data.tags);
                                document.querySelector('.musicPlayerTitle').innerHTML = data.tags.title;
                                document.querySelector('.musicPlayerArtist').innerHTML = data.tags.artist;
                                var image = data.tags.picture;
                                if (image) {
                                    var base64String = "";
                                    for (var i = 0; i < image.data.length; i++) {
                                        base64String += String.fromCharCode(image.data[i]);
                                    }
                                    var base64 = "data:" + image.format + ";base64," +
                                        window.btoa(base64String);
                                    document.querySelector('.musicPlayerCover').setAttribute('src', base64);
                                }
                            },
                            onError: function (error) {
                                console.log(':(', error.type, error.info);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return MusicPlayer;
}());
/* harmony default export */ var music_MusicPlayer = (MusicPlayer_MusicPlayer);

// CONCATENATED MODULE: ./src/model/GameManager.ts











var GameManager_GameManager = /** @class */ (function () {
    function GameManager() {
        var _this = this;
        this.loaderFinished = function () {
            _this.keyboardManager = new KeyboardManager();
            _this.updateScheduler = new UpdateScheduler();
            _this.musicPlayer = new music_MusicPlayer(document.getElementById("container"));
            _this.musicPlayer.addMusic(Constants.MUSIC_PATH + "/gogogo.mp3");
            _this.musicPlayer.addMusic(Constants.MUSIC_PATH + "/Lets_Rest.mp3");
            _this.musicPlayer.addMusic(Constants.MUSIC_PATH + "/La_Calahorra.mp3");
            _this.musicPlayer.addMusic(Constants.MUSIC_PATH + "/Towel_Defence_Ending.mp3");
            //this.musicPlayer.play();
            //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
            _this.tiledSpritesheet = new TiledSpritesheet_TiledSpritesheet(PIXI.loader.resources.tiledSpritesheetTexture.texture, 1, 16, 16, 31, 57);
            //Atlas Spritesheet
            _this.atlasSpritesheet = new AtlasSpritesheet_AtlasSpritesheet(PIXI.loader.resources.atlasSpritesheetTexture.texture, PIXI.loader.resources.atlasSpritesheetData.data);
            //Register Update scheduler
            _this.pixiApp.ticker.add(_this.updateScheduler.doStep);
            //Load Map
            _this.map = TiledMap_TiledMap.loadMap(PIXI.loader.resources.mapData.data);
            //Display Map
            _this.pixiApp.stage.addChild(_this.map);
            //Set Player Controls
            var players = _this.map.players;
            players[0].setKeys("w", "s", "a", "d", "c", "y", "x");
            players[0].setColor(0xCCEEAA);
            players[1].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "b", "n");
            players[1].setColor(0xCCCCFF);
            //Draw menu
            _this.drawMenuBar(players);
            //Start Pixi App
            _this.pixiApp.ticker.start();
            //this.test();
        };
        //Create a Pixi Application
        var PixiOptions = /** @class */ (function () {
            function PixiOptions(width, height, view) {
                this.width = width;
                this.height = height;
                this.view = view;
            }
            return PixiOptions;
        }());
        var canvas = document.getElementById("canvas1");
        var pixiOptions = new PixiOptions(ui_uiConstants.stage.width, ui_uiConstants.stage.height, canvas);
        this.pixiApp = new external_PIXI_["Application"](pixiOptions);
    }
    GameManager.prototype.startGame = function () {
        var toLoad = [
            { name: 'tiledSpritesheetTexture', url: Constants.ASSET_PATH + "/spritesheet.png" },
            { name: 'atlasSpritesheetTexture', url: Constants.ASSET_PATH + "/spritesmith_spritesheet.png" },
            { name: 'atlasSpritesheetData', url: Constants.ASSET_PATH + "/spritesmith_spritesheet.json" },
            { name: 'mapData', url: Constants.MAP_PATH + "/map2.json" },
        ];
        external_PIXI_["loader"].add(toLoad).load(this.loaderFinished);
    };
    GameManager.prototype.drawMenuBar = function (players) {
        this.menuBar = new menuBar(players);
        this.pixiApp.stage.addChild(this.menuBar);
    };
    GameManager.prototype.test = function () {
        this.map.players[0].inventory.giveItem(ITEM.TNT_PUMPKIN, 100);
        this.map.players[0].inventory.giveItem(ITEM.TOMATO_PROJECTILE, 100);
        this.map.players[0].inventory.giveItem(ITEM.WALL, 100);
        this.map.players[0].placeMode = ITEM.TOMATO_PROJECTILE;
    };
    return GameManager;
}());


// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameManager", function() { return gameManager; });

var gameManager = new GameManager_GameManager();
gameManager.startGame();



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9qc21lZGlhdGFncy9kaXN0L2pzbWVkaWF0YWdzLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlZFNwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9CYWxhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1VwZGF0ZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG50UHVtcGtpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1dhbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1BsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQXRsYXNTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL21lbnVCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tdXNpYy9NdXNpY1BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsc0I7Ozs7OztBQ0FBLDRGQUFhLEdBQUcsSUFBc0QsRUFBRSxtQkFBbUIsS0FBSyxVQUFvTyxDQUFDLGFBQWEsMEJBQTBCLDBCQUEwQixnQkFBZ0IsVUFBVSxVQUFVLDBDQUEwQyxnQkFBZ0IsT0FBQyxPQUFPLG9CQUFvQiw4Q0FBOEMsa0NBQWtDLFlBQVksWUFBWSxtQ0FBbUMsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLDBDQUEwQyxZQUFZLFdBQVcsWUFBWSxTQUFTLEdBQUc7O0FBRS95QixDQUFDLEdBQUc7QUFDSjs7QUFFQSxDQUFDLEdBQUc7QUFDSjs7QUFFQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEVBQUUsdUJBQXVCO0FBQzFCOztBQUVBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEssMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyxFQUFFLDZDQUE2QztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4sMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7O0FBRTNFLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUCxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyxHQUFHO0FBQ0o7O0FBRUEsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSywwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SywyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsaUJBQWlCO0FBQ2hDOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxpQkFBaUI7QUFDaEM7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsY0FBYztBQUM3QixnQkFBZ0IsUUFBUTtBQUN4Qjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEVBQUUsc0JBQXNCO0FBQ3pCOztBQUVBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSxDQUFDLEVBQUUsNkNBQTZDO0FBQ2hEOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7O0FBR2hFO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FB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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0EscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNXZEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7O0FDbkJZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7Ozs7O0FDbkZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN2TG9CO0FBRTFEO0lBVUMsMEJBQVksT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxPQUFPO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcs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QyxDQUFDO0lBSUQsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMzRCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDOzs7O0FDaEhEO0FBQStDO0FBRS9DLElBQU0sV0FBVyxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5qc21lZGlhdGFncyA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IFhNTEh0dHBSZXF1ZXN0O1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQXJyYXlGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFGaWxlUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhBcnJheUZpbGVSZWFkZXIsIF9NZWRpYUZpbGVSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEFycmF5RmlsZVJlYWRlcihhcnJheSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcnJheUZpbGVSZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXJyYXlGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfYXJyYXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfc2l6ZVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX2FycmF5ID0gYXJyYXk7XG4gICAgX3RoaXMuX3NpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgX3RoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBcnJheUZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIGlmIChvZmZzZXQgPj0gdGhpcy5fYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9mZnNldCBcIiArIG9mZnNldCArIFwiIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYXJyYXlbb2Zmc2V0XTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmaWxlKSB8fCB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlcihmaWxlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXJyYXlGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5RmlsZVJlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExfV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ2h1bmtlZEZpbGVEYXRhID0gcmVxdWlyZSgnLi9DaHVua2VkRmlsZURhdGEnKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBCbG9iRmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoQmxvYkZpbGVSZWFkZXIsIF9NZWRpYUZpbGVSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEJsb2JGaWxlUmVhZGVyKGJsb2IpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmxvYkZpbGVSZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQmxvYkZpbGVSZWFkZXIpLmNhbGwodGhpcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9ibG9iXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2ZpbGVEYXRhXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fYmxvYiA9IGJsb2I7XG4gICAgX3RoaXMuX2ZpbGVEYXRhID0gbmV3IENodW5rZWRGaWxlRGF0YSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCbG9iRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiX2luaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoY2FsbGJhY2tzKSB7XG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5fYmxvYi5zaXplO1xuICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vICRGbG93SXNzdWUgLSBmbG93IGlzbid0IGF3YXJlIG9mIG1velNsaWNlIG9yIHdlYmtpdFNsaWNlXG5cbiAgICAgIHZhciBibG9iU2xpY2UgPSB0aGlzLl9ibG9iLnNsaWNlIHx8IHRoaXMuX2Jsb2IubW96U2xpY2UgfHwgdGhpcy5fYmxvYi53ZWJraXRTbGljZTtcbiAgICAgIHZhciBibG9iID0gYmxvYlNsaWNlLmNhbGwodGhpcy5fYmxvYiwgcmFuZ2VbMF0sIHJhbmdlWzFdICsgMSk7XG4gICAgICB2YXIgYnJvd3NlckZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICBicm93c2VyRmlsZVJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnJvd3NlckZpbGVSZWFkZXIucmVzdWx0KTtcblxuICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKHJhbmdlWzBdLCBpbnRBcnJheSk7XG5cbiAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgfTtcblxuICAgICAgYnJvd3NlckZpbGVSZWFkZXIub25lcnJvciA9IGJyb3dzZXJGaWxlUmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvYlwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IGJyb3dzZXJGaWxlUmVhZGVyLmVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGJyb3dzZXJGaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVEYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBmaWxlIGluc3RhbmNlb2YgQmxvYiB8fCAvLyBGaWxlIGV4dGVuZHMgQmxvYiBidXQgaXQgc2VlbXMgdGhhdCBGaWxlIGluc3RhbmNlb2YgQmxvYiBkb2Vzbid0XG4gICAgICAvLyBxdWl0ZSB3b3JrIGFzIGV4cGVjdGVkIGluIENvcmRvdmEvUGhvbmVHYXAuXG4gICAgICB0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBmaWxlIGluc3RhbmNlb2YgRmlsZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmxvYkZpbGVSZWFkZXI7XG59KE1lZGlhRmlsZVJlYWRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQmxvYkZpbGVSZWFkZXI7XG5cbn0se1wiLi9DaHVua2VkRmlsZURhdGFcIjo1LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBmaWxlIHRoYXQgbWlnaHQgbm90IGhhdmUgYWxsIGl0cyBkYXRhIGxvYWRlZCB5ZXQuXG4gKiBJdCBpcyB1c2VkIHdoZW4gbG9hZGluZyB0aGUgZW50aXJlIGZpbGUgaXMgbm90IGFuIG9wdGlvbiBiZWNhdXNlIGl0J3MgdG9vXG4gKiBleHBlbnNpdmUuIEluc3RlYWQsIHBhcnRzIG9mIHRoZSBmaWxlIGFyZSBsb2FkZWQgYW5kIGFkZGVkIG9ubHkgd2hlbiBuZWVkZWQuXG4gKiBGcm9tIGEgcmVhZGluZyBwb2ludCBvZiB2aWV3IGlzIGFzIGlmIHRoZSBlbnRpcmUgZmlsZSBpcyBsb2FkZWQuIFRoZVxuICogZXhjZXB0aW9uIGlzIHdoZW4gdGhlIGRhdGEgaXMgbm90IGF2YWlsYWJsZSB5ZXQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICogVGhpcyBjbGFzcyBkb2VzIG5vdCBsb2FkIHRoZSBkYXRhLCBpdCBqdXN0IG1hbmFnZXMgaXQuIEl0IHByb3ZpZGVzIG9wZXJhdGlvbnNcbiAqIHRvIGFkZCBhbmQgcmVhZCBkYXRhIGZyb20gdGhlIGZpbGUuXG4gKlxuICogXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTk9UX0ZPVU5EID0gLTE7XG5cbnZhciBDaHVua2VkRmlsZURhdGEgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBfY3JlYXRlQ2xhc3MoQ2h1bmtlZEZpbGVEYXRhLCBudWxsLCBbe1xuICAgIGtleTogXCJOT1RfRk9VTkRcIixcbiAgICAvLyAkRmxvd0lzc3VlIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIENodW5rZWRGaWxlRGF0YSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2h1bmtlZEZpbGVEYXRhKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9maWxlRGF0YVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fZmlsZURhdGEgPSBbXTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBmaWxlIHN0b3JhZ2UgYXQgYSBzcGVjaWZpYyBvZmZzZXQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENodW5rZWRGaWxlRGF0YSwgW3tcbiAgICBrZXk6IFwiYWRkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREYXRhKG9mZnNldCwgZGF0YSkge1xuICAgICAgdmFyIG9mZnNldEVuZCA9IG9mZnNldCArIGRhdGEubGVuZ3RoIC0gMTtcblxuICAgICAgdmFyIGNodW5rUmFuZ2UgPSB0aGlzLl9nZXRDaHVua1JhbmdlKG9mZnNldCwgb2Zmc2V0RW5kKTtcblxuICAgICAgaWYgKGNodW5rUmFuZ2Uuc3RhcnRJeCA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAgIHRoaXMuX2ZpbGVEYXRhLnNwbGljZShjaHVua1JhbmdlLmluc2VydEl4IHx8IDAsIDAsIHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGRhdGEgdG8gYWRkIGNvbGxpZGVzIHdpdGggZXhpc3RpbmcgY2h1bmtzIHdlIHByZXBlbmQgYW5kXG4gICAgICAgIC8vIGFwcGVuZCBkYXRhIGZyb20gdGhlIGhhbGYgY29sbGlkaW5nIGNodW5rcyB0byBtYWtlIHRoZSBjb2xsaXNpb24gYXRcbiAgICAgICAgLy8gMTAwJS4gVGhlIG5ldyBkYXRhIGNhbiB0aGVuIHJlcGxhY2UgYWxsIHRoZSBjb2xsaWRpbmcgY2h1bmtlcy5cbiAgICAgICAgdmFyIGZpcnN0Q2h1bmsgPSB0aGlzLl9maWxlRGF0YVtjaHVua1JhbmdlLnN0YXJ0SXhdO1xuICAgICAgICB2YXIgbGFzdENodW5rID0gdGhpcy5fZmlsZURhdGFbY2h1bmtSYW5nZS5lbmRJeF07XG4gICAgICAgIHZhciBuZWVkc1ByZXBlbmQgPSBvZmZzZXQgPiBmaXJzdENodW5rLm9mZnNldDtcbiAgICAgICAgdmFyIG5lZWRzQXBwZW5kID0gb2Zmc2V0RW5kIDwgbGFzdENodW5rLm9mZnNldCArIGxhc3RDaHVuay5kYXRhLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBjaHVuayA9IHtcbiAgICAgICAgICBvZmZzZXQ6IE1hdGgubWluKG9mZnNldCwgZmlyc3RDaHVuay5vZmZzZXQpLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobmVlZHNQcmVwZW5kKSB7XG4gICAgICAgICAgdmFyIHNsaWNlZERhdGEgPSB0aGlzLl9zbGljZURhdGEoZmlyc3RDaHVuay5kYXRhLCAwLCBvZmZzZXQgLSBmaXJzdENodW5rLm9mZnNldCk7XG5cbiAgICAgICAgICBjaHVuay5kYXRhID0gdGhpcy5fY29uY2F0RGF0YShzbGljZWREYXRhLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWVkc0FwcGVuZCkge1xuICAgICAgICAgIC8vIFVzZSB0aGUgbGFzdENodW5rIGJlY2F1c2UgdGhlIHNsaWNlIGxvZ2ljIGlzIGVhc2llciB0byBoYW5kbGUuXG4gICAgICAgICAgdmFyIHNsaWNlZERhdGEgPSB0aGlzLl9zbGljZURhdGEoY2h1bmsuZGF0YSwgMCwgbGFzdENodW5rLm9mZnNldCAtIGNodW5rLm9mZnNldCk7XG5cbiAgICAgICAgICBjaHVuay5kYXRhID0gdGhpcy5fY29uY2F0RGF0YShzbGljZWREYXRhLCBsYXN0Q2h1bmsuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWxlRGF0YS5zcGxpY2UoY2h1bmtSYW5nZS5zdGFydEl4LCBjaHVua1JhbmdlLmVuZEl4IC0gY2h1bmtSYW5nZS5zdGFydEl4ICsgMSwgY2h1bmspO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfY29uY2F0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY29uY2F0RGF0YShkYXRhQSwgZGF0YUIpIHtcbiAgICAgIC8vIFR5cGVkQXJyYXlzIGRvbid0IHN1cHBvcnQgY29uY2F0LlxuICAgICAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGFBKSkge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuICAgICAgICB2YXIgZGF0YUFhbmRCID0gbmV3IGRhdGFBLmNvbnN0cnVjdG9yKGRhdGFBLmxlbmd0aCArIGRhdGFCLmxlbmd0aCk7IC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG5cbiAgICAgICAgZGF0YUFhbmRCLnNldChkYXRhQSwgMCk7IC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG5cbiAgICAgICAgZGF0YUFhbmRCLnNldChkYXRhQiwgZGF0YUEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGRhdGFBYW5kQjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBUeXBlZEFycmF5IGJ1dCBpdCdzIG5vdFxuICAgICAgICByZXR1cm4gZGF0YUEuY29uY2F0KGRhdGFCKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3NsaWNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2xpY2VEYXRhKGRhdGEsIGJlZ2luLCBlbmQpIHtcbiAgICAgIC8vIFNvbWUgVHlwZUFycmF5IGltcGxlbWVudGF0aW9ucyBkbyBub3Qgc3VwcG9ydCBzbGljZSB5ZXQuXG4gICAgICBpZiAoZGF0YS5zbGljZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuICAgICAgICByZXR1cm4gZGF0YS5zdWJhcnJheShiZWdpbiwgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGNodW5rIHJhbmdlIHRoYXQgb3ZlcmxhcHMgdGhlIFtvZmZzZXRTdGFydC0xLG9mZnNldEVuZCsxXSByYW5nZS5cbiAgICAgKiBXaGVuIGEgY2h1bmsgaXMgYWRqYWNlbnQgdG8gdGhlIG9mZnNldCB3ZSBzdGlsbCBjb25zaWRlciBpdCBwYXJ0IG9mIHRoZVxuICAgICAqIHJhbmdlICh0aGlzIGlzIHRoZSBzaXR1YXRpb24gb2Ygb2Zmc2V0U3RhcnQtMSBvciBvZmZzZXRFbmQrMSkuXG4gICAgICogV2hlbiBubyBjaHVua3MgYXJlIGZvdW5kIGBpbnNlcnRJeGAgZGVub3RlcyB0aGUgaW5kZXggd2hlcmUgdGhlIGRhdGFcbiAgICAgKiBzaG91bGQgYmUgaW5zZXJ0ZWQgaW4gdGhlIGRhdGEgbGlzdCAoc3RhcnRJeCA9PSBOT1RfRk9VTkQgYW5kIGVuZElYID09XG4gICAgICogTk9UX0ZPVU5EKS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRDaHVua1JhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDaHVua1JhbmdlKG9mZnNldFN0YXJ0LCBvZmZzZXRFbmQpIHtcbiAgICAgIHZhciBzdGFydENodW5rSXggPSBOT1RfRk9VTkQ7XG4gICAgICB2YXIgZW5kQ2h1bmtJeCA9IE5PVF9GT1VORDtcbiAgICAgIHZhciBpbnNlcnRJeCA9IDA7IC8vIENvdWxkIHVzZSBiaW5hcnkgc2VhcmNoIGJ1dCBub3QgZXhwZWN0aW5nIHRoYXQgbWFueSBibG9ja3MgdG8gZXhpc3QuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyssIGluc2VydEl4ID0gaSkge1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0RW5kID0gY2h1bmtPZmZzZXRTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPCBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIC8vIFRoaXMgb2Zmc2V0IHJhbmdlIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBjaHVua3MuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gSWYgaXQgaXMgYWRqYWNlbnQgd2Ugc3RpbGwgY29uc2lkZXIgaXQgcGFydCBvZiB0aGUgcmFuZ2UgYmVjYXVzZVxuICAgICAgICAvLyB3ZSdyZSBnb2luZyBlbmQgdXAgd2l0aCBhIHNpbmdsZSBibG9jayB3aXRoIGFsbCBjb250aWd1b3VzIGRhdGEuXG5cblxuICAgICAgICBpZiAob2Zmc2V0U3RhcnQgPD0gY2h1bmtPZmZzZXRFbmQgKyAxICYmIG9mZnNldEVuZCA+PSBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIHN0YXJ0Q2h1bmtJeCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTm8gc3RhcnRpbmcgY2h1bmsgd2FzIGZvdW5kLCBtZWFuaW5nIHRoYXQgdGhlIG9mZnNldCBpcyBlaXRoZXIgYmVmb3JlXG4gICAgICAvLyBvciBhZnRlciB0aGUgY3VycmVudCBzdG9yZWQgY2h1bmtzLlxuXG5cbiAgICAgIGlmIChzdGFydENodW5rSXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXJ0SXg6IE5PVF9GT1VORCxcbiAgICAgICAgICBlbmRJeDogTk9UX0ZPVU5ELFxuICAgICAgICAgIGluc2VydEl4OiBpbnNlcnRJeFxuICAgICAgICB9O1xuICAgICAgfSAvLyBGaW5kIHRoZSBlbmRpbmcgY2h1bmsuXG5cblxuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Q2h1bmtJeDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHVua09mZnNldFN0YXJ0ID0gdGhpcy5fZmlsZURhdGFbaV0ub2Zmc2V0O1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRFbmQgPSBjaHVua09mZnNldFN0YXJ0ICsgdGhpcy5fZmlsZURhdGFbaV0uZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA+PSBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIC8vIENhbmRpZGF0ZSBmb3IgdGhlIGVuZCBjaHVuaywgaXQgZG9lc24ndCBtZWFuIGl0IGlzIHlldC5cbiAgICAgICAgICBlbmRDaHVua0l4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPD0gY2h1bmtPZmZzZXRFbmQgKyAxKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuZENodW5rSXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICBlbmRDaHVua0l4ID0gc3RhcnRDaHVua0l4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydEl4OiBzdGFydENodW5rSXgsXG4gICAgICAgIGVuZEl4OiBlbmRDaHVua0l4XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNEYXRhUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRGF0YVJhbmdlKG9mZnNldFN0YXJ0LCBvZmZzZXRFbmQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5fZmlsZURhdGFbaV07XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA8IGNodW5rLm9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXRTdGFydCA+PSBjaHVuay5vZmZzZXQgJiYgb2Zmc2V0RW5kIDwgY2h1bmsub2Zmc2V0ICsgY2h1bmsuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgZGF0YUNodW5rO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkYXRhQ2h1bmtTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGRhdGFDaHVua0VuZCA9IGRhdGFDaHVua1N0YXJ0ICsgdGhpcy5fZmlsZURhdGFbaV0uZGF0YS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmIChvZmZzZXQgPj0gZGF0YUNodW5rU3RhcnQgJiYgb2Zmc2V0IDw9IGRhdGFDaHVua0VuZCkge1xuICAgICAgICAgIGRhdGFDaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhQ2h1bmspIHtcbiAgICAgICAgcmV0dXJuIGRhdGFDaHVuay5kYXRhW29mZnNldCAtIGRhdGFDaHVuay5vZmZzZXRdO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPZmZzZXQgXCIgKyBvZmZzZXQgKyBcIiBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlwiKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2h1bmtlZEZpbGVEYXRhO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENodW5rZWRGaWxlRGF0YTtcblxufSx7fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcbi8qIFRoZSBmaXJzdCA0IGJ5dGVzIG9mIGEgRkxBQyBmaWxlIGRlc2NyaWJlcyB0aGUgaGVhZGVyIGZvciB0aGUgZmlsZS4gSWYgdGhlc2VcbiAqIGJ5dGVzIHJlc3BlY3RpdmVseSByZWFkIFwiZkxhQ1wiLCB3ZSBjYW4gZGV0ZXJtaW5lIGl0IGlzIGEgRkxBQyBmaWxlLlxuICovXG5cblxudmFyIEZMQUNfSEVBREVSX1NJWkUgPSA0O1xuLyogRkxBQyBtZXRhZGF0YSBpcyBzdG9yZWQgaW4gYmxvY2tzIGNvbnRhaW5pbmcgZGF0YSByYW5naW5nIGZyb20gU1RSRUFNSU5GTyB0b1xuICogVk9SQklTX0NPTU1FTlQsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudCB0byB3b3JrIHdpdGguXG4gKlxuICogRWFjaCBtZXRhZGF0YSBoZWFkZXIgaXMgNCBieXRlcyBsb25nLCB3aXRoIHRoZSBmaXJzdCBieXRlIGRldGVybWluaW5nIHdoZXRoZXJcbiAqIGl0IGlzIHRoZSBsYXN0IG1ldGFkYXRhIGJsb2NrIGJlZm9yZSB0aGUgYXVkaW8gZGF0YSBhbmQgd2hhdCB0aGUgYmxvY2sgdHlwZSBpcy5cbiAqIFRoaXMgZmlyc3QgYnl0ZSBjYW4gZnVydGhlciBiZSBzcGxpdCBpbnRvIDggYml0cywgd2l0aCB0aGUgZmlyc3QgYml0IGJlaW5nIHRoZVxuICogbGFzdC1tZXRhZGF0YS1ibG9jayBmbGFnLCBhbmQgdGhlIGxhc3QgdGhyZWUgYml0cyBiZWluZyB0aGUgYmxvY2sgdHlwZS5cbiAqXG4gKiBTaW5jZSB0aGUgc3BlY2lmaWNhdGlvbiBzdGF0ZXMgdGhhdCB0aGUgZGVjaW1hbCB2YWx1ZSBmb3IgYSBWT1JCSVNfQ09NTUVOVCBibG9ja1xuICogdHlwZSBpcyA0LCB0aGUgdHdvIHBvc3NpYmlsaXRpZXMgZm9yIHRoZSBjb21tZW50IGJsb2NrIGhlYWRlciB2YWx1ZXMgYXJlOlxuICogLSAwMDAwMDEwMCAoTm90IGEgbGFzdCBtZXRhZGF0YSBjb21tZW50IGJsb2NrLCB2YWx1ZSBvZiA0KVxuICogLSAxMDAwMDEwMCAoQSBsYXN0IG1ldGFkYXRhIGNvbW1lbnQgYmxvY2ssIHZhbHVlIG9mIDEzMilcbiAqXG4gKiBTaW1pbGFybHksIHRoZSBwaWN0dXJlIGJsb2NrIGhlYWRlciB2YWx1ZXMgYXJlIDYgYW5kIDEyOC5cbiAqXG4gKiBBbGwgdmFsdWVzIGZvciBNRVRBREFUQV9CTE9DS19IRUFERVIgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiBodHRwczovL3hpcGgub3JnL2ZsYWMvZm9ybWF0Lmh0bWwjbWV0YWRhdGFfYmxvY2tfaGVhZGVyXG4gKi9cblxudmFyIENPTU1FTlRfSEVBREVSUyA9IFs0LCAxMzJdO1xudmFyIFBJQ1RVUkVfSEVBREVSUyA9IFs2LCAxMzRdOyAvLyBUaGVzZSBhcmUgdGhlIHBvc3NpYmxlIGltYWdlIHR5cGVzIGFzIGRlZmluZWQgYnkgdGhlIEZMQUMgc3BlY2lmaWNhdGlvbi5cblxudmFyIElNQUdFX1RZUEVTID0gW1wiT3RoZXJcIiwgXCIzMngzMiBwaXhlbHMgJ2ZpbGUgaWNvbicgKFBORyBvbmx5KVwiLCBcIk90aGVyIGZpbGUgaWNvblwiLCBcIkNvdmVyIChmcm9udClcIiwgXCJDb3ZlciAoYmFjaylcIiwgXCJMZWFmbGV0IHBhZ2VcIiwgXCJNZWRpYSAoZS5nLiBsYWJlbCBzaWRlIG9mIENEKVwiLCBcIkxlYWQgYXJ0aXN0L2xlYWQgcGVyZm9ybWVyL3NvbG9pc3RcIiwgXCJBcnRpc3QvcGVyZm9ybWVyXCIsIFwiQ29uZHVjdG9yXCIsIFwiQmFuZC9PcmNoZXN0cmFcIiwgXCJDb21wb3NlclwiLCBcIkx5cmljaXN0L3RleHQgd3JpdGVyXCIsIFwiUmVjb3JkaW5nIExvY2F0aW9uXCIsIFwiRHVyaW5nIHJlY29yZGluZ1wiLCBcIkR1cmluZyBwZXJmb3JtYW5jZVwiLCBcIk1vdmllL3ZpZGVvIHNjcmVlbiBjYXB0dXJlXCIsIFwiQSBicmlnaHQgY29sb3VyZWQgZmlzaFwiLCBcIklsbHVzdHJhdGlvblwiLCBcIkJhbmQvYXJ0aXN0IGxvZ290eXBlXCIsIFwiUHVibGlzaGVyL1N0dWRpbyBsb2dvdHlwZVwiXTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBNZWRpYVRhZ1JlYWRlciB0aGF0IHBhcnNlcyBGTEFDIHRhZ3MuXG4gKi9cbnZhciBGTEFDVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKEZMQUNUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gRkxBQ1RhZ1JlYWRlcigpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGTEFDVGFnUmVhZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEZMQUNUYWdSZWFkZXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfY29tbWVudE9mZnNldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9waWN0dXJlT2Zmc2V0XCIsIHZvaWQgMCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRkxBQ1RhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgdG8gbG9hZCB0aGUgZGF0YSBmcm9tIHRoZSBmaWxlLlxuICAgICAqXG4gICAgICogVG8gYmVnaW4gcHJvY2Vzc2luZyB0aGUgYmxvY2tzLCB0aGUgbmV4dCA0IGJ5dGVzIGFmdGVyIHRoZSBpbml0aWFsIDQgYnl0ZXNcbiAgICAgKiAoYnl0ZXMgNCB0aHJvdWdoIDcpIGFyZSBsb2FkZWQuIEZyb20gdGhlcmUsIHRoZSByZXN0IG9mIHRoZSBsb2FkaW5nIHByb2Nlc3NcbiAgICAgKiBpcyBwYXNzZWQgb24gdG8gdGhlIF9sb2FkQmxvY2sgZnVuY3Rpb24sIHdoaWNoIHdpbGwgaGFuZGxlIHRoZSByZXN0IG9mIHRoZVxuICAgICAqIHBhcnNpbmcgZm9yIHRoZSBtZXRhZGF0YSBibG9ja3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gbWVkaWFGaWxlUmVhZGVyIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB1c2VkIHRvIHBhcnNlIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgb25jZSBfbG9hZERhdGEgaXMgY29tcGxldGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzQsIDddLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIHNlbGYuX2xvYWRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIDQsIGNhbGxiYWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gcGFyc2UgdGhlIGRpZmZlcmVudCBGTEFDIGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIFRoZSBGTEFDIHNwZWNpZmljYXRpb24gZG9lc24ndCBzcGVjaWZ5IGEgc3BlY2lmaWMgbG9jYXRpb24gZm9yIG1ldGFkYXRhIHRvIHJlc2lnbiwgYnV0XG4gICAgICogZGljdGF0ZXMgdGhhdCBpdCBtYXkgYmUgaW4gb25lIG9mIHZhcmlvdXMgYmxvY2tzIGxvY2F0ZWQgdGhyb3VnaG91dCB0aGUgZmlsZS4gVG8gbG9hZCB0aGVcbiAgICAgKiBtZXRhZGF0YSwgd2UgbXVzdCBsb2NhdGUgdGhlIGhlYWRlciBmaXJzdC4gVGhpcyBjYW4gYmUgZG9uZSBieSByZWFkaW5nIHRoZSBmaXJzdCBieXRlIG9mXG4gICAgICogZWFjaCBibG9jayB0byBkZXRlcm1pbmUgdGhlIGJsb2NrIHR5cGUuIEFmdGVyIHRoZSBibG9jayB0eXBlIGNvbWVzIGEgMjQgYml0IGludGVnZXIgdGhhdCBzdG9yZXNcbiAgICAgKiB0aGUgbGVuZ3RoIG9mIHRoZSBibG9jayBhcyBiaWcgZW5kaWFuLiBVc2luZyB0aGlzLCB3ZSBsb2NhdGUgdGhlIGJsb2NrIGFuZCBzdG9yZSB0aGUgb2Zmc2V0IGZvclxuICAgICAqIHBhcnNpbmcgbGF0ZXIuXG4gICAgICpcbiAgICAgKiBBZnRlciBlYWNoIGJsb2NrIGhhcyBiZWVuIHBhcnNlZCwgdGhlIF9uZXh0QmxvY2sgZnVuY3Rpb24gaXMgY2FsbGVkIGluIG9yZGVyXG4gICAgICogdG8gcGFyc2UgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBuZXh0IGJsb2NrLiBBbGwgYmxvY2tzIG5lZWQgdG8gYmUgcGFyc2VkIGluIG9yZGVyIHRvIGZpbmRcbiAgICAgKiBhbGwgb2YgdGhlIHBpY3R1cmUgYW5kIGNvbW1lbnQgYmxvY2tzLlxuICAgICAqXG4gICAgICogTW9yZSBpbmZvIG9uIHRoZSBGTEFDIHNwZWNpZmljYXRpb24gbWF5IGJlIGZvdW5kIGhlcmU6XG4gICAgICogaHR0cHM6Ly94aXBoLm9yZy9mbGFjL2Zvcm1hdC5odG1sXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IG1lZGlhRmlsZVJlYWRlciAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdXNlZCB0byBwYXJzZSB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCB0byBzdGFydCBjaGVja2luZyB0aGUgaGVhZGVyIGZyb20uXG4gICAgICogQHBhcmFtIHtMb2FkQ2FsbGJhY2tUeXBlfSBjYWxsYmFja3MgLSBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvbmNlIHRoZSBoZWFkZXIgaGFzIGJlZW4gZm91bmQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgLyogQXMgbWVudGlvbmVkIGFib3ZlLCB0aGlzIGZpcnN0IGJ5dGUgaXMgbG9hZGVkIHRvIHNlZSB3aGF0IG1ldGFkYXRhIHR5cGVcbiAgICAgICAqIHRoaXMgYmxvY2sgcmVwcmVzZW50cy5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgYmxvY2tIZWFkZXIgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgICAvKiBUaGUgbGFzdCB0aHJlZSBieXRlcyAoaW50ZWdlciAyNCkgY29udGFpbiBhIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgbGVuZ3RoXG4gICAgICAgKiBvZiB0aGUgZm9sbG93aW5nIG1ldGFkYXRhIGJsb2NrLiBUaGUgMSBpcyBhZGRlZCBpbiBvcmRlciB0byBzaGlmdCB0aGUgb2Zmc2V0XG4gICAgICAgKiBieSBvbmUgdG8gZ2V0IHRoZSBsYXN0IHRocmVlIGJ5dGVzIGluIHRoZSBibG9jayBoZWFkZXIuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGJsb2NrU2l6ZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRJbnRlZ2VyMjRBdChvZmZzZXQgKyAxLCB0cnVlKTtcbiAgICAgIC8qIFRoaXMgY29uZGl0aW9uYWwgY2hlY2tzIGlmIGJsb2NrSGVhZGVyICh0aGUgYnl0ZSByZXRyaWV2ZWQgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICogdHlwZSBvZiB0aGUgaGVhZGVyKSBpcyBvbmUgdGhlIGhlYWRlcnMgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAgICAgICpcbiAgICAgICAqIElmIHRoYXQgaXMgbm90IHRydWUsIHRoZSBibG9jayBpcyBza2lwcGVkIG92ZXIgYW5kIHRoZSBuZXh0IHJhbmdlIGlzIGxvYWRlZDpcbiAgICAgICAqIC0gb2Zmc2V0ICsgNCArIGJsb2NrU2l6ZSBhZGRzIDQgdG8gc2tpcCBvdmVyIHRoZSBpbml0aWFsIG1ldGFkYXRhIGhlYWRlciBhbmRcbiAgICAgICAqIGJsb2NrU2l6ZSB0byBza2lwIG92ZXIgdGhlIGJsb2NrIG92ZXJhbGwsIHBsYWNpbmcgaXQgYXQgdGhlIGhlYWQgb2YgdGhlIG5leHRcbiAgICAgICAqIG1ldGFkYXRhIGhlYWRlci5cbiAgICAgICAqIC0gb2Zmc2V0ICsgNCArIDQgKyBibG9ja1NpemUgZG9lcyB0aGUgc2FtZSB0aGluZyBhcyB0aGUgcHJldmlvdXMgYmxvY2sgd2l0aFxuICAgICAgICogdGhlIGV4Y2VwdGlvbiBvZiBhZGRpbmcgYW5vdGhlciA0IGJ5dGVzIHRvIG1vdmUgaXQgdG8gdGhlIGVuZCBvZiB0aGUgbmV3IG1ldGFkYXRhXG4gICAgICAgKiBoZWFkZXIuXG4gICAgICAgKi9cblxuICAgICAgaWYgKENPTU1FTlRfSEVBREVSUy5pbmRleE9mKGJsb2NrSGVhZGVyKSAhPT0gLTEpIHtcbiAgICAgICAgLyogNCBpcyBhZGRlZCB0byBvZmZzZXQgdG8gbW92ZSBpdCB0byB0aGUgaGVhZCBvZiB0aGUgYWN0dWFsIG1ldGFkYXRhLlxuICAgICAgICAgKiBUaGUgcmFuZ2Ugc3RhcnRpbmcgZnJvbSBvZmZzZXRNYXRhZGF0YSAodGhlIGJlZ2lubmluZyBvZiB0aGUgYmxvY2spXG4gICAgICAgICAqIGFuZCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZSAodGhlIGVuZCBvZiB0aGUgYmxvY2spIGlzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBvZmZzZXRNZXRhZGF0YSA9IG9mZnNldCArIDQ7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldE1ldGFkYXRhLCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbW1lbnRPZmZzZXQgPSBvZmZzZXRNZXRhZGF0YTtcblxuICAgICAgICAgICAgc2VsZi5fbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFBJQ1RVUkVfSEVBREVSUy5pbmRleE9mKGJsb2NrSGVhZGVyKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG9mZnNldE1ldGFkYXRhID0gb2Zmc2V0ICsgNDtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0TWV0YWRhdGEsIG9mZnNldE1ldGFkYXRhICsgYmxvY2tTaXplXSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fcGljdHVyZU9mZnNldCA9IG9mZnNldE1ldGFkYXRhO1xuXG4gICAgICAgICAgICBzZWxmLl9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gdXNlZCB0byBsb2FkIHRoZSBuZXh0IHJhbmdlIGFuZCByZXNwZWN0aXZlIGJsb2NrLlxuICAgICAqXG4gICAgICogSWYgdGhlIG1ldGFkYXRhIGJsb2NrIHRoYXQgd2FzIGlkZW50aWZpZWQgaXMgbm90IHRoZSBsYXN0IGJsb2NrIGJlZm9yZSB0aGVcbiAgICAgKiBhdWRpbyBibG9ja3MsIHRoZSBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIGxvYWRpbmcgdGhlIG5leHQgYmxvY2tzLiBJZiBpdCBpc1xuICAgICAqIHRoZSBsYXN0IGJsb2NrIChpZGVudGlmaWVkIGJ5IGFueSB2YWx1ZXMgZ3JlYXRlciB0aGFuIDEyNywgc2VlIEZMQUMgc3BlYy4pLFxuICAgICAqIHRoZSBmdW5jdGlvbiB3aWxsIGRldGVybWluZSB3aGV0aGVyIGEgY29tbWVudCBibG9jayBoYWQgYmVlbiBpZGVudGlmaWVkLlxuICAgICAqXG4gICAgICogSWYgdGhlIGJsb2NrIGRvZXMgbm90IGV4aXN0LCB0aGUgZXJyb3IgY2FsbGJhY2sgaXMgY2FsbGVkLiBPdGhlcndpc2UsIHRoZSBmdW5jdGlvblxuICAgICAqIHdpbGwgY2FsbCB0aGUgc3VjY2VzcyBjYWxsYmFjaywgYWxsb3dpbmcgZGF0YSBwYXJzaW5nIHRvIGJlZ2luLlxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBtZWRpYUZpbGVSZWFkZXIgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHVzZWQgdG8gcGFyc2UgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgdGhhdCB0aGUgZXhpc3RpbmcgaGVhZGVyIHdhcyBsb2NhdGVkIGF0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja0hlYWRlciAtIEFuIGludGVnZXIgcmVmbGVjdGluZyB0aGUgaGVhZGVyIHR5cGUgb2YgdGhlIGJsb2NrLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja1NpemUgLSBUaGUgc2l6ZSBvZiB0aGUgcHJldmlvdXNseSBwcm9jZXNzZWQgaGVhZGVyLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbmV4dEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoYmxvY2tIZWFkZXIgPiAxMjcpIHtcbiAgICAgICAgaWYgKCFzZWxmLl9jb21tZW50T2Zmc2V0KSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibG9hZERhdGFcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBcIkNvbW1lbnQgYmxvY2sgY291bGQgbm90IGJlIGZvdW5kLlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyA0ICsgYmxvY2tTaXplLCBvZmZzZXQgKyA0ICsgNCArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvYWRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCArIDQgKyBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRoZSB0YWdzLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBvdmVydmlldyBvZiB0aGUgVm9yYmlzQ29tbWVudCBmb3JtYXQgYW5kIHdoYXQgdGhpcyBmdW5jdGlvbiBhdHRlbXB0cyB0b1xuICAgICAqIHJldHJpZXZlOlxuICAgICAqIC0gRmlyc3QgNCBieXRlczogYSBsb25nIHRoYXQgY29udGFpbnMgdGhlIGxlbmd0aCBvZiB0aGUgdmVuZG9yIHN0cmluZy5cbiAgICAgKiAtIE5leHQgbiBieXRlczogdGhlIHZlbmRvciBzdHJpbmcgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKiAtIE5leHQgNCBieXRlczogYSBsb25nIHJlcHJlc2VudGluZyBob3cgbWFueSBjb21tZW50cyBhcmUgaW4gdGhpcyBibG9ja1xuICAgICAqIEZvciBlYWNoIGNvbW1lbnQgdGhhdCBleGlzdHM6XG4gICAgICogLSBGaXJzdCA0IGJ5dGVzOiBhIGxvbmcgcmVwcmVzZW50aW5nIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1lbnRcbiAgICAgKiAtIE5leHQgbiBieXRlczogdGhlIGNvbW1lbnQgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKiBUaGUgY29tbWVudCBzdHJpbmcgd2lsbCB1c3VhbGx5IGFwcGVhciBpbiBhIGZvcm1hdCBzaW1pbGFyIHRvOlxuICAgICAqIEFSVElTVD1tZVxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBsb25ncyBhbmQgaW50ZWdlcnMgaW4gdGhpcyBibG9jayBhcmUgZW5jb2RlZCBpbiBsaXR0bGUgZW5kaWFuXG4gICAgICogYXMgb3Bwb3NlZCB0byBiaWcgZW5kaWFuIGZvciB0aGUgcmVzdCBvZiB0aGUgRkxBQyBzcGVjLlxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBkYXRhIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB0byBwYXJzZSB0aGUgZmlsZSB3aXRoLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW3RhZ3NdIC0gT3B0aW9uYWwgdGFncyB0byBhbHNvIGJlIHJldHJpZXZlZCBmcm9tIHRoZSBmaWxlLlxuICAgICAqIEByZXR1cm4ge1RhZ1R5cGV9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRhZyBpbmZvcm1hdGlvbiBmb3IgdGhlIGZpbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIHZlbmRvckxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KHRoaXMuX2NvbW1lbnRPZmZzZXQsIGZhbHNlKTtcbiAgICAgIHZhciBvZmZzZXRWZW5kb3IgPSB0aGlzLl9jb21tZW50T2Zmc2V0ICsgNDtcbiAgICAgIC8qIFRoaXMgbGluZSBpcyBhYmxlIHRvIHJldHJpZXZlIHRoZSB2ZW5kb3Igc3RyaW5nIHRoYXQgdGhlIFZvcmJpc0NvbW1lbnQgYmxvY2tcbiAgICAgICAqIGNvbnRhaW5zLiBIb3dldmVyLCBpdCBpcyBub3QgcGFydCBvZiB0aGUgdGFncyB0aGF0IEpTTWVkaWFUYWdzIG5vcm1hbGx5IHJldHJpZXZlcyxcbiAgICAgICAqIGFuZCBpcyB0aGVyZWZvcmUgY29tbWVudGVkIG91dC5cbiAgICAgICAqL1xuICAgICAgLy8gdmFyIHZlbmRvciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXRWZW5kb3IsIHZlbmRvckxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuXG4gICAgICB2YXIgb2Zmc2V0TGlzdCA9IHZlbmRvckxlbmd0aCArIG9mZnNldFZlbmRvcjtcbiAgICAgIC8qIFRvIGdldCB0aGUgbWV0YWRhdGEgZnJvbSB0aGUgYmxvY2ssIHdlIGZpcnN0IGdldCB0aGUgbG9uZyB0aGF0IGNvbnRhaW5zIHRoZVxuICAgICAgICogbnVtYmVyIG9mIGFjdHVhbCBjb21tZW50IHZhbHVlcyB0aGF0IGFyZSBleGlzdGVudCB3aXRoaW4gdGhlIGJsb2NrLlxuICAgICAgICpcbiAgICAgICAqIEFzIHdlIGxvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIGNvbW1lbnQgYmxvY2tzLCB3ZSBnZXQgdGhlIGRhdGEgbGVuZ3RoIGluIG9yZGVyIHRvXG4gICAgICAgKiBnZXQgdGhlIHJpZ2h0IHNpemUgc3RyaW5nLCBhbmQgdGhlbiBkZXRlcm1pbmUgd2hpY2ggY2F0ZWdvcnkgdGhhdCBzdHJpbmcgZmFsbHMgdW5kZXIuXG4gICAgICAgKiBUaGUgZGF0YU9mZnNldCB2YXJpYWJsZSBpcyBjb25zdGFudGx5IHVwZGF0ZWQgc28gdGhhdCBpdCBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICAgICAgICogY29tbWVudCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBwYXJzZWQuXG4gICAgICAgKlxuICAgICAgICogQWRkaXRpb25zIG9mIDQgaGVyZSBhcmUgdXNlZCB0byBtb3ZlIHRoZSBvZmZzZXQgcGFzdCB0aGUgZmlyc3QgNCBieXRlcyB3aGljaCBvbmx5IGNvbnRhaW5cbiAgICAgICAqIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1lbnQuXG4gICAgICAgKi9cblxuICAgICAgdmFyIG51bUNvbW1lbnRzID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0TGlzdCwgZmFsc2UpO1xuICAgICAgdmFyIGRhdGFPZmZzZXQgPSBvZmZzZXRMaXN0ICsgNDtcbiAgICAgIHZhciB0aXRsZSwgYXJ0aXN0LCBhbGJ1bSwgdHJhY2ssIGdlbnJlLCBwaWN0dXJlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbW1lbnRzOyBpKyspIHtcbiAgICAgICAgdmFyIF9kYXRhTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQoZGF0YU9mZnNldCwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBzID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KGRhdGFPZmZzZXQgKyA0LCBfZGF0YUxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuICAgICAgICB2YXIgZCA9IHMuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBzcGxpdCA9IFtzLnNsaWNlKDAsIGQpLCBzLnNsaWNlKGQgKyAxKV07XG5cbiAgICAgICAgc3dpdGNoIChzcGxpdFswXSkge1xuICAgICAgICAgIGNhc2UgXCJUSVRMRVwiOlxuICAgICAgICAgICAgdGl0bGUgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkFSVElTVFwiOlxuICAgICAgICAgICAgYXJ0aXN0ID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJBTEJVTVwiOlxuICAgICAgICAgICAgYWxidW0gPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIlRSQUNLTlVNQkVSXCI6XG4gICAgICAgICAgICB0cmFjayA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiR0VOUkVcIjpcbiAgICAgICAgICAgIGdlbnJlID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFPZmZzZXQgKz0gNCArIF9kYXRhTGVuZ3RoO1xuICAgICAgfVxuICAgICAgLyogSWYgYSBwaWN0dXJlIG9mZnNldCB3YXMgZm91bmQgYW5kIGFzc2lnbmVkLCB0aGVuIHRoZSByZWFkZXIgd2lsbCBzdGFydCBwcm9jZXNzaW5nXG4gICAgICAgKiB0aGUgcGljdHVyZSBibG9jayBmcm9tIHRoYXQgcG9pbnQuXG4gICAgICAgKlxuICAgICAgICogQWxsIHRoZSBsZW5ndGhzIGZvciB0aGUgcGljdHVyZSBkYXRhIGNhbiBiZSBmb3VuZCBvbmxpbmUgaGVyZTpcbiAgICAgICAqIGh0dHBzOi8veGlwaC5vcmcvZmxhYy9mb3JtYXQuaHRtbCNtZXRhZGF0YV9ibG9ja19waWN0dXJlXG4gICAgICAgKi9cblxuXG4gICAgICBpZiAodGhpcy5fcGljdHVyZU9mZnNldCkge1xuICAgICAgICB2YXIgaW1hZ2VUeXBlID0gZGF0YS5nZXRMb25nQXQodGhpcy5fcGljdHVyZU9mZnNldCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXRNaW1lTGVuZ3RoID0gdGhpcy5fcGljdHVyZU9mZnNldCArIDQ7XG4gICAgICAgIHZhciBtaW1lTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0TWltZUxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXRNaW1lID0gb2Zmc2V0TWltZUxlbmd0aCArIDQ7XG4gICAgICAgIHZhciBtaW1lID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXRNaW1lLCBtaW1lTGVuZ3RoKTtcbiAgICAgICAgdmFyIG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoID0gb2Zmc2V0TWltZSArIG1pbWVMZW5ndGg7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbkxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldERlc2NyaXB0aW9uID0gb2Zmc2V0RGVzY3JpcHRpb25MZW5ndGggKyA0O1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0RGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBvZmZzZXREYXRhTGVuZ3RoID0gb2Zmc2V0RGVzY3JpcHRpb24gKyBkZXNjcmlwdGlvbkxlbmd0aCArIDE2O1xuICAgICAgICB2YXIgZGF0YUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldERhdGFMZW5ndGgsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0RGF0YSA9IG9mZnNldERhdGFMZW5ndGggKyA0O1xuICAgICAgICB2YXIgaW1hZ2VEYXRhID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldERhdGEsIGRhdGFMZW5ndGgsIHRydWUpO1xuICAgICAgICBwaWN0dXJlID0ge1xuICAgICAgICAgIGZvcm1hdDogbWltZSxcbiAgICAgICAgICB0eXBlOiBJTUFHRV9UWVBFU1tpbWFnZVR5cGVdLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkYXRhOiBpbWFnZURhdGFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZyA9IHtcbiAgICAgICAgdHlwZTogXCJGTEFDXCIsXG4gICAgICAgIHZlcnNpb246IFwiMVwiLFxuICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgICBcImFydGlzdFwiOiBhcnRpc3QsXG4gICAgICAgICAgXCJhbGJ1bVwiOiBhbGJ1bSxcbiAgICAgICAgICBcInRyYWNrXCI6IHRyYWNrLFxuICAgICAgICAgIFwiZ2VucmVcIjogZ2VucmUsXG4gICAgICAgICAgXCJwaWN0dXJlXCI6IHBpY3R1cmVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYnl0ZSByYW5nZSBmb3IgdGhlIHRhZyBpZGVudGlmaWVyLlxuICAgICAqXG4gICAgICogQmVjYXVzZSB0aGUgVm9yYmlzIGNvbW1lbnQgYmxvY2sgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgaW4gYSBzcGVjaWZpZWRcbiAgICAgKiBsb2NhdGlvbiwgd2UgY2FuIG9ubHkgbG9hZCB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgZmlsZSB0byBjb25maXJtIGl0XG4gICAgICogaXMgYSBGTEFDIGZpcnN0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qnl0ZVJhbmdlfSBUaGUgYnl0ZSByYW5nZSB0aGF0IGlkZW50aWZpZXMgdGhlIHRhZyBmb3IgYSBGTEFDLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IEZMQUNfSEVBREVSX1NJWkVcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhpcyByZWFkZXIgY2FuIHJlYWQgYSBjZXJ0YWluIHRhZyBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNoZWNrcyB0aGF0IHRoZSBmaXJzdCA0IGNoYXJhY3RlcnMgaW4gdGhlIGZpbGUgYXJlIGZMYUMsIHdoaWNoXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBGTEFDIGZpbGUgc3BlY2lmaWNhdGlvbiBzaG91bGQgYmUgdGhlIGNoYXJhY3RlcnMgdGhhdFxuICAgICAqIGluZGljYXRlIGEgRkxBQyBmaWxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgaGVhZGVyIGlzIGZMYUMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSgwLCA0KSk7XG4gICAgICByZXR1cm4gaWQgPT09ICdmTGFDJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRkxBQ1RhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZMQUNUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYVRhZ1JlYWRlclwiOjEyfV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgSUQzdjFUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoSUQzdjFUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gSUQzdjFUYWdSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElEM3YxVGFnUmVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSUQzdjFUYWdSZWFkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElEM3YxVGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgZmlsZVNpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0U2l6ZSgpO1xuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbZmlsZVNpemUgLSAxMjgsIGZpbGVTaXplIC0gMV0sIGNhbGxiYWNrcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gZGF0YS5nZXRTaXplKCkgLSAxMjg7XG4gICAgICB2YXIgdGl0bGUgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgYXJ0aXN0ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDMzLCAzMCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciBhbGJ1bSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA2MywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgeWVhciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA5MywgNCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciB0cmFja0ZsYWcgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDI4KTtcbiAgICAgIHZhciB0cmFjayA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDk3ICsgMjkpO1xuXG4gICAgICBpZiAodHJhY2tGbGFnID09IDAgJiYgdHJhY2sgIT0gMCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IFwiMS4xXCI7XG4gICAgICAgIHZhciBjb21tZW50ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDk3LCAyOCkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gXCIxLjBcIjtcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgOTcsIDMwKS50b1N0cmluZygpO1xuICAgICAgICB0cmFjayA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBnZW5yZUlkeCA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDk3ICsgMzApO1xuXG4gICAgICBpZiAoZ2VucmVJZHggPCAyNTUpIHtcbiAgICAgICAgdmFyIGdlbnJlID0gR0VOUkVTW2dlbnJlSWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBnZW5yZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSB7XG4gICAgICAgIFwidHlwZVwiOiBcIklEM1wiLFxuICAgICAgICBcInZlcnNpb25cIjogdmVyc2lvbixcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlLFxuICAgICAgICAgIFwiYXJ0aXN0XCI6IGFydGlzdCxcbiAgICAgICAgICBcImFsYnVtXCI6IGFsYnVtLFxuICAgICAgICAgIFwieWVhclwiOiB5ZWFyLFxuICAgICAgICAgIFwiY29tbWVudFwiOiBjb21tZW50LFxuICAgICAgICAgIFwiZ2VucmVcIjogZ2VucmVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IGlzIG5vdCBoYXBweSB3aXRoIGFkZGluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHRhZy50YWdzLnRyYWNrID0gdHJhY2s7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gVGhlIGlkZW50aWZpZXIgaXMgVEFHIGFuZCBpcyBhdCBvZmZzZXQ6IC0xMjguIEhvd2V2ZXIsIHRvIGF2b2lkIGFcbiAgICAgIC8vIGZldGNoIGZvciB0aGUgdGFnIGlkZW50aWZpZXIgYW5kIGFub3RoZXIgZm9yIHRoZSBkYXRhLCB3ZSBsb2FkIHRoZVxuICAgICAgLy8gZW50aXJlIGRhdGEgc2luY2UgaXQncyBzbyBzbWFsbC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogLTEyOCxcbiAgICAgICAgbGVuZ3RoOiAxMjhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSgwLCAzKSk7XG4gICAgICByZXR1cm4gaWQgPT09IFwiVEFHXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElEM3YxVGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG5cbnZhciBHRU5SRVMgPSBbXCJCbHVlc1wiLCBcIkNsYXNzaWMgUm9ja1wiLCBcIkNvdW50cnlcIiwgXCJEYW5jZVwiLCBcIkRpc2NvXCIsIFwiRnVua1wiLCBcIkdydW5nZVwiLCBcIkhpcC1Ib3BcIiwgXCJKYXp6XCIsIFwiTWV0YWxcIiwgXCJOZXcgQWdlXCIsIFwiT2xkaWVzXCIsIFwiT3RoZXJcIiwgXCJQb3BcIiwgXCJSJkJcIiwgXCJSYXBcIiwgXCJSZWdnYWVcIiwgXCJSb2NrXCIsIFwiVGVjaG5vXCIsIFwiSW5kdXN0cmlhbFwiLCBcIkFsdGVybmF0aXZlXCIsIFwiU2thXCIsIFwiRGVhdGggTWV0YWxcIiwgXCJQcmFua3NcIiwgXCJTb3VuZHRyYWNrXCIsIFwiRXVyby1UZWNobm9cIiwgXCJBbWJpZW50XCIsIFwiVHJpcC1Ib3BcIiwgXCJWb2NhbFwiLCBcIkphenorRnVua1wiLCBcIkZ1c2lvblwiLCBcIlRyYW5jZVwiLCBcIkNsYXNzaWNhbFwiLCBcIkluc3RydW1lbnRhbFwiLCBcIkFjaWRcIiwgXCJIb3VzZVwiLCBcIkdhbWVcIiwgXCJTb3VuZCBDbGlwXCIsIFwiR29zcGVsXCIsIFwiTm9pc2VcIiwgXCJBbHRlcm5Sb2NrXCIsIFwiQmFzc1wiLCBcIlNvdWxcIiwgXCJQdW5rXCIsIFwiU3BhY2VcIiwgXCJNZWRpdGF0aXZlXCIsIFwiSW5zdHJ1bWVudGFsIFBvcFwiLCBcIkluc3RydW1lbnRhbCBSb2NrXCIsIFwiRXRobmljXCIsIFwiR290aGljXCIsIFwiRGFya3dhdmVcIiwgXCJUZWNobm8tSW5kdXN0cmlhbFwiLCBcIkVsZWN0cm9uaWNcIiwgXCJQb3AtRm9sa1wiLCBcIkV1cm9kYW5jZVwiLCBcIkRyZWFtXCIsIFwiU291dGhlcm4gUm9ja1wiLCBcIkNvbWVkeVwiLCBcIkN1bHRcIiwgXCJHYW5nc3RhXCIsIFwiVG9wIDQwXCIsIFwiQ2hyaXN0aWFuIFJhcFwiLCBcIlBvcC9GdW5rXCIsIFwiSnVuZ2xlXCIsIFwiTmF0aXZlIEFtZXJpY2FuXCIsIFwiQ2FiYXJldFwiLCBcIk5ldyBXYXZlXCIsIFwiUHN5Y2hhZGVsaWNcIiwgXCJSYXZlXCIsIFwiU2hvd3R1bmVzXCIsIFwiVHJhaWxlclwiLCBcIkxvLUZpXCIsIFwiVHJpYmFsXCIsIFwiQWNpZCBQdW5rXCIsIFwiQWNpZCBKYXp6XCIsIFwiUG9sa2FcIiwgXCJSZXRyb1wiLCBcIk11c2ljYWxcIiwgXCJSb2NrICYgUm9sbFwiLCBcIkhhcmQgUm9ja1wiLCBcIkZvbGtcIiwgXCJGb2xrLVJvY2tcIiwgXCJOYXRpb25hbCBGb2xrXCIsIFwiU3dpbmdcIiwgXCJGYXN0IEZ1c2lvblwiLCBcIkJlYm9iXCIsIFwiTGF0aW5cIiwgXCJSZXZpdmFsXCIsIFwiQ2VsdGljXCIsIFwiQmx1ZWdyYXNzXCIsIFwiQXZhbnRnYXJkZVwiLCBcIkdvdGhpYyBSb2NrXCIsIFwiUHJvZ3Jlc3NpdmUgUm9ja1wiLCBcIlBzeWNoZWRlbGljIFJvY2tcIiwgXCJTeW1waG9uaWMgUm9ja1wiLCBcIlNsb3cgUm9ja1wiLCBcIkJpZyBCYW5kXCIsIFwiQ2hvcnVzXCIsIFwiRWFzeSBMaXN0ZW5pbmdcIiwgXCJBY291c3RpY1wiLCBcIkh1bW91clwiLCBcIlNwZWVjaFwiLCBcIkNoYW5zb25cIiwgXCJPcGVyYVwiLCBcIkNoYW1iZXIgTXVzaWNcIiwgXCJTb25hdGFcIiwgXCJTeW1waG9ueVwiLCBcIkJvb3R5IEJhc3NcIiwgXCJQcmltdXNcIiwgXCJQb3JuIEdyb292ZVwiLCBcIlNhdGlyZVwiLCBcIlNsb3cgSmFtXCIsIFwiQ2x1YlwiLCBcIlRhbmdvXCIsIFwiU2FtYmFcIiwgXCJGb2xrbG9yZVwiLCBcIkJhbGxhZFwiLCBcIlBvd2VyIEJhbGxhZFwiLCBcIlJoeXRobWljIFNvdWxcIiwgXCJGcmVlc3R5bGVcIiwgXCJEdWV0XCIsIFwiUHVuayBSb2NrXCIsIFwiRHJ1bSBTb2xvXCIsIFwiQWNhcGVsbGFcIiwgXCJFdXJvLUhvdXNlXCIsIFwiRGFuY2UgSGFsbFwiXTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjFUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgU3RyaW5nVXRpbHMgPSByZXF1aXJlKCcuL1N0cmluZ1V0aWxzJyk7XG5cbnZhciBBcnJheUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL0FycmF5RmlsZVJlYWRlcicpO1xuXG52YXIgRlJBTUVfREVTQ1JJUFRJT05TID0ge1xuICAvLyB2Mi4yXG4gIFwiQlVGXCI6IFwiUmVjb21tZW5kZWQgYnVmZmVyIHNpemVcIixcbiAgXCJDTlRcIjogXCJQbGF5IGNvdW50ZXJcIixcbiAgXCJDT01cIjogXCJDb21tZW50c1wiLFxuICBcIkNSQVwiOiBcIkF1ZGlvIGVuY3J5cHRpb25cIixcbiAgXCJDUk1cIjogXCJFbmNyeXB0ZWQgbWV0YSBmcmFtZVwiLFxuICBcIkVUQ1wiOiBcIkV2ZW50IHRpbWluZyBjb2Rlc1wiLFxuICBcIkVRVVwiOiBcIkVxdWFsaXphdGlvblwiLFxuICBcIkdFT1wiOiBcIkdlbmVyYWwgZW5jYXBzdWxhdGVkIG9iamVjdFwiLFxuICBcIklQTFwiOiBcIkludm9sdmVkIHBlb3BsZSBsaXN0XCIsXG4gIFwiTE5LXCI6IFwiTGlua2VkIGluZm9ybWF0aW9uXCIsXG4gIFwiTUNJXCI6IFwiTXVzaWMgQ0QgSWRlbnRpZmllclwiLFxuICBcIk1MTFwiOiBcIk1QRUcgbG9jYXRpb24gbG9va3VwIHRhYmxlXCIsXG4gIFwiUElDXCI6IFwiQXR0YWNoZWQgcGljdHVyZVwiLFxuICBcIlBPUFwiOiBcIlBvcHVsYXJpbWV0ZXJcIixcbiAgXCJSRVZcIjogXCJSZXZlcmJcIixcbiAgXCJSVkFcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudFwiLFxuICBcIlNMVFwiOiBcIlN5bmNocm9uaXplZCBseXJpYy90ZXh0XCIsXG4gIFwiU1RDXCI6IFwiU3luY2VkIHRlbXBvIGNvZGVzXCIsXG4gIFwiVEFMXCI6IFwiQWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRCUFwiOiBcIkJQTSAoQmVhdHMgUGVyIE1pbnV0ZSlcIixcbiAgXCJUQ01cIjogXCJDb21wb3NlclwiLFxuICBcIlRDT1wiOiBcIkNvbnRlbnQgdHlwZVwiLFxuICBcIlRDUlwiOiBcIkNvcHlyaWdodCBtZXNzYWdlXCIsXG4gIFwiVERBXCI6IFwiRGF0ZVwiLFxuICBcIlREWVwiOiBcIlBsYXlsaXN0IGRlbGF5XCIsXG4gIFwiVEVOXCI6IFwiRW5jb2RlZCBieVwiLFxuICBcIlRGVFwiOiBcIkZpbGUgdHlwZVwiLFxuICBcIlRJTVwiOiBcIlRpbWVcIixcbiAgXCJUS0VcIjogXCJJbml0aWFsIGtleVwiLFxuICBcIlRMQVwiOiBcIkxhbmd1YWdlKHMpXCIsXG4gIFwiVExFXCI6IFwiTGVuZ3RoXCIsXG4gIFwiVE1UXCI6IFwiTWVkaWEgdHlwZVwiLFxuICBcIlRPQVwiOiBcIk9yaWdpbmFsIGFydGlzdChzKS9wZXJmb3JtZXIocylcIixcbiAgXCJUT0ZcIjogXCJPcmlnaW5hbCBmaWxlbmFtZVwiLFxuICBcIlRPTFwiOiBcIk9yaWdpbmFsIEx5cmljaXN0KHMpL3RleHQgd3JpdGVyKHMpXCIsXG4gIFwiVE9SXCI6IFwiT3JpZ2luYWwgcmVsZWFzZSB5ZWFyXCIsXG4gIFwiVE9UXCI6IFwiT3JpZ2luYWwgYWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRQMVwiOiBcIkxlYWQgYXJ0aXN0KHMpL0xlYWQgcGVyZm9ybWVyKHMpL1NvbG9pc3QocykvUGVyZm9ybWluZyBncm91cFwiLFxuICBcIlRQMlwiOiBcIkJhbmQvT3JjaGVzdHJhL0FjY29tcGFuaW1lbnRcIixcbiAgXCJUUDNcIjogXCJDb25kdWN0b3IvUGVyZm9ybWVyIHJlZmluZW1lbnRcIixcbiAgXCJUUDRcIjogXCJJbnRlcnByZXRlZCwgcmVtaXhlZCwgb3Igb3RoZXJ3aXNlIG1vZGlmaWVkIGJ5XCIsXG4gIFwiVFBBXCI6IFwiUGFydCBvZiBhIHNldFwiLFxuICBcIlRQQlwiOiBcIlB1Ymxpc2hlclwiLFxuICBcIlRSQ1wiOiBcIklTUkMgKEludGVybmF0aW9uYWwgU3RhbmRhcmQgUmVjb3JkaW5nIENvZGUpXCIsXG4gIFwiVFJEXCI6IFwiUmVjb3JkaW5nIGRhdGVzXCIsXG4gIFwiVFJLXCI6IFwiVHJhY2sgbnVtYmVyL1Bvc2l0aW9uIGluIHNldFwiLFxuICBcIlRTSVwiOiBcIlNpemVcIixcbiAgXCJUU1NcIjogXCJTb2Z0d2FyZS9oYXJkd2FyZSBhbmQgc2V0dGluZ3MgdXNlZCBmb3IgZW5jb2RpbmdcIixcbiAgXCJUVDFcIjogXCJDb250ZW50IGdyb3VwIGRlc2NyaXB0aW9uXCIsXG4gIFwiVFQyXCI6IFwiVGl0bGUvU29uZ25hbWUvQ29udGVudCBkZXNjcmlwdGlvblwiLFxuICBcIlRUM1wiOiBcIlN1YnRpdGxlL0Rlc2NyaXB0aW9uIHJlZmluZW1lbnRcIixcbiAgXCJUWFRcIjogXCJMeXJpY2lzdC90ZXh0IHdyaXRlclwiLFxuICBcIlRYWFwiOiBcIlVzZXIgZGVmaW5lZCB0ZXh0IGluZm9ybWF0aW9uIGZyYW1lXCIsXG4gIFwiVFlFXCI6IFwiWWVhclwiLFxuICBcIlVGSVwiOiBcIlVuaXF1ZSBmaWxlIGlkZW50aWZpZXJcIixcbiAgXCJVTFRcIjogXCJVbnN5Y2hyb25pemVkIGx5cmljL3RleHQgdHJhbnNjcmlwdGlvblwiLFxuICBcIldBRlwiOiBcIk9mZmljaWFsIGF1ZGlvIGZpbGUgd2VicGFnZVwiLFxuICBcIldBUlwiOiBcIk9mZmljaWFsIGFydGlzdC9wZXJmb3JtZXIgd2VicGFnZVwiLFxuICBcIldBU1wiOiBcIk9mZmljaWFsIGF1ZGlvIHNvdXJjZSB3ZWJwYWdlXCIsXG4gIFwiV0NNXCI6IFwiQ29tbWVyY2lhbCBpbmZvcm1hdGlvblwiLFxuICBcIldDUFwiOiBcIkNvcHlyaWdodC9MZWdhbCBpbmZvcm1hdGlvblwiLFxuICBcIldQQlwiOiBcIlB1Ymxpc2hlcnMgb2ZmaWNpYWwgd2VicGFnZVwiLFxuICBcIldYWFwiOiBcIlVzZXIgZGVmaW5lZCBVUkwgbGluayBmcmFtZVwiLFxuICAvLyB2Mi4zXG4gIFwiQUVOQ1wiOiBcIkF1ZGlvIGVuY3J5cHRpb25cIixcbiAgXCJBUElDXCI6IFwiQXR0YWNoZWQgcGljdHVyZVwiLFxuICBcIkFTUElcIjogXCJBdWRpbyBzZWVrIHBvaW50IGluZGV4XCIsXG4gIFwiQ0hBUFwiOiBcIkNoYXB0ZXJcIixcbiAgXCJDVE9DXCI6IFwiVGFibGUgb2YgY29udGVudHNcIixcbiAgXCJDT01NXCI6IFwiQ29tbWVudHNcIixcbiAgXCJDT01SXCI6IFwiQ29tbWVyY2lhbCBmcmFtZVwiLFxuICBcIkVOQ1JcIjogXCJFbmNyeXB0aW9uIG1ldGhvZCByZWdpc3RyYXRpb25cIixcbiAgXCJFUVUyXCI6IFwiRXF1YWxpc2F0aW9uICgyKVwiLFxuICBcIkVRVUFcIjogXCJFcXVhbGl6YXRpb25cIixcbiAgXCJFVENPXCI6IFwiRXZlbnQgdGltaW5nIGNvZGVzXCIsXG4gIFwiR0VPQlwiOiBcIkdlbmVyYWwgZW5jYXBzdWxhdGVkIG9iamVjdFwiLFxuICBcIkdSSURcIjogXCJHcm91cCBpZGVudGlmaWNhdGlvbiByZWdpc3RyYXRpb25cIixcbiAgXCJJUExTXCI6IFwiSW52b2x2ZWQgcGVvcGxlIGxpc3RcIixcbiAgXCJMSU5LXCI6IFwiTGlua2VkIGluZm9ybWF0aW9uXCIsXG4gIFwiTUNESVwiOiBcIk11c2ljIENEIGlkZW50aWZpZXJcIixcbiAgXCJNTExUXCI6IFwiTVBFRyBsb2NhdGlvbiBsb29rdXAgdGFibGVcIixcbiAgXCJPV05FXCI6IFwiT3duZXJzaGlwIGZyYW1lXCIsXG4gIFwiUFJJVlwiOiBcIlByaXZhdGUgZnJhbWVcIixcbiAgXCJQQ05UXCI6IFwiUGxheSBjb3VudGVyXCIsXG4gIFwiUE9QTVwiOiBcIlBvcHVsYXJpbWV0ZXJcIixcbiAgXCJQT1NTXCI6IFwiUG9zaXRpb24gc3luY2hyb25pc2F0aW9uIGZyYW1lXCIsXG4gIFwiUkJVRlwiOiBcIlJlY29tbWVuZGVkIGJ1ZmZlciBzaXplXCIsXG4gIFwiUlZBMlwiOiBcIlJlbGF0aXZlIHZvbHVtZSBhZGp1c3RtZW50ICgyKVwiLFxuICBcIlJWQURcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudFwiLFxuICBcIlJWUkJcIjogXCJSZXZlcmJcIixcbiAgXCJTRUVLXCI6IFwiU2VlayBmcmFtZVwiLFxuICBcIlNZTFRcIjogXCJTeW5jaHJvbml6ZWQgbHlyaWMvdGV4dFwiLFxuICBcIlNZVENcIjogXCJTeW5jaHJvbml6ZWQgdGVtcG8gY29kZXNcIixcbiAgXCJUQUxCXCI6IFwiQWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRCUE1cIjogXCJCUE0gKGJlYXRzIHBlciBtaW51dGUpXCIsXG4gIFwiVENPTVwiOiBcIkNvbXBvc2VyXCIsXG4gIFwiVENPTlwiOiBcIkNvbnRlbnQgdHlwZVwiLFxuICBcIlRDT1BcIjogXCJDb3B5cmlnaHQgbWVzc2FnZVwiLFxuICBcIlREQVRcIjogXCJEYXRlXCIsXG4gIFwiVERMWVwiOiBcIlBsYXlsaXN0IGRlbGF5XCIsXG4gIFwiVERSQ1wiOiBcIlJlY29yZGluZyB0aW1lXCIsXG4gIFwiVERSTFwiOiBcIlJlbGVhc2UgdGltZVwiLFxuICBcIlREVEdcIjogXCJUYWdnaW5nIHRpbWVcIixcbiAgXCJURU5DXCI6IFwiRW5jb2RlZCBieVwiLFxuICBcIlRFWFRcIjogXCJMeXJpY2lzdC9UZXh0IHdyaXRlclwiLFxuICBcIlRGTFRcIjogXCJGaWxlIHR5cGVcIixcbiAgXCJUSU1FXCI6IFwiVGltZVwiLFxuICBcIlRJUExcIjogXCJJbnZvbHZlZCBwZW9wbGUgbGlzdFwiLFxuICBcIlRJVDFcIjogXCJDb250ZW50IGdyb3VwIGRlc2NyaXB0aW9uXCIsXG4gIFwiVElUMlwiOiBcIlRpdGxlL3NvbmduYW1lL2NvbnRlbnQgZGVzY3JpcHRpb25cIixcbiAgXCJUSVQzXCI6IFwiU3VidGl0bGUvRGVzY3JpcHRpb24gcmVmaW5lbWVudFwiLFxuICBcIlRLRVlcIjogXCJJbml0aWFsIGtleVwiLFxuICBcIlRMQU5cIjogXCJMYW5ndWFnZShzKVwiLFxuICBcIlRMRU5cIjogXCJMZW5ndGhcIixcbiAgXCJUTUNMXCI6IFwiTXVzaWNpYW4gY3JlZGl0cyBsaXN0XCIsXG4gIFwiVE1FRFwiOiBcIk1lZGlhIHR5cGVcIixcbiAgXCJUTU9PXCI6IFwiTW9vZFwiLFxuICBcIlRPQUxcIjogXCJPcmlnaW5hbCBhbGJ1bS9tb3ZpZS9zaG93IHRpdGxlXCIsXG4gIFwiVE9GTlwiOiBcIk9yaWdpbmFsIGZpbGVuYW1lXCIsXG4gIFwiVE9MWVwiOiBcIk9yaWdpbmFsIGx5cmljaXN0KHMpL3RleHQgd3JpdGVyKHMpXCIsXG4gIFwiVE9QRVwiOiBcIk9yaWdpbmFsIGFydGlzdChzKS9wZXJmb3JtZXIocylcIixcbiAgXCJUT1JZXCI6IFwiT3JpZ2luYWwgcmVsZWFzZSB5ZWFyXCIsXG4gIFwiVE9XTlwiOiBcIkZpbGUgb3duZXIvbGljZW5zZWVcIixcbiAgXCJUUEUxXCI6IFwiTGVhZCBwZXJmb3JtZXIocykvU29sb2lzdChzKVwiLFxuICBcIlRQRTJcIjogXCJCYW5kL29yY2hlc3RyYS9hY2NvbXBhbmltZW50XCIsXG4gIFwiVFBFM1wiOiBcIkNvbmR1Y3Rvci9wZXJmb3JtZXIgcmVmaW5lbWVudFwiLFxuICBcIlRQRTRcIjogXCJJbnRlcnByZXRlZCwgcmVtaXhlZCwgb3Igb3RoZXJ3aXNlIG1vZGlmaWVkIGJ5XCIsXG4gIFwiVFBPU1wiOiBcIlBhcnQgb2YgYSBzZXRcIixcbiAgXCJUUFJPXCI6IFwiUHJvZHVjZWQgbm90aWNlXCIsXG4gIFwiVFBVQlwiOiBcIlB1Ymxpc2hlclwiLFxuICBcIlRSQ0tcIjogXCJUcmFjayBudW1iZXIvUG9zaXRpb24gaW4gc2V0XCIsXG4gIFwiVFJEQVwiOiBcIlJlY29yZGluZyBkYXRlc1wiLFxuICBcIlRSU05cIjogXCJJbnRlcm5ldCByYWRpbyBzdGF0aW9uIG5hbWVcIixcbiAgXCJUUlNPXCI6IFwiSW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBvd25lclwiLFxuICBcIlRTT0FcIjogXCJBbGJ1bSBzb3J0IG9yZGVyXCIsXG4gIFwiVFNPUFwiOiBcIlBlcmZvcm1lciBzb3J0IG9yZGVyXCIsXG4gIFwiVFNPVFwiOiBcIlRpdGxlIHNvcnQgb3JkZXJcIixcbiAgXCJUU0laXCI6IFwiU2l6ZVwiLFxuICBcIlRTUkNcIjogXCJJU1JDIChpbnRlcm5hdGlvbmFsIHN0YW5kYXJkIHJlY29yZGluZyBjb2RlKVwiLFxuICBcIlRTU0VcIjogXCJTb2Z0d2FyZS9IYXJkd2FyZSBhbmQgc2V0dGluZ3MgdXNlZCBmb3IgZW5jb2RpbmdcIixcbiAgXCJUU1NUXCI6IFwiU2V0IHN1YnRpdGxlXCIsXG4gIFwiVFlFUlwiOiBcIlllYXJcIixcbiAgXCJUWFhYXCI6IFwiVXNlciBkZWZpbmVkIHRleHQgaW5mb3JtYXRpb24gZnJhbWVcIixcbiAgXCJVRklEXCI6IFwiVW5pcXVlIGZpbGUgaWRlbnRpZmllclwiLFxuICBcIlVTRVJcIjogXCJUZXJtcyBvZiB1c2VcIixcbiAgXCJVU0xUXCI6IFwiVW5zeWNocm9uaXplZCBseXJpYy90ZXh0IHRyYW5zY3JpcHRpb25cIixcbiAgXCJXQ09NXCI6IFwiQ29tbWVyY2lhbCBpbmZvcm1hdGlvblwiLFxuICBcIldDT1BcIjogXCJDb3B5cmlnaHQvTGVnYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXT0FGXCI6IFwiT2ZmaWNpYWwgYXVkaW8gZmlsZSB3ZWJwYWdlXCIsXG4gIFwiV09BUlwiOiBcIk9mZmljaWFsIGFydGlzdC9wZXJmb3JtZXIgd2VicGFnZVwiLFxuICBcIldPQVNcIjogXCJPZmZpY2lhbCBhdWRpbyBzb3VyY2Ugd2VicGFnZVwiLFxuICBcIldPUlNcIjogXCJPZmZpY2lhbCBpbnRlcm5ldCByYWRpbyBzdGF0aW9uIGhvbWVwYWdlXCIsXG4gIFwiV1BBWVwiOiBcIlBheW1lbnRcIixcbiAgXCJXUFVCXCI6IFwiUHVibGlzaGVycyBvZmZpY2lhbCB3ZWJwYWdlXCIsXG4gIFwiV1hYWFwiOiBcIlVzZXIgZGVmaW5lZCBVUkwgbGluayBmcmFtZVwiXG59O1xuXG52YXIgSUQzdjJGcmFtZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIElEM3YyRnJhbWVSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElEM3YyRnJhbWVSZWFkZXIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElEM3YyRnJhbWVSZWFkZXIsIG51bGwsIFt7XG4gICAga2V5OiBcImdldEZyYW1lUmVhZGVyRnVuY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnJhbWVSZWFkZXJGdW5jdGlvbihmcmFtZUlkKSB7XG4gICAgICBpZiAoZnJhbWVJZCBpbiBmcmFtZVJlYWRlckZ1bmN0aW9ucykge1xuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbZnJhbWVJZF07XG4gICAgICB9IGVsc2UgaWYgKGZyYW1lSWRbMF0gPT09IFwiVFwiKSB7XG4gICAgICAgIC8vIEFsbCBmcmFtZSBpZHMgc3RhcnRpbmcgd2l0aCBUIGFyZSB0ZXh0IHRhZ3MuXG4gICAgICAgIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1tcIlQqXCJdO1xuICAgICAgfSBlbHNlIGlmIChmcmFtZUlkWzBdID09PSBcIldcIikge1xuICAgICAgICAvLyBBbGwgZnJhbWUgaWRzIHN0YXJ0aW5nIHdpdGggVyBhcmUgdXJsIHRhZ3MuXG4gICAgICAgIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1tcIlcqXCJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgZnJhbWVzIGNvbnNpc3RzIG9mIGEgZnJhbWUgaGVhZGVyIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGZpZWxkc1xuICAgICAqIGNvbnRhaW5pbmcgdGhlIGFjdHVhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBUaGUgZnJhbWUgSUQgbWFkZSBvdXQgb2YgdGhlIGNoYXJhY3RlcnMgY2FwaXRhbCBBLVogYW5kIDAtOS4gSWRlbnRpZmllcnNcbiAgICAgKiBiZWdpbm5pbmcgd2l0aCBcIlhcIiwgXCJZXCIgYW5kIFwiWlwiIGFyZSBmb3IgZXhwZXJpbWVudGFsIHVzZSBhbmQgZnJlZSBmb3JcbiAgICAgKiBldmVyeW9uZSB0byB1c2UsIHdpdGhvdXQgdGhlIG5lZWQgdG8gc2V0IHRoZSBleHBlcmltZW50YWwgYml0IGluIHRoZSB0YWdcbiAgICAgKiBoZWFkZXIuIEhhdmUgaW4gbWluZCB0aGF0IHNvbWVvbmUgZWxzZSBtaWdodCBoYXZlIHVzZWQgdGhlIHNhbWUgaWRlbnRpZmllclxuICAgICAqIGFzIHlvdS4gQWxsIG90aGVyIGlkZW50aWZpZXJzIGFyZSBlaXRoZXIgdXNlZCBvciByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZS5cbiAgICAgKiBUaGUgZnJhbWUgSUQgaXMgZm9sbG93ZWQgYnkgYSBzaXplIGRlc2NyaXB0b3IsIG1ha2luZyBhIHRvdGFsIGhlYWRlciBzaXplXG4gICAgICogb2YgdGVuIGJ5dGVzIGluIGV2ZXJ5IGZyYW1lLiBUaGUgc2l6ZSBpcyBjYWxjdWxhdGVkIGFzIGZyYW1lIHNpemUgZXhjbHVkaW5nXG4gICAgICogZnJhbWUgaGVhZGVyIChmcmFtZSBzaXplIC0gMTApLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZEZyYW1lc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkRnJhbWVzKG9mZnNldCwgZW5kLCBkYXRhLCBpZDNoZWFkZXIsIHRhZ3MpIHtcbiAgICAgIHZhciBmcmFtZXMgPSB7fTtcblxuICAgICAgdmFyIGZyYW1lSGVhZGVyU2l6ZSA9IHRoaXMuX2dldEZyYW1lSGVhZGVyU2l6ZShpZDNoZWFkZXIpOyAvLyBjb25zb2xlLmxvZygnaGVhZGVyJywgaWQzaGVhZGVyKTtcblxuXG4gICAgICB3aGlsZSAoIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlYWQgYXQgbGVhc3QgdGhlIGZyYW1lIGhlYWRlclxuICAgICAgb2Zmc2V0IDwgZW5kIC0gZnJhbWVIZWFkZXJTaXplKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLl9yZWFkRnJhbWVIZWFkZXIoZGF0YSwgb2Zmc2V0LCBpZDNoZWFkZXIpO1xuXG4gICAgICAgIHZhciBmcmFtZUlkID0gaGVhZGVyLmlkOyAvLyBObyBmcmFtZSBJRCBzb21ldGltZXMgbWVhbnMgaXQncyB0aGUgbGFzdCBmcmFtZSAoR1RGTykuXG5cbiAgICAgICAgaWYgKCFmcmFtZUlkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmxhZ3MgPSBoZWFkZXIuZmxhZ3M7XG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBoZWFkZXIuc2l6ZTtcbiAgICAgICAgdmFyIGZyYW1lRGF0YU9mZnNldCA9IG9mZnNldCArIGhlYWRlci5oZWFkZXJTaXplO1xuICAgICAgICB2YXIgZnJhbWVEYXRhID0gZGF0YTsgLy8gY29uc29sZS5sb2cob2Zmc2V0LCBmcmFtZUlkLCBoZWFkZXIuc2l6ZSArIGhlYWRlci5oZWFkZXJTaXplLCBmbGFncyAmJiBmbGFncy5mb3JtYXQudW5zeW5jaHJvbmlzYXRpb24pO1xuICAgICAgICAvLyBhZHZhbmNlIGRhdGEgb2Zmc2V0IHRvIHRoZSBuZXh0IGZyYW1lIGRhdGFcblxuICAgICAgICBvZmZzZXQgKz0gaGVhZGVyLmhlYWRlclNpemUgKyBoZWFkZXIuc2l6ZTsgLy8gc2tpcCB1bndhbnRlZCB0YWdzXG5cbiAgICAgICAgaWYgKHRhZ3MgJiYgdGFncy5pbmRleE9mKGZyYW1lSWQpID09PSAtMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIFdvcmthcm91bmQ6IE1QM2V4dCBWMy4zLjE3IHBsYWNlcyBhIG5vbi1jb21wbGlhbnQgcGFkZGluZyBzdHJpbmcgYXRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgSUQzdjIgaGVhZGVyLiBBIHN0cmluZyBsaWtlIFwiTVAzZXh0IFYzLjMuMTkoYW5zaSlcIlxuICAgICAgICAvLyBpcyBhZGRlZCBtdWx0aXBsZSB0aW1lcyBhdCB0aGUgZW5kIG9mIHRoZSBJRDMgdGFnLiBNb3JlIGluZm9ybWF0aW9uXG4gICAgICAgIC8vIGFib3V0IHRoaXMgaXNzdWUgY2FuIGJlIGZvdW5kIGF0XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hYWRzbS9qc21lZGlhdGFncy9pc3N1ZXMvNTgjaXNzdWVjb21tZW50LTMxMzg2NTMzNlxuXG5cbiAgICAgICAgaWYgKGZyYW1lSWQgPT09ICdNUDNlJyB8fCBmcmFtZUlkID09PSAnXFx4MDBNUDMnIHx8IGZyYW1lSWQgPT09ICdcXHgwMFxceDAwTVAnIHx8IGZyYW1lSWQgPT09ICcgTVAzJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVuc3luY0RhdGE7XG5cbiAgICAgICAgaWYgKGZsYWdzICYmIGZsYWdzLmZvcm1hdC51bnN5bmNocm9uaXNhdGlvbikge1xuICAgICAgICAgIGZyYW1lRGF0YSA9IHRoaXMuZ2V0VW5zeW5jRmlsZVJlYWRlcihmcmFtZURhdGEsIGZyYW1lRGF0YU9mZnNldCwgZnJhbWVTaXplKTtcbiAgICAgICAgICBmcmFtZURhdGFPZmZzZXQgPSAwO1xuICAgICAgICAgIGZyYW1lU2l6ZSA9IGZyYW1lRGF0YS5nZXRTaXplKCk7XG4gICAgICAgIH0gLy8gdGhlIGZpcnN0IDQgYnl0ZXMgYXJlIHRoZSByZWFsIGRhdGEgc2l6ZVxuICAgICAgICAvLyAoYWZ0ZXIgdW5zeW5jaHJvbmlzYXRpb24gJiYgZW5jcnlwdGlvbilcblxuXG4gICAgICAgIGlmIChmbGFncyAmJiBmbGFncy5mb3JtYXQuZGF0YV9sZW5ndGhfaW5kaWNhdG9yKSB7XG4gICAgICAgICAgLy8gdmFyIGZyYW1lRGF0YVNpemUgPSBmcmFtZURhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQoZnJhbWVEYXRhT2Zmc2V0KTtcbiAgICAgICAgICBmcmFtZURhdGFPZmZzZXQgKz0gNDtcbiAgICAgICAgICBmcmFtZVNpemUgLT0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWFkRnJhbWVGdW5jID0gSUQzdjJGcmFtZVJlYWRlci5nZXRGcmFtZVJlYWRlckZ1bmN0aW9uKGZyYW1lSWQpO1xuICAgICAgICB2YXIgcGFyc2VkRGF0YSA9IHJlYWRGcmFtZUZ1bmMgPyByZWFkRnJhbWVGdW5jLmFwcGx5KHRoaXMsIFtmcmFtZURhdGFPZmZzZXQsIGZyYW1lU2l6ZSwgZnJhbWVEYXRhLCBmbGFncywgaWQzaGVhZGVyXSkgOiBudWxsO1xuXG4gICAgICAgIHZhciBkZXNjID0gdGhpcy5fZ2V0RnJhbWVEZXNjcmlwdGlvbihmcmFtZUlkKTtcblxuICAgICAgICB2YXIgZnJhbWUgPSB7XG4gICAgICAgICAgaWQ6IGZyYW1lSWQsXG4gICAgICAgICAgc2l6ZTogZnJhbWVTaXplLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgIGRhdGE6IHBhcnNlZERhdGFcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZnJhbWVJZCBpbiBmcmFtZXMpIHtcbiAgICAgICAgICBpZiAoZnJhbWVzW2ZyYW1lSWRdLmlkKSB7XG4gICAgICAgICAgICBmcmFtZXNbZnJhbWVJZF0gPSBbZnJhbWVzW2ZyYW1lSWRdXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmcmFtZXNbZnJhbWVJZF0ucHVzaChmcmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdID0gZnJhbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZyYW1lcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lSGVhZGVyU2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnJhbWVIZWFkZXJTaXplKGlkM2hlYWRlcikge1xuICAgICAgdmFyIG1ham9yID0gaWQzaGVhZGVyLm1ham9yO1xuXG4gICAgICBpZiAobWFqb3IgPT0gMikge1xuICAgICAgICByZXR1cm4gNjtcbiAgICAgIH0gZWxzZSBpZiAobWFqb3IgPT0gMyB8fCBtYWpvciA9PSA0KSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZEZyYW1lSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkRnJhbWVIZWFkZXIoZGF0YSwgb2Zmc2V0LCBpZDNoZWFkZXIpIHtcbiAgICAgIHZhciBtYWpvciA9IGlkM2hlYWRlci5tYWpvcjtcbiAgICAgIHZhciBmbGFncyA9IG51bGw7XG5cbiAgICAgIHZhciBmcmFtZUhlYWRlclNpemUgPSB0aGlzLl9nZXRGcmFtZUhlYWRlclNpemUoaWQzaGVhZGVyKTtcblxuICAgICAgc3dpdGNoIChtYWpvcikge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdmFyIGZyYW1lSWQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCwgMyk7XG4gICAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGRhdGEuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgMywgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDQpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQgKyA0LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdmFyIGZyYW1lSWQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCwgNCk7XG4gICAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGRhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0ICsgNCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZUlkID09IFN0cmluZy5mcm9tQ2hhckNvZGUoMCwgMCwgMCkgfHwgZnJhbWVJZCA9PSBTdHJpbmcuZnJvbUNoYXJDb2RlKDAsIDAsIDAsIDApKSB7XG4gICAgICAgIGZyYW1lSWQgPSBcIlwiO1xuICAgICAgfSAvLyBpZiBmcmFtZUlkIGlzIGVtcHR5IHRoZW4gaXQncyB0aGUgbGFzdCBmcmFtZVxuXG5cbiAgICAgIGlmIChmcmFtZUlkKSB7XG4gICAgICAgIC8vIHJlYWQgZnJhbWUgbWVzc2FnZSBhbmQgZm9ybWF0IGZsYWdzXG4gICAgICAgIGlmIChtYWpvciA+IDIpIHtcbiAgICAgICAgICBmbGFncyA9IHRoaXMuX3JlYWRGcmFtZUZsYWdzKGRhdGEsIG9mZnNldCArIDgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiaWRcIjogZnJhbWVJZCB8fCBcIlwiLFxuICAgICAgICBcInNpemVcIjogZnJhbWVTaXplIHx8IDAsXG4gICAgICAgIFwiaGVhZGVyU2l6ZVwiOiBmcmFtZUhlYWRlclNpemUgfHwgMCxcbiAgICAgICAgXCJmbGFnc1wiOiBmbGFnc1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRGcmFtZUZsYWdzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkRnJhbWVGbGFncyhkYXRhLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICB0YWdfYWx0ZXJfcHJlc2VydmF0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCA2KSxcbiAgICAgICAgICBmaWxlX2FsdGVyX3ByZXNlcnZhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNSksXG4gICAgICAgICAgcmVhZF9vbmx5OiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCA0KVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICBncm91cGluZ19pZGVudGl0eTogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDcpLFxuICAgICAgICAgIGNvbXByZXNzaW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMyksXG4gICAgICAgICAgZW5jcnlwdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDIpLFxuICAgICAgICAgIHVuc3luY2hyb25pc2F0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMSksXG4gICAgICAgICAgZGF0YV9sZW5ndGhfaW5kaWNhdG9yOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lRGVzY3JpcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZyYW1lRGVzY3JpcHRpb24oZnJhbWVJZCkge1xuICAgICAgaWYgKGZyYW1lSWQgaW4gRlJBTUVfREVTQ1JJUFRJT05TKSB7XG4gICAgICAgIHJldHVybiBGUkFNRV9ERVNDUklQVElPTlNbZnJhbWVJZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVbnN5bmNGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVuc3luY0ZpbGVSZWFkZXIoZGF0YSwgb2Zmc2V0LCBzaXplKSB7XG4gICAgICB2YXIgZnJhbWVEYXRhID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgc2l6ZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVEYXRhLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoZnJhbWVEYXRhW2ldID09PSAweGZmICYmIGZyYW1lRGF0YVtpICsgMV0gPT09IDB4MDApIHtcbiAgICAgICAgICBmcmFtZURhdGEuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEFycmF5RmlsZVJlYWRlcihmcmFtZURhdGEpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJRDN2MkZyYW1lUmVhZGVyO1xufSgpO1xuXG47XG52YXIgZnJhbWVSZWFkZXJGdW5jdGlvbnMgPSB7fTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0FQSUMnXSA9IGZ1bmN0aW9uIHJlYWRQaWN0dXJlRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIHN0YXJ0ID0gb2Zmc2V0O1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcblxuICBzd2l0Y2ggKGlkM2hlYWRlciAmJiBpZDNoZWFkZXIubWFqb3IpIHtcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgZm9ybWF0ID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyAxLCAzKTtcbiAgICAgIG9mZnNldCArPSA0O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgY2FzZSA0OlxuICAgICAgdmFyIGZvcm1hdCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxKTtcbiAgICAgIG9mZnNldCArPSAxICsgZm9ybWF0LmJ5dGVzUmVhZENvdW50O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgcmVhZCBJRDN2MiBtYWpvciB2ZXJzaW9uLlwiKTtcbiAgfVxuXG4gIHZhciBiaXRlID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgdmFyIHR5cGUgPSBQSUNUVVJFX1RZUEVbYml0ZV07XG4gIHZhciBkZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIChvZmZzZXQgLSBzdGFydCkgLSAxLCBjaGFyc2V0KTtcbiAgb2Zmc2V0ICs9IDEgKyBkZXNjLmJ5dGVzUmVhZENvdW50O1xuICByZXR1cm4ge1xuICAgIFwiZm9ybWF0XCI6IGZvcm1hdC50b1N0cmluZygpLFxuICAgIFwidHlwZVwiOiB0eXBlLFxuICAgIFwiZGVzY3JpcHRpb25cIjogZGVzYy50b1N0cmluZygpLFxuICAgIFwiZGF0YVwiOiBkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldClcbiAgfTtcbn07IC8vIElEM3YyIGNoYXB0ZXJzIGFjY29yZGluZyB0byBodHRwOi8vaWQzLm9yZy9pZDN2Mi1jaGFwdGVycy0xLjBcblxuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ0hBUCddID0gZnVuY3Rpb24gcmVhZENoYXB0ZXJGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBvZmZzZXQ7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICByZXN1bHQuaWQgPSBpZC50b1N0cmluZygpO1xuICBvZmZzZXQgKz0gaWQuYnl0ZXNSZWFkQ291bnQ7XG4gIHJlc3VsdC5zdGFydFRpbWUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgcmVzdWx0LmVuZFRpbWUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgcmVzdWx0LnN0YXJ0T2Zmc2V0ID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5lbmRPZmZzZXQgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgdmFyIHJlbWFpbmluZ0xlbmd0aCA9IGxlbmd0aCAtIChvZmZzZXQgLSBvcmlnaW5hbE9mZnNldCk7XG4gIHJlc3VsdC5zdWJGcmFtZXMgPSB0aGlzLnJlYWRGcmFtZXMob2Zmc2V0LCBvZmZzZXQgKyByZW1haW5pbmdMZW5ndGgsIGRhdGEsIGlkM2hlYWRlcik7XG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyBJRDN2MiB0YWJsZSBvZiBjb250ZW50cyBhY2NvcmRpbmcgdG8gaHR0cDovL2lkMy5vcmcvaWQzdjItY2hhcHRlcnMtMS4wXG5cblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NUT0MnXSA9IGZ1bmN0aW9uIHJlYWRUYWJsZU9mQ29udGVudHNGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBvZmZzZXQ7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgY2hpbGRFbGVtZW50SWRzOiBbXSxcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIHRvcExldmVsOiB1bmRlZmluZWQsXG4gICAgb3JkZXJlZDogdW5kZWZpbmVkLFxuICAgIGVudHJ5Q291bnQ6IHVuZGVmaW5lZCxcbiAgICBzdWJGcmFtZXM6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgaWQgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSk7XG4gIHJlc3VsdC5pZCA9IGlkLnRvU3RyaW5nKCk7XG4gIG9mZnNldCArPSBpZC5ieXRlc1JlYWRDb3VudDtcbiAgcmVzdWx0LnRvcExldmVsID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgMSk7XG4gIHJlc3VsdC5vcmRlcmVkID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgMCk7XG4gIG9mZnNldCsrO1xuICByZXN1bHQuZW50cnlDb3VudCA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gIG9mZnNldCsrO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0LmVudHJ5Q291bnQ7IGkrKykge1xuICAgIHZhciBjaGlsZElkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCAtIChvZmZzZXQgLSBvcmlnaW5hbE9mZnNldCkpKTtcbiAgICByZXN1bHQuY2hpbGRFbGVtZW50SWRzLnB1c2goY2hpbGRJZC50b1N0cmluZygpKTtcbiAgICBvZmZzZXQgKz0gY2hpbGRJZC5ieXRlc1JlYWRDb3VudDtcbiAgfVxuXG4gIHZhciByZW1haW5pbmdMZW5ndGggPSBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpO1xuICByZXN1bHQuc3ViRnJhbWVzID0gdGhpcy5yZWFkRnJhbWVzKG9mZnNldCwgb2Zmc2V0ICsgcmVtYWluaW5nTGVuZ3RoLCBkYXRhLCBpZDNoZWFkZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTU0nXSA9IGZ1bmN0aW9uIHJlYWRDb21tZW50c0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHZhciBsYW5ndWFnZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gIHZhciBzaG9ydGRlc2MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgNCwgbGVuZ3RoIC0gNCwgY2hhcnNldCk7XG4gIG9mZnNldCArPSA0ICsgc2hvcnRkZXNjLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgdGV4dCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIHN0YXJ0ICsgbGVuZ3RoIC0gb2Zmc2V0LCBjaGFyc2V0KTtcbiAgcmV0dXJuIHtcbiAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgc2hvcnRfZGVzY3JpcHRpb246IHNob3J0ZGVzYy50b1N0cmluZygpLFxuICAgIHRleHQ6IHRleHQudG9TdHJpbmcoKVxuICB9O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTSddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTU0nXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1BJQyddID0gZnVuY3Rpb24gKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1snQVBJQyddKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydQQ05UJ10gPSBmdW5jdGlvbiByZWFkQ291bnRlckZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIC8vIEZJWE1FOiBpbXBsZW1lbnQgdGhlIHJlc3Qgb2YgdGhlIHNwZWNcbiAgcmV0dXJuIGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgZmFsc2UpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NOVCddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1BDTlQnXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1QqJ10gPSBmdW5jdGlvbiByZWFkVGV4dEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICByZXR1cm4gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIDEsIGNoYXJzZXQpLnRvU3RyaW5nKCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVFhYWCddID0gZnVuY3Rpb24gcmVhZFRleHRGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgcmV0dXJuIGdldFVzZXJEZWZpbmVkRmllbGRzKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBjaGFyc2V0KTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydXWFhYJ10gPSBmdW5jdGlvbiByZWFkVXJsRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHJldHVybiBnZXRVc2VyRGVmaW5lZEZpZWxkcyhvZmZzZXQsIGxlbmd0aCwgZGF0YSwgY2hhcnNldCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVyonXSA9IGZ1bmN0aW9uIHJlYWRVcmxGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgbGVuZ3RoLCAnaXNvLTg4NTktMScpLnRvU3RyaW5nKCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPTiddID0gZnVuY3Rpb24gcmVhZEdlbnJlRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzKSB7XG4gIHZhciB0ZXh0ID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1QqJ10uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvXlxcKFxcZCtcXCkvLCAnJyk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPTiddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVVNMVCddID0gZnVuY3Rpb24gcmVhZEx5cmljc0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHZhciBsYW5ndWFnZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gIHZhciBkZXNjcmlwdG9yID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDQsIGxlbmd0aCAtIDQsIGNoYXJzZXQpO1xuICBvZmZzZXQgKz0gNCArIGRlc2NyaXB0b3IuYnl0ZXNSZWFkQ291bnQ7XG4gIHZhciBseXJpY3MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IudG9TdHJpbmcoKSxcbiAgICBseXJpY3M6IGx5cmljcy50b1N0cmluZygpXG4gIH07XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVUxUJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snVVNMVCddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVUZJRCddID0gZnVuY3Rpb24gcmVhZEx5cmljc0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBvd25lcklkZW50aWZpZXIgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSk7XG4gIG9mZnNldCArPSBvd25lcklkZW50aWZpZXIuYnl0ZXNSZWFkQ291bnQ7XG4gIHZhciBpZGVudGlmaWVyID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoIC0gb3duZXJJZGVudGlmaWVyLmJ5dGVzUmVhZENvdW50KTtcbiAgcmV0dXJuIHtcbiAgICBvd25lcklkZW50aWZpZXI6IG93bmVySWRlbnRpZmllci50b1N0cmluZygpLFxuICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXJcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFRleHRFbmNvZGluZyhiaXRlKSB7XG4gIHZhciBjaGFyc2V0O1xuXG4gIHN3aXRjaCAoYml0ZSkge1xuICAgIGNhc2UgMHgwMDpcbiAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMTpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTE2JztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAweDAyOlxuICAgICAgY2hhcnNldCA9ICd1dGYtMTZiZSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMzpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgfVxuXG4gIHJldHVybiBjaGFyc2V0O1xufSAvLyBIYW5kbGVzIHJlYWRpbmcgZGVzY3JpcHRpb24vZGF0YSBmcm9tIGVpdGhlciBodHRwOi8vaWQzLm9yZy9pZDN2Mi4zLjAjVXNlcl9kZWZpbmVkX3RleHRfaW5mb3JtYXRpb25fZnJhbWVcbi8vIGFuZCBodHRwOi8vaWQzLm9yZy9pZDN2Mi4zLjAjVXNlcl9kZWZpbmVkX1VSTF9saW5rX2ZyYW1lXG5cblxuZnVuY3Rpb24gZ2V0VXNlckRlZmluZWRGaWVsZHMob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGNoYXJzZXQpIHtcbiAgdmFyIHVzZXJEZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIDEsIGNoYXJzZXQpO1xuICB2YXIgdXNlckRlZmluZWREYXRhID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEgKyB1c2VyRGVzYy5ieXRlc1JlYWRDb3VudCwgbGVuZ3RoIC0gMSAtIHVzZXJEZXNjLmJ5dGVzUmVhZENvdW50LCBjaGFyc2V0KTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyX2Rlc2NyaXB0aW9uOiB1c2VyRGVzYy50b1N0cmluZygpLFxuICAgIGRhdGE6IHVzZXJEZWZpbmVkRGF0YS50b1N0cmluZygpXG4gIH07XG59XG5cbnZhciBQSUNUVVJFX1RZUEUgPSBbXCJPdGhlclwiLCBcIjMyeDMyIHBpeGVscyAnZmlsZSBpY29uJyAoUE5HIG9ubHkpXCIsIFwiT3RoZXIgZmlsZSBpY29uXCIsIFwiQ292ZXIgKGZyb250KVwiLCBcIkNvdmVyIChiYWNrKVwiLCBcIkxlYWZsZXQgcGFnZVwiLCBcIk1lZGlhIChlLmcuIGxhYmVsIHNpZGUgb2YgQ0QpXCIsIFwiTGVhZCBhcnRpc3QvbGVhZCBwZXJmb3JtZXIvc29sb2lzdFwiLCBcIkFydGlzdC9wZXJmb3JtZXJcIiwgXCJDb25kdWN0b3JcIiwgXCJCYW5kL09yY2hlc3RyYVwiLCBcIkNvbXBvc2VyXCIsIFwiTHlyaWNpc3QvdGV4dCB3cml0ZXJcIiwgXCJSZWNvcmRpbmcgTG9jYXRpb25cIiwgXCJEdXJpbmcgcmVjb3JkaW5nXCIsIFwiRHVyaW5nIHBlcmZvcm1hbmNlXCIsIFwiTW92aWUvdmlkZW8gc2NyZWVuIGNhcHR1cmVcIiwgXCJBIGJyaWdodCBjb2xvdXJlZCBmaXNoXCIsIFwiSWxsdXN0cmF0aW9uXCIsIFwiQmFuZC9hcnRpc3QgbG9nb3R5cGVcIiwgXCJQdWJsaXNoZXIvU3R1ZGlvIGxvZ290eXBlXCJdO1xubW9kdWxlLmV4cG9ydHMgPSBJRDN2MkZyYW1lUmVhZGVyO1xuXG59LHtcIi4vQXJyYXlGaWxlUmVhZGVyXCI6MyxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL1N0cmluZ1V0aWxzXCI6MTN9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBJRDN2MkZyYW1lUmVhZGVyID0gcmVxdWlyZSgnLi9JRDN2MkZyYW1lUmVhZGVyJyk7XG5cbnZhciBJRDNfSEVBREVSX1NJWkUgPSAxMDtcblxudmFyIElEM3YyVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKElEM3YyVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIElEM3YyVGFnUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MlRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKElEM3YyVGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MlRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbNiwgOV0sIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZSggLy8gVGhlIHRhZyBzaXplIGRvZXMgbm90IGluY2x1ZGUgdGhlIGhlYWRlciBzaXplLlxuICAgICAgICAgIFswLCBJRDNfSEVBREVSX1NJWkUgKyBtZWRpYUZpbGVSZWFkZXIuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQoNikgLSAxXSwgY2FsbGJhY2tzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB2YXIgbWFqb3IgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyAzKTtcblxuICAgICAgaWYgKG1ham9yID4gNCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwidHlwZVwiOiBcIklEM1wiLFxuICAgICAgICAgIFwidmVyc2lvblwiOiBcIj4yLjRcIixcbiAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJldmlzaW9uID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgNCk7XG4gICAgICB2YXIgdW5zeW5jaCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyA1LCA3KTtcbiAgICAgIHZhciB4aGVhZGVyID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDUsIDYpO1xuICAgICAgdmFyIHhpbmRpY2F0b3IgPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgNSwgNSk7XG4gICAgICB2YXIgc2l6ZSA9IGRhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0ICsgNik7XG4gICAgICBvZmZzZXQgKz0gMTA7XG5cbiAgICAgIGlmICh4aGVhZGVyKSB7XG4gICAgICAgIC8vIFdlIHNraXAgdGhlIGV4dGVuZGVkIGhlYWRlciBhbmQgZG9uJ3Qgb2ZmZXIgc3VwcG9ydCBmb3IgaXQgcmlnaHQgbm93LlxuICAgICAgICBpZiAobWFqb3IgPT09IDQpIHtcbiAgICAgICAgICB2YXIgeGhlYWRlcnNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCk7XG4gICAgICAgICAgb2Zmc2V0ICs9IHhoZWFkZXJzaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB4aGVhZGVyc2l6ZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7IC8vIFRoZSAnRXh0ZW5kZWQgaGVhZGVyIHNpemUnLCBjdXJyZW50bHkgNiBvciAxMCBieXRlcywgZXhjbHVkZXMgaXRzZWxmLlxuXG4gICAgICAgICAgb2Zmc2V0ICs9IHhoZWFkZXJzaXplICsgNDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaWQzID0ge1xuICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6ICcyLicgKyBtYWpvciArICcuJyArIHJldmlzaW9uLFxuICAgICAgICBcIm1ham9yXCI6IG1ham9yLFxuICAgICAgICBcInJldmlzaW9uXCI6IHJldmlzaW9uLFxuICAgICAgICBcImZsYWdzXCI6IHtcbiAgICAgICAgICBcInVuc3luY2hyb25pc2F0aW9uXCI6IHVuc3luY2gsXG4gICAgICAgICAgXCJleHRlbmRlZF9oZWFkZXJcIjogeGhlYWRlcixcbiAgICAgICAgICBcImV4cGVyaW1lbnRhbF9pbmRpY2F0b3JcIjogeGluZGljYXRvcixcbiAgICAgICAgICAvLyBUT0RPOiBmb290ZXJfcHJlc2VudFxuICAgICAgICAgIFwiZm9vdGVyX3ByZXNlbnRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaXplXCI6IHNpemUsXG4gICAgICAgIFwidGFnc1wiOiB7fVxuICAgICAgfTtcblxuICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgdmFyIGV4cGFuZGVkVGFncyA9IHRoaXMuX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldEVuZCA9IHNpemUgKyAxMFxuICAgICAgLypoZWFkZXIgc2l6ZSovXG4gICAgICA7IC8vIFdoZW4gdGhpcyBmbGFnIGlzIHNldCB0aGUgZW50aXJlIHRhZyBuZWVkcyB0byBiZSB1bi11bnN5bmNocm9uaXNlZFxuICAgICAgLy8gYmVmb3JlIHBhcnNpbmcgZWFjaCBpbmRpdmlkdWFsIGZyYW1lLiBJbmRpdmlkdWFsIGZyYW1lIHNpemVzIG1pZ2h0IG5vdFxuICAgICAgLy8gdGFrZSB1bnN5bmNocm9uaXNhdGlvbiBpbnRvIGNvbnNpZGVyYXRpb24gd2hlbiBpdCdzIHNldCBvbiB0aGUgdGFnXG4gICAgICAvLyBoZWFkZXIuXG5cbiAgICAgIGlmIChpZDMuZmxhZ3MudW5zeW5jaHJvbmlzYXRpb24pIHtcbiAgICAgICAgZGF0YSA9IElEM3YyRnJhbWVSZWFkZXIuZ2V0VW5zeW5jRmlsZVJlYWRlcihkYXRhLCBvZmZzZXQsIHNpemUpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICBvZmZzZXRFbmQgPSBkYXRhLmdldFNpemUoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZyYW1lcyA9IElEM3YyRnJhbWVSZWFkZXIucmVhZEZyYW1lcyhvZmZzZXQsIG9mZnNldEVuZCwgZGF0YSwgaWQzLCBleHBhbmRlZFRhZ3MpOyAvLyBjcmVhdGUgc2hvcnRjdXRzIGZvciBtb3N0IGNvbW1vbiBkYXRhLlxuXG4gICAgICBmb3IgKHZhciBuYW1lIGluIFNIT1JUQ1VUUykge1xuICAgICAgICBpZiAoU0hPUlRDVVRTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgdmFyIGZyYW1lRGF0YSA9IHRoaXMuX2dldEZyYW1lRGF0YShmcmFtZXMsIFNIT1JUQ1VUU1tuYW1lXSk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVEYXRhKSB7XG4gICAgICAgICAgICBpZDMudGFnc1tuYW1lXSA9IGZyYW1lRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgZnJhbWUgaW4gZnJhbWVzKSB7XG4gICAgICAgIGlmIChmcmFtZXMuaGFzT3duUHJvcGVydHkoZnJhbWUpKSB7XG4gICAgICAgICAgaWQzLnRhZ3NbZnJhbWVdID0gZnJhbWVzW2ZyYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWQzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RnJhbWVEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGcmFtZURhdGEoZnJhbWVzLCBpZHMpIHtcbiAgICAgIHZhciBmcmFtZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlkOyBpZCA9IGlkc1tpXTsgaSsrKSB7XG4gICAgICAgIGlmIChpZCBpbiBmcmFtZXMpIHtcbiAgICAgICAgICBpZiAoZnJhbWVzW2lkXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lc1tpZF1bMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVzW2lkXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZnJhbWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydGN1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRjdXRzKCkge1xuICAgICAgcmV0dXJuIFNIT1JUQ1VUUztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICAvLyBJRDMgaGVhZGVyXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogSUQzX0hFQURFUl9TSVpFXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgMykpO1xuICAgICAgcmV0dXJuIGlkID09PSAnSUQzJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSUQzdjJUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcblxudmFyIFNIT1JUQ1VUUyA9IHtcbiAgXCJ0aXRsZVwiOiBbXCJUSVQyXCIsIFwiVFQyXCJdLFxuICBcImFydGlzdFwiOiBbXCJUUEUxXCIsIFwiVFAxXCJdLFxuICBcImFsYnVtXCI6IFtcIlRBTEJcIiwgXCJUQUxcIl0sXG4gIFwieWVhclwiOiBbXCJUWUVSXCIsIFwiVFlFXCJdLFxuICBcImNvbW1lbnRcIjogW1wiQ09NTVwiLCBcIkNPTVwiXSxcbiAgXCJ0cmFja1wiOiBbXCJUUkNLXCIsIFwiVFJLXCJdLFxuICBcImdlbnJlXCI6IFtcIlRDT05cIiwgXCJUQ09cIl0sXG4gIFwicGljdHVyZVwiOiBbXCJBUElDXCIsIFwiUElDXCJdLFxuICBcImx5cmljc1wiOiBbXCJVU0xUXCIsIFwiVUxUXCJdXG59O1xubW9kdWxlLmV4cG9ydHMgPSBJRDN2MlRhZ1JlYWRlcjtcblxufSx7XCIuL0lEM3YyRnJhbWVSZWFkZXJcIjo4LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogU3VwcG9ydCBmb3IgaVR1bmVzLXN0eWxlIG00YSB0YWdzXG4gKiBTZWU6XG4gKiAgIGh0dHA6Ly9hdG9taWNwYXJzbGV5LnNvdXJjZWZvcmdlLm5ldC9tcGVnLTRmaWxlcy5odG1sXG4gKiAgIGh0dHA6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL21hYy9saWJyYXJ5L2RvY3VtZW50YXRpb24vUXVpY2tUaW1lL1FURkYvTWV0YWRhdGEvTWV0YWRhdGEuaHRtbFxuICogQXV0aG9yZWQgYnkgSm9zaHVhIEtpZmVyIDxqb3NodWEua2lmZXIgZ21haWwuY29tPlxuICogXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBNUDRUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoTVA0VGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIE1QNFRhZ1JlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVA0VGFnUmVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTVA0VGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNUDRUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIC8vIE1QNCBtZXRhZGF0YSBpc24ndCBsb2NhdGVkIGluIGEgc3BlY2lmaWMgbG9jYXRpb24gb2YgdGhlIGZpbGUuIFJvdWdobHlcbiAgICAgIC8vIHNwZWFraW5nLCBpdCdzIGNvbXBvc2VkIG9mIGJsb2NrcyBjaGFpbmVkIHRvZ2V0aGVyIGxpa2UgYSBsaW5rZWQgbGlzdC5cbiAgICAgIC8vIFRoZXNlIGJsb2NrcyBhcmUgY2FsbGVkIGF0b21zIChvciBib3hlcykuXG4gICAgICAvLyBFYWNoIGF0b20gb2YgdGhlIGxpc3QgY2FuIGhhdmUgaXRzIG93biBjaGlsZCBsaW5rZWQgbGlzdC4gQXRvbXMgaW4gdGhpc1xuICAgICAgLy8gc2l0dWF0aW9uIGRvIG5vdCBwb3NzZXNzIGFueSBkYXRhIGFuZCBhcmUgY2FsbGVkIFwiY29udGFpbmVyXCIgYXMgdGhleSBvbmx5XG4gICAgICAvLyBjb250YWluIG90aGVyIGF0b21zLlxuICAgICAgLy8gT3RoZXIgYXRvbXMgcmVwcmVzZW50IGEgcGFydGljdWxhciBzZXQgb2YgZGF0YSwgbGlrZSBhdWRpbywgdmlkZW8gb3JcbiAgICAgIC8vIG1ldGFkYXRhLiBJbiBvcmRlciB0byBmaW5kIGFuZCBsb2FkIGFsbCB0aGUgaW50ZXJlc3RpbmcgYXRvbXMgd2UgbmVlZFxuICAgICAgLy8gdG8gdHJhdmVyc2UgdGhlIGVudGlyZSBsaW5rZWQgbGlzdCBvZiBhdG9tcyBhbmQgb25seSBsb2FkIHRoZSBvbmVzXG4gICAgICAvLyBhc3NvY2lhdGVkIHdpdGggbWV0YWRhdGEuXG4gICAgICAvLyBUaGUgbWV0YWRhdGEgYXRvbXMgY2FuIGJlIGZpbmQgdW5kZXIgdGhlIFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiIGhpZXJhcmNoeS5cbiAgICAgIHZhciBzZWxmID0gdGhpczsgLy8gTG9hZCB0aGUgaGVhZGVyIG9mIHRoZSBmaXJzdCBhdG9tXG5cbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzAsIDE2XSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIDAsIFwiXCIsIGNhbGxiYWNrcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgcGFyZW50QXRvbUZ1bGxOYW1lLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmIChvZmZzZXQgPj0gbWVkaWFGaWxlUmVhZGVyLmdldFNpemUoKSkge1xuICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGYgPSB0aGlzOyAvLyA4IGlzIHRoZSBzaXplIG9mIHRoZSBhdG9tU2l6ZSBhbmQgYXRvbU5hbWUgZmllbGRzLlxuICAgICAgLy8gV2hlbiByZWFkaW5nIHRoZSBjdXJyZW50IGJsb2NrIHdlIGFsd2F5cyByZWFkIDggbW9yZSBieXRlcyBpbiBvcmRlclxuICAgICAgLy8gdG8gYWxzbyByZWFkIHRoZSBoZWFkZXIgb2YgdGhlIG5leHQgYmxvY2suXG5cbiAgICAgIHZhciBhdG9tU2l6ZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcblxuICAgICAgaWYgKGF0b21TaXplID09IDAgfHwgaXNOYU4oYXRvbVNpemUpKSB7XG4gICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXRvbU5hbWUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgNCwgNCk7IC8vIGNvbnNvbGUubG9nKHBhcmVudEF0b21GdWxsTmFtZSwgYXRvbU5hbWUsIGF0b21TaXplKTtcbiAgICAgIC8vIENvbnRhaW5lciBhdG9tcyAobm8gYWN0dWFsIGRhdGEpXG5cbiAgICAgIGlmICh0aGlzLl9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpKSB7XG4gICAgICAgIGlmIChhdG9tTmFtZSA9PSBcIm1ldGFcIikge1xuICAgICAgICAgIC8vIFRoZSBcIm1ldGFcIiBhdG9tIGJyZWFrcyBjb252ZW50aW9uIGFuZCBpcyBhIGNvbnRhaW5lciB3aXRoIGRhdGEuXG4gICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIG5leHRfaXRlbV9pZCAodWludDMyKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0b21GdWxsTmFtZSA9IChwYXJlbnRBdG9tRnVsbE5hbWUgPyBwYXJlbnRBdG9tRnVsbE5hbWUgKyBcIi5cIiA6IFwiXCIpICsgYXRvbU5hbWU7XG5cbiAgICAgICAgaWYgKGF0b21GdWxsTmFtZSA9PT0gXCJtb292LnVkdGEubWV0YS5pbHN0XCIpIHtcbiAgICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQsIG9mZnNldCArIGF0b21TaXplXSwgY2FsbGJhY2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyA4LCBvZmZzZXQgKyA4ICsgOF0sIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgICBzZWxmLl9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCArIDgsIGF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyBhdG9tU2l6ZSwgb2Zmc2V0ICsgYXRvbVNpemUgKyA4XSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyBhdG9tU2l6ZSwgcGFyZW50QXRvbUZ1bGxOYW1lLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc0NvbnRhaW5lckF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udGFpbmVyQXRvbShhdG9tTmFtZSkge1xuICAgICAgcmV0dXJuIFtcIm1vb3ZcIiwgXCJ1ZHRhXCIsIFwibWV0YVwiLCBcImlsc3RcIl0uaW5kZXhPZihhdG9tTmFtZSkgPj0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NhblJlYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jYW5SZWFkQXRvbShhdG9tTmFtZSkge1xuICAgICAgcmV0dXJuIGF0b21OYW1lICE9PSBcIi0tLS1cIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3NUb1JlYWQpIHtcbiAgICAgIHZhciB0YWdzID0ge307XG4gICAgICB0YWdzVG9SZWFkID0gdGhpcy5fZXhwYW5kU2hvcnRjdXRUYWdzKHRhZ3NUb1JlYWQpO1xuXG4gICAgICB0aGlzLl9yZWFkQXRvbSh0YWdzLCBkYXRhLCAwLCBkYXRhLmdldFNpemUoKSwgdGFnc1RvUmVhZCk7IC8vIGNyZWF0ZSBzaG9ydGN1dHMgZm9yIG1vc3QgY29tbW9uIGRhdGEuXG5cblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBTSE9SVENVVFMpIHtcbiAgICAgICAgaWYgKFNIT1JUQ1VUUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHZhciB0YWcgPSB0YWdzW1NIT1JUQ1VUU1tuYW1lXV07XG5cbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJ0cmFja1wiKSB7XG4gICAgICAgICAgICAgIHRhZ3NbbmFtZV0gPSB0YWcuZGF0YS50cmFjaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhZ3NbbmFtZV0gPSB0YWcuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiTVA0XCIsXG4gICAgICAgIFwiZnR5cFwiOiBkYXRhLmdldFN0cmluZ0F0KDgsIDQpLFxuICAgICAgICBcInZlcnNpb25cIjogZGF0YS5nZXRMb25nQXQoMTIsIHRydWUpLFxuICAgICAgICBcInRhZ3NcIjogdGFnc1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkQXRvbSh0YWdzLCBkYXRhLCBvZmZzZXQsIGxlbmd0aCwgdGFnc1RvUmVhZCwgcGFyZW50QXRvbUZ1bGxOYW1lLCBpbmRlbnQpIHtcbiAgICAgIGluZGVudCA9IGluZGVudCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGluZGVudCArIFwiICBcIjtcbiAgICAgIHZhciBzZWVrID0gb2Zmc2V0O1xuXG4gICAgICB3aGlsZSAoc2VlayA8IG9mZnNldCArIGxlbmd0aCkge1xuICAgICAgICB2YXIgYXRvbVNpemUgPSBkYXRhLmdldExvbmdBdChzZWVrLCB0cnVlKTtcblxuICAgICAgICBpZiAoYXRvbVNpemUgPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdG9tTmFtZSA9IGRhdGEuZ2V0U3RyaW5nQXQoc2VlayArIDQsIDQpOyAvLyBjb25zb2xlLmxvZyhzZWVrLCBwYXJlbnRBdG9tRnVsbE5hbWUsIGF0b21OYW1lLCBhdG9tU2l6ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29udGFpbmVyQXRvbShhdG9tTmFtZSkpIHtcbiAgICAgICAgICBpZiAoYXRvbU5hbWUgPT0gXCJtZXRhXCIpIHtcbiAgICAgICAgICAgIHNlZWsgKz0gNDsgLy8gbmV4dF9pdGVtX2lkICh1aW50MzIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGF0b21GdWxsTmFtZSA9IChwYXJlbnRBdG9tRnVsbE5hbWUgPyBwYXJlbnRBdG9tRnVsbE5hbWUgKyBcIi5cIiA6IFwiXCIpICsgYXRvbU5hbWU7XG5cbiAgICAgICAgICB0aGlzLl9yZWFkQXRvbSh0YWdzLCBkYXRhLCBzZWVrICsgOCwgYXRvbVNpemUgLSA4LCB0YWdzVG9SZWFkLCBhdG9tRnVsbE5hbWUsIGluZGVudCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gVmFsdWUgYXRvbXNcblxuXG4gICAgICAgIGlmICgoIXRhZ3NUb1JlYWQgfHwgdGFnc1RvUmVhZC5pbmRleE9mKGF0b21OYW1lKSA+PSAwKSAmJiBwYXJlbnRBdG9tRnVsbE5hbWUgPT09IFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiICYmIHRoaXMuX2NhblJlYWRBdG9tKGF0b21OYW1lKSkge1xuICAgICAgICAgIHRhZ3NbYXRvbU5hbWVdID0gdGhpcy5fcmVhZE1ldGFkYXRhQXRvbShkYXRhLCBzZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZWsgKz0gYXRvbVNpemU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkTWV0YWRhdGFBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkTWV0YWRhdGFBdG9tKGRhdGEsIG9mZnNldCkge1xuICAgICAgLy8gMTY6IG5hbWUgKyBzaXplICsgXCJkYXRhXCIgKyBzaXplICg0IGJ5dGVzIGVhY2gpXG4gICAgICB2YXIgTUVUQURBVEFfSEVBREVSID0gMTY7XG4gICAgICB2YXIgYXRvbVNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICAgICAgdmFyIGF0b21OYW1lID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyA0LCA0KTtcbiAgICAgIHZhciBrbGFzcyA9IGRhdGEuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMSwgdHJ1ZSk7XG4gICAgICB2YXIgdHlwZSA9IFRZUEVTW2tsYXNzXTtcbiAgICAgIHZhciBhdG9tRGF0YTtcblxuICAgICAgaWYgKGF0b21OYW1lID09IFwidHJrblwiKSB7XG4gICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgIFwidHJhY2tcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTEpLFxuICAgICAgICAgIFwidG90YWxcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTMpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGF0b21OYW1lID09IFwiZGlza1wiKSB7XG4gICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgIFwiZGlza1wiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMSksXG4gICAgICAgICAgXCJ0b3RhbFwiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMylcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDQ6IGF0b20gdmVyc2lvbiAoMSBieXRlKSArIGF0b20gZmxhZ3MgKDMgYnl0ZXMpXG4gICAgICAgIC8vIDQ6IE5VTEwgKHVzdWFsbHkgbG9jYWxlIGluZGljYXRvcilcbiAgICAgICAgdmFyIGF0b21IZWFkZXIgPSBNRVRBREFUQV9IRUFERVIgKyA0ICsgNDtcbiAgICAgICAgdmFyIGRhdGFTdGFydCA9IG9mZnNldCArIGF0b21IZWFkZXI7XG4gICAgICAgIHZhciBkYXRhTGVuZ3RoID0gYXRvbVNpemUgLSBhdG9tSGVhZGVyO1xuICAgICAgICB2YXIgYXRvbURhdGE7IC8vIFdvcmthcm91bmQgZm9yIGNvdmVycyBiZWluZyBwYXJzZWQgYXMgJ3VpbnQ4JyB0eXBlIGRlc3BpdGUgYmVpbmcgYW4gJ2NvdnInIGF0b21cblxuICAgICAgICBpZiAoYXRvbU5hbWUgPT09ICdjb3ZyJyAmJiB0eXBlID09PSAndWludDgnKSB7XG4gICAgICAgICAgdHlwZSA9ICdqcGVnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICBhdG9tRGF0YSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChkYXRhU3RhcnQsIGRhdGFMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInVpbnQ4XCI6XG4gICAgICAgICAgICBhdG9tRGF0YSA9IGRhdGEuZ2V0U2hvcnRBdChkYXRhU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImludFwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50XCI6XG4gICAgICAgICAgICAvLyBUaG91Z2ggdGhlIFF1aWNrVGltZSBzcGVjIGRvZXNuJ3Qgc3RhdGUgaXQsIHRoZXJlIGFyZSA2NC1iaXQgdmFsdWVzXG4gICAgICAgICAgICAvLyBzdWNoIGFzIHBsSUQgKFBsYXlsaXN0L0NvbGxlY3Rpb24gSUQpLiBXaXRoIGl0cyBzaW5nbGUgNjQtYml0IGZsb2F0aW5nXG4gICAgICAgICAgICAvLyBwb2ludCBudW1iZXIgdHlwZSwgdGhlc2UgYXJlIGhhcmQgdG8gcGFyc2UgYW5kIHBhc3MgaW4gSmF2YVNjcmlwdC5cbiAgICAgICAgICAgIC8vIFRoZSBoaWdoIHdvcmQgb2YgcGxJRCBzZWVtcyB0byBhbHdheXMgYmUgemVybywgc28sIGFzIHRoaXMgaXMgdGhlXG4gICAgICAgICAgICAvLyBvbmx5IGN1cnJlbnQgNjQtYml0IGF0b20gaGFuZGxlZCwgaXQgaXMgcGFyc2VkIGZyb20gaXRzIDMyLWJpdFxuICAgICAgICAgICAgLy8gbG93IHdvcmQgYXMgYW4gdW5zaWduZWQgbG9uZy5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW50UmVhZGVyID0gdHlwZSA9PSAnaW50JyA/IGRhdGFMZW5ndGggPT0gMSA/IGRhdGEuZ2V0U0J5dGVBdCA6IGRhdGFMZW5ndGggPT0gMiA/IGRhdGEuZ2V0U1Nob3J0QXQgOiBkYXRhTGVuZ3RoID09IDQgPyBkYXRhLmdldFNMb25nQXQgOiBkYXRhLmdldExvbmdBdCA6IGRhdGFMZW5ndGggPT0gMSA/IGRhdGEuZ2V0Qnl0ZUF0IDogZGF0YUxlbmd0aCA9PSAyID8gZGF0YS5nZXRTaG9ydEF0IDogZGF0YS5nZXRMb25nQXQ7IC8vICRGbG93Rml4TWUgLSBnZXRCeXRlQXQgZG9lc24ndCByZWNlaXZlIGEgc2Vjb25kIGFyZ3VtZW50XG5cbiAgICAgICAgICAgIGF0b21EYXRhID0gaW50UmVhZGVyLmNhbGwoZGF0YSwgZGF0YVN0YXJ0ICsgKGRhdGFMZW5ndGggPT0gOCA/IDQgOiAwKSwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICAgICAgY2FzZSBcInBuZ1wiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSB7XG4gICAgICAgICAgICAgIFwiZm9ybWF0XCI6IFwiaW1hZ2UvXCIgKyB0eXBlLFxuICAgICAgICAgICAgICBcImRhdGFcIjogZGF0YS5nZXRCeXRlc0F0KGRhdGFTdGFydCwgZGF0YUxlbmd0aClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogYXRvbU5hbWUsXG4gICAgICAgIHNpemU6IGF0b21TaXplLFxuICAgICAgICBkZXNjcmlwdGlvbjogQVRPTV9ERVNDUklQVElPTlNbYXRvbU5hbWVdIHx8IFwiVW5rbm93blwiLFxuICAgICAgICBkYXRhOiBhdG9tRGF0YVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiBTSE9SVENVVFM7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gVGhlIHRhZyBpZGVudGlmaWVyIGlzIGxvY2F0ZWQgaW4gWzQsIDhdIGJ1dCBzaW5jZSB3ZSdsbCBuZWVkIHRvIHJlYWRlclxuICAgICAgLy8gdGhlIGhlYWRlciBvZiB0aGUgZmlyc3QgYmxvY2sgYW55d2F5LCB3ZSBsb2FkIGl0IGluc3RlYWQgdG8gYXZvaWRcbiAgICAgIC8vIG1ha2luZyB0d28gcmVxdWVzdHMuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogMTZcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSg0LCA4KSk7XG4gICAgICByZXR1cm4gaWQgPT09IFwiZnR5cFwiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNUDRUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcbi8qXG4gKiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9jb250ZW50L2RvY3VtZW50YXRpb24vUXVpY2tUaW1lL1FURkYvTWV0YWRhdGEvTWV0YWRhdGEuaHRtbCMvL2FwcGxlX3JlZi9kb2MvdWlkL1RQNDAwMDA5MzktQ0gxLVNXMzVcbiovXG5cblxudmFyIFRZUEVTID0ge1xuICBcIjBcIjogXCJ1aW50OFwiLFxuICBcIjFcIjogXCJ0ZXh0XCIsXG4gIFwiMTNcIjogXCJqcGVnXCIsXG4gIFwiMTRcIjogXCJwbmdcIixcbiAgXCIyMVwiOiBcImludFwiLFxuICBcIjIyXCI6IFwidWludFwiXG59O1xudmFyIEFUT01fREVTQ1JJUFRJT05TID0ge1xuICBcIsKpYWxiXCI6IFwiQWxidW1cIixcbiAgXCLCqUFSVFwiOiBcIkFydGlzdFwiLFxuICBcImFBUlRcIjogXCJBbGJ1bSBBcnRpc3RcIixcbiAgXCLCqWRheVwiOiBcIlJlbGVhc2UgRGF0ZVwiLFxuICBcIsKpbmFtXCI6IFwiVGl0bGVcIixcbiAgXCLCqWdlblwiOiBcIkdlbnJlXCIsXG4gIFwiZ25yZVwiOiBcIkdlbnJlXCIsXG4gIFwidHJrblwiOiBcIlRyYWNrIE51bWJlclwiLFxuICBcIsKpd3J0XCI6IFwiQ29tcG9zZXJcIixcbiAgXCLCqXRvb1wiOiBcIkVuY29kaW5nIFRvb2xcIixcbiAgXCLCqWVuY1wiOiBcIkVuY29kZWQgQnlcIixcbiAgXCJjcHJ0XCI6IFwiQ29weXJpZ2h0XCIsXG4gIFwiY292clwiOiBcIkNvdmVyIEFydFwiLFxuICBcIsKpZ3JwXCI6IFwiR3JvdXBpbmdcIixcbiAgXCJrZXl3XCI6IFwiS2V5d29yZHNcIixcbiAgXCLCqWx5clwiOiBcIkx5cmljc1wiLFxuICBcIsKpY210XCI6IFwiQ29tbWVudFwiLFxuICBcInRtcG9cIjogXCJUZW1wb1wiLFxuICBcImNwaWxcIjogXCJDb21waWxhdGlvblwiLFxuICBcImRpc2tcIjogXCJEaXNjIE51bWJlclwiLFxuICBcInR2c2hcIjogXCJUViBTaG93IE5hbWVcIixcbiAgXCJ0dmVuXCI6IFwiVFYgRXBpc29kZSBJRFwiLFxuICBcInR2c25cIjogXCJUViBTZWFzb25cIixcbiAgXCJ0dmVzXCI6IFwiVFYgRXBpc29kZVwiLFxuICBcInR2bm5cIjogXCJUViBOZXR3b3JrXCIsXG4gIFwiZGVzY1wiOiBcIkRlc2NyaXB0aW9uXCIsXG4gIFwibGRlc1wiOiBcIkxvbmcgRGVzY3JpcHRpb25cIixcbiAgXCJzb25tXCI6IFwiU29ydCBOYW1lXCIsXG4gIFwic29hclwiOiBcIlNvcnQgQXJ0aXN0XCIsXG4gIFwic29hYVwiOiBcIlNvcnQgQWxidW1cIixcbiAgXCJzb2NvXCI6IFwiU29ydCBDb21wb3NlclwiLFxuICBcInNvc25cIjogXCJTb3J0IFNob3dcIixcbiAgXCJwdXJkXCI6IFwiUHVyY2hhc2UgRGF0ZVwiLFxuICBcInBjc3RcIjogXCJQb2RjYXN0XCIsXG4gIFwicHVybFwiOiBcIlBvZGNhc3QgVVJMXCIsXG4gIFwiY2F0Z1wiOiBcIkNhdGVnb3J5XCIsXG4gIFwiaGR2ZFwiOiBcIkhEIFZpZGVvXCIsXG4gIFwic3Rpa1wiOiBcIk1lZGlhIFR5cGVcIixcbiAgXCJydG5nXCI6IFwiQ29udGVudCBSYXRpbmdcIixcbiAgXCJwZ2FwXCI6IFwiR2FwbGVzcyBQbGF5YmFja1wiLFxuICBcImFwSURcIjogXCJQdXJjaGFzZSBBY2NvdW50XCIsXG4gIFwic2ZJRFwiOiBcIkNvdW50cnkgQ29kZVwiLFxuICBcImF0SURcIjogXCJBcnRpc3QgSURcIixcbiAgXCJjbklEXCI6IFwiQ2F0YWxvZyBJRFwiLFxuICBcInBsSURcIjogXCJDb2xsZWN0aW9uIElEXCIsXG4gIFwiZ2VJRFwiOiBcIkdlbnJlIElEXCIsXG4gIFwieGlkIFwiOiBcIlZlbmRvciBJbmZvcm1hdGlvblwiLFxuICBcImZsdnJcIjogXCJDb2RlYyBGbGF2b3JcIlxufTtcbnZhciBVTlNVUFBPUlRFRF9BVE9NUyA9IHtcbiAgXCItLS0tXCI6IDFcbn07XG52YXIgU0hPUlRDVVRTID0ge1xuICBcInRpdGxlXCI6IFwiwqluYW1cIixcbiAgXCJhcnRpc3RcIjogXCLCqUFSVFwiLFxuICBcImFsYnVtXCI6IFwiwqlhbGJcIixcbiAgXCJ5ZWFyXCI6IFwiwqlkYXlcIixcbiAgXCJjb21tZW50XCI6IFwiwqljbXRcIixcbiAgXCJ0cmFja1wiOiBcInRya25cIixcbiAgXCJnZW5yZVwiOiBcIsKpZ2VuXCIsXG4gIFwicGljdHVyZVwiOiBcImNvdnJcIixcbiAgXCJseXJpY3NcIjogXCLCqWx5clwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBNUDRUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgU3RyaW5nVXRpbHMgPSByZXF1aXJlKCcuL1N0cmluZ1V0aWxzJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYUZpbGVSZWFkZXIocGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUZpbGVSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lzSW5pdGlhbGl6ZWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zaXplXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5fc2l6ZSA9IDA7XG4gIH1cbiAgLyoqXG4gICAqIERlY2lkZXMgaWYgdGhpcyBtZWRpYSBmaWxlIHJlYWRlciBpcyBhYmxlIHRvIHJlYWQgdGhlIGdpdmVuIGZpbGUuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBvdGhlciBmdW5jdGlvbi5cbiAgICAgKiBMb2FkcyB0aGUgbmVjZXNzYXJ5IGluaXRpYWwgaW5mb3JtYXRpb24gZnJvbSB0aGUgZmlsZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0KHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgaW5pdCBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgdGhlIHJhbmdlIHRvIGxvYWQuXG4gICAgICogICAgICAgIEV4OiBbMCwgN10gbG9hZCBieXRlcyAwIHRvIDcgaW5jbHVzaXZlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBsb2FkUmFuZ2UgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIHNpemUgb2YgdGhlIGZpbGUgaW4gYnl0ZXMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5pdCgpIG11c3QgYmUgY2FsbGVkIGZpcnN0LlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBnZXRCeXRlQXQgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVzQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyBpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0JpdFNldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQml0U2V0QXQob2Zmc2V0LCBiaXQpIHtcbiAgICAgIHZhciBpQnl0ZSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgICByZXR1cm4gKGlCeXRlICYgMSA8PCBiaXQpICE9IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U0J5dGVBdChvZmZzZXQpIHtcbiAgICAgIHZhciBpQnl0ZSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIGlmIChpQnl0ZSA+IDEyNykge1xuICAgICAgICByZXR1cm4gaUJ5dGUgLSAyNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaUJ5dGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVNob3J0ID0gaXNCaWdFbmRpYW4gPyAodGhpcy5nZXRCeXRlQXQob2Zmc2V0KSA8PCA4KSArIHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpIDogKHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpIDw8IDgpICsgdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcblxuICAgICAgaWYgKGlTaG9ydCA8IDApIHtcbiAgICAgICAgaVNob3J0ICs9IDY1NTM2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaVNob3J0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTU2hvcnRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTU2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVVTaG9ydCA9IHRoaXMuZ2V0U2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKTtcblxuICAgICAgaWYgKGlVU2hvcnQgPiAzMjc2Nykge1xuICAgICAgICByZXR1cm4gaVVTaG9ydCAtIDY1NTM2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlVU2hvcnQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvbmdBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlCeXRlMSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCksXG4gICAgICAgICAgaUJ5dGUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSksXG4gICAgICAgICAgaUJ5dGUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMiksXG4gICAgICAgICAgaUJ5dGU0ID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMyk7XG4gICAgICB2YXIgaUxvbmcgPSBpc0JpZ0VuZGlhbiA/ICgoKGlCeXRlMSA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMyA8PCA4KSArIGlCeXRlNCA6ICgoKGlCeXRlNCA8PCA4KSArIGlCeXRlMyA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMTtcblxuICAgICAgaWYgKGlMb25nIDwgMCkge1xuICAgICAgICBpTG9uZyArPSA0Mjk0OTY3Mjk2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaUxvbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNMb25nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U0xvbmdBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVVMb25nID0gdGhpcy5nZXRMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbik7XG5cbiAgICAgIGlmIChpVUxvbmcgPiAyMTQ3NDgzNjQ3KSB7XG4gICAgICAgIHJldHVybiBpVUxvbmcgLSA0Mjk0OTY3Mjk2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlVTG9uZztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SW50ZWdlcjI0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW50ZWdlcjI0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlCeXRlMSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCksXG4gICAgICAgICAgaUJ5dGUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSksXG4gICAgICAgICAgaUJ5dGUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMik7XG4gICAgICB2YXIgaUludGVnZXIgPSBpc0JpZ0VuZGlhbiA/ICgoaUJ5dGUxIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUzIDogKChpQnl0ZTMgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTE7XG5cbiAgICAgIGlmIChpSW50ZWdlciA8IDApIHtcbiAgICAgICAgaUludGVnZXIgKz0gMTY3NzcyMTY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpSW50ZWdlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RyaW5nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RyaW5nQXQob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCwgaiA9IDA7IGkgPCBvZmZzZXQgKyBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgICAgIHN0cmluZ1tqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5nZXRCeXRlQXQoaSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCJcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0cmluZ1dpdGhDaGFyc2V0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIGxlbmd0aCwgY2hhcnNldCkge1xuICAgICAgdmFyIGJ5dGVzID0gdGhpcy5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKTtcbiAgICAgIHZhciBzdHJpbmc7XG5cbiAgICAgIHN3aXRjaCAoKGNoYXJzZXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcInV0Zi0xNlwiOlxuICAgICAgICBjYXNlIFwidXRmLTE2bGVcIjpcbiAgICAgICAgY2FzZSBcInV0Zi0xNmJlXCI6XG4gICAgICAgICAgc3RyaW5nID0gU3RyaW5nVXRpbHMucmVhZFVURjE2U3RyaW5nKGJ5dGVzLCBjaGFyc2V0ID09PSBcInV0Zi0xNmJlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ1dGYtOFwiOlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWRVVEY4U3RyaW5nKGJ5dGVzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhieXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENoYXJBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGFyQXQob2Zmc2V0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIElEM3YyIHRhZy9mcmFtZSBzaXplIGlzIGVuY29kZWQgd2l0aCBmb3VyIGJ5dGVzIHdoZXJlIHRoZSBtb3N0XG4gICAgICogc2lnbmlmaWNhbnQgYml0IChiaXQgNykgaXMgc2V0IHRvIHplcm8gaW4gZXZlcnkgYnl0ZSwgbWFraW5nIGEgdG90YWwgb2YgMjhcbiAgICAgKiBiaXRzLiBUaGUgemVyb2VkIGJpdHMgYXJlIGlnbm9yZWQsIHNvIGEgMjU3IGJ5dGVzIGxvbmcgdGFnIGlzIHJlcHJlc2VudGVkXG4gICAgICogYXMgJDAwIDAwIDAyIDAxLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgc2l6ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgdmFyIHNpemUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSk7XG4gICAgICB2YXIgc2l6ZTMgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAyKTtcbiAgICAgIHZhciBzaXplNCA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDMpOyAvLyAweDdmID0gMGIwMTExMTExMVxuXG4gICAgICB2YXIgc2l6ZSA9IHNpemU0ICYgMHg3ZiB8IChzaXplMyAmIDB4N2YpIDw8IDcgfCAoc2l6ZTIgJiAweDdmKSA8PCAxNCB8IChzaXplMSAmIDB4N2YpIDw8IDIxO1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgY2FuUmVhZEZpbGUgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lZGlhRmlsZVJlYWRlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUZpbGVSZWFkZXI7XG5cbn0se1wiLi9TdHJpbmdVdGlsc1wiOjEzfV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgTWVkaWFUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYVRhZ1JlYWRlcihtZWRpYUZpbGVSZWFkZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFUYWdSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21lZGlhRmlsZVJlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhZ3NcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX21lZGlhRmlsZVJlYWRlciA9IG1lZGlhRmlsZVJlYWRlcjtcbiAgICB0aGlzLl90YWdzID0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnl0ZSByYW5nZSB0aGF0IG5lZWRzIHRvIGJlIGxvYWRlZCBhbmQgZmVkIHRvXG4gICAqIF9jYW5SZWFkVGFnRm9ybWF0IGluIG9yZGVyIHRvIGlkZW50aWZ5IGlmIHRoZSBmaWxlIGNvbnRhaW5zIHRhZ1xuICAgKiBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSByZWFkLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNZWRpYVRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwic2V0VGFnc1RvUmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdzVG9SZWFkKHRhZ3MpIHtcbiAgICAgIHRoaXMuX3RhZ3MgPSB0YWdzO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fbWVkaWFGaWxlUmVhZGVyLmluaXQoe1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkRGF0YShzZWxmLl9tZWRpYUZpbGVSZWFkZXIsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciB0YWdzID0gc2VsZi5fcGFyc2VEYXRhKHNlbGYuX21lZGlhRmlsZVJlYWRlciwgc2VsZi5fdGFncyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhcnNlRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcImluZm9cIjogZXgubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIFRPRE86IGRlc3Ryb3kgbWVkaWFGaWxlUmVhZGVyXG5cblxuICAgICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKHRhZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgbmVjZXNzYXJ5IGJ5dGVzIGZyb20gdGhlIG1lZGlhIGZpbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBfbG9hZERhdGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBsb2FkZWQgZGF0YSB0byByZWFkIHRoZSBtZWRpYSB0YWdzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKG1lZGlhRmlsZVJlYWRlciwgdGFncykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgX3BhcnNlRGF0YSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2V4cGFuZFNob3J0Y3V0VGFnc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZXhwYW5kU2hvcnRjdXRUYWdzKHRhZ3NXaXRoU2hvcnRjdXRzKSB7XG4gICAgICBpZiAoIXRhZ3NXaXRoU2hvcnRjdXRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFncyA9IFtdO1xuICAgICAgdmFyIHNob3J0Y3V0cyA9IHRoaXMuZ2V0U2hvcnRjdXRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCB0YWdPclNob3J0Y3V0OyB0YWdPclNob3J0Y3V0ID0gdGFnc1dpdGhTaG9ydGN1dHNbaV07IGkrKykge1xuICAgICAgICB0YWdzID0gdGFncy5jb25jYXQoc2hvcnRjdXRzW3RhZ09yU2hvcnRjdXRdIHx8IFt0YWdPclNob3J0Y3V0XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHRhZyBpZGVudGlmaWVyIChyZWFkIGZyb20gdGhlIGZpbGUgYnl0ZSBwb3NpdGlvbnMgc3BlZmljaWVkIGJ5XG4gICAgICogZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSkgdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgaXQgY2FuIHJlYWQgdGhlIHRhZ1xuICAgICAqIGZvcm1hdCBvciBub3QuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnRcIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lZGlhVGFnUmVhZGVyO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTF9XSwxMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEludGVybmFsRGVjb2RlZFN0cmluZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludGVybmFsRGVjb2RlZFN0cmluZyh2YWx1ZSwgYnl0ZXNSZWFkQ291bnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl92YWx1ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnl0ZXNSZWFkQ291bnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxlbmd0aFwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJ5dGVzUmVhZENvdW50ID0gYnl0ZXNSZWFkQ291bnQ7XG4gICAgdGhpcy5sZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJuYWxEZWNvZGVkU3RyaW5nLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJuYWxEZWNvZGVkU3RyaW5nO1xufSgpO1xuXG52YXIgU3RyaW5nVXRpbHMgPSB7XG4gIHJlYWRVVEYxNlN0cmluZzogZnVuY3Rpb24gcmVhZFVURjE2U3RyaW5nKGJ5dGVzLCBiaWdFbmRpYW4sIG1heEJ5dGVzKSB7XG4gICAgdmFyIGl4ID0gMDtcbiAgICB2YXIgb2Zmc2V0MSA9IDEsXG4gICAgICAgIG9mZnNldDIgPSAwO1xuICAgIG1heEJ5dGVzID0gTWF0aC5taW4obWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoLCBieXRlcy5sZW5ndGgpO1xuXG4gICAgaWYgKGJ5dGVzWzBdID09IDB4RkUgJiYgYnl0ZXNbMV0gPT0gMHhGRikge1xuICAgICAgYmlnRW5kaWFuID0gdHJ1ZTtcbiAgICAgIGl4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGJ5dGVzWzBdID09IDB4RkYgJiYgYnl0ZXNbMV0gPT0gMHhGRSkge1xuICAgICAgYmlnRW5kaWFuID0gZmFsc2U7XG4gICAgICBpeCA9IDI7XG4gICAgfVxuXG4gICAgaWYgKGJpZ0VuZGlhbikge1xuICAgICAgb2Zmc2V0MSA9IDA7XG4gICAgICBvZmZzZXQyID0gMTtcbiAgICB9XG5cbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaXggPCBtYXhCeXRlczsgaisrKSB7XG4gICAgICB2YXIgYnl0ZTEgPSBieXRlc1tpeCArIG9mZnNldDFdO1xuICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXggKyBvZmZzZXQyXTtcbiAgICAgIHZhciB3b3JkMSA9IChieXRlMSA8PCA4KSArIGJ5dGUyO1xuICAgICAgaXggKz0gMjtcblxuICAgICAgaWYgKHdvcmQxID09IDB4MDAwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPCAweEQ4IHx8IGJ5dGUxID49IDB4RTApIHtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh3b3JkMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCArIG9mZnNldDFdO1xuICAgICAgICB2YXIgYnl0ZTQgPSBieXRlc1tpeCArIG9mZnNldDJdO1xuICAgICAgICB2YXIgd29yZDIgPSAoYnl0ZTMgPDwgOCkgKyBieXRlNDtcbiAgICAgICAgaXggKz0gMjtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh3b3JkMSwgd29yZDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpeCk7XG4gIH0sXG4gIHJlYWRVVEY4U3RyaW5nOiBmdW5jdGlvbiByZWFkVVRGOFN0cmluZyhieXRlcywgbWF4Qnl0ZXMpIHtcbiAgICB2YXIgaXggPSAwO1xuICAgIG1heEJ5dGVzID0gTWF0aC5taW4obWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoLCBieXRlcy5sZW5ndGgpO1xuXG4gICAgaWYgKGJ5dGVzWzBdID09IDB4RUYgJiYgYnl0ZXNbMV0gPT0gMHhCQiAmJiBieXRlc1syXSA9PSAweEJGKSB7XG4gICAgICBpeCA9IDM7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGl4IDwgbWF4Qnl0ZXM7IGorKykge1xuICAgICAgdmFyIGJ5dGUxID0gYnl0ZXNbaXgrK107XG5cbiAgICAgIGlmIChieXRlMSA9PSAweDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA8IDB4ODApIHtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlMSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4QzIgJiYgYnl0ZTEgPCAweEUwKSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZTEgJiAweDFGKSA8PCA2KSArIChieXRlMiAmIDB4M0YpKTtcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPj0gMHhFMCAmJiBieXRlMSA8IDB4RjApIHtcbiAgICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBieXRlMyA9IGJ5dGVzW2l4KytdO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZTEgJiAweEZGKSA8PCAxMikgKyAoKGJ5dGUyICYgMHgzRikgPDwgNikgKyAoYnl0ZTMgJiAweDNGKSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4RjAgJiYgYnl0ZTEgPCAweEY1KSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGJ5dGU0ID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBjb2RlcG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMTgpICsgKChieXRlMiAmIDB4M0YpIDw8IDEyKSArICgoYnl0ZTMgJiAweDNGKSA8PCA2KSArIChieXRlNCAmIDB4M0YpIC0gMHgxMDAwMDtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoY29kZXBvaW50ID4+IDEwKSArIDB4RDgwMCwgKGNvZGVwb2ludCAmIDB4M0ZGKSArIDB4REMwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcm5hbERlY29kZWRTdHJpbmcoYXJyLmpvaW4oXCJcIiksIGl4KTtcbiAgfSxcbiAgcmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nOiBmdW5jdGlvbiByZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoYnl0ZXMsIG1heEJ5dGVzKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIG1heEJ5dGVzID0gbWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhCeXRlczspIHtcbiAgICAgIHZhciBieXRlMSA9IGJ5dGVzW2krK107XG5cbiAgICAgIGlmIChieXRlMSA9PSAweDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhcnJbaSAtIDFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcm5hbERlY29kZWRTdHJpbmcoYXJyLmpvaW4oXCJcIiksIGkpO1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdVdGlscztcblxufSx7fV0sMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENodW5rZWRGaWxlRGF0YSA9IHJlcXVpcmUoJy4vQ2h1bmtlZEZpbGVEYXRhJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQ0hVTktfU0laRSA9IDEwMjQ7XG5cbnZhciBYaHJGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFGaWxlUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhYaHJGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBYaHJGaWxlUmVhZGVyKHVybCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYaHJGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFhockZpbGVSZWFkZXIpLmNhbGwodGhpcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl91cmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfZmlsZURhdGFcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLl91cmwgPSB1cmw7XG4gICAgX3RoaXMuX2ZpbGVEYXRhID0gbmV3IENodW5rZWRGaWxlRGF0YSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhYaHJGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJfaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIGlmIChYaHJGaWxlUmVhZGVyLl9jb25maWcuYXZvaWRIZWFkUmVxdWVzdHMpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZldGNoU2l6ZVdpdGhIZWFkUmVxdWVzdChjYWxsYmFja3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmV0Y2hTaXplV2l0aEhlYWRSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaFNpemVXaXRoSGVhZFJlcXVlc3QoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiSEVBRFwiLCBudWxsLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gc2VsZi5fcGFyc2VDb250ZW50TGVuZ3RoKHhocik7XG5cbiAgICAgICAgICBpZiAoY29udGVudExlbmd0aCkge1xuICAgICAgICAgICAgc2VsZi5fc2l6ZSA9IGNvbnRlbnRMZW5ndGg7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbnRlbnQtTGVuZ3RoIG5vdCBwcm92aWRlZCBieSB0aGUgc2VydmVyLCBmYWxsYmFjayB0b1xuICAgICAgICAgICAgLy8gR0VUIHJlcXVlc3RzLlxuICAgICAgICAgICAgc2VsZi5fZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdmFyIHJhbmdlID0gdGhpcy5fcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShbMCwgMF0pO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkdFVFwiLCByYW5nZSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgY29udGVudFJhbmdlID0gc2VsZi5fcGFyc2VDb250ZW50UmFuZ2UoeGhyKTtcblxuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBpZiAoY29udGVudFJhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY29udGVudFJhbmdlLmluc3RhbmNlTGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gTGFzdCByZXNvcnQsIHNlcnZlciBpcyBub3QgYWJsZSB0byB0ZWxsIHVzIHRoZSBjb250ZW50IGxlbmd0aCxcbiAgICAgICAgICAgICAgLy8gbmVlZCB0byBmZXRjaCBlbnRpcmUgZmlsZSB0aGVuLlxuICAgICAgICAgICAgICBzZWxmLl9mZXRjaEVudGlyZUZpbGUoY2FsbGJhY2tzKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBjb250ZW50UmFuZ2UuaW5zdGFuY2VMZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJhbmdlIHJlcXVlc3Qgbm90IHN1cHBvcnRlZCwgd2UgZ290IHRoZSBlbnRpcmUgZmlsZVxuICAgICAgICAgICAgc2VsZi5fc2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEoMCwgZGF0YSk7XG5cbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoRW50aXJlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hFbnRpcmVGaWxlKGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkdFVFwiLCBudWxsLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBzZWxmLl9zaXplID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKDAsIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRYaHJSZXNwb25zZUNvbnRlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpIHtcbiAgICAgIHJldHVybiB4aHIucmVzcG9uc2VCb2R5IHx8IHhoci5yZXNwb25zZVRleHQgfHwgXCJcIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlQ29udGVudExlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VDb250ZW50TGVuZ3RoKHhocikge1xuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSB0aGlzLl9nZXRSZXNwb25zZUhlYWRlcih4aHIsIFwiQ29udGVudC1MZW5ndGhcIik7XG5cbiAgICAgIGlmIChjb250ZW50TGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY29udGVudExlbmd0aCwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VDb250ZW50UmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlQ29udGVudFJhbmdlKHhocikge1xuICAgICAgdmFyIGNvbnRlbnRSYW5nZSA9IHRoaXMuX2dldFJlc3BvbnNlSGVhZGVyKHhociwgXCJDb250ZW50LVJhbmdlXCIpO1xuXG4gICAgICBpZiAoY29udGVudFJhbmdlKSB7XG4gICAgICAgIHZhciBwYXJzZWRDb250ZW50UmFuZ2UgPSBjb250ZW50UmFuZ2UubWF0Y2goL2J5dGVzIChcXGQrKS0oXFxkKylcXC8oPzooXFxkKyl8XFwqKS9pKTtcblxuICAgICAgICBpZiAoIXBhcnNlZENvbnRlbnRSYW5nZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZJWE1FOiBVbmtub3duIENvbnRlbnQtUmFuZ2Ugc3ludGF4OiBcIiArIGNvbnRlbnRSYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpcnN0Qnl0ZVBvc2l0aW9uOiBwYXJzZUludChwYXJzZWRDb250ZW50UmFuZ2VbMV0sIDEwKSxcbiAgICAgICAgICBsYXN0Qnl0ZVBvc2l0aW9uOiBwYXJzZUludChwYXJzZWRDb250ZW50UmFuZ2VbMl0sIDEwKSxcbiAgICAgICAgICBpbnN0YW5jZUxlbmd0aDogcGFyc2VkQ29udGVudFJhbmdlWzNdID8gcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzNdLCAxMCkgOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9maWxlRGF0YS5oYXNEYXRhUmFuZ2UocmFuZ2VbMF0sIE1hdGgubWluKHNlbGYuX3NpemUsIHJhbmdlWzFdKSkpIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBBbHdheXMgZG93bmxvYWQgaW4gbXVsdGlwbGVzIG9mIENIVU5LX1NJWkUuIElmIHdlJ3JlIGdvaW5nIHRvIG1ha2UgYVxuICAgICAgLy8gcmVxdWVzdCBtaWdodCBhcyB3ZWxsIGdldCBhIGNodW5rIHRoYXQgbWFrZXMgc2Vuc2UuIFRoZSBiaWcgY29zdCBpc1xuICAgICAgLy8gZXN0YWJsaXNoaW5nIHRoZSBjb25uZWN0aW9uIHNvIGdldHRpbmcgMTBieXRlcyBvciAxSyBkb2Vzbid0IHJlYWxseVxuICAgICAgLy8gbWFrZSBhIGRpZmZlcmVuY2UuXG5cblxuICAgICAgcmFuZ2UgPSB0aGlzLl9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlKHJhbmdlKTsgLy8gVXBwZXIgcmFuZ2Ugc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoYW4gbWF4IGZpbGUgc2l6ZVxuXG4gICAgICByYW5nZVsxXSA9IE1hdGgubWluKHNlbGYuX3NpemUsIHJhbmdlWzFdKTtcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgcmFuZ2UsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLl9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKTtcblxuICAgICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEocmFuZ2VbMF0sIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlKHJhbmdlKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gcmFuZ2VbMV0gLSByYW5nZVswXSArIDE7XG4gICAgICB2YXIgbmV3TGVuZ3RoID0gTWF0aC5jZWlsKGxlbmd0aCAvIENIVU5LX1NJWkUpICogQ0hVTktfU0laRTtcbiAgICAgIHJldHVybiBbcmFuZ2VbMF0sIHJhbmdlWzBdICsgbmV3TGVuZ3RoIC0gMV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9tYWtlWEhSUmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVhIUlJlcXVlc3QobWV0aG9kLCByYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgeGhyID0gdGhpcy5fY3JlYXRlWEhST2JqZWN0KCk7XG5cbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdGhpcy5fdXJsKTtcblxuICAgICAgdmFyIG9uWEhSTG9hZCA9IGZ1bmN0aW9uIG9uWEhSTG9hZCgpIHtcbiAgICAgICAgLy8gMjAwIC0gT0tcbiAgICAgICAgLy8gMjA2IC0gUGFydGlhbCBDb250ZW50XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSB4aHIgd2lsbCBub3QgYmUgbnVsbCBoZXJlXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMjA2KSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh4aHIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwieGhyXCIsXG4gICAgICAgICAgICBcImluZm9cIjogXCJVbmV4cGVjdGVkIEhUVFAgc3RhdHVzIFwiICsgeGhyLnN0YXR1cyArIFwiLlwiLFxuICAgICAgICAgICAgXCJ4aHJcIjogeGhyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB4aHIgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiB4aHIub25sb2FkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB4aHIub25sb2FkID0gb25YSFJMb2FkO1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ4aHJcIixcbiAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiR2VuZXJpYyBYSFIgZXJyb3IsIGNoZWNrIHhociBvYmplY3QuXCIsXG4gICAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyIHdpbGwgbm90IGJlIG51bGwgaGVyZVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgb25YSFJMb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLnRpbWVvdXRJblNlYykge1xuICAgICAgICB4aHIudGltZW91dCA9IFhockZpbGVSZWFkZXIuX2NvbmZpZy50aW1lb3V0SW5TZWMgKiAxMDAwO1xuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInhoclwiLFxuICAgICAgICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyLnRpbWVvdXQgd2lsbCBub3QgYmUgbnVsbFxuICAgICAgICAgICAgICBcImluZm9cIjogXCJUaW1lb3V0IGFmdGVyIFwiICsgeGhyLnRpbWVvdXQgLyAxMDAwICsgXCJzLiBVc2UganNtZWRpYXRhZ3MuQ29uZmlnLnNldFhoclRpbWVvdXQgdG8gb3ZlcnJpZGUuXCIsXG4gICAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvcGxhaW47IGNoYXJzZXQ9eC11c2VyLWRlZmluZWRcIik7XG5cbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICB0aGlzLl9zZXRSZXF1ZXN0SGVhZGVyKHhociwgXCJSYW5nZVwiLCBcImJ5dGVzPVwiICsgcmFuZ2VbMF0gKyBcIi1cIiArIHJhbmdlWzFdKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0UmVxdWVzdEhlYWRlcih4aHIsIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgXCJTYXQsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiKTtcblxuICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zZXRSZXF1ZXN0SGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRSZXF1ZXN0SGVhZGVyKHhociwgaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpIHtcbiAgICAgIGlmIChYaHJGaWxlUmVhZGVyLl9jb25maWcuZGlzYWxsb3dlZFhockhlYWRlcnMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIDwgMCkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCBoZWFkZXJWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYXNSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFzUmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSB7XG4gICAgICB2YXIgYWxsUmVzcG9uc2VIZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuXG4gICAgICBpZiAoIWFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWFkZXJzID0gYWxsUmVzcG9uc2VIZWFkZXJzLnNwbGl0KFwiXFxyXFxuXCIpO1xuICAgICAgdmFyIGhlYWRlck5hbWVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZWFkZXJOYW1lc1tpXSA9IGhlYWRlcnNbaV0uc3BsaXQoXCI6XCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWFkZXJOYW1lcy5pbmRleE9mKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkgPj0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldFJlc3BvbnNlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRSZXNwb25zZUhlYWRlcih4aHIsIGhlYWRlck5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5faGFzUmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXJOYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSB0aGlzLl9maWxlRGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApICYgMHhmZjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2lzV2ViV29ya2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc1dlYldvcmtlcigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NyZWF0ZVhIUk9iamVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlWEhST2JqZWN0KCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuX2lzV2ViV29ya2VyKCkpIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgaXMgbm90IGFibGUgdG8gcmVjb2duaXplIHRoaXMgbW9kdWxlLlxuICAgICAgICByZXR1cm4gbmV3IChyZXF1aXJlKFwieGhyMlwiKS5YTUxIdHRwUmVxdWVzdCkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJyAmJiAvXlthLXpdKzpcXC9cXC8vaS50ZXN0KGZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDb25maWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXNhbGxvd2VkWGhySGVhZGVycyA9IHRoaXMuX2NvbmZpZy5kaXNhbGxvd2VkWGhySGVhZGVycztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNhbGxvd2VkWGhySGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXNhbGxvd2VkWGhySGVhZGVyc1tpXSA9IGRpc2FsbG93ZWRYaHJIZWFkZXJzW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFhockZpbGVSZWFkZXI7XG59KE1lZGlhRmlsZVJlYWRlcik7XG5cbl9kZWZpbmVQcm9wZXJ0eShYaHJGaWxlUmVhZGVyLCBcIl9jb25maWdcIiwgdm9pZCAwKTtcblxuWGhyRmlsZVJlYWRlci5fY29uZmlnID0ge1xuICBhdm9pZEhlYWRSZXF1ZXN0czogZmFsc2UsXG4gIGRpc2FsbG93ZWRYaHJIZWFkZXJzOiBbXSxcbiAgdGltZW91dEluU2VjOiAzMFxufTtcbm1vZHVsZS5leHBvcnRzID0gWGhyRmlsZVJlYWRlcjtcblxufSx7XCIuL0NodW5rZWRGaWxlRGF0YVwiOjUsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwieGhyMlwiOjJ9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL01lZGlhRmlsZVJlYWRlclwiKTtcblxudmFyIFhockZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9YaHJGaWxlUmVhZGVyXCIpO1xuXG52YXIgQmxvYkZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9CbG9iRmlsZVJlYWRlclwiKTtcblxudmFyIEFycmF5RmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL0FycmF5RmlsZVJlYWRlclwiKTtcblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vTWVkaWFUYWdSZWFkZXJcIik7XG5cbnZhciBJRDN2MVRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL0lEM3YxVGFnUmVhZGVyXCIpO1xuXG52YXIgSUQzdjJUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9JRDN2MlRhZ1JlYWRlclwiKTtcblxudmFyIE1QNFRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL01QNFRhZ1JlYWRlclwiKTtcblxudmFyIEZMQUNUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9GTEFDVGFnUmVhZGVyXCIpO1xuXG52YXIgbWVkaWFGaWxlUmVhZGVycyA9IFtdO1xudmFyIG1lZGlhVGFnUmVhZGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWFkKGxvY2F0aW9uLCBjYWxsYmFja3MpIHtcbiAgbmV3IFJlYWRlcihsb2NhdGlvbikucmVhZChjYWxsYmFja3MpO1xufVxuXG5mdW5jdGlvbiBpc1JhbmdlVmFsaWQocmFuZ2UsIGZpbGVTaXplKSB7XG4gIHZhciBpbnZhbGlkUG9zaXRpdmVSYW5nZSA9IHJhbmdlLm9mZnNldCA+PSAwICYmIHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aCA+PSBmaWxlU2l6ZTtcbiAgdmFyIGludmFsaWROZWdhdGl2ZVJhbmdlID0gcmFuZ2Uub2Zmc2V0IDwgMCAmJiAoLXJhbmdlLm9mZnNldCA+IGZpbGVTaXplIHx8IHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aCA+IDApO1xuICByZXR1cm4gIShpbnZhbGlkUG9zaXRpdmVSYW5nZSB8fCBpbnZhbGlkTmVnYXRpdmVSYW5nZSk7XG59XG5cbnZhciBSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZWFkZXIoZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ZpbGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdzVG9SZWFkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZmlsZVJlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhZ1JlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fZmlsZSA9IGZpbGU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhZGVyLCBbe1xuICAgIGtleTogXCJzZXRUYWdzVG9SZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRhZ3NUb1JlYWQodGFnc1RvUmVhZCkge1xuICAgICAgdGhpcy5fdGFnc1RvUmVhZCA9IHRhZ3NUb1JlYWQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWxlUmVhZGVyKGZpbGVSZWFkZXIpIHtcbiAgICAgIHRoaXMuX2ZpbGVSZWFkZXIgPSBmaWxlUmVhZGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdSZWFkZXIodGFnUmVhZGVyKSB7XG4gICAgICB0aGlzLl90YWdSZWFkZXIgPSB0YWdSZWFkZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGNhbGxiYWNrcykge1xuICAgICAgdmFyIEZpbGVSZWFkZXIgPSB0aGlzLl9nZXRGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIodGhpcy5fZmlsZSk7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBmaWxlUmVhZGVyLmluaXQoe1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9nZXRUYWdSZWFkZXIoZmlsZVJlYWRlciwge1xuICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoVGFnUmVhZGVyKSB7XG4gICAgICAgICAgICAgIG5ldyBUYWdSZWFkZXIoZmlsZVJlYWRlcikuc2V0VGFnc1RvUmVhZChzZWxmLl90YWdzVG9SZWFkKS5yZWFkKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RmlsZVJlYWRlcigpIHtcbiAgICAgIGlmICh0aGlzLl9maWxlUmVhZGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlUmVhZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRGaWxlUmVhZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kRmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZEZpbGVSZWFkZXIoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhRmlsZVJlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lZGlhRmlsZVJlYWRlcnNbaV0uY2FuUmVhZEZpbGUodGhpcy5fZmlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gbWVkaWFGaWxlUmVhZGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWl0YWJsZSBmaWxlIHJlYWRlciBmb3VuZCBmb3IgXCIgKyB0aGlzLl9maWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0VGFnUmVhZGVyKGZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgaWYgKHRoaXMuX3RhZ1JlYWRlcikge1xuICAgICAgICB2YXIgdGFnUmVhZGVyID0gdGhpcy5fdGFnUmVhZGVyO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKHRhZ1JlYWRlcik7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmluZFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gbWFrZSBtdWx0aXBsZSBmZXRjaGVzIHBlciB0YWcgcmVhZGVyIHRvIGdldCB0aGUgdGFnXG4gICAgICAvLyBpZGVudGlmaWVyLiBUaGUgc3RyYXRlZ3kgaGVyZSBpcyB0byBjb21iaW5lIGFsbCB0aGUgdGFnIGlkZW50aWZpZXJcbiAgICAgIC8vIHJhbmdlcyBpbnRvIG9uZSBhbmQgbWFrZSBhIHNpbmdsZSBmZXRjaC4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50XG4gICAgICAvLyBpbiBmaWxlIHJlYWRlcnMgdGhhdCBoYXZlIGV4cGVuc2l2ZSBsb2FkcyBsaWtlIHRoZSBYSFIgb25lLlxuICAgICAgLy8gSG93ZXZlciwgd2l0aCB0aGlzIHN0cmF0ZWd5IHdlIHJ1biBpbnRvIHRoZSBwcm9ibGVtIG9mIGxvYWRpbmcgdGhlXG4gICAgICAvLyBlbnRpcmUgZmlsZSBiZWNhdXNlIHRhZyBpZGVudGlmaWVycyBtaWdodCBiZSBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mXG4gICAgICAvLyB0aGUgZmlsZS5cbiAgICAgIC8vIFRvIGdldCBhcm91bmQgdGhpcyB3ZSBkaXZpZGUgdGhlIHRhZyByZWFkZXJzIGludG8gdHdvIGNhdGVnb3JpZXMsIHRoZVxuICAgICAgLy8gb25lcyB0aGF0IHJlYWQgdGhlaXIgdGFnIGlkZW50aWZpZXJzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBmaWxlIGFuZCB0aGVcbiAgICAgIC8vIG9uZXMgdGhhdCByZWFkIGZyb20gdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAgICAgIHZhciB0YWdSZWFkZXJzQXRGaWxlU3RhcnQgPSBbXTtcbiAgICAgIHZhciB0YWdSZWFkZXJzQXRGaWxlRW5kID0gW107XG4gICAgICB2YXIgZmlsZVNpemUgPSBmaWxlUmVhZGVyLmdldFNpemUoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYVRhZ1JlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJhbmdlID0gbWVkaWFUYWdSZWFkZXJzW2ldLmdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKTtcblxuICAgICAgICBpZiAoIWlzUmFuZ2VWYWxpZChyYW5nZSwgZmlsZVNpemUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZ2Uub2Zmc2V0ID49IDAgJiYgcmFuZ2Uub2Zmc2V0IDwgZmlsZVNpemUgLyAyIHx8IHJhbmdlLm9mZnNldCA8IDAgJiYgcmFuZ2Uub2Zmc2V0IDwgLWZpbGVTaXplIC8gMikge1xuICAgICAgICAgIHRhZ1JlYWRlcnNBdEZpbGVTdGFydC5wdXNoKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFnUmVhZGVyc0F0RmlsZUVuZC5wdXNoKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ3NMb2FkZWQgPSBmYWxzZTtcbiAgICAgIHZhciBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MgPSB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIGlmICghdGFnc0xvYWRlZCkge1xuICAgICAgICAgICAgLy8gV2UncmUgZXhwZWN0aW5nIHRvIGxvYWQgdHdvIHNldHMgb2YgdGFnIGlkZW50aWZpZXJzLiBUaGlzIGZsYWdcbiAgICAgICAgICAgIC8vIGluZGljYXRlcyB3aGVuIHRoZSBmaXJzdCBvbmUgaGFzIGJlZW4gbG9hZGVkLlxuICAgICAgICAgICAgdGFnc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYVRhZ1JlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IG1lZGlhVGFnUmVhZGVyc1tpXS5nZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNSYW5nZVZhbGlkKHJhbmdlLCBmaWxlU2l6ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciB0YWdJbmRlbnRpZmllciA9IGZpbGVSZWFkZXIuZ2V0Qnl0ZXNBdChyYW5nZS5vZmZzZXQgPj0gMCA/IHJhbmdlLm9mZnNldCA6IHJhbmdlLm9mZnNldCArIGZpbGVTaXplLCByYW5nZS5sZW5ndGgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZmlsZVJlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6IGV4Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lZGlhVGFnUmVhZGVyc1tpXS5jYW5SZWFkVGFnRm9ybWF0KHRhZ0luZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGFnRm9ybWF0XCIsXG4gICAgICAgICAgICAgIFwiaW5mb1wiOiBcIk5vIHN1aXRhYmxlIHRhZyByZWFkZXIgZm91bmRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfTtcblxuICAgICAgdGhpcy5fbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXMoZmlsZVJlYWRlciwgdGFnUmVhZGVyc0F0RmlsZVN0YXJ0LCBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MpO1xuXG4gICAgICB0aGlzLl9sb2FkVGFnSWRlbnRpZmllclJhbmdlcyhmaWxlUmVhZGVyLCB0YWdSZWFkZXJzQXRGaWxlRW5kLCBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzKGZpbGVSZWFkZXIsIHRhZ1JlYWRlcnMsIGNhbGxiYWNrcykge1xuICAgICAgaWYgKHRhZ1JlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEZvcmNlIGFzeW5jXG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ0lkZW50aWZpZXJSYW5nZSA9IFtOdW1iZXIuTUFYX1ZBTFVFLCAwXTtcbiAgICAgIHZhciBmaWxlU2l6ZSA9IGZpbGVSZWFkZXIuZ2V0U2l6ZSgpOyAvLyBDcmVhdGUgYSBzdXBlciBzZXQgb2YgYWxsIHJhbmdlcyBzbyB3ZSBjYW4gbG9hZCB0aGVtIGFsbCBhdCBvbmNlLlxuICAgICAgLy8gTWlnaHQgbmVlZCB0byByZXRoaW5rIHRoaXMgYXBwcm9hY2ggaWYgdGhlcmUgYXJlIHRhZyByYW5nZXMgdG9vIGZhclxuICAgICAgLy8gYSBwYXJ0IGZyb20gZWFjaCBvdGhlci4gV2UncmUgZ29vZCBmb3Igbm93IHRob3VnaC5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByYW5nZSA9IHRhZ1JlYWRlcnNbaV0uZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpO1xuICAgICAgICB2YXIgc3RhcnQgPSByYW5nZS5vZmZzZXQgPj0gMCA/IHJhbmdlLm9mZnNldCA6IHJhbmdlLm9mZnNldCArIGZpbGVTaXplO1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyByYW5nZS5sZW5ndGggLSAxO1xuICAgICAgICB0YWdJZGVudGlmaWVyUmFuZ2VbMF0gPSBNYXRoLm1pbihzdGFydCwgdGFnSWRlbnRpZmllclJhbmdlWzBdKTtcbiAgICAgICAgdGFnSWRlbnRpZmllclJhbmdlWzFdID0gTWF0aC5tYXgoZW5kLCB0YWdJZGVudGlmaWVyUmFuZ2VbMV0pO1xuICAgICAgfVxuXG4gICAgICBmaWxlUmVhZGVyLmxvYWRSYW5nZSh0YWdJZGVudGlmaWVyUmFuZ2UsIGNhbGxiYWNrcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWRlcjtcbn0oKTtcblxudmFyIENvbmZpZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmZpZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uZmlnKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25maWcsIG51bGwsIFt7XG4gICAga2V5OiBcImFkZEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRmlsZVJlYWRlcihmaWxlUmVhZGVyKSB7XG4gICAgICBtZWRpYUZpbGVSZWFkZXJzLnB1c2goZmlsZVJlYWRlcik7XG4gICAgICByZXR1cm4gQ29uZmlnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgbWVkaWFUYWdSZWFkZXJzLnB1c2godGFnUmVhZGVyKTtcbiAgICAgIHJldHVybiBDb25maWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVUYWdSZWFkZXIodGFnUmVhZGVyKSB7XG4gICAgICB2YXIgdGFnUmVhZGVySXggPSBtZWRpYVRhZ1JlYWRlcnMuaW5kZXhPZih0YWdSZWFkZXIpO1xuXG4gICAgICBpZiAodGFnUmVhZGVySXggPj0gMCkge1xuICAgICAgICBtZWRpYVRhZ1JlYWRlcnMuc3BsaWNlKHRhZ1JlYWRlckl4LCAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbmZpZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRVhQRVJJTUVOVEFMX2F2b2lkSGVhZFJlcXVlc3RzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIEVYUEVSSU1FTlRBTF9hdm9pZEhlYWRSZXF1ZXN0cygpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgYXZvaWRIZWFkUmVxdWVzdHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXREaXNhbGxvd2VkWGhySGVhZGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREaXNhbGxvd2VkWGhySGVhZGVycyhkaXNhbGxvd2VkWGhySGVhZGVycykge1xuICAgICAgWGhyRmlsZVJlYWRlci5zZXRDb25maWcoe1xuICAgICAgICBkaXNhbGxvd2VkWGhySGVhZGVyczogZGlzYWxsb3dlZFhockhlYWRlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRYaHJUaW1lb3V0SW5TZWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0WGhyVGltZW91dEluU2VjKHRpbWVvdXRJblNlYykge1xuICAgICAgWGhyRmlsZVJlYWRlci5zZXRDb25maWcoe1xuICAgICAgICB0aW1lb3V0SW5TZWM6IHRpbWVvdXRJblNlY1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZpZztcbn0oKTtcblxuQ29uZmlnLmFkZEZpbGVSZWFkZXIoWGhyRmlsZVJlYWRlcikuYWRkRmlsZVJlYWRlcihCbG9iRmlsZVJlYWRlcikuYWRkRmlsZVJlYWRlcihBcnJheUZpbGVSZWFkZXIpLmFkZFRhZ1JlYWRlcihJRDN2MlRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKElEM3YxVGFnUmVhZGVyKS5hZGRUYWdSZWFkZXIoTVA0VGFnUmVhZGVyKS5hZGRUYWdSZWFkZXIoRkxBQ1RhZ1JlYWRlcik7XG5cbmlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhcHJvY2Vzcy5icm93c2VyKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCIpIHtcbiAgICB2YXIgUmVhY3ROYXRpdmVGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9SZWFjdE5hdGl2ZUZpbGVSZWFkZXInKTtcblxuICAgIENvbmZpZy5hZGRGaWxlUmVhZGVyKFJlYWN0TmF0aXZlRmlsZVJlYWRlcik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIE5vZGVGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9Ob2RlRmlsZVJlYWRlcicpO1xuXG4gICAgQ29uZmlnLmFkZEZpbGVSZWFkZXIoTm9kZUZpbGVSZWFkZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcInJlYWRcIjogcmVhZCxcbiAgXCJSZWFkZXJcIjogUmVhZGVyLFxuICBcIkNvbmZpZ1wiOiBDb25maWdcbn07XG5cbn0se1wiLi9BcnJheUZpbGVSZWFkZXJcIjozLFwiLi9CbG9iRmlsZVJlYWRlclwiOjQsXCIuL0ZMQUNUYWdSZWFkZXJcIjo2LFwiLi9JRDN2MVRhZ1JlYWRlclwiOjcsXCIuL0lEM3YyVGFnUmVhZGVyXCI6OSxcIi4vTVA0VGFnUmVhZGVyXCI6MTAsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9NZWRpYVRhZ1JlYWRlclwiOjEyLFwiLi9Ob2RlRmlsZVJlYWRlclwiOjEsXCIuL1JlYWN0TmF0aXZlRmlsZVJlYWRlclwiOjEsXCIuL1hockZpbGVSZWFkZXJcIjoxNH1dfSx7fSxbMTVdKSgxNSlcbn0pOyIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZFNwcml0ZXNoZWV0e1xuXG5cdGJvcmRlcjogbnVtYmVyO1xuXHR0aWxlSGVpZ2h0OiBudW1iZXI7XG5cdHRpbGVXaWR0aDogbnVtYmVyO1xuXHRyb3dzOiBudW1iZXI7XG5cdGNvbHVtbnM6IG51bWJlcjtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblx0dGV4dHVyZXM6IFRleHR1cmVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLGJvcmRlcix0aWxlV2lkdGgsdGlsZUhlaWdodCxyb3dzLGNvbHVtbnMpe1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHRcdHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG5cdFx0dGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XG5cdFx0dGhpcy5yb3dzID0gcm93cztcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdO1xuXHR9XG5cblx0Z2V0VGV4dHVyZShnaWQ6bnVtYmVyKTpUZXh0dXJlICB7XG5cdFx0Ly9DaGVjayB3ZXRoZXIgdGV4dHVyZXMgd2FzIGFsbHJlYWR5IGZyYW1lZCBmb3JtIHNwcml0ZXNoZWV0XG5cdFx0aWYgKHRoaXMudGV4dHVyZXNbZ2lkXSkge1xuXHRcdCAgcmV0dXJuIHRoaXMudGV4dHVyZXNbZ2lkXTtcblx0XHR9IGVsc2Uge1xuXHRcdCAgLy9DYWxjdWxhdGUgcm93IGFuZCBjb2x1bW4gZnJvbSBnaWRcblx0XHQgIGxldCByb3c6bnVtYmVyID0gTWF0aC5mbG9vcigoZ2lkIC0gMSkgLyB0aGlzLmNvbHVtbnMpO1xuXHRcdCAgbGV0IGNvbHVtbjpudW1iZXIgPSAoZ2lkIC0gMSkgJSB0aGlzLmNvbHVtbnM7XG5cdFxuXHRcdCAgbGV0IHRpbGVXaWR0aDpudW1iZXIgPSB0aGlzLnRpbGVXaWR0aDtcblx0XHQgIGxldCB0aWxlSGVpZ2h0Om51bWJlciA9IHRoaXMudGlsZUhlaWdodDtcblx0XG5cdFx0ICBsZXQgeDpudW1iZXIgPSBjb2x1bW4gKiB0aWxlV2lkdGggKyBjb2x1bW4gKiB0aGlzLmJvcmRlcjtcblx0XHQgIGxldCB5Om51bWJlciA9IHJvdyAqIHRpbGVIZWlnaHQgKyByb3cgKiB0aGlzLmJvcmRlcjtcblx0XG5cdFx0ICBsZXQgdDpUZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHgsIHksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkpO1xuXHRcdCAgLy9TYXZlIFRleHR1cmUgaW4gY2FjaGUgYXJyYXlcblx0XHQgIHRoaXMudGV4dHVyZXNbZ2lkXSA9IHQ7XG5cdFx0ICByZXR1cm4gdDtcblx0XHR9XG5cdCAgfVxuXHRcblxufSIsImVudW0gSVRFTSB7XG4gICAgVE9NQVRPX1BMQU5UID0gXCJ0b21hdG9fcGxhbnRcIixcbiAgICBUT01BVE9fUFJPSkVDVElMRSA9IFwidG9tYXRvX3Byb2plY3RpbGVcIixcbiAgICBQVU1QS0lOX1BMQU5UID0gXCJwdW1wa2luX3BsYW50XCIsXG4gICAgVE5UX1BVTVBLSU4gPSBcInRudF9wdW1wa2luXCIsXG4gICAgV0FMTCA9IFwid2FsbFwiLFxuICAgIEhBTkQgPSBcImhhbmRcIixcbn1cblxuXG5leHBvcnQgeyBJVEVNIH07XG4iLCJpbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIlxuXG5jb25zdCBCYWxhbmNpbmcgPSB7XG4gICAgdHJlZToge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxLFxuICAgICAgICBjcm9wQ291bnQ6IDQsXG4gICAgfSxcblxuICAgIHdhbGw6IHtcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcbiAgICB9LFxuXG4gICAgdG50UHVtcGtpbjoge1xuICAgICAgICBleHBsb3Npb25EYW1hZ2U6IDEuNSxcbiAgICB9LFxuXG4gICAgcGxheWVyOiB7XG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBoaXREYW1hZ2U6IDAuMSxcbiAgICAgICAga25vY2tkb3duIDogMjAwMCwgLy9UaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgIH0sXG5cbiAgICB0b3dlcjoge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxMCxcbiAgICAgICAgY29vbGRvd246IDYgLy9Ib3cgb2Z0ZW4gdGhpcyBPYmplY3Qgd2lnZ2xlcyB1bnRpbCBpdCBpcyBhZ2FpbiB2dWxuZXJhYmxlXG4gICAgfSxcblxuICAgIHRvbWF0b1Byb2plY3RpbGU6IHtcbiAgICAgICAgc3BlZWQ6IDcsXG4gICAgICAgIGhpdERhbWFnZTogMC4zLFxuICAgICAgICBpbnZlbnRvcnlMaW1pdCA6IDEwLFxuICAgIH0sXG5cbiAgICB0b21hdG9QbGFudDoge1xuICAgICAgICBncm93U3RlcFRpbWU6IDUwMDAsXG4gICAgICAgIGNyb3BzOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElURU0uVE9NQVRPX1BST0pFQ1RJTEUsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElURU0uVE9NQVRPX1BMQU5ULCBjb3VudDogNCB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFydFNlZWRzOiA1LFxuICAgIH0sXG5cbiAgICBwdW1wa2luUGxhbnQ6IHtcbiAgICAgICAgZ3Jvd1N0ZXBUaW1lOiAxMDAwMCxcbiAgICAgICAgY3JvcHM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5UTlRfUFVNUEtJTiwgY291bnQ6IDIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5QVU1QS0lOX1BMQU5ULCBjb3VudDogMyB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFydFNlZWRzOiA1LFxuICAgIH0sXG5cbn1cblxuZXhwb3J0IHsgQmFsYW5jaW5nIH0iLCJjb25zdCBDb25zdGFudHMgPSB7XG4gICAgQVNTRVRfUEFUSDogXCJkYXRhL2Fzc2V0c1wiLFxuICAgIE1BUF9QQVRIOiBcImRhdGEvbWFwc1wiLFxuICAgIFNPVU5EX1BBVEg6IGBkYXRhL2Fzc2V0cy9zb3VuZGAsXG4gICAgTVVTSUNfUEFUSDogYGRhdGEvYXNzZXRzL211c2ljYCxcbn1cblxuZXhwb3J0IHsgQ29uc3RhbnRzIH0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEhpdEV2ZW50IHtcblxuICAgIGluaXRpYXRvcjogUGxheWVyO1xuICAgIGRhbWFnZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5pdGlhdG9yOiBQbGF5ZXIsIGRhbWFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblxuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBVcGRhdGVTY2hlZHVsZXIge1xuXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xuICAgICBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmNsaWVudHNbaWRdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5jbGllbnRzW2lkXTtcbiAgICB9XG5cbiAgICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2FsbGJhY2sgPSB0aGlzLmNsaWVudHNbaV0uY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY3VycmVudENhbGxiYWNrKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzeW5jaHJvbnVzIFByb21pc2UgZm9yIHdhaXRpbmcgdGhlIGdpdmVuIHRpbWUgaW4gbXNcbiAgICAgKiBUaGlzIGRvZXMgTk9UIHBhdXNlIG9yIHN0b3AgdGhlIFVwZGF0ZVNjaGVkdWxlclxuICAgICAqL1xuICAgIHN0YXRpYyB3YWl0ID0gbXMgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBQb2ludCwgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gJy4vQmFsYW5jaW5nJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vQ29uc3RhbnRzJztcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSAnLi9IaXRFdmVudCc7XG5pbXBvcnQgeyBESVJFQ1RJT04sIFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSAnLi9VcGRhdGVTY2hlZHVsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUHJvamVjdGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgaWRDb3VudGVyID0gMDtcbiAgICBzdGF0aWMgdGhyb3dTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vc25hcC5tcDNgKTtcbiAgICBzdGF0aWMgc21hc2hTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vc21hc2gubXAzYCk7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbml0aWF0b3I6IFBsYXllcjtcbiAgICBwcml2YXRlIHZ4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdnk6IG51bWJlciA9IDA7XG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdID0gW107XG5cbiAgICBleHBsb2RhYmxlOiBib29sZWFuID0gZmFsc2U7IC8vVG9tYXRvIGlzIG5vdCBleHBsb2RhYmxlIGF0IGluaXRpYWxpc2F0aW9uIHRvIGF2b2lkIGhpdHRpbmcgdGhlIGNyZWF0aW5nIFBsYXllciBpbnN0YW50bHlcblxuICAgIHN0YXRpYyBnZXROZXdJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHRvbWF0b19wcm9qZWN0aWxlXyR7VG9tYXRvUHJvamVjdGlsZS5pZENvdW50ZXIrK31gO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IERJUkVDVElPTiwgaW5pdGlhdG9yOiBQbGF5ZXIpIHtcblxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcHJvamVjdGlsZV9mbHlcIikpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBUb21hdG9Qcm9qZWN0aWxlLmdldE5ld0lkKCk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXcgUG9pbnQoMiwgMik7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5VUDogdGhpcy52eSA9IC0xICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjogdGhpcy52eSA9IDEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOiB0aGlzLnZ4ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDogdGhpcy52eCA9IDEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgdG9tYXRvX3Byb2plY3RpbGVfc21hc2hfJHtpfWA7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKHRoaXMuaWQsIHRoaXMuZG9TdGVwKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIubWFwLmV4dHJhU3R1ZmZDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIFRvbWF0b1Byb2plY3RpbGUudGhyb3dTb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMueSArIHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1ggLSB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1kgLSB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9DaGVjayBpZiB0aGUgdG9tYXRvIGhpdHMgYSBQbGF5ZXJcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgZ2FtZU1hbmFnZXIubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHBsYXllci5nZXRIaXRib3goKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnggPCBoaXRib3gucmlnaHRYICYmIHRoaXMueCArIHRoaXMud2lkdGggPiBoaXRib3gubGVmdFggJiYgdGhpcy55IDwgaGl0Ym94Lmxvd2VyWSAmJiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGhpdGJveC51cHBlclkpIHtcbiAgICAgICAgICAgICAgICAvL0ZseSBpbnRvIHRoZSBQbGF5ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hc2gocGxheWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vQ2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoaXMgbmV3IHBvc2l0aW9ucyB3b3VsZCBiZSBpbiBhIHNvbGlkIHRpbGUgb3Igb3V0IG9mIHRoZSBtYXBcbiAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8IGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFRpbGUgPSBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9GbHkgaW50byB0aGUgdGlsZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFzaChibG9ja2VkVGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIG5vIGNvbGxpc2lvbiwganVzdCBmbHkgeW91ciB3YXlcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSAwLjUgKiBkZWx0YTtcbiAgICAgICAgdGhpcy5leHBsb2RhYmxlID0gdHJ1ZTtcblxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGFzeW5jIHNtYXNoKGNvbGxpZGVyOiBUaWxlIHwgUGxheWVyKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGxvZGFibGUpIHtcbiAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci51bnJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgVG9tYXRvUHJvamVjdGlsZS5zbWFzaFNvdW5kLnBsYXkoKTsgLy9QbGF5IFNtYXNoIHNvdW5kXG5cbiAgICAgICAgICAgIC8vVHJpZ2dlciBIaXQgZXZlbnQgb24gaGl0dGVuIHRpbGUgb3IgUGxheWVyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5vbkhpdChuZXcgSGl0RXZlbnQodGhpcy5pbml0aWF0b3IsIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLmhpdERhbWFnZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1BsYXkgU21hc2ggYW5pbWF0aW9uXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDQwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnkge1xuXG4gICAgdG9tYXRvX3Byb2plY3RpbGU6IG51bWJlciA9IDA7XG4gICAgdG50X3B1bXBraW46IG51bWJlciA9IDA7XG4gICAgdG9tYXRvX3BsYW50OiBudW1iZXIgPSBCYWxhbmNpbmcudG9tYXRvUGxhbnQuc3RhcnRTZWVkcztcbiAgICBwdW1wa2luX3BsYW50OiBudW1iZXIgPSBCYWxhbmNpbmcucHVtcGtpblBsYW50LnN0YXJ0U2VlZHM7XG4gICAgd2FsbDogbnVtYmVyID0gMDtcblxuICAgIGdldEl0ZW0oaXRlbVR5cGU6IElURU0pOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvbWF0b19wbGFudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcGxhbnQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHVtcGtpbl9wbGFudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdW1wa2luX3BsYW50LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b21hdG9fcHJvamVjdGlsZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcHJvamVjdGlsZS0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50bnRfcHVtcGtpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bnRfcHVtcGtpbi0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53YWxsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGwtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2l2ZUl0ZW0oaXRlbVR5cGU6IElURU0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdpdmUgJHtpdGVtVHlwZX0geCAke2NvdW50fWApO1xuICAgICAgICBzd2l0Y2ggKGl0ZW1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMudG9tYXRvX3Byb2plY3RpbGUgKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMudG50X3B1bXBraW4gKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy53YWxsICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDogdGhpcy50b21hdG9fcGxhbnQgKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogdGhpcy5wdW1wa2luX3BsYW50ICs9IGNvdW50OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBQb2ludCwgZXh0cmFzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vLi4vaW5kZXhcIlxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSAnLi9Ub21hdG9Qcm9qZWN0aWxlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCIuL0ludmVudG9yeVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGVudW0gRElSRUNUSU9OIHsgVVAgPSBcInVwXCIsIFJJR0hUID0gXCJyaWdodFwiLCBET1dOID0gXCJkb3duXCIsIExFRlQgPSBcImxlZnRcIiwgU1RPUCA9IFwic3RvcFwiIH07XG5leHBvcnQgaW50ZXJmYWNlIEhpdGJveCB7XG4gICAgbGVmdFg6IG51bWJlcjtcbiAgICByaWdodFg6IG51bWJlcjtcbiAgICB1cHBlclk6IG51bWJlcjtcbiAgICBsb3dlclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XG4gICAgc3RhdGljIFNQUklURV9IRUlHSFQ6IG51bWJlciA9IDE0NCAvIDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoMS41LCAxLjUpO1xuICAgIHN0YXRpYyBISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwgPSAxMDtcbiAgICBzdGF0aWMgSElUQk9YX1RPTEVSQU5DRV9UT1AgPSAxMDtcbiAgICBzdGF0aWMgZGFtYWdlU291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2F1dHNjaC5tcDNgKTtcblxuICAgIHBsYXllcklkOiBudW1iZXI7XG4gICAgLy9BIGhleCB2YWx1ZSBvZiBhIGNvbG9yIGFsbCBwbGF5ZXIncyBzcHJpdGVzIGFyZSB0aW50ZWQgd2l0aFxuICAgIGNvbG9yOiBudW1iZXIgPSAweEZGRkZGRjtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgc3ByaXRlOiBleHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgYW5pbWF0aW9ucztcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG5cbiAgICAvL1BsYXllciBpZ25vcmVzIGRvU3RlcCwgb25BY3Rpb24gYW5kIG9uSGl0IEV2ZW50cyBpZiBzdHVubmVkXG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICAvKiogU2F2ZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIChTVE9QIHdpbGwgbm90IGJlIHNhdmVkIGhlcmUsIGluIHRoaXMgY2FzZSB0aGUgdmFsdWUgaXMgdGhlIGxhc3QgZGlyZWN0aW9uIGJlZm9yZSBTVE9QKSAqL1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuXG4gICAgdXBLZXk6IHN0cmluZztcbiAgICBkb3duS2V5OiBzdHJpbmc7XG4gICAgbGVmdEtleTogc3RyaW5nO1xuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XG4gICAgYWN0aW9uS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0S2V5OiBzdHJpbmc7XG4gICAgcGxhY2VLZXk6IHN0cmluZztcbiAgICBsYXN0VGludGVkVGlsZTogVGlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDtcblxuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBESVJFQ1RJT04uRE9XTjtcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gUGxheWVyLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjEzO1xuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcblxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcbiAgICAgICAgZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLnJlZ2lzdGVyS2V5KGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5BTllfS0VZLCB0aGlzLmtleURvd24sIHRoaXMua2V5VXAsIFwicGxheWVyXCIgKyBwbGF5ZXJJZCk7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllclwiICsgcGxheWVySWQsIHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIGdldEhpdGJveCgpOiBIaXRib3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdFg6IHRoaXMuc3ByaXRlLnggKyBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgcmlnaHRYOiB0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLSBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgdXBwZXJZOiB0aGlzLnNwcml0ZS55ICsgUGxheWVyLkhJVEJPWF9UT0xFUkFOQ0VfVE9QLFxuICAgICAgICAgICAgbG93ZXJZOiB0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhbGs6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVOYW1lIGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViU3RhdGVOYW1lIGluIGFuaW1hdGlvbnNbc3RhdGVOYW1lXSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgcGxheWVyXyR7c3RhdGVOYW1lfV8ke3N1YlN0YXRlTmFtZX1fJHtpfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXSA9IGN1cnJlbnRGcmFtZXNBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgc3dpdGNoUGxhY2VNb2RlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxhY2VNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlROVF9QVU1QS0lOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uV0FMTDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLkhBTkQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLkhBTkQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5QVU1QS0lOX1BMQU5UOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhbmdlZCBQbGFjZU1vZGUuIE5ldyBtb2RlIGlzOiAke3RoaXMucGxhY2VNb2RlfWApO1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb246IERJUkVDVElPTikge1xuICAgICAgICBpZiAodGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICAvL1BsYXllciBpcyBzdHVubmVkIGFuZCBjYW4ndCBjaGFuZ2UgaXQncyBkaXJlY3Rpb25cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OLlNUT1ApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmVzID0gdGhpcy5hbmltYXRpb25zLndhbGtbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IHRoaXMuYW5pbWF0aW9uc1tzdGF0ZV1bdGhpcy5jdXJyZW50RGlyZWN0aW9uXTtcblxuICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKClcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1dhaXQgYSBtb21lbnRcbiAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoODApO1xuXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gYmFja3dhcmRzXG4gICAgICAgIGZvciAobGV0IGkgPSBmcmFtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vUmVzdG9yZSBsYXN0IGRpcmVjdGlvbidzIHRleHR1cmVcbiAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMuY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBzZXRLZXlzKHVwS2V5LCBkb3duS2V5LCBsZWZ0S2V5LCByaWdodEtleSwgYWN0aW9uS2V5LCBzZWxlY3RLZXksIHBsYWNlS2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgICAgIHRoaXMucGxhY2VLZXkgPSBwbGFjZUtleTtcbiAgICB9XG5cbiAgICBzZXRDb2xvcihjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IGNvbG9yO1xuICAgIH1cblxuICAgIGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPSB0aGlzLmxhc3RLZXkgJiYgIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSk6IHZvaWQgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHRoaXMuZ2V0SGl0Ym94KCk7XG4gICAgICAgICAgICBjb25zdCBzdGVwWCA9IHRoaXMudnggKiBkZWx0YTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBZID0gdGhpcy52eSAqIGRlbHRhO1xuICAgICAgICAgICAgY29uc3QgdGlsZVdpZHRoID0gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0O1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXIgaWYgaGUgd291bGQgZG8gYSBzdGVwIGluIGRpcmVjdGlvbiAoc3RlcFh8c3RlcFkpXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC5sZWZ0WCArIHN0ZXBYKSAvIHRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKGhpdGJveC5yaWdodFggKyBzdGVwWCkgLyB0aWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC51cHBlclkgKyBzdGVwWSkgLyB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigoaGl0Ym94Lmxvd2VyWSArIHN0ZXBZKSAvIHRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAuZ2V0VGlsZSh4LCB5KS50aWxlT2JqZWN0LnNvbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChibG9ja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUueCArPSBzdGVwWDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS55ICs9IHN0ZXBZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgVGlsZS5cbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cbiAgICAqL1xuICAgIGdldEN1cnJlbnRUaWxlKCk6IFRpbGUge1xuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCwgZ3JpZFkpO1xuICAgIH1cblxuICAgIHRpbnRDdXJyZW50VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbnRlZFRpbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgIGlmIChjdCkge1xuICAgICAgICAgICAgY3Quc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUaW50ZWRUaWxlID0gY3Q7XG5cbiAgICB9XG5cbiAgICBvblBsYWNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG5cbiAgICAgICAgICAgIC8vQ3JlYXRlIGhpdEV2ZW50IGlmIHBsYWNlTW9kZSBpcyBIQU5EXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5IQU5EKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMsIEJhbGFuY2luZy5wbGF5ZXIuaGl0RGFtYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG8gaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VNb2RlID09IElURU0uVE9NQVRPX1BST0pFQ1RJTEUgJiYgdGhpcy5pbnZlbnRvcnkuZ2V0SXRlbShJVEVNLlRPTUFUT19QUk9KRUNUSUxFKSkge1xuICAgICAgICAgICAgICAgIG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuY3VycmVudERpcmVjdGlvbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Vsc2UgcGxhY2UgdGlsZU9iamVjdCBpZiByZXNzb3VyY2VzIGFyZSBpbiBpbnZlbnRvcnlcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW52ZW50b3J5LmdldEl0ZW0odGhpcy5wbGFjZU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9uUGxhY2UodGhpcy5wbGFjZU1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQgPSBhc3luYyAoaGl0RXZlbnQ6IEhpdEV2ZW50KSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLnN0dW5uZWQpe1xuICAgICAgICAgICAgdGhpcy5zdHVubmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFBsYXllci5kYW1hZ2VTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLndpZ2dsZSgzKTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wbGF5ZXIua25vY2tkb3duKTtcbiAgICAgICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgd2lnZ2xlKHRpbWVzKSB7XG5cbiAgICAgICAgLy9Qcm9sb2dcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMTtcbiAgICAgICAgdGhpcy5zcHJpdGUueCArPSB0aGlzLnNwcml0ZS53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuXG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FcGlsb2dcbiAgICAgICAgdGhpcy5zcHJpdGUueCAtPSB0aGlzLnNwcml0ZS53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgLT0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxufSIsImltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRpbGVPYmplY3QgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2hpdC5tcDNgKTtcbiAgICBzdGF0aWMgb25EZXN0cm95U291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2Jsb2IubXAzYCk7XG5cbiAgICBtb3RoZXI6IFRpbGU7XG4gICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2dWxuZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgc29saWQ/OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLm1vdGhlciA9IG1vdGhlcjtcblxuICAgICAgICB0aGlzLm1vdGhlci5hZGRUaWxlT2JqZWN0KHRoaXMpO1xuXG4gICAgICAgIC8vc2V0IHJlbmRlciBjb29yZGluYXRlc1xuICAgICAgICB0aGlzLnggPSB0aGlzLm1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLm1vdGhlci55O1xuXG4gICAgICAgIC8vU2V0IHRpbWVyIGZvciBzb2xpZCB0aWxlc1xuICAgICAgICBpZiAoc29saWQpIHtcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4QUFBQUFBO1xuICAgICAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKGB3YWl0X3RvX2JlY29tZV9zb2xpZF8ke3RoaXMubW90aGVyLmdyaWRYfV8ke3RoaXMubW90aGVyLmdyaWRZfWAsIHRoaXMudHJ5VG9CZWNvbWVTb2xpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnlUb0JlY29tZVNvbGlkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubW90aGVyLmlzT2NjdXBpZWRCeUFueVBsYXllcigpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkhpdChoaXRldmVudDogSGl0RXZlbnQpIHsgfTtcblxuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vdGhlci50aWxlT2JqZWN0O1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgd2lnZ2xlKHRpbWVzKSB7XG5cbiAgICAgICAgLy9Qcm9sb2dcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcblxuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDApO1xuXG4gICAgfVxuXG5cbiAgICBhc3luYyBzaHJpbmsoKSB7XG5cbiAgICAgICAgLy9Qcm9sb2cgICAgICAgIFxuICAgICAgICBjb25zdCBzY2FsZURpZmYgPSAwLjI7XG4gICAgICAgIC8vQ2hhbmdlIGFuY2hvclxuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSwgMSk7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aGlzLnNjYWxlLnggPiAwICYmIHRoaXMuc2NhbGUueSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCAtPSBzY2FsZURpZmY7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgLT0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FcGlsb2dcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDApO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgYmxpbmsodGltZXMpIHtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgLy9HaXZlIHRoZSB0aWxlb2JqZWN0IGEgZ3JlZW4gdGludFxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkFBQUE7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgyMDApO1xuICAgICAgICAgICAgLy9SZW1vdmUgdGhlIHRpbnRcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMjAwKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuXG5cbn1cbiIsImltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xuXG4gICAgc3RhdGljIHRpY2tTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0va2xpY2subXAzYCk7XG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vZXhwbG9kZS5tcDNgKTtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSAmJiBoaXRFdmVudC5kYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgVG50UHVtcGtpbi50aWNrU291bmQucGxheSgpO1xuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGluayg0KTtcbiAgICAgICAgICAgIC8vVHJpZ2dlciBUaWxlT2JqZWN0cyBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXNBcm91bmQpe1xuICAgICAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KGhpdEV2ZW50LmluaXRpYXRvcixCYWxhbmNpbmcudG50UHVtcGtpbi5leHBsb3Npb25EYW1hZ2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9FeHBsb2RlISEhXG4gICAgICAgICAgICBUbnRQdW1wa2luLmV4cGxvZGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXlBbmltYXRpb24oXCJleHBsb2RlXCIpO1xuICAgICAgICAgICAgLy9EZXN0cm95IHB1bXBraW4gOi0oXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIGV4cGxvZGU6IDEyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHB1bXBraW5fJHtzdGF0ZU5hbWV9XyR7aX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0aW9uc1tzdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXG4gICAgICogVGhpcyBhcnJheSBob2xkcyBvbmx5IGV4aXN0aW5nIHRpbGVzIGFuZCBubyB1bmRlZmluZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcbiAgICAgICAgY29uc3QgbXlYID0gdGhpcy5tb3RoZXIuZ3JpZFg7XG4gICAgICAgIGNvbnN0IG15WSA9IHRoaXMubW90aGVyLmdyaWRZO1xuXG4gICAgICAgIGxldCB0aWxlczogVGlsZVtdID0gW107XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYICsgMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgKyAxKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgLSAxKSk7XG5cbiAgICAgICAgLy9GaWx0ZXIgbm90IGV4aXN0aW5nIHRpbGVzXG4gICAgICAgIGxldCB0b1JldHVybjpUaWxlW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xuICAgICAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoMSwwKSk7XG4gICAgICAgIG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDIsMCkpO1xuICAgICAgICBwLm9uSGl0KG5ldyBIaXRFdmVudChnYW1lTWFuYWdlci5tYXAucGxheWVyc1swXSwgMSkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0O1xuXG4gICAgICAgIC8vRHJhdyBmcmFtZVxuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5saW5lU3R5bGUoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCB0aGlzLmJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvcmRlclJlY3RhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvL0NsZWFyIGxhc3QgcHJvZ3Jlc3MgU2hhcGVcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NTaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDAuMSkgeyAvL0RyYXcgdG9vIHNtYWxsIHByb2dyZXNzIGxvb2tzIHVnbHlcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gNjQgKiB0aGlzLnByb2dyZXNzIC0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrID0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMjtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZSh0aGljaywgdGhpcy5wcm9ncmVzc0NvbG9yKVxuICAgICAgICAgICAgICAgIC5tb3ZlVG8oU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTIC0gMSwgdGhpY2sgLSAxKVxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHNldCBwcm9ncmVzcyBsb3dlciB0aGFuIDAgb3IgaGlnaGVyIHRoYW4gMVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aDtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKDk0OSksIG1vdGhlciwgdHJ1ZSk7IC8vOTQ5IGlzIGEgYm94IHNwcml0ZVxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wIHtcbiAgICB0eXBlOiBJVEVNLFxuICAgIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYW50IGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0aWMgZ3Jvd1N0YXRlczogbnVtYmVyID0gNTtcbiAgICBjcm9wczogQ3JvcFtdO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyb3coKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBncm93KCk7XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZ1bG5lcmFibGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IGhpdEV2ZW50LmluaXRpYXRvci5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAvL0hhcnZlc3QgeW91cnNlbGZcbiAgICAgICAgZm9yIChjb25zdCBjcm9wIG9mIHRoaXMuY3JvcHMpIHtcbiAgICAgICAgICAgIGhpdEV2ZW50LmluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oY3JvcC50eXBlLCBjcm9wLmNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICAvL2dpdmUgdGhlIGluaXRpYXRvciB0aGUgaXRlbXNcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUGxhbnQgZXh0ZW5kcyBQbGFudHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwidG9tYXRvX3BsYW50XzBcIiksbW90aGVyKTtcbiAgICAgICAgdGhpcy5jcm9wcyA9IEJhbGFuY2luZy50b21hdG9QbGFudC5jcm9wcztcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgVG9tYXRvUGxhbnQuZ3Jvd1N0YXRlczsgZ3Jvd1N0ZXArKykge1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnRvbWF0b1BsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQdW1wa2luUGxhbnQgZXh0ZW5kcyBQbGFudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwicHVtcGtpbl9wbGFudF8wXCIpLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLmNyb3BzID0gQmFsYW5jaW5nLnB1bXBraW5QbGFudC5jcm9wcztcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgUHVtcGtpblBsYW50Lmdyb3dTdGF0ZXM7IGdyb3dTdGVwKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wdW1wa2luUGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShgcHVtcGtpbl9wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHsgVG9tYXRvUGxhbnQgfSBmcm9tIFwiLi9Ub21hdG9QbGFudFwiO1xuaW1wb3J0IHsgUHVtcGtpblBsYW50IH0gZnJvbSBcIi4vUHVtcGtpblBsYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIGdyaWRYOiBudW1iZXI7XG4gICAgZ3JpZFk6IG51bWJlcjtcbiAgICB0aWxlT2JqZWN0OiBUaWxlT2JqZWN0O1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XG4gICAgICAgIHRoaXMuZ3JpZFkgPSBncmlkWTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gZ3JpZFggKiBtYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IGdyaWRZICogbWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KG5ld1RpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdCA9IG5ld1RpbGVPYmplY3Q7XG4gICAgICAgICAgICBuZXdUaWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICAgICAgdGhpcy5tYXAudGlsZU9iamVjdENvbnRhaW5lci5hZGRDaGlsZChuZXdUaWxlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhpdChoaXRFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uUGxhY2Uob2JqZWN0VHlwZTogSVRFTSkge1xuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgc3dpdGNoIChvYmplY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRvbWF0b1BsYW50KHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFB1bXBraW5QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVG50UHVtcGtpbih0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdGhlIGZpcnN0IHBsYXllciB0aGF0IG9jY3VwaWVzIHRoaXMgdGlsZS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIHRpbGUgaXMgbm90IG9jY3VwaWVkXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5KCk6IFBsYXllciB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueCAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS54ICsgcGxheWVyLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnkgKyBwbGF5ZXIuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkWCA+PSB4UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRYIDw9IHhSYW5nZS50byAmJiB0aGlzLmdyaWRZID49IHlSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFkgPD0geVJhbmdlLnRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGFueSBwbGF5ZXIgb24gdGhpcyB0aWxlLlxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeUFueVBsYXllcigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5pc09jY3VwaWVkQnkoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvY2N1cGllZCBieSBwbGF5ZXJcIiArIHBsYXllci5wbGF5ZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbnQoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QudGludCA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IERJUkVDVElPTiwgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFRvbWF0b1Byb2plY3RpbGUgfSBmcm9tIFwiLi9Ub21hdG9Qcm9qZWN0aWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIG93bmVySWQ6IHN0cmluZztcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5vd25lcklkID0gb3duZXJJZDtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCAvIEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBUb3dlci5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZShCYWxhbmNpbmcudG93ZXIuY29vbGRvd24pO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIFRvbWF0b3MgYXMgZGVmZW5zZSBhY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tb3RoZXIubWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlV2lkdGggPSB0aGlzLm1vdGhlci5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRZIC0gMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMueCwgKHRoaXMubW90aGVyLmdyaWRZIC0gMSkgKiB0aWxlSGVpZ2h0LCBESVJFQ1RJT04uVVAsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFggLSAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUoKHRoaXMubW90aGVyLmdyaWRYIC0gMSkgKiB0aWxlV2lkdGgsIHRoaXMueSwgRElSRUNUSU9OLkxFRlQsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUodGhpcy54LCAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxKSAqIHRpbGVIZWlnaHQsIERJUkVDVElPTi5ET1dOLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRYICsgMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKCh0aGlzLm1vdGhlci5ncmlkWCArIDEpICogdGlsZVdpZHRoLCB0aGlzLnksIERJUkVDVElPTi5SSUdIVCwgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIke3RoaXMub3duZXJJZH0gaGFzIGxvc3QhYCk7XG4gICAgfVxuXG4gICAgZ2V0T3duZXIoKTogUGxheWVyIHtcbiAgICAgICAgcmV0dXJuIGdhbWVNYW5hZ2VyLm1hcC5wbGF5ZXJzW3RoaXMub3duZXJJZF07XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHtCYWxhbmNpbmd9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgbW90aGVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRyZWUub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLCBCYWxhbmNpbmcudHJlZS5jcm9wQ291bnQpO1xuICAgICAgICBUcmVlLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi9Ub3dlclwiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIC8qKkhvbGQgYWxsIFRpbGVzLiBVc2FnZTogdGlsZXNbeV1beF0gKi9cbiAgICBwcml2YXRlIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBleHRyYVN0dWZmQ29udGFpbmVyOiBDb250YWluZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGlsZU9iamVjdENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVPYmplY3RDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGxheWVyQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5leHRyYVN0dWZmQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB9XG5cblxuICAgIGdldE1hcE9iamVjdFByb3BlcnR5KG1hcE9iamVjdDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIG1hcE9iamVjdC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9Mb2FkcyB0aGUgbWFwIHdpdGggc3ByaXRlc2hlZXQuIExhc3QgcGFyYW1ldGVyIGlzIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBwYXJzaW5nIHRoZSBtYXAgd2l0aCB0aGUgbmV3IHBhcnNlZCBtYXAgYXMgcGFyYW1ldGVyXG4gICAgc3RhdGljIGxvYWRNYXAobWFwRGF0YSkge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBUaWxlZE1hcCgpO1xuICAgICAgICBjb25zdCB0aWxlZFNwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldDtcbiAgICAgICAgY29uc3QgYXRsYXNTcHJpdGVzaGVldCA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gdGlsZWRTcHJpdGVzaGVldC50aWxlV2lkdGggKiBTUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFNQUklURV9TQ0FMRS55O1xuXG4gICAgICAgIC8vQnVpbGQgYWxsIFRpbGVMYXllcnMgZmlyc3RcbiAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgbWFwLmdyaWRXaWR0aCA9IHRsLndpZHRoO1xuICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy9Jbml0IG1hcCdzIHRpbGVzIGFycmF5XG4gICAgICAgICAgICAgICAgbWFwLnRpbGVzID0gbmV3IEFycmF5KG1hcC5ncmlkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXNbaV0gPSBuZXcgQXJyYXkobWFwLmdyaWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCB0aWxlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRsLndpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcm93ICogdGwud2lkdGggKyBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUodGwuZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgVGlsZSh0ZXh0dXJlLCBjb2x1bW4sIHJvdywgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZShuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9JdGVyYXRlIHRocm91Z2ggT2JqZWN0IExheWVyc1xuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG5cbiAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuXG5cbiAgICAgICAgICAgICAgICAvL0FkZCBhbGwgcGxheWVycyBmaXJzdFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX18gIF8gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8X18pIHwgfCBfXyBfIF8gICBfICBfX18gXyBfXyBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX19fL3wgfC8gX2AgfCB8IHwgfC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHxffCAgICB8X3xcXF9fLF98XFxfXywgfFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgX18vIHwgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKGNvLnggKiBTUFJJVEVfU0NBTEUueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IChNYXRoLnJvdW5kKGNvLnkpIC0gY28uaGVpZ2h0KSAqIFNQUklURV9TQ0FMRS55OyAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcklkOiBudW1iZXIgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwicGxheWVySWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIG1hcCwgcGxheWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFBsYXllcihuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgU3ByaXRlcyBmb3IgZWFjaCBvYmplY3QgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgX19fX18gICAgICBfX19fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8LyBfIFxcIFxcIC9cXCAvIC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgKF8pIFxcIFYgIFYgLyAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffFxcX19fLyBcXF8vXFxfLyBcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rvd2VyID0gbmV3IFRvd2VyKHRleHR1cmUsIG1vdGhlciwgb3duZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgfCB8ICBfXy8gIF9fL1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qKipcbiAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgXFwgXFwgICAgICAgIC8gLyAgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBcXCBcXCAgL1xcICAvIC9fIF98IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICBcXCAgL1xcICAvIChffCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIFxcLyAgXFwvIFxcX18sX3xffF98XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXcgV2FsbChtb3RoZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG5cblxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbGUgYXQgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHggYW5kIHkgZ3JpZCBjb29yZGluYXRlc1xuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHRpbGUgYXQgdGhpcyBjb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSBncmlkWCB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0gZ3JpZFkgeS1jb29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0VGlsZShncmlkWDpudW1iZXIsZ3JpZFk6bnVtYmVyKTpUaWxle1xuICAgICAgICBpZih0aGlzLnRpbGVzW2dyaWRZXSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1tncmlkWV1bZ3JpZFhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3Q6IFJlY3RhbmdsZSkge1xuXG4gICAgICAgIC8vYW4gT2JqZWN0IGNhbiBiZSBwbGFjZWQgXCJiZXR3ZWVuXCIgdGlsZXMgaW4gdGlsZWQgbWFwIGVkaXRvci4gQnV0IGV2bnRzIGNhbiBiZSB0cmlnZ2VyZWQgb25seSBmcm9tIHdob2xlIHRpbGVzLiBTbyB0aGUgb2JlamNjdHMgcG9zaXRpb24gaXMgbWFwcGVkIHRvIHRoZSBuZWFyZXN0IFRpbGVcblxuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbWFwT2JqZWN0LnggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbGV0IHhUaWxlcyA9IG9yaWdpbmFsWCAvIHRoaXMuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcblxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gKG1hcE9iamVjdC55IC0gbWFwT2JqZWN0LmhlaWdodCkgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTsgIC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lciAgICAgICAgICAgICAgXG4gICAgICAgIGxldCB5VGlsZXMgPSBvcmlnaW5hbFkgLyB0aGlzLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB7IGdyaWRYOiB4VGlsZXMsIGdyaWRZOiB5VGlsZXMgfTtcbiAgICB9XG5cbiAgICBnZXRUaWxlTmVhcmVzdFRvKG1hcE9iamVjdDogUmVjdGFuZ2xlKTogVGlsZSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zLmdyaWRZXVtwb3MuZ3JpZFhdO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xuXG4gICAgIGtleVVwcyA9IHt9O1xuICAgICBrZXlEb3ducyA9IHt9O1xuICAgICBBTllfS0VZID0gXCJhbnlfa2V5XCI7XG5cbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleVVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF0bGFzU3ByaXRlc2hlZXQge1xuXG5cdGF0bGFzRGF0YTtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblxuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIGF0bGFzRGF0YSkge1xuXHRcdHRoaXMuYXRsYXNEYXRhID0gYXRsYXNEYXRhO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XHRcdFxuXHR9XG5cblx0Z2V0VGV4dHVyZShuYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcblxuXHRcdGNvbnN0IHByb3BzID0gdGhpcy5hdGxhc0RhdGEuaXRlbXNbbmFtZV07XG5cdFx0aWYgKHByb3BzID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIHRleHR1cmUgJyR7bmFtZX0nIGluIHNwcml0ZXNoZWV0YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShwcm9wcy54LCBwcm9wcy55LCBwcm9wcy53aWR0aCwgcHJvcHMuaGVpZ2h0KSk7XG5cdH1cblxuXG59IiwiY29uc3QgdWlDb25zdGFudHMgPSB7XG4gICAgbWVudUJhcjoge1xuICAgICAgICBoZWlnaHQ6IDExNSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgc2NhbGU6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIGludmVudG9yeToge1xuICAgICAgICAgICAgc3BhY2luZzogMyxcbiAgICAgICAgICAgIHNwcml0ZVNpemUgOiAxNixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3RhZ2U6IHtcbiAgICAgICAgd2lkdGg6IDEwMjAsXG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdWlDb25zdGFudHM7IiwiaW1wb3J0IHsgQ29udGFpbmVyLCBSZWN0YW5nbGUsIEdyYXBoaWNzLCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuL3VpQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4uL21vZGVsL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuLi9tb2RlbC9JdGVtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNZW51IGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHBsYXllcjogUGxheWVyO1xuICAgIGFjdGlvbkljb246U3ByaXRlO1xuICAgIHRvbWF0b1Byb2plY3RpbGVTcHJpdGVzOlNwcml0ZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgd2lkdGg6IG51bWJlciwgeDpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgICAgICAgdGhpcy55ID0gdWlDb25zdGFudHMuc3RhZ2UuaGVpZ2h0IC0gdWlDb25zdGFudHMubWVudUJhci5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG5cbiAgICAgICAgbGV0IGJnU2hhcGUgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgYmdTaGFwZS5iZWdpbkZpbGwocGxheWVyLmNvbG9yKTtcbiAgICAgICAgYmdTaGFwZS5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgdWlDb25zdGFudHMubWVudUJhci5oZWlnaHQpO1xuICAgICAgICBiZ1NoYXBlLmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChiZ1NoYXBlKTtcblxuICAgICAgICBsZXQgYWkgPSBuZXcgU3ByaXRlKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShwbGF5ZXIucGxhY2VNb2RlKSk7XG4gICAgICAgIGFpLnNjYWxlLnNldCh1aUNvbnN0YW50cy5tZW51QmFyLmljb24uc2NhbGUpO1xuICAgICAgICBhaS54ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0IC0gYWkud2lkdGgpIC8gMlxuICAgICAgICBhaS55ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0IC0gYWkud2lkdGgpIC8gMlxuICAgICAgICB0aGlzLmFkZENoaWxkKGFpKTtcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uID0gYWk7XG5cbiAgICAgICAgLy9DcmVhdGUgdG9tYXRvIHNwcml0ZXNcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMud2lkdGggLSAoKHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwYWNpbmcgKyB1aUNvbnN0YW50cy5tZW51QmFyLmludmVudG9yeS5zcHJpdGVTaXplXG4gICAgICAgICAgICApICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuaW52ZW50b3J5TGltaXQpXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5pbnZlbnRvcnlMaW1pdDtpKyspe1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKElURU0uVE9NQVRPX1BST0pFQ1RJTEUpKTtcbiAgICAgICAgICAgIHNwcml0ZS54ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwcml0ZVNpemUgKyB1aUNvbnN0YW50cy5tZW51QmFyLmludmVudG9yeS5zcGFjaW5nKSAqIGkgKyBvZmZzZXRYO1xuICAgICAgICAgICAgc3ByaXRlLnkgPSA1O1xuICAgICAgICAgICAgdGhpcy50b21hdG9Qcm9qZWN0aWxlU3ByaXRlcy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJNZW51XCIrcGxheWVyLnBsYXllcklkLHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIGRvU3RlcCA9ICgpPT57XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbi50ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRoaXMucGxheWVyLnBsYWNlTW9kZSk7XG4gICAgICAgIC8vZGlzcGxheSB0b21hdG9lc1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzLmxlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgICAgICBpZihpbmRleCA8IHRoaXMucGxheWVyLmludmVudG9yeS50b21hdG9fcHJvamVjdGlsZSl7XG4gICAgICAgICAgICAgICAgdGhpcy50b21hdG9Qcm9qZWN0aWxlU3ByaXRlc1tpbmRleF0udGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzW2luZGV4XS50aW50ID0gMHgyMjIyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiXG5pbXBvcnQgUGxheWVyTWVudSBmcm9tIFwiLi9wbGF5ZXJNZW51XCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXJNZW51czogUGxheWVyTWVudVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51V2lkdGggPSB1aUNvbnN0YW50cy5zdGFnZS53aWR0aCAvIHBsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTWVudSA9IG5ldyBQbGF5ZXJNZW51KHBsYXllcnNbaV0sIG1lbnVXaWR0aCwgbWVudVdpZHRoICogaSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck1lbnVzLnB1c2gocGxheWVyTWVudSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBsYXllck1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMganNtZWRpYXRhZ3MgZnJvbSBcImpzbWVkaWF0YWdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljUGxheWVyIHtcblxuICAgIHBsYXlsaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIHBsYXlsaXN0UG9zaXRpb24gPSAwO1xuICAgIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhcnRpc3Q6IHN0cmluZztcbiAgICBjb3ZlcjogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0bWxQYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgICAgICAgICAjY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAzOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMWUwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzYxNjE2MTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ZUMzIzJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJDb3Zlcnt9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyVGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyQXJ0aXN0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllckluZm97XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllclwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm11c2ljUGxheWVyQ292ZXJcIiB3aWR0aD1cIjgwcHhcIiBzcmM9XCJodHRwczovL3d3dy5zdXBlcmpvam8uZGUvbWFpbi9waWNzL21lbnNhLnBuZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllckluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVyVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlZXAgYW5kIGZ1bmt5IG11c2ljXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJBcnRpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1pc3RlciBib21iYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgaHRtbFBhcmVudC5pbm5lckhUTUwgKz0gaHRtbDtcbiAgICB9XG5cbiAgICBhZGRNdXNpYyhwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdC5wdXNoKHBhdGgpO1xuICAgIH1cblxuICAgIHBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCh0aGlzLnBsYXlsaXN0UG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIHBhdXNlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE11c2ljQXQocG9zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFBvc2l0aW9uID0gcG9zO1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucGxheWxpc3RbcG9zXTtcbiAgICAgICAgaWYgKHBhdGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbTXVzaWMgUGxheWVyXSBDYW50IHBsYXkgbXVzaWMuIE11c2ljIGNhbnQgYmUgZm91bmQgaW4gcGxheWxpc3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8ocGF0aCk7XG4gICAgICAgIHRoaXMuYXVkaW8ub25lbmRlZCA9IHRoaXMubmV4dFRyYWNrO1xuXG4gICAgICAgIC8vTG9hZCBNZXRhIEluZm9cbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4ODg3LycgKyBwYXRoKTtcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCByZXNwLmJsb2IoKTtcblxuICAgICAgICBqc21lZGlhdGFncy5yZWFkKGJsb2IsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllclRpdGxlJykuaW5uZXJIVE1MID0gZGF0YS50YWdzLnRpdGxlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllckFydGlzdCcpLmlubmVySFRNTCA9ICBkYXRhLnRhZ3MuYXJ0aXN0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZGF0YS50YWdzLnBpY3R1cmU7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlNjRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGltYWdlLmRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSBcImRhdGE6XCIgKyBpbWFnZS5mb3JtYXQgKyBcIjtiYXNlNjQsXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ0b2EoYmFzZTY0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljUGxheWVyQ292ZXInKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGJhc2U2NCk7XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc6KCcsIGVycm9yLnR5cGUsIGVycm9yLmluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0VHJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCgrK3RoaXMucGxheWxpc3RQb3NpdGlvbiAlIHRoaXMucGxheWxpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEtleWJvYXJkTWFuYWdlciB9IGZyb20gXCIuL0tleWJvYXJkTWFuYWdlclwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBsb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQXRsYXNTcHJpdGVzaGVldCB9IGZyb20gXCIuL0F0bGFzU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuLi91aS91aUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vdWkvbWVudUJhclwiO1xuaW1wb3J0IE11c2ljUGxheWVyIGZyb20gJy4uL211c2ljL011c2ljUGxheWVyJ1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICAgIFxuICAgIHRpbGVkU3ByaXRlc2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQ7XG4gICAgYXRsYXNTcHJpdGVzaGVldDogQXRsYXNTcHJpdGVzaGVldDtcbiAgICBcbiAgICBtYXA6IFRpbGVkTWFwO1xuICAgIHBpeGlBcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgbXVzaWNQbGF5ZXI6TXVzaWNQbGF5ZXI7XG4gICAgXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XG4gICAgbWVudUJhcjogTWVudUJhcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9DcmVhdGUgYSBQaXhpIEFwcGxpY2F0aW9uXG4gICAgICAgIGNsYXNzIFBpeGlPcHRpb25zIGltcGxlbWVudHMgQXBwbGljYXRpb25PcHRpb25zIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCwgcHVibGljIHZpZXcpIHsgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKTtcbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnModWlDb25zdGFudHMuc3RhZ2Uud2lkdGgsIHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCwgY2FudmFzKTtcbiAgICAgICAgdGhpcy5waXhpQXBwID0gbmV3IEFwcGxpY2F0aW9uKHBpeGlPcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9Mb2FkID0gW1xuICAgICAgICAgICAge25hbWU6J3RpbGVkU3ByaXRlc2hlZXRUZXh0dXJlJywgdXJsOmAke0NvbnN0YW50cy5BU1NFVF9QQVRIfS9zcHJpdGVzaGVldC5wbmdgfSxcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0VGV4dHVyZScsIHVybDpgJHtDb25zdGFudHMuQVNTRVRfUEFUSH0vc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQucG5nYH0sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldERhdGEnLCB1cmw6YCR7Q29uc3RhbnRzLkFTU0VUX1BBVEh9L3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0Lmpzb25gfSxcbiAgICAgICAgICAgIHtuYW1lOidtYXBEYXRhJywgdXJsOmAke0NvbnN0YW50cy5NQVBfUEFUSH0vbWFwMi5qc29uYH0sXG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIGxvYWRlci5hZGQodG9Mb2FkKS5sb2FkKHRoaXMubG9hZGVyRmluaXNoZWQpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBsb2FkZXJGaW5pc2hlZCA9ICgpPT57XG4gICAgICAgIFxuICAgICAgICB0aGlzLmtleWJvYXJkTWFuYWdlciA9IG5ldyBLZXlib2FyZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XG5cbiAgICAgICAgdGhpcy5tdXNpY1BsYXllciA9IG5ldyBNdXNpY1BsYXllcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L2dvZ29nby5tcDNgKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYyhgJHtDb25zdGFudHMuTVVTSUNfUEFUSH0vTGV0c19SZXN0Lm1wM2ApO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKGAke0NvbnN0YW50cy5NVVNJQ19QQVRIfS9MYV9DYWxhaG9ycmEubXAzYCk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L1Rvd2VsX0RlZmVuY2VfRW5kaW5nLm1wM2ApO1xuICAgICAgICAvL3RoaXMubXVzaWNQbGF5ZXIucGxheSgpO1xuICAgICAgICBcbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XG4gICAgICAgIHRoaXMudGlsZWRTcHJpdGVzaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy50aWxlZFNwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCAxLCAxNiwgMTYsIDMxLCA1NylcbiAgICAgICAgLy9BdGxhcyBTcHJpdGVzaGVldFxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy9SZWdpc3RlciBVcGRhdGUgc2NoZWR1bGVyXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudXBkYXRlU2NoZWR1bGVyLmRvU3RlcCk7XG4gICAgICAgIFxuICAgICAgICAvL0xvYWQgTWFwXG4gICAgICAgIHRoaXMubWFwID0gVGlsZWRNYXAubG9hZE1hcChQSVhJLmxvYWRlci5yZXNvdXJjZXMubWFwRGF0YS5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheSBNYXBcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IFBsYXllciBDb250cm9sc1xuICAgICAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5tYXAucGxheWVycztcbiAgICAgICAgcGxheWVyc1swXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcImNcIiwgXCJ5XCIsIFwieFwiKTtcbiAgICAgICAgcGxheWVyc1swXS5zZXRDb2xvcigweENDRUVBQSk7XG4gICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xuICAgICAgICBwbGF5ZXJzWzFdLnNldENvbG9yKDB4Q0NDQ0ZGKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL0RyYXcgbWVudVxuICAgICAgICB0aGlzLmRyYXdNZW51QmFyKHBsYXllcnMpO1xuICAgICAgICBcbiAgICAgICAgLy9TdGFydCBQaXhpIEFwcFxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMudGVzdCgpO1xuXG4gICAgfVxuXG4gICAgXG4gICAgZHJhd01lbnVCYXIocGxheWVyczogUGxheWVyW10pIHtcbiAgICAgICAgdGhpcy5tZW51QmFyID0gbmV3IE1lbnVCYXIocGxheWVycyk7XG4gICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1lbnVCYXIpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICB0ZXN0KCkge1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLlROVF9QVU1QS0lOLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUsMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0ucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTtcbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuL21vZGVsL0dhbWVNYW5hZ2VyXCJcblxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xuXG5leHBvcnQge2dhbWVNYW5hZ2VyfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==