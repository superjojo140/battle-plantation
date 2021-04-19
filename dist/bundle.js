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
    },
    tower: {
        defaultHealth: 10,
        cooldown: 6 //How often this Object wiggles until it is again vulnerable
    },
    tomatoProjectile: {
        speed: 7,
        hitDamage: 0.3,
    },
    tomatoPlant: {
        growStepTime: 5000,
        cropCount: 2
    },
    pumpkinPlant: {
        growStepTime: 10000,
        cropCount: 2
    },
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
     * This does NOT pause or stop the UpdateSheduler
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
            //Check if at least one of this new positions would be in a solid tile or out of the map
            var blocked = false;
            var blockedTile;
            for (var x = xRange.from; x <= xRange.to; x++) {
                for (var y = yRange.from; y <= yRange.to; y++) {
                    if (gameManager.map.getTile(x, y) == undefined || gameManager.map.getTile(x, y).tileObject) {
                        blocked = true;
                        blockedTile = gameManager.map.getTile(x, y);
                    }
                }
            }
            if (blocked == false) {
                _this.x = newX;
                _this.y = newY;
                _this.rotation += 0.5 * delta;
            }
            else {
                //Fly into the tileObject
                _this.x += _this.vx * 2;
                _this.y += _this.vy * 2;
                _this.smash(blockedTile);
            }
        };
        _this.id = TomatoProjectile.getNewId();
        _this.x = x;
        _this.y = y;
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
        _this.initiator = initiator;
        gameManager.updateScheduler.register(_this.id, _this.doStep);
        gameManager.map.extraStuffContainer.addChild(_this);
        TomatoProjectile.throwSound.play();
        return _this;
    }
    TomatoProjectile.getNewId = function () {
        return "tomato_projectile_" + TomatoProjectile.idCounter++;
    };
    TomatoProjectile.prototype.smash = function (tile) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, frame;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        gameManager.updateScheduler.unregister(this.id);
                        //Play Smash sound
                        TomatoProjectile.smashSound.play();
                        //Trigger Hit event on hitten tile
                        if (tile) {
                            tile.onHit(new HitEvent(this.initiator, Balancing.tomatoProjectile.hitDamage));
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
                        return [2 /*return*/];
                }
            });
        });
    };
    TomatoProjectile.idCounter = 0;
    TomatoProjectile.throwSound = new Audio('data/assets/sound/snap.mp3');
    TomatoProjectile.smashSound = new Audio('data/assets/sound/smash.mp3');
    return TomatoProjectile;
}(external_PIXI_["Sprite"]));


// CONCATENATED MODULE: ./src/model/Inventory.ts

var Inventory_Inventory = /** @class */ (function () {
    function Inventory() {
        this.tomato_projectile = 0;
        this.tnt_pumpkin = 0;
        this.wall = 0;
    }
    Inventory.prototype.getItem = function (itemType) {
        switch (itemType) {
            case ITEM.TOMATO_PLANT:
                return true;
                break;
            case ITEM.PUMPKIN_PLANT:
                return true;
                break;
            case ITEM.TOMATO_PROJECTILE:
                if (this.tomato_projectile > 0) {
                    this.tomato_projectile--;
                    return true;
                }
                else {
                    console.log("Cant get " + itemType + ". Inventory is empty!");
                    return false;
                }
                break;
            case ITEM.TNT_PUMPKIN:
                if (this.tnt_pumpkin > 0) {
                    this.tnt_pumpkin--;
                    return true;
                }
                else {
                    console.log("Cant get " + itemType + ". Inventory is empty!");
                    return false;
                }
                break;
            case ITEM.WALL:
                if (this.wall > 0) {
                    this.wall--;
                    return true;
                }
                else {
                    console.log("Cant get " + itemType + ". Inventory is empty!");
                    return false;
                }
                break;
        }
    };
    Inventory.prototype.giveItem = function (itemType, count) {
        console.log("give " + itemType + "x" + count);
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
                    case _this.actionKey:
                        _this.onHit();
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
                //Calculate theoretically next position
                var newX = _this.sprite.x + _this.vx * delta;
                var newY = _this.sprite.y + _this.vy * delta;
                //Get all tiles that would be touched by the player
                var xRange = {
                    from: Math.floor((newX + Player.HITBOX_TOLERANCE_HORIZONTAL) / _this.map.finalTileWidth),
                    to: Math.floor((newX + _this.sprite.width - Player.HITBOX_TOLERANCE_HORIZONTAL) / _this.map.finalTileWidth)
                };
                var yRange = {
                    from: Math.floor((newY + Player.HITBOX_TOLERANCE_TOP) / _this.map.finalTileHeight),
                    to: Math.floor((newY + _this.sprite.height) / _this.map.finalTileHeight)
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
                    _this.sprite.x = newX;
                    _this.sprite.y = newY;
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
        this.onHit = function () {
        };
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
    Player.SPRITE_WIDTH = 96 / 3;
    Player.SPRITE_HEIGHT = 144 / 4;
    Player.SPRITE_SCALE = new external_PIXI_["Point"](1.5, 1.5);
    Player.HITBOX_TOLERANCE_HORIZONTAL = 10;
    Player.HITBOX_TOLERANCE_TOP = 10;
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
    TileObject.onHitSound = new Audio('data/assets/sound/hit.mp3');
    TileObject.onDestroySound = new Audio('data/assets/sound/blob.mp3');
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
    TntPumpkin.tickSound = new Audio('data/assets/sound/klick.mp3');
    TntPumpkin.explodeSound = new Audio('data/assets/sound/explode.mp3');
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
            return Plant_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.vulnerable) {
                            return [2 /*return*/];
                        }
                        this.vulnerable = false;
                        return [4 /*yield*/, hitEvent.initiator.playAnimation("put")];
                    case 1:
                        _a.sent();
                        //Harvest yourself
                        hitEvent.initiator.inventory.giveItem(this.crop.type, this.crop.count);
                        //give the initiator the items
                        return [4 /*yield*/, this.shrink()];
                    case 2:
                        //give the initiator the items
                        _a.sent();
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
        _this.crop = { type: ITEM.TOMATO_PROJECTILE, count: Balancing.tomatoPlant.cropCount };
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
        _this.crop = { type: ITEM.TNT_PUMPKIN, count: Balancing.pumpkinPlant.cropCount };
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
                            var newTile = new Tile_Tile(texture, row, column, map);
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
        height: 100,
        icon: {
            scale: 3,
        }
    },
    stage: {
        width: 512,
        height: 612,
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
        _this.doStep = function () {
            _this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(_this.player.placeMode);
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
            _this.musicPlayer.addMusic('data/assets/music/gogogo.mp3');
            _this.musicPlayer.addMusic('data/assets/music/Lets_Rest.mp3');
            _this.musicPlayer.addMusic('data/assets/music/La_Calahorra.mp3');
            _this.musicPlayer.addMusic('data/assets/music/Towel_Defence_Ending.mp3');
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
            function PixiOptions(width, height) {
                this.width = width;
                this.height = height;
            }
            return PixiOptions;
        }());
        var pixiOptions = new PixiOptions(ui_uiConstants.stage.width, ui_uiConstants.stage.height);
        this.pixiApp = new external_PIXI_["Application"](pixiOptions);
        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(this.pixiApp.view);
    }
    GameManager.prototype.startGame = function () {
        var toLoad = [
            { name: 'tiledSpritesheetTexture', url: 'data/assets/spritesheet.png' },
            { name: 'atlasSpritesheetTexture', url: 'data/assets/spritesmith_spritesheet.png' },
            { name: 'atlasSpritesheetData', url: 'data/assets/spritesmith_spritesheet.json' },
            { name: 'mapData', url: 'data/maps/map1.json' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9qc21lZGlhdGFncy9kaXN0L2pzbWVkaWF0YWdzLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlZFNwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9CYWxhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1VwZGF0ZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG50UHVtcGtpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1dhbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1BsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQXRsYXNTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL21lbnVCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tdXNpYy9NdXNpY1BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsc0I7Ozs7OztBQ0FBLDRGQUFhLEdBQUcsSUFBc0QsRUFBRSxtQkFBbUIsS0FBSyxVQUFvTyxDQUFDLGFBQWEsMEJBQTBCLDBCQUEwQixnQkFBZ0IsVUFBVSxVQUFVLDBDQUEwQyxnQkFBZ0IsT0FBQyxPQUFPLG9CQUFvQiw4Q0FBOEMsa0NBQWtDLFlBQVksWUFBWSxtQ0FBbUMsaUJBQWlCLGdCQUFnQixzQkFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7O0FBR2hFO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0EscURBQXFEOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qzs7QUFFdkM7QUFDQTtB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RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNXZEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7O0FDbkJZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7Ozs7O0FDbkZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN2TG9CO0FBRTFEO0lBVUMsMEJBQVksT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxPQUFPO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElB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Q0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7IiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuanNtZWRpYXRhZ3MgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBYTUxIdHRwUmVxdWVzdDtcblxufSx7fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIEFycmF5RmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoQXJyYXlGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBBcnJheUZpbGVSZWFkZXIoYXJyYXkpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXJyYXlGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFycmF5RmlsZVJlYWRlcikuY2FsbCh0aGlzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2FycmF5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3NpemVcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLl9hcnJheSA9IGFycmF5O1xuICAgIF90aGlzLl9zaXplID0gYXJyYXkubGVuZ3RoO1xuICAgIF90aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXJyYXlGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoY2FsbGJhY2tzKSB7XG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJhbmdlKHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICBpZiAob2Zmc2V0ID49IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPZmZzZXQgXCIgKyBvZmZzZXQgKyBcIiBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2FycmF5W29mZnNldF07XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZmlsZSkgfHwgdHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBCdWZmZXIuaXNCdWZmZXIoZmlsZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFycmF5RmlsZVJlYWRlcjtcbn0oTWVkaWFGaWxlUmVhZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheUZpbGVSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENodW5rZWRGaWxlRGF0YSA9IHJlcXVpcmUoJy4vQ2h1bmtlZEZpbGVEYXRhJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQmxvYkZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYUZpbGVSZWFkZXIpIHtcbiAgX2luaGVyaXRzKEJsb2JGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBCbG9iRmlsZVJlYWRlcihibG9iKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJsb2JGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEJsb2JGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfYmxvYlwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9maWxlRGF0YVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX2Jsb2IgPSBibG9iO1xuICAgIF90aGlzLl9maWxlRGF0YSA9IG5ldyBDaHVua2VkRmlsZURhdGEoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQmxvYkZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9pbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KGNhbGxiYWNrcykge1xuICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX2Jsb2Iuc2l6ZTtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyBpc24ndCBhd2FyZSBvZiBtb3pTbGljZSBvciB3ZWJraXRTbGljZVxuXG4gICAgICB2YXIgYmxvYlNsaWNlID0gdGhpcy5fYmxvYi5zbGljZSB8fCB0aGlzLl9ibG9iLm1velNsaWNlIHx8IHRoaXMuX2Jsb2Iud2Via2l0U2xpY2U7XG4gICAgICB2YXIgYmxvYiA9IGJsb2JTbGljZS5jYWxsKHRoaXMuX2Jsb2IsIHJhbmdlWzBdLCByYW5nZVsxXSArIDEpO1xuICAgICAgdmFyIGJyb3dzZXJGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgYnJvd3NlckZpbGVSZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJyb3dzZXJGaWxlUmVhZGVyLnJlc3VsdCk7XG5cbiAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YShyYW5nZVswXSwgaW50QXJyYXkpO1xuXG4gICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgIH07XG5cbiAgICAgIGJyb3dzZXJGaWxlUmVhZGVyLm9uZXJyb3IgPSBicm93c2VyRmlsZVJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2JcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBicm93c2VyRmlsZVJlYWRlci5lcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBicm93c2VyRmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWxlRGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiYgZmlsZSBpbnN0YW5jZW9mIEJsb2IgfHwgLy8gRmlsZSBleHRlbmRzIEJsb2IgYnV0IGl0IHNlZW1zIHRoYXQgRmlsZSBpbnN0YW5jZW9mIEJsb2IgZG9lc24ndFxuICAgICAgLy8gcXVpdGUgd29yayBhcyBleHBlY3RlZCBpbiBDb3Jkb3ZhL1Bob25lR2FwLlxuICAgICAgdHlwZW9mIEZpbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZmlsZSBpbnN0YW5jZW9mIEZpbGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJsb2JGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2JGaWxlUmVhZGVyO1xuXG59LHtcIi4vQ2h1bmtlZEZpbGVEYXRhXCI6NSxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTF9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgZmlsZSB0aGF0IG1pZ2h0IG5vdCBoYXZlIGFsbCBpdHMgZGF0YSBsb2FkZWQgeWV0LlxuICogSXQgaXMgdXNlZCB3aGVuIGxvYWRpbmcgdGhlIGVudGlyZSBmaWxlIGlzIG5vdCBhbiBvcHRpb24gYmVjYXVzZSBpdCdzIHRvb1xuICogZXhwZW5zaXZlLiBJbnN0ZWFkLCBwYXJ0cyBvZiB0aGUgZmlsZSBhcmUgbG9hZGVkIGFuZCBhZGRlZCBvbmx5IHdoZW4gbmVlZGVkLlxuICogRnJvbSBhIHJlYWRpbmcgcG9pbnQgb2YgdmlldyBpcyBhcyBpZiB0aGUgZW50aXJlIGZpbGUgaXMgbG9hZGVkLiBUaGVcbiAqIGV4Y2VwdGlvbiBpcyB3aGVuIHRoZSBkYXRhIGlzIG5vdCBhdmFpbGFibGUgeWV0LCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIFRoaXMgY2xhc3MgZG9lcyBub3QgbG9hZCB0aGUgZGF0YSwgaXQganVzdCBtYW5hZ2VzIGl0LiBJdCBwcm92aWRlcyBvcGVyYXRpb25zXG4gKiB0byBhZGQgYW5kIHJlYWQgZGF0YSBmcm9tIHRoZSBmaWxlLlxuICpcbiAqIFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE5PVF9GT1VORCA9IC0xO1xuXG52YXIgQ2h1bmtlZEZpbGVEYXRhID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKENodW5rZWRGaWxlRGF0YSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiTk9UX0ZPVU5EXCIsXG4gICAgLy8gJEZsb3dJc3N1ZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBDaHVua2VkRmlsZURhdGEoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rZWRGaWxlRGF0YSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZmlsZURhdGFcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2ZpbGVEYXRhID0gW107XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgZGF0YSB0byB0aGUgZmlsZSBzdG9yYWdlIGF0IGEgc3BlY2lmaWMgb2Zmc2V0LlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDaHVua2VkRmlsZURhdGEsIFt7XG4gICAga2V5OiBcImFkZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGF0YShvZmZzZXQsIGRhdGEpIHtcbiAgICAgIHZhciBvZmZzZXRFbmQgPSBvZmZzZXQgKyBkYXRhLmxlbmd0aCAtIDE7XG5cbiAgICAgIHZhciBjaHVua1JhbmdlID0gdGhpcy5fZ2V0Q2h1bmtSYW5nZShvZmZzZXQsIG9mZnNldEVuZCk7XG5cbiAgICAgIGlmIChjaHVua1JhbmdlLnN0YXJ0SXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICB0aGlzLl9maWxlRGF0YS5zcGxpY2UoY2h1bmtSYW5nZS5pbnNlcnRJeCB8fCAwLCAwLCB7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBkYXRhIHRvIGFkZCBjb2xsaWRlcyB3aXRoIGV4aXN0aW5nIGNodW5rcyB3ZSBwcmVwZW5kIGFuZFxuICAgICAgICAvLyBhcHBlbmQgZGF0YSBmcm9tIHRoZSBoYWxmIGNvbGxpZGluZyBjaHVua3MgdG8gbWFrZSB0aGUgY29sbGlzaW9uIGF0XG4gICAgICAgIC8vIDEwMCUuIFRoZSBuZXcgZGF0YSBjYW4gdGhlbiByZXBsYWNlIGFsbCB0aGUgY29sbGlkaW5nIGNodW5rZXMuXG4gICAgICAgIHZhciBmaXJzdENodW5rID0gdGhpcy5fZmlsZURhdGFbY2h1bmtSYW5nZS5zdGFydEl4XTtcbiAgICAgICAgdmFyIGxhc3RDaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2NodW5rUmFuZ2UuZW5kSXhdO1xuICAgICAgICB2YXIgbmVlZHNQcmVwZW5kID0gb2Zmc2V0ID4gZmlyc3RDaHVuay5vZmZzZXQ7XG4gICAgICAgIHZhciBuZWVkc0FwcGVuZCA9IG9mZnNldEVuZCA8IGxhc3RDaHVuay5vZmZzZXQgKyBsYXN0Q2h1bmsuZGF0YS5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgY2h1bmsgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBNYXRoLm1pbihvZmZzZXQsIGZpcnN0Q2h1bmsub2Zmc2V0KSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5lZWRzUHJlcGVuZCkge1xuICAgICAgICAgIHZhciBzbGljZWREYXRhID0gdGhpcy5fc2xpY2VEYXRhKGZpcnN0Q2h1bmsuZGF0YSwgMCwgb2Zmc2V0IC0gZmlyc3RDaHVuay5vZmZzZXQpO1xuXG4gICAgICAgICAgY2h1bmsuZGF0YSA9IHRoaXMuX2NvbmNhdERhdGEoc2xpY2VkRGF0YSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVlZHNBcHBlbmQpIHtcbiAgICAgICAgICAvLyBVc2UgdGhlIGxhc3RDaHVuayBiZWNhdXNlIHRoZSBzbGljZSBsb2dpYyBpcyBlYXNpZXIgdG8gaGFuZGxlLlxuICAgICAgICAgIHZhciBzbGljZWREYXRhID0gdGhpcy5fc2xpY2VEYXRhKGNodW5rLmRhdGEsIDAsIGxhc3RDaHVuay5vZmZzZXQgLSBjaHVuay5vZmZzZXQpO1xuXG4gICAgICAgICAgY2h1bmsuZGF0YSA9IHRoaXMuX2NvbmNhdERhdGEoc2xpY2VkRGF0YSwgbGFzdENodW5rLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsZURhdGEuc3BsaWNlKGNodW5rUmFuZ2Uuc3RhcnRJeCwgY2h1bmtSYW5nZS5lbmRJeCAtIGNodW5rUmFuZ2Uuc3RhcnRJeCArIDEsIGNodW5rKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NvbmNhdERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbmNhdERhdGEoZGF0YUEsIGRhdGFCKSB7XG4gICAgICAvLyBUeXBlZEFycmF5cyBkb24ndCBzdXBwb3J0IGNvbmNhdC5cbiAgICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3ICYmIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhQSkpIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGFBYW5kQiBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcbiAgICAgICAgdmFyIGRhdGFBYW5kQiA9IG5ldyBkYXRhQS5jb25zdHJ1Y3RvcihkYXRhQS5sZW5ndGggKyBkYXRhQi5sZW5ndGgpOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuXG4gICAgICAgIGRhdGFBYW5kQi5zZXQoZGF0YUEsIDApOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuXG4gICAgICAgIGRhdGFBYW5kQi5zZXQoZGF0YUIsIGRhdGFBLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBkYXRhQWFuZEI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgVHlwZWRBcnJheSBidXQgaXQncyBub3RcbiAgICAgICAgcmV0dXJuIGRhdGFBLmNvbmNhdChkYXRhQik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zbGljZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NsaWNlRGF0YShkYXRhLCBiZWdpbiwgZW5kKSB7XG4gICAgICAvLyBTb21lIFR5cGVBcnJheSBpbXBsZW1lbnRhdGlvbnMgZG8gbm90IHN1cHBvcnQgc2xpY2UgeWV0LlxuICAgICAgaWYgKGRhdGEuc2xpY2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YSBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcbiAgICAgICAgcmV0dXJuIGRhdGEuc3ViYXJyYXkoYmVnaW4sIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBjaHVuayByYW5nZSB0aGF0IG92ZXJsYXBzIHRoZSBbb2Zmc2V0U3RhcnQtMSxvZmZzZXRFbmQrMV0gcmFuZ2UuXG4gICAgICogV2hlbiBhIGNodW5rIGlzIGFkamFjZW50IHRvIHRoZSBvZmZzZXQgd2Ugc3RpbGwgY29uc2lkZXIgaXQgcGFydCBvZiB0aGVcbiAgICAgKiByYW5nZSAodGhpcyBpcyB0aGUgc2l0dWF0aW9uIG9mIG9mZnNldFN0YXJ0LTEgb3Igb2Zmc2V0RW5kKzEpLlxuICAgICAqIFdoZW4gbm8gY2h1bmtzIGFyZSBmb3VuZCBgaW5zZXJ0SXhgIGRlbm90ZXMgdGhlIGluZGV4IHdoZXJlIHRoZSBkYXRhXG4gICAgICogc2hvdWxkIGJlIGluc2VydGVkIGluIHRoZSBkYXRhIGxpc3QgKHN0YXJ0SXggPT0gTk9UX0ZPVU5EIGFuZCBlbmRJWCA9PVxuICAgICAqIE5PVF9GT1VORCkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0Q2h1bmtSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2h1bmtSYW5nZShvZmZzZXRTdGFydCwgb2Zmc2V0RW5kKSB7XG4gICAgICB2YXIgc3RhcnRDaHVua0l4ID0gTk9UX0ZPVU5EO1xuICAgICAgdmFyIGVuZENodW5rSXggPSBOT1RfRk9VTkQ7XG4gICAgICB2YXIgaW5zZXJ0SXggPSAwOyAvLyBDb3VsZCB1c2UgYmluYXJ5IHNlYXJjaCBidXQgbm90IGV4cGVjdGluZyB0aGF0IG1hbnkgYmxvY2tzIHRvIGV4aXN0LlxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrLCBpbnNlcnRJeCA9IGkpIHtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0U3RhcnQgPSB0aGlzLl9maWxlRGF0YVtpXS5vZmZzZXQ7XG4gICAgICAgIHZhciBjaHVua09mZnNldEVuZCA9IGNodW5rT2Zmc2V0U3RhcnQgKyB0aGlzLl9maWxlRGF0YVtpXS5kYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAob2Zmc2V0RW5kIDwgY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICAvLyBUaGlzIG9mZnNldCByYW5nZSBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgY2h1bmtzLlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIElmIGl0IGlzIGFkamFjZW50IHdlIHN0aWxsIGNvbnNpZGVyIGl0IHBhcnQgb2YgdGhlIHJhbmdlIGJlY2F1c2VcbiAgICAgICAgLy8gd2UncmUgZ29pbmcgZW5kIHVwIHdpdGggYSBzaW5nbGUgYmxvY2sgd2l0aCBhbGwgY29udGlndW91cyBkYXRhLlxuXG5cbiAgICAgICAgaWYgKG9mZnNldFN0YXJ0IDw9IGNodW5rT2Zmc2V0RW5kICsgMSAmJiBvZmZzZXRFbmQgPj0gY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICBzdGFydENodW5rSXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IC8vIE5vIHN0YXJ0aW5nIGNodW5rIHdhcyBmb3VuZCwgbWVhbmluZyB0aGF0IHRoZSBvZmZzZXQgaXMgZWl0aGVyIGJlZm9yZVxuICAgICAgLy8gb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RvcmVkIGNodW5rcy5cblxuXG4gICAgICBpZiAoc3RhcnRDaHVua0l4ID09PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGFydEl4OiBOT1RfRk9VTkQsXG4gICAgICAgICAgZW5kSXg6IE5PVF9GT1VORCxcbiAgICAgICAgICBpbnNlcnRJeDogaW5zZXJ0SXhcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gRmluZCB0aGUgZW5kaW5nIGNodW5rLlxuXG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydENodW5rSXg7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0RW5kID0gY2h1bmtPZmZzZXRTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPj0gY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICAvLyBDYW5kaWRhdGUgZm9yIHRoZSBlbmQgY2h1bmssIGl0IGRvZXNuJ3QgbWVhbiBpdCBpcyB5ZXQuXG4gICAgICAgICAgZW5kQ2h1bmtJeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0RW5kIDw9IGNodW5rT2Zmc2V0RW5kICsgMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRDaHVua0l4ID09PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgZW5kQ2h1bmtJeCA9IHN0YXJ0Q2h1bmtJeDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnRJeDogc3RhcnRDaHVua0l4LFxuICAgICAgICBlbmRJeDogZW5kQ2h1bmtJeFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzRGF0YVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RhdGFSYW5nZShvZmZzZXRTdGFydCwgb2Zmc2V0RW5kKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2ldO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPCBjaHVuay5vZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0U3RhcnQgPj0gY2h1bmsub2Zmc2V0ICYmIG9mZnNldEVuZCA8IGNodW5rLm9mZnNldCArIGNodW5rLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgdmFyIGRhdGFDaHVuaztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGF0YUNodW5rU3RhcnQgPSB0aGlzLl9maWxlRGF0YVtpXS5vZmZzZXQ7XG4gICAgICAgIHZhciBkYXRhQ2h1bmtFbmQgPSBkYXRhQ2h1bmtTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAob2Zmc2V0ID49IGRhdGFDaHVua1N0YXJ0ICYmIG9mZnNldCA8PSBkYXRhQ2h1bmtFbmQpIHtcbiAgICAgICAgICBkYXRhQ2h1bmsgPSB0aGlzLl9maWxlRGF0YVtpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YUNodW5rKSB7XG4gICAgICAgIHJldHVybiBkYXRhQ2h1bmsuZGF0YVtvZmZzZXQgLSBkYXRhQ2h1bmsub2Zmc2V0XTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2Zmc2V0IFwiICsgb2Zmc2V0ICsgXCIgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENodW5rZWRGaWxlRGF0YTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaHVua2VkRmlsZURhdGE7XG5cbn0se31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG4vKiBUaGUgZmlyc3QgNCBieXRlcyBvZiBhIEZMQUMgZmlsZSBkZXNjcmliZXMgdGhlIGhlYWRlciBmb3IgdGhlIGZpbGUuIElmIHRoZXNlXG4gKiBieXRlcyByZXNwZWN0aXZlbHkgcmVhZCBcImZMYUNcIiwgd2UgY2FuIGRldGVybWluZSBpdCBpcyBhIEZMQUMgZmlsZS5cbiAqL1xuXG5cbnZhciBGTEFDX0hFQURFUl9TSVpFID0gNDtcbi8qIEZMQUMgbWV0YWRhdGEgaXMgc3RvcmVkIGluIGJsb2NrcyBjb250YWluaW5nIGRhdGEgcmFuZ2luZyBmcm9tIFNUUkVBTUlORk8gdG9cbiAqIFZPUkJJU19DT01NRU5ULCB3aGljaCBpcyB3aGF0IHdlIHdhbnQgdG8gd29yayB3aXRoLlxuICpcbiAqIEVhY2ggbWV0YWRhdGEgaGVhZGVyIGlzIDQgYnl0ZXMgbG9uZywgd2l0aCB0aGUgZmlyc3QgYnl0ZSBkZXRlcm1pbmluZyB3aGV0aGVyXG4gKiBpdCBpcyB0aGUgbGFzdCBtZXRhZGF0YSBibG9jayBiZWZvcmUgdGhlIGF1ZGlvIGRhdGEgYW5kIHdoYXQgdGhlIGJsb2NrIHR5cGUgaXMuXG4gKiBUaGlzIGZpcnN0IGJ5dGUgY2FuIGZ1cnRoZXIgYmUgc3BsaXQgaW50byA4IGJpdHMsIHdpdGggdGhlIGZpcnN0IGJpdCBiZWluZyB0aGVcbiAqIGxhc3QtbWV0YWRhdGEtYmxvY2sgZmxhZywgYW5kIHRoZSBsYXN0IHRocmVlIGJpdHMgYmVpbmcgdGhlIGJsb2NrIHR5cGUuXG4gKlxuICogU2luY2UgdGhlIHNwZWNpZmljYXRpb24gc3RhdGVzIHRoYXQgdGhlIGRlY2ltYWwgdmFsdWUgZm9yIGEgVk9SQklTX0NPTU1FTlQgYmxvY2tcbiAqIHR5cGUgaXMgNCwgdGhlIHR3byBwb3NzaWJpbGl0aWVzIGZvciB0aGUgY29tbWVudCBibG9jayBoZWFkZXIgdmFsdWVzIGFyZTpcbiAqIC0gMDAwMDAxMDAgKE5vdCBhIGxhc3QgbWV0YWRhdGEgY29tbWVudCBibG9jaywgdmFsdWUgb2YgNClcbiAqIC0gMTAwMDAxMDAgKEEgbGFzdCBtZXRhZGF0YSBjb21tZW50IGJsb2NrLCB2YWx1ZSBvZiAxMzIpXG4gKlxuICogU2ltaWxhcmx5LCB0aGUgcGljdHVyZSBibG9jayBoZWFkZXIgdmFsdWVzIGFyZSA2IGFuZCAxMjguXG4gKlxuICogQWxsIHZhbHVlcyBmb3IgTUVUQURBVEFfQkxPQ0tfSEVBREVSIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogaHR0cHM6Ly94aXBoLm9yZy9mbGFjL2Zvcm1hdC5odG1sI21ldGFkYXRhX2Jsb2NrX2hlYWRlclxuICovXG5cbnZhciBDT01NRU5UX0hFQURFUlMgPSBbNCwgMTMyXTtcbnZhciBQSUNUVVJFX0hFQURFUlMgPSBbNiwgMTM0XTsgLy8gVGhlc2UgYXJlIHRoZSBwb3NzaWJsZSBpbWFnZSB0eXBlcyBhcyBkZWZpbmVkIGJ5IHRoZSBGTEFDIHNwZWNpZmljYXRpb24uXG5cbnZhciBJTUFHRV9UWVBFUyA9IFtcIk90aGVyXCIsIFwiMzJ4MzIgcGl4ZWxzICdmaWxlIGljb24nIChQTkcgb25seSlcIiwgXCJPdGhlciBmaWxlIGljb25cIiwgXCJDb3ZlciAoZnJvbnQpXCIsIFwiQ292ZXIgKGJhY2spXCIsIFwiTGVhZmxldCBwYWdlXCIsIFwiTWVkaWEgKGUuZy4gbGFiZWwgc2lkZSBvZiBDRClcIiwgXCJMZWFkIGFydGlzdC9sZWFkIHBlcmZvcm1lci9zb2xvaXN0XCIsIFwiQXJ0aXN0L3BlcmZvcm1lclwiLCBcIkNvbmR1Y3RvclwiLCBcIkJhbmQvT3JjaGVzdHJhXCIsIFwiQ29tcG9zZXJcIiwgXCJMeXJpY2lzdC90ZXh0IHdyaXRlclwiLCBcIlJlY29yZGluZyBMb2NhdGlvblwiLCBcIkR1cmluZyByZWNvcmRpbmdcIiwgXCJEdXJpbmcgcGVyZm9ybWFuY2VcIiwgXCJNb3ZpZS92aWRlbyBzY3JlZW4gY2FwdHVyZVwiLCBcIkEgYnJpZ2h0IGNvbG91cmVkIGZpc2hcIiwgXCJJbGx1c3RyYXRpb25cIiwgXCJCYW5kL2FydGlzdCBsb2dvdHlwZVwiLCBcIlB1Ymxpc2hlci9TdHVkaW8gbG9nb3R5cGVcIl07XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgTWVkaWFUYWdSZWFkZXIgdGhhdCBwYXJzZXMgRkxBQyB0YWdzLlxuICovXG52YXIgRkxBQ1RhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhGTEFDVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEZMQUNUYWdSZWFkZXIoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRkxBQ1RhZ1JlYWRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihGTEFDVGFnUmVhZGVyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2NvbW1lbnRPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcGljdHVyZU9mZnNldFwiLCB2b2lkIDApO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZMQUNUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGxvYWQgdGhlIGRhdGEgZnJvbSB0aGUgZmlsZS5cbiAgICAgKlxuICAgICAqIFRvIGJlZ2luIHByb2Nlc3NpbmcgdGhlIGJsb2NrcywgdGhlIG5leHQgNCBieXRlcyBhZnRlciB0aGUgaW5pdGlhbCA0IGJ5dGVzXG4gICAgICogKGJ5dGVzIDQgdGhyb3VnaCA3KSBhcmUgbG9hZGVkLiBGcm9tIHRoZXJlLCB0aGUgcmVzdCBvZiB0aGUgbG9hZGluZyBwcm9jZXNzXG4gICAgICogaXMgcGFzc2VkIG9uIHRvIHRoZSBfbG9hZEJsb2NrIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGhhbmRsZSB0aGUgcmVzdCBvZiB0aGVcbiAgICAgKiBwYXJzaW5nIGZvciB0aGUgbWV0YWRhdGEgYmxvY2tzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IG1lZGlhRmlsZVJlYWRlciAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdXNlZCB0byBwYXJzZSB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge0xvYWRDYWxsYmFja1R5cGV9IGNhbGxiYWNrcyAtIFRoZSBjYWxsYmFjayB0byBjYWxsIG9uY2UgX2xvYWREYXRhIGlzIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFs0LCA3XSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCA0LCBjYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3BlY2lhbCBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIHRvIHBhcnNlIHRoZSBkaWZmZXJlbnQgRkxBQyBibG9ja3MuXG4gICAgICpcbiAgICAgKiBUaGUgRkxBQyBzcGVjaWZpY2F0aW9uIGRvZXNuJ3Qgc3BlY2lmeSBhIHNwZWNpZmljIGxvY2F0aW9uIGZvciBtZXRhZGF0YSB0byByZXNpZ24sIGJ1dFxuICAgICAqIGRpY3RhdGVzIHRoYXQgaXQgbWF5IGJlIGluIG9uZSBvZiB2YXJpb3VzIGJsb2NrcyBsb2NhdGVkIHRocm91Z2hvdXQgdGhlIGZpbGUuIFRvIGxvYWQgdGhlXG4gICAgICogbWV0YWRhdGEsIHdlIG11c3QgbG9jYXRlIHRoZSBoZWFkZXIgZmlyc3QuIFRoaXMgY2FuIGJlIGRvbmUgYnkgcmVhZGluZyB0aGUgZmlyc3QgYnl0ZSBvZlxuICAgICAqIGVhY2ggYmxvY2sgdG8gZGV0ZXJtaW5lIHRoZSBibG9jayB0eXBlLiBBZnRlciB0aGUgYmxvY2sgdHlwZSBjb21lcyBhIDI0IGJpdCBpbnRlZ2VyIHRoYXQgc3RvcmVzXG4gICAgICogdGhlIGxlbmd0aCBvZiB0aGUgYmxvY2sgYXMgYmlnIGVuZGlhbi4gVXNpbmcgdGhpcywgd2UgbG9jYXRlIHRoZSBibG9jayBhbmQgc3RvcmUgdGhlIG9mZnNldCBmb3JcbiAgICAgKiBwYXJzaW5nIGxhdGVyLlxuICAgICAqXG4gICAgICogQWZ0ZXIgZWFjaCBibG9jayBoYXMgYmVlbiBwYXJzZWQsIHRoZSBfbmV4dEJsb2NrIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBvcmRlclxuICAgICAqIHRvIHBhcnNlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgbmV4dCBibG9jay4gQWxsIGJsb2NrcyBuZWVkIHRvIGJlIHBhcnNlZCBpbiBvcmRlciB0byBmaW5kXG4gICAgICogYWxsIG9mIHRoZSBwaWN0dXJlIGFuZCBjb21tZW50IGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIE1vcmUgaW5mbyBvbiB0aGUgRkxBQyBzcGVjaWZpY2F0aW9uIG1heSBiZSBmb3VuZCBoZXJlOlxuICAgICAqIGh0dHBzOi8veGlwaC5vcmcvZmxhYy9mb3JtYXQuaHRtbFxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBtZWRpYUZpbGVSZWFkZXIgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHVzZWQgdG8gcGFyc2UgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgdG8gc3RhcnQgY2hlY2tpbmcgdGhlIGhlYWRlciBmcm9tLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgb25jZSB0aGUgaGVhZGVyIGhhcyBiZWVuIGZvdW5kLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIC8qIEFzIG1lbnRpb25lZCBhYm92ZSwgdGhpcyBmaXJzdCBieXRlIGlzIGxvYWRlZCB0byBzZWUgd2hhdCBtZXRhZGF0YSB0eXBlXG4gICAgICAgKiB0aGlzIGJsb2NrIHJlcHJlc2VudHMuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGJsb2NrSGVhZGVyID0gbWVkaWFGaWxlUmVhZGVyLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgLyogVGhlIGxhc3QgdGhyZWUgYnl0ZXMgKGludGVnZXIgMjQpIGNvbnRhaW4gYSB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIGxlbmd0aFxuICAgICAgICogb2YgdGhlIGZvbGxvd2luZyBtZXRhZGF0YSBibG9jay4gVGhlIDEgaXMgYWRkZWQgaW4gb3JkZXIgdG8gc2hpZnQgdGhlIG9mZnNldFxuICAgICAgICogYnkgb25lIHRvIGdldCB0aGUgbGFzdCB0aHJlZSBieXRlcyBpbiB0aGUgYmxvY2sgaGVhZGVyLlxuICAgICAgICovXG5cbiAgICAgIHZhciBibG9ja1NpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgMSwgdHJ1ZSk7XG4gICAgICAvKiBUaGlzIGNvbmRpdGlvbmFsIGNoZWNrcyBpZiBibG9ja0hlYWRlciAodGhlIGJ5dGUgcmV0cmlldmVkIHJlcHJlc2VudGluZyB0aGVcbiAgICAgICAqIHR5cGUgb2YgdGhlIGhlYWRlcikgaXMgb25lIHRoZSBoZWFkZXJzIHdlIGFyZSBsb29raW5nIGZvci5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGF0IGlzIG5vdCB0cnVlLCB0aGUgYmxvY2sgaXMgc2tpcHBlZCBvdmVyIGFuZCB0aGUgbmV4dCByYW5nZSBpcyBsb2FkZWQ6XG4gICAgICAgKiAtIG9mZnNldCArIDQgKyBibG9ja1NpemUgYWRkcyA0IHRvIHNraXAgb3ZlciB0aGUgaW5pdGlhbCBtZXRhZGF0YSBoZWFkZXIgYW5kXG4gICAgICAgKiBibG9ja1NpemUgdG8gc2tpcCBvdmVyIHRoZSBibG9jayBvdmVyYWxsLCBwbGFjaW5nIGl0IGF0IHRoZSBoZWFkIG9mIHRoZSBuZXh0XG4gICAgICAgKiBtZXRhZGF0YSBoZWFkZXIuXG4gICAgICAgKiAtIG9mZnNldCArIDQgKyA0ICsgYmxvY2tTaXplIGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIHByZXZpb3VzIGJsb2NrIHdpdGhcbiAgICAgICAqIHRoZSBleGNlcHRpb24gb2YgYWRkaW5nIGFub3RoZXIgNCBieXRlcyB0byBtb3ZlIGl0IHRvIHRoZSBlbmQgb2YgdGhlIG5ldyBtZXRhZGF0YVxuICAgICAgICogaGVhZGVyLlxuICAgICAgICovXG5cbiAgICAgIGlmIChDT01NRU5UX0hFQURFUlMuaW5kZXhPZihibG9ja0hlYWRlcikgIT09IC0xKSB7XG4gICAgICAgIC8qIDQgaXMgYWRkZWQgdG8gb2Zmc2V0IHRvIG1vdmUgaXQgdG8gdGhlIGhlYWQgb2YgdGhlIGFjdHVhbCBtZXRhZGF0YS5cbiAgICAgICAgICogVGhlIHJhbmdlIHN0YXJ0aW5nIGZyb20gb2Zmc2V0TWF0YWRhdGEgKHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJsb2NrKVxuICAgICAgICAgKiBhbmQgb2Zmc2V0TWV0YWRhdGEgKyBibG9ja1NpemUgKHRoZSBlbmQgb2YgdGhlIGJsb2NrKSBpcyBsb2FkZWQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgb2Zmc2V0TWV0YWRhdGEgPSBvZmZzZXQgKyA0O1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXRNZXRhZGF0YSwgb2Zmc2V0TWV0YWRhdGEgKyBibG9ja1NpemVdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb21tZW50T2Zmc2V0ID0gb2Zmc2V0TWV0YWRhdGE7XG5cbiAgICAgICAgICAgIHNlbGYuX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChQSUNUVVJFX0hFQURFUlMuaW5kZXhPZihibG9ja0hlYWRlcikgIT09IC0xKSB7XG4gICAgICAgIHZhciBvZmZzZXRNZXRhZGF0YSA9IG9mZnNldCArIDQ7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldE1ldGFkYXRhLCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX3BpY3R1cmVPZmZzZXQgPSBvZmZzZXRNZXRhZGF0YTtcblxuICAgICAgICAgICAgc2VsZi5fbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gbG9hZCB0aGUgbmV4dCByYW5nZSBhbmQgcmVzcGVjdGl2ZSBibG9jay5cbiAgICAgKlxuICAgICAqIElmIHRoZSBtZXRhZGF0YSBibG9jayB0aGF0IHdhcyBpZGVudGlmaWVkIGlzIG5vdCB0aGUgbGFzdCBibG9jayBiZWZvcmUgdGhlXG4gICAgICogYXVkaW8gYmxvY2tzLCB0aGUgZnVuY3Rpb24gd2lsbCBjb250aW51ZSBsb2FkaW5nIHRoZSBuZXh0IGJsb2Nrcy4gSWYgaXQgaXNcbiAgICAgKiB0aGUgbGFzdCBibG9jayAoaWRlbnRpZmllZCBieSBhbnkgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxMjcsIHNlZSBGTEFDIHNwZWMuKSxcbiAgICAgKiB0aGUgZnVuY3Rpb24gd2lsbCBkZXRlcm1pbmUgd2hldGhlciBhIGNvbW1lbnQgYmxvY2sgaGFkIGJlZW4gaWRlbnRpZmllZC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBibG9jayBkb2VzIG5vdCBleGlzdCwgdGhlIGVycm9yIGNhbGxiYWNrIGlzIGNhbGxlZC4gT3RoZXJ3aXNlLCB0aGUgZnVuY3Rpb25cbiAgICAgKiB3aWxsIGNhbGwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2ssIGFsbG93aW5nIGRhdGEgcGFyc2luZyB0byBiZWdpbi5cbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gbWVkaWFGaWxlUmVhZGVyIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB1c2VkIHRvIHBhcnNlIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IHRoYXQgdGhlIGV4aXN0aW5nIGhlYWRlciB3YXMgbG9jYXRlZCBhdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tIZWFkZXIgLSBBbiBpbnRlZ2VyIHJlZmxlY3RpbmcgdGhlIGhlYWRlciB0eXBlIG9mIHRoZSBibG9jay5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIC0gVGhlIHNpemUgb2YgdGhlIHByZXZpb3VzbHkgcHJvY2Vzc2VkIGhlYWRlci5cbiAgICAgKiBAcGFyYW0ge0xvYWRDYWxsYmFja1R5cGV9IGNhbGxiYWNrcyAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX25leHRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKGJsb2NrSGVhZGVyID4gMTI3KSB7XG4gICAgICAgIGlmICghc2VsZi5fY29tbWVudE9mZnNldCkge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImxvYWREYXRhXCIsXG4gICAgICAgICAgICBcImluZm9cIjogXCJDb21tZW50IGJsb2NrIGNvdWxkIG5vdCBiZSBmb3VuZC5cIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgNCArIGJsb2NrU2l6ZSwgb2Zmc2V0ICsgNCArIDQgKyBibG9ja1NpemVdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyA0ICsgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZGF0YSBhbmQgcmV0dXJucyB0aGUgdGFncy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gb3ZlcnZpZXcgb2YgdGhlIFZvcmJpc0NvbW1lbnQgZm9ybWF0IGFuZCB3aGF0IHRoaXMgZnVuY3Rpb24gYXR0ZW1wdHMgdG9cbiAgICAgKiByZXRyaWV2ZTpcbiAgICAgKiAtIEZpcnN0IDQgYnl0ZXM6IGEgbG9uZyB0aGF0IGNvbnRhaW5zIHRoZSBsZW5ndGggb2YgdGhlIHZlbmRvciBzdHJpbmcuXG4gICAgICogLSBOZXh0IG4gYnl0ZXM6IHRoZSB2ZW5kb3Igc3RyaW5nIGVuY29kZWQgaW4gVVRGLTguXG4gICAgICogLSBOZXh0IDQgYnl0ZXM6IGEgbG9uZyByZXByZXNlbnRpbmcgaG93IG1hbnkgY29tbWVudHMgYXJlIGluIHRoaXMgYmxvY2tcbiAgICAgKiBGb3IgZWFjaCBjb21tZW50IHRoYXQgZXhpc3RzOlxuICAgICAqIC0gRmlyc3QgNCBieXRlczogYSBsb25nIHJlcHJlc2VudGluZyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tZW50XG4gICAgICogLSBOZXh0IG4gYnl0ZXM6IHRoZSBjb21tZW50IGVuY29kZWQgaW4gVVRGLTguXG4gICAgICogVGhlIGNvbW1lbnQgc3RyaW5nIHdpbGwgdXN1YWxseSBhcHBlYXIgaW4gYSBmb3JtYXQgc2ltaWxhciB0bzpcbiAgICAgKiBBUlRJU1Q9bWVcbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgbG9uZ3MgYW5kIGludGVnZXJzIGluIHRoaXMgYmxvY2sgYXJlIGVuY29kZWQgaW4gbGl0dGxlIGVuZGlhblxuICAgICAqIGFzIG9wcG9zZWQgdG8gYmlnIGVuZGlhbiBmb3IgdGhlIHJlc3Qgb2YgdGhlIEZMQUMgc3BlYy5cbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gZGF0YSAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdG8gcGFyc2UgdGhlIGZpbGUgd2l0aC5cbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IFt0YWdzXSAtIE9wdGlvbmFsIHRhZ3MgdG8gYWxzbyBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgZmlsZS5cbiAgICAgKiBAcmV0dXJuIHtUYWdUeXBlfSAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0YWcgaW5mb3JtYXRpb24gZm9yIHRoZSBmaWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3MpIHtcbiAgICAgIHZhciB2ZW5kb3JMZW5ndGggPSBkYXRhLmdldExvbmdBdCh0aGlzLl9jb21tZW50T2Zmc2V0LCBmYWxzZSk7XG4gICAgICB2YXIgb2Zmc2V0VmVuZG9yID0gdGhpcy5fY29tbWVudE9mZnNldCArIDQ7XG4gICAgICAvKiBUaGlzIGxpbmUgaXMgYWJsZSB0byByZXRyaWV2ZSB0aGUgdmVuZG9yIHN0cmluZyB0aGF0IHRoZSBWb3JiaXNDb21tZW50IGJsb2NrXG4gICAgICAgKiBjb250YWlucy4gSG93ZXZlciwgaXQgaXMgbm90IHBhcnQgb2YgdGhlIHRhZ3MgdGhhdCBKU01lZGlhVGFncyBub3JtYWxseSByZXRyaWV2ZXMsXG4gICAgICAgKiBhbmQgaXMgdGhlcmVmb3JlIGNvbW1lbnRlZCBvdXQuXG4gICAgICAgKi9cbiAgICAgIC8vIHZhciB2ZW5kb3IgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0VmVuZG9yLCB2ZW5kb3JMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcblxuICAgICAgdmFyIG9mZnNldExpc3QgPSB2ZW5kb3JMZW5ndGggKyBvZmZzZXRWZW5kb3I7XG4gICAgICAvKiBUbyBnZXQgdGhlIG1ldGFkYXRhIGZyb20gdGhlIGJsb2NrLCB3ZSBmaXJzdCBnZXQgdGhlIGxvbmcgdGhhdCBjb250YWlucyB0aGVcbiAgICAgICAqIG51bWJlciBvZiBhY3R1YWwgY29tbWVudCB2YWx1ZXMgdGhhdCBhcmUgZXhpc3RlbnQgd2l0aGluIHRoZSBibG9jay5cbiAgICAgICAqXG4gICAgICAgKiBBcyB3ZSBsb29wIHRocm91Z2ggYWxsIG9mIHRoZSBjb21tZW50IGJsb2Nrcywgd2UgZ2V0IHRoZSBkYXRhIGxlbmd0aCBpbiBvcmRlciB0b1xuICAgICAgICogZ2V0IHRoZSByaWdodCBzaXplIHN0cmluZywgYW5kIHRoZW4gZGV0ZXJtaW5lIHdoaWNoIGNhdGVnb3J5IHRoYXQgc3RyaW5nIGZhbGxzIHVuZGVyLlxuICAgICAgICogVGhlIGRhdGFPZmZzZXQgdmFyaWFibGUgaXMgY29uc3RhbnRseSB1cGRhdGVkIHNvIHRoYXQgaXQgaXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGVcbiAgICAgICAqIGNvbW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgcGFyc2VkLlxuICAgICAgICpcbiAgICAgICAqIEFkZGl0aW9ucyBvZiA0IGhlcmUgYXJlIHVzZWQgdG8gbW92ZSB0aGUgb2Zmc2V0IHBhc3QgdGhlIGZpcnN0IDQgYnl0ZXMgd2hpY2ggb25seSBjb250YWluXG4gICAgICAgKiB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tZW50LlxuICAgICAgICovXG5cbiAgICAgIHZhciBudW1Db21tZW50cyA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldExpc3QsIGZhbHNlKTtcbiAgICAgIHZhciBkYXRhT2Zmc2V0ID0gb2Zmc2V0TGlzdCArIDQ7XG4gICAgICB2YXIgdGl0bGUsIGFydGlzdCwgYWxidW0sIHRyYWNrLCBnZW5yZSwgcGljdHVyZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db21tZW50czsgaSsrKSB7XG4gICAgICAgIHZhciBfZGF0YUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KGRhdGFPZmZzZXQsIGZhbHNlKTtcblxuICAgICAgICB2YXIgcyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChkYXRhT2Zmc2V0ICsgNCwgX2RhdGFMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIGQgPSBzLmluZGV4T2YoXCI9XCIpO1xuICAgICAgICB2YXIgc3BsaXQgPSBbcy5zbGljZSgwLCBkKSwgcy5zbGljZShkICsgMSldO1xuXG4gICAgICAgIHN3aXRjaCAoc3BsaXRbMF0pIHtcbiAgICAgICAgICBjYXNlIFwiVElUTEVcIjpcbiAgICAgICAgICAgIHRpdGxlID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJBUlRJU1RcIjpcbiAgICAgICAgICAgIGFydGlzdCA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiQUxCVU1cIjpcbiAgICAgICAgICAgIGFsYnVtID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJUUkFDS05VTUJFUlwiOlxuICAgICAgICAgICAgdHJhY2sgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkdFTlJFXCI6XG4gICAgICAgICAgICBnZW5yZSA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhT2Zmc2V0ICs9IDQgKyBfZGF0YUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8qIElmIGEgcGljdHVyZSBvZmZzZXQgd2FzIGZvdW5kIGFuZCBhc3NpZ25lZCwgdGhlbiB0aGUgcmVhZGVyIHdpbGwgc3RhcnQgcHJvY2Vzc2luZ1xuICAgICAgICogdGhlIHBpY3R1cmUgYmxvY2sgZnJvbSB0aGF0IHBvaW50LlxuICAgICAgICpcbiAgICAgICAqIEFsbCB0aGUgbGVuZ3RocyBmb3IgdGhlIHBpY3R1cmUgZGF0YSBjYW4gYmUgZm91bmQgb25saW5lIGhlcmU6XG4gICAgICAgKiBodHRwczovL3hpcGgub3JnL2ZsYWMvZm9ybWF0Lmh0bWwjbWV0YWRhdGFfYmxvY2tfcGljdHVyZVxuICAgICAgICovXG5cblxuICAgICAgaWYgKHRoaXMuX3BpY3R1cmVPZmZzZXQpIHtcbiAgICAgICAgdmFyIGltYWdlVHlwZSA9IGRhdGEuZ2V0TG9uZ0F0KHRoaXMuX3BpY3R1cmVPZmZzZXQsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0TWltZUxlbmd0aCA9IHRoaXMuX3BpY3R1cmVPZmZzZXQgKyA0O1xuICAgICAgICB2YXIgbWltZUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldE1pbWVMZW5ndGgsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0TWltZSA9IG9mZnNldE1pbWVMZW5ndGggKyA0O1xuICAgICAgICB2YXIgbWltZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0TWltZSwgbWltZUxlbmd0aCk7XG4gICAgICAgIHZhciBvZmZzZXREZXNjcmlwdGlvbkxlbmd0aCA9IG9mZnNldE1pbWUgKyBtaW1lTGVuZ3RoO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb25MZW5ndGggPSBkYXRhLmdldExvbmdBdChvZmZzZXREZXNjcmlwdGlvbkxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXREZXNjcmlwdGlvbiA9IG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoICsgNDtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldERlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuICAgICAgICB2YXIgb2Zmc2V0RGF0YUxlbmd0aCA9IG9mZnNldERlc2NyaXB0aW9uICsgZGVzY3JpcHRpb25MZW5ndGggKyAxNjtcbiAgICAgICAgdmFyIGRhdGFMZW5ndGggPSBkYXRhLmdldExvbmdBdChvZmZzZXREYXRhTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldERhdGEgPSBvZmZzZXREYXRhTGVuZ3RoICsgNDtcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXREYXRhLCBkYXRhTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgcGljdHVyZSA9IHtcbiAgICAgICAgICBmb3JtYXQ6IG1pbWUsXG4gICAgICAgICAgdHlwZTogSU1BR0VfVFlQRVNbaW1hZ2VUeXBlXSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGF0YTogaW1hZ2VEYXRhXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSB7XG4gICAgICAgIHR5cGU6IFwiRkxBQ1wiLFxuICAgICAgICB2ZXJzaW9uOiBcIjFcIixcbiAgICAgICAgdGFnczoge1xuICAgICAgICAgIFwidGl0bGVcIjogdGl0bGUsXG4gICAgICAgICAgXCJhcnRpc3RcIjogYXJ0aXN0LFxuICAgICAgICAgIFwiYWxidW1cIjogYWxidW0sXG4gICAgICAgICAgXCJ0cmFja1wiOiB0cmFjayxcbiAgICAgICAgICBcImdlbnJlXCI6IGdlbnJlLFxuICAgICAgICAgIFwicGljdHVyZVwiOiBwaWN0dXJlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gdGFnO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJ5dGUgcmFuZ2UgZm9yIHRoZSB0YWcgaWRlbnRpZmllci5cbiAgICAgKlxuICAgICAqIEJlY2F1c2UgdGhlIFZvcmJpcyBjb21tZW50IGJsb2NrIGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGluIGEgc3BlY2lmaWVkXG4gICAgICogbG9jYXRpb24sIHdlIGNhbiBvbmx5IGxvYWQgdGhlIGZpcnN0IDQgYnl0ZXMgb2YgdGhlIGZpbGUgdG8gY29uZmlybSBpdFxuICAgICAqIGlzIGEgRkxBQyBmaXJzdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0J5dGVSYW5nZX0gVGhlIGJ5dGUgcmFuZ2UgdGhhdCBpZGVudGlmaWVzIHRoZSB0YWcgZm9yIGEgRkxBQy5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGVuZ3RoOiBGTEFDX0hFQURFUl9TSVpFXG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoaXMgcmVhZGVyIGNhbiByZWFkIGEgY2VydGFpbiB0YWcgZm9ybWF0LlxuICAgICAqXG4gICAgICogVGhpcyBjaGVja3MgdGhhdCB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIGluIHRoZSBmaWxlIGFyZSBmTGFDLCB3aGljaFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgRkxBQyBmaWxlIHNwZWNpZmljYXRpb24gc2hvdWxkIGJlIHRoZSBjaGFyYWN0ZXJzIHRoYXRcbiAgICAgKiBpbmRpY2F0ZSBhIEZMQUMgZmlsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGhlYWRlciBpcyBmTGFDLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgNCkpO1xuICAgICAgcmV0dXJuIGlkID09PSAnZkxhQyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZMQUNUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGTEFDVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYVRhZ1JlYWRlcicpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIElEM3YxVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKElEM3YxVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIElEM3YxVGFnUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MVRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKElEM3YxVGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MVRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIGZpbGVTaXplID0gbWVkaWFGaWxlUmVhZGVyLmdldFNpemUoKTtcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW2ZpbGVTaXplIC0gMTI4LCBmaWxlU2l6ZSAtIDFdLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIG9mZnNldCA9IGRhdGEuZ2V0U2l6ZSgpIC0gMTI4O1xuICAgICAgdmFyIHRpdGxlID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDMsIDMwKS50b1N0cmluZygpO1xuICAgICAgdmFyIGFydGlzdCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAzMywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgYWxidW0gPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgNjMsIDMwKS50b1N0cmluZygpO1xuICAgICAgdmFyIHllYXIgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgOTMsIDQpLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgdHJhY2tGbGFnID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgOTcgKyAyOCk7XG4gICAgICB2YXIgdHJhY2sgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDI5KTtcblxuICAgICAgaWYgKHRyYWNrRmxhZyA9PSAwICYmIHRyYWNrICE9IDApIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBcIjEuMVwiO1xuICAgICAgICB2YXIgY29tbWVudCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA5NywgMjgpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IFwiMS4wXCI7XG4gICAgICAgIHZhciBjb21tZW50ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDk3LCAzMCkudG9TdHJpbmcoKTtcbiAgICAgICAgdHJhY2sgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2VucmVJZHggPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDMwKTtcblxuICAgICAgaWYgKGdlbnJlSWR4IDwgMjU1KSB7XG4gICAgICAgIHZhciBnZW5yZSA9IEdFTlJFU1tnZW5yZUlkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZ2VucmUgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0ge1xuICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IHZlcnNpb24sXG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgICBcImFydGlzdFwiOiBhcnRpc3QsXG4gICAgICAgICAgXCJhbGJ1bVwiOiBhbGJ1bSxcbiAgICAgICAgICBcInllYXJcIjogeWVhcixcbiAgICAgICAgICBcImNvbW1lbnRcIjogY29tbWVudCxcbiAgICAgICAgICBcImdlbnJlXCI6IGdlbnJlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyBpcyBub3QgaGFwcHkgd2l0aCBhZGRpbmcgcHJvcGVydGllc1xuICAgICAgICB0YWcudGFncy50cmFjayA9IHRyYWNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFnO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIC8vIFRoZSBpZGVudGlmaWVyIGlzIFRBRyBhbmQgaXMgYXQgb2Zmc2V0OiAtMTI4LiBIb3dldmVyLCB0byBhdm9pZCBhXG4gICAgICAvLyBmZXRjaCBmb3IgdGhlIHRhZyBpZGVudGlmaWVyIGFuZCBhbm90aGVyIGZvciB0aGUgZGF0YSwgd2UgbG9hZCB0aGVcbiAgICAgIC8vIGVudGlyZSBkYXRhIHNpbmNlIGl0J3Mgc28gc21hbGwuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IC0xMjgsXG4gICAgICAgIGxlbmd0aDogMTI4XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgMykpO1xuICAgICAgcmV0dXJuIGlkID09PSBcIlRBR1wiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJRDN2MVRhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuXG52YXIgR0VOUkVTID0gW1wiQmx1ZXNcIiwgXCJDbGFzc2ljIFJvY2tcIiwgXCJDb3VudHJ5XCIsIFwiRGFuY2VcIiwgXCJEaXNjb1wiLCBcIkZ1bmtcIiwgXCJHcnVuZ2VcIiwgXCJIaXAtSG9wXCIsIFwiSmF6elwiLCBcIk1ldGFsXCIsIFwiTmV3IEFnZVwiLCBcIk9sZGllc1wiLCBcIk90aGVyXCIsIFwiUG9wXCIsIFwiUiZCXCIsIFwiUmFwXCIsIFwiUmVnZ2FlXCIsIFwiUm9ja1wiLCBcIlRlY2hub1wiLCBcIkluZHVzdHJpYWxcIiwgXCJBbHRlcm5hdGl2ZVwiLCBcIlNrYVwiLCBcIkRlYXRoIE1ldGFsXCIsIFwiUHJhbmtzXCIsIFwiU291bmR0cmFja1wiLCBcIkV1cm8tVGVjaG5vXCIsIFwiQW1iaWVudFwiLCBcIlRyaXAtSG9wXCIsIFwiVm9jYWxcIiwgXCJKYXp6K0Z1bmtcIiwgXCJGdXNpb25cIiwgXCJUcmFuY2VcIiwgXCJDbGFzc2ljYWxcIiwgXCJJbnN0cnVtZW50YWxcIiwgXCJBY2lkXCIsIFwiSG91c2VcIiwgXCJHYW1lXCIsIFwiU291bmQgQ2xpcFwiLCBcIkdvc3BlbFwiLCBcIk5vaXNlXCIsIFwiQWx0ZXJuUm9ja1wiLCBcIkJhc3NcIiwgXCJTb3VsXCIsIFwiUHVua1wiLCBcIlNwYWNlXCIsIFwiTWVkaXRhdGl2ZVwiLCBcIkluc3RydW1lbnRhbCBQb3BcIiwgXCJJbnN0cnVtZW50YWwgUm9ja1wiLCBcIkV0aG5pY1wiLCBcIkdvdGhpY1wiLCBcIkRhcmt3YXZlXCIsIFwiVGVjaG5vLUluZHVzdHJpYWxcIiwgXCJFbGVjdHJvbmljXCIsIFwiUG9wLUZvbGtcIiwgXCJFdXJvZGFuY2VcIiwgXCJEcmVhbVwiLCBcIlNvdXRoZXJuIFJvY2tcIiwgXCJDb21lZHlcIiwgXCJDdWx0XCIsIFwiR2FuZ3N0YVwiLCBcIlRvcCA0MFwiLCBcIkNocmlzdGlhbiBSYXBcIiwgXCJQb3AvRnVua1wiLCBcIkp1bmdsZVwiLCBcIk5hdGl2ZSBBbWVyaWNhblwiLCBcIkNhYmFyZXRcIiwgXCJOZXcgV2F2ZVwiLCBcIlBzeWNoYWRlbGljXCIsIFwiUmF2ZVwiLCBcIlNob3d0dW5lc1wiLCBcIlRyYWlsZXJcIiwgXCJMby1GaVwiLCBcIlRyaWJhbFwiLCBcIkFjaWQgUHVua1wiLCBcIkFjaWQgSmF6elwiLCBcIlBvbGthXCIsIFwiUmV0cm9cIiwgXCJNdXNpY2FsXCIsIFwiUm9jayAmIFJvbGxcIiwgXCJIYXJkIFJvY2tcIiwgXCJGb2xrXCIsIFwiRm9say1Sb2NrXCIsIFwiTmF0aW9uYWwgRm9sa1wiLCBcIlN3aW5nXCIsIFwiRmFzdCBGdXNpb25cIiwgXCJCZWJvYlwiLCBcIkxhdGluXCIsIFwiUmV2aXZhbFwiLCBcIkNlbHRpY1wiLCBcIkJsdWVncmFzc1wiLCBcIkF2YW50Z2FyZGVcIiwgXCJHb3RoaWMgUm9ja1wiLCBcIlByb2dyZXNzaXZlIFJvY2tcIiwgXCJQc3ljaGVkZWxpYyBSb2NrXCIsIFwiU3ltcGhvbmljIFJvY2tcIiwgXCJTbG93IFJvY2tcIiwgXCJCaWcgQmFuZFwiLCBcIkNob3J1c1wiLCBcIkVhc3kgTGlzdGVuaW5nXCIsIFwiQWNvdXN0aWNcIiwgXCJIdW1vdXJcIiwgXCJTcGVlY2hcIiwgXCJDaGFuc29uXCIsIFwiT3BlcmFcIiwgXCJDaGFtYmVyIE11c2ljXCIsIFwiU29uYXRhXCIsIFwiU3ltcGhvbnlcIiwgXCJCb290eSBCYXNzXCIsIFwiUHJpbXVzXCIsIFwiUG9ybiBHcm9vdmVcIiwgXCJTYXRpcmVcIiwgXCJTbG93IEphbVwiLCBcIkNsdWJcIiwgXCJUYW5nb1wiLCBcIlNhbWJhXCIsIFwiRm9sa2xvcmVcIiwgXCJCYWxsYWRcIiwgXCJQb3dlciBCYWxsYWRcIiwgXCJSaHl0aG1pYyBTb3VsXCIsIFwiRnJlZXN0eWxlXCIsIFwiRHVldFwiLCBcIlB1bmsgUm9ja1wiLCBcIkRydW0gU29sb1wiLCBcIkFjYXBlbGxhXCIsIFwiRXVyby1Ib3VzZVwiLCBcIkRhbmNlIEhhbGxcIl07XG5tb2R1bGUuZXhwb3J0cyA9IElEM3YxVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIFN0cmluZ1V0aWxzID0gcmVxdWlyZSgnLi9TdHJpbmdVdGlscycpO1xuXG52YXIgQXJyYXlGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9BcnJheUZpbGVSZWFkZXInKTtcblxudmFyIEZSQU1FX0RFU0NSSVBUSU9OUyA9IHtcbiAgLy8gdjIuMlxuICBcIkJVRlwiOiBcIlJlY29tbWVuZGVkIGJ1ZmZlciBzaXplXCIsXG4gIFwiQ05UXCI6IFwiUGxheSBjb3VudGVyXCIsXG4gIFwiQ09NXCI6IFwiQ29tbWVudHNcIixcbiAgXCJDUkFcIjogXCJBdWRpbyBlbmNyeXB0aW9uXCIsXG4gIFwiQ1JNXCI6IFwiRW5jcnlwdGVkIG1ldGEgZnJhbWVcIixcbiAgXCJFVENcIjogXCJFdmVudCB0aW1pbmcgY29kZXNcIixcbiAgXCJFUVVcIjogXCJFcXVhbGl6YXRpb25cIixcbiAgXCJHRU9cIjogXCJHZW5lcmFsIGVuY2Fwc3VsYXRlZCBvYmplY3RcIixcbiAgXCJJUExcIjogXCJJbnZvbHZlZCBwZW9wbGUgbGlzdFwiLFxuICBcIkxOS1wiOiBcIkxpbmtlZCBpbmZvcm1hdGlvblwiLFxuICBcIk1DSVwiOiBcIk11c2ljIENEIElkZW50aWZpZXJcIixcbiAgXCJNTExcIjogXCJNUEVHIGxvY2F0aW9uIGxvb2t1cCB0YWJsZVwiLFxuICBcIlBJQ1wiOiBcIkF0dGFjaGVkIHBpY3R1cmVcIixcbiAgXCJQT1BcIjogXCJQb3B1bGFyaW1ldGVyXCIsXG4gIFwiUkVWXCI6IFwiUmV2ZXJiXCIsXG4gIFwiUlZBXCI6IFwiUmVsYXRpdmUgdm9sdW1lIGFkanVzdG1lbnRcIixcbiAgXCJTTFRcIjogXCJTeW5jaHJvbml6ZWQgbHlyaWMvdGV4dFwiLFxuICBcIlNUQ1wiOiBcIlN5bmNlZCB0ZW1wbyBjb2Rlc1wiLFxuICBcIlRBTFwiOiBcIkFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUQlBcIjogXCJCUE0gKEJlYXRzIFBlciBNaW51dGUpXCIsXG4gIFwiVENNXCI6IFwiQ29tcG9zZXJcIixcbiAgXCJUQ09cIjogXCJDb250ZW50IHR5cGVcIixcbiAgXCJUQ1JcIjogXCJDb3B5cmlnaHQgbWVzc2FnZVwiLFxuICBcIlREQVwiOiBcIkRhdGVcIixcbiAgXCJURFlcIjogXCJQbGF5bGlzdCBkZWxheVwiLFxuICBcIlRFTlwiOiBcIkVuY29kZWQgYnlcIixcbiAgXCJURlRcIjogXCJGaWxlIHR5cGVcIixcbiAgXCJUSU1cIjogXCJUaW1lXCIsXG4gIFwiVEtFXCI6IFwiSW5pdGlhbCBrZXlcIixcbiAgXCJUTEFcIjogXCJMYW5ndWFnZShzKVwiLFxuICBcIlRMRVwiOiBcIkxlbmd0aFwiLFxuICBcIlRNVFwiOiBcIk1lZGlhIHR5cGVcIixcbiAgXCJUT0FcIjogXCJPcmlnaW5hbCBhcnRpc3QocykvcGVyZm9ybWVyKHMpXCIsXG4gIFwiVE9GXCI6IFwiT3JpZ2luYWwgZmlsZW5hbWVcIixcbiAgXCJUT0xcIjogXCJPcmlnaW5hbCBMeXJpY2lzdChzKS90ZXh0IHdyaXRlcihzKVwiLFxuICBcIlRPUlwiOiBcIk9yaWdpbmFsIHJlbGVhc2UgeWVhclwiLFxuICBcIlRPVFwiOiBcIk9yaWdpbmFsIGFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUUDFcIjogXCJMZWFkIGFydGlzdChzKS9MZWFkIHBlcmZvcm1lcihzKS9Tb2xvaXN0KHMpL1BlcmZvcm1pbmcgZ3JvdXBcIixcbiAgXCJUUDJcIjogXCJCYW5kL09yY2hlc3RyYS9BY2NvbXBhbmltZW50XCIsXG4gIFwiVFAzXCI6IFwiQ29uZHVjdG9yL1BlcmZvcm1lciByZWZpbmVtZW50XCIsXG4gIFwiVFA0XCI6IFwiSW50ZXJwcmV0ZWQsIHJlbWl4ZWQsIG9yIG90aGVyd2lzZSBtb2RpZmllZCBieVwiLFxuICBcIlRQQVwiOiBcIlBhcnQgb2YgYSBzZXRcIixcbiAgXCJUUEJcIjogXCJQdWJsaXNoZXJcIixcbiAgXCJUUkNcIjogXCJJU1JDIChJbnRlcm5hdGlvbmFsIFN0YW5kYXJkIFJlY29yZGluZyBDb2RlKVwiLFxuICBcIlRSRFwiOiBcIlJlY29yZGluZyBkYXRlc1wiLFxuICBcIlRSS1wiOiBcIlRyYWNrIG51bWJlci9Qb3NpdGlvbiBpbiBzZXRcIixcbiAgXCJUU0lcIjogXCJTaXplXCIsXG4gIFwiVFNTXCI6IFwiU29mdHdhcmUvaGFyZHdhcmUgYW5kIHNldHRpbmdzIHVzZWQgZm9yIGVuY29kaW5nXCIsXG4gIFwiVFQxXCI6IFwiQ29udGVudCBncm91cCBkZXNjcmlwdGlvblwiLFxuICBcIlRUMlwiOiBcIlRpdGxlL1NvbmduYW1lL0NvbnRlbnQgZGVzY3JpcHRpb25cIixcbiAgXCJUVDNcIjogXCJTdWJ0aXRsZS9EZXNjcmlwdGlvbiByZWZpbmVtZW50XCIsXG4gIFwiVFhUXCI6IFwiTHlyaWNpc3QvdGV4dCB3cml0ZXJcIixcbiAgXCJUWFhcIjogXCJVc2VyIGRlZmluZWQgdGV4dCBpbmZvcm1hdGlvbiBmcmFtZVwiLFxuICBcIlRZRVwiOiBcIlllYXJcIixcbiAgXCJVRklcIjogXCJVbmlxdWUgZmlsZSBpZGVudGlmaWVyXCIsXG4gIFwiVUxUXCI6IFwiVW5zeWNocm9uaXplZCBseXJpYy90ZXh0IHRyYW5zY3JpcHRpb25cIixcbiAgXCJXQUZcIjogXCJPZmZpY2lhbCBhdWRpbyBmaWxlIHdlYnBhZ2VcIixcbiAgXCJXQVJcIjogXCJPZmZpY2lhbCBhcnRpc3QvcGVyZm9ybWVyIHdlYnBhZ2VcIixcbiAgXCJXQVNcIjogXCJPZmZpY2lhbCBhdWRpbyBzb3VyY2Ugd2VicGFnZVwiLFxuICBcIldDTVwiOiBcIkNvbW1lcmNpYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXQ1BcIjogXCJDb3B5cmlnaHQvTGVnYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXUEJcIjogXCJQdWJsaXNoZXJzIG9mZmljaWFsIHdlYnBhZ2VcIixcbiAgXCJXWFhcIjogXCJVc2VyIGRlZmluZWQgVVJMIGxpbmsgZnJhbWVcIixcbiAgLy8gdjIuM1xuICBcIkFFTkNcIjogXCJBdWRpbyBlbmNyeXB0aW9uXCIsXG4gIFwiQVBJQ1wiOiBcIkF0dGFjaGVkIHBpY3R1cmVcIixcbiAgXCJBU1BJXCI6IFwiQXVkaW8gc2VlayBwb2ludCBpbmRleFwiLFxuICBcIkNIQVBcIjogXCJDaGFwdGVyXCIsXG4gIFwiQ1RPQ1wiOiBcIlRhYmxlIG9mIGNvbnRlbnRzXCIsXG4gIFwiQ09NTVwiOiBcIkNvbW1lbnRzXCIsXG4gIFwiQ09NUlwiOiBcIkNvbW1lcmNpYWwgZnJhbWVcIixcbiAgXCJFTkNSXCI6IFwiRW5jcnlwdGlvbiBtZXRob2QgcmVnaXN0cmF0aW9uXCIsXG4gIFwiRVFVMlwiOiBcIkVxdWFsaXNhdGlvbiAoMilcIixcbiAgXCJFUVVBXCI6IFwiRXF1YWxpemF0aW9uXCIsXG4gIFwiRVRDT1wiOiBcIkV2ZW50IHRpbWluZyBjb2Rlc1wiLFxuICBcIkdFT0JcIjogXCJHZW5lcmFsIGVuY2Fwc3VsYXRlZCBvYmplY3RcIixcbiAgXCJHUklEXCI6IFwiR3JvdXAgaWRlbnRpZmljYXRpb24gcmVnaXN0cmF0aW9uXCIsXG4gIFwiSVBMU1wiOiBcIkludm9sdmVkIHBlb3BsZSBsaXN0XCIsXG4gIFwiTElOS1wiOiBcIkxpbmtlZCBpbmZvcm1hdGlvblwiLFxuICBcIk1DRElcIjogXCJNdXNpYyBDRCBpZGVudGlmaWVyXCIsXG4gIFwiTUxMVFwiOiBcIk1QRUcgbG9jYXRpb24gbG9va3VwIHRhYmxlXCIsXG4gIFwiT1dORVwiOiBcIk93bmVyc2hpcCBmcmFtZVwiLFxuICBcIlBSSVZcIjogXCJQcml2YXRlIGZyYW1lXCIsXG4gIFwiUENOVFwiOiBcIlBsYXkgY291bnRlclwiLFxuICBcIlBPUE1cIjogXCJQb3B1bGFyaW1ldGVyXCIsXG4gIFwiUE9TU1wiOiBcIlBvc2l0aW9uIHN5bmNocm9uaXNhdGlvbiBmcmFtZVwiLFxuICBcIlJCVUZcIjogXCJSZWNvbW1lbmRlZCBidWZmZXIgc2l6ZVwiLFxuICBcIlJWQTJcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudCAoMilcIixcbiAgXCJSVkFEXCI6IFwiUmVsYXRpdmUgdm9sdW1lIGFkanVzdG1lbnRcIixcbiAgXCJSVlJCXCI6IFwiUmV2ZXJiXCIsXG4gIFwiU0VFS1wiOiBcIlNlZWsgZnJhbWVcIixcbiAgXCJTWUxUXCI6IFwiU3luY2hyb25pemVkIGx5cmljL3RleHRcIixcbiAgXCJTWVRDXCI6IFwiU3luY2hyb25pemVkIHRlbXBvIGNvZGVzXCIsXG4gIFwiVEFMQlwiOiBcIkFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUQlBNXCI6IFwiQlBNIChiZWF0cyBwZXIgbWludXRlKVwiLFxuICBcIlRDT01cIjogXCJDb21wb3NlclwiLFxuICBcIlRDT05cIjogXCJDb250ZW50IHR5cGVcIixcbiAgXCJUQ09QXCI6IFwiQ29weXJpZ2h0IG1lc3NhZ2VcIixcbiAgXCJUREFUXCI6IFwiRGF0ZVwiLFxuICBcIlRETFlcIjogXCJQbGF5bGlzdCBkZWxheVwiLFxuICBcIlREUkNcIjogXCJSZWNvcmRpbmcgdGltZVwiLFxuICBcIlREUkxcIjogXCJSZWxlYXNlIHRpbWVcIixcbiAgXCJURFRHXCI6IFwiVGFnZ2luZyB0aW1lXCIsXG4gIFwiVEVOQ1wiOiBcIkVuY29kZWQgYnlcIixcbiAgXCJURVhUXCI6IFwiTHlyaWNpc3QvVGV4dCB3cml0ZXJcIixcbiAgXCJURkxUXCI6IFwiRmlsZSB0eXBlXCIsXG4gIFwiVElNRVwiOiBcIlRpbWVcIixcbiAgXCJUSVBMXCI6IFwiSW52b2x2ZWQgcGVvcGxlIGxpc3RcIixcbiAgXCJUSVQxXCI6IFwiQ29udGVudCBncm91cCBkZXNjcmlwdGlvblwiLFxuICBcIlRJVDJcIjogXCJUaXRsZS9zb25nbmFtZS9jb250ZW50IGRlc2NyaXB0aW9uXCIsXG4gIFwiVElUM1wiOiBcIlN1YnRpdGxlL0Rlc2NyaXB0aW9uIHJlZmluZW1lbnRcIixcbiAgXCJUS0VZXCI6IFwiSW5pdGlhbCBrZXlcIixcbiAgXCJUTEFOXCI6IFwiTGFuZ3VhZ2UocylcIixcbiAgXCJUTEVOXCI6IFwiTGVuZ3RoXCIsXG4gIFwiVE1DTFwiOiBcIk11c2ljaWFuIGNyZWRpdHMgbGlzdFwiLFxuICBcIlRNRURcIjogXCJNZWRpYSB0eXBlXCIsXG4gIFwiVE1PT1wiOiBcIk1vb2RcIixcbiAgXCJUT0FMXCI6IFwiT3JpZ2luYWwgYWxidW0vbW92aWUvc2hvdyB0aXRsZVwiLFxuICBcIlRPRk5cIjogXCJPcmlnaW5hbCBmaWxlbmFtZVwiLFxuICBcIlRPTFlcIjogXCJPcmlnaW5hbCBseXJpY2lzdChzKS90ZXh0IHdyaXRlcihzKVwiLFxuICBcIlRPUEVcIjogXCJPcmlnaW5hbCBhcnRpc3QocykvcGVyZm9ybWVyKHMpXCIsXG4gIFwiVE9SWVwiOiBcIk9yaWdpbmFsIHJlbGVhc2UgeWVhclwiLFxuICBcIlRPV05cIjogXCJGaWxlIG93bmVyL2xpY2Vuc2VlXCIsXG4gIFwiVFBFMVwiOiBcIkxlYWQgcGVyZm9ybWVyKHMpL1NvbG9pc3QocylcIixcbiAgXCJUUEUyXCI6IFwiQmFuZC9vcmNoZXN0cmEvYWNjb21wYW5pbWVudFwiLFxuICBcIlRQRTNcIjogXCJDb25kdWN0b3IvcGVyZm9ybWVyIHJlZmluZW1lbnRcIixcbiAgXCJUUEU0XCI6IFwiSW50ZXJwcmV0ZWQsIHJlbWl4ZWQsIG9yIG90aGVyd2lzZSBtb2RpZmllZCBieVwiLFxuICBcIlRQT1NcIjogXCJQYXJ0IG9mIGEgc2V0XCIsXG4gIFwiVFBST1wiOiBcIlByb2R1Y2VkIG5vdGljZVwiLFxuICBcIlRQVUJcIjogXCJQdWJsaXNoZXJcIixcbiAgXCJUUkNLXCI6IFwiVHJhY2sgbnVtYmVyL1Bvc2l0aW9uIGluIHNldFwiLFxuICBcIlRSREFcIjogXCJSZWNvcmRpbmcgZGF0ZXNcIixcbiAgXCJUUlNOXCI6IFwiSW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBuYW1lXCIsXG4gIFwiVFJTT1wiOiBcIkludGVybmV0IHJhZGlvIHN0YXRpb24gb3duZXJcIixcbiAgXCJUU09BXCI6IFwiQWxidW0gc29ydCBvcmRlclwiLFxuICBcIlRTT1BcIjogXCJQZXJmb3JtZXIgc29ydCBvcmRlclwiLFxuICBcIlRTT1RcIjogXCJUaXRsZSBzb3J0IG9yZGVyXCIsXG4gIFwiVFNJWlwiOiBcIlNpemVcIixcbiAgXCJUU1JDXCI6IFwiSVNSQyAoaW50ZXJuYXRpb25hbCBzdGFuZGFyZCByZWNvcmRpbmcgY29kZSlcIixcbiAgXCJUU1NFXCI6IFwiU29mdHdhcmUvSGFyZHdhcmUgYW5kIHNldHRpbmdzIHVzZWQgZm9yIGVuY29kaW5nXCIsXG4gIFwiVFNTVFwiOiBcIlNldCBzdWJ0aXRsZVwiLFxuICBcIlRZRVJcIjogXCJZZWFyXCIsXG4gIFwiVFhYWFwiOiBcIlVzZXIgZGVmaW5lZCB0ZXh0IGluZm9ybWF0aW9uIGZyYW1lXCIsXG4gIFwiVUZJRFwiOiBcIlVuaXF1ZSBmaWxlIGlkZW50aWZpZXJcIixcbiAgXCJVU0VSXCI6IFwiVGVybXMgb2YgdXNlXCIsXG4gIFwiVVNMVFwiOiBcIlVuc3ljaHJvbml6ZWQgbHlyaWMvdGV4dCB0cmFuc2NyaXB0aW9uXCIsXG4gIFwiV0NPTVwiOiBcIkNvbW1lcmNpYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXQ09QXCI6IFwiQ29weXJpZ2h0L0xlZ2FsIGluZm9ybWF0aW9uXCIsXG4gIFwiV09BRlwiOiBcIk9mZmljaWFsIGF1ZGlvIGZpbGUgd2VicGFnZVwiLFxuICBcIldPQVJcIjogXCJPZmZpY2lhbCBhcnRpc3QvcGVyZm9ybWVyIHdlYnBhZ2VcIixcbiAgXCJXT0FTXCI6IFwiT2ZmaWNpYWwgYXVkaW8gc291cmNlIHdlYnBhZ2VcIixcbiAgXCJXT1JTXCI6IFwiT2ZmaWNpYWwgaW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBob21lcGFnZVwiLFxuICBcIldQQVlcIjogXCJQYXltZW50XCIsXG4gIFwiV1BVQlwiOiBcIlB1Ymxpc2hlcnMgb2ZmaWNpYWwgd2VicGFnZVwiLFxuICBcIldYWFhcIjogXCJVc2VyIGRlZmluZWQgVVJMIGxpbmsgZnJhbWVcIlxufTtcblxudmFyIElEM3YyRnJhbWVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJRDN2MkZyYW1lUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MkZyYW1lUmVhZGVyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MkZyYW1lUmVhZGVyLCBudWxsLCBbe1xuICAgIGtleTogXCJnZXRGcmFtZVJlYWRlckZ1bmN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1lUmVhZGVyRnVuY3Rpb24oZnJhbWVJZCkge1xuICAgICAgaWYgKGZyYW1lSWQgaW4gZnJhbWVSZWFkZXJGdW5jdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZyYW1lUmVhZGVyRnVuY3Rpb25zW2ZyYW1lSWRdO1xuICAgICAgfSBlbHNlIGlmIChmcmFtZUlkWzBdID09PSBcIlRcIikge1xuICAgICAgICAvLyBBbGwgZnJhbWUgaWRzIHN0YXJ0aW5nIHdpdGggVCBhcmUgdGV4dCB0YWdzLlxuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbXCJUKlwiXTtcbiAgICAgIH0gZWxzZSBpZiAoZnJhbWVJZFswXSA9PT0gXCJXXCIpIHtcbiAgICAgICAgLy8gQWxsIGZyYW1lIGlkcyBzdGFydGluZyB3aXRoIFcgYXJlIHVybCB0YWdzLlxuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbXCJXKlwiXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIGZyYW1lcyBjb25zaXN0cyBvZiBhIGZyYW1lIGhlYWRlciBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBmaWVsZHNcbiAgICAgKiBjb250YWluaW5nIHRoZSBhY3R1YWwgaW5mb3JtYXRpb24uXG4gICAgICogVGhlIGZyYW1lIElEIG1hZGUgb3V0IG9mIHRoZSBjaGFyYWN0ZXJzIGNhcGl0YWwgQS1aIGFuZCAwLTkuIElkZW50aWZpZXJzXG4gICAgICogYmVnaW5uaW5nIHdpdGggXCJYXCIsIFwiWVwiIGFuZCBcIlpcIiBhcmUgZm9yIGV4cGVyaW1lbnRhbCB1c2UgYW5kIGZyZWUgZm9yXG4gICAgICogZXZlcnlvbmUgdG8gdXNlLCB3aXRob3V0IHRoZSBuZWVkIHRvIHNldCB0aGUgZXhwZXJpbWVudGFsIGJpdCBpbiB0aGUgdGFnXG4gICAgICogaGVhZGVyLiBIYXZlIGluIG1pbmQgdGhhdCBzb21lb25lIGVsc2UgbWlnaHQgaGF2ZSB1c2VkIHRoZSBzYW1lIGlkZW50aWZpZXJcbiAgICAgKiBhcyB5b3UuIEFsbCBvdGhlciBpZGVudGlmaWVycyBhcmUgZWl0aGVyIHVzZWQgb3IgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuXG4gICAgICogVGhlIGZyYW1lIElEIGlzIGZvbGxvd2VkIGJ5IGEgc2l6ZSBkZXNjcmlwdG9yLCBtYWtpbmcgYSB0b3RhbCBoZWFkZXIgc2l6ZVxuICAgICAqIG9mIHRlbiBieXRlcyBpbiBldmVyeSBmcmFtZS4gVGhlIHNpemUgaXMgY2FsY3VsYXRlZCBhcyBmcmFtZSBzaXplIGV4Y2x1ZGluZ1xuICAgICAqIGZyYW1lIGhlYWRlciAoZnJhbWUgc2l6ZSAtIDEwKS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlYWRGcmFtZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZEZyYW1lcyhvZmZzZXQsIGVuZCwgZGF0YSwgaWQzaGVhZGVyLCB0YWdzKSB7XG4gICAgICB2YXIgZnJhbWVzID0ge307XG5cbiAgICAgIHZhciBmcmFtZUhlYWRlclNpemUgPSB0aGlzLl9nZXRGcmFtZUhlYWRlclNpemUoaWQzaGVhZGVyKTsgLy8gY29uc29sZS5sb2coJ2hlYWRlcicsIGlkM2hlYWRlcik7XG5cblxuICAgICAgd2hpbGUgKCAvLyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZWFkIGF0IGxlYXN0IHRoZSBmcmFtZSBoZWFkZXJcbiAgICAgIG9mZnNldCA8IGVuZCAtIGZyYW1lSGVhZGVyU2l6ZSkge1xuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5fcmVhZEZyYW1lSGVhZGVyKGRhdGEsIG9mZnNldCwgaWQzaGVhZGVyKTtcblxuICAgICAgICB2YXIgZnJhbWVJZCA9IGhlYWRlci5pZDsgLy8gTm8gZnJhbWUgSUQgc29tZXRpbWVzIG1lYW5zIGl0J3MgdGhlIGxhc3QgZnJhbWUgKEdURk8pLlxuXG4gICAgICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZsYWdzID0gaGVhZGVyLmZsYWdzO1xuICAgICAgICB2YXIgZnJhbWVTaXplID0gaGVhZGVyLnNpemU7XG4gICAgICAgIHZhciBmcmFtZURhdGFPZmZzZXQgPSBvZmZzZXQgKyBoZWFkZXIuaGVhZGVyU2l6ZTtcbiAgICAgICAgdmFyIGZyYW1lRGF0YSA9IGRhdGE7IC8vIGNvbnNvbGUubG9nKG9mZnNldCwgZnJhbWVJZCwgaGVhZGVyLnNpemUgKyBoZWFkZXIuaGVhZGVyU2l6ZSwgZmxhZ3MgJiYgZmxhZ3MuZm9ybWF0LnVuc3luY2hyb25pc2F0aW9uKTtcbiAgICAgICAgLy8gYWR2YW5jZSBkYXRhIG9mZnNldCB0byB0aGUgbmV4dCBmcmFtZSBkYXRhXG5cbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5oZWFkZXJTaXplICsgaGVhZGVyLnNpemU7IC8vIHNraXAgdW53YW50ZWQgdGFnc1xuXG4gICAgICAgIGlmICh0YWdzICYmIHRhZ3MuaW5kZXhPZihmcmFtZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBXb3JrYXJvdW5kOiBNUDNleHQgVjMuMy4xNyBwbGFjZXMgYSBub24tY29tcGxpYW50IHBhZGRpbmcgc3RyaW5nIGF0XG4gICAgICAgIC8vIHRoZSBlbmQgb2YgdGhlIElEM3YyIGhlYWRlci4gQSBzdHJpbmcgbGlrZSBcIk1QM2V4dCBWMy4zLjE5KGFuc2kpXCJcbiAgICAgICAgLy8gaXMgYWRkZWQgbXVsdGlwbGUgdGltZXMgYXQgdGhlIGVuZCBvZiB0aGUgSUQzIHRhZy4gTW9yZSBpbmZvcm1hdGlvblxuICAgICAgICAvLyBhYm91dCB0aGlzIGlzc3VlIGNhbiBiZSBmb3VuZCBhdFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWFkc20vanNtZWRpYXRhZ3MvaXNzdWVzLzU4I2lzc3VlY29tbWVudC0zMTM4NjUzMzZcblxuXG4gICAgICAgIGlmIChmcmFtZUlkID09PSAnTVAzZScgfHwgZnJhbWVJZCA9PT0gJ1xceDAwTVAzJyB8fCBmcmFtZUlkID09PSAnXFx4MDBcXHgwME1QJyB8fCBmcmFtZUlkID09PSAnIE1QMycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1bnN5bmNEYXRhO1xuXG4gICAgICAgIGlmIChmbGFncyAmJiBmbGFncy5mb3JtYXQudW5zeW5jaHJvbmlzYXRpb24pIHtcbiAgICAgICAgICBmcmFtZURhdGEgPSB0aGlzLmdldFVuc3luY0ZpbGVSZWFkZXIoZnJhbWVEYXRhLCBmcmFtZURhdGFPZmZzZXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgZnJhbWVEYXRhT2Zmc2V0ID0gMDtcbiAgICAgICAgICBmcmFtZVNpemUgPSBmcmFtZURhdGEuZ2V0U2l6ZSgpO1xuICAgICAgICB9IC8vIHRoZSBmaXJzdCA0IGJ5dGVzIGFyZSB0aGUgcmVhbCBkYXRhIHNpemVcbiAgICAgICAgLy8gKGFmdGVyIHVuc3luY2hyb25pc2F0aW9uICYmIGVuY3J5cHRpb24pXG5cblxuICAgICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MuZm9ybWF0LmRhdGFfbGVuZ3RoX2luZGljYXRvcikge1xuICAgICAgICAgIC8vIHZhciBmcmFtZURhdGFTaXplID0gZnJhbWVEYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KGZyYW1lRGF0YU9mZnNldCk7XG4gICAgICAgICAgZnJhbWVEYXRhT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgZnJhbWVTaXplIC09IDQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVhZEZyYW1lRnVuYyA9IElEM3YyRnJhbWVSZWFkZXIuZ2V0RnJhbWVSZWFkZXJGdW5jdGlvbihmcmFtZUlkKTtcbiAgICAgICAgdmFyIHBhcnNlZERhdGEgPSByZWFkRnJhbWVGdW5jID8gcmVhZEZyYW1lRnVuYy5hcHBseSh0aGlzLCBbZnJhbWVEYXRhT2Zmc2V0LCBmcmFtZVNpemUsIGZyYW1lRGF0YSwgZmxhZ3MsIGlkM2hlYWRlcl0pIDogbnVsbDtcblxuICAgICAgICB2YXIgZGVzYyA9IHRoaXMuX2dldEZyYW1lRGVzY3JpcHRpb24oZnJhbWVJZCk7XG5cbiAgICAgICAgdmFyIGZyYW1lID0ge1xuICAgICAgICAgIGlkOiBmcmFtZUlkLFxuICAgICAgICAgIHNpemU6IGZyYW1lU2l6ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICBkYXRhOiBwYXJzZWREYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZyYW1lSWQgaW4gZnJhbWVzKSB7XG4gICAgICAgICAgaWYgKGZyYW1lc1tmcmFtZUlkXS5pZCkge1xuICAgICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdID0gW2ZyYW1lc1tmcmFtZUlkXV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdLnB1c2goZnJhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyYW1lc1tmcmFtZUlkXSA9IGZyYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmcmFtZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGcmFtZUhlYWRlclNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZyYW1lSGVhZGVyU2l6ZShpZDNoZWFkZXIpIHtcbiAgICAgIHZhciBtYWpvciA9IGlkM2hlYWRlci5tYWpvcjtcblxuICAgICAgaWYgKG1ham9yID09IDIpIHtcbiAgICAgICAgcmV0dXJuIDY7XG4gICAgICB9IGVsc2UgaWYgKG1ham9yID09IDMgfHwgbWFqb3IgPT0gNCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRGcmFtZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEZyYW1lSGVhZGVyKGRhdGEsIG9mZnNldCwgaWQzaGVhZGVyKSB7XG4gICAgICB2YXIgbWFqb3IgPSBpZDNoZWFkZXIubWFqb3I7XG4gICAgICB2YXIgZmxhZ3MgPSBudWxsO1xuXG4gICAgICB2YXIgZnJhbWVIZWFkZXJTaXplID0gdGhpcy5fZ2V0RnJhbWVIZWFkZXJTaXplKGlkM2hlYWRlcik7XG5cbiAgICAgIHN3aXRjaCAobWFqb3IpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDMpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldEludGVnZXIyNEF0KG9mZnNldCArIDMsIHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB2YXIgZnJhbWVJZCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0LCA0KTtcbiAgICAgICAgICB2YXIgZnJhbWVTaXplID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0ICsgNCwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDQpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCArIDQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWVJZCA9PSBTdHJpbmcuZnJvbUNoYXJDb2RlKDAsIDAsIDApIHx8IGZyYW1lSWQgPT0gU3RyaW5nLmZyb21DaGFyQ29kZSgwLCAwLCAwLCAwKSkge1xuICAgICAgICBmcmFtZUlkID0gXCJcIjtcbiAgICAgIH0gLy8gaWYgZnJhbWVJZCBpcyBlbXB0eSB0aGVuIGl0J3MgdGhlIGxhc3QgZnJhbWVcblxuXG4gICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICAvLyByZWFkIGZyYW1lIG1lc3NhZ2UgYW5kIGZvcm1hdCBmbGFnc1xuICAgICAgICBpZiAobWFqb3IgPiAyKSB7XG4gICAgICAgICAgZmxhZ3MgPSB0aGlzLl9yZWFkRnJhbWVGbGFncyhkYXRhLCBvZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImlkXCI6IGZyYW1lSWQgfHwgXCJcIixcbiAgICAgICAgXCJzaXplXCI6IGZyYW1lU2l6ZSB8fCAwLFxuICAgICAgICBcImhlYWRlclNpemVcIjogZnJhbWVIZWFkZXJTaXplIHx8IDAsXG4gICAgICAgIFwiZmxhZ3NcIjogZmxhZ3NcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkRnJhbWVGbGFnc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEZyYW1lRmxhZ3MoZGF0YSwgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdGFnX2FsdGVyX3ByZXNlcnZhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNiksXG4gICAgICAgICAgZmlsZV9hbHRlcl9wcmVzZXJ2YXRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDUpLFxuICAgICAgICAgIHJlYWRfb25seTogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNClcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgZ3JvdXBpbmdfaWRlbnRpdHk6IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCA3KSxcbiAgICAgICAgICBjb21wcmVzc2lvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDMpLFxuICAgICAgICAgIGVuY3J5cHRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCAyKSxcbiAgICAgICAgICB1bnN5bmNocm9uaXNhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDEpLFxuICAgICAgICAgIGRhdGFfbGVuZ3RoX2luZGljYXRvcjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDApXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGcmFtZURlc2NyaXB0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGcmFtZURlc2NyaXB0aW9uKGZyYW1lSWQpIHtcbiAgICAgIGlmIChmcmFtZUlkIGluIEZSQU1FX0RFU0NSSVBUSU9OUykge1xuICAgICAgICByZXR1cm4gRlJBTUVfREVTQ1JJUFRJT05TW2ZyYW1lSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VW5zeW5jRmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVbnN5bmNGaWxlUmVhZGVyKGRhdGEsIG9mZnNldCwgc2l6ZSkge1xuICAgICAgdmFyIGZyYW1lRGF0YSA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIHNpemUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lRGF0YS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYgKGZyYW1lRGF0YVtpXSA9PT0gMHhmZiAmJiBmcmFtZURhdGFbaSArIDFdID09PSAweDAwKSB7XG4gICAgICAgICAgZnJhbWVEYXRhLnNwbGljZShpICsgMSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBcnJheUZpbGVSZWFkZXIoZnJhbWVEYXRhKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSUQzdjJGcmFtZVJlYWRlcjtcbn0oKTtcblxuO1xudmFyIGZyYW1lUmVhZGVyRnVuY3Rpb25zID0ge307XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydBUElDJ10gPSBmdW5jdGlvbiByZWFkUGljdHVyZUZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG5cbiAgc3dpdGNoIChpZDNoZWFkZXIgJiYgaWQzaGVhZGVyLm1ham9yKSB7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIGZvcm1hdCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gICAgICBvZmZzZXQgKz0gNDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNDpcbiAgICAgIHZhciBmb3JtYXQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSwgbGVuZ3RoIC0gMSk7XG4gICAgICBvZmZzZXQgKz0gMSArIGZvcm1hdC5ieXRlc1JlYWRDb3VudDtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IHJlYWQgSUQzdjIgbWFqb3IgdmVyc2lvbi5cIik7XG4gIH1cblxuICB2YXIgYml0ZSA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gIHZhciB0eXBlID0gUElDVFVSRV9UWVBFW2JpdGVdO1xuICB2YXIgZGVzYyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAob2Zmc2V0IC0gc3RhcnQpIC0gMSwgY2hhcnNldCk7XG4gIG9mZnNldCArPSAxICsgZGVzYy5ieXRlc1JlYWRDb3VudDtcbiAgcmV0dXJuIHtcbiAgICBcImZvcm1hdFwiOiBmb3JtYXQudG9TdHJpbmcoKSxcbiAgICBcInR5cGVcIjogdHlwZSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IGRlc2MudG9TdHJpbmcoKSxcbiAgICBcImRhdGFcIjogZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgc3RhcnQgKyBsZW5ndGggLSBvZmZzZXQpXG4gIH07XG59OyAvLyBJRDN2MiBjaGFwdGVycyBhY2NvcmRpbmcgdG8gaHR0cDovL2lkMy5vcmcvaWQzdjItY2hhcHRlcnMtMS4wXG5cblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NIQVAnXSA9IGZ1bmN0aW9uIHJlYWRDaGFwdGVyRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gb2Zmc2V0O1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpZCA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpKTtcbiAgcmVzdWx0LmlkID0gaWQudG9TdHJpbmcoKTtcbiAgb2Zmc2V0ICs9IGlkLmJ5dGVzUmVhZENvdW50O1xuICByZXN1bHQuc3RhcnRUaW1lID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5lbmRUaW1lID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5zdGFydE9mZnNldCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gIG9mZnNldCArPSA0O1xuICByZXN1bHQuZW5kT2Zmc2V0ID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHZhciByZW1haW5pbmdMZW5ndGggPSBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpO1xuICByZXN1bHQuc3ViRnJhbWVzID0gdGhpcy5yZWFkRnJhbWVzKG9mZnNldCwgb2Zmc2V0ICsgcmVtYWluaW5nTGVuZ3RoLCBkYXRhLCBpZDNoZWFkZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gSUQzdjIgdGFibGUgb2YgY29udGVudHMgYWNjb3JkaW5nIHRvIGh0dHA6Ly9pZDMub3JnL2lkM3YyLWNoYXB0ZXJzLTEuMFxuXG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDVE9DJ10gPSBmdW5jdGlvbiByZWFkVGFibGVPZkNvbnRlbnRzRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gb2Zmc2V0O1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIGNoaWxkRWxlbWVudElkczogW10sXG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICB0b3BMZXZlbDogdW5kZWZpbmVkLFxuICAgIG9yZGVyZWQ6IHVuZGVmaW5lZCxcbiAgICBlbnRyeUNvdW50OiB1bmRlZmluZWQsXG4gICAgc3ViRnJhbWVzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIGlkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICByZXN1bHQuaWQgPSBpZC50b1N0cmluZygpO1xuICBvZmZzZXQgKz0gaWQuYnl0ZXNSZWFkQ291bnQ7XG4gIHJlc3VsdC50b3BMZXZlbCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDEpO1xuICByZXN1bHQub3JkZXJlZCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDApO1xuICBvZmZzZXQrKztcbiAgcmVzdWx0LmVudHJ5Q291bnQgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuICBvZmZzZXQrKztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5lbnRyeUNvdW50OyBpKyspIHtcbiAgICB2YXIgY2hpbGRJZCA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpKSk7XG4gICAgcmVzdWx0LmNoaWxkRWxlbWVudElkcy5wdXNoKGNoaWxkSWQudG9TdHJpbmcoKSk7XG4gICAgb2Zmc2V0ICs9IGNoaWxkSWQuYnl0ZXNSZWFkQ291bnQ7XG4gIH1cblxuICB2YXIgcmVtYWluaW5nTGVuZ3RoID0gbGVuZ3RoIC0gKG9mZnNldCAtIG9yaWdpbmFsT2Zmc2V0KTtcbiAgcmVzdWx0LnN1YkZyYW1lcyA9IHRoaXMucmVhZEZyYW1lcyhvZmZzZXQsIG9mZnNldCArIHJlbWFpbmluZ0xlbmd0aCwgZGF0YSwgaWQzaGVhZGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT01NJ10gPSBmdW5jdGlvbiByZWFkQ29tbWVudHNGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICB2YXIgbGFuZ3VhZ2UgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDEsIDMpO1xuICB2YXIgc2hvcnRkZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDQsIGxlbmd0aCAtIDQsIGNoYXJzZXQpO1xuICBvZmZzZXQgKz0gNCArIHNob3J0ZGVzYy5ieXRlc1JlYWRDb3VudDtcbiAgdmFyIHRleHQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgIHNob3J0X2Rlc2NyaXB0aW9uOiBzaG9ydGRlc2MudG9TdHJpbmcoKSxcbiAgICB0ZXh0OiB0ZXh0LnRvU3RyaW5nKClcbiAgfTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT00nXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT01NJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydQSUMnXSA9IGZ1bmN0aW9uIChvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0FQSUMnXShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcik7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snUENOVCddID0gZnVuY3Rpb24gcmVhZENvdW50ZXJGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICAvLyBGSVhNRTogaW1wbGVtZW50IHRoZSByZXN0IG9mIHRoZSBzcGVjXG4gIHJldHVybiBkYXRhLmdldExvbmdBdChvZmZzZXQsIGZhbHNlKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDTlQnXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydQQ05UJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydUKiddID0gZnVuY3Rpb24gcmVhZFRleHRGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgcmV0dXJuIGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxLCBjaGFyc2V0KS50b1N0cmluZygpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RYWFgnXSA9IGZ1bmN0aW9uIHJlYWRUZXh0RnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHJldHVybiBnZXRVc2VyRGVmaW5lZEZpZWxkcyhvZmZzZXQsIGxlbmd0aCwgZGF0YSwgY2hhcnNldCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snV1hYWCddID0gZnVuY3Rpb24gcmVhZFVybEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICByZXR1cm4gZ2V0VXNlckRlZmluZWRGaWVsZHMob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGNoYXJzZXQpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1cqJ10gPSBmdW5jdGlvbiByZWFkVXJsRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIGxlbmd0aCwgJ2lzby04ODU5LTEnKS50b1N0cmluZygpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDT04nXSA9IGZ1bmN0aW9uIHJlYWRHZW5yZUZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncykge1xuICB2YXIgdGV4dCA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydUKiddLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL15cXChcXGQrXFwpLywgJycpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDTyddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDT04nXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VTTFQnXSA9IGZ1bmN0aW9uIHJlYWRMeXJpY3NGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICB2YXIgbGFuZ3VhZ2UgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDEsIDMpO1xuICB2YXIgZGVzY3JpcHRvciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA0LCBsZW5ndGggLSA0LCBjaGFyc2V0KTtcbiAgb2Zmc2V0ICs9IDQgKyBkZXNjcmlwdG9yLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgbHlyaWNzID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgc3RhcnQgKyBsZW5ndGggLSBvZmZzZXQsIGNoYXJzZXQpO1xuICByZXR1cm4ge1xuICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICBkZXNjcmlwdG9yOiBkZXNjcmlwdG9yLnRvU3RyaW5nKCksXG4gICAgbHlyaWNzOiBseXJpY3MudG9TdHJpbmcoKVxuICB9O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VMVCddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VTTFQnXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VGSUQnXSA9IGZ1bmN0aW9uIHJlYWRMeXJpY3NGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3duZXJJZGVudGlmaWVyID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICBvZmZzZXQgKz0gb3duZXJJZGVudGlmaWVyLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgaWRlbnRpZmllciA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCAtIG93bmVySWRlbnRpZmllci5ieXRlc1JlYWRDb3VudCk7XG4gIHJldHVybiB7XG4gICAgb3duZXJJZGVudGlmaWVyOiBvd25lcklkZW50aWZpZXIudG9TdHJpbmcoKSxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRUZXh0RW5jb2RpbmcoYml0ZSkge1xuICB2YXIgY2hhcnNldDtcblxuICBzd2l0Y2ggKGJpdGUpIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDB4MDE6XG4gICAgICBjaGFyc2V0ID0gJ3V0Zi0xNic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMjpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTE2YmUnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDB4MDM6XG4gICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gIH1cblxuICByZXR1cm4gY2hhcnNldDtcbn0gLy8gSGFuZGxlcyByZWFkaW5nIGRlc2NyaXB0aW9uL2RhdGEgZnJvbSBlaXRoZXIgaHR0cDovL2lkMy5vcmcvaWQzdjIuMy4wI1VzZXJfZGVmaW5lZF90ZXh0X2luZm9ybWF0aW9uX2ZyYW1lXG4vLyBhbmQgaHR0cDovL2lkMy5vcmcvaWQzdjIuMy4wI1VzZXJfZGVmaW5lZF9VUkxfbGlua19mcmFtZVxuXG5cbmZ1bmN0aW9uIGdldFVzZXJEZWZpbmVkRmllbGRzKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBjaGFyc2V0KSB7XG4gIHZhciB1c2VyRGVzYyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxLCBjaGFyc2V0KTtcbiAgdmFyIHVzZXJEZWZpbmVkRGF0YSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxICsgdXNlckRlc2MuYnl0ZXNSZWFkQ291bnQsIGxlbmd0aCAtIDEgLSB1c2VyRGVzYy5ieXRlc1JlYWRDb3VudCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgdXNlcl9kZXNjcmlwdGlvbjogdXNlckRlc2MudG9TdHJpbmcoKSxcbiAgICBkYXRhOiB1c2VyRGVmaW5lZERhdGEudG9TdHJpbmcoKVxuICB9O1xufVxuXG52YXIgUElDVFVSRV9UWVBFID0gW1wiT3RoZXJcIiwgXCIzMngzMiBwaXhlbHMgJ2ZpbGUgaWNvbicgKFBORyBvbmx5KVwiLCBcIk90aGVyIGZpbGUgaWNvblwiLCBcIkNvdmVyIChmcm9udClcIiwgXCJDb3ZlciAoYmFjaylcIiwgXCJMZWFmbGV0IHBhZ2VcIiwgXCJNZWRpYSAoZS5nLiBsYWJlbCBzaWRlIG9mIENEKVwiLCBcIkxlYWQgYXJ0aXN0L2xlYWQgcGVyZm9ybWVyL3NvbG9pc3RcIiwgXCJBcnRpc3QvcGVyZm9ybWVyXCIsIFwiQ29uZHVjdG9yXCIsIFwiQmFuZC9PcmNoZXN0cmFcIiwgXCJDb21wb3NlclwiLCBcIkx5cmljaXN0L3RleHQgd3JpdGVyXCIsIFwiUmVjb3JkaW5nIExvY2F0aW9uXCIsIFwiRHVyaW5nIHJlY29yZGluZ1wiLCBcIkR1cmluZyBwZXJmb3JtYW5jZVwiLCBcIk1vdmllL3ZpZGVvIHNjcmVlbiBjYXB0dXJlXCIsIFwiQSBicmlnaHQgY29sb3VyZWQgZmlzaFwiLCBcIklsbHVzdHJhdGlvblwiLCBcIkJhbmQvYXJ0aXN0IGxvZ290eXBlXCIsIFwiUHVibGlzaGVyL1N0dWRpbyBsb2dvdHlwZVwiXTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjJGcmFtZVJlYWRlcjtcblxufSx7XCIuL0FycmF5RmlsZVJlYWRlclwiOjMsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9TdHJpbmdVdGlsc1wiOjEzfV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgSUQzdjJGcmFtZVJlYWRlciA9IHJlcXVpcmUoJy4vSUQzdjJGcmFtZVJlYWRlcicpO1xuXG52YXIgSUQzX0hFQURFUl9TSVpFID0gMTA7XG5cbnZhciBJRDN2MlRhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhJRDN2MlRhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBJRDN2MlRhZ1JlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSUQzdjJUYWdSZWFkZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihJRDN2MlRhZ1JlYWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSUQzdjJUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzYsIDldLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoIC8vIFRoZSB0YWcgc2l6ZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSBoZWFkZXIgc2l6ZS5cbiAgICAgICAgICBbMCwgSUQzX0hFQURFUl9TSVpFICsgbWVkaWFGaWxlUmVhZGVyLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KDYpIC0gMV0sIGNhbGxiYWNrcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3MpIHtcbiAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgdmFyIG1ham9yID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgMyk7XG5cbiAgICAgIGlmIChtYWpvciA+IDQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgICBcInZlcnNpb25cIjogXCI+Mi40XCIsXG4gICAgICAgICAgXCJ0YWdzXCI6IHt9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciByZXZpc2lvbiA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDQpO1xuICAgICAgdmFyIHVuc3luY2ggPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgNSwgNyk7XG4gICAgICB2YXIgeGhlYWRlciA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyA1LCA2KTtcbiAgICAgIHZhciB4aW5kaWNhdG9yID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDUsIDUpO1xuICAgICAgdmFyIHNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCArIDYpO1xuICAgICAgb2Zmc2V0ICs9IDEwO1xuXG4gICAgICBpZiAoeGhlYWRlcikge1xuICAgICAgICAvLyBXZSBza2lwIHRoZSBleHRlbmRlZCBoZWFkZXIgYW5kIGRvbid0IG9mZmVyIHN1cHBvcnQgZm9yIGl0IHJpZ2h0IG5vdy5cbiAgICAgICAgaWYgKG1ham9yID09PSA0KSB7XG4gICAgICAgICAgdmFyIHhoZWFkZXJzaXplID0gZGF0YS5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChvZmZzZXQpO1xuICAgICAgICAgIG9mZnNldCArPSB4aGVhZGVyc2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeGhlYWRlcnNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpOyAvLyBUaGUgJ0V4dGVuZGVkIGhlYWRlciBzaXplJywgY3VycmVudGx5IDYgb3IgMTAgYnl0ZXMsIGV4Y2x1ZGVzIGl0c2VsZi5cblxuICAgICAgICAgIG9mZnNldCArPSB4aGVhZGVyc2l6ZSArIDQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlkMyA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiSUQzXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiAnMi4nICsgbWFqb3IgKyAnLicgKyByZXZpc2lvbixcbiAgICAgICAgXCJtYWpvclwiOiBtYWpvcixcbiAgICAgICAgXCJyZXZpc2lvblwiOiByZXZpc2lvbixcbiAgICAgICAgXCJmbGFnc1wiOiB7XG4gICAgICAgICAgXCJ1bnN5bmNocm9uaXNhdGlvblwiOiB1bnN5bmNoLFxuICAgICAgICAgIFwiZXh0ZW5kZWRfaGVhZGVyXCI6IHhoZWFkZXIsXG4gICAgICAgICAgXCJleHBlcmltZW50YWxfaW5kaWNhdG9yXCI6IHhpbmRpY2F0b3IsXG4gICAgICAgICAgLy8gVE9ETzogZm9vdGVyX3ByZXNlbnRcbiAgICAgICAgICBcImZvb3Rlcl9wcmVzZW50XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2l6ZVwiOiBzaXplLFxuICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgIH07XG5cbiAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgIHZhciBleHBhbmRlZFRhZ3MgPSB0aGlzLl9leHBhbmRTaG9ydGN1dFRhZ3ModGFncyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRFbmQgPSBzaXplICsgMTBcbiAgICAgIC8qaGVhZGVyIHNpemUqL1xuICAgICAgOyAvLyBXaGVuIHRoaXMgZmxhZyBpcyBzZXQgdGhlIGVudGlyZSB0YWcgbmVlZHMgdG8gYmUgdW4tdW5zeW5jaHJvbmlzZWRcbiAgICAgIC8vIGJlZm9yZSBwYXJzaW5nIGVhY2ggaW5kaXZpZHVhbCBmcmFtZS4gSW5kaXZpZHVhbCBmcmFtZSBzaXplcyBtaWdodCBub3RcbiAgICAgIC8vIHRha2UgdW5zeW5jaHJvbmlzYXRpb24gaW50byBjb25zaWRlcmF0aW9uIHdoZW4gaXQncyBzZXQgb24gdGhlIHRhZ1xuICAgICAgLy8gaGVhZGVyLlxuXG4gICAgICBpZiAoaWQzLmZsYWdzLnVuc3luY2hyb25pc2F0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBJRDN2MkZyYW1lUmVhZGVyLmdldFVuc3luY0ZpbGVSZWFkZXIoZGF0YSwgb2Zmc2V0LCBzaXplKTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgb2Zmc2V0RW5kID0gZGF0YS5nZXRTaXplKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmcmFtZXMgPSBJRDN2MkZyYW1lUmVhZGVyLnJlYWRGcmFtZXMob2Zmc2V0LCBvZmZzZXRFbmQsIGRhdGEsIGlkMywgZXhwYW5kZWRUYWdzKTsgLy8gY3JlYXRlIHNob3J0Y3V0cyBmb3IgbW9zdCBjb21tb24gZGF0YS5cblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBTSE9SVENVVFMpIHtcbiAgICAgICAgaWYgKFNIT1JUQ1VUUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHZhciBmcmFtZURhdGEgPSB0aGlzLl9nZXRGcmFtZURhdGEoZnJhbWVzLCBTSE9SVENVVFNbbmFtZV0pO1xuXG4gICAgICAgICAgaWYgKGZyYW1lRGF0YSkge1xuICAgICAgICAgICAgaWQzLnRhZ3NbbmFtZV0gPSBmcmFtZURhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGZyYW1lIGluIGZyYW1lcykge1xuICAgICAgICBpZiAoZnJhbWVzLmhhc093blByb3BlcnR5KGZyYW1lKSkge1xuICAgICAgICAgIGlkMy50YWdzW2ZyYW1lXSA9IGZyYW1lc1tmcmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnJhbWVEYXRhKGZyYW1lcywgaWRzKSB7XG4gICAgICB2YXIgZnJhbWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBpZDsgaWQgPSBpZHNbaV07IGkrKykge1xuICAgICAgICBpZiAoaWQgaW4gZnJhbWVzKSB7XG4gICAgICAgICAgaWYgKGZyYW1lc1tpZF0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZXNbaWRdWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lc1tpZF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZyYW1lLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiBTSE9SVENVVFM7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gSUQzIGhlYWRlclxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IElEM19IRUFERVJfU0laRVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHZhciBpZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCB0YWdJZGVudGlmaWVyLnNsaWNlKDAsIDMpKTtcbiAgICAgIHJldHVybiBpZCA9PT0gJ0lEMyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElEM3YyVGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG5cbnZhciBTSE9SVENVVFMgPSB7XG4gIFwidGl0bGVcIjogW1wiVElUMlwiLCBcIlRUMlwiXSxcbiAgXCJhcnRpc3RcIjogW1wiVFBFMVwiLCBcIlRQMVwiXSxcbiAgXCJhbGJ1bVwiOiBbXCJUQUxCXCIsIFwiVEFMXCJdLFxuICBcInllYXJcIjogW1wiVFlFUlwiLCBcIlRZRVwiXSxcbiAgXCJjb21tZW50XCI6IFtcIkNPTU1cIiwgXCJDT01cIl0sXG4gIFwidHJhY2tcIjogW1wiVFJDS1wiLCBcIlRSS1wiXSxcbiAgXCJnZW5yZVwiOiBbXCJUQ09OXCIsIFwiVENPXCJdLFxuICBcInBpY3R1cmVcIjogW1wiQVBJQ1wiLCBcIlBJQ1wiXSxcbiAgXCJseXJpY3NcIjogW1wiVVNMVFwiLCBcIlVMVFwiXVxufTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjJUYWdSZWFkZXI7XG5cbn0se1wiLi9JRDN2MkZyYW1lUmVhZGVyXCI6OCxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIFN1cHBvcnQgZm9yIGlUdW5lcy1zdHlsZSBtNGEgdGFnc1xuICogU2VlOlxuICogICBodHRwOi8vYXRvbWljcGFyc2xleS5zb3VyY2Vmb3JnZS5uZXQvbXBlZy00ZmlsZXMuaHRtbFxuICogICBodHRwOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9tYWMvbGlicmFyeS9kb2N1bWVudGF0aW9uL1F1aWNrVGltZS9RVEZGL01ldGFkYXRhL01ldGFkYXRhLmh0bWxcbiAqIEF1dGhvcmVkIGJ5IEpvc2h1YSBLaWZlciA8am9zaHVhLmtpZmVyIGdtYWlsLmNvbT5cbiAqIFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgTVA0VGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKE1QNFRhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBNUDRUYWdSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1QNFRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1QNFRhZ1JlYWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTVA0VGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICAvLyBNUDQgbWV0YWRhdGEgaXNuJ3QgbG9jYXRlZCBpbiBhIHNwZWNpZmljIGxvY2F0aW9uIG9mIHRoZSBmaWxlLiBSb3VnaGx5XG4gICAgICAvLyBzcGVha2luZywgaXQncyBjb21wb3NlZCBvZiBibG9ja3MgY2hhaW5lZCB0b2dldGhlciBsaWtlIGEgbGlua2VkIGxpc3QuXG4gICAgICAvLyBUaGVzZSBibG9ja3MgYXJlIGNhbGxlZCBhdG9tcyAob3IgYm94ZXMpLlxuICAgICAgLy8gRWFjaCBhdG9tIG9mIHRoZSBsaXN0IGNhbiBoYXZlIGl0cyBvd24gY2hpbGQgbGlua2VkIGxpc3QuIEF0b21zIGluIHRoaXNcbiAgICAgIC8vIHNpdHVhdGlvbiBkbyBub3QgcG9zc2VzcyBhbnkgZGF0YSBhbmQgYXJlIGNhbGxlZCBcImNvbnRhaW5lclwiIGFzIHRoZXkgb25seVxuICAgICAgLy8gY29udGFpbiBvdGhlciBhdG9tcy5cbiAgICAgIC8vIE90aGVyIGF0b21zIHJlcHJlc2VudCBhIHBhcnRpY3VsYXIgc2V0IG9mIGRhdGEsIGxpa2UgYXVkaW8sIHZpZGVvIG9yXG4gICAgICAvLyBtZXRhZGF0YS4gSW4gb3JkZXIgdG8gZmluZCBhbmQgbG9hZCBhbGwgdGhlIGludGVyZXN0aW5nIGF0b21zIHdlIG5lZWRcbiAgICAgIC8vIHRvIHRyYXZlcnNlIHRoZSBlbnRpcmUgbGlua2VkIGxpc3Qgb2YgYXRvbXMgYW5kIG9ubHkgbG9hZCB0aGUgb25lc1xuICAgICAgLy8gYXNzb2NpYXRlZCB3aXRoIG1ldGFkYXRhLlxuICAgICAgLy8gVGhlIG1ldGFkYXRhIGF0b21zIGNhbiBiZSBmaW5kIHVuZGVyIHRoZSBcIm1vb3YudWR0YS5tZXRhLmlsc3RcIiBoaWVyYXJjaHkuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIExvYWQgdGhlIGhlYWRlciBvZiB0aGUgZmlyc3QgYXRvbVxuXG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFswLCAxNl0sIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCAwLCBcIlwiLCBjYWxsYmFja3MpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9sb2FkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIHBhcmVudEF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKSB7XG4gICAgICBpZiAob2Zmc2V0ID49IG1lZGlhRmlsZVJlYWRlci5nZXRTaXplKCkpIHtcbiAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gdGhpczsgLy8gOCBpcyB0aGUgc2l6ZSBvZiB0aGUgYXRvbVNpemUgYW5kIGF0b21OYW1lIGZpZWxkcy5cbiAgICAgIC8vIFdoZW4gcmVhZGluZyB0aGUgY3VycmVudCBibG9jayB3ZSBhbHdheXMgcmVhZCA4IG1vcmUgYnl0ZXMgaW4gb3JkZXJcbiAgICAgIC8vIHRvIGFsc28gcmVhZCB0aGUgaGVhZGVyIG9mIHRoZSBuZXh0IGJsb2NrLlxuXG4gICAgICB2YXIgYXRvbVNpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChhdG9tU2l6ZSA9PSAwIHx8IGlzTmFOKGF0b21TaXplKSkge1xuICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0b21OYW1lID0gbWVkaWFGaWxlUmVhZGVyLmdldFN0cmluZ0F0KG9mZnNldCArIDQsIDQpOyAvLyBjb25zb2xlLmxvZyhwYXJlbnRBdG9tRnVsbE5hbWUsIGF0b21OYW1lLCBhdG9tU2l6ZSk7XG4gICAgICAvLyBDb250YWluZXIgYXRvbXMgKG5vIGFjdHVhbCBkYXRhKVxuXG4gICAgICBpZiAodGhpcy5faXNDb250YWluZXJBdG9tKGF0b21OYW1lKSkge1xuICAgICAgICBpZiAoYXRvbU5hbWUgPT0gXCJtZXRhXCIpIHtcbiAgICAgICAgICAvLyBUaGUgXCJtZXRhXCIgYXRvbSBicmVha3MgY29udmVudGlvbiBhbmQgaXMgYSBjb250YWluZXIgd2l0aCBkYXRhLlxuICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBuZXh0X2l0ZW1faWQgKHVpbnQzMilcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdG9tRnVsbE5hbWUgPSAocGFyZW50QXRvbUZ1bGxOYW1lID8gcGFyZW50QXRvbUZ1bGxOYW1lICsgXCIuXCIgOiBcIlwiKSArIGF0b21OYW1lO1xuXG4gICAgICAgIGlmIChhdG9tRnVsbE5hbWUgPT09IFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiKSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0LCBvZmZzZXQgKyBhdG9tU2l6ZV0sIGNhbGxiYWNrcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgOCwgb2Zmc2V0ICsgOCArIDhdLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyA4LCBhdG9tRnVsbE5hbWUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgYXRvbVNpemUsIG9mZnNldCArIGF0b21TaXplICsgOF0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvYWRBdG9tKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0ICsgYXRvbVNpemUsIHBhcmVudEF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaXNDb250YWluZXJBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpIHtcbiAgICAgIHJldHVybiBbXCJtb292XCIsIFwidWR0YVwiLCBcIm1ldGFcIiwgXCJpbHN0XCJdLmluZGV4T2YoYXRvbU5hbWUpID49IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jYW5SZWFkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FuUmVhZEF0b20oYXRvbU5hbWUpIHtcbiAgICAgIHJldHVybiBhdG9tTmFtZSAhPT0gXCItLS0tXCI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzVG9SZWFkKSB7XG4gICAgICB2YXIgdGFncyA9IHt9O1xuICAgICAgdGFnc1RvUmVhZCA9IHRoaXMuX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzVG9SZWFkKTtcblxuICAgICAgdGhpcy5fcmVhZEF0b20odGFncywgZGF0YSwgMCwgZGF0YS5nZXRTaXplKCksIHRhZ3NUb1JlYWQpOyAvLyBjcmVhdGUgc2hvcnRjdXRzIGZvciBtb3N0IGNvbW1vbiBkYXRhLlxuXG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gU0hPUlRDVVRTKSB7XG4gICAgICAgIGlmIChTSE9SVENVVFMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICB2YXIgdGFnID0gdGFnc1tTSE9SVENVVFNbbmFtZV1dO1xuXG4gICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwidHJhY2tcIikge1xuICAgICAgICAgICAgICB0YWdzW25hbWVdID0gdGFnLmRhdGEudHJhY2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YWdzW25hbWVdID0gdGFnLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwidHlwZVwiOiBcIk1QNFwiLFxuICAgICAgICBcImZ0eXBcIjogZGF0YS5nZXRTdHJpbmdBdCg4LCA0KSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGRhdGEuZ2V0TG9uZ0F0KDEyLCB0cnVlKSxcbiAgICAgICAgXCJ0YWdzXCI6IHRhZ3NcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEF0b20odGFncywgZGF0YSwgb2Zmc2V0LCBsZW5ndGgsIHRhZ3NUb1JlYWQsIHBhcmVudEF0b21GdWxsTmFtZSwgaW5kZW50KSB7XG4gICAgICBpbmRlbnQgPSBpbmRlbnQgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBpbmRlbnQgKyBcIiAgXCI7XG4gICAgICB2YXIgc2VlayA9IG9mZnNldDtcblxuICAgICAgd2hpbGUgKHNlZWsgPCBvZmZzZXQgKyBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGF0b21TaXplID0gZGF0YS5nZXRMb25nQXQoc2VlaywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGF0b21TaXplID09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXRvbU5hbWUgPSBkYXRhLmdldFN0cmluZ0F0KHNlZWsgKyA0LCA0KTsgLy8gY29uc29sZS5sb2coc2VlaywgcGFyZW50QXRvbUZ1bGxOYW1lLCBhdG9tTmFtZSwgYXRvbVNpemUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpKSB7XG4gICAgICAgICAgaWYgKGF0b21OYW1lID09IFwibWV0YVwiKSB7XG4gICAgICAgICAgICBzZWVrICs9IDQ7IC8vIG5leHRfaXRlbV9pZCAodWludDMyKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBhdG9tRnVsbE5hbWUgPSAocGFyZW50QXRvbUZ1bGxOYW1lID8gcGFyZW50QXRvbUZ1bGxOYW1lICsgXCIuXCIgOiBcIlwiKSArIGF0b21OYW1lO1xuXG4gICAgICAgICAgdGhpcy5fcmVhZEF0b20odGFncywgZGF0YSwgc2VlayArIDgsIGF0b21TaXplIC0gOCwgdGFnc1RvUmVhZCwgYXRvbUZ1bGxOYW1lLCBpbmRlbnQpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFZhbHVlIGF0b21zXG5cblxuICAgICAgICBpZiAoKCF0YWdzVG9SZWFkIHx8IHRhZ3NUb1JlYWQuaW5kZXhPZihhdG9tTmFtZSkgPj0gMCkgJiYgcGFyZW50QXRvbUZ1bGxOYW1lID09PSBcIm1vb3YudWR0YS5tZXRhLmlsc3RcIiAmJiB0aGlzLl9jYW5SZWFkQXRvbShhdG9tTmFtZSkpIHtcbiAgICAgICAgICB0YWdzW2F0b21OYW1lXSA9IHRoaXMuX3JlYWRNZXRhZGF0YUF0b20oZGF0YSwgc2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWVrICs9IGF0b21TaXplO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZE1ldGFkYXRhQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZE1ldGFkYXRhQXRvbShkYXRhLCBvZmZzZXQpIHtcbiAgICAgIC8vIDE2OiBuYW1lICsgc2l6ZSArIFwiZGF0YVwiICsgc2l6ZSAoNCBieXRlcyBlYWNoKVxuICAgICAgdmFyIE1FVEFEQVRBX0hFQURFUiA9IDE2O1xuICAgICAgdmFyIGF0b21TaXplID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgICAgIHZhciBhdG9tTmFtZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgNCwgNCk7XG4gICAgICB2YXIga2xhc3MgPSBkYXRhLmdldEludGVnZXIyNEF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDEsIHRydWUpO1xuICAgICAgdmFyIHR5cGUgPSBUWVBFU1trbGFzc107XG4gICAgICB2YXIgYXRvbURhdGE7XG5cbiAgICAgIGlmIChhdG9tTmFtZSA9PSBcInRya25cIikge1xuICAgICAgICBhdG9tRGF0YSA9IHtcbiAgICAgICAgICBcInRyYWNrXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDExKSxcbiAgICAgICAgICBcInRvdGFsXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDEzKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChhdG9tTmFtZSA9PSBcImRpc2tcIikge1xuICAgICAgICBhdG9tRGF0YSA9IHtcbiAgICAgICAgICBcImRpc2tcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTEpLFxuICAgICAgICAgIFwidG90YWxcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTMpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyA0OiBhdG9tIHZlcnNpb24gKDEgYnl0ZSkgKyBhdG9tIGZsYWdzICgzIGJ5dGVzKVxuICAgICAgICAvLyA0OiBOVUxMICh1c3VhbGx5IGxvY2FsZSBpbmRpY2F0b3IpXG4gICAgICAgIHZhciBhdG9tSGVhZGVyID0gTUVUQURBVEFfSEVBREVSICsgNCArIDQ7XG4gICAgICAgIHZhciBkYXRhU3RhcnQgPSBvZmZzZXQgKyBhdG9tSGVhZGVyO1xuICAgICAgICB2YXIgZGF0YUxlbmd0aCA9IGF0b21TaXplIC0gYXRvbUhlYWRlcjtcbiAgICAgICAgdmFyIGF0b21EYXRhOyAvLyBXb3JrYXJvdW5kIGZvciBjb3ZlcnMgYmVpbmcgcGFyc2VkIGFzICd1aW50OCcgdHlwZSBkZXNwaXRlIGJlaW5nIGFuICdjb3ZyJyBhdG9tXG5cbiAgICAgICAgaWYgKGF0b21OYW1lID09PSAnY292cicgJiYgdHlwZSA9PT0gJ3VpbnQ4Jykge1xuICAgICAgICAgIHR5cGUgPSAnanBlZyc7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQoZGF0YVN0YXJ0LCBkYXRhTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJ1aW50OFwiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSBkYXRhLmdldFNob3J0QXQoZGF0YVN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJpbnRcIjpcbiAgICAgICAgICBjYXNlIFwidWludFwiOlxuICAgICAgICAgICAgLy8gVGhvdWdoIHRoZSBRdWlja1RpbWUgc3BlYyBkb2Vzbid0IHN0YXRlIGl0LCB0aGVyZSBhcmUgNjQtYml0IHZhbHVlc1xuICAgICAgICAgICAgLy8gc3VjaCBhcyBwbElEIChQbGF5bGlzdC9Db2xsZWN0aW9uIElEKS4gV2l0aCBpdHMgc2luZ2xlIDY0LWJpdCBmbG9hdGluZ1xuICAgICAgICAgICAgLy8gcG9pbnQgbnVtYmVyIHR5cGUsIHRoZXNlIGFyZSBoYXJkIHRvIHBhcnNlIGFuZCBwYXNzIGluIEphdmFTY3JpcHQuXG4gICAgICAgICAgICAvLyBUaGUgaGlnaCB3b3JkIG9mIHBsSUQgc2VlbXMgdG8gYWx3YXlzIGJlIHplcm8sIHNvLCBhcyB0aGlzIGlzIHRoZVxuICAgICAgICAgICAgLy8gb25seSBjdXJyZW50IDY0LWJpdCBhdG9tIGhhbmRsZWQsIGl0IGlzIHBhcnNlZCBmcm9tIGl0cyAzMi1iaXRcbiAgICAgICAgICAgIC8vIGxvdyB3b3JkIGFzIGFuIHVuc2lnbmVkIGxvbmcuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGludFJlYWRlciA9IHR5cGUgPT0gJ2ludCcgPyBkYXRhTGVuZ3RoID09IDEgPyBkYXRhLmdldFNCeXRlQXQgOiBkYXRhTGVuZ3RoID09IDIgPyBkYXRhLmdldFNTaG9ydEF0IDogZGF0YUxlbmd0aCA9PSA0ID8gZGF0YS5nZXRTTG9uZ0F0IDogZGF0YS5nZXRMb25nQXQgOiBkYXRhTGVuZ3RoID09IDEgPyBkYXRhLmdldEJ5dGVBdCA6IGRhdGFMZW5ndGggPT0gMiA/IGRhdGEuZ2V0U2hvcnRBdCA6IGRhdGEuZ2V0TG9uZ0F0OyAvLyAkRmxvd0ZpeE1lIC0gZ2V0Qnl0ZUF0IGRvZXNuJ3QgcmVjZWl2ZSBhIHNlY29uZCBhcmd1bWVudFxuXG4gICAgICAgICAgICBhdG9tRGF0YSA9IGludFJlYWRlci5jYWxsKGRhdGEsIGRhdGFTdGFydCArIChkYXRhTGVuZ3RoID09IDggPyA0IDogMCksIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwianBlZ1wiOlxuICAgICAgICAgIGNhc2UgXCJwbmdcIjpcbiAgICAgICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgICAgICBcImZvcm1hdFwiOiBcImltYWdlL1wiICsgdHlwZSxcbiAgICAgICAgICAgICAgXCJkYXRhXCI6IGRhdGEuZ2V0Qnl0ZXNBdChkYXRhU3RhcnQsIGRhdGFMZW5ndGgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGF0b21OYW1lLFxuICAgICAgICBzaXplOiBhdG9tU2l6ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IEFUT01fREVTQ1JJUFRJT05TW2F0b21OYW1lXSB8fCBcIlVua25vd25cIixcbiAgICAgICAgZGF0YTogYXRvbURhdGFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0Y3V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydGN1dHMoKSB7XG4gICAgICByZXR1cm4gU0hPUlRDVVRTO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIC8vIFRoZSB0YWcgaWRlbnRpZmllciBpcyBsb2NhdGVkIGluIFs0LCA4XSBidXQgc2luY2Ugd2UnbGwgbmVlZCB0byByZWFkZXJcbiAgICAgIC8vIHRoZSBoZWFkZXIgb2YgdGhlIGZpcnN0IGJsb2NrIGFueXdheSwgd2UgbG9hZCBpdCBpbnN0ZWFkIHRvIGF2b2lkXG4gICAgICAvLyBtYWtpbmcgdHdvIHJlcXVlc3RzLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IDE2XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoNCwgOCkpO1xuICAgICAgcmV0dXJuIGlkID09PSBcImZ0eXBcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTVA0VGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG4vKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvY29udGVudC9kb2N1bWVudGF0aW9uL1F1aWNrVGltZS9RVEZGL01ldGFkYXRhL01ldGFkYXRhLmh0bWwjLy9hcHBsZV9yZWYvZG9jL3VpZC9UUDQwMDAwOTM5LUNIMS1TVzM1XG4qL1xuXG5cbnZhciBUWVBFUyA9IHtcbiAgXCIwXCI6IFwidWludDhcIixcbiAgXCIxXCI6IFwidGV4dFwiLFxuICBcIjEzXCI6IFwianBlZ1wiLFxuICBcIjE0XCI6IFwicG5nXCIsXG4gIFwiMjFcIjogXCJpbnRcIixcbiAgXCIyMlwiOiBcInVpbnRcIlxufTtcbnZhciBBVE9NX0RFU0NSSVBUSU9OUyA9IHtcbiAgXCLCqWFsYlwiOiBcIkFsYnVtXCIsXG4gIFwiwqlBUlRcIjogXCJBcnRpc3RcIixcbiAgXCJhQVJUXCI6IFwiQWxidW0gQXJ0aXN0XCIsXG4gIFwiwqlkYXlcIjogXCJSZWxlYXNlIERhdGVcIixcbiAgXCLCqW5hbVwiOiBcIlRpdGxlXCIsXG4gIFwiwqlnZW5cIjogXCJHZW5yZVwiLFxuICBcImducmVcIjogXCJHZW5yZVwiLFxuICBcInRya25cIjogXCJUcmFjayBOdW1iZXJcIixcbiAgXCLCqXdydFwiOiBcIkNvbXBvc2VyXCIsXG4gIFwiwql0b29cIjogXCJFbmNvZGluZyBUb29sXCIsXG4gIFwiwqllbmNcIjogXCJFbmNvZGVkIEJ5XCIsXG4gIFwiY3BydFwiOiBcIkNvcHlyaWdodFwiLFxuICBcImNvdnJcIjogXCJDb3ZlciBBcnRcIixcbiAgXCLCqWdycFwiOiBcIkdyb3VwaW5nXCIsXG4gIFwia2V5d1wiOiBcIktleXdvcmRzXCIsXG4gIFwiwqlseXJcIjogXCJMeXJpY3NcIixcbiAgXCLCqWNtdFwiOiBcIkNvbW1lbnRcIixcbiAgXCJ0bXBvXCI6IFwiVGVtcG9cIixcbiAgXCJjcGlsXCI6IFwiQ29tcGlsYXRpb25cIixcbiAgXCJkaXNrXCI6IFwiRGlzYyBOdW1iZXJcIixcbiAgXCJ0dnNoXCI6IFwiVFYgU2hvdyBOYW1lXCIsXG4gIFwidHZlblwiOiBcIlRWIEVwaXNvZGUgSURcIixcbiAgXCJ0dnNuXCI6IFwiVFYgU2Vhc29uXCIsXG4gIFwidHZlc1wiOiBcIlRWIEVwaXNvZGVcIixcbiAgXCJ0dm5uXCI6IFwiVFYgTmV0d29ya1wiLFxuICBcImRlc2NcIjogXCJEZXNjcmlwdGlvblwiLFxuICBcImxkZXNcIjogXCJMb25nIERlc2NyaXB0aW9uXCIsXG4gIFwic29ubVwiOiBcIlNvcnQgTmFtZVwiLFxuICBcInNvYXJcIjogXCJTb3J0IEFydGlzdFwiLFxuICBcInNvYWFcIjogXCJTb3J0IEFsYnVtXCIsXG4gIFwic29jb1wiOiBcIlNvcnQgQ29tcG9zZXJcIixcbiAgXCJzb3NuXCI6IFwiU29ydCBTaG93XCIsXG4gIFwicHVyZFwiOiBcIlB1cmNoYXNlIERhdGVcIixcbiAgXCJwY3N0XCI6IFwiUG9kY2FzdFwiLFxuICBcInB1cmxcIjogXCJQb2RjYXN0IFVSTFwiLFxuICBcImNhdGdcIjogXCJDYXRlZ29yeVwiLFxuICBcImhkdmRcIjogXCJIRCBWaWRlb1wiLFxuICBcInN0aWtcIjogXCJNZWRpYSBUeXBlXCIsXG4gIFwicnRuZ1wiOiBcIkNvbnRlbnQgUmF0aW5nXCIsXG4gIFwicGdhcFwiOiBcIkdhcGxlc3MgUGxheWJhY2tcIixcbiAgXCJhcElEXCI6IFwiUHVyY2hhc2UgQWNjb3VudFwiLFxuICBcInNmSURcIjogXCJDb3VudHJ5IENvZGVcIixcbiAgXCJhdElEXCI6IFwiQXJ0aXN0IElEXCIsXG4gIFwiY25JRFwiOiBcIkNhdGFsb2cgSURcIixcbiAgXCJwbElEXCI6IFwiQ29sbGVjdGlvbiBJRFwiLFxuICBcImdlSURcIjogXCJHZW5yZSBJRFwiLFxuICBcInhpZCBcIjogXCJWZW5kb3IgSW5mb3JtYXRpb25cIixcbiAgXCJmbHZyXCI6IFwiQ29kZWMgRmxhdm9yXCJcbn07XG52YXIgVU5TVVBQT1JURURfQVRPTVMgPSB7XG4gIFwiLS0tLVwiOiAxXG59O1xudmFyIFNIT1JUQ1VUUyA9IHtcbiAgXCJ0aXRsZVwiOiBcIsKpbmFtXCIsXG4gIFwiYXJ0aXN0XCI6IFwiwqlBUlRcIixcbiAgXCJhbGJ1bVwiOiBcIsKpYWxiXCIsXG4gIFwieWVhclwiOiBcIsKpZGF5XCIsXG4gIFwiY29tbWVudFwiOiBcIsKpY210XCIsXG4gIFwidHJhY2tcIjogXCJ0cmtuXCIsXG4gIFwiZ2VucmVcIjogXCLCqWdlblwiLFxuICBcInBpY3R1cmVcIjogXCJjb3ZyXCIsXG4gIFwibHlyaWNzXCI6IFwiwqlseXJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gTVA0VGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFN0cmluZ1V0aWxzID0gcmVxdWlyZSgnLi9TdHJpbmdVdGlscycpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFGaWxlUmVhZGVyKHBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFGaWxlUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pc0luaXRpYWxpemVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc2l6ZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NpemUgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBEZWNpZGVzIGlmIHRoaXMgbWVkaWEgZmlsZSByZWFkZXIgaXMgYWJsZSB0byByZWFkIHRoZSBnaXZlbiBmaWxlLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNZWRpYUZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgb3RoZXIgZnVuY3Rpb24uXG4gICAgICogTG9hZHMgdGhlIG5lY2Vzc2FyeSBpbml0aWFsIGluZm9ybWF0aW9uIGZyb20gdGhlIGZpbGUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5pdCh7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGluaXQgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIHRoZSByYW5nZSB0byBsb2FkLlxuICAgICAqICAgICAgICBFeDogWzAsIDddIGxvYWQgYnl0ZXMgMCB0byA3IGluY2x1c2l2ZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgbG9hZFJhbmdlIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBzaXplIG9mIHRoZSBmaWxlIGluIGJ5dGVzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluaXQoKSBtdXN0IGJlIGNhbGxlZCBmaXJzdC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgZ2V0Qnl0ZUF0IGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlc0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgIHZhciBieXRlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNCaXRTZXRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JpdFNldEF0KG9mZnNldCwgYml0KSB7XG4gICAgICB2YXIgaUJ5dGUgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgcmV0dXJuIChpQnl0ZSAmIDEgPDwgYml0KSAhPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTQnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgaUJ5dGUgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuXG4gICAgICBpZiAoaUJ5dGUgPiAxMjcpIHtcbiAgICAgICAgcmV0dXJuIGlCeXRlIC0gMjU2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlCeXRlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlTaG9ydCA9IGlzQmlnRW5kaWFuID8gKHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCkgPDwgOCkgKyB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSA6ICh0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSA8PCA4KSArIHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIGlmIChpU2hvcnQgPCAwKSB7XG4gICAgICAgIGlTaG9ydCArPSA2NTUzNjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlTaG9ydDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U1Nob3J0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U1Nob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlVU2hvcnQgPSB0aGlzLmdldFNob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbik7XG5cbiAgICAgIGlmIChpVVNob3J0ID4gMzI3NjcpIHtcbiAgICAgICAgcmV0dXJuIGlVU2hvcnQgLSA2NTUzNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpVVNob3J0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb25nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9uZ0F0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpQnl0ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpLFxuICAgICAgICAgIGlCeXRlMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpLFxuICAgICAgICAgIGlCeXRlMyA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDIpLFxuICAgICAgICAgIGlCeXRlNCA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDMpO1xuICAgICAgdmFyIGlMb25nID0gaXNCaWdFbmRpYW4gPyAoKChpQnl0ZTEgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTMgPDwgOCkgKyBpQnl0ZTQgOiAoKChpQnl0ZTQgPDwgOCkgKyBpQnl0ZTMgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTE7XG5cbiAgICAgIGlmIChpTG9uZyA8IDApIHtcbiAgICAgICAgaUxvbmcgKz0gNDI5NDk2NzI5NjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlMb25nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTTG9uZ0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlVTG9uZyA9IHRoaXMuZ2V0TG9uZ0F0KG9mZnNldCwgaXNCaWdFbmRpYW4pO1xuXG4gICAgICBpZiAoaVVMb25nID4gMjE0NzQ4MzY0Nykge1xuICAgICAgICByZXR1cm4gaVVMb25nIC0gNDI5NDk2NzI5NjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpVUxvbmc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEludGVnZXIyNEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEludGVnZXIyNEF0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpQnl0ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpLFxuICAgICAgICAgIGlCeXRlMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpLFxuICAgICAgICAgIGlCeXRlMyA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDIpO1xuICAgICAgdmFyIGlJbnRlZ2VyID0gaXNCaWdFbmRpYW4gPyAoKGlCeXRlMSA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMyA6ICgoaUJ5dGUzIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUxO1xuXG4gICAgICBpZiAoaUludGVnZXIgPCAwKSB7XG4gICAgICAgIGlJbnRlZ2VyICs9IDE2Nzc3MjE2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaUludGVnZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0cmluZ0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0cmluZ0F0KG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQsIGogPSAwOyBpIDwgb2Zmc2V0ICsgbGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgICBzdHJpbmdbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZ2V0Qnl0ZUF0KGkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cmluZy5qb2luKFwiXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHJpbmdXaXRoQ2hhcnNldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBsZW5ndGgsIGNoYXJzZXQpIHtcbiAgICAgIHZhciBieXRlcyA9IHRoaXMuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCk7XG4gICAgICB2YXIgc3RyaW5nO1xuXG4gICAgICBzd2l0Y2ggKChjaGFyc2V0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJ1dGYtMTZcIjpcbiAgICAgICAgY2FzZSBcInV0Zi0xNmxlXCI6XG4gICAgICAgIGNhc2UgXCJ1dGYtMTZiZVwiOlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWRVVEYxNlN0cmluZyhieXRlcywgY2hhcnNldCA9PT0gXCJ1dGYtMTZiZVwiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidXRmLThcIjpcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmdVdGlscy5yZWFkVVRGOFN0cmluZyhieXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoYnl0ZXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDaGFyQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hhckF0KG9mZnNldCkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBJRDN2MiB0YWcvZnJhbWUgc2l6ZSBpcyBlbmNvZGVkIHdpdGggZm91ciBieXRlcyB3aGVyZSB0aGUgbW9zdFxuICAgICAqIHNpZ25pZmljYW50IGJpdCAoYml0IDcpIGlzIHNldCB0byB6ZXJvIGluIGV2ZXJ5IGJ5dGUsIG1ha2luZyBhIHRvdGFsIG9mIDI4XG4gICAgICogYml0cy4gVGhlIHplcm9lZCBiaXRzIGFyZSBpZ25vcmVkLCBzbyBhIDI1NyBieXRlcyBsb25nIHRhZyBpcyByZXByZXNlbnRlZFxuICAgICAqIGFzICQwMCAwMCAwMiAwMS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN5bmNoc2FmZUludGVnZXIzMkF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCkge1xuICAgICAgdmFyIHNpemUxID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICAgIHZhciBzaXplMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpO1xuICAgICAgdmFyIHNpemUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMik7XG4gICAgICB2YXIgc2l6ZTQgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAzKTsgLy8gMHg3ZiA9IDBiMDExMTExMTFcblxuICAgICAgdmFyIHNpemUgPSBzaXplNCAmIDB4N2YgfCAoc2l6ZTMgJiAweDdmKSA8PCA3IHwgKHNpemUyICYgMHg3ZikgPDwgMTQgfCAoc2l6ZTEgJiAweDdmKSA8PCAyMTtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGNhblJlYWRGaWxlIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZWRpYUZpbGVSZWFkZXI7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlUmVhZGVyO1xuXG59LHtcIi4vU3RyaW5nVXRpbHNcIjoxM31dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIE1lZGlhVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFUYWdSZWFkZXIobWVkaWFGaWxlUmVhZGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhVGFnUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9tZWRpYUZpbGVSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9tZWRpYUZpbGVSZWFkZXIgPSBtZWRpYUZpbGVSZWFkZXI7XG4gICAgdGhpcy5fdGFncyA9IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJ5dGUgcmFuZ2UgdGhhdCBuZWVkcyB0byBiZSBsb2FkZWQgYW5kIGZlZCB0b1xuICAgKiBfY2FuUmVhZFRhZ0Zvcm1hdCBpbiBvcmRlciB0byBpZGVudGlmeSBpZiB0aGUgZmlsZSBjb250YWlucyB0YWdcbiAgICogaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgcmVhZC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWVkaWFUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcInNldFRhZ3NUb1JlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFnc1RvUmVhZCh0YWdzKSB7XG4gICAgICB0aGlzLl90YWdzID0gdGFncztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX21lZGlhRmlsZVJlYWRlci5pbml0KHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZERhdGEoc2VsZi5fbWVkaWFGaWxlUmVhZGVyLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgdGFncyA9IHNlbGYuX3BhcnNlRGF0YShzZWxmLl9tZWRpYUZpbGVSZWFkZXIsIHNlbGYuX3RhZ3MpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwYXJzZURhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6IGV4Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBUT0RPOiBkZXN0cm95IG1lZGlhRmlsZVJlYWRlclxuXG5cbiAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh0YWdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0Y3V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydGN1dHMoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIG5lY2Vzc2FyeSBieXRlcyBmcm9tIHRoZSBtZWRpYSBmaWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgX2xvYWREYXRhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgbG9hZGVkIGRhdGEgdG8gcmVhZCB0aGUgbWVkaWEgdGFncy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShtZWRpYUZpbGVSZWFkZXIsIHRhZ3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IF9wYXJzZURhdGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9leHBhbmRTaG9ydGN1dFRhZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzV2l0aFNob3J0Y3V0cykge1xuICAgICAgaWYgKCF0YWdzV2l0aFNob3J0Y3V0cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ3MgPSBbXTtcbiAgICAgIHZhciBzaG9ydGN1dHMgPSB0aGlzLmdldFNob3J0Y3V0cygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgdGFnT3JTaG9ydGN1dDsgdGFnT3JTaG9ydGN1dCA9IHRhZ3NXaXRoU2hvcnRjdXRzW2ldOyBpKyspIHtcbiAgICAgICAgdGFncyA9IHRhZ3MuY29uY2F0KHNob3J0Y3V0c1t0YWdPclNob3J0Y3V0XSB8fCBbdGFnT3JTaG9ydGN1dF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFncztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSB0YWcgaWRlbnRpZmllciAocmVhZCBmcm9tIHRoZSBmaWxlIGJ5dGUgcG9zaXRpb25zIHNwZWZpY2llZCBieVxuICAgICAqIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UpIHRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIGl0IGNhbiByZWFkIHRoZSB0YWdcbiAgICAgKiBmb3JtYXQgb3Igbm90LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50XCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZWRpYVRhZ1JlYWRlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVRhZ1JlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExfV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbnRlcm5hbERlY29kZWRTdHJpbmcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbnRlcm5hbERlY29kZWRTdHJpbmcodmFsdWUsIGJ5dGVzUmVhZENvdW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVybmFsRGVjb2RlZFN0cmluZyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdmFsdWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ5dGVzUmVhZENvdW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsZW5ndGhcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ieXRlc1JlYWRDb3VudCA9IGJ5dGVzUmVhZENvdW50O1xuICAgIHRoaXMubGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEludGVybmFsRGVjb2RlZFN0cmluZywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludGVybmFsRGVjb2RlZFN0cmluZztcbn0oKTtcblxudmFyIFN0cmluZ1V0aWxzID0ge1xuICByZWFkVVRGMTZTdHJpbmc6IGZ1bmN0aW9uIHJlYWRVVEYxNlN0cmluZyhieXRlcywgYmlnRW5kaWFuLCBtYXhCeXRlcykge1xuICAgIHZhciBpeCA9IDA7XG4gICAgdmFyIG9mZnNldDEgPSAxLFxuICAgICAgICBvZmZzZXQyID0gMDtcbiAgICBtYXhCeXRlcyA9IE1hdGgubWluKG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aCwgYnl0ZXMubGVuZ3RoKTtcblxuICAgIGlmIChieXRlc1swXSA9PSAweEZFICYmIGJ5dGVzWzFdID09IDB4RkYpIHtcbiAgICAgIGJpZ0VuZGlhbiA9IHRydWU7XG4gICAgICBpeCA9IDI7XG4gICAgfSBlbHNlIGlmIChieXRlc1swXSA9PSAweEZGICYmIGJ5dGVzWzFdID09IDB4RkUpIHtcbiAgICAgIGJpZ0VuZGlhbiA9IGZhbHNlO1xuICAgICAgaXggPSAyO1xuICAgIH1cblxuICAgIGlmIChiaWdFbmRpYW4pIHtcbiAgICAgIG9mZnNldDEgPSAwO1xuICAgICAgb2Zmc2V0MiA9IDE7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGl4IDwgbWF4Qnl0ZXM7IGorKykge1xuICAgICAgdmFyIGJ5dGUxID0gYnl0ZXNbaXggKyBvZmZzZXQxXTtcbiAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4ICsgb2Zmc2V0Ml07XG4gICAgICB2YXIgd29yZDEgPSAoYnl0ZTEgPDwgOCkgKyBieXRlMjtcbiAgICAgIGl4ICs9IDI7XG5cbiAgICAgIGlmICh3b3JkMSA9PSAweDAwMDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxIDwgMHhEOCB8fCBieXRlMSA+PSAweEUwKSB7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUod29yZDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJ5dGUzID0gYnl0ZXNbaXggKyBvZmZzZXQxXTtcbiAgICAgICAgdmFyIGJ5dGU0ID0gYnl0ZXNbaXggKyBvZmZzZXQyXTtcbiAgICAgICAgdmFyIHdvcmQyID0gKGJ5dGUzIDw8IDgpICsgYnl0ZTQ7XG4gICAgICAgIGl4ICs9IDI7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUod29yZDEsIHdvcmQyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVybmFsRGVjb2RlZFN0cmluZyhhcnIuam9pbihcIlwiKSwgaXgpO1xuICB9LFxuICByZWFkVVRGOFN0cmluZzogZnVuY3Rpb24gcmVhZFVURjhTdHJpbmcoYnl0ZXMsIG1heEJ5dGVzKSB7XG4gICAgdmFyIGl4ID0gMDtcbiAgICBtYXhCeXRlcyA9IE1hdGgubWluKG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aCwgYnl0ZXMubGVuZ3RoKTtcblxuICAgIGlmIChieXRlc1swXSA9PSAweEVGICYmIGJ5dGVzWzFdID09IDB4QkIgJiYgYnl0ZXNbMl0gPT0gMHhCRikge1xuICAgICAgaXggPSAzO1xuICAgIH1cblxuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBpeCA8IG1heEJ5dGVzOyBqKyspIHtcbiAgICAgIHZhciBieXRlMSA9IGJ5dGVzW2l4KytdO1xuXG4gICAgICBpZiAoYnl0ZTEgPT0gMHgwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPCAweDgwKSB7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZTEpO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA+PSAweEMyICYmIGJ5dGUxIDwgMHhFMCkge1xuICAgICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUxICYgMHgxRikgPDwgNikgKyAoYnl0ZTIgJiAweDNGKSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4RTAgJiYgYnl0ZTEgPCAweEYwKSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUxICYgMHhGRikgPDwgMTIpICsgKChieXRlMiAmIDB4M0YpIDw8IDYpICsgKGJ5dGUzICYgMHgzRikpO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA+PSAweEYwICYmIGJ5dGUxIDwgMHhGNSkge1xuICAgICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGJ5dGUzID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBieXRlNCA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgY29kZXBvaW50ID0gKChieXRlMSAmIDB4MDcpIDw8IDE4KSArICgoYnl0ZTIgJiAweDNGKSA8PCAxMikgKyAoKGJ5dGUzICYgMHgzRikgPDwgNikgKyAoYnl0ZTQgJiAweDNGKSAtIDB4MTAwMDA7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGNvZGVwb2ludCA+PiAxMCkgKyAweEQ4MDAsIChjb2RlcG9pbnQgJiAweDNGRikgKyAweERDMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpeCk7XG4gIH0sXG4gIHJlYWROdWxsVGVybWluYXRlZFN0cmluZzogZnVuY3Rpb24gcmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGJ5dGVzLCBtYXhCeXRlcykge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBtYXhCeXRlcyA9IG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4Qnl0ZXM7KSB7XG4gICAgICB2YXIgYnl0ZTEgPSBieXRlc1tpKytdO1xuXG4gICAgICBpZiAoYnl0ZTEgPT0gMHgwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgYXJyW2kgLSAxXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZTEpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpKTtcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVXRpbHM7XG5cbn0se31dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBDaHVua2VkRmlsZURhdGEgPSByZXF1aXJlKCcuL0NodW5rZWRGaWxlRGF0YScpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIENIVU5LX1NJWkUgPSAxMDI0O1xuXG52YXIgWGhyRmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoWGhyRmlsZVJlYWRlciwgX01lZGlhRmlsZVJlYWRlcik7XG5cbiAgZnVuY3Rpb24gWGhyRmlsZVJlYWRlcih1cmwpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWGhyRmlsZVJlYWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihYaHJGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfdXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2ZpbGVEYXRhXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9maWxlRGF0YSA9IG5ldyBDaHVua2VkRmlsZURhdGEoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoWGhyRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiX2luaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoY2FsbGJhY2tzKSB7XG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLmF2b2lkSGVhZFJlcXVlc3RzKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0KGNhbGxiYWNrcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9mZXRjaFNpemVXaXRoSGVhZFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoU2l6ZVdpdGhIZWFkUmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hTaXplV2l0aEhlYWRSZXF1ZXN0KGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkhFQURcIiwgbnVsbCwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgY29udGVudExlbmd0aCA9IHNlbGYuX3BhcnNlQ29udGVudExlbmd0aCh4aHIpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBjb250ZW50TGVuZ3RoO1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDb250ZW50LUxlbmd0aCBub3QgcHJvdmlkZWQgYnkgdGhlIHNlcnZlciwgZmFsbGJhY2sgdG9cbiAgICAgICAgICAgIC8vIEdFVCByZXF1ZXN0cy5cbiAgICAgICAgICAgIHNlbGYuX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0KGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciByYW5nZSA9IHRoaXMuX3JvdW5kUmFuZ2VUb0NodW5rTXVsdGlwbGUoWzAsIDBdKTtcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgcmFuZ2UsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRSYW5nZSA9IHNlbGYuX3BhcnNlQ29udGVudFJhbmdlKHhocik7XG5cbiAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYuX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRSYW5nZS5pbnN0YW5jZUxlbmd0aCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIExhc3QgcmVzb3J0LCBzZXJ2ZXIgaXMgbm90IGFibGUgdG8gdGVsbCB1cyB0aGUgY29udGVudCBsZW5ndGgsXG4gICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmV0Y2ggZW50aXJlIGZpbGUgdGhlbi5cbiAgICAgICAgICAgICAgc2VsZi5fZmV0Y2hFbnRpcmVGaWxlKGNhbGxiYWNrcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9zaXplID0gY29udGVudFJhbmdlLmluc3RhbmNlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSYW5nZSByZXF1ZXN0IG5vdCBzdXBwb3J0ZWQsIHdlIGdvdCB0aGUgZW50aXJlIGZpbGVcbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKDAsIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9mZXRjaEVudGlyZUZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoRW50aXJlRmlsZShjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgbnVsbCwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYuX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpO1xuXG4gICAgICAgICAgc2VsZi5fc2l6ZSA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YSgwLCBkYXRhKTtcblxuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0WGhyUmVzcG9uc2VDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKSB7XG4gICAgICByZXR1cm4geGhyLnJlc3BvbnNlQm9keSB8fCB4aHIucmVzcG9uc2VUZXh0IHx8IFwiXCI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZUNvbnRlbnRMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlQ29udGVudExlbmd0aCh4aHIpIHtcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gdGhpcy5fZ2V0UmVzcG9uc2VIZWFkZXIoeGhyLCBcIkNvbnRlbnQtTGVuZ3RoXCIpO1xuXG4gICAgICBpZiAoY29udGVudExlbmd0aCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvbnRlbnRMZW5ndGgsIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlQ29udGVudFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZUNvbnRlbnRSYW5nZSh4aHIpIHtcbiAgICAgIHZhciBjb250ZW50UmFuZ2UgPSB0aGlzLl9nZXRSZXNwb25zZUhlYWRlcih4aHIsIFwiQ29udGVudC1SYW5nZVwiKTtcblxuICAgICAgaWYgKGNvbnRlbnRSYW5nZSkge1xuICAgICAgICB2YXIgcGFyc2VkQ29udGVudFJhbmdlID0gY29udGVudFJhbmdlLm1hdGNoKC9ieXRlcyAoXFxkKyktKFxcZCspXFwvKD86KFxcZCspfFxcKikvaSk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWRDb250ZW50UmFuZ2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGSVhNRTogVW5rbm93biBDb250ZW50LVJhbmdlIHN5bnRheDogXCIgKyBjb250ZW50UmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaXJzdEJ5dGVQb3NpdGlvbjogcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzFdLCAxMCksXG4gICAgICAgICAgbGFzdEJ5dGVQb3NpdGlvbjogcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzJdLCAxMCksXG4gICAgICAgICAgaW5zdGFuY2VMZW5ndGg6IHBhcnNlZENvbnRlbnRSYW5nZVszXSA/IHBhcnNlSW50KHBhcnNlZENvbnRlbnRSYW5nZVszXSwgMTApIDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fZmlsZURhdGEuaGFzRGF0YVJhbmdlKHJhbmdlWzBdLCBNYXRoLm1pbihzZWxmLl9zaXplLCByYW5nZVsxXSkpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQWx3YXlzIGRvd25sb2FkIGluIG11bHRpcGxlcyBvZiBDSFVOS19TSVpFLiBJZiB3ZSdyZSBnb2luZyB0byBtYWtlIGFcbiAgICAgIC8vIHJlcXVlc3QgbWlnaHQgYXMgd2VsbCBnZXQgYSBjaHVuayB0aGF0IG1ha2VzIHNlbnNlLiBUaGUgYmlnIGNvc3QgaXNcbiAgICAgIC8vIGVzdGFibGlzaGluZyB0aGUgY29ubmVjdGlvbiBzbyBnZXR0aW5nIDEwYnl0ZXMgb3IgMUsgZG9lc24ndCByZWFsbHlcbiAgICAgIC8vIG1ha2UgYSBkaWZmZXJlbmNlLlxuXG5cbiAgICAgIHJhbmdlID0gdGhpcy5fcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShyYW5nZSk7IC8vIFVwcGVyIHJhbmdlIHNob3VsZCBub3QgYmUgZ3JlYXRlciB0aGFuIG1heCBmaWxlIHNpemVcblxuICAgICAgcmFuZ2VbMV0gPSBNYXRoLm1pbihzZWxmLl9zaXplLCByYW5nZVsxXSk7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiR0VUXCIsIHJhbmdlLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKHJhbmdlWzBdLCBkYXRhKTtcblxuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShyYW5nZSkge1xuICAgICAgdmFyIGxlbmd0aCA9IHJhbmdlWzFdIC0gcmFuZ2VbMF0gKyAxO1xuICAgICAgdmFyIG5ld0xlbmd0aCA9IE1hdGguY2VpbChsZW5ndGggLyBDSFVOS19TSVpFKSAqIENIVU5LX1NJWkU7XG4gICAgICByZXR1cm4gW3JhbmdlWzBdLCByYW5nZVswXSArIG5ld0xlbmd0aCAtIDFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbWFrZVhIUlJlcXVlc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VYSFJSZXF1ZXN0KG1ldGhvZCwgcmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHhociA9IHRoaXMuX2NyZWF0ZVhIUk9iamVjdCgpO1xuXG4gICAgICB4aHIub3BlbihtZXRob2QsIHRoaXMuX3VybCk7XG5cbiAgICAgIHZhciBvblhIUkxvYWQgPSBmdW5jdGlvbiBvblhIUkxvYWQoKSB7XG4gICAgICAgIC8vIDIwMCAtIE9LXG4gICAgICAgIC8vIDIwNiAtIFBhcnRpYWwgQ29udGVudFxuICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyIHdpbGwgbm90IGJlIG51bGwgaGVyZVxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoeGhyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInhoclwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IFwiVW5leHBlY3RlZCBIVFRQIHN0YXR1cyBcIiArIHhoci5zdGF0dXMgKyBcIi5cIixcbiAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgeGhyLm9ubG9hZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9IG9uWEhSTG9hZDtcblxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwieGhyXCIsXG4gICAgICAgICAgICAgIFwiaW5mb1wiOiBcIkdlbmVyaWMgWEhSIGVycm9yLCBjaGVjayB4aHIgb2JqZWN0LlwiLFxuICAgICAgICAgICAgICBcInhoclwiOiB4aHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIHhociB3aWxsIG5vdCBiZSBudWxsIGhlcmVcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIG9uWEhSTG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKFhockZpbGVSZWFkZXIuX2NvbmZpZy50aW1lb3V0SW5TZWMpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBYaHJGaWxlUmVhZGVyLl9jb25maWcudGltZW91dEluU2VjICogMTAwMDtcblxuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ4aHJcIixcbiAgICAgICAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIHhoci50aW1lb3V0IHdpbGwgbm90IGJlIG51bGxcbiAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiVGltZW91dCBhZnRlciBcIiArIHhoci50aW1lb3V0IC8gMTAwMCArIFwicy4gVXNlIGpzbWVkaWF0YWdzLkNvbmZpZy5zZXRYaHJUaW1lb3V0IHRvIG92ZXJyaWRlLlwiLFxuICAgICAgICAgICAgICBcInhoclwiOiB4aHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgdGhpcy5fc2V0UmVxdWVzdEhlYWRlcih4aHIsIFwiUmFuZ2VcIiwgXCJieXRlcz1cIiArIHJhbmdlWzBdICsgXCItXCIgKyByYW5nZVsxXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldFJlcXVlc3RIZWFkZXIoeGhyLCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIFwiU2F0LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIik7XG5cbiAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc2V0UmVxdWVzdEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0UmVxdWVzdEhlYWRlcih4aHIsIGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKSB7XG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLmRpc2FsbG93ZWRYaHJIZWFkZXJzLmluZGV4T2YoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSA8IDApIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFzUmVzcG9uc2VIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhc1Jlc3BvbnNlSGVhZGVyKHhociwgaGVhZGVyTmFtZSkge1xuICAgICAgdmFyIGFsbFJlc3BvbnNlSGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcblxuICAgICAgaWYgKCFhbGxSZXNwb25zZUhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVhZGVycyA9IGFsbFJlc3BvbnNlSGVhZGVycy5zcGxpdChcIlxcclxcblwiKTtcbiAgICAgIHZhciBoZWFkZXJOYW1lcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGVhZGVyTmFtZXNbaV0gPSBoZWFkZXJzW2ldLnNwbGl0KFwiOlwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVhZGVyTmFtZXMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpID49IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0UmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1Jlc3BvbnNlSGVhZGVyKHhociwgaGVhZGVyTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgY2hhcmFjdGVyID0gdGhpcy5fZmlsZURhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIHJldHVybiBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSAmIDB4ZmY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc1dlYldvcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNXZWJXb3JrZXIoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jcmVhdGVYSFJPYmplY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZVhIUk9iamVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLl9pc1dlYldvcmtlcigpKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IGlzIG5vdCBhYmxlIHRvIHJlY29nbml6ZSB0aGlzIG1vZHVsZS5cbiAgICAgICAgcmV0dXJuIG5ldyAocmVxdWlyZShcInhocjJcIikuWE1MSHR0cFJlcXVlc3QpKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJYTUxIdHRwUmVxdWVzdCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZmlsZSA9PT0gJ3N0cmluZycgJiYgL15bYS16XSs6XFwvXFwvL2kudGVzdChmaWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q29uZmlnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGlzYWxsb3dlZFhockhlYWRlcnMgPSB0aGlzLl9jb25maWcuZGlzYWxsb3dlZFhockhlYWRlcnM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzYWxsb3dlZFhockhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzYWxsb3dlZFhockhlYWRlcnNbaV0gPSBkaXNhbGxvd2VkWGhySGVhZGVyc1tpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBYaHJGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5fZGVmaW5lUHJvcGVydHkoWGhyRmlsZVJlYWRlciwgXCJfY29uZmlnXCIsIHZvaWQgMCk7XG5cblhockZpbGVSZWFkZXIuX2NvbmZpZyA9IHtcbiAgYXZvaWRIZWFkUmVxdWVzdHM6IGZhbHNlLFxuICBkaXNhbGxvd2VkWGhySGVhZGVyczogW10sXG4gIHRpbWVvdXRJblNlYzogMzBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IFhockZpbGVSZWFkZXI7XG5cbn0se1wiLi9DaHVua2VkRmlsZURhdGFcIjo1LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcInhocjJcIjoyfV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9NZWRpYUZpbGVSZWFkZXJcIik7XG5cbnZhciBYaHJGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vWGhyRmlsZVJlYWRlclwiKTtcblxudmFyIEJsb2JGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vQmxvYkZpbGVSZWFkZXJcIik7XG5cbnZhciBBcnJheUZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9BcnJheUZpbGVSZWFkZXJcIik7XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL01lZGlhVGFnUmVhZGVyXCIpO1xuXG52YXIgSUQzdjFUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9JRDN2MVRhZ1JlYWRlclwiKTtcblxudmFyIElEM3YyVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vSUQzdjJUYWdSZWFkZXJcIik7XG5cbnZhciBNUDRUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9NUDRUYWdSZWFkZXJcIik7XG5cbnZhciBGTEFDVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vRkxBQ1RhZ1JlYWRlclwiKTtcblxudmFyIG1lZGlhRmlsZVJlYWRlcnMgPSBbXTtcbnZhciBtZWRpYVRhZ1JlYWRlcnMgPSBbXTtcblxuZnVuY3Rpb24gcmVhZChsb2NhdGlvbiwgY2FsbGJhY2tzKSB7XG4gIG5ldyBSZWFkZXIobG9jYXRpb24pLnJlYWQoY2FsbGJhY2tzKTtcbn1cblxuZnVuY3Rpb24gaXNSYW5nZVZhbGlkKHJhbmdlLCBmaWxlU2l6ZSkge1xuICB2YXIgaW52YWxpZFBvc2l0aXZlUmFuZ2UgPSByYW5nZS5vZmZzZXQgPj0gMCAmJiByYW5nZS5vZmZzZXQgKyByYW5nZS5sZW5ndGggPj0gZmlsZVNpemU7XG4gIHZhciBpbnZhbGlkTmVnYXRpdmVSYW5nZSA9IHJhbmdlLm9mZnNldCA8IDAgJiYgKC1yYW5nZS5vZmZzZXQgPiBmaWxlU2l6ZSB8fCByYW5nZS5vZmZzZXQgKyByYW5nZS5sZW5ndGggPiAwKTtcbiAgcmV0dXJuICEoaW52YWxpZFBvc2l0aXZlUmFuZ2UgfHwgaW52YWxpZE5lZ2F0aXZlUmFuZ2UpO1xufVxuXG52YXIgUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVhZGVyKGZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9maWxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFnc1RvUmVhZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ZpbGVSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2ZpbGUgPSBmaWxlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlYWRlciwgW3tcbiAgICBrZXk6IFwic2V0VGFnc1RvUmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdzVG9SZWFkKHRhZ3NUb1JlYWQpIHtcbiAgICAgIHRoaXMuX3RhZ3NUb1JlYWQgPSB0YWdzVG9SZWFkO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RmlsZVJlYWRlcihmaWxlUmVhZGVyKSB7XG4gICAgICB0aGlzLl9maWxlUmVhZGVyID0gZmlsZVJlYWRlcjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgdGhpcy5fdGFnUmVhZGVyID0gdGFnUmVhZGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBGaWxlUmVhZGVyID0gdGhpcy5fZ2V0RmlsZVJlYWRlcigpO1xuXG4gICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKHRoaXMuX2ZpbGUpO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgZmlsZVJlYWRlci5pbml0KHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fZ2V0VGFnUmVhZGVyKGZpbGVSZWFkZXIsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKFRhZ1JlYWRlcikge1xuICAgICAgICAgICAgICBuZXcgVGFnUmVhZGVyKGZpbGVSZWFkZXIpLnNldFRhZ3NUb1JlYWQoc2VsZi5fdGFnc1RvUmVhZCkucmVhZChjYWxsYmFja3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZpbGVSZWFkZXIoKSB7XG4gICAgICBpZiAodGhpcy5fZmlsZVJlYWRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZVJlYWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kRmlsZVJlYWRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRGaWxlUmVhZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYUZpbGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtZWRpYUZpbGVSZWFkZXJzW2ldLmNhblJlYWRGaWxlKHRoaXMuX2ZpbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIG1lZGlhRmlsZVJlYWRlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VpdGFibGUgZmlsZSByZWFkZXIgZm91bmQgZm9yIFwiICsgdGhpcy5fZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmICh0aGlzLl90YWdSZWFkZXIpIHtcbiAgICAgICAgdmFyIHRhZ1JlYWRlciA9IHRoaXMuX3RhZ1JlYWRlcjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh0YWdSZWFkZXIpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpbmRUYWdSZWFkZXIoZmlsZVJlYWRlciwgY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRUYWdSZWFkZXIoZmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICAvLyBXZSBkb24ndCB3YW50IHRvIG1ha2UgbXVsdGlwbGUgZmV0Y2hlcyBwZXIgdGFnIHJlYWRlciB0byBnZXQgdGhlIHRhZ1xuICAgICAgLy8gaWRlbnRpZmllci4gVGhlIHN0cmF0ZWd5IGhlcmUgaXMgdG8gY29tYmluZSBhbGwgdGhlIHRhZyBpZGVudGlmaWVyXG4gICAgICAvLyByYW5nZXMgaW50byBvbmUgYW5kIG1ha2UgYSBzaW5nbGUgZmV0Y2guIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudFxuICAgICAgLy8gaW4gZmlsZSByZWFkZXJzIHRoYXQgaGF2ZSBleHBlbnNpdmUgbG9hZHMgbGlrZSB0aGUgWEhSIG9uZS5cbiAgICAgIC8vIEhvd2V2ZXIsIHdpdGggdGhpcyBzdHJhdGVneSB3ZSBydW4gaW50byB0aGUgcHJvYmxlbSBvZiBsb2FkaW5nIHRoZVxuICAgICAgLy8gZW50aXJlIGZpbGUgYmVjYXVzZSB0YWcgaWRlbnRpZmllcnMgbWlnaHQgYmUgYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZlxuICAgICAgLy8gdGhlIGZpbGUuXG4gICAgICAvLyBUbyBnZXQgYXJvdW5kIHRoaXMgd2UgZGl2aWRlIHRoZSB0YWcgcmVhZGVycyBpbnRvIHR3byBjYXRlZ29yaWVzLCB0aGVcbiAgICAgIC8vIG9uZXMgdGhhdCByZWFkIHRoZWlyIHRhZyBpZGVudGlmaWVycyBmcm9tIHRoZSBzdGFydCBvZiB0aGUgZmlsZSBhbmQgdGhlXG4gICAgICAvLyBvbmVzIHRoYXQgcmVhZCBmcm9tIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgICB2YXIgdGFnUmVhZGVyc0F0RmlsZVN0YXJ0ID0gW107XG4gICAgICB2YXIgdGFnUmVhZGVyc0F0RmlsZUVuZCA9IFtdO1xuICAgICAgdmFyIGZpbGVTaXplID0gZmlsZVJlYWRlci5nZXRTaXplKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFUYWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByYW5nZSA9IG1lZGlhVGFnUmVhZGVyc1tpXS5nZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCk7XG5cbiAgICAgICAgaWYgKCFpc1JhbmdlVmFsaWQocmFuZ2UsIGZpbGVTaXplKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhbmdlLm9mZnNldCA+PSAwICYmIHJhbmdlLm9mZnNldCA8IGZpbGVTaXplIC8gMiB8fCByYW5nZS5vZmZzZXQgPCAwICYmIHJhbmdlLm9mZnNldCA8IC1maWxlU2l6ZSAvIDIpIHtcbiAgICAgICAgICB0YWdSZWFkZXJzQXRGaWxlU3RhcnQucHVzaChtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ1JlYWRlcnNBdEZpbGVFbmQucHVzaChtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdzTG9hZGVkID0gZmFsc2U7XG4gICAgICB2YXIgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzID0ge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBpZiAoIXRhZ3NMb2FkZWQpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGV4cGVjdGluZyB0byBsb2FkIHR3byBzZXRzIG9mIHRhZyBpZGVudGlmaWVycy4gVGhpcyBmbGFnXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZXMgd2hlbiB0aGUgZmlyc3Qgb25lIGhhcyBiZWVuIGxvYWRlZC5cbiAgICAgICAgICAgIHRhZ3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFUYWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBtZWRpYVRhZ1JlYWRlcnNbaV0uZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUmFuZ2VWYWxpZChyYW5nZSwgZmlsZVNpemUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgdGFnSW5kZW50aWZpZXIgPSBmaWxlUmVhZGVyLmdldEJ5dGVzQXQocmFuZ2Uub2Zmc2V0ID49IDAgPyByYW5nZS5vZmZzZXQgOiByYW5nZS5vZmZzZXQgKyBmaWxlU2l6ZSwgcmFuZ2UubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZpbGVSZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBleC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVRhZ1JlYWRlcnNbaV0uY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJbmRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcyhtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRhZ0Zvcm1hdFwiLFxuICAgICAgICAgICAgICBcImluZm9cIjogXCJObyBzdWl0YWJsZSB0YWcgcmVhZGVyIGZvdW5kXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzKGZpbGVSZWFkZXIsIHRhZ1JlYWRlcnNBdEZpbGVTdGFydCwgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzKTtcblxuICAgICAgdGhpcy5fbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXMoZmlsZVJlYWRlciwgdGFnUmVhZGVyc0F0RmlsZUVuZCwgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkVGFnSWRlbnRpZmllclJhbmdlcyhmaWxlUmVhZGVyLCB0YWdSZWFkZXJzLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmICh0YWdSZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBGb3JjZSBhc3luY1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdJZGVudGlmaWVyUmFuZ2UgPSBbTnVtYmVyLk1BWF9WQUxVRSwgMF07XG4gICAgICB2YXIgZmlsZVNpemUgPSBmaWxlUmVhZGVyLmdldFNpemUoKTsgLy8gQ3JlYXRlIGEgc3VwZXIgc2V0IG9mIGFsbCByYW5nZXMgc28gd2UgY2FuIGxvYWQgdGhlbSBhbGwgYXQgb25jZS5cbiAgICAgIC8vIE1pZ2h0IG5lZWQgdG8gcmV0aGluayB0aGlzIGFwcHJvYWNoIGlmIHRoZXJlIGFyZSB0YWcgcmFuZ2VzIHRvbyBmYXJcbiAgICAgIC8vIGEgcGFydCBmcm9tIGVhY2ggb3RoZXIuIFdlJ3JlIGdvb2QgZm9yIG5vdyB0aG91Z2guXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFnUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmFuZ2UgPSB0YWdSZWFkZXJzW2ldLmdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcmFuZ2Uub2Zmc2V0ID49IDAgPyByYW5nZS5vZmZzZXQgOiByYW5nZS5vZmZzZXQgKyBmaWxlU2l6ZTtcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgcmFuZ2UubGVuZ3RoIC0gMTtcbiAgICAgICAgdGFnSWRlbnRpZmllclJhbmdlWzBdID0gTWF0aC5taW4oc3RhcnQsIHRhZ0lkZW50aWZpZXJSYW5nZVswXSk7XG4gICAgICAgIHRhZ0lkZW50aWZpZXJSYW5nZVsxXSA9IE1hdGgubWF4KGVuZCwgdGFnSWRlbnRpZmllclJhbmdlWzFdKTtcbiAgICAgIH1cblxuICAgICAgZmlsZVJlYWRlci5sb2FkUmFuZ2UodGFnSWRlbnRpZmllclJhbmdlLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWFkZXI7XG59KCk7XG5cbnZhciBDb25maWcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25maWcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmZpZyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29uZmlnLCBudWxsLCBbe1xuICAgIGtleTogXCJhZGRGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEZpbGVSZWFkZXIoZmlsZVJlYWRlcikge1xuICAgICAgbWVkaWFGaWxlUmVhZGVycy5wdXNoKGZpbGVSZWFkZXIpO1xuICAgICAgcmV0dXJuIENvbmZpZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRhZ1JlYWRlcih0YWdSZWFkZXIpIHtcbiAgICAgIG1lZGlhVGFnUmVhZGVycy5wdXNoKHRhZ1JlYWRlcik7XG4gICAgICByZXR1cm4gQ29uZmlnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgdmFyIHRhZ1JlYWRlckl4ID0gbWVkaWFUYWdSZWFkZXJzLmluZGV4T2YodGFnUmVhZGVyKTtcblxuICAgICAgaWYgKHRhZ1JlYWRlckl4ID49IDApIHtcbiAgICAgICAgbWVkaWFUYWdSZWFkZXJzLnNwbGljZSh0YWdSZWFkZXJJeCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb25maWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkVYUEVSSU1FTlRBTF9hdm9pZEhlYWRSZXF1ZXN0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBFWFBFUklNRU5UQUxfYXZvaWRIZWFkUmVxdWVzdHMoKSB7XG4gICAgICBYaHJGaWxlUmVhZGVyLnNldENvbmZpZyh7XG4gICAgICAgIGF2b2lkSGVhZFJlcXVlc3RzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RGlzYWxsb3dlZFhockhlYWRlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGlzYWxsb3dlZFhockhlYWRlcnMoZGlzYWxsb3dlZFhockhlYWRlcnMpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgZGlzYWxsb3dlZFhockhlYWRlcnM6IGRpc2FsbG93ZWRYaHJIZWFkZXJzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0WGhyVGltZW91dEluU2VjXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFhoclRpbWVvdXRJblNlYyh0aW1lb3V0SW5TZWMpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgdGltZW91dEluU2VjOiB0aW1lb3V0SW5TZWNcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25maWc7XG59KCk7XG5cbkNvbmZpZy5hZGRGaWxlUmVhZGVyKFhockZpbGVSZWFkZXIpLmFkZEZpbGVSZWFkZXIoQmxvYkZpbGVSZWFkZXIpLmFkZEZpbGVSZWFkZXIoQXJyYXlGaWxlUmVhZGVyKS5hZGRUYWdSZWFkZXIoSUQzdjJUYWdSZWFkZXIpLmFkZFRhZ1JlYWRlcihJRDN2MVRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKE1QNFRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKEZMQUNUYWdSZWFkZXIpO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgIXByb2Nlc3MuYnJvd3Nlcikge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiKSB7XG4gICAgdmFyIFJlYWN0TmF0aXZlRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vUmVhY3ROYXRpdmVGaWxlUmVhZGVyJyk7XG5cbiAgICBDb25maWcuYWRkRmlsZVJlYWRlcihSZWFjdE5hdGl2ZUZpbGVSZWFkZXIpO1xuICB9IGVsc2Uge1xuICAgIHZhciBOb2RlRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTm9kZUZpbGVSZWFkZXInKTtcblxuICAgIENvbmZpZy5hZGRGaWxlUmVhZGVyKE5vZGVGaWxlUmVhZGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJyZWFkXCI6IHJlYWQsXG4gIFwiUmVhZGVyXCI6IFJlYWRlcixcbiAgXCJDb25maWdcIjogQ29uZmlnXG59O1xuXG59LHtcIi4vQXJyYXlGaWxlUmVhZGVyXCI6MyxcIi4vQmxvYkZpbGVSZWFkZXJcIjo0LFwiLi9GTEFDVGFnUmVhZGVyXCI6NixcIi4vSUQzdjFUYWdSZWFkZXJcIjo3LFwiLi9JRDN2MlRhZ1JlYWRlclwiOjksXCIuL01QNFRhZ1JlYWRlclwiOjEwLFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMixcIi4vTm9kZUZpbGVSZWFkZXJcIjoxLFwiLi9SZWFjdE5hdGl2ZUZpbGVSZWFkZXJcIjoxLFwiLi9YaHJGaWxlUmVhZGVyXCI6MTR9XX0se30sWzE1XSkoMTUpXG59KTsiLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFRleHR1cmUsIFNDQUxFX01PREVTLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGlsZWRTcHJpdGVzaGVldHtcblxuXHRib3JkZXI6IG51bWJlcjtcblx0dGlsZUhlaWdodDogbnVtYmVyO1xuXHR0aWxlV2lkdGg6IG51bWJlcjtcblx0cm93czogbnVtYmVyO1xuXHRjb2x1bW5zOiBudW1iZXI7XG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XG5cdHRleHR1cmVzOiBUZXh0dXJlW107XG5cblx0Y29uc3RydWN0b3IodGV4dHVyZSxib3JkZXIsdGlsZVdpZHRoLHRpbGVIZWlnaHQscm93cyxjb2x1bW5zKXtcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0XHR0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuXHRcdHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuXHRcdHRoaXMucm93cyA9IHJvd3M7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBTQ0FMRV9NT0RFUy5ORUFSRVNUO1xuXHRcdHRoaXMudGV4dHVyZXMgPSBbXTtcblx0fVxuXG5cdGdldFRleHR1cmUoZ2lkOm51bWJlcik6VGV4dHVyZSAge1xuXHRcdC8vQ2hlY2sgd2V0aGVyIHRleHR1cmVzIHdhcyBhbGxyZWFkeSBmcmFtZWQgZm9ybSBzcHJpdGVzaGVldFxuXHRcdGlmICh0aGlzLnRleHR1cmVzW2dpZF0pIHtcblx0XHQgIHJldHVybiB0aGlzLnRleHR1cmVzW2dpZF07XG5cdFx0fSBlbHNlIHtcblx0XHQgIC8vQ2FsY3VsYXRlIHJvdyBhbmQgY29sdW1uIGZyb20gZ2lkXG5cdFx0ICBsZXQgcm93Om51bWJlciA9IE1hdGguZmxvb3IoKGdpZCAtIDEpIC8gdGhpcy5jb2x1bW5zKTtcblx0XHQgIGxldCBjb2x1bW46bnVtYmVyID0gKGdpZCAtIDEpICUgdGhpcy5jb2x1bW5zO1xuXHRcblx0XHQgIGxldCB0aWxlV2lkdGg6bnVtYmVyID0gdGhpcy50aWxlV2lkdGg7XG5cdFx0ICBsZXQgdGlsZUhlaWdodDpudW1iZXIgPSB0aGlzLnRpbGVIZWlnaHQ7XG5cdFxuXHRcdCAgbGV0IHg6bnVtYmVyID0gY29sdW1uICogdGlsZVdpZHRoICsgY29sdW1uICogdGhpcy5ib3JkZXI7XG5cdFx0ICBsZXQgeTpudW1iZXIgPSByb3cgKiB0aWxlSGVpZ2h0ICsgcm93ICogdGhpcy5ib3JkZXI7XG5cdFxuXHRcdCAgbGV0IHQ6VGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZSh4LCB5LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpKTtcblx0XHQgIC8vU2F2ZSBUZXh0dXJlIGluIGNhY2hlIGFycmF5XG5cdFx0ICB0aGlzLnRleHR1cmVzW2dpZF0gPSB0O1xuXHRcdCAgcmV0dXJuIHQ7XG5cdFx0fVxuXHQgIH1cblx0XG5cbn0iLCJlbnVtIElURU0ge1xuICAgIFRPTUFUT19QTEFOVCA9IFwidG9tYXRvX3BsYW50XCIsXG4gICAgVE9NQVRPX1BST0pFQ1RJTEUgPSBcInRvbWF0b19wcm9qZWN0aWxlXCIsXG4gICAgUFVNUEtJTl9QTEFOVCA9IFwicHVtcGtpbl9wbGFudFwiLFxuICAgIFROVF9QVU1QS0lOID0gXCJ0bnRfcHVtcGtpblwiLFxuICAgIFdBTEwgPSBcIndhbGxcIixcbiAgICBIQU5EID0gXCJoYW5kXCIsXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiXG5jb25zdCBCYWxhbmNpbmcgPSB7XG4gICAgdHJlZToge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxLFxuICAgICAgICBjcm9wQ291bnQ6IDQsXG4gICAgfSxcblxuICAgIHdhbGw6IHtcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcbiAgICB9LFxuXG4gICAgdG50UHVtcGtpbjoge1xuICAgICAgICBleHBsb3Npb25EYW1hZ2U6IDEuNSxcbiAgICB9LFxuXG4gICAgcGxheWVyOiB7XG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBoaXREYW1hZ2U6IDAuMSxcbiAgICB9LFxuICAgIFxuICAgIHRvd2VyOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEwLFxuICAgICAgICBjb29sZG93biA6IDYgLy9Ib3cgb2Z0ZW4gdGhpcyBPYmplY3Qgd2lnZ2xlcyB1bnRpbCBpdCBpcyBhZ2FpbiB2dWxuZXJhYmxlXG4gICAgfSxcblxuICAgIHRvbWF0b1Byb2plY3RpbGU6e1xuICAgICAgICBzcGVlZCA6IDcsXG4gICAgICAgIGhpdERhbWFnZTogMC4zLFxuICAgIH0sXG5cbiAgICB0b21hdG9QbGFudDp7XG4gICAgICAgIGdyb3dTdGVwVGltZSA6IDUwMDAsXG4gICAgICAgIGNyb3BDb3VudDogMlxuICAgIH0sXG5cbiAgICBwdW1wa2luUGxhbnQ6e1xuICAgICAgICBncm93U3RlcFRpbWUgOiAxMDAwMCxcbiAgICAgICAgY3JvcENvdW50OiAyXG4gICAgfSxcblxufVxuXG5leHBvcnQgeyBCYWxhbmNpbmcgfSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgSGl0RXZlbnQge1xuXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XG4gICAgZGFtYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XG5cbiAgICAgY2xpZW50czogb2JqZWN0ID0ge307XG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgcmVnaXN0ZXIoaWQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xuICAgIH1cblxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jbGllbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2soZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXN5bmNocm9udXMgUHJvbWlzZSBmb3Igd2FpdGluZyB0aGUgZ2l2ZW4gdGltZSBpbiBtc1xuICAgICAqIFRoaXMgZG9lcyBOT1QgcGF1c2Ugb3Igc3RvcCB0aGUgVXBkYXRlU2hlZHVsZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgd2FpdCA9IG1zID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgU3ByaXRlLCBQb2ludCwgVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSBcIi4vUGxheWVyXCJcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gJy4vSGl0RXZlbnQnO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSAnLi9VcGRhdGVTY2hlZHVsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUHJvamVjdGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgaWRDb3VudGVyID0gMDtcbiAgICBzdGF0aWMgdGhyb3dTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvc25hcC5tcDMnKTtcbiAgICBzdGF0aWMgc21hc2hTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvc21hc2gubXAzJyk7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbml0aWF0b3I6IFBsYXllcjtcbiAgICBwcml2YXRlIHZ4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdnk6IG51bWJlciA9IDA7XG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdID0gW107XG5cbiAgICBzdGF0aWMgZ2V0TmV3SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGB0b21hdG9fcHJvamVjdGlsZV8ke1RvbWF0b1Byb2plY3RpbGUuaWRDb3VudGVyKyt9YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uOiBESVJFQ1RJT04sIGluaXRpYXRvcjogUGxheWVyKSB7XG5cbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwidG9tYXRvX3Byb2plY3RpbGVfZmx5XCIpKTtcbiAgICAgICAgdGhpcy5pZCA9IFRvbWF0b1Byb2plY3RpbGUuZ2V0TmV3SWQoKTtcblxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG5cbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBQb2ludCgyLCAyKTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOiB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5ET1dOOiB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6IHRoaXMudnggPSAtMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOiB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGB0b21hdG9fcHJvamVjdGlsZV9zbWFzaF8ke2l9YDtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2godGV4dHVyZSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3Rlcih0aGlzLmlkLCB0aGlzLmRvU3RlcCk7XG5cbiAgICAgICAgZ2FtZU1hbmFnZXIubWFwLmV4dHJhU3R1ZmZDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XG5cbiAgICAgICAgVG9tYXRvUHJvamVjdGlsZS50aHJvd1NvdW5kLnBsYXkoKTtcblxuICAgIH1cblxuICAgIGRvU3RlcCA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxuICAgICAgICBsZXQgbmV3WCA9IHRoaXMueCArIHRoaXMudnggKiBkZWx0YTtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnkgKyB0aGlzLnZ5ICogZGVsdGE7XG5cbiAgICAgICAgLy9HZXQgYWxsIHRpbGVzIHRoYXQgd291bGQgYmUgdG91Y2hlZCBieSB0aGUgcGxheWVyXG4gICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKChuZXdYIC0gdGhpcy53aWR0aCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZVdpZHRoKSxcbiAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdYICsgdGhpcy53aWR0aCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZVdpZHRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKChuZXdZIC0gdGhpcy5oZWlnaHQgLyAyKSAvIGdhbWVNYW5hZ2VyLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodClcbiAgICAgICAgfTtcblxuICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgIGxldCBibG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBibG9ja2VkVGlsZTogVGlsZTtcblxuICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB5UmFuZ2UuZnJvbTsgeSA8PSB5UmFuZ2UudG87IHkrKykge1xuICAgICAgICAgICAgICAgIGlmICggZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCx5KSA9PSB1bmRlZmluZWQgfHwgZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCx5KS50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBibG9ja2VkVGlsZSA9IGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKHgseSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJsb2NrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLnkgPSBuZXdZO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSAwLjUgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vRmx5IGludG8gdGhlIHRpbGVPYmplY3RcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogMjtcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogMjtcbiAgICAgICAgICAgIHRoaXMuc21hc2goYmxvY2tlZFRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgYXN5bmMgc21hc2godGlsZTogVGlsZSkge1xuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIudW5yZWdpc3Rlcih0aGlzLmlkKTtcblxuICAgICAgICAvL1BsYXkgU21hc2ggc291bmRcbiAgICAgICAgVG9tYXRvUHJvamVjdGlsZS5zbWFzaFNvdW5kLnBsYXkoKTtcblxuICAgICAgICAvL1RyaWdnZXIgSGl0IGV2ZW50IG9uIGhpdHRlbiB0aWxlXG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgICB0aWxlLm9uSGl0KG5ldyBIaXRFdmVudCh0aGlzLmluaXRpYXRvciwgQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuaGl0RGFtYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1BsYXkgU21hc2ggYW5pbWF0aW9uXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDQwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XG5cbiAgICB0b21hdG9fcHJvamVjdGlsZTogbnVtYmVyID0gMDtcbiAgICB0bnRfcHVtcGtpbjogbnVtYmVyID0gMDtcbiAgICB3YWxsOiBudW1iZXIgPSAwO1xuXG4gICAgZ2V0SXRlbShpdGVtVHlwZTogSVRFTSk6IGJvb2xlYW4ge1xuICAgICAgICBzd2l0Y2ggKGl0ZW1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiByZXR1cm4gdHJ1ZTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogcmV0dXJuIHRydWU7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IGlmICh0aGlzLnRvbWF0b19wcm9qZWN0aWxlID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvX3Byb2plY3RpbGUtLTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IGlmICh0aGlzLnRudF9wdW1wa2luID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG50X3B1bXBraW4tLTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogaWYgKHRoaXMud2FsbCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGwtLTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2l2ZUl0ZW0oaXRlbVR5cGU6IElURU0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdpdmUgJHtpdGVtVHlwZX14JHtjb3VudH1gKTtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnRvbWF0b19wcm9qZWN0aWxlICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnRudF9wdW1wa2luICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMud2FsbCArPSBjb3VudDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgUG9pbnQsIGV4dHJhcywgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLy4uL2luZGV4XCJcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHsgVG9tYXRvUHJvamVjdGlsZSB9IGZyb20gJy4vVG9tYXRvUHJvamVjdGlsZSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gJy4vQmFsYW5jaW5nJztcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSAnLi9IaXRFdmVudCc7XG5pbXBvcnQgeyBJbnZlbnRvcnkgfSBmcm9tIFwiLi9JbnZlbnRvcnlcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgZW51bSBESVJFQ1RJT04geyBVUCA9IFwidXBcIiwgUklHSFQgPSBcInJpZ2h0XCIsIERPV04gPSBcImRvd25cIiwgTEVGVCA9IFwibGVmdFwiLCBTVE9QID0gXCJzdG9wXCIgfTtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XG4gICAgc3RhdGljIFNQUklURV9IRUlHSFQ6IG51bWJlciA9IDE0NCAvIDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoMS41LCAxLjUpO1xuICAgIHN0YXRpYyBISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwgPSAxMDtcbiAgICBzdGF0aWMgSElUQk9YX1RPTEVSQU5DRV9UT1AgPSAxMDtcblxuICAgIHBsYXllcklkOiBudW1iZXI7XG4gICAgLy9BIGhleCB2YWx1ZSBvZiBhIGNvbG9yIGFsbCBwbGF5ZXIncyBzcHJpdGVzIGFyZSB0aW50ZWQgd2l0aFxuICAgIGNvbG9yOiBudW1iZXIgPSAweEZGRkZGRjtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgc3ByaXRlOiBleHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgYW5pbWF0aW9ucztcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG5cbiAgICAvL1BsYXllciBpZ25vcmVzIGRvU3RlcCBhbmQgb25BY3Rpb24gRXZlbnRzIGlmIHN0dW5uZWRcbiAgICBzdHVubmVkOiBib29sZWFuO1xuXG4gICAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG5cbiAgICBwbGFjZU1vZGU6IElURU07XG4gICAgbGFzdEtleTogc3RyaW5nO1xuICAgIC8qKiBTYXZlcyB0aGUgY3VycmVudCBkaXJlY3Rpb24gKFNUT1Agd2lsbCBub3QgYmUgc2F2ZWQgaGVyZSwgaW4gdGhpcyBjYXNlIHRoZSB2YWx1ZSBpcyB0aGUgbGFzdCBkaXJlY3Rpb24gYmVmb3JlIFNUT1ApICovXG4gICAgY3VycmVudERpcmVjdGlvbjogRElSRUNUSU9OO1xuXG5cbiAgICB1cEtleTogc3RyaW5nO1xuICAgIGRvd25LZXk6IHN0cmluZztcbiAgICBsZWZ0S2V5OiBzdHJpbmc7XG4gICAgcmlnaHRLZXk6IHN0cmluZztcbiAgICBhY3Rpb25LZXk6IHN0cmluZztcbiAgICBzZWxlY3RLZXk6IHN0cmluZztcbiAgICBwbGFjZUtleTogc3RyaW5nO1xuICAgIGxhc3RUaW50ZWRUaWxlOiBUaWxlO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1hcDogVGlsZWRNYXAsIHBsYXllcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuICAgICAgICB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BMQU5UO1xuXG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zLndhbGtbRElSRUNUSU9OLkRPV05dKTtcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IERJUkVDVElPTi5ET1dOO1xuICAgICAgICB0aGlzLnNwcml0ZS54ID0geDtcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBQbGF5ZXIuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmltYXRpb25TcGVlZCA9IDAuMTM7XG4gICAgICAgIHRoaXMuc3ByaXRlLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuXG4gICAgICAgIC8vcmVnaXN0ZXIga2V5IGV2ZW50c1xuICAgICAgICBnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIucmVnaXN0ZXJLZXkoZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLkFOWV9LRVksIHRoaXMua2V5RG93biwgdGhpcy5rZXlVcCwgXCJwbGF5ZXJcIiArIHBsYXllcklkKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKFwicGxheWVyXCIgKyBwbGF5ZXJJZCwgdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgbG9hZEFuaW1hdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgICAgICAgICB3YWxrOiB7XG4gICAgICAgICAgICAgICAgdXA6IDMsXG4gICAgICAgICAgICAgICAgZG93bjogMyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAzLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHV0OiB7XG4gICAgICAgICAgICAgICAgdXA6IDMsXG4gICAgICAgICAgICAgICAgZG93bjogMyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAzLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1YlN0YXRlTmFtZSBpbiBhbmltYXRpb25zW3N0YXRlTmFtZV0pIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gYW5pbWF0aW9uc1tzdGF0ZU5hbWVdW3N1YlN0YXRlTmFtZV07XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZXNBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkZyYW1lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHBsYXllcl8ke3N0YXRlTmFtZX1fJHtzdWJTdGF0ZU5hbWV9XyR7aX1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZyYW1lc0FycmF5LnB1c2godGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc1tzdGF0ZU5hbWVdW3N1YlN0YXRlTmFtZV0gPSBjdXJyZW50RnJhbWVzQXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICAgIH1cblxuICAgIHN3aXRjaFBsYWNlTW9kZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsYWNlTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UTlRfUFVNUEtJTjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUExBTlQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLldBTEw7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5IQU5EOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5IQU5EOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uUFVNUEtJTl9QTEFOVDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENoYW5nZWQgUGxhY2VNb2RlLiBOZXcgbW9kZSBpczogJHt0aGlzLnBsYWNlTW9kZX1gKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBESVJFQ1RJT04pIHtcbiAgICAgICAgaWYgKHRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgLy9QbGF5ZXIgaXMgc3R1bm5lZCBhbmQgY2FuJ3QgY2hhbmdlIGl0J3MgZGlyZWN0aW9uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTi5TVE9QKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9ucy53YWxrW2RpcmVjdGlvbl07XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwbGF5QW5pbWF0aW9uKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzOiBUZXh0dXJlW10gPSB0aGlzLmFuaW1hdGlvbnNbc3RhdGVdW3RoaXMuY3VycmVudERpcmVjdGlvbl07XG5cbiAgICAgICAgdGhpcy5zdHVubmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpXG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBmb3J3YXJkc1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9XYWl0IGEgbW9tZW50XG4gICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDgwKTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKGxldCBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNTApO1xuICAgICAgICB9XG5cblxuICAgICAgICAvL1Jlc3RvcmUgbGFzdCBkaXJlY3Rpb24ncyB0ZXh0dXJlXG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLmN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5LCBwbGFjZUtleSkge1xuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XG4gICAgICAgIHRoaXMuZG93bktleSA9IGRvd25LZXk7XG4gICAgICAgIHRoaXMubGVmdEtleSA9IGxlZnRLZXk7XG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXkgPSBhY3Rpb25LZXk7XG4gICAgICAgIHRoaXMuc2VsZWN0S2V5ID0gc2VsZWN0S2V5O1xuICAgICAgICB0aGlzLnBsYWNlS2V5ID0gcGxhY2VLZXk7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBrZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT0gdGhpcy5sYXN0S2V5ICYmICF0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uVVApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZG93bktleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlJJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IDEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSkgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxuICAgICAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnNwcml0ZS54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnNwcml0ZS55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigobmV3WCArIFBsYXllci5ISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdYICsgdGhpcy5zcHJpdGUud2lkdGggLSBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKChuZXdZICsgUGxheWVyLkhJVEJPWF9UT0xFUkFOQ0VfVE9QKSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxuICAgICAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHlSYW5nZS5mcm9tOyB5IDw9IHlSYW5nZS50bzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcC5nZXRUaWxlKHgsIHkpID09IHVuZGVmaW5lZCB8fCAodGhpcy5tYXAuZ2V0VGlsZSh4LCB5KS50aWxlT2JqZWN0ICYmIHRoaXMubWFwLmdldFRpbGUoeCwgeSkudGlsZU9iamVjdC5zb2xpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSBuZXdZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgVGlsZS5cbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cbiAgICAqL1xuICAgIGdldEN1cnJlbnRUaWxlKCk6IFRpbGUge1xuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCwgZ3JpZFkpO1xuICAgIH1cblxuICAgIHRpbnRDdXJyZW50VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbnRlZFRpbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgIGlmIChjdCkge1xuICAgICAgICAgICAgY3Quc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUaW50ZWRUaWxlID0gY3Q7XG5cbiAgICB9XG5cbiAgICBvblBsYWNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG5cbiAgICAgICAgICAgIC8vQ3JlYXRlIGhpdEV2ZW50IGlmIHBsYWNlTW9kZSBpcyBIQU5EXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5IQU5EKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMsIEJhbGFuY2luZy5wbGF5ZXIuaGl0RGFtYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG8gaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VNb2RlID09IElURU0uVE9NQVRPX1BST0pFQ1RJTEUgJiYgdGhpcy5pbnZlbnRvcnkuZ2V0SXRlbShJVEVNLlRPTUFUT19QUk9KRUNUSUxFKSkge1xuICAgICAgICAgICAgICAgIG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuY3VycmVudERpcmVjdGlvbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Vsc2UgcGxhY2UgdGlsZU9iamVjdCBpZiByZXNzb3VyY2VzIGFyZSBpbiBpbnZlbnRvcnlcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW52ZW50b3J5LmdldEl0ZW0odGhpcy5wbGFjZU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9uUGxhY2UodGhpcy5wbGFjZU1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQgPSAoKSA9PiB7XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIFBvaW50IH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRpbGVPYmplY3QgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oJ2RhdGEvYXNzZXRzL3NvdW5kL2hpdC5tcDMnKTtcbiAgICBzdGF0aWMgb25EZXN0cm95U291bmQgPSBuZXcgQXVkaW8oJ2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2IubXAzJyk7XG5cbiAgICBtb3RoZXI6IFRpbGU7XG4gICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2dWxuZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgc29saWQ/OmJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7XG5cbiAgICAgICAgLy9zZXQgcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XG5cbiAgICAgICAgLy9TZXQgdGltZXIgZm9yIHNvbGlkIHRpbGVzXG4gICAgICAgIGlmKHNvbGlkKXtcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4QUFBQUFBO1xuICAgICAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKGB3YWl0X3RvX2JlY29tZV9zb2xpZF8ke3RoaXMubW90aGVyLmdyaWRYfV8ke3RoaXMubW90aGVyLmdyaWRZfWAsdGhpcy50cnlUb0JlY29tZVNvbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeVRvQmVjb21lU29saWQgPSAoKT0+e1xuICAgICAgICBpZighdGhpcy5tb3RoZXIuaXNPY2N1cGllZEJ5QW55UGxheWVyKCkpe1xuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIG9uSGl0KGhpdGV2ZW50OiBIaXRFdmVudCkgeyB9O1xuXG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4wNztcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuXG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FcGlsb2dcbiAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cblxuICAgIGFzeW5jIHNocmluaygpIHtcblxuICAgICAgICAvL1Byb2xvZyAgICAgICAgXG4gICAgICAgIGNvbnN0IHNjYWxlRGlmZiA9IDAuMjtcbiAgICAgICAgLy9DaGFuZ2UgYW5jaG9yXG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRoaXMuc2NhbGUueCA+IDAgJiYgdGhpcy5zY2FsZS55ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS54IC09IHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSAtPSBzY2FsZURpZmY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgxMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBibGluayh0aW1lcykge1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICAvL0dpdmUgdGhlIHRpbGVvYmplY3QgYSBncmVlbiB0aW50XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGQUFBQTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDIwMCk7XG4gICAgICAgICAgICAvL1JlbW92ZSB0aGUgdGludFxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgyMDApO1xuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xuXG4gICAgc3RhdGljIHRpY2tTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQva2xpY2subXAzJyk7XG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvZXhwbG9kZS5tcDMnKTtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSAmJiBoaXRFdmVudC5kYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgVG50UHVtcGtpbi50aWNrU291bmQucGxheSgpO1xuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGluayg0KTtcbiAgICAgICAgICAgIC8vVHJpZ2dlciBUaWxlT2JqZWN0cyBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXNBcm91bmQpe1xuICAgICAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KGhpdEV2ZW50LmluaXRpYXRvcixCYWxhbmNpbmcudG50UHVtcGtpbi5leHBsb3Npb25EYW1hZ2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9FeHBsb2RlISEhXG4gICAgICAgICAgICBUbnRQdW1wa2luLmV4cGxvZGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXlBbmltYXRpb24oXCJleHBsb2RlXCIpO1xuICAgICAgICAgICAgLy9EZXN0cm95IHB1bXBraW4gOi0oXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIGV4cGxvZGU6IDEyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHB1bXBraW5fJHtzdGF0ZU5hbWV9XyR7aX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0aW9uc1tzdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXG4gICAgICogVGhpcyBhcnJheSBob2xkcyBvbmx5IGV4aXN0aW5nIHRpbGVzIGFuZCBubyB1bmRlZmluZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcbiAgICAgICAgY29uc3QgbXlYID0gdGhpcy5tb3RoZXIuZ3JpZFg7XG4gICAgICAgIGNvbnN0IG15WSA9IHRoaXMubW90aGVyLmdyaWRZO1xuXG4gICAgICAgIGxldCB0aWxlczogVGlsZVtdID0gW107XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYICsgMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgKyAxKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgLSAxKSk7XG5cbiAgICAgICAgLy9GaWx0ZXIgbm90IGV4aXN0aW5nIHRpbGVzXG4gICAgICAgIGxldCB0b1JldHVybjpUaWxlW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xuICAgICAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoMSwwKSk7XG4gICAgICAgIG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDIsMCkpO1xuICAgICAgICBwLm9uSGl0KG5ldyBIaXRFdmVudChnYW1lTWFuYWdlci5tYXAucGxheWVyc1swXSwgMSkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0O1xuXG4gICAgICAgIC8vRHJhdyBmcmFtZVxuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5saW5lU3R5bGUoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCB0aGlzLmJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvcmRlclJlY3RhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvL0NsZWFyIGxhc3QgcHJvZ3Jlc3MgU2hhcGVcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NTaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDAuMSkgeyAvL0RyYXcgdG9vIHNtYWxsIHByb2dyZXNzIGxvb2tzIHVnbHlcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gNjQgKiB0aGlzLnByb2dyZXNzIC0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrID0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMjtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZSh0aGljaywgdGhpcy5wcm9ncmVzc0NvbG9yKVxuICAgICAgICAgICAgICAgIC5tb3ZlVG8oU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTIC0gMSwgdGhpY2sgLSAxKVxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHNldCBwcm9ncmVzcyBsb3dlciB0aGFuIDAgb3IgaGlnaGVyIHRoYW4gMVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aDtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKDk0OSksIG1vdGhlciwgdHJ1ZSk7IC8vOTQ5IGlzIGEgYm94IHNwcml0ZVxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHtcbiAgICB0eXBlOklURU0sXG4gICAgY291bnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdGljIGdyb3dTdGF0ZXM6IG51bWJlciA9IDU7XG4gICAgY3JvcDogQ3JvcDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6VGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsbW90aGVyKTtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3JvdygpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGFzeW5jIGdyb3coKTtcblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OkhpdEV2ZW50KSB7XG4gICAgICAgIGlmKCF0aGlzLnZ1bG5lcmFibGUpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgaGl0RXZlbnQuaW5pdGlhdG9yLnBsYXlBbmltYXRpb24oXCJwdXRcIik7XG4gICAgICAgIC8vSGFydmVzdCB5b3Vyc2VsZlxuICAgICAgICBoaXRFdmVudC5pbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKHRoaXMuY3JvcC50eXBlLHRoaXMuY3JvcC5jb3VudCk7XG4gICAgICAgIC8vZ2l2ZSB0aGUgaW5pdGlhdG9yIHRoZSBpdGVtc1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9QbGFudCBleHRlbmRzIFBsYW50e1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOlRpbGUpe1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcGxhbnRfMFwiKSxtb3RoZXIpO1xuICAgICAgICB0aGlzLmNyb3AgPSB7dHlwZTpJVEVNLlRPTUFUT19QUk9KRUNUSUxFLCBjb3VudDpCYWxhbmNpbmcudG9tYXRvUGxhbnQuY3JvcENvdW50fTtcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgVG9tYXRvUGxhbnQuZ3Jvd1N0YXRlczsgZ3Jvd1N0ZXArKykge1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnRvbWF0b1BsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFB1bXBraW5QbGFudCBleHRlbmRzIFBsYW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX3BsYW50XzBcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMuY3JvcCA9IHt0eXBlOklURU0uVE5UX1BVTVBLSU4sIGNvdW50OkJhbGFuY2luZy5wdW1wa2luUGxhbnQuY3JvcENvdW50fTtcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgUHVtcGtpblBsYW50Lmdyb3dTdGF0ZXM7IGdyb3dTdGVwKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wdW1wa2luUGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShgcHVtcGtpbl9wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHsgVG9tYXRvUGxhbnQgfSBmcm9tIFwiLi9Ub21hdG9QbGFudFwiO1xuaW1wb3J0IHsgUHVtcGtpblBsYW50IH0gZnJvbSBcIi4vUHVtcGtpblBsYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIGdyaWRYOiBudW1iZXI7XG4gICAgZ3JpZFk6IG51bWJlcjtcbiAgICB0aWxlT2JqZWN0OiBUaWxlT2JqZWN0O1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XG4gICAgICAgIHRoaXMuZ3JpZFkgPSBncmlkWTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gZ3JpZFggKiBtYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IGdyaWRZICogbWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KG5ld1RpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdCA9IG5ld1RpbGVPYmplY3Q7XG4gICAgICAgICAgICBuZXdUaWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICAgICAgdGhpcy5tYXAudGlsZU9iamVjdENvbnRhaW5lci5hZGRDaGlsZChuZXdUaWxlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhpdChoaXRFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uUGxhY2Uob2JqZWN0VHlwZTogSVRFTSkge1xuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgc3dpdGNoIChvYmplY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRvbWF0b1BsYW50KHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFB1bXBraW5QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVG50UHVtcGtpbih0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdGhlIGZpcnN0IHBsYXllciB0aGF0IG9jY3VwaWVzIHRoaXMgdGlsZS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIHRpbGUgaXMgbm90IG9jY3VwaWVkXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5KCk6IFBsYXllciB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueCAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS54ICsgcGxheWVyLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnkgKyBwbGF5ZXIuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkWCA+PSB4UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRYIDw9IHhSYW5nZS50byAmJiB0aGlzLmdyaWRZID49IHlSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFkgPD0geVJhbmdlLnRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGFueSBwbGF5ZXIgb24gdGhpcyB0aWxlLlxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeUFueVBsYXllcigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5pc09jY3VwaWVkQnkoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvY2N1cGllZCBieSBwbGF5ZXJcIiArIHBsYXllci5wbGF5ZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbnQoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QudGludCA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IERJUkVDVElPTiwgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFRvbWF0b1Byb2plY3RpbGUgfSBmcm9tIFwiLi9Ub21hdG9Qcm9qZWN0aWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIG93bmVySWQ6IHN0cmluZztcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5vd25lcklkID0gb3duZXJJZDtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCAvIEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBUb3dlci5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZShCYWxhbmNpbmcudG93ZXIuY29vbGRvd24pO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIFRvbWF0b3MgYXMgZGVmZW5zZSBhY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tb3RoZXIubWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlV2lkdGggPSB0aGlzLm1vdGhlci5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRZIC0gMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMueCwgKHRoaXMubW90aGVyLmdyaWRZIC0gMSkgKiB0aWxlSGVpZ2h0LCBESVJFQ1RJT04uVVAsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFggLSAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUoKHRoaXMubW90aGVyLmdyaWRYIC0gMSkgKiB0aWxlV2lkdGgsIHRoaXMueSwgRElSRUNUSU9OLkxFRlQsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUodGhpcy54LCAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxKSAqIHRpbGVIZWlnaHQsIERJUkVDVElPTi5ET1dOLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRYICsgMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKCh0aGlzLm1vdGhlci5ncmlkWCArIDEpICogdGlsZVdpZHRoLCB0aGlzLnksIERJUkVDVElPTi5SSUdIVCwgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIke3RoaXMub3duZXJJZH0gaGFzIGxvc3QhYCk7XG4gICAgfVxuXG4gICAgZ2V0T3duZXIoKTogUGxheWVyIHtcbiAgICAgICAgcmV0dXJuIGdhbWVNYW5hZ2VyLm1hcC5wbGF5ZXJzW3RoaXMub3duZXJJZF07XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHtCYWxhbmNpbmd9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgbW90aGVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRyZWUub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLCBCYWxhbmNpbmcudHJlZS5jcm9wQ291bnQpO1xuICAgICAgICBUcmVlLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi9Ub3dlclwiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIC8qKkhvbGQgYWxsIFRpbGVzLiBVc2FnZTogdGlsZXNbeV1beF0gKi9cbiAgICBwcml2YXRlIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBleHRyYVN0dWZmQ29udGFpbmVyOiBDb250YWluZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGlsZU9iamVjdENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVPYmplY3RDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGxheWVyQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5leHRyYVN0dWZmQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB9XG5cblxuICAgIGdldE1hcE9iamVjdFByb3BlcnR5KG1hcE9iamVjdDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIG1hcE9iamVjdC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9Mb2FkcyB0aGUgbWFwIHdpdGggc3ByaXRlc2hlZXQuIExhc3QgcGFyYW1ldGVyIGlzIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBwYXJzaW5nIHRoZSBtYXAgd2l0aCB0aGUgbmV3IHBhcnNlZCBtYXAgYXMgcGFyYW1ldGVyXG4gICAgc3RhdGljIGxvYWRNYXAobWFwRGF0YSkge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBUaWxlZE1hcCgpO1xuICAgICAgICBjb25zdCB0aWxlZFNwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldDtcbiAgICAgICAgY29uc3QgYXRsYXNTcHJpdGVzaGVldCA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gdGlsZWRTcHJpdGVzaGVldC50aWxlV2lkdGggKiBTUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFNQUklURV9TQ0FMRS55O1xuXG4gICAgICAgIC8vQnVpbGQgYWxsIFRpbGVMYXllcnMgZmlyc3RcbiAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgbWFwLmdyaWRXaWR0aCA9IHRsLndpZHRoO1xuICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy9Jbml0IG1hcCdzIHRpbGVzIGFycmF5XG4gICAgICAgICAgICAgICAgbWFwLnRpbGVzID0gbmV3IEFycmF5KG1hcC5ncmlkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXNbaV0gPSBuZXcgQXJyYXkobWFwLmdyaWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCB0aWxlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRsLndpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcm93ICogdGwud2lkdGggKyBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUodGwuZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgVGlsZSh0ZXh0dXJlLCByb3csIGNvbHVtbiwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZShuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9JdGVyYXRlIHRocm91Z2ggT2JqZWN0IExheWVyc1xuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG5cbiAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuXG5cbiAgICAgICAgICAgICAgICAvL0FkZCBhbGwgcGxheWVycyBmaXJzdFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX18gIF8gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8X18pIHwgfCBfXyBfIF8gICBfICBfX18gXyBfXyBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX19fL3wgfC8gX2AgfCB8IHwgfC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHxffCAgICB8X3xcXF9fLF98XFxfXywgfFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgX18vIHwgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKGNvLnggKiBTUFJJVEVfU0NBTEUueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IChNYXRoLnJvdW5kKGNvLnkpIC0gY28uaGVpZ2h0KSAqIFNQUklURV9TQ0FMRS55OyAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcklkOiBudW1iZXIgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwicGxheWVySWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIG1hcCwgcGxheWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFBsYXllcihuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgU3ByaXRlcyBmb3IgZWFjaCBvYmplY3QgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgX19fX18gICAgICBfX19fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8LyBfIFxcIFxcIC9cXCAvIC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgKF8pIFxcIFYgIFYgLyAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffFxcX19fLyBcXF8vXFxfLyBcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rvd2VyID0gbmV3IFRvd2VyKHRleHR1cmUsIG1vdGhlciwgb3duZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgfCB8ICBfXy8gIF9fL1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qKipcbiAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgXFwgXFwgICAgICAgIC8gLyAgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBcXCBcXCAgL1xcICAvIC9fIF98IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICBcXCAgL1xcICAvIChffCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIFxcLyAgXFwvIFxcX18sX3xffF98XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXcgV2FsbChtb3RoZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG5cblxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbGUgYXQgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHggYW5kIHkgZ3JpZCBjb29yZGluYXRlc1xuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHRpbGUgYXQgdGhpcyBjb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSBncmlkWCB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0gZ3JpZFkgeS1jb29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0VGlsZShncmlkWDpudW1iZXIsZ3JpZFk6bnVtYmVyKTpUaWxle1xuICAgICAgICBpZih0aGlzLnRpbGVzW2dyaWRZXSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1tncmlkWV1bZ3JpZFhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3Q6IFJlY3RhbmdsZSkge1xuXG4gICAgICAgIC8vYW4gT2JqZWN0IGNhbiBiZSBwbGFjZWQgXCJiZXR3ZWVuXCIgdGlsZXMgaW4gdGlsZWQgbWFwIGVkaXRvci4gQnV0IGV2bnRzIGNhbiBiZSB0cmlnZ2VyZWQgb25seSBmcm9tIHdob2xlIHRpbGVzLiBTbyB0aGUgb2JlamNjdHMgcG9zaXRpb24gaXMgbWFwcGVkIHRvIHRoZSBuZWFyZXN0IFRpbGVcblxuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbWFwT2JqZWN0LnggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbGV0IHhUaWxlcyA9IG9yaWdpbmFsWCAvIHRoaXMuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcblxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gKG1hcE9iamVjdC55IC0gbWFwT2JqZWN0LmhlaWdodCkgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTsgIC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lciAgICAgICAgICAgICAgXG4gICAgICAgIGxldCB5VGlsZXMgPSBvcmlnaW5hbFkgLyB0aGlzLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB7IGdyaWRYOiB4VGlsZXMsIGdyaWRZOiB5VGlsZXMgfTtcbiAgICB9XG5cbiAgICBnZXRUaWxlTmVhcmVzdFRvKG1hcE9iamVjdDogUmVjdGFuZ2xlKTogVGlsZSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zLmdyaWRZXVtwb3MuZ3JpZFhdO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xuXG4gICAgIGtleVVwcyA9IHt9O1xuICAgICBrZXlEb3ducyA9IHt9O1xuICAgICBBTllfS0VZID0gXCJhbnlfa2V5XCI7XG5cbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleVVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF0bGFzU3ByaXRlc2hlZXQge1xuXG5cdGF0bGFzRGF0YTtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblxuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIGF0bGFzRGF0YSkge1xuXHRcdHRoaXMuYXRsYXNEYXRhID0gYXRsYXNEYXRhO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XHRcdFxuXHR9XG5cblx0Z2V0VGV4dHVyZShuYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcblxuXHRcdGNvbnN0IHByb3BzID0gdGhpcy5hdGxhc0RhdGEuaXRlbXNbbmFtZV07XG5cdFx0aWYgKHByb3BzID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIHRleHR1cmUgJyR7bmFtZX0nIGluIHNwcml0ZXNoZWV0YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShwcm9wcy54LCBwcm9wcy55LCBwcm9wcy53aWR0aCwgcHJvcHMuaGVpZ2h0KSk7XG5cdH1cblxuXG59IiwiY29uc3QgdWlDb25zdGFudHMgPSB7XG4gICAgbWVudUJhcjoge1xuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgaWNvbjp7XG4gICAgICAgICAgICBzY2FsZTozLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICB3aWR0aDogNTEyLFxuICAgICAgICBoZWlnaHQ6IDYxMixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsImltcG9ydCB7IENvbnRhaW5lciwgUmVjdGFuZ2xlLCBHcmFwaGljcywgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi91aUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTWVudSBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXI6IFBsYXllcjtcblxuICAgIGFjdGlvbkljb246U3ByaXRlO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIHdpZHRoOiBudW1iZXIsIHg6bnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuXG4gICAgICAgIHRoaXMueSA9IHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCAtIHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSB4O1xuXG4gICAgICAgIGxldCBiZ1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIGJnU2hhcGUuYmVnaW5GaWxsKHBsYXllci5jb2xvcik7XG4gICAgICAgIGJnU2hhcGUuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0KTtcbiAgICAgICAgYmdTaGFwZS5lbmRGaWxsKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYmdTaGFwZSk7XG5cbiAgICAgICAgbGV0IGFpID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUocGxheWVyLnBsYWNlTW9kZSkpO1xuICAgICAgICBhaS5zY2FsZS5zZXQodWlDb25zdGFudHMubWVudUJhci5pY29uLnNjYWxlKTtcbiAgICAgICAgYWkueCA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgYWkueSA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChhaSk7XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbiA9IGFpO1xuXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllck1lbnVcIitwbGF5ZXIucGxheWVySWQsdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgZG9TdGVwID0gKCk9PntcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGhpcy5wbGF5ZXIucGxhY2VNb2RlKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiXG5pbXBvcnQgUGxheWVyTWVudSBmcm9tIFwiLi9wbGF5ZXJNZW51XCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXJNZW51czogUGxheWVyTWVudVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51V2lkdGggPSB1aUNvbnN0YW50cy5zdGFnZS53aWR0aCAvIHBsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTWVudSA9IG5ldyBQbGF5ZXJNZW51KHBsYXllcnNbaV0sIG1lbnVXaWR0aCwgbWVudVdpZHRoICogaSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck1lbnVzLnB1c2gocGxheWVyTWVudSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBsYXllck1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMganNtZWRpYXRhZ3MgZnJvbSBcImpzbWVkaWF0YWdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljUGxheWVyIHtcblxuICAgIHBsYXlsaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIHBsYXlsaXN0UG9zaXRpb24gPSAwO1xuICAgIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhcnRpc3Q6IHN0cmluZztcbiAgICBjb3ZlcjogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0bWxQYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgICAgICAgICAjY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAzOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMWUwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzYxNjE2MTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ZUMzIzJywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJDb3Zlcnt9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyVGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyQXJ0aXN0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllckluZm97XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllclwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm11c2ljUGxheWVyQ292ZXJcIiB3aWR0aD1cIjgwcHhcIiBzcmM9XCJodHRwczovL3d3dy5zdXBlcmpvam8uZGUvbWFpbi9waWNzL21lbnNhLnBuZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllckluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVyVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlZXAgYW5kIGZ1bmt5IG11c2ljXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJBcnRpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1pc3RlciBib21iYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgaHRtbFBhcmVudC5pbm5lckhUTUwgKz0gaHRtbDtcbiAgICB9XG5cbiAgICBhZGRNdXNpYyhwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdC5wdXNoKHBhdGgpO1xuICAgIH1cblxuICAgIHBsYXkgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCh0aGlzLnBsYXlsaXN0UG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIHBhdXNlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE11c2ljQXQocG9zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFBvc2l0aW9uID0gcG9zO1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucGxheWxpc3RbcG9zXTtcbiAgICAgICAgaWYgKHBhdGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbTXVzaWMgUGxheWVyXSBDYW50IHBsYXkgbXVzaWMuIE11c2ljIGNhbnQgYmUgZm91bmQgaW4gcGxheWxpc3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8ocGF0aCk7XG4gICAgICAgIHRoaXMuYXVkaW8ub25lbmRlZCA9IHRoaXMubmV4dFRyYWNrO1xuXG4gICAgICAgIC8vTG9hZCBNZXRhIEluZm9cbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4ODg3LycgKyBwYXRoKTtcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCByZXNwLmJsb2IoKTtcblxuICAgICAgICBqc21lZGlhdGFncy5yZWFkKGJsb2IsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllclRpdGxlJykuaW5uZXJIVE1MID0gZGF0YS50YWdzLnRpdGxlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllckFydGlzdCcpLmlubmVySFRNTCA9ICBkYXRhLnRhZ3MuYXJ0aXN0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZGF0YS50YWdzLnBpY3R1cmU7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlNjRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGltYWdlLmRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSBcImRhdGE6XCIgKyBpbWFnZS5mb3JtYXQgKyBcIjtiYXNlNjQsXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ0b2EoYmFzZTY0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljUGxheWVyQ292ZXInKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGJhc2U2NCk7XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc6KCcsIGVycm9yLnR5cGUsIGVycm9yLmluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0VHJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCgrK3RoaXMucGxheWxpc3RQb3NpdGlvbiAlIHRoaXMucGxheWxpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEtleWJvYXJkTWFuYWdlciB9IGZyb20gXCIuL0tleWJvYXJkTWFuYWdlclwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBsb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgVG50UHVtcGtpbiB9IGZyb20gXCIuL1RudFB1bXBraW5cIjtcbmltcG9ydCB7IEF0bGFzU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9BdGxhc1Nwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi4vdWkvdWlDb25zdGFudHNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL3VpL21lbnVCYXJcIjtcbmltcG9ydCBNdXNpY1BsYXllciBmcm9tICcuLi9tdXNpYy9NdXNpY1BsYXllcidcblxuXG5cbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgXG4gICAgdGlsZWRTcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBhdGxhc1Nwcml0ZXNoZWV0OiBBdGxhc1Nwcml0ZXNoZWV0O1xuICAgIFxuICAgIG1hcDogVGlsZWRNYXA7XG4gICAgcGl4aUFwcDogQXBwbGljYXRpb247XG5cbiAgICBtdXNpY1BsYXllcjpNdXNpY1BsYXllcjtcbiAgICBcbiAgICB1cGRhdGVTY2hlZHVsZXI6IFVwZGF0ZVNjaGVkdWxlcjtcbiAgICBrZXlib2FyZE1hbmFnZXI6IEtleWJvYXJkTWFuYWdlcjtcbiAgICBtZW51QmFyOiBNZW51QmFyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL0NyZWF0ZSBhIFBpeGkgQXBwbGljYXRpb25cbiAgICAgICAgY2xhc3MgUGl4aU9wdGlvbnMgaW1wbGVtZW50cyBBcHBsaWNhdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7IH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaXhpT3B0aW9ucyA9IG5ldyBQaXhpT3B0aW9ucyh1aUNvbnN0YW50cy5zdGFnZS53aWR0aCwgdWlDb25zdGFudHMuc3RhZ2UuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGl4aUFwcCA9IG5ldyBBcHBsaWNhdGlvbihwaXhpT3B0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICAvL0FkZCB0aGUgY2FudmFzIHRoYXQgUGl4aSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgZm9yIHlvdSB0byB0aGUgSFRNTCBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGl4aUFwcC52aWV3KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9Mb2FkID0gW1xuICAgICAgICAgICAge25hbWU6J3RpbGVkU3ByaXRlc2hlZXRUZXh0dXJlJywgdXJsOidkYXRhL2Fzc2V0cy9zcHJpdGVzaGVldC5wbmcnfSxcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0VGV4dHVyZScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQucG5nJ30sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldERhdGEnLCB1cmw6J2RhdGEvYXNzZXRzL3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0Lmpzb24nfSxcbiAgICAgICAgICAgIHtuYW1lOidtYXBEYXRhJywgdXJsOidkYXRhL21hcHMvbWFwMS5qc29uJ30sXG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIGxvYWRlci5hZGQodG9Mb2FkKS5sb2FkKHRoaXMubG9hZGVyRmluaXNoZWQpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBsb2FkZXJGaW5pc2hlZCA9ICgpPT57XG4gICAgICAgIFxuICAgICAgICB0aGlzLmtleWJvYXJkTWFuYWdlciA9IG5ldyBLZXlib2FyZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XG5cbiAgICAgICAgdGhpcy5tdXNpY1BsYXllciA9IG5ldyBNdXNpY1BsYXllcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoJ2RhdGEvYXNzZXRzL211c2ljL2dvZ29nby5tcDMnKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYygnZGF0YS9hc3NldHMvbXVzaWMvTGV0c19SZXN0Lm1wMycpO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKCdkYXRhL2Fzc2V0cy9tdXNpYy9MYV9DYWxhaG9ycmEubXAzJyk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoJ2RhdGEvYXNzZXRzL211c2ljL1Rvd2VsX0RlZmVuY2VfRW5kaW5nLm1wMycpO1xuICAgICAgICAvL3RoaXMubXVzaWNQbGF5ZXIucGxheSgpO1xuICAgICAgICBcbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XG4gICAgICAgIHRoaXMudGlsZWRTcHJpdGVzaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy50aWxlZFNwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCAxLCAxNiwgMTYsIDMxLCA1NylcbiAgICAgICAgLy9BdGxhcyBTcHJpdGVzaGVldFxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy9SZWdpc3RlciBVcGRhdGUgc2NoZWR1bGVyXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudXBkYXRlU2NoZWR1bGVyLmRvU3RlcCk7XG4gICAgICAgIFxuICAgICAgICAvL0xvYWQgTWFwXG4gICAgICAgIHRoaXMubWFwID0gVGlsZWRNYXAubG9hZE1hcChQSVhJLmxvYWRlci5yZXNvdXJjZXMubWFwRGF0YS5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheSBNYXBcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IFBsYXllciBDb250cm9sc1xuICAgICAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5tYXAucGxheWVycztcbiAgICAgICAgcGxheWVyc1swXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcImNcIiwgXCJ5XCIsIFwieFwiKTtcbiAgICAgICAgcGxheWVyc1swXS5zZXRDb2xvcigweENDRUVBQSk7XG4gICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xuICAgICAgICBwbGF5ZXJzWzFdLnNldENvbG9yKDB4Q0NDQ0ZGKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL0RyYXcgbWVudVxuICAgICAgICB0aGlzLmRyYXdNZW51QmFyKHBsYXllcnMpO1xuICAgICAgICBcbiAgICAgICAgLy9TdGFydCBQaXhpIEFwcFxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMudGVzdCgpO1xuXG4gICAgfVxuXG4gICAgXG4gICAgZHJhd01lbnVCYXIocGxheWVyczogUGxheWVyW10pIHtcbiAgICAgICAgdGhpcy5tZW51QmFyID0gbmV3IE1lbnVCYXIocGxheWVycyk7XG4gICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1lbnVCYXIpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICB0ZXN0KCkge1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLlROVF9QVU1QS0lOLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUsMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0ucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTtcbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuL21vZGVsL0dhbWVNYW5hZ2VyXCJcblxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xuXG5leHBvcnQge2dhbWVNYW5hZ2VyfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==