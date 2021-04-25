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
    player: {
        speed: 4,
        hitDamage: 0.1,
        knockdown: 2000,
    },
    tower: {
        defaultHealth: 10,
        cooldown: 6 //How often this Object wiggles until it is again vulnerable
    },
};
Balancing[_Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].WALL] = {
    inventoryLimit: 10,
    defaultHealth: 3,
};
Balancing[_Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TNT_PUMPKIN] = {
    inventoryLimit: 10,
    explosionDamage: 1.5,
};
Balancing[_Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PROJECTILE] = {
    speed: 7,
    hitDamage: 0.3,
    inventoryLimit: 10,
};
Balancing[_Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PLANT] = {
    growStepTime: 5000,
    crops: [
        { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PROJECTILE, count: 2 },
        { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TOMATO_PLANT, count: 4 },
    ],
    inventoryLimit: 10,
    startSeeds: 5,
};
Balancing[_Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].PUMPKIN_PLANT] = {
    growStepTime: 10000,
    crops: [
        { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].TNT_PUMPKIN, count: 2 },
        { type: _Items__WEBPACK_IMPORTED_MODULE_0__["ITEM"].PUMPKIN_PLANT, count: 3 },
    ],
    inventoryLimit: 10,
    startSeeds: 5,
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
        this.tomato_plant = _Balancing__WEBPACK_IMPORTED_MODULE_0__["Balancing"].tomato_plant.startSeeds;
        this.pumpkin_plant = _Balancing__WEBPACK_IMPORTED_MODULE_0__["Balancing"].pumpkin_plant.startSeeds;
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
        _this.crops = _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].pumpkin_plant.crops;
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_3__["UpdateScheduler"].wait(_Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].pumpkin_plant.growStepTime)];
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
                            tile.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_3__["HitEvent"](hitEvent.initiator, _Balancing__WEBPACK_IMPORTED_MODULE_1__["Balancing"].tnt_pumpkin.explosionDamage));
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
        _this.crops = _Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomato_plant.crops;
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
                        return [4 /*yield*/, _UpdateScheduler__WEBPACK_IMPORTED_MODULE_2__["UpdateScheduler"].wait(_Balancing__WEBPACK_IMPORTED_MODULE_3__["Balancing"].tomato_plant.growStepTime)];
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
                _this.vy = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomato_projectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].DOWN:
                _this.vy = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomato_projectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].LEFT:
                _this.vx = -1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomato_projectile.speed;
                break;
            case _Player__WEBPACK_IMPORTED_MODULE_5__["DIRECTION"].RIGHT:
                _this.vx = 1 * _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomato_projectile.speed;
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
                            collider.onHit(new _HitEvent__WEBPACK_IMPORTED_MODULE_4__["HitEvent"](this.owner, _Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"].tomato_projectile.hitDamage));
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _model_Balancing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Balancing */ "./src/model/Balancing.ts");
/* harmony import */ var _model_Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Items */ "./src/model/Items.ts");
/* harmony import */ var _uiConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiConstants */ "./src/ui/uiConstants.ts");
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
        _this.inventorySpritesList = [];
        _this.doStep = function () {
            _this.updatePlaceMode();
            _this.updateInventoryState();
        };
        _this.player = player;
        _this.y = _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].stage.height - _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.height;
        _this.x = x;
        //Drae background
        var bgShape = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        bgShape.beginFill(player.color);
        bgShape.drawRect(0, 0, width, _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.height);
        bgShape.endFill();
        _this.addChild(bgShape);
        //Create placeMode sprite
        var ai = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture(player.placeMode));
        ai.scale.set(_uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.icon.scale);
        ai.x = (_uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.height - ai.width) / 2;
        ai.y = (_uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.height - ai.width) / 2;
        _this.addChild(ai);
        _this.actionIcon = ai;
        //Create inventory sprites
        var vSpace = _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.verticalSpacing;
        var spriteSize = _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.spriteSize;
        var yPos = vSpace;
        _this.createInventorySprites(_model_Items__WEBPACK_IMPORTED_MODULE_3__["ITEM"].TOMATO_PROJECTILE, yPos);
        _this.createInventorySprites(_model_Items__WEBPACK_IMPORTED_MODULE_3__["ITEM"].TNT_PUMPKIN, yPos += vSpace + spriteSize);
        _this.createInventorySprites(_model_Items__WEBPACK_IMPORTED_MODULE_3__["ITEM"].WALL, yPos += vSpace + spriteSize);
        _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].updateScheduler.register("playerMenu" + player.playerId, _this.doStep);
        return _this;
    }
    PlayerMenu.prototype.createInventorySprites = function (item, y) {
        var offsetX = this.width - ((_uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.horizontalSpacing + _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.spriteSize) * _model_Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"][item].inventoryLimit);
        var invSprites = { item: item, sprites: [] };
        for (var i = 0; i < _model_Balancing__WEBPACK_IMPORTED_MODULE_2__["Balancing"][item].inventoryLimit; i++) {
            var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture(item));
            sprite.x = (_uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.spriteSize + _uiConstants__WEBPACK_IMPORTED_MODULE_4__["default"].menuBar.inventory.horizontalSpacing) * i + offsetX;
            sprite.y = y;
            invSprites.sprites.push(sprite);
            this.addChild(sprite);
        }
        this.inventorySpritesList.push(invSprites);
    };
    PlayerMenu.prototype.updateInventoryState = function () {
        for (var _i = 0, _a = this.inventorySpritesList; _i < _a.length; _i++) {
            var invSprite = _a[_i];
            for (var index = 0; index < invSprite.sprites.length; index++) {
                if (index < this.player.inventory[invSprite.item]) {
                    invSprite.sprites[index].tint = 0xFFFFFF;
                }
                else {
                    invSprite.sprites[index].tint = 0x222222;
                }
            }
        }
    };
    PlayerMenu.prototype.updatePlaceMode = function () {
        this.actionIcon.texture = _index__WEBPACK_IMPORTED_MODULE_1__["gameManager"].atlasSpritesheet.getTexture(this.player.placeMode);
    };
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
            horizontalSpacing: 3,
            verticalSpacing: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9qc21lZGlhdGFncy9kaXN0L2pzbWVkaWF0YWdzLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9BdGxhc1Nwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQmFsYW5jaW5nLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0l0ZW1zLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QdW1wa2luUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9TdGF0dXNCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub3dlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbXVzaWMvTXVzaWNQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy91aS9tZW51QmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsb0RBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGdEQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOzs7QUFHaEU7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLGdFQUFnRTtBQUNuRTs7QUFFQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTixpREFBaUQsMEVBQTBFLGFBQWEsRUFBRSxxQ0FBcUM7O0FBRS9LLHVDQUF1Qyx1QkFBdUIsdUZBQXVGLEVBQUUsYUFBYTs7QUFFcEssNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTNNLDBDQUEwQywrREFBK0QsMkVBQTJFLEVBQUUseUVBQXlFLGVBQWUsc0RBQXNELEVBQUUsRUFBRSx1REFBdUQ7O0FBRS9YLGdDQUFnQyw0RUFBNEUsaUJBQWlCLFVBQVUsR0FBRyw4QkFBOEI7O0FBRXhLOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRkFBMkY7O0FBRTNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsRUFBRSxvRUFBb0U7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRTdWLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLGlEQUFpRCwwRUFBMEUsYUFBYSxFQUFFLHFDQUFxQzs7QUFFL0ssdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7OztBQUdoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdRQUFnUTs7QUFFaFE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEVBQUUsNkNBQTZDO0FBQ2hEOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQSxxREFBcUQ7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUEscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLGdQQUFnUCxFQUFFLEdBQUc7QUFDeFAsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUN4c0dEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUErQztBQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDhEQUFXLEVBQUUsQ0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSDs7Ozs7Ozs7Ozs7OztBQ0xy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QUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7aUJBQzVDO3FCQUNJO29CQUNELFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztpQkFDNUM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVPLG9DQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsa0RBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBM0V1QyxpREFBUyxHQTJFaEQ7Ozs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQUEsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixVQUFVLEVBQUcsRUFBRTtTQUNsQjtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0QsV0FBVyxFQUFDO1FBQ1IsV0FBVyxFQUFHLElBQUk7S0FDckI7Q0FDSjtBQUVjLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7OztBQ3JCM0Isc0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuanNtZWRpYXRhZ3MgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBYTUxIdHRwUmVxdWVzdDtcblxufSx7fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIEFycmF5RmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoQXJyYXlGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBBcnJheUZpbGVSZWFkZXIoYXJyYXkpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXJyYXlGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFycmF5RmlsZVJlYWRlcikuY2FsbCh0aGlzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2FycmF5XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3NpemVcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLl9hcnJheSA9IGFycmF5O1xuICAgIF90aGlzLl9zaXplID0gYXJyYXkubGVuZ3RoO1xuICAgIF90aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXJyYXlGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoY2FsbGJhY2tzKSB7XG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJhbmdlKHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICBpZiAob2Zmc2V0ID49IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPZmZzZXQgXCIgKyBvZmZzZXQgKyBcIiBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2FycmF5W29mZnNldF07XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZmlsZSkgfHwgdHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBCdWZmZXIuaXNCdWZmZXIoZmlsZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFycmF5RmlsZVJlYWRlcjtcbn0oTWVkaWFGaWxlUmVhZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheUZpbGVSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENodW5rZWRGaWxlRGF0YSA9IHJlcXVpcmUoJy4vQ2h1bmtlZEZpbGVEYXRhJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgQmxvYkZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYUZpbGVSZWFkZXIpIHtcbiAgX2luaGVyaXRzKEJsb2JGaWxlUmVhZGVyLCBfTWVkaWFGaWxlUmVhZGVyKTtcblxuICBmdW5jdGlvbiBCbG9iRmlsZVJlYWRlcihibG9iKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJsb2JGaWxlUmVhZGVyKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEJsb2JGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfYmxvYlwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9maWxlRGF0YVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX2Jsb2IgPSBibG9iO1xuICAgIF90aGlzLl9maWxlRGF0YSA9IG5ldyBDaHVua2VkRmlsZURhdGEoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQmxvYkZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9pbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KGNhbGxiYWNrcykge1xuICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX2Jsb2Iuc2l6ZTtcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyBpc24ndCBhd2FyZSBvZiBtb3pTbGljZSBvciB3ZWJraXRTbGljZVxuXG4gICAgICB2YXIgYmxvYlNsaWNlID0gdGhpcy5fYmxvYi5zbGljZSB8fCB0aGlzLl9ibG9iLm1velNsaWNlIHx8IHRoaXMuX2Jsb2Iud2Via2l0U2xpY2U7XG4gICAgICB2YXIgYmxvYiA9IGJsb2JTbGljZS5jYWxsKHRoaXMuX2Jsb2IsIHJhbmdlWzBdLCByYW5nZVsxXSArIDEpO1xuICAgICAgdmFyIGJyb3dzZXJGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgYnJvd3NlckZpbGVSZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJyb3dzZXJGaWxlUmVhZGVyLnJlc3VsdCk7XG5cbiAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YShyYW5nZVswXSwgaW50QXJyYXkpO1xuXG4gICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgIH07XG5cbiAgICAgIGJyb3dzZXJGaWxlUmVhZGVyLm9uZXJyb3IgPSBicm93c2VyRmlsZVJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2JcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBicm93c2VyRmlsZVJlYWRlci5lcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBicm93c2VyRmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWxlRGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIEJsb2IgIT09IFwidW5kZWZpbmVkXCIgJiYgZmlsZSBpbnN0YW5jZW9mIEJsb2IgfHwgLy8gRmlsZSBleHRlbmRzIEJsb2IgYnV0IGl0IHNlZW1zIHRoYXQgRmlsZSBpbnN0YW5jZW9mIEJsb2IgZG9lc24ndFxuICAgICAgLy8gcXVpdGUgd29yayBhcyBleHBlY3RlZCBpbiBDb3Jkb3ZhL1Bob25lR2FwLlxuICAgICAgdHlwZW9mIEZpbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZmlsZSBpbnN0YW5jZW9mIEZpbGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJsb2JGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2JGaWxlUmVhZGVyO1xuXG59LHtcIi4vQ2h1bmtlZEZpbGVEYXRhXCI6NSxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTF9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgZmlsZSB0aGF0IG1pZ2h0IG5vdCBoYXZlIGFsbCBpdHMgZGF0YSBsb2FkZWQgeWV0LlxuICogSXQgaXMgdXNlZCB3aGVuIGxvYWRpbmcgdGhlIGVudGlyZSBmaWxlIGlzIG5vdCBhbiBvcHRpb24gYmVjYXVzZSBpdCdzIHRvb1xuICogZXhwZW5zaXZlLiBJbnN0ZWFkLCBwYXJ0cyBvZiB0aGUgZmlsZSBhcmUgbG9hZGVkIGFuZCBhZGRlZCBvbmx5IHdoZW4gbmVlZGVkLlxuICogRnJvbSBhIHJlYWRpbmcgcG9pbnQgb2YgdmlldyBpcyBhcyBpZiB0aGUgZW50aXJlIGZpbGUgaXMgbG9hZGVkLiBUaGVcbiAqIGV4Y2VwdGlvbiBpcyB3aGVuIHRoZSBkYXRhIGlzIG5vdCBhdmFpbGFibGUgeWV0LCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIFRoaXMgY2xhc3MgZG9lcyBub3QgbG9hZCB0aGUgZGF0YSwgaXQganVzdCBtYW5hZ2VzIGl0LiBJdCBwcm92aWRlcyBvcGVyYXRpb25zXG4gKiB0byBhZGQgYW5kIHJlYWQgZGF0YSBmcm9tIHRoZSBmaWxlLlxuICpcbiAqIFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE5PVF9GT1VORCA9IC0xO1xuXG52YXIgQ2h1bmtlZEZpbGVEYXRhID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKENodW5rZWRGaWxlRGF0YSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiTk9UX0ZPVU5EXCIsXG4gICAgLy8gJEZsb3dJc3N1ZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBDaHVua2VkRmlsZURhdGEoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rZWRGaWxlRGF0YSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZmlsZURhdGFcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2ZpbGVEYXRhID0gW107XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgZGF0YSB0byB0aGUgZmlsZSBzdG9yYWdlIGF0IGEgc3BlY2lmaWMgb2Zmc2V0LlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDaHVua2VkRmlsZURhdGEsIFt7XG4gICAga2V5OiBcImFkZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGF0YShvZmZzZXQsIGRhdGEpIHtcbiAgICAgIHZhciBvZmZzZXRFbmQgPSBvZmZzZXQgKyBkYXRhLmxlbmd0aCAtIDE7XG5cbiAgICAgIHZhciBjaHVua1JhbmdlID0gdGhpcy5fZ2V0Q2h1bmtSYW5nZShvZmZzZXQsIG9mZnNldEVuZCk7XG5cbiAgICAgIGlmIChjaHVua1JhbmdlLnN0YXJ0SXggPT09IE5PVF9GT1VORCkge1xuICAgICAgICB0aGlzLl9maWxlRGF0YS5zcGxpY2UoY2h1bmtSYW5nZS5pbnNlcnRJeCB8fCAwLCAwLCB7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBkYXRhIHRvIGFkZCBjb2xsaWRlcyB3aXRoIGV4aXN0aW5nIGNodW5rcyB3ZSBwcmVwZW5kIGFuZFxuICAgICAgICAvLyBhcHBlbmQgZGF0YSBmcm9tIHRoZSBoYWxmIGNvbGxpZGluZyBjaHVua3MgdG8gbWFrZSB0aGUgY29sbGlzaW9uIGF0XG4gICAgICAgIC8vIDEwMCUuIFRoZSBuZXcgZGF0YSBjYW4gdGhlbiByZXBsYWNlIGFsbCB0aGUgY29sbGlkaW5nIGNodW5rZXMuXG4gICAgICAgIHZhciBmaXJzdENodW5rID0gdGhpcy5fZmlsZURhdGFbY2h1bmtSYW5nZS5zdGFydEl4XTtcbiAgICAgICAgdmFyIGxhc3RDaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2NodW5rUmFuZ2UuZW5kSXhdO1xuICAgICAgICB2YXIgbmVlZHNQcmVwZW5kID0gb2Zmc2V0ID4gZmlyc3RDaHVuay5vZmZzZXQ7XG4gICAgICAgIHZhciBuZWVkc0FwcGVuZCA9IG9mZnNldEVuZCA8IGxhc3RDaHVuay5vZmZzZXQgKyBsYXN0Q2h1bmsuZGF0YS5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgY2h1bmsgPSB7XG4gICAgICAgICAgb2Zmc2V0OiBNYXRoLm1pbihvZmZzZXQsIGZpcnN0Q2h1bmsub2Zmc2V0KSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5lZWRzUHJlcGVuZCkge1xuICAgICAgICAgIHZhciBzbGljZWREYXRhID0gdGhpcy5fc2xpY2VEYXRhKGZpcnN0Q2h1bmsuZGF0YSwgMCwgb2Zmc2V0IC0gZmlyc3RDaHVuay5vZmZzZXQpO1xuXG4gICAgICAgICAgY2h1bmsuZGF0YSA9IHRoaXMuX2NvbmNhdERhdGEoc2xpY2VkRGF0YSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVlZHNBcHBlbmQpIHtcbiAgICAgICAgICAvLyBVc2UgdGhlIGxhc3RDaHVuayBiZWNhdXNlIHRoZSBzbGljZSBsb2dpYyBpcyBlYXNpZXIgdG8gaGFuZGxlLlxuICAgICAgICAgIHZhciBzbGljZWREYXRhID0gdGhpcy5fc2xpY2VEYXRhKGNodW5rLmRhdGEsIDAsIGxhc3RDaHVuay5vZmZzZXQgLSBjaHVuay5vZmZzZXQpO1xuXG4gICAgICAgICAgY2h1bmsuZGF0YSA9IHRoaXMuX2NvbmNhdERhdGEoc2xpY2VkRGF0YSwgbGFzdENodW5rLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsZURhdGEuc3BsaWNlKGNodW5rUmFuZ2Uuc3RhcnRJeCwgY2h1bmtSYW5nZS5lbmRJeCAtIGNodW5rUmFuZ2Uuc3RhcnRJeCArIDEsIGNodW5rKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2NvbmNhdERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbmNhdERhdGEoZGF0YUEsIGRhdGFCKSB7XG4gICAgICAvLyBUeXBlZEFycmF5cyBkb24ndCBzdXBwb3J0IGNvbmNhdC5cbiAgICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3ICYmIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhQSkpIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGFBYW5kQiBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcbiAgICAgICAgdmFyIGRhdGFBYW5kQiA9IG5ldyBkYXRhQS5jb25zdHJ1Y3RvcihkYXRhQS5sZW5ndGggKyBkYXRhQi5sZW5ndGgpOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuXG4gICAgICAgIGRhdGFBYW5kQi5zZXQoZGF0YUEsIDApOyAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgc3RyaW5nIGJ1dCBpdCdzIG5vdFxuXG4gICAgICAgIGRhdGFBYW5kQi5zZXQoZGF0YUIsIGRhdGFBLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBkYXRhQWFuZEI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YUFhbmRCIGlzIGEgVHlwZWRBcnJheSBidXQgaXQncyBub3RcbiAgICAgICAgcmV0dXJuIGRhdGFBLmNvbmNhdChkYXRhQik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9zbGljZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NsaWNlRGF0YShkYXRhLCBiZWdpbiwgZW5kKSB7XG4gICAgICAvLyBTb21lIFR5cGVBcnJheSBpbXBsZW1lbnRhdGlvbnMgZG8gbm90IHN1cHBvcnQgc2xpY2UgeWV0LlxuICAgICAgaWYgKGRhdGEuc2xpY2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyB0aGlua3MgZGF0YSBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcbiAgICAgICAgcmV0dXJuIGRhdGEuc3ViYXJyYXkoYmVnaW4sIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBjaHVuayByYW5nZSB0aGF0IG92ZXJsYXBzIHRoZSBbb2Zmc2V0U3RhcnQtMSxvZmZzZXRFbmQrMV0gcmFuZ2UuXG4gICAgICogV2hlbiBhIGNodW5rIGlzIGFkamFjZW50IHRvIHRoZSBvZmZzZXQgd2Ugc3RpbGwgY29uc2lkZXIgaXQgcGFydCBvZiB0aGVcbiAgICAgKiByYW5nZSAodGhpcyBpcyB0aGUgc2l0dWF0aW9uIG9mIG9mZnNldFN0YXJ0LTEgb3Igb2Zmc2V0RW5kKzEpLlxuICAgICAqIFdoZW4gbm8gY2h1bmtzIGFyZSBmb3VuZCBgaW5zZXJ0SXhgIGRlbm90ZXMgdGhlIGluZGV4IHdoZXJlIHRoZSBkYXRhXG4gICAgICogc2hvdWxkIGJlIGluc2VydGVkIGluIHRoZSBkYXRhIGxpc3QgKHN0YXJ0SXggPT0gTk9UX0ZPVU5EIGFuZCBlbmRJWCA9PVxuICAgICAqIE5PVF9GT1VORCkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0Q2h1bmtSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q2h1bmtSYW5nZShvZmZzZXRTdGFydCwgb2Zmc2V0RW5kKSB7XG4gICAgICB2YXIgc3RhcnRDaHVua0l4ID0gTk9UX0ZPVU5EO1xuICAgICAgdmFyIGVuZENodW5rSXggPSBOT1RfRk9VTkQ7XG4gICAgICB2YXIgaW5zZXJ0SXggPSAwOyAvLyBDb3VsZCB1c2UgYmluYXJ5IHNlYXJjaCBidXQgbm90IGV4cGVjdGluZyB0aGF0IG1hbnkgYmxvY2tzIHRvIGV4aXN0LlxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrLCBpbnNlcnRJeCA9IGkpIHtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0U3RhcnQgPSB0aGlzLl9maWxlRGF0YVtpXS5vZmZzZXQ7XG4gICAgICAgIHZhciBjaHVua09mZnNldEVuZCA9IGNodW5rT2Zmc2V0U3RhcnQgKyB0aGlzLl9maWxlRGF0YVtpXS5kYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAob2Zmc2V0RW5kIDwgY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICAvLyBUaGlzIG9mZnNldCByYW5nZSBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgY2h1bmtzLlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIElmIGl0IGlzIGFkamFjZW50IHdlIHN0aWxsIGNvbnNpZGVyIGl0IHBhcnQgb2YgdGhlIHJhbmdlIGJlY2F1c2VcbiAgICAgICAgLy8gd2UncmUgZ29pbmcgZW5kIHVwIHdpdGggYSBzaW5nbGUgYmxvY2sgd2l0aCBhbGwgY29udGlndW91cyBkYXRhLlxuXG5cbiAgICAgICAgaWYgKG9mZnNldFN0YXJ0IDw9IGNodW5rT2Zmc2V0RW5kICsgMSAmJiBvZmZzZXRFbmQgPj0gY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICBzdGFydENodW5rSXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IC8vIE5vIHN0YXJ0aW5nIGNodW5rIHdhcyBmb3VuZCwgbWVhbmluZyB0aGF0IHRoZSBvZmZzZXQgaXMgZWl0aGVyIGJlZm9yZVxuICAgICAgLy8gb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RvcmVkIGNodW5rcy5cblxuXG4gICAgICBpZiAoc3RhcnRDaHVua0l4ID09PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGFydEl4OiBOT1RfRk9VTkQsXG4gICAgICAgICAgZW5kSXg6IE5PVF9GT1VORCxcbiAgICAgICAgICBpbnNlcnRJeDogaW5zZXJ0SXhcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gRmluZCB0aGUgZW5kaW5nIGNodW5rLlxuXG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydENodW5rSXg7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRTdGFydCA9IHRoaXMuX2ZpbGVEYXRhW2ldLm9mZnNldDtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0RW5kID0gY2h1bmtPZmZzZXRTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPj0gY2h1bmtPZmZzZXRTdGFydCAtIDEpIHtcbiAgICAgICAgICAvLyBDYW5kaWRhdGUgZm9yIHRoZSBlbmQgY2h1bmssIGl0IGRvZXNuJ3QgbWVhbiBpdCBpcyB5ZXQuXG4gICAgICAgICAgZW5kQ2h1bmtJeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0RW5kIDw9IGNodW5rT2Zmc2V0RW5kICsgMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRDaHVua0l4ID09PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgZW5kQ2h1bmtJeCA9IHN0YXJ0Q2h1bmtJeDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnRJeDogc3RhcnRDaHVua0l4LFxuICAgICAgICBlbmRJeDogZW5kQ2h1bmtJeFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzRGF0YVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RhdGFSYW5nZShvZmZzZXRTdGFydCwgb2Zmc2V0RW5kKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpbGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2ldO1xuXG4gICAgICAgIGlmIChvZmZzZXRFbmQgPCBjaHVuay5vZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0U3RhcnQgPj0gY2h1bmsub2Zmc2V0ICYmIG9mZnNldEVuZCA8IGNodW5rLm9mZnNldCArIGNodW5rLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgdmFyIGRhdGFDaHVuaztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGF0YUNodW5rU3RhcnQgPSB0aGlzLl9maWxlRGF0YVtpXS5vZmZzZXQ7XG4gICAgICAgIHZhciBkYXRhQ2h1bmtFbmQgPSBkYXRhQ2h1bmtTdGFydCArIHRoaXMuX2ZpbGVEYXRhW2ldLmRhdGEubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAob2Zmc2V0ID49IGRhdGFDaHVua1N0YXJ0ICYmIG9mZnNldCA8PSBkYXRhQ2h1bmtFbmQpIHtcbiAgICAgICAgICBkYXRhQ2h1bmsgPSB0aGlzLl9maWxlRGF0YVtpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YUNodW5rKSB7XG4gICAgICAgIHJldHVybiBkYXRhQ2h1bmsuZGF0YVtvZmZzZXQgLSBkYXRhQ2h1bmsub2Zmc2V0XTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2Zmc2V0IFwiICsgb2Zmc2V0ICsgXCIgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cIik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENodW5rZWRGaWxlRGF0YTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaHVua2VkRmlsZURhdGE7XG5cbn0se31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG4vKiBUaGUgZmlyc3QgNCBieXRlcyBvZiBhIEZMQUMgZmlsZSBkZXNjcmliZXMgdGhlIGhlYWRlciBmb3IgdGhlIGZpbGUuIElmIHRoZXNlXG4gKiBieXRlcyByZXNwZWN0aXZlbHkgcmVhZCBcImZMYUNcIiwgd2UgY2FuIGRldGVybWluZSBpdCBpcyBhIEZMQUMgZmlsZS5cbiAqL1xuXG5cbnZhciBGTEFDX0hFQURFUl9TSVpFID0gNDtcbi8qIEZMQUMgbWV0YWRhdGEgaXMgc3RvcmVkIGluIGJsb2NrcyBjb250YWluaW5nIGRhdGEgcmFuZ2luZyBmcm9tIFNUUkVBTUlORk8gdG9cbiAqIFZPUkJJU19DT01NRU5ULCB3aGljaCBpcyB3aGF0IHdlIHdhbnQgdG8gd29yayB3aXRoLlxuICpcbiAqIEVhY2ggbWV0YWRhdGEgaGVhZGVyIGlzIDQgYnl0ZXMgbG9uZywgd2l0aCB0aGUgZmlyc3QgYnl0ZSBkZXRlcm1pbmluZyB3aGV0aGVyXG4gKiBpdCBpcyB0aGUgbGFzdCBtZXRhZGF0YSBibG9jayBiZWZvcmUgdGhlIGF1ZGlvIGRhdGEgYW5kIHdoYXQgdGhlIGJsb2NrIHR5cGUgaXMuXG4gKiBUaGlzIGZpcnN0IGJ5dGUgY2FuIGZ1cnRoZXIgYmUgc3BsaXQgaW50byA4IGJpdHMsIHdpdGggdGhlIGZpcnN0IGJpdCBiZWluZyB0aGVcbiAqIGxhc3QtbWV0YWRhdGEtYmxvY2sgZmxhZywgYW5kIHRoZSBsYXN0IHRocmVlIGJpdHMgYmVpbmcgdGhlIGJsb2NrIHR5cGUuXG4gKlxuICogU2luY2UgdGhlIHNwZWNpZmljYXRpb24gc3RhdGVzIHRoYXQgdGhlIGRlY2ltYWwgdmFsdWUgZm9yIGEgVk9SQklTX0NPTU1FTlQgYmxvY2tcbiAqIHR5cGUgaXMgNCwgdGhlIHR3byBwb3NzaWJpbGl0aWVzIGZvciB0aGUgY29tbWVudCBibG9jayBoZWFkZXIgdmFsdWVzIGFyZTpcbiAqIC0gMDAwMDAxMDAgKE5vdCBhIGxhc3QgbWV0YWRhdGEgY29tbWVudCBibG9jaywgdmFsdWUgb2YgNClcbiAqIC0gMTAwMDAxMDAgKEEgbGFzdCBtZXRhZGF0YSBjb21tZW50IGJsb2NrLCB2YWx1ZSBvZiAxMzIpXG4gKlxuICogU2ltaWxhcmx5LCB0aGUgcGljdHVyZSBibG9jayBoZWFkZXIgdmFsdWVzIGFyZSA2IGFuZCAxMjguXG4gKlxuICogQWxsIHZhbHVlcyBmb3IgTUVUQURBVEFfQkxPQ0tfSEVBREVSIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogaHR0cHM6Ly94aXBoLm9yZy9mbGFjL2Zvcm1hdC5odG1sI21ldGFkYXRhX2Jsb2NrX2hlYWRlclxuICovXG5cbnZhciBDT01NRU5UX0hFQURFUlMgPSBbNCwgMTMyXTtcbnZhciBQSUNUVVJFX0hFQURFUlMgPSBbNiwgMTM0XTsgLy8gVGhlc2UgYXJlIHRoZSBwb3NzaWJsZSBpbWFnZSB0eXBlcyBhcyBkZWZpbmVkIGJ5IHRoZSBGTEFDIHNwZWNpZmljYXRpb24uXG5cbnZhciBJTUFHRV9UWVBFUyA9IFtcIk90aGVyXCIsIFwiMzJ4MzIgcGl4ZWxzICdmaWxlIGljb24nIChQTkcgb25seSlcIiwgXCJPdGhlciBmaWxlIGljb25cIiwgXCJDb3ZlciAoZnJvbnQpXCIsIFwiQ292ZXIgKGJhY2spXCIsIFwiTGVhZmxldCBwYWdlXCIsIFwiTWVkaWEgKGUuZy4gbGFiZWwgc2lkZSBvZiBDRClcIiwgXCJMZWFkIGFydGlzdC9sZWFkIHBlcmZvcm1lci9zb2xvaXN0XCIsIFwiQXJ0aXN0L3BlcmZvcm1lclwiLCBcIkNvbmR1Y3RvclwiLCBcIkJhbmQvT3JjaGVzdHJhXCIsIFwiQ29tcG9zZXJcIiwgXCJMeXJpY2lzdC90ZXh0IHdyaXRlclwiLCBcIlJlY29yZGluZyBMb2NhdGlvblwiLCBcIkR1cmluZyByZWNvcmRpbmdcIiwgXCJEdXJpbmcgcGVyZm9ybWFuY2VcIiwgXCJNb3ZpZS92aWRlbyBzY3JlZW4gY2FwdHVyZVwiLCBcIkEgYnJpZ2h0IGNvbG91cmVkIGZpc2hcIiwgXCJJbGx1c3RyYXRpb25cIiwgXCJCYW5kL2FydGlzdCBsb2dvdHlwZVwiLCBcIlB1Ymxpc2hlci9TdHVkaW8gbG9nb3R5cGVcIl07XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgTWVkaWFUYWdSZWFkZXIgdGhhdCBwYXJzZXMgRkxBQyB0YWdzLlxuICovXG52YXIgRkxBQ1RhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhGTEFDVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIEZMQUNUYWdSZWFkZXIoKSB7XG4gICAgdmFyIF9nZXRQcm90b3R5cGVPZjI7XG5cbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRkxBQ1RhZ1JlYWRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2dldFByb3RvdHlwZU9mMiA9IF9nZXRQcm90b3R5cGVPZihGTEFDVGFnUmVhZGVyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2NvbW1lbnRPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcGljdHVyZU9mZnNldFwiLCB2b2lkIDApO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZMQUNUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGxvYWQgdGhlIGRhdGEgZnJvbSB0aGUgZmlsZS5cbiAgICAgKlxuICAgICAqIFRvIGJlZ2luIHByb2Nlc3NpbmcgdGhlIGJsb2NrcywgdGhlIG5leHQgNCBieXRlcyBhZnRlciB0aGUgaW5pdGlhbCA0IGJ5dGVzXG4gICAgICogKGJ5dGVzIDQgdGhyb3VnaCA3KSBhcmUgbG9hZGVkLiBGcm9tIHRoZXJlLCB0aGUgcmVzdCBvZiB0aGUgbG9hZGluZyBwcm9jZXNzXG4gICAgICogaXMgcGFzc2VkIG9uIHRvIHRoZSBfbG9hZEJsb2NrIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGhhbmRsZSB0aGUgcmVzdCBvZiB0aGVcbiAgICAgKiBwYXJzaW5nIGZvciB0aGUgbWV0YWRhdGEgYmxvY2tzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IG1lZGlhRmlsZVJlYWRlciAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdXNlZCB0byBwYXJzZSB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge0xvYWRDYWxsYmFja1R5cGV9IGNhbGxiYWNrcyAtIFRoZSBjYWxsYmFjayB0byBjYWxsIG9uY2UgX2xvYWREYXRhIGlzIGNvbXBsZXRlZC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFs0LCA3XSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCA0LCBjYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3BlY2lhbCBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIHRvIHBhcnNlIHRoZSBkaWZmZXJlbnQgRkxBQyBibG9ja3MuXG4gICAgICpcbiAgICAgKiBUaGUgRkxBQyBzcGVjaWZpY2F0aW9uIGRvZXNuJ3Qgc3BlY2lmeSBhIHNwZWNpZmljIGxvY2F0aW9uIGZvciBtZXRhZGF0YSB0byByZXNpZ24sIGJ1dFxuICAgICAqIGRpY3RhdGVzIHRoYXQgaXQgbWF5IGJlIGluIG9uZSBvZiB2YXJpb3VzIGJsb2NrcyBsb2NhdGVkIHRocm91Z2hvdXQgdGhlIGZpbGUuIFRvIGxvYWQgdGhlXG4gICAgICogbWV0YWRhdGEsIHdlIG11c3QgbG9jYXRlIHRoZSBoZWFkZXIgZmlyc3QuIFRoaXMgY2FuIGJlIGRvbmUgYnkgcmVhZGluZyB0aGUgZmlyc3QgYnl0ZSBvZlxuICAgICAqIGVhY2ggYmxvY2sgdG8gZGV0ZXJtaW5lIHRoZSBibG9jayB0eXBlLiBBZnRlciB0aGUgYmxvY2sgdHlwZSBjb21lcyBhIDI0IGJpdCBpbnRlZ2VyIHRoYXQgc3RvcmVzXG4gICAgICogdGhlIGxlbmd0aCBvZiB0aGUgYmxvY2sgYXMgYmlnIGVuZGlhbi4gVXNpbmcgdGhpcywgd2UgbG9jYXRlIHRoZSBibG9jayBhbmQgc3RvcmUgdGhlIG9mZnNldCBmb3JcbiAgICAgKiBwYXJzaW5nIGxhdGVyLlxuICAgICAqXG4gICAgICogQWZ0ZXIgZWFjaCBibG9jayBoYXMgYmVlbiBwYXJzZWQsIHRoZSBfbmV4dEJsb2NrIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBvcmRlclxuICAgICAqIHRvIHBhcnNlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgbmV4dCBibG9jay4gQWxsIGJsb2NrcyBuZWVkIHRvIGJlIHBhcnNlZCBpbiBvcmRlciB0byBmaW5kXG4gICAgICogYWxsIG9mIHRoZSBwaWN0dXJlIGFuZCBjb21tZW50IGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIE1vcmUgaW5mbyBvbiB0aGUgRkxBQyBzcGVjaWZpY2F0aW9uIG1heSBiZSBmb3VuZCBoZXJlOlxuICAgICAqIGh0dHBzOi8veGlwaC5vcmcvZmxhYy9mb3JtYXQuaHRtbFxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBtZWRpYUZpbGVSZWFkZXIgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHVzZWQgdG8gcGFyc2UgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgdG8gc3RhcnQgY2hlY2tpbmcgdGhlIGhlYWRlciBmcm9tLlxuICAgICAqIEBwYXJhbSB7TG9hZENhbGxiYWNrVHlwZX0gY2FsbGJhY2tzIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgb25jZSB0aGUgaGVhZGVyIGhhcyBiZWVuIGZvdW5kLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIC8qIEFzIG1lbnRpb25lZCBhYm92ZSwgdGhpcyBmaXJzdCBieXRlIGlzIGxvYWRlZCB0byBzZWUgd2hhdCBtZXRhZGF0YSB0eXBlXG4gICAgICAgKiB0aGlzIGJsb2NrIHJlcHJlc2VudHMuXG4gICAgICAgKi9cblxuICAgICAgdmFyIGJsb2NrSGVhZGVyID0gbWVkaWFGaWxlUmVhZGVyLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgLyogVGhlIGxhc3QgdGhyZWUgYnl0ZXMgKGludGVnZXIgMjQpIGNvbnRhaW4gYSB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIGxlbmd0aFxuICAgICAgICogb2YgdGhlIGZvbGxvd2luZyBtZXRhZGF0YSBibG9jay4gVGhlIDEgaXMgYWRkZWQgaW4gb3JkZXIgdG8gc2hpZnQgdGhlIG9mZnNldFxuICAgICAgICogYnkgb25lIHRvIGdldCB0aGUgbGFzdCB0aHJlZSBieXRlcyBpbiB0aGUgYmxvY2sgaGVhZGVyLlxuICAgICAgICovXG5cbiAgICAgIHZhciBibG9ja1NpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0SW50ZWdlcjI0QXQob2Zmc2V0ICsgMSwgdHJ1ZSk7XG4gICAgICAvKiBUaGlzIGNvbmRpdGlvbmFsIGNoZWNrcyBpZiBibG9ja0hlYWRlciAodGhlIGJ5dGUgcmV0cmlldmVkIHJlcHJlc2VudGluZyB0aGVcbiAgICAgICAqIHR5cGUgb2YgdGhlIGhlYWRlcikgaXMgb25lIHRoZSBoZWFkZXJzIHdlIGFyZSBsb29raW5nIGZvci5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGF0IGlzIG5vdCB0cnVlLCB0aGUgYmxvY2sgaXMgc2tpcHBlZCBvdmVyIGFuZCB0aGUgbmV4dCByYW5nZSBpcyBsb2FkZWQ6XG4gICAgICAgKiAtIG9mZnNldCArIDQgKyBibG9ja1NpemUgYWRkcyA0IHRvIHNraXAgb3ZlciB0aGUgaW5pdGlhbCBtZXRhZGF0YSBoZWFkZXIgYW5kXG4gICAgICAgKiBibG9ja1NpemUgdG8gc2tpcCBvdmVyIHRoZSBibG9jayBvdmVyYWxsLCBwbGFjaW5nIGl0IGF0IHRoZSBoZWFkIG9mIHRoZSBuZXh0XG4gICAgICAgKiBtZXRhZGF0YSBoZWFkZXIuXG4gICAgICAgKiAtIG9mZnNldCArIDQgKyA0ICsgYmxvY2tTaXplIGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIHByZXZpb3VzIGJsb2NrIHdpdGhcbiAgICAgICAqIHRoZSBleGNlcHRpb24gb2YgYWRkaW5nIGFub3RoZXIgNCBieXRlcyB0byBtb3ZlIGl0IHRvIHRoZSBlbmQgb2YgdGhlIG5ldyBtZXRhZGF0YVxuICAgICAgICogaGVhZGVyLlxuICAgICAgICovXG5cbiAgICAgIGlmIChDT01NRU5UX0hFQURFUlMuaW5kZXhPZihibG9ja0hlYWRlcikgIT09IC0xKSB7XG4gICAgICAgIC8qIDQgaXMgYWRkZWQgdG8gb2Zmc2V0IHRvIG1vdmUgaXQgdG8gdGhlIGhlYWQgb2YgdGhlIGFjdHVhbCBtZXRhZGF0YS5cbiAgICAgICAgICogVGhlIHJhbmdlIHN0YXJ0aW5nIGZyb20gb2Zmc2V0TWF0YWRhdGEgKHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJsb2NrKVxuICAgICAgICAgKiBhbmQgb2Zmc2V0TWV0YWRhdGEgKyBibG9ja1NpemUgKHRoZSBlbmQgb2YgdGhlIGJsb2NrKSBpcyBsb2FkZWQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgb2Zmc2V0TWV0YWRhdGEgPSBvZmZzZXQgKyA0O1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXRNZXRhZGF0YSwgb2Zmc2V0TWV0YWRhdGEgKyBibG9ja1NpemVdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb21tZW50T2Zmc2V0ID0gb2Zmc2V0TWV0YWRhdGE7XG5cbiAgICAgICAgICAgIHNlbGYuX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChQSUNUVVJFX0hFQURFUlMuaW5kZXhPZihibG9ja0hlYWRlcikgIT09IC0xKSB7XG4gICAgICAgIHZhciBvZmZzZXRNZXRhZGF0YSA9IG9mZnNldCArIDQ7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldE1ldGFkYXRhLCBvZmZzZXRNZXRhZGF0YSArIGJsb2NrU2l6ZV0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX3BpY3R1cmVPZmZzZXQgPSBvZmZzZXRNZXRhZGF0YTtcblxuICAgICAgICAgICAgc2VsZi5fbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIHVzZWQgdG8gbG9hZCB0aGUgbmV4dCByYW5nZSBhbmQgcmVzcGVjdGl2ZSBibG9jay5cbiAgICAgKlxuICAgICAqIElmIHRoZSBtZXRhZGF0YSBibG9jayB0aGF0IHdhcyBpZGVudGlmaWVkIGlzIG5vdCB0aGUgbGFzdCBibG9jayBiZWZvcmUgdGhlXG4gICAgICogYXVkaW8gYmxvY2tzLCB0aGUgZnVuY3Rpb24gd2lsbCBjb250aW51ZSBsb2FkaW5nIHRoZSBuZXh0IGJsb2Nrcy4gSWYgaXQgaXNcbiAgICAgKiB0aGUgbGFzdCBibG9jayAoaWRlbnRpZmllZCBieSBhbnkgdmFsdWVzIGdyZWF0ZXIgdGhhbiAxMjcsIHNlZSBGTEFDIHNwZWMuKSxcbiAgICAgKiB0aGUgZnVuY3Rpb24gd2lsbCBkZXRlcm1pbmUgd2hldGhlciBhIGNvbW1lbnQgYmxvY2sgaGFkIGJlZW4gaWRlbnRpZmllZC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBibG9jayBkb2VzIG5vdCBleGlzdCwgdGhlIGVycm9yIGNhbGxiYWNrIGlzIGNhbGxlZC4gT3RoZXJ3aXNlLCB0aGUgZnVuY3Rpb25cbiAgICAgKiB3aWxsIGNhbGwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2ssIGFsbG93aW5nIGRhdGEgcGFyc2luZyB0byBiZWdpbi5cbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gbWVkaWFGaWxlUmVhZGVyIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB1c2VkIHRvIHBhcnNlIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IHRoYXQgdGhlIGV4aXN0aW5nIGhlYWRlciB3YXMgbG9jYXRlZCBhdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tIZWFkZXIgLSBBbiBpbnRlZ2VyIHJlZmxlY3RpbmcgdGhlIGhlYWRlciB0eXBlIG9mIHRoZSBibG9jay5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIC0gVGhlIHNpemUgb2YgdGhlIHByZXZpb3VzbHkgcHJvY2Vzc2VkIGhlYWRlci5cbiAgICAgKiBAcGFyYW0ge0xvYWRDYWxsYmFja1R5cGV9IGNhbGxiYWNrcyAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX25leHRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKGJsb2NrSGVhZGVyID4gMTI3KSB7XG4gICAgICAgIGlmICghc2VsZi5fY29tbWVudE9mZnNldCkge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImxvYWREYXRhXCIsXG4gICAgICAgICAgICBcImluZm9cIjogXCJDb21tZW50IGJsb2NrIGNvdWxkIG5vdCBiZSBmb3VuZC5cIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgNCArIGJsb2NrU2l6ZSwgb2Zmc2V0ICsgNCArIDQgKyBibG9ja1NpemVdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2FkQmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyA0ICsgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZGF0YSBhbmQgcmV0dXJucyB0aGUgdGFncy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYW4gb3ZlcnZpZXcgb2YgdGhlIFZvcmJpc0NvbW1lbnQgZm9ybWF0IGFuZCB3aGF0IHRoaXMgZnVuY3Rpb24gYXR0ZW1wdHMgdG9cbiAgICAgKiByZXRyaWV2ZTpcbiAgICAgKiAtIEZpcnN0IDQgYnl0ZXM6IGEgbG9uZyB0aGF0IGNvbnRhaW5zIHRoZSBsZW5ndGggb2YgdGhlIHZlbmRvciBzdHJpbmcuXG4gICAgICogLSBOZXh0IG4gYnl0ZXM6IHRoZSB2ZW5kb3Igc3RyaW5nIGVuY29kZWQgaW4gVVRGLTguXG4gICAgICogLSBOZXh0IDQgYnl0ZXM6IGEgbG9uZyByZXByZXNlbnRpbmcgaG93IG1hbnkgY29tbWVudHMgYXJlIGluIHRoaXMgYmxvY2tcbiAgICAgKiBGb3IgZWFjaCBjb21tZW50IHRoYXQgZXhpc3RzOlxuICAgICAqIC0gRmlyc3QgNCBieXRlczogYSBsb25nIHJlcHJlc2VudGluZyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tZW50XG4gICAgICogLSBOZXh0IG4gYnl0ZXM6IHRoZSBjb21tZW50IGVuY29kZWQgaW4gVVRGLTguXG4gICAgICogVGhlIGNvbW1lbnQgc3RyaW5nIHdpbGwgdXN1YWxseSBhcHBlYXIgaW4gYSBmb3JtYXQgc2ltaWxhciB0bzpcbiAgICAgKiBBUlRJU1Q9bWVcbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgbG9uZ3MgYW5kIGludGVnZXJzIGluIHRoaXMgYmxvY2sgYXJlIGVuY29kZWQgaW4gbGl0dGxlIGVuZGlhblxuICAgICAqIGFzIG9wcG9zZWQgdG8gYmlnIGVuZGlhbiBmb3IgdGhlIHJlc3Qgb2YgdGhlIEZMQUMgc3BlYy5cbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gZGF0YSAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdG8gcGFyc2UgdGhlIGZpbGUgd2l0aC5cbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IFt0YWdzXSAtIE9wdGlvbmFsIHRhZ3MgdG8gYWxzbyBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgZmlsZS5cbiAgICAgKiBAcmV0dXJuIHtUYWdUeXBlfSAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0YWcgaW5mb3JtYXRpb24gZm9yIHRoZSBmaWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3MpIHtcbiAgICAgIHZhciB2ZW5kb3JMZW5ndGggPSBkYXRhLmdldExvbmdBdCh0aGlzLl9jb21tZW50T2Zmc2V0LCBmYWxzZSk7XG4gICAgICB2YXIgb2Zmc2V0VmVuZG9yID0gdGhpcy5fY29tbWVudE9mZnNldCArIDQ7XG4gICAgICAvKiBUaGlzIGxpbmUgaXMgYWJsZSB0byByZXRyaWV2ZSB0aGUgdmVuZG9yIHN0cmluZyB0aGF0IHRoZSBWb3JiaXNDb21tZW50IGJsb2NrXG4gICAgICAgKiBjb250YWlucy4gSG93ZXZlciwgaXQgaXMgbm90IHBhcnQgb2YgdGhlIHRhZ3MgdGhhdCBKU01lZGlhVGFncyBub3JtYWxseSByZXRyaWV2ZXMsXG4gICAgICAgKiBhbmQgaXMgdGhlcmVmb3JlIGNvbW1lbnRlZCBvdXQuXG4gICAgICAgKi9cbiAgICAgIC8vIHZhciB2ZW5kb3IgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0VmVuZG9yLCB2ZW5kb3JMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcblxuICAgICAgdmFyIG9mZnNldExpc3QgPSB2ZW5kb3JMZW5ndGggKyBvZmZzZXRWZW5kb3I7XG4gICAgICAvKiBUbyBnZXQgdGhlIG1ldGFkYXRhIGZyb20gdGhlIGJsb2NrLCB3ZSBmaXJzdCBnZXQgdGhlIGxvbmcgdGhhdCBjb250YWlucyB0aGVcbiAgICAgICAqIG51bWJlciBvZiBhY3R1YWwgY29tbWVudCB2YWx1ZXMgdGhhdCBhcmUgZXhpc3RlbnQgd2l0aGluIHRoZSBibG9jay5cbiAgICAgICAqXG4gICAgICAgKiBBcyB3ZSBsb29wIHRocm91Z2ggYWxsIG9mIHRoZSBjb21tZW50IGJsb2Nrcywgd2UgZ2V0IHRoZSBkYXRhIGxlbmd0aCBpbiBvcmRlciB0b1xuICAgICAgICogZ2V0IHRoZSByaWdodCBzaXplIHN0cmluZywgYW5kIHRoZW4gZGV0ZXJtaW5lIHdoaWNoIGNhdGVnb3J5IHRoYXQgc3RyaW5nIGZhbGxzIHVuZGVyLlxuICAgICAgICogVGhlIGRhdGFPZmZzZXQgdmFyaWFibGUgaXMgY29uc3RhbnRseSB1cGRhdGVkIHNvIHRoYXQgaXQgaXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGVcbiAgICAgICAqIGNvbW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgcGFyc2VkLlxuICAgICAgICpcbiAgICAgICAqIEFkZGl0aW9ucyBvZiA0IGhlcmUgYXJlIHVzZWQgdG8gbW92ZSB0aGUgb2Zmc2V0IHBhc3QgdGhlIGZpcnN0IDQgYnl0ZXMgd2hpY2ggb25seSBjb250YWluXG4gICAgICAgKiB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tZW50LlxuICAgICAgICovXG5cbiAgICAgIHZhciBudW1Db21tZW50cyA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldExpc3QsIGZhbHNlKTtcbiAgICAgIHZhciBkYXRhT2Zmc2V0ID0gb2Zmc2V0TGlzdCArIDQ7XG4gICAgICB2YXIgdGl0bGUsIGFydGlzdCwgYWxidW0sIHRyYWNrLCBnZW5yZSwgcGljdHVyZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db21tZW50czsgaSsrKSB7XG4gICAgICAgIHZhciBfZGF0YUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KGRhdGFPZmZzZXQsIGZhbHNlKTtcblxuICAgICAgICB2YXIgcyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChkYXRhT2Zmc2V0ICsgNCwgX2RhdGFMZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIGQgPSBzLmluZGV4T2YoXCI9XCIpO1xuICAgICAgICB2YXIgc3BsaXQgPSBbcy5zbGljZSgwLCBkKSwgcy5zbGljZShkICsgMSldO1xuXG4gICAgICAgIHN3aXRjaCAoc3BsaXRbMF0pIHtcbiAgICAgICAgICBjYXNlIFwiVElUTEVcIjpcbiAgICAgICAgICAgIHRpdGxlID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJBUlRJU1RcIjpcbiAgICAgICAgICAgIGFydGlzdCA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiQUxCVU1cIjpcbiAgICAgICAgICAgIGFsYnVtID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJUUkFDS05VTUJFUlwiOlxuICAgICAgICAgICAgdHJhY2sgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkdFTlJFXCI6XG4gICAgICAgICAgICBnZW5yZSA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhT2Zmc2V0ICs9IDQgKyBfZGF0YUxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8qIElmIGEgcGljdHVyZSBvZmZzZXQgd2FzIGZvdW5kIGFuZCBhc3NpZ25lZCwgdGhlbiB0aGUgcmVhZGVyIHdpbGwgc3RhcnQgcHJvY2Vzc2luZ1xuICAgICAgICogdGhlIHBpY3R1cmUgYmxvY2sgZnJvbSB0aGF0IHBvaW50LlxuICAgICAgICpcbiAgICAgICAqIEFsbCB0aGUgbGVuZ3RocyBmb3IgdGhlIHBpY3R1cmUgZGF0YSBjYW4gYmUgZm91bmQgb25saW5lIGhlcmU6XG4gICAgICAgKiBodHRwczovL3hpcGgub3JnL2ZsYWMvZm9ybWF0Lmh0bWwjbWV0YWRhdGFfYmxvY2tfcGljdHVyZVxuICAgICAgICovXG5cblxuICAgICAgaWYgKHRoaXMuX3BpY3R1cmVPZmZzZXQpIHtcbiAgICAgICAgdmFyIGltYWdlVHlwZSA9IGRhdGEuZ2V0TG9uZ0F0KHRoaXMuX3BpY3R1cmVPZmZzZXQsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0TWltZUxlbmd0aCA9IHRoaXMuX3BpY3R1cmVPZmZzZXQgKyA0O1xuICAgICAgICB2YXIgbWltZUxlbmd0aCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldE1pbWVMZW5ndGgsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0TWltZSA9IG9mZnNldE1pbWVMZW5ndGggKyA0O1xuICAgICAgICB2YXIgbWltZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0TWltZSwgbWltZUxlbmd0aCk7XG4gICAgICAgIHZhciBvZmZzZXREZXNjcmlwdGlvbkxlbmd0aCA9IG9mZnNldE1pbWUgKyBtaW1lTGVuZ3RoO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb25MZW5ndGggPSBkYXRhLmdldExvbmdBdChvZmZzZXREZXNjcmlwdGlvbkxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXREZXNjcmlwdGlvbiA9IG9mZnNldERlc2NyaXB0aW9uTGVuZ3RoICsgNDtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldERlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuICAgICAgICB2YXIgb2Zmc2V0RGF0YUxlbmd0aCA9IG9mZnNldERlc2NyaXB0aW9uICsgZGVzY3JpcHRpb25MZW5ndGggKyAxNjtcbiAgICAgICAgdmFyIGRhdGFMZW5ndGggPSBkYXRhLmdldExvbmdBdChvZmZzZXREYXRhTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldERhdGEgPSBvZmZzZXREYXRhTGVuZ3RoICsgNDtcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXREYXRhLCBkYXRhTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgcGljdHVyZSA9IHtcbiAgICAgICAgICBmb3JtYXQ6IG1pbWUsXG4gICAgICAgICAgdHlwZTogSU1BR0VfVFlQRVNbaW1hZ2VUeXBlXSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGF0YTogaW1hZ2VEYXRhXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWcgPSB7XG4gICAgICAgIHR5cGU6IFwiRkxBQ1wiLFxuICAgICAgICB2ZXJzaW9uOiBcIjFcIixcbiAgICAgICAgdGFnczoge1xuICAgICAgICAgIFwidGl0bGVcIjogdGl0bGUsXG4gICAgICAgICAgXCJhcnRpc3RcIjogYXJ0aXN0LFxuICAgICAgICAgIFwiYWxidW1cIjogYWxidW0sXG4gICAgICAgICAgXCJ0cmFja1wiOiB0cmFjayxcbiAgICAgICAgICBcImdlbnJlXCI6IGdlbnJlLFxuICAgICAgICAgIFwicGljdHVyZVwiOiBwaWN0dXJlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gdGFnO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJ5dGUgcmFuZ2UgZm9yIHRoZSB0YWcgaWRlbnRpZmllci5cbiAgICAgKlxuICAgICAqIEJlY2F1c2UgdGhlIFZvcmJpcyBjb21tZW50IGJsb2NrIGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGluIGEgc3BlY2lmaWVkXG4gICAgICogbG9jYXRpb24sIHdlIGNhbiBvbmx5IGxvYWQgdGhlIGZpcnN0IDQgYnl0ZXMgb2YgdGhlIGZpbGUgdG8gY29uZmlybSBpdFxuICAgICAqIGlzIGEgRkxBQyBmaXJzdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0J5dGVSYW5nZX0gVGhlIGJ5dGUgcmFuZ2UgdGhhdCBpZGVudGlmaWVzIHRoZSB0YWcgZm9yIGEgRkxBQy5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGVuZ3RoOiBGTEFDX0hFQURFUl9TSVpFXG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoaXMgcmVhZGVyIGNhbiByZWFkIGEgY2VydGFpbiB0YWcgZm9ybWF0LlxuICAgICAqXG4gICAgICogVGhpcyBjaGVja3MgdGhhdCB0aGUgZmlyc3QgNCBjaGFyYWN0ZXJzIGluIHRoZSBmaWxlIGFyZSBmTGFDLCB3aGljaFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgRkxBQyBmaWxlIHNwZWNpZmljYXRpb24gc2hvdWxkIGJlIHRoZSBjaGFyYWN0ZXJzIHRoYXRcbiAgICAgKiBpbmRpY2F0ZSBhIEZMQUMgZmlsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGhlYWRlciBpcyBmTGFDLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgNCkpO1xuICAgICAgcmV0dXJuIGlkID09PSAnZkxhQyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZMQUNUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGTEFDVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMn1dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYVRhZ1JlYWRlcicpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIElEM3YxVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKElEM3YxVGFnUmVhZGVyLCBfTWVkaWFUYWdSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIElEM3YxVGFnUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MVRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKElEM3YxVGFnUmVhZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MVRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIGZpbGVTaXplID0gbWVkaWFGaWxlUmVhZGVyLmdldFNpemUoKTtcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW2ZpbGVTaXplIC0gMTI4LCBmaWxlU2l6ZSAtIDFdLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFncykge1xuICAgICAgdmFyIG9mZnNldCA9IGRhdGEuZ2V0U2l6ZSgpIC0gMTI4O1xuICAgICAgdmFyIHRpdGxlID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDMsIDMwKS50b1N0cmluZygpO1xuICAgICAgdmFyIGFydGlzdCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAzMywgMzApLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgYWxidW0gPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgNjMsIDMwKS50b1N0cmluZygpO1xuICAgICAgdmFyIHllYXIgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgOTMsIDQpLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgdHJhY2tGbGFnID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgOTcgKyAyOCk7XG4gICAgICB2YXIgdHJhY2sgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDI5KTtcblxuICAgICAgaWYgKHRyYWNrRmxhZyA9PSAwICYmIHRyYWNrICE9IDApIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBcIjEuMVwiO1xuICAgICAgICB2YXIgY29tbWVudCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA5NywgMjgpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IFwiMS4wXCI7XG4gICAgICAgIHZhciBjb21tZW50ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDk3LCAzMCkudG9TdHJpbmcoKTtcbiAgICAgICAgdHJhY2sgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2VucmVJZHggPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA5NyArIDMwKTtcblxuICAgICAgaWYgKGdlbnJlSWR4IDwgMjU1KSB7XG4gICAgICAgIHZhciBnZW5yZSA9IEdFTlJFU1tnZW5yZUlkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZ2VucmUgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0ge1xuICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IHZlcnNpb24sXG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgICBcImFydGlzdFwiOiBhcnRpc3QsXG4gICAgICAgICAgXCJhbGJ1bVwiOiBhbGJ1bSxcbiAgICAgICAgICBcInllYXJcIjogeWVhcixcbiAgICAgICAgICBcImNvbW1lbnRcIjogY29tbWVudCxcbiAgICAgICAgICBcImdlbnJlXCI6IGdlbnJlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyBpcyBub3QgaGFwcHkgd2l0aCBhZGRpbmcgcHJvcGVydGllc1xuICAgICAgICB0YWcudGFncy50cmFjayA9IHRyYWNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFnO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIC8vIFRoZSBpZGVudGlmaWVyIGlzIFRBRyBhbmQgaXMgYXQgb2Zmc2V0OiAtMTI4LiBIb3dldmVyLCB0byBhdm9pZCBhXG4gICAgICAvLyBmZXRjaCBmb3IgdGhlIHRhZyBpZGVudGlmaWVyIGFuZCBhbm90aGVyIGZvciB0aGUgZGF0YSwgd2UgbG9hZCB0aGVcbiAgICAgIC8vIGVudGlyZSBkYXRhIHNpbmNlIGl0J3Mgc28gc21hbGwuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IC0xMjgsXG4gICAgICAgIGxlbmd0aDogMTI4XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoMCwgMykpO1xuICAgICAgcmV0dXJuIGlkID09PSBcIlRBR1wiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJRDN2MVRhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuXG52YXIgR0VOUkVTID0gW1wiQmx1ZXNcIiwgXCJDbGFzc2ljIFJvY2tcIiwgXCJDb3VudHJ5XCIsIFwiRGFuY2VcIiwgXCJEaXNjb1wiLCBcIkZ1bmtcIiwgXCJHcnVuZ2VcIiwgXCJIaXAtSG9wXCIsIFwiSmF6elwiLCBcIk1ldGFsXCIsIFwiTmV3IEFnZVwiLCBcIk9sZGllc1wiLCBcIk90aGVyXCIsIFwiUG9wXCIsIFwiUiZCXCIsIFwiUmFwXCIsIFwiUmVnZ2FlXCIsIFwiUm9ja1wiLCBcIlRlY2hub1wiLCBcIkluZHVzdHJpYWxcIiwgXCJBbHRlcm5hdGl2ZVwiLCBcIlNrYVwiLCBcIkRlYXRoIE1ldGFsXCIsIFwiUHJhbmtzXCIsIFwiU291bmR0cmFja1wiLCBcIkV1cm8tVGVjaG5vXCIsIFwiQW1iaWVudFwiLCBcIlRyaXAtSG9wXCIsIFwiVm9jYWxcIiwgXCJKYXp6K0Z1bmtcIiwgXCJGdXNpb25cIiwgXCJUcmFuY2VcIiwgXCJDbGFzc2ljYWxcIiwgXCJJbnN0cnVtZW50YWxcIiwgXCJBY2lkXCIsIFwiSG91c2VcIiwgXCJHYW1lXCIsIFwiU291bmQgQ2xpcFwiLCBcIkdvc3BlbFwiLCBcIk5vaXNlXCIsIFwiQWx0ZXJuUm9ja1wiLCBcIkJhc3NcIiwgXCJTb3VsXCIsIFwiUHVua1wiLCBcIlNwYWNlXCIsIFwiTWVkaXRhdGl2ZVwiLCBcIkluc3RydW1lbnRhbCBQb3BcIiwgXCJJbnN0cnVtZW50YWwgUm9ja1wiLCBcIkV0aG5pY1wiLCBcIkdvdGhpY1wiLCBcIkRhcmt3YXZlXCIsIFwiVGVjaG5vLUluZHVzdHJpYWxcIiwgXCJFbGVjdHJvbmljXCIsIFwiUG9wLUZvbGtcIiwgXCJFdXJvZGFuY2VcIiwgXCJEcmVhbVwiLCBcIlNvdXRoZXJuIFJvY2tcIiwgXCJDb21lZHlcIiwgXCJDdWx0XCIsIFwiR2FuZ3N0YVwiLCBcIlRvcCA0MFwiLCBcIkNocmlzdGlhbiBSYXBcIiwgXCJQb3AvRnVua1wiLCBcIkp1bmdsZVwiLCBcIk5hdGl2ZSBBbWVyaWNhblwiLCBcIkNhYmFyZXRcIiwgXCJOZXcgV2F2ZVwiLCBcIlBzeWNoYWRlbGljXCIsIFwiUmF2ZVwiLCBcIlNob3d0dW5lc1wiLCBcIlRyYWlsZXJcIiwgXCJMby1GaVwiLCBcIlRyaWJhbFwiLCBcIkFjaWQgUHVua1wiLCBcIkFjaWQgSmF6elwiLCBcIlBvbGthXCIsIFwiUmV0cm9cIiwgXCJNdXNpY2FsXCIsIFwiUm9jayAmIFJvbGxcIiwgXCJIYXJkIFJvY2tcIiwgXCJGb2xrXCIsIFwiRm9say1Sb2NrXCIsIFwiTmF0aW9uYWwgRm9sa1wiLCBcIlN3aW5nXCIsIFwiRmFzdCBGdXNpb25cIiwgXCJCZWJvYlwiLCBcIkxhdGluXCIsIFwiUmV2aXZhbFwiLCBcIkNlbHRpY1wiLCBcIkJsdWVncmFzc1wiLCBcIkF2YW50Z2FyZGVcIiwgXCJHb3RoaWMgUm9ja1wiLCBcIlByb2dyZXNzaXZlIFJvY2tcIiwgXCJQc3ljaGVkZWxpYyBSb2NrXCIsIFwiU3ltcGhvbmljIFJvY2tcIiwgXCJTbG93IFJvY2tcIiwgXCJCaWcgQmFuZFwiLCBcIkNob3J1c1wiLCBcIkVhc3kgTGlzdGVuaW5nXCIsIFwiQWNvdXN0aWNcIiwgXCJIdW1vdXJcIiwgXCJTcGVlY2hcIiwgXCJDaGFuc29uXCIsIFwiT3BlcmFcIiwgXCJDaGFtYmVyIE11c2ljXCIsIFwiU29uYXRhXCIsIFwiU3ltcGhvbnlcIiwgXCJCb290eSBCYXNzXCIsIFwiUHJpbXVzXCIsIFwiUG9ybiBHcm9vdmVcIiwgXCJTYXRpcmVcIiwgXCJTbG93IEphbVwiLCBcIkNsdWJcIiwgXCJUYW5nb1wiLCBcIlNhbWJhXCIsIFwiRm9sa2xvcmVcIiwgXCJCYWxsYWRcIiwgXCJQb3dlciBCYWxsYWRcIiwgXCJSaHl0aG1pYyBTb3VsXCIsIFwiRnJlZXN0eWxlXCIsIFwiRHVldFwiLCBcIlB1bmsgUm9ja1wiLCBcIkRydW0gU29sb1wiLCBcIkFjYXBlbGxhXCIsIFwiRXVyby1Ib3VzZVwiLCBcIkRhbmNlIEhhbGxcIl07XG5tb2R1bGUuZXhwb3J0cyA9IElEM3YxVGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIFN0cmluZ1V0aWxzID0gcmVxdWlyZSgnLi9TdHJpbmdVdGlscycpO1xuXG52YXIgQXJyYXlGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9BcnJheUZpbGVSZWFkZXInKTtcblxudmFyIEZSQU1FX0RFU0NSSVBUSU9OUyA9IHtcbiAgLy8gdjIuMlxuICBcIkJVRlwiOiBcIlJlY29tbWVuZGVkIGJ1ZmZlciBzaXplXCIsXG4gIFwiQ05UXCI6IFwiUGxheSBjb3VudGVyXCIsXG4gIFwiQ09NXCI6IFwiQ29tbWVudHNcIixcbiAgXCJDUkFcIjogXCJBdWRpbyBlbmNyeXB0aW9uXCIsXG4gIFwiQ1JNXCI6IFwiRW5jcnlwdGVkIG1ldGEgZnJhbWVcIixcbiAgXCJFVENcIjogXCJFdmVudCB0aW1pbmcgY29kZXNcIixcbiAgXCJFUVVcIjogXCJFcXVhbGl6YXRpb25cIixcbiAgXCJHRU9cIjogXCJHZW5lcmFsIGVuY2Fwc3VsYXRlZCBvYmplY3RcIixcbiAgXCJJUExcIjogXCJJbnZvbHZlZCBwZW9wbGUgbGlzdFwiLFxuICBcIkxOS1wiOiBcIkxpbmtlZCBpbmZvcm1hdGlvblwiLFxuICBcIk1DSVwiOiBcIk11c2ljIENEIElkZW50aWZpZXJcIixcbiAgXCJNTExcIjogXCJNUEVHIGxvY2F0aW9uIGxvb2t1cCB0YWJsZVwiLFxuICBcIlBJQ1wiOiBcIkF0dGFjaGVkIHBpY3R1cmVcIixcbiAgXCJQT1BcIjogXCJQb3B1bGFyaW1ldGVyXCIsXG4gIFwiUkVWXCI6IFwiUmV2ZXJiXCIsXG4gIFwiUlZBXCI6IFwiUmVsYXRpdmUgdm9sdW1lIGFkanVzdG1lbnRcIixcbiAgXCJTTFRcIjogXCJTeW5jaHJvbml6ZWQgbHlyaWMvdGV4dFwiLFxuICBcIlNUQ1wiOiBcIlN5bmNlZCB0ZW1wbyBjb2Rlc1wiLFxuICBcIlRBTFwiOiBcIkFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUQlBcIjogXCJCUE0gKEJlYXRzIFBlciBNaW51dGUpXCIsXG4gIFwiVENNXCI6IFwiQ29tcG9zZXJcIixcbiAgXCJUQ09cIjogXCJDb250ZW50IHR5cGVcIixcbiAgXCJUQ1JcIjogXCJDb3B5cmlnaHQgbWVzc2FnZVwiLFxuICBcIlREQVwiOiBcIkRhdGVcIixcbiAgXCJURFlcIjogXCJQbGF5bGlzdCBkZWxheVwiLFxuICBcIlRFTlwiOiBcIkVuY29kZWQgYnlcIixcbiAgXCJURlRcIjogXCJGaWxlIHR5cGVcIixcbiAgXCJUSU1cIjogXCJUaW1lXCIsXG4gIFwiVEtFXCI6IFwiSW5pdGlhbCBrZXlcIixcbiAgXCJUTEFcIjogXCJMYW5ndWFnZShzKVwiLFxuICBcIlRMRVwiOiBcIkxlbmd0aFwiLFxuICBcIlRNVFwiOiBcIk1lZGlhIHR5cGVcIixcbiAgXCJUT0FcIjogXCJPcmlnaW5hbCBhcnRpc3QocykvcGVyZm9ybWVyKHMpXCIsXG4gIFwiVE9GXCI6IFwiT3JpZ2luYWwgZmlsZW5hbWVcIixcbiAgXCJUT0xcIjogXCJPcmlnaW5hbCBMeXJpY2lzdChzKS90ZXh0IHdyaXRlcihzKVwiLFxuICBcIlRPUlwiOiBcIk9yaWdpbmFsIHJlbGVhc2UgeWVhclwiLFxuICBcIlRPVFwiOiBcIk9yaWdpbmFsIGFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUUDFcIjogXCJMZWFkIGFydGlzdChzKS9MZWFkIHBlcmZvcm1lcihzKS9Tb2xvaXN0KHMpL1BlcmZvcm1pbmcgZ3JvdXBcIixcbiAgXCJUUDJcIjogXCJCYW5kL09yY2hlc3RyYS9BY2NvbXBhbmltZW50XCIsXG4gIFwiVFAzXCI6IFwiQ29uZHVjdG9yL1BlcmZvcm1lciByZWZpbmVtZW50XCIsXG4gIFwiVFA0XCI6IFwiSW50ZXJwcmV0ZWQsIHJlbWl4ZWQsIG9yIG90aGVyd2lzZSBtb2RpZmllZCBieVwiLFxuICBcIlRQQVwiOiBcIlBhcnQgb2YgYSBzZXRcIixcbiAgXCJUUEJcIjogXCJQdWJsaXNoZXJcIixcbiAgXCJUUkNcIjogXCJJU1JDIChJbnRlcm5hdGlvbmFsIFN0YW5kYXJkIFJlY29yZGluZyBDb2RlKVwiLFxuICBcIlRSRFwiOiBcIlJlY29yZGluZyBkYXRlc1wiLFxuICBcIlRSS1wiOiBcIlRyYWNrIG51bWJlci9Qb3NpdGlvbiBpbiBzZXRcIixcbiAgXCJUU0lcIjogXCJTaXplXCIsXG4gIFwiVFNTXCI6IFwiU29mdHdhcmUvaGFyZHdhcmUgYW5kIHNldHRpbmdzIHVzZWQgZm9yIGVuY29kaW5nXCIsXG4gIFwiVFQxXCI6IFwiQ29udGVudCBncm91cCBkZXNjcmlwdGlvblwiLFxuICBcIlRUMlwiOiBcIlRpdGxlL1NvbmduYW1lL0NvbnRlbnQgZGVzY3JpcHRpb25cIixcbiAgXCJUVDNcIjogXCJTdWJ0aXRsZS9EZXNjcmlwdGlvbiByZWZpbmVtZW50XCIsXG4gIFwiVFhUXCI6IFwiTHlyaWNpc3QvdGV4dCB3cml0ZXJcIixcbiAgXCJUWFhcIjogXCJVc2VyIGRlZmluZWQgdGV4dCBpbmZvcm1hdGlvbiBmcmFtZVwiLFxuICBcIlRZRVwiOiBcIlllYXJcIixcbiAgXCJVRklcIjogXCJVbmlxdWUgZmlsZSBpZGVudGlmaWVyXCIsXG4gIFwiVUxUXCI6IFwiVW5zeWNocm9uaXplZCBseXJpYy90ZXh0IHRyYW5zY3JpcHRpb25cIixcbiAgXCJXQUZcIjogXCJPZmZpY2lhbCBhdWRpbyBmaWxlIHdlYnBhZ2VcIixcbiAgXCJXQVJcIjogXCJPZmZpY2lhbCBhcnRpc3QvcGVyZm9ybWVyIHdlYnBhZ2VcIixcbiAgXCJXQVNcIjogXCJPZmZpY2lhbCBhdWRpbyBzb3VyY2Ugd2VicGFnZVwiLFxuICBcIldDTVwiOiBcIkNvbW1lcmNpYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXQ1BcIjogXCJDb3B5cmlnaHQvTGVnYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXUEJcIjogXCJQdWJsaXNoZXJzIG9mZmljaWFsIHdlYnBhZ2VcIixcbiAgXCJXWFhcIjogXCJVc2VyIGRlZmluZWQgVVJMIGxpbmsgZnJhbWVcIixcbiAgLy8gdjIuM1xuICBcIkFFTkNcIjogXCJBdWRpbyBlbmNyeXB0aW9uXCIsXG4gIFwiQVBJQ1wiOiBcIkF0dGFjaGVkIHBpY3R1cmVcIixcbiAgXCJBU1BJXCI6IFwiQXVkaW8gc2VlayBwb2ludCBpbmRleFwiLFxuICBcIkNIQVBcIjogXCJDaGFwdGVyXCIsXG4gIFwiQ1RPQ1wiOiBcIlRhYmxlIG9mIGNvbnRlbnRzXCIsXG4gIFwiQ09NTVwiOiBcIkNvbW1lbnRzXCIsXG4gIFwiQ09NUlwiOiBcIkNvbW1lcmNpYWwgZnJhbWVcIixcbiAgXCJFTkNSXCI6IFwiRW5jcnlwdGlvbiBtZXRob2QgcmVnaXN0cmF0aW9uXCIsXG4gIFwiRVFVMlwiOiBcIkVxdWFsaXNhdGlvbiAoMilcIixcbiAgXCJFUVVBXCI6IFwiRXF1YWxpemF0aW9uXCIsXG4gIFwiRVRDT1wiOiBcIkV2ZW50IHRpbWluZyBjb2Rlc1wiLFxuICBcIkdFT0JcIjogXCJHZW5lcmFsIGVuY2Fwc3VsYXRlZCBvYmplY3RcIixcbiAgXCJHUklEXCI6IFwiR3JvdXAgaWRlbnRpZmljYXRpb24gcmVnaXN0cmF0aW9uXCIsXG4gIFwiSVBMU1wiOiBcIkludm9sdmVkIHBlb3BsZSBsaXN0XCIsXG4gIFwiTElOS1wiOiBcIkxpbmtlZCBpbmZvcm1hdGlvblwiLFxuICBcIk1DRElcIjogXCJNdXNpYyBDRCBpZGVudGlmaWVyXCIsXG4gIFwiTUxMVFwiOiBcIk1QRUcgbG9jYXRpb24gbG9va3VwIHRhYmxlXCIsXG4gIFwiT1dORVwiOiBcIk93bmVyc2hpcCBmcmFtZVwiLFxuICBcIlBSSVZcIjogXCJQcml2YXRlIGZyYW1lXCIsXG4gIFwiUENOVFwiOiBcIlBsYXkgY291bnRlclwiLFxuICBcIlBPUE1cIjogXCJQb3B1bGFyaW1ldGVyXCIsXG4gIFwiUE9TU1wiOiBcIlBvc2l0aW9uIHN5bmNocm9uaXNhdGlvbiBmcmFtZVwiLFxuICBcIlJCVUZcIjogXCJSZWNvbW1lbmRlZCBidWZmZXIgc2l6ZVwiLFxuICBcIlJWQTJcIjogXCJSZWxhdGl2ZSB2b2x1bWUgYWRqdXN0bWVudCAoMilcIixcbiAgXCJSVkFEXCI6IFwiUmVsYXRpdmUgdm9sdW1lIGFkanVzdG1lbnRcIixcbiAgXCJSVlJCXCI6IFwiUmV2ZXJiXCIsXG4gIFwiU0VFS1wiOiBcIlNlZWsgZnJhbWVcIixcbiAgXCJTWUxUXCI6IFwiU3luY2hyb25pemVkIGx5cmljL3RleHRcIixcbiAgXCJTWVRDXCI6IFwiU3luY2hyb25pemVkIHRlbXBvIGNvZGVzXCIsXG4gIFwiVEFMQlwiOiBcIkFsYnVtL01vdmllL1Nob3cgdGl0bGVcIixcbiAgXCJUQlBNXCI6IFwiQlBNIChiZWF0cyBwZXIgbWludXRlKVwiLFxuICBcIlRDT01cIjogXCJDb21wb3NlclwiLFxuICBcIlRDT05cIjogXCJDb250ZW50IHR5cGVcIixcbiAgXCJUQ09QXCI6IFwiQ29weXJpZ2h0IG1lc3NhZ2VcIixcbiAgXCJUREFUXCI6IFwiRGF0ZVwiLFxuICBcIlRETFlcIjogXCJQbGF5bGlzdCBkZWxheVwiLFxuICBcIlREUkNcIjogXCJSZWNvcmRpbmcgdGltZVwiLFxuICBcIlREUkxcIjogXCJSZWxlYXNlIHRpbWVcIixcbiAgXCJURFRHXCI6IFwiVGFnZ2luZyB0aW1lXCIsXG4gIFwiVEVOQ1wiOiBcIkVuY29kZWQgYnlcIixcbiAgXCJURVhUXCI6IFwiTHlyaWNpc3QvVGV4dCB3cml0ZXJcIixcbiAgXCJURkxUXCI6IFwiRmlsZSB0eXBlXCIsXG4gIFwiVElNRVwiOiBcIlRpbWVcIixcbiAgXCJUSVBMXCI6IFwiSW52b2x2ZWQgcGVvcGxlIGxpc3RcIixcbiAgXCJUSVQxXCI6IFwiQ29udGVudCBncm91cCBkZXNjcmlwdGlvblwiLFxuICBcIlRJVDJcIjogXCJUaXRsZS9zb25nbmFtZS9jb250ZW50IGRlc2NyaXB0aW9uXCIsXG4gIFwiVElUM1wiOiBcIlN1YnRpdGxlL0Rlc2NyaXB0aW9uIHJlZmluZW1lbnRcIixcbiAgXCJUS0VZXCI6IFwiSW5pdGlhbCBrZXlcIixcbiAgXCJUTEFOXCI6IFwiTGFuZ3VhZ2UocylcIixcbiAgXCJUTEVOXCI6IFwiTGVuZ3RoXCIsXG4gIFwiVE1DTFwiOiBcIk11c2ljaWFuIGNyZWRpdHMgbGlzdFwiLFxuICBcIlRNRURcIjogXCJNZWRpYSB0eXBlXCIsXG4gIFwiVE1PT1wiOiBcIk1vb2RcIixcbiAgXCJUT0FMXCI6IFwiT3JpZ2luYWwgYWxidW0vbW92aWUvc2hvdyB0aXRsZVwiLFxuICBcIlRPRk5cIjogXCJPcmlnaW5hbCBmaWxlbmFtZVwiLFxuICBcIlRPTFlcIjogXCJPcmlnaW5hbCBseXJpY2lzdChzKS90ZXh0IHdyaXRlcihzKVwiLFxuICBcIlRPUEVcIjogXCJPcmlnaW5hbCBhcnRpc3QocykvcGVyZm9ybWVyKHMpXCIsXG4gIFwiVE9SWVwiOiBcIk9yaWdpbmFsIHJlbGVhc2UgeWVhclwiLFxuICBcIlRPV05cIjogXCJGaWxlIG93bmVyL2xpY2Vuc2VlXCIsXG4gIFwiVFBFMVwiOiBcIkxlYWQgcGVyZm9ybWVyKHMpL1NvbG9pc3QocylcIixcbiAgXCJUUEUyXCI6IFwiQmFuZC9vcmNoZXN0cmEvYWNjb21wYW5pbWVudFwiLFxuICBcIlRQRTNcIjogXCJDb25kdWN0b3IvcGVyZm9ybWVyIHJlZmluZW1lbnRcIixcbiAgXCJUUEU0XCI6IFwiSW50ZXJwcmV0ZWQsIHJlbWl4ZWQsIG9yIG90aGVyd2lzZSBtb2RpZmllZCBieVwiLFxuICBcIlRQT1NcIjogXCJQYXJ0IG9mIGEgc2V0XCIsXG4gIFwiVFBST1wiOiBcIlByb2R1Y2VkIG5vdGljZVwiLFxuICBcIlRQVUJcIjogXCJQdWJsaXNoZXJcIixcbiAgXCJUUkNLXCI6IFwiVHJhY2sgbnVtYmVyL1Bvc2l0aW9uIGluIHNldFwiLFxuICBcIlRSREFcIjogXCJSZWNvcmRpbmcgZGF0ZXNcIixcbiAgXCJUUlNOXCI6IFwiSW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBuYW1lXCIsXG4gIFwiVFJTT1wiOiBcIkludGVybmV0IHJhZGlvIHN0YXRpb24gb3duZXJcIixcbiAgXCJUU09BXCI6IFwiQWxidW0gc29ydCBvcmRlclwiLFxuICBcIlRTT1BcIjogXCJQZXJmb3JtZXIgc29ydCBvcmRlclwiLFxuICBcIlRTT1RcIjogXCJUaXRsZSBzb3J0IG9yZGVyXCIsXG4gIFwiVFNJWlwiOiBcIlNpemVcIixcbiAgXCJUU1JDXCI6IFwiSVNSQyAoaW50ZXJuYXRpb25hbCBzdGFuZGFyZCByZWNvcmRpbmcgY29kZSlcIixcbiAgXCJUU1NFXCI6IFwiU29mdHdhcmUvSGFyZHdhcmUgYW5kIHNldHRpbmdzIHVzZWQgZm9yIGVuY29kaW5nXCIsXG4gIFwiVFNTVFwiOiBcIlNldCBzdWJ0aXRsZVwiLFxuICBcIlRZRVJcIjogXCJZZWFyXCIsXG4gIFwiVFhYWFwiOiBcIlVzZXIgZGVmaW5lZCB0ZXh0IGluZm9ybWF0aW9uIGZyYW1lXCIsXG4gIFwiVUZJRFwiOiBcIlVuaXF1ZSBmaWxlIGlkZW50aWZpZXJcIixcbiAgXCJVU0VSXCI6IFwiVGVybXMgb2YgdXNlXCIsXG4gIFwiVVNMVFwiOiBcIlVuc3ljaHJvbml6ZWQgbHlyaWMvdGV4dCB0cmFuc2NyaXB0aW9uXCIsXG4gIFwiV0NPTVwiOiBcIkNvbW1lcmNpYWwgaW5mb3JtYXRpb25cIixcbiAgXCJXQ09QXCI6IFwiQ29weXJpZ2h0L0xlZ2FsIGluZm9ybWF0aW9uXCIsXG4gIFwiV09BRlwiOiBcIk9mZmljaWFsIGF1ZGlvIGZpbGUgd2VicGFnZVwiLFxuICBcIldPQVJcIjogXCJPZmZpY2lhbCBhcnRpc3QvcGVyZm9ybWVyIHdlYnBhZ2VcIixcbiAgXCJXT0FTXCI6IFwiT2ZmaWNpYWwgYXVkaW8gc291cmNlIHdlYnBhZ2VcIixcbiAgXCJXT1JTXCI6IFwiT2ZmaWNpYWwgaW50ZXJuZXQgcmFkaW8gc3RhdGlvbiBob21lcGFnZVwiLFxuICBcIldQQVlcIjogXCJQYXltZW50XCIsXG4gIFwiV1BVQlwiOiBcIlB1Ymxpc2hlcnMgb2ZmaWNpYWwgd2VicGFnZVwiLFxuICBcIldYWFhcIjogXCJVc2VyIGRlZmluZWQgVVJMIGxpbmsgZnJhbWVcIlxufTtcblxudmFyIElEM3YyRnJhbWVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJRDN2MkZyYW1lUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJRDN2MkZyYW1lUmVhZGVyKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJRDN2MkZyYW1lUmVhZGVyLCBudWxsLCBbe1xuICAgIGtleTogXCJnZXRGcmFtZVJlYWRlckZ1bmN0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1lUmVhZGVyRnVuY3Rpb24oZnJhbWVJZCkge1xuICAgICAgaWYgKGZyYW1lSWQgaW4gZnJhbWVSZWFkZXJGdW5jdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZyYW1lUmVhZGVyRnVuY3Rpb25zW2ZyYW1lSWRdO1xuICAgICAgfSBlbHNlIGlmIChmcmFtZUlkWzBdID09PSBcIlRcIikge1xuICAgICAgICAvLyBBbGwgZnJhbWUgaWRzIHN0YXJ0aW5nIHdpdGggVCBhcmUgdGV4dCB0YWdzLlxuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbXCJUKlwiXTtcbiAgICAgIH0gZWxzZSBpZiAoZnJhbWVJZFswXSA9PT0gXCJXXCIpIHtcbiAgICAgICAgLy8gQWxsIGZyYW1lIGlkcyBzdGFydGluZyB3aXRoIFcgYXJlIHVybCB0YWdzLlxuICAgICAgICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbXCJXKlwiXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIGZyYW1lcyBjb25zaXN0cyBvZiBhIGZyYW1lIGhlYWRlciBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBmaWVsZHNcbiAgICAgKiBjb250YWluaW5nIHRoZSBhY3R1YWwgaW5mb3JtYXRpb24uXG4gICAgICogVGhlIGZyYW1lIElEIG1hZGUgb3V0IG9mIHRoZSBjaGFyYWN0ZXJzIGNhcGl0YWwgQS1aIGFuZCAwLTkuIElkZW50aWZpZXJzXG4gICAgICogYmVnaW5uaW5nIHdpdGggXCJYXCIsIFwiWVwiIGFuZCBcIlpcIiBhcmUgZm9yIGV4cGVyaW1lbnRhbCB1c2UgYW5kIGZyZWUgZm9yXG4gICAgICogZXZlcnlvbmUgdG8gdXNlLCB3aXRob3V0IHRoZSBuZWVkIHRvIHNldCB0aGUgZXhwZXJpbWVudGFsIGJpdCBpbiB0aGUgdGFnXG4gICAgICogaGVhZGVyLiBIYXZlIGluIG1pbmQgdGhhdCBzb21lb25lIGVsc2UgbWlnaHQgaGF2ZSB1c2VkIHRoZSBzYW1lIGlkZW50aWZpZXJcbiAgICAgKiBhcyB5b3UuIEFsbCBvdGhlciBpZGVudGlmaWVycyBhcmUgZWl0aGVyIHVzZWQgb3IgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuXG4gICAgICogVGhlIGZyYW1lIElEIGlzIGZvbGxvd2VkIGJ5IGEgc2l6ZSBkZXNjcmlwdG9yLCBtYWtpbmcgYSB0b3RhbCBoZWFkZXIgc2l6ZVxuICAgICAqIG9mIHRlbiBieXRlcyBpbiBldmVyeSBmcmFtZS4gVGhlIHNpemUgaXMgY2FsY3VsYXRlZCBhcyBmcmFtZSBzaXplIGV4Y2x1ZGluZ1xuICAgICAqIGZyYW1lIGhlYWRlciAoZnJhbWUgc2l6ZSAtIDEwKS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlYWRGcmFtZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZEZyYW1lcyhvZmZzZXQsIGVuZCwgZGF0YSwgaWQzaGVhZGVyLCB0YWdzKSB7XG4gICAgICB2YXIgZnJhbWVzID0ge307XG5cbiAgICAgIHZhciBmcmFtZUhlYWRlclNpemUgPSB0aGlzLl9nZXRGcmFtZUhlYWRlclNpemUoaWQzaGVhZGVyKTsgLy8gY29uc29sZS5sb2coJ2hlYWRlcicsIGlkM2hlYWRlcik7XG5cblxuICAgICAgd2hpbGUgKCAvLyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZWFkIGF0IGxlYXN0IHRoZSBmcmFtZSBoZWFkZXJcbiAgICAgIG9mZnNldCA8IGVuZCAtIGZyYW1lSGVhZGVyU2l6ZSkge1xuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5fcmVhZEZyYW1lSGVhZGVyKGRhdGEsIG9mZnNldCwgaWQzaGVhZGVyKTtcblxuICAgICAgICB2YXIgZnJhbWVJZCA9IGhlYWRlci5pZDsgLy8gTm8gZnJhbWUgSUQgc29tZXRpbWVzIG1lYW5zIGl0J3MgdGhlIGxhc3QgZnJhbWUgKEdURk8pLlxuXG4gICAgICAgIGlmICghZnJhbWVJZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZsYWdzID0gaGVhZGVyLmZsYWdzO1xuICAgICAgICB2YXIgZnJhbWVTaXplID0gaGVhZGVyLnNpemU7XG4gICAgICAgIHZhciBmcmFtZURhdGFPZmZzZXQgPSBvZmZzZXQgKyBoZWFkZXIuaGVhZGVyU2l6ZTtcbiAgICAgICAgdmFyIGZyYW1lRGF0YSA9IGRhdGE7IC8vIGNvbnNvbGUubG9nKG9mZnNldCwgZnJhbWVJZCwgaGVhZGVyLnNpemUgKyBoZWFkZXIuaGVhZGVyU2l6ZSwgZmxhZ3MgJiYgZmxhZ3MuZm9ybWF0LnVuc3luY2hyb25pc2F0aW9uKTtcbiAgICAgICAgLy8gYWR2YW5jZSBkYXRhIG9mZnNldCB0byB0aGUgbmV4dCBmcmFtZSBkYXRhXG5cbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5oZWFkZXJTaXplICsgaGVhZGVyLnNpemU7IC8vIHNraXAgdW53YW50ZWQgdGFnc1xuXG4gICAgICAgIGlmICh0YWdzICYmIHRhZ3MuaW5kZXhPZihmcmFtZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBXb3JrYXJvdW5kOiBNUDNleHQgVjMuMy4xNyBwbGFjZXMgYSBub24tY29tcGxpYW50IHBhZGRpbmcgc3RyaW5nIGF0XG4gICAgICAgIC8vIHRoZSBlbmQgb2YgdGhlIElEM3YyIGhlYWRlci4gQSBzdHJpbmcgbGlrZSBcIk1QM2V4dCBWMy4zLjE5KGFuc2kpXCJcbiAgICAgICAgLy8gaXMgYWRkZWQgbXVsdGlwbGUgdGltZXMgYXQgdGhlIGVuZCBvZiB0aGUgSUQzIHRhZy4gTW9yZSBpbmZvcm1hdGlvblxuICAgICAgICAvLyBhYm91dCB0aGlzIGlzc3VlIGNhbiBiZSBmb3VuZCBhdFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYWFkc20vanNtZWRpYXRhZ3MvaXNzdWVzLzU4I2lzc3VlY29tbWVudC0zMTM4NjUzMzZcblxuXG4gICAgICAgIGlmIChmcmFtZUlkID09PSAnTVAzZScgfHwgZnJhbWVJZCA9PT0gJ1xceDAwTVAzJyB8fCBmcmFtZUlkID09PSAnXFx4MDBcXHgwME1QJyB8fCBmcmFtZUlkID09PSAnIE1QMycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1bnN5bmNEYXRhO1xuXG4gICAgICAgIGlmIChmbGFncyAmJiBmbGFncy5mb3JtYXQudW5zeW5jaHJvbmlzYXRpb24pIHtcbiAgICAgICAgICBmcmFtZURhdGEgPSB0aGlzLmdldFVuc3luY0ZpbGVSZWFkZXIoZnJhbWVEYXRhLCBmcmFtZURhdGFPZmZzZXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgZnJhbWVEYXRhT2Zmc2V0ID0gMDtcbiAgICAgICAgICBmcmFtZVNpemUgPSBmcmFtZURhdGEuZ2V0U2l6ZSgpO1xuICAgICAgICB9IC8vIHRoZSBmaXJzdCA0IGJ5dGVzIGFyZSB0aGUgcmVhbCBkYXRhIHNpemVcbiAgICAgICAgLy8gKGFmdGVyIHVuc3luY2hyb25pc2F0aW9uICYmIGVuY3J5cHRpb24pXG5cblxuICAgICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MuZm9ybWF0LmRhdGFfbGVuZ3RoX2luZGljYXRvcikge1xuICAgICAgICAgIC8vIHZhciBmcmFtZURhdGFTaXplID0gZnJhbWVEYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KGZyYW1lRGF0YU9mZnNldCk7XG4gICAgICAgICAgZnJhbWVEYXRhT2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgZnJhbWVTaXplIC09IDQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVhZEZyYW1lRnVuYyA9IElEM3YyRnJhbWVSZWFkZXIuZ2V0RnJhbWVSZWFkZXJGdW5jdGlvbihmcmFtZUlkKTtcbiAgICAgICAgdmFyIHBhcnNlZERhdGEgPSByZWFkRnJhbWVGdW5jID8gcmVhZEZyYW1lRnVuYy5hcHBseSh0aGlzLCBbZnJhbWVEYXRhT2Zmc2V0LCBmcmFtZVNpemUsIGZyYW1lRGF0YSwgZmxhZ3MsIGlkM2hlYWRlcl0pIDogbnVsbDtcblxuICAgICAgICB2YXIgZGVzYyA9IHRoaXMuX2dldEZyYW1lRGVzY3JpcHRpb24oZnJhbWVJZCk7XG5cbiAgICAgICAgdmFyIGZyYW1lID0ge1xuICAgICAgICAgIGlkOiBmcmFtZUlkLFxuICAgICAgICAgIHNpemU6IGZyYW1lU2l6ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICBkYXRhOiBwYXJzZWREYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZyYW1lSWQgaW4gZnJhbWVzKSB7XG4gICAgICAgICAgaWYgKGZyYW1lc1tmcmFtZUlkXS5pZCkge1xuICAgICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdID0gW2ZyYW1lc1tmcmFtZUlkXV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnJhbWVzW2ZyYW1lSWRdLnB1c2goZnJhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyYW1lc1tmcmFtZUlkXSA9IGZyYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmcmFtZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGcmFtZUhlYWRlclNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZyYW1lSGVhZGVyU2l6ZShpZDNoZWFkZXIpIHtcbiAgICAgIHZhciBtYWpvciA9IGlkM2hlYWRlci5tYWpvcjtcblxuICAgICAgaWYgKG1ham9yID09IDIpIHtcbiAgICAgICAgcmV0dXJuIDY7XG4gICAgICB9IGVsc2UgaWYgKG1ham9yID09IDMgfHwgbWFqb3IgPT0gNCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRGcmFtZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEZyYW1lSGVhZGVyKGRhdGEsIG9mZnNldCwgaWQzaGVhZGVyKSB7XG4gICAgICB2YXIgbWFqb3IgPSBpZDNoZWFkZXIubWFqb3I7XG4gICAgICB2YXIgZmxhZ3MgPSBudWxsO1xuXG4gICAgICB2YXIgZnJhbWVIZWFkZXJTaXplID0gdGhpcy5fZ2V0RnJhbWVIZWFkZXJTaXplKGlkM2hlYWRlcik7XG5cbiAgICAgIHN3aXRjaCAobWFqb3IpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDMpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldEludGVnZXIyNEF0KG9mZnNldCArIDMsIHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB2YXIgZnJhbWVJZCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0LCA0KTtcbiAgICAgICAgICB2YXIgZnJhbWVTaXplID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0ICsgNCwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHZhciBmcmFtZUlkID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQsIDQpO1xuICAgICAgICAgIHZhciBmcmFtZVNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCArIDQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWVJZCA9PSBTdHJpbmcuZnJvbUNoYXJDb2RlKDAsIDAsIDApIHx8IGZyYW1lSWQgPT0gU3RyaW5nLmZyb21DaGFyQ29kZSgwLCAwLCAwLCAwKSkge1xuICAgICAgICBmcmFtZUlkID0gXCJcIjtcbiAgICAgIH0gLy8gaWYgZnJhbWVJZCBpcyBlbXB0eSB0aGVuIGl0J3MgdGhlIGxhc3QgZnJhbWVcblxuXG4gICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICAvLyByZWFkIGZyYW1lIG1lc3NhZ2UgYW5kIGZvcm1hdCBmbGFnc1xuICAgICAgICBpZiAobWFqb3IgPiAyKSB7XG4gICAgICAgICAgZmxhZ3MgPSB0aGlzLl9yZWFkRnJhbWVGbGFncyhkYXRhLCBvZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImlkXCI6IGZyYW1lSWQgfHwgXCJcIixcbiAgICAgICAgXCJzaXplXCI6IGZyYW1lU2l6ZSB8fCAwLFxuICAgICAgICBcImhlYWRlclNpemVcIjogZnJhbWVIZWFkZXJTaXplIHx8IDAsXG4gICAgICAgIFwiZmxhZ3NcIjogZmxhZ3NcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkRnJhbWVGbGFnc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEZyYW1lRmxhZ3MoZGF0YSwgb2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdGFnX2FsdGVyX3ByZXNlcnZhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNiksXG4gICAgICAgICAgZmlsZV9hbHRlcl9wcmVzZXJ2YXRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDUpLFxuICAgICAgICAgIHJlYWRfb25seTogZGF0YS5pc0JpdFNldEF0KG9mZnNldCwgNClcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgZ3JvdXBpbmdfaWRlbnRpdHk6IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCA3KSxcbiAgICAgICAgICBjb21wcmVzc2lvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDMpLFxuICAgICAgICAgIGVuY3J5cHRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCAyKSxcbiAgICAgICAgICB1bnN5bmNocm9uaXNhdGlvbjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDEpLFxuICAgICAgICAgIGRhdGFfbGVuZ3RoX2luZGljYXRvcjogZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDEsIDApXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGcmFtZURlc2NyaXB0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGcmFtZURlc2NyaXB0aW9uKGZyYW1lSWQpIHtcbiAgICAgIGlmIChmcmFtZUlkIGluIEZSQU1FX0RFU0NSSVBUSU9OUykge1xuICAgICAgICByZXR1cm4gRlJBTUVfREVTQ1JJUFRJT05TW2ZyYW1lSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdVbmtub3duJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VW5zeW5jRmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVbnN5bmNGaWxlUmVhZGVyKGRhdGEsIG9mZnNldCwgc2l6ZSkge1xuICAgICAgdmFyIGZyYW1lRGF0YSA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIHNpemUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lRGF0YS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYgKGZyYW1lRGF0YVtpXSA9PT0gMHhmZiAmJiBmcmFtZURhdGFbaSArIDFdID09PSAweDAwKSB7XG4gICAgICAgICAgZnJhbWVEYXRhLnNwbGljZShpICsgMSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBcnJheUZpbGVSZWFkZXIoZnJhbWVEYXRhKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSUQzdjJGcmFtZVJlYWRlcjtcbn0oKTtcblxuO1xudmFyIGZyYW1lUmVhZGVyRnVuY3Rpb25zID0ge307XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydBUElDJ10gPSBmdW5jdGlvbiByZWFkUGljdHVyZUZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBzdGFydCA9IG9mZnNldDtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG5cbiAgc3dpdGNoIChpZDNoZWFkZXIgJiYgaWQzaGVhZGVyLm1ham9yKSB7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIGZvcm1hdCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgMSwgMyk7XG4gICAgICBvZmZzZXQgKz0gNDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOlxuICAgIGNhc2UgNDpcbiAgICAgIHZhciBmb3JtYXQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSwgbGVuZ3RoIC0gMSk7XG4gICAgICBvZmZzZXQgKz0gMSArIGZvcm1hdC5ieXRlc1JlYWRDb3VudDtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IHJlYWQgSUQzdjIgbWFqb3IgdmVyc2lvbi5cIik7XG4gIH1cblxuICB2YXIgYml0ZSA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gIHZhciB0eXBlID0gUElDVFVSRV9UWVBFW2JpdGVdO1xuICB2YXIgZGVzYyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAob2Zmc2V0IC0gc3RhcnQpIC0gMSwgY2hhcnNldCk7XG4gIG9mZnNldCArPSAxICsgZGVzYy5ieXRlc1JlYWRDb3VudDtcbiAgcmV0dXJuIHtcbiAgICBcImZvcm1hdFwiOiBmb3JtYXQudG9TdHJpbmcoKSxcbiAgICBcInR5cGVcIjogdHlwZSxcbiAgICBcImRlc2NyaXB0aW9uXCI6IGRlc2MudG9TdHJpbmcoKSxcbiAgICBcImRhdGFcIjogZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgc3RhcnQgKyBsZW5ndGggLSBvZmZzZXQpXG4gIH07XG59OyAvLyBJRDN2MiBjaGFwdGVycyBhY2NvcmRpbmcgdG8gaHR0cDovL2lkMy5vcmcvaWQzdjItY2hhcHRlcnMtMS4wXG5cblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0NIQVAnXSA9IGZ1bmN0aW9uIHJlYWRDaGFwdGVyRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gb2Zmc2V0O1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpZCA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpKTtcbiAgcmVzdWx0LmlkID0gaWQudG9TdHJpbmcoKTtcbiAgb2Zmc2V0ICs9IGlkLmJ5dGVzUmVhZENvdW50O1xuICByZXN1bHQuc3RhcnRUaW1lID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5lbmRUaW1lID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHJlc3VsdC5zdGFydE9mZnNldCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gIG9mZnNldCArPSA0O1xuICByZXN1bHQuZW5kT2Zmc2V0ID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgb2Zmc2V0ICs9IDQ7XG4gIHZhciByZW1haW5pbmdMZW5ndGggPSBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpO1xuICByZXN1bHQuc3ViRnJhbWVzID0gdGhpcy5yZWFkRnJhbWVzKG9mZnNldCwgb2Zmc2V0ICsgcmVtYWluaW5nTGVuZ3RoLCBkYXRhLCBpZDNoZWFkZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gSUQzdjIgdGFibGUgb2YgY29udGVudHMgYWNjb3JkaW5nIHRvIGh0dHA6Ly9pZDMub3JnL2lkM3YyLWNoYXB0ZXJzLTEuMFxuXG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDVE9DJ10gPSBmdW5jdGlvbiByZWFkVGFibGVPZkNvbnRlbnRzRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gb2Zmc2V0O1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIGNoaWxkRWxlbWVudElkczogW10sXG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICB0b3BMZXZlbDogdW5kZWZpbmVkLFxuICAgIG9yZGVyZWQ6IHVuZGVmaW5lZCxcbiAgICBlbnRyeUNvdW50OiB1bmRlZmluZWQsXG4gICAgc3ViRnJhbWVzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIGlkID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICByZXN1bHQuaWQgPSBpZC50b1N0cmluZygpO1xuICBvZmZzZXQgKz0gaWQuYnl0ZXNSZWFkQ291bnQ7XG4gIHJlc3VsdC50b3BMZXZlbCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDEpO1xuICByZXN1bHQub3JkZXJlZCA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDApO1xuICBvZmZzZXQrKztcbiAgcmVzdWx0LmVudHJ5Q291bnQgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuICBvZmZzZXQrKztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5lbnRyeUNvdW50OyBpKyspIHtcbiAgICB2YXIgY2hpbGRJZCA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGggLSAob2Zmc2V0IC0gb3JpZ2luYWxPZmZzZXQpKSk7XG4gICAgcmVzdWx0LmNoaWxkRWxlbWVudElkcy5wdXNoKGNoaWxkSWQudG9TdHJpbmcoKSk7XG4gICAgb2Zmc2V0ICs9IGNoaWxkSWQuYnl0ZXNSZWFkQ291bnQ7XG4gIH1cblxuICB2YXIgcmVtYWluaW5nTGVuZ3RoID0gbGVuZ3RoIC0gKG9mZnNldCAtIG9yaWdpbmFsT2Zmc2V0KTtcbiAgcmVzdWx0LnN1YkZyYW1lcyA9IHRoaXMucmVhZEZyYW1lcyhvZmZzZXQsIG9mZnNldCArIHJlbWFpbmluZ0xlbmd0aCwgZGF0YSwgaWQzaGVhZGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT01NJ10gPSBmdW5jdGlvbiByZWFkQ29tbWVudHNGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICB2YXIgbGFuZ3VhZ2UgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDEsIDMpO1xuICB2YXIgc2hvcnRkZXNjID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDQsIGxlbmd0aCAtIDQsIGNoYXJzZXQpO1xuICBvZmZzZXQgKz0gNCArIHNob3J0ZGVzYy5ieXRlc1JlYWRDb3VudDtcbiAgdmFyIHRleHQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBzdGFydCArIGxlbmd0aCAtIG9mZnNldCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgIHNob3J0X2Rlc2NyaXB0aW9uOiBzaG9ydGRlc2MudG9TdHJpbmcoKSxcbiAgICB0ZXh0OiB0ZXh0LnRvU3RyaW5nKClcbiAgfTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT00nXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydDT01NJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydQSUMnXSA9IGZ1bmN0aW9uIChvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICByZXR1cm4gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ0FQSUMnXShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcik7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snUENOVCddID0gZnVuY3Rpb24gcmVhZENvdW50ZXJGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICAvLyBGSVhNRTogaW1wbGVtZW50IHRoZSByZXN0IG9mIHRoZSBzcGVjXG4gIHJldHVybiBkYXRhLmdldExvbmdBdChvZmZzZXQsIGZhbHNlKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDTlQnXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydQQ05UJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydUKiddID0gZnVuY3Rpb24gcmVhZFRleHRGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgcmV0dXJuIGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxLCBjaGFyc2V0KS50b1N0cmluZygpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RYWFgnXSA9IGZ1bmN0aW9uIHJlYWRUZXh0RnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHJldHVybiBnZXRVc2VyRGVmaW5lZEZpZWxkcyhvZmZzZXQsIGxlbmd0aCwgZGF0YSwgY2hhcnNldCk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snV1hYWCddID0gZnVuY3Rpb24gcmVhZFVybEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICByZXR1cm4gZ2V0VXNlckRlZmluZWRGaWVsZHMob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGNoYXJzZXQpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1cqJ10gPSBmdW5jdGlvbiByZWFkVXJsRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIGxlbmd0aCwgJ2lzby04ODU5LTEnKS50b1N0cmluZygpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDT04nXSA9IGZ1bmN0aW9uIHJlYWRHZW5yZUZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncykge1xuICB2YXIgdGV4dCA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydUKiddLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL15cXChcXGQrXFwpLywgJycpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDTyddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1RDT04nXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VTTFQnXSA9IGZ1bmN0aW9uIHJlYWRMeXJpY3NGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICB2YXIgbGFuZ3VhZ2UgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDEsIDMpO1xuICB2YXIgZGVzY3JpcHRvciA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA0LCBsZW5ndGggLSA0LCBjaGFyc2V0KTtcbiAgb2Zmc2V0ICs9IDQgKyBkZXNjcmlwdG9yLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgbHlyaWNzID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgc3RhcnQgKyBsZW5ndGggLSBvZmZzZXQsIGNoYXJzZXQpO1xuICByZXR1cm4ge1xuICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICBkZXNjcmlwdG9yOiBkZXNjcmlwdG9yLnRvU3RyaW5nKCksXG4gICAgbHlyaWNzOiBseXJpY3MudG9TdHJpbmcoKVxuICB9O1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VMVCddID0gZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VTTFQnXTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1VGSUQnXSA9IGZ1bmN0aW9uIHJlYWRMeXJpY3NGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgb3duZXJJZGVudGlmaWVyID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCkpO1xuICBvZmZzZXQgKz0gb3duZXJJZGVudGlmaWVyLmJ5dGVzUmVhZENvdW50O1xuICB2YXIgaWRlbnRpZmllciA9IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCAtIG93bmVySWRlbnRpZmllci5ieXRlc1JlYWRDb3VudCk7XG4gIHJldHVybiB7XG4gICAgb3duZXJJZGVudGlmaWVyOiBvd25lcklkZW50aWZpZXIudG9TdHJpbmcoKSxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyXG4gIH07XG59O1xuXG5mdW5jdGlvbiBnZXRUZXh0RW5jb2RpbmcoYml0ZSkge1xuICB2YXIgY2hhcnNldDtcblxuICBzd2l0Y2ggKGJpdGUpIHtcbiAgICBjYXNlIDB4MDA6XG4gICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDB4MDE6XG4gICAgICBjaGFyc2V0ID0gJ3V0Zi0xNic7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMHgwMjpcbiAgICAgIGNoYXJzZXQgPSAndXRmLTE2YmUnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDB4MDM6XG4gICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gIH1cblxuICByZXR1cm4gY2hhcnNldDtcbn0gLy8gSGFuZGxlcyByZWFkaW5nIGRlc2NyaXB0aW9uL2RhdGEgZnJvbSBlaXRoZXIgaHR0cDovL2lkMy5vcmcvaWQzdjIuMy4wI1VzZXJfZGVmaW5lZF90ZXh0X2luZm9ybWF0aW9uX2ZyYW1lXG4vLyBhbmQgaHR0cDovL2lkMy5vcmcvaWQzdjIuMy4wI1VzZXJfZGVmaW5lZF9VUkxfbGlua19mcmFtZVxuXG5cbmZ1bmN0aW9uIGdldFVzZXJEZWZpbmVkRmllbGRzKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBjaGFyc2V0KSB7XG4gIHZhciB1c2VyRGVzYyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxLCBsZW5ndGggLSAxLCBjaGFyc2V0KTtcbiAgdmFyIHVzZXJEZWZpbmVkRGF0YSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAxICsgdXNlckRlc2MuYnl0ZXNSZWFkQ291bnQsIGxlbmd0aCAtIDEgLSB1c2VyRGVzYy5ieXRlc1JlYWRDb3VudCwgY2hhcnNldCk7XG4gIHJldHVybiB7XG4gICAgdXNlcl9kZXNjcmlwdGlvbjogdXNlckRlc2MudG9TdHJpbmcoKSxcbiAgICBkYXRhOiB1c2VyRGVmaW5lZERhdGEudG9TdHJpbmcoKVxuICB9O1xufVxuXG52YXIgUElDVFVSRV9UWVBFID0gW1wiT3RoZXJcIiwgXCIzMngzMiBwaXhlbHMgJ2ZpbGUgaWNvbicgKFBORyBvbmx5KVwiLCBcIk90aGVyIGZpbGUgaWNvblwiLCBcIkNvdmVyIChmcm9udClcIiwgXCJDb3ZlciAoYmFjaylcIiwgXCJMZWFmbGV0IHBhZ2VcIiwgXCJNZWRpYSAoZS5nLiBsYWJlbCBzaWRlIG9mIENEKVwiLCBcIkxlYWQgYXJ0aXN0L2xlYWQgcGVyZm9ybWVyL3NvbG9pc3RcIiwgXCJBcnRpc3QvcGVyZm9ybWVyXCIsIFwiQ29uZHVjdG9yXCIsIFwiQmFuZC9PcmNoZXN0cmFcIiwgXCJDb21wb3NlclwiLCBcIkx5cmljaXN0L3RleHQgd3JpdGVyXCIsIFwiUmVjb3JkaW5nIExvY2F0aW9uXCIsIFwiRHVyaW5nIHJlY29yZGluZ1wiLCBcIkR1cmluZyBwZXJmb3JtYW5jZVwiLCBcIk1vdmllL3ZpZGVvIHNjcmVlbiBjYXB0dXJlXCIsIFwiQSBicmlnaHQgY29sb3VyZWQgZmlzaFwiLCBcIklsbHVzdHJhdGlvblwiLCBcIkJhbmQvYXJ0aXN0IGxvZ290eXBlXCIsIFwiUHVibGlzaGVyL1N0dWRpbyBsb2dvdHlwZVwiXTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjJGcmFtZVJlYWRlcjtcblxufSx7XCIuL0FycmF5RmlsZVJlYWRlclwiOjMsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9TdHJpbmdVdGlsc1wiOjEzfV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgSUQzdjJGcmFtZVJlYWRlciA9IHJlcXVpcmUoJy4vSUQzdjJGcmFtZVJlYWRlcicpO1xuXG52YXIgSUQzX0hFQURFUl9TSVpFID0gMTA7XG5cbnZhciBJRDN2MlRhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhJRDN2MlRhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBJRDN2MlRhZ1JlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSUQzdjJUYWdSZWFkZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihJRDN2MlRhZ1JlYWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSUQzdjJUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoWzYsIDldLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoIC8vIFRoZSB0YWcgc2l6ZSBkb2VzIG5vdCBpbmNsdWRlIHRoZSBoZWFkZXIgc2l6ZS5cbiAgICAgICAgICBbMCwgSUQzX0hFQURFUl9TSVpFICsgbWVkaWFGaWxlUmVhZGVyLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KDYpIC0gMV0sIGNhbGxiYWNrcyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3MpIHtcbiAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgdmFyIG1ham9yID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgMyk7XG5cbiAgICAgIGlmIChtYWpvciA+IDQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJJRDNcIixcbiAgICAgICAgICBcInZlcnNpb25cIjogXCI+Mi40XCIsXG4gICAgICAgICAgXCJ0YWdzXCI6IHt9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciByZXZpc2lvbiA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDQpO1xuICAgICAgdmFyIHVuc3luY2ggPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgNSwgNyk7XG4gICAgICB2YXIgeGhlYWRlciA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyA1LCA2KTtcbiAgICAgIHZhciB4aW5kaWNhdG9yID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDUsIDUpO1xuICAgICAgdmFyIHNpemUgPSBkYXRhLmdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCArIDYpO1xuICAgICAgb2Zmc2V0ICs9IDEwO1xuXG4gICAgICBpZiAoeGhlYWRlcikge1xuICAgICAgICAvLyBXZSBza2lwIHRoZSBleHRlbmRlZCBoZWFkZXIgYW5kIGRvbid0IG9mZmVyIHN1cHBvcnQgZm9yIGl0IHJpZ2h0IG5vdy5cbiAgICAgICAgaWYgKG1ham9yID09PSA0KSB7XG4gICAgICAgICAgdmFyIHhoZWFkZXJzaXplID0gZGF0YS5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChvZmZzZXQpO1xuICAgICAgICAgIG9mZnNldCArPSB4aGVhZGVyc2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeGhlYWRlcnNpemUgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpOyAvLyBUaGUgJ0V4dGVuZGVkIGhlYWRlciBzaXplJywgY3VycmVudGx5IDYgb3IgMTAgYnl0ZXMsIGV4Y2x1ZGVzIGl0c2VsZi5cblxuICAgICAgICAgIG9mZnNldCArPSB4aGVhZGVyc2l6ZSArIDQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGlkMyA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiSUQzXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiAnMi4nICsgbWFqb3IgKyAnLicgKyByZXZpc2lvbixcbiAgICAgICAgXCJtYWpvclwiOiBtYWpvcixcbiAgICAgICAgXCJyZXZpc2lvblwiOiByZXZpc2lvbixcbiAgICAgICAgXCJmbGFnc1wiOiB7XG4gICAgICAgICAgXCJ1bnN5bmNocm9uaXNhdGlvblwiOiB1bnN5bmNoLFxuICAgICAgICAgIFwiZXh0ZW5kZWRfaGVhZGVyXCI6IHhoZWFkZXIsXG4gICAgICAgICAgXCJleHBlcmltZW50YWxfaW5kaWNhdG9yXCI6IHhpbmRpY2F0b3IsXG4gICAgICAgICAgLy8gVE9ETzogZm9vdGVyX3ByZXNlbnRcbiAgICAgICAgICBcImZvb3Rlcl9wcmVzZW50XCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2l6ZVwiOiBzaXplLFxuICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgIH07XG5cbiAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgIHZhciBleHBhbmRlZFRhZ3MgPSB0aGlzLl9leHBhbmRTaG9ydGN1dFRhZ3ModGFncyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRFbmQgPSBzaXplICsgMTBcbiAgICAgIC8qaGVhZGVyIHNpemUqL1xuICAgICAgOyAvLyBXaGVuIHRoaXMgZmxhZyBpcyBzZXQgdGhlIGVudGlyZSB0YWcgbmVlZHMgdG8gYmUgdW4tdW5zeW5jaHJvbmlzZWRcbiAgICAgIC8vIGJlZm9yZSBwYXJzaW5nIGVhY2ggaW5kaXZpZHVhbCBmcmFtZS4gSW5kaXZpZHVhbCBmcmFtZSBzaXplcyBtaWdodCBub3RcbiAgICAgIC8vIHRha2UgdW5zeW5jaHJvbmlzYXRpb24gaW50byBjb25zaWRlcmF0aW9uIHdoZW4gaXQncyBzZXQgb24gdGhlIHRhZ1xuICAgICAgLy8gaGVhZGVyLlxuXG4gICAgICBpZiAoaWQzLmZsYWdzLnVuc3luY2hyb25pc2F0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBJRDN2MkZyYW1lUmVhZGVyLmdldFVuc3luY0ZpbGVSZWFkZXIoZGF0YSwgb2Zmc2V0LCBzaXplKTtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgb2Zmc2V0RW5kID0gZGF0YS5nZXRTaXplKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmcmFtZXMgPSBJRDN2MkZyYW1lUmVhZGVyLnJlYWRGcmFtZXMob2Zmc2V0LCBvZmZzZXRFbmQsIGRhdGEsIGlkMywgZXhwYW5kZWRUYWdzKTsgLy8gY3JlYXRlIHNob3J0Y3V0cyBmb3IgbW9zdCBjb21tb24gZGF0YS5cblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBTSE9SVENVVFMpIHtcbiAgICAgICAgaWYgKFNIT1JUQ1VUUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHZhciBmcmFtZURhdGEgPSB0aGlzLl9nZXRGcmFtZURhdGEoZnJhbWVzLCBTSE9SVENVVFNbbmFtZV0pO1xuXG4gICAgICAgICAgaWYgKGZyYW1lRGF0YSkge1xuICAgICAgICAgICAgaWQzLnRhZ3NbbmFtZV0gPSBmcmFtZURhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGZyYW1lIGluIGZyYW1lcykge1xuICAgICAgICBpZiAoZnJhbWVzLmhhc093blByb3BlcnR5KGZyYW1lKSkge1xuICAgICAgICAgIGlkMy50YWdzW2ZyYW1lXSA9IGZyYW1lc1tmcmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZyYW1lRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnJhbWVEYXRhKGZyYW1lcywgaWRzKSB7XG4gICAgICB2YXIgZnJhbWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBpZDsgaWQgPSBpZHNbaV07IGkrKykge1xuICAgICAgICBpZiAoaWQgaW4gZnJhbWVzKSB7XG4gICAgICAgICAgaWYgKGZyYW1lc1tpZF0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZXNbaWRdWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lc1tpZF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZyYW1lLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRjdXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0Y3V0cygpIHtcbiAgICAgIHJldHVybiBTSE9SVENVVFM7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgLy8gSUQzIGhlYWRlclxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IElEM19IRUFERVJfU0laRVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHZhciBpZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCB0YWdJZGVudGlmaWVyLnNsaWNlKDAsIDMpKTtcbiAgICAgIHJldHVybiBpZCA9PT0gJ0lEMyc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElEM3YyVGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG5cbnZhciBTSE9SVENVVFMgPSB7XG4gIFwidGl0bGVcIjogW1wiVElUMlwiLCBcIlRUMlwiXSxcbiAgXCJhcnRpc3RcIjogW1wiVFBFMVwiLCBcIlRQMVwiXSxcbiAgXCJhbGJ1bVwiOiBbXCJUQUxCXCIsIFwiVEFMXCJdLFxuICBcInllYXJcIjogW1wiVFlFUlwiLCBcIlRZRVwiXSxcbiAgXCJjb21tZW50XCI6IFtcIkNPTU1cIiwgXCJDT01cIl0sXG4gIFwidHJhY2tcIjogW1wiVFJDS1wiLCBcIlRSS1wiXSxcbiAgXCJnZW5yZVwiOiBbXCJUQ09OXCIsIFwiVENPXCJdLFxuICBcInBpY3R1cmVcIjogW1wiQVBJQ1wiLCBcIlBJQ1wiXSxcbiAgXCJseXJpY3NcIjogW1wiVVNMVFwiLCBcIlVMVFwiXVxufTtcbm1vZHVsZS5leHBvcnRzID0gSUQzdjJUYWdSZWFkZXI7XG5cbn0se1wiLi9JRDN2MkZyYW1lUmVhZGVyXCI6OCxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIFN1cHBvcnQgZm9yIGlUdW5lcy1zdHlsZSBtNGEgdGFnc1xuICogU2VlOlxuICogICBodHRwOi8vYXRvbWljcGFyc2xleS5zb3VyY2Vmb3JnZS5uZXQvbXBlZy00ZmlsZXMuaHRtbFxuICogICBodHRwOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9tYWMvbGlicmFyeS9kb2N1bWVudGF0aW9uL1F1aWNrVGltZS9RVEZGL01ldGFkYXRhL01ldGFkYXRhLmh0bWxcbiAqIEF1dGhvcmVkIGJ5IEpvc2h1YSBLaWZlciA8am9zaHVhLmtpZmVyIGdtYWlsLmNvbT5cbiAqIFxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhVGFnUmVhZGVyJyk7XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL01lZGlhRmlsZVJlYWRlcicpO1xuXG52YXIgTVA0VGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFUYWdSZWFkZXIpIHtcbiAgX2luaGVyaXRzKE1QNFRhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBNUDRUYWdSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1QNFRhZ1JlYWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1QNFRhZ1JlYWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTVA0VGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICAvLyBNUDQgbWV0YWRhdGEgaXNuJ3QgbG9jYXRlZCBpbiBhIHNwZWNpZmljIGxvY2F0aW9uIG9mIHRoZSBmaWxlLiBSb3VnaGx5XG4gICAgICAvLyBzcGVha2luZywgaXQncyBjb21wb3NlZCBvZiBibG9ja3MgY2hhaW5lZCB0b2dldGhlciBsaWtlIGEgbGlua2VkIGxpc3QuXG4gICAgICAvLyBUaGVzZSBibG9ja3MgYXJlIGNhbGxlZCBhdG9tcyAob3IgYm94ZXMpLlxuICAgICAgLy8gRWFjaCBhdG9tIG9mIHRoZSBsaXN0IGNhbiBoYXZlIGl0cyBvd24gY2hpbGQgbGlua2VkIGxpc3QuIEF0b21zIGluIHRoaXNcbiAgICAgIC8vIHNpdHVhdGlvbiBkbyBub3QgcG9zc2VzcyBhbnkgZGF0YSBhbmQgYXJlIGNhbGxlZCBcImNvbnRhaW5lclwiIGFzIHRoZXkgb25seVxuICAgICAgLy8gY29udGFpbiBvdGhlciBhdG9tcy5cbiAgICAgIC8vIE90aGVyIGF0b21zIHJlcHJlc2VudCBhIHBhcnRpY3VsYXIgc2V0IG9mIGRhdGEsIGxpa2UgYXVkaW8sIHZpZGVvIG9yXG4gICAgICAvLyBtZXRhZGF0YS4gSW4gb3JkZXIgdG8gZmluZCBhbmQgbG9hZCBhbGwgdGhlIGludGVyZXN0aW5nIGF0b21zIHdlIG5lZWRcbiAgICAgIC8vIHRvIHRyYXZlcnNlIHRoZSBlbnRpcmUgbGlua2VkIGxpc3Qgb2YgYXRvbXMgYW5kIG9ubHkgbG9hZCB0aGUgb25lc1xuICAgICAgLy8gYXNzb2NpYXRlZCB3aXRoIG1ldGFkYXRhLlxuICAgICAgLy8gVGhlIG1ldGFkYXRhIGF0b21zIGNhbiBiZSBmaW5kIHVuZGVyIHRoZSBcIm1vb3YudWR0YS5tZXRhLmlsc3RcIiBoaWVyYXJjaHkuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIExvYWQgdGhlIGhlYWRlciBvZiB0aGUgZmlyc3QgYXRvbVxuXG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFswLCAxNl0sIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCAwLCBcIlwiLCBjYWxsYmFja3MpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9sb2FkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIHBhcmVudEF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKSB7XG4gICAgICBpZiAob2Zmc2V0ID49IG1lZGlhRmlsZVJlYWRlci5nZXRTaXplKCkpIHtcbiAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gdGhpczsgLy8gOCBpcyB0aGUgc2l6ZSBvZiB0aGUgYXRvbVNpemUgYW5kIGF0b21OYW1lIGZpZWxkcy5cbiAgICAgIC8vIFdoZW4gcmVhZGluZyB0aGUgY3VycmVudCBibG9jayB3ZSBhbHdheXMgcmVhZCA4IG1vcmUgYnl0ZXMgaW4gb3JkZXJcbiAgICAgIC8vIHRvIGFsc28gcmVhZCB0aGUgaGVhZGVyIG9mIHRoZSBuZXh0IGJsb2NrLlxuXG4gICAgICB2YXIgYXRvbVNpemUgPSBtZWRpYUZpbGVSZWFkZXIuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChhdG9tU2l6ZSA9PSAwIHx8IGlzTmFOKGF0b21TaXplKSkge1xuICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0b21OYW1lID0gbWVkaWFGaWxlUmVhZGVyLmdldFN0cmluZ0F0KG9mZnNldCArIDQsIDQpOyAvLyBjb25zb2xlLmxvZyhwYXJlbnRBdG9tRnVsbE5hbWUsIGF0b21OYW1lLCBhdG9tU2l6ZSk7XG4gICAgICAvLyBDb250YWluZXIgYXRvbXMgKG5vIGFjdHVhbCBkYXRhKVxuXG4gICAgICBpZiAodGhpcy5faXNDb250YWluZXJBdG9tKGF0b21OYW1lKSkge1xuICAgICAgICBpZiAoYXRvbU5hbWUgPT0gXCJtZXRhXCIpIHtcbiAgICAgICAgICAvLyBUaGUgXCJtZXRhXCIgYXRvbSBicmVha3MgY29udmVudGlvbiBhbmQgaXMgYSBjb250YWluZXIgd2l0aCBkYXRhLlxuICAgICAgICAgIG9mZnNldCArPSA0OyAvLyBuZXh0X2l0ZW1faWQgKHVpbnQzMilcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhdG9tRnVsbE5hbWUgPSAocGFyZW50QXRvbUZ1bGxOYW1lID8gcGFyZW50QXRvbUZ1bGxOYW1lICsgXCIuXCIgOiBcIlwiKSArIGF0b21OYW1lO1xuXG4gICAgICAgIGlmIChhdG9tRnVsbE5hbWUgPT09IFwibW9vdi51ZHRhLm1ldGEuaWxzdFwiKSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0LCBvZmZzZXQgKyBhdG9tU2l6ZV0sIGNhbGxiYWNrcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgOCwgb2Zmc2V0ICsgOCArIDhdLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgc2VsZi5fbG9hZEF0b20obWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQgKyA4LCBhdG9tRnVsbE5hbWUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0ICsgYXRvbVNpemUsIG9mZnNldCArIGF0b21TaXplICsgOF0sIHtcbiAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvYWRBdG9tKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0ICsgYXRvbVNpemUsIHBhcmVudEF0b21GdWxsTmFtZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaXNDb250YWluZXJBdG9tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpIHtcbiAgICAgIHJldHVybiBbXCJtb292XCIsIFwidWR0YVwiLCBcIm1ldGFcIiwgXCJpbHN0XCJdLmluZGV4T2YoYXRvbU5hbWUpID49IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jYW5SZWFkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FuUmVhZEF0b20oYXRvbU5hbWUpIHtcbiAgICAgIHJldHVybiBhdG9tTmFtZSAhPT0gXCItLS0tXCI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzVG9SZWFkKSB7XG4gICAgICB2YXIgdGFncyA9IHt9O1xuICAgICAgdGFnc1RvUmVhZCA9IHRoaXMuX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzVG9SZWFkKTtcblxuICAgICAgdGhpcy5fcmVhZEF0b20odGFncywgZGF0YSwgMCwgZGF0YS5nZXRTaXplKCksIHRhZ3NUb1JlYWQpOyAvLyBjcmVhdGUgc2hvcnRjdXRzIGZvciBtb3N0IGNvbW1vbiBkYXRhLlxuXG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gU0hPUlRDVVRTKSB7XG4gICAgICAgIGlmIChTSE9SVENVVFMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICB2YXIgdGFnID0gdGFnc1tTSE9SVENVVFNbbmFtZV1dO1xuXG4gICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IFwidHJhY2tcIikge1xuICAgICAgICAgICAgICB0YWdzW25hbWVdID0gdGFnLmRhdGEudHJhY2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YWdzW25hbWVdID0gdGFnLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwidHlwZVwiOiBcIk1QNFwiLFxuICAgICAgICBcImZ0eXBcIjogZGF0YS5nZXRTdHJpbmdBdCg4LCA0KSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGRhdGEuZ2V0TG9uZ0F0KDEyLCB0cnVlKSxcbiAgICAgICAgXCJ0YWdzXCI6IHRhZ3NcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZEF0b20odGFncywgZGF0YSwgb2Zmc2V0LCBsZW5ndGgsIHRhZ3NUb1JlYWQsIHBhcmVudEF0b21GdWxsTmFtZSwgaW5kZW50KSB7XG4gICAgICBpbmRlbnQgPSBpbmRlbnQgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBpbmRlbnQgKyBcIiAgXCI7XG4gICAgICB2YXIgc2VlayA9IG9mZnNldDtcblxuICAgICAgd2hpbGUgKHNlZWsgPCBvZmZzZXQgKyBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGF0b21TaXplID0gZGF0YS5nZXRMb25nQXQoc2VlaywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGF0b21TaXplID09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXRvbU5hbWUgPSBkYXRhLmdldFN0cmluZ0F0KHNlZWsgKyA0LCA0KTsgLy8gY29uc29sZS5sb2coc2VlaywgcGFyZW50QXRvbUZ1bGxOYW1lLCBhdG9tTmFtZSwgYXRvbVNpemUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0NvbnRhaW5lckF0b20oYXRvbU5hbWUpKSB7XG4gICAgICAgICAgaWYgKGF0b21OYW1lID09IFwibWV0YVwiKSB7XG4gICAgICAgICAgICBzZWVrICs9IDQ7IC8vIG5leHRfaXRlbV9pZCAodWludDMyKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBhdG9tRnVsbE5hbWUgPSAocGFyZW50QXRvbUZ1bGxOYW1lID8gcGFyZW50QXRvbUZ1bGxOYW1lICsgXCIuXCIgOiBcIlwiKSArIGF0b21OYW1lO1xuXG4gICAgICAgICAgdGhpcy5fcmVhZEF0b20odGFncywgZGF0YSwgc2VlayArIDgsIGF0b21TaXplIC0gOCwgdGFnc1RvUmVhZCwgYXRvbUZ1bGxOYW1lLCBpbmRlbnQpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFZhbHVlIGF0b21zXG5cblxuICAgICAgICBpZiAoKCF0YWdzVG9SZWFkIHx8IHRhZ3NUb1JlYWQuaW5kZXhPZihhdG9tTmFtZSkgPj0gMCkgJiYgcGFyZW50QXRvbUZ1bGxOYW1lID09PSBcIm1vb3YudWR0YS5tZXRhLmlsc3RcIiAmJiB0aGlzLl9jYW5SZWFkQXRvbShhdG9tTmFtZSkpIHtcbiAgICAgICAgICB0YWdzW2F0b21OYW1lXSA9IHRoaXMuX3JlYWRNZXRhZGF0YUF0b20oZGF0YSwgc2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWVrICs9IGF0b21TaXplO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZE1ldGFkYXRhQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVhZE1ldGFkYXRhQXRvbShkYXRhLCBvZmZzZXQpIHtcbiAgICAgIC8vIDE2OiBuYW1lICsgc2l6ZSArIFwiZGF0YVwiICsgc2l6ZSAoNCBieXRlcyBlYWNoKVxuICAgICAgdmFyIE1FVEFEQVRBX0hFQURFUiA9IDE2O1xuICAgICAgdmFyIGF0b21TaXplID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTtcbiAgICAgIHZhciBhdG9tTmFtZSA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0ICsgNCwgNCk7XG4gICAgICB2YXIga2xhc3MgPSBkYXRhLmdldEludGVnZXIyNEF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDEsIHRydWUpO1xuICAgICAgdmFyIHR5cGUgPSBUWVBFU1trbGFzc107XG4gICAgICB2YXIgYXRvbURhdGE7XG5cbiAgICAgIGlmIChhdG9tTmFtZSA9PSBcInRya25cIikge1xuICAgICAgICBhdG9tRGF0YSA9IHtcbiAgICAgICAgICBcInRyYWNrXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDExKSxcbiAgICAgICAgICBcInRvdGFsXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDEzKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChhdG9tTmFtZSA9PSBcImRpc2tcIikge1xuICAgICAgICBhdG9tRGF0YSA9IHtcbiAgICAgICAgICBcImRpc2tcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTEpLFxuICAgICAgICAgIFwidG90YWxcIjogZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgTUVUQURBVEFfSEVBREVSICsgMTMpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyA0OiBhdG9tIHZlcnNpb24gKDEgYnl0ZSkgKyBhdG9tIGZsYWdzICgzIGJ5dGVzKVxuICAgICAgICAvLyA0OiBOVUxMICh1c3VhbGx5IGxvY2FsZSBpbmRpY2F0b3IpXG4gICAgICAgIHZhciBhdG9tSGVhZGVyID0gTUVUQURBVEFfSEVBREVSICsgNCArIDQ7XG4gICAgICAgIHZhciBkYXRhU3RhcnQgPSBvZmZzZXQgKyBhdG9tSGVhZGVyO1xuICAgICAgICB2YXIgZGF0YUxlbmd0aCA9IGF0b21TaXplIC0gYXRvbUhlYWRlcjtcbiAgICAgICAgdmFyIGF0b21EYXRhOyAvLyBXb3JrYXJvdW5kIGZvciBjb3ZlcnMgYmVpbmcgcGFyc2VkIGFzICd1aW50OCcgdHlwZSBkZXNwaXRlIGJlaW5nIGFuICdjb3ZyJyBhdG9tXG5cbiAgICAgICAgaWYgKGF0b21OYW1lID09PSAnY292cicgJiYgdHlwZSA9PT0gJ3VpbnQ4Jykge1xuICAgICAgICAgIHR5cGUgPSAnanBlZyc7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQoZGF0YVN0YXJ0LCBkYXRhTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJ1aW50OFwiOlxuICAgICAgICAgICAgYXRvbURhdGEgPSBkYXRhLmdldFNob3J0QXQoZGF0YVN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJpbnRcIjpcbiAgICAgICAgICBjYXNlIFwidWludFwiOlxuICAgICAgICAgICAgLy8gVGhvdWdoIHRoZSBRdWlja1RpbWUgc3BlYyBkb2Vzbid0IHN0YXRlIGl0LCB0aGVyZSBhcmUgNjQtYml0IHZhbHVlc1xuICAgICAgICAgICAgLy8gc3VjaCBhcyBwbElEIChQbGF5bGlzdC9Db2xsZWN0aW9uIElEKS4gV2l0aCBpdHMgc2luZ2xlIDY0LWJpdCBmbG9hdGluZ1xuICAgICAgICAgICAgLy8gcG9pbnQgbnVtYmVyIHR5cGUsIHRoZXNlIGFyZSBoYXJkIHRvIHBhcnNlIGFuZCBwYXNzIGluIEphdmFTY3JpcHQuXG4gICAgICAgICAgICAvLyBUaGUgaGlnaCB3b3JkIG9mIHBsSUQgc2VlbXMgdG8gYWx3YXlzIGJlIHplcm8sIHNvLCBhcyB0aGlzIGlzIHRoZVxuICAgICAgICAgICAgLy8gb25seSBjdXJyZW50IDY0LWJpdCBhdG9tIGhhbmRsZWQsIGl0IGlzIHBhcnNlZCBmcm9tIGl0cyAzMi1iaXRcbiAgICAgICAgICAgIC8vIGxvdyB3b3JkIGFzIGFuIHVuc2lnbmVkIGxvbmcuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGludFJlYWRlciA9IHR5cGUgPT0gJ2ludCcgPyBkYXRhTGVuZ3RoID09IDEgPyBkYXRhLmdldFNCeXRlQXQgOiBkYXRhTGVuZ3RoID09IDIgPyBkYXRhLmdldFNTaG9ydEF0IDogZGF0YUxlbmd0aCA9PSA0ID8gZGF0YS5nZXRTTG9uZ0F0IDogZGF0YS5nZXRMb25nQXQgOiBkYXRhTGVuZ3RoID09IDEgPyBkYXRhLmdldEJ5dGVBdCA6IGRhdGFMZW5ndGggPT0gMiA/IGRhdGEuZ2V0U2hvcnRBdCA6IGRhdGEuZ2V0TG9uZ0F0OyAvLyAkRmxvd0ZpeE1lIC0gZ2V0Qnl0ZUF0IGRvZXNuJ3QgcmVjZWl2ZSBhIHNlY29uZCBhcmd1bWVudFxuXG4gICAgICAgICAgICBhdG9tRGF0YSA9IGludFJlYWRlci5jYWxsKGRhdGEsIGRhdGFTdGFydCArIChkYXRhTGVuZ3RoID09IDggPyA0IDogMCksIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwianBlZ1wiOlxuICAgICAgICAgIGNhc2UgXCJwbmdcIjpcbiAgICAgICAgICAgIGF0b21EYXRhID0ge1xuICAgICAgICAgICAgICBcImZvcm1hdFwiOiBcImltYWdlL1wiICsgdHlwZSxcbiAgICAgICAgICAgICAgXCJkYXRhXCI6IGRhdGEuZ2V0Qnl0ZXNBdChkYXRhU3RhcnQsIGRhdGFMZW5ndGgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGF0b21OYW1lLFxuICAgICAgICBzaXplOiBhdG9tU2l6ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IEFUT01fREVTQ1JJUFRJT05TW2F0b21OYW1lXSB8fCBcIlVua25vd25cIixcbiAgICAgICAgZGF0YTogYXRvbURhdGFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0Y3V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydGN1dHMoKSB7XG4gICAgICByZXR1cm4gU0hPUlRDVVRTO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIC8vIFRoZSB0YWcgaWRlbnRpZmllciBpcyBsb2NhdGVkIGluIFs0LCA4XSBidXQgc2luY2Ugd2UnbGwgbmVlZCB0byByZWFkZXJcbiAgICAgIC8vIHRoZSBoZWFkZXIgb2YgdGhlIGZpcnN0IGJsb2NrIGFueXdheSwgd2UgbG9hZCBpdCBpbnN0ZWFkIHRvIGF2b2lkXG4gICAgICAvLyBtYWtpbmcgdHdvIHJlcXVlc3RzLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IDE2XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWFkVGFnRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRUYWdGb3JtYXQodGFnSWRlbnRpZmllcikge1xuICAgICAgdmFyIGlkID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRhZ0lkZW50aWZpZXIuc2xpY2UoNCwgOCkpO1xuICAgICAgcmV0dXJuIGlkID09PSBcImZ0eXBcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTVA0VGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG4vKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvY29udGVudC9kb2N1bWVudGF0aW9uL1F1aWNrVGltZS9RVEZGL01ldGFkYXRhL01ldGFkYXRhLmh0bWwjLy9hcHBsZV9yZWYvZG9jL3VpZC9UUDQwMDAwOTM5LUNIMS1TVzM1XG4qL1xuXG5cbnZhciBUWVBFUyA9IHtcbiAgXCIwXCI6IFwidWludDhcIixcbiAgXCIxXCI6IFwidGV4dFwiLFxuICBcIjEzXCI6IFwianBlZ1wiLFxuICBcIjE0XCI6IFwicG5nXCIsXG4gIFwiMjFcIjogXCJpbnRcIixcbiAgXCIyMlwiOiBcInVpbnRcIlxufTtcbnZhciBBVE9NX0RFU0NSSVBUSU9OUyA9IHtcbiAgXCLCqWFsYlwiOiBcIkFsYnVtXCIsXG4gIFwiwqlBUlRcIjogXCJBcnRpc3RcIixcbiAgXCJhQVJUXCI6IFwiQWxidW0gQXJ0aXN0XCIsXG4gIFwiwqlkYXlcIjogXCJSZWxlYXNlIERhdGVcIixcbiAgXCLCqW5hbVwiOiBcIlRpdGxlXCIsXG4gIFwiwqlnZW5cIjogXCJHZW5yZVwiLFxuICBcImducmVcIjogXCJHZW5yZVwiLFxuICBcInRya25cIjogXCJUcmFjayBOdW1iZXJcIixcbiAgXCLCqXdydFwiOiBcIkNvbXBvc2VyXCIsXG4gIFwiwql0b29cIjogXCJFbmNvZGluZyBUb29sXCIsXG4gIFwiwqllbmNcIjogXCJFbmNvZGVkIEJ5XCIsXG4gIFwiY3BydFwiOiBcIkNvcHlyaWdodFwiLFxuICBcImNvdnJcIjogXCJDb3ZlciBBcnRcIixcbiAgXCLCqWdycFwiOiBcIkdyb3VwaW5nXCIsXG4gIFwia2V5d1wiOiBcIktleXdvcmRzXCIsXG4gIFwiwqlseXJcIjogXCJMeXJpY3NcIixcbiAgXCLCqWNtdFwiOiBcIkNvbW1lbnRcIixcbiAgXCJ0bXBvXCI6IFwiVGVtcG9cIixcbiAgXCJjcGlsXCI6IFwiQ29tcGlsYXRpb25cIixcbiAgXCJkaXNrXCI6IFwiRGlzYyBOdW1iZXJcIixcbiAgXCJ0dnNoXCI6IFwiVFYgU2hvdyBOYW1lXCIsXG4gIFwidHZlblwiOiBcIlRWIEVwaXNvZGUgSURcIixcbiAgXCJ0dnNuXCI6IFwiVFYgU2Vhc29uXCIsXG4gIFwidHZlc1wiOiBcIlRWIEVwaXNvZGVcIixcbiAgXCJ0dm5uXCI6IFwiVFYgTmV0d29ya1wiLFxuICBcImRlc2NcIjogXCJEZXNjcmlwdGlvblwiLFxuICBcImxkZXNcIjogXCJMb25nIERlc2NyaXB0aW9uXCIsXG4gIFwic29ubVwiOiBcIlNvcnQgTmFtZVwiLFxuICBcInNvYXJcIjogXCJTb3J0IEFydGlzdFwiLFxuICBcInNvYWFcIjogXCJTb3J0IEFsYnVtXCIsXG4gIFwic29jb1wiOiBcIlNvcnQgQ29tcG9zZXJcIixcbiAgXCJzb3NuXCI6IFwiU29ydCBTaG93XCIsXG4gIFwicHVyZFwiOiBcIlB1cmNoYXNlIERhdGVcIixcbiAgXCJwY3N0XCI6IFwiUG9kY2FzdFwiLFxuICBcInB1cmxcIjogXCJQb2RjYXN0IFVSTFwiLFxuICBcImNhdGdcIjogXCJDYXRlZ29yeVwiLFxuICBcImhkdmRcIjogXCJIRCBWaWRlb1wiLFxuICBcInN0aWtcIjogXCJNZWRpYSBUeXBlXCIsXG4gIFwicnRuZ1wiOiBcIkNvbnRlbnQgUmF0aW5nXCIsXG4gIFwicGdhcFwiOiBcIkdhcGxlc3MgUGxheWJhY2tcIixcbiAgXCJhcElEXCI6IFwiUHVyY2hhc2UgQWNjb3VudFwiLFxuICBcInNmSURcIjogXCJDb3VudHJ5IENvZGVcIixcbiAgXCJhdElEXCI6IFwiQXJ0aXN0IElEXCIsXG4gIFwiY25JRFwiOiBcIkNhdGFsb2cgSURcIixcbiAgXCJwbElEXCI6IFwiQ29sbGVjdGlvbiBJRFwiLFxuICBcImdlSURcIjogXCJHZW5yZSBJRFwiLFxuICBcInhpZCBcIjogXCJWZW5kb3IgSW5mb3JtYXRpb25cIixcbiAgXCJmbHZyXCI6IFwiQ29kZWMgRmxhdm9yXCJcbn07XG52YXIgVU5TVVBQT1JURURfQVRPTVMgPSB7XG4gIFwiLS0tLVwiOiAxXG59O1xudmFyIFNIT1JUQ1VUUyA9IHtcbiAgXCJ0aXRsZVwiOiBcIsKpbmFtXCIsXG4gIFwiYXJ0aXN0XCI6IFwiwqlBUlRcIixcbiAgXCJhbGJ1bVwiOiBcIsKpYWxiXCIsXG4gIFwieWVhclwiOiBcIsKpZGF5XCIsXG4gIFwiY29tbWVudFwiOiBcIsKpY210XCIsXG4gIFwidHJhY2tcIjogXCJ0cmtuXCIsXG4gIFwiZ2VucmVcIjogXCLCqWdlblwiLFxuICBcInBpY3R1cmVcIjogXCJjb3ZyXCIsXG4gIFwibHlyaWNzXCI6IFwiwqlseXJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gTVA0VGFnUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFN0cmluZ1V0aWxzID0gcmVxdWlyZSgnLi9TdHJpbmdVdGlscycpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFGaWxlUmVhZGVyKHBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVkaWFGaWxlUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pc0luaXRpYWxpemVkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfc2l6ZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NpemUgPSAwO1xuICB9XG4gIC8qKlxuICAgKiBEZWNpZGVzIGlmIHRoaXMgbWVkaWEgZmlsZSByZWFkZXIgaXMgYWJsZSB0byByZWFkIHRoZSBnaXZlbiBmaWxlLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNZWRpYUZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgb3RoZXIgZnVuY3Rpb24uXG4gICAgICogTG9hZHMgdGhlIG5lY2Vzc2FyeSBpbml0aWFsIGluZm9ybWF0aW9uIGZyb20gdGhlIGZpbGUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5pdCh7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGluaXQgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIHRoZSByYW5nZSB0byBsb2FkLlxuICAgICAqICAgICAgICBFeDogWzAsIDddIGxvYWQgYnl0ZXMgMCB0byA3IGluY2x1c2l2ZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgbG9hZFJhbmdlIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFRoZSBzaXplIG9mIHRoZSBmaWxlIGluIGJ5dGVzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluaXQoKSBtdXN0IGJlIGNhbGxlZCBmaXJzdC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgZ2V0Qnl0ZUF0IGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlc0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgIHZhciBieXRlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgaSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNCaXRTZXRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0JpdFNldEF0KG9mZnNldCwgYml0KSB7XG4gICAgICB2YXIgaUJ5dGUgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuICAgICAgcmV0dXJuIChpQnl0ZSAmIDEgPDwgYml0KSAhPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTQnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgaUJ5dGUgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuXG4gICAgICBpZiAoaUJ5dGUgPiAxMjcpIHtcbiAgICAgICAgcmV0dXJuIGlCeXRlIC0gMjU2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlCeXRlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlTaG9ydCA9IGlzQmlnRW5kaWFuID8gKHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCkgPDwgOCkgKyB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSA6ICh0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSA8PCA4KSArIHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIGlmIChpU2hvcnQgPCAwKSB7XG4gICAgICAgIGlTaG9ydCArPSA2NTUzNjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlTaG9ydDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U1Nob3J0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U1Nob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlVU2hvcnQgPSB0aGlzLmdldFNob3J0QXQob2Zmc2V0LCBpc0JpZ0VuZGlhbik7XG5cbiAgICAgIGlmIChpVVNob3J0ID4gMzI3NjcpIHtcbiAgICAgICAgcmV0dXJuIGlVU2hvcnQgLSA2NTUzNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpVVNob3J0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMb25nQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9uZ0F0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpQnl0ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpLFxuICAgICAgICAgIGlCeXRlMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpLFxuICAgICAgICAgIGlCeXRlMyA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDIpLFxuICAgICAgICAgIGlCeXRlNCA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDMpO1xuICAgICAgdmFyIGlMb25nID0gaXNCaWdFbmRpYW4gPyAoKChpQnl0ZTEgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTMgPDwgOCkgKyBpQnl0ZTQgOiAoKChpQnl0ZTQgPDwgOCkgKyBpQnl0ZTMgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTE7XG5cbiAgICAgIGlmIChpTG9uZyA8IDApIHtcbiAgICAgICAgaUxvbmcgKz0gNDI5NDk2NzI5NjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlMb25nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTTG9uZ0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNMb25nQXQob2Zmc2V0LCBpc0JpZ0VuZGlhbikge1xuICAgICAgdmFyIGlVTG9uZyA9IHRoaXMuZ2V0TG9uZ0F0KG9mZnNldCwgaXNCaWdFbmRpYW4pO1xuXG4gICAgICBpZiAoaVVMb25nID4gMjE0NzQ4MzY0Nykge1xuICAgICAgICByZXR1cm4gaVVMb25nIC0gNDI5NDk2NzI5NjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpVUxvbmc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEludGVnZXIyNEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEludGVnZXIyNEF0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpQnl0ZTEgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQpLFxuICAgICAgICAgIGlCeXRlMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpLFxuICAgICAgICAgIGlCeXRlMyA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDIpO1xuICAgICAgdmFyIGlJbnRlZ2VyID0gaXNCaWdFbmRpYW4gPyAoKGlCeXRlMSA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMyA6ICgoaUJ5dGUzIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUxO1xuXG4gICAgICBpZiAoaUludGVnZXIgPCAwKSB7XG4gICAgICAgIGlJbnRlZ2VyICs9IDE2Nzc3MjE2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaUludGVnZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0cmluZ0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0cmluZ0F0KG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQsIGogPSAwOyBpIDwgb2Zmc2V0ICsgbGVuZ3RoOyBpKyssIGorKykge1xuICAgICAgICBzdHJpbmdbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZ2V0Qnl0ZUF0KGkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cmluZy5qb2luKFwiXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHJpbmdXaXRoQ2hhcnNldEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBsZW5ndGgsIGNoYXJzZXQpIHtcbiAgICAgIHZhciBieXRlcyA9IHRoaXMuZ2V0Qnl0ZXNBdChvZmZzZXQsIGxlbmd0aCk7XG4gICAgICB2YXIgc3RyaW5nO1xuXG4gICAgICBzd2l0Y2ggKChjaGFyc2V0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJ1dGYtMTZcIjpcbiAgICAgICAgY2FzZSBcInV0Zi0xNmxlXCI6XG4gICAgICAgIGNhc2UgXCJ1dGYtMTZiZVwiOlxuICAgICAgICAgIHN0cmluZyA9IFN0cmluZ1V0aWxzLnJlYWRVVEYxNlN0cmluZyhieXRlcywgY2hhcnNldCA9PT0gXCJ1dGYtMTZiZVwiKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidXRmLThcIjpcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmdVdGlscy5yZWFkVVRGOFN0cmluZyhieXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoYnl0ZXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDaGFyQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hhckF0KG9mZnNldCkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBJRDN2MiB0YWcvZnJhbWUgc2l6ZSBpcyBlbmNvZGVkIHdpdGggZm91ciBieXRlcyB3aGVyZSB0aGUgbW9zdFxuICAgICAqIHNpZ25pZmljYW50IGJpdCAoYml0IDcpIGlzIHNldCB0byB6ZXJvIGluIGV2ZXJ5IGJ5dGUsIG1ha2luZyBhIHRvdGFsIG9mIDI4XG4gICAgICogYml0cy4gVGhlIHplcm9lZCBiaXRzIGFyZSBpZ25vcmVkLCBzbyBhIDI1NyBieXRlcyBsb25nIHRhZyBpcyByZXByZXNlbnRlZFxuICAgICAqIGFzICQwMCAwMCAwMiAwMS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN5bmNoc2FmZUludGVnZXIzMkF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN5bmNoc2FmZUludGVnZXIzMkF0KG9mZnNldCkge1xuICAgICAgdmFyIHNpemUxID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICAgIHZhciBzaXplMiA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDEpO1xuICAgICAgdmFyIHNpemUzID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMik7XG4gICAgICB2YXIgc2l6ZTQgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAzKTsgLy8gMHg3ZiA9IDBiMDExMTExMTFcblxuICAgICAgdmFyIHNpemUgPSBzaXplNCAmIDB4N2YgfCAoc2l6ZTMgJiAweDdmKSA8PCA3IHwgKHNpemUyICYgMHg3ZikgPDwgMTQgfCAoc2l6ZTEgJiAweDdmKSA8PCAyMTtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGNhblJlYWRGaWxlIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZWRpYUZpbGVSZWFkZXI7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlUmVhZGVyO1xuXG59LHtcIi4vU3RyaW5nVXRpbHNcIjoxM31dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIE1lZGlhVGFnUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWVkaWFUYWdSZWFkZXIobWVkaWFGaWxlUmVhZGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhVGFnUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9tZWRpYUZpbGVSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9tZWRpYUZpbGVSZWFkZXIgPSBtZWRpYUZpbGVSZWFkZXI7XG4gICAgdGhpcy5fdGFncyA9IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJ5dGUgcmFuZ2UgdGhhdCBuZWVkcyB0byBiZSBsb2FkZWQgYW5kIGZlZCB0b1xuICAgKiBfY2FuUmVhZFRhZ0Zvcm1hdCBpbiBvcmRlciB0byBpZGVudGlmeSBpZiB0aGUgZmlsZSBjb250YWlucyB0YWdcbiAgICogaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgcmVhZC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWVkaWFUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcInNldFRhZ3NUb1JlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFnc1RvUmVhZCh0YWdzKSB7XG4gICAgICB0aGlzLl90YWdzID0gdGFncztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX21lZGlhRmlsZVJlYWRlci5pbml0KHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZERhdGEoc2VsZi5fbWVkaWFGaWxlUmVhZGVyLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgdGFncyA9IHNlbGYuX3BhcnNlRGF0YShzZWxmLl9tZWRpYUZpbGVSZWFkZXIsIHNlbGYuX3RhZ3MpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwYXJzZURhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6IGV4Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBUT0RPOiBkZXN0cm95IG1lZGlhRmlsZVJlYWRlclxuXG5cbiAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh0YWdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0Y3V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydGN1dHMoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIG5lY2Vzc2FyeSBieXRlcyBmcm9tIHRoZSBtZWRpYSBmaWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnQgX2xvYWREYXRhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgbG9hZGVkIGRhdGEgdG8gcmVhZCB0aGUgbWVkaWEgdGFncy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShtZWRpYUZpbGVSZWFkZXIsIHRhZ3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IF9wYXJzZURhdGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9leHBhbmRTaG9ydGN1dFRhZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2V4cGFuZFNob3J0Y3V0VGFncyh0YWdzV2l0aFNob3J0Y3V0cykge1xuICAgICAgaWYgKCF0YWdzV2l0aFNob3J0Y3V0cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ3MgPSBbXTtcbiAgICAgIHZhciBzaG9ydGN1dHMgPSB0aGlzLmdldFNob3J0Y3V0cygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgdGFnT3JTaG9ydGN1dDsgdGFnT3JTaG9ydGN1dCA9IHRhZ3NXaXRoU2hvcnRjdXRzW2ldOyBpKyspIHtcbiAgICAgICAgdGFncyA9IHRhZ3MuY29uY2F0KHNob3J0Y3V0c1t0YWdPclNob3J0Y3V0XSB8fCBbdGFnT3JTaG9ydGN1dF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFncztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSB0YWcgaWRlbnRpZmllciAocmVhZCBmcm9tIHRoZSBmaWxlIGJ5dGUgcG9zaXRpb25zIHNwZWZpY2llZCBieVxuICAgICAqIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UpIHRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIGl0IGNhbiByZWFkIHRoZSB0YWdcbiAgICAgKiBmb3JtYXQgb3Igbm90LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50XCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZWRpYVRhZ1JlYWRlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYVRhZ1JlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExfV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJbnRlcm5hbERlY29kZWRTdHJpbmcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbnRlcm5hbERlY29kZWRTdHJpbmcodmFsdWUsIGJ5dGVzUmVhZENvdW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVybmFsRGVjb2RlZFN0cmluZyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdmFsdWVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJ5dGVzUmVhZENvdW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsZW5ndGhcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ieXRlc1JlYWRDb3VudCA9IGJ5dGVzUmVhZENvdW50O1xuICAgIHRoaXMubGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEludGVybmFsRGVjb2RlZFN0cmluZywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludGVybmFsRGVjb2RlZFN0cmluZztcbn0oKTtcblxudmFyIFN0cmluZ1V0aWxzID0ge1xuICByZWFkVVRGMTZTdHJpbmc6IGZ1bmN0aW9uIHJlYWRVVEYxNlN0cmluZyhieXRlcywgYmlnRW5kaWFuLCBtYXhCeXRlcykge1xuICAgIHZhciBpeCA9IDA7XG4gICAgdmFyIG9mZnNldDEgPSAxLFxuICAgICAgICBvZmZzZXQyID0gMDtcbiAgICBtYXhCeXRlcyA9IE1hdGgubWluKG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aCwgYnl0ZXMubGVuZ3RoKTtcblxuICAgIGlmIChieXRlc1swXSA9PSAweEZFICYmIGJ5dGVzWzFdID09IDB4RkYpIHtcbiAgICAgIGJpZ0VuZGlhbiA9IHRydWU7XG4gICAgICBpeCA9IDI7XG4gICAgfSBlbHNlIGlmIChieXRlc1swXSA9PSAweEZGICYmIGJ5dGVzWzFdID09IDB4RkUpIHtcbiAgICAgIGJpZ0VuZGlhbiA9IGZhbHNlO1xuICAgICAgaXggPSAyO1xuICAgIH1cblxuICAgIGlmIChiaWdFbmRpYW4pIHtcbiAgICAgIG9mZnNldDEgPSAwO1xuICAgICAgb2Zmc2V0MiA9IDE7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGl4IDwgbWF4Qnl0ZXM7IGorKykge1xuICAgICAgdmFyIGJ5dGUxID0gYnl0ZXNbaXggKyBvZmZzZXQxXTtcbiAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4ICsgb2Zmc2V0Ml07XG4gICAgICB2YXIgd29yZDEgPSAoYnl0ZTEgPDwgOCkgKyBieXRlMjtcbiAgICAgIGl4ICs9IDI7XG5cbiAgICAgIGlmICh3b3JkMSA9PSAweDAwMDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxIDwgMHhEOCB8fCBieXRlMSA+PSAweEUwKSB7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUod29yZDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJ5dGUzID0gYnl0ZXNbaXggKyBvZmZzZXQxXTtcbiAgICAgICAgdmFyIGJ5dGU0ID0gYnl0ZXNbaXggKyBvZmZzZXQyXTtcbiAgICAgICAgdmFyIHdvcmQyID0gKGJ5dGUzIDw8IDgpICsgYnl0ZTQ7XG4gICAgICAgIGl4ICs9IDI7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUod29yZDEsIHdvcmQyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVybmFsRGVjb2RlZFN0cmluZyhhcnIuam9pbihcIlwiKSwgaXgpO1xuICB9LFxuICByZWFkVVRGOFN0cmluZzogZnVuY3Rpb24gcmVhZFVURjhTdHJpbmcoYnl0ZXMsIG1heEJ5dGVzKSB7XG4gICAgdmFyIGl4ID0gMDtcbiAgICBtYXhCeXRlcyA9IE1hdGgubWluKG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aCwgYnl0ZXMubGVuZ3RoKTtcblxuICAgIGlmIChieXRlc1swXSA9PSAweEVGICYmIGJ5dGVzWzFdID09IDB4QkIgJiYgYnl0ZXNbMl0gPT0gMHhCRikge1xuICAgICAgaXggPSAzO1xuICAgIH1cblxuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBpeCA8IG1heEJ5dGVzOyBqKyspIHtcbiAgICAgIHZhciBieXRlMSA9IGJ5dGVzW2l4KytdO1xuXG4gICAgICBpZiAoYnl0ZTEgPT0gMHgwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPCAweDgwKSB7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZTEpO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA+PSAweEMyICYmIGJ5dGUxIDwgMHhFMCkge1xuICAgICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUxICYgMHgxRikgPDwgNikgKyAoYnl0ZTIgJiAweDNGKSk7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxID49IDB4RTAgJiYgYnl0ZTEgPCAweEYwKSB7XG4gICAgICAgIHZhciBieXRlMiA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgYnl0ZTMgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgYXJyW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUxICYgMHhGRikgPDwgMTIpICsgKChieXRlMiAmIDB4M0YpIDw8IDYpICsgKGJ5dGUzICYgMHgzRikpO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA+PSAweEYwICYmIGJ5dGUxIDwgMHhGNSkge1xuICAgICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGJ5dGUzID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBieXRlNCA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgY29kZXBvaW50ID0gKChieXRlMSAmIDB4MDcpIDw8IDE4KSArICgoYnl0ZTIgJiAweDNGKSA8PCAxMikgKyAoKGJ5dGUzICYgMHgzRikgPDwgNikgKyAoYnl0ZTQgJiAweDNGKSAtIDB4MTAwMDA7XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGNvZGVwb2ludCA+PiAxMCkgKyAweEQ4MDAsIChjb2RlcG9pbnQgJiAweDNGRikgKyAweERDMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpeCk7XG4gIH0sXG4gIHJlYWROdWxsVGVybWluYXRlZFN0cmluZzogZnVuY3Rpb24gcmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGJ5dGVzLCBtYXhCeXRlcykge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBtYXhCeXRlcyA9IG1heEJ5dGVzIHx8IGJ5dGVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4Qnl0ZXM7KSB7XG4gICAgICB2YXIgYnl0ZTEgPSBieXRlc1tpKytdO1xuXG4gICAgICBpZiAoYnl0ZTEgPT0gMHgwMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgYXJyW2kgLSAxXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZTEpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJuYWxEZWNvZGVkU3RyaW5nKGFyci5qb2luKFwiXCIpLCBpKTtcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVXRpbHM7XG5cbn0se31dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBDaHVua2VkRmlsZURhdGEgPSByZXF1aXJlKCcuL0NodW5rZWRGaWxlRGF0YScpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIENIVU5LX1NJWkUgPSAxMDI0O1xuXG52YXIgWGhyRmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhRmlsZVJlYWRlcikge1xuICBfaW5oZXJpdHMoWGhyRmlsZVJlYWRlciwgX01lZGlhRmlsZVJlYWRlcik7XG5cbiAgZnVuY3Rpb24gWGhyRmlsZVJlYWRlcih1cmwpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWGhyRmlsZVJlYWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihYaHJGaWxlUmVhZGVyKS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfdXJsXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2ZpbGVEYXRhXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fdXJsID0gdXJsO1xuICAgIF90aGlzLl9maWxlRGF0YSA9IG5ldyBDaHVua2VkRmlsZURhdGEoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoWGhyRmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiX2luaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoY2FsbGJhY2tzKSB7XG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLmF2b2lkSGVhZFJlcXVlc3RzKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0KGNhbGxiYWNrcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9mZXRjaFNpemVXaXRoSGVhZFJlcXVlc3QoY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZldGNoU2l6ZVdpdGhIZWFkUmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hTaXplV2l0aEhlYWRSZXF1ZXN0KGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkhFQURcIiwgbnVsbCwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgY29udGVudExlbmd0aCA9IHNlbGYuX3BhcnNlQ29udGVudExlbmd0aCh4aHIpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBjb250ZW50TGVuZ3RoO1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDb250ZW50LUxlbmd0aCBub3QgcHJvdmlkZWQgYnkgdGhlIHNlcnZlciwgZmFsbGJhY2sgdG9cbiAgICAgICAgICAgIC8vIEdFVCByZXF1ZXN0cy5cbiAgICAgICAgICAgIHNlbGYuX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0KGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmV0Y2hTaXplV2l0aEdldFJlcXVlc3QoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciByYW5nZSA9IHRoaXMuX3JvdW5kUmFuZ2VUb0NodW5rTXVsdGlwbGUoWzAsIDBdKTtcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgcmFuZ2UsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRSYW5nZSA9IHNlbGYuX3BhcnNlQ29udGVudFJhbmdlKHhocik7XG5cbiAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYuX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRSYW5nZSkge1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRSYW5nZS5pbnN0YW5jZUxlbmd0aCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIExhc3QgcmVzb3J0LCBzZXJ2ZXIgaXMgbm90IGFibGUgdG8gdGVsbCB1cyB0aGUgY29udGVudCBsZW5ndGgsXG4gICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmV0Y2ggZW50aXJlIGZpbGUgdGhlbi5cbiAgICAgICAgICAgICAgc2VsZi5fZmV0Y2hFbnRpcmVGaWxlKGNhbGxiYWNrcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9zaXplID0gY29udGVudFJhbmdlLmluc3RhbmNlTGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSYW5nZSByZXF1ZXN0IG5vdCBzdXBwb3J0ZWQsIHdlIGdvdCB0aGUgZW50aXJlIGZpbGVcbiAgICAgICAgICAgIHNlbGYuX3NpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKDAsIGRhdGEpO1xuXG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9mZXRjaEVudGlyZUZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoRW50aXJlRmlsZShjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJHRVRcIiwgbnVsbCwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYuX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpO1xuXG4gICAgICAgICAgc2VsZi5fc2l6ZSA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YSgwLCBkYXRhKTtcblxuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0WGhyUmVzcG9uc2VDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKSB7XG4gICAgICByZXR1cm4geGhyLnJlc3BvbnNlQm9keSB8fCB4aHIucmVzcG9uc2VUZXh0IHx8IFwiXCI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZUNvbnRlbnRMZW5ndGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlQ29udGVudExlbmd0aCh4aHIpIHtcbiAgICAgIHZhciBjb250ZW50TGVuZ3RoID0gdGhpcy5fZ2V0UmVzcG9uc2VIZWFkZXIoeGhyLCBcIkNvbnRlbnQtTGVuZ3RoXCIpO1xuXG4gICAgICBpZiAoY29udGVudExlbmd0aCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50TGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvbnRlbnRMZW5ndGgsIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlQ29udGVudFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZUNvbnRlbnRSYW5nZSh4aHIpIHtcbiAgICAgIHZhciBjb250ZW50UmFuZ2UgPSB0aGlzLl9nZXRSZXNwb25zZUhlYWRlcih4aHIsIFwiQ29udGVudC1SYW5nZVwiKTtcblxuICAgICAgaWYgKGNvbnRlbnRSYW5nZSkge1xuICAgICAgICB2YXIgcGFyc2VkQ29udGVudFJhbmdlID0gY29udGVudFJhbmdlLm1hdGNoKC9ieXRlcyAoXFxkKyktKFxcZCspXFwvKD86KFxcZCspfFxcKikvaSk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWRDb250ZW50UmFuZ2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGSVhNRTogVW5rbm93biBDb250ZW50LVJhbmdlIHN5bnRheDogXCIgKyBjb250ZW50UmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaXJzdEJ5dGVQb3NpdGlvbjogcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzFdLCAxMCksXG4gICAgICAgICAgbGFzdEJ5dGVQb3NpdGlvbjogcGFyc2VJbnQocGFyc2VkQ29udGVudFJhbmdlWzJdLCAxMCksXG4gICAgICAgICAgaW5zdGFuY2VMZW5ndGg6IHBhcnNlZENvbnRlbnRSYW5nZVszXSA/IHBhcnNlSW50KHBhcnNlZENvbnRlbnRSYW5nZVszXSwgMTApIDogbnVsbFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmFuZ2UocmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fZmlsZURhdGEuaGFzRGF0YVJhbmdlKHJhbmdlWzBdLCBNYXRoLm1pbihzZWxmLl9zaXplLCByYW5nZVsxXSkpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2tzLm9uU3VjY2VzcywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQWx3YXlzIGRvd25sb2FkIGluIG11bHRpcGxlcyBvZiBDSFVOS19TSVpFLiBJZiB3ZSdyZSBnb2luZyB0byBtYWtlIGFcbiAgICAgIC8vIHJlcXVlc3QgbWlnaHQgYXMgd2VsbCBnZXQgYSBjaHVuayB0aGF0IG1ha2VzIHNlbnNlLiBUaGUgYmlnIGNvc3QgaXNcbiAgICAgIC8vIGVzdGFibGlzaGluZyB0aGUgY29ubmVjdGlvbiBzbyBnZXR0aW5nIDEwYnl0ZXMgb3IgMUsgZG9lc24ndCByZWFsbHlcbiAgICAgIC8vIG1ha2UgYSBkaWZmZXJlbmNlLlxuXG5cbiAgICAgIHJhbmdlID0gdGhpcy5fcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShyYW5nZSk7IC8vIFVwcGVyIHJhbmdlIHNob3VsZCBub3QgYmUgZ3JlYXRlciB0aGFuIG1heCBmaWxlIHNpemVcblxuICAgICAgcmFuZ2VbMV0gPSBNYXRoLm1pbihzZWxmLl9zaXplLCByYW5nZVsxXSk7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiR0VUXCIsIHJhbmdlLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBkYXRhID0gc2VsZi5fZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocik7XG5cbiAgICAgICAgICBzZWxmLl9maWxlRGF0YS5hZGREYXRhKHJhbmdlWzBdLCBkYXRhKTtcblxuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcm91bmRSYW5nZVRvQ2h1bmtNdWx0aXBsZShyYW5nZSkge1xuICAgICAgdmFyIGxlbmd0aCA9IHJhbmdlWzFdIC0gcmFuZ2VbMF0gKyAxO1xuICAgICAgdmFyIG5ld0xlbmd0aCA9IE1hdGguY2VpbChsZW5ndGggLyBDSFVOS19TSVpFKSAqIENIVU5LX1NJWkU7XG4gICAgICByZXR1cm4gW3JhbmdlWzBdLCByYW5nZVswXSArIG5ld0xlbmd0aCAtIDFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbWFrZVhIUlJlcXVlc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VYSFJSZXF1ZXN0KG1ldGhvZCwgcmFuZ2UsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHhociA9IHRoaXMuX2NyZWF0ZVhIUk9iamVjdCgpO1xuXG4gICAgICB4aHIub3BlbihtZXRob2QsIHRoaXMuX3VybCk7XG5cbiAgICAgIHZhciBvblhIUkxvYWQgPSBmdW5jdGlvbiBvblhIUkxvYWQoKSB7XG4gICAgICAgIC8vIDIwMCAtIE9LXG4gICAgICAgIC8vIDIwNiAtIFBhcnRpYWwgQ29udGVudFxuICAgICAgICAvLyAkRmxvd0lzc3VlIC0geGhyIHdpbGwgbm90IGJlIG51bGwgaGVyZVxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IHhoci5zdGF0dXMgPT09IDIwNikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoeGhyKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInhoclwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IFwiVW5leHBlY3RlZCBIVFRQIHN0YXR1cyBcIiArIHhoci5zdGF0dXMgKyBcIi5cIixcbiAgICAgICAgICAgIFwieGhyXCI6IHhoclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgeGhyLm9ubG9hZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgeGhyLm9ubG9hZCA9IG9uWEhSTG9hZDtcblxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwieGhyXCIsXG4gICAgICAgICAgICAgIFwiaW5mb1wiOiBcIkdlbmVyaWMgWEhSIGVycm9yLCBjaGVjayB4aHIgb2JqZWN0LlwiLFxuICAgICAgICAgICAgICBcInhoclwiOiB4aHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIHhociB3aWxsIG5vdCBiZSBudWxsIGhlcmVcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIG9uWEhSTG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKFhockZpbGVSZWFkZXIuX2NvbmZpZy50aW1lb3V0SW5TZWMpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBYaHJGaWxlUmVhZGVyLl9jb25maWcudGltZW91dEluU2VjICogMTAwMDtcblxuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ4aHJcIixcbiAgICAgICAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIHhoci50aW1lb3V0IHdpbGwgbm90IGJlIG51bGxcbiAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiVGltZW91dCBhZnRlciBcIiArIHhoci50aW1lb3V0IC8gMTAwMCArIFwicy4gVXNlIGpzbWVkaWF0YWdzLkNvbmZpZy5zZXRYaHJUaW1lb3V0IHRvIG92ZXJyaWRlLlwiLFxuICAgICAgICAgICAgICBcInhoclwiOiB4aHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkXCIpO1xuXG4gICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgdGhpcy5fc2V0UmVxdWVzdEhlYWRlcih4aHIsIFwiUmFuZ2VcIiwgXCJieXRlcz1cIiArIHJhbmdlWzBdICsgXCItXCIgKyByYW5nZVsxXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldFJlcXVlc3RIZWFkZXIoeGhyLCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIFwiU2F0LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIik7XG5cbiAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc2V0UmVxdWVzdEhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0UmVxdWVzdEhlYWRlcih4aHIsIGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKSB7XG4gICAgICBpZiAoWGhyRmlsZVJlYWRlci5fY29uZmlnLmRpc2FsbG93ZWRYaHJIZWFkZXJzLmluZGV4T2YoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSA8IDApIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaGFzUmVzcG9uc2VIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhc1Jlc3BvbnNlSGVhZGVyKHhociwgaGVhZGVyTmFtZSkge1xuICAgICAgdmFyIGFsbFJlc3BvbnNlSGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcblxuICAgICAgaWYgKCFhbGxSZXNwb25zZUhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVhZGVycyA9IGFsbFJlc3BvbnNlSGVhZGVycy5zcGxpdChcIlxcclxcblwiKTtcbiAgICAgIHZhciBoZWFkZXJOYW1lcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGVhZGVyTmFtZXNbaV0gPSBoZWFkZXJzW2ldLnNwbGl0KFwiOlwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVhZGVyTmFtZXMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpID49IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRSZXNwb25zZUhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0UmVzcG9uc2VIZWFkZXIoeGhyLCBoZWFkZXJOYW1lKSB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1Jlc3BvbnNlSGVhZGVyKHhociwgaGVhZGVyTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICB2YXIgY2hhcmFjdGVyID0gdGhpcy5fZmlsZURhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG5cbiAgICAgIHJldHVybiBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSAmIDB4ZmY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc1dlYldvcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNXZWJXb3JrZXIoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jcmVhdGVYSFJPYmplY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZVhIUk9iamVjdCgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLl9pc1dlYldvcmtlcigpKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IGlzIG5vdCBhYmxlIHRvIHJlY29nbml6ZSB0aGlzIG1vZHVsZS5cbiAgICAgICAgcmV0dXJuIG5ldyAocmVxdWlyZShcInhocjJcIikuWE1MSHR0cFJlcXVlc3QpKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJYTUxIdHRwUmVxdWVzdCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZmlsZSA9PT0gJ3N0cmluZycgJiYgL15bYS16XSs6XFwvXFwvL2kudGVzdChmaWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q29uZmlnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGlzYWxsb3dlZFhockhlYWRlcnMgPSB0aGlzLl9jb25maWcuZGlzYWxsb3dlZFhockhlYWRlcnM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzYWxsb3dlZFhockhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzYWxsb3dlZFhockhlYWRlcnNbaV0gPSBkaXNhbGxvd2VkWGhySGVhZGVyc1tpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBYaHJGaWxlUmVhZGVyO1xufShNZWRpYUZpbGVSZWFkZXIpO1xuXG5fZGVmaW5lUHJvcGVydHkoWGhyRmlsZVJlYWRlciwgXCJfY29uZmlnXCIsIHZvaWQgMCk7XG5cblhockZpbGVSZWFkZXIuX2NvbmZpZyA9IHtcbiAgYXZvaWRIZWFkUmVxdWVzdHM6IGZhbHNlLFxuICBkaXNhbGxvd2VkWGhySGVhZGVyczogW10sXG4gIHRpbWVvdXRJblNlYzogMzBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IFhockZpbGVSZWFkZXI7XG5cbn0se1wiLi9DaHVua2VkRmlsZURhdGFcIjo1LFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcInhocjJcIjoyfV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNZWRpYUZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9NZWRpYUZpbGVSZWFkZXJcIik7XG5cbnZhciBYaHJGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vWGhyRmlsZVJlYWRlclwiKTtcblxudmFyIEJsb2JGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vQmxvYkZpbGVSZWFkZXJcIik7XG5cbnZhciBBcnJheUZpbGVSZWFkZXIgPSByZXF1aXJlKFwiLi9BcnJheUZpbGVSZWFkZXJcIik7XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL01lZGlhVGFnUmVhZGVyXCIpO1xuXG52YXIgSUQzdjFUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9JRDN2MVRhZ1JlYWRlclwiKTtcblxudmFyIElEM3YyVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vSUQzdjJUYWdSZWFkZXJcIik7XG5cbnZhciBNUDRUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9NUDRUYWdSZWFkZXJcIik7XG5cbnZhciBGTEFDVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vRkxBQ1RhZ1JlYWRlclwiKTtcblxudmFyIG1lZGlhRmlsZVJlYWRlcnMgPSBbXTtcbnZhciBtZWRpYVRhZ1JlYWRlcnMgPSBbXTtcblxuZnVuY3Rpb24gcmVhZChsb2NhdGlvbiwgY2FsbGJhY2tzKSB7XG4gIG5ldyBSZWFkZXIobG9jYXRpb24pLnJlYWQoY2FsbGJhY2tzKTtcbn1cblxuZnVuY3Rpb24gaXNSYW5nZVZhbGlkKHJhbmdlLCBmaWxlU2l6ZSkge1xuICB2YXIgaW52YWxpZFBvc2l0aXZlUmFuZ2UgPSByYW5nZS5vZmZzZXQgPj0gMCAmJiByYW5nZS5vZmZzZXQgKyByYW5nZS5sZW5ndGggPj0gZmlsZVNpemU7XG4gIHZhciBpbnZhbGlkTmVnYXRpdmVSYW5nZSA9IHJhbmdlLm9mZnNldCA8IDAgJiYgKC1yYW5nZS5vZmZzZXQgPiBmaWxlU2l6ZSB8fCByYW5nZS5vZmZzZXQgKyByYW5nZS5sZW5ndGggPiAwKTtcbiAgcmV0dXJuICEoaW52YWxpZFBvc2l0aXZlUmFuZ2UgfHwgaW52YWxpZE5lZ2F0aXZlUmFuZ2UpO1xufVxuXG52YXIgUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVhZGVyKGZpbGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9maWxlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFnc1RvUmVhZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ZpbGVSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl90YWdSZWFkZXJcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2ZpbGUgPSBmaWxlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlYWRlciwgW3tcbiAgICBrZXk6IFwic2V0VGFnc1RvUmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUYWdzVG9SZWFkKHRhZ3NUb1JlYWQpIHtcbiAgICAgIHRoaXMuX3RhZ3NUb1JlYWQgPSB0YWdzVG9SZWFkO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RmlsZVJlYWRlcihmaWxlUmVhZGVyKSB7XG4gICAgICB0aGlzLl9maWxlUmVhZGVyID0gZmlsZVJlYWRlcjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgdGhpcy5fdGFnUmVhZGVyID0gdGFnUmVhZGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBGaWxlUmVhZGVyID0gdGhpcy5fZ2V0RmlsZVJlYWRlcigpO1xuXG4gICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKHRoaXMuX2ZpbGUpO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgZmlsZVJlYWRlci5pbml0KHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fZ2V0VGFnUmVhZGVyKGZpbGVSZWFkZXIsIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKFRhZ1JlYWRlcikge1xuICAgICAgICAgICAgICBuZXcgVGFnUmVhZGVyKGZpbGVSZWFkZXIpLnNldFRhZ3NUb1JlYWQoc2VsZi5fdGFnc1RvUmVhZCkucmVhZChjYWxsYmFja3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZpbGVSZWFkZXIoKSB7XG4gICAgICBpZiAodGhpcy5fZmlsZVJlYWRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZVJlYWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kRmlsZVJlYWRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZEZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRGaWxlUmVhZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZWRpYUZpbGVSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtZWRpYUZpbGVSZWFkZXJzW2ldLmNhblJlYWRGaWxlKHRoaXMuX2ZpbGUpKSB7XG4gICAgICAgICAgcmV0dXJuIG1lZGlhRmlsZVJlYWRlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VpdGFibGUgZmlsZSByZWFkZXIgZm91bmQgZm9yIFwiICsgdGhpcy5fZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFRhZ1JlYWRlcihmaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmICh0aGlzLl90YWdSZWFkZXIpIHtcbiAgICAgICAgdmFyIHRhZ1JlYWRlciA9IHRoaXMuX3RhZ1JlYWRlcjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2Vzcyh0YWdSZWFkZXIpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpbmRUYWdSZWFkZXIoZmlsZVJlYWRlciwgY2FsbGJhY2tzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRUYWdSZWFkZXIoZmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICAvLyBXZSBkb24ndCB3YW50IHRvIG1ha2UgbXVsdGlwbGUgZmV0Y2hlcyBwZXIgdGFnIHJlYWRlciB0byBnZXQgdGhlIHRhZ1xuICAgICAgLy8gaWRlbnRpZmllci4gVGhlIHN0cmF0ZWd5IGhlcmUgaXMgdG8gY29tYmluZSBhbGwgdGhlIHRhZyBpZGVudGlmaWVyXG4gICAgICAvLyByYW5nZXMgaW50byBvbmUgYW5kIG1ha2UgYSBzaW5nbGUgZmV0Y2guIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudFxuICAgICAgLy8gaW4gZmlsZSByZWFkZXJzIHRoYXQgaGF2ZSBleHBlbnNpdmUgbG9hZHMgbGlrZSB0aGUgWEhSIG9uZS5cbiAgICAgIC8vIEhvd2V2ZXIsIHdpdGggdGhpcyBzdHJhdGVneSB3ZSBydW4gaW50byB0aGUgcHJvYmxlbSBvZiBsb2FkaW5nIHRoZVxuICAgICAgLy8gZW50aXJlIGZpbGUgYmVjYXVzZSB0YWcgaWRlbnRpZmllcnMgbWlnaHQgYmUgYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZlxuICAgICAgLy8gdGhlIGZpbGUuXG4gICAgICAvLyBUbyBnZXQgYXJvdW5kIHRoaXMgd2UgZGl2aWRlIHRoZSB0YWcgcmVhZGVycyBpbnRvIHR3byBjYXRlZ29yaWVzLCB0aGVcbiAgICAgIC8vIG9uZXMgdGhhdCByZWFkIHRoZWlyIHRhZyBpZGVudGlmaWVycyBmcm9tIHRoZSBzdGFydCBvZiB0aGUgZmlsZSBhbmQgdGhlXG4gICAgICAvLyBvbmVzIHRoYXQgcmVhZCBmcm9tIHRoZSBlbmQgb2YgdGhlIGZpbGUuXG4gICAgICB2YXIgdGFnUmVhZGVyc0F0RmlsZVN0YXJ0ID0gW107XG4gICAgICB2YXIgdGFnUmVhZGVyc0F0RmlsZUVuZCA9IFtdO1xuICAgICAgdmFyIGZpbGVTaXplID0gZmlsZVJlYWRlci5nZXRTaXplKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFUYWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByYW5nZSA9IG1lZGlhVGFnUmVhZGVyc1tpXS5nZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCk7XG5cbiAgICAgICAgaWYgKCFpc1JhbmdlVmFsaWQocmFuZ2UsIGZpbGVTaXplKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhbmdlLm9mZnNldCA+PSAwICYmIHJhbmdlLm9mZnNldCA8IGZpbGVTaXplIC8gMiB8fCByYW5nZS5vZmZzZXQgPCAwICYmIHJhbmdlLm9mZnNldCA8IC1maWxlU2l6ZSAvIDIpIHtcbiAgICAgICAgICB0YWdSZWFkZXJzQXRGaWxlU3RhcnQucHVzaChtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ1JlYWRlcnNBdEZpbGVFbmQucHVzaChtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdzTG9hZGVkID0gZmFsc2U7XG4gICAgICB2YXIgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzID0ge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBpZiAoIXRhZ3NMb2FkZWQpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGV4cGVjdGluZyB0byBsb2FkIHR3byBzZXRzIG9mIHRhZyBpZGVudGlmaWVycy4gVGhpcyBmbGFnXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZXMgd2hlbiB0aGUgZmlyc3Qgb25lIGhhcyBiZWVuIGxvYWRlZC5cbiAgICAgICAgICAgIHRhZ3NMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFUYWdSZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBtZWRpYVRhZ1JlYWRlcnNbaV0uZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUmFuZ2VWYWxpZChyYW5nZSwgZmlsZVNpemUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgdGFnSW5kZW50aWZpZXIgPSBmaWxlUmVhZGVyLmdldEJ5dGVzQXQocmFuZ2Uub2Zmc2V0ID49IDAgPyByYW5nZS5vZmZzZXQgOiByYW5nZS5vZmZzZXQgKyBmaWxlU2l6ZSwgcmFuZ2UubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZpbGVSZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBleC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZWRpYVRhZ1JlYWRlcnNbaV0uY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJbmRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcyhtZWRpYVRhZ1JlYWRlcnNbaV0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRhZ0Zvcm1hdFwiLFxuICAgICAgICAgICAgICBcImluZm9cIjogXCJObyBzdWl0YWJsZSB0YWcgcmVhZGVyIGZvdW5kXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzKGZpbGVSZWFkZXIsIHRhZ1JlYWRlcnNBdEZpbGVTdGFydCwgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzKTtcblxuICAgICAgdGhpcy5fbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXMoZmlsZVJlYWRlciwgdGFnUmVhZGVyc0F0RmlsZUVuZCwgbG9hZFRhZ0lkZW50aWZpZXJzQ2FsbGJhY2tzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkVGFnSWRlbnRpZmllclJhbmdlcyhmaWxlUmVhZGVyLCB0YWdSZWFkZXJzLCBjYWxsYmFja3MpIHtcbiAgICAgIGlmICh0YWdSZWFkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBGb3JjZSBhc3luY1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdJZGVudGlmaWVyUmFuZ2UgPSBbTnVtYmVyLk1BWF9WQUxVRSwgMF07XG4gICAgICB2YXIgZmlsZVNpemUgPSBmaWxlUmVhZGVyLmdldFNpemUoKTsgLy8gQ3JlYXRlIGEgc3VwZXIgc2V0IG9mIGFsbCByYW5nZXMgc28gd2UgY2FuIGxvYWQgdGhlbSBhbGwgYXQgb25jZS5cbiAgICAgIC8vIE1pZ2h0IG5lZWQgdG8gcmV0aGluayB0aGlzIGFwcHJvYWNoIGlmIHRoZXJlIGFyZSB0YWcgcmFuZ2VzIHRvbyBmYXJcbiAgICAgIC8vIGEgcGFydCBmcm9tIGVhY2ggb3RoZXIuIFdlJ3JlIGdvb2QgZm9yIG5vdyB0aG91Z2guXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFnUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmFuZ2UgPSB0YWdSZWFkZXJzW2ldLmdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcmFuZ2Uub2Zmc2V0ID49IDAgPyByYW5nZS5vZmZzZXQgOiByYW5nZS5vZmZzZXQgKyBmaWxlU2l6ZTtcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgcmFuZ2UubGVuZ3RoIC0gMTtcbiAgICAgICAgdGFnSWRlbnRpZmllclJhbmdlWzBdID0gTWF0aC5taW4oc3RhcnQsIHRhZ0lkZW50aWZpZXJSYW5nZVswXSk7XG4gICAgICAgIHRhZ0lkZW50aWZpZXJSYW5nZVsxXSA9IE1hdGgubWF4KGVuZCwgdGFnSWRlbnRpZmllclJhbmdlWzFdKTtcbiAgICAgIH1cblxuICAgICAgZmlsZVJlYWRlci5sb2FkUmFuZ2UodGFnSWRlbnRpZmllclJhbmdlLCBjYWxsYmFja3MpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWFkZXI7XG59KCk7XG5cbnZhciBDb25maWcgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25maWcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmZpZyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29uZmlnLCBudWxsLCBbe1xuICAgIGtleTogXCJhZGRGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEZpbGVSZWFkZXIoZmlsZVJlYWRlcikge1xuICAgICAgbWVkaWFGaWxlUmVhZGVycy5wdXNoKGZpbGVSZWFkZXIpO1xuICAgICAgcmV0dXJuIENvbmZpZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkVGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFRhZ1JlYWRlcih0YWdSZWFkZXIpIHtcbiAgICAgIG1lZGlhVGFnUmVhZGVycy5wdXNoKHRhZ1JlYWRlcik7XG4gICAgICByZXR1cm4gQ29uZmlnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVUYWdSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVGFnUmVhZGVyKHRhZ1JlYWRlcikge1xuICAgICAgdmFyIHRhZ1JlYWRlckl4ID0gbWVkaWFUYWdSZWFkZXJzLmluZGV4T2YodGFnUmVhZGVyKTtcblxuICAgICAgaWYgKHRhZ1JlYWRlckl4ID49IDApIHtcbiAgICAgICAgbWVkaWFUYWdSZWFkZXJzLnNwbGljZSh0YWdSZWFkZXJJeCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb25maWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkVYUEVSSU1FTlRBTF9hdm9pZEhlYWRSZXF1ZXN0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBFWFBFUklNRU5UQUxfYXZvaWRIZWFkUmVxdWVzdHMoKSB7XG4gICAgICBYaHJGaWxlUmVhZGVyLnNldENvbmZpZyh7XG4gICAgICAgIGF2b2lkSGVhZFJlcXVlc3RzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RGlzYWxsb3dlZFhockhlYWRlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGlzYWxsb3dlZFhockhlYWRlcnMoZGlzYWxsb3dlZFhockhlYWRlcnMpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgZGlzYWxsb3dlZFhockhlYWRlcnM6IGRpc2FsbG93ZWRYaHJIZWFkZXJzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0WGhyVGltZW91dEluU2VjXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFhoclRpbWVvdXRJblNlYyh0aW1lb3V0SW5TZWMpIHtcbiAgICAgIFhockZpbGVSZWFkZXIuc2V0Q29uZmlnKHtcbiAgICAgICAgdGltZW91dEluU2VjOiB0aW1lb3V0SW5TZWNcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25maWc7XG59KCk7XG5cbkNvbmZpZy5hZGRGaWxlUmVhZGVyKFhockZpbGVSZWFkZXIpLmFkZEZpbGVSZWFkZXIoQmxvYkZpbGVSZWFkZXIpLmFkZEZpbGVSZWFkZXIoQXJyYXlGaWxlUmVhZGVyKS5hZGRUYWdSZWFkZXIoSUQzdjJUYWdSZWFkZXIpLmFkZFRhZ1JlYWRlcihJRDN2MVRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKE1QNFRhZ1JlYWRlcikuYWRkVGFnUmVhZGVyKEZMQUNUYWdSZWFkZXIpO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgIXByb2Nlc3MuYnJvd3Nlcikge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiKSB7XG4gICAgdmFyIFJlYWN0TmF0aXZlRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vUmVhY3ROYXRpdmVGaWxlUmVhZGVyJyk7XG5cbiAgICBDb25maWcuYWRkRmlsZVJlYWRlcihSZWFjdE5hdGl2ZUZpbGVSZWFkZXIpO1xuICB9IGVsc2Uge1xuICAgIHZhciBOb2RlRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTm9kZUZpbGVSZWFkZXInKTtcblxuICAgIENvbmZpZy5hZGRGaWxlUmVhZGVyKE5vZGVGaWxlUmVhZGVyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJyZWFkXCI6IHJlYWQsXG4gIFwiUmVhZGVyXCI6IFJlYWRlcixcbiAgXCJDb25maWdcIjogQ29uZmlnXG59O1xuXG59LHtcIi4vQXJyYXlGaWxlUmVhZGVyXCI6MyxcIi4vQmxvYkZpbGVSZWFkZXJcIjo0LFwiLi9GTEFDVGFnUmVhZGVyXCI6NixcIi4vSUQzdjFUYWdSZWFkZXJcIjo3LFwiLi9JRDN2MlRhZ1JlYWRlclwiOjksXCIuL01QNFRhZ1JlYWRlclwiOjEwLFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vTWVkaWFUYWdSZWFkZXJcIjoxMixcIi4vTm9kZUZpbGVSZWFkZXJcIjoxLFwiLi9SZWFjdE5hdGl2ZUZpbGVSZWFkZXJcIjoxLFwiLi9YaHJGaWxlUmVhZGVyXCI6MTR9XX0se30sWzE1XSkoMTUpXG59KTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtHYW1lTWFuYWdlcn0gZnJvbSBcIi4vbW9kZWwvR2FtZU1hbmFnZXJcIlxuXG5jb25zdCBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpO1xuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XG5cbmV4cG9ydCB7Z2FtZU1hbmFnZXJ9O1xuXG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF0bGFzU3ByaXRlc2hlZXQge1xuXG5cdGF0bGFzRGF0YTtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblxuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIGF0bGFzRGF0YSkge1xuXHRcdHRoaXMuYXRsYXNEYXRhID0gYXRsYXNEYXRhO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XHRcdFxuXHR9XG5cblx0Z2V0VGV4dHVyZShuYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcblxuXHRcdGNvbnN0IHByb3BzID0gdGhpcy5hdGxhc0RhdGEuaXRlbXNbbmFtZV07XG5cdFx0aWYgKHByb3BzID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIHRleHR1cmUgJyR7bmFtZX0nIGluIHNwcml0ZXNoZWV0YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShwcm9wcy54LCBwcm9wcy55LCBwcm9wcy53aWR0aCwgcHJvcHMuaGVpZ2h0KSk7XG5cdH1cblxuXG59IiwiaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCJcblxubGV0IEJhbGFuY2luZyA9IHtcbiAgICB0cmVlOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEsXG4gICAgICAgIGNyb3BDb3VudDogNCxcbiAgICB9LFxuXG4gICAgcGxheWVyOiB7XG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBoaXREYW1hZ2U6IDAuMSxcbiAgICAgICAga25vY2tkb3duOiAyMDAwLCAvL1RpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgfSxcblxuICAgIHRvd2VyOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEwLFxuICAgICAgICBjb29sZG93bjogNiAvL0hvdyBvZnRlbiB0aGlzIE9iamVjdCB3aWdnbGVzIHVudGlsIGl0IGlzIGFnYWluIHZ1bG5lcmFibGVcbiAgICB9LFxufVxuXG5CYWxhbmNpbmdbSVRFTS5XQUxMXSA9IHtcbiAgICBpbnZlbnRvcnlMaW1pdDogMTAsXG4gICAgZGVmYXVsdEhlYWx0aDogMyxcbn07XG5cbkJhbGFuY2luZ1tJVEVNLlROVF9QVU1QS0lOXSA9IHtcbiAgICBpbnZlbnRvcnlMaW1pdDogMTAsXG4gICAgZXhwbG9zaW9uRGFtYWdlOiAxLjUsXG59O1xuXG5CYWxhbmNpbmdbSVRFTS5UT01BVE9fUFJPSkVDVElMRV0gPSB7XG4gICAgc3BlZWQ6IDcsXG4gICAgaGl0RGFtYWdlOiAwLjMsXG4gICAgaW52ZW50b3J5TGltaXQ6IDEwLFxufTtcblxuQmFsYW5jaW5nW0lURU0uVE9NQVRPX1BMQU5UXSA9IHtcbiAgICBncm93U3RlcFRpbWU6IDUwMDAsXG4gICAgY3JvcHM6IFtcbiAgICAgICAgeyB0eXBlOiBJVEVNLlRPTUFUT19QUk9KRUNUSUxFLCBjb3VudDogMiB9LFxuICAgICAgICB7IHR5cGU6IElURU0uVE9NQVRPX1BMQU5ULCBjb3VudDogNCB9LFxuICAgIF0sXG4gICAgaW52ZW50b3J5TGltaXQ6IDEwLFxuICAgIHN0YXJ0U2VlZHM6IDUsXG59O1xuXG5CYWxhbmNpbmdbSVRFTS5QVU1QS0lOX1BMQU5UXSA9IHtcbiAgICBncm93U3RlcFRpbWU6IDEwMDAwLFxuICAgIGNyb3BzOiBbXG4gICAgICAgIHsgdHlwZTogSVRFTS5UTlRfUFVNUEtJTiwgY291bnQ6IDIgfSxcbiAgICAgICAgeyB0eXBlOiBJVEVNLlBVTVBLSU5fUExBTlQsIGNvdW50OiAzIH0sXG4gICAgXSxcbiAgICBpbnZlbnRvcnlMaW1pdDogMTAsXG4gICAgc3RhcnRTZWVkczogNSxcbn07XG5cbmV4cG9ydCB7IEJhbGFuY2luZyB9IiwiY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIEFTU0VUX1BBVEg6IFwiZGF0YS9hc3NldHNcIixcbiAgICBNQVBfUEFUSDogXCJkYXRhL21hcHNcIixcbiAgICBTT1VORF9QQVRIOiBgZGF0YS9hc3NldHMvc291bmRgLFxuICAgIE1VU0lDX1BBVEg6IGBkYXRhL2Fzc2V0cy9tdXNpY2AsXG59XG5cbmV4cG9ydCB7IENvbnN0YW50cyB9IiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEtleWJvYXJkTWFuYWdlciB9IGZyb20gXCIuL0tleWJvYXJkTWFuYWdlclwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBsb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQXRsYXNTcHJpdGVzaGVldCB9IGZyb20gXCIuL0F0bGFzU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuLi91aS91aUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vdWkvbWVudUJhclwiO1xuaW1wb3J0IE11c2ljUGxheWVyIGZyb20gJy4uL211c2ljL011c2ljUGxheWVyJ1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICAgIFxuICAgIHRpbGVkU3ByaXRlc2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQ7XG4gICAgYXRsYXNTcHJpdGVzaGVldDogQXRsYXNTcHJpdGVzaGVldDtcbiAgICBcbiAgICBtYXA6IFRpbGVkTWFwO1xuICAgIHBpeGlBcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgbXVzaWNQbGF5ZXI6TXVzaWNQbGF5ZXI7XG4gICAgXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XG4gICAgbWVudUJhcjogTWVudUJhcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9DcmVhdGUgYSBQaXhpIEFwcGxpY2F0aW9uXG4gICAgICAgIGNsYXNzIFBpeGlPcHRpb25zIGltcGxlbWVudHMgQXBwbGljYXRpb25PcHRpb25zIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCwgcHVibGljIHZpZXcpIHsgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKTtcbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnModWlDb25zdGFudHMuc3RhZ2Uud2lkdGgsIHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCwgY2FudmFzKTtcbiAgICAgICAgdGhpcy5waXhpQXBwID0gbmV3IEFwcGxpY2F0aW9uKHBpeGlPcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9Mb2FkID0gW1xuICAgICAgICAgICAge25hbWU6J3RpbGVkU3ByaXRlc2hlZXRUZXh0dXJlJywgdXJsOmAke0NvbnN0YW50cy5BU1NFVF9QQVRIfS9zcHJpdGVzaGVldC5wbmdgfSxcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0VGV4dHVyZScsIHVybDpgJHtDb25zdGFudHMuQVNTRVRfUEFUSH0vc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQucG5nYH0sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldERhdGEnLCB1cmw6YCR7Q29uc3RhbnRzLkFTU0VUX1BBVEh9L3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0Lmpzb25gfSxcbiAgICAgICAgICAgIHtuYW1lOidtYXBEYXRhJywgdXJsOmAke0NvbnN0YW50cy5NQVBfUEFUSH0vbWFwMi5qc29uYH0sXG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIGxvYWRlci5hZGQodG9Mb2FkKS5sb2FkKHRoaXMubG9hZGVyRmluaXNoZWQpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBsb2FkZXJGaW5pc2hlZCA9ICgpPT57XG4gICAgICAgIFxuICAgICAgICB0aGlzLmtleWJvYXJkTWFuYWdlciA9IG5ldyBLZXlib2FyZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XG5cbiAgICAgICAgdGhpcy5tdXNpY1BsYXllciA9IG5ldyBNdXNpY1BsYXllcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L2dvZ29nby5tcDNgKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYyhgJHtDb25zdGFudHMuTVVTSUNfUEFUSH0vTGV0c19SZXN0Lm1wM2ApO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKGAke0NvbnN0YW50cy5NVVNJQ19QQVRIfS9MYV9DYWxhaG9ycmEubXAzYCk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L1Rvd2VsX0RlZmVuY2VfRW5kaW5nLm1wM2ApO1xuICAgICAgICAvL3RoaXMubXVzaWNQbGF5ZXIucGxheSgpO1xuICAgICAgICBcbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XG4gICAgICAgIHRoaXMudGlsZWRTcHJpdGVzaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy50aWxlZFNwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCAxLCAxNiwgMTYsIDMxLCA1NylcbiAgICAgICAgLy9BdGxhcyBTcHJpdGVzaGVldFxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy9SZWdpc3RlciBVcGRhdGUgc2NoZWR1bGVyXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudXBkYXRlU2NoZWR1bGVyLmRvU3RlcCk7XG4gICAgICAgIFxuICAgICAgICAvL0xvYWQgTWFwXG4gICAgICAgIHRoaXMubWFwID0gVGlsZWRNYXAubG9hZE1hcChQSVhJLmxvYWRlci5yZXNvdXJjZXMubWFwRGF0YS5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheSBNYXBcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IFBsYXllciBDb250cm9sc1xuICAgICAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5tYXAucGxheWVycztcbiAgICAgICAgcGxheWVyc1swXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcImNcIiwgXCJ5XCIsIFwieFwiKTtcbiAgICAgICAgcGxheWVyc1swXS5zZXRDb2xvcigweENDRUVBQSk7XG4gICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xuICAgICAgICBwbGF5ZXJzWzFdLnNldENvbG9yKDB4Q0NDQ0ZGKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL0RyYXcgbWVudVxuICAgICAgICB0aGlzLmRyYXdNZW51QmFyKHBsYXllcnMpO1xuICAgICAgICBcbiAgICAgICAgLy9TdGFydCBQaXhpIEFwcFxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMudGVzdCgpO1xuXG4gICAgfVxuXG4gICAgXG4gICAgZHJhd01lbnVCYXIocGxheWVyczogUGxheWVyW10pIHtcbiAgICAgICAgdGhpcy5tZW51QmFyID0gbmV3IE1lbnVCYXIocGxheWVycyk7XG4gICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1lbnVCYXIpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICB0ZXN0KCkge1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLlROVF9QVU1QS0lOLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUsMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0ucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTtcbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgSGl0RXZlbnQge1xuXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XG4gICAgZGFtYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XG5cbiAgICB0b21hdG9fcHJvamVjdGlsZTogbnVtYmVyID0gMDtcbiAgICB0bnRfcHVtcGtpbjogbnVtYmVyID0gMDtcbiAgICB0b21hdG9fcGxhbnQ6IG51bWJlciA9IEJhbGFuY2luZy50b21hdG9fcGxhbnQuc3RhcnRTZWVkcztcbiAgICBwdW1wa2luX3BsYW50OiBudW1iZXIgPSBCYWxhbmNpbmcucHVtcGtpbl9wbGFudC5zdGFydFNlZWRzO1xuICAgIHdhbGw6IG51bWJlciA9IDA7XG5cbiAgICBnZXRJdGVtKGl0ZW1UeXBlOiBJVEVNKTogYm9vbGVhbiB7XG4gICAgICAgIHN3aXRjaCAoaXRlbVR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b21hdG9fcGxhbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvX3BsYW50LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1bXBraW5fcGxhbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVtcGtpbl9wbGFudC0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9tYXRvX3Byb2plY3RpbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvX3Byb2plY3RpbGUtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG50X3B1bXBraW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG50X3B1bXBraW4tLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2FsbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsLS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnaXZlICR7aXRlbVR5cGV9IHggJHtjb3VudH1gKTtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnRvbWF0b19wcm9qZWN0aWxlICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnRudF9wdW1wa2luICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMud2FsbCArPSBjb3VudDsgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHRoaXMudG9tYXRvX3BsYW50ICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6IHRoaXMucHVtcGtpbl9wbGFudCArPSBjb3VudDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQgPSBcInRvbWF0b19wbGFudFwiLFxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcbiAgICBUTlRfUFVNUEtJTiA9IFwidG50X3B1bXBraW5cIixcbiAgICBXQUxMID0gXCJ3YWxsXCIsXG4gICAgSEFORCA9IFwiaGFuZFwiLFxufVxuXG5cbmV4cG9ydCB7IElURU0gfTtcbiIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xuXG4gICAgIGtleVVwcyA9IHt9O1xuICAgICBrZXlEb3ducyA9IHt9O1xuICAgICBBTllfS0VZID0gXCJhbnlfa2V5XCI7XG5cbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleVVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcCB7XG4gICAgdHlwZTogSVRFTSxcbiAgICBjb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdGljIGdyb3dTdGF0ZXM6IG51bWJlciA9IDU7XG4gICAgY3JvcHM6IENyb3BbXTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncm93KCk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZ3JvdygpO1xuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy52dWxuZXJhYmxlKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBhd2FpdCBoaXRFdmVudC5pbml0aWF0b3IucGxheUFuaW1hdGlvbihcInB1dFwiKTtcbiAgICAgICAgLy9IYXJ2ZXN0IHlvdXJzZWxmXG4gICAgICAgIGZvciAoY29uc3QgY3JvcCBvZiB0aGlzLmNyb3BzKSB7XG4gICAgICAgICAgICBoaXRFdmVudC5pbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKGNyb3AudHlwZSwgY3JvcC5jb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9naXZlIHRoZSBpbml0aWF0b3IgdGhlIGl0ZW1zXG4gICAgICAgIGF3YWl0IHRoaXMuc2hyaW5rKCk7XG4gICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBQb2ludCwgZXh0cmFzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vLi4vaW5kZXhcIlxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSAnLi9Ub21hdG9Qcm9qZWN0aWxlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCIuL0ludmVudG9yeVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGVudW0gRElSRUNUSU9OIHsgVVAgPSBcInVwXCIsIFJJR0hUID0gXCJyaWdodFwiLCBET1dOID0gXCJkb3duXCIsIExFRlQgPSBcImxlZnRcIiwgU1RPUCA9IFwic3RvcFwiIH07XG5leHBvcnQgaW50ZXJmYWNlIEhpdGJveCB7XG4gICAgbGVmdFg6IG51bWJlcjtcbiAgICByaWdodFg6IG51bWJlcjtcbiAgICB1cHBlclk6IG51bWJlcjtcbiAgICBsb3dlclk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XG4gICAgc3RhdGljIFNQUklURV9IRUlHSFQ6IG51bWJlciA9IDE0NCAvIDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoMS41LCAxLjUpO1xuICAgIHN0YXRpYyBISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwgPSAxMDtcbiAgICBzdGF0aWMgSElUQk9YX1RPTEVSQU5DRV9UT1AgPSAxMDtcbiAgICBzdGF0aWMgZGFtYWdlU291bmQgPSBuZXcgQXVkaW8oYCR7Q29uc3RhbnRzLlNPVU5EX1BBVEh9L2F1dHNjaC5tcDNgKTtcblxuICAgIHBsYXllcklkOiBudW1iZXI7XG4gICAgLy9BIGhleCB2YWx1ZSBvZiBhIGNvbG9yIGFsbCBwbGF5ZXIncyBzcHJpdGVzIGFyZSB0aW50ZWQgd2l0aFxuICAgIGNvbG9yOiBudW1iZXIgPSAweEZGRkZGRjtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgc3ByaXRlOiBleHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgYW5pbWF0aW9ucztcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG5cbiAgICAvL1BsYXllciBpZ25vcmVzIGRvU3RlcCwgb25BY3Rpb24gYW5kIG9uSGl0IEV2ZW50cyBpZiBzdHVubmVkXG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICAvKiogU2F2ZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIChTVE9QIHdpbGwgbm90IGJlIHNhdmVkIGhlcmUsIGluIHRoaXMgY2FzZSB0aGUgdmFsdWUgaXMgdGhlIGxhc3QgZGlyZWN0aW9uIGJlZm9yZSBTVE9QKSAqL1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuXG4gICAgdXBLZXk6IHN0cmluZztcbiAgICBkb3duS2V5OiBzdHJpbmc7XG4gICAgbGVmdEtleTogc3RyaW5nO1xuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XG4gICAgYWN0aW9uS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0S2V5OiBzdHJpbmc7XG4gICAgcGxhY2VLZXk6IHN0cmluZztcbiAgICBsYXN0VGludGVkVGlsZTogVGlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDtcblxuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBESVJFQ1RJT04uRE9XTjtcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gUGxheWVyLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjEzO1xuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcblxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcbiAgICAgICAgZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLnJlZ2lzdGVyS2V5KGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5BTllfS0VZLCB0aGlzLmtleURvd24sIHRoaXMua2V5VXAsIFwicGxheWVyXCIgKyBwbGF5ZXJJZCk7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllclwiICsgcGxheWVySWQsIHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIGdldEhpdGJveCgpOiBIaXRib3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdFg6IHRoaXMuc3ByaXRlLnggKyBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgcmlnaHRYOiB0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLSBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9IT1JJWk9OVEFMLFxuICAgICAgICAgICAgdXBwZXJZOiB0aGlzLnNwcml0ZS55ICsgUGxheWVyLkhJVEJPWF9UT0xFUkFOQ0VfVE9QLFxuICAgICAgICAgICAgbG93ZXJZOiB0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIHdhbGs6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICAgICB1cDogMyxcbiAgICAgICAgICAgICAgICBkb3duOiAzLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDMsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVOYW1lIGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViU3RhdGVOYW1lIGluIGFuaW1hdGlvbnNbc3RhdGVOYW1lXSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgcGxheWVyXyR7c3RhdGVOYW1lfV8ke3N1YlN0YXRlTmFtZX1fJHtpfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbmltYXRpb25zW3N0YXRlTmFtZV1bc3ViU3RhdGVOYW1lXSA9IGN1cnJlbnRGcmFtZXNBcnJheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgc3dpdGNoUGxhY2VNb2RlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxhY2VNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlROVF9QVU1QS0lOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uV0FMTDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLkhBTkQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLkhBTkQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5QVU1QS0lOX1BMQU5UOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhbmdlZCBQbGFjZU1vZGUuIE5ldyBtb2RlIGlzOiAke3RoaXMucGxhY2VNb2RlfWApO1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb246IERJUkVDVElPTikge1xuICAgICAgICBpZiAodGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICAvL1BsYXllciBpcyBzdHVubmVkIGFuZCBjYW4ndCBjaGFuZ2UgaXQncyBkaXJlY3Rpb25cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OLlNUT1ApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmVzID0gdGhpcy5hbmltYXRpb25zLndhbGtbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IHRoaXMuYW5pbWF0aW9uc1tzdGF0ZV1bdGhpcy5jdXJyZW50RGlyZWN0aW9uXTtcblxuICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKClcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1dhaXQgYSBtb21lbnRcbiAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoODApO1xuXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gYmFja3dhcmRzXG4gICAgICAgIGZvciAobGV0IGkgPSBmcmFtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vUmVzdG9yZSBsYXN0IGRpcmVjdGlvbidzIHRleHR1cmVcbiAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMuY3VycmVudERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBzZXRLZXlzKHVwS2V5LCBkb3duS2V5LCBsZWZ0S2V5LCByaWdodEtleSwgYWN0aW9uS2V5LCBzZWxlY3RLZXksIHBsYWNlS2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgICAgIHRoaXMucGxhY2VLZXkgPSBwbGFjZUtleTtcbiAgICB9XG5cbiAgICBzZXRDb2xvcihjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IGNvbG9yO1xuICAgIH1cblxuICAgIGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPSB0aGlzLmxhc3RLZXkgJiYgIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSk6IHZvaWQgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHRoaXMuZ2V0SGl0Ym94KCk7XG4gICAgICAgICAgICBjb25zdCBzdGVwWCA9IHRoaXMudnggKiBkZWx0YTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBZID0gdGhpcy52eSAqIGRlbHRhO1xuICAgICAgICAgICAgY29uc3QgdGlsZVdpZHRoID0gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0O1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXIgaWYgaGUgd291bGQgZG8gYSBzdGVwIGluIGRpcmVjdGlvbiAoc3RlcFh8c3RlcFkpXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC5sZWZ0WCArIHN0ZXBYKSAvIHRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKGhpdGJveC5yaWdodFggKyBzdGVwWCkgLyB0aWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKGhpdGJveC51cHBlclkgKyBzdGVwWSkgLyB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigoaGl0Ym94Lmxvd2VyWSArIHN0ZXBZKSAvIHRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAuZ2V0VGlsZSh4LCB5KS50aWxlT2JqZWN0LnNvbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChibG9ja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUueCArPSBzdGVwWDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS55ICs9IHN0ZXBZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgVGlsZS5cbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cbiAgICAqL1xuICAgIGdldEN1cnJlbnRUaWxlKCk6IFRpbGUge1xuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCwgZ3JpZFkpO1xuICAgIH1cblxuICAgIHRpbnRDdXJyZW50VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbnRlZFRpbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgIGlmIChjdCkge1xuICAgICAgICAgICAgY3Quc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUaW50ZWRUaWxlID0gY3Q7XG5cbiAgICB9XG5cbiAgICBvblBsYWNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG5cbiAgICAgICAgICAgIC8vQ3JlYXRlIGhpdEV2ZW50IGlmIHBsYWNlTW9kZSBpcyBIQU5EXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5IQU5EKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMsIEJhbGFuY2luZy5wbGF5ZXIuaGl0RGFtYWdlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG8gaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHRoaXMucGxhY2VNb2RlID09IElURU0uVE9NQVRPX1BST0pFQ1RJTEUgJiYgdGhpcy5pbnZlbnRvcnkuZ2V0SXRlbShJVEVNLlRPTUFUT19QUk9KRUNUSUxFKSkge1xuICAgICAgICAgICAgICAgIG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuY3VycmVudERpcmVjdGlvbiwgdGhpcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Vsc2UgcGxhY2UgdGlsZU9iamVjdCBpZiByZXNzb3VyY2VzIGFyZSBpbiBpbnZlbnRvcnlcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaW52ZW50b3J5LmdldEl0ZW0odGhpcy5wbGFjZU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9uUGxhY2UodGhpcy5wbGFjZU1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQgPSBhc3luYyAoaGl0RXZlbnQ6IEhpdEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xuICAgICAgICAgICAgUGxheWVyLmRhbWFnZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnBsYXllci5rbm9ja2Rvd24pO1xuICAgICAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4xO1xuICAgICAgICB0aGlzLnNwcml0ZS54ICs9IHRoaXMuc3ByaXRlLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUueSArPSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG5cbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLnNwcml0ZS54IC09IHRoaXMuc3ByaXRlLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5zcHJpdGUueSAtPSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmNob3Iuc2V0KDApO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgUHVtcGtpblBsYW50IGV4dGVuZHMgUGxhbnQge1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInB1bXBraW5fcGxhbnRfMFwiKSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5jcm9wcyA9IEJhbGFuY2luZy5wdW1wa2luX3BsYW50LmNyb3BzO1xuICAgIH1cblxuICAgIGFzeW5jIGdyb3coKSB7XG4gICAgICAgIGZvciAobGV0IGdyb3dTdGVwID0gMTsgZ3Jvd1N0ZXAgPCBQdW1wa2luUGxhbnQuZ3Jvd1N0YXRlczsgZ3Jvd1N0ZXArKykge1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnB1bXBraW5fcGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShgcHVtcGtpbl9wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0O1xuXG4gICAgICAgIC8vRHJhdyBmcmFtZVxuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5saW5lU3R5bGUoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCB0aGlzLmJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvcmRlclJlY3RhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvL0NsZWFyIGxhc3QgcHJvZ3Jlc3MgU2hhcGVcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NTaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDAuMSkgeyAvL0RyYXcgdG9vIHNtYWxsIHByb2dyZXNzIGxvb2tzIHVnbHlcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gNjQgKiB0aGlzLnByb2dyZXNzIC0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrID0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMjtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZSh0aGljaywgdGhpcy5wcm9ncmVzc0NvbG9yKVxuICAgICAgICAgICAgICAgIC5tb3ZlVG8oU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTIC0gMSwgdGhpY2sgLSAxKVxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHNldCBwcm9ncmVzcyBsb3dlciB0aGFuIDAgb3IgaGlnaGVyIHRoYW4gMVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVG50UHVtcGtpbiB9IGZyb20gXCIuL1RudFB1bXBraW5cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFRvbWF0b1BsYW50IH0gZnJvbSBcIi4vVG9tYXRvUGxhbnRcIjtcbmltcG9ydCB7IFB1bXBraW5QbGFudCB9IGZyb20gXCIuL1B1bXBraW5QbGFudFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgdGlsZU9iamVjdDogVGlsZU9iamVjdDtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgbWFwOiBUaWxlZE1hcCkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5ncmlkWCA9IGdyaWRYO1xuICAgICAgICB0aGlzLmdyaWRZID0gZ3JpZFk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAvL2NhbGN1bGF0ZSBvd24gcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IGdyaWRYICogbWFwLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QgPSBuZXdUaWxlT2JqZWN0O1xuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgICAgIHRoaXMubWFwLnRpbGVPYmplY3RDb250YWluZXIuYWRkQ2hpbGQobmV3VGlsZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBhZGQgVGlsZU9iamVjdCB0byBhIFRpbGUgdGhhdCBhbGxyZWFkeSBoYXMgYW4gVGlsZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IaXQoaGl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblBsYWNlKG9iamVjdFR5cGU6IElURU0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBUb21hdG9QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBQdW1wa2luUGxhbnQodGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRudFB1bXBraW4odGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOlxuICAgICAgICAgICAgICAgICAgICBuZXcgV2FsbCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0ZyZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVPYmplY3QgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBwbGF5ZXIgdGhhdCBvY2N1cGllcyB0aGlzIHRpbGUuXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyB0aWxlIGlzIG5vdCBvY2N1cGllZFxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeSgpOiBQbGF5ZXIge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB0aGlzLm1hcC5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKHBsYXllci5zcHJpdGUueCArIHBsYXllci5zcHJpdGUud2lkdGgpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IocGxheWVyLnNwcml0ZS55IC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS55ICsgcGxheWVyLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFggPj0geFJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWCA8PSB4UmFuZ2UudG8gJiYgdGhpcy5ncmlkWSA+PSB5UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRZIDw9IHlSYW5nZS50bykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhbnkgcGxheWVyIG9uIHRoaXMgdGlsZS5cbiAgICAgKi9cbiAgICBpc09jY3VwaWVkQnlBbnlQbGF5ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuaXNPY2N1cGllZEJ5KCk7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2NjdXBpZWQgYnkgcGxheWVyXCIgKyBwbGF5ZXIucGxheWVySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW50KGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0LnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaWxlT2JqZWN0IGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBvbkhpdFNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9oaXQubXAzYCk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9ibG9iLm1wM2ApO1xuXG4gICAgbW90aGVyOiBUaWxlO1xuICAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdnVsbmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUsIHNvbGlkPzogYm9vbGVhbikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG5cbiAgICAgICAgdGhpcy5tb3RoZXIuYWRkVGlsZU9iamVjdCh0aGlzKTtcblxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5tb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcblxuICAgICAgICAvL1NldCB0aW1lciBmb3Igc29saWQgdGlsZXNcbiAgICAgICAgaWYgKHNvbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEFBQUFBQTtcbiAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3Rlcihgd2FpdF90b19iZWNvbWVfc29saWRfJHt0aGlzLm1vdGhlci5ncmlkWH1fJHt0aGlzLm1vdGhlci5ncmlkWX1gLCB0aGlzLnRyeVRvQmVjb21lU29saWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5VG9CZWNvbWVTb2xpZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdGhlci5pc09jY3VwaWVkQnlBbnlQbGF5ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25IaXQoaGl0ZXZlbnQ6IEhpdEV2ZW50KSB7IH07XG5cblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5tb3RoZXIudGlsZU9iamVjdDtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfTtcblxuICAgIGFzeW5jIHdpZ2dsZSh0aW1lcykge1xuXG4gICAgICAgIC8vUHJvbG9nXG4gICAgICAgIGNvbnN0IHJhZGlhbnQgPSAwLjA3O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG5cbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLnggLT0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxuXG4gICAgYXN5bmMgc2hyaW5rKCkge1xuXG4gICAgICAgIC8vUHJvbG9nICAgICAgICBcbiAgICAgICAgY29uc3Qgc2NhbGVEaWZmID0gMC4yO1xuICAgICAgICAvL0NoYW5nZSBhbmNob3JcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUsIDEpO1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGhpcy5zY2FsZS54ID4gMCAmJiB0aGlzLnNjYWxlLnkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggLT0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgdGhpcy5zY2FsZS55IC09IHNjYWxlRGlmZjtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxuICAgIGFzeW5jIGJsaW5rKHRpbWVzKSB7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIC8vR2l2ZSB0aGUgdGlsZW9iamVjdCBhIGdyZWVuIHRpbnRcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZBQUFBO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMjAwKTtcbiAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSB0aW50XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDIwMCk7XG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cblxuXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkTWFwIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHN0YXRpYyBNQVBfWk9PTSA9IDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcblxuICAgIHBsYXllcnM6IFBsYXllcltdO1xuICAgIGlzUGF1c2VkOiBib29sZWFuO1xuICAgIGZpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgZmluYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqSG9sZCBhbGwgVGlsZXMuIFVzYWdlOiB0aWxlc1t5XVt4XSAqL1xuICAgIHByaXZhdGUgdGlsZXM6IFRpbGVbXVtdO1xuICAgIGdyaWRXaWR0aDogbnVtYmVyO1xuICAgIGdyaWRIZWlnaHQ6IG51bWJlcjtcbiAgICB0aWxlQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcGxheWVyQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgdGlsZU9iamVjdENvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIGV4dHJhU3R1ZmZDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2V0TWFwT2JqZWN0UHJvcGVydHkobWFwT2JqZWN0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL0xvYWRzIHRoZSBtYXAgd2l0aCBzcHJpdGVzaGVldC4gTGFzdCBwYXJhbWV0ZXIgaXMgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHBhcnNpbmcgdGhlIG1hcCB3aXRoIHRoZSBuZXcgcGFyc2VkIG1hcCBhcyBwYXJhbWV0ZXJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBEYXRhKSB7XG5cbiAgICAgICAgY29uc3QgbWFwID0gbmV3IFRpbGVkTWFwKCk7XG4gICAgICAgIGNvbnN0IHRpbGVkU3ByaXRlc2hlZXQgPSBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0O1xuICAgICAgICBjb25zdCBhdGxhc1Nwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldDtcblxuICAgICAgICBsZXQgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFNQUklURV9TQ0FMRS54O1xuICAgICAgICBtYXAuZmluYWxUaWxlSGVpZ2h0ID0gdGlsZWRTcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogU1BSSVRFX1NDQUxFLnk7XG5cbiAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XG5cbiAgICAgICAgICAgICAgICBtYXAuZ3JpZFdpZHRoID0gdGwud2lkdGg7XG4gICAgICAgICAgICAgICAgbWFwLmdyaWRIZWlnaHQgPSB0bC5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvL0luaXQgbWFwJ3MgdGlsZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC50aWxlc1tpXSA9IG5ldyBBcnJheShtYXAuZ3JpZFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFRpbGVzIGZvciBlYWNoIHRpbGUgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRsLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByb3cgKiB0bC53aWR0aCArIGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bC5kYXRhW2luZGV4XSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IG5ldyBUaWxlKHRleHR1cmUsIGNvbHVtbiwgcm93LCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0l0ZXJhdGUgdGhyb3VnaCBPYmplY3QgTGF5ZXJzXG4gICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcblxuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG5cblxuICAgICAgICAgICAgICAgIC8vQWRkIGFsbCBwbGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICogICAgICBfX19fXyAgXyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fIFxcfCB8ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8IHxfXykgfCB8IF9fIF8gXyAgIF8gIF9fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfX18vfCB8LyBfYCB8IHwgfCB8LyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8ICAgIHwgfCAoX3wgfCB8X3wgfCAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfF98ICAgIHxffFxcX18sX3xcXF9fLCB8XFxfX198X3wgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBfXy8gfCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgIHxfX18vICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gKE1hdGgucm91bmQoY28ueSkgLSBjby5oZWlnaHQpICogU1BSSVRFX1NDQUxFLnk7IC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBTcHJpdGVzIGZvciBlYWNoIG9iamVjdCB0byB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwvIF8gXFwgXFwgL1xcIC8gLyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInRvd2VyXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwib3duZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG93ZXIgPSBuZXcgVG93ZXIodGV4dHVyZSwgbW90aGVyLCBvd25lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1Rvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8XyBfXyBfX18gIF9fXyBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAnX18vIF8gXFwvIF8gXFxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCB8IHwgIF9fLyAgX18vXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8X3xffCAgXFxfX198XFxfX198XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ0cmVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgX18gICAgICAgICAgX18gICBfIF8gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICBcXCBcXCAgICAgICAgLyAvICB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIFxcIFxcICAvXFwgIC8gL18gX3wgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgIFxcIFxcLyAgXFwvIC8gX2AgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIFxcICAvXFwgIC8gKF98IHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgXFwvICBcXC8gXFxfXyxffF98X3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ3YWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ldyBXYWxsKG1vdGhlcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cblxuXG5cbiAgICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAgICAgLy9wbGF5ZXIuc3ByaXRlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllcnNbcGxheWVyLnBsYXllcklkXSA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQocGxheWVyLnNwcml0ZSk7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdCh0aWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIHRpbGVPYmplY3Quc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHRpbGVPYmplY3QpO1xuICAgIH1cblxuICAgIGFkZFRpbGUodGlsZTogVGlsZSkge1xuICAgICAgICB0aWxlLnggPSB0aWxlLmdyaWRYICogZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC50aWxlV2lkdGggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgdGlsZS55ID0gdGlsZS5ncmlkWSAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55O1xuICAgICAgICB0aWxlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuXG4gICAgICAgIHRoaXMudGlsZXNbdGlsZS5ncmlkWV1bdGlsZS5ncmlkWF0gPSB0aWxlO1xuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIuYWRkQ2hpbGQodGlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGlsZSBhdCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgeCBhbmQgeSBncmlkIGNvb3JkaW5hdGVzXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gdGlsZSBhdCB0aGlzIGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIGdyaWRYIHgtY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSBncmlkWSB5LWNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBnZXRUaWxlKGdyaWRYOm51bWJlcixncmlkWTpudW1iZXIpOlRpbGV7XG4gICAgICAgIGlmKHRoaXMudGlsZXNbZ3JpZFldKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2dyaWRZXVtncmlkWF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdDogUmVjdGFuZ2xlKSB7XG5cbiAgICAgICAgLy9hbiBPYmplY3QgY2FuIGJlIHBsYWNlZCBcImJldHdlZW5cIiB0aWxlcyBpbiB0aWxlZCBtYXAgZWRpdG9yLiBCdXQgZXZudHMgY2FuIGJlIHRyaWdnZXJlZCBvbmx5IGZyb20gd2hvbGUgdGlsZXMuIFNvIHRoZSBvYmVqY2N0cyBwb3NpdGlvbiBpcyBtYXBwZWQgdG8gdGhlIG5lYXJlc3QgVGlsZVxuXG4gICAgICAgIGxldCBvcmlnaW5hbFggPSBtYXBPYmplY3QueCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICBsZXQgeFRpbGVzID0gb3JpZ2luYWxYIC8gdGhpcy5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgeFRpbGVzID0gTWF0aC5yb3VuZCh4VGlsZXMpO1xuXG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSAobWFwT2JqZWN0LnkgLSBtYXBPYmplY3QuaGVpZ2h0KSAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55OyAgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IHlUaWxlcyA9IG9yaWdpbmFsWSAvIHRoaXMuZmluYWxUaWxlSGVpZ2h0O1xuICAgICAgICB5VGlsZXMgPSBNYXRoLnJvdW5kKHlUaWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZ3JpZFg6IHhUaWxlcywgZ3JpZFk6IHlUaWxlcyB9O1xuICAgIH1cblxuICAgIGdldFRpbGVOZWFyZXN0VG8obWFwT2JqZWN0OiBSZWN0YW5nbGUpOiBUaWxlIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlc1twb3MuZ3JpZFldW3Bvcy5ncmlkWF07XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZFNwcml0ZXNoZWV0e1xuXG5cdGJvcmRlcjogbnVtYmVyO1xuXHR0aWxlSGVpZ2h0OiBudW1iZXI7XG5cdHRpbGVXaWR0aDogbnVtYmVyO1xuXHRyb3dzOiBudW1iZXI7XG5cdGNvbHVtbnM6IG51bWJlcjtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblx0dGV4dHVyZXM6IFRleHR1cmVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLGJvcmRlcix0aWxlV2lkdGgsdGlsZUhlaWdodCxyb3dzLGNvbHVtbnMpe1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHRcdHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG5cdFx0dGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XG5cdFx0dGhpcy5yb3dzID0gcm93cztcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdO1xuXHR9XG5cblx0Z2V0VGV4dHVyZShnaWQ6bnVtYmVyKTpUZXh0dXJlICB7XG5cdFx0Ly9DaGVjayB3ZXRoZXIgdGV4dHVyZXMgd2FzIGFsbHJlYWR5IGZyYW1lZCBmb3JtIHNwcml0ZXNoZWV0XG5cdFx0aWYgKHRoaXMudGV4dHVyZXNbZ2lkXSkge1xuXHRcdCAgcmV0dXJuIHRoaXMudGV4dHVyZXNbZ2lkXTtcblx0XHR9IGVsc2Uge1xuXHRcdCAgLy9DYWxjdWxhdGUgcm93IGFuZCBjb2x1bW4gZnJvbSBnaWRcblx0XHQgIGxldCByb3c6bnVtYmVyID0gTWF0aC5mbG9vcigoZ2lkIC0gMSkgLyB0aGlzLmNvbHVtbnMpO1xuXHRcdCAgbGV0IGNvbHVtbjpudW1iZXIgPSAoZ2lkIC0gMSkgJSB0aGlzLmNvbHVtbnM7XG5cdFxuXHRcdCAgbGV0IHRpbGVXaWR0aDpudW1iZXIgPSB0aGlzLnRpbGVXaWR0aDtcblx0XHQgIGxldCB0aWxlSGVpZ2h0Om51bWJlciA9IHRoaXMudGlsZUhlaWdodDtcblx0XG5cdFx0ICBsZXQgeDpudW1iZXIgPSBjb2x1bW4gKiB0aWxlV2lkdGggKyBjb2x1bW4gKiB0aGlzLmJvcmRlcjtcblx0XHQgIGxldCB5Om51bWJlciA9IHJvdyAqIHRpbGVIZWlnaHQgKyByb3cgKiB0aGlzLmJvcmRlcjtcblx0XG5cdFx0ICBsZXQgdDpUZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHgsIHksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkpO1xuXHRcdCAgLy9TYXZlIFRleHR1cmUgaW4gY2FjaGUgYXJyYXlcblx0XHQgIHRoaXMudGV4dHVyZXNbZ2lkXSA9IHQ7XG5cdFx0ICByZXR1cm4gdDtcblx0XHR9XG5cdCAgfVxuXHRcblxufSIsImltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xuXG4gICAgc3RhdGljIHRpY2tTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0va2xpY2subXAzYCk7XG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vZXhwbG9kZS5tcDNgKTtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSAmJiBoaXRFdmVudC5kYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgVG50UHVtcGtpbi50aWNrU291bmQucGxheSgpO1xuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGluayg0KTtcbiAgICAgICAgICAgIC8vVHJpZ2dlciBUaWxlT2JqZWN0cyBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXNBcm91bmQpe1xuICAgICAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KGhpdEV2ZW50LmluaXRpYXRvcixCYWxhbmNpbmcudG50X3B1bXBraW4uZXhwbG9zaW9uRGFtYWdlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRXhwbG9kZSEhIVxuICAgICAgICAgICAgVG50UHVtcGtpbi5leHBsb2RlU291bmQucGxheSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZXhwbG9kZVwiKTtcbiAgICAgICAgICAgIC8vRGVzdHJveSBwdW1wa2luIDotKFxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFuaW1hdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgICAgICAgICBleHBsb2RlOiAxMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSBhbmltYXRpb25zW3N0YXRlTmFtZV07XG4gICAgICAgICAgICBsZXQgY3VycmVudEZyYW1lc0FycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGBwdW1wa2luXyR7c3RhdGVOYW1lfV8ke2l9YDtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXSA9IGN1cnJlbnRGcmFtZXNBcnJheTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICAgIH1cblxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXM6IFRleHR1cmVbXSA9IHRoaXMuYW5pbWF0aW9uc1tzdGF0ZV07XG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBmb3J3YXJkc1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZnJhbWU7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGlsZXMgdGhhdCBhcmUgb3J0aG9nb25hbCB0byBpdCdzIG93biB0aWxlLlxuICAgICAqIFRoaXMgYXJyYXkgaG9sZHMgb25seSBleGlzdGluZyB0aWxlcyBhbmQgbm8gdW5kZWZpbmVkIHZhbHVlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFRpbGVzQXJvdW5kKCk6IFRpbGVbXSB7XG4gICAgICAgIGNvbnN0IG15WCA9IHRoaXMubW90aGVyLmdyaWRYO1xuICAgICAgICBjb25zdCBteVkgPSB0aGlzLm1vdGhlci5ncmlkWTtcblxuICAgICAgICBsZXQgdGlsZXM6IFRpbGVbXSA9IFtdO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCArIDEsIG15WSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCAtIDEsIG15WSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCwgbXlZICsgMSkpO1xuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCwgbXlZIC0gMSkpO1xuXG4gICAgICAgIC8vRmlsdGVyIG5vdCBleGlzdGluZyB0aWxlc1xuICAgICAgICBsZXQgdG9SZXR1cm46VGlsZVtdID0gW107XG4gICAgICAgIGZvcihjb25zdCB0aWxlIG9mIHRpbGVzKXtcbiAgICAgICAgICAgIGlmKHRpbGUpe1xuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGF0aWMgdGVzdEV4cGxvc2lvbigpIHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDEsMCkpO1xuICAgICAgICBuZXcgVG50UHVtcGtpbihnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSgyLDApKTtcbiAgICAgICAgcC5vbkhpdChuZXcgSGl0RXZlbnQoZ2FtZU1hbmFnZXIubWFwLnBsYXllcnNbMF0sIDEpKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1BsYW50IGV4dGVuZHMgUGxhbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInRvbWF0b19wbGFudF8wXCIpLG1vdGhlcik7XG4gICAgICAgIHRoaXMuY3JvcHMgPSBCYWxhbmNpbmcudG9tYXRvX3BsYW50LmNyb3BzO1xuICAgIH1cblxuICAgIGFzeW5jIGdyb3coKSB7XG4gICAgICAgIGZvciAobGV0IGdyb3dTdGVwID0gMTsgZ3Jvd1N0ZXAgPCBUb21hdG9QbGFudC5ncm93U3RhdGVzOyBncm93U3RlcCsrKSB7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdChCYWxhbmNpbmcudG9tYXRvX3BsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQb2ludCwgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gJy4vQmFsYW5jaW5nJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vQ29uc3RhbnRzJztcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSAnLi9IaXRFdmVudCc7XG5pbXBvcnQgeyBESVJFQ1RJT04sIFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gJy4vVGlsZU9iamVjdCc7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tICcuL1VwZGF0ZVNjaGVkdWxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9Qcm9qZWN0aWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuICAgIHN0YXRpYyB0aHJvd1NvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9zbmFwLm1wM2ApO1xuICAgIHN0YXRpYyBzbWFzaFNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9zbWFzaC5tcDNgKTtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG93bmVyOiBQbGF5ZXI7XG4gICAgcHJpdmF0ZSBpbml0aWF0b3IgOiBQbGF5ZXIgfCBUaWxlT2JqZWN0O1xuICAgIHByaXZhdGUgdng6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB2eTogbnVtYmVyID0gMDtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW10gPSBbXTtcblxuXG4gICAgc3RhdGljIGdldE5ld0lkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdG9tYXRvX3Byb2plY3RpbGVfJHtUb21hdG9Qcm9qZWN0aWxlLmlkQ291bnRlcisrfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHggeC1jb29yZGluYXRlIHRvIHN0YXJ0XG4gICAgICogQHBhcmFtIHkgeS1jb29yZGluYXRlIHRvIHN0YXJ0XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBkaXJlY3Rpb24gdG8gZmx5XG4gICAgICogQHBhcmFtIGluaXRpYXRvciB0aGUgcGxheWVyIG9yIG9iamVjdCB0aGF0IGNyZWF0ZXMgdGhpcyB0b21hdGUgKHRoaXMgcGxheWVyIHdpbGwgYmUgaW11biB0byB0aGlzIHRvbWF0bylcbiAgICAgKiBAcGFyYW0gb3duZXIgdGhlIHBsYXllciB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBpbiBoaXRFdmVudCBpZiB0aGUgdG9tYXRvIGhpdHMgc29tZXRoaW5nXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpcmVjdGlvbjogRElSRUNUSU9OLCBpbml0aWF0b3I6IFBsYXllciB8IFRpbGVPYmplY3QsIG93bmVyOiBQbGF5ZXIpIHtcblxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcHJvamVjdGlsZV9mbHlcIikpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBUb21hdG9Qcm9qZWN0aWxlLmdldE5ld0lkKCk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG5cbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBQb2ludCgyLCAyKTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOiB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvX3Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjogdGhpcy52eSA9IDEgKiBCYWxhbmNpbmcudG9tYXRvX3Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDogdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnRvbWF0b19wcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOiB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy50b21hdG9fcHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgdG9tYXRvX3Byb2plY3RpbGVfc21hc2hfJHtpfWA7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKHRoaXMuaWQsIHRoaXMuZG9TdGVwKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIubWFwLmV4dHJhU3R1ZmZDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIFRvbWF0b1Byb2plY3RpbGUudGhyb3dTb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMueSArIHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIHdoZW4gbW92aW5nIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1ggLSB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1kgLSB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy9DaGVjayBpZiB0aGUgdG9tYXRvIGhpdHMgYSBQbGF5ZXJcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgZ2FtZU1hbmFnZXIubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpdGJveCA9IHBsYXllci5nZXRIaXRib3goKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnggPCBoaXRib3gucmlnaHRYICYmIHRoaXMueCArIHRoaXMud2lkdGggPiBoaXRib3gubGVmdFggJiYgdGhpcy55IDwgaGl0Ym94Lmxvd2VyWSAmJiB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGhpdGJveC51cHBlclkpIHtcbiAgICAgICAgICAgICAgICAvL0ZseSBpbnRvIHRoZSBQbGF5ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiAyO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hc2gocGxheWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vQ2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoaXMgbmV3IHBvc2l0aW9ucyB3b3VsZCBiZSBpbiBhIHNvbGlkIHRpbGUgb3Igb3V0IG9mIHRoZSBtYXBcbiAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCwgeSkgPT0gdW5kZWZpbmVkIHx8IGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2tlZFRpbGUgPSBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9GbHkgaW50byB0aGUgdGlsZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFzaChibG9ja2VkVGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIG5vIGNvbGxpc2lvbiwganVzdCBmbHkgeW91ciB3YXlcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSAwLjUgKiBkZWx0YTtcblxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGFzeW5jIHNtYXNoKGNvbGxpZGVyOiBUaWxlIHwgUGxheWVyKSB7XG4gICAgICAgIGlmIChjb2xsaWRlciAhPSB0aGlzLmluaXRpYXRvcikgeyAvL0RvbnQgaGl0IHRoZSBpbml0aWF0b3JcbiAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci51bnJlZ2lzdGVyKHRoaXMuaWQpO1xuICAgICAgICAgICAgVG9tYXRvUHJvamVjdGlsZS5zbWFzaFNvdW5kLnBsYXkoKTsgLy9QbGF5IFNtYXNoIHNvdW5kXG5cbiAgICAgICAgICAgIC8vVHJpZ2dlciBIaXQgZXZlbnQgb24gaGl0dGVuIHRpbGUgb3IgUGxheWVyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlci5vbkhpdChuZXcgSGl0RXZlbnQodGhpcy5vd25lciwgQmFsYW5jaW5nLnRvbWF0b19wcm9qZWN0aWxlLmhpdERhbWFnZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1BsYXkgU21hc2ggYW5pbWF0aW9uXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDQwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IERJUkVDVElPTiwgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFRvbWF0b1Byb2plY3RpbGUgfSBmcm9tIFwiLi9Ub21hdG9Qcm9qZWN0aWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLlwiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIG93bmVySWQ6IHN0cmluZztcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5vd25lcklkID0gb3duZXJJZDtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCAvIEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBUb3dlci5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZShCYWxhbmNpbmcudG93ZXIuY29vbGRvd24pO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIFRvbWF0b3MgYXMgZGVmZW5zZSBhY3Rpb25cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlSGVpZ2h0ID0gdGhpcy5tb3RoZXIubWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlV2lkdGggPSB0aGlzLm1vdGhlci5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRZIC0gMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMueCwgKHRoaXMubW90aGVyLmdyaWRZIC0gMSkgKiB0aWxlSGVpZ2h0LCBESVJFQ1RJT04uVVAsIHRoaXMsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFggLSAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUoKHRoaXMubW90aGVyLmdyaWRYIC0gMSkgKiB0aWxlV2lkdGgsIHRoaXMueSwgRElSRUNUSU9OLkxFRlQsIHRoaXMsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxID49IDApIHsgbmV3IFRvbWF0b1Byb2plY3RpbGUodGhpcy54LCAodGhpcy5tb3RoZXIuZ3JpZFkgKyAxKSAqIHRpbGVIZWlnaHQsIERJUkVDVElPTi5ET1dOLCB0aGlzLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRYICsgMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKCh0aGlzLm1vdGhlci5ncmlkWCArIDEpICogdGlsZVdpZHRoLCB0aGlzLnksIERJUkVDVElPTi5SSUdIVCwgdGhpcywgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIke3RoaXMub3duZXJJZH0gaGFzIGxvc3QhYCk7XG4gICAgfVxuXG4gICAgZ2V0T3duZXIoKTogUGxheWVyIHtcbiAgICAgICAgcmV0dXJuIGdhbWVNYW5hZ2VyLm1hcC5wbGF5ZXJzW3RoaXMub3duZXJJZF07XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHtCYWxhbmNpbmd9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgbW90aGVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRyZWUub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLCBCYWxhbmNpbmcudHJlZS5jcm9wQ291bnQpO1xuICAgICAgICBUcmVlLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XG5cbiAgICAgY2xpZW50czogb2JqZWN0ID0ge307XG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgcmVnaXN0ZXIoaWQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xuICAgIH1cblxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jbGllbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2soZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXN5bmNocm9udXMgUHJvbWlzZSBmb3Igd2FpdGluZyB0aGUgZ2l2ZW4gdGltZSBpbiBtc1xuICAgICAqIFRoaXMgZG9lcyBOT1QgcGF1c2Ugb3Igc3RvcCB0aGUgVXBkYXRlU2NoZWR1bGVyXG4gICAgICovXG4gICAgc3RhdGljIHdhaXQgPSBtcyA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoO1xuICBcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcikge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUoOTQ5KSwgbW90aGVyLCB0cnVlKTsgLy85NDkgaXMgYSBib3ggc3ByaXRlXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy53YWxsLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFdhbGwub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIFdhbGwub25EZXN0cm95U291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kZXN0cm95KHsgY2hpbGRyZW46IHRydWUgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hyaW5rKCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveShpbml0aWF0b3IpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0ICogYXMganNtZWRpYXRhZ3MgZnJvbSBcImpzbWVkaWF0YWdzXCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4uL3VpL3VpQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljUGxheWVyIHtcblxuICAgIHBsYXlsaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIHBsYXlsaXN0UG9zaXRpb24gPSAwO1xuICAgIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50O1xuXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhcnRpc3Q6IHN0cmluZztcbiAgICBjb3ZlcjogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0bWxQYXJlbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgICAgICAgICAjY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxZTA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjE2MTYxO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVlQzMjMnLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJDb3Zlcnt9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyVGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyQXJ0aXN0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllckluZm97XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllclwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm11c2ljUGxheWVyQ292ZXJcIiB3aWR0aD1cIjgwcHhcIiBzcmM9XCJodHRwczovL3d3dy5zdXBlcmpvam8uZGUvbWFpbi9waWNzL21lbnNhLnBuZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllckluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVyVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlZXAgYW5kIGZ1bmt5IG11c2ljXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJBcnRpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1pc3RlciBib21iYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgaHRtbFBhcmVudC5pbm5lckhUTUwgKz0gaHRtbDtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWNPbicpLm9uY2xpY2sgPSB0aGlzLm5leHRUcmFjaztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljT2ZmJykub25jbGljayA9IHRoaXMucGF1c2U7XG4gICAgfVxuXG4gICAgYWRkTXVzaWMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGxheWxpc3QucHVzaChwYXRoKTtcbiAgICB9XG5cbiAgICBwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE11c2ljQXQodGhpcy5wbGF5bGlzdFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwYXVzZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNdXNpY0F0KHBvczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGxheWxpc3RQb3NpdGlvbiA9IHBvcztcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLnBsYXlsaXN0W3Bvc107XG4gICAgICAgIGlmIChwYXRoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW011c2ljIFBsYXllcl0gQ2FudCBwbGF5IG11c2ljLiBNdXNpYyBjYW50IGJlIGZvdW5kIGluIHBsYXlsaXN0IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHBhdGgpO1xuICAgICAgICB0aGlzLmF1ZGlvLm9uZW5kZWQgPSB0aGlzLm5leHRUcmFjaztcblxuICAgICAgICAvL0xvYWQgTWV0YSBJbmZvXG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgZmV0Y2gocGF0aCk7XG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgcmVzcC5ibG9iKCk7XG5cbiAgICAgICAganNtZWRpYXRhZ3MucmVhZChibG9iLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLnRhZ3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllclRpdGxlJykuaW5uZXJIVE1MID0gZGF0YS50YWdzLnRpdGxlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllckFydGlzdCcpLmlubmVySFRNTCA9IGRhdGEudGFncy5hcnRpc3Q7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSBkYXRhLnRhZ3MucGljdHVyZTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2U2NFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2UuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaW1hZ2UuZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2U2NCA9IFwiZGF0YTpcIiArIGltYWdlLmZvcm1hdCArIFwiO2Jhc2U2NCxcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnRvYShiYXNlNjRTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVzaWNQbGF5ZXJDb3ZlcicpLnNldEF0dHJpYnV0ZSgnc3JjJywgYmFzZTY0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNsaWRlVXAsIHVpQ29uc3RhbnRzLm11c2ljUGxheWVyLmRpc3BsYXlUaW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnOignLCBlcnJvci50eXBlLCBlcnJvci5pbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dFRyYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZE11c2ljQXQoKyt0aGlzLnBsYXlsaXN0UG9zaXRpb24gJSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIC8qIFNMSURFIFVQICovXG4gICAgc2xpZGVVcChkdXJhdGlvbiA9IDUwMCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tdXNpY1BsYXllclwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gXCIwXCI7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgICAgICAgLy9hbGVydChcIiFcIik7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICAvKiBTTElERSBET1dOICovXG4gICAgc2xpZGVEb3duKGR1cmF0aW9uID0gNTAwKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm11c2ljUGxheWVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXk7XG4gICAgICAgIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gICAgICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIjtcbiAgICAgICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIlxuaW1wb3J0IFBsYXllck1lbnUgZnJvbSBcIi4vcGxheWVyTWVudVwiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuL3VpQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXIgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgcGxheWVyTWVudXM6IFBsYXllck1lbnVbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyczogUGxheWVyW10pIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbWVudVdpZHRoID0gdWlDb25zdGFudHMuc3RhZ2Uud2lkdGggLyBwbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck1lbnUgPSBuZXcgUGxheWVyTWVudShwbGF5ZXJzW2ldLCBtZW51V2lkdGgsIG1lbnVXaWR0aCAqIGkpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJNZW51cy5wdXNoKHBsYXllck1lbnUpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChwbGF5ZXJNZW51KTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IENvbnRhaW5lciwgR3JhcGhpY3MsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4uL21vZGVsL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuLi9tb2RlbC9JdGVtc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuL3VpQ29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBJbnZlbnRvcnlTcHJpdGVzIHtcbiAgICBpdGVtOiBJVEVNO1xuICAgIHNwcml0ZXM6IFNwcml0ZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJNZW51IGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHBsYXllcjogUGxheWVyO1xuICAgIGFjdGlvbkljb246IFNwcml0ZTtcbiAgICBpbnZlbnRvcnlTcHJpdGVzTGlzdDogSW52ZW50b3J5U3ByaXRlc1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgd2lkdGg6IG51bWJlciwgeDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLnkgPSB1aUNvbnN0YW50cy5zdGFnZS5oZWlnaHQgLSB1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcblxuICAgICAgICAvL0RyYWUgYmFja2dyb3VuZFxuICAgICAgICBsZXQgYmdTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICBiZ1NoYXBlLmJlZ2luRmlsbChwbGF5ZXIuY29sb3IpO1xuICAgICAgICBiZ1NoYXBlLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCB1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCk7XG4gICAgICAgIGJnU2hhcGUuZW5kRmlsbCgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGJnU2hhcGUpO1xuXG4gICAgICAgIC8vQ3JlYXRlIHBsYWNlTW9kZSBzcHJpdGVcbiAgICAgICAgbGV0IGFpID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUocGxheWVyLnBsYWNlTW9kZSkpO1xuICAgICAgICBhaS5zY2FsZS5zZXQodWlDb25zdGFudHMubWVudUJhci5pY29uLnNjYWxlKTtcbiAgICAgICAgYWkueCA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgYWkueSA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChhaSk7XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbiA9IGFpO1xuXG4gICAgICAgIC8vQ3JlYXRlIGludmVudG9yeSBzcHJpdGVzXG4gICAgICAgIGNvbnN0IHZTcGFjZSA9IHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnZlcnRpY2FsU3BhY2luZztcbiAgICAgICAgY29uc3Qgc3ByaXRlU2l6ZSA9IHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwcml0ZVNpemU7XG4gICAgICAgIGxldCB5UG9zID0gdlNwYWNlO1xuICAgICAgICB0aGlzLmNyZWF0ZUludmVudG9yeVNwcml0ZXMoSVRFTS5UT01BVE9fUFJPSkVDVElMRSwgeVBvcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSW52ZW50b3J5U3ByaXRlcyhJVEVNLlROVF9QVU1QS0lOLCB5UG9zICs9IHZTcGFjZSArIHNwcml0ZVNpemUpO1xuICAgICAgICB0aGlzLmNyZWF0ZUludmVudG9yeVNwcml0ZXMoSVRFTS5XQUxMLCB5UG9zICs9IHZTcGFjZSArIHNwcml0ZVNpemUpO1xuXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllck1lbnVcIiArIHBsYXllci5wbGF5ZXJJZCwgdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbnZlbnRvcnlTcHJpdGVzKGl0ZW06IElURU0sIHk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy53aWR0aCAtICgodWlDb25zdGFudHMubWVudUJhci5pbnZlbnRvcnkuaG9yaXpvbnRhbFNwYWNpbmcgKyB1aUNvbnN0YW50cy5tZW51QmFyLmludmVudG9yeS5zcHJpdGVTaXplXG4gICAgICAgICkgKiBCYWxhbmNpbmdbaXRlbV0uaW52ZW50b3J5TGltaXQpO1xuICAgICAgICBjb25zdCBpbnZTcHJpdGVzID0geyBpdGVtOiBpdGVtLCBzcHJpdGVzOiBbXSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJhbGFuY2luZ1tpdGVtXS5pbnZlbnRvcnlMaW1pdDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoaXRlbSkpO1xuICAgICAgICAgICAgc3ByaXRlLnggPSAodWlDb25zdGFudHMubWVudUJhci5pbnZlbnRvcnkuc3ByaXRlU2l6ZSArIHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5Lmhvcml6b250YWxTcGFjaW5nKSAqIGkgKyBvZmZzZXRYO1xuICAgICAgICAgICAgc3ByaXRlLnkgPSB5O1xuICAgICAgICAgICAgaW52U3ByaXRlcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludmVudG9yeVNwcml0ZXNMaXN0LnB1c2goaW52U3ByaXRlcyk7XG4gICAgfVxuXG4gICAgZG9TdGVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlTW9kZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUludmVudG9yeVN0YXRlKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHVwZGF0ZUludmVudG9yeVN0YXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpbnZTcHJpdGUgb2YgdGhpcy5pbnZlbnRvcnlTcHJpdGVzTGlzdCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGludlNwcml0ZS5zcHJpdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMucGxheWVyLmludmVudG9yeVtpbnZTcHJpdGUuaXRlbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW52U3ByaXRlLnNwcml0ZXNbaW5kZXhdLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGludlNwcml0ZS5zcHJpdGVzW2luZGV4XS50aW50ID0gMHgyMjIyMjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGFjZU1vZGUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbi50ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRoaXMucGxheWVyLnBsYWNlTW9kZSk7XG4gICAgfVxufSIsImNvbnN0IHVpQ29uc3RhbnRzID0ge1xuICAgIG1lbnVCYXI6IHtcbiAgICAgICAgaGVpZ2h0OiAxMTUsXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHNjYWxlOiAzLFxuICAgICAgICB9LFxuICAgICAgICBpbnZlbnRvcnk6IHtcbiAgICAgICAgICAgIGhvcml6b250YWxTcGFjaW5nOiAzLFxuICAgICAgICAgICAgdmVydGljYWxTcGFjaW5nOiA1LFxuICAgICAgICAgICAgc3ByaXRlU2l6ZSA6IDE2LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICB3aWR0aDogMTAyMCxcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgfSxcbiAgICBtdXNpY1BsYXllcjp7XG4gICAgICAgIGRpc3BsYXlUaW1lIDogMzAwMCxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9