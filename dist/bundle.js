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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
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

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/jsmediatags/dist/jsmediatags.js":
/*!******************************************************!*\
  !*** ./node_modules/jsmediatags/dist/jsmediatags.js ***!
  \******************************************************/
/*! no static exports found */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: gameManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameManager", function() { return gameManager; });
/* harmony import */ var _model_GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/GameManager */ "./src/model/GameManager.ts");

var gameManager = new _model_GameManager__WEBPACK_IMPORTED_MODULE_0__["GameManager"]();
gameManager.startGame();



/***/ }),

/***/ "./src/model/AtlasSpritesheet.ts":
/*!***************************************!*\
  !*** ./src/model/AtlasSpritesheet.ts ***!
  \***************************************/
/*! exports provided: AtlasSpritesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasSpritesheet", function() { return AtlasSpritesheet; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);

var AtlasSpritesheet = /** @class */ (function () {
    function AtlasSpritesheet(texture, atlasData) {
        this.atlasData = atlasData;
        this.bigTexture = texture;
        this.bigTexture.baseTexture.scaleMode = pixi_js__WEBPACK_IMPORTED_MODULE_0__["SCALE_MODES"].NEAREST;
    }
    AtlasSpritesheet.prototype.getTexture = function (name) {
        var props = this.atlasData.items[name];
        if (props == undefined) {
            throw new Error("Can't find texture '" + name + "' in spritesheet");
        }
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](this.bigTexture.baseTexture, new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](props.x, props.y, props.width, props.height));
    };
    return AtlasSpritesheet;
}());



/***/ }),

/***/ "./src/model/Balancing.ts":
/*!********************************!*\
  !*** ./src/model/Balancing.ts ***!
  \********************************/
/*! exports provided: Balancing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balancing", function() { return Balancing; });
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");

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
            { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PROJECTILE, count: 2 },
            { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PLANT, count: 4 },
        ],
        startSeeds: 5,
    },
    pumpkinPlant: {
        growStepTime: 10000,
        crops: [
            { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TNT_PUMPKIN, count: 2 },
            { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].PUMPKIN_PLANT, count: 3 },
        ],
        startSeeds: 5,
    },
};



/***/ }),

/***/ "./src/model/Constants.ts":
/*!********************************!*\
  !*** ./src/model/Constants.ts ***!
  \********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = {
    ASSET_PATH: "data/assets",
    MAP_PATH: "data/maps",
    SOUND_PATH: "data/assets/sound",
    MUSIC_PATH: "data/assets/music",
};



/***/ }),

/***/ "./src/model/GameManager.ts":
/*!**********************************!*\
  !*** ./src/model/GameManager.ts ***!
  \**********************************/
/*! exports provided: GameManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameManager", function() { return GameManager; });
/* harmony import */ var _TiledSpritesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiledSpritesheet */ "./src/model/TiledSpritesheet.ts");
/* harmony import */ var _TiledMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiledMap */ "./src/model/TiledMap.ts");
/* harmony import */ var _KeyboardManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardManager */ "./src/model/KeyboardManager.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AtlasSpritesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AtlasSpritesheet */ "./src/model/AtlasSpritesheet.ts");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");
/* harmony import */ var _ui_uiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/uiConstants */ "./src/ui/uiConstants.ts");
/* harmony import */ var _ui_menuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/menuBar */ "./src/ui/menuBar.ts");
/* harmony import */ var _music_MusicPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../music/MusicPlayer */ "./src/music/MusicPlayer.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Constants */ "./src/model/Constants.ts");











var GameManager = /** @class */ (function () {
    function GameManager() {
        var _this = this;
        this.loaderFinished = function () {
            _this.keyboardManager = new _KeyboardManager__WEBPACK_IMPORTED_MODULE_2__["KeyboardManager"]();
            _this.updateScheduler = new _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"]();
            _this.musicPlayer = new _music_MusicPlayer__WEBPACK_IMPORTED_MODULE_9__["default"](document.getElementById("container"));
            _this.musicPlayer.addMusic(_Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MUSIC_PATH + "/gogogo.mp3");
            _this.musicPlayer.addMusic(_Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MUSIC_PATH + "/Lets_Rest.mp3");
            _this.musicPlayer.addMusic(_Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MUSIC_PATH + "/La_Calahorra.mp3");
            _this.musicPlayer.addMusic(_Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MUSIC_PATH + "/Towel_Defence_Ending.mp3");
            //this.musicPlayer.play();
            //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
            _this.tiledSpritesheet = new _TiledSpritesheet__WEBPACK_IMPORTED_MODULE_0__["TiledSpritesheet"](PIXI.loader.resources.tiledSpritesheetTexture.texture, 1, 16, 16, 31, 57);
            //Atlas Spritesheet
            _this.atlasSpritesheet = new _AtlasSpritesheet__WEBPACK_IMPORTED_MODULE_5__["AtlasSpritesheet"](PIXI.loader.resources.atlasSpritesheetTexture.texture, PIXI.loader.resources.atlasSpritesheetData.data);
            //Register Update scheduler
            _this.pixiApp.ticker.add(_this.updateScheduler.doStep);
            //Load Map
            _this.map = _TiledMap__WEBPACK_IMPORTED_MODULE_1__["TiledMap"].loadMap(PIXI.loader.resources.mapData.data);
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
        var pixiOptions = new PixiOptions(_ui_uiConstants__WEBPACK_IMPORTED_MODULE_7__["default"].stage.width, _ui_uiConstants__WEBPACK_IMPORTED_MODULE_7__["default"].stage.height, canvas);
        this.pixiApp = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Application"](pixiOptions);
    }
    GameManager.prototype.startGame = function () {
        var toLoad = [
            { name: 'tiledSpritesheetTexture', url: _Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].ASSET_PATH + "/spritesheet.png" },
            { name: 'atlasSpritesheetTexture', url: _Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].ASSET_PATH + "/spritesmith_spritesheet.png" },
            { name: 'atlasSpritesheetData', url: _Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].ASSET_PATH + "/spritesmith_spritesheet.json" },
            { name: 'mapData', url: _Constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAP_PATH + "/map2.json" },
        ];
        pixi_js__WEBPACK_IMPORTED_MODULE_4__["loader"].add(toLoad).load(this.loaderFinished);
    };
    GameManager.prototype.drawMenuBar = function (players) {
        this.menuBar = new _ui_menuBar__WEBPACK_IMPORTED_MODULE_8__["default"](players);
        this.pixiApp.stage.addChild(this.menuBar);
    };
    GameManager.prototype.test = function () {
        this.map.players[0].inventory.giveItem(_Items__WEBPACK_IMPORTED_MODULE_6__["ITEM"].TNT_PUMPKIN, 100);
        this.map.players[0].inventory.giveItem(_Items__WEBPACK_IMPORTED_MODULE_6__["ITEM"].TOMATO_PROJECTILE, 100);
        this.map.players[0].inventory.giveItem(_Items__WEBPACK_IMPORTED_MODULE_6__["ITEM"].WALL, 100);
        this.map.players[0].placeMode = _Items__WEBPACK_IMPORTED_MODULE_6__["ITEM"].TOMATO_PROJECTILE;
    };
    return GameManager;
}());



/***/ }),

/***/ "./src/model/HitEvent.ts":
/*!*******************************!*\
  !*** ./src/model/HitEvent.ts ***!
  \*******************************/
/*! exports provided: HitEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitEvent", function() { return HitEvent; });
var HitEvent = /** @class */ (function () {
    function HitEvent(initiator, damage) {
        this.initiator = initiator;
        this.damage = damage;
    }
    return HitEvent;
}());



/***/ }),

/***/ "./src/model/Inventory.ts":
/*!********************************!*\
  !*** ./src/model/Inventory.ts ***!
  \********************************/
/*! exports provided: Inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inventory", function() { return Inventory; });
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");


var Inventory = /** @class */ (function () {
    function Inventory() {
        this.tomato_projectile = 0;
        this.tnt_pumpkin = 0;
        this.tomato_plant = _Balancing__WEBPACK_IMPORTED_MODULE_0__["Balancing"].tomatoPlant.startSeeds;
        this.pumpkin_plant = _Balancing__WEBPACK_IMPORTED_MODULE_0__["Balancing"].pumpkinPlant.startSeeds;
        this.wall = 0;
    }
    Inventory.prototype.getItem = function (itemType) {
        switch (itemType) {
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TOMATO_PLANT:
                if (this.tomato_plant > 0) {
                    this.tomato_plant--;
                    return true;
                }
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].PUMPKIN_PLANT:
                if (this.pumpkin_plant > 0) {
                    this.pumpkin_plant--;
                    return true;
                }
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TOMATO_PROJECTILE:
                if (this.tomato_projectile > 0) {
                    this.tomato_projectile--;
                    return true;
                }
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TNT_PUMPKIN:
                if (this.tnt_pumpkin > 0) {
                    this.tnt_pumpkin--;
                    return true;
                }
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].WALL:
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
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TOMATO_PROJECTILE:
                this.tomato_projectile += count;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TNT_PUMPKIN:
                this.tnt_pumpkin += count;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].WALL:
                this.wall += count;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].TOMATO_PLANT:
                this.tomato_plant += count;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_1__["ITEM"].PUMPKIN_PLANT:
                this.pumpkin_plant += count;
                break;
        }
    };
    return Inventory;
}());



/***/ }),

/***/ "./src/model/Items.ts":
/*!****************************!*\
  !*** ./src/model/Items.ts ***!
  \****************************/
/*! exports provided: ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM", function() { return ITEM; });
var ITEM;
(function (ITEM) {
    ITEM["TOMATO_PLANT"] = "tomato_plant";
    ITEM["TOMATO_PROJECTILE"] = "tomato_projectile";
    ITEM["PUMPKIN_PLANT"] = "pumpkin_plant";
    ITEM["TNT_PUMPKIN"] = "tnt_pumpkin";
    ITEM["WALL"] = "wall";
    ITEM["HAND"] = "hand";
})(ITEM || (ITEM = {}));



/***/ }),

/***/ "./src/model/KeyboardManager.ts":
/*!**************************************!*\
  !*** ./src/model/KeyboardManager.ts ***!
  \**************************************/
/*! exports provided: KeyboardManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardManager", function() { return KeyboardManager; });
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



/***/ }),

/***/ "./src/model/Plant.ts":
/*!****************************!*\
  !*** ./src/model/Plant.ts ***!
  \****************************/
/*! exports provided: Plant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plant", function() { return Plant; });
/* harmony import */ var _TileObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileObject */ "./src/model/TileObject.ts");
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

var Plant = /** @class */ (function (_super) {
    __extends(Plant, _super);
    function Plant(texture, mother) {
        var _this = _super.call(this, texture, mother) || this;
        _this.vulnerable = false;
        _this.grow();
        return _this;
    }
    Plant.prototype.onHit = function (hitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, crop;
            return __generator(this, function (_b) {
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
}(_TileObject__WEBPACK_IMPORTED_MODULE_0__["TileObject"]));



/***/ }),

/***/ "./src/model/Player.ts":
/*!*****************************!*\
  !*** ./src/model/Player.ts ***!
  \*****************************/
/*! exports provided: DIRECTION, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../index */ "./src/index.ts");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");
/* harmony import */ var _TomatoProjectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TomatoProjectile */ "./src/model/TomatoProjectile.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _HitEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HitEvent */ "./src/model/HitEvent.ts");
/* harmony import */ var _Inventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Inventory */ "./src/model/Inventory.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Constants */ "./src/model/Constants.ts");
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









var DIRECTION;
(function (DIRECTION) {
    DIRECTION["UP"] = "up";
    DIRECTION["RIGHT"] = "right";
    DIRECTION["DOWN"] = "down";
    DIRECTION["LEFT"] = "left";
    DIRECTION["STOP"] = "stop";
})(DIRECTION || (DIRECTION = {}));
;
var Player = /** @class */ (function () {
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
                        _this.vy = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.speed;
                        break;
                    case _this.downKey:
                        _this.changeDirection(DIRECTION.DOWN);
                        _this.vy = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.speed;
                        break;
                    case _this.leftKey:
                        _this.changeDirection(DIRECTION.LEFT);
                        _this.vx = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.speed;
                        break;
                    case _this.rightKey:
                        _this.changeDirection(DIRECTION.RIGHT);
                        _this.vx = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.speed;
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
                if (_this.placeMode == _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].HAND) {
                    var currentTile_1 = _this.getCurrentTile();
                    currentTile_1.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_5__["HitEvent"](_this, _Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.hitDamage));
                    return;
                }
                //Create Tomato if neccessary
                if (_this.placeMode == _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PROJECTILE && _this.inventory.getItem(_Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PROJECTILE)) {
                    new _TomatoProjectile__WEBPACK_IMPORTED_MODULE_3__["TomatoProjectile"](_this.sprite.x, _this.sprite.y, _this.currentDirection, _this, _this);
                    return;
                }
                //Else place tileObject if ressources are in inventory
                else if (_this.inventory.getItem(_this.placeMode)) {
                    _this.playAnimation("put");
                    currentTile.onPlace(_this.placeMode);
                }
            }
        };
        this.onHit = function (hitEvent) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.stunned) return [3 /*break*/, 2];
                        this.stunned = true;
                        Player.damageSound.play();
                        this.wiggle(3);
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(_Balancing__WEBPACK_IMPORTED_MODULE_4__["Balancing"].player.knockdown)];
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
        this.inventory = new _Inventory__WEBPACK_IMPORTED_MODULE_6__["Inventory"]();
        this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PLANT;
        this.loadAnimations();
        this.sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["extras"].AnimatedSprite(this.animations.walk[DIRECTION.DOWN]);
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
        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].keyboardManager.registerKey(_index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].keyboardManager.ANY_KEY, this.keyDown, this.keyUp, "player" + playerId);
        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].updateScheduler.register("player" + playerId, this.doStep);
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
                    var texture = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture(textureName);
                    currentFramesArray.push(texture);
                }
                animations[stateName][subStateName] = currentFramesArray;
            }
        }
        this.animations = animations;
    };
    Player.prototype.switchPlaceMode = function () {
        switch (this.placeMode) {
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].PUMPKIN_PLANT:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TNT_PUMPKIN;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TNT_PUMPKIN:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PLANT;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PLANT:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PROJECTILE;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].TOMATO_PROJECTILE:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].WALL;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].WALL:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].HAND;
                break;
            case _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].HAND:
                this.placeMode = _Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].PUMPKIN_PLANT;
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
        return __awaiter(this, void 0, void 0, function () {
            var frames, _i, frames_1, frame, i;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(50)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: 
                    //Wait a moment
                    return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(80)];
                    case 5:
                        //Wait a moment
                        _a.sent();
                        i = frames.length - 1;
                        _a.label = 6;
                    case 6:
                        if (!(i >= 0)) return [3 /*break*/, 9];
                        this.sprite.texture = frames[i];
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(50)];
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
        return __awaiter(this, void 0, void 0, function () {
            var radiant;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(30)];
                    case 2:
                        _a.sent();
                        this.sprite.rotation -= radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(30)];
                    case 3:
                        _a.sent();
                        this.sprite.rotation -= radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(30)];
                    case 4:
                        _a.sent();
                        this.sprite.rotation += radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_7__["UpdateScheduler"].wait(30)];
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
    Player.SPRITE_SCALE = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Point"](1.5, 1.5);
    Player.HITBOX_TOLERANCE_HORIZONTAL = 10;
    Player.HITBOX_TOLERANCE_TOP = 10;
    Player.damageSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].SOUND_PATH + "/autsch.mp3");
    return Player;
}());



/***/ }),

/***/ "./src/model/PumpkinPlant.ts":
/*!***********************************!*\
  !*** ./src/model/PumpkinPlant.ts ***!
  \***********************************/
/*! exports provided: PumpkinPlant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumpkinPlant", function() { return PumpkinPlant; });
/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ "./src/model/Plant.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
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




var PumpkinPlant = /** @class */ (function (_super) {
    __extends(PumpkinPlant, _super);
    function PumpkinPlant(mother) {
        var _this = _super.call(this, _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture("pumpkin_plant_0"), mother) || this;
        _this.crops = _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].pumpkinPlant.crops;
        return _this;
    }
    PumpkinPlant.prototype.grow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var growStep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        growStep = 1;
                        _a.label = 1;
                    case 1:
                        if (!(growStep < PumpkinPlant.growStates)) return [3 /*break*/, 4];
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(_Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].pumpkinPlant.growStepTime)];
                    case 2:
                        _a.sent();
                        this.texture = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture("pumpkin_plant_" + growStep);
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
}(_Plant__WEBPACK_IMPORTED_MODULE_0__["Plant"]));



/***/ }),

/***/ "./src/model/StatusBar.ts":
/*!********************************!*\
  !*** ./src/model/StatusBar.ts ***!
  \********************************/
/*! exports provided: StatusBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBar", function() { return StatusBar; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
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

var StatusBar = /** @class */ (function (_super) {
    __extends(StatusBar, _super);
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
        _this.borderRectangle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
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
            this.progressShape = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
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
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]));



/***/ }),

/***/ "./src/model/Tile.ts":
/*!***************************!*\
  !*** ./src/model/Tile.ts ***!
  \***************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _TiledMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiledMap */ "./src/model/TiledMap.ts");
/* harmony import */ var _TntPumpkin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TntPumpkin */ "./src/model/TntPumpkin.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wall */ "./src/model/Wall.ts");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");
/* harmony import */ var _TomatoPlant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TomatoPlant */ "./src/model/TomatoPlant.ts");
/* harmony import */ var _PumpkinPlant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PumpkinPlant */ "./src/model/PumpkinPlant.ts");
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







var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
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
            newTileObject.scale = _TiledMap__WEBPACK_IMPORTED_MODULE_0__["TiledMap"].SPRITE_SCALE;
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
                case _Items__WEBPACK_IMPORTED_MODULE_4__["ITEM"].TOMATO_PLANT:
                    new _TomatoPlant__WEBPACK_IMPORTED_MODULE_5__["TomatoPlant"](this);
                    break;
                case _Items__WEBPACK_IMPORTED_MODULE_4__["ITEM"].PUMPKIN_PLANT:
                    new _PumpkinPlant__WEBPACK_IMPORTED_MODULE_6__["PumpkinPlant"](this);
                    break;
                case _Items__WEBPACK_IMPORTED_MODULE_4__["ITEM"].TNT_PUMPKIN:
                    new _TntPumpkin__WEBPACK_IMPORTED_MODULE_1__["TntPumpkin"](this);
                    break;
                case _Items__WEBPACK_IMPORTED_MODULE_4__["ITEM"].WALL:
                    new _Wall__WEBPACK_IMPORTED_MODULE_3__["Wall"](this);
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
}(pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"]));



/***/ }),

/***/ "./src/model/TileObject.ts":
/*!*********************************!*\
  !*** ./src/model/TileObject.ts ***!
  \*********************************/
/*! exports provided: TileObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileObject", function() { return TileObject; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./src/model/Constants.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
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




var TileObject = /** @class */ (function (_super) {
    __extends(TileObject, _super);
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
            _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].updateScheduler.register("wait_to_become_solid_" + _this.mother.gridX + "_" + _this.mother.gridY, _this.tryToBecomeSolid);
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
        return __awaiter(this, void 0, void 0, function () {
            var radiant;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(30)];
                    case 2:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(30)];
                    case 3:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(30)];
                    case 4:
                        _a.sent();
                        this.rotation += radiant;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(30)];
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
        return __awaiter(this, void 0, void 0, function () {
            var scaleDiff;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(10)];
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(times > 0)) return [3 /*break*/, 3];
                        //Give the tileobject a green tint
                        this.tint = 0xFFAAAA;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(200)];
                    case 1:
                        _a.sent();
                        //Remove the tint
                        this.tint = 0xFFFFFF;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(200)];
                    case 2:
                        _a.sent();
                        times--;
                        return [3 /*break*/, 0];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TileObject.onHitSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].SOUND_PATH + "/hit.mp3");
    TileObject.onDestroySound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].SOUND_PATH + "/blob.mp3");
    return TileObject;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"]));



/***/ }),

/***/ "./src/model/TiledMap.ts":
/*!*******************************!*\
  !*** ./src/model/TiledMap.ts ***!
  \*******************************/
/*! exports provided: TiledMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledMap", function() { return TiledMap; });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/model/Player.ts");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/model/Tile.ts");
/* harmony import */ var _Tower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tower */ "./src/model/Tower.ts");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tree */ "./src/model/Tree.ts");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wall */ "./src/model/Wall.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./src/index.ts");
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







var TiledMap = /** @class */ (function (_super) {
    __extends(TiledMap, _super);
    function TiledMap() {
        var _this = _super.call(this) || this;
        _this.tileContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Container"]();
        _this.addChild(_this.tileContainer);
        _this.tileObjectContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Container"]();
        _this.addChild(_this.tileObjectContainer);
        _this.playerContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Container"]();
        _this.addChild(_this.playerContainer);
        _this.extraStuffContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Container"]();
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
        var tiledSpritesheet = _index__WEBPACK_IMPORTED_MODULE_6__["gameManager"].tiledSpritesheet;
        var atlasSpritesheet = _index__WEBPACK_IMPORTED_MODULE_6__["gameManager"].atlasSpritesheet;
        var SPRITE_SCALE = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Point"](TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
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
                            var newTile = new _Tile__WEBPACK_IMPORTED_MODULE_1__["Tile"](texture, column, row, map);
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
                        var newPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__["Player"](x, y, map, playerId);
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
                        var newTower = new _Tower__WEBPACK_IMPORTED_MODULE_2__["Tower"](texture, mother, ownerId);
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
                        var newTree = new _Tree__WEBPACK_IMPORTED_MODULE_3__["Tree"](texture, mother);
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
                        map.addTileObject(new _Wall__WEBPACK_IMPORTED_MODULE_5__["Wall"](mother));
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
        tile.x = tile.gridX * _index__WEBPACK_IMPORTED_MODULE_6__["gameManager"].tiledSpritesheet.tileWidth * TiledMap.SPRITE_SCALE.x;
        tile.y = tile.gridY * _index__WEBPACK_IMPORTED_MODULE_6__["gameManager"].tiledSpritesheet.tileHeight * TiledMap.SPRITE_SCALE.y;
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
    TiledMap.SPRITE_SCALE = new pixi_js__WEBPACK_IMPORTED_MODULE_4__["Point"](TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
    return TiledMap;
}(pixi_js__WEBPACK_IMPORTED_MODULE_4__["Container"]));



/***/ }),

/***/ "./src/model/TiledSpritesheet.ts":
/*!***************************************!*\
  !*** ./src/model/TiledSpritesheet.ts ***!
  \***************************************/
/*! exports provided: TiledSpritesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledSpritesheet", function() { return TiledSpritesheet; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);

var TiledSpritesheet = /** @class */ (function () {
    function TiledSpritesheet(texture, border, tileWidth, tileHeight, rows, columns) {
        this.border = border;
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;
        this.rows = rows;
        this.columns = columns;
        this.bigTexture = texture;
        this.bigTexture.baseTexture.scaleMode = pixi_js__WEBPACK_IMPORTED_MODULE_0__["SCALE_MODES"].NEAREST;
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
            var t = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](this.bigTexture.baseTexture, new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](x, y, tileWidth, tileHeight));
            //Save Texture in cache array
            this.textures[gid] = t;
            return t;
        }
    };
    return TiledSpritesheet;
}());



/***/ }),

/***/ "./src/model/TntPumpkin.ts":
/*!*********************************!*\
  !*** ./src/model/TntPumpkin.ts ***!
  \*********************************/
/*! exports provided: TntPumpkin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TntPumpkin", function() { return TntPumpkin; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./src/model/Constants.ts");
/* harmony import */ var _HitEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HitEvent */ "./src/model/HitEvent.ts");
/* harmony import */ var _TileObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TileObject */ "./src/model/TileObject.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
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






var TntPumpkin = /** @class */ (function (_super) {
    __extends(TntPumpkin, _super);
    function TntPumpkin(mother) {
        var _this = _super.call(this, _index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].atlasSpritesheet.getTexture("pumpkin_idle"), mother) || this;
        _this.loadAnimations();
        return _this;
    }
    TntPumpkin.prototype.onHit = function (hitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var tilesAround, _i, tilesAround_1, tile;
            return __generator(this, function (_a) {
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
                            tile.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_3__["HitEvent"](hitEvent.initiator, _Balancing__WEBPACK_IMPORTED_MODULE_1__["Balancing"].tntPumpkin.explosionDamage));
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
                var texture = _index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].atlasSpritesheet.getTexture(textureName);
                currentFramesArray.push(texture);
            }
            animations[stateName] = currentFramesArray;
        }
        this.animations = animations;
    };
    TntPumpkin.prototype.playAnimation = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var frames, _i, frames_1, frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frames = this.animations[state];
                        _i = 0, frames_1 = frames;
                        _a.label = 1;
                    case 1:
                        if (!(_i < frames_1.length)) return [3 /*break*/, 4];
                        frame = frames_1[_i];
                        this.texture = frame;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_5__["UpdateScheduler"].wait(50)];
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
        tiles.push(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(myX + 1, myY));
        tiles.push(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(myX - 1, myY));
        tiles.push(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(myX, myY + 1));
        tiles.push(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(myX, myY - 1));
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
        var p = new TntPumpkin(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(1, 0));
        new TntPumpkin(_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.getTile(2, 0));
        p.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_3__["HitEvent"](_index__WEBPACK_IMPORTED_MODULE_0__["gameManager"].map.players[0], 1));
    };
    TntPumpkin.tickSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].SOUND_PATH + "/klick.mp3");
    TntPumpkin.explodeSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].SOUND_PATH + "/explode.mp3");
    return TntPumpkin;
}(_TileObject__WEBPACK_IMPORTED_MODULE_4__["TileObject"]));



/***/ }),

/***/ "./src/model/TomatoPlant.ts":
/*!**********************************!*\
  !*** ./src/model/TomatoPlant.ts ***!
  \**********************************/
/*! exports provided: TomatoPlant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomatoPlant", function() { return TomatoPlant; });
/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ "./src/model/Plant.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
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




var TomatoPlant = /** @class */ (function (_super) {
    __extends(TomatoPlant, _super);
    function TomatoPlant(mother) {
        var _this = _super.call(this, _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture("tomato_plant_0"), mother) || this;
        _this.crops = _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomatoPlant.crops;
        return _this;
    }
    TomatoPlant.prototype.grow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var growStep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        growStep = 1;
                        _a.label = 1;
                    case 1:
                        if (!(growStep < TomatoPlant.growStates)) return [3 /*break*/, 4];
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_2__["UpdateScheduler"].wait(_Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomatoPlant.growStepTime)];
                    case 2:
                        _a.sent();
                        this.texture = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture("tomato_plant_" + growStep);
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
}(_Plant__WEBPACK_IMPORTED_MODULE_0__["Plant"]));



/***/ }),

/***/ "./src/model/TomatoProjectile.ts":
/*!***************************************!*\
  !*** ./src/model/TomatoProjectile.ts ***!
  \***************************************/
/*! exports provided: TomatoProjectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomatoProjectile", function() { return TomatoProjectile; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./src/model/Constants.ts");
/* harmony import */ var _HitEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HitEvent */ "./src/model/HitEvent.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player */ "./src/model/Player.ts");
/* harmony import */ var _UpdateScheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateScheduler */ "./src/model/UpdateScheduler.ts");
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







var TomatoProjectile = /** @class */ (function (_super) {
    __extends(TomatoProjectile, _super);
    /**
     *
     * @param x x-coordinate to start
     * @param y y-coordinate to start
     * @param direction direction to fly
     * @param initiator the player or object that creates this tomate (this player will be imun to this tomato)
     * @param owner the player that will be referenced in hitEvent if the tomato hits something
     */
    function TomatoProjectile(x, y, direction, initiator, owner) {
        var _this = _super.call(this, _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture("tomato_projectile_fly")) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.animations = [];
        _this.doStep = function (delta) {
            //Calculate theoretically next position
            var newX = _this.x + _this.vx * delta;
            var newY = _this.y + _this.vy * delta;
            //Get all tiles that would be touched when moving the next step
            var xRange = {
                from: Math.floor((newX - _this.width / 2) / _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.finalTileWidth),
                to: Math.floor((newX + _this.width / 2) / _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.finalTileWidth)
            };
            var yRange = {
                from: Math.floor((newY - _this.height / 2) / _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.finalTileHeight),
                to: Math.floor((newY + _this.height / 2) / _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.finalTileHeight)
            };
            //Check if the tomato hits a Player
            for (var _i = 0, _a = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.players; _i < _a.length; _i++) {
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
                    if (_index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.getTile(x, y) == undefined || _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.getTile(x, y).tileObject) {
                        var blockedTile = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.getTile(x, y);
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
        };
        _this.id = TomatoProjectile.getNewId();
        _this.x = x;
        _this.y = y;
        _this.owner = owner;
        _this.initiator = initiator;
        _this.scale = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Point"](2, 2);
        _this.x += _this.width;
        _this.y += _this.height;
        _this.anchor.set(0.5);
        switch (direction) {
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].UP:
                _this.vy = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomatoProjectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].DOWN:
                _this.vy = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomatoProjectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].LEFT:
                _this.vx = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomatoProjectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].RIGHT:
                _this.vx = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomatoProjectile.speed;
                break;
        }
        for (var i = 0; i < 6; i++) {
            var textureName = "tomato_projectile_smash_" + i;
            var texture = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture(textureName);
            _this.animations.push(texture);
        }
        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].updateScheduler.register(_this.id, _this.doStep);
        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].map.extraStuffContainer.addChild(_this);
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
                        if (!(collider != this.initiator)) return [3 /*break*/, 5];
                        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].updateScheduler.unregister(this.id);
                        TomatoProjectile.smashSound.play(); //Play Smash sound
                        //Trigger Hit event on hitten tile or Player
                        if (collider) {
                            collider.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_4__["HitEvent"](this.owner, _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomatoProjectile.hitDamage));
                        }
                        _i = 0, _a = this.animations;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        frame = _a[_i];
                        this.texture = frame;
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_6__["UpdateScheduler"].wait(40)];
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
    TomatoProjectile.throwSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].SOUND_PATH + "/snap.mp3");
    TomatoProjectile.smashSound = new Audio(_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].SOUND_PATH + "/smash.mp3");
    return TomatoProjectile;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"]));



/***/ }),

/***/ "./src/model/Tower.ts":
/*!****************************!*\
  !*** ./src/model/Tower.ts ***!
  \****************************/
/*! exports provided: Tower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tower", function() { return Tower; });
/* harmony import */ var _TileObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileObject */ "./src/model/TileObject.ts");
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusBar */ "./src/model/StatusBar.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/model/Player.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _TomatoProjectile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TomatoProjectile */ "./src/model/TomatoProjectile.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./src/index.ts");
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






var Tower = /** @class */ (function (_super) {
    __extends(Tower, _super);
    function Tower(texture, mother, ownerId) {
        var _this = _super.call(this, texture, mother, true) || this;
        _this.health = _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tower.defaultHealth;
        _this.statusBar = new _StatusBar__WEBPACK_IMPORTED_MODULE_1__["StatusBar"](_this, false);
        _this.ownerId = ownerId;
        return _this;
    }
    Tower.prototype.onHit = function (hitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var tileHeight, tileWidth;
            return __generator(this, function (_a) {
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
                        this.statusBar.setProgress(this.health / _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tower.defaultHealth);
                        Tower.onHitSound.play();
                        return [4 /*yield*/, this.wiggle(_Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tower.cooldown)];
                    case 2:
                        _a.sent();
                        tileHeight = this.mother.map.finalTileHeight;
                        tileWidth = this.mother.map.finalTileWidth;
                        if (this.mother.gridY - 1 >= 0) {
                            new _TomatoProjectile__WEBPACK_IMPORTED_MODULE_4__["TomatoProjectile"](this.x, (this.mother.gridY - 1) * tileHeight, _Player__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].UP, this, this.getOwner());
                        }
                        if (this.mother.gridX - 1 >= 0) {
                            new _TomatoProjectile__WEBPACK_IMPORTED_MODULE_4__["TomatoProjectile"]((this.mother.gridX - 1) * tileWidth, this.y, _Player__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT, this, this.getOwner());
                        }
                        if (this.mother.gridY + 1 >= 0) {
                            new _TomatoProjectile__WEBPACK_IMPORTED_MODULE_4__["TomatoProjectile"](this.x, (this.mother.gridY + 1) * tileHeight, _Player__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].DOWN, this, this.getOwner());
                        }
                        if (this.mother.gridX + 1 >= 0) {
                            new _TomatoProjectile__WEBPACK_IMPORTED_MODULE_4__["TomatoProjectile"]((this.mother.gridX + 1) * tileWidth, this.y, _Player__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT, this, this.getOwner());
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
        return ___WEBPACK_IMPORTED_MODULE_5__["gameManager"].map.players[this.ownerId];
    };
    return Tower;
}(_TileObject__WEBPACK_IMPORTED_MODULE_0__["TileObject"]));



/***/ }),

/***/ "./src/model/Tree.ts":
/*!***************************!*\
  !*** ./src/model/Tree.ts ***!
  \***************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony import */ var _TileObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileObject */ "./src/model/TileObject.ts");
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusBar */ "./src/model/StatusBar.ts");
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items */ "./src/model/Items.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
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




var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(texture, mother) {
        var _this = _super.call(this, texture, mother) || this;
        _this.health = _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tree.defaultHealth;
        _this.statusBar = new _StatusBar__WEBPACK_IMPORTED_MODULE_1__["StatusBar"](_this, false);
        return _this;
    }
    Tree.prototype.onHit = function (hitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                        this.statusBar.setProgress(this.health / _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tree.defaultHealth);
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.vulnerable = false;
                        initiator.inventory.giveItem(_Items__WEBPACK_IMPORTED_MODULE_2__["ITEM"].WALL, _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tree.cropCount);
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
}(_TileObject__WEBPACK_IMPORTED_MODULE_0__["TileObject"]));



/***/ }),

/***/ "./src/model/UpdateScheduler.ts":
/*!**************************************!*\
  !*** ./src/model/UpdateScheduler.ts ***!
  \**************************************/
/*! exports provided: UpdateScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateScheduler", function() { return UpdateScheduler; });
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



/***/ }),

/***/ "./src/model/Wall.ts":
/*!***************************!*\
  !*** ./src/model/Wall.ts ***!
  \***************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony import */ var _TileObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileObject */ "./src/model/TileObject.ts");
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusBar */ "./src/model/StatusBar.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _Balancing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Balancing */ "./src/model/Balancing.ts");
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




var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall(mother) {
        var _this = _super.call(this, _index__WEBPACK_IMPORTED_MODULE_2__["gameManager"].tiledSpritesheet.getTexture(949), mother, true) || this;
        _this.health = _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].wall.defaultHealth;
        _this.statusBar = new _StatusBar__WEBPACK_IMPORTED_MODULE_1__["StatusBar"](_this, false);
        return _this;
    }
    Wall.prototype.onHit = function (hitEvent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                        this.statusBar.setProgress(this.health / _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].wall.defaultHealth);
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
}(_TileObject__WEBPACK_IMPORTED_MODULE_0__["TileObject"]));



/***/ }),

/***/ "./src/music/MusicPlayer.ts":
/*!**********************************!*\
  !*** ./src/music/MusicPlayer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsmediatags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsmediatags */ "./node_modules/jsmediatags/dist/jsmediatags.js");
/* harmony import */ var jsmediatags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsmediatags__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_uiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/uiConstants */ "./src/ui/uiConstants.ts");
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


var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(htmlParent) {
        var _this = this;
        this.playlist = [];
        this.playlistPosition = 0;
        this.play = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.audio) {
                    this.loadMusicAt(this.playlistPosition);
                }
                this.audio.play();
                return [2 /*return*/];
            });
        }); };
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
        var html = "\n            <style>\n            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n                #container{\n                    position: absolute;\n                    margin-left: auto;\n                    margin-right: auto;\n                    left: 0;\n                    right: 0;\n                    top: 80px;\n                }\n\n                .musicPlayer{\n                    background-color: #212121e0;\n                    width: 400px;\n                    border-radius: 5px;\n                    border: 3px solid #616161;\n                    color: white;\n                    font-family: 'VT323', monospace;\n                    display: flex;\n                    padding: 15px;\n                    margin: 0 auto;\n                }\n                .musicPlayerCover{}\n                .musicPlayerTitle{\n                    font-size: 20pt;\n                }\n                .musicPlayerArtist{\n                    font-size: 15pt;\n                }\n                .musicPlayerInfo{\n                    padding: 0px 15px;\n                }\n            </style>\n\n            <div class=\"musicPlayer\" style=\"display:none\">\n                <img class=\"musicPlayerCover\" width=\"80px\" src=\"https://www.superjojo.de/main/pics/mensa.png\">\n                <div class=\"musicPlayerInfo\">\n                    <div class=\"musicPlayerTitle\">\n                        Deep and funky music\n                    </div>\n                    <div class=\"musicPlayerArtist\">\n                        Mister bombastic\n                    </div>\n                </div>\n            </div>\n        ";
        htmlParent.innerHTML += html;
        document.getElementById('musicOn').onclick = this.nextTrack;
        document.getElementById('musicOff').onclick = this.pause;
    }
    MusicPlayer.prototype.addMusic = function (path) {
        this.playlist.push(path);
    };
    MusicPlayer.prototype.loadMusicAt = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            var path, resp, blob;
            var _this = this;
            return __generator(this, function (_a) {
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
                        return [4 /*yield*/, fetch(path)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.blob()];
                    case 2:
                        blob = _a.sent();
                        jsmediatags__WEBPACK_IMPORTED_MODULE_0__["read"](blob, {
                            onSuccess: function (data) {
                                //console.log(data.tags);
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
                                    _this.slideDown();
                                    setTimeout(_this.slideUp, _ui_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].musicPlayer.displayTime);
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
    /* SLIDE UP */
    MusicPlayer.prototype.slideUp = function (duration) {
        if (duration === void 0) { duration = 500; }
        var target = document.querySelector(".musicPlayer");
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0";
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        window.setTimeout(function () {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            //alert("!");
        }, duration);
    };
    /* SLIDE DOWN */
    MusicPlayer.prototype.slideDown = function (duration) {
        if (duration === void 0) { duration = 500; }
        var target = document.querySelector(".musicPlayer");
        target.style.removeProperty('display');
        var display = window.getComputedStyle(target).display;
        if (display === 'none')
            display = 'block';
        target.style.display = display;
        var height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0";
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    };
    return MusicPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (MusicPlayer);


/***/ }),

/***/ "./src/ui/menuBar.ts":
/*!***************************!*\
  !*** ./src/ui/menuBar.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerMenu */ "./src/ui/playerMenu.ts");
/* harmony import */ var _uiConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiConstants */ "./src/ui/uiConstants.ts");
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



var MenuBar = /** @class */ (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar(players) {
        var _this = _super.call(this) || this;
        _this.playerMenus = [];
        for (var i = 0; i < players.length; i++) {
            var menuWidth = _uiConstants__WEBPACK_IMPORTED_MODULE_2__["default"].stage.width / players.length;
            var playerMenu = new _playerMenu__WEBPACK_IMPORTED_MODULE_1__["default"](players[i], menuWidth, menuWidth * i);
            _this.playerMenus.push(playerMenu);
            _this.addChild(playerMenu);
        }
        return _this;
    }
    return MenuBar;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]));
/* harmony default export */ __webpack_exports__["default"] = (MenuBar);


/***/ }),

/***/ "./src/ui/playerMenu.ts":
/*!******************************!*\
  !*** ./src/ui/playerMenu.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiConstants */ "./src/ui/uiConstants.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _model_Balancing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _model_Items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Items */ "./src/model/Items.ts");
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





var PlayerMenu = /** @class */ (function (_super) {
    __extends(PlayerMenu, _super);
    function PlayerMenu(player, width, x) {
        var _this = _super.call(this) || this;
        _this.tomatoProjectileSprites = [];
        _this.doStep = function () {
            _this.actionIcon.texture = _index__WEBPACK_IMPORTED_MODULE_2__["gameManager"].atlasSpritesheet.getTexture(_this.player.placeMode);
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
        _this.y = _uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].stage.height - _uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.height;
        _this.x = x;
        var bgShape = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        bgShape.beginFill(player.color);
        bgShape.drawRect(0, 0, width, _uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.height);
        bgShape.endFill();
        _this.addChild(bgShape);
        var ai = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_index__WEBPACK_IMPORTED_MODULE_2__["gameManager"].atlasSpritesheet.getTexture(player.placeMode));
        ai.scale.set(_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.icon.scale);
        ai.x = (_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.height - ai.width) / 2;
        ai.y = (_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.height - ai.width) / 2;
        _this.addChild(ai);
        _this.actionIcon = ai;
        //Create tomato sprites
        var offsetX = _this.width - ((_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.inventory.spacing + _uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.inventory.spriteSize) * _model_Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomatoProjectile.inventoryLimit);
        for (var i = 0; i < _model_Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomatoProjectile.inventoryLimit; i++) {
            var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_index__WEBPACK_IMPORTED_MODULE_2__["gameManager"].atlasSpritesheet.getTexture(_model_Items__WEBPACK_IMPORTED_MODULE_4__["ITEM"].TOMATO_PROJECTILE));
            sprite.x = (_uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.inventory.spriteSize + _uiConstants__WEBPACK_IMPORTED_MODULE_1__["default"].menuBar.inventory.spacing) * i + offsetX;
            sprite.y = 5;
            _this.tomatoProjectileSprites.push(sprite);
            _this.addChild(sprite);
        }
        _index__WEBPACK_IMPORTED_MODULE_2__["gameManager"].updateScheduler.register("playerMenu" + player.playerId, _this.doStep);
        return _this;
    }
    return PlayerMenu;
}(pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]));
/* harmony default export */ __webpack_exports__["default"] = (PlayerMenu);


/***/ }),

/***/ "./src/ui/uiConstants.ts":
/*!*******************************!*\
  !*** ./src/ui/uiConstants.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    },
    musicPlayer: {
        displayTime: 3000,
    }
};
/* harmony default export */ __webpack_exports__["default"] = (uiConstants);


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9qc21lZGlhdGFncy9kaXN0L2pzbWVkaWF0YWdzLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9BdGxhc1Nwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQmFsYW5jaW5nLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0l0ZW1zLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QdW1wa2luUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9TdGF0dXNCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub3dlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbXVzaWMvTXVzaWNQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy91aS9tZW51QmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsb0RBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGdEQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOzs7QUFHaEU7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLGdFQUFnRTtBQUNuRTs7QUFFQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRkFBMkY7O0FBRTNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRUFBRSxvRUFBb0U7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7OztBQUdoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdRQUFnUTs7QUFFaFE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEVBQUUsNkNBQTZDO0FBQ2hEOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQSxxREFBcUQ7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUEscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLGdQQUFnUCxFQUFFLEdBQUc7QUFDeFAsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUN4c0dEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUErQztBQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDhEQUFXLEVBQUUsQ0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSDs7Ozs7Ozs7Ozs7OztBQ0xyQjtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUUxRDtJQU1DLDBCQUFZLE9BQU8sRUFBRSxTQUFTO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxtREFBVyxDQUFDLE9BQU8sQ0FBQztJQUM3RCxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLElBQVk7UUFFdEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXVCLElBQUkscUJBQWtCLENBQUMsQ0FBQztTQUMvRDtRQUVELE9BQU8sSUFBSSwrQ0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksaURBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBR0YsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUFBO0FBQUE7QUFBOEI7QUFFOUIsSUFBTSxTQUFTLEdBQUc7SUFDZCxJQUFJLEVBQUU7UUFDRixhQUFhLEVBQUUsQ0FBQztRQUNoQixTQUFTLEVBQUUsQ0FBQztLQUNmO0lBRUQsSUFBSSxFQUFFO1FBQ0YsYUFBYSxFQUFFLENBQUM7S0FDbkI7SUFFRCxVQUFVLEVBQUU7UUFDUixlQUFlLEVBQUUsR0FBRztLQUN2QjtJQUVELE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUcsSUFBSTtLQUNuQjtJQUVELEtBQUssRUFBRTtRQUNILGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxDQUFDLENBQUMsNERBQTREO0tBQzNFO0lBRUQsZ0JBQWdCLEVBQUU7UUFDZCxLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRSxHQUFHO1FBQ2QsY0FBYyxFQUFHLEVBQUU7S0FDdEI7SUFFRCxXQUFXLEVBQUU7UUFDVCxZQUFZLEVBQUUsSUFBSTtRQUNsQixLQUFLLEVBQUU7WUFDSCxFQUFFLElBQUksRUFBRSwyQ0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsMkNBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtTQUN4QztRQUNELFVBQVUsRUFBRSxDQUFDO0tBQ2hCO0lBRUQsWUFBWSxFQUFFO1FBQ1YsWUFBWSxFQUFFLEtBQUs7UUFDbkIsS0FBSyxFQUFFO1lBQ0gsRUFBRSxJQUFJLEVBQUUsMkNBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSwyQ0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1NBQ3pDO1FBQ0QsVUFBVSxFQUFFLENBQUM7S0FDaEI7Q0FFSjtBQUVtQjs7Ozs7Ozs7Ozs7OztBQ3JEcEI7QUFBQTtBQUFBLElBQU0sU0FBUyxHQUFHO0lBQ2QsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFFLFdBQVc7SUFDckIsVUFBVSxFQUFFLG1CQUFtQjtJQUMvQixVQUFVLEVBQUUsbUJBQW1CO0NBQ2xDO0FBRW1COzs7Ozs7Ozs7Ozs7O0FDUHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDaEI7QUFDYztBQUNBO0FBQ2M7QUFDWjtBQUN2QjtBQUNhO0FBRVI7QUFDVTtBQUNOO0FBSXhDO0lBY0k7UUFBQSxpQkFRQztRQWdCTyxtQkFBYyxHQUFHO1lBRXJCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxnRUFBZSxFQUFFLENBQUM7WUFDN0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGdFQUFlLEVBQUUsQ0FBQztZQUU3QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksMERBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUkscURBQVMsQ0FBQyxVQUFVLGdCQUFhLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBSSxxREFBUyxDQUFDLFVBQVUsbUJBQWdCLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBSSxxREFBUyxDQUFDLFVBQVUsc0JBQW1CLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBSSxxREFBUyxDQUFDLFVBQVUsOEJBQTJCLENBQUMsQ0FBQztZQUM5RSwwQkFBMEI7WUFFMUIsc0RBQXNEO1lBQ3RELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtFQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3RILG1CQUFtQjtZQUNuQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrRUFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckosMkJBQTJCO1lBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELFVBQVU7WUFDVixLQUFJLENBQUMsR0FBRyxHQUFHLGtEQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVoRSxhQUFhO1lBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV0QyxxQkFBcUI7WUFDckIsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUc5QixXQUFXO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxQixnQkFBZ0I7WUFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFNUIsY0FBYztRQUVsQixDQUFDO1FBakVHLDJCQUEyQjtRQUMzQjtZQUNJLHFCQUFtQixLQUFLLEVBQVMsTUFBTSxFQUFTLElBQUk7Z0JBQWpDLFVBQUssR0FBTCxLQUFLO2dCQUFTLFdBQU0sR0FBTixNQUFNO2dCQUFTLFNBQUksR0FBSixJQUFJO1lBQUksQ0FBQztZQUM3RCxrQkFBQztRQUFELENBQUM7UUFDRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLHVEQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSx1REFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1EQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELCtCQUFTLEdBQVQ7UUFFSSxJQUFNLE1BQU0sR0FBRztZQUNYLEVBQUMsSUFBSSxFQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBSSxxREFBUyxDQUFDLFVBQVUscUJBQWtCLEVBQUM7WUFDL0UsRUFBQyxJQUFJLEVBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFJLHFEQUFTLENBQUMsVUFBVSxpQ0FBOEIsRUFBQztZQUMzRixFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUkscURBQVMsQ0FBQyxVQUFVLGtDQUErQixFQUFDO1lBQ3pGLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUkscURBQVMsQ0FBQyxRQUFRLGVBQVksRUFBQztTQUMxRDtRQUVELDhDQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQStDRCxpQ0FBVyxHQUFYLFVBQVksT0FBaUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1EQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSUQsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMkNBQUksQ0FBQyxXQUFXLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQ0FBSSxDQUFDLGlCQUFpQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMkNBQUksQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLDJDQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDM0QsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM5R0Q7QUFBQTtBQUFBO0lBS0ksa0JBQVksU0FBaUIsRUFBRSxNQUFjO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRXpCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNUO0FBRS9CO0lBQUE7UUFFSSxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVksR0FBVyxvREFBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDeEQsa0JBQWEsR0FBVyxvREFBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDMUQsU0FBSSxHQUFXLENBQUMsQ0FBQztJQXNEckIsQ0FBQztJQXBERywyQkFBTyxHQUFQLFVBQVEsUUFBYztRQUNsQixRQUFRLFFBQVEsRUFBRTtZQUVkLEtBQUssMkNBQUksQ0FBQyxZQUFZO2dCQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUFDLE1BQU07WUFFWixLQUFLLDJDQUFJLENBQUMsYUFBYTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFBQyxNQUFNO1lBRVosS0FBSywyQ0FBSSxDQUFDLGlCQUFpQjtnQkFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7Z0JBQUMsTUFBTTtZQUdaLEtBQUssMkNBQUksQ0FBQyxXQUFXO2dCQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUFDLE1BQU07WUFFWixLQUFLLDJDQUFJLENBQUMsSUFBSTtnQkFDVixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDWixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFBQyxNQUFNO1NBQ2Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQVksUUFBUSwwQkFBdUIsQ0FBQztRQUN4RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLFFBQWMsRUFBRSxLQUFhO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUSxRQUFRLFdBQU0sS0FBTyxDQUFDLENBQUM7UUFDM0MsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLDJDQUFJLENBQUMsaUJBQWlCO2dCQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUM7Z0JBQUMsTUFBTTtZQUVwRSxLQUFLLDJDQUFJLENBQUMsV0FBVztnQkFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztnQkFBQyxNQUFNO1lBRXhELEtBQUssMkNBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO2dCQUFDLE1BQU07WUFFMUMsS0FBSywyQ0FBSSxDQUFDLFlBQVk7Z0JBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7Z0JBQUMsTUFBTTtZQUUxRCxLQUFLLDJDQUFJLENBQUMsYUFBYTtnQkFBRSxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztnQkFBQyxNQUFNO1NBQy9EO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvREQ7QUFBQTtBQUFBLElBQUssSUFPSjtBQVBELFdBQUssSUFBSTtJQUNMLHFDQUE2QjtJQUM3QiwrQ0FBdUM7SUFDdkMsdUNBQStCO0lBQy9CLG1DQUEyQjtJQUMzQixxQkFBYTtJQUNiLHFCQUFhO0FBQ2pCLENBQUMsRUFQSSxJQUFJLEtBQUosSUFBSSxRQU9SO0FBR2U7Ozs7Ozs7Ozs7Ozs7QUNWaEI7QUFBQTtBQUFBO0lBTUs7UUFBQSxpQkFHQTtRQVBBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQU9wQixZQUFPLEdBQUcsVUFBQyxLQUFLO1lBQ2IsS0FBSyxJQUFNLENBQUMsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7b0JBQ3pELElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxJQUFJLFVBQVUsRUFBRTt3QkFDdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDMUI7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFFQSxjQUFTLEdBQUcsVUFBQyxLQUFLO1lBQ2YsS0FBSyxJQUFNLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7b0JBQ3pELElBQUksT0FBTyxPQUFPLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTt3QkFDeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUF4QkcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXdCQSxxQ0FBVyxHQUFYLFVBQVksR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFQSx1Q0FBYSxHQUFiLFVBQWMsVUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDeUM7QUFXMUM7SUFBb0MseUJBQVU7SUFLMUMsZUFBWSxPQUFnQixFQUFFLE1BQVk7UUFBMUMsWUFDSSxrQkFBTSxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBR3pCO1FBRkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztJQUNoQixDQUFDO0lBSUsscUJBQUssR0FBWCxVQUFZLFFBQWtCOzs7Ozs7d0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUFFLHNCQUFPO3lCQUFFO3dCQUVqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDeEIscUJBQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOzt3QkFBN0MsU0FBNkMsQ0FBQzt3QkFDOUMsa0JBQWtCO3dCQUNsQixXQUE2QixFQUFWLFNBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTs0QkFBcEIsSUFBSTs0QkFDWCxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ2hFO3dCQUNELDhCQUE4Qjt3QkFDOUIscUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTs7d0JBRG5CLDhCQUE4Qjt3QkFDOUIsU0FBbUIsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0tBQ3RDO0lBdkJNLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBMEJsQyxZQUFDO0NBQUEsQ0E1Qm1DLHNEQUFVLEdBNEI3QztBQTVCMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnNCO0FBQ1Q7QUFDVDtBQUN1QjtBQUVkO0FBQ0Y7QUFDRTtBQUNZO0FBQ1o7QUFFeEMsSUFBWSxTQUFxRjtBQUFqRyxXQUFZLFNBQVM7SUFBRyxzQkFBUztJQUFFLDRCQUFlO0lBQUUsMEJBQWE7SUFBRSwwQkFBYTtJQUFFLDBCQUFhO0FBQUMsQ0FBQyxFQUFyRixTQUFTLEtBQVQsU0FBUyxRQUE0RTtBQUFBLENBQUM7QUFRbEc7SUF1Q0ksZ0JBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFhLEVBQUUsUUFBZ0I7UUFBakUsaUJBeUJDO1FBdERELDZEQUE2RDtRQUM3RCxVQUFLLEdBQVcsUUFBUSxDQUFDO1FBNEt6QixZQUFPLEdBQUcsVUFBQyxLQUFLO1lBQ1osSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ3pCLFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDZixLQUFLLEtBQUksQ0FBQyxLQUFLO3dCQUNYLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLG9EQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDdEMsTUFBTTtvQkFDVixLQUFLLEtBQUksQ0FBQyxPQUFPO3dCQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxvREFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLE1BQU07b0JBQ1YsS0FBSyxLQUFJLENBQUMsT0FBTzt3QkFDYixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckMsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxvREFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ3RDLE1BQU07b0JBQ1YsS0FBSyxLQUFJLENBQUMsUUFBUTt3QkFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsb0RBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNyQyxNQUFNO29CQUNWLEtBQUssS0FBSSxDQUFDLFFBQVE7d0JBQ2QsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNmLE1BQU07b0JBQ1YsS0FBSyxLQUFJLENBQUMsU0FBUzt3QkFDZixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7d0JBQ3ZCLE1BQU07aUJBRWI7YUFDSjtRQUNMLENBQUM7UUFFRCxVQUFLLEdBQUcsVUFBQyxLQUFLO1lBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNmLEtBQUssS0FBSSxDQUFDLEtBQUs7b0JBQ1gsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE1BQU07Z0JBQ1YsS0FBSyxLQUFJLENBQUMsT0FBTztvQkFDYixLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1osTUFBTTtnQkFDVixLQUFLLEtBQUksQ0FBQyxPQUFPO29CQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDWixNQUFNO2dCQUNWLEtBQUssS0FBSSxDQUFDLFFBQVE7b0JBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLE1BQU07YUFDYjtRQUNMLENBQUM7UUFHRCxXQUFNLEdBQUcsVUFBQyxLQUFLO1lBRVgsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBRWYsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUMxQyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFFNUMsb0dBQW9HO2dCQUNwRyxJQUFJLE1BQU0sR0FBRztvQkFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUNwRCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUN0RCxDQUFDO2dCQUVGLElBQUksTUFBTSxHQUFHO29CQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7b0JBQ3RELEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ3ZELENBQUM7Z0JBRUYsd0ZBQXdGO2dCQUN4RixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQ3ZILE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQ2xCO3FCQUNKO2lCQUNKO2dCQUVELElBQUksT0FBTyxJQUFJLEtBQUssRUFBRTtvQkFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO29CQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUMxQjthQUdKO1FBRUwsQ0FBQztRQTJCRCxZQUFPLEdBQUc7WUFDTixJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRTFDLHNDQUFzQztnQkFDdEMsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLDJDQUFJLENBQUMsSUFBSSxFQUFFO29CQUM3QixJQUFNLGFBQVcsR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxrREFBUSxDQUFDLEtBQUksRUFBRSxvREFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxPQUFPO2lCQUNWO2dCQUVELDZCQUE2QjtnQkFDN0IsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLDJDQUFJLENBQUMsaUJBQWlCLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsMkNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO29CQUM1RixJQUFJLGtFQUFnQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFJLEVBQUUsS0FBSSxDQUFDLENBQUM7b0JBQ3RGLE9BQU87aUJBQ1Y7Z0JBRUQsc0RBQXNEO3FCQUNqRCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDN0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0o7UUFDTCxDQUFDO1FBRUQsVUFBSyxHQUFHLFVBQU8sUUFBa0I7Ozs7NkJBQ3pCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBYix3QkFBYTt3QkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZixxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxvREFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O3dCQUF0RCxTQUFzRCxDQUFDO3dCQUN2RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozs7YUFFNUI7UUEzU0csSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0RBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsMkNBQUksQ0FBQyxZQUFZLENBQUM7UUFFbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixxQkFBcUI7UUFDckIsa0RBQVcsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGtEQUFXLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzVILGtEQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRSxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLDJCQUEyQjtZQUN6RCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLDJCQUEyQjtZQUM5RSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLG9CQUFvQjtZQUNuRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQzdDO0lBQ0wsQ0FBQztJQUlPLCtCQUFjLEdBQXRCO1FBQ0ksSUFBTSxVQUFVLEdBQUc7WUFDZixJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNELEdBQUcsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0o7UUFFRCxLQUFLLElBQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyxLQUFLLElBQU0sWUFBWSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFFOUMsSUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztnQkFFNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckMsSUFBTSxXQUFXLEdBQUcsWUFBVSxTQUFTLFNBQUksWUFBWSxTQUFJLENBQUcsQ0FBQztvQkFDL0QsSUFBTSxPQUFPLEdBQUcsa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEM7Z0JBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLGtCQUFrQixDQUFDO2FBQzVEO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWUsR0FBZjtRQUNJLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLDJDQUFJLENBQUMsYUFBYTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLDJDQUFJLENBQUMsV0FBVyxDQUFDO2dCQUFDLE1BQU07WUFDbEUsS0FBSywyQ0FBSSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRywyQ0FBSSxDQUFDLFlBQVksQ0FBQztnQkFBQyxNQUFNO1lBQ2pFLEtBQUssMkNBQUksQ0FBQyxZQUFZO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsMkNBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFBQyxNQUFNO1lBQ3ZFLEtBQUssMkNBQUksQ0FBQyxpQkFBaUI7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRywyQ0FBSSxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQy9ELEtBQUssMkNBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsMkNBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUMsTUFBTTtZQUNsRCxLQUFLLDJDQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLDJDQUFJLENBQUMsYUFBYSxDQUFDO2dCQUFDLE1BQU07U0FDOUQ7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFtQyxJQUFJLENBQUMsU0FBVyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsU0FBb0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsbURBQW1EO1lBQ25ELE9BQU87U0FDVjtRQUVELElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjthQUNJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVLLDhCQUFhLEdBQW5CLFVBQW9CLEtBQWE7Ozs7Ozt3QkFDdkIsTUFBTSxHQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBRXhFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTs4QkFHUSxFQUFOLGlCQUFNOzs7NkJBQU4scUJBQU07d0JBQWYsS0FBSzt3QkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQzVCLHFCQUFNLGdFQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7d0JBQTlCLFNBQThCLENBQUM7Ozt3QkFGZixJQUFNOzs7b0JBSzFCLGVBQWU7b0JBQ2YscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFEOUIsZUFBZTt3QkFDZixTQUE4QixDQUFDO3dCQUd0QixDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDOzs7NkJBQUUsRUFBQyxJQUFJLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFBOUIsU0FBOEIsQ0FBQzs7O3dCQUZLLENBQUMsRUFBRTs7O3dCQU0zQyxrQ0FBa0M7d0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUN0QjtJQUVELHdCQUFPLEdBQVAsVUFBUSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRO1FBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQXNHRDs7O01BR0U7SUFDRiwrQkFBYyxHQUFkO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFNUYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsSUFBSSxFQUFFLEVBQUU7WUFDSixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFxQ0ssdUJBQU0sR0FBWixVQUFhLEtBQUs7Ozs7Ozt3QkFHUixPQUFPLEdBQUcsR0FBRyxDQUFDO3dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7NkJBR3JCLE1BQUssR0FBRyxDQUFDO3dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQzt3QkFDaEMscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO3dCQUNoQyxxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUM7d0JBQ2hDLHFCQUFNLGdFQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQzt3QkFDaEMscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFFL0IsS0FBSyxFQUFFLENBQUM7Ozt3QkFHWixRQUFRO3dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRTdCO0lBOVdNLG1CQUFZLEdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QixvQkFBYSxHQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDaEMsbUJBQVksR0FBVSxJQUFJLDZDQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLGtDQUEyQixHQUFHLEVBQUUsQ0FBQztJQUNqQywyQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDMUIsa0JBQVcsR0FBRyxJQUFJLEtBQUssQ0FBSSxvREFBUyxDQUFDLFVBQVUsZ0JBQWEsQ0FBQyxDQUFDO0lBMld6RSxhQUFDO0NBQUE7QUFsWGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUVPO0FBQ0M7QUFDWTtBQUVwRDtJQUFrQyxnQ0FBSztJQUVuQyxzQkFBWSxNQUFZO1FBQXhCLFlBQ0ksa0JBQU0sa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsU0FFNUU7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLG9EQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7SUFDOUMsQ0FBQztJQUVLLDJCQUFJLEdBQVY7Ozs7Ozt3QkFDYSxRQUFRLEdBQUcsQ0FBQzs7OzZCQUFFLFNBQVEsR0FBRyxZQUFZLENBQUMsVUFBVTt3QkFDckQscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsb0RBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDOzt3QkFBL0QsU0FBK0QsQ0FBQzt3QkFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxtQkFBaUIsUUFBVSxDQUFDOzs7d0JBRjVCLFFBQVEsRUFBRTs7O3dCQUlyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7S0FDMUI7SUFHTCxtQkFBQztBQUFELENBQUMsQ0FoQmlDLDRDQUFLLEdBZ0J0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNkM7QUFFOUM7SUFBK0IsNkJBQVM7SUFXcEMsbUJBQVksTUFBa0IsRUFBRSxPQUFpQixFQUFFLFFBQWlCLEVBQUUsV0FBb0IsRUFBRSxhQUFzQjtRQUFsSCxZQUNJLGlCQUFPLFNBeUJWO1FBeEJHLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLFFBQVEsQ0FBQztRQUMzQyxLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsSUFBSSxRQUFRLENBQUM7UUFFL0MsdUJBQXVCO1FBQ3ZCLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRTlCLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFdkMsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU1QixZQUFZO1FBQ1osS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGdEQUFRLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRSxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVwQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDcEMsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDSSwyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBRSxFQUFFLG9DQUFvQztZQUM1RCxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdEQUFRLEVBQUUsQ0FBQztZQUVwQywwRUFBMEU7WUFDMUUsSUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDcEUsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7aUJBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxLQUFLLENBQUMsa0RBQWtELENBQUM7U0FDbEU7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXpETSx3QkFBYyxHQUFHLENBQUMsQ0FBQztJQTREOUIsZ0JBQUM7Q0FBQSxDQXJFOEIsaURBQVMsR0FxRXZDO0FBckVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmdCO0FBRUk7QUFFQTtBQUNaO0FBQ0M7QUFDYTtBQUNFO0FBRTlDO0lBQTBCLHdCQUFNO0lBTzVCLGNBQVksT0FBZ0IsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLEdBQWE7UUFBekUsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FPakI7UUFORyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLGtDQUFrQztRQUNsQyxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7O0lBQ3pDLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsYUFBeUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztZQUNoQyxhQUFhLENBQUMsS0FBSyxHQUFHLGtEQUFRLENBQUMsWUFBWSxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hEO2FBQ0k7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDckY7SUFDTCxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLFFBQWtCO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFHRCxzQkFBTyxHQUFQLFVBQVEsVUFBZ0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixRQUFRLFVBQVUsRUFBRTtnQkFDaEIsS0FBSywyQ0FBSSxDQUFDLFlBQVk7b0JBQ2xCLElBQUksd0RBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFBQyxNQUFNO2dCQUNqQyxLQUFLLDJDQUFJLENBQUMsYUFBYTtvQkFDbkIsSUFBSSwwREFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUFDLE1BQU07Z0JBQ2xDLEtBQUssMkNBQUksQ0FBQyxXQUFXO29CQUNqQixJQUFJLHNEQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQUMsTUFBTTtnQkFDaEMsS0FBSywyQ0FBSSxDQUFDLElBQUk7b0JBQ1YsSUFBSSwwQ0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUFDLE1BQU07YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQVksR0FBWjtRQUNJLEtBQXFCLFVBQWdCLEVBQWhCLFNBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFoQixjQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQWxDLElBQU0sTUFBTTtZQUNiLG1EQUFtRDtZQUNuRCxJQUFJLE1BQU0sR0FBRztnQkFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDM0QsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2FBQ3BGLENBQUM7WUFFRixJQUFJLE1BQU0sR0FBRztnQkFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFDNUQsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2FBQ3RGLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDOUcsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILG9DQUFxQixHQUFyQjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxLQUFLO1NBQ2Y7YUFDSTtZQUNELHNEQUFzRDtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELHNCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQU9MLFdBQUM7QUFBRCxDQUFDLENBeEd5Qiw4Q0FBTSxHQXdHL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSHlDO0FBQ0g7QUFDQztBQUlZO0FBRXBEO0lBQXlDLDhCQUFNO0lBUzNDLG9CQUFZLE9BQWdCLEVBQUUsTUFBWSxFQUFFLEtBQWU7UUFBM0QsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FjakI7UUFsQkQsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQW1CM0Isc0JBQWdCLEdBQUc7WUFDZixJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO2dCQUN0QyxLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDckI7UUFDTCxDQUFDO1FBcEJHLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRWhDLHdCQUF3QjtRQUN4QixLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFdkIsMkJBQTJCO1FBQzNCLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDckIsa0RBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLDBCQUF3QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQU8sRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNqSTs7SUFDTCxDQUFDO0lBVUQsMEJBQUssR0FBTCxVQUFNLFFBQWtCLElBQUksQ0FBQztJQUFBLENBQUM7SUFHOUIsOEJBQVMsR0FBVCxVQUFVLFNBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDO0lBRUksMkJBQU0sR0FBWixVQUFhLEtBQUs7Ozs7Ozt3QkFHUixPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7OzZCQUdkLE1BQUssR0FBRyxDQUFDO3dCQUNaLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO3dCQUN6QixxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQzt3QkFDekIscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFBOUIsU0FBOEIsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUM7d0JBQ3pCLHFCQUFNLGdFQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO3dCQUN6QixxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O3dCQUE5QixTQUE4QixDQUFDO3dCQUUvQixLQUFLLEVBQUUsQ0FBQzs7O3dCQUdaLFFBQVE7d0JBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRXRCO0lBR0ssMkJBQU0sR0FBWjs7Ozs7O3dCQUdVLFNBQVMsR0FBRyxHQUFHLENBQUM7d0JBQ3RCLGVBQWU7d0JBQ2YsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs2QkFHakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO3dCQUMxQixxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O3dCQUE5QixTQUE4QixDQUFDOzs7d0JBR25DLFFBQVE7d0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBRXRCO0lBRUssMEJBQUssR0FBWCxVQUFZLEtBQUs7Ozs7OzZCQUdOLE1BQUssR0FBRyxDQUFDO3dCQUNaLGtDQUFrQzt3QkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQ3JCLHFCQUFNLGdFQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLGlCQUFpQjt3QkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQ3JCLHFCQUFNLGdFQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLEtBQUssRUFBRSxDQUFDOzs7Ozs7S0FHZjtJQXhHTSxxQkFBVSxHQUFHLElBQUksS0FBSyxDQUFJLG9EQUFTLENBQUMsVUFBVSxhQUFVLENBQUMsQ0FBQztJQUMxRCx5QkFBYyxHQUFHLElBQUksS0FBSyxDQUFJLG9EQUFTLENBQUMsVUFBVSxjQUFXLENBQUMsQ0FBQztJQThHMUUsaUJBQUM7Q0FBQSxDQWpId0MsOENBQU0sR0FpSDlDO0FBakgrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkU7QUFDSjtBQUNFO0FBQ0Y7QUFFd0I7QUFDeEI7QUFDUztBQUV2QztJQUE4Qiw0QkFBUztJQW1CbkM7UUFBQSxZQUNJLGlCQUFPLFNBZVY7UUFiRyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksaURBQVMsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGlEQUFTLEVBQUUsQ0FBQztRQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXhDLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpREFBUyxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFcEMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksaURBQVMsRUFBRSxDQUFDO1FBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0lBQ3RCLENBQUM7SUFHRCx1Q0FBb0IsR0FBcEIsVUFBcUIsU0FBYyxFQUFFLElBQVk7UUFDN0MsS0FBbUIsVUFBb0IsRUFBcEIsY0FBUyxDQUFDLFVBQVUsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBRTtZQUFwQyxJQUFNLElBQUk7WUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDckI7U0FDSjtJQUVMLENBQUM7SUFFRCxnSkFBZ0o7SUFDekksZ0JBQU8sR0FBZCxVQUFlLE9BQU87UUFFbEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFNLGdCQUFnQixHQUFHLGtEQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDdEQsSUFBTSxnQkFBZ0IsR0FBRyxrREFBVyxDQUFDLGdCQUFnQixDQUFDO1FBRXRELElBQUksWUFBWSxHQUFVLElBQUksNkNBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxHQUFHLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFbkUsNEJBQTRCO1FBQzVCLEtBQWlCLFVBQWMsRUFBZCxZQUFPLENBQUMsTUFBTSxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBNUIsSUFBTSxFQUFFO1lBQ1QsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtnQkFFeEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN6QixHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLHdCQUF3QjtnQkFDeEIsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNDO2dCQUVELCtDQUErQztnQkFDL0MsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3RDLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUM5QyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7d0JBQ3BDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3BCLElBQUksT0FBTyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzFELElBQU0sT0FBTyxHQUFHLElBQUksMENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDcEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDeEI7cUJBQ0o7aUJBQ0o7YUFFSjtTQUNKO1FBRUQsK0JBQStCO1FBQy9CLEtBQWlCLFVBQWMsRUFBZCxZQUFPLENBQUMsTUFBTSxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBNUIsSUFBTSxFQUFFO1lBRVQsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtnQkFHMUIsdUJBQXVCO2dCQUN2QixLQUFpQixVQUFVLEVBQVYsT0FBRSxDQUFDLE9BQU8sRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO29CQUF4QixJQUFNLEVBQUU7b0JBQ1Q7Ozs7Ozs7OztzQkFTRTtvQkFFRixJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO3dCQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMseUdBQXlHO3dCQUNsSyxJQUFNLFFBQVEsR0FBVyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUNsRSxJQUFNLFNBQVMsR0FBRyxJQUFJLDhDQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ2xELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzVCO2lCQUNKO2dCQUlELG1EQUFtRDtnQkFDbkQsS0FBaUIsVUFBVSxFQUFWLE9BQUUsQ0FBQyxPQUFPLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtvQkFBeEIsSUFBTSxFQUFFO29CQUNUOzs7Ozs7Ozs7dUJBU0c7b0JBR0gsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTt3QkFFcEIsSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEQsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDdEQsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLDRDQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDbkQsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDL0I7b0JBR0Q7Ozs7Ozs7Ozt1QkFTRzt5QkFDRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO3dCQUN4QixJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNsRCxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksMENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzlCO29CQUdEOzs7Ozs7Ozs7dUJBU0c7eUJBRUUsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTt3QkFDeEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksMENBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztpQkFDSjthQUNKO1NBQ0o7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFLRCw0QkFBUyxHQUFULFVBQVUsTUFBYztRQUNwQiw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQWEsR0FBYixVQUFjLFVBQXNCO1FBQ2hDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQVU7UUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLGtEQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDBCQUFPLEdBQVAsVUFBUSxLQUFZLEVBQUMsS0FBWTtRQUM3QixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQ0c7WUFDQSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsdUNBQW9CLEdBQXBCLFVBQXFCLFNBQW9CO1FBRXJDLHVLQUF1SztRQUV2SyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLElBQUksU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBRSx1SEFBdUg7UUFDcE0sSUFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFsUE0saUJBQVEsR0FBRyxDQUFDLENBQUM7SUFDYixxQkFBWSxHQUFVLElBQUksNkNBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQW1QakYsZUFBQztDQUFBLENBdFA2QixpREFBUyxHQXNQdEM7QUF0UG9COzs7Ozs7Ozs7Ozs7O0FDVHJCO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBRTFEO0lBVUMsMEJBQVksT0FBTyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxPQUFPO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxtREFBVyxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLEdBQVU7UUFDcEIsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLG1DQUFtQztZQUNuQyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLE1BQU0sR0FBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRTdDLElBQUksU0FBUyxHQUFVLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUV4QyxJQUFJLENBQUMsR0FBVSxNQUFNLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFVLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFcEQsSUFBSSxDQUFDLEdBQVcsSUFBSSwrQ0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksaURBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsQ0FBQztTQUNWO0lBQ0EsQ0FBQztJQUdKLHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3NDO0FBQ0M7QUFDQTtBQUNGO0FBRUk7QUFDVTtBQUVwRDtJQUFnQyw4QkFBVTtJQU90QyxvQkFBWSxNQUFZO1FBQXhCLFlBQ0ksa0JBQU0sa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxDQUFDLFNBRXpFO1FBREcsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBRUssMEJBQUssR0FBWCxVQUFZLFFBQWtCOzs7Ozs7NkJBQ3RCLEtBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQXRDLHdCQUFzQzt3QkFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDNUIsc0JBQXNCO3dCQUN0QixxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7d0JBRG5CLHNCQUFzQjt3QkFDdEIsU0FBbUIsQ0FBQzt3QkFFZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUMxQyxXQUE2QixFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUM7NEJBQXBCLElBQUk7NEJBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGtEQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxvREFBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDcEY7d0JBQ0QsWUFBWTt3QkFDWixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMvQixxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs7d0JBQW5DLFNBQW1DLENBQUM7d0JBQ3BDLHFCQUFxQjt3QkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7OztLQUUxQztJQUVPLG1DQUFjLEdBQXRCO1FBQ0ksSUFBTSxVQUFVLEdBQUc7WUFDZixPQUFPLEVBQUUsRUFBRTtTQUNkO1FBRUQsS0FBSyxJQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDaEMsSUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLElBQU0sV0FBVyxHQUFHLGFBQVcsU0FBUyxTQUFJLENBQUcsQ0FBQztnQkFDaEQsSUFBTSxPQUFPLEdBQUcsa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztZQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFSyxrQ0FBYSxHQUFuQixVQUFvQixLQUFhOzs7Ozs7d0JBQ3ZCLE1BQU0sR0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzhCQUd2QixFQUFOLGlCQUFNOzs7NkJBQU4scUJBQU07d0JBQWYsS0FBSzt3QkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDckIscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzt3QkFBOUIsU0FBOEIsQ0FBQzs7O3dCQUZmLElBQU07Ozs7OztLQUs3QjtJQUVEOzs7T0FHRztJQUNLLG1DQUFjLEdBQXRCO1FBQ0ksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsa0RBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLGtEQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxrREFBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsa0RBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCwyQkFBMkI7UUFDM0IsSUFBSSxRQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLEtBQWtCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUM7WUFBcEIsSUFBTSxJQUFJO1lBQ1YsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtTQUNKO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFFcEIsQ0FBQztJQUVNLHdCQUFhLEdBQXBCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsa0RBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksVUFBVSxDQUFDLGtEQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksa0RBQVEsQ0FBQyxrREFBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBdEZNLG9CQUFTLEdBQUcsSUFBSSxLQUFLLENBQUksb0RBQVMsQ0FBQyxVQUFVLGVBQVksQ0FBQyxDQUFDO0lBQzNELHVCQUFZLEdBQUcsSUFBSSxLQUFLLENBQUksb0RBQVMsQ0FBQyxVQUFVLGlCQUFjLENBQUMsQ0FBQztJQXVGM0UsaUJBQUM7Q0FBQSxDQTVGK0Isc0RBQVUsR0E0RnpDO0FBNUZzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUztBQUVPO0FBQ2E7QUFDWjtBQUd4QztJQUFpQywrQkFBSztJQUVsQyxxQkFBWSxNQUFXO1FBQXZCLFlBQ0ksa0JBQU0sa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxNQUFNLENBQUMsU0FFMUU7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLG9EQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7SUFDN0MsQ0FBQztJQUVLLDBCQUFJLEdBQVY7Ozs7Ozt3QkFDYSxRQUFRLEdBQUcsQ0FBQzs7OzZCQUFFLFNBQVEsR0FBRyxXQUFXLENBQUMsVUFBVTt3QkFDcEQscUJBQU0sZ0VBQWUsQ0FBQyxJQUFJLENBQUMsb0RBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDOzt3QkFBOUQsU0FBOEQsQ0FBQzt3QkFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxrQkFBZ0IsUUFBVSxDQUFDOzs7d0JBRjVCLFFBQVEsRUFBRTs7O3dCQUlwRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7S0FDMUI7SUFFTCxrQkFBQztBQUFELENBQUMsQ0FmZ0MsNENBQUssR0FlckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmdEO0FBQ1Y7QUFDQztBQUNBO0FBQ0Y7QUFDTztBQUdPO0FBRXBEO0lBQXNDLG9DQUFNO0lBa0J4Qzs7Ozs7OztPQU9HO0lBQ0gsMEJBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxTQUFvQixFQUFFLFNBQThCLEVBQUUsS0FBYTtRQUFyRyxZQUVJLGtCQUFNLGtEQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0E2QjFFO1FBaERPLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBZ0QzQixZQUFNLEdBQUcsVUFBQyxLQUFhO1lBQ25CLHVDQUF1QztZQUN2QyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFFcEMsK0RBQStEO1lBQy9ELElBQUksTUFBTSxHQUFHO2dCQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0RBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUMxRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLGtEQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQzthQUMzRSxDQUFDO1lBRUYsSUFBSSxNQUFNLEdBQUc7Z0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrREFBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQzVFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsa0RBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2FBQzdFLENBQUM7WUFHRixtQ0FBbUM7WUFDbkMsS0FBcUIsVUFBdUIsRUFBdkIsdURBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUF2QixjQUF1QixFQUF2QixJQUF1QixFQUFFO2dCQUF6QyxJQUFNLE1BQU07Z0JBQ2IsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLEtBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2hJLHFCQUFxQjtvQkFDckIsS0FBSSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbkIsT0FBTztpQkFDVjthQUNKO1lBR0Qsd0ZBQXdGO1lBQ3hGLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQyxJQUFJLGtEQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLGtEQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUN4RixJQUFNLFdBQVcsR0FBRyxrREFBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNsRCx5QkFBeUI7d0JBQ3pCLEtBQUksQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3RCLEtBQUksQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3hCLE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtZQUVELG9DQUFvQztZQUNwQyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNkLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRWpDLENBQUM7UUE5RUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDZDQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQztRQUNyQixLQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLGlEQUFTLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLG9EQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUFDLE1BQU07WUFDMUUsS0FBSyxpREFBUyxDQUFDLElBQUk7Z0JBQUUsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsb0RBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQUMsTUFBTTtZQUMzRSxLQUFLLGlEQUFTLENBQUMsSUFBSTtnQkFBRSxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLG9EQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUFDLE1BQU07WUFDNUUsS0FBSyxpREFBUyxDQUFDLEtBQUs7Z0JBQUUsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsb0RBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQUMsTUFBTTtTQUMvRTtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBTSxXQUFXLEdBQUcsNkJBQTJCLENBQUcsQ0FBQztZQUNuRCxJQUFNLE9BQU8sR0FBRyxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUVELGtEQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxrREFBVyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDbkQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDOztJQUN2QyxDQUFDO0lBM0NNLHlCQUFRLEdBQWY7UUFDSSxPQUFPLHVCQUFxQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUksQ0FBQztJQUMvRCxDQUFDO0lBZ0dhLGdDQUFLLEdBQW5CLFVBQW9CLFFBQXVCOzs7Ozs7NkJBQ25DLFNBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUExQix3QkFBMEI7d0JBQzFCLGtEQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2hELGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjt3QkFFdEQsNENBQTRDO3dCQUM1QyxJQUFJLFFBQVEsRUFBRTs0QkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksa0RBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLG9EQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt5QkFDbEY7OEJBR2tDLEVBQWYsU0FBSSxDQUFDLFVBQVU7Ozs2QkFBZixlQUFlO3dCQUF4QixLQUFLO3dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixxQkFBTSxnRUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O3dCQUE5QixTQUE4QixDQUFDOzs7d0JBRmYsSUFBZTs7O3dCQUluQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7OztLQUV0QjtJQS9ITSwwQkFBUyxHQUFHLENBQUMsQ0FBQztJQUNkLDJCQUFVLEdBQUcsSUFBSSxLQUFLLENBQUksb0RBQVMsQ0FBQyxVQUFVLGNBQVcsQ0FBQyxDQUFDO0lBQzNELDJCQUFVLEdBQUcsSUFBSSxLQUFLLENBQUksb0RBQVMsQ0FBQyxVQUFVLGVBQVksQ0FBQyxDQUFDO0lBOEh2RSx1QkFBQztDQUFBLENBbElxQyw4Q0FBTSxHQWtJM0M7QUFsSTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmE7QUFDRjtBQUNLO0FBSUw7QUFDYztBQUNyQjtBQUVqQztJQUEyQix5QkFBVTtJQU1qQyxlQUFZLE9BQWdCLEVBQUUsTUFBWSxFQUFFLE9BQWU7UUFBM0QsWUFDSSxrQkFBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUcvQjtRQVBELFlBQU0sR0FBVyxvREFBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFLM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9EQUFTLENBQUMsS0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUMzQixDQUFDO0lBRUsscUJBQUssR0FBWCxVQUFZLFFBQWtCOzs7Ozs7NkJBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQWYsd0JBQWU7d0JBQ2YsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDOzZCQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBbEIsd0JBQWtCO3dCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O3dCQUduQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG9EQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN4RSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN4QixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG9EQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7d0JBQTNDLFNBQTJDLENBQUM7d0JBRXRDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7d0JBQzdDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7d0JBQ2pELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLGtFQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsaURBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3lCQUFFO3dCQUM1SSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQUUsSUFBSSxrRUFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLGlEQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt5QkFBRTt3QkFDN0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUFFLElBQUksa0VBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxpREFBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7eUJBQUU7d0JBQzlJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFBRSxJQUFJLGtFQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsaURBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3lCQUFFO3dCQUM5SSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7O0tBR2xDO0lBQUEsQ0FBQztJQUVGLHlCQUFTLEdBQVQsVUFBVSxTQUFpQjtRQUN2QixLQUFLLENBQUMsV0FBUyxJQUFJLENBQUMsT0FBTyxlQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNJLE9BQU8sNkNBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR0wsWUFBQztBQUFELENBQUMsQ0E3QzBCLHNEQUFVLEdBNkNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkR5QztBQUNGO0FBR1Q7QUFDTztBQUV0QztJQUEwQix3QkFBVTtJQUtoQyxjQUFZLE9BQU8sRUFBRSxNQUFNO1FBQTNCLFlBQ0ksa0JBQU0sT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUV6QjtRQUxELFlBQU0sR0FBVyxvREFBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFJMUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9EQUFTLENBQUMsS0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUNoRCxDQUFDO0lBSUssb0JBQUssR0FBWCxVQUFZLFFBQWtCOzs7Ozs2QkFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBZix3QkFBZTt3QkFDZixJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7NkJBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFsQix3QkFBa0I7d0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7d0JBR25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsb0RBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3ZCLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzt3QkFBcEIsU0FBb0IsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7OztLQUdsQztJQUFBLENBQUM7SUFFSSx3QkFBUyxHQUFmLFVBQWdCLFNBQWlCOzs7Ozt3QkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDJDQUFJLENBQUMsSUFBSSxFQUFFLG9EQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQyxxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFOzt3QkFBbkIsU0FBbUIsQ0FBQzt3QkFDcEIsaUJBQU0sU0FBUyxZQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztLQUM5QjtJQUlMLFdBQUM7QUFBRCxDQUFDLENBeEN5QixzREFBVSxHQXdDbkM7Ozs7Ozs7Ozs7Ozs7O0FDL0NEO0FBQUE7QUFBQTtJQUFBO1FBQUEsaUJBa0NDO1FBaENJLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVkxQixXQUFNLEdBQUcsVUFBQyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLElBQUksZUFBZSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7UUFDTCxDQUFDO0lBWUwsQ0FBQztJQTdCSSxrQ0FBUSxHQUFSLFVBQVMsRUFBVSxFQUFFLFFBQWtCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDZixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVBLG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBV0Q7OztPQUdHO0lBQ0ksb0JBQUksR0FBRyxZQUFFO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxpQkFBTyxJQUFJLGlCQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixDQUFDO0lBQzFELENBQUM7SUFJTCxzQkFBQztDQUFBO0FBbEMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYztBQUNGO0FBR0Q7QUFDQztBQUV4QztJQUEwQix3QkFBVTtJQU1oQyxjQUFZLE1BQU07UUFBbEIsWUFDSSxrQkFBTSxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBRXBFO1FBTkQsWUFBTSxHQUFXLG9EQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUsxQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0RBQVMsQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBQ2hELENBQUM7SUFJSyxvQkFBSyxHQUFYLFVBQVksUUFBa0I7Ozs7OzZCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFmLHdCQUFlO3dCQUNmLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQzs2QkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQWxCLHdCQUFrQjt3QkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozt3QkFHbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxvREFBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O3dCQUFwQixTQUFvQixDQUFDO3dCQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7O0tBR2xDO0lBQUEsQ0FBQztJQUVJLHdCQUFTLEdBQWYsVUFBZ0IsU0FBaUI7Ozs7O3dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDM0MscUJBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTs7d0JBQW5CLFNBQW1CLENBQUM7d0JBQ3BCLGlCQUFNLFNBQVMsWUFBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7S0FDOUI7SUFHTCxXQUFDO0FBQUQsQ0FBQyxDQXZDeUIsc0RBQVUsR0F1Q25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzBDO0FBQ0M7QUFFNUM7SUFVSSxxQkFBWSxVQUF1QjtRQUFuQyxpQkFxREM7UUE3REQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFrRXJCLFNBQUksR0FBRzs7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O2FBQ3JCO1FBRUQsVUFBSyxHQUFHO1lBQ0osSUFBSSxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdEI7UUFDTCxDQUFDO1FBMENELGNBQVMsR0FBRztZQUNSLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBckhHLElBQUksSUFBSSxHQUFHLGlwREErQ1YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBRTdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM3RCxDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWVLLGlDQUFXLEdBQWpCLFVBQWtCLEdBQVc7Ozs7Ozs7d0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7d0JBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7NEJBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLENBQUMsQ0FBQzs0QkFDakYsc0JBQU87eUJBQ1Y7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFHekIscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQzs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFDakIscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRTs7d0JBQXhCLElBQUksR0FBRyxTQUFpQjt3QkFFNUIsZ0RBQWdCLENBQUMsSUFBSSxFQUFFOzRCQUNuQixTQUFTLEVBQUUsVUFBQyxJQUFJO2dDQUNaLHlCQUF5QjtnQ0FDekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQ0FDeEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQ0FFMUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0NBQzlCLElBQUksS0FBSyxFQUFFO29DQUNQLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztvQ0FDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dDQUN4QyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUNBQ3REO29DQUNELElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVU7d0NBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0NBQzlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29DQUN4RSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0NBQ2pCLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLHVEQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lDQUNqRTs0QkFFTCxDQUFDOzRCQUNELE9BQU8sRUFBRSxVQUFVLEtBQUs7Z0NBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM5QyxDQUFDO3lCQUNKLENBQUMsQ0FBQzs7Ozs7S0FDTjtJQVVELGNBQWM7SUFDZCw2QkFBTyxHQUFQLFVBQVEsUUFBYztRQUFkLHlDQUFjO1FBQ2xCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFnQixDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcseUJBQXlCLENBQUM7UUFDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNqRCxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkQsYUFBYTtRQUNqQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiwrQkFBUyxHQUFULFVBQVUsUUFBYztRQUFkLHlDQUFjO1FBQ3BCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFnQixDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsSUFBSSxPQUFPLEtBQUssTUFBTTtZQUFFLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyx5QkFBeUIsQ0FBQztRQUM1RCxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFLTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1tQztBQUVFO0FBQ0U7QUFFeEM7SUFBcUMsMkJBQVM7SUFJMUMsaUJBQVksT0FBaUI7UUFBN0IsWUFDSSxpQkFBTyxTQVFWO1FBWEQsaUJBQVcsR0FBaUIsRUFBRSxDQUFDO1FBSzNCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQU0sU0FBUyxHQUFHLG9EQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzNELElBQU0sVUFBVSxHQUFHLElBQUksbURBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdCOztJQUNMLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FBQyxDQWZvQyxpREFBUyxHQWU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZ0U7QUFFekI7QUFDRDtBQUNRO0FBQ1Q7QUFFdEM7SUFBd0MsOEJBQVM7SUFNN0Msb0JBQVksTUFBYyxFQUFFLEtBQWEsRUFBRSxDQUFRO1FBQW5ELFlBQ0ksaUJBQU8sU0FnQ1Y7UUFuQ0QsNkJBQXVCLEdBQVksRUFBRSxDQUFDO1FBcUN0QyxZQUFNLEdBQUc7WUFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pGLGtCQUFrQjtZQUNsQixLQUFJLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBQztnQkFDcEUsSUFBRyxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUM7b0JBQy9DLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2lCQUN2RDtxQkFDRztvQkFDQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztpQkFDdkQ7YUFDSjtRQUNMLENBQUM7UUE1Q0csS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsS0FBSSxDQUFDLENBQUMsR0FBRyxvREFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0RBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9ELEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxnREFBUSxFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxvREFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QixJQUFJLEVBQUUsR0FBRyxJQUFJLDhDQUFNLENBQUMsa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0RBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxvREFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLG9EQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLHVCQUF1QjtRQUN2QixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxvREFBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLG9EQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzFHLEdBQUcsMERBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDbEQsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLDBEQUFTLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQzFELElBQUksTUFBTSxHQUFHLElBQUksOENBQU0sQ0FBQyxrREFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxpREFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUN6RixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsb0RBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxvREFBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUM1RyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUVELGtEQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRW5GLENBQUM7SUFlTCxpQkFBQztBQUFELENBQUMsQ0F0RHVDLGlEQUFTLEdBc0RoRDs7Ozs7Ozs7Ozs7Ozs7QUM3REQ7QUFBQSxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUUsR0FBRztRQUNYLElBQUksRUFBRTtZQUNGLEtBQUssRUFBRSxDQUFDO1NBQ1g7UUFDRCxTQUFTLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRyxFQUFFO1NBQ2xCO0tBQ0o7SUFDRCxLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO0tBQ2Q7SUFDRCxXQUFXLEVBQUM7UUFDUixXQUFXLEVBQUcsSUFBSTtLQUNyQjtDQUNKO0FBRWMsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7O0FDcEIzQixzQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5qc21lZGlhdGFncyA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IFhNTEh0dHBSZXF1ZXN0O1xuXG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQXJyYXlGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFGaWxlUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhBcnJheUZpbGVSZWFkZXIsIF9NZWRpYUZpbGVSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEFycmF5RmlsZVJlYWRlcihhcnJheSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcnJheUZpbGVSZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQXJyYXlGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfYXJyYXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfc2l6ZVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX2FycmF5ID0gYXJyYXk7XG4gICAgX3RoaXMuX3NpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgX3RoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBcnJheUZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIGlmIChvZmZzZXQgPj0gdGhpcy5fYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9mZnNldCBcIiArIG9mZnNldCArIFwiIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYXJyYXlbb2Zmc2V0XTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmaWxlKSB8fCB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlcihmaWxlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXJyYXlGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5RmlsZVJlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExfV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ2h1bmtlZEZpbGVEYXRhID0gcmVxdWlyZSgnLi9DaHVua2VkRmlsZURhdGEnKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBCbG9iRmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoQmxvYkZpbGVSZWFkZXIsIF9NZWRpYUZpbGVSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEJsb2JGaWxlUmVhZGVyKGJsb2IpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmxvYkZpbGVSZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQmxvYkZpbGVSZWFkZXIpLmNhbGwodGhpcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9ibG9iXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2ZpbGVEYXRhXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fYmxvYiA9IGJsb2I7XG4gICAgX3RoaXMuX2ZpbGVEYXRhID0gbmV3IENodW5rZWRGaWxlRGF0YSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCbG9iRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiX2luaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoY2FsbGJhY2tzKSB7XG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5fYmxvYi5zaXplO1xuICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vICRGbG93SXNzdWUgLSBmbG93IGlzbid0IGF3YXJlIG9mIG1velNsaWNlIG9yIHdlYmtpdFNsaWNlXG5cbiAgICAgIHZhciBibG9iU2xpY2UgPSB0aGlzLl9ibG9iLnNsaWNlIHx8IHRoaXMuX2Jsb2IubW96U2xpY2UgfHwgdGhpcy5fYmxvYi53ZWJraXRTbGljZTtcbiAgICAgIHZhciBibG9iID0gYmxvYlNsaWNlLmNhbGwodGhpcy5fYmxvYiwgcmFuZ2VbMF0sIHJhbmdlWzFdICsgMSk7XG4gICAgICB2YXIgYnJvd3NlckZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICBicm93c2VyRmlsZVJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnJvd3NlckZpbGVSZWFkZXIucmVzdWx0KTtcblxuICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKHJhbmdlWzBdLCBpbnRBcnJheSk7XG5cbiAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgfTtcblxuICAgICAgYnJvd3NlckZpbGVSZWFkZXIub25lcnJvciA9IGJyb3dzZXJGaWxlUmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYmxvYlwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IGJyb3dzZXJGaWxlUmVhZGVyLmVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGJyb3dzZXJGaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVEYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBmaWxlIGluc3RhbmNlb2YgQmxvYiB8fCAvLyBGaWxlIGV4dGVuZHMgQmxvYiBidXQgaXQgc2VlbXMgdGhhdCBGaWxlIGluc3RhbmNlb2YgQmxvYiBkb2Vzbid0XG4gICAgICAvLyBxdWl0ZSB3b3JrIGFzIGV4cGVjdGVkIGluIENvcmRvdmEvUGhvbmVHYXAuXG4gICAgICB0eXBlb2YgRmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBmaWxlIGluc3RhbmNlb2YgRmlsZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmxvYkZpbGVSZWFkZXI7XG59KE1lZGlhRmlsZVJlYWRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQmxvYkZpbGVSZWFkZXI7XG5cbn0se1wiLi9DaHVua2VkRmlsZURhdGFcIjo1LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMX1dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBmaWxlIHRoYXQgbWlnaHQgbm90IGhhdmUgYWxsIGl0cyBkYXRhIGxvYWRlZCB5ZXQuXG4gKiBJdCBpcyB1c2VkIHdoZW4gbG9hZGluZyB0aGUgZW50aXJlIGZpbGUgaXMgbm90IGFuIG9wdGlvbiBiZWNhdXNlIGl0J3MgdG9vXG4gKiBleHBlbnNpdmUuIEluc3RlYWQsIHBhcnRzIG9mIHRoZSBmaWxlIGFyZSBsb2FkZWQgYW5kIGFkZGVkIG9ubHkgd2hlbiBuZWVkZWQuXG4gKiBGcm9tIGEgcmVhZGluZyBwb2ludCBvZiB2aWV3IGlzIGFzIGlmIHRoZSBlbnRpcmUgZmlsZSBpcyBsb2FkZWQuIFRoZVxuICogZXhjZXB0aW9uIGlzIHdoZW4gdGhlIGRhdGEgaXMgbm90IGF2YWlsYWJsZSB5ZXQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICogVGhpcyBjbGFzcyBkb2VzIG5vdCBsb2FkIHRoZSBkYXRhLCBpdCBqdXN0IG1hbmFnZXMgaXQuIEl0IHByb3ZpZGVzIG9wZXJhdGlvbnNcbiAqIHRvIGFkZCBhbmQgcmVhZCBkYXRhIGZyb20gdGhlIGZpbGUuXG4gKlxuICogXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTk9UX0ZPVU5EID0gLTE7XG5cbnZhciBDaHVua2VkRmlsZURhdGEgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBfY3JlYXRlQ2xhc3MoQ2h1bmtlZEZpbGVEYXRhLCBudWxsLCBbe1xuICAgIGtleTogXCJOT1RfRk9VTkRcIixcbiAgICAvLyAkRmxvd0lzc3VlIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIENodW5rZWRGaWxlRGF0YSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2h1bmtlZEZpbGVEYXRhKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9maWxlRGF0YVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fZmlsZURhdGEgPSBbXTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBkYXRhIHRvIHRoZSBmaWxlIHN0b3JhZ2UgYXQgYSBzcGVjaWZpYyBvZmZzZXQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENodW5rZWRGaWxlRGF0YSwgW3tcbiAgICBrZXk6IFwiYWRkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREYXRhKG9mZnNldCwgZGF0YSkge1xuICAgICAgdmFyIG9mZnNldEVuZCA9IG9mZnNldCArIGRhdGEubGVuZ3RoIC0gMTtcblxuICAgICAgdmFyIGNodW5rUmFuZ2UgPSB0aGlzLl9nZXRDaHVua1JhbmdlKG9mZnNldCwgb2Zmc2V0RW5kKTtcblxuICAgICAgaWYgKGNodW5rUmFuZ2Uuc3RhcnRJeCA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAgIHRoaXMuX2ZpbGVEYXRhLnNwbGljZShjaHVua1JhbmdlLmluc2VydEl4IHx8IDAsIDAsIHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGRhdGEgdG8gYWRkIGNvbGxpZGVzIHdpdGggZXhpc3RpbmcgY2h1bmtzIHdlIHByZXBlbmQgYW5kXG4gICAgICAgIC8vIGFwcGVuZCBkYXRhIGZyb20gdGhlIGhhbGYgY29sbGlkaW5nIGNodW5rcyB0byBtYWtlIHRoZSBjb2xsaXNpb24gYXRcbiAgICAgICAgLy8gMTAwJS4gVGhlIG5ldyBkYXRhIGNhbiB0aGVuIHJlcGxhY2UgYWxsIHRoZSBjb2xsaWRpbmcgY2h1bmtlcy5cbiAgICAgICAgdmFyIGZpcnN0Q2h1bmsgPSB0aGlzLl9maWxlRGF0YVtjaHVua1JhbmdlLnN0YXJ0SXhdO1xuICAgICAgICB2YXIgbGFzdENodW5rID0gdGhpcy5fZmlsZURhdGFbY2h1bmtSYW5nZS5lbmRJeF07XG4gICAgICAgIHZhciBuZWVkc1ByZXBlbmQgPSBvZmZzZXQgPiBmaXJzdENodW5rLm9mZnNldDtcbiAgICAgICAgdmFyIG5lZWRzQXBwZW5kID0gb2Zmc2V0RW5kIDwgbGFzdENodW5rLm9mZnNldCArIGxhc3RDaHVuay5kYXRhLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBjaHVuayA9IHtcbiAgICAgICAgICBvZmZzZXQ6IE1hdGgubWluKG9mZnNldCwgZmlyc3RDaHVuay5vZmZzZXQpLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobmVlZHNQcmVwZW5kKSB7XG4gICAgICAgICAgdmFyIHNsaWNlZERhdGEgPSB0aGlzLl9zbGljZURhdGEoZmlyc3RDaHVuay5kYXRhLCAwLCBvZmZzZXQgLSBmaXJzdENodW5rLm9mZnNldCk7XG5cbiAgICAgICAgICBjaHVuay5kYXRhID0gdGhpcy5fY29uY2F0RGF0YShzbGljZWREYXRhLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWVkc0FwcGVuZCkge1xuICAgICAgICAgIC8vIFVzZSB0aGUgbGFzdENodW5rIGJlY2F1c2UgdGhlIHNsaWNlIGxvZ2ljIGlzIGVhc2llciB0byBoYW5kbGUuXG4gICAgICAgICAgdmFyIHNsaWNlZERhdGEgPSB0aGlzLl9zbGljZURhdGEoY2h1bmsuZGF0YSwgMCwgbGFzdENodW5rLm9mZnNldCAtIGNodW5rLm9mZnNldCk7XG5cbiAgICAgICAgICBjaHVuay5kYXRhID0gdGhpcy5fY29uY2F0RGF0YShzbGljZWREYXRhLCBsYXN0Q2h1bmsuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWxlRGF0YS5zcGxpY2UoY2h1bmtSYW5nZS5zdGFydEl4LCBjaHVua1JhbmdlLmVuZEl4IC0gY2h1bmtSYW5nZS5zdGFydEl4ICsgMSwgY2h1bmspO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfY29uY2F0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY29uY2F0RGF0YShkYXRhQSwgZGF0YUIpIHtcbiAgICAgIC8vIFR5cGVkQXJyYXlzIGRvbid0IHN1cHBvcnQgY29uY2F0LlxuICAgICAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGFBKSkge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuICAgICAgICB2YXIgZGF0YUFhbmRCID0gbmV3IGRhdGFBLmNvbnN0cnVjdG9yKGRhdGFBLmxlbmd0aCArIGRhdGFCLmxlbmd0aCk7IC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG5cbiAgICAgICAgZGF0YUFhbmRCLnNldChkYXRhQSwgMCk7IC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG5cbiAgICAgICAgZGF0YUFhbmRCLnNldChkYXRhQiwgZGF0YUEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGRhdGFBYW5kQjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBUeXBlZEFycmF5IGJ1dCBpdCdzIG5vdFxuICAgICAgICByZXR1cm4gZGF0YUEuY29uY2F0KGRhdGFCKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3NsaWNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2xpY2VEYXRhKGRhdGEsIGJlZ2luLCBlbmQpIHtcbiAgICAgIC8vIFNvbWUgVHlwZUFycmF5IGltcGxlbWVudGF0aW9ucyBkbyBub3Qgc3VwcG9ydCBzbGljZSB5ZXQuXG4gICAgICBpZiAoZGF0YS5zbGljZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuICAgICAgICByZXR1cm4gZGF0YS5zdWJhcnJheShiZWdpbiwgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGNodW5rIHJhbmdlIHRoYXQgb3ZlcmxhcHMgdGhlIFtvZmZzZXRTdGFydC0xLG9mZnNldEVuZCsxXSByYW5nZS5cbiAgICAgKiBXaGVuIGEgY2h1bmsgaXMgYWRqYWNlbnQgdG8gdGhlIG9mZnNldCB3ZSBzdGlsbCBjb25zaWRlciBpdCBwYXJ0IG9mIHRoZVxuICAgICAqIHJhbmdlICh0aGlzIGlzIHRoZSBzaXR1YXRpb24gb2Ygb2Zmc2V0U3RhcnQtMSBvciBvZmZzZXRFbmQrMSkuXG4gICAgICogV2hlbiBubyBjaHVua3MgYXJlIGZvdW5kIGBpbnNlcnRJeGAgZGVub3RlcyB0aGUgaW5kZXggd2hlcmUgdGhlIGRhdGFcbiAgICAgKiBzaG91bGQgYmUgaW5zZXJ0ZWQgaW4gdGhlIGRhdGEgbGlzdCAoc3RhcnRJeCA9PSBOT1RfRk9VTkQgYW5kIGVuZElYID09XG4gICAgICogTk9UX0ZPVU5EKS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRDaHVua1JhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRDaHVua1JhbmdlKG9mZnNldFN0YXJ0LCBvZmZzZXRFbmQpIHtcbiAgICAgIHZhciBzdGFydENodW5rSXggPSBOT1RfRk9VTkQ7XG4gICAgICB2YXIgZW5kQ2h1bmtJeCA9IE5PVF9GT1VORDtcbiAgICAgIHZhciBpbnNlcnRJeCA9IDA7IC8vIENvdWxkIHVzZSBiaW5hcnkgc2VhcmNoIGJ1dCBub3QgZXhwZWN0aW5nIHRoYXQgbWFueSBibG9ja3MgdG8gZXhpc3QuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyssIGluc2VydEl4ID0gaSkge1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0RW5kID0gY2h1bmtPZmZzZXRTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPCBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIC8vIFRoaXMgb2Zmc2V0IHJhbmdlIGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBjaHVua3MuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gSWYgaXQgaXMgYWRqYWNlbnQgd2Ugc3RpbGwgY29uc2lkZXIgaXQgcGFydCBvZiB0aGUgcmFuZ2UgYmVjYXVzZVxuICAgICAgICAvLyB3ZSdyZSBnb2luZyBlbmQgdXAgd2l0aCBhIHNpbmdsZSBibG9jayB3aXRoIGFsbCBjb250aWd1b3VzIGRhdGEuXG5cblxuICAgICAgICBpZiAob2Zmc2V0U3RhcnQgPD0gY2h1bmtPZmZzZXRFbmQgKyAxICYmIG9mZnNldEVuZCA+PSBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIHN0YXJ0Q2h1bmtJeCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gTm8gc3RhcnRpbmcgY2h1bmsgd2FzIGZvdW5kLCBtZWFuaW5nIHRoYXQgdGhlIG9mZnNldCBpcyBlaXRoZXIgYmVmb3JlXG4gICAgICAvLyBvciBhZnRlciB0aGUgY3VycmVudCBzdG9yZWQgY2h1bmtzLlxuXG5cbiAgICAgIGlmIChzdGFydENodW5rSXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXJ0SXg6IE5PVF9GT1VORCxcbiAgICAgICAgICBlbmRJeDogTk9UX0ZPVU5ELFxuICAgICAgICAgIGluc2VydEl4OiBpbnNlcnRJeFxuICAgICAgICB9O1xuICAgICAgfSAvLyBGaW5kIHRoZSBlbmRpbmcgY2h1bmsuXG5cblxuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Q2h1bmtJeDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHVua09mZnNldFN0YXJ0ID0gdGhpcy5fZmlsZURhdGFbaV0ub2Zmc2V0O1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRFbmQgPSBjaHVua09mZnNldFN0YXJ0ICsgdGhpcy5fZmlsZURhdGFbaV0uZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA+PSBjaHVua09mZnNldFN0YXJ0IC0gMSkge1xuICAgICAgICAgIC8vIENhbmRpZGF0ZSBmb3IgdGhlIGVuZCBjaHVuaywgaXQgZG9lc24ndCBtZWFuIGl0IGlzIHlldC5cbiAgICAgICAgICBlbmRDaHVua0l4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPD0gY2h1bmtPZmZzZXRFbmQgKyAxKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVuZENodW5rSXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICBlbmRDaHVua0l4ID0gc3RhcnRDaHVua0l4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydEl4OiBzdGFydENodW5rSXgsXG4gICAgICAgIGVuZEl4OiBlbmRDaHVua0l4XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNEYXRhUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzRGF0YVJhbmdlKG9mZnNldFN0YXJ0LCBvZmZzZXRFbmQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5fZmlsZURhdGFbaV07XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA8IGNodW5rLm9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXRTdGFydCA+PSBjaHVuay5vZmZzZXQgJiYgb2Zmc2V0RW5kIDwgY2h1bmsub2Zmc2V0ICsgY2h1bmsuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgZGF0YUNodW5rO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkYXRhQ2h1bmtTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGRhdGFDaHVua0VuZCA9IGRhdGFDaHVua1N0YXJ0ICsgdGhpcy5fZmlsZURhdGFbaV0uZGF0YS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGlmIChvZmZzZXQgPj0gZGF0YUNodW5rU3RhcnQgJiYgb2Zmc2V0IDw9IGRhdGFDaHVua0VuZCkge1xuICAgICAgICAgIGRhdGFDaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhQ2h1bmspIHtcbiAgICAgICAgcmV0dXJuIGRhdGFDaHVuay5kYXRhW29mZnNldCAtIGRhdGFDaHVuay5vZmZzZXRdO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPZmZzZXQgXCIgKyBvZmZzZXQgKyBcIiBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlwiKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2h1bmtlZEZpbGVEYXRhO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENodW5rZWRGaWxlRGF0YTtcblxufSx7fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcbi8qIFRoZSBmaXJzdCA0IGJ5dGVzIG9mIGEgRkxBQyBmaWxlIGRlc2NyaWJlcyB0aGUgaGVhZGVyIGZvciB0aGUgZmlsZS4gSWYgdGhlc2VcbiAqIGJ5dGVzIHJlc3BlY3RpdmVseSByZWFkIFwiZkxhQ1wiLCB3ZSBjYW4gZGV0ZXJtaW5lIGl0IGlzIGEgRkxBQyBmaWxlLlxuICovXG5cblxudmFyIEZMQUNfSEVBREVSX1NJWkUgPSA0O1xuLyogRkxBQyBtZXRhZGF0YSBpcyBzdG9yZWQgaW4gYmxvY2tzIGNvbnRhaW5pbmcgZGF0YSByYW5naW5nIGZyb20gU1RSRUFNSU5GTyB0b1xuICogVk9SQklTX0NPTU1FTlQsIHdoaWNoIGlzIHdoYXQgd2Ugd2FudCB0byB3b3JrIHdpdGguXG4gKlxuICogRWFjaCBtZXRhZGF0YSBoZWFkZXIgaXMgNCBieXRlcyBsb25nLCB3aXRoIHRoZSBmaXJzdCBieXRlIGRldGVybWluaW5nIHdoZXRoZXJcbiAqIGl0IGlzIHRoZSBsYXN0IG1ldGFkYXRhIGJsb2NrIGJlZm9yZSB0aGUgYXVkaW8gZGF0YSBhbmQgd2hhdCB0aGUgYmxvY2sgdHlwZSBpcy5cbiAqIFRoaXMgZmlyc3QgYnl0ZSBjYW4gZnVydGhlciBiZSBzcGxpdCBpbnRvIDggYml0cywgd2l0aCB0aGUgZmlyc3QgYml0IGJlaW5nIHRoZVxuICogbGFzdC1tZXRhZGF0YS1ibG9jayBmbGFnLCBhbmQgdGhlIGxhc3QgdGhyZWUgYml0cyBiZWluZyB0aGUgYmxvY2sgdHlwZS5cbiAqXG4gKiBTaW5jZSB0aGUgc3BlY2lmaWNhdGlvbiBzdGF0ZXMgdGhhdCB0aGUgZGVjaW1hbCB2YWx1ZSBmb3IgYSBWT1JCSVNfQ09NTUVOVCBibG9ja1xuICogdHlwZSBpcyA0LCB0aGUgdHdvIHBvc3NpYmlsaXRpZXMgZm9yIHRoZSBjb21tZW50IGJsb2NrIGhlYWRlciB2YWx1ZXMgYXJlOlxuICogLSAwMDAwMDEwMCAoTm90IGEgbGFzdCBtZXRhZGF0YSBjb21tZW50IGJsb2NrLCB2YWx1ZSBvZiA0KVxuICogLSAxMDAwMDEwMCAoQSBsYXN0IG1ldGFkYXRhIGNvbW1lbnQgYmxvY2ssIHZhbHVlIG9mIDEzMilcbiAqXG4gKiBTaW1pbGFybHksIHRoZSBwaWN0dXJlIGJsb2NrIGhlYWRlciB2YWx1ZXMgYXJlIDYgYW5kIDEyOC5cbiAqXG4gKiBBbGwgdmFsdWVzIGZvciBNRVRBREFUQV9CTE9DS19IRUFERVIgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiBodHRwczovL3hpcGgub3JnL2ZsYWMvZm9ybWF0Lmh0bWwjbWV0YWRhdGFfYmxvY2tfaGVhZGVyXG4gKi9cblxudmFyIENPTU1FTlRfSEVBREVSUyA9IFs0LCAxMzJdO1xudmFyIFBJQ1RVUkVfSEVBREVSUyA9IFs2LCAxMzRdOyAvLyBUaGVzZSBhcmUgdGhlIHBvc3NpYmxlIGltYWdlIHR5cGVzIGFzIGRlZmluZWQgYnkgdGhlIEZMQUMgc3BlY2lmaWNhdGlvbi5cblxudmFyIElNQUdFX1RZUEVTID0gW1wiT3RoZXJcIiwgXCIzMngzMiBwaXhlbHMgJ2ZpbGUgaWNvbicgKFBORyBvbmx5KVwiLCBcIk90aGVyIGZpbGUgaWNvblwiLCBcIkNvdmVyIChmcm9udClcIiwgXCJDb3ZlciAoYmFjaylcIiwgXCJMZWFmbGV0IHBhZ2VcIiwgXCJNZWRpYSAoZS5nLiBsYWJlbCBzaWRlIG9mIENEKVwiLCBcIkxlYWQgYXJ0aXN0L2xlYWQgcGVyZm9ybWVyL3NvbG9pc3RcIiwgXCJBcnRpc3QvcGVyZm9ybWVyXCIsIFwiQ29uZHVjdG9yXCIsIFwiQmFuZC9PcmNoZXN0cmFcIiwgXCJDb21wb3NlclwiLCBcIkx5cmljaXN0L3RleHQgd3JpdGVyXCIsIFwiUmVjb3JkaW5nIExvY2F0aW9uXCIsIFwiRHVyaW5nIHJlY29yZGluZ1wiLCBcIkR1cmluZyBwZXJmb3JtYW5jZVwiLCBcIk1vdmllL3ZpZGVvIHNjcmVlbiBjYXB0dXJlXCIsIFwiQSBicmlnaHQgY29sb3VyZWQgZmlzaFwiLCBcIklsbHVzdHJhdGlvblwiLCBcIkJhbmQvYXJ0aXN0IGxvZ290eXBlXCIsIFwiUHVibGlzaGVyL1N0dWRpbyBsb2dvdHlwZVwiXTtcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBNZWRpYVRhZ1JlYWRlciB0aGF0IHBhcnNlcyBGTEFDIHRhZ3MuXG4gKi9cbnZhciBGTEFDVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKEZMQUNUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gRkxBQ1RhZ1JlYWRlcigpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGTEFDVGFnUmVhZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKEZMQUNUYWdSZWFkZXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfY29tbWVudE9mZnNldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9waWN0dXJlT2Zmc2V0XCIsIHZvaWQgMCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRkxBQ1RhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgdG8gbG9hZCB0aGUgZGF0YSBmcm9tIHRoZSBmaWxlLlxuICAgICAqXG4gICAgICogVG8gYmVnaW4gcHJvY2Vzc2luZyB0aGUgYmxvY2tzLCB0aGUgbmV4dCA0IGJ5dGVzIGFmdGVyIHRoZSBpbml0aWFsIDQgYnl0ZXNcbiAgICAgKiAoYnl0ZXMgNCB0aHJvdWdoIDcpIGFyZSBsb2FkZWQuIEZyb20gdGhlcmUsIHRoZSByZXN0IG9mIHRoZSBsb2FkaW5nIHByb2Nlc3NcbiAgICAgKiBpcyBwYXNzZWQgb24gdG8gdGhlIF9sb2FkQmxvY2sgZnVuY3Rpb24sIHdoaWNoIHdpbGwgaGFuZGxlIHRoZSByZXN0IG9mIHRoZVxuICAgICAqIHBhcnNpbmcgZm9yIHRoZSBtZXRhZGF0YSBibG9ja3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gbWVkaWFGaWxlUmVhZGVyIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB1c2VkIHRvIHBhcnNlIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgb25jZSBfbG9hZERhdGEgaXMgY29tcGxldGVkLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzQsIDddLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIHNlbGYuX2xvYWRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIDQsIGNhbGxiYWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gcGFyc2UgdGhlIGRpZmZlcmVudCBGTEFDIGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIFRoZSBGTEFDIHNwZWNpZmljYXRpb24gZG9lc24ndCBzcGVjaWZ5IGEgc3BlY2lmaWMgbG9jYXRpb24gZm9yIG1ldGFkYXRhIHRvIHJlc2lnbiwgYnV0XG4gICAgICogZGljdGF0ZXMgdGhhdCBpdCBtYXkgYmUgaW4gb25lIG9mIHZhcmlvdXMgYmxvY2tzIGxvY2F0ZWQgdGhyb3VnaG91dCB0aGUgZmlsZS4gVG8gbG9hZCB0aGVcbiAgICAgKiBtZXRhZGF0YSwgd2UgbXVzdCBsb2NhdGUgdGhlIGhlYWRlciBmaXJzdC4gVGhpcyBjYW4gYmUgZG9uZSBieSByZWFkaW5nIHRoZSBmaXJzdCBieXRlIG9mXG4gICAgICogZWFjaCBibG9jayB0byBkZXRlcm1pbmUgdGhlIGJsb2NrIHR5cGUuIEFmdGVyIHRoZSBibG9jayB0eXBlIGNvbWVzIGEgMjQgYml0IGludGVnZXIgdGhhdCBzdG9yZXNcbiAgICAgKiB0aGUgbGVuZ3RoIG9mIHRoZSBibG9jayBhcyBiaWcgZW5kaWFuLiBVc2luZyB0aGlzLCB3ZSBsb2NhdGUgdGhlIGJsb2NrIGFuZCBzdG9yZSB0aGUgb2Zmc2V0IGZvclxuICAgICAqIHBhcnNpbmcgbGF0ZXIuXG4gICAgICpcbiAgICAgKiBBZnRlciBlYWNoIGJsb2NrIGhhcyBiZWVuIHBhcnNlZCwgdGhlIF9uZXh0QmxvY2sgZnVuY3Rpb24gaXMgY2FsbGVkIGluIG9yZGVyXG4gICAgICogdG8gcGFyc2UgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBuZXh0IGJsb2NrLiBBbGwgYmxvY2tzIG5lZWQgdG8gYmUgcGFyc2VkIGluIG9yZGVyIHRvIGZpbmRcbiAgICAgKiBhbGwgb2YgdGhlIHBpY3R1cmUgYW5kIGNvbW1lbnQgYmxvY2tzLlxuICAgICAqXG4gICAgICogTW9yZSBpbmZvIG9uIHRoZSBGTEFDIHNwZWNpZmljYXRpb24gbWF5IGJlIGZvdW5kIGhlcmU6XG4gICAgICogaHR0cHM6Ly94aXBoLm9yZy9mbGFjL2Zvcm1hdC5odG1sXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IG1lZGlhRmlsZVJlYWRlciAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdXNlZCB0byBwYXJzZSB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCB0byBzdGFydCBjaGVja2luZyB0aGUgaGVhZGVyIGZyb20uXG4gICAgICogQHBhcmFtIHtMb2FkQ2FsbGJhY2tUeXBlfSBjYWxsYmFja3MgLSBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvbmNlIHRoZSBoZWFkZXIgaGFzIGJlZW4gZm91bmQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgLyogQXMgbWVudGlvbmVkIGFib3ZlLCB0aGlzIGZpcnN0IGJ5dGUgaXMgbG9hZGVkIHRvIHNlZSB3aGF0IG1ldGFkYXRhIHR5cGVcbiAgICAgICAqIHRoaXMgYmxvY2sgcmVwcmVzZW50cy5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgYmxvY2tIZWFkZXIgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgICAvKiBUaGUgbGFzdCB0aHJlZSBieXRlcyAoaW50ZWdlciAyNCkgY29udGFpbiBhIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgbGVuZ3RoXG4gICAgICAgKiBvZiB0aGUgZm9sbG93aW5nIG1ldGFkYXRhIGJsb2NrLiBUaGUgMSBpcyBhZGRlZCBpbiBvcmRlciB0byBzaGlmdCB0aGUgb2Zmc2V0XG4gICAgICAgKiBieSBvbmUgdG8gZ2V0IHRoZSBsYXN0IHRocmVlIGJ5dGVzIGluIHRoZSBibG9jayBoZWFkZXIuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGJsb2NrU2l6ZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRJbnRlZ2VyMjRBdChvZmZzZXQgKyAxLCB0cnVlKTtcbiAgICAgIC8qIFRoaXMgY29uZGl0aW9uYWwgY2hlY2tzIGlmIGJsb2NrSGVhZGVyICh0aGUgYnl0ZSByZXRyaWV2ZWQgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICogdHlwZSBvZiB0aGUgaGVhZGVyKSBpcyBvbmUgdGhlIGhlYWRlcnMgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAgICAgICpcbiAgICAgICAqIElmIHRoYXQgaXMgbm90IHRydWUsIHRoZSBibG9jayBpcyBza2lwcGVkIG92ZXIgYW5kIHRoZSBuZXh0IHJhbmdlIGlzIGxvYWRlZDpcbiAgICAgICAqIC0gb2Zmc2V0ICsgNCArIGJsb2NrU2l6ZSBhZGRzIDQgdG8gc2tpcCBvdmVyIHRoZSBpbml0aWFsIG1ldGFkYXRhIGhlYWRlciBhbmRcbiAgICAgICAqIGJsb2NrU2l6ZSB0byBza2lwIG92ZXIgdGhlIGJsb2NrIG92ZXJhbGwsIHBsYWNpbmcgaXQgYXQgdGhlIGhlYWQgb2YgdGhlIG5leHRcbiAgICAgICAqIG1ldGFkYXRhIGhlYWRlci5cbiAgICAgICAqIC0gb2Zmc2V0ICsgNCArIDQgKyBibG9ja1NpemUgZG9lcyB0aGUgc2FtZSB0aGluZyBhcyB0aGUgcHJldmlvdXMgYmxvY2sgd2l0aFxuICAgICAgICogdGhlIGV4Y2VwdGlvbiBvZiBhZGRpbmcgYW5vdGhlciA0IGJ5dGVzIHRvIG1vdmUgaXQgdG8gdGhlIGVuZCBvZiB0aGUgbmV3IG1ldGFkYXRhXG4gICAgICAgKiBoZWFkZXIuXG4gICAgICAgKi9cblxuICAgICAgaWYgKENPTU1FTlRfSEVBREVSUy5pbmRleE9mKGJsb2NrSGVhZGVyKSAhPT0gLTEpIHtcbiAgICAgICAgLyogNCBpcyBhZGRlZCB0byBvZmZzZXQgdG8gbW92ZSBpdCB0byB0aGUgaGVhZCBvZiB0aGUgYWN0dWFsIG1ldGFkYXRhLlxuICAgICAgICAgKiBUaGUgcmFuZ2Ugc3RhcnRpbmcgZnJvbSBvZmZzZXRNYXRhZGF0YSAodGhlIGJlZ2lubmluZyBvZiB0aGUgYmxvY2spXG4gICAgICAgICAqIGFuZCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZSAodGhlIGVuZCBvZiB0aGUgYmxvY2spIGlzIGxvYWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBvZmZzZXRNZXRhZGF0YSA9IG9mZnNldCArIDQ7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldE1ldGFkYXRhLCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbW1lbnRPZmZzZXQgPSBvZmZzZXRNZXRhZGF0YTtcblxuICAgICAgICAgICAgc2VsZi5fbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFBJQ1RVUkVfSEVBREVSUy5pbmRleE9mKGJsb2NrSGVhZGVyKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG9mZnNldE1ldGFkYXRhID0gb2Zmc2V0ICsgNDtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0TWV0YWRhdGEsIG9mZnNldE1ldGFkYXRhICsgYmxvY2tTaXplXSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fcGljdHVyZU9mZnNldCA9IG9mZnNldE1ldGFkYXRhO1xuXG4gICAgICAgICAgICBzZWxmLl9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gdXNlZCB0byBsb2FkIHRoZSBuZXh0IHJhbmdlIGFuZCByZXNwZWN0aXZlIGJsb2NrLlxuICAgICAqXG4gICAgICogSWYgdGhlIG1ldGFkYXRhIGJsb2NrIHRoYXQgd2FzIGlkZW50aWZpZWQgaXMgbm90IHRoZSBsYXN0IGJsb2NrIGJlZm9yZSB0aGVcbiAgICAgKiBhdWRpbyBibG9ja3MsIHRoZSBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIGxvYWRpbmcgdGhlIG5leHQgYmxvY2tzLiBJZiBpdCBpc1xuICAgICAqIHRoZSBsYXN0IGJsb2NrIChpZGVudGlmaWVkIGJ5IGFueSB2YWx1ZXMgZ3JlYXRlciB0aGFuIDEyNywgc2VlIEZMQUMgc3BlYy4pLFxuICAgICAqIHRoZSBmdW5jdGlvbiB3aWxsIGRldGVybWluZSB3aGV0aGVyIGEgY29tbWVudCBibG9jayBoYWQgYmVlbiBpZGVudGlmaWVkLlxuICAgICAqXG4gICAgICogSWYgdGhlIGJsb2NrIGRvZXMgbm90IGV4aXN0LCB0aGUgZXJyb3IgY2FsbGJhY2sgaXMgY2FsbGVkLiBPdGhlcndpc2UsIHRoZSBmdW5jdGlvblxuICAgICAqIHdpbGwgY2FsbCB0aGUgc3VjY2VzcyBjYWxsYmFjaywgYWxsb3dpbmcgZGF0YSBwYXJzaW5nIHRvIGJlZ2luLlxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBtZWRpYUZpbGVSZWFkZXIgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHVzZWQgdG8gcGFyc2UgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgdGhhdCB0aGUgZXhpc3RpbmcgaGVhZGVyIHdhcyBsb2NhdGVkIGF0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja0hlYWRlciAtIEFuIGludGVnZXIgcmVmbGVjdGluZyB0aGUgaGVhZGVyIHR5cGUgb2YgdGhlIGJsb2NrLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja1NpemUgLSBUaGUgc2l6ZSBvZiB0aGUgcHJldmlvdXNseSBwcm9jZXNzZWQgaGVhZGVyLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbmV4dEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoYmxvY2tIZWFkZXIgPiAxMjcpIHtcbiAgICAgICAgaWYgKCFzZWxmLl9jb21tZW50T2Zmc2V0KSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibG9hZERhdGFcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBcIkNvbW1lbnQgYmxvY2sgY291bGQgbm90IGJlIGZvdW5kLlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyA0ICsgYmxvY2tTaXplLCBvZmZzZXQgKyA0ICsgNCArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvYWRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCArIDQgKyBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBkYXRhIGFuZCByZXR1cm5zIHRoZSB0YWdzLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhbiBvdmVydmlldyBvZiB0aGUgVm9yYmlzQ29tbWVudCBmb3JtYXQgYW5kIHdoYXQgdGhpcyBmdW5jdGlvbiBhdHRlbXB0cyB0b1xuICAgICAqIHJldHJpZXZlOlxuICAgICAqIC0gRmlyc3QgNCBieXRlczogYSBsb25nIHRoYXQgY29udGFpbnMgdGhlIGxlbmd0aCBvZiB0aGUgdmVuZG9yIHN0cmluZy5cbiAgICAgKiAtIE5leHQgbiBieXRlczogdGhlIHZlbmRvciBzdHJpbmcgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKiAtIE5leHQgNCBieXRlczogYSBsb25nIHJlcHJlc2VudGluZyBob3cgbWFueSBjb21tZW50cyBhcmUgaW4gdGhpcyBibG9ja1xuICAgICAqIEZvciBlYWNoIGNvbW1lbnQgdGhhdCBleGlzdHM6XG4gICAgICogLSBGaXJzdCA0IGJ5dGVzOiBhIGxvbmcgcmVwcmVzZW50aW5nIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1lbnRcbiAgICAgKiAtIE5leHQgbiBieXRlczogdGhlIGNvbW1lbnQgZW5jb2RlZCBpbiBVVEYtOC5cbiAgICAgKiBUaGUgY29tbWVudCBzdHJpbmcgd2lsbCB1c3VhbGx5IGFwcGVhciBpbiBhIGZvcm1hdCBzaW1pbGFyIHRvOlxuICAgICAqIEFSVElTVD1tZVxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBsb25ncyBhbmQgaW50ZWdlcnMgaW4gdGhpcyBibG9jayBhcmUgZW5jb2RlZCBpbiBsaXR0bGUgZW5kaWFuXG4gICAgICogYXMgb3Bwb3NlZCB0byBiaWcgZW5kaWFuIGZvciB0aGUgcmVzdCBvZiB0aGUgRkxBQyBzcGVjLlxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBkYXRhIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB0byBwYXJzZSB0aGUgZmlsZSB3aXRoLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW3RhZ3NdIC0gT3B0aW9uYWwgdGFncyB0byBhbHNvIGJlIHJldHJpZXZlZCBmcm9tIHRoZSBmaWxlLlxuICAgICAqIEByZXR1cm4ge1RhZ1R5cGV9IC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRhZyBpbmZvcm1hdGlvbiBmb3IgdGhlIGZpbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIHZlbmRvckxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KHRoaXMuX2NvbW1lbnRPZmZzZXQsIGZhbHNlKTtcbiAgICAgIHZhciBvZmZzZXRWZW5kb3IgPSB0aGlzLl9jb21tZW50T2Zmc2V0ICsgNDtcbiAgICAgIC8qIFRoaXMgbGluZSBpcyBhYmxlIHRvIHJldHJpZXZlIHRoZSB2ZW5kb3Igc3RyaW5nIHRoYXQgdGhlIFZvcmJpc0NvbW1lbnQgYmxvY2tcbiAgICAgICAqIGNvbnRhaW5zLiBIb3dldmVyLCBpdCBpcyBub3QgcGFydCBvZiB0aGUgdGFncyB0aGF0IEpTTWVkaWFUYWdzIG5vcm1hbGx5IHJldHJpZXZlcyxcbiAgICAgICAqIGFuZCBpcyB0aGVyZWZvcmUgY29tbWVudGVkIG91dC5cbiAgICAgICAqL1xuICAgICAgLy8gdmFyIHZlbmRvciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXRWZW5kb3IsIHZlbmRvckxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuXG4gICAgICB2YXIgb2Zmc2V0TGlzdCA9IHZlbmRvckxlbmd0aCArIG9mZnNldFZlbmRvcjtcbiAgICAgIC8qIFRvIGdldCB0aGUgbWV0YWRhdGEgZnJvbSB0aGUgYmxvY2ssIHdlIGZpcnN0IGdldCB0aGUgbG9uZyB0aGF0IGNvbnRhaW5zIHRoZVxuICAgICAgICogbnVtYmVyIG9mIGFjdHVhbCBjb21tZW50IHZhbHVlcyB0aGF0IGFyZSBleGlzdGVudCB3aXRoaW4gdGhlIGJsb2NrLlxuICAgICAgICpcbiAgICAgICAqIEFzIHdlIGxvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIGNvbW1lbnQgYmxvY2tzLCB3ZSBnZXQgdGhlIGRhdGEgbGVuZ3RoIGluIG9yZGVyIHRvXG4gICAgICAgKiBnZXQgdGhlIHJpZ2h0IHNpemUgc3RyaW5nLCBhbmQgdGhlbiBkZXRlcm1pbmUgd2hpY2ggY2F0ZWdvcnkgdGhhdCBzdHJpbmcgZmFsbHMgdW5kZXIuXG4gICAgICAgKiBUaGUgZGF0YU9mZnNldCB2YXJpYWJsZSBpcyBjb25zdGFudGx5IHVwZGF0ZWQgc28gdGhhdCBpdCBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICAgICAgICogY29tbWVudCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBwYXJzZWQuXG4gICAgICAgKlxuICAgICAgICogQWRkaXRpb25zIG9mIDQgaGVyZSBhcmUgdXNlZCB0byBtb3ZlIHRoZSBvZmZzZXQgcGFzdCB0aGUgZmlyc3QgNCBieXRlcyB3aGljaCBvbmx5IGNvbnRhaW5cbiAgICAgICAqIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1lbnQuXG4gICAgICAgKi9cblxuICAgICAgdmFyIG51bUNvbW1lbnRzID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0TGlzdCwgZmFsc2UpO1xuICAgICAgdmFyIGRhdGFPZmZzZXQgPSBvZmZzZXRMaXN0ICsgNDtcbiAgICAgIHZhciB0aXRsZSwgYXJ0aXN0LCBhbGJ1bSwgdHJhY2ssIGdlbnJlLCBwaWN0dXJlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbW1lbnRzOyBpKyspIHtcbiAgICAgICAgdmFyIF9kYXRhTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQoZGF0YU9mZnNldCwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBzID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KGRhdGFPZmZzZXQgKyA0LCBfZGF0YUxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuICAgICAgICB2YXIgZCA9IHMuaW5kZXhPZihcIj1cIik7XG4gICAgICAgIHZhciBzcGxpdCA9IFtzLnNsaWNlKDAsIGQpLCBzLnNsaWNlKGQgKyAxKV07XG5cbiAgICAgICAgc3dpdGNoIChzcGxpdFswXSkge1xuICAgICAgICAgIGNhc2UgXCJUSVRMRVwiOlxuICAgICAgICAgICAgdGl0bGUgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkFSVElTVFwiOlxuICAgICAgICAgICAgYXJ0aXN0ID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJBTEJVTVwiOlxuICAgICAgICAgICAgYWxidW0gPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIlRSQUNLTlVNQkVSXCI6XG4gICAgICAgICAgICB0cmFjayA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiR0VOUkVcIjpcbiAgICAgICAgICAgIGdlbnJlID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFPZmZzZXQgKz0gNCArIF9kYXRhTGVuZ3RoO1xuICAgICAgfVxuICAgICAgLyogSWYgYSBwaWN0dXJlIG9mZnNldCB3YXMgZm91bmQgYW5kIGFzc2lnbmVkLCB0aGVuIHRoZSByZWFkZXIgd2lsbCBzdGFydCBwcm9jZXNzaW5nXG4gICAgICAgKiB0aGUgcGljdHVyZSBibG9jayBmcm9tIHRoYXQgcG9pbnQuXG4gICAgICAgKlxuICAgICAgICogQWxsIHRoZSBsZW5ndGhzIGZvciB0aGUgcGljdHVyZSBkYXRhIGNhbiBiZSBmb3VuZCBvbmxpbmUgaGVyZTpcbiAgICAgICAqIGh0dHBzOi8veGlwaC5vcmcvZmxhYy9mb3JtYXQuaHRtbCNtZXRhZGF0YV9ibG9ja19waWN0dXJlXG4gICAgICAgKi9cblxuXG4gICAgICBpZiAodGhpcy5fcGljdHVyZU9mZnNldCkge1xuICAgICAgICB2YXIgaW1hZ2VUeXBlID0gZGF0YS5nZXRMb25nQXQodGhpcy5fcGljdHVyZU9mZnNldCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXRNaW1lTGVuZ3RoID0gdGhpcy5fcGljdHVyZU9mZnNldCArIDQ7XG4gICAgICAgIHZhciBtaW1lTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0TWltZUxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXRNaW1lID0gb2Zmc2V0TWltZUxlbmd0aCArIDQ7XG4gICAgICAgIHZhciBtaW1lID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXRNaW1lLCBtaW1lTGVuZ3RoKTtcbiAgICAgICAgdmFyIG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoID0gb2Zmc2V0TWltZSArIG1pbWVMZW5ndGg7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbkxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldERlc2NyaXB0aW9uID0gb2Zmc2V0RGVzY3JpcHRpb25MZW5ndGggKyA0O1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0RGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBvZmZzZXREYXRhTGVuZ3RoID0gb2Zmc2V0RGVzY3JpcHRpb24gKyBkZXNjcmlwdGlvbkxlbmd0aCArIDE2O1xuICAgICAgICB2YXIgZGF0YUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldERhdGFMZW5ndGgsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0RGF0YSA9IG9mZnNldERhdGFMZW5ndGggKyA0O1xuICAgICAgICB2YXIgaW1hZ2VEYXRhID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldERhdGEsIGRhdGFMZW5ndGgsIHRydWUpO1xuICAgICAgICBwaWN0dXJlID0ge1xuICAgICAgICAgIGZvcm1hdDogbWltZSxcbiAgICAgICAgICB0eXBlOiBJTUFHRV9UWVBFU1tpbWFnZVR5cGVdLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkYXRhOiBpbWFnZURhdGFcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZyA9IHtcbiAgICAgICAgdHlwZTogXCJGTEFDXCIsXG4gICAgICAgIHZlcnNpb246IFwiMVwiLFxuICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgICBcImFydGlzdFwiOiBhcnRpc3QsXG4gICAgICAgICAgXCJhbGJ1bVwiOiBhbGJ1bSxcbiAgICAgICAgICBcInRyYWNrXCI6IHRyYWNrLFxuICAgICAgICAgIFwiZ2VucmVcIjogZ2VucmUsXG4gICAgICAgICAgXCJwaWN0dXJlXCI6IHBpY3R1cmVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYnl0ZSByYW5nZSBmb3IgdGhlIHRhZyBpZGVudGlmaWVyLlxuICAgICAqXG4gICAgICogQmVjYXVzZSB0aGUgVm9yYmlzIGNvbW1lbnQgYmxvY2sgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgaW4gYSBzcGVjaWZpZWRcbiAgICAgKiBsb2NhdGlvbiwgd2UgY2FuIG9ubHkgbG9hZCB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgZmlsZSB0byBjb25maXJtIGl0XG4gICAgICogaXMgYSBGTEFDIGZpcnN0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qnl0ZVJhbmdlfSBUaGUgYnl0ZSByYW5nZSB0aGF0IGlkZW50aWZpZXMgdGhlIHRhZyBmb3IgYSBGTEFDLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IEZMQUNfSEVBREVSX1NJWkVcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhpcyByZWFkZXIgY2FuIHJlYWQgYSBjZXJ0YWluIHRhZyBmb3JtYXQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNoZWNrcyB0aGF0IHRoZSBmaXJzdCA0IGNoYXJhY3RlcnMgaW4gdGhlIGZpbGUgYXJlIGZMYUMsIHdoaWNoXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBGTEFDIGZpbGUgc3BlY2lmaWNhdGlvbiBzaG91bGQgYmUgdGhlIGNoYXJhY3RlcnMgdGhhdFxuICAgICAqIGluZGljYXRlIGEgRkxBQyBmaWxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgaGVhZGVyIGlzIGZMYUMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSgwLCA0KSk7XG4gICAgICByZXR1cm4gaWQgPT09ICdmTGFDJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRkxBQ1RhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZMQUNUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYVRhZ1JlYWRlclwiOjEyfV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgSUQzdjFUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoSUQzdjFUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gSUQzdjFUYWdSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElEM3YxVGFnUmVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSUQzdjFUYWdSZWFkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElEM3YxVGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgZmlsZVNpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0U2l6ZSgpO1xuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbZmlsZVNpemUgLSAxMjgsIGZpbGVTaXplIC0gMV0sIGNhbGxiYWNrcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gZGF0YS5nZXRTaXplKCkgLSAxMjg7XG4gICAgICB2YXIgdGl0bGUgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgYXJ0aXN0ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDMzLCAzMCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciBhbGJ1bSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA2MywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgeWVhciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA5MywgNCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciB0cmFja0ZsYWcgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDI4KTtcbiAgICAgIHZhciB0cmFjayA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDk3ICsgMjkpO1xuXG4gICAgICBpZiAodHJhY2tGbGFnID09IDAgJiYgdHJhY2sgIT0gMCkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IFwiMS4xXCI7XG4gICAgICAgIHZhciBjb21tZW50ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDk3LCAyOCkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gXCIxLjBcIjtcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgOTcsIDMwKS50b1N0cmluZygpO1xuICAgICAgICB0cmFjayA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciBnZW5yZUlkeCA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDk3ICsgMzApO1xuXG4gICAgICBpZiAoZ2VucmVJZHggPCAyNTUpIHtcbiAgICAgICAgdmFyIGdlbnJlID0gR0VOUkVTW2dlbnJlSWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBnZW5yZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSB7XG4gICAgICAgIFwidHlwZVwiOiBcIklEM1wiLFxuICAgICAgICBcInZlcnNpb25cIjogdmVyc2lvbixcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlLFxuICAgICAgICAgIFwiYXJ0aXN0XCI6IGFydGlzdCxcbiAgICAgICAgICBcImFsYnVtXCI6IGFsYnVtLFxuICAgICAgICAgIFwieWVhclwiOiB5ZWFyLFxuICAgICAgICAgIFwiY29tbWVudFwiOiBjb21tZW50LFxuICAgICAgICAgIFwiZ2VucmVcIjogZ2VucmVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IGlzIG5vdCBoYXBweSB3aXRoIGFkZGluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHRhZy50YWdzLnRyYWNrID0gdHJhY2s7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gVGhlIGlkZW50aWZpZXIgaXMgVEFHIGFuZCBpcyBhdCBvZmZzZXQ6IC0xMjguIEhvd2V2ZXIsIHRvIGF2b2lkIGFcbiAgICAgIC8vIGZldGNoIGZvciB0aGUgdGFnIGlkZW50aWZpZXIgYW5kIGFub3RoZXIgZm9yIHRoZSBkYXRhLCB3ZSBsb2FkIHRoZVxuICAgICAgLy8gZW50aXJlIGRhdGEgc2luY2UgaXQncyBzbyBzbWFsbC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogLTEyOCxcbiAgICAgICAgbGVuZ3RoOiAxMjhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSgwLCAzKSk7XG4gICAgICByZXR1cm4gaWQgPT09IFwiVEFHXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElEM3YxVGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG5cbnZhciBHRU5SRVMgPSBbXCJCbHVlc1wiLCBcIkNsYXNzaWMgUm9ja1wiLCBcIkNvdW50cnlcIiwgXCJEYW5jZVwiLCBcIkRpc2NvXCIsIFwiRnVua1wiLCBcIkdydW5nZVwiLCBcIkhpcC1Ib3BcIiwgXCJKYXp6XCIsIFwiTWV0YWxcIiwgXCJOZXcgQWdlXCIsIFwiT2xkaWVzXCIsIFwiT3RoZXJcIiwgXCJQb3BcIiwgXCJSJkJcIiwgXCJSYXBcIiwgXCJSZWdnYWVcIiwgXCJSb2NrXCIsIFwiVGVjaG5vXCIsIFwiSW5kdXN0cmlhbFwiLCBcIkFsdGVybmF0aXZlXCIsIFwiU2thXCIsIFwiRGVhdGggTWV0YWxcIiwgXCJQcmFua3NcIiwgXCJTb3VuZHRyYWNrXCIsIFwiRXVyby1UZWNobm9cIiwgXCJBbWJpZW50XCIsIFwiVHJpcC1Ib3BcIiwgXCJWb2NhbFwiLCBcIkphenorRnVua1wiLCBcIkZ1c2lvblwiLCBcIlRyYW5jZVwiLCBcIkNsYXNzaWNhbFwiLCBcIkluc3RydW1lbnRhbFwiLCBcIkFjaWRcIiwgXCJIb3VzZVwiLCBcIkdhbWVcIiwgXCJTb3VuZCBDbGlwXCIsIFwiR29zcGVsXCIsIFwiTm9pc2VcIiwgXCJBbHRlcm5Sb2NrXCIsIFwiQmFzc1wiLCBcIlNvdWxcIiwgXCJQdW5rXCIsIFwiU3BhY2VcIiwgXCJNZWRpdGF0aXZlXCIsIFwiSW5zdHJ1bWVudGFsIFBvcFwiLCBcIkluc3RydW1lbnRhbCBSb2NrXCIsIFwiRXRobmljXCIsIFwiR290aGljXCIsIFwiRGFya3dhdmVcIiwgXCJUZWNobm8tSW5kdXN0cmlhbFwiLCBcIkVsZWN0cm9uaWNcIiwgXCJQb3AtRm9sa1wiLCBcIkV1cm9kYW5jZVwiLCBcIkRyZWFtXCIsIFwiU291dGhlcm4gUm9ja1wiLCBcIkNvbWVkeVwiLCBcIkN1bHRcIiwgXCJHYW5nc3RhXCIsIFwiVG9wIDQwXCIsIFwiQ2hyaXN0aWFuIFJhcFwiLCBcIlBvcC9GdW5rXCIsIFwiSnVuZ2xlXCIsIFwiTmF0aXZlIEFtZXJpY2FuXCIsIFwiQ2FiYXJldFwiLCBcIk5ldyBXYXZlXCIsIFwiUHN5Y2hhZGVsaWNcIiwgXCJSYXZlXCIsIFwiU2hvd3R1bmVzXCIsIFwiVHJhaWxlclwiLCBcIkxvLUZpXCIsIFwiVHJpYmFsXCIsIFwiQWNpZCBQdW5rXCIsIFwiQWNpZCBKYXp6XCIsIFwiUG9sa2FcIiwgXCJSZXRyb1wiLCBcIk11c2ljYWxcIiwgXCJSb2NrICYgUm9sbFwiLCBcIkhhcmQgUm9ja1wiLCBcIkZvbGtcIiwgXCJGb2xrLVJvY2tcIiwgXCJOYXRpb25hbCBGb2xrXCIsIFwiU3dpbmdcIiwgXCJGYXN0IEZ1c2lvblwiLCBcIkJlYm9iXCIsIFwiTGF0aW5cIiwgXCJSZXZpdmFsXCIsIFwiQ2VsdGljXCIsIFwiQmx1ZWdyYXNzXCIsIFwiQXZhbnRnYXJkZVwiLCBcIkdvdGhpYyBSb2NrXCIsIFwiUHJvZ3Jlc3NpdmUgUm9ja1wiLCBcIlBzeWNoZWRlbGljIFJvY2tcIiwgXCJTeW1waG9uaWMgUm9ja1wiLCBcIlNsb3cgUm9ja1wiLCBcIkJpZyBCYW5kXCIsIFwiQ2hvcnVzXCIsIFwiRWFzeSBMaXN0ZW5pbmdcIiwgXCJBY291c3RpY1wiLCBcIkh1bW91clwiLCBcIlNwZWVjaFwiLCBcIkNoYW5zb25cIiwgXCJPcGVyYVwiLCBcIkNoYW1iZXIgTXVzaWNcIiwgXCJTb25hdGFcIiwgXCJTeW1waG9ueVwiLCBcIkJvb3R5IEJhc3NcIiwgXCJQcmltdXNcIiwgXCJQb3JuIEdyb292ZVwiLCBcIlNhdGlyZVwiLCBcIlNsb3cgSmFtXCIsIFwiQ2x1YlwiLCBcIlRhbmdvXCIsIFwiU2FtYmFcIiwgXCJGb2xrbG9yZVwiLCBcIkJhbGxhZFwiLCBcIlBvd2VyIEJhbGxhZFwiLCBcIlJoeXRobWljIFNvdWxcIiwgXCJGcmVlc3R5bGVcIiwgXCJEdWV0XCIsIFwiUHVuayBSb2NrXCIsIFwiRHJ1bSBTb2xvXCIsIFwiQWNhcGVsbGFcIiwgXCJFdXJvLUhvdXNlXCIsIFwiRGFuY2UgSGFsbFwiXTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjFUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgU3RyaW5nVXRpbHMgPSByZXF1aXJlKCcuL1N0cmluZ1V0aWxzJyk7XG5cbnZhciBBcnJheUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL0FycmF5RmlsZVJlYWRlcicpO1xuXG52YXIgRlJBTUVfREVTQ1JJUFRJT05TID0ge1xuICAvLyB2Mi4yXG4gIFwiQlVGXCI6IFwiUmVjb21tZW5kZWQgYnVmZmVyIHNpemVcIixcbiAgXCJDTlRcIjogXCJQbGF5IGNvdW50ZXJcIixcbiAgXCJDT01cIjogXCJDb21tZW50c1wiLFxuICBcIkNSQVwiOiBcIkF1ZGlvIGVuY3J5cHRpb25cIixcbiAgXCJDUk1cIjogXCJFbmNyeXB0ZWQgbWV0YSBmcmFtZVwiLFxuICBcIkVUQ1wiOiBcIkV2ZW50IHRpbWluZyBjb2Rlc1wiLFxuICBcIkVRVVwiOiBcIkVxdWFsaXphdGlvblwiLFxuICBcIkdFT1wiOiBcIkdlbmVyYWwgZW5jYXBzdWxhdGVkIG9iamVjdFwiLFxuICBcIklQTFwiOiBcIkludm9sdmVkIHBlb3BsZSBsaXN0XCIsXG4gIFwiTE5LXCI6IFwiTGlua2VkIGluZm9ybWF0aW9uXCIsXG4gIFwiTUNJXCI6IFwiTXVzaWMgQ0QgSWRlbnRpZmllclwiLFxuICBcIk1MTFwiOiBcIk1QRUcgbG9jYXRpb24gbG9va3VwIHRhYmxlXCIsXG4gIFwiUElDXCI6IFwiQXR0YWNoZWQgcGljdHVyZVwiLFxuICBcIlBPUFwiOiBcIlBvcHVsYXJpbWV0ZXJcIixcbiAgXCJSRVZcIjogXCJSZXZlcmJcIixcbiAgXCJSVkFcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudFwiLFxuICBcIlNMVFwiOiBcIlN5bmNocm9uaXplZCBseXJpYy90ZXh0XCIsXG4gIFwiU1RDXCI6IFwiU3luY2VkIHRlbXBvIGNvZGVzXCIsXG4gIFwiVEFMXCI6IFwiQWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRCUFwiOiBcIkJQTSAoQmVhdHMgUGVyIE1pbnV0ZSlcIixcbiAgXCJUQ01cIjogXCJDb21wb3NlclwiLFxuICBcIlRDT1wiOiBcIkNvbnRlbnQgdHlwZVwiLFxuICBcIlRDUlwiOiBcIkNvcHlyaWdodCBtZXNzYWdlXCIsXG4gIFwiVERBXCI6IFwiRGF0ZVwiLFxuICBcIlREWVwiOiBcIlBsYXlsaXN0IGRlbGF5XCIsXG4gIFwiVEVOXCI6IFwiRW5jb2RlZCBieVwiLFxuICBcIlRGVFwiOiBcIkZpbGUgdHlwZVwiLFxuICBcIlRJTVwiOiBcIlRpbWVcIixcbiAgXCJUS0VcIjogXCJJbml0aWFsIGtleVwiLFxuICBcIlRMQVwiOiBcIkxhbmd1YWdlKHMpXCIsXG4gIFwiVExFXCI6IFwiTGVuZ3RoXCIsXG4gIFwiVE1UXCI6IFwiTWVkaWEgdHlwZVwiLFxuICBcIlRPQVwiOiBcIk9yaWdpbmFsIGFydGlzdChzKS9wZXJmb3JtZXIocylcIixcbiAgXCJUT0ZcIjogXCJPcmlnaW5hbCBmaWxlbmFtZVwiLFxuICBcIlRPTFwiOiBcIk9yaWdpbmFsIEx5cmljaXN0KHMpL3RleHQgd3JpdGVyKHMpXCIsXG4gIFwiVE9SXCI6IFwiT3JpZ2luYWwgcmVsZWFzZSB5ZWFyXCIsXG4gIFwiVE9UXCI6IFwiT3JpZ2luYWwgYWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRQMVwiOiBcIkxlYWQgYXJ0aXN0KHMpL0xlYWQgcGVyZm9ybWVyKHMpL1NvbG9pc3QocykvUGVyZm9ybWluZyBncm91cFwiLFxuICBcIlRQMlwiOiBcIkJhbmQvT3JjaGVzdHJhL0FjY29tcGFuaW1lbnRcIixcbiAgXCJUUDNcIjogXCJDb25kdWN0b3IvUGVyZm9ybWVyIHJlZmluZW1lbnRcIixcbiAgXCJUUDRcIjogXCJJbnRlcnByZXRlZCwgcmVtaXhlZCwgb3Igb3RoZXJ3aXNlIG1vZGlmaWVkIGJ5XCIsXG4gIFwiVFBBXCI6IFwiUGFydCBvZiBhIHNldFwiLFxuICBcIlRQQlwiOiBcIlB1Ymxpc2hlclwiLFxuICBcIlRSQ1wiOiBcIklTUkMgKEludGVybmF0aW9uYWwgU3RhbmRhcmQgUmVjb3JkaW5nIENvZGUpXCIsXG4gIFwiVFJEXCI6IFwiUmVjb3JkaW5nIGRhdGVzXCIsXG4gIFwiVFJLXCI6IFwiVHJhY2sgbnVtYmVyL1Bvc2l0aW9uIGluIHNldFwiLFxuICBcIlRTSVwiOiBcIlNpemVcIixcbiAgXCJUU1NcIjogXCJTb2Z0d2FyZS9oYXJkd2FyZSBhbmQgc2V0dGluZ3MgdXNlZCBmb3IgZW5jb2RpbmdcIixcbiAgXCJUVDFcIjogXCJDb250ZW50IGdyb3VwIGRlc2NyaXB0aW9uXCIsXG4gIFwiVFQyXCI6IFwiVGl0bGUvU29uZ25hbWUvQ29udGVudCBkZXNjcmlwdGlvblwiLFxuICBcIlRUM1wiOiBcIlN1YnRpdGxlL0Rlc2NyaXB0aW9uIHJlZmluZW1lbnRcIixcbiAgXCJUWFRcIjogXCJMeXJpY2lzdC90ZXh0IHdyaXRlclwiLFxuICBcIlRYWFwiOiBcIlVzZXIgZGVmaW5lZCB0ZXh0IGluZm9ybWF0aW9uIGZyYW1lXCIsXG4gIFwiVFlFXCI6IFwiWWVhclwiLFxuICBcIlVGSVwiOiBcIlVuaXF1ZSBmaWxlIGlkZW50aWZpZXJcIixcbiAgXCJVTFRcIjogXCJVbnN5Y2hyb25pemVkIGx5cmljL3RleHQgdHJhbnNjcmlwdGlvblwiLFxuICBcIldBRlwiOiBcIk9mZmljaWFsIGF1ZGlvIGZpbGUgd2VicGFnZVwiLFxuICBcIldBUlwiOiBcIk9mZmljaWFsIGFydGlzdC9wZXJmb3JtZXIgd2VicGFnZVwiLFxuICBcIldBU1wiOiBcIk9mZmljaWFsIGF1ZGlvIHNvdXJjZSB3ZWJwYWdlXCIsXG4gIFwiV0NNXCI6IFwiQ29tbWVyY2lhbCBpbmZvcm1hdGlvblwiLFxuICBcIldDUFwiOiBcIkNvcHlyaWdodC9MZWdhbCBpbmZvcm1hdGlvblwiLFxuICBcIldQQlwiOiBcIlB1Ymxpc2hlcnMgb2ZmaWNpYWwgd2VicGFnZVwiLFxuICBcIldYWFwiOiBcIlVzZXIgZGVmaW5lZCBVUkwgbGluayBmcmFtZVwiLFxuICAvLyB2Mi4zXG4gIFwiQUVOQ1wiOiBcIkF1ZGlvIGVuY3J5cHRpb25cIixcbiAgXCJBUElDXCI6IFwiQXR0YWNoZWQgcGljdHVyZVwiLFxuICBcIkFTUElcIjogXCJBdWRpbyBzZWVrIHBvaW50IGluZGV4XCIsXG4gIFwiQ0hBUFwiOiBcIkNoYXB0ZXJcIixcbiAgXCJDVE9DXCI6IFwiVGFibGUgb2YgY29udGVudHNcIixcbiAgXCJDT01NXCI6IFwiQ29tbWVudHNcIixcbiAgXCJDT01SXCI6IFwiQ29tbWVyY2lhbCBmcmFtZVwiLFxuICBcIkVOQ1JcIjogXCJFbmNyeXB0aW9uIG1ldGhvZCByZWdpc3RyYXRpb25cIixcbiAgXCJFUVUyXCI6IFwiRXF1YWxpc2F0aW9uICgyKVwiLFxuICBcIkVRVUFcIjogXCJFcXVhbGl6YXRpb25cIixcbiAgXCJFVENPXCI6IFwiRXZlbnQgdGltaW5nIGNvZGVzXCIsXG4gIFwiR0VPQlwiOiBcIkdlbmVyYWwgZW5jYXBzdWxhdGVkIG9iamVjdFwiLFxuICBcIkdSSURcIjogXCJHcm91cCBpZGVudGlmaWNhdGlvbiByZWdpc3RyYXRpb25cIixcbiAgXCJJUExTXCI6IFwiSW52b2x2ZWQgcGVvcGxlIGxpc3RcIixcbiAgXCJMSU5LXCI6IFwiTGlua2VkIGluZm9ybWF0aW9uXCIsXG4gIFwiTUNESVwiOiBcIk11c2ljIENEIGlkZW50aWZpZXJcIixcbiAgXCJNTExUXCI6IFwiTVBFRyBsb2NhdGlvbiBsb29rdXAgdGFibGVcIixcbiAgXCJPV05FXCI6IFwiT3duZXJzaGlwIGZyYW1lXCIsXG4gIFwiUFJJVlwiOiBcIlByaXZhdGUgZnJhbWVcIixcbiAgXCJQQ05UXCI6IFwiUGxheSBjb3VudGVyXCIsXG4gIFwiUE9QTVwiOiBcIlBvcHVsYXJpbWV0ZXJcIixcbiAgXCJQT1NTXCI6IFwiUG9zaXRpb24gc3luY2hyb25pc2F0aW9uIGZyYW1lXCIsXG4gIFwiUkJVRlwiOiBcIlJlY29tbWVuZGVkIGJ1ZmZlciBzaXplXCIsXG4gIFwiUlZBMlwiOiBcIlJlbGF0aXZlIHZvbHVtZSBhZGp1c3RtZW50ICgyKVwiLFxuICBcIlJWQURcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudFwiLFxuICBcIlJWUkJcIjogXCJSZXZlcmJcIixcbiAgXCJTRUVLXCI6IFwiU2VlayBmcmFtZVwiLFxuICBcIlNZTFRcIjogXCJTeW5jaHJvbml6ZWQgbHlyaWMvdGV4dFwiLFxuICBcIlNZVENcIjogXCJTeW5jaHJvbml6ZWQgdGVtcG8gY29kZXNcIixcbiAgXCJUQUxCXCI6IFwiQWxidW0vTW92aWUvU2hvdyB0aXRsZVwiLFxuICBcIlRCUE1cIjogXCJCUE0gKGJlYXRzIHBlciBtaW51dGUpXCIsXG4gIFwiVENPTVwiOiBcIkNvbXBvc2VyXCIsXG4gIFwiVENPTlwiOiBcIkNvbnRlbnQgdHlwZVwiLFxuICBcIlRDT1BcIjogXCJDb3B5cmlnaHQgbWVzc2FnZVwiLFxuICBcIlREQVRcIjogXCJEYXRlXCIsXG4gIFwiVERMWVwiOiBcIlBsYXlsaXN0IGRlbGF5XCIsXG4gIFwiVERSQ1wiOiBcIlJlY29yZGluZyB0aW1lXCIsXG4gIFwiVERSTFwiOiBcIlJlbGVhc2UgdGltZVwiLFxuICBcIlREVEdcIjogXCJUYWdnaW5nIHRpbWVcIixcbiAgXCJURU5DXCI6IFwiRW5jb2RlZCBieVwiLFxuICBcIlRFWFRcIjogXCJMeXJpY2lzdC9UZXh0IHdyaXRlclwiLFxuICBcIlRGTFRcIjogXCJGaWxlIHR5cGVcIixcbiAgXCJUSU1FXCI6IFwiVGltZVwiLFxuICBcIlRJUExcIjogXCJJbnZvbHZlZCBwZW9wbGUgbGlzdFwiLFxuICBcIlRJVDFcIjogXCJDb250ZW50IGdyb3VwIGRlc2NyaXB0aW9uXCIsXG4gIFwiVElUMlwiOiBcIlRpdGxlL3NvbmduYW1lL2NvbnRlbnQgZGVzY3JpcHRpb25cIixcbiAgXCJUSVQzXCI6IFwiU3VidGl0bGUvRGVzY3JpcHRpb24gcmVmaW5lbWVudFwiLFxuICBcIlRLRVlcIjogXCJJbml0aWFsIGtleVwiLFxuICBcIlRMQU5cIjogXCJMYW5ndWFnZShzKVwiLFxuICBcIlRMRU5cIjogXCJMZW5ndGhcIixcbiAgXCJUTUNMXCI6IFwiTXVzaWNpYW4gY3JlZGl0cyBsaXN0XCIsXG4gIFwiVE1FRFwiOiBcIk1lZGlhIHR5cGVcIixcbiAgXCJUTU9PXCI6IFwiTW9vZFwiLFxuICBcIlRPQUxcIjogXCJPcmlnaW5hbCBhbGJ1bS9tb3ZpZS9zaG93IHRpdGxlXCIsXG4gIFwiVE9GTlwiOiBcIk9yaWdpbmFsIGZpbGVuYW1lXCIsXG4gIFwiVE9MWVwiOiBcIk9yaWdpbmFsIGx5cmljaXN0KHMpL3RleHQgd3JpdGVyKHMpXCIsXG4gIFwiVE9QRVwiOiBcIk9yaWdpbmFsIGFydGlzdChzKS9wZXJmb3JtZXIocylcIixcbiAgXCJUT1JZXCI6IFwiT3JpZ2luYWwgcmVsZWFzZSB5ZWFyXCIsXG4gIFwiVE9XTlwiOiBcIkZpbGUgb3duZXIvbGljZW5zZWVcIixcbiAgXCJUUEUxXCI6IFwiTGVhZCBwZXJmb3JtZXIocykvU29sb2lzdChzKVwiLFxuICBcIlRQRTJcIjogXCJCYW5kL29yY2hlc3RyYS9hY2NvbXBhbmltZW50XCIsXG4gIFwiVFBFM1wiOiBcIkNvbmR1Y3Rvci9wZXJmb3JtZXIgcmVmaW5lbWVudFwiLFxuICBcIlRQRTRcIjogXCJJbnRlcnByZXRlZCwgcmVtaXhlZCwgb3Igb3RoZXJ3aXNlIG1vZGlmaWVkIGJ5XCIsXG4gIFwiVFBPU1wiOiBcIlBhcnQgb2YgYSBzZXRcIixcbiAgXCJUUFJPXCI6IFwiUHJvZHVjZWQgbm90aWNlXCIsXG4gIFwiVFBVQlwiOiBcIlB1Ymxpc2hlclwiLFxuICBcIlRSQ0tcIjogXCJUcmFjayBudW1iZXIvUG9zaXRpb24gaW4gc2V0XCIsXG4gIFwiVFJEQVwiOiBcIlJlY29yZGluZyBkYXRlc1wiLFxuICBcIlRSU05cIjogXCJJbnRlcm5ldCByYWRpbyBzdGF0aW9uIG5hbWVcIixcbiAgXCJUUlNPXCI6IFwiSW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBvd25lclwiLFxuICBcIlRTT0FcIjogXCJBbGJ1bSBzb3J0IG9yZGVyXCIsXG4gIFwiVFNPUFwiOiBcIlBlcmZvcm1lciBzb3J0IG9yZGVyXCIsXG4gIFwiVFNPVFwiOiBcIlRpdGxlIHNvcnQgb3JkZXJcIixcbiAgXCJUU0laXCI6IFwiU2l6ZVwiLFxuICBcIlRTUkNcIjogXCJJU1JDIChpbnRlcm5hdGlvbmFsIHN0YW5kYXJkIHJlY29yZGluZyBjb2RlKVwiLFxuICBcIlRTU0VcIjogXCJTb2Z0d2FyZS9IYXJkd2FyZSBhbmQgc2V0dGluZ3MgdXNlZCBmb3IgZW5jb2RpbmdcIixcbiAgXCJUU1NUXCI6IFwiU2V0IHN1YnRpdGxlXCIsXG4gIFwiVFlFUlwiOiBcIlllYXJcIixcbiAgXCJUWFhYXCI6IFwiVXNlciBkZWZpbmVkIHRleHQgaW5mb3JtYXRpb24gZnJhbWVcIixcbiAgXCJVRklEXCI6IFwiVW5pcXVlIGZpbGUgaWRlbnRpZmllclwiLFxuICBcIlVTRVJcIjogXCJUZXJtcyBvZiB1c2VcIixcbiAgXCJVU0xUXCI6IFwiVW5zeWNocm9uaXplZCBseXJpYy90ZXh0IHRyYW5zY3JpcHRpb25cIixcbiAgXCJXQ09NXCI6IFwiQ29tbWVyY2lhbCBpbmZvcm1hdGlvblwiLFxuICBcIldDT1BcIjogXCJDb3B5cmlnaHQvTGVnYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXT0FGXCI6IFwiT2ZmaWNpYWwgYXVkaW8gZmlsZSB3ZWJwYWdlXCIsXG4gIFwiV09BUlwiOiBcIk9mZmljaWFsIGFydGlzdC9wZXJmb3JtZXIgd2VicGFnZVwiLFxuICBcIldPQVNcIjogXCJPZmZpY2lhbCBhdWRpbyBzb3VyY2Ugd2VicGFnZVwiLFxuICBcIldPUlNcIjogXCJPZmZpY2lhbCBpbnRlcm5ldCByYWRpbyBzdGF0aW9uIGhvbWVwYWdlXCIsXG4gIFwiV1BBWVwiOiBcIlBheW1lbnRcIixcbiAgXCJXUFVCXCI6IFwiUHVibGlzaGVycyBvZmZpY2lhbCB3ZWJwYWdlXCIsXG4gIFwiV1hYWFwiOiBcIlVzZXIgZGVmaW5lZCBVUkwgbGluayBmcmFtZVwiXG59O1xuXG52YXIgSUQzdjJGcmFtZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIElEM3YyRnJhbWVSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElEM3YyRnJhbWVSZWFkZXIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElEM3YyRnJhbWVSZWFkZXIsIG51bGwsIFt7XG4gICAga2V5OiBcImdldEZyYW1lUmVhZGVyRnVuY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnJhbWVSZWFkZXJGdW5jdGlvbihmcmFtZUlkKSB7XG4gICAgICBpZiAoZnJhbWVJZCBpbiBmcmFtZVJlYWRlckZ1bmN0aW9ucykge1xuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbZnJhbWVJZF07XG4gICAgICB9IGVsc2UgaWYgKGZyYW1lSWRbMF0gPT09IFwiVFwiKSB7XG4gICAgICAgIC8vIEFsbCBmcmFtZSBpZHMgc3RhcnRpbmcgd2l0aCBUIGFyZSB0ZXh0IHRhZ3MuXG4gICAgICAgIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1tcIlQqXCJdO1xuICAgICAgfSBlbHNlIGlmIChmcmFtZUlkWzBdID09PSBcIldcIikge1xuICAgICAgICAvLyBBbGwgZnJhbWUgaWRzIHN0YXJ0aW5nIHdpdGggVyBhcmUgdXJsIHRhZ3MuXG4gICAgICAgIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1tcIlcqXCJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgZnJhbWVzIGNvbnNpc3RzIG9mIGEgZnJhbWUgaGVhZGVyIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGZpZWxkc1xuICAgICAqIGNvbnRhaW5pbmcgdGhlIGFjdHVhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBUaGUgZnJhbWUgSUQgbWFkZSBvdXQgb2YgdGhlIGNoYXJhY3RlcnMgY2FwaXRhbCBBLVogYW5kIDAtOS4gSWRlbnRpZmllcnNcbiAgICAgKiBiZWdpbm5pbmcgd2l0aCBcIlhcIiwgXCJZXCIgYW5kIFwiWlwiIGFyZSBmb3IgZXhwZXJpbWVudGFsIHVzZSBhbmQgZnJlZSBmb3JcbiAgICAgKiBldmVyeW9uZSB0byB1c2UsIHdpdGhvdXQgdGhlIG5lZWQgdG8gc2V0IHRoZSBleHBlcmltZW50YWwgYml0IGluIHRoZSB0YWdcbiAgICAgKiBoZWFkZXIuIEhhdmUgaW4gbWluZCB0aGF0IHNvbWVvbmUgZWxzZSBtaWdodCBoYXZlIHVzZWQgdGhlIHNhbWUgaWRlbnRpZmllclxuICAgICAqIGFzIHlvdS4gQWxsIG90aGVyIGlkZW50aWZpZXJzIGFyZSBlaXRoZXIgdXNlZCBvciByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZS5cbiAgICAgKiBUaGUgZnJhbWUgSUQgaXMgZm9sbG93ZWQgYnkgYSBzaXplIGRlc2NyaXB0b3IsIG1ha2luZyBhIHRvdGFsIGhlYWRlciBzaXplXG4gICAgICogb2YgdGVuIGJ5dGVzIGluIGV2ZXJ5IGZyYW1lLiBUaGUgc2l6ZSBpcyBjYWxjdWxhdGVkIGFzIGZyYW1lIHNpemUgZXhjbHVkaW5nXG4gICAgICogZnJhbWUgaGVhZGVyIChmcmFtZSBzaXplIC0gMTApLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZEZyYW1lc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkRnJhbWVzKG9mZnNldCwgZW5kLCBkYXRhLCBpZDNoZWFkZXIsIHRhZ3MpIHtcbiAgICAgIHZhciBmcmFtZXMgPSB7fTtcblxuICAgICAgdmFyIGZyYW1lSGVhZGVyU2l6ZSA9IHRoaXMuX2dldEZyYW1lSGVhZGVyU2l6ZShpZDNoZWFkZXIpOyAvLyBjb25zb2xlLmxvZygnaGVhZGVyJywgaWQzaGVhZGVyKTtcblxuXG4gICAgICB3aGlsZSAoIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlYWQgYXQgbGVhc3QgdGhlIGZyYW1lIGhlYWRlclxuICAgICAgb2Zmc2V0IDwgZW5kIC0gZnJhbWVIZWFkZXJTaXplKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLl9yZWFkRnJhbWVIZWFkZXIoZGF0YSwgb2Zmc2V0LCBpZDNoZWFkZXIpO1xuXG4gICAgICAgIHZhciBmcmFtZUlkID0gaGVhZGVyLmlkOyAvLyBObyBmcmFtZSBJRCBzb21ldGltZXMgbWVhbnMgaXQncyB0aGUgbGFzdCBmcmFtZSAoR1RGTykuXG5cbiAgICAgICAgaWYgKCFmcmFtZUlkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmxhZ3MgPSBoZWFkZXIuZmxhZ3M7XG4gICAgICAgIHZhciBmcmFtZVNpemUgPSBoZWFkZXIuc2l6ZTtcbiAgICAgICAgdmFyIGZyYW1lRGF0YU9mZnNldCA9IG9mZnNldCArIGhlYWRlci5oZWFkZXJTaXplO1xuICAgICAgICB2YXIgZnJhbWVEYXRhID0gZGF0YTsgLy8gY29uc29sZS5sb2cob2Zmc2V0LCBmcmFtZUlkLCBoZWFkZXIuc2l6ZSArIGhlYWRlci5oZWFkZXJTaXplLCBmbGFncyAmJiBmbGFncy5mb3JtYXQudW5zeW5jaHJvbmlzYXRpb24pO1xuICAgICAgICAvLyBhZHZhbmNlIGRhdGEgb2Zmc2V0IHRvIHRoZSBuZXh0IGZyYW1lIGRhdGFcblxuICAgICAgICBvZmZzZXQgKz0gaGVhZGVyLmhlYWRlclNpemUgKyBoZWFkZXIuc2l6ZTsgLy8gc2tpcCB1bndhbnRlZCB0YWdzXG5cbiAgICAgICAgaWYgKHRhZ3MgJiYgdGFncy5pbmRleE9mKGZyYW1lSWQpID09PSAtMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IC8vIFdvcmthcm91bmQ6IE1QM2V4dCBWMy4zLjE3IHBsYWNlcyBhIG5vbi1jb21wbGlhbnQgcGFkZGluZyBzdHJpbmcgYXRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgSUQzdjIgaGVhZGVyLiBBIHN0cmluZyBsaWtlIFwiTVAzZXh0IFYzLjMuMTkoYW5zaSlcIlxuICAgICAgICAvLyBpcyBhZGRlZCBtdWx0aXBsZSB0aW1lcyBhdCB0aGUgZW5kIG9mIHRoZSBJRDMgdGFnLiBNb3JlIGluZm9ybWF0aW9uXG4gICAgICAgIC8vIGFib3V0IHRoaXMgaXNzdWUgY2FuIGJlIGZvdW5kIGF0XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hYWRzbS9qc21lZGlhdGFncy9pc3N1ZXMvNTgjaXNzdWVjb21tZW50LTMxMzg2NTMzNlxuXG5cbiAgICAgICAgaWYgKGZyYW1lSWQgPT09ICdNUDNlJyB8fCBmcmFtZUlkID09PSAnXFx4MDBNUDMnIHx8IGZyYW1lSWQgPT09ICdcXHgwMFxceDAwTVAnIHx8IGZyYW1lSWQgPT09ICcgTVAzJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVuc3luY0RhdGE7XG5cbiAgICAgICAgaWYgKGZsYWdzICYmIGZsYWdzLmZvcm1hdC51bnN5bmNocm9uaXNhdGlvbikge1xuICAgICAgICAgIGZyYW1lRGF0YSA9IHRoaXMuZ2V0VW5zeW5jRmlsZVJlYWRlcihmcmFtZURhdGEsIGZyYW1lRGF0YU9mZnNldCwgZnJhbWVTaXplKTtcbiAgICAgICAgICBmcmFtZURhdGFPZmZzZXQgPSAwO1xuICAgICAgICAgIGZyYW1lU2l6ZSA9IGZyYW1lRGF0YS5nZXRTaXplKCk7XG4gICAgICAgIH0gLy8gdGhlIGZpcnN0IDQgYnl0ZXMgYXJlIHRoZSByZWFsIGRhdGEgc2l6ZVxuICAgICAgICAvLyAoYWZ0ZXIgdW5zeW5jaHJvbmlzYXRpb24gJiYgZW5jcnlwdGlvbilcblxuXG4gICAgICAgIGlmIChmbGFncyAmJiBmbGFncy5mb3JtYXQuZGF0YV9sZW5ndGhfaW5kaWNhdG9yKSB7XG4gICAgICAgICAgLy8gdmFyIGZyYW1lRGF0YVNpemUgPSBmcmFtZURhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQoZnJhbWVEYXRhT2Zmc2V0KTtcbiAgICAgICAgICBmcmFtZURhdGFPZmZzZXQgKz0gNDtcbiAgICAgICAgICBmcmFtZVNpemUgLT0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWFkRnJhbWVGdW5jID0gSUQzdjJGcmFtZVJlYWRlci5nZXRGcmFtZVJlYWRlckZ1bmN0aW9uKGZyYW1lSWQpO1xuICAgICAgICB2YXIgcGFyc2VkRGF0YSA9IHJlYWRGcmFtZUZ1bmMgPyByZWFkRnJhbWVGdW5jLmFwcGx5KHRoaXMsIFtmcmFtZURhdGFPZmZzZXQsIGZyYW1lU2l6ZSwgZnJhbWVEYXRhLCBmbGFncywgaWQzaGVhZGVyXSkgOiBudWxsO1xuXG4gICAgICAgIHZhciBkZXNjID0gdGhpcy5fZ2V0RnJhbWVEZXNjcmlwdGlvbihmcmFtZUlkKTtcblxuICAgICAgICB2YXIgZnJhbWUgPSB7XG4gICAgICAgICAgaWQ6IGZyYW1lSWQsXG4gICAgICAgICAgc2l6ZTogZnJhbWVTaXplLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgIGRhdGE6IHBhcnNlZERhdGFcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZnJhbWVJZCBpbiBmcmFtZXMpIHtcbiAgICAgICAgICBpZiAoZnJhbWVzW2ZyYW1lSWRdLmlkKSB7XG4gICAgICAgICAgICBmcmFtZXNbZnJhbWVJZF0gPSBbZnJhbWVzW2ZyYW1lSWRdXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmcmFtZXNbZnJhbWVJZF0ucHVzaChmcmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdID0gZnJhbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZyYW1lcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lSGVhZGVyU2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnJhbWVIZWFkZXJTaXplKGlkM2hlYWRlcikge1xuICAgICAgdmFyIG1ham9yID0gaWQzaGVhZGVyLm1ham9yO1xuXG4gICAgICBpZiAobWFqb3IgPT0gMikge1xuICAgICAgICByZXR1cm4gNjtcbiAgICAgIH0gZWxzZSBpZiAobWFqb3IgPT0gMyB8fCBtYWpvciA9PSA0KSB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZEZyYW1lSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkRnJhbWVIZWFkZXIoZGF0YSwgb2Zmc2V0LCBpZDNoZWFkZXIpIHtcbiAgICAgIHZhciBtYWpvciA9IGlkM2hlYWRlci5tYWpvcjtcbiAgICAgIHZhciBmbGFncyA9IG51bGw7XG5cbiAgICAgIHZhciBmcmFtZUhlYWRlclNpemUgPSB0aGlzLl9nZXRGcmFtZUhlYWRlclNpemUoaWQzaGVhZGVyKTtcblxuICAgICAgc3dpdGNoIChtYWpvcikge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdmFyIGZyYW1lSWQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCwgMyk7XG4gICAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGRhdGEuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgMywgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDQpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQgKyA0LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdmFyIGZyYW1lSWQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCwgNCk7XG4gICAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGRhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0ICsgNCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZUlkID09IFN0cmluZy5mcm9tQ2hhckNvZGUoMCwgMCwgMCkgfHwgZnJhbWVJZCA9PSBTdHJpbmcuZnJvbUNoYXJDb2RlKDAsIDAsIDAsIDApKSB7XG4gICAgICAgIGZyYW1lSWQgPSBcIlwiO1xuICAgICAgfSAvLyBpZiBmcmFtZUlkIGlzIGVtcHR5IHRoZW4gaXQncyB0aGUgbGFzdCBmcmFtZVxuXG5cbiAgICAgIGlmIChmcmFtZUlkKSB7XG4gICAgICAgIC8vIHJlYWQgZnJhbWUgbWVzc2FnZSBhbmQgZm9ybWF0IGZsYWdzXG4gICAgICAgIGlmIChtYWpvciA+IDIpIHtcbiAgICAgICAgICBmbGFncyA9IHRoaXMuX3JlYWRGcmFtZUZsYWdzKGRhdGEsIG9mZnNldCArIDgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiaWRcIjogZnJhbWVJZCB8fCBcIlwiLFxuICAgICAgICBcInNpemVcIjogZnJhbWVTaXplIHx8IDAsXG4gICAgICAgIFwiaGVhZGVyU2l6ZVwiOiBmcmFtZUhlYWRlclNpemUgfHwgMCxcbiAgICAgICAgXCJmbGFnc1wiOiBmbGFnc1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRGcmFtZUZsYWdzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkRnJhbWVGbGFncyhkYXRhLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICB0YWdfYWx0ZXJfcHJlc2VydmF0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCA2KSxcbiAgICAgICAgICBmaWxlX2FsdGVyX3ByZXNlcnZhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNSksXG4gICAgICAgICAgcmVhZF9vbmx5OiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCA0KVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICBncm91cGluZ19pZGVudGl0eTogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDcpLFxuICAgICAgICAgIGNvbXByZXNzaW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMyksXG4gICAgICAgICAgZW5jcnlwdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDIpLFxuICAgICAgICAgIHVuc3luY2hyb25pc2F0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMSksXG4gICAgICAgICAgZGF0YV9sZW5ndGhfaW5kaWNhdG9yOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMClcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lRGVzY3JpcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZyYW1lRGVzY3JpcHRpb24oZnJhbWVJZCkge1xuICAgICAgaWYgKGZyYW1lSWQgaW4gRlJBTUVfREVTQ1JJUFRJT05TKSB7XG4gICAgICAgIHJldHVybiBGUkFNRV9ERVNDUklQVElPTlNbZnJhbWVJZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVbnN5bmNGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVuc3luY0ZpbGVSZWFkZXIoZGF0YSwgb2Zmc2V0LCBzaXplKSB7XG4gICAgICB2YXIgZnJhbWVEYXRhID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgc2l6ZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVEYXRhLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoZnJhbWVEYXRhW2ldID09PSAweGZmICYmIGZyYW1lRGF0YVtpICsgMV0gPT09IDB4MDApIHtcbiAgICAgICAgICBmcmFtZURhdGEuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEFycmF5RmlsZVJlYWRlcihmcmFtZURhdGEpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJRDN2MkZyYW1lUmVhZGVyO1xufSgpO1xuXG47XG52YXIgZnJhbWVSZWFkZXJGdW5jdGlvbnMgPSB7fTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0FQSUMnXSA9IGZ1bmN0aW9uIHJlYWRQaWN0dXJlRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIHN0YXJ0ID0gb2Zmc2V0O1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcblxuICBzd2l0Y2ggKGlkM2hlYWRlciAmJiBpZDNoZWFkZXIubWFqb3IpIHtcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgZm9ybWF0ID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyAxLCAzKTtcbiAgICAgIG9mZnNldCArPSA0O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6XG4gICAgY2FzZSA0OlxuICAgICAgdmFyIGZvcm1hdCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxKTtcbiAgICAgIG9mZnNldCArPSAxICsgZm9ybWF0LmJ5dGVzUmVhZENvdW50O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgcmVhZCBJRDN2MiBtYWpvciB2ZXJzaW9uLlwiKTtcbiAgfVxuXG4gIHZhciBiaXRlID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgdmFyIHR5cGUgPSBQSUNUVVJFX1RZUEVbYml0ZV07XG4gIHZhciBkZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIChvZmZzZXQgLSBzdGFydCkgLSAxLCBjaGFyc2V0KTtcbiAgb2Zmc2V0ICs9IDEgKyBkZXNjLmJ5dGVzUmVhZENvdW50O1xuICByZXR1cm4ge1xuICAgIFwiZm9ybWF0XCI6IGZvcm1hdC50b1N0cmluZygpLFxuICAgIFwidHlwZVwiOiB0eXBlLFxuICAgIFwiZGVzY3JpcHRpb25cIjogZGVzYy50b1N0cmluZygpLFxuICAgIFwiZGF0YVwiOiBkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldClcbiAgfTtcbn07IC8vIElEM3YyIGNoYXB0ZXJzIGFjY29yZGluZyB0byBodHRwOi8vaWQzLm9yZy9pZDN2Mi1jaGFwdGVycy0xLjBcblxuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ0hBUCddID0gZnVuY3Rpb24gcmVhZENoYXB0ZXJGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBvZmZzZXQ7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICByZXN1bHQuaWQgPSBpZC50b1N0cmluZygpO1xuICBvZmZzZXQgKz0gaWQuYnl0ZXNSZWFkQ291bnQ7XG4gIHJlc3VsdC5zdGFydFRpbWUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgcmVzdWx0LmVuZFRpbWUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgcmVzdWx0LnN0YXJ0T2Zmc2V0ID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5lbmRPZmZzZXQgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgdmFyIHJlbWFpbmluZ0xlbmd0aCA9IGxlbmd0aCAtIChvZmZzZXQgLSBvcmlnaW5hbE9mZnNldCk7XG4gIHJlc3VsdC5zdWJGcmFtZXMgPSB0aGlzLnJlYWRGcmFtZXMob2Zmc2V0LCBvZmZzZXQgKyByZW1haW5pbmdMZW5ndGgsIGRhdGEsIGlkM2hlYWRlcik7XG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyBJRDN2MiB0YWJsZSBvZiBjb250ZW50cyBhY2NvcmRpbmcgdG8gaHR0cDovL2lkMy5vcmcvaWQzdjItY2hhcHRlcnMtMS4wXG5cblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NUT0MnXSA9IGZ1bmN0aW9uIHJlYWRUYWJsZU9mQ29udGVudHNGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBvZmZzZXQ7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgY2hpbGRFbGVtZW50SWRzOiBbXSxcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIHRvcExldmVsOiB1bmRlZmluZWQsXG4gICAgb3JkZXJlZDogdW5kZWZpbmVkLFxuICAgIGVudHJ5Q291bnQ6IHVuZGVmaW5lZCxcbiAgICBzdWJGcmFtZXM6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgaWQgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSk7XG4gIHJlc3VsdC5pZCA9IGlkLnRvU3RyaW5nKCk7XG4gIG9mZnNldCArPSBpZC5ieXRlc1JlYWRDb3VudDtcbiAgcmVzdWx0LnRvcExldmVsID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgMSk7XG4gIHJlc3VsdC5vcmRlcmVkID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgMCk7XG4gIG9mZnNldCsrO1xuICByZXN1bHQuZW50cnlDb3VudCA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gIG9mZnNldCsrO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0LmVudHJ5Q291bnQ7IGkrKykge1xuICAgIHZhciBjaGlsZElkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCAtIChvZmZzZXQgLSBvcmlnaW5hbE9mZnNldCkpKTtcbiAgICByZXN1bHQuY2hpbGRFbGVtZW50SWRzLnB1c2goY2hpbGRJZC50b1N0cmluZygpKTtcbiAgICBvZmZzZXQgKz0gY2hpbGRJZC5ieXRlc1JlYWRDb3VudDtcbiAgfVxuXG4gIHZhciByZW1haW5pbmdMZW5ndGggPSBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpO1xuICByZXN1bHQuc3ViRnJhbWVzID0gdGhpcy5yZWFkRnJhbWVzKG9mZnNldCwgb2Zmc2V0ICsgcmVtYWluaW5nTGVuZ3RoLCBkYXRhLCBpZDNoZWFkZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTU0nXSA9IGZ1bmN0aW9uIHJlYWRDb21tZW50c0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHZhciBsYW5ndWFnZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gIHZhciBzaG9ydGRlc2MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgNCwgbGVuZ3RoIC0gNCwgY2hhcnNldCk7XG4gIG9mZnNldCArPSA0ICsgc2hvcnRkZXNjLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgdGV4dCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIHN0YXJ0ICsgbGVuZ3RoIC0gb2Zmc2V0LCBjaGFyc2V0KTtcbiAgcmV0dXJuIHtcbiAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgc2hvcnRfZGVzY3JpcHRpb246IHNob3J0ZGVzYy50b1N0cmluZygpLFxuICAgIHRleHQ6IHRleHQudG9TdHJpbmcoKVxuICB9O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTSddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NPTU0nXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1BJQyddID0gZnVuY3Rpb24gKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1snQVBJQyddKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydQQ05UJ10gPSBmdW5jdGlvbiByZWFkQ291bnRlckZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIC8vIEZJWE1FOiBpbXBsZW1lbnQgdGhlIHJlc3Qgb2YgdGhlIHNwZWNcbiAgcmV0dXJuIGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgZmFsc2UpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NOVCddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1BDTlQnXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1QqJ10gPSBmdW5jdGlvbiByZWFkVGV4dEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICByZXR1cm4gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIDEsIGNoYXJzZXQpLnRvU3RyaW5nKCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVFhYWCddID0gZnVuY3Rpb24gcmVhZFRleHRGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgcmV0dXJuIGdldFVzZXJEZWZpbmVkRmllbGRzKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBjaGFyc2V0KTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydXWFhYJ10gPSBmdW5jdGlvbiByZWFkVXJsRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHJldHVybiBnZXRVc2VyRGVmaW5lZEZpZWxkcyhvZmZzZXQsIGxlbmd0aCwgZGF0YSwgY2hhcnNldCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVyonXSA9IGZ1bmN0aW9uIHJlYWRVcmxGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgbGVuZ3RoLCAnaXNvLTg4NTktMScpLnRvU3RyaW5nKCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPTiddID0gZnVuY3Rpb24gcmVhZEdlbnJlRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzKSB7XG4gIHZhciB0ZXh0ID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1QqJ10uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvXlxcKFxcZCtcXCkvLCAnJyk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snVENPTiddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVVNMVCddID0gZnVuY3Rpb24gcmVhZEx5cmljc0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHZhciBsYW5ndWFnZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gIHZhciBkZXNjcmlwdG9yID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDQsIGxlbmd0aCAtIDQsIGNoYXJzZXQpO1xuICBvZmZzZXQgKz0gNCArIGRlc2NyaXB0b3IuYnl0ZXNSZWFkQ291bnQ7XG4gIHZhciBseXJpY3MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IudG9TdHJpbmcoKSxcbiAgICBseXJpY3M6IGx5cmljcy50b1N0cmluZygpXG4gIH07XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVUxUJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snVVNMVCddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVUZJRCddID0gZnVuY3Rpb24gcmVhZEx5cmljc0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBvd25lcklkZW50aWZpZXIgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSk7XG4gIG9mZnNldCArPSBvd25lcklkZW50aWZpZXIuYnl0ZXNSZWFkQ291bnQ7XG4gIHZhciBpZGVudGlmaWVyID0gZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoIC0gb3duZXJJZGVudGlmaWVyLmJ5dGVzUmVhZENvdW50KTtcbiAgcmV0dXJuIHtcbiAgICBvd25lcklkZW50aWZpZXI6IG93bmVySWRlbnRpZmllci50b1N0cmluZygpLFxuICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXJcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFRleHRFbmNvZGluZyhiaXRlKSB7XG4gIHZhciBjaGFyc2V0O1xuXG4gIHN3aXRjaCAoYml0ZSkge1xuICAgIGNhc2UgMHgwMDpcbiAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMTpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTE2JztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAweDAyOlxuICAgICAgY2hhcnNldCA9ICd1dGYtMTZiZSc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMzpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgfVxuXG4gIHJldHVybiBjaGFyc2V0O1xufSAvLyBIYW5kbGVzIHJlYWRpbmcgZGVzY3JpcHRpb24vZGF0YSBmcm9tIGVpdGhlciBodHRwOi8vaWQzLm9yZy9pZDN2Mi4zLjAjVXNlcl9kZWZpbmVkX3RleHRfaW5mb3JtYXRpb25fZnJhbWVcbi8vIGFuZCBodHRwOi8vaWQzLm9yZy9pZDN2Mi4zLjAjVXNlcl9kZWZpbmVkX1VSTF9saW5rX2ZyYW1lXG5cblxuZnVuY3Rpb24gZ2V0VXNlckRlZmluZWRGaWVsZHMob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGNoYXJzZXQpIHtcbiAgdmFyIHVzZXJEZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIDEsIGNoYXJzZXQpO1xuICB2YXIgdXNlckRlZmluZWREYXRhID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEgKyB1c2VyRGVzYy5ieXRlc1JlYWRDb3VudCwgbGVuZ3RoIC0gMSAtIHVzZXJEZXNjLmJ5dGVzUmVhZENvdW50LCBjaGFyc2V0KTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyX2Rlc2NyaXB0aW9uOiB1c2VyRGVzYy50b1N0cmluZygpLFxuICAgIGRhdGE6IHVzZXJEZWZpbmVkRGF0YS50b1N0cmluZygpXG4gIH07XG59XG5cbnZhciBQSUNUVVJFX1RZUEUgPSBbXCJPdGhlclwiLCBcIjMyeDMyIHBpeGVscyAnZmlsZSBpY29uJyAoUE5HIG9ubHkpXCIsIFwiT3RoZXIgZmlsZSBpY29uXCIsIFwiQ292ZXIgKGZyb250KVwiLCBcIkNvdmVyIChiYWNrKVwiLCBcIkxlYWZsZXQgcGFnZVwiLCBcIk1lZGlhIChlLmcuIGxhYmVsIHNpZGUgb2YgQ0QpXCIsIFwiTGVhZCBhcnRpc3QvbGVhZCBwZXJmb3JtZXIvc29sb2lzdFwiLCBcIkFydGlzdC9wZXJmb3JtZXJcIiwgXCJDb25kdWN0b3JcIiwgXCJCYW5kL09yY2hlc3RyYVwiLCBcIkNvbXBvc2VyXCIsIFwiTHlyaWNpc3QvdGV4dCB3cml0ZXJcIiwgXCJSZWNvcmRpbmcgTG9jYXRpb25cIiwgXCJEdXJpbmcgcmVjb3JkaW5nXCIsIFwiRHVyaW5nIHBlcmZvcm1hbmNlXCIsIFwiTW92aWUvdmlkZW8gc2NyZWVuIGNhcHR1cmVcIiwgXCJBIGJyaWdodCBjb2xvdXJlZCBmaXNoXCIsIFwiSWxsdXN0cmF0aW9uXCIsIFwiQmFuZC9hcnRpc3QgbG9nb3R5cGVcIiwgXCJQdWJsaXNoZXIvU3R1ZGlvIGxvZ290eXBlXCJdO1xubW9kdWxlLmV4cG9ydHMgPSBJRDN2MkZyYW1lUmVhZGVyO1xuXG59LHtcIi4vQXJyYXlGaWxlUmVhZGVyXCI6MyxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL1N0cmluZ1V0aWxzXCI6MTN9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBJRDN2MkZyYW1lUmVhZGVyID0gcmVxdWlyZSgnLi9JRDN2MkZyYW1lUmVhZGVyJyk7XG5cbnZhciBJRDNfSEVBREVSX1NJWkUgPSAxMDtcblxudmFyIElEM3YyVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKElEM3YyVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIElEM3YyVGFnUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MlRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKElEM3YyVGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MlRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbNiwgOV0sIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZSggLy8gVGhlIHRhZyBzaXplIGRvZXMgbm90IGluY2x1ZGUgdGhlIGhlYWRlciBzaXplLlxuICAgICAgICAgIFswLCBJRDNfSEVBREVSX1NJWkUgKyBtZWRpYUZpbGVSZWFkZXIuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQoNikgLSAxXSwgY2FsbGJhY2tzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB2YXIgbWFqb3IgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyAzKTtcblxuICAgICAgaWYgKG1ham9yID4gNCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFwidHlwZVwiOiBcIklEM1wiLFxuICAgICAgICAgIFwidmVyc2lvblwiOiBcIj4yLjRcIixcbiAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJldmlzaW9uID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgNCk7XG4gICAgICB2YXIgdW5zeW5jaCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyA1LCA3KTtcbiAgICAgIHZhciB4aGVhZGVyID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDUsIDYpO1xuICAgICAgdmFyIHhpbmRpY2F0b3IgPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgNSwgNSk7XG4gICAgICB2YXIgc2l6ZSA9IGRhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0ICsgNik7XG4gICAgICBvZmZzZXQgKz0gMTA7XG5cbiAgICAgIGlmICh4aGVhZGVyKSB7XG4gICAgICAgIC8vIFdlIHNraXAgdGhlIGV4dGVuZGVkIGhlYWRlciBhbmQgZG9uJ3Qgb2ZmZXIgc3VwcG9ydCBmb3IgaXQgcmlnaHQgbm93LlxuICAgICAgICBpZiAobWFqb3IgPT09IDQpIHtcbiAgICAgICAgICB2YXIgeGhlYWRlcnNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCk7XG4gICAgICAgICAgb2Zmc2V0ICs9IHhoZWFkZXJzaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB4aGVhZGVyc2l6ZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7IC8vIFRoZSAnRXh0ZW5kZWQgaGVhZGVyIHNpemUnLCBjdXJyZW50bHkgNiBvciAxMCBieXRlcywgZXhjbHVkZXMgaXRzZWxmLlxuXG4gICAgICAgICAgb2Zmc2V0ICs9IHhoZWFkZXJzaXplICsgNDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaWQzID0ge1xuICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6ICcyLicgKyBtYWpvciArICcuJyArIHJldmlzaW9uLFxuICAgICAgICBcIm1ham9yXCI6IG1ham9yLFxuICAgICAgICBcInJldmlzaW9uXCI6IHJldmlzaW9uLFxuICAgICAgICBcImZsYWdzXCI6IHtcbiAgICAgICAgICBcInVuc3luY2hyb25pc2F0aW9uXCI6IHVuc3luY2gsXG4gICAgICAgICAgXCJleHRlbmRlZF9oZWFkZXJcIjogeGhlYWRlcixcbiAgICAgICAgICBcImV4cGVyaW1lbnRhbF9pbmRpY2F0b3JcIjogeGluZGljYXRvcixcbiAgICAgICAgICAvLyBUT0RPOiBmb290ZXJfcHJlc2VudFxuICAgICAgICAgIFwiZm9vdGVyX3ByZXNlbnRcIjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaXplXCI6IHNpemUsXG4gICAgICAgIFwidGFnc1wiOiB7fVxuICAgICAgfTtcblxuICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgdmFyIGV4cGFuZGVkVGFncyA9IHRoaXMuX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldEVuZCA9IHNpemUgKyAxMFxuICAgICAgLypoZWFkZXIgc2l6ZSovXG4gICAgICA7IC8vIFdoZW4gdGhpcyBmbGFnIGlzIHNldCB0aGUgZW50aXJlIHRhZyBuZWVkcyB0byBiZSB1bi11bnN5bmNocm9uaXNlZFxuICAgICAgLy8gYmVmb3JlIHBhcnNpbmcgZWFjaCBpbmRpdmlkdWFsIGZyYW1lLiBJbmRpdmlkdWFsIGZyYW1lIHNpemVzIG1pZ2h0IG5vdFxuICAgICAgLy8gdGFrZSB1bnN5bmNocm9uaXNhdGlvbiBpbnRvIGNvbnNpZGVyYXRpb24gd2hlbiBpdCdzIHNldCBvbiB0aGUgdGFnXG4gICAgICAvLyBoZWFkZXIuXG5cbiAgICAgIGlmIChpZDMuZmxhZ3MudW5zeW5jaHJvbmlzYXRpb24pIHtcbiAgICAgICAgZGF0YSA9IElEM3YyRnJhbWVSZWFkZXIuZ2V0VW5zeW5jRmlsZVJlYWRlcihkYXRhLCBvZmZzZXQsIHNpemUpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICBvZmZzZXRFbmQgPSBkYXRhLmdldFNpemUoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZyYW1lcyA9IElEM3YyRnJhbWVSZWFkZXIucmVhZEZyYW1lcyhvZmZzZXQsIG9mZnNldEVuZCwgZGF0YSwgaWQzLCBleHBhbmRlZFRhZ3MpOyAvLyBjcmVhdGUgc2hvcnRjdXRzIGZvciBtb3N0IGNvbW1vbiBkYXRhLlxuXG4gICAgICBmb3IgKHZhciBuYW1lIGluIFNIT1JUQ1VUUykge1xuICAgICAgICBpZiAoU0hPUlRDVVRTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgdmFyIGZyYW1lRGF0YSA9IHRoaXMuX2dldEZyYW1lRGF0YShmcmFtZXMsIFNIT1JUQ1VUU1tuYW1lXSk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVEYXRhKSB7XG4gICAgICAgICAgICBpZDMudGFnc1tuYW1lXSA9IGZyYW1lRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgZnJhbWUgaW4gZnJhbWVzKSB7XG4gICAgICAgIGlmIChmcmFtZXMuaGFzT3duUHJvcGVydHkoZnJhbWUpKSB7XG4gICAgICAgICAgaWQzLnRhZ3NbZnJhbWVdID0gZnJhbWVzW2ZyYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWQzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RnJhbWVEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGcmFtZURhdGEoZnJhbWVzLCBpZHMpIHtcbiAgICAgIHZhciBmcmFtZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlkOyBpZCA9IGlkc1tpXTsgaSsrKSB7XG4gICAgICAgIGlmIChpZCBpbiBmcmFtZXMpIHtcbiAgICAgICAgICBpZiAoZnJhbWVzW2lkXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lc1tpZF1bMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVzW2lkXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZnJhbWUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydGN1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRjdXRzKCkge1xuICAgICAgcmV0dXJuIFNIT1JUQ1VUUztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICAvLyBJRDMgaGVhZGVyXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogSUQzX0hFQURFUl9TSVpFXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgMykpO1xuICAgICAgcmV0dXJuIGlkID09PSAnSUQzJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSUQzdjJUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcblxudmFyIFNIT1JUQ1VUUyA9IHtcbiAgXCJ0aXRsZVwiOiBbXCJUSVQyXCIsIFwiVFQyXCJdLFxuICBcImFydGlzdFwiOiBbXCJUUEUxXCIsIFwiVFAxXCJdLFxuICBcImFsYnVtXCI6IFtcIlRBTEJcIiwgXCJUQUxcIl0sXG4gIFwieWVhclwiOiBbXCJUWUVSXCIsIFwiVFlFXCJdLFxuICBcImNvbW1lbnRcIjogW1wiQ09NTVwiLCBcIkNPTVwiXSxcbiAgXCJ0cmFja1wiOiBbXCJUUkNLXCIsIFwiVFJLXCJdLFxuICBcImdlbnJlXCI6IFtcIlRDT05cIiwgXCJUQ09cIl0sXG4gIFwicGljdHVyZVwiOiBbXCJBUElDXCIsIFwiUElDXCJdLFxuICBcImx5cmljc1wiOiBbXCJVU0xUXCIsIFwiVUxUXCJdXG59O1xubW9kdWxlLmV4cG9ydHMgPSBJRDN2MlRhZ1JlYWRlcjtcblxufSx7XCIuL0lEM3YyRnJhbWVSZWFkZXJcIjo4LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogU3VwcG9ydCBmb3IgaVR1bmVzLXN0eWxlIG00YSB0YWdzXG4gKiBTZWU6XG4gKiAgIGh0dHA6Ly9hdG9taWNwYXJzbGV5LnNvdXJjZWZvcmdlLm5ldC9tcGVnLTRmaWxlcy5odG1sXG4gKiAgIGh0dHA6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL21hYy9saWJyYXJ5L2RvY3VtZW50YXRpb24vUXVpY2tUaW1lL1FURkYvTWV0YWRhdGEvTWV0YWRhdGEuaHRtbFxuICogQXV0aG9yZWQgYnkgSm9zaHVhIEtpZmVyIDxqb3NodWEua2lmZXIgZ21haWwuY29tPlxuICogXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBNUDRUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoTVA0VGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIE1QNFRhZ1JlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTVA0VGFnUmVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTVA0VGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNUDRUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIC8vIE1QNCBtZXRhZGF0YSBpc24ndCBsb2NhdGVkIGluIGEgc3BlY2lmaWMgbG9jYXRpb24gb2YgdGhlIGZpbGUuIFJvdWdobHlcbiAgICAgIC8vIHNwZWFraW5nLCBpdCdzIGNvbXBvc2VkIG9mIGJsb2NrcyBjaGFpbmVkIHRvZ2V0aGVyIGxpa2UgYSBsaW5rZWQgbGlzdC5cbiAgICAgIC8vIFRoZXNlIGJsb2NrcyBhcmUgY2FsbGVkIGF0b21zIChvciBib3hlcykuXG4gICAgICAvLyBFYWNoIGF0b20gb2YgdGhlIGxpc3QgY2FuIGhhdmUgaXRzIG93biBjaGlsZCBsaW5rZWQgbGlzdC4gQXRvbXMgaW4gdGhpc1xuICAgICAgLy8gc2l0dWF0aW9uIGRvIG5vdCBwb3NzZXNzIGFueSBkYXRhIGFuZCBhcmUgY2FsbGVkIFwiY29udGFpbmVyXCIgYXMgdGhleSBvbmx5XG4gICAgICAvLyBjb250YWluIG90aGVyIGF0b21zLlxuICAgICAgLy8gT3RoZXIgYXRvbXMgcmVwcmVzZW50IGEgcGFydGljdWxhciBzZXQgb2YgZGF0YSwgbGlrZSBhdWRpbywgdmlkZW8gb3JcbiAgICAgIC8vIG1ldGFkYXRhLiBJbiBvcmRlciB0byBmaW5kIGFuZCBsb2FkIGFsbCB0aGUgaW50ZXJlc3RpbmcgYXRvbXMgd2UgbmVlZFxuICAgICAgLy8gdG8gdHJhdmVyc2UgdGhlIGVudGlyZSBsaW5rZWQgbGlzdCBvZiBhdG9tcyBhbmQgb25seSBsb2FkIHRoZSBvbmVzXG4gICAgICAvLyBhc3NvY2lhdGVkIHdpdGggbWV0YWRhdGEuXG4gICAgICAvLyBUaGUgbWV0YWRhdGEgYXRvbXMgY2FuIGJlIGZpbmQgdW5kZXIgdGhlIFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiIGhpZXJhcmNoeS5cbiAgICAgIHZhciBzZWxmID0gdGhpczsgLy8gTG9hZCB0aGUgaGVhZGVyIG9mIHRoZSBmaXJzdCBhdG9tXG5cbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzAsIDE2XSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIDAsIFwiXCIsIGNhbGxiYWNrcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgcGFyZW50QXRvbUZ1bGxOYW1lLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmIChvZmZzZXQgPj0gbWVkaWFGaWxlUmVhZGVyLmdldFNpemUoKSkge1xuICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGYgPSB0aGlzOyAvLyA4IGlzIHRoZSBzaXplIG9mIHRoZSBhdG9tU2l6ZSBhbmQgYXRvbU5hbWUgZmllbGRzLlxuICAgICAgLy8gV2hlbiByZWFkaW5nIHRoZSBjdXJyZW50IGJsb2NrIHdlIGFsd2F5cyByZWFkIDggbW9yZSBieXRlcyBpbiBvcmRlclxuICAgICAgLy8gdG8gYWxzbyByZWFkIHRoZSBoZWFkZXIgb2YgdGhlIG5leHQgYmxvY2suXG5cbiAgICAgIHZhciBhdG9tU2l6ZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcblxuICAgICAgaWYgKGF0b21TaXplID09IDAgfHwgaXNOYU4oYXRvbVNpemUpKSB7XG4gICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXRvbU5hbWUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgNCwgNCk7IC8vIGNvbnNvbGUubG9nKHBhcmVudEF0b21GdWxsTmFtZSwgYXRvbU5hbWUsIGF0b21TaXplKTtcbiAgICAgIC8vIENvbnRhaW5lciBhdG9tcyAobm8gYWN0dWFsIGRhdGEpXG5cbiAgICAgIGlmICh0aGlzLl9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpKSB7XG4gICAgICAgIGlmIChhdG9tTmFtZSA9PSBcIm1ldGFcIikge1xuICAgICAgICAgIC8vIFRoZSBcIm1ldGFcIiBhdG9tIGJyZWFrcyBjb252ZW50aW9uIGFuZCBpcyBhIGNvbnRhaW5lciB3aXRoIGRhdGEuXG4gICAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIG5leHRfaXRlbV9pZCAodWludDMyKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0b21GdWxsTmFtZSA9IChwYXJlbnRBdG9tRnVsbE5hbWUgPyBwYXJlbnRBdG9tRnVsbE5hbWUgKyBcIi5cIiA6IFwiXCIpICsgYXRvbU5hbWU7XG5cbiAgICAgICAgaWYgKGF0b21GdWxsTmFtZSA9PT0gXCJtb292LnVkdGEubWV0YS5pbHN0XCIpIHtcbiAgICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQsIG9mZnNldCArIGF0b21TaXplXSwgY2FsbGJhY2tzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyA4LCBvZmZzZXQgKyA4ICsgOF0sIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgICBzZWxmLl9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCArIDgsIGF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXQgKyBhdG9tU2l6ZSwgb2Zmc2V0ICsgYXRvbVNpemUgKyA4XSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyBhdG9tU2l6ZSwgcGFyZW50QXRvbUZ1bGxOYW1lLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc0NvbnRhaW5lckF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udGFpbmVyQXRvbShhdG9tTmFtZSkge1xuICAgICAgcmV0dXJuIFtcIm1vb3ZcIiwgXCJ1ZHRhXCIsIFwibWV0YVwiLCBcImlsc3RcIl0uaW5kZXhPZihhdG9tTmFtZSkgPj0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NhblJlYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jYW5SZWFkQXRvbShhdG9tTmFtZSkge1xuICAgICAgcmV0dXJuIGF0b21OYW1lICE9PSBcIi0tLS1cIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3NUb1JlYWQpIHtcbiAgICAgIHZhciB0YWdzID0ge307XG4gICAgICB0YWdzVG9SZWFkID0gdGhpcy5fZXhwYW5kU2hvcnRjdXRUYWdzKHRhZ3NUb1JlYWQpO1xuXG4gICAgICB0aGlzLl9yZWFkQXRvbSh0YWdzLCBkYXRhLCAwLCBkYXRhLmdldFNpemUoKSwgdGFnc1RvUmVhZCk7IC8vIGNyZWF0ZSBzaG9ydGN1dHMgZm9yIG1vc3QgY29tbW9uIGRhdGEuXG5cblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBTSE9SVENVVFMpIHtcbiAgICAgICAgaWYgKFNIT1JUQ1VUUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHZhciB0YWcgPSB0YWdzW1NIT1JUQ1VUU1tuYW1lXV07XG5cbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJ0cmFja1wiKSB7XG4gICAgICAgICAgICAgIHRhZ3NbbmFtZV0gPSB0YWcuZGF0YS50cmFjaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhZ3NbbmFtZV0gPSB0YWcuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiTVA0XCIsXG4gICAgICAgIFwiZnR5cFwiOiBkYXRhLmdldFN0cmluZ0F0KDgsIDQpLFxuICAgICAgICBcInZlcnNpb25cIjogZGF0YS5nZXRMb25nQXQoMTIsIHRydWUpLFxuICAgICAgICBcInRhZ3NcIjogdGFnc1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkQXRvbSh0YWdzLCBkYXRhLCBvZmZzZXQsIGxlbmd0aCwgdGFnc1RvUmVhZCwgcGFyZW50QXRvbUZ1bGxOYW1lLCBpbmRlbnQpIHtcbiAgICAgIGluZGVudCA9IGluZGVudCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGluZGVudCArIFwiICBcIjtcbiAgICAgIHZhciBzZWVrID0gb2Zmc2V0O1xuXG4gICAgICB3aGlsZSAoc2VlayA8IG9mZnNldCArIGxlbmd0aCkge1xuICAgICAgICB2YXIgYXRvbVNpemUgPSBkYXRhLmdldExvbmdBdChzZWVrLCB0cnVlKTtcblxuICAgICAgICBpZiAoYXRvbVNpemUgPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdG9tTmFtZSA9IGRhdGEuZ2V0U3RyaW5nQXQoc2VlayArIDQsIDQpOyAvLyBjb25zb2xlLmxvZyhzZWVrLCBwYXJlbnRBdG9tRnVsbE5hbWUsIGF0b21OYW1lLCBhdG9tU2l6ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29udGFpbmVyQXRvbShhdG9tTmFtZSkpIHtcbiAgICAgICAgICBpZiAoYXRvbU5hbWUgPT0gXCJtZXRhXCIpIHtcbiAgICAgICAgICAgIHNlZWsgKz0gNDsgLy8gbmV4dF9pdGVtX2lkICh1aW50MzIpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGF0b21GdWxsTmFtZSA9IChwYXJlbnRBdG9tRnVsbE5hbWUgPyBwYXJlbnRBdG9tRnVsbE5hbWUgKyBcIi5cIiA6IFwiXCIpICsgYXRvbU5hbWU7XG5cbiAgICAgICAgICB0aGlzLl9yZWFkQXRvbSh0YWdzLCBkYXRhLCBzZWVrICsgOCwgYXRvbVNpemUgLSA4LCB0YWdzVG9SZWFkLCBhdG9tRnVsbE5hbWUsIGluZGVudCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gVmFsdWUgYXRvbXNcblxuXG4gICAgICAgIGlmICgoIXRhZ3NUb1JlYWQgfHwgdGFnc1RvUmVhZC5pbmRleE9mKGF0b21OYW1lKSA+PSAwKSAmJiBwYXJlbnRBdG9tRnVsbE5hbWUgPT09IFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiICYmIHRoaXMuX2NhblJlYWRBdG9tKGF0b21OYW1lKSkge1xuICAgICAgICAgIHRhZ3NbYXRvbU5hbWVdID0gdGhpcy5fcmVhZE1ldGFkYXRhQXRvbShkYXRhLCBzZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZWsgKz0gYXRvbVNpemU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkTWV0YWRhdGFBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWFkTWV0YWRhdGFBdG9tKGRhdGEsIG9mZnNldCkge1xuICAgICAgLy8gMTY6IG5hbWUgKyBzaXplICsgXCJkYXRhXCIgKyBzaXplICg0IGJ5dGVzIGVhY2gpXG4gICAgICB2YXIgTUVUQURBVEFfSEVBREVSID0gMTY7XG4gICAgICB2YXIgYXRvbVNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICAgICAgdmFyIGF0b21OYW1lID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyA0LCA0KTtcbiAgICAgIHZhciBrbGFzcyA9IGRhdGEuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMSwgdHJ1ZSk7XG4gICAgICB2YXIgdHlwZSA9IFRZUEVTW2tsYXNzXTtcbiAgICAgIHZhciBhdG9tRGF0YTtcblxuICAgICAgaWYgKGF0b21OYW1lID09IFwidHJrblwiKSB7XG4gICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgIFwidHJhY2tcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTEpLFxuICAgICAgICAgIFwidG90YWxcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTMpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGF0b21OYW1lID09IFwiZGlza1wiKSB7XG4gICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgIFwiZGlza1wiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMSksXG4gICAgICAgICAgXCJ0b3RhbFwiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMylcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDQ6IGF0b20gdmVyc2lvbiAoMSBieXRlKSArIGF0b20gZmxhZ3MgKDMgYnl0ZXMpXG4gICAgICAgIC8vIDQ6IE5VTEwgKHVzdWFsbHkgbG9jYWxlIGluZGljYXRvcilcbiAgICAgICAgdmFyIGF0b21IZWFkZXIgPSBNRVRBREFUQV9IRUFERVIgKyA0ICsgNDtcbiAgICAgICAgdmFyIGRhdGFTdGFydCA9IG9mZnNldCArIGF0b21IZWFkZXI7XG4gICAgICAgIHZhciBkYXRhTGVuZ3RoID0gYXRvbVNpemUgLSBhdG9tSGVhZGVyO1xuICAgICAgICB2YXIgYXRvbURhdGE7IC8vIFdvcmthcm91bmQgZm9yIGNvdmVycyBiZWluZyBwYXJzZWQgYXMgJ3VpbnQ4JyB0eXBlIGRlc3BpdGUgYmVpbmcgYW4gJ2NvdnInIGF0b21cblxuICAgICAgICBpZiAoYXRvbU5hbWUgPT09ICdjb3ZyJyAmJiB0eXBlID09PSAndWludDgnKSB7XG4gICAgICAgICAgdHlwZSA9ICdqcGVnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICBhdG9tRGF0YSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChkYXRhU3RhcnQsIGRhdGFMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInVpbnQ4XCI6XG4gICAgICAgICAgICBhdG9tRGF0YSA9IGRhdGEuZ2V0U2hvcnRBdChkYXRhU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImludFwiOlxuICAgICAgICAgIGNhc2UgXCJ1aW50XCI6XG4gICAgICAgICAgICAvLyBUaG91Z2ggdGhlIFF1aWNrVGltZSBzcGVjIGRvZXNuJ3Qgc3RhdGUgaXQsIHRoZXJlIGFyZSA2NC1iaXQgdmFsdWVzXG4gICAgICAgICAgICAvLyBzdWNoIGFzIHBsSUQgKFBsYXlsaXN0L0NvbGxlY3Rpb24gSUQpLiBXaXRoIGl0cyBzaW5nbGUgNjQtYml0IGZsb2F0aW5nXG4gICAgICAgICAgICAvLyBwb2ludCBudW1iZXIgdHlwZSwgdGhlc2UgYXJlIGhhcmQgdG8gcGFyc2UgYW5kIHBhc3MgaW4gSmF2YVNjcmlwdC5cbiAgICAgICAgICAgIC8vIFRoZSBoaWdoIHdvcmQgb2YgcGxJRCBzZWVtcyB0byBhbHdheXMgYmUgemVybywgc28sIGFzIHRoaXMgaXMgdGhlXG4gICAgICAgICAgICAvLyBvbmx5IGN1cnJlbnQgNjQtYml0IGF0b20gaGFuZGxlZCwgaXQgaXMgcGFyc2VkIGZyb20gaXRzIDMyLWJpdFxuICAgICAgICAgICAgLy8gbG93IHdvcmQgYXMgYW4gdW5zaWduZWQgbG9uZy5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW50UmVhZGVyID0gdHlwZSA9PSAnaW50JyA/IGRhdGFMZW5ndGggPT0gMSA/IGRhdGEuZ2V0U0J5dGVBdCA6IGRhdGFMZW5ndGggPT0gMiA/IGRhdGEuZ2V0U1Nob3J0QXQgOiBkYXRhTGVuZ3RoID09IDQgPyBkYXRhLmdldFNMb25nQXQgOiBkYXRhLmdldExvbmdBdCA6IGRhdGFMZW5ndGggPT0gMSA/IGRhdGEuZ2V0Qnl0ZUF0IDogZGF0YUxlbmd0aCA9PSAyID8gZGF0YS5nZXRTaG9ydEF0IDogZGF0YS5nZXRMb25nQXQ7IC8vICRGbG93Rml4TWUgLSBnZXRCeXRlQXQgZG9lc24ndCByZWNlaXZlIGEgc2Vjb25kIGFyZ3VtZW50XG5cbiAgICAgICAgICAgIGF0b21EYXRhID0gaW50UmVhZGVyLmNhbGwoZGF0YSwgZGF0YVN0YXJ0ICsgKGRhdGFMZW5ndGggPT0gOCA/IDQgOiAwKSwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICAgICAgY2FzZSBcInBuZ1wiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSB7XG4gICAgICAgICAgICAgIFwiZm9ybWF0XCI6IFwiaW1hZ2UvXCIgKyB0eXBlLFxuICAgICAgICAgICAgICBcImRhdGFcIjogZGF0YS5nZXRCeXRlc0F0KGRhdGFTdGFydCwgZGF0YUxlbmd0aClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogYXRvbU5hbWUsXG4gICAgICAgIHNpemU6IGF0b21TaXplLFxuICAgICAgICBkZXNjcmlwdGlvbjogQVRPTV9ERVNDUklQVElPTlNbYXRvbU5hbWVdIHx8IFwiVW5rbm93blwiLFxuICAgICAgICBkYXRhOiBhdG9tRGF0YVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiBTSE9SVENVVFM7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gVGhlIHRhZyBpZGVudGlmaWVyIGlzIGxvY2F0ZWQgaW4gWzQsIDhdIGJ1dCBzaW5jZSB3ZSdsbCBuZWVkIHRvIHJlYWRlclxuICAgICAgLy8gdGhlIGhlYWRlciBvZiB0aGUgZmlyc3QgYmxvY2sgYW55d2F5LCB3ZSBsb2FkIGl0IGluc3RlYWQgdG8gYXZvaWRcbiAgICAgIC8vIG1ha2luZyB0d28gcmVxdWVzdHMuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogMTZcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSg0LCA4KSk7XG4gICAgICByZXR1cm4gaWQgPT09IFwiZnR5cFwiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNUDRUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcbi8qXG4gKiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9jb250ZW50L2RvY3VtZW50YXRpb24vUXVpY2tUaW1lL1FURkYvTWV0YWRhdGEvTWV0YWRhdGEuaHRtbCMvL2FwcGxlX3JlZi9kb2MvdWlkL1RQNDAwMDA5MzktQ0gxLVNXMzVcbiovXG5cblxudmFyIFRZUEVTID0ge1xuICBcIjBcIjogXCJ1aW50OFwiLFxuICBcIjFcIjogXCJ0ZXh0XCIsXG4gIFwiMTNcIjogXCJqcGVnXCIsXG4gIFwiMTRcIjogXCJwbmdcIixcbiAgXCIyMVwiOiBcImludFwiLFxuICBcIjIyXCI6IFwidWludFwiXG59O1xudmFyIEFUT01fREVTQ1JJUFRJT05TID0ge1xuICBcIsKpYWxiXCI6IFwiQWxidW1cIixcbiAgXCLCqUFSVFwiOiBcIkFydGlzdFwiLFxuICBcImFBUlRcIjogXCJBbGJ1bSBBcnRpc3RcIixcbiAgXCLCqWRheVwiOiBcIlJlbGVhc2UgRGF0ZVwiLFxuICBcIsKpbmFtXCI6IFwiVGl0bGVcIixcbiAgXCLCqWdlblwiOiBcIkdlbnJlXCIsXG4gIFwiZ25yZVwiOiBcIkdlbnJlXCIsXG4gIFwidHJrblwiOiBcIlRyYWNrIE51bWJlclwiLFxuICBcIsKpd3J0XCI6IFwiQ29tcG9zZXJcIixcbiAgXCLCqXRvb1wiOiBcIkVuY29kaW5nIFRvb2xcIixcbiAgXCLCqWVuY1wiOiBcIkVuY29kZWQgQnlcIixcbiAgXCJjcHJ0XCI6IFwiQ29weXJpZ2h0XCIsXG4gIFwiY292clwiOiBcIkNvdmVyIEFydFwiLFxuICBcIsKpZ3JwXCI6IFwiR3JvdXBpbmdcIixcbiAgXCJrZXl3XCI6IFwiS2V5d29yZHNcIixcbiAgXCLCqWx5clwiOiBcIkx5cmljc1wiLFxuICBcIsKpY210XCI6IFwiQ29tbWVudFwiLFxuICBcInRtcG9cIjogXCJUZW1wb1wiLFxuICBcImNwaWxcIjogXCJDb21waWxhdGlvblwiLFxuICBcImRpc2tcIjogXCJEaXNjIE51bWJlclwiLFxuICBcInR2c2hcIjogXCJUViBTaG93IE5hbWVcIixcbiAgXCJ0dmVuXCI6IFwiVFYgRXBpc29kZSBJRFwiLFxuICBcInR2c25cIjogXCJUViBTZWFzb25cIixcbiAgXCJ0dmVzXCI6IFwiVFYgRXBpc29kZVwiLFxuICBcInR2bm5cIjogXCJUViBOZXR3b3JrXCIsXG4gIFwiZGVzY1wiOiBcIkRlc2NyaXB0aW9uXCIsXG4gIFwibGRlc1wiOiBcIkxvbmcgRGVzY3JpcHRpb25cIixcbiAgXCJzb25tXCI6IFwiU29ydCBOYW1lXCIsXG4gIFwic29hclwiOiBcIlNvcnQgQXJ0aXN0XCIsXG4gIFwic29hYVwiOiBcIlNvcnQgQWxidW1cIixcbiAgXCJzb2NvXCI6IFwiU29ydCBDb21wb3NlclwiLFxuICBcInNvc25cIjogXCJTb3J0IFNob3dcIixcbiAgXCJwdXJkXCI6IFwiUHVyY2hhc2UgRGF0ZVwiLFxuICBcInBjc3RcIjogXCJQb2RjYXN0XCIsXG4gIFwicHVybFwiOiBcIlBvZGNhc3QgVVJMXCIsXG4gIFwiY2F0Z1wiOiBcIkNhdGVnb3J5XCIsXG4gIFwiaGR2ZFwiOiBcIkhEIFZpZGVvXCIsXG4gIFwic3Rpa1wiOiBcIk1lZGlhIFR5cGVcIixcbiAgXCJydG5nXCI6IFwiQ29udGVudCBSYXRpbmdcIixcbiAgXCJwZ2FwXCI6IFwiR2FwbGVzcyBQbGF5YmFja1wiLFxuICBcImFwSURcIjogXCJQdXJjaGFzZSBBY2NvdW50XCIsXG4gIFwic2ZJRFwiOiBcIkNvdW50cnkgQ29kZVwiLFxuICBcImF0SURcIjogXCJBcnRpc3QgSURcIixcbiAgXCJjbklEXCI6IFwiQ2F0YWxvZyBJRFwiLFxuICBcInBsSURcIjogXCJDb2xsZWN0aW9uIElEXCIsXG4gIFwiZ2VJRFwiOiBcIkdlbnJlIElEXCIsXG4gIFwieGlkIFwiOiBcIlZlbmRvciBJbmZvcm1hdGlvblwiLFxuICBcImZsdnJcIjogXCJDb2RlYyBGbGF2b3JcIlxufTtcbnZhciBVTlNVUFBPUlRFRF9BVE9NUyA9IHtcbiAgXCItLS0tXCI6IDFcbn07XG52YXIgU0hPUlRDVVRTID0ge1xuICBcInRpdGxlXCI6IFwiwqluYW1cIixcbiAgXCJhcnRpc3RcIjogXCLCqUFSVFwiLFxuICBcImFsYnVtXCI6IFwiwqlhbGJcIixcbiAgXCJ5ZWFyXCI6IFwiwqlkYXlcIixcbiAgXCJjb21tZW50XCI6IFwiwqljbXRcIixcbiAgXCJ0cmFja1wiOiBcInRya25cIixcbiAgXCJnZW5yZVwiOiBcIsKpZ2VuXCIsXG4gIFwicGljdHVyZVwiOiBcImNvdnJcIixcbiAgXCJseXJpY3NcIjogXCLCqWx5clwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBNUDRUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgU3RyaW5nVXRpbHMgPSByZXF1aXJlKCcuL1N0cmluZ1V0aWxzJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYUZpbGVSZWFkZXIocGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUZpbGVSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lzSW5pdGlhbGl6ZWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zaXplXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5fc2l6ZSA9IDA7XG4gIH1cbiAgLyoqXG4gICAqIERlY2lkZXMgaWYgdGhpcyBtZWRpYSBmaWxlIHJlYWRlciBpcyBhYmxlIHRvIHJlYWQgdGhlIGdpdmVuIGZpbGUuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlIGFueSBvdGhlciBmdW5jdGlvbi5cbiAgICAgKiBMb2FkcyB0aGUgbmVjZXNzYXJ5IGluaXRpYWwgaW5mb3JtYXRpb24gZnJvbSB0aGUgZmlsZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0KHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgaW5pdCBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgdGhlIHJhbmdlIHRvIGxvYWQuXG4gICAgICogICAgICAgIEV4OiBbMCwgN10gbG9hZCBieXRlcyAwIHRvIDcgaW5jbHVzaXZlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBsb2FkUmFuZ2UgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gVGhlIHNpemUgb2YgdGhlIGZpbGUgaW4gYnl0ZXMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5pdCgpIG11c3QgYmUgY2FsbGVkIGZpcnN0LlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBnZXRCeXRlQXQgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVzQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyBpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0JpdFNldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQml0U2V0QXQob2Zmc2V0LCBiaXQpIHtcbiAgICAgIHZhciBpQnl0ZSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgICByZXR1cm4gKGlCeXRlICYgMSA8PCBiaXQpICE9IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U0J5dGVBdChvZmZzZXQpIHtcbiAgICAgIHZhciBpQnl0ZSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIGlmIChpQnl0ZSA+IDEyNykge1xuICAgICAgICByZXR1cm4gaUJ5dGUgLSAyNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaUJ5dGU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVNob3J0ID0gaXNCaWdFbmRpYW4gPyAodGhpcy5nZXRCeXRlQXQob2Zmc2V0KSA8PCA4KSArIHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpIDogKHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpIDw8IDgpICsgdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcblxuICAgICAgaWYgKGlTaG9ydCA8IDApIHtcbiAgICAgICAgaVNob3J0ICs9IDY1NTM2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaVNob3J0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTU2hvcnRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTU2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVVTaG9ydCA9IHRoaXMuZ2V0U2hvcnRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKTtcblxuICAgICAgaWYgKGlVU2hvcnQgPiAzMjc2Nykge1xuICAgICAgICByZXR1cm4gaVVTaG9ydCAtIDY1NTM2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlVU2hvcnQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvbmdBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlCeXRlMSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCksXG4gICAgICAgICAgaUJ5dGUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSksXG4gICAgICAgICAgaUJ5dGUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMiksXG4gICAgICAgICAgaUJ5dGU0ID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMyk7XG4gICAgICB2YXIgaUxvbmcgPSBpc0JpZ0VuZGlhbiA/ICgoKGlCeXRlMSA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMyA8PCA4KSArIGlCeXRlNCA6ICgoKGlCeXRlNCA8PCA4KSArIGlCeXRlMyA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMTtcblxuICAgICAgaWYgKGlMb25nIDwgMCkge1xuICAgICAgICBpTG9uZyArPSA0Mjk0OTY3Mjk2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaUxvbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNMb25nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U0xvbmdBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaVVMb25nID0gdGhpcy5nZXRMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbik7XG5cbiAgICAgIGlmIChpVUxvbmcgPiAyMTQ3NDgzNjQ3KSB7XG4gICAgICAgIHJldHVybiBpVUxvbmcgLSA0Mjk0OTY3Mjk2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlVTG9uZztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SW50ZWdlcjI0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW50ZWdlcjI0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlCeXRlMSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCksXG4gICAgICAgICAgaUJ5dGUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSksXG4gICAgICAgICAgaUJ5dGUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMik7XG4gICAgICB2YXIgaUludGVnZXIgPSBpc0JpZ0VuZGlhbiA/ICgoaUJ5dGUxIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUzIDogKChpQnl0ZTMgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTE7XG5cbiAgICAgIGlmIChpSW50ZWdlciA8IDApIHtcbiAgICAgICAgaUludGVnZXIgKz0gMTY3NzcyMTY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpSW50ZWdlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RyaW5nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RyaW5nQXQob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCwgaiA9IDA7IGkgPCBvZmZzZXQgKyBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgICAgIHN0cmluZ1tqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5nZXRCeXRlQXQoaSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCJcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0cmluZ1dpdGhDaGFyc2V0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIGxlbmd0aCwgY2hhcnNldCkge1xuICAgICAgdmFyIGJ5dGVzID0gdGhpcy5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKTtcbiAgICAgIHZhciBzdHJpbmc7XG5cbiAgICAgIHN3aXRjaCAoKGNoYXJzZXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcInV0Zi0xNlwiOlxuICAgICAgICBjYXNlIFwidXRmLTE2bGVcIjpcbiAgICAgICAgY2FzZSBcInV0Zi0xNmJlXCI6XG4gICAgICAgICAgc3RyaW5nID0gU3RyaW5nVXRpbHMucmVhZFVURjE2U3RyaW5nKGJ5dGVzLCBjaGFyc2V0ID09PSBcInV0Zi0xNmJlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ1dGYtOFwiOlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWRVVEY4U3RyaW5nKGJ5dGVzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhieXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENoYXJBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGFyQXQob2Zmc2V0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIElEM3YyIHRhZy9mcmFtZSBzaXplIGlzIGVuY29kZWQgd2l0aCBmb3VyIGJ5dGVzIHdoZXJlIHRoZSBtb3N0XG4gICAgICogc2lnbmlmaWNhbnQgYml0IChiaXQgNykgaXMgc2V0IHRvIHplcm8gaW4gZXZlcnkgYnl0ZSwgbWFraW5nIGEgdG90YWwgb2YgMjhcbiAgICAgKiBiaXRzLiBUaGUgemVyb2VkIGJpdHMgYXJlIGlnbm9yZWQsIHNvIGEgMjU3IGJ5dGVzIGxvbmcgdGFnIGlzIHJlcHJlc2VudGVkXG4gICAgICogYXMgJDAwIDAwIDAyIDAxLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgc2l6ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgdmFyIHNpemUyID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSk7XG4gICAgICB2YXIgc2l6ZTMgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAyKTtcbiAgICAgIHZhciBzaXplNCA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDMpOyAvLyAweDdmID0gMGIwMTExMTExMVxuXG4gICAgICB2YXIgc2l6ZSA9IHNpemU0ICYgMHg3ZiB8IChzaXplMyAmIDB4N2YpIDw8IDcgfCAoc2l6ZTIgJiAweDdmKSA8PCAxNCB8IChzaXplMSAmIDB4N2YpIDw8IDIxO1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgY2FuUmVhZEZpbGUgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lZGlhRmlsZVJlYWRlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUZpbGVSZWFkZXI7XG5cbn0se1wiLi9TdHJpbmdVdGlsc1wiOjEzfV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgTWVkaWFUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYVRhZ1JlYWRlcihtZWRpYUZpbGVSZWFkZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFUYWdSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21lZGlhRmlsZVJlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhZ3NcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX21lZGlhRmlsZVJlYWRlciA9IG1lZGlhRmlsZVJlYWRlcjtcbiAgICB0aGlzLl90YWdzID0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnl0ZSByYW5nZSB0aGF0IG5lZWRzIHRvIGJlIGxvYWRlZCBhbmQgZmVkIHRvXG4gICAqIF9jYW5SZWFkVGFnRm9ybWF0IGluIG9yZGVyIHRvIGlkZW50aWZ5IGlmIHRoZSBmaWxlIGNvbnRhaW5zIHRhZ1xuICAgKiBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSByZWFkLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNZWRpYVRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwic2V0VGFnc1RvUmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdzVG9SZWFkKHRhZ3MpIHtcbiAgICAgIHRoaXMuX3RhZ3MgPSB0YWdzO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fbWVkaWFGaWxlUmVhZGVyLmluaXQoe1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkRGF0YShzZWxmLl9tZWRpYUZpbGVSZWFkZXIsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciB0YWdzID0gc2VsZi5fcGFyc2VEYXRhKHNlbGYuX21lZGlhRmlsZVJlYWRlciwgc2VsZi5fdGFncyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhcnNlRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICBcImluZm9cIjogZXgubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IC8vIFRPRE86IGRlc3Ryb3kgbWVkaWFGaWxlUmVhZGVyXG5cblxuICAgICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKHRhZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgbmVjZXNzYXJ5IGJ5dGVzIGZyb20gdGhlIG1lZGlhIGZpbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBfbG9hZERhdGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBsb2FkZWQgZGF0YSB0byByZWFkIHRoZSBtZWRpYSB0YWdzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKG1lZGlhRmlsZVJlYWRlciwgdGFncykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgX3BhcnNlRGF0YSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2V4cGFuZFNob3J0Y3V0VGFnc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZXhwYW5kU2hvcnRjdXRUYWdzKHRhZ3NXaXRoU2hvcnRjdXRzKSB7XG4gICAgICBpZiAoIXRhZ3NXaXRoU2hvcnRjdXRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFncyA9IFtdO1xuICAgICAgdmFyIHNob3J0Y3V0cyA9IHRoaXMuZ2V0U2hvcnRjdXRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCB0YWdPclNob3J0Y3V0OyB0YWdPclNob3J0Y3V0ID0gdGFnc1dpdGhTaG9ydGN1dHNbaV07IGkrKykge1xuICAgICAgICB0YWdzID0gdGFncy5jb25jYXQoc2hvcnRjdXRzW3RhZ09yU2hvcnRjdXRdIHx8IFt0YWdPclNob3J0Y3V0XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHRhZyBpZGVudGlmaWVyIChyZWFkIGZyb20gdGhlIGZpbGUgYnl0ZSBwb3NpdGlvbnMgc3BlZmljaWVkIGJ5XG4gICAgICogZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSkgdGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgaXQgY2FuIHJlYWQgdGhlIHRhZ1xuICAgICAqIGZvcm1hdCBvciBub3QuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnRcIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lZGlhVGFnUmVhZGVyO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTF9XSwxMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEludGVybmFsRGVjb2RlZFN0cmluZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludGVybmFsRGVjb2RlZFN0cmluZyh2YWx1ZSwgYnl0ZXNSZWFkQ291bnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl92YWx1ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYnl0ZXNSZWFkQ291bnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxlbmd0aFwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJ5dGVzUmVhZENvdW50ID0gYnl0ZXNSZWFkQ291bnQ7XG4gICAgdGhpcy5sZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJuYWxEZWNvZGVkU3RyaW5nLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJuYWxEZWNvZGVkU3RyaW5nO1xufSgpO1xuXG52YXIgU3RyaW5nVXRpbHMgPSB7XG4gIHJlYWRVVEYxNlN0cmluZzogZnVuY3Rpb24gcmVhZFVURjE2U3RyaW5nKGJ5dGVzLCBiaWdFbmRpYW4sIG1heEJ5dGVzKSB7XG4gICAgdmFyIGl4ID0gMDtcbiAgICB2YXIgb2Zmc2V0MSA9IDEsXG4gICAgICAgIG9mZnNldDIgPSAwO1xuICAgIG1heEJ5dGVzID0gTWF0aC5taW4obWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoLCBieXRlcy5sZW5ndGgpO1xuXG4gICAgaWYgKGJ5dGVzWzBdID09IDB4RkUgJiYgYnl0ZXNbMV0gPT0gMHhGRikge1xuICAgICAgYmlnRW5kaWFuID0gdHJ1ZTtcbiAgICAgIGl4ID0gMjtcbiAgICB9IGVsc2UgaWYgKGJ5dGVzWzBdID09IDB4RkYgJiYgYnl0ZXNbMV0gPT0gMHhGRSkge1xuICAgICAgYmlnRW5kaWFuID0gZmFsc2U7XG4gICAgICBpeCA9IDI7XG4gICAgfVxuXG4gICAgaWYgKGJpZ0VuZGlhbikge1xuICAgICAgb2Zmc2V0MSA9IDA7XG4gICAgICBvZmZzZXQyID0gMTtcbiAgICB9XG5cbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaXggPCBtYXhCeXRlczsgaisrKSB7XG4gICAgICB2YXIgYnl0ZTEgPSBieXRlc1tpeCArIG9mZnNldDFdO1xuICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXggKyBvZmZzZXQyXTtcbiAgICAgIHZhciB3b3JkMSA9IChieXRlMSA8PCA4KSArIGJ5dGUyO1xuICAgICAgaXggKz0gMjtcblxuICAgICAgaWYgKHdvcmQxID09IDB4MDAwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPCAweEQ4IHx8IGJ5dGUxID49IDB4RTApIHtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh3b3JkMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCArIG9mZnNldDFdO1xuICAgICAgICB2YXIgYnl0ZTQgPSBieXRlc1tpeCArIG9mZnNldDJdO1xuICAgICAgICB2YXIgd29yZDIgPSAoYnl0ZTMgPDwgOCkgKyBieXRlNDtcbiAgICAgICAgaXggKz0gMjtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh3b3JkMSwgd29yZDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpeCk7XG4gIH0sXG4gIHJlYWRVVEY4U3RyaW5nOiBmdW5jdGlvbiByZWFkVVRGOFN0cmluZyhieXRlcywgbWF4Qnl0ZXMpIHtcbiAgICB2YXIgaXggPSAwO1xuICAgIG1heEJ5dGVzID0gTWF0aC5taW4obWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoLCBieXRlcy5sZW5ndGgpO1xuXG4gICAgaWYgKGJ5dGVzWzBdID09IDB4RUYgJiYgYnl0ZXNbMV0gPT0gMHhCQiAmJiBieXRlc1syXSA9PSAweEJGKSB7XG4gICAgICBpeCA9IDM7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGl4IDwgbWF4Qnl0ZXM7IGorKykge1xuICAgICAgdmFyIGJ5dGUxID0gYnl0ZXNbaXgrK107XG5cbiAgICAgIGlmIChieXRlMSA9PSAweDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA8IDB4ODApIHtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlMSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4QzIgJiYgYnl0ZTEgPCAweEUwKSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZTEgJiAweDFGKSA8PCA2KSArIChieXRlMiAmIDB4M0YpKTtcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPj0gMHhFMCAmJiBieXRlMSA8IDB4RjApIHtcbiAgICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBieXRlMyA9IGJ5dGVzW2l4KytdO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZTEgJiAweEZGKSA8PCAxMikgKyAoKGJ5dGUyICYgMHgzRikgPDwgNikgKyAoYnl0ZTMgJiAweDNGKSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4RjAgJiYgYnl0ZTEgPCAweEY1KSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGJ5dGU0ID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBjb2RlcG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMTgpICsgKChieXRlMiAmIDB4M0YpIDw8IDEyKSArICgoYnl0ZTMgJiAweDNGKSA8PCA2KSArIChieXRlNCAmIDB4M0YpIC0gMHgxMDAwMDtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoY29kZXBvaW50ID4+IDEwKSArIDB4RDgwMCwgKGNvZGVwb2ludCAmIDB4M0ZGKSArIDB4REMwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcm5hbERlY29kZWRTdHJpbmcoYXJyLmpvaW4oXCJcIiksIGl4KTtcbiAgfSxcbiAgcmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nOiBmdW5jdGlvbiByZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoYnl0ZXMsIG1heEJ5dGVzKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIG1heEJ5dGVzID0gbWF4Qnl0ZXMgfHwgYnl0ZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhCeXRlczspIHtcbiAgICAgIHZhciBieXRlMSA9IGJ5dGVzW2krK107XG5cbiAgICAgIGlmIChieXRlMSA9PSAweDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhcnJbaSAtIDFdID0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcm5hbERlY29kZWRTdHJpbmcoYXJyLmpvaW4oXCJcIiksIGkpO1xuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdVdGlscztcblxufSx7fV0sMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENodW5rZWRGaWxlRGF0YSA9IHJlcXVpcmUoJy4vQ2h1bmtlZEZpbGVEYXRhJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQ0hVTktfU0laRSA9IDEwMjQ7XG5cbnZhciBYaHJGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFGaWxlUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhYaHJGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBYaHJGaWxlUmVhZGVyKHVybCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYaHJGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFhockZpbGVSZWFkZXIpLmNhbGwodGhpcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl91cmxcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfZmlsZURhdGFcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLl91cmwgPSB1cmw7XG4gICAgX3RoaXMuX2ZpbGVEYXRhID0gbmV3IENodW5rZWRGaWxlRGF0YSgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhYaHJGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJfaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIGlmIChYaHJGaWxlUmVhZGVyLl9jb25maWcuYXZvaWRIZWFkUmVxdWVzdHMpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZldGNoU2l6ZVdpdGhIZWFkUmVxdWVzdChjYWxsYmFja3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmV0Y2hTaXplV2l0aEhlYWRSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaFNpemVXaXRoSGVhZFJlcXVlc3QoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiSEVBRFwiLCBudWxsLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gc2VsZi5fcGFyc2VDb250ZW50TGVuZ3RoKHhocik7XG5cbiAgICAgICAgICBpZiAoY29udGVudExlbmd0aCkge1xuICAgICAgICAgICAgc2VsZi5fc2l6ZSA9IGNvbnRlbnRMZW5ndGg7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbnRlbnQtTGVuZ3RoIG5vdCBwcm92aWRlZCBieSB0aGUgc2VydmVyLCBmYWxsYmFjayB0b1xuICAgICAgICAgICAgLy8gR0VUIHJlcXVlc3RzLlxuICAgICAgICAgICAgc2VsZi5fZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdmFyIHJhbmdlID0gdGhpcy5fcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShbMCwgMF0pO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkdFVFwiLCByYW5nZSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgY29udGVudFJhbmdlID0gc2VsZi5fcGFyc2VDb250ZW50UmFuZ2UoeGhyKTtcblxuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBpZiAoY29udGVudFJhbmdlKSB7XG4gICAgICAgICAgICBpZiAoY29udGVudFJhbmdlLmluc3RhbmNlTGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gTGFzdCByZXNvcnQsIHNlcnZlciBpcyBub3QgYWJsZSB0byB0ZWxsIHVzIHRoZSBjb250ZW50IGxlbmd0aCxcbiAgICAgICAgICAgICAgLy8gbmVlZCB0byBmZXRjaCBlbnRpcmUgZmlsZSB0aGVuLlxuICAgICAgICAgICAgICBzZWxmLl9mZXRjaEVudGlyZUZpbGUoY2FsbGJhY2tzKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBjb250ZW50UmFuZ2UuaW5zdGFuY2VMZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJhbmdlIHJlcXVlc3Qgbm90IHN1cHBvcnRlZCwgd2UgZ290IHRoZSBlbnRpcmUgZmlsZVxuICAgICAgICAgICAgc2VsZi5fc2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEoMCwgZGF0YSk7XG5cbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoRW50aXJlRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hFbnRpcmVGaWxlKGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkdFVFwiLCBudWxsLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBzZWxmLl9zaXplID0gZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKDAsIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRYaHJSZXNwb25zZUNvbnRlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpIHtcbiAgICAgIHJldHVybiB4aHIucmVzcG9uc2VCb2R5IHx8IHhoci5yZXNwb25zZVRleHQgfHwgXCJcIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlQ29udGVudExlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VDb250ZW50TGVuZ3RoKHhocikge1xuICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSB0aGlzLl9nZXRSZXNwb25zZUhlYWRlcih4aHIsIFwiQ29udGVudC1MZW5ndGhcIik7XG5cbiAgICAgIGlmIChjb250ZW50TGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRMZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY29udGVudExlbmd0aCwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VDb250ZW50UmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlQ29udGVudFJhbmdlKHhocikge1xuICAgICAgdmFyIGNvbnRlbnRSYW5nZSA9IHRoaXMuX2dldFJlc3BvbnNlSGVhZGVyKHhociwgXCJDb250ZW50LVJhbmdlXCIpO1xuXG4gICAgICBpZiAoY29udGVudFJhbmdlKSB7XG4gICAgICAgIHZhciBwYXJzZWRDb250ZW50UmFuZ2UgPSBjb250ZW50UmFuZ2UubWF0Y2goL2J5dGVzIChcXGQrKS0oXFxkKylcXC8oPzooXFxkKyl8XFwqKS9pKTtcblxuICAgICAgICBpZiAoIXBhcnNlZENvbnRlbnRSYW5nZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZJWE1FOiBVbmtub3duIENvbnRlbnQtUmFuZ2Ugc3ludGF4OiBcIiArIGNvbnRlbnRSYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpcnN0Qnl0ZVBvc2l0aW9uOiBwYXJzZUludChwYXJzZWRDb250ZW50UmFuZ2VbMV0sIDEwKSxcbiAgICAgICAgICBsYXN0Qnl0ZVBvc2l0aW9uOiBwYXJzZUludChwYXJzZWRDb250ZW50UmFuZ2VbMl0sIDEwKSxcbiAgICAgICAgICBpbnN0YW5jZUxlbmd0aDogcGFyc2VkQ29udGVudFJhbmdlWzNdID8gcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzNdLCAxMCkgOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9maWxlRGF0YS5oYXNEYXRhUmFuZ2UocmFuZ2VbMF0sIE1hdGgubWluKHNlbGYuX3NpemUsIHJhbmdlWzFdKSkpIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBBbHdheXMgZG93bmxvYWQgaW4gbXVsdGlwbGVzIG9mIENIVU5LX1NJWkUuIElmIHdlJ3JlIGdvaW5nIHRvIG1ha2UgYVxuICAgICAgLy8gcmVxdWVzdCBtaWdodCBhcyB3ZWxsIGdldCBhIGNodW5rIHRoYXQgbWFrZXMgc2Vuc2UuIFRoZSBiaWcgY29zdCBpc1xuICAgICAgLy8gZXN0YWJsaXNoaW5nIHRoZSBjb25uZWN0aW9uIHNvIGdldHRpbmcgMTBieXRlcyBvciAxSyBkb2Vzbid0IHJlYWxseVxuICAgICAgLy8gbWFrZSBhIGRpZmZlcmVuY2UuXG5cblxuICAgICAgcmFuZ2UgPSB0aGlzLl9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlKHJhbmdlKTsgLy8gVXBwZXIgcmFuZ2Ugc2hvdWxkIG5vdCBiZSBncmVhdGVyIHRoYW4gbWF4IGZpbGUgc2l6ZVxuXG4gICAgICByYW5nZVsxXSA9IE1hdGgubWluKHNlbGYuX3NpemUsIHJhbmdlWzFdKTtcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgcmFuZ2UsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLl9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKTtcblxuICAgICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEocmFuZ2VbMF0sIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlKHJhbmdlKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gcmFuZ2VbMV0gLSByYW5nZVswXSArIDE7XG4gICAgICB2YXIgbmV3TGVuZ3RoID0gTWF0aC5jZWlsKGxlbmd0aCAvIENIVU5LX1NJWkUpICogQ0hVTktfU0laRTtcbiAgICAgIHJldHVybiBbcmFuZ2VbMF0sIHJhbmdlWzBdICsgbmV3TGVuZ3RoIC0gMV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9tYWtlWEhSUmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVhIUlJlcXVlc3QobWV0aG9kLCByYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgeGhyID0gdGhpcy5fY3JlYXRlWEhST2JqZWN0KCk7XG5cbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdGhpcy5fdXJsKTtcblxuICAgICAgdmFyIG9uWEhSTG9hZCA9IGZ1bmN0aW9uIG9uWEhSTG9hZCgpIHtcbiAgICAgICAgLy8gMjAwIC0gT0tcbiAgICAgICAgLy8gMjA2IC0gUGFydGlhbCBDb250ZW50XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSB4aHIgd2lsbCBub3QgYmUgbnVsbCBoZXJlXG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMjA2KSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh4aHIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwieGhyXCIsXG4gICAgICAgICAgICBcImluZm9cIjogXCJVbmV4cGVjdGVkIEhUVFAgc3RhdHVzIFwiICsgeGhyLnN0YXR1cyArIFwiLlwiLFxuICAgICAgICAgICAgXCJ4aHJcIjogeGhyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB4aHIgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiB4aHIub25sb2FkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB4aHIub25sb2FkID0gb25YSFJMb2FkO1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ4aHJcIixcbiAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiR2VuZXJpYyBYSFIgZXJyb3IsIGNoZWNrIHhociBvYmplY3QuXCIsXG4gICAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyIHdpbGwgbm90IGJlIG51bGwgaGVyZVxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgb25YSFJMb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLnRpbWVvdXRJblNlYykge1xuICAgICAgICB4aHIudGltZW91dCA9IFhockZpbGVSZWFkZXIuX2NvbmZpZy50aW1lb3V0SW5TZWMgKiAxMDAwO1xuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInhoclwiLFxuICAgICAgICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyLnRpbWVvdXQgd2lsbCBub3QgYmUgbnVsbFxuICAgICAgICAgICAgICBcImluZm9cIjogXCJUaW1lb3V0IGFmdGVyIFwiICsgeGhyLnRpbWVvdXQgLyAxMDAwICsgXCJzLiBVc2UganNtZWRpYXRhZ3MuQ29uZmlnLnNldFhoclRpbWVvdXQgdG8gb3ZlcnJpZGUuXCIsXG4gICAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcInRleHQvcGxhaW47IGNoYXJzZXQ9eC11c2VyLWRlZmluZWRcIik7XG5cbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICB0aGlzLl9zZXRSZXF1ZXN0SGVhZGVyKHhociwgXCJSYW5nZVwiLCBcImJ5dGVzPVwiICsgcmFuZ2VbMF0gKyBcIi1cIiArIHJhbmdlWzFdKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0UmVxdWVzdEhlYWRlcih4aHIsIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgXCJTYXQsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiKTtcblxuICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zZXRSZXF1ZXN0SGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRSZXF1ZXN0SGVhZGVyKHhociwgaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpIHtcbiAgICAgIGlmIChYaHJGaWxlUmVhZGVyLl9jb25maWcuZGlzYWxsb3dlZFhockhlYWRlcnMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIDwgMCkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCBoZWFkZXJWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9oYXNSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFzUmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSB7XG4gICAgICB2YXIgYWxsUmVzcG9uc2VIZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuXG4gICAgICBpZiAoIWFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWFkZXJzID0gYWxsUmVzcG9uc2VIZWFkZXJzLnNwbGl0KFwiXFxyXFxuXCIpO1xuICAgICAgdmFyIGhlYWRlck5hbWVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZWFkZXJOYW1lc1tpXSA9IGhlYWRlcnNbaV0uc3BsaXQoXCI6XCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWFkZXJOYW1lcy5pbmRleE9mKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkgPj0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldFJlc3BvbnNlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRSZXNwb25zZUhlYWRlcih4aHIsIGhlYWRlck5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5faGFzUmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXJOYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSB0aGlzLl9maWxlRGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApICYgMHhmZjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2lzV2ViV29ya2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc1dlYldvcmtlcigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NyZWF0ZVhIUk9iamVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlWEhST2JqZWN0KCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuX2lzV2ViV29ya2VyKCkpIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgaXMgbm90IGFibGUgdG8gcmVjb2duaXplIHRoaXMgbW9kdWxlLlxuICAgICAgICByZXR1cm4gbmV3IChyZXF1aXJlKFwieGhyMlwiKS5YTUxIdHRwUmVxdWVzdCkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJyAmJiAvXlthLXpdKzpcXC9cXC8vaS50ZXN0KGZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDb25maWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXNhbGxvd2VkWGhySGVhZGVycyA9IHRoaXMuX2NvbmZpZy5kaXNhbGxvd2VkWGhySGVhZGVycztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNhbGxvd2VkWGhySGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXNhbGxvd2VkWGhySGVhZGVyc1tpXSA9IGRpc2FsbG93ZWRYaHJIZWFkZXJzW2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFhockZpbGVSZWFkZXI7XG59KE1lZGlhRmlsZVJlYWRlcik7XG5cbl9kZWZpbmVQcm9wZXJ0eShYaHJGaWxlUmVhZGVyLCBcIl9jb25maWdcIiwgdm9pZCAwKTtcblxuWGhyRmlsZVJlYWRlci5fY29uZmlnID0ge1xuICBhdm9pZEhlYWRSZXF1ZXN0czogZmFsc2UsXG4gIGRpc2FsbG93ZWRYaHJIZWFkZXJzOiBbXSxcbiAgdGltZW91dEluU2VjOiAzMFxufTtcbm1vZHVsZS5leHBvcnRzID0gWGhyRmlsZVJlYWRlcjtcblxufSx7XCIuL0NodW5rZWRGaWxlRGF0YVwiOjUsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwieGhyMlwiOjJ9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL01lZGlhRmlsZVJlYWRlclwiKTtcblxudmFyIFhockZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9YaHJGaWxlUmVhZGVyXCIpO1xuXG52YXIgQmxvYkZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9CbG9iRmlsZVJlYWRlclwiKTtcblxudmFyIEFycmF5RmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL0FycmF5RmlsZVJlYWRlclwiKTtcblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vTWVkaWFUYWdSZWFkZXJcIik7XG5cbnZhciBJRDN2MVRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL0lEM3YxVGFnUmVhZGVyXCIpO1xuXG52YXIgSUQzdjJUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9JRDN2MlRhZ1JlYWRlclwiKTtcblxudmFyIE1QNFRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL01QNFRhZ1JlYWRlclwiKTtcblxudmFyIEZMQUNUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9GTEFDVGFnUmVhZGVyXCIpO1xuXG52YXIgbWVkaWFGaWxlUmVhZGVycyA9IFtdO1xudmFyIG1lZGlhVGFnUmVhZGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWFkKGxvY2F0aW9uLCBjYWxsYmFja3MpIHtcbiAgbmV3IFJlYWRlcihsb2NhdGlvbikucmVhZChjYWxsYmFja3MpO1xufVxuXG5mdW5jdGlvbiBpc1JhbmdlVmFsaWQocmFuZ2UsIGZpbGVTaXplKSB7XG4gIHZhciBpbnZhbGlkUG9zaXRpdmVSYW5nZSA9IHJhbmdlLm9mZnNldCA+PSAwICYmIHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aCA+PSBmaWxlU2l6ZTtcbiAgdmFyIGludmFsaWROZWdhdGl2ZVJhbmdlID0gcmFuZ2Uub2Zmc2V0IDwgMCAmJiAoLXJhbmdlLm9mZnNldCA+IGZpbGVTaXplIHx8IHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aCA+IDApO1xuICByZXR1cm4gIShpbnZhbGlkUG9zaXRpdmVSYW5nZSB8fCBpbnZhbGlkTmVnYXRpdmVSYW5nZSk7XG59XG5cbnZhciBSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZWFkZXIoZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFkZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ZpbGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdzVG9SZWFkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZmlsZVJlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhZ1JlYWRlclwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fZmlsZSA9IGZpbGU7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhZGVyLCBbe1xuICAgIGtleTogXCJzZXRUYWdzVG9SZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRhZ3NUb1JlYWQodGFnc1RvUmVhZCkge1xuICAgICAgdGhpcy5fdGFnc1RvUmVhZCA9IHRhZ3NUb1JlYWQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWxlUmVhZGVyKGZpbGVSZWFkZXIpIHtcbiAgICAgIHRoaXMuX2ZpbGVSZWFkZXIgPSBmaWxlUmVhZGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdSZWFkZXIodGFnUmVhZGVyKSB7XG4gICAgICB0aGlzLl90YWdSZWFkZXIgPSB0YWdSZWFkZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGNhbGxiYWNrcykge1xuICAgICAgdmFyIEZpbGVSZWFkZXIgPSB0aGlzLl9nZXRGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIodGhpcy5fZmlsZSk7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBmaWxlUmVhZGVyLmluaXQoe1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9nZXRUYWdSZWFkZXIoZmlsZVJlYWRlciwge1xuICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoVGFnUmVhZGVyKSB7XG4gICAgICAgICAgICAgIG5ldyBUYWdSZWFkZXIoZmlsZVJlYWRlcikuc2V0VGFnc1RvUmVhZChzZWxmLl90YWdzVG9SZWFkKS5yZWFkKGNhbGxiYWNrcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RmlsZVJlYWRlcigpIHtcbiAgICAgIGlmICh0aGlzLl9maWxlUmVhZGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlUmVhZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRGaWxlUmVhZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kRmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZEZpbGVSZWFkZXIoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhRmlsZVJlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lZGlhRmlsZVJlYWRlcnNbaV0uY2FuUmVhZEZpbGUodGhpcy5fZmlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gbWVkaWFGaWxlUmVhZGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWl0YWJsZSBmaWxlIHJlYWRlciBmb3VuZCBmb3IgXCIgKyB0aGlzLl9maWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0VGFnUmVhZGVyKGZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgaWYgKHRoaXMuX3RhZ1JlYWRlcikge1xuICAgICAgICB2YXIgdGFnUmVhZGVyID0gdGhpcy5fdGFnUmVhZGVyO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKHRhZ1JlYWRlcik7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmluZFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gbWFrZSBtdWx0aXBsZSBmZXRjaGVzIHBlciB0YWcgcmVhZGVyIHRvIGdldCB0aGUgdGFnXG4gICAgICAvLyBpZGVudGlmaWVyLiBUaGUgc3RyYXRlZ3kgaGVyZSBpcyB0byBjb21iaW5lIGFsbCB0aGUgdGFnIGlkZW50aWZpZXJcbiAgICAgIC8vIHJhbmdlcyBpbnRvIG9uZSBhbmQgbWFrZSBhIHNpbmdsZSBmZXRjaC4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50XG4gICAgICAvLyBpbiBmaWxlIHJlYWRlcnMgdGhhdCBoYXZlIGV4cGVuc2l2ZSBsb2FkcyBsaWtlIHRoZSBYSFIgb25lLlxuICAgICAgLy8gSG93ZXZlciwgd2l0aCB0aGlzIHN0cmF0ZWd5IHdlIHJ1biBpbnRvIHRoZSBwcm9ibGVtIG9mIGxvYWRpbmcgdGhlXG4gICAgICAvLyBlbnRpcmUgZmlsZSBiZWNhdXNlIHRhZyBpZGVudGlmaWVycyBtaWdodCBiZSBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mXG4gICAgICAvLyB0aGUgZmlsZS5cbiAgICAgIC8vIFRvIGdldCBhcm91bmQgdGhpcyB3ZSBkaXZpZGUgdGhlIHRhZyByZWFkZXJzIGludG8gdHdvIGNhdGVnb3JpZXMsIHRoZVxuICAgICAgLy8gb25lcyB0aGF0IHJlYWQgdGhlaXIgdGFnIGlkZW50aWZpZXJzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBmaWxlIGFuZCB0aGVcbiAgICAgIC8vIG9uZXMgdGhhdCByZWFkIGZyb20gdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAgICAgIHZhciB0YWdSZWFkZXJzQXRGaWxlU3RhcnQgPSBbXTtcbiAgICAgIHZhciB0YWdSZWFkZXJzQXRGaWxlRW5kID0gW107XG4gICAgICB2YXIgZmlsZVNpemUgPSBmaWxlUmVhZGVyLmdldFNpemUoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYVRhZ1JlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJhbmdlID0gbWVkaWFUYWdSZWFkZXJzW2ldLmdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKTtcblxuICAgICAgICBpZiAoIWlzUmFuZ2VWYWxpZChyYW5nZSwgZmlsZVNpemUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZ2Uub2Zmc2V0ID49IDAgJiYgcmFuZ2Uub2Zmc2V0IDwgZmlsZVNpemUgLyAyIHx8IHJhbmdlLm9mZnNldCA8IDAgJiYgcmFuZ2Uub2Zmc2V0IDwgLWZpbGVTaXplIC8gMikge1xuICAgICAgICAgIHRhZ1JlYWRlcnNBdEZpbGVTdGFydC5wdXNoKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFnUmVhZGVyc0F0RmlsZUVuZC5wdXNoKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ3NMb2FkZWQgPSBmYWxzZTtcbiAgICAgIHZhciBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MgPSB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIGlmICghdGFnc0xvYWRlZCkge1xuICAgICAgICAgICAgLy8gV2UncmUgZXhwZWN0aW5nIHRvIGxvYWQgdHdvIHNldHMgb2YgdGFnIGlkZW50aWZpZXJzLiBUaGlzIGZsYWdcbiAgICAgICAgICAgIC8vIGluZGljYXRlcyB3aGVuIHRoZSBmaXJzdCBvbmUgaGFzIGJlZW4gbG9hZGVkLlxuICAgICAgICAgICAgdGFnc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYVRhZ1JlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IG1lZGlhVGFnUmVhZGVyc1tpXS5nZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNSYW5nZVZhbGlkKHJhbmdlLCBmaWxlU2l6ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciB0YWdJbmRlbnRpZmllciA9IGZpbGVSZWFkZXIuZ2V0Qnl0ZXNBdChyYW5nZS5vZmZzZXQgPj0gMCA/IHJhbmdlLm9mZnNldCA6IHJhbmdlLm9mZnNldCArIGZpbGVTaXplLCByYW5nZS5sZW5ndGgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZmlsZVJlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6IGV4Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lZGlhVGFnUmVhZGVyc1tpXS5jYW5SZWFkVGFnRm9ybWF0KHRhZ0luZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKG1lZGlhVGFnUmVhZGVyc1tpXSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGFnRm9ybWF0XCIsXG4gICAgICAgICAgICAgIFwiaW5mb1wiOiBcIk5vIHN1aXRhYmxlIHRhZyByZWFkZXIgZm91bmRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfTtcblxuICAgICAgdGhpcy5fbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXMoZmlsZVJlYWRlciwgdGFnUmVhZGVyc0F0RmlsZVN0YXJ0LCBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MpO1xuXG4gICAgICB0aGlzLl9sb2FkVGFnSWRlbnRpZmllclJhbmdlcyhmaWxlUmVhZGVyLCB0YWdSZWFkZXJzQXRGaWxlRW5kLCBsb2FkVGFnSWRlbnRpZmllcnNDYWxsYmFja3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzKGZpbGVSZWFkZXIsIHRhZ1JlYWRlcnMsIGNhbGxiYWNrcykge1xuICAgICAgaWYgKHRhZ1JlYWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEZvcmNlIGFzeW5jXG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ0lkZW50aWZpZXJSYW5nZSA9IFtOdW1iZXIuTUFYX1ZBTFVFLCAwXTtcbiAgICAgIHZhciBmaWxlU2l6ZSA9IGZpbGVSZWFkZXIuZ2V0U2l6ZSgpOyAvLyBDcmVhdGUgYSBzdXBlciBzZXQgb2YgYWxsIHJhbmdlcyBzbyB3ZSBjYW4gbG9hZCB0aGVtIGFsbCBhdCBvbmNlLlxuICAgICAgLy8gTWlnaHQgbmVlZCB0byByZXRoaW5rIHRoaXMgYXBwcm9hY2ggaWYgdGhlcmUgYXJlIHRhZyByYW5nZXMgdG9vIGZhclxuICAgICAgLy8gYSBwYXJ0IGZyb20gZWFjaCBvdGhlci4gV2UncmUgZ29vZCBmb3Igbm93IHRob3VnaC5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByYW5nZSA9IHRhZ1JlYWRlcnNbaV0uZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpO1xuICAgICAgICB2YXIgc3RhcnQgPSByYW5nZS5vZmZzZXQgPj0gMCA/IHJhbmdlLm9mZnNldCA6IHJhbmdlLm9mZnNldCArIGZpbGVTaXplO1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyByYW5nZS5sZW5ndGggLSAxO1xuICAgICAgICB0YWdJZGVudGlmaWVyUmFuZ2VbMF0gPSBNYXRoLm1pbihzdGFydCwgdGFnSWRlbnRpZmllclJhbmdlWzBdKTtcbiAgICAgICAgdGFnSWRlbnRpZmllclJhbmdlWzFdID0gTWF0aC5tYXgoZW5kLCB0YWdJZGVudGlmaWVyUmFuZ2VbMV0pO1xuICAgICAgfVxuXG4gICAgICBmaWxlUmVhZGVyLmxvYWRSYW5nZSh0YWdJZGVudGlmaWVyUmFuZ2UsIGNhbGxiYWNrcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWRlcjtcbn0oKTtcblxudmFyIENvbmZpZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmZpZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uZmlnKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25maWcsIG51bGwsIFt7XG4gICAga2V5OiBcImFkZEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRmlsZVJlYWRlcihmaWxlUmVhZGVyKSB7XG4gICAgICBtZWRpYUZpbGVSZWFkZXJzLnB1c2goZmlsZVJlYWRlcik7XG4gICAgICByZXR1cm4gQ29uZmlnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgbWVkaWFUYWdSZWFkZXJzLnB1c2godGFnUmVhZGVyKTtcbiAgICAgIHJldHVybiBDb25maWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVUYWdSZWFkZXIodGFnUmVhZGVyKSB7XG4gICAgICB2YXIgdGFnUmVhZGVySXggPSBtZWRpYVRhZ1JlYWRlcnMuaW5kZXhPZih0YWdSZWFkZXIpO1xuXG4gICAgICBpZiAodGFnUmVhZGVySXggPj0gMCkge1xuICAgICAgICBtZWRpYVRhZ1JlYWRlcnMuc3BsaWNlKHRhZ1JlYWRlckl4LCAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbmZpZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiRVhQRVJJTUVOVEFMX2F2b2lkSGVhZFJlcXVlc3RzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIEVYUEVSSU1FTlRBTF9hdm9pZEhlYWRSZXF1ZXN0cygpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgYXZvaWRIZWFkUmVxdWVzdHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXREaXNhbGxvd2VkWGhySGVhZGVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREaXNhbGxvd2VkWGhySGVhZGVycyhkaXNhbGxvd2VkWGhySGVhZGVycykge1xuICAgICAgWGhyRmlsZVJlYWRlci5zZXRDb25maWcoe1xuICAgICAgICBkaXNhbGxvd2VkWGhySGVhZGVyczogZGlzYWxsb3dlZFhockhlYWRlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRYaHJUaW1lb3V0SW5TZWNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0WGhyVGltZW91dEluU2VjKHRpbWVvdXRJblNlYykge1xuICAgICAgWGhyRmlsZVJlYWRlci5zZXRDb25maWcoe1xuICAgICAgICB0aW1lb3V0SW5TZWM6IHRpbWVvdXRJblNlY1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZpZztcbn0oKTtcblxuQ29uZmlnLmFkZEZpbGVSZWFkZXIoWGhyRmlsZVJlYWRlcikuYWRkRmlsZVJlYWRlcihCbG9iRmlsZVJlYWRlcikuYWRkRmlsZVJlYWRlcihBcnJheUZpbGVSZWFkZXIpLmFkZFRhZ1JlYWRlcihJRDN2MlRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKElEM3YxVGFnUmVhZGVyKS5hZGRUYWdSZWFkZXIoTVA0VGFnUmVhZGVyKS5hZGRUYWdSZWFkZXIoRkxBQ1RhZ1JlYWRlcik7XG5cbmlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhcHJvY2Vzcy5icm93c2VyKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCIpIHtcbiAgICB2YXIgUmVhY3ROYXRpdmVGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9SZWFjdE5hdGl2ZUZpbGVSZWFkZXInKTtcblxuICAgIENvbmZpZy5hZGRGaWxlUmVhZGVyKFJlYWN0TmF0aXZlRmlsZVJlYWRlcik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIE5vZGVGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9Ob2RlRmlsZVJlYWRlcicpO1xuXG4gICAgQ29uZmlnLmFkZEZpbGVSZWFkZXIoTm9kZUZpbGVSZWFkZXIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcInJlYWRcIjogcmVhZCxcbiAgXCJSZWFkZXJcIjogUmVhZGVyLFxuICBcIkNvbmZpZ1wiOiBDb25maWdcbn07XG5cbn0se1wiLi9BcnJheUZpbGVSZWFkZXJcIjozLFwiLi9CbG9iRmlsZVJlYWRlclwiOjQsXCIuL0ZMQUNUYWdSZWFkZXJcIjo2LFwiLi9JRDN2MVRhZ1JlYWRlclwiOjcsXCIuL0lEM3YyVGFnUmVhZGVyXCI6OSxcIi4vTVA0VGFnUmVhZGVyXCI6MTAsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9NZWRpYVRhZ1JlYWRlclwiOjEyLFwiLi9Ob2RlRmlsZVJlYWRlclwiOjEsXCIuL1JlYWN0TmF0aXZlRmlsZVJlYWRlclwiOjEsXCIuL1hockZpbGVSZWFkZXJcIjoxNH1dfSx7fSxbMTVdKSgxNSlcbn0pOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi9tb2RlbC9HYW1lTWFuYWdlclwiXG5cbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKCk7XG5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcblxuZXhwb3J0IHtnYW1lTWFuYWdlcn07XG5cbiIsImltcG9ydCB7IFRleHR1cmUsIFNDQUxFX01PREVTLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXRsYXNTcHJpdGVzaGVldCB7XG5cblx0YXRsYXNEYXRhO1xuXHRiaWdUZXh0dXJlOiBUZXh0dXJlO1xuXG5cblx0Y29uc3RydWN0b3IodGV4dHVyZSwgYXRsYXNEYXRhKSB7XG5cdFx0dGhpcy5hdGxhc0RhdGEgPSBhdGxhc0RhdGE7XG5cdFx0dGhpcy5iaWdUZXh0dXJlID0gdGV4dHVyZTtcblx0XHR0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gU0NBTEVfTU9ERVMuTkVBUkVTVDtcdFx0XG5cdH1cblxuXHRnZXRUZXh0dXJlKG5hbWU6IHN0cmluZyk6IFRleHR1cmUge1xuXG5cdFx0Y29uc3QgcHJvcHMgPSB0aGlzLmF0bGFzRGF0YS5pdGVtc1tuYW1lXTtcblx0XHRpZiAocHJvcHMgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGZpbmQgdGV4dHVyZSAnJHtuYW1lfScgaW4gc3ByaXRlc2hlZXRgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHByb3BzLngsIHByb3BzLnksIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQpKTtcblx0fVxuXG5cbn0iLCJpbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIlxuXG5jb25zdCBCYWxhbmNpbmcgPSB7XG4gICAgdHJlZToge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxLFxuICAgICAgICBjcm9wQ291bnQ6IDQsXG4gICAgfSxcblxuICAgIHdhbGw6IHtcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcbiAgICB9LFxuXG4gICAgdG50UHVtcGtpbjoge1xuICAgICAgICBleHBsb3Npb25EYW1hZ2U6IDEuNSxcbiAgICB9LFxuXG4gICAgcGxheWVyOiB7XG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBoaXREYW1hZ2U6IDAuMSxcbiAgICAgICAga25vY2tkb3duIDogMjAwMCwgLy9UaW1lIGluIG1pbGxpc2Vjb25kc1xuICAgIH0sXG5cbiAgICB0b3dlcjoge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxMCxcbiAgICAgICAgY29vbGRvd246IDYgLy9Ib3cgb2Z0ZW4gdGhpcyBPYmplY3Qgd2lnZ2xlcyB1bnRpbCBpdCBpcyBhZ2FpbiB2dWxuZXJhYmxlXG4gICAgfSxcblxuICAgIHRvbWF0b1Byb2plY3RpbGU6IHtcbiAgICAgICAgc3BlZWQ6IDcsXG4gICAgICAgIGhpdERhbWFnZTogMC4zLFxuICAgICAgICBpbnZlbnRvcnlMaW1pdCA6IDEwLFxuICAgIH0sXG5cbiAgICB0b21hdG9QbGFudDoge1xuICAgICAgICBncm93U3RlcFRpbWU6IDUwMDAsXG4gICAgICAgIGNyb3BzOiBbXG4gICAgICAgICAgICB7IHR5cGU6IElURU0uVE9NQVRPX1BST0pFQ1RJTEUsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICB7IHR5cGU6IElURU0uVE9NQVRPX1BMQU5ULCBjb3VudDogNCB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFydFNlZWRzOiA1LFxuICAgIH0sXG5cbiAgICBwdW1wa2luUGxhbnQ6IHtcbiAgICAgICAgZ3Jvd1N0ZXBUaW1lOiAxMDAwMCxcbiAgICAgICAgY3JvcHM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5UTlRfUFVNUEtJTiwgY291bnQ6IDIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5QVU1QS0lOX1BMQU5ULCBjb3VudDogMyB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFydFNlZWRzOiA1LFxuICAgIH0sXG5cbn1cblxuZXhwb3J0IHsgQmFsYW5jaW5nIH0iLCJjb25zdCBDb25zdGFudHMgPSB7XG4gICAgQVNTRVRfUEFUSDogXCJkYXRhL2Fzc2V0c1wiLFxuICAgIE1BUF9QQVRIOiBcImRhdGEvbWFwc1wiLFxuICAgIFNPVU5EX1BBVEg6IGBkYXRhL2Fzc2V0cy9zb3VuZGAsXG4gICAgTVVTSUNfUEFUSDogYGRhdGEvYXNzZXRzL211c2ljYCxcbn1cblxuZXhwb3J0IHsgQ29uc3RhbnRzIH0iLCJpbXBvcnQgeyBUaWxlZFNwcml0ZXNoZWV0IH0gZnJvbSBcIi4vVGlsZWRTcHJpdGVzaGVldFwiO1xuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmRNYW5hZ2VyIH0gZnJvbSBcIi4vS2V5Ym9hcmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMsIGxvYWRlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBdGxhc1Nwcml0ZXNoZWV0IH0gZnJvbSBcIi4vQXRsYXNTcHJpdGVzaGVldFwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4uL3VpL3VpQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi91aS9tZW51QmFyXCI7XG5pbXBvcnQgTXVzaWNQbGF5ZXIgZnJvbSAnLi4vbXVzaWMvTXVzaWNQbGF5ZXInXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgXG4gICAgdGlsZWRTcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBhdGxhc1Nwcml0ZXNoZWV0OiBBdGxhc1Nwcml0ZXNoZWV0O1xuICAgIFxuICAgIG1hcDogVGlsZWRNYXA7XG4gICAgcGl4aUFwcDogQXBwbGljYXRpb247XG5cbiAgICBtdXNpY1BsYXllcjpNdXNpY1BsYXllcjtcbiAgICBcbiAgICB1cGRhdGVTY2hlZHVsZXI6IFVwZGF0ZVNjaGVkdWxlcjtcbiAgICBrZXlib2FyZE1hbmFnZXI6IEtleWJvYXJkTWFuYWdlcjtcbiAgICBtZW51QmFyOiBNZW51QmFyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL0NyZWF0ZSBhIFBpeGkgQXBwbGljYXRpb25cbiAgICAgICAgY2xhc3MgUGl4aU9wdGlvbnMgaW1wbGVtZW50cyBBcHBsaWNhdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0LCBwdWJsaWMgdmlldykgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMxXCIpO1xuICAgICAgICBjb25zdCBwaXhpT3B0aW9ucyA9IG5ldyBQaXhpT3B0aW9ucyh1aUNvbnN0YW50cy5zdGFnZS53aWR0aCwgdWlDb25zdGFudHMuc3RhZ2UuaGVpZ2h0LCBjYW52YXMpO1xuICAgICAgICB0aGlzLnBpeGlBcHAgPSBuZXcgQXBwbGljYXRpb24ocGl4aU9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b0xvYWQgPSBbXG4gICAgICAgICAgICB7bmFtZTondGlsZWRTcHJpdGVzaGVldFRleHR1cmUnLCB1cmw6YCR7Q29uc3RhbnRzLkFTU0VUX1BBVEh9L3Nwcml0ZXNoZWV0LnBuZ2B9LFxuICAgICAgICAgICAge25hbWU6J2F0bGFzU3ByaXRlc2hlZXRUZXh0dXJlJywgdXJsOmAke0NvbnN0YW50cy5BU1NFVF9QQVRIfS9zcHJpdGVzbWl0aF9zcHJpdGVzaGVldC5wbmdgfSxcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0RGF0YScsIHVybDpgJHtDb25zdGFudHMuQVNTRVRfUEFUSH0vc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQuanNvbmB9LFxuICAgICAgICAgICAge25hbWU6J21hcERhdGEnLCB1cmw6YCR7Q29uc3RhbnRzLk1BUF9QQVRIfS9tYXAyLmpzb25gfSxcbiAgICAgICAgXVxuICAgICAgICBcbiAgICAgICAgbG9hZGVyLmFkZCh0b0xvYWQpLmxvYWQodGhpcy5sb2FkZXJGaW5pc2hlZCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGxvYWRlckZpbmlzaGVkID0gKCk9PntcbiAgICAgICAgXG4gICAgICAgIHRoaXMua2V5Ym9hcmRNYW5hZ2VyID0gbmV3IEtleWJvYXJkTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlciA9IG5ldyBVcGRhdGVTY2hlZHVsZXIoKTtcblxuICAgICAgICB0aGlzLm11c2ljUGxheWVyID0gbmV3IE11c2ljUGxheWVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYyhgJHtDb25zdGFudHMuTVVTSUNfUEFUSH0vZ29nb2dvLm1wM2ApO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKGAke0NvbnN0YW50cy5NVVNJQ19QQVRIfS9MZXRzX1Jlc3QubXAzYCk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L0xhX0NhbGFob3JyYS5tcDNgKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYyhgJHtDb25zdGFudHMuTVVTSUNfUEFUSH0vVG93ZWxfRGVmZW5jZV9FbmRpbmcubXAzYCk7XG4gICAgICAgIC8vdGhpcy5tdXNpY1BsYXllci5wbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAvL0tlbm55IFNwcml0ZXNoZWV0IHNlZSBkYXRhL21hcHMvS2VubmV5IFJQRyBUaWxlcy50c3hcbiAgICAgICAgdGhpcy50aWxlZFNwcml0ZXNoZWV0ID0gbmV3IFRpbGVkU3ByaXRlc2hlZXQoUElYSS5sb2FkZXIucmVzb3VyY2VzLnRpbGVkU3ByaXRlc2hlZXRUZXh0dXJlLnRleHR1cmUsIDEsIDE2LCAxNiwgMzEsIDU3KVxuICAgICAgICAvL0F0bGFzIFNwcml0ZXNoZWV0XG4gICAgICAgIHRoaXMuYXRsYXNTcHJpdGVzaGVldCA9IG5ldyBBdGxhc1Nwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy5hdGxhc1Nwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCBQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldERhdGEuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICAvL1JlZ2lzdGVyIFVwZGF0ZSBzY2hlZHVsZXJcbiAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5hZGQodGhpcy51cGRhdGVTY2hlZHVsZXIuZG9TdGVwKTtcbiAgICAgICAgXG4gICAgICAgIC8vTG9hZCBNYXBcbiAgICAgICAgdGhpcy5tYXAgPSBUaWxlZE1hcC5sb2FkTWFwKFBJWEkubG9hZGVyLnJlc291cmNlcy5tYXBEYXRhLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy9EaXNwbGF5IE1hcFxuICAgICAgICB0aGlzLnBpeGlBcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5tYXApO1xuICAgICAgICBcbiAgICAgICAgLy9TZXQgUGxheWVyIENvbnRyb2xzXG4gICAgICAgIGNvbnN0IHBsYXllcnMgPSB0aGlzLm1hcC5wbGF5ZXJzO1xuICAgICAgICBwbGF5ZXJzWzBdLnNldEtleXMoXCJ3XCIsIFwic1wiLCBcImFcIiwgXCJkXCIsIFwiY1wiLCBcInlcIiwgXCJ4XCIpO1xuICAgICAgICBwbGF5ZXJzWzBdLnNldENvbG9yKDB4Q0NFRUFBKTtcbiAgICAgICAgcGxheWVyc1sxXS5zZXRLZXlzKFwiQXJyb3dVcFwiLCBcIkFycm93RG93blwiLCBcIkFycm93TGVmdFwiLCBcIkFycm93UmlnaHRcIiwgXCJtXCIsIFwiYlwiLCBcIm5cIik7XG4gICAgICAgIHBsYXllcnNbMV0uc2V0Q29sb3IoMHhDQ0NDRkYpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vRHJhdyBtZW51XG4gICAgICAgIHRoaXMuZHJhd01lbnVCYXIocGxheWVycyk7XG4gICAgICAgIFxuICAgICAgICAvL1N0YXJ0IFBpeGkgQXBwXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuc3RhcnQoKTtcbiAgICAgICAgXG4gICAgICAgIC8vdGhpcy50ZXN0KCk7XG5cbiAgICB9XG5cbiAgICBcbiAgICBkcmF3TWVudUJhcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICB0aGlzLm1lbnVCYXIgPSBuZXcgTWVudUJhcihwbGF5ZXJzKTtcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWVudUJhcik7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIHRlc3QoKSB7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE5UX1BVTVBLSU4sMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5UT01BVE9fUFJPSkVDVElMRSwxMDApO1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLldBTEwsMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFO1xuICAgIH1cbiAgICBcbn1cblxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBIaXRFdmVudCB7XG5cbiAgICBpbml0aWF0b3I6IFBsYXllcjtcbiAgICBkYW1hZ2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRpYXRvcjogUGxheWVyLCBkYW1hZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcblxuICAgIHRvbWF0b19wcm9qZWN0aWxlOiBudW1iZXIgPSAwO1xuICAgIHRudF9wdW1wa2luOiBudW1iZXIgPSAwO1xuICAgIHRvbWF0b19wbGFudDogbnVtYmVyID0gQmFsYW5jaW5nLnRvbWF0b1BsYW50LnN0YXJ0U2VlZHM7XG4gICAgcHVtcGtpbl9wbGFudDogbnVtYmVyID0gQmFsYW5jaW5nLnB1bXBraW5QbGFudC5zdGFydFNlZWRzO1xuICAgIHdhbGw6IG51bWJlciA9IDA7XG5cbiAgICBnZXRJdGVtKGl0ZW1UeXBlOiBJVEVNKTogYm9vbGVhbiB7XG4gICAgICAgIHN3aXRjaCAoaXRlbVR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b21hdG9fcGxhbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvX3BsYW50LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1bXBraW5fcGxhbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVtcGtpbl9wbGFudC0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9tYXRvX3Byb2plY3RpbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvX3Byb2plY3RpbGUtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG50X3B1bXBraW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG50X3B1bXBraW4tLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2FsbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsLS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnaXZlICR7aXRlbVR5cGV9IHggJHtjb3VudH1gKTtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnRvbWF0b19wcm9qZWN0aWxlICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnRudF9wdW1wa2luICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMud2FsbCArPSBjb3VudDsgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHRoaXMudG9tYXRvX3BsYW50ICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6IHRoaXMucHVtcGtpbl9wbGFudCArPSBjb3VudDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQgPSBcInRvbWF0b19wbGFudFwiLFxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcbiAgICBUTlRfUFVNUEtJTiA9IFwidG50X3B1bXBraW5cIixcbiAgICBXQUxMID0gXCJ3YWxsXCIsXG4gICAgSEFORCA9IFwiaGFuZFwiLFxufVxuXG5cbmV4cG9ydCB7IElURU0gfTtcbiIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xuXG4gICAgIGtleVVwcyA9IHt9O1xuICAgICBrZXlEb3ducyA9IHt9O1xuICAgICBBTllfS0VZID0gXCJhbnlfa2V5XCI7XG5cbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleVVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcCB7XG4gICAgdHlwZTogSVRFTSxcbiAgICBjb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdGljIGdyb3dTdGF0ZXM6IG51bWJlciA9IDU7XG4gICAgY3JvcHM6IENyb3BbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncm93KCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ3JvdygpO1xuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy52dWxuZXJhYmxlKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBoaXRFdmVudC5pbml0aWF0b3IucGxheUFuaW1hdGlvbihcInB1dFwiKTtcbiAgICAgICAgLy9IYXJ2ZXN0IHlvdXJzZWxmXG4gICAgICAgIGZvciAoY29uc3QgY3JvcCBvZiB0aGlzLmNyb3BzKSB7XG4gICAgICAgICAgICBoaXRFdmVudC5pbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKGNyb3AudHlwZSwgY3JvcC5jb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9naXZlIHRoZSBpbml0aWF0b3IgdGhlIGl0ZW1zXG4gICAgICAgIGF3YWl0IHRoaXMuc2hyaW5rKCk7XG4gICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBQb2ludCwgZXh0cmFzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vLi4vaW5kZXhcIlxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSAnLi9Ub21hdG9Qcm9qZWN0aWxlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCIuL0ludmVudG9yeVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGVudW0gRElSRUNUSU9OIHsgVVAgPSBcInVwXCIsIFJJR0hUID0gXCJyaWdodFwiLCBET1dOID0gXCJkb3duXCIsIExFRlQgPSBcImxlZnRcIiwgU1RPUCA9IFwic3RvcFwiIH07XG5leHBvcnQgaW50ZXJmYWNlIEhpdGJveCB7XG4gICAgbGVmdFg6IG51bWJlcjtcbiAgICByaWdodFg6IG51bWJlcjtcbiAgICB1cHBlclk6IG51bWJlcjtcbiAgICBsb3dlclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XG4gICAgc3RhdGljIFNQUklURV9IRUlHSFQ6IG51bWJlciA9IDE0NCAvIDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoMS41LCAxLjUpO1xuICAgIHN0YXRpYyBISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwgPSAxMDtcbiAgICBzdGF0aWMgSElUQk9YX1RPTEVSQU5DRV9UT1AgPSAxMDtcbiAgICBzdGF0aWMgZGFtYWdlU291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2F1dHNjaC5tcDNgKTtcblxuICAgIHBsYXllcklkOiBudW1iZXI7XG4gICAgLy9BIGhleCB2YWx1ZSBvZiBhIGNvbG9yIGFsbCBwbGF5ZXIncyBzcHJpdGVzIGFyZSB0aW50ZWQgd2l0aFxuICAgIGNvbG9yOiBudW1iZXIgPSAweEZGRkZGRjtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgc3ByaXRlOiBleHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgYW5pbWF0aW9ucztcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG5cbiAgICAvL1BsYXllciBpZ25vcmVzIGRvU3RlcCwgb25BY3Rpb24gYW5kIG9uSGl0IEV2ZW50cyBpZiBzdHVubmVkXG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICAvKiogU2F2ZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIChTVE9QIHdpbGwgbm90IGJlIHNhdmVkIGhlcmUsIGluIHRoaXMgY2FzZSB0aGUgdmFsdWUgaXMgdGhlIGxhc3QgZGlyZWN0aW9uIGJlZm9yZSBTVE9QKSAqL1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuXG4gICAgdXBLZXk6IHN0cmluZztcbiAgICBkb3duS2V5OiBzdHJpbmc7XG4gICAgbGVmdEtleTogc3RyaW5nO1xuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XG4gICAgYWN0aW9uS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0S2V5OiBzdHJpbmc7XG4gICAgcGxhY2VLZXk6IHN0cmluZztcbiAgICBsYXN0VGludGVkVGlsZTogVGlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDtcblxuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBESVJFQ1RJT04uRE9XTjtcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gUGxheWVyLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjEzO1xuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcblxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcbiAgICAgICAgZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLnJlZ2lzdGVyS2V5KGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5BTllfS0VZLCB0aGlzLmtleURvd24sIHRoaXMua2V5VXAsIFwicGxheWVyXCIgKyBwbGF5ZXJJZCk7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllclwiICsgcGxheWVySWQsIHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIGdldEhpdGJveCgpOiBIaXRib3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdFg6IHRoaXMuc3ByaXRlLnggKyBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgcmlnaHRYOiB0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLSBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgdXBwZXJZOiB0aGlzLnNwcml0ZS55ICsgUGxheWVyLkhJVEJPWF9UT0xFUkFOQ0VfVE9QLFxuICAgICAgICAgICAgbG93ZXJZOiB0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhbGs6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVOYW1lIGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViU3RhdGVOYW1lIGluIGFuaW1hdGlvbnNbc3RhdGVOYW1lXSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgcGxheWVyXyR7c3RhdGVOYW1lfV8ke3N1YlN0YXRlTmFtZX1fJHtpfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXSA9IGN1cnJlbnRGcmFtZXNBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgc3dpdGNoUGxhY2VNb2RlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxhY2VNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlROVF9QVU1QS0lOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uV0FMTDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLkhBTkQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLkhBTkQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5QVU1QS0lOX1BMQU5UOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhbmdlZCBQbGFjZU1vZGUuIE5ldyBtb2RlIGlzOiAke3RoaXMucGxhY2VNb2RlfWApO1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb246IERJUkVDVElPTikge1xuICAgICAgICBpZiAodGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICAvL1BsYXllciBpcyBzdHVubmVkIGFuZCBjYW4ndCBjaGFuZ2UgaXQncyBkaXJlY3Rpb25cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OLlNUT1ApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmVzID0gdGhpcy5hbmltYXRpb25zLndhbGtbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IHRoaXMuYW5pbWF0aW9uc1tzdGF0ZV1bdGhpcy5jdXJyZW50RGlyZWN0aW9uXTtcblxuICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKClcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1dhaXQgYSBtb21lbnRcbiAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoODApO1xuXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gYmFja3dhcmRzXG4gICAgICAgIGZvciAobGV0IGkgPSBmcmFtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vUmVzdG9yZSBsYXN0IGRpcmVjdGlvbidzIHRleHR1cmVcbiAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMuY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBzZXRLZXlzKHVwS2V5LCBkb3duS2V5LCBsZWZ0S2V5LCByaWdodEtleSwgYWN0aW9uS2V5LCBzZWxlY3RLZXksIHBsYWNlS2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgICAgIHRoaXMucGxhY2VLZXkgPSBwbGFjZUtleTtcbiAgICB9XG5cbiAgICBzZXRDb2xvcihjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IGNvbG9yO1xuICAgIH1cblxuICAgIGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPSB0aGlzLmxhc3RLZXkgJiYgIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSk6IHZvaWQgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHRoaXMuZ2V0SGl0Ym94KCk7XG4gICAgICAgICAgICBjb25zdCBzdGVwWCA9IHRoaXMudnggKiBkZWx0YTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBZID0gdGhpcy52eSAqIGRlbHRhO1xuICAgICAgICAgICAgY29uc3QgdGlsZVdpZHRoID0gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0O1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXIgaWYgaGUgd291bGQgZG8gYSBzdGVwIGluIGRpcmVjdGlvbiAoc3RlcFh8c3RlcFkpXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC5sZWZ0WCArIHN0ZXBYKSAvIHRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKGhpdGJveC5yaWdodFggKyBzdGVwWCkgLyB0aWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC51cHBlclkgKyBzdGVwWSkgLyB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigoaGl0Ym94Lmxvd2VyWSArIHN0ZXBZKSAvIHRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAuZ2V0VGlsZSh4LCB5KS50aWxlT2JqZWN0LnNvbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChibG9ja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUueCArPSBzdGVwWDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS55ICs9IHN0ZXBZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgVGlsZS5cbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cbiAgICAqL1xuICAgIGdldEN1cnJlbnRUaWxlKCk6IFRpbGUge1xuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCwgZ3JpZFkpO1xuICAgIH1cblxuICAgIHRpbnRDdXJyZW50VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbnRlZFRpbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgIGlmIChjdCkge1xuICAgICAgICAgICAgY3Quc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUaW50ZWRUaWxlID0gY3Q7XG5cbiAgICB9XG5cbiAgICBvblBsYWNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG5cbiAgICAgICAgICAgIC8vQ3JlYXRlIGhpdEV2ZW50IGlmIHBsYWNlTW9kZSBpcyBIQU5EXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5IQU5EKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMsIEJhbGFuY2luZy5wbGF5ZXIuaGl0RGFtYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG8gaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VNb2RlID09IElURU0uVE9NQVRPX1BST0pFQ1RJTEUgJiYgdGhpcy5pbnZlbnRvcnkuZ2V0SXRlbShJVEVNLlRPTUFUT19QUk9KRUNUSUxFKSkge1xuICAgICAgICAgICAgICAgIG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuY3VycmVudERpcmVjdGlvbiwgdGhpcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Vsc2UgcGxhY2UgdGlsZU9iamVjdCBpZiByZXNzb3VyY2VzIGFyZSBpbiBpbnZlbnRvcnlcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW52ZW50b3J5LmdldEl0ZW0odGhpcy5wbGFjZU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9uUGxhY2UodGhpcy5wbGFjZU1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQgPSBhc3luYyAoaGl0RXZlbnQ6IEhpdEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xuICAgICAgICAgICAgUGxheWVyLmRhbWFnZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnBsYXllci5rbm9ja2Rvd24pO1xuICAgICAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4xO1xuICAgICAgICB0aGlzLnNwcml0ZS54ICs9IHRoaXMuc3ByaXRlLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUueSArPSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG5cbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLnNwcml0ZS54IC09IHRoaXMuc3ByaXRlLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUueSAtPSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDApO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgUHVtcGtpblBsYW50IGV4dGVuZHMgUGxhbnQge1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInB1bXBraW5fcGxhbnRfMFwiKSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5jcm9wcyA9IEJhbGFuY2luZy5wdW1wa2luUGxhbnQuY3JvcHM7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JvdygpIHtcbiAgICAgICAgZm9yIChsZXQgZ3Jvd1N0ZXAgPSAxOyBncm93U3RlcCA8IFB1bXBraW5QbGFudC5ncm93U3RhdGVzOyBncm93U3RlcCsrKSB7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdChCYWxhbmNpbmcucHVtcGtpblBsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHB1bXBraW5fcGxhbnRfJHtncm93U3RlcH1gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmFwaGljcyB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgYm9yZGVyUmVjdGFuZ2xlOiBHcmFwaGljcztcbiAgICBib3JkZXJDb2xvcjogbnVtYmVyXG4gICAgcHJvZ3Jlc3NTaGFwZTogR3JhcGhpY3M7XG4gICAgcHJvZ3Jlc3NDb2xvcjogbnVtYmVyO1xuICAgIHByb2dyZXNzOiBudW1iZXI7IC8vRnJvbSAwIHRvIDFcbiAgICBtb3RoZXI6IFRpbGVPYmplY3Q7XG5cbiAgICBzdGF0aWMgTElORV9USElDS05FU1MgPSAzO1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlT2JqZWN0LCB2aXNpYmxlPzogYm9vbGVhbiwgcHJvZ3Jlc3M/OiBudW1iZXIsIGJvcmRlckNvbG9yPzogbnVtYmVyLCBwcm9ncmVzc0NvbG9yPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogdmlzaWJsZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzIHx8IDE7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvciB8fCAweEZGMDAwMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gcHJvZ3Jlc3NDb2xvciB8fCAweDAwRkYwMDtcblxuICAgICAgICAvL0FkZCB0byBwaXhpIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBtYXAgPSBtb3RoZXIubW90aGVyLm1hcDtcblxuICAgICAgICBtYXAuZXh0cmFTdHVmZkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzKTtcblxuICAgICAgICAvL3Bvc2l0aW9uIHJlbGF0aXZlIHRvIG1vdGhlclxuICAgICAgICB0aGlzLnggPSBtb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gbW90aGVyLnk7XG4gICAgICAgIHRoaXMud2lkdGggPSBtb3RoZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbW90aGVyLmhlaWdodDtcblxuICAgICAgICAvL0RyYXcgZnJhbWVcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgdGhpcy5ib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlLmRyYXdSZWN0KDAsIDAsIG1hcC5maW5hbFRpbGVXaWR0aCwgU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib3JkZXJSZWN0YW5nbGUpO1xuXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy9DbGVhciBsYXN0IHByb2dyZXNzIFNoYXBlXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzU2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wcm9ncmVzc1NoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAwLjEpIHsgLy9EcmF3IHRvbyBzbWFsbCBwcm9ncmVzcyBsb29rcyB1Z2x5XG4gICAgICAgICAgICAvL0RyYXcgbmV3IHByb2dyZXNzYmFyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUgPSBuZXcgR3JhcGhpY3MoKTtcblxuICAgICAgICAgICAgLy9Eb24ndCB3b3JyeSBhYm91dCB0aGlzIGNyYXp5ICsxLy0xIHBpeGVscywgdGhleSBhcmUgY3JhenksIGJ1dCBuZWNlc3NhcnlcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDY0ICogdGhpcy5wcm9ncmVzcyAtIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyArIDE7XG4gICAgICAgICAgICBjb25zdCB0aGljayA9IFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDI7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZS5saW5lU3R5bGUodGhpY2ssIHRoaXMucHJvZ3Jlc3NDb2xvcilcbiAgICAgICAgICAgICAgICAubW92ZVRvKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAtIDEsIHRoaWNrIC0gMSlcbiAgICAgICAgICAgICAgICAubGluZVRvKGxpbmVXaWR0aCwgdGhpY2sgLSAxKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAwIHx8IHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBzZXQgcHJvZ3Jlc3MgbG93ZXIgdGhhbiAwIG9yIGhpZ2hlciB0aGFuIDFcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tIFwiLi9UbnRQdW1wa2luXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgeyBUb21hdG9QbGFudCB9IGZyb20gXCIuL1RvbWF0b1BsYW50XCI7XG5pbXBvcnQgeyBQdW1wa2luUGxhbnQgfSBmcm9tIFwiLi9QdW1wa2luUGxhbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGUgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgZ3JpZFg6IG51bWJlcjtcbiAgICBncmlkWTogbnVtYmVyO1xuICAgIHRpbGVPYmplY3Q6IFRpbGVPYmplY3Q7XG4gICAgbWFwOiBUaWxlZE1hcDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG1hcDogVGlsZWRNYXApIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ3JpZFggPSBncmlkWDtcbiAgICAgICAgdGhpcy5ncmlkWSA9IGdyaWRZO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgLy9jYWxjdWxhdGUgb3duIHJlbmRlciBjb29yZGluYXRlc1xuICAgICAgICB0aGlzLnggPSBncmlkWCAqIG1hcC5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gZ3JpZFkgKiBtYXAuZmluYWxUaWxlSGVpZ2h0O1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QobmV3VGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0ID0gbmV3VGlsZU9iamVjdDtcbiAgICAgICAgICAgIG5ld1RpbGVPYmplY3Quc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgICAgICB0aGlzLm1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKG5ld1RpbGVPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgYWRkIFRpbGVPYmplY3QgdG8gYSBUaWxlIHRoYXQgYWxscmVhZHkgaGFzIGFuIFRpbGVPYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uSGl0KGhpdEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25QbGFjZShvYmplY3RUeXBlOiBJVEVNKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9iamVjdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVG9tYXRvUGxhbnQodGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOlxuICAgICAgICAgICAgICAgICAgICBuZXcgUHVtcGtpblBsYW50KHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46XG4gICAgICAgICAgICAgICAgICAgIG5ldyBUbnRQdW1wa2luKHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uV0FMTDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFdhbGwodGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlT2JqZWN0ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0aGUgZmlyc3QgcGxheWVyIHRoYXQgb2NjdXBpZXMgdGhpcyB0aWxlLlxuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoaXMgdGlsZSBpcyBub3Qgb2NjdXBpZWRcbiAgICAgKi9cbiAgICBpc09jY3VwaWVkQnkoKTogUGxheWVyIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy5tYXAucGxheWVycykge1xuICAgICAgICAgICAgLy9HZXQgYWxsIHRpbGVzIHRoYXQgd291bGQgYmUgdG91Y2hlZCBieSB0aGUgcGxheWVyXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IocGxheWVyLnNwcml0ZS54IC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnggKyBwbGF5ZXIuc3ByaXRlLndpZHRoKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKHBsYXllci5zcHJpdGUueSArIHBsYXllci5zcHJpdGUuaGVpZ2h0KSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRYID49IHhSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFggPD0geFJhbmdlLnRvICYmIHRoaXMuZ3JpZFkgPj0geVJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWSA8PSB5UmFuZ2UudG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYW55IHBsYXllciBvbiB0aGlzIHRpbGUuXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5QW55UGxheWVyKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmlzT2NjdXBpZWRCeSgpO1xuICAgICAgICBpZiAocGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9jY3VwaWVkIGJ5IHBsYXllclwiICsgcGxheWVyLnBsYXllcklkKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGludChjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGludCA9IGNvbG9yO1xuICAgICAgICBpZiAoIXRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC50aW50ID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuXG59IiwiaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGlsZU9iamVjdCBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vaGl0Lm1wM2ApO1xuICAgIHN0YXRpYyBvbkRlc3Ryb3lTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vYmxvYi5tcDNgKTtcblxuICAgIG1vdGhlcjogVGlsZTtcbiAgICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHZ1bG5lcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBzb2xpZD86IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7XG5cbiAgICAgICAgLy9zZXQgcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XG5cbiAgICAgICAgLy9TZXQgdGltZXIgZm9yIHNvbGlkIHRpbGVzXG4gICAgICAgIGlmIChzb2xpZCkge1xuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhBQUFBQUE7XG4gICAgICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoYHdhaXRfdG9fYmVjb21lX3NvbGlkXyR7dGhpcy5tb3RoZXIuZ3JpZFh9XyR7dGhpcy5tb3RoZXIuZ3JpZFl9YCwgdGhpcy50cnlUb0JlY29tZVNvbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeVRvQmVjb21lU29saWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5tb3RoZXIuaXNPY2N1cGllZEJ5QW55UGxheWVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgdGhpcy5zb2xpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uSGl0KGhpdGV2ZW50OiBIaXRFdmVudCkgeyB9O1xuXG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4wNztcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuXG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FcGlsb2dcbiAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cblxuICAgIGFzeW5jIHNocmluaygpIHtcblxuICAgICAgICAvL1Byb2xvZyAgICAgICAgXG4gICAgICAgIGNvbnN0IHNjYWxlRGlmZiA9IDAuMjtcbiAgICAgICAgLy9DaGFuZ2UgYW5jaG9yXG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRoaXMuc2NhbGUueCA+IDAgJiYgdGhpcy5zY2FsZS55ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS54IC09IHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSAtPSBzY2FsZURpZmY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgxMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBibGluayh0aW1lcykge1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICAvL0dpdmUgdGhlIHRpbGVvYmplY3QgYSBncmVlbiB0aW50XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGQUFBQTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDIwMCk7XG4gICAgICAgICAgICAvL1JlbW92ZSB0aGUgdGludFxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgyMDApO1xuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi9Ub3dlclwiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIC8qKkhvbGQgYWxsIFRpbGVzLiBVc2FnZTogdGlsZXNbeV1beF0gKi9cbiAgICBwcml2YXRlIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBleHRyYVN0dWZmQ29udGFpbmVyOiBDb250YWluZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGlsZU9iamVjdENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVPYmplY3RDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGxheWVyQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5leHRyYVN0dWZmQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB9XG5cblxuICAgIGdldE1hcE9iamVjdFByb3BlcnR5KG1hcE9iamVjdDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIG1hcE9iamVjdC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy9Mb2FkcyB0aGUgbWFwIHdpdGggc3ByaXRlc2hlZXQuIExhc3QgcGFyYW1ldGVyIGlzIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBwYXJzaW5nIHRoZSBtYXAgd2l0aCB0aGUgbmV3IHBhcnNlZCBtYXAgYXMgcGFyYW1ldGVyXG4gICAgc3RhdGljIGxvYWRNYXAobWFwRGF0YSkge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBUaWxlZE1hcCgpO1xuICAgICAgICBjb25zdCB0aWxlZFNwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldDtcbiAgICAgICAgY29uc3QgYXRsYXNTcHJpdGVzaGVldCA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gdGlsZWRTcHJpdGVzaGVldC50aWxlV2lkdGggKiBTUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFNQUklURV9TQ0FMRS55O1xuXG4gICAgICAgIC8vQnVpbGQgYWxsIFRpbGVMYXllcnMgZmlyc3RcbiAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgbWFwLmdyaWRXaWR0aCA9IHRsLndpZHRoO1xuICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy9Jbml0IG1hcCdzIHRpbGVzIGFycmF5XG4gICAgICAgICAgICAgICAgbWFwLnRpbGVzID0gbmV3IEFycmF5KG1hcC5ncmlkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXNbaV0gPSBuZXcgQXJyYXkobWFwLmdyaWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCB0aWxlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRsLndpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcm93ICogdGwud2lkdGggKyBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUodGwuZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgVGlsZSh0ZXh0dXJlLCBjb2x1bW4sIHJvdywgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZShuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9JdGVyYXRlIHRocm91Z2ggT2JqZWN0IExheWVyc1xuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG5cbiAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuXG5cbiAgICAgICAgICAgICAgICAvL0FkZCBhbGwgcGxheWVycyBmaXJzdFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX18gIF8gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8X18pIHwgfCBfXyBfIF8gICBfICBfX18gXyBfXyBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX19fL3wgfC8gX2AgfCB8IHwgfC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHxffCAgICB8X3xcXF9fLF98XFxfXywgfFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgX18vIHwgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKGNvLnggKiBTUFJJVEVfU0NBTEUueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IChNYXRoLnJvdW5kKGNvLnkpIC0gY28uaGVpZ2h0KSAqIFNQUklURV9TQ0FMRS55OyAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcklkOiBudW1iZXIgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwicGxheWVySWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIG1hcCwgcGxheWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFBsYXllcihuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgU3ByaXRlcyBmb3IgZWFjaCBvYmplY3QgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgX19fX18gICAgICBfX19fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8LyBfIFxcIFxcIC9cXCAvIC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgKF8pIFxcIFYgIFYgLyAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffFxcX19fLyBcXF8vXFxfLyBcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rvd2VyID0gbmV3IFRvd2VyKHRleHR1cmUsIG1vdGhlciwgb3duZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgfCB8ICBfXy8gIF9fL1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qKipcbiAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgXFwgXFwgICAgICAgIC8gLyAgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBcXCBcXCAgL1xcICAvIC9fIF98IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICBcXCAgL1xcICAvIChffCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIFxcLyAgXFwvIFxcX18sX3xffF98XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXcgV2FsbChtb3RoZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG5cblxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbGUgYXQgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHggYW5kIHkgZ3JpZCBjb29yZGluYXRlc1xuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHRpbGUgYXQgdGhpcyBjb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSBncmlkWCB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0gZ3JpZFkgeS1jb29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0VGlsZShncmlkWDpudW1iZXIsZ3JpZFk6bnVtYmVyKTpUaWxle1xuICAgICAgICBpZih0aGlzLnRpbGVzW2dyaWRZXSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1tncmlkWV1bZ3JpZFhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3Q6IFJlY3RhbmdsZSkge1xuXG4gICAgICAgIC8vYW4gT2JqZWN0IGNhbiBiZSBwbGFjZWQgXCJiZXR3ZWVuXCIgdGlsZXMgaW4gdGlsZWQgbWFwIGVkaXRvci4gQnV0IGV2bnRzIGNhbiBiZSB0cmlnZ2VyZWQgb25seSBmcm9tIHdob2xlIHRpbGVzLiBTbyB0aGUgb2JlamNjdHMgcG9zaXRpb24gaXMgbWFwcGVkIHRvIHRoZSBuZWFyZXN0IFRpbGVcblxuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbWFwT2JqZWN0LnggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbGV0IHhUaWxlcyA9IG9yaWdpbmFsWCAvIHRoaXMuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcblxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gKG1hcE9iamVjdC55IC0gbWFwT2JqZWN0LmhlaWdodCkgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTsgIC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lciAgICAgICAgICAgICAgXG4gICAgICAgIGxldCB5VGlsZXMgPSBvcmlnaW5hbFkgLyB0aGlzLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB7IGdyaWRYOiB4VGlsZXMsIGdyaWRZOiB5VGlsZXMgfTtcbiAgICB9XG5cbiAgICBnZXRUaWxlTmVhcmVzdFRvKG1hcE9iamVjdDogUmVjdGFuZ2xlKTogVGlsZSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zLmdyaWRZXVtwb3MuZ3JpZFhdO1xuICAgIH1cblxufSIsImltcG9ydCB7IFRleHR1cmUsIFNDQUxFX01PREVTLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGlsZWRTcHJpdGVzaGVldHtcblxuXHRib3JkZXI6IG51bWJlcjtcblx0dGlsZUhlaWdodDogbnVtYmVyO1xuXHR0aWxlV2lkdGg6IG51bWJlcjtcblx0cm93czogbnVtYmVyO1xuXHRjb2x1bW5zOiBudW1iZXI7XG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XG5cdHRleHR1cmVzOiBUZXh0dXJlW107XG5cblx0Y29uc3RydWN0b3IodGV4dHVyZSxib3JkZXIsdGlsZVdpZHRoLHRpbGVIZWlnaHQscm93cyxjb2x1bW5zKXtcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0XHR0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuXHRcdHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuXHRcdHRoaXMucm93cyA9IHJvd3M7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBTQ0FMRV9NT0RFUy5ORUFSRVNUO1xuXHRcdHRoaXMudGV4dHVyZXMgPSBbXTtcblx0fVxuXG5cdGdldFRleHR1cmUoZ2lkOm51bWJlcik6VGV4dHVyZSAge1xuXHRcdC8vQ2hlY2sgd2V0aGVyIHRleHR1cmVzIHdhcyBhbGxyZWFkeSBmcmFtZWQgZm9ybSBzcHJpdGVzaGVldFxuXHRcdGlmICh0aGlzLnRleHR1cmVzW2dpZF0pIHtcblx0XHQgIHJldHVybiB0aGlzLnRleHR1cmVzW2dpZF07XG5cdFx0fSBlbHNlIHtcblx0XHQgIC8vQ2FsY3VsYXRlIHJvdyBhbmQgY29sdW1uIGZyb20gZ2lkXG5cdFx0ICBsZXQgcm93Om51bWJlciA9IE1hdGguZmxvb3IoKGdpZCAtIDEpIC8gdGhpcy5jb2x1bW5zKTtcblx0XHQgIGxldCBjb2x1bW46bnVtYmVyID0gKGdpZCAtIDEpICUgdGhpcy5jb2x1bW5zO1xuXHRcblx0XHQgIGxldCB0aWxlV2lkdGg6bnVtYmVyID0gdGhpcy50aWxlV2lkdGg7XG5cdFx0ICBsZXQgdGlsZUhlaWdodDpudW1iZXIgPSB0aGlzLnRpbGVIZWlnaHQ7XG5cdFxuXHRcdCAgbGV0IHg6bnVtYmVyID0gY29sdW1uICogdGlsZVdpZHRoICsgY29sdW1uICogdGhpcy5ib3JkZXI7XG5cdFx0ICBsZXQgeTpudW1iZXIgPSByb3cgKiB0aWxlSGVpZ2h0ICsgcm93ICogdGhpcy5ib3JkZXI7XG5cdFxuXHRcdCAgbGV0IHQ6VGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZSh4LCB5LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpKTtcblx0XHQgIC8vU2F2ZSBUZXh0dXJlIGluIGNhY2hlIGFycmF5XG5cdFx0ICB0aGlzLnRleHR1cmVzW2dpZF0gPSB0O1xuXHRcdCAgcmV0dXJuIHQ7XG5cdFx0fVxuXHQgIH1cblx0XG5cbn0iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFRudFB1bXBraW4gZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHByaXZhdGUgYW5pbWF0aW9ucztcblxuICAgIHN0YXRpYyB0aWNrU291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2tsaWNrLm1wM2ApO1xuICAgIHN0YXRpYyBleHBsb2RlU291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2V4cGxvZGUubXAzYCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwicHVtcGtpbl9pZGxlXCIpLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUgJiYgaGl0RXZlbnQuZGFtYWdlID4gMCkge1xuICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLndpZ2dsZSgxKTtcbiAgICAgICAgICAgIFRudFB1bXBraW4udGlja1NvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIC8vQmxpbmsgdmVyeSBkYW5nZXJvdXNcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYmxpbmsoNCk7XG4gICAgICAgICAgICAvL1RyaWdnZXIgVGlsZU9iamVjdHMgYXJvdW5kXG4gICAgICAgICAgICBjb25zdCB0aWxlc0Fyb3VuZCA9IHRoaXMuZ2V0VGlsZXNBcm91bmQoKTtcbiAgICAgICAgICAgIGZvcihjb25zdCB0aWxlIG9mIHRpbGVzQXJvdW5kKXtcbiAgICAgICAgICAgICAgICB0aWxlLm9uSGl0KG5ldyBIaXRFdmVudChoaXRFdmVudC5pbml0aWF0b3IsQmFsYW5jaW5nLnRudFB1bXBraW4uZXhwbG9zaW9uRGFtYWdlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRXhwbG9kZSEhIVxuICAgICAgICAgICAgVG50UHVtcGtpbi5leHBsb2RlU291bmQucGxheSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZXhwbG9kZVwiKTtcbiAgICAgICAgICAgIC8vRGVzdHJveSBwdW1wa2luIDotKFxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFuaW1hdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgICAgICAgICBleHBsb2RlOiAxMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSBhbmltYXRpb25zW3N0YXRlTmFtZV07XG4gICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGBwdW1wa2luXyR7c3RhdGVOYW1lfV8ke2l9YDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXSA9IGN1cnJlbnRGcmFtZXNBcnJheTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IHRoaXMuYW5pbWF0aW9uc1tzdGF0ZV07XG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBmb3J3YXJkc1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGlsZXMgdGhhdCBhcmUgb3J0aG9nb25hbCB0byBpdCdzIG93biB0aWxlLlxuICAgICAqIFRoaXMgYXJyYXkgaG9sZHMgb25seSBleGlzdGluZyB0aWxlcyBhbmQgbm8gdW5kZWZpbmVkIHZhbHVlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFRpbGVzQXJvdW5kKCk6IFRpbGVbXSB7XG4gICAgICAgIGNvbnN0IG15WCA9IHRoaXMubW90aGVyLmdyaWRYO1xuICAgICAgICBjb25zdCBteVkgPSB0aGlzLm1vdGhlci5ncmlkWTtcblxuICAgICAgICBsZXQgdGlsZXM6IFRpbGVbXSA9IFtdO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCArIDEsIG15WSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCAtIDEsIG15WSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCwgbXlZICsgMSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCwgbXlZIC0gMSkpO1xuXG4gICAgICAgIC8vRmlsdGVyIG5vdCBleGlzdGluZyB0aWxlc1xuICAgICAgICBsZXQgdG9SZXR1cm46VGlsZVtdID0gW107XG4gICAgICAgIGZvcihjb25zdCB0aWxlIG9mIHRpbGVzKXtcbiAgICAgICAgICAgIGlmKHRpbGUpe1xuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgdGVzdEV4cGxvc2lvbigpIHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDEsMCkpO1xuICAgICAgICBuZXcgVG50UHVtcGtpbihnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSgyLDApKTtcbiAgICAgICAgcC5vbkhpdChuZXcgSGl0RXZlbnQoZ2FtZU1hbmFnZXIubWFwLnBsYXllcnNbMF0sIDEpKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1BsYW50IGV4dGVuZHMgUGxhbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInRvbWF0b19wbGFudF8wXCIpLG1vdGhlcik7XG4gICAgICAgIHRoaXMuY3JvcHMgPSBCYWxhbmNpbmcudG9tYXRvUGxhbnQuY3JvcHM7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JvdygpIHtcbiAgICAgICAgZm9yIChsZXQgZ3Jvd1N0ZXAgPSAxOyBncm93U3RlcCA8IFRvbWF0b1BsYW50Lmdyb3dTdGF0ZXM7IGdyb3dTdGVwKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy50b21hdG9QbGFudC5ncm93U3RlcFRpbWUpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGB0b21hdG9fcGxhbnRfJHtncm93U3RlcH1gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUG9pbnQsIFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tICcuL0JhbGFuY2luZyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuL0NvbnN0YW50cyc7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gJy4vSGl0RXZlbnQnO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tICcuL1RpbGVPYmplY3QnO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSAnLi9VcGRhdGVTY2hlZHVsZXInO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUHJvamVjdGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgaWRDb3VudGVyID0gMDtcbiAgICBzdGF0aWMgdGhyb3dTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vc25hcC5tcDNgKTtcbiAgICBzdGF0aWMgc21hc2hTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vc21hc2gubXAzYCk7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvd25lcjogUGxheWVyO1xuICAgIHByaXZhdGUgaW5pdGlhdG9yIDogUGxheWVyIHwgVGlsZU9iamVjdDtcbiAgICBwcml2YXRlIHZ4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdnk6IG51bWJlciA9IDA7XG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdID0gW107XG5cblxuICAgIHN0YXRpYyBnZXROZXdJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHRvbWF0b19wcm9qZWN0aWxlXyR7VG9tYXRvUHJvamVjdGlsZS5pZENvdW50ZXIrK31gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB4IHgtY29vcmRpbmF0ZSB0byBzdGFydFxuICAgICAqIEBwYXJhbSB5IHktY29vcmRpbmF0ZSB0byBzdGFydFxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gZGlyZWN0aW9uIHRvIGZseVxuICAgICAqIEBwYXJhbSBpbml0aWF0b3IgdGhlIHBsYXllciBvciBvYmplY3QgdGhhdCBjcmVhdGVzIHRoaXMgdG9tYXRlICh0aGlzIHBsYXllciB3aWxsIGJlIGltdW4gdG8gdGhpcyB0b21hdG8pXG4gICAgICogQHBhcmFtIG93bmVyIHRoZSBwbGF5ZXIgdGhhdCB3aWxsIGJlIHJlZmVyZW5jZWQgaW4gaGl0RXZlbnQgaWYgdGhlIHRvbWF0byBoaXRzIHNvbWV0aGluZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IERJUkVDVElPTiwgaW5pdGlhdG9yOiBQbGF5ZXIgfCBUaWxlT2JqZWN0LCBvd25lcjogUGxheWVyKSB7XG5cbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwidG9tYXRvX3Byb2plY3RpbGVfZmx5XCIpKTtcblxuICAgICAgICB0aGlzLmlkID0gVG9tYXRvUHJvamVjdGlsZS5nZXROZXdJZCgpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXcgUG9pbnQoMiwgMik7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5VUDogdGhpcy52eSA9IC0xICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjogdGhpcy52eSA9IDEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOiB0aGlzLnZ4ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDogdGhpcy52eCA9IDEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgdG9tYXRvX3Byb2plY3RpbGVfc21hc2hfJHtpfWA7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKHRoaXMuaWQsIHRoaXMuZG9TdGVwKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIubWFwLmV4dHJhU3R1ZmZDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIFRvbWF0b1Byb2plY3RpbGUudGhyb3dTb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMueSArIHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIHdoZW4gbW92aW5nIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1ggLSB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1kgLSB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9DaGVjayBpZiB0aGUgdG9tYXRvIGhpdHMgYSBQbGF5ZXJcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgZ2FtZU1hbmFnZXIubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHBsYXllci5nZXRIaXRib3goKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnggPCBoaXRib3gucmlnaHRYICYmIHRoaXMueCArIHRoaXMud2lkdGggPiBoaXRib3gubGVmdFggJiYgdGhpcy55IDwgaGl0Ym94Lmxvd2VyWSAmJiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGhpdGJveC51cHBlclkpIHtcbiAgICAgICAgICAgICAgICAvL0ZseSBpbnRvIHRoZSBQbGF5ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hc2gocGxheWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vQ2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoaXMgbmV3IHBvc2l0aW9ucyB3b3VsZCBiZSBpbiBhIHNvbGlkIHRpbGUgb3Igb3V0IG9mIHRoZSBtYXBcbiAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8IGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFRpbGUgPSBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9GbHkgaW50byB0aGUgdGlsZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFzaChibG9ja2VkVGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIG5vIGNvbGxpc2lvbiwganVzdCBmbHkgeW91ciB3YXlcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSAwLjUgKiBkZWx0YTtcblxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGFzeW5jIHNtYXNoKGNvbGxpZGVyOiBUaWxlIHwgUGxheWVyKSB7XG4gICAgICAgIGlmIChjb2xsaWRlciAhPSB0aGlzLmluaXRpYXRvcikgeyAvL0RvbnQgaGl0IHRoZSBpbml0aWF0b3JcbiAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci51bnJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgVG9tYXRvUHJvamVjdGlsZS5zbWFzaFNvdW5kLnBsYXkoKTsgLy9QbGF5IFNtYXNoIHNvdW5kXG5cbiAgICAgICAgICAgIC8vVHJpZ2dlciBIaXQgZXZlbnQgb24gaGl0dGVuIHRpbGUgb3IgUGxheWVyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5vbkhpdChuZXcgSGl0RXZlbnQodGhpcy5vd25lciwgQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuaGl0RGFtYWdlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vUGxheSBTbWFzaCBhbmltYXRpb25cbiAgICAgICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgVG9tYXRvUHJvamVjdGlsZSB9IGZyb20gXCIuL1RvbWF0b1Byb2plY3RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgb3duZXJJZDogc3RyaW5nO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLnRvd2VyLmRlZmF1bHRIZWFsdGg7XG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUsIG93bmVySWQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLm93bmVySWQgPSBvd25lcklkO1xuICAgIH1cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoIC8gQmFsYW5jaW5nLnRvd2VyLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRvd2VyLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKEJhbGFuY2luZy50b3dlci5jb29sZG93bik7XG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgVG9tYXRvcyBhcyBkZWZlbnNlIGFjdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVIZWlnaHQgPSB0aGlzLm1vdGhlci5tYXAuZmluYWxUaWxlSGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVXaWR0aCA9IHRoaXMubW90aGVyLm1hcC5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFkgLSAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUodGhpcy54LCAodGhpcy5tb3RoZXIuZ3JpZFkgLSAxKSAqIHRpbGVIZWlnaHQsIERJUkVDVElPTi5VUCwgdGhpcywgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdGhlci5ncmlkWCAtIDEgPj0gMCkgeyBuZXcgVG9tYXRvUHJvamVjdGlsZSgodGhpcy5tb3RoZXIuZ3JpZFggLSAxKSAqIHRpbGVXaWR0aCwgdGhpcy55LCBESVJFQ1RJT04uTEVGVCwgdGhpcywgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdGhlci5ncmlkWSArIDEgPj0gMCkgeyBuZXcgVG9tYXRvUHJvamVjdGlsZSh0aGlzLngsICh0aGlzLm1vdGhlci5ncmlkWSArIDEpICogdGlsZUhlaWdodCwgRElSRUNUSU9OLkRPV04sIHRoaXMsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFggKyAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUoKHRoaXMubW90aGVyLmdyaWRYICsgMSkgKiB0aWxlV2lkdGgsIHRoaXMueSwgRElSRUNUSU9OLlJJR0hULCB0aGlzLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgYWxlcnQoYFBsYXllciR7dGhpcy5vd25lcklkfSBoYXMgbG9zdCFgKTtcbiAgICB9XG5cbiAgICBnZXRPd25lcigpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gZ2FtZU1hbmFnZXIubWFwLnBsYXllcnNbdGhpcy5vd25lcklkXTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQge0JhbGFuY2luZ30gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGg7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgvQmFsYW5jaW5nLnRyZWUuZGVmYXVsdEhlYWx0aCk7XG4gICAgICAgICAgICAgICAgVHJlZS5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZSgzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhdG9yLmludmVudG9yeS5naXZlSXRlbShJVEVNLldBTEwsIEJhbGFuY2luZy50cmVlLmNyb3BDb3VudCk7XG4gICAgICAgIFRyZWUub25EZXN0cm95U291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kZXN0cm95KHsgY2hpbGRyZW46IHRydWUgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hyaW5rKCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveShpbml0aWF0b3IpO1xuICAgIH1cblxuXG5cbn0iLCJleHBvcnQgY2xhc3MgVXBkYXRlU2NoZWR1bGVyIHtcblxuICAgICBjbGllbnRzOiBvYmplY3QgPSB7fTtcbiAgICAgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICByZWdpc3RlcihpZDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jbGllbnRzW2lkXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2xpZW50c1tpZF07XG4gICAgfVxuXG4gICAgIGRvU3RlcCA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNsaWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENhbGxiYWNrID0gdGhpcy5jbGllbnRzW2ldLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFjayhkZWx0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb251cyBQcm9taXNlIGZvciB3YWl0aW5nIHRoZSBnaXZlbiB0aW1lIGluIG1zXG4gICAgICogVGhpcyBkb2VzIE5PVCBwYXVzZSBvciBzdG9wIHRoZSBVcGRhdGVTY2hlZHVsZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgd2FpdCA9IG1zID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy53YWxsLmRlZmF1bHRIZWFsdGg7XG4gIFxuXG4gICAgY29uc3RydWN0b3IobW90aGVyKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSg5NDkpLCBtb3RoZXIsIHRydWUpOyAvLzk0OSBpcyBhIGJveCBzcHJpdGVcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgvQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aCk7XG4gICAgICAgICAgICAgICAgV2FsbC5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZSgzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgV2FsbC5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgKiBhcyBqc21lZGlhdGFncyBmcm9tIFwianNtZWRpYXRhZ3NcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi4vdWkvdWlDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVzaWNQbGF5ZXIge1xuXG4gICAgcGxheWxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgcGxheWxpc3RQb3NpdGlvbiA9IDA7XG4gICAgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGFydGlzdDogc3RyaW5nO1xuICAgIGNvdmVyOiBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHRtbFBhcmVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGh0bWwgPSBgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1WVDMyMyZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICAgICAgICAgICNjb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogODBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjFlMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2MTYxNjE7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllckNvdmVye31cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJUaXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJBcnRpc3R7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVySW5mb3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibXVzaWNQbGF5ZXJDb3ZlclwiIHdpZHRoPVwiODBweFwiIHNyYz1cImh0dHBzOi8vd3d3LnN1cGVyam9qby5kZS9tYWluL3BpY3MvbWVuc2EucG5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVySW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVlcCBhbmQgZnVua3kgbXVzaWNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllckFydGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWlzdGVyIGJvbWJhc3RpY1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBodG1sUGFyZW50LmlubmVySFRNTCArPSBodG1sO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpY09uJykub25jbGljayA9IHRoaXMubmV4dFRyYWNrO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNPZmYnKS5vbmNsaWNrID0gdGhpcy5wYXVzZTtcbiAgICB9XG5cbiAgICBhZGRNdXNpYyhwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdC5wdXNoKHBhdGgpO1xuICAgIH1cblxuICAgIHBsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCh0aGlzLnBsYXlsaXN0UG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIHBhdXNlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE11c2ljQXQocG9zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdFBvc2l0aW9uID0gcG9zO1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucGxheWxpc3RbcG9zXTtcbiAgICAgICAgaWYgKHBhdGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbTXVzaWMgUGxheWVyXSBDYW50IHBsYXkgbXVzaWMuIE11c2ljIGNhbnQgYmUgZm91bmQgaW4gcGxheWxpc3QhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8ocGF0aCk7XG4gICAgICAgIHRoaXMuYXVkaW8ub25lbmRlZCA9IHRoaXMubmV4dFRyYWNrO1xuXG4gICAgICAgIC8vTG9hZCBNZXRhIEluZm9cbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaChwYXRoKTtcbiAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCByZXNwLmJsb2IoKTtcblxuICAgICAgICBqc21lZGlhdGFncy5yZWFkKGJsb2IsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEudGFncyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljUGxheWVyVGl0bGUnKS5pbm5lckhUTUwgPSBkYXRhLnRhZ3MudGl0bGU7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljUGxheWVyQXJ0aXN0JykuaW5uZXJIVE1MID0gZGF0YS50YWdzLmFydGlzdDtcblxuICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGRhdGEudGFncy5waWN0dXJlO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZTY0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShpbWFnZS5kYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gXCJkYXRhOlwiICsgaW1hZ2UuZm9ybWF0ICsgXCI7YmFzZTY0LFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idG9hKGJhc2U2NFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllckNvdmVyJykuc2V0QXR0cmlidXRlKCdzcmMnLCBiYXNlNjQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2xpZGVVcCwgdWlDb25zdGFudHMubXVzaWNQbGF5ZXIuZGlzcGxheVRpbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc6KCcsIGVycm9yLnR5cGUsIGVycm9yLmluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXh0VHJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkTXVzaWNBdCgrK3RoaXMucGxheWxpc3RQb3NpdGlvbiAlIHRoaXMucGxheWxpc3QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyogU0xJREUgVVAgKi9cbiAgICBzbGlkZVVwKGR1cmF0aW9uID0gNTAwKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljUGxheWVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIC8qIFNMSURFIERPV04gKi9cbiAgICBzbGlkZURvd24oZHVyYXRpb24gPSA1MDApIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXVzaWNQbGF5ZXJcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheTtcbiAgICAgICAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gXCIwXCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0YXJnZXQuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xuICAgICAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiXG5pbXBvcnQgUGxheWVyTWVudSBmcm9tIFwiLi9wbGF5ZXJNZW51XCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXJNZW51czogUGxheWVyTWVudVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51V2lkdGggPSB1aUNvbnN0YW50cy5zdGFnZS53aWR0aCAvIHBsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTWVudSA9IG5ldyBQbGF5ZXJNZW51KHBsYXllcnNbaV0sIG1lbnVXaWR0aCwgbWVudVdpZHRoICogaSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck1lbnVzLnB1c2gocGxheWVyTWVudSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBsYXllck1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQ29udGFpbmVyLCBSZWN0YW5nbGUsIEdyYXBoaWNzLCBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuL3VpQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4uL21vZGVsL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuLi9tb2RlbC9JdGVtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNZW51IGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHBsYXllcjogUGxheWVyO1xuICAgIGFjdGlvbkljb246U3ByaXRlO1xuICAgIHRvbWF0b1Byb2plY3RpbGVTcHJpdGVzOlNwcml0ZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgd2lkdGg6IG51bWJlciwgeDpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgICAgICAgdGhpcy55ID0gdWlDb25zdGFudHMuc3RhZ2UuaGVpZ2h0IC0gdWlDb25zdGFudHMubWVudUJhci5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG5cbiAgICAgICAgbGV0IGJnU2hhcGUgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgYmdTaGFwZS5iZWdpbkZpbGwocGxheWVyLmNvbG9yKTtcbiAgICAgICAgYmdTaGFwZS5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgdWlDb25zdGFudHMubWVudUJhci5oZWlnaHQpO1xuICAgICAgICBiZ1NoYXBlLmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChiZ1NoYXBlKTtcblxuICAgICAgICBsZXQgYWkgPSBuZXcgU3ByaXRlKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShwbGF5ZXIucGxhY2VNb2RlKSk7XG4gICAgICAgIGFpLnNjYWxlLnNldCh1aUNvbnN0YW50cy5tZW51QmFyLmljb24uc2NhbGUpO1xuICAgICAgICBhaS54ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0IC0gYWkud2lkdGgpIC8gMlxuICAgICAgICBhaS55ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0IC0gYWkud2lkdGgpIC8gMlxuICAgICAgICB0aGlzLmFkZENoaWxkKGFpKTtcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uID0gYWk7XG5cbiAgICAgICAgLy9DcmVhdGUgdG9tYXRvIHNwcml0ZXNcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMud2lkdGggLSAoKHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwYWNpbmcgKyB1aUNvbnN0YW50cy5tZW51QmFyLmludmVudG9yeS5zcHJpdGVTaXplXG4gICAgICAgICAgICApICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuaW52ZW50b3J5TGltaXQpXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPCBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5pbnZlbnRvcnlMaW1pdDtpKyspe1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKElURU0uVE9NQVRPX1BST0pFQ1RJTEUpKTtcbiAgICAgICAgICAgIHNwcml0ZS54ID0gKHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwcml0ZVNpemUgKyB1aUNvbnN0YW50cy5tZW51QmFyLmludmVudG9yeS5zcGFjaW5nKSAqIGkgKyBvZmZzZXRYO1xuICAgICAgICAgICAgc3ByaXRlLnkgPSA1O1xuICAgICAgICAgICAgdGhpcy50b21hdG9Qcm9qZWN0aWxlU3ByaXRlcy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJNZW51XCIrcGxheWVyLnBsYXllcklkLHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIGRvU3RlcCA9ICgpPT57XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbi50ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRoaXMucGxheWVyLnBsYWNlTW9kZSk7XG4gICAgICAgIC8vZGlzcGxheSB0b21hdG9lc1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzLmxlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgICAgICBpZihpbmRleCA8IHRoaXMucGxheWVyLmludmVudG9yeS50b21hdG9fcHJvamVjdGlsZSl7XG4gICAgICAgICAgICAgICAgdGhpcy50b21hdG9Qcm9qZWN0aWxlU3ByaXRlc1tpbmRleF0udGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzW2luZGV4XS50aW50ID0gMHgyMjIyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJjb25zdCB1aUNvbnN0YW50cyA9IHtcbiAgICBtZW51QmFyOiB7XG4gICAgICAgIGhlaWdodDogMTE1LFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICBzY2FsZTogMyxcbiAgICAgICAgfSxcbiAgICAgICAgaW52ZW50b3J5OiB7XG4gICAgICAgICAgICBzcGFjaW5nOiAzLFxuICAgICAgICAgICAgc3ByaXRlU2l6ZSA6IDE2LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICB3aWR0aDogMTAyMCxcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgfSxcbiAgICBtdXNpY1BsYXllcjp7XG4gICAgICAgIGRpc3BsYXlUaW1lIDogMzAwMCxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9