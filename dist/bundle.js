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
        return __awaiter(this, void 0, void 0, function () {
            var path, resp, blob;
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
                        return [4 /*yield*/, fetch('http://127.0.0.1:8887/' + path)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.blob()];
                    case 2:
                        blob = _a.sent();
                        jsmediatags__WEBPACK_IMPORTED_MODULE_0__["read"](blob, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL25vZGVfbW9kdWxlcy9qc21lZGlhdGFncy9kaXN0L2pzbWVkaWF0YWdzLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9BdGxhc1Nwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQmFsYW5jaW5nLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0l0ZW1zLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QdW1wa2luUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9TdGF0dXNCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub3dlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbXVzaWMvTXVzaWNQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy91aS9tZW51QmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsb0RBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGdEQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyxnREFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOzs7QUFHaEU7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9B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O0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQyxFQUFFLG1CQUFtQjtBQUN0Qjs7QUFFQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTs7O0FBR2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxzQ0FBc0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDLEVBQUUsdUJBQXVCO0FBQzFCOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGVBQWU7QUFDbEM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxHQUFHO0FBQ0o7O0FBRUEsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSywwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SywyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQSxxREFBcUQ7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUEscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLGdQQUFnUCxFQUFFLEdBQUc7QUFDeFAsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUN4c0dEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUErQztBQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDhEQUFXLEVBQUUsQ0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSDs7Ozs7Ozs7Ozs7OztBQ0xy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QUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekI7UUFFRCxrREFBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUVuRixDQUFDO0lBZUwsaUJBQUM7QUFBRCxDQUFDLENBdER1QyxpREFBUyxHQXNEaEQ7Ozs7Ozs7Ozs7Ozs7O0FDN0REO0FBQUEsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFO1FBQ0wsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUcsRUFBRTtTQUNsQjtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsR0FBRztLQUNkO0NBQ0o7QUFFYywwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7QUNqQjNCLHNCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLmpzbWVkaWF0YWdzID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gWE1MSHR0cFJlcXVlc3Q7XG5cbn0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBBcnJheUZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYUZpbGVSZWFkZXIpIHtcbiAgX2luaGVyaXRzKEFycmF5RmlsZVJlYWRlciwgX01lZGlhRmlsZVJlYWRlcik7XG5cbiAgZnVuY3Rpb24gQXJyYXlGaWxlUmVhZGVyKGFycmF5KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFycmF5RmlsZVJlYWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBcnJheUZpbGVSZWFkZXIpLmNhbGwodGhpcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9hcnJheVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9zaXplXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fYXJyYXkgPSBhcnJheTtcbiAgICBfdGhpcy5fc2l6ZSA9IGFycmF5Lmxlbmd0aDtcbiAgICBfdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFycmF5RmlsZVJlYWRlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGNhbGxiYWNrcykge1xuICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRSYW5nZShyYW5nZSwgY2FsbGJhY2tzKSB7XG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgaWYgKG9mZnNldCA+PSB0aGlzLl9hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2Zmc2V0IFwiICsgb2Zmc2V0ICsgXCIgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9hcnJheVtvZmZzZXRdO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNhblJlYWRGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlYWRGaWxlKGZpbGUpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZpbGUpIHx8IHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgQnVmZmVyLmlzQnVmZmVyKGZpbGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcnJheUZpbGVSZWFkZXI7XG59KE1lZGlhRmlsZVJlYWRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXlGaWxlUmVhZGVyO1xuXG59LHtcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTF9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBDaHVua2VkRmlsZURhdGEgPSByZXF1aXJlKCcuL0NodW5rZWRGaWxlRGF0YScpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIEJsb2JGaWxlUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWVkaWFGaWxlUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhCbG9iRmlsZVJlYWRlciwgX01lZGlhRmlsZVJlYWRlcik7XG5cbiAgZnVuY3Rpb24gQmxvYkZpbGVSZWFkZXIoYmxvYikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCbG9iRmlsZVJlYWRlcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCbG9iRmlsZVJlYWRlcikuY2FsbCh0aGlzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2Jsb2JcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfZmlsZURhdGFcIiwgdm9pZCAwKTtcblxuICAgIF90aGlzLl9ibG9iID0gYmxvYjtcbiAgICBfdGhpcy5fZmlsZURhdGEgPSBuZXcgQ2h1bmtlZEZpbGVEYXRhKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJsb2JGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJfaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5pdChjYWxsYmFja3MpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9ibG9iLnNpemU7XG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJhbmdlKHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpczsgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgaXNuJ3QgYXdhcmUgb2YgbW96U2xpY2Ugb3Igd2Via2l0U2xpY2VcblxuICAgICAgdmFyIGJsb2JTbGljZSA9IHRoaXMuX2Jsb2Iuc2xpY2UgfHwgdGhpcy5fYmxvYi5tb3pTbGljZSB8fCB0aGlzLl9ibG9iLndlYmtpdFNsaWNlO1xuICAgICAgdmFyIGJsb2IgPSBibG9iU2xpY2UuY2FsbCh0aGlzLl9ibG9iLCByYW5nZVswXSwgcmFuZ2VbMV0gKyAxKTtcbiAgICAgIHZhciBicm93c2VyRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIGJyb3dzZXJGaWxlUmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShicm93c2VyRmlsZVJlYWRlci5yZXN1bHQpO1xuXG4gICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEocmFuZ2VbMF0sIGludEFycmF5KTtcblxuICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICB9O1xuXG4gICAgICBicm93c2VyRmlsZVJlYWRlci5vbmVycm9yID0gYnJvd3NlckZpbGVSZWFkZXIub25hYm9ydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJibG9iXCIsXG4gICAgICAgICAgICBcImluZm9cIjogYnJvd3NlckZpbGVSZWFkZXIuZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYnJvd3NlckZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlQXQob2Zmc2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmlsZURhdGEuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiY2FuUmVhZEZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZEZpbGUoZmlsZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSBcInVuZGVmaW5lZFwiICYmIGZpbGUgaW5zdGFuY2VvZiBCbG9iIHx8IC8vIEZpbGUgZXh0ZW5kcyBCbG9iIGJ1dCBpdCBzZWVtcyB0aGF0IEZpbGUgaW5zdGFuY2VvZiBCbG9iIGRvZXNuJ3RcbiAgICAgIC8vIHF1aXRlIHdvcmsgYXMgZXhwZWN0ZWQgaW4gQ29yZG92YS9QaG9uZUdhcC5cbiAgICAgIHR5cGVvZiBGaWxlICE9PSBcInVuZGVmaW5lZFwiICYmIGZpbGUgaW5zdGFuY2VvZiBGaWxlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCbG9iRmlsZVJlYWRlcjtcbn0oTWVkaWFGaWxlUmVhZGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbG9iRmlsZVJlYWRlcjtcblxufSx7XCIuL0NodW5rZWRGaWxlRGF0YVwiOjUsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExfV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIGZpbGUgdGhhdCBtaWdodCBub3QgaGF2ZSBhbGwgaXRzIGRhdGEgbG9hZGVkIHlldC5cbiAqIEl0IGlzIHVzZWQgd2hlbiBsb2FkaW5nIHRoZSBlbnRpcmUgZmlsZSBpcyBub3QgYW4gb3B0aW9uIGJlY2F1c2UgaXQncyB0b29cbiAqIGV4cGVuc2l2ZS4gSW5zdGVhZCwgcGFydHMgb2YgdGhlIGZpbGUgYXJlIGxvYWRlZCBhbmQgYWRkZWQgb25seSB3aGVuIG5lZWRlZC5cbiAqIEZyb20gYSByZWFkaW5nIHBvaW50IG9mIHZpZXcgaXMgYXMgaWYgdGhlIGVudGlyZSBmaWxlIGlzIGxvYWRlZC4gVGhlXG4gKiBleGNlcHRpb24gaXMgd2hlbiB0aGUgZGF0YSBpcyBub3QgYXZhaWxhYmxlIHlldCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKiBUaGlzIGNsYXNzIGRvZXMgbm90IGxvYWQgdGhlIGRhdGEsIGl0IGp1c3QgbWFuYWdlcyBpdC4gSXQgcHJvdmlkZXMgb3BlcmF0aW9uc1xuICogdG8gYWRkIGFuZCByZWFkIGRhdGEgZnJvbSB0aGUgZmlsZS5cbiAqXG4gKiBcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBOT1RfRk9VTkQgPSAtMTtcblxudmFyIENodW5rZWRGaWxlRGF0YSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIF9jcmVhdGVDbGFzcyhDaHVua2VkRmlsZURhdGEsIG51bGwsIFt7XG4gICAga2V5OiBcIk5PVF9GT1VORFwiLFxuICAgIC8vICRGbG93SXNzdWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gQ2h1bmtlZEZpbGVEYXRhKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua2VkRmlsZURhdGEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ZpbGVEYXRhXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9maWxlRGF0YSA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGRhdGEgdG8gdGhlIGZpbGUgc3RvcmFnZSBhdCBhIHNwZWNpZmljIG9mZnNldC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2h1bmtlZEZpbGVEYXRhLCBbe1xuICAgIGtleTogXCJhZGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERhdGEob2Zmc2V0LCBkYXRhKSB7XG4gICAgICB2YXIgb2Zmc2V0RW5kID0gb2Zmc2V0ICsgZGF0YS5sZW5ndGggLSAxO1xuXG4gICAgICB2YXIgY2h1bmtSYW5nZSA9IHRoaXMuX2dldENodW5rUmFuZ2Uob2Zmc2V0LCBvZmZzZXRFbmQpO1xuXG4gICAgICBpZiAoY2h1bmtSYW5nZS5zdGFydEl4ID09PSBOT1RfRk9VTkQpIHtcbiAgICAgICAgdGhpcy5fZmlsZURhdGEuc3BsaWNlKGNodW5rUmFuZ2UuaW5zZXJ0SXggfHwgMCwgMCwge1xuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgZGF0YSB0byBhZGQgY29sbGlkZXMgd2l0aCBleGlzdGluZyBjaHVua3Mgd2UgcHJlcGVuZCBhbmRcbiAgICAgICAgLy8gYXBwZW5kIGRhdGEgZnJvbSB0aGUgaGFsZiBjb2xsaWRpbmcgY2h1bmtzIHRvIG1ha2UgdGhlIGNvbGxpc2lvbiBhdFxuICAgICAgICAvLyAxMDAlLiBUaGUgbmV3IGRhdGEgY2FuIHRoZW4gcmVwbGFjZSBhbGwgdGhlIGNvbGxpZGluZyBjaHVua2VzLlxuICAgICAgICB2YXIgZmlyc3RDaHVuayA9IHRoaXMuX2ZpbGVEYXRhW2NodW5rUmFuZ2Uuc3RhcnRJeF07XG4gICAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLl9maWxlRGF0YVtjaHVua1JhbmdlLmVuZEl4XTtcbiAgICAgICAgdmFyIG5lZWRzUHJlcGVuZCA9IG9mZnNldCA+IGZpcnN0Q2h1bmsub2Zmc2V0O1xuICAgICAgICB2YXIgbmVlZHNBcHBlbmQgPSBvZmZzZXRFbmQgPCBsYXN0Q2h1bmsub2Zmc2V0ICsgbGFzdENodW5rLmRhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGNodW5rID0ge1xuICAgICAgICAgIG9mZnNldDogTWF0aC5taW4ob2Zmc2V0LCBmaXJzdENodW5rLm9mZnNldCksXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChuZWVkc1ByZXBlbmQpIHtcbiAgICAgICAgICB2YXIgc2xpY2VkRGF0YSA9IHRoaXMuX3NsaWNlRGF0YShmaXJzdENodW5rLmRhdGEsIDAsIG9mZnNldCAtIGZpcnN0Q2h1bmsub2Zmc2V0KTtcblxuICAgICAgICAgIGNodW5rLmRhdGEgPSB0aGlzLl9jb25jYXREYXRhKHNsaWNlZERhdGEsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZWRzQXBwZW5kKSB7XG4gICAgICAgICAgLy8gVXNlIHRoZSBsYXN0Q2h1bmsgYmVjYXVzZSB0aGUgc2xpY2UgbG9naWMgaXMgZWFzaWVyIHRvIGhhbmRsZS5cbiAgICAgICAgICB2YXIgc2xpY2VkRGF0YSA9IHRoaXMuX3NsaWNlRGF0YShjaHVuay5kYXRhLCAwLCBsYXN0Q2h1bmsub2Zmc2V0IC0gY2h1bmsub2Zmc2V0KTtcblxuICAgICAgICAgIGNodW5rLmRhdGEgPSB0aGlzLl9jb25jYXREYXRhKHNsaWNlZERhdGEsIGxhc3RDaHVuay5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpbGVEYXRhLnNwbGljZShjaHVua1JhbmdlLnN0YXJ0SXgsIGNodW5rUmFuZ2UuZW5kSXggLSBjaHVua1JhbmdlLnN0YXJ0SXggKyAxLCBjaHVuayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9jb25jYXREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jb25jYXREYXRhKGRhdGFBLCBkYXRhQikge1xuICAgICAgLy8gVHlwZWRBcnJheXMgZG9uJ3Qgc3VwcG9ydCBjb25jYXQuXG4gICAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSBcInVuZGVmaW5lZFwiICYmIEFycmF5QnVmZmVyLmlzVmlldyAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YUEpKSB7XG4gICAgICAgIC8vICRGbG93SXNzdWUgLSBmbG93IHRoaW5rcyBkYXRhQWFuZEIgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG4gICAgICAgIHZhciBkYXRhQWFuZEIgPSBuZXcgZGF0YUEuY29uc3RydWN0b3IoZGF0YUEubGVuZ3RoICsgZGF0YUIubGVuZ3RoKTsgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGFBYW5kQiBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcblxuICAgICAgICBkYXRhQWFuZEIuc2V0KGRhdGFBLCAwKTsgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGFBYW5kQiBpcyBhIHN0cmluZyBidXQgaXQncyBub3RcblxuICAgICAgICBkYXRhQWFuZEIuc2V0KGRhdGFCLCBkYXRhQS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gZGF0YUFhbmRCO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGFBYW5kQiBpcyBhIFR5cGVkQXJyYXkgYnV0IGl0J3Mgbm90XG4gICAgICAgIHJldHVybiBkYXRhQS5jb25jYXQoZGF0YUIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfc2xpY2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zbGljZURhdGEoZGF0YSwgYmVnaW4sIGVuZCkge1xuICAgICAgLy8gU29tZSBUeXBlQXJyYXkgaW1wbGVtZW50YXRpb25zIGRvIG5vdCBzdXBwb3J0IHNsaWNlIHlldC5cbiAgICAgIGlmIChkYXRhLnNsaWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgdGhpbmtzIGRhdGEgaXMgYSBzdHJpbmcgYnV0IGl0J3Mgbm90XG4gICAgICAgIHJldHVybiBkYXRhLnN1YmFycmF5KGJlZ2luLCBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgY2h1bmsgcmFuZ2UgdGhhdCBvdmVybGFwcyB0aGUgW29mZnNldFN0YXJ0LTEsb2Zmc2V0RW5kKzFdIHJhbmdlLlxuICAgICAqIFdoZW4gYSBjaHVuayBpcyBhZGphY2VudCB0byB0aGUgb2Zmc2V0IHdlIHN0aWxsIGNvbnNpZGVyIGl0IHBhcnQgb2YgdGhlXG4gICAgICogcmFuZ2UgKHRoaXMgaXMgdGhlIHNpdHVhdGlvbiBvZiBvZmZzZXRTdGFydC0xIG9yIG9mZnNldEVuZCsxKS5cbiAgICAgKiBXaGVuIG5vIGNodW5rcyBhcmUgZm91bmQgYGluc2VydEl4YCBkZW5vdGVzIHRoZSBpbmRleCB3aGVyZSB0aGUgZGF0YVxuICAgICAqIHNob3VsZCBiZSBpbnNlcnRlZCBpbiB0aGUgZGF0YSBsaXN0IChzdGFydEl4ID09IE5PVF9GT1VORCBhbmQgZW5kSVggPT1cbiAgICAgKiBOT1RfRk9VTkQpLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldENodW5rUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldENodW5rUmFuZ2Uob2Zmc2V0U3RhcnQsIG9mZnNldEVuZCkge1xuICAgICAgdmFyIHN0YXJ0Q2h1bmtJeCA9IE5PVF9GT1VORDtcbiAgICAgIHZhciBlbmRDaHVua0l4ID0gTk9UX0ZPVU5EO1xuICAgICAgdmFyIGluc2VydEl4ID0gMDsgLy8gQ291bGQgdXNlIGJpbmFyeSBzZWFyY2ggYnV0IG5vdCBleHBlY3RpbmcgdGhhdCBtYW55IGJsb2NrcyB0byBleGlzdC5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKywgaW5zZXJ0SXggPSBpKSB7XG4gICAgICAgIHZhciBjaHVua09mZnNldFN0YXJ0ID0gdGhpcy5fZmlsZURhdGFbaV0ub2Zmc2V0O1xuICAgICAgICB2YXIgY2h1bmtPZmZzZXRFbmQgPSBjaHVua09mZnNldFN0YXJ0ICsgdGhpcy5fZmlsZURhdGFbaV0uZGF0YS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA8IGNodW5rT2Zmc2V0U3RhcnQgLSAxKSB7XG4gICAgICAgICAgLy8gVGhpcyBvZmZzZXQgcmFuZ2UgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IGNodW5rcy5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBJZiBpdCBpcyBhZGphY2VudCB3ZSBzdGlsbCBjb25zaWRlciBpdCBwYXJ0IG9mIHRoZSByYW5nZSBiZWNhdXNlXG4gICAgICAgIC8vIHdlJ3JlIGdvaW5nIGVuZCB1cCB3aXRoIGEgc2luZ2xlIGJsb2NrIHdpdGggYWxsIGNvbnRpZ3VvdXMgZGF0YS5cblxuXG4gICAgICAgIGlmIChvZmZzZXRTdGFydCA8PSBjaHVua09mZnNldEVuZCArIDEgJiYgb2Zmc2V0RW5kID49IGNodW5rT2Zmc2V0U3RhcnQgLSAxKSB7XG4gICAgICAgICAgc3RhcnRDaHVua0l4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSAvLyBObyBzdGFydGluZyBjaHVuayB3YXMgZm91bmQsIG1lYW5pbmcgdGhhdCB0aGUgb2Zmc2V0IGlzIGVpdGhlciBiZWZvcmVcbiAgICAgIC8vIG9yIGFmdGVyIHRoZSBjdXJyZW50IHN0b3JlZCBjaHVua3MuXG5cblxuICAgICAgaWYgKHN0YXJ0Q2h1bmtJeCA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhcnRJeDogTk9UX0ZPVU5ELFxuICAgICAgICAgIGVuZEl4OiBOT1RfRk9VTkQsXG4gICAgICAgICAgaW5zZXJ0SXg6IGluc2VydEl4XG4gICAgICAgIH07XG4gICAgICB9IC8vIEZpbmQgdGhlIGVuZGluZyBjaHVuay5cblxuXG4gICAgICBmb3IgKHZhciBpID0gc3RhcnRDaHVua0l4OyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNodW5rT2Zmc2V0U3RhcnQgPSB0aGlzLl9maWxlRGF0YVtpXS5vZmZzZXQ7XG4gICAgICAgIHZhciBjaHVua09mZnNldEVuZCA9IGNodW5rT2Zmc2V0U3RhcnQgKyB0aGlzLl9maWxlRGF0YVtpXS5kYXRhLmxlbmd0aDtcblxuICAgICAgICBpZiAob2Zmc2V0RW5kID49IGNodW5rT2Zmc2V0U3RhcnQgLSAxKSB7XG4gICAgICAgICAgLy8gQ2FuZGlkYXRlIGZvciB0aGUgZW5kIGNodW5rLCBpdCBkb2Vzbid0IG1lYW4gaXQgaXMgeWV0LlxuICAgICAgICAgIGVuZENodW5rSXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldEVuZCA8PSBjaHVua09mZnNldEVuZCArIDEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5kQ2h1bmtJeCA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAgIGVuZENodW5rSXggPSBzdGFydENodW5rSXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0SXg6IHN0YXJ0Q2h1bmtJeCxcbiAgICAgICAgZW5kSXg6IGVuZENodW5rSXhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc0RhdGFSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNEYXRhUmFuZ2Uob2Zmc2V0U3RhcnQsIG9mZnNldEVuZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9maWxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLl9maWxlRGF0YVtpXTtcblxuICAgICAgICBpZiAob2Zmc2V0RW5kIDwgY2h1bmsub2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldFN0YXJ0ID49IGNodW5rLm9mZnNldCAmJiBvZmZzZXRFbmQgPCBjaHVuay5vZmZzZXQgKyBjaHVuay5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHZhciBkYXRhQ2h1bms7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZmlsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRhdGFDaHVua1N0YXJ0ID0gdGhpcy5fZmlsZURhdGFbaV0ub2Zmc2V0O1xuICAgICAgICB2YXIgZGF0YUNodW5rRW5kID0gZGF0YUNodW5rU3RhcnQgKyB0aGlzLl9maWxlRGF0YVtpXS5kYXRhLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYgKG9mZnNldCA+PSBkYXRhQ2h1bmtTdGFydCAmJiBvZmZzZXQgPD0gZGF0YUNodW5rRW5kKSB7XG4gICAgICAgICAgZGF0YUNodW5rID0gdGhpcy5fZmlsZURhdGFbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFDaHVuaykge1xuICAgICAgICByZXR1cm4gZGF0YUNodW5rLmRhdGFbb2Zmc2V0IC0gZGF0YUNodW5rLm9mZnNldF07XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9mZnNldCBcIiArIG9mZnNldCArIFwiIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXQuXCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaHVua2VkRmlsZURhdGE7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2h1bmtlZEZpbGVEYXRhO1xuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYVRhZ1JlYWRlcicpO1xuLyogVGhlIGZpcnN0IDQgYnl0ZXMgb2YgYSBGTEFDIGZpbGUgZGVzY3JpYmVzIHRoZSBoZWFkZXIgZm9yIHRoZSBmaWxlLiBJZiB0aGVzZVxuICogYnl0ZXMgcmVzcGVjdGl2ZWx5IHJlYWQgXCJmTGFDXCIsIHdlIGNhbiBkZXRlcm1pbmUgaXQgaXMgYSBGTEFDIGZpbGUuXG4gKi9cblxuXG52YXIgRkxBQ19IRUFERVJfU0laRSA9IDQ7XG4vKiBGTEFDIG1ldGFkYXRhIGlzIHN0b3JlZCBpbiBibG9ja3MgY29udGFpbmluZyBkYXRhIHJhbmdpbmcgZnJvbSBTVFJFQU1JTkZPIHRvXG4gKiBWT1JCSVNfQ09NTUVOVCwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50IHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBFYWNoIG1ldGFkYXRhIGhlYWRlciBpcyA0IGJ5dGVzIGxvbmcsIHdpdGggdGhlIGZpcnN0IGJ5dGUgZGV0ZXJtaW5pbmcgd2hldGhlclxuICogaXQgaXMgdGhlIGxhc3QgbWV0YWRhdGEgYmxvY2sgYmVmb3JlIHRoZSBhdWRpbyBkYXRhIGFuZCB3aGF0IHRoZSBibG9jayB0eXBlIGlzLlxuICogVGhpcyBmaXJzdCBieXRlIGNhbiBmdXJ0aGVyIGJlIHNwbGl0IGludG8gOCBiaXRzLCB3aXRoIHRoZSBmaXJzdCBiaXQgYmVpbmcgdGhlXG4gKiBsYXN0LW1ldGFkYXRhLWJsb2NrIGZsYWcsIGFuZCB0aGUgbGFzdCB0aHJlZSBiaXRzIGJlaW5nIHRoZSBibG9jayB0eXBlLlxuICpcbiAqIFNpbmNlIHRoZSBzcGVjaWZpY2F0aW9uIHN0YXRlcyB0aGF0IHRoZSBkZWNpbWFsIHZhbHVlIGZvciBhIFZPUkJJU19DT01NRU5UIGJsb2NrXG4gKiB0eXBlIGlzIDQsIHRoZSB0d28gcG9zc2liaWxpdGllcyBmb3IgdGhlIGNvbW1lbnQgYmxvY2sgaGVhZGVyIHZhbHVlcyBhcmU6XG4gKiAtIDAwMDAwMTAwIChOb3QgYSBsYXN0IG1ldGFkYXRhIGNvbW1lbnQgYmxvY2ssIHZhbHVlIG9mIDQpXG4gKiAtIDEwMDAwMTAwIChBIGxhc3QgbWV0YWRhdGEgY29tbWVudCBibG9jaywgdmFsdWUgb2YgMTMyKVxuICpcbiAqIFNpbWlsYXJseSwgdGhlIHBpY3R1cmUgYmxvY2sgaGVhZGVyIHZhbHVlcyBhcmUgNiBhbmQgMTI4LlxuICpcbiAqIEFsbCB2YWx1ZXMgZm9yIE1FVEFEQVRBX0JMT0NLX0hFQURFUiBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIGh0dHBzOi8veGlwaC5vcmcvZmxhYy9mb3JtYXQuaHRtbCNtZXRhZGF0YV9ibG9ja19oZWFkZXJcbiAqL1xuXG52YXIgQ09NTUVOVF9IRUFERVJTID0gWzQsIDEzMl07XG52YXIgUElDVFVSRV9IRUFERVJTID0gWzYsIDEzNF07IC8vIFRoZXNlIGFyZSB0aGUgcG9zc2libGUgaW1hZ2UgdHlwZXMgYXMgZGVmaW5lZCBieSB0aGUgRkxBQyBzcGVjaWZpY2F0aW9uLlxuXG52YXIgSU1BR0VfVFlQRVMgPSBbXCJPdGhlclwiLCBcIjMyeDMyIHBpeGVscyAnZmlsZSBpY29uJyAoUE5HIG9ubHkpXCIsIFwiT3RoZXIgZmlsZSBpY29uXCIsIFwiQ292ZXIgKGZyb250KVwiLCBcIkNvdmVyIChiYWNrKVwiLCBcIkxlYWZsZXQgcGFnZVwiLCBcIk1lZGlhIChlLmcuIGxhYmVsIHNpZGUgb2YgQ0QpXCIsIFwiTGVhZCBhcnRpc3QvbGVhZCBwZXJmb3JtZXIvc29sb2lzdFwiLCBcIkFydGlzdC9wZXJmb3JtZXJcIiwgXCJDb25kdWN0b3JcIiwgXCJCYW5kL09yY2hlc3RyYVwiLCBcIkNvbXBvc2VyXCIsIFwiTHlyaWNpc3QvdGV4dCB3cml0ZXJcIiwgXCJSZWNvcmRpbmcgTG9jYXRpb25cIiwgXCJEdXJpbmcgcmVjb3JkaW5nXCIsIFwiRHVyaW5nIHBlcmZvcm1hbmNlXCIsIFwiTW92aWUvdmlkZW8gc2NyZWVuIGNhcHR1cmVcIiwgXCJBIGJyaWdodCBjb2xvdXJlZCBmaXNoXCIsIFwiSWxsdXN0cmF0aW9uXCIsIFwiQmFuZC9hcnRpc3QgbG9nb3R5cGVcIiwgXCJQdWJsaXNoZXIvU3R1ZGlvIGxvZ290eXBlXCJdO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIE1lZGlhVGFnUmVhZGVyIHRoYXQgcGFyc2VzIEZMQUMgdGFncy5cbiAqL1xudmFyIEZMQUNUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoRkxBQ1RhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBGTEFDVGFnUmVhZGVyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZMQUNUYWdSZWFkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9nZXRQcm90b3R5cGVPZjIgPSBfZ2V0UHJvdG90eXBlT2YoRkxBQ1RhZ1JlYWRlcikpLmNhbGwuYXBwbHkoX2dldFByb3RvdHlwZU9mMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9jb21tZW50T2Zmc2V0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3BpY3R1cmVPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGTEFDVGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB0byBsb2FkIHRoZSBkYXRhIGZyb20gdGhlIGZpbGUuXG4gICAgICpcbiAgICAgKiBUbyBiZWdpbiBwcm9jZXNzaW5nIHRoZSBibG9ja3MsIHRoZSBuZXh0IDQgYnl0ZXMgYWZ0ZXIgdGhlIGluaXRpYWwgNCBieXRlc1xuICAgICAqIChieXRlcyA0IHRocm91Z2ggNykgYXJlIGxvYWRlZC4gRnJvbSB0aGVyZSwgdGhlIHJlc3Qgb2YgdGhlIGxvYWRpbmcgcHJvY2Vzc1xuICAgICAqIGlzIHBhc3NlZCBvbiB0byB0aGUgX2xvYWRCbG9jayBmdW5jdGlvbiwgd2hpY2ggd2lsbCBoYW5kbGUgdGhlIHJlc3Qgb2YgdGhlXG4gICAgICogcGFyc2luZyBmb3IgdGhlIG1ldGFkYXRhIGJsb2Nrcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWVkaWFGaWxlUmVhZGVyfSBtZWRpYUZpbGVSZWFkZXIgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHVzZWQgdG8gcGFyc2UgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtMb2FkQ2FsbGJhY2tUeXBlfSBjYWxsYmFja3MgLSBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvbmNlIF9sb2FkRGF0YSBpcyBjb21wbGV0ZWQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbNCwgN10sIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgNCwgY2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNwZWNpYWwgaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCB0byBwYXJzZSB0aGUgZGlmZmVyZW50IEZMQUMgYmxvY2tzLlxuICAgICAqXG4gICAgICogVGhlIEZMQUMgc3BlY2lmaWNhdGlvbiBkb2Vzbid0IHNwZWNpZnkgYSBzcGVjaWZpYyBsb2NhdGlvbiBmb3IgbWV0YWRhdGEgdG8gcmVzaWduLCBidXRcbiAgICAgKiBkaWN0YXRlcyB0aGF0IGl0IG1heSBiZSBpbiBvbmUgb2YgdmFyaW91cyBibG9ja3MgbG9jYXRlZCB0aHJvdWdob3V0IHRoZSBmaWxlLiBUbyBsb2FkIHRoZVxuICAgICAqIG1ldGFkYXRhLCB3ZSBtdXN0IGxvY2F0ZSB0aGUgaGVhZGVyIGZpcnN0LiBUaGlzIGNhbiBiZSBkb25lIGJ5IHJlYWRpbmcgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAgICAgKiBlYWNoIGJsb2NrIHRvIGRldGVybWluZSB0aGUgYmxvY2sgdHlwZS4gQWZ0ZXIgdGhlIGJsb2NrIHR5cGUgY29tZXMgYSAyNCBiaXQgaW50ZWdlciB0aGF0IHN0b3Jlc1xuICAgICAqIHRoZSBsZW5ndGggb2YgdGhlIGJsb2NrIGFzIGJpZyBlbmRpYW4uIFVzaW5nIHRoaXMsIHdlIGxvY2F0ZSB0aGUgYmxvY2sgYW5kIHN0b3JlIHRoZSBvZmZzZXQgZm9yXG4gICAgICogcGFyc2luZyBsYXRlci5cbiAgICAgKlxuICAgICAqIEFmdGVyIGVhY2ggYmxvY2sgaGFzIGJlZW4gcGFyc2VkLCB0aGUgX25leHRCbG9jayBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gb3JkZXJcbiAgICAgKiB0byBwYXJzZSB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIG5leHQgYmxvY2suIEFsbCBibG9ja3MgbmVlZCB0byBiZSBwYXJzZWQgaW4gb3JkZXIgdG8gZmluZFxuICAgICAqIGFsbCBvZiB0aGUgcGljdHVyZSBhbmQgY29tbWVudCBibG9ja3MuXG4gICAgICpcbiAgICAgKiBNb3JlIGluZm8gb24gdGhlIEZMQUMgc3BlY2lmaWNhdGlvbiBtYXkgYmUgZm91bmQgaGVyZTpcbiAgICAgKiBodHRwczovL3hpcGgub3JnL2ZsYWMvZm9ybWF0Lmh0bWxcbiAgICAgKiBAcGFyYW0ge01lZGlhRmlsZVJlYWRlcn0gbWVkaWFGaWxlUmVhZGVyIC0gVGhlIE1lZGlhRmlsZVJlYWRlciB1c2VkIHRvIHBhcnNlIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IHRvIHN0YXJ0IGNoZWNraW5nIHRoZSBoZWFkZXIgZnJvbS5cbiAgICAgKiBAcGFyYW0ge0xvYWRDYWxsYmFja1R5cGV9IGNhbGxiYWNrcyAtIFRoZSBjYWxsYmFjayB0byBjYWxsIG9uY2UgdGhlIGhlYWRlciBoYXMgYmVlbiBmb3VuZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9sb2FkQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAvKiBBcyBtZW50aW9uZWQgYWJvdmUsIHRoaXMgZmlyc3QgYnl0ZSBpcyBsb2FkZWQgdG8gc2VlIHdoYXQgbWV0YWRhdGEgdHlwZVxuICAgICAgICogdGhpcyBibG9jayByZXByZXNlbnRzLlxuICAgICAgICovXG5cbiAgICAgIHZhciBibG9ja0hlYWRlciA9IG1lZGlhRmlsZVJlYWRlci5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICAgIC8qIFRoZSBsYXN0IHRocmVlIGJ5dGVzIChpbnRlZ2VyIDI0KSBjb250YWluIGEgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBsZW5ndGhcbiAgICAgICAqIG9mIHRoZSBmb2xsb3dpbmcgbWV0YWRhdGEgYmxvY2suIFRoZSAxIGlzIGFkZGVkIGluIG9yZGVyIHRvIHNoaWZ0IHRoZSBvZmZzZXRcbiAgICAgICAqIGJ5IG9uZSB0byBnZXQgdGhlIGxhc3QgdGhyZWUgYnl0ZXMgaW4gdGhlIGJsb2NrIGhlYWRlci5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgYmxvY2tTaXplID0gbWVkaWFGaWxlUmVhZGVyLmdldEludGVnZXIyNEF0KG9mZnNldCArIDEsIHRydWUpO1xuICAgICAgLyogVGhpcyBjb25kaXRpb25hbCBjaGVja3MgaWYgYmxvY2tIZWFkZXIgKHRoZSBieXRlIHJldHJpZXZlZCByZXByZXNlbnRpbmcgdGhlXG4gICAgICAgKiB0eXBlIG9mIHRoZSBoZWFkZXIpIGlzIG9uZSB0aGUgaGVhZGVycyB3ZSBhcmUgbG9va2luZyBmb3IuXG4gICAgICAgKlxuICAgICAgICogSWYgdGhhdCBpcyBub3QgdHJ1ZSwgdGhlIGJsb2NrIGlzIHNraXBwZWQgb3ZlciBhbmQgdGhlIG5leHQgcmFuZ2UgaXMgbG9hZGVkOlxuICAgICAgICogLSBvZmZzZXQgKyA0ICsgYmxvY2tTaXplIGFkZHMgNCB0byBza2lwIG92ZXIgdGhlIGluaXRpYWwgbWV0YWRhdGEgaGVhZGVyIGFuZFxuICAgICAgICogYmxvY2tTaXplIHRvIHNraXAgb3ZlciB0aGUgYmxvY2sgb3ZlcmFsbCwgcGxhY2luZyBpdCBhdCB0aGUgaGVhZCBvZiB0aGUgbmV4dFxuICAgICAgICogbWV0YWRhdGEgaGVhZGVyLlxuICAgICAgICogLSBvZmZzZXQgKyA0ICsgNCArIGJsb2NrU2l6ZSBkb2VzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSBwcmV2aW91cyBibG9jayB3aXRoXG4gICAgICAgKiB0aGUgZXhjZXB0aW9uIG9mIGFkZGluZyBhbm90aGVyIDQgYnl0ZXMgdG8gbW92ZSBpdCB0byB0aGUgZW5kIG9mIHRoZSBuZXcgbWV0YWRhdGFcbiAgICAgICAqIGhlYWRlci5cbiAgICAgICAqL1xuXG4gICAgICBpZiAoQ09NTUVOVF9IRUFERVJTLmluZGV4T2YoYmxvY2tIZWFkZXIpICE9PSAtMSkge1xuICAgICAgICAvKiA0IGlzIGFkZGVkIHRvIG9mZnNldCB0byBtb3ZlIGl0IHRvIHRoZSBoZWFkIG9mIHRoZSBhY3R1YWwgbWV0YWRhdGEuXG4gICAgICAgICAqIFRoZSByYW5nZSBzdGFydGluZyBmcm9tIG9mZnNldE1hdGFkYXRhICh0aGUgYmVnaW5uaW5nIG9mIHRoZSBibG9jaylcbiAgICAgICAgICogYW5kIG9mZnNldE1ldGFkYXRhICsgYmxvY2tTaXplICh0aGUgZW5kIG9mIHRoZSBibG9jaykgaXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIG9mZnNldE1ldGFkYXRhID0gb2Zmc2V0ICsgNDtcbiAgICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbb2Zmc2V0TWV0YWRhdGEsIG9mZnNldE1ldGFkYXRhICsgYmxvY2tTaXplXSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fY29tbWVudE9mZnNldCA9IG9mZnNldE1ldGFkYXRhO1xuXG4gICAgICAgICAgICBzZWxmLl9uZXh0QmxvY2sobWVkaWFGaWxlUmVhZGVyLCBvZmZzZXQsIGJsb2NrSGVhZGVyLCBibG9ja1NpemUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoUElDVFVSRV9IRUFERVJTLmluZGV4T2YoYmxvY2tIZWFkZXIpICE9PSAtMSkge1xuICAgICAgICB2YXIgb2Zmc2V0TWV0YWRhdGEgPSBvZmZzZXQgKyA0O1xuICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtvZmZzZXRNZXRhZGF0YSwgb2Zmc2V0TWV0YWRhdGEgKyBibG9ja1NpemVdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9waWN0dXJlT2Zmc2V0ID0gb2Zmc2V0TWV0YWRhdGE7XG5cbiAgICAgICAgICAgIHNlbGYuX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fbmV4dEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBibG9ja0hlYWRlciwgYmxvY2tTaXplLCBjYWxsYmFja3MpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbiB1c2VkIHRvIGxvYWQgdGhlIG5leHQgcmFuZ2UgYW5kIHJlc3BlY3RpdmUgYmxvY2suXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbWV0YWRhdGEgYmxvY2sgdGhhdCB3YXMgaWRlbnRpZmllZCBpcyBub3QgdGhlIGxhc3QgYmxvY2sgYmVmb3JlIHRoZVxuICAgICAqIGF1ZGlvIGJsb2NrcywgdGhlIGZ1bmN0aW9uIHdpbGwgY29udGludWUgbG9hZGluZyB0aGUgbmV4dCBibG9ja3MuIElmIGl0IGlzXG4gICAgICogdGhlIGxhc3QgYmxvY2sgKGlkZW50aWZpZWQgYnkgYW55IHZhbHVlcyBncmVhdGVyIHRoYW4gMTI3LCBzZWUgRkxBQyBzcGVjLiksXG4gICAgICogdGhlIGZ1bmN0aW9uIHdpbGwgZGV0ZXJtaW5lIHdoZXRoZXIgYSBjb21tZW50IGJsb2NrIGhhZCBiZWVuIGlkZW50aWZpZWQuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgYmxvY2sgZG9lcyBub3QgZXhpc3QsIHRoZSBlcnJvciBjYWxsYmFjayBpcyBjYWxsZWQuIE90aGVyd2lzZSwgdGhlIGZ1bmN0aW9uXG4gICAgICogd2lsbCBjYWxsIHRoZSBzdWNjZXNzIGNhbGxiYWNrLCBhbGxvd2luZyBkYXRhIHBhcnNpbmcgdG8gYmVnaW4uXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IG1lZGlhRmlsZVJlYWRlciAtIFRoZSBNZWRpYUZpbGVSZWFkZXIgdXNlZCB0byBwYXJzZSB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCB0aGF0IHRoZSBleGlzdGluZyBoZWFkZXIgd2FzIGxvY2F0ZWQgYXQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJsb2NrSGVhZGVyIC0gQW4gaW50ZWdlciByZWZsZWN0aW5nIHRoZSBoZWFkZXIgdHlwZSBvZiB0aGUgYmxvY2suXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJsb2NrU2l6ZSAtIFRoZSBzaXplIG9mIHRoZSBwcmV2aW91c2x5IHByb2Nlc3NlZCBoZWFkZXIuXG4gICAgICogQHBhcmFtIHtMb2FkQ2FsbGJhY2tUeXBlfSBjYWxsYmFja3MgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRvIGJlIGNhbGxlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9uZXh0QmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25leHRCbG9jayhtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCwgYmxvY2tIZWFkZXIsIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChibG9ja0hlYWRlciA+IDEyNykge1xuICAgICAgICBpZiAoIXNlbGYuX2NvbW1lbnRPZmZzZXQpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJsb2FkRGF0YVwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IFwiQ29tbWVudCBibG9jayBjb3VsZCBub3QgYmUgZm91bmQuXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldCArIDQgKyBibG9ja1NpemUsIG9mZnNldCArIDQgKyA0ICsgYmxvY2tTaXplXSwge1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5fbG9hZEJsb2NrKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0ICsgNCArIGJsb2NrU2l6ZSwgY2FsbGJhY2tzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGRhdGEgYW5kIHJldHVybnMgdGhlIHRhZ3MuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIG92ZXJ2aWV3IG9mIHRoZSBWb3JiaXNDb21tZW50IGZvcm1hdCBhbmQgd2hhdCB0aGlzIGZ1bmN0aW9uIGF0dGVtcHRzIHRvXG4gICAgICogcmV0cmlldmU6XG4gICAgICogLSBGaXJzdCA0IGJ5dGVzOiBhIGxvbmcgdGhhdCBjb250YWlucyB0aGUgbGVuZ3RoIG9mIHRoZSB2ZW5kb3Igc3RyaW5nLlxuICAgICAqIC0gTmV4dCBuIGJ5dGVzOiB0aGUgdmVuZG9yIHN0cmluZyBlbmNvZGVkIGluIFVURi04LlxuICAgICAqIC0gTmV4dCA0IGJ5dGVzOiBhIGxvbmcgcmVwcmVzZW50aW5nIGhvdyBtYW55IGNvbW1lbnRzIGFyZSBpbiB0aGlzIGJsb2NrXG4gICAgICogRm9yIGVhY2ggY29tbWVudCB0aGF0IGV4aXN0czpcbiAgICAgKiAtIEZpcnN0IDQgYnl0ZXM6IGEgbG9uZyByZXByZXNlbnRpbmcgdGhlIGxlbmd0aCBvZiB0aGUgY29tbWVudFxuICAgICAqIC0gTmV4dCBuIGJ5dGVzOiB0aGUgY29tbWVudCBlbmNvZGVkIGluIFVURi04LlxuICAgICAqIFRoZSBjb21tZW50IHN0cmluZyB3aWxsIHVzdWFsbHkgYXBwZWFyIGluIGEgZm9ybWF0IHNpbWlsYXIgdG86XG4gICAgICogQVJUSVNUPW1lXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGxvbmdzIGFuZCBpbnRlZ2VycyBpbiB0aGlzIGJsb2NrIGFyZSBlbmNvZGVkIGluIGxpdHRsZSBlbmRpYW5cbiAgICAgKiBhcyBvcHBvc2VkIHRvIGJpZyBlbmRpYW4gZm9yIHRoZSByZXN0IG9mIHRoZSBGTEFDIHNwZWMuXG4gICAgICogQHBhcmFtIHtNZWRpYUZpbGVSZWFkZXJ9IGRhdGEgLSBUaGUgTWVkaWFGaWxlUmVhZGVyIHRvIHBhcnNlIHRoZSBmaWxlIHdpdGguXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbdGFnc10gLSBPcHRpb25hbCB0YWdzIHRvIGFsc28gYmUgcmV0cmlldmVkIGZyb20gdGhlIGZpbGUuXG4gICAgICogQHJldHVybiB7VGFnVHlwZX0gLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdGFnIGluZm9ybWF0aW9uIGZvciB0aGUgZmlsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzKSB7XG4gICAgICB2YXIgdmVuZG9yTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQodGhpcy5fY29tbWVudE9mZnNldCwgZmFsc2UpO1xuICAgICAgdmFyIG9mZnNldFZlbmRvciA9IHRoaXMuX2NvbW1lbnRPZmZzZXQgKyA0O1xuICAgICAgLyogVGhpcyBsaW5lIGlzIGFibGUgdG8gcmV0cmlldmUgdGhlIHZlbmRvciBzdHJpbmcgdGhhdCB0aGUgVm9yYmlzQ29tbWVudCBibG9ja1xuICAgICAgICogY29udGFpbnMuIEhvd2V2ZXIsIGl0IGlzIG5vdCBwYXJ0IG9mIHRoZSB0YWdzIHRoYXQgSlNNZWRpYVRhZ3Mgbm9ybWFsbHkgcmV0cmlldmVzLFxuICAgICAgICogYW5kIGlzIHRoZXJlZm9yZSBjb21tZW50ZWQgb3V0LlxuICAgICAgICovXG4gICAgICAvLyB2YXIgdmVuZG9yID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldFZlbmRvciwgdmVuZG9yTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG5cbiAgICAgIHZhciBvZmZzZXRMaXN0ID0gdmVuZG9yTGVuZ3RoICsgb2Zmc2V0VmVuZG9yO1xuICAgICAgLyogVG8gZ2V0IHRoZSBtZXRhZGF0YSBmcm9tIHRoZSBibG9jaywgd2UgZmlyc3QgZ2V0IHRoZSBsb25nIHRoYXQgY29udGFpbnMgdGhlXG4gICAgICAgKiBudW1iZXIgb2YgYWN0dWFsIGNvbW1lbnQgdmFsdWVzIHRoYXQgYXJlIGV4aXN0ZW50IHdpdGhpbiB0aGUgYmxvY2suXG4gICAgICAgKlxuICAgICAgICogQXMgd2UgbG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgY29tbWVudCBibG9ja3MsIHdlIGdldCB0aGUgZGF0YSBsZW5ndGggaW4gb3JkZXIgdG9cbiAgICAgICAqIGdldCB0aGUgcmlnaHQgc2l6ZSBzdHJpbmcsIGFuZCB0aGVuIGRldGVybWluZSB3aGljaCBjYXRlZ29yeSB0aGF0IHN0cmluZyBmYWxscyB1bmRlci5cbiAgICAgICAqIFRoZSBkYXRhT2Zmc2V0IHZhcmlhYmxlIGlzIGNvbnN0YW50bHkgdXBkYXRlZCBzbyB0aGF0IGl0IGlzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlXG4gICAgICAgKiBjb21tZW50IHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIHBhcnNlZC5cbiAgICAgICAqXG4gICAgICAgKiBBZGRpdGlvbnMgb2YgNCBoZXJlIGFyZSB1c2VkIHRvIG1vdmUgdGhlIG9mZnNldCBwYXN0IHRoZSBmaXJzdCA0IGJ5dGVzIHdoaWNoIG9ubHkgY29udGFpblxuICAgICAgICogdGhlIGxlbmd0aCBvZiB0aGUgY29tbWVudC5cbiAgICAgICAqL1xuXG4gICAgICB2YXIgbnVtQ29tbWVudHMgPSBkYXRhLmdldExvbmdBdChvZmZzZXRMaXN0LCBmYWxzZSk7XG4gICAgICB2YXIgZGF0YU9mZnNldCA9IG9mZnNldExpc3QgKyA0O1xuICAgICAgdmFyIHRpdGxlLCBhcnRpc3QsIGFsYnVtLCB0cmFjaywgZ2VucmUsIHBpY3R1cmU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29tbWVudHM7IGkrKykge1xuICAgICAgICB2YXIgX2RhdGFMZW5ndGggPSBkYXRhLmdldExvbmdBdChkYXRhT2Zmc2V0LCBmYWxzZSk7XG5cbiAgICAgICAgdmFyIHMgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQoZGF0YU9mZnNldCArIDQsIF9kYXRhTGVuZ3RoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBkID0gcy5pbmRleE9mKFwiPVwiKTtcbiAgICAgICAgdmFyIHNwbGl0ID0gW3Muc2xpY2UoMCwgZCksIHMuc2xpY2UoZCArIDEpXTtcblxuICAgICAgICBzd2l0Y2ggKHNwbGl0WzBdKSB7XG4gICAgICAgICAgY2FzZSBcIlRJVExFXCI6XG4gICAgICAgICAgICB0aXRsZSA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiQVJUSVNUXCI6XG4gICAgICAgICAgICBhcnRpc3QgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkFMQlVNXCI6XG4gICAgICAgICAgICBhbGJ1bSA9IHNwbGl0WzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiVFJBQ0tOVU1CRVJcIjpcbiAgICAgICAgICAgIHRyYWNrID0gc3BsaXRbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJHRU5SRVwiOlxuICAgICAgICAgICAgZ2VucmUgPSBzcGxpdFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YU9mZnNldCArPSA0ICsgX2RhdGFMZW5ndGg7XG4gICAgICB9XG4gICAgICAvKiBJZiBhIHBpY3R1cmUgb2Zmc2V0IHdhcyBmb3VuZCBhbmQgYXNzaWduZWQsIHRoZW4gdGhlIHJlYWRlciB3aWxsIHN0YXJ0IHByb2Nlc3NpbmdcbiAgICAgICAqIHRoZSBwaWN0dXJlIGJsb2NrIGZyb20gdGhhdCBwb2ludC5cbiAgICAgICAqXG4gICAgICAgKiBBbGwgdGhlIGxlbmd0aHMgZm9yIHRoZSBwaWN0dXJlIGRhdGEgY2FuIGJlIGZvdW5kIG9ubGluZSBoZXJlOlxuICAgICAgICogaHR0cHM6Ly94aXBoLm9yZy9mbGFjL2Zvcm1hdC5odG1sI21ldGFkYXRhX2Jsb2NrX3BpY3R1cmVcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmICh0aGlzLl9waWN0dXJlT2Zmc2V0KSB7XG4gICAgICAgIHZhciBpbWFnZVR5cGUgPSBkYXRhLmdldExvbmdBdCh0aGlzLl9waWN0dXJlT2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldE1pbWVMZW5ndGggPSB0aGlzLl9waWN0dXJlT2Zmc2V0ICsgNDtcbiAgICAgICAgdmFyIG1pbWVMZW5ndGggPSBkYXRhLmdldExvbmdBdChvZmZzZXRNaW1lTGVuZ3RoLCB0cnVlKTtcbiAgICAgICAgdmFyIG9mZnNldE1pbWUgPSBvZmZzZXRNaW1lTGVuZ3RoICsgNDtcbiAgICAgICAgdmFyIG1pbWUgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldE1pbWUsIG1pbWVMZW5ndGgpO1xuICAgICAgICB2YXIgb2Zmc2V0RGVzY3JpcHRpb25MZW5ndGggPSBvZmZzZXRNaW1lICsgbWltZUxlbmd0aDtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0RGVzY3JpcHRpb25MZW5ndGgsIHRydWUpO1xuICAgICAgICB2YXIgb2Zmc2V0RGVzY3JpcHRpb24gPSBvZmZzZXREZXNjcmlwdGlvbkxlbmd0aCArIDQ7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXREZXNjcmlwdGlvbiwgZGVzY3JpcHRpb25MZW5ndGgsIFwidXRmLThcIikudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIG9mZnNldERhdGFMZW5ndGggPSBvZmZzZXREZXNjcmlwdGlvbiArIGRlc2NyaXB0aW9uTGVuZ3RoICsgMTY7XG4gICAgICAgIHZhciBkYXRhTGVuZ3RoID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0RGF0YUxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHZhciBvZmZzZXREYXRhID0gb2Zmc2V0RGF0YUxlbmd0aCArIDQ7XG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBkYXRhLmdldEJ5dGVzQXQob2Zmc2V0RGF0YSwgZGF0YUxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgIHBpY3R1cmUgPSB7XG4gICAgICAgICAgZm9ybWF0OiBtaW1lLFxuICAgICAgICAgIHR5cGU6IElNQUdFX1RZUEVTW2ltYWdlVHlwZV0sXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGRhdGE6IGltYWdlRGF0YVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0ge1xuICAgICAgICB0eXBlOiBcIkZMQUNcIixcbiAgICAgICAgdmVyc2lvbjogXCIxXCIsXG4gICAgICAgIHRhZ3M6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IHRpdGxlLFxuICAgICAgICAgIFwiYXJ0aXN0XCI6IGFydGlzdCxcbiAgICAgICAgICBcImFsYnVtXCI6IGFsYnVtLFxuICAgICAgICAgIFwidHJhY2tcIjogdHJhY2ssXG4gICAgICAgICAgXCJnZW5yZVwiOiBnZW5yZSxcbiAgICAgICAgICBcInBpY3R1cmVcIjogcGljdHVyZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRhZztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBieXRlIHJhbmdlIGZvciB0aGUgdGFnIGlkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBCZWNhdXNlIHRoZSBWb3JiaXMgY29tbWVudCBibG9jayBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBpbiBhIHNwZWNpZmllZFxuICAgICAqIGxvY2F0aW9uLCB3ZSBjYW4gb25seSBsb2FkIHRoZSBmaXJzdCA0IGJ5dGVzIG9mIHRoZSBmaWxlIHRvIGNvbmZpcm0gaXRcbiAgICAgKiBpcyBhIEZMQUMgZmlyc3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCeXRlUmFuZ2V9IFRoZSBieXRlIHJhbmdlIHRoYXQgaWRlbnRpZmllcyB0aGUgdGFnIGZvciBhIEZMQUMuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogRkxBQ19IRUFERVJfU0laRVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGlzIHJlYWRlciBjYW4gcmVhZCBhIGNlcnRhaW4gdGFnIGZvcm1hdC5cbiAgICAgKlxuICAgICAqIFRoaXMgY2hlY2tzIHRoYXQgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBpbiB0aGUgZmlsZSBhcmUgZkxhQywgd2hpY2hcbiAgICAgKiBhY2NvcmRpbmcgdG8gdGhlIEZMQUMgZmlsZSBzcGVjaWZpY2F0aW9uIHNob3VsZCBiZSB0aGUgY2hhcmFjdGVycyB0aGF0XG4gICAgICogaW5kaWNhdGUgYSBGTEFDIGZpbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBoZWFkZXIgaXMgZkxhQywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHZhciBpZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCB0YWdJZGVudGlmaWVyLnNsaWNlKDAsIDQpKTtcbiAgICAgIHJldHVybiBpZCA9PT0gJ2ZMYUMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGTEFDVGFnUmVhZGVyO1xufShNZWRpYVRhZ1JlYWRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gRkxBQ1RhZ1JlYWRlcjtcblxufSx7XCIuL01lZGlhVGFnUmVhZGVyXCI6MTJ9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFUYWdSZWFkZXInKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBJRDN2MVRhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhJRDN2MVRhZ1JlYWRlciwgX01lZGlhVGFnUmVhZGVyKTtcblxuICBmdW5jdGlvbiBJRDN2MVRhZ1JlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSUQzdjFUYWdSZWFkZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihJRDN2MVRhZ1JlYWRlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSUQzdjFUYWdSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBmaWxlU2l6ZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRTaXplKCk7XG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFtmaWxlU2l6ZSAtIDEyOCwgZmlsZVNpemUgLSAxXSwgY2FsbGJhY2tzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhcnNlRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VEYXRhKGRhdGEsIHRhZ3MpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBkYXRhLmdldFNpemUoKSAtIDEyODtcbiAgICAgIHZhciB0aXRsZSA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyAzLCAzMCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciBhcnRpc3QgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMzMsIDMwKS50b1N0cmluZygpO1xuICAgICAgdmFyIGFsYnVtID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDYzLCAzMCkudG9TdHJpbmcoKTtcbiAgICAgIHZhciB5ZWFyID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDkzLCA0KS50b1N0cmluZygpO1xuICAgICAgdmFyIHRyYWNrRmxhZyA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDk3ICsgMjgpO1xuICAgICAgdmFyIHRyYWNrID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgOTcgKyAyOSk7XG5cbiAgICAgIGlmICh0cmFja0ZsYWcgPT0gMCAmJiB0cmFjayAhPSAwKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gXCIxLjFcIjtcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgOTcsIDI4KS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBcIjEuMFwiO1xuICAgICAgICB2YXIgY29tbWVudCA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA5NywgMzApLnRvU3RyaW5nKCk7XG4gICAgICAgIHRyYWNrID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGdlbnJlSWR4ID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0ICsgOTcgKyAzMCk7XG5cbiAgICAgIGlmIChnZW5yZUlkeCA8IDI1NSkge1xuICAgICAgICB2YXIgZ2VucmUgPSBHRU5SRVNbZ2VucmVJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGdlbnJlID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZyA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiSUQzXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiB2ZXJzaW9uLFxuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogdGl0bGUsXG4gICAgICAgICAgXCJhcnRpc3RcIjogYXJ0aXN0LFxuICAgICAgICAgIFwiYWxidW1cIjogYWxidW0sXG4gICAgICAgICAgXCJ5ZWFyXCI6IHllYXIsXG4gICAgICAgICAgXCJjb21tZW50XCI6IGNvbW1lbnQsXG4gICAgICAgICAgXCJnZW5yZVwiOiBnZW5yZVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIGZsb3cgaXMgbm90IGhhcHB5IHdpdGggYWRkaW5nIHByb3BlcnRpZXNcbiAgICAgICAgdGFnLnRhZ3MudHJhY2sgPSB0cmFjaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhZztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICAvLyBUaGUgaWRlbnRpZmllciBpcyBUQUcgYW5kIGlzIGF0IG9mZnNldDogLTEyOC4gSG93ZXZlciwgdG8gYXZvaWQgYVxuICAgICAgLy8gZmV0Y2ggZm9yIHRoZSB0YWcgaWRlbnRpZmllciBhbmQgYW5vdGhlciBmb3IgdGhlIGRhdGEsIHdlIGxvYWQgdGhlXG4gICAgICAvLyBlbnRpcmUgZGF0YSBzaW5jZSBpdCdzIHNvIHNtYWxsLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2Zmc2V0OiAtMTI4LFxuICAgICAgICBsZW5ndGg6IDEyOFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHZhciBpZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCB0YWdJZGVudGlmaWVyLnNsaWNlKDAsIDMpKTtcbiAgICAgIHJldHVybiBpZCA9PT0gXCJUQUdcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSUQzdjFUYWdSZWFkZXI7XG59KE1lZGlhVGFnUmVhZGVyKTtcblxudmFyIEdFTlJFUyA9IFtcIkJsdWVzXCIsIFwiQ2xhc3NpYyBSb2NrXCIsIFwiQ291bnRyeVwiLCBcIkRhbmNlXCIsIFwiRGlzY29cIiwgXCJGdW5rXCIsIFwiR3J1bmdlXCIsIFwiSGlwLUhvcFwiLCBcIkphenpcIiwgXCJNZXRhbFwiLCBcIk5ldyBBZ2VcIiwgXCJPbGRpZXNcIiwgXCJPdGhlclwiLCBcIlBvcFwiLCBcIlImQlwiLCBcIlJhcFwiLCBcIlJlZ2dhZVwiLCBcIlJvY2tcIiwgXCJUZWNobm9cIiwgXCJJbmR1c3RyaWFsXCIsIFwiQWx0ZXJuYXRpdmVcIiwgXCJTa2FcIiwgXCJEZWF0aCBNZXRhbFwiLCBcIlByYW5rc1wiLCBcIlNvdW5kdHJhY2tcIiwgXCJFdXJvLVRlY2hub1wiLCBcIkFtYmllbnRcIiwgXCJUcmlwLUhvcFwiLCBcIlZvY2FsXCIsIFwiSmF6eitGdW5rXCIsIFwiRnVzaW9uXCIsIFwiVHJhbmNlXCIsIFwiQ2xhc3NpY2FsXCIsIFwiSW5zdHJ1bWVudGFsXCIsIFwiQWNpZFwiLCBcIkhvdXNlXCIsIFwiR2FtZVwiLCBcIlNvdW5kIENsaXBcIiwgXCJHb3NwZWxcIiwgXCJOb2lzZVwiLCBcIkFsdGVyblJvY2tcIiwgXCJCYXNzXCIsIFwiU291bFwiLCBcIlB1bmtcIiwgXCJTcGFjZVwiLCBcIk1lZGl0YXRpdmVcIiwgXCJJbnN0cnVtZW50YWwgUG9wXCIsIFwiSW5zdHJ1bWVudGFsIFJvY2tcIiwgXCJFdGhuaWNcIiwgXCJHb3RoaWNcIiwgXCJEYXJrd2F2ZVwiLCBcIlRlY2huby1JbmR1c3RyaWFsXCIsIFwiRWxlY3Ryb25pY1wiLCBcIlBvcC1Gb2xrXCIsIFwiRXVyb2RhbmNlXCIsIFwiRHJlYW1cIiwgXCJTb3V0aGVybiBSb2NrXCIsIFwiQ29tZWR5XCIsIFwiQ3VsdFwiLCBcIkdhbmdzdGFcIiwgXCJUb3AgNDBcIiwgXCJDaHJpc3RpYW4gUmFwXCIsIFwiUG9wL0Z1bmtcIiwgXCJKdW5nbGVcIiwgXCJOYXRpdmUgQW1lcmljYW5cIiwgXCJDYWJhcmV0XCIsIFwiTmV3IFdhdmVcIiwgXCJQc3ljaGFkZWxpY1wiLCBcIlJhdmVcIiwgXCJTaG93dHVuZXNcIiwgXCJUcmFpbGVyXCIsIFwiTG8tRmlcIiwgXCJUcmliYWxcIiwgXCJBY2lkIFB1bmtcIiwgXCJBY2lkIEphenpcIiwgXCJQb2xrYVwiLCBcIlJldHJvXCIsIFwiTXVzaWNhbFwiLCBcIlJvY2sgJiBSb2xsXCIsIFwiSGFyZCBSb2NrXCIsIFwiRm9sa1wiLCBcIkZvbGstUm9ja1wiLCBcIk5hdGlvbmFsIEZvbGtcIiwgXCJTd2luZ1wiLCBcIkZhc3QgRnVzaW9uXCIsIFwiQmVib2JcIiwgXCJMYXRpblwiLCBcIlJldml2YWxcIiwgXCJDZWx0aWNcIiwgXCJCbHVlZ3Jhc3NcIiwgXCJBdmFudGdhcmRlXCIsIFwiR290aGljIFJvY2tcIiwgXCJQcm9ncmVzc2l2ZSBSb2NrXCIsIFwiUHN5Y2hlZGVsaWMgUm9ja1wiLCBcIlN5bXBob25pYyBSb2NrXCIsIFwiU2xvdyBSb2NrXCIsIFwiQmlnIEJhbmRcIiwgXCJDaG9ydXNcIiwgXCJFYXN5IExpc3RlbmluZ1wiLCBcIkFjb3VzdGljXCIsIFwiSHVtb3VyXCIsIFwiU3BlZWNoXCIsIFwiQ2hhbnNvblwiLCBcIk9wZXJhXCIsIFwiQ2hhbWJlciBNdXNpY1wiLCBcIlNvbmF0YVwiLCBcIlN5bXBob255XCIsIFwiQm9vdHkgQmFzc1wiLCBcIlByaW11c1wiLCBcIlBvcm4gR3Jvb3ZlXCIsIFwiU2F0aXJlXCIsIFwiU2xvdyBKYW1cIiwgXCJDbHViXCIsIFwiVGFuZ29cIiwgXCJTYW1iYVwiLCBcIkZvbGtsb3JlXCIsIFwiQmFsbGFkXCIsIFwiUG93ZXIgQmFsbGFkXCIsIFwiUmh5dGhtaWMgU291bFwiLCBcIkZyZWVzdHlsZVwiLCBcIkR1ZXRcIiwgXCJQdW5rIFJvY2tcIiwgXCJEcnVtIFNvbG9cIiwgXCJBY2FwZWxsYVwiLCBcIkV1cm8tSG91c2VcIiwgXCJEYW5jZSBIYWxsXCJdO1xubW9kdWxlLmV4cG9ydHMgPSBJRDN2MVRhZ1JlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9NZWRpYVRhZ1JlYWRlclwiOjEyfV0sODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBTdHJpbmdVdGlscyA9IHJlcXVpcmUoJy4vU3RyaW5nVXRpbHMnKTtcblxudmFyIEFycmF5RmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vQXJyYXlGaWxlUmVhZGVyJyk7XG5cbnZhciBGUkFNRV9ERVNDUklQVElPTlMgPSB7XG4gIC8vIHYyLjJcbiAgXCJCVUZcIjogXCJSZWNvbW1lbmRlZCBidWZmZXIgc2l6ZVwiLFxuICBcIkNOVFwiOiBcIlBsYXkgY291bnRlclwiLFxuICBcIkNPTVwiOiBcIkNvbW1lbnRzXCIsXG4gIFwiQ1JBXCI6IFwiQXVkaW8gZW5jcnlwdGlvblwiLFxuICBcIkNSTVwiOiBcIkVuY3J5cHRlZCBtZXRhIGZyYW1lXCIsXG4gIFwiRVRDXCI6IFwiRXZlbnQgdGltaW5nIGNvZGVzXCIsXG4gIFwiRVFVXCI6IFwiRXF1YWxpemF0aW9uXCIsXG4gIFwiR0VPXCI6IFwiR2VuZXJhbCBlbmNhcHN1bGF0ZWQgb2JqZWN0XCIsXG4gIFwiSVBMXCI6IFwiSW52b2x2ZWQgcGVvcGxlIGxpc3RcIixcbiAgXCJMTktcIjogXCJMaW5rZWQgaW5mb3JtYXRpb25cIixcbiAgXCJNQ0lcIjogXCJNdXNpYyBDRCBJZGVudGlmaWVyXCIsXG4gIFwiTUxMXCI6IFwiTVBFRyBsb2NhdGlvbiBsb29rdXAgdGFibGVcIixcbiAgXCJQSUNcIjogXCJBdHRhY2hlZCBwaWN0dXJlXCIsXG4gIFwiUE9QXCI6IFwiUG9wdWxhcmltZXRlclwiLFxuICBcIlJFVlwiOiBcIlJldmVyYlwiLFxuICBcIlJWQVwiOiBcIlJlbGF0aXZlIHZvbHVtZSBhZGp1c3RtZW50XCIsXG4gIFwiU0xUXCI6IFwiU3luY2hyb25pemVkIGx5cmljL3RleHRcIixcbiAgXCJTVENcIjogXCJTeW5jZWQgdGVtcG8gY29kZXNcIixcbiAgXCJUQUxcIjogXCJBbGJ1bS9Nb3ZpZS9TaG93IHRpdGxlXCIsXG4gIFwiVEJQXCI6IFwiQlBNIChCZWF0cyBQZXIgTWludXRlKVwiLFxuICBcIlRDTVwiOiBcIkNvbXBvc2VyXCIsXG4gIFwiVENPXCI6IFwiQ29udGVudCB0eXBlXCIsXG4gIFwiVENSXCI6IFwiQ29weXJpZ2h0IG1lc3NhZ2VcIixcbiAgXCJUREFcIjogXCJEYXRlXCIsXG4gIFwiVERZXCI6IFwiUGxheWxpc3QgZGVsYXlcIixcbiAgXCJURU5cIjogXCJFbmNvZGVkIGJ5XCIsXG4gIFwiVEZUXCI6IFwiRmlsZSB0eXBlXCIsXG4gIFwiVElNXCI6IFwiVGltZVwiLFxuICBcIlRLRVwiOiBcIkluaXRpYWwga2V5XCIsXG4gIFwiVExBXCI6IFwiTGFuZ3VhZ2UocylcIixcbiAgXCJUTEVcIjogXCJMZW5ndGhcIixcbiAgXCJUTVRcIjogXCJNZWRpYSB0eXBlXCIsXG4gIFwiVE9BXCI6IFwiT3JpZ2luYWwgYXJ0aXN0KHMpL3BlcmZvcm1lcihzKVwiLFxuICBcIlRPRlwiOiBcIk9yaWdpbmFsIGZpbGVuYW1lXCIsXG4gIFwiVE9MXCI6IFwiT3JpZ2luYWwgTHlyaWNpc3QocykvdGV4dCB3cml0ZXIocylcIixcbiAgXCJUT1JcIjogXCJPcmlnaW5hbCByZWxlYXNlIHllYXJcIixcbiAgXCJUT1RcIjogXCJPcmlnaW5hbCBhbGJ1bS9Nb3ZpZS9TaG93IHRpdGxlXCIsXG4gIFwiVFAxXCI6IFwiTGVhZCBhcnRpc3QocykvTGVhZCBwZXJmb3JtZXIocykvU29sb2lzdChzKS9QZXJmb3JtaW5nIGdyb3VwXCIsXG4gIFwiVFAyXCI6IFwiQmFuZC9PcmNoZXN0cmEvQWNjb21wYW5pbWVudFwiLFxuICBcIlRQM1wiOiBcIkNvbmR1Y3Rvci9QZXJmb3JtZXIgcmVmaW5lbWVudFwiLFxuICBcIlRQNFwiOiBcIkludGVycHJldGVkLCByZW1peGVkLCBvciBvdGhlcndpc2UgbW9kaWZpZWQgYnlcIixcbiAgXCJUUEFcIjogXCJQYXJ0IG9mIGEgc2V0XCIsXG4gIFwiVFBCXCI6IFwiUHVibGlzaGVyXCIsXG4gIFwiVFJDXCI6IFwiSVNSQyAoSW50ZXJuYXRpb25hbCBTdGFuZGFyZCBSZWNvcmRpbmcgQ29kZSlcIixcbiAgXCJUUkRcIjogXCJSZWNvcmRpbmcgZGF0ZXNcIixcbiAgXCJUUktcIjogXCJUcmFjayBudW1iZXIvUG9zaXRpb24gaW4gc2V0XCIsXG4gIFwiVFNJXCI6IFwiU2l6ZVwiLFxuICBcIlRTU1wiOiBcIlNvZnR3YXJlL2hhcmR3YXJlIGFuZCBzZXR0aW5ncyB1c2VkIGZvciBlbmNvZGluZ1wiLFxuICBcIlRUMVwiOiBcIkNvbnRlbnQgZ3JvdXAgZGVzY3JpcHRpb25cIixcbiAgXCJUVDJcIjogXCJUaXRsZS9Tb25nbmFtZS9Db250ZW50IGRlc2NyaXB0aW9uXCIsXG4gIFwiVFQzXCI6IFwiU3VidGl0bGUvRGVzY3JpcHRpb24gcmVmaW5lbWVudFwiLFxuICBcIlRYVFwiOiBcIkx5cmljaXN0L3RleHQgd3JpdGVyXCIsXG4gIFwiVFhYXCI6IFwiVXNlciBkZWZpbmVkIHRleHQgaW5mb3JtYXRpb24gZnJhbWVcIixcbiAgXCJUWUVcIjogXCJZZWFyXCIsXG4gIFwiVUZJXCI6IFwiVW5pcXVlIGZpbGUgaWRlbnRpZmllclwiLFxuICBcIlVMVFwiOiBcIlVuc3ljaHJvbml6ZWQgbHlyaWMvdGV4dCB0cmFuc2NyaXB0aW9uXCIsXG4gIFwiV0FGXCI6IFwiT2ZmaWNpYWwgYXVkaW8gZmlsZSB3ZWJwYWdlXCIsXG4gIFwiV0FSXCI6IFwiT2ZmaWNpYWwgYXJ0aXN0L3BlcmZvcm1lciB3ZWJwYWdlXCIsXG4gIFwiV0FTXCI6IFwiT2ZmaWNpYWwgYXVkaW8gc291cmNlIHdlYnBhZ2VcIixcbiAgXCJXQ01cIjogXCJDb21tZXJjaWFsIGluZm9ybWF0aW9uXCIsXG4gIFwiV0NQXCI6IFwiQ29weXJpZ2h0L0xlZ2FsIGluZm9ybWF0aW9uXCIsXG4gIFwiV1BCXCI6IFwiUHVibGlzaGVycyBvZmZpY2lhbCB3ZWJwYWdlXCIsXG4gIFwiV1hYXCI6IFwiVXNlciBkZWZpbmVkIFVSTCBsaW5rIGZyYW1lXCIsXG4gIC8vIHYyLjNcbiAgXCJBRU5DXCI6IFwiQXVkaW8gZW5jcnlwdGlvblwiLFxuICBcIkFQSUNcIjogXCJBdHRhY2hlZCBwaWN0dXJlXCIsXG4gIFwiQVNQSVwiOiBcIkF1ZGlvIHNlZWsgcG9pbnQgaW5kZXhcIixcbiAgXCJDSEFQXCI6IFwiQ2hhcHRlclwiLFxuICBcIkNUT0NcIjogXCJUYWJsZSBvZiBjb250ZW50c1wiLFxuICBcIkNPTU1cIjogXCJDb21tZW50c1wiLFxuICBcIkNPTVJcIjogXCJDb21tZXJjaWFsIGZyYW1lXCIsXG4gIFwiRU5DUlwiOiBcIkVuY3J5cHRpb24gbWV0aG9kIHJlZ2lzdHJhdGlvblwiLFxuICBcIkVRVTJcIjogXCJFcXVhbGlzYXRpb24gKDIpXCIsXG4gIFwiRVFVQVwiOiBcIkVxdWFsaXphdGlvblwiLFxuICBcIkVUQ09cIjogXCJFdmVudCB0aW1pbmcgY29kZXNcIixcbiAgXCJHRU9CXCI6IFwiR2VuZXJhbCBlbmNhcHN1bGF0ZWQgb2JqZWN0XCIsXG4gIFwiR1JJRFwiOiBcIkdyb3VwIGlkZW50aWZpY2F0aW9uIHJlZ2lzdHJhdGlvblwiLFxuICBcIklQTFNcIjogXCJJbnZvbHZlZCBwZW9wbGUgbGlzdFwiLFxuICBcIkxJTktcIjogXCJMaW5rZWQgaW5mb3JtYXRpb25cIixcbiAgXCJNQ0RJXCI6IFwiTXVzaWMgQ0QgaWRlbnRpZmllclwiLFxuICBcIk1MTFRcIjogXCJNUEVHIGxvY2F0aW9uIGxvb2t1cCB0YWJsZVwiLFxuICBcIk9XTkVcIjogXCJPd25lcnNoaXAgZnJhbWVcIixcbiAgXCJQUklWXCI6IFwiUHJpdmF0ZSBmcmFtZVwiLFxuICBcIlBDTlRcIjogXCJQbGF5IGNvdW50ZXJcIixcbiAgXCJQT1BNXCI6IFwiUG9wdWxhcmltZXRlclwiLFxuICBcIlBPU1NcIjogXCJQb3NpdGlvbiBzeW5jaHJvbmlzYXRpb24gZnJhbWVcIixcbiAgXCJSQlVGXCI6IFwiUmVjb21tZW5kZWQgYnVmZmVyIHNpemVcIixcbiAgXCJSVkEyXCI6IFwiUmVsYXRpdmUgdm9sdW1lIGFkanVzdG1lbnQgKDIpXCIsXG4gIFwiUlZBRFwiOiBcIlJlbGF0aXZlIHZvbHVtZSBhZGp1c3RtZW50XCIsXG4gIFwiUlZSQlwiOiBcIlJldmVyYlwiLFxuICBcIlNFRUtcIjogXCJTZWVrIGZyYW1lXCIsXG4gIFwiU1lMVFwiOiBcIlN5bmNocm9uaXplZCBseXJpYy90ZXh0XCIsXG4gIFwiU1lUQ1wiOiBcIlN5bmNocm9uaXplZCB0ZW1wbyBjb2Rlc1wiLFxuICBcIlRBTEJcIjogXCJBbGJ1bS9Nb3ZpZS9TaG93IHRpdGxlXCIsXG4gIFwiVEJQTVwiOiBcIkJQTSAoYmVhdHMgcGVyIG1pbnV0ZSlcIixcbiAgXCJUQ09NXCI6IFwiQ29tcG9zZXJcIixcbiAgXCJUQ09OXCI6IFwiQ29udGVudCB0eXBlXCIsXG4gIFwiVENPUFwiOiBcIkNvcHlyaWdodCBtZXNzYWdlXCIsXG4gIFwiVERBVFwiOiBcIkRhdGVcIixcbiAgXCJURExZXCI6IFwiUGxheWxpc3QgZGVsYXlcIixcbiAgXCJURFJDXCI6IFwiUmVjb3JkaW5nIHRpbWVcIixcbiAgXCJURFJMXCI6IFwiUmVsZWFzZSB0aW1lXCIsXG4gIFwiVERUR1wiOiBcIlRhZ2dpbmcgdGltZVwiLFxuICBcIlRFTkNcIjogXCJFbmNvZGVkIGJ5XCIsXG4gIFwiVEVYVFwiOiBcIkx5cmljaXN0L1RleHQgd3JpdGVyXCIsXG4gIFwiVEZMVFwiOiBcIkZpbGUgdHlwZVwiLFxuICBcIlRJTUVcIjogXCJUaW1lXCIsXG4gIFwiVElQTFwiOiBcIkludm9sdmVkIHBlb3BsZSBsaXN0XCIsXG4gIFwiVElUMVwiOiBcIkNvbnRlbnQgZ3JvdXAgZGVzY3JpcHRpb25cIixcbiAgXCJUSVQyXCI6IFwiVGl0bGUvc29uZ25hbWUvY29udGVudCBkZXNjcmlwdGlvblwiLFxuICBcIlRJVDNcIjogXCJTdWJ0aXRsZS9EZXNjcmlwdGlvbiByZWZpbmVtZW50XCIsXG4gIFwiVEtFWVwiOiBcIkluaXRpYWwga2V5XCIsXG4gIFwiVExBTlwiOiBcIkxhbmd1YWdlKHMpXCIsXG4gIFwiVExFTlwiOiBcIkxlbmd0aFwiLFxuICBcIlRNQ0xcIjogXCJNdXNpY2lhbiBjcmVkaXRzIGxpc3RcIixcbiAgXCJUTUVEXCI6IFwiTWVkaWEgdHlwZVwiLFxuICBcIlRNT09cIjogXCJNb29kXCIsXG4gIFwiVE9BTFwiOiBcIk9yaWdpbmFsIGFsYnVtL21vdmllL3Nob3cgdGl0bGVcIixcbiAgXCJUT0ZOXCI6IFwiT3JpZ2luYWwgZmlsZW5hbWVcIixcbiAgXCJUT0xZXCI6IFwiT3JpZ2luYWwgbHlyaWNpc3QocykvdGV4dCB3cml0ZXIocylcIixcbiAgXCJUT1BFXCI6IFwiT3JpZ2luYWwgYXJ0aXN0KHMpL3BlcmZvcm1lcihzKVwiLFxuICBcIlRPUllcIjogXCJPcmlnaW5hbCByZWxlYXNlIHllYXJcIixcbiAgXCJUT1dOXCI6IFwiRmlsZSBvd25lci9saWNlbnNlZVwiLFxuICBcIlRQRTFcIjogXCJMZWFkIHBlcmZvcm1lcihzKS9Tb2xvaXN0KHMpXCIsXG4gIFwiVFBFMlwiOiBcIkJhbmQvb3JjaGVzdHJhL2FjY29tcGFuaW1lbnRcIixcbiAgXCJUUEUzXCI6IFwiQ29uZHVjdG9yL3BlcmZvcm1lciByZWZpbmVtZW50XCIsXG4gIFwiVFBFNFwiOiBcIkludGVycHJldGVkLCByZW1peGVkLCBvciBvdGhlcndpc2UgbW9kaWZpZWQgYnlcIixcbiAgXCJUUE9TXCI6IFwiUGFydCBvZiBhIHNldFwiLFxuICBcIlRQUk9cIjogXCJQcm9kdWNlZCBub3RpY2VcIixcbiAgXCJUUFVCXCI6IFwiUHVibGlzaGVyXCIsXG4gIFwiVFJDS1wiOiBcIlRyYWNrIG51bWJlci9Qb3NpdGlvbiBpbiBzZXRcIixcbiAgXCJUUkRBXCI6IFwiUmVjb3JkaW5nIGRhdGVzXCIsXG4gIFwiVFJTTlwiOiBcIkludGVybmV0IHJhZGlvIHN0YXRpb24gbmFtZVwiLFxuICBcIlRSU09cIjogXCJJbnRlcm5ldCByYWRpbyBzdGF0aW9uIG93bmVyXCIsXG4gIFwiVFNPQVwiOiBcIkFsYnVtIHNvcnQgb3JkZXJcIixcbiAgXCJUU09QXCI6IFwiUGVyZm9ybWVyIHNvcnQgb3JkZXJcIixcbiAgXCJUU09UXCI6IFwiVGl0bGUgc29ydCBvcmRlclwiLFxuICBcIlRTSVpcIjogXCJTaXplXCIsXG4gIFwiVFNSQ1wiOiBcIklTUkMgKGludGVybmF0aW9uYWwgc3RhbmRhcmQgcmVjb3JkaW5nIGNvZGUpXCIsXG4gIFwiVFNTRVwiOiBcIlNvZnR3YXJlL0hhcmR3YXJlIGFuZCBzZXR0aW5ncyB1c2VkIGZvciBlbmNvZGluZ1wiLFxuICBcIlRTU1RcIjogXCJTZXQgc3VidGl0bGVcIixcbiAgXCJUWUVSXCI6IFwiWWVhclwiLFxuICBcIlRYWFhcIjogXCJVc2VyIGRlZmluZWQgdGV4dCBpbmZvcm1hdGlvbiBmcmFtZVwiLFxuICBcIlVGSURcIjogXCJVbmlxdWUgZmlsZSBpZGVudGlmaWVyXCIsXG4gIFwiVVNFUlwiOiBcIlRlcm1zIG9mIHVzZVwiLFxuICBcIlVTTFRcIjogXCJVbnN5Y2hyb25pemVkIGx5cmljL3RleHQgdHJhbnNjcmlwdGlvblwiLFxuICBcIldDT01cIjogXCJDb21tZXJjaWFsIGluZm9ybWF0aW9uXCIsXG4gIFwiV0NPUFwiOiBcIkNvcHlyaWdodC9MZWdhbCBpbmZvcm1hdGlvblwiLFxuICBcIldPQUZcIjogXCJPZmZpY2lhbCBhdWRpbyBmaWxlIHdlYnBhZ2VcIixcbiAgXCJXT0FSXCI6IFwiT2ZmaWNpYWwgYXJ0aXN0L3BlcmZvcm1lciB3ZWJwYWdlXCIsXG4gIFwiV09BU1wiOiBcIk9mZmljaWFsIGF1ZGlvIHNvdXJjZSB3ZWJwYWdlXCIsXG4gIFwiV09SU1wiOiBcIk9mZmljaWFsIGludGVybmV0IHJhZGlvIHN0YXRpb24gaG9tZXBhZ2VcIixcbiAgXCJXUEFZXCI6IFwiUGF5bWVudFwiLFxuICBcIldQVUJcIjogXCJQdWJsaXNoZXJzIG9mZmljaWFsIHdlYnBhZ2VcIixcbiAgXCJXWFhYXCI6IFwiVXNlciBkZWZpbmVkIFVSTCBsaW5rIGZyYW1lXCJcbn07XG5cbnZhciBJRDN2MkZyYW1lUmVhZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSUQzdjJGcmFtZVJlYWRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSUQzdjJGcmFtZVJlYWRlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSUQzdjJGcmFtZVJlYWRlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZ2V0RnJhbWVSZWFkZXJGdW5jdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZVJlYWRlckZ1bmN0aW9uKGZyYW1lSWQpIHtcbiAgICAgIGlmIChmcmFtZUlkIGluIGZyYW1lUmVhZGVyRnVuY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiBmcmFtZVJlYWRlckZ1bmN0aW9uc1tmcmFtZUlkXTtcbiAgICAgIH0gZWxzZSBpZiAoZnJhbWVJZFswXSA9PT0gXCJUXCIpIHtcbiAgICAgICAgLy8gQWxsIGZyYW1lIGlkcyBzdGFydGluZyB3aXRoIFQgYXJlIHRleHQgdGFncy5cbiAgICAgICAgcmV0dXJuIGZyYW1lUmVhZGVyRnVuY3Rpb25zW1wiVCpcIl07XG4gICAgICB9IGVsc2UgaWYgKGZyYW1lSWRbMF0gPT09IFwiV1wiKSB7XG4gICAgICAgIC8vIEFsbCBmcmFtZSBpZHMgc3RhcnRpbmcgd2l0aCBXIGFyZSB1cmwgdGFncy5cbiAgICAgICAgcmV0dXJuIGZyYW1lUmVhZGVyRnVuY3Rpb25zW1wiVypcIl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsIHRoZSBmcmFtZXMgY29uc2lzdHMgb2YgYSBmcmFtZSBoZWFkZXIgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZmllbGRzXG4gICAgICogY29udGFpbmluZyB0aGUgYWN0dWFsIGluZm9ybWF0aW9uLlxuICAgICAqIFRoZSBmcmFtZSBJRCBtYWRlIG91dCBvZiB0aGUgY2hhcmFjdGVycyBjYXBpdGFsIEEtWiBhbmQgMC05LiBJZGVudGlmaWVyc1xuICAgICAqIGJlZ2lubmluZyB3aXRoIFwiWFwiLCBcIllcIiBhbmQgXCJaXCIgYXJlIGZvciBleHBlcmltZW50YWwgdXNlIGFuZCBmcmVlIGZvclxuICAgICAqIGV2ZXJ5b25lIHRvIHVzZSwgd2l0aG91dCB0aGUgbmVlZCB0byBzZXQgdGhlIGV4cGVyaW1lbnRhbCBiaXQgaW4gdGhlIHRhZ1xuICAgICAqIGhlYWRlci4gSGF2ZSBpbiBtaW5kIHRoYXQgc29tZW9uZSBlbHNlIG1pZ2h0IGhhdmUgdXNlZCB0aGUgc2FtZSBpZGVudGlmaWVyXG4gICAgICogYXMgeW91LiBBbGwgb3RoZXIgaWRlbnRpZmllcnMgYXJlIGVpdGhlciB1c2VkIG9yIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlLlxuICAgICAqIFRoZSBmcmFtZSBJRCBpcyBmb2xsb3dlZCBieSBhIHNpemUgZGVzY3JpcHRvciwgbWFraW5nIGEgdG90YWwgaGVhZGVyIHNpemVcbiAgICAgKiBvZiB0ZW4gYnl0ZXMgaW4gZXZlcnkgZnJhbWUuIFRoZSBzaXplIGlzIGNhbGN1bGF0ZWQgYXMgZnJhbWUgc2l6ZSBleGNsdWRpbmdcbiAgICAgKiBmcmFtZSBoZWFkZXIgKGZyYW1lIHNpemUgLSAxMCkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRnJhbWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRGcmFtZXMob2Zmc2V0LCBlbmQsIGRhdGEsIGlkM2hlYWRlciwgdGFncykge1xuICAgICAgdmFyIGZyYW1lcyA9IHt9O1xuXG4gICAgICB2YXIgZnJhbWVIZWFkZXJTaXplID0gdGhpcy5fZ2V0RnJhbWVIZWFkZXJTaXplKGlkM2hlYWRlcik7IC8vIGNvbnNvbGUubG9nKCdoZWFkZXInLCBpZDNoZWFkZXIpO1xuXG5cbiAgICAgIHdoaWxlICggLy8gd2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVhZCBhdCBsZWFzdCB0aGUgZnJhbWUgaGVhZGVyXG4gICAgICBvZmZzZXQgPCBlbmQgLSBmcmFtZUhlYWRlclNpemUpIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuX3JlYWRGcmFtZUhlYWRlcihkYXRhLCBvZmZzZXQsIGlkM2hlYWRlcik7XG5cbiAgICAgICAgdmFyIGZyYW1lSWQgPSBoZWFkZXIuaWQ7IC8vIE5vIGZyYW1lIElEIHNvbWV0aW1lcyBtZWFucyBpdCdzIHRoZSBsYXN0IGZyYW1lIChHVEZPKS5cblxuICAgICAgICBpZiAoIWZyYW1lSWQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmbGFncyA9IGhlYWRlci5mbGFncztcbiAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGhlYWRlci5zaXplO1xuICAgICAgICB2YXIgZnJhbWVEYXRhT2Zmc2V0ID0gb2Zmc2V0ICsgaGVhZGVyLmhlYWRlclNpemU7XG4gICAgICAgIHZhciBmcmFtZURhdGEgPSBkYXRhOyAvLyBjb25zb2xlLmxvZyhvZmZzZXQsIGZyYW1lSWQsIGhlYWRlci5zaXplICsgaGVhZGVyLmhlYWRlclNpemUsIGZsYWdzICYmIGZsYWdzLmZvcm1hdC51bnN5bmNocm9uaXNhdGlvbik7XG4gICAgICAgIC8vIGFkdmFuY2UgZGF0YSBvZmZzZXQgdG8gdGhlIG5leHQgZnJhbWUgZGF0YVxuXG4gICAgICAgIG9mZnNldCArPSBoZWFkZXIuaGVhZGVyU2l6ZSArIGhlYWRlci5zaXplOyAvLyBza2lwIHVud2FudGVkIHRhZ3NcblxuICAgICAgICBpZiAodGFncyAmJiB0YWdzLmluZGV4T2YoZnJhbWVJZCkgPT09IC0xKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gV29ya2Fyb3VuZDogTVAzZXh0IFYzLjMuMTcgcGxhY2VzIGEgbm9uLWNvbXBsaWFudCBwYWRkaW5nIHN0cmluZyBhdFxuICAgICAgICAvLyB0aGUgZW5kIG9mIHRoZSBJRDN2MiBoZWFkZXIuIEEgc3RyaW5nIGxpa2UgXCJNUDNleHQgVjMuMy4xOShhbnNpKVwiXG4gICAgICAgIC8vIGlzIGFkZGVkIG11bHRpcGxlIHRpbWVzIGF0IHRoZSBlbmQgb2YgdGhlIElEMyB0YWcuIE1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgLy8gYWJvdXQgdGhpcyBpc3N1ZSBjYW4gYmUgZm91bmQgYXRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FhZHNtL2pzbWVkaWF0YWdzL2lzc3Vlcy81OCNpc3N1ZWNvbW1lbnQtMzEzODY1MzM2XG5cblxuICAgICAgICBpZiAoZnJhbWVJZCA9PT0gJ01QM2UnIHx8IGZyYW1lSWQgPT09ICdcXHgwME1QMycgfHwgZnJhbWVJZCA9PT0gJ1xceDAwXFx4MDBNUCcgfHwgZnJhbWVJZCA9PT0gJyBNUDMnKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdW5zeW5jRGF0YTtcblxuICAgICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MuZm9ybWF0LnVuc3luY2hyb25pc2F0aW9uKSB7XG4gICAgICAgICAgZnJhbWVEYXRhID0gdGhpcy5nZXRVbnN5bmNGaWxlUmVhZGVyKGZyYW1lRGF0YSwgZnJhbWVEYXRhT2Zmc2V0LCBmcmFtZVNpemUpO1xuICAgICAgICAgIGZyYW1lRGF0YU9mZnNldCA9IDA7XG4gICAgICAgICAgZnJhbWVTaXplID0gZnJhbWVEYXRhLmdldFNpemUoKTtcbiAgICAgICAgfSAvLyB0aGUgZmlyc3QgNCBieXRlcyBhcmUgdGhlIHJlYWwgZGF0YSBzaXplXG4gICAgICAgIC8vIChhZnRlciB1bnN5bmNocm9uaXNhdGlvbiAmJiBlbmNyeXB0aW9uKVxuXG5cbiAgICAgICAgaWYgKGZsYWdzICYmIGZsYWdzLmZvcm1hdC5kYXRhX2xlbmd0aF9pbmRpY2F0b3IpIHtcbiAgICAgICAgICAvLyB2YXIgZnJhbWVEYXRhU2l6ZSA9IGZyYW1lRGF0YS5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChmcmFtZURhdGFPZmZzZXQpO1xuICAgICAgICAgIGZyYW1lRGF0YU9mZnNldCArPSA0O1xuICAgICAgICAgIGZyYW1lU2l6ZSAtPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlYWRGcmFtZUZ1bmMgPSBJRDN2MkZyYW1lUmVhZGVyLmdldEZyYW1lUmVhZGVyRnVuY3Rpb24oZnJhbWVJZCk7XG4gICAgICAgIHZhciBwYXJzZWREYXRhID0gcmVhZEZyYW1lRnVuYyA/IHJlYWRGcmFtZUZ1bmMuYXBwbHkodGhpcywgW2ZyYW1lRGF0YU9mZnNldCwgZnJhbWVTaXplLCBmcmFtZURhdGEsIGZsYWdzLCBpZDNoZWFkZXJdKSA6IG51bGw7XG5cbiAgICAgICAgdmFyIGRlc2MgPSB0aGlzLl9nZXRGcmFtZURlc2NyaXB0aW9uKGZyYW1lSWQpO1xuXG4gICAgICAgIHZhciBmcmFtZSA9IHtcbiAgICAgICAgICBpZDogZnJhbWVJZCxcbiAgICAgICAgICBzaXplOiBmcmFtZVNpemUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICAgICAgZGF0YTogcGFyc2VkRGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmcmFtZUlkIGluIGZyYW1lcykge1xuICAgICAgICAgIGlmIChmcmFtZXNbZnJhbWVJZF0uaWQpIHtcbiAgICAgICAgICAgIGZyYW1lc1tmcmFtZUlkXSA9IFtmcmFtZXNbZnJhbWVJZF1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZyYW1lc1tmcmFtZUlkXS5wdXNoKGZyYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcmFtZXNbZnJhbWVJZF0gPSBmcmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnJhbWVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RnJhbWVIZWFkZXJTaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGcmFtZUhlYWRlclNpemUoaWQzaGVhZGVyKSB7XG4gICAgICB2YXIgbWFqb3IgPSBpZDNoZWFkZXIubWFqb3I7XG5cbiAgICAgIGlmIChtYWpvciA9PSAyKSB7XG4gICAgICAgIHJldHVybiA2O1xuICAgICAgfSBlbHNlIGlmIChtYWpvciA9PSAzIHx8IG1ham9yID09IDQpIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9yZWFkRnJhbWVIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYWRGcmFtZUhlYWRlcihkYXRhLCBvZmZzZXQsIGlkM2hlYWRlcikge1xuICAgICAgdmFyIG1ham9yID0gaWQzaGVhZGVyLm1ham9yO1xuICAgICAgdmFyIGZsYWdzID0gbnVsbDtcblxuICAgICAgdmFyIGZyYW1lSGVhZGVyU2l6ZSA9IHRoaXMuX2dldEZyYW1lSGVhZGVyU2l6ZShpZDNoZWFkZXIpO1xuXG4gICAgICBzd2l0Y2ggKG1ham9yKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB2YXIgZnJhbWVJZCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0LCAzKTtcbiAgICAgICAgICB2YXIgZnJhbWVTaXplID0gZGF0YS5nZXRJbnRlZ2VyMjRBdChvZmZzZXQgKyAzLCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdmFyIGZyYW1lSWQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCwgNCk7XG4gICAgICAgICAgdmFyIGZyYW1lU2l6ZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCArIDQsIHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB2YXIgZnJhbWVJZCA9IGRhdGEuZ2V0U3RyaW5nQXQob2Zmc2V0LCA0KTtcbiAgICAgICAgICB2YXIgZnJhbWVTaXplID0gZGF0YS5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChvZmZzZXQgKyA0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lSWQgPT0gU3RyaW5nLmZyb21DaGFyQ29kZSgwLCAwLCAwKSB8fCBmcmFtZUlkID09IFN0cmluZy5mcm9tQ2hhckNvZGUoMCwgMCwgMCwgMCkpIHtcbiAgICAgICAgZnJhbWVJZCA9IFwiXCI7XG4gICAgICB9IC8vIGlmIGZyYW1lSWQgaXMgZW1wdHkgdGhlbiBpdCdzIHRoZSBsYXN0IGZyYW1lXG5cblxuICAgICAgaWYgKGZyYW1lSWQpIHtcbiAgICAgICAgLy8gcmVhZCBmcmFtZSBtZXNzYWdlIGFuZCBmb3JtYXQgZmxhZ3NcbiAgICAgICAgaWYgKG1ham9yID4gMikge1xuICAgICAgICAgIGZsYWdzID0gdGhpcy5fcmVhZEZyYW1lRmxhZ3MoZGF0YSwgb2Zmc2V0ICsgOCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJpZFwiOiBmcmFtZUlkIHx8IFwiXCIsXG4gICAgICAgIFwic2l6ZVwiOiBmcmFtZVNpemUgfHwgMCxcbiAgICAgICAgXCJoZWFkZXJTaXplXCI6IGZyYW1lSGVhZGVyU2l6ZSB8fCAwLFxuICAgICAgICBcImZsYWdzXCI6IGZsYWdzXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZEZyYW1lRmxhZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYWRGcmFtZUZsYWdzKGRhdGEsIG9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIHRhZ19hbHRlcl9wcmVzZXJ2YXRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDYpLFxuICAgICAgICAgIGZpbGVfYWx0ZXJfcHJlc2VydmF0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCA1KSxcbiAgICAgICAgICByZWFkX29ubHk6IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQsIDQpXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGdyb3VwaW5nX2lkZW50aXR5OiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgNyksXG4gICAgICAgICAgY29tcHJlc3Npb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCAzKSxcbiAgICAgICAgICBlbmNyeXB0aW9uOiBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgMSwgMiksXG4gICAgICAgICAgdW5zeW5jaHJvbmlzYXRpb246IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCAxKSxcbiAgICAgICAgICBkYXRhX2xlbmd0aF9pbmRpY2F0b3I6IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyAxLCAwKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0RnJhbWVEZXNjcmlwdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RnJhbWVEZXNjcmlwdGlvbihmcmFtZUlkKSB7XG4gICAgICBpZiAoZnJhbWVJZCBpbiBGUkFNRV9ERVNDUklQVElPTlMpIHtcbiAgICAgICAgcmV0dXJuIEZSQU1FX0RFU0NSSVBUSU9OU1tmcmFtZUlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFVuc3luY0ZpbGVSZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VW5zeW5jRmlsZVJlYWRlcihkYXRhLCBvZmZzZXQsIHNpemUpIHtcbiAgICAgIHZhciBmcmFtZURhdGEgPSBkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBzaXplKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZURhdGEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChmcmFtZURhdGFbaV0gPT09IDB4ZmYgJiYgZnJhbWVEYXRhW2kgKyAxXSA9PT0gMHgwMCkge1xuICAgICAgICAgIGZyYW1lRGF0YS5zcGxpY2UoaSArIDEsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQXJyYXlGaWxlUmVhZGVyKGZyYW1lRGF0YSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElEM3YyRnJhbWVSZWFkZXI7XG59KCk7XG5cbjtcbnZhciBmcmFtZVJlYWRlckZ1bmN0aW9ucyA9IHt9O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQVBJQyddID0gZnVuY3Rpb24gcmVhZFBpY3R1cmVGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICB2YXIgc3RhcnQgPSBvZmZzZXQ7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuXG4gIHN3aXRjaCAoaWQzaGVhZGVyICYmIGlkM2hlYWRlci5tYWpvcikge1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciBmb3JtYXQgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDEsIDMpO1xuICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzpcbiAgICBjYXNlIDQ6XG4gICAgICB2YXIgZm9ybWF0ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCArIDEsIGxlbmd0aCAtIDEpO1xuICAgICAgb2Zmc2V0ICs9IDEgKyBmb3JtYXQuYnl0ZXNSZWFkQ291bnQ7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCByZWFkIElEM3YyIG1ham9yIHZlcnNpb24uXCIpO1xuICB9XG5cbiAgdmFyIGJpdGUgPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuICB2YXIgdHlwZSA9IFBJQ1RVUkVfVFlQRVtiaXRlXTtcbiAgdmFyIGRlc2MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSwgbGVuZ3RoIC0gKG9mZnNldCAtIHN0YXJ0KSAtIDEsIGNoYXJzZXQpO1xuICBvZmZzZXQgKz0gMSArIGRlc2MuYnl0ZXNSZWFkQ291bnQ7XG4gIHJldHVybiB7XG4gICAgXCJmb3JtYXRcIjogZm9ybWF0LnRvU3RyaW5nKCksXG4gICAgXCJ0eXBlXCI6IHR5cGUsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBkZXNjLnRvU3RyaW5nKCksXG4gICAgXCJkYXRhXCI6IGRhdGEuZ2V0Qnl0ZXNBdChvZmZzZXQsIHN0YXJ0ICsgbGVuZ3RoIC0gb2Zmc2V0KVxuICB9O1xufTsgLy8gSUQzdjIgY2hhcHRlcnMgYWNjb3JkaW5nIHRvIGh0dHA6Ly9pZDMub3JnL2lkM3YyLWNoYXB0ZXJzLTEuMFxuXG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydDSEFQJ10gPSBmdW5jdGlvbiByZWFkQ2hhcHRlckZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IG9mZnNldDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgaWQgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSk7XG4gIHJlc3VsdC5pZCA9IGlkLnRvU3RyaW5nKCk7XG4gIG9mZnNldCArPSBpZC5ieXRlc1JlYWRDb3VudDtcbiAgcmVzdWx0LnN0YXJ0VGltZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gIG9mZnNldCArPSA0O1xuICByZXN1bHQuZW5kVGltZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gIG9mZnNldCArPSA0O1xuICByZXN1bHQuc3RhcnRPZmZzZXQgPSBkYXRhLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuICBvZmZzZXQgKz0gNDtcbiAgcmVzdWx0LmVuZE9mZnNldCA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gIG9mZnNldCArPSA0O1xuICB2YXIgcmVtYWluaW5nTGVuZ3RoID0gbGVuZ3RoIC0gKG9mZnNldCAtIG9yaWdpbmFsT2Zmc2V0KTtcbiAgcmVzdWx0LnN1YkZyYW1lcyA9IHRoaXMucmVhZEZyYW1lcyhvZmZzZXQsIG9mZnNldCArIHJlbWFpbmluZ0xlbmd0aCwgZGF0YSwgaWQzaGVhZGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07IC8vIElEM3YyIHRhYmxlIG9mIGNvbnRlbnRzIGFjY29yZGluZyB0byBodHRwOi8vaWQzLm9yZy9pZDN2Mi1jaGFwdGVycy0xLjBcblxuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ1RPQyddID0gZnVuY3Rpb24gcmVhZFRhYmxlT2ZDb250ZW50c0ZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IG9mZnNldDtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBjaGlsZEVsZW1lbnRJZHM6IFtdLFxuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgdG9wTGV2ZWw6IHVuZGVmaW5lZCxcbiAgICBvcmRlcmVkOiB1bmRlZmluZWQsXG4gICAgZW50cnlDb3VudDogdW5kZWZpbmVkLFxuICAgIHN1YkZyYW1lczogdW5kZWZpbmVkXG4gIH07XG4gIHZhciBpZCA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpKTtcbiAgcmVzdWx0LmlkID0gaWQudG9TdHJpbmcoKTtcbiAgb2Zmc2V0ICs9IGlkLmJ5dGVzUmVhZENvdW50O1xuICByZXN1bHQudG9wTGV2ZWwgPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCAxKTtcbiAgcmVzdWx0Lm9yZGVyZWQgPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0LCAwKTtcbiAgb2Zmc2V0Kys7XG4gIHJlc3VsdC5lbnRyeUNvdW50ID0gZGF0YS5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgb2Zmc2V0Kys7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQuZW50cnlDb3VudDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkSWQgPSBTdHJpbmdVdGlscy5yZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmcoZGF0YS5nZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoIC0gKG9mZnNldCAtIG9yaWdpbmFsT2Zmc2V0KSkpO1xuICAgIHJlc3VsdC5jaGlsZEVsZW1lbnRJZHMucHVzaChjaGlsZElkLnRvU3RyaW5nKCkpO1xuICAgIG9mZnNldCArPSBjaGlsZElkLmJ5dGVzUmVhZENvdW50O1xuICB9XG5cbiAgdmFyIHJlbWFpbmluZ0xlbmd0aCA9IGxlbmd0aCAtIChvZmZzZXQgLSBvcmlnaW5hbE9mZnNldCk7XG4gIHJlc3VsdC5zdWJGcmFtZXMgPSB0aGlzLnJlYWRGcmFtZXMob2Zmc2V0LCBvZmZzZXQgKyByZW1haW5pbmdMZW5ndGgsIGRhdGEsIGlkM2hlYWRlcik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ09NTSddID0gZnVuY3Rpb24gcmVhZENvbW1lbnRzRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIHN0YXJ0ID0gb2Zmc2V0O1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgdmFyIGxhbmd1YWdlID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyAxLCAzKTtcbiAgdmFyIHNob3J0ZGVzYyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQgKyA0LCBsZW5ndGggLSA0LCBjaGFyc2V0KTtcbiAgb2Zmc2V0ICs9IDQgKyBzaG9ydGRlc2MuYnl0ZXNSZWFkQ291bnQ7XG4gIHZhciB0ZXh0ID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgc3RhcnQgKyBsZW5ndGggLSBvZmZzZXQsIGNoYXJzZXQpO1xuICByZXR1cm4ge1xuICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICBzaG9ydF9kZXNjcmlwdGlvbjogc2hvcnRkZXNjLnRvU3RyaW5nKCksXG4gICAgdGV4dDogdGV4dC50b1N0cmluZygpXG4gIH07XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ09NJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snQ09NTSddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snUElDJ10gPSBmdW5jdGlvbiAob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgcmV0dXJuIGZyYW1lUmVhZGVyRnVuY3Rpb25zWydBUElDJ10ob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1BDTlQnXSA9IGZ1bmN0aW9uIHJlYWRDb3VudGVyRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgLy8gRklYTUU6IGltcGxlbWVudCB0aGUgcmVzdCBvZiB0aGUgc3BlY1xuICByZXR1cm4gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCBmYWxzZSk7XG59O1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snQ05UJ10gPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snUENOVCddO1xuXG5mcmFtZVJlYWRlckZ1bmN0aW9uc1snVConXSA9IGZ1bmN0aW9uIHJlYWRUZXh0RnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIGNoYXJzZXQgPSBnZXRUZXh0RW5jb2RpbmcoZGF0YS5nZXRCeXRlQXQob2Zmc2V0KSk7XG4gIHJldHVybiBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSwgbGVuZ3RoIC0gMSwgY2hhcnNldCkudG9TdHJpbmcoKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydUWFhYJ10gPSBmdW5jdGlvbiByZWFkVGV4dEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIHZhciBjaGFyc2V0ID0gZ2V0VGV4dEVuY29kaW5nKGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICByZXR1cm4gZ2V0VXNlckRlZmluZWRGaWVsZHMob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGNoYXJzZXQpO1xufTtcblxuZnJhbWVSZWFkZXJGdW5jdGlvbnNbJ1dYWFgnXSA9IGZ1bmN0aW9uIHJlYWRVcmxGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MsIGlkM2hlYWRlcikge1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgcmV0dXJuIGdldFVzZXJEZWZpbmVkRmllbGRzKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBjaGFyc2V0KTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydXKiddID0gZnVuY3Rpb24gcmVhZFVybEZyYW1lKG9mZnNldCwgbGVuZ3RoLCBkYXRhLCBmbGFncywgaWQzaGVhZGVyKSB7XG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0LCBsZW5ndGgsICdpc28tODg1OS0xJykudG9TdHJpbmcoKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydUQ09OJ10gPSBmdW5jdGlvbiByZWFkR2VucmVGcmFtZShvZmZzZXQsIGxlbmd0aCwgZGF0YSwgZmxhZ3MpIHtcbiAgdmFyIHRleHQgPSBmcmFtZVJlYWRlckZ1bmN0aW9uc1snVConXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9eXFwoXFxkK1xcKS8sICcnKTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydUQ08nXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydUQ09OJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydVU0xUJ10gPSBmdW5jdGlvbiByZWFkTHlyaWNzRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIHN0YXJ0ID0gb2Zmc2V0O1xuICB2YXIgY2hhcnNldCA9IGdldFRleHRFbmNvZGluZyhkYXRhLmdldEJ5dGVBdChvZmZzZXQpKTtcbiAgdmFyIGxhbmd1YWdlID0gZGF0YS5nZXRTdHJpbmdBdChvZmZzZXQgKyAxLCAzKTtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgNCwgbGVuZ3RoIC0gNCwgY2hhcnNldCk7XG4gIG9mZnNldCArPSA0ICsgZGVzY3JpcHRvci5ieXRlc1JlYWRDb3VudDtcbiAgdmFyIGx5cmljcyA9IGRhdGEuZ2V0U3RyaW5nV2l0aENoYXJzZXRBdChvZmZzZXQsIHN0YXJ0ICsgbGVuZ3RoIC0gb2Zmc2V0LCBjaGFyc2V0KTtcbiAgcmV0dXJuIHtcbiAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvci50b1N0cmluZygpLFxuICAgIGx5cmljczogbHlyaWNzLnRvU3RyaW5nKClcbiAgfTtcbn07XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydVTFQnXSA9IGZyYW1lUmVhZGVyRnVuY3Rpb25zWydVU0xUJ107XG5cbmZyYW1lUmVhZGVyRnVuY3Rpb25zWydVRklEJ10gPSBmdW5jdGlvbiByZWFkTHlyaWNzRnJhbWUob2Zmc2V0LCBsZW5ndGgsIGRhdGEsIGZsYWdzLCBpZDNoZWFkZXIpIHtcbiAgdmFyIG93bmVySWRlbnRpZmllciA9IFN0cmluZ1V0aWxzLnJlYWROdWxsVGVybWluYXRlZFN0cmluZyhkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpKTtcbiAgb2Zmc2V0ICs9IG93bmVySWRlbnRpZmllci5ieXRlc1JlYWRDb3VudDtcbiAgdmFyIGlkZW50aWZpZXIgPSBkYXRhLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGggLSBvd25lcklkZW50aWZpZXIuYnl0ZXNSZWFkQ291bnQpO1xuICByZXR1cm4ge1xuICAgIG93bmVySWRlbnRpZmllcjogb3duZXJJZGVudGlmaWVyLnRvU3RyaW5nKCksXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllclxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0VGV4dEVuY29kaW5nKGJpdGUpIHtcbiAgdmFyIGNoYXJzZXQ7XG5cbiAgc3dpdGNoIChiaXRlKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAweDAxOlxuICAgICAgY2hhcnNldCA9ICd1dGYtMTYnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDB4MDI6XG4gICAgICBjaGFyc2V0ID0gJ3V0Zi0xNmJlJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAweDAzOlxuICAgICAgY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICB9XG5cbiAgcmV0dXJuIGNoYXJzZXQ7XG59IC8vIEhhbmRsZXMgcmVhZGluZyBkZXNjcmlwdGlvbi9kYXRhIGZyb20gZWl0aGVyIGh0dHA6Ly9pZDMub3JnL2lkM3YyLjMuMCNVc2VyX2RlZmluZWRfdGV4dF9pbmZvcm1hdGlvbl9mcmFtZVxuLy8gYW5kIGh0dHA6Ly9pZDMub3JnL2lkM3YyLjMuMCNVc2VyX2RlZmluZWRfVVJMX2xpbmtfZnJhbWVcblxuXG5mdW5jdGlvbiBnZXRVc2VyRGVmaW5lZEZpZWxkcyhvZmZzZXQsIGxlbmd0aCwgZGF0YSwgY2hhcnNldCkge1xuICB2YXIgdXNlckRlc2MgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSwgbGVuZ3RoIC0gMSwgY2hhcnNldCk7XG4gIHZhciB1c2VyRGVmaW5lZERhdGEgPSBkYXRhLmdldFN0cmluZ1dpdGhDaGFyc2V0QXQob2Zmc2V0ICsgMSArIHVzZXJEZXNjLmJ5dGVzUmVhZENvdW50LCBsZW5ndGggLSAxIC0gdXNlckRlc2MuYnl0ZXNSZWFkQ291bnQsIGNoYXJzZXQpO1xuICByZXR1cm4ge1xuICAgIHVzZXJfZGVzY3JpcHRpb246IHVzZXJEZXNjLnRvU3RyaW5nKCksXG4gICAgZGF0YTogdXNlckRlZmluZWREYXRhLnRvU3RyaW5nKClcbiAgfTtcbn1cblxudmFyIFBJQ1RVUkVfVFlQRSA9IFtcIk90aGVyXCIsIFwiMzJ4MzIgcGl4ZWxzICdmaWxlIGljb24nIChQTkcgb25seSlcIiwgXCJPdGhlciBmaWxlIGljb25cIiwgXCJDb3ZlciAoZnJvbnQpXCIsIFwiQ292ZXIgKGJhY2spXCIsIFwiTGVhZmxldCBwYWdlXCIsIFwiTWVkaWEgKGUuZy4gbGFiZWwgc2lkZSBvZiBDRClcIiwgXCJMZWFkIGFydGlzdC9sZWFkIHBlcmZvcm1lci9zb2xvaXN0XCIsIFwiQXJ0aXN0L3BlcmZvcm1lclwiLCBcIkNvbmR1Y3RvclwiLCBcIkJhbmQvT3JjaGVzdHJhXCIsIFwiQ29tcG9zZXJcIiwgXCJMeXJpY2lzdC90ZXh0IHdyaXRlclwiLCBcIlJlY29yZGluZyBMb2NhdGlvblwiLCBcIkR1cmluZyByZWNvcmRpbmdcIiwgXCJEdXJpbmcgcGVyZm9ybWFuY2VcIiwgXCJNb3ZpZS92aWRlbyBzY3JlZW4gY2FwdHVyZVwiLCBcIkEgYnJpZ2h0IGNvbG91cmVkIGZpc2hcIiwgXCJJbGx1c3RyYXRpb25cIiwgXCJCYW5kL2FydGlzdCBsb2dvdHlwZVwiLCBcIlB1Ymxpc2hlci9TdHVkaW8gbG9nb3R5cGVcIl07XG5tb2R1bGUuZXhwb3J0cyA9IElEM3YyRnJhbWVSZWFkZXI7XG5cbn0se1wiLi9BcnJheUZpbGVSZWFkZXJcIjozLFwiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMSxcIi4vU3RyaW5nVXRpbHNcIjoxM31dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYVRhZ1JlYWRlcicpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIElEM3YyRnJhbWVSZWFkZXIgPSByZXF1aXJlKCcuL0lEM3YyRnJhbWVSZWFkZXInKTtcblxudmFyIElEM19IRUFERVJfU0laRSA9IDEwO1xuXG52YXIgSUQzdjJUYWdSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYVRhZ1JlYWRlcikge1xuICBfaW5oZXJpdHMoSUQzdjJUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gSUQzdjJUYWdSZWFkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElEM3YyVGFnUmVhZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSUQzdjJUYWdSZWFkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElEM3YyVGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJfbG9hZERhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWREYXRhKG1lZGlhRmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKFs2LCA5XSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgICAgICBtZWRpYUZpbGVSZWFkZXIubG9hZFJhbmdlKCAvLyBUaGUgdGFnIHNpemUgZG9lcyBub3QgaW5jbHVkZSB0aGUgaGVhZGVyIHNpemUuXG4gICAgICAgICAgWzAsIElEM19IRUFERVJfU0laRSArIG1lZGlhRmlsZVJlYWRlci5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdCg2KSAtIDFdLCBjYWxsYmFja3MpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlRGF0YShkYXRhLCB0YWdzKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgIHZhciBtYWpvciA9IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIDMpO1xuXG4gICAgICBpZiAobWFqb3IgPiA0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiSUQzXCIsXG4gICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiPjIuNFwiLFxuICAgICAgICAgIFwidGFnc1wiOiB7fVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgcmV2aXNpb24gPSBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyA0KTtcbiAgICAgIHZhciB1bnN5bmNoID0gZGF0YS5pc0JpdFNldEF0KG9mZnNldCArIDUsIDcpO1xuICAgICAgdmFyIHhoZWFkZXIgPSBkYXRhLmlzQml0U2V0QXQob2Zmc2V0ICsgNSwgNik7XG4gICAgICB2YXIgeGluZGljYXRvciA9IGRhdGEuaXNCaXRTZXRBdChvZmZzZXQgKyA1LCA1KTtcbiAgICAgIHZhciBzaXplID0gZGF0YS5nZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChvZmZzZXQgKyA2KTtcbiAgICAgIG9mZnNldCArPSAxMDtcblxuICAgICAgaWYgKHhoZWFkZXIpIHtcbiAgICAgICAgLy8gV2Ugc2tpcCB0aGUgZXh0ZW5kZWQgaGVhZGVyIGFuZCBkb24ndCBvZmZlciBzdXBwb3J0IGZvciBpdCByaWdodCBub3cuXG4gICAgICAgIGlmIChtYWpvciA9PT0gNCkge1xuICAgICAgICAgIHZhciB4aGVhZGVyc2l6ZSA9IGRhdGEuZ2V0U3luY2hzYWZlSW50ZWdlcjMyQXQob2Zmc2V0KTtcbiAgICAgICAgICBvZmZzZXQgKz0geGhlYWRlcnNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHhoZWFkZXJzaXplID0gZGF0YS5nZXRMb25nQXQob2Zmc2V0LCB0cnVlKTsgLy8gVGhlICdFeHRlbmRlZCBoZWFkZXIgc2l6ZScsIGN1cnJlbnRseSA2IG9yIDEwIGJ5dGVzLCBleGNsdWRlcyBpdHNlbGYuXG5cbiAgICAgICAgICBvZmZzZXQgKz0geGhlYWRlcnNpemUgKyA0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpZDMgPSB7XG4gICAgICAgIFwidHlwZVwiOiBcIklEM1wiLFxuICAgICAgICBcInZlcnNpb25cIjogJzIuJyArIG1ham9yICsgJy4nICsgcmV2aXNpb24sXG4gICAgICAgIFwibWFqb3JcIjogbWFqb3IsXG4gICAgICAgIFwicmV2aXNpb25cIjogcmV2aXNpb24sXG4gICAgICAgIFwiZmxhZ3NcIjoge1xuICAgICAgICAgIFwidW5zeW5jaHJvbmlzYXRpb25cIjogdW5zeW5jaCxcbiAgICAgICAgICBcImV4dGVuZGVkX2hlYWRlclwiOiB4aGVhZGVyLFxuICAgICAgICAgIFwiZXhwZXJpbWVudGFsX2luZGljYXRvclwiOiB4aW5kaWNhdG9yLFxuICAgICAgICAgIC8vIFRPRE86IGZvb3Rlcl9wcmVzZW50XG4gICAgICAgICAgXCJmb290ZXJfcHJlc2VudFwiOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcInNpemVcIjogc2l6ZSxcbiAgICAgICAgXCJ0YWdzXCI6IHt9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGFncykge1xuICAgICAgICB2YXIgZXhwYW5kZWRUYWdzID0gdGhpcy5fZXhwYW5kU2hvcnRjdXRUYWdzKHRhZ3MpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0RW5kID0gc2l6ZSArIDEwXG4gICAgICAvKmhlYWRlciBzaXplKi9cbiAgICAgIDsgLy8gV2hlbiB0aGlzIGZsYWcgaXMgc2V0IHRoZSBlbnRpcmUgdGFnIG5lZWRzIHRvIGJlIHVuLXVuc3luY2hyb25pc2VkXG4gICAgICAvLyBiZWZvcmUgcGFyc2luZyBlYWNoIGluZGl2aWR1YWwgZnJhbWUuIEluZGl2aWR1YWwgZnJhbWUgc2l6ZXMgbWlnaHQgbm90XG4gICAgICAvLyB0YWtlIHVuc3luY2hyb25pc2F0aW9uIGludG8gY29uc2lkZXJhdGlvbiB3aGVuIGl0J3Mgc2V0IG9uIHRoZSB0YWdcbiAgICAgIC8vIGhlYWRlci5cblxuICAgICAgaWYgKGlkMy5mbGFncy51bnN5bmNocm9uaXNhdGlvbikge1xuICAgICAgICBkYXRhID0gSUQzdjJGcmFtZVJlYWRlci5nZXRVbnN5bmNGaWxlUmVhZGVyKGRhdGEsIG9mZnNldCwgc2l6ZSk7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIG9mZnNldEVuZCA9IGRhdGEuZ2V0U2l6ZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZnJhbWVzID0gSUQzdjJGcmFtZVJlYWRlci5yZWFkRnJhbWVzKG9mZnNldCwgb2Zmc2V0RW5kLCBkYXRhLCBpZDMsIGV4cGFuZGVkVGFncyk7IC8vIGNyZWF0ZSBzaG9ydGN1dHMgZm9yIG1vc3QgY29tbW9uIGRhdGEuXG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gU0hPUlRDVVRTKSB7XG4gICAgICAgIGlmIChTSE9SVENVVFMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICB2YXIgZnJhbWVEYXRhID0gdGhpcy5fZ2V0RnJhbWVEYXRhKGZyYW1lcywgU0hPUlRDVVRTW25hbWVdKTtcblxuICAgICAgICAgIGlmIChmcmFtZURhdGEpIHtcbiAgICAgICAgICAgIGlkMy50YWdzW25hbWVdID0gZnJhbWVEYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBmcmFtZSBpbiBmcmFtZXMpIHtcbiAgICAgICAgaWYgKGZyYW1lcy5oYXNPd25Qcm9wZXJ0eShmcmFtZSkpIHtcbiAgICAgICAgICBpZDMudGFnc1tmcmFtZV0gPSBmcmFtZXNbZnJhbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpZDM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGcmFtZURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEZyYW1lRGF0YShmcmFtZXMsIGlkcykge1xuICAgICAgdmFyIGZyYW1lO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWQ7IGlkID0gaWRzW2ldOyBpKyspIHtcbiAgICAgICAgaWYgKGlkIGluIGZyYW1lcykge1xuICAgICAgICAgIGlmIChmcmFtZXNbaWRdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVzW2lkXVswXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZXNbaWRdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmcmFtZS5kYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNob3J0Y3V0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydGN1dHMoKSB7XG4gICAgICByZXR1cm4gU0hPUlRDVVRTO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpIHtcbiAgICAgIC8vIElEMyBoZWFkZXJcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGVuZ3RoOiBJRDNfSEVBREVSX1NJWkVcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB2YXIgaWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgdGFnSWRlbnRpZmllci5zbGljZSgwLCAzKSk7XG4gICAgICByZXR1cm4gaWQgPT09ICdJRDMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJRDN2MlRhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuXG52YXIgU0hPUlRDVVRTID0ge1xuICBcInRpdGxlXCI6IFtcIlRJVDJcIiwgXCJUVDJcIl0sXG4gIFwiYXJ0aXN0XCI6IFtcIlRQRTFcIiwgXCJUUDFcIl0sXG4gIFwiYWxidW1cIjogW1wiVEFMQlwiLCBcIlRBTFwiXSxcbiAgXCJ5ZWFyXCI6IFtcIlRZRVJcIiwgXCJUWUVcIl0sXG4gIFwiY29tbWVudFwiOiBbXCJDT01NXCIsIFwiQ09NXCJdLFxuICBcInRyYWNrXCI6IFtcIlRSQ0tcIiwgXCJUUktcIl0sXG4gIFwiZ2VucmVcIjogW1wiVENPTlwiLCBcIlRDT1wiXSxcbiAgXCJwaWN0dXJlXCI6IFtcIkFQSUNcIiwgXCJQSUNcIl0sXG4gIFwibHlyaWNzXCI6IFtcIlVTTFRcIiwgXCJVTFRcIl1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IElEM3YyVGFnUmVhZGVyO1xuXG59LHtcIi4vSUQzdjJGcmFtZVJlYWRlclwiOjgsXCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9NZWRpYVRhZ1JlYWRlclwiOjEyfV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4gKiBTdXBwb3J0IGZvciBpVHVuZXMtc3R5bGUgbTRhIHRhZ3NcbiAqIFNlZTpcbiAqICAgaHR0cDovL2F0b21pY3BhcnNsZXkuc291cmNlZm9yZ2UubmV0L21wZWctNGZpbGVzLmh0bWxcbiAqICAgaHR0cDovL2RldmVsb3Blci5hcHBsZS5jb20vbWFjL2xpYnJhcnkvZG9jdW1lbnRhdGlvbi9RdWlja1RpbWUvUVRGRi9NZXRhZGF0YS9NZXRhZGF0YS5odG1sXG4gKiBBdXRob3JlZCBieSBKb3NodWEgS2lmZXIgPGpvc2h1YS5raWZlciBnbWFpbC5jb20+XG4gKiBcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIE1lZGlhVGFnUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYVRhZ1JlYWRlcicpO1xuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZSgnLi9NZWRpYUZpbGVSZWFkZXInKTtcblxudmFyIE1QNFRhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01lZGlhVGFnUmVhZGVyKSB7XG4gIF9pbmhlcml0cyhNUDRUYWdSZWFkZXIsIF9NZWRpYVRhZ1JlYWRlcik7XG5cbiAgZnVuY3Rpb24gTVA0VGFnUmVhZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNUDRUYWdSZWFkZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNUDRUYWdSZWFkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1QNFRhZ1JlYWRlciwgW3tcbiAgICBrZXk6IFwiX2xvYWREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkRGF0YShtZWRpYUZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgLy8gTVA0IG1ldGFkYXRhIGlzbid0IGxvY2F0ZWQgaW4gYSBzcGVjaWZpYyBsb2NhdGlvbiBvZiB0aGUgZmlsZS4gUm91Z2hseVxuICAgICAgLy8gc3BlYWtpbmcsIGl0J3MgY29tcG9zZWQgb2YgYmxvY2tzIGNoYWluZWQgdG9nZXRoZXIgbGlrZSBhIGxpbmtlZCBsaXN0LlxuICAgICAgLy8gVGhlc2UgYmxvY2tzIGFyZSBjYWxsZWQgYXRvbXMgKG9yIGJveGVzKS5cbiAgICAgIC8vIEVhY2ggYXRvbSBvZiB0aGUgbGlzdCBjYW4gaGF2ZSBpdHMgb3duIGNoaWxkIGxpbmtlZCBsaXN0LiBBdG9tcyBpbiB0aGlzXG4gICAgICAvLyBzaXR1YXRpb24gZG8gbm90IHBvc3Nlc3MgYW55IGRhdGEgYW5kIGFyZSBjYWxsZWQgXCJjb250YWluZXJcIiBhcyB0aGV5IG9ubHlcbiAgICAgIC8vIGNvbnRhaW4gb3RoZXIgYXRvbXMuXG4gICAgICAvLyBPdGhlciBhdG9tcyByZXByZXNlbnQgYSBwYXJ0aWN1bGFyIHNldCBvZiBkYXRhLCBsaWtlIGF1ZGlvLCB2aWRlbyBvclxuICAgICAgLy8gbWV0YWRhdGEuIEluIG9yZGVyIHRvIGZpbmQgYW5kIGxvYWQgYWxsIHRoZSBpbnRlcmVzdGluZyBhdG9tcyB3ZSBuZWVkXG4gICAgICAvLyB0byB0cmF2ZXJzZSB0aGUgZW50aXJlIGxpbmtlZCBsaXN0IG9mIGF0b21zIGFuZCBvbmx5IGxvYWQgdGhlIG9uZXNcbiAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCBtZXRhZGF0YS5cbiAgICAgIC8vIFRoZSBtZXRhZGF0YSBhdG9tcyBjYW4gYmUgZmluZCB1bmRlciB0aGUgXCJtb292LnVkdGEubWV0YS5pbHN0XCIgaGllcmFyY2h5LlxuICAgICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBMb2FkIHRoZSBoZWFkZXIgb2YgdGhlIGZpcnN0IGF0b21cblxuICAgICAgbWVkaWFGaWxlUmVhZGVyLmxvYWRSYW5nZShbMCwgMTZdLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIHNlbGYuX2xvYWRBdG9tKG1lZGlhRmlsZVJlYWRlciwgMCwgXCJcIiwgY2FsbGJhY2tzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbG9hZEF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRBdG9tKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0LCBwYXJlbnRBdG9tRnVsbE5hbWUsIGNhbGxiYWNrcykge1xuICAgICAgaWYgKG9mZnNldCA+PSBtZWRpYUZpbGVSZWFkZXIuZ2V0U2l6ZSgpKSB7XG4gICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIDggaXMgdGhlIHNpemUgb2YgdGhlIGF0b21TaXplIGFuZCBhdG9tTmFtZSBmaWVsZHMuXG4gICAgICAvLyBXaGVuIHJlYWRpbmcgdGhlIGN1cnJlbnQgYmxvY2sgd2UgYWx3YXlzIHJlYWQgOCBtb3JlIGJ5dGVzIGluIG9yZGVyXG4gICAgICAvLyB0byBhbHNvIHJlYWQgdGhlIGhlYWRlciBvZiB0aGUgbmV4dCBibG9jay5cblxuICAgICAgdmFyIGF0b21TaXplID0gbWVkaWFGaWxlUmVhZGVyLmdldExvbmdBdChvZmZzZXQsIHRydWUpO1xuXG4gICAgICBpZiAoYXRvbVNpemUgPT0gMCB8fCBpc05hTihhdG9tU2l6ZSkpIHtcbiAgICAgICAgY2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhdG9tTmFtZSA9IG1lZGlhRmlsZVJlYWRlci5nZXRTdHJpbmdBdChvZmZzZXQgKyA0LCA0KTsgLy8gY29uc29sZS5sb2cocGFyZW50QXRvbUZ1bGxOYW1lLCBhdG9tTmFtZSwgYXRvbVNpemUpO1xuICAgICAgLy8gQ29udGFpbmVyIGF0b21zIChubyBhY3R1YWwgZGF0YSlcblxuICAgICAgaWYgKHRoaXMuX2lzQ29udGFpbmVyQXRvbShhdG9tTmFtZSkpIHtcbiAgICAgICAgaWYgKGF0b21OYW1lID09IFwibWV0YVwiKSB7XG4gICAgICAgICAgLy8gVGhlIFwibWV0YVwiIGF0b20gYnJlYWtzIGNvbnZlbnRpb24gYW5kIGlzIGEgY29udGFpbmVyIHdpdGggZGF0YS5cbiAgICAgICAgICBvZmZzZXQgKz0gNDsgLy8gbmV4dF9pdGVtX2lkICh1aW50MzIpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXRvbUZ1bGxOYW1lID0gKHBhcmVudEF0b21GdWxsTmFtZSA/IHBhcmVudEF0b21GdWxsTmFtZSArIFwiLlwiIDogXCJcIikgKyBhdG9tTmFtZTtcblxuICAgICAgICBpZiAoYXRvbUZ1bGxOYW1lID09PSBcIm1vb3YudWR0YS5tZXRhLmlsc3RcIikge1xuICAgICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldCwgb2Zmc2V0ICsgYXRvbVNpemVdLCBjYWxsYmFja3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldCArIDgsIG9mZnNldCArIDggKyA4XSwge1xuICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2xvYWRBdG9tKG1lZGlhRmlsZVJlYWRlciwgb2Zmc2V0ICsgOCwgYXRvbUZ1bGxOYW1lLCBjYWxsYmFja3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lZGlhRmlsZVJlYWRlci5sb2FkUmFuZ2UoW29mZnNldCArIGF0b21TaXplLCBvZmZzZXQgKyBhdG9tU2l6ZSArIDhdLCB7XG4gICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2FkQXRvbShtZWRpYUZpbGVSZWFkZXIsIG9mZnNldCArIGF0b21TaXplLCBwYXJlbnRBdG9tRnVsbE5hbWUsIGNhbGxiYWNrcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2lzQ29udGFpbmVyQXRvbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDb250YWluZXJBdG9tKGF0b21OYW1lKSB7XG4gICAgICByZXR1cm4gW1wibW9vdlwiLCBcInVkdGFcIiwgXCJtZXRhXCIsIFwiaWxzdFwiXS5pbmRleE9mKGF0b21OYW1lKSA+PSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfY2FuUmVhZEF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2NhblJlYWRBdG9tKGF0b21OYW1lKSB7XG4gICAgICByZXR1cm4gYXRvbU5hbWUgIT09IFwiLS0tLVwiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEoZGF0YSwgdGFnc1RvUmVhZCkge1xuICAgICAgdmFyIHRhZ3MgPSB7fTtcbiAgICAgIHRhZ3NUb1JlYWQgPSB0aGlzLl9leHBhbmRTaG9ydGN1dFRhZ3ModGFnc1RvUmVhZCk7XG5cbiAgICAgIHRoaXMuX3JlYWRBdG9tKHRhZ3MsIGRhdGEsIDAsIGRhdGEuZ2V0U2l6ZSgpLCB0YWdzVG9SZWFkKTsgLy8gY3JlYXRlIHNob3J0Y3V0cyBmb3IgbW9zdCBjb21tb24gZGF0YS5cblxuXG4gICAgICBmb3IgKHZhciBuYW1lIGluIFNIT1JUQ1VUUykge1xuICAgICAgICBpZiAoU0hPUlRDVVRTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgdmFyIHRhZyA9IHRhZ3NbU0hPUlRDVVRTW25hbWVdXTtcblxuICAgICAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcInRyYWNrXCIpIHtcbiAgICAgICAgICAgICAgdGFnc1tuYW1lXSA9IHRhZy5kYXRhLnRyYWNrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFnc1tuYW1lXSA9IHRhZy5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBcInR5cGVcIjogXCJNUDRcIixcbiAgICAgICAgXCJmdHlwXCI6IGRhdGEuZ2V0U3RyaW5nQXQoOCwgNCksXG4gICAgICAgIFwidmVyc2lvblwiOiBkYXRhLmdldExvbmdBdCgxMiwgdHJ1ZSksXG4gICAgICAgIFwidGFnc1wiOiB0YWdzXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcmVhZEF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYWRBdG9tKHRhZ3MsIGRhdGEsIG9mZnNldCwgbGVuZ3RoLCB0YWdzVG9SZWFkLCBwYXJlbnRBdG9tRnVsbE5hbWUsIGluZGVudCkge1xuICAgICAgaW5kZW50ID0gaW5kZW50ID09PSB1bmRlZmluZWQgPyBcIlwiIDogaW5kZW50ICsgXCIgIFwiO1xuICAgICAgdmFyIHNlZWsgPSBvZmZzZXQ7XG5cbiAgICAgIHdoaWxlIChzZWVrIDwgb2Zmc2V0ICsgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBhdG9tU2l6ZSA9IGRhdGEuZ2V0TG9uZ0F0KHNlZWssIHRydWUpO1xuXG4gICAgICAgIGlmIChhdG9tU2l6ZSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0b21OYW1lID0gZGF0YS5nZXRTdHJpbmdBdChzZWVrICsgNCwgNCk7IC8vIGNvbnNvbGUubG9nKHNlZWssIHBhcmVudEF0b21GdWxsTmFtZSwgYXRvbU5hbWUsIGF0b21TaXplKTtcblxuICAgICAgICBpZiAodGhpcy5faXNDb250YWluZXJBdG9tKGF0b21OYW1lKSkge1xuICAgICAgICAgIGlmIChhdG9tTmFtZSA9PSBcIm1ldGFcIikge1xuICAgICAgICAgICAgc2VlayArPSA0OyAvLyBuZXh0X2l0ZW1faWQgKHVpbnQzMilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYXRvbUZ1bGxOYW1lID0gKHBhcmVudEF0b21GdWxsTmFtZSA/IHBhcmVudEF0b21GdWxsTmFtZSArIFwiLlwiIDogXCJcIikgKyBhdG9tTmFtZTtcblxuICAgICAgICAgIHRoaXMuX3JlYWRBdG9tKHRhZ3MsIGRhdGEsIHNlZWsgKyA4LCBhdG9tU2l6ZSAtIDgsIHRhZ3NUb1JlYWQsIGF0b21GdWxsTmFtZSwgaW5kZW50KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBWYWx1ZSBhdG9tc1xuXG5cbiAgICAgICAgaWYgKCghdGFnc1RvUmVhZCB8fCB0YWdzVG9SZWFkLmluZGV4T2YoYXRvbU5hbWUpID49IDApICYmIHBhcmVudEF0b21GdWxsTmFtZSA9PT0gXCJtb292LnVkdGEubWV0YS5pbHN0XCIgJiYgdGhpcy5fY2FuUmVhZEF0b20oYXRvbU5hbWUpKSB7XG4gICAgICAgICAgdGFnc1thdG9tTmFtZV0gPSB0aGlzLl9yZWFkTWV0YWRhdGFBdG9tKGRhdGEsIHNlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VlayArPSBhdG9tU2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYWRNZXRhZGF0YUF0b21cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYWRNZXRhZGF0YUF0b20oZGF0YSwgb2Zmc2V0KSB7XG4gICAgICAvLyAxNjogbmFtZSArIHNpemUgKyBcImRhdGFcIiArIHNpemUgKDQgYnl0ZXMgZWFjaClcbiAgICAgIHZhciBNRVRBREFUQV9IRUFERVIgPSAxNjtcbiAgICAgIHZhciBhdG9tU2l6ZSA9IGRhdGEuZ2V0TG9uZ0F0KG9mZnNldCwgdHJ1ZSk7XG4gICAgICB2YXIgYXRvbU5hbWUgPSBkYXRhLmdldFN0cmluZ0F0KG9mZnNldCArIDQsIDQpO1xuICAgICAgdmFyIGtsYXNzID0gZGF0YS5nZXRJbnRlZ2VyMjRBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxLCB0cnVlKTtcbiAgICAgIHZhciB0eXBlID0gVFlQRVNba2xhc3NdO1xuICAgICAgdmFyIGF0b21EYXRhO1xuXG4gICAgICBpZiAoYXRvbU5hbWUgPT0gXCJ0cmtuXCIpIHtcbiAgICAgICAgYXRvbURhdGEgPSB7XG4gICAgICAgICAgXCJ0cmFja1wiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMSksXG4gICAgICAgICAgXCJ0b3RhbFwiOiBkYXRhLmdldEJ5dGVBdChvZmZzZXQgKyBNRVRBREFUQV9IRUFERVIgKyAxMylcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoYXRvbU5hbWUgPT0gXCJkaXNrXCIpIHtcbiAgICAgICAgYXRvbURhdGEgPSB7XG4gICAgICAgICAgXCJkaXNrXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDExKSxcbiAgICAgICAgICBcInRvdGFsXCI6IGRhdGEuZ2V0Qnl0ZUF0KG9mZnNldCArIE1FVEFEQVRBX0hFQURFUiArIDEzKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gNDogYXRvbSB2ZXJzaW9uICgxIGJ5dGUpICsgYXRvbSBmbGFncyAoMyBieXRlcylcbiAgICAgICAgLy8gNDogTlVMTCAodXN1YWxseSBsb2NhbGUgaW5kaWNhdG9yKVxuICAgICAgICB2YXIgYXRvbUhlYWRlciA9IE1FVEFEQVRBX0hFQURFUiArIDQgKyA0O1xuICAgICAgICB2YXIgZGF0YVN0YXJ0ID0gb2Zmc2V0ICsgYXRvbUhlYWRlcjtcbiAgICAgICAgdmFyIGRhdGFMZW5ndGggPSBhdG9tU2l6ZSAtIGF0b21IZWFkZXI7XG4gICAgICAgIHZhciBhdG9tRGF0YTsgLy8gV29ya2Fyb3VuZCBmb3IgY292ZXJzIGJlaW5nIHBhcnNlZCBhcyAndWludDgnIHR5cGUgZGVzcGl0ZSBiZWluZyBhbiAnY292cicgYXRvbVxuXG4gICAgICAgIGlmIChhdG9tTmFtZSA9PT0gJ2NvdnInICYmIHR5cGUgPT09ICd1aW50OCcpIHtcbiAgICAgICAgICB0eXBlID0gJ2pwZWcnO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIGF0b21EYXRhID0gZGF0YS5nZXRTdHJpbmdXaXRoQ2hhcnNldEF0KGRhdGFTdGFydCwgZGF0YUxlbmd0aCwgXCJ1dGYtOFwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwidWludDhcIjpcbiAgICAgICAgICAgIGF0b21EYXRhID0gZGF0YS5nZXRTaG9ydEF0KGRhdGFTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiaW50XCI6XG4gICAgICAgICAgY2FzZSBcInVpbnRcIjpcbiAgICAgICAgICAgIC8vIFRob3VnaCB0aGUgUXVpY2tUaW1lIHNwZWMgZG9lc24ndCBzdGF0ZSBpdCwgdGhlcmUgYXJlIDY0LWJpdCB2YWx1ZXNcbiAgICAgICAgICAgIC8vIHN1Y2ggYXMgcGxJRCAoUGxheWxpc3QvQ29sbGVjdGlvbiBJRCkuIFdpdGggaXRzIHNpbmdsZSA2NC1iaXQgZmxvYXRpbmdcbiAgICAgICAgICAgIC8vIHBvaW50IG51bWJlciB0eXBlLCB0aGVzZSBhcmUgaGFyZCB0byBwYXJzZSBhbmQgcGFzcyBpbiBKYXZhU2NyaXB0LlxuICAgICAgICAgICAgLy8gVGhlIGhpZ2ggd29yZCBvZiBwbElEIHNlZW1zIHRvIGFsd2F5cyBiZSB6ZXJvLCBzbywgYXMgdGhpcyBpcyB0aGVcbiAgICAgICAgICAgIC8vIG9ubHkgY3VycmVudCA2NC1iaXQgYXRvbSBoYW5kbGVkLCBpdCBpcyBwYXJzZWQgZnJvbSBpdHMgMzItYml0XG4gICAgICAgICAgICAvLyBsb3cgd29yZCBhcyBhbiB1bnNpZ25lZCBsb25nLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHZhciBpbnRSZWFkZXIgPSB0eXBlID09ICdpbnQnID8gZGF0YUxlbmd0aCA9PSAxID8gZGF0YS5nZXRTQnl0ZUF0IDogZGF0YUxlbmd0aCA9PSAyID8gZGF0YS5nZXRTU2hvcnRBdCA6IGRhdGFMZW5ndGggPT0gNCA/IGRhdGEuZ2V0U0xvbmdBdCA6IGRhdGEuZ2V0TG9uZ0F0IDogZGF0YUxlbmd0aCA9PSAxID8gZGF0YS5nZXRCeXRlQXQgOiBkYXRhTGVuZ3RoID09IDIgPyBkYXRhLmdldFNob3J0QXQgOiBkYXRhLmdldExvbmdBdDsgLy8gJEZsb3dGaXhNZSAtIGdldEJ5dGVBdCBkb2Vzbid0IHJlY2VpdmUgYSBzZWNvbmQgYXJndW1lbnRcblxuICAgICAgICAgICAgYXRvbURhdGEgPSBpbnRSZWFkZXIuY2FsbChkYXRhLCBkYXRhU3RhcnQgKyAoZGF0YUxlbmd0aCA9PSA4ID8gNCA6IDApLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImpwZWdcIjpcbiAgICAgICAgICBjYXNlIFwicG5nXCI6XG4gICAgICAgICAgICBhdG9tRGF0YSA9IHtcbiAgICAgICAgICAgICAgXCJmb3JtYXRcIjogXCJpbWFnZS9cIiArIHR5cGUsXG4gICAgICAgICAgICAgIFwiZGF0YVwiOiBkYXRhLmdldEJ5dGVzQXQoZGF0YVN0YXJ0LCBkYXRhTGVuZ3RoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBhdG9tTmFtZSxcbiAgICAgICAgc2l6ZTogYXRvbVNpemUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBBVE9NX0RFU0NSSVBUSU9OU1thdG9tTmFtZV0gfHwgXCJVbmtub3duXCIsXG4gICAgICAgIGRhdGE6IGF0b21EYXRhXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydGN1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRjdXRzKCkge1xuICAgICAgcmV0dXJuIFNIT1JUQ1VUUztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKSB7XG4gICAgICAvLyBUaGUgdGFnIGlkZW50aWZpZXIgaXMgbG9jYXRlZCBpbiBbNCwgOF0gYnV0IHNpbmNlIHdlJ2xsIG5lZWQgdG8gcmVhZGVyXG4gICAgICAvLyB0aGUgaGVhZGVyIG9mIHRoZSBmaXJzdCBibG9jayBhbnl3YXksIHdlIGxvYWQgaXQgaW5zdGVhZCB0byBhdm9pZFxuICAgICAgLy8gbWFraW5nIHR3byByZXF1ZXN0cy5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGVuZ3RoOiAxNlxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVhZFRhZ0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkVGFnRm9ybWF0KHRhZ0lkZW50aWZpZXIpIHtcbiAgICAgIHZhciBpZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCB0YWdJZGVudGlmaWVyLnNsaWNlKDQsIDgpKTtcbiAgICAgIHJldHVybiBpZCA9PT0gXCJmdHlwXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1QNFRhZ1JlYWRlcjtcbn0oTWVkaWFUYWdSZWFkZXIpO1xuLypcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L2NvbnRlbnQvZG9jdW1lbnRhdGlvbi9RdWlja1RpbWUvUVRGRi9NZXRhZGF0YS9NZXRhZGF0YS5odG1sIy8vYXBwbGVfcmVmL2RvYy91aWQvVFA0MDAwMDkzOS1DSDEtU1czNVxuKi9cblxuXG52YXIgVFlQRVMgPSB7XG4gIFwiMFwiOiBcInVpbnQ4XCIsXG4gIFwiMVwiOiBcInRleHRcIixcbiAgXCIxM1wiOiBcImpwZWdcIixcbiAgXCIxNFwiOiBcInBuZ1wiLFxuICBcIjIxXCI6IFwiaW50XCIsXG4gIFwiMjJcIjogXCJ1aW50XCJcbn07XG52YXIgQVRPTV9ERVNDUklQVElPTlMgPSB7XG4gIFwiwqlhbGJcIjogXCJBbGJ1bVwiLFxuICBcIsKpQVJUXCI6IFwiQXJ0aXN0XCIsXG4gIFwiYUFSVFwiOiBcIkFsYnVtIEFydGlzdFwiLFxuICBcIsKpZGF5XCI6IFwiUmVsZWFzZSBEYXRlXCIsXG4gIFwiwqluYW1cIjogXCJUaXRsZVwiLFxuICBcIsKpZ2VuXCI6IFwiR2VucmVcIixcbiAgXCJnbnJlXCI6IFwiR2VucmVcIixcbiAgXCJ0cmtuXCI6IFwiVHJhY2sgTnVtYmVyXCIsXG4gIFwiwql3cnRcIjogXCJDb21wb3NlclwiLFxuICBcIsKpdG9vXCI6IFwiRW5jb2RpbmcgVG9vbFwiLFxuICBcIsKpZW5jXCI6IFwiRW5jb2RlZCBCeVwiLFxuICBcImNwcnRcIjogXCJDb3B5cmlnaHRcIixcbiAgXCJjb3ZyXCI6IFwiQ292ZXIgQXJ0XCIsXG4gIFwiwqlncnBcIjogXCJHcm91cGluZ1wiLFxuICBcImtleXdcIjogXCJLZXl3b3Jkc1wiLFxuICBcIsKpbHlyXCI6IFwiTHlyaWNzXCIsXG4gIFwiwqljbXRcIjogXCJDb21tZW50XCIsXG4gIFwidG1wb1wiOiBcIlRlbXBvXCIsXG4gIFwiY3BpbFwiOiBcIkNvbXBpbGF0aW9uXCIsXG4gIFwiZGlza1wiOiBcIkRpc2MgTnVtYmVyXCIsXG4gIFwidHZzaFwiOiBcIlRWIFNob3cgTmFtZVwiLFxuICBcInR2ZW5cIjogXCJUViBFcGlzb2RlIElEXCIsXG4gIFwidHZzblwiOiBcIlRWIFNlYXNvblwiLFxuICBcInR2ZXNcIjogXCJUViBFcGlzb2RlXCIsXG4gIFwidHZublwiOiBcIlRWIE5ldHdvcmtcIixcbiAgXCJkZXNjXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgXCJsZGVzXCI6IFwiTG9uZyBEZXNjcmlwdGlvblwiLFxuICBcInNvbm1cIjogXCJTb3J0IE5hbWVcIixcbiAgXCJzb2FyXCI6IFwiU29ydCBBcnRpc3RcIixcbiAgXCJzb2FhXCI6IFwiU29ydCBBbGJ1bVwiLFxuICBcInNvY29cIjogXCJTb3J0IENvbXBvc2VyXCIsXG4gIFwic29zblwiOiBcIlNvcnQgU2hvd1wiLFxuICBcInB1cmRcIjogXCJQdXJjaGFzZSBEYXRlXCIsXG4gIFwicGNzdFwiOiBcIlBvZGNhc3RcIixcbiAgXCJwdXJsXCI6IFwiUG9kY2FzdCBVUkxcIixcbiAgXCJjYXRnXCI6IFwiQ2F0ZWdvcnlcIixcbiAgXCJoZHZkXCI6IFwiSEQgVmlkZW9cIixcbiAgXCJzdGlrXCI6IFwiTWVkaWEgVHlwZVwiLFxuICBcInJ0bmdcIjogXCJDb250ZW50IFJhdGluZ1wiLFxuICBcInBnYXBcIjogXCJHYXBsZXNzIFBsYXliYWNrXCIsXG4gIFwiYXBJRFwiOiBcIlB1cmNoYXNlIEFjY291bnRcIixcbiAgXCJzZklEXCI6IFwiQ291bnRyeSBDb2RlXCIsXG4gIFwiYXRJRFwiOiBcIkFydGlzdCBJRFwiLFxuICBcImNuSURcIjogXCJDYXRhbG9nIElEXCIsXG4gIFwicGxJRFwiOiBcIkNvbGxlY3Rpb24gSURcIixcbiAgXCJnZUlEXCI6IFwiR2VucmUgSURcIixcbiAgXCJ4aWQgXCI6IFwiVmVuZG9yIEluZm9ybWF0aW9uXCIsXG4gIFwiZmx2clwiOiBcIkNvZGVjIEZsYXZvclwiXG59O1xudmFyIFVOU1VQUE9SVEVEX0FUT01TID0ge1xuICBcIi0tLS1cIjogMVxufTtcbnZhciBTSE9SVENVVFMgPSB7XG4gIFwidGl0bGVcIjogXCLCqW5hbVwiLFxuICBcImFydGlzdFwiOiBcIsKpQVJUXCIsXG4gIFwiYWxidW1cIjogXCLCqWFsYlwiLFxuICBcInllYXJcIjogXCLCqWRheVwiLFxuICBcImNvbW1lbnRcIjogXCLCqWNtdFwiLFxuICBcInRyYWNrXCI6IFwidHJrblwiLFxuICBcImdlbnJlXCI6IFwiwqlnZW5cIixcbiAgXCJwaWN0dXJlXCI6IFwiY292clwiLFxuICBcImx5cmljc1wiOiBcIsKpbHlyXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IE1QNFRhZ1JlYWRlcjtcblxufSx7XCIuL01lZGlhRmlsZVJlYWRlclwiOjExLFwiLi9NZWRpYVRhZ1JlYWRlclwiOjEyfV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBTdHJpbmdVdGlscyA9IHJlcXVpcmUoJy4vU3RyaW5nVXRpbHMnKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1lZGlhRmlsZVJlYWRlcihwYXRoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhRmlsZVJlYWRlcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaXNJbml0aWFsaXplZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NpemVcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zaXplID0gMDtcbiAgfVxuICAvKipcbiAgICogRGVjaWRlcyBpZiB0aGlzIG1lZGlhIGZpbGUgcmVhZGVyIGlzIGFibGUgdG8gcmVhZCB0aGUgZ2l2ZW4gZmlsZS5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWVkaWFGaWxlUmVhZGVyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZCBiZWZvcmUgYW55IG90aGVyIGZ1bmN0aW9uLlxuICAgICAqIExvYWRzIHRoZSBuZWNlc3NhcnkgaW5pdGlhbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBmaWxlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXQoe1xuICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgICAgc2VsZi5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2luaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoY2FsbGJhY2tzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBpbml0IGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiB0aGUgcmFuZ2UgdG8gbG9hZC5cbiAgICAgKiAgICAgICAgRXg6IFswLCA3XSBsb2FkIGJ5dGVzIDAgdG8gNyBpbmNsdXNpdmUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsb2FkUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJhbmdlKHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGxvYWRSYW5nZSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSBpbiBieXRlcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbml0KCkgbXVzdCBiZSBjYWxsZWQgZmlyc3QuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZUF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVBdChvZmZzZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IGdldEJ5dGVBdCBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Qnl0ZXNBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlc0F0KG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIGkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQml0U2V0QXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNCaXRTZXRBdChvZmZzZXQsIGJpdCkge1xuICAgICAgdmFyIGlCeXRlID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcbiAgICAgIHJldHVybiAoaUJ5dGUgJiAxIDw8IGJpdCkgIT0gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U0J5dGVBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTQnl0ZUF0KG9mZnNldCkge1xuICAgICAgdmFyIGlCeXRlID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KTtcblxuICAgICAgaWYgKGlCeXRlID4gMTI3KSB7XG4gICAgICAgIHJldHVybiBpQnl0ZSAtIDI1NjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpQnl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2hvcnRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaG9ydEF0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpU2hvcnQgPSBpc0JpZ0VuZGlhbiA/ICh0aGlzLmdldEJ5dGVBdChvZmZzZXQpIDw8IDgpICsgdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSkgOiAodGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMSkgPDwgOCkgKyB0aGlzLmdldEJ5dGVBdChvZmZzZXQpO1xuXG4gICAgICBpZiAoaVNob3J0IDwgMCkge1xuICAgICAgICBpU2hvcnQgKz0gNjU1MzY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpU2hvcnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNTaG9ydEF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNTaG9ydEF0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpVVNob3J0ID0gdGhpcy5nZXRTaG9ydEF0KG9mZnNldCwgaXNCaWdFbmRpYW4pO1xuXG4gICAgICBpZiAoaVVTaG9ydCA+IDMyNzY3KSB7XG4gICAgICAgIHJldHVybiBpVVNob3J0IC0gNjU1MzY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaVVTaG9ydDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9uZ0F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvbmdBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaUJ5dGUxID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KSxcbiAgICAgICAgICBpQnl0ZTIgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSxcbiAgICAgICAgICBpQnl0ZTMgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAyKSxcbiAgICAgICAgICBpQnl0ZTQgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAzKTtcbiAgICAgIHZhciBpTG9uZyA9IGlzQmlnRW5kaWFuID8gKCgoaUJ5dGUxIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUzIDw8IDgpICsgaUJ5dGU0IDogKCgoaUJ5dGU0IDw8IDgpICsgaUJ5dGUzIDw8IDgpICsgaUJ5dGUyIDw8IDgpICsgaUJ5dGUxO1xuXG4gICAgICBpZiAoaUxvbmcgPCAwKSB7XG4gICAgICAgIGlMb25nICs9IDQyOTQ5NjcyOTY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpTG9uZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U0xvbmdBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTTG9uZ0F0KG9mZnNldCwgaXNCaWdFbmRpYW4pIHtcbiAgICAgIHZhciBpVUxvbmcgPSB0aGlzLmdldExvbmdBdChvZmZzZXQsIGlzQmlnRW5kaWFuKTtcblxuICAgICAgaWYgKGlVTG9uZyA+IDIxNDc0ODM2NDcpIHtcbiAgICAgICAgcmV0dXJuIGlVTG9uZyAtIDQyOTQ5NjcyOTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaVVMb25nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJbnRlZ2VyMjRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnRlZ2VyMjRBdChvZmZzZXQsIGlzQmlnRW5kaWFuKSB7XG4gICAgICB2YXIgaUJ5dGUxID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0KSxcbiAgICAgICAgICBpQnl0ZTIgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKSxcbiAgICAgICAgICBpQnl0ZTMgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAyKTtcbiAgICAgIHZhciBpSW50ZWdlciA9IGlzQmlnRW5kaWFuID8gKChpQnl0ZTEgPDwgOCkgKyBpQnl0ZTIgPDwgOCkgKyBpQnl0ZTMgOiAoKGlCeXRlMyA8PCA4KSArIGlCeXRlMiA8PCA4KSArIGlCeXRlMTtcblxuICAgICAgaWYgKGlJbnRlZ2VyIDwgMCkge1xuICAgICAgICBpSW50ZWdlciArPSAxNjc3NzIxNjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlJbnRlZ2VyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHJpbmdBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdHJpbmdBdChvZmZzZXQsIGxlbmd0aCkge1xuICAgICAgdmFyIHN0cmluZyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gb2Zmc2V0LCBqID0gMDsgaSA8IG9mZnNldCArIGxlbmd0aDsgaSsrLCBqKyspIHtcbiAgICAgICAgc3RyaW5nW2pdID0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldEJ5dGVBdChpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RyaW5nV2l0aENoYXJzZXRBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdHJpbmdXaXRoQ2hhcnNldEF0KG9mZnNldCwgbGVuZ3RoLCBjaGFyc2V0KSB7XG4gICAgICB2YXIgYnl0ZXMgPSB0aGlzLmdldEJ5dGVzQXQob2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgdmFyIHN0cmluZztcblxuICAgICAgc3dpdGNoICgoY2hhcnNldCB8fCAnJykudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwidXRmLTE2XCI6XG4gICAgICAgIGNhc2UgXCJ1dGYtMTZsZVwiOlxuICAgICAgICBjYXNlIFwidXRmLTE2YmVcIjpcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmdVdGlscy5yZWFkVVRGMTZTdHJpbmcoYnl0ZXMsIGNoYXJzZXQgPT09IFwidXRmLTE2YmVcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInV0Zi04XCI6XG4gICAgICAgICAgc3RyaW5nID0gU3RyaW5nVXRpbHMucmVhZFVURjhTdHJpbmcoYnl0ZXMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3RyaW5nID0gU3RyaW5nVXRpbHMucmVhZE51bGxUZXJtaW5hdGVkU3RyaW5nKGJ5dGVzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q2hhckF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoYXJBdChvZmZzZXQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgSUQzdjIgdGFnL2ZyYW1lIHNpemUgaXMgZW5jb2RlZCB3aXRoIGZvdXIgYnl0ZXMgd2hlcmUgdGhlIG1vc3RcbiAgICAgKiBzaWduaWZpY2FudCBiaXQgKGJpdCA3KSBpcyBzZXQgdG8gemVybyBpbiBldmVyeSBieXRlLCBtYWtpbmcgYSB0b3RhbCBvZiAyOFxuICAgICAqIGJpdHMuIFRoZSB6ZXJvZWQgYml0cyBhcmUgaWdub3JlZCwgc28gYSAyNTcgYnl0ZXMgbG9uZyB0YWcgaXMgcmVwcmVzZW50ZWRcbiAgICAgKiBhcyAkMDAgMDAgMDIgMDEuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTeW5jaHNhZmVJbnRlZ2VyMzJBdChvZmZzZXQpIHtcbiAgICAgIHZhciBzaXplMSA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCk7XG4gICAgICB2YXIgc2l6ZTIgPSB0aGlzLmdldEJ5dGVBdChvZmZzZXQgKyAxKTtcbiAgICAgIHZhciBzaXplMyA9IHRoaXMuZ2V0Qnl0ZUF0KG9mZnNldCArIDIpO1xuICAgICAgdmFyIHNpemU0ID0gdGhpcy5nZXRCeXRlQXQob2Zmc2V0ICsgMyk7IC8vIDB4N2YgPSAwYjAxMTExMTExXG5cbiAgICAgIHZhciBzaXplID0gc2l6ZTQgJiAweDdmIHwgKHNpemUzICYgMHg3ZikgPDwgNyB8IChzaXplMiAmIDB4N2YpIDw8IDE0IHwgKHNpemUxICYgMHg3ZikgPDwgMjE7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBjYW5SZWFkRmlsZSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVkaWFGaWxlUmVhZGVyO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZVJlYWRlcjtcblxufSx7XCIuL1N0cmluZ1V0aWxzXCI6MTN9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBNZWRpYVRhZ1JlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1lZGlhVGFnUmVhZGVyKG1lZGlhRmlsZVJlYWRlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYVRhZ1JlYWRlcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWVkaWFGaWxlUmVhZGVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFnc1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWVkaWFGaWxlUmVhZGVyID0gbWVkaWFGaWxlUmVhZGVyO1xuICAgIHRoaXMuX3RhZ3MgPSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBieXRlIHJhbmdlIHRoYXQgbmVlZHMgdG8gYmUgbG9hZGVkIGFuZCBmZWQgdG9cbiAgICogX2NhblJlYWRUYWdGb3JtYXQgaW4gb3JkZXIgdG8gaWRlbnRpZnkgaWYgdGhlIGZpbGUgY29udGFpbnMgdGFnXG4gICAqIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHJlYWQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1lZGlhVGFnUmVhZGVyLCBbe1xuICAgIGtleTogXCJzZXRUYWdzVG9SZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRhZ3NUb1JlYWQodGFncykge1xuICAgICAgdGhpcy5fdGFncyA9IHRhZ3M7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9tZWRpYUZpbGVSZWFkZXIuaW5pdCh7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIHNlbGYuX2xvYWREYXRhKHNlbGYuX21lZGlhRmlsZVJlYWRlciwge1xuICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZ3MgPSBzZWxmLl9wYXJzZURhdGEoc2VsZi5fbWVkaWFGaWxlUmVhZGVyLCBzZWxmLl90YWdzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFyc2VEYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBleC5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gLy8gVE9ETzogZGVzdHJveSBtZWRpYUZpbGVSZWFkZXJcblxuXG4gICAgICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3ModGFncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaG9ydGN1dHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2hvcnRjdXRzKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBuZWNlc3NhcnkgYnl0ZXMgZnJvbSB0aGUgbWVkaWEgZmlsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9sb2FkRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZERhdGEobWVkaWFGaWxlUmVhZGVyLCBjYWxsYmFja3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgaW1wbGVtZW50IF9sb2FkRGF0YSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2UgdGhlIGxvYWRlZCBkYXRhIHRvIHJlYWQgdGhlIG1lZGlhIHRhZ3MuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZURhdGEobWVkaWFGaWxlUmVhZGVyLCB0YWdzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudCBfcGFyc2VEYXRhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZXhwYW5kU2hvcnRjdXRUYWdzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9leHBhbmRTaG9ydGN1dFRhZ3ModGFnc1dpdGhTaG9ydGN1dHMpIHtcbiAgICAgIGlmICghdGFnc1dpdGhTaG9ydGN1dHMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YWdzID0gW107XG4gICAgICB2YXIgc2hvcnRjdXRzID0gdGhpcy5nZXRTaG9ydGN1dHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIHRhZ09yU2hvcnRjdXQ7IHRhZ09yU2hvcnRjdXQgPSB0YWdzV2l0aFNob3J0Y3V0c1tpXTsgaSsrKSB7XG4gICAgICAgIHRhZ3MgPSB0YWdzLmNvbmNhdChzaG9ydGN1dHNbdGFnT3JTaG9ydGN1dF0gfHwgW3RhZ09yU2hvcnRjdXRdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBpbXBsZW1lbnRcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgdGFnIGlkZW50aWZpZXIgKHJlYWQgZnJvbSB0aGUgZmlsZSBieXRlIHBvc2l0aW9ucyBzcGVmaWNpZWQgYnlcbiAgICAgKiBnZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKSB0aGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiBpdCBjYW4gcmVhZCB0aGUgdGFnXG4gICAgICogZm9ybWF0IG9yIG5vdC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNhblJlYWRUYWdGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuUmVhZFRhZ0Zvcm1hdCh0YWdJZGVudGlmaWVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGltcGxlbWVudFwiKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVkaWFUYWdSZWFkZXI7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFUYWdSZWFkZXI7XG5cbn0se1wiLi9NZWRpYUZpbGVSZWFkZXJcIjoxMX1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgSW50ZXJuYWxEZWNvZGVkU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW50ZXJuYWxEZWNvZGVkU3RyaW5nKHZhbHVlLCBieXRlc1JlYWRDb3VudCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnRlcm5hbERlY29kZWRTdHJpbmcpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3ZhbHVlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJieXRlc1JlYWRDb3VudFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGVuZ3RoXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuYnl0ZXNSZWFkQ291bnQgPSBieXRlc1JlYWRDb3VudDtcbiAgICB0aGlzLmxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJbnRlcm5hbERlY29kZWRTdHJpbmcsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlcm5hbERlY29kZWRTdHJpbmc7XG59KCk7XG5cbnZhciBTdHJpbmdVdGlscyA9IHtcbiAgcmVhZFVURjE2U3RyaW5nOiBmdW5jdGlvbiByZWFkVVRGMTZTdHJpbmcoYnl0ZXMsIGJpZ0VuZGlhbiwgbWF4Qnl0ZXMpIHtcbiAgICB2YXIgaXggPSAwO1xuICAgIHZhciBvZmZzZXQxID0gMSxcbiAgICAgICAgb2Zmc2V0MiA9IDA7XG4gICAgbWF4Qnl0ZXMgPSBNYXRoLm1pbihtYXhCeXRlcyB8fCBieXRlcy5sZW5ndGgsIGJ5dGVzLmxlbmd0aCk7XG5cbiAgICBpZiAoYnl0ZXNbMF0gPT0gMHhGRSAmJiBieXRlc1sxXSA9PSAweEZGKSB7XG4gICAgICBiaWdFbmRpYW4gPSB0cnVlO1xuICAgICAgaXggPSAyO1xuICAgIH0gZWxzZSBpZiAoYnl0ZXNbMF0gPT0gMHhGRiAmJiBieXRlc1sxXSA9PSAweEZFKSB7XG4gICAgICBiaWdFbmRpYW4gPSBmYWxzZTtcbiAgICAgIGl4ID0gMjtcbiAgICB9XG5cbiAgICBpZiAoYmlnRW5kaWFuKSB7XG4gICAgICBvZmZzZXQxID0gMDtcbiAgICAgIG9mZnNldDIgPSAxO1xuICAgIH1cblxuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBpeCA8IG1heEJ5dGVzOyBqKyspIHtcbiAgICAgIHZhciBieXRlMSA9IGJ5dGVzW2l4ICsgb2Zmc2V0MV07XG4gICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCArIG9mZnNldDJdO1xuICAgICAgdmFyIHdvcmQxID0gKGJ5dGUxIDw8IDgpICsgYnl0ZTI7XG4gICAgICBpeCArPSAyO1xuXG4gICAgICBpZiAod29yZDEgPT0gMHgwMDAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA8IDB4RDggfHwgYnl0ZTEgPj0gMHhFMCkge1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHdvcmQxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBieXRlMyA9IGJ5dGVzW2l4ICsgb2Zmc2V0MV07XG4gICAgICAgIHZhciBieXRlNCA9IGJ5dGVzW2l4ICsgb2Zmc2V0Ml07XG4gICAgICAgIHZhciB3b3JkMiA9IChieXRlMyA8PCA4KSArIGJ5dGU0O1xuICAgICAgICBpeCArPSAyO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHdvcmQxLCB3b3JkMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcm5hbERlY29kZWRTdHJpbmcoYXJyLmpvaW4oXCJcIiksIGl4KTtcbiAgfSxcbiAgcmVhZFVURjhTdHJpbmc6IGZ1bmN0aW9uIHJlYWRVVEY4U3RyaW5nKGJ5dGVzLCBtYXhCeXRlcykge1xuICAgIHZhciBpeCA9IDA7XG4gICAgbWF4Qnl0ZXMgPSBNYXRoLm1pbihtYXhCeXRlcyB8fCBieXRlcy5sZW5ndGgsIGJ5dGVzLmxlbmd0aCk7XG5cbiAgICBpZiAoYnl0ZXNbMF0gPT0gMHhFRiAmJiBieXRlc1sxXSA9PSAweEJCICYmIGJ5dGVzWzJdID09IDB4QkYpIHtcbiAgICAgIGl4ID0gMztcbiAgICB9XG5cbiAgICB2YXIgYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaXggPCBtYXhCeXRlczsgaisrKSB7XG4gICAgICB2YXIgYnl0ZTEgPSBieXRlc1tpeCsrXTtcblxuICAgICAgaWYgKGJ5dGUxID09IDB4MDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGUxIDwgMHg4MCkge1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUxKTtcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPj0gMHhDMiAmJiBieXRlMSA8IDB4RTApIHtcbiAgICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXgrK107XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlMSAmIDB4MUYpIDw8IDYpICsgKGJ5dGUyICYgMHgzRikpO1xuICAgICAgfSBlbHNlIGlmIChieXRlMSA+PSAweEUwICYmIGJ5dGUxIDwgMHhGMCkge1xuICAgICAgICB2YXIgYnl0ZTIgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGJ5dGUzID0gYnl0ZXNbaXgrK107XG4gICAgICAgIGFycltqXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlMSAmIDB4RkYpIDw8IDEyKSArICgoYnl0ZTIgJiAweDNGKSA8PCA2KSArIChieXRlMyAmIDB4M0YpKTtcbiAgICAgIH0gZWxzZSBpZiAoYnl0ZTEgPj0gMHhGMCAmJiBieXRlMSA8IDB4RjUpIHtcbiAgICAgICAgdmFyIGJ5dGUyID0gYnl0ZXNbaXgrK107XG4gICAgICAgIHZhciBieXRlMyA9IGJ5dGVzW2l4KytdO1xuICAgICAgICB2YXIgYnl0ZTQgPSBieXRlc1tpeCsrXTtcbiAgICAgICAgdmFyIGNvZGVwb2ludCA9ICgoYnl0ZTEgJiAweDA3KSA8PCAxOCkgKyAoKGJ5dGUyICYgMHgzRikgPDwgMTIpICsgKChieXRlMyAmIDB4M0YpIDw8IDYpICsgKGJ5dGU0ICYgMHgzRikgLSAweDEwMDAwO1xuICAgICAgICBhcnJbal0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjb2RlcG9pbnQgPj4gMTApICsgMHhEODAwLCAoY29kZXBvaW50ICYgMHgzRkYpICsgMHhEQzAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVybmFsRGVjb2RlZFN0cmluZyhhcnIuam9pbihcIlwiKSwgaXgpO1xuICB9LFxuICByZWFkTnVsbFRlcm1pbmF0ZWRTdHJpbmc6IGZ1bmN0aW9uIHJlYWROdWxsVGVybWluYXRlZFN0cmluZyhieXRlcywgbWF4Qnl0ZXMpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgbWF4Qnl0ZXMgPSBtYXhCeXRlcyB8fCBieXRlcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEJ5dGVzOykge1xuICAgICAgdmFyIGJ5dGUxID0gYnl0ZXNbaSsrXTtcblxuICAgICAgaWYgKGJ5dGUxID09IDB4MDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGFycltpIC0gMV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVybmFsRGVjb2RlZFN0cmluZyhhcnIuam9pbihcIlwiKSwgaSk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1V0aWxzO1xuXG59LHt9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ2h1bmtlZEZpbGVEYXRhID0gcmVxdWlyZSgnLi9DaHVua2VkRmlsZURhdGEnKTtcblxudmFyIE1lZGlhRmlsZVJlYWRlciA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlUmVhZGVyJyk7XG5cbnZhciBDSFVOS19TSVpFID0gMTAyNDtcblxudmFyIFhockZpbGVSZWFkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NZWRpYUZpbGVSZWFkZXIpIHtcbiAgX2luaGVyaXRzKFhockZpbGVSZWFkZXIsIF9NZWRpYUZpbGVSZWFkZXIpO1xuXG4gIGZ1bmN0aW9uIFhockZpbGVSZWFkZXIodXJsKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhockZpbGVSZWFkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoWGhyRmlsZVJlYWRlcikuY2FsbCh0aGlzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3VybFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9maWxlRGF0YVwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX3VybCA9IHVybDtcbiAgICBfdGhpcy5fZmlsZURhdGEgPSBuZXcgQ2h1bmtlZEZpbGVEYXRhKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFhockZpbGVSZWFkZXIsIFt7XG4gICAga2V5OiBcIl9pbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbml0KGNhbGxiYWNrcykge1xuICAgICAgaWYgKFhockZpbGVSZWFkZXIuX2NvbmZpZy5hdm9pZEhlYWRSZXF1ZXN0cykge1xuICAgICAgICB0aGlzLl9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdChjYWxsYmFja3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZmV0Y2hTaXplV2l0aEhlYWRSZXF1ZXN0KGNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9mZXRjaFNpemVXaXRoSGVhZFJlcXVlc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoU2l6ZVdpdGhIZWFkUmVxdWVzdChjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fbWFrZVhIUlJlcXVlc3QoXCJIRUFEXCIsIG51bGwsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSBzZWxmLl9wYXJzZUNvbnRlbnRMZW5ndGgoeGhyKTtcblxuICAgICAgICAgIGlmIChjb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWxmLl9zaXplID0gY29udGVudExlbmd0aDtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29udGVudC1MZW5ndGggbm90IHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXIsIGZhbGxiYWNrIHRvXG4gICAgICAgICAgICAvLyBHRVQgcmVxdWVzdHMuXG4gICAgICAgICAgICBzZWxmLl9mZXRjaFNpemVXaXRoR2V0UmVxdWVzdChjYWxsYmFja3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmV0Y2hTaXplV2l0aEdldFJlcXVlc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZldGNoU2l6ZVdpdGhHZXRSZXF1ZXN0KGNhbGxiYWNrcykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB2YXIgcmFuZ2UgPSB0aGlzLl9yb3VuZFJhbmdlVG9DaHVua011bHRpcGxlKFswLCAwXSk7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiR0VUXCIsIHJhbmdlLCB7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHhocikge1xuICAgICAgICAgIHZhciBjb250ZW50UmFuZ2UgPSBzZWxmLl9wYXJzZUNvbnRlbnRSYW5nZSh4aHIpO1xuXG4gICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLl9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKTtcblxuICAgICAgICAgIGlmIChjb250ZW50UmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChjb250ZW50UmFuZ2UuaW5zdGFuY2VMZW5ndGggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBMYXN0IHJlc29ydCwgc2VydmVyIGlzIG5vdCBhYmxlIHRvIHRlbGwgdXMgdGhlIGNvbnRlbnQgbGVuZ3RoLFxuICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZldGNoIGVudGlyZSBmaWxlIHRoZW4uXG4gICAgICAgICAgICAgIHNlbGYuX2ZldGNoRW50aXJlRmlsZShjYWxsYmFja3MpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fc2l6ZSA9IGNvbnRlbnRSYW5nZS5pbnN0YW5jZUxlbmd0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmFuZ2UgcmVxdWVzdCBub3Qgc3VwcG9ydGVkLCB3ZSBnb3QgdGhlIGVudGlyZSBmaWxlXG4gICAgICAgICAgICBzZWxmLl9zaXplID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YSgwLCBkYXRhKTtcblxuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogY2FsbGJhY2tzLm9uRXJyb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmV0Y2hFbnRpcmVGaWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mZXRjaEVudGlyZUZpbGUoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX21ha2VYSFJSZXF1ZXN0KFwiR0VUXCIsIG51bGwsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoeGhyKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLl9nZXRYaHJSZXNwb25zZUNvbnRlbnQoeGhyKTtcblxuICAgICAgICAgIHNlbGYuX3NpemUgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIHNlbGYuX2ZpbGVEYXRhLmFkZERhdGEoMCwgZGF0YSk7XG5cbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2dldFhoclJlc3BvbnNlQ29udGVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0WGhyUmVzcG9uc2VDb250ZW50KHhocikge1xuICAgICAgcmV0dXJuIHhoci5yZXNwb25zZUJvZHkgfHwgeGhyLnJlc3BvbnNlVGV4dCB8fCBcIlwiO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcGFyc2VDb250ZW50TGVuZ3RoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYXJzZUNvbnRlbnRMZW5ndGgoeGhyKSB7XG4gICAgICB2YXIgY29udGVudExlbmd0aCA9IHRoaXMuX2dldFJlc3BvbnNlSGVhZGVyKHhociwgXCJDb250ZW50LUxlbmd0aFwiKTtcblxuICAgICAgaWYgKGNvbnRlbnRMZW5ndGggPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29udGVudExlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChjb250ZW50TGVuZ3RoLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wYXJzZUNvbnRlbnRSYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFyc2VDb250ZW50UmFuZ2UoeGhyKSB7XG4gICAgICB2YXIgY29udGVudFJhbmdlID0gdGhpcy5fZ2V0UmVzcG9uc2VIZWFkZXIoeGhyLCBcIkNvbnRlbnQtUmFuZ2VcIik7XG5cbiAgICAgIGlmIChjb250ZW50UmFuZ2UpIHtcbiAgICAgICAgdmFyIHBhcnNlZENvbnRlbnRSYW5nZSA9IGNvbnRlbnRSYW5nZS5tYXRjaCgvYnl0ZXMgKFxcZCspLShcXGQrKVxcLyg/OihcXGQrKXxcXCopL2kpO1xuXG4gICAgICAgIGlmICghcGFyc2VkQ29udGVudFJhbmdlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRklYTUU6IFVua25vd24gQ29udGVudC1SYW5nZSBzeW50YXg6IFwiICsgY29udGVudFJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlyc3RCeXRlUG9zaXRpb246IHBhcnNlSW50KHBhcnNlZENvbnRlbnRSYW5nZVsxXSwgMTApLFxuICAgICAgICAgIGxhc3RCeXRlUG9zaXRpb246IHBhcnNlSW50KHBhcnNlZENvbnRlbnRSYW5nZVsyXSwgMTApLFxuICAgICAgICAgIGluc3RhbmNlTGVuZ3RoOiBwYXJzZWRDb250ZW50UmFuZ2VbM10gPyBwYXJzZUludChwYXJzZWRDb250ZW50UmFuZ2VbM10sIDEwKSA6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJhbmdlKHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHNlbGYuX2ZpbGVEYXRhLmhhc0RhdGFSYW5nZShyYW5nZVswXSwgTWF0aC5taW4oc2VsZi5fc2l6ZSwgcmFuZ2VbMV0pKSkge1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrcy5vblN1Y2Nlc3MsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEFsd2F5cyBkb3dubG9hZCBpbiBtdWx0aXBsZXMgb2YgQ0hVTktfU0laRS4gSWYgd2UncmUgZ29pbmcgdG8gbWFrZSBhXG4gICAgICAvLyByZXF1ZXN0IG1pZ2h0IGFzIHdlbGwgZ2V0IGEgY2h1bmsgdGhhdCBtYWtlcyBzZW5zZS4gVGhlIGJpZyBjb3N0IGlzXG4gICAgICAvLyBlc3RhYmxpc2hpbmcgdGhlIGNvbm5lY3Rpb24gc28gZ2V0dGluZyAxMGJ5dGVzIG9yIDFLIGRvZXNuJ3QgcmVhbGx5XG4gICAgICAvLyBtYWtlIGEgZGlmZmVyZW5jZS5cblxuXG4gICAgICByYW5nZSA9IHRoaXMuX3JvdW5kUmFuZ2VUb0NodW5rTXVsdGlwbGUocmFuZ2UpOyAvLyBVcHBlciByYW5nZSBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhhbiBtYXggZmlsZSBzaXplXG5cbiAgICAgIHJhbmdlWzFdID0gTWF0aC5taW4oc2VsZi5fc2l6ZSwgcmFuZ2VbMV0pO1xuXG4gICAgICB0aGlzLl9tYWtlWEhSUmVxdWVzdChcIkdFVFwiLCByYW5nZSwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2Vzcyh4aHIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYuX2dldFhoclJlc3BvbnNlQ29udGVudCh4aHIpO1xuXG4gICAgICAgICAgc2VsZi5fZmlsZURhdGEuYWRkRGF0YShyYW5nZVswXSwgZGF0YSk7XG5cbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3JvdW5kUmFuZ2VUb0NodW5rTXVsdGlwbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JvdW5kUmFuZ2VUb0NodW5rTXVsdGlwbGUocmFuZ2UpIHtcbiAgICAgIHZhciBsZW5ndGggPSByYW5nZVsxXSAtIHJhbmdlWzBdICsgMTtcbiAgICAgIHZhciBuZXdMZW5ndGggPSBNYXRoLmNlaWwobGVuZ3RoIC8gQ0hVTktfU0laRSkgKiBDSFVOS19TSVpFO1xuICAgICAgcmV0dXJuIFtyYW5nZVswXSwgcmFuZ2VbMF0gKyBuZXdMZW5ndGggLSAxXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX21ha2VYSFJSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlWEhSUmVxdWVzdChtZXRob2QsIHJhbmdlLCBjYWxsYmFja3MpIHtcbiAgICAgIHZhciB4aHIgPSB0aGlzLl9jcmVhdGVYSFJPYmplY3QoKTtcblxuICAgICAgeGhyLm9wZW4obWV0aG9kLCB0aGlzLl91cmwpO1xuXG4gICAgICB2YXIgb25YSFJMb2FkID0gZnVuY3Rpb24gb25YSFJMb2FkKCkge1xuICAgICAgICAvLyAyMDAgLSBPS1xuICAgICAgICAvLyAyMDYgLSBQYXJ0aWFsIENvbnRlbnRcbiAgICAgICAgLy8gJEZsb3dJc3N1ZSAtIHhociB3aWxsIG5vdCBiZSBudWxsIGhlcmVcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCB8fCB4aHIuc3RhdHVzID09PSAyMDYpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25TdWNjZXNzKHhocik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ4aHJcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBcIlVuZXhwZWN0ZWQgSFRUUCBzdGF0dXMgXCIgKyB4aHIuc3RhdHVzICsgXCIuXCIsXG4gICAgICAgICAgICBcInhoclwiOiB4aHJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhociA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHhoci5vbmxvYWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHhoci5vbmxvYWQgPSBvblhIUkxvYWQ7XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInhoclwiLFxuICAgICAgICAgICAgICBcImluZm9cIjogXCJHZW5lcmljIFhIUiBlcnJvciwgY2hlY2sgeGhyIG9iamVjdC5cIixcbiAgICAgICAgICAgICAgXCJ4aHJcIjogeGhyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICRGbG93SXNzdWUgLSB4aHIgd2lsbCBub3QgYmUgbnVsbCBoZXJlXG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBvblhIUkxvYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChYaHJGaWxlUmVhZGVyLl9jb25maWcudGltZW91dEluU2VjKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gWGhyRmlsZVJlYWRlci5fY29uZmlnLnRpbWVvdXRJblNlYyAqIDEwMDA7XG5cbiAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVycm9yKHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwieGhyXCIsXG4gICAgICAgICAgICAgIC8vICRGbG93SXNzdWUgLSB4aHIudGltZW91dCB3aWxsIG5vdCBiZSBudWxsXG4gICAgICAgICAgICAgIFwiaW5mb1wiOiBcIlRpbWVvdXQgYWZ0ZXIgXCIgKyB4aHIudGltZW91dCAvIDEwMDAgKyBcInMuIFVzZSBqc21lZGlhdGFncy5Db25maWcuc2V0WGhyVGltZW91dCB0byBvdmVycmlkZS5cIixcbiAgICAgICAgICAgICAgXCJ4aHJcIjogeGhyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC9wbGFpbjsgY2hhcnNldD14LXVzZXItZGVmaW5lZFwiKTtcblxuICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgIHRoaXMuX3NldFJlcXVlc3RIZWFkZXIoeGhyLCBcIlJhbmdlXCIsIFwiYnl0ZXM9XCIgKyByYW5nZVswXSArIFwiLVwiICsgcmFuZ2VbMV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRSZXF1ZXN0SGVhZGVyKHhociwgXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBcIlNhdCwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIpO1xuXG4gICAgICB4aHIuc2VuZChudWxsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3NldFJlcXVlc3RIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFJlcXVlc3RIZWFkZXIoeGhyLCBoZWFkZXJOYW1lLCBoZWFkZXJWYWx1ZSkge1xuICAgICAgaWYgKFhockZpbGVSZWFkZXIuX2NvbmZpZy5kaXNhbGxvd2VkWGhySGVhZGVycy5pbmRleE9mKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkgPCAwKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2hhc1Jlc3BvbnNlSGVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYXNSZXNwb25zZUhlYWRlcih4aHIsIGhlYWRlck5hbWUpIHtcbiAgICAgIHZhciBhbGxSZXNwb25zZUhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG5cbiAgICAgIGlmICghYWxsUmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlYWRlcnMgPSBhbGxSZXNwb25zZUhlYWRlcnMuc3BsaXQoXCJcXHJcXG5cIik7XG4gICAgICB2YXIgaGVhZGVyTmFtZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhlYWRlck5hbWVzW2ldID0gaGVhZGVyc1tpXS5zcGxpdChcIjpcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlYWRlck5hbWVzLmluZGV4T2YoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSA+PSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0UmVzcG9uc2VIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFJlc3BvbnNlSGVhZGVyKHhociwgaGVhZGVyTmFtZSkge1xuICAgICAgaWYgKCF0aGlzLl9oYXNSZXNwb25zZUhlYWRlcih4aHIsIGhlYWRlck5hbWUpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geGhyLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlck5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRCeXRlQXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qnl0ZUF0KG9mZnNldCkge1xuICAgICAgdmFyIGNoYXJhY3RlciA9IHRoaXMuX2ZpbGVEYXRhLmdldEJ5dGVBdChvZmZzZXQpO1xuXG4gICAgICByZXR1cm4gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgJiAweGZmO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfaXNXZWJXb3JrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzV2ViV29ya2VyKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfY3JlYXRlWEhST2JqZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVYSFJPYmplY3QoKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy5faXNXZWJXb3JrZXIoKSkge1xuICAgICAgICAvLyAkRmxvd0lzc3VlIC0gZmxvdyBpcyBub3QgYWJsZSB0byByZWNvZ25pemUgdGhpcyBtb2R1bGUuXG4gICAgICAgIHJldHVybiBuZXcgKHJlcXVpcmUoXCJ4aHIyXCIpLlhNTEh0dHBSZXF1ZXN0KSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWE1MSHR0cFJlcXVlc3QgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJjYW5SZWFkRmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWFkRmlsZShmaWxlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnICYmIC9eW2Etel0rOlxcL1xcLy9pLnRlc3QoZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldENvbmZpZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gY29uZmlnW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRpc2FsbG93ZWRYaHJIZWFkZXJzID0gdGhpcy5fY29uZmlnLmRpc2FsbG93ZWRYaHJIZWFkZXJzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc2FsbG93ZWRYaHJIZWFkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc2FsbG93ZWRYaHJIZWFkZXJzW2ldID0gZGlzYWxsb3dlZFhockhlYWRlcnNbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gWGhyRmlsZVJlYWRlcjtcbn0oTWVkaWFGaWxlUmVhZGVyKTtcblxuX2RlZmluZVByb3BlcnR5KFhockZpbGVSZWFkZXIsIFwiX2NvbmZpZ1wiLCB2b2lkIDApO1xuXG5YaHJGaWxlUmVhZGVyLl9jb25maWcgPSB7XG4gIGF2b2lkSGVhZFJlcXVlc3RzOiBmYWxzZSxcbiAgZGlzYWxsb3dlZFhockhlYWRlcnM6IFtdLFxuICB0aW1lb3V0SW5TZWM6IDMwXG59O1xubW9kdWxlLmV4cG9ydHMgPSBYaHJGaWxlUmVhZGVyO1xuXG59LHtcIi4vQ2h1bmtlZEZpbGVEYXRhXCI6NSxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCJ4aHIyXCI6Mn1dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTWVkaWFGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vTWVkaWFGaWxlUmVhZGVyXCIpO1xuXG52YXIgWGhyRmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL1hockZpbGVSZWFkZXJcIik7XG5cbnZhciBCbG9iRmlsZVJlYWRlciA9IHJlcXVpcmUoXCIuL0Jsb2JGaWxlUmVhZGVyXCIpO1xuXG52YXIgQXJyYXlGaWxlUmVhZGVyID0gcmVxdWlyZShcIi4vQXJyYXlGaWxlUmVhZGVyXCIpO1xuXG52YXIgTWVkaWFUYWdSZWFkZXIgPSByZXF1aXJlKFwiLi9NZWRpYVRhZ1JlYWRlclwiKTtcblxudmFyIElEM3YxVGFnUmVhZGVyID0gcmVxdWlyZShcIi4vSUQzdjFUYWdSZWFkZXJcIik7XG5cbnZhciBJRDN2MlRhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL0lEM3YyVGFnUmVhZGVyXCIpO1xuXG52YXIgTVA0VGFnUmVhZGVyID0gcmVxdWlyZShcIi4vTVA0VGFnUmVhZGVyXCIpO1xuXG52YXIgRkxBQ1RhZ1JlYWRlciA9IHJlcXVpcmUoXCIuL0ZMQUNUYWdSZWFkZXJcIik7XG5cbnZhciBtZWRpYUZpbGVSZWFkZXJzID0gW107XG52YXIgbWVkaWFUYWdSZWFkZXJzID0gW107XG5cbmZ1bmN0aW9uIHJlYWQobG9jYXRpb24sIGNhbGxiYWNrcykge1xuICBuZXcgUmVhZGVyKGxvY2F0aW9uKS5yZWFkKGNhbGxiYWNrcyk7XG59XG5cbmZ1bmN0aW9uIGlzUmFuZ2VWYWxpZChyYW5nZSwgZmlsZVNpemUpIHtcbiAgdmFyIGludmFsaWRQb3NpdGl2ZVJhbmdlID0gcmFuZ2Uub2Zmc2V0ID49IDAgJiYgcmFuZ2Uub2Zmc2V0ICsgcmFuZ2UubGVuZ3RoID49IGZpbGVTaXplO1xuICB2YXIgaW52YWxpZE5lZ2F0aXZlUmFuZ2UgPSByYW5nZS5vZmZzZXQgPCAwICYmICgtcmFuZ2Uub2Zmc2V0ID4gZmlsZVNpemUgfHwgcmFuZ2Uub2Zmc2V0ICsgcmFuZ2UubGVuZ3RoID4gMCk7XG4gIHJldHVybiAhKGludmFsaWRQb3NpdGl2ZVJhbmdlIHx8IGludmFsaWROZWdhdGl2ZVJhbmdlKTtcbn1cblxudmFyIFJlYWRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlYWRlcihmaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWRlcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZmlsZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3RhZ3NUb1JlYWRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9maWxlUmVhZGVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFnUmVhZGVyXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLl9maWxlID0gZmlsZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZWFkZXIsIFt7XG4gICAga2V5OiBcInNldFRhZ3NUb1JlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFnc1RvUmVhZCh0YWdzVG9SZWFkKSB7XG4gICAgICB0aGlzLl90YWdzVG9SZWFkID0gdGFnc1RvUmVhZDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpbGVSZWFkZXIoZmlsZVJlYWRlcikge1xuICAgICAgdGhpcy5fZmlsZVJlYWRlciA9IGZpbGVSZWFkZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0VGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRhZ1JlYWRlcih0YWdSZWFkZXIpIHtcbiAgICAgIHRoaXMuX3RhZ1JlYWRlciA9IHRhZ1JlYWRlcjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoY2FsbGJhY2tzKSB7XG4gICAgICB2YXIgRmlsZVJlYWRlciA9IHRoaXMuX2dldEZpbGVSZWFkZXIoKTtcblxuICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcih0aGlzLl9maWxlKTtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGZpbGVSZWFkZXIuaW5pdCh7XG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgICAgIHNlbGYuX2dldFRhZ1JlYWRlcihmaWxlUmVhZGVyLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcyhUYWdSZWFkZXIpIHtcbiAgICAgICAgICAgICAgbmV3IFRhZ1JlYWRlcihmaWxlUmVhZGVyKS5zZXRUYWdzVG9SZWFkKHNlbGYuX3RhZ3NUb1JlYWQpLnJlYWQoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiBjYWxsYmFja3Mub25FcnJvclxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRGaWxlUmVhZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2ZpbGVSZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbGVSZWFkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmluZEZpbGVSZWFkZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRGaWxlUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kRmlsZVJlYWRlcigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVkaWFGaWxlUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWVkaWFGaWxlUmVhZGVyc1tpXS5jYW5SZWFkRmlsZSh0aGlzLl9maWxlKSkge1xuICAgICAgICAgIHJldHVybiBtZWRpYUZpbGVSZWFkZXJzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1aXRhYmxlIGZpbGUgcmVhZGVyIGZvdW5kIGZvciBcIiArIHRoaXMuX2ZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0VGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRUYWdSZWFkZXIoZmlsZVJlYWRlciwgY2FsbGJhY2tzKSB7XG4gICAgICBpZiAodGhpcy5fdGFnUmVhZGVyKSB7XG4gICAgICAgIHZhciB0YWdSZWFkZXIgPSB0aGlzLl90YWdSZWFkZXI7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3ModGFnUmVhZGVyKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maW5kVGFnUmVhZGVyKGZpbGVSZWFkZXIsIGNhbGxiYWNrcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kVGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kVGFnUmVhZGVyKGZpbGVSZWFkZXIsIGNhbGxiYWNrcykge1xuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBtYWtlIG11bHRpcGxlIGZldGNoZXMgcGVyIHRhZyByZWFkZXIgdG8gZ2V0IHRoZSB0YWdcbiAgICAgIC8vIGlkZW50aWZpZXIuIFRoZSBzdHJhdGVneSBoZXJlIGlzIHRvIGNvbWJpbmUgYWxsIHRoZSB0YWcgaWRlbnRpZmllclxuICAgICAgLy8gcmFuZ2VzIGludG8gb25lIGFuZCBtYWtlIGEgc2luZ2xlIGZldGNoLiBUaGlzIGlzIHBhcnRpY3VsYXJseSBpbXBvcnRhbnRcbiAgICAgIC8vIGluIGZpbGUgcmVhZGVycyB0aGF0IGhhdmUgZXhwZW5zaXZlIGxvYWRzIGxpa2UgdGhlIFhIUiBvbmUuXG4gICAgICAvLyBIb3dldmVyLCB3aXRoIHRoaXMgc3RyYXRlZ3kgd2UgcnVuIGludG8gdGhlIHByb2JsZW0gb2YgbG9hZGluZyB0aGVcbiAgICAgIC8vIGVudGlyZSBmaWxlIGJlY2F1c2UgdGFnIGlkZW50aWZpZXJzIG1pZ2h0IGJlIGF0IHRoZSBzdGFydCBvciBlbmQgb2ZcbiAgICAgIC8vIHRoZSBmaWxlLlxuICAgICAgLy8gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlIGRpdmlkZSB0aGUgdGFnIHJlYWRlcnMgaW50byB0d28gY2F0ZWdvcmllcywgdGhlXG4gICAgICAvLyBvbmVzIHRoYXQgcmVhZCB0aGVpciB0YWcgaWRlbnRpZmllcnMgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGZpbGUgYW5kIHRoZVxuICAgICAgLy8gb25lcyB0aGF0IHJlYWQgZnJvbSB0aGUgZW5kIG9mIHRoZSBmaWxlLlxuICAgICAgdmFyIHRhZ1JlYWRlcnNBdEZpbGVTdGFydCA9IFtdO1xuICAgICAgdmFyIHRhZ1JlYWRlcnNBdEZpbGVFbmQgPSBbXTtcbiAgICAgIHZhciBmaWxlU2l6ZSA9IGZpbGVSZWFkZXIuZ2V0U2l6ZSgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhVGFnUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmFuZ2UgPSBtZWRpYVRhZ1JlYWRlcnNbaV0uZ2V0VGFnSWRlbnRpZmllckJ5dGVSYW5nZSgpO1xuXG4gICAgICAgIGlmICghaXNSYW5nZVZhbGlkKHJhbmdlLCBmaWxlU2l6ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYW5nZS5vZmZzZXQgPj0gMCAmJiByYW5nZS5vZmZzZXQgPCBmaWxlU2l6ZSAvIDIgfHwgcmFuZ2Uub2Zmc2V0IDwgMCAmJiByYW5nZS5vZmZzZXQgPCAtZmlsZVNpemUgLyAyKSB7XG4gICAgICAgICAgdGFnUmVhZGVyc0F0RmlsZVN0YXJ0LnB1c2gobWVkaWFUYWdSZWFkZXJzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdSZWFkZXJzQXRGaWxlRW5kLnB1c2gobWVkaWFUYWdSZWFkZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdGFnc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgdmFyIGxvYWRUYWdJZGVudGlmaWVyc0NhbGxiYWNrcyA9IHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICAgICAgaWYgKCF0YWdzTG9hZGVkKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBleHBlY3RpbmcgdG8gbG9hZCB0d28gc2V0cyBvZiB0YWcgaWRlbnRpZmllcnMuIFRoaXMgZmxhZ1xuICAgICAgICAgICAgLy8gaW5kaWNhdGVzIHdoZW4gdGhlIGZpcnN0IG9uZSBoYXMgYmVlbiBsb2FkZWQuXG4gICAgICAgICAgICB0YWdzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lZGlhVGFnUmVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gbWVkaWFUYWdSZWFkZXJzW2ldLmdldFRhZ0lkZW50aWZpZXJCeXRlUmFuZ2UoKTtcblxuICAgICAgICAgICAgaWYgKCFpc1JhbmdlVmFsaWQocmFuZ2UsIGZpbGVTaXplKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHRhZ0luZGVudGlmaWVyID0gZmlsZVJlYWRlci5nZXRCeXRlc0F0KHJhbmdlLm9mZnNldCA+PSAwID8gcmFuZ2Uub2Zmc2V0IDogcmFuZ2Uub2Zmc2V0ICsgZmlsZVNpemUsIHJhbmdlLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25FcnJvcih7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmaWxlUmVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICBcImluZm9cIjogZXgubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWVkaWFUYWdSZWFkZXJzW2ldLmNhblJlYWRUYWdGb3JtYXQodGFnSW5kZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrcy5vblN1Y2Nlc3MobWVkaWFUYWdSZWFkZXJzW2ldKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2tzLm9uRXJyb3Ioe1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0YWdGb3JtYXRcIixcbiAgICAgICAgICAgICAgXCJpbmZvXCI6IFwiTm8gc3VpdGFibGUgdGFnIHJlYWRlciBmb3VuZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGNhbGxiYWNrcy5vbkVycm9yXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9sb2FkVGFnSWRlbnRpZmllclJhbmdlcyhmaWxlUmVhZGVyLCB0YWdSZWFkZXJzQXRGaWxlU3RhcnQsIGxvYWRUYWdJZGVudGlmaWVyc0NhbGxiYWNrcyk7XG5cbiAgICAgIHRoaXMuX2xvYWRUYWdJZGVudGlmaWVyUmFuZ2VzKGZpbGVSZWFkZXIsIHRhZ1JlYWRlcnNBdEZpbGVFbmQsIGxvYWRUYWdJZGVudGlmaWVyc0NhbGxiYWNrcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9sb2FkVGFnSWRlbnRpZmllclJhbmdlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZFRhZ0lkZW50aWZpZXJSYW5nZXMoZmlsZVJlYWRlciwgdGFnUmVhZGVycywgY2FsbGJhY2tzKSB7XG4gICAgICBpZiAodGFnUmVhZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRm9yY2UgYXN5bmNcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFja3Mub25TdWNjZXNzLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnSWRlbnRpZmllclJhbmdlID0gW051bWJlci5NQVhfVkFMVUUsIDBdO1xuICAgICAgdmFyIGZpbGVTaXplID0gZmlsZVJlYWRlci5nZXRTaXplKCk7IC8vIENyZWF0ZSBhIHN1cGVyIHNldCBvZiBhbGwgcmFuZ2VzIHNvIHdlIGNhbiBsb2FkIHRoZW0gYWxsIGF0IG9uY2UuXG4gICAgICAvLyBNaWdodCBuZWVkIHRvIHJldGhpbmsgdGhpcyBhcHByb2FjaCBpZiB0aGVyZSBhcmUgdGFnIHJhbmdlcyB0b28gZmFyXG4gICAgICAvLyBhIHBhcnQgZnJvbSBlYWNoIG90aGVyLiBXZSdyZSBnb29kIGZvciBub3cgdGhvdWdoLlxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhZ1JlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJhbmdlID0gdGFnUmVhZGVyc1tpXS5nZXRUYWdJZGVudGlmaWVyQnl0ZVJhbmdlKCk7XG4gICAgICAgIHZhciBzdGFydCA9IHJhbmdlLm9mZnNldCA+PSAwID8gcmFuZ2Uub2Zmc2V0IDogcmFuZ2Uub2Zmc2V0ICsgZmlsZVNpemU7XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIHJhbmdlLmxlbmd0aCAtIDE7XG4gICAgICAgIHRhZ0lkZW50aWZpZXJSYW5nZVswXSA9IE1hdGgubWluKHN0YXJ0LCB0YWdJZGVudGlmaWVyUmFuZ2VbMF0pO1xuICAgICAgICB0YWdJZGVudGlmaWVyUmFuZ2VbMV0gPSBNYXRoLm1heChlbmQsIHRhZ0lkZW50aWZpZXJSYW5nZVsxXSk7XG4gICAgICB9XG5cbiAgICAgIGZpbGVSZWFkZXIubG9hZFJhbmdlKHRhZ0lkZW50aWZpZXJSYW5nZSwgY2FsbGJhY2tzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVhZGVyO1xufSgpO1xuXG52YXIgQ29uZmlnID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29uZmlnKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25maWcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbmZpZywgbnVsbCwgW3tcbiAgICBrZXk6IFwiYWRkRmlsZVJlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRGaWxlUmVhZGVyKGZpbGVSZWFkZXIpIHtcbiAgICAgIG1lZGlhRmlsZVJlYWRlcnMucHVzaChmaWxlUmVhZGVyKTtcbiAgICAgIHJldHVybiBDb25maWc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFRhZ1JlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUYWdSZWFkZXIodGFnUmVhZGVyKSB7XG4gICAgICBtZWRpYVRhZ1JlYWRlcnMucHVzaCh0YWdSZWFkZXIpO1xuICAgICAgcmV0dXJuIENvbmZpZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlVGFnUmVhZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVRhZ1JlYWRlcih0YWdSZWFkZXIpIHtcbiAgICAgIHZhciB0YWdSZWFkZXJJeCA9IG1lZGlhVGFnUmVhZGVycy5pbmRleE9mKHRhZ1JlYWRlcik7XG5cbiAgICAgIGlmICh0YWdSZWFkZXJJeCA+PSAwKSB7XG4gICAgICAgIG1lZGlhVGFnUmVhZGVycy5zcGxpY2UodGFnUmVhZGVySXgsIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29uZmlnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJFWFBFUklNRU5UQUxfYXZvaWRIZWFkUmVxdWVzdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gRVhQRVJJTUVOVEFMX2F2b2lkSGVhZFJlcXVlc3RzKCkge1xuICAgICAgWGhyRmlsZVJlYWRlci5zZXRDb25maWcoe1xuICAgICAgICBhdm9pZEhlYWRSZXF1ZXN0czogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldERpc2FsbG93ZWRYaHJIZWFkZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERpc2FsbG93ZWRYaHJIZWFkZXJzKGRpc2FsbG93ZWRYaHJIZWFkZXJzKSB7XG4gICAgICBYaHJGaWxlUmVhZGVyLnNldENvbmZpZyh7XG4gICAgICAgIGRpc2FsbG93ZWRYaHJIZWFkZXJzOiBkaXNhbGxvd2VkWGhySGVhZGVyc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFhoclRpbWVvdXRJblNlY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRYaHJUaW1lb3V0SW5TZWModGltZW91dEluU2VjKSB7XG4gICAgICBYaHJGaWxlUmVhZGVyLnNldENvbmZpZyh7XG4gICAgICAgIHRpbWVvdXRJblNlYzogdGltZW91dEluU2VjXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uZmlnO1xufSgpO1xuXG5Db25maWcuYWRkRmlsZVJlYWRlcihYaHJGaWxlUmVhZGVyKS5hZGRGaWxlUmVhZGVyKEJsb2JGaWxlUmVhZGVyKS5hZGRGaWxlUmVhZGVyKEFycmF5RmlsZVJlYWRlcikuYWRkVGFnUmVhZGVyKElEM3YyVGFnUmVhZGVyKS5hZGRUYWdSZWFkZXIoSUQzdjFUYWdSZWFkZXIpLmFkZFRhZ1JlYWRlcihNUDRUYWdSZWFkZXIpLmFkZFRhZ1JlYWRlcihGTEFDVGFnUmVhZGVyKTtcblxuaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmICFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIikge1xuICAgIHZhciBSZWFjdE5hdGl2ZUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL1JlYWN0TmF0aXZlRmlsZVJlYWRlcicpO1xuXG4gICAgQ29uZmlnLmFkZEZpbGVSZWFkZXIoUmVhY3ROYXRpdmVGaWxlUmVhZGVyKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgTm9kZUZpbGVSZWFkZXIgPSByZXF1aXJlKCcuL05vZGVGaWxlUmVhZGVyJyk7XG5cbiAgICBDb25maWcuYWRkRmlsZVJlYWRlcihOb2RlRmlsZVJlYWRlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicmVhZFwiOiByZWFkLFxuICBcIlJlYWRlclwiOiBSZWFkZXIsXG4gIFwiQ29uZmlnXCI6IENvbmZpZ1xufTtcblxufSx7XCIuL0FycmF5RmlsZVJlYWRlclwiOjMsXCIuL0Jsb2JGaWxlUmVhZGVyXCI6NCxcIi4vRkxBQ1RhZ1JlYWRlclwiOjYsXCIuL0lEM3YxVGFnUmVhZGVyXCI6NyxcIi4vSUQzdjJUYWdSZWFkZXJcIjo5LFwiLi9NUDRUYWdSZWFkZXJcIjoxMCxcIi4vTWVkaWFGaWxlUmVhZGVyXCI6MTEsXCIuL01lZGlhVGFnUmVhZGVyXCI6MTIsXCIuL05vZGVGaWxlUmVhZGVyXCI6MSxcIi4vUmVhY3ROYXRpdmVGaWxlUmVhZGVyXCI6MSxcIi4vWGhyRmlsZVJlYWRlclwiOjE0fV19LHt9LFsxNV0pKDE1KVxufSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuL21vZGVsL0dhbWVNYW5hZ2VyXCJcblxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xuXG5leHBvcnQge2dhbWVNYW5hZ2VyfTtcblxuIiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdGxhc1Nwcml0ZXNoZWV0IHtcblxuXHRhdGxhc0RhdGE7XG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XG5cblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBhdGxhc0RhdGEpIHtcblx0XHR0aGlzLmF0bGFzRGF0YSA9IGF0bGFzRGF0YTtcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBTQ0FMRV9NT0RFUy5ORUFSRVNUO1x0XHRcblx0fVxuXG5cdGdldFRleHR1cmUobmFtZTogc3RyaW5nKTogVGV4dHVyZSB7XG5cblx0XHRjb25zdCBwcm9wcyA9IHRoaXMuYXRsYXNEYXRhLml0ZW1zW25hbWVdO1xuXHRcdGlmIChwcm9wcyA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZmluZCB0ZXh0dXJlICcke25hbWV9JyBpbiBzcHJpdGVzaGVldGApO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUocHJvcHMueCwgcHJvcHMueSwgcHJvcHMud2lkdGgsIHByb3BzLmhlaWdodCkpO1xuXHR9XG5cblxufSIsImltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiXG5cbmNvbnN0IEJhbGFuY2luZyA9IHtcbiAgICB0cmVlOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEsXG4gICAgICAgIGNyb3BDb3VudDogNCxcbiAgICB9LFxuXG4gICAgd2FsbDoge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAzLFxuICAgIH0sXG5cbiAgICB0bnRQdW1wa2luOiB7XG4gICAgICAgIGV4cGxvc2lvbkRhbWFnZTogMS41LFxuICAgIH0sXG5cbiAgICBwbGF5ZXI6IHtcbiAgICAgICAgc3BlZWQ6IDQsXG4gICAgICAgIGhpdERhbWFnZTogMC4xLFxuICAgICAgICBrbm9ja2Rvd24gOiAyMDAwLCAvL1RpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgfSxcblxuICAgIHRvd2VyOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEwLFxuICAgICAgICBjb29sZG93bjogNiAvL0hvdyBvZnRlbiB0aGlzIE9iamVjdCB3aWdnbGVzIHVudGlsIGl0IGlzIGFnYWluIHZ1bG5lcmFibGVcbiAgICB9LFxuXG4gICAgdG9tYXRvUHJvamVjdGlsZToge1xuICAgICAgICBzcGVlZDogNyxcbiAgICAgICAgaGl0RGFtYWdlOiAwLjMsXG4gICAgICAgIGludmVudG9yeUxpbWl0IDogMTAsXG4gICAgfSxcblxuICAgIHRvbWF0b1BsYW50OiB7XG4gICAgICAgIGdyb3dTdGVwVGltZTogNTAwMCxcbiAgICAgICAgY3JvcHM6IFtcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5UT01BVE9fUFJPSkVDVElMRSwgY291bnQ6IDIgfSxcbiAgICAgICAgICAgIHsgdHlwZTogSVRFTS5UT01BVE9fUExBTlQsIGNvdW50OiA0IH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0U2VlZHM6IDUsXG4gICAgfSxcblxuICAgIHB1bXBraW5QbGFudDoge1xuICAgICAgICBncm93U3RlcFRpbWU6IDEwMDAwLFxuICAgICAgICBjcm9wczogW1xuICAgICAgICAgICAgeyB0eXBlOiBJVEVNLlROVF9QVU1QS0lOLCBjb3VudDogMiB9LFxuICAgICAgICAgICAgeyB0eXBlOiBJVEVNLlBVTVBLSU5fUExBTlQsIGNvdW50OiAzIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0U2VlZHM6IDUsXG4gICAgfSxcblxufVxuXG5leHBvcnQgeyBCYWxhbmNpbmcgfSIsImNvbnN0IENvbnN0YW50cyA9IHtcbiAgICBBU1NFVF9QQVRIOiBcImRhdGEvYXNzZXRzXCIsXG4gICAgTUFQX1BBVEg6IFwiZGF0YS9tYXBzXCIsXG4gICAgU09VTkRfUEFUSDogYGRhdGEvYXNzZXRzL3NvdW5kYCxcbiAgICBNVVNJQ19QQVRIOiBgZGF0YS9hc3NldHMvbXVzaWNgLFxufVxuXG5leHBvcnQgeyBDb25zdGFudHMgfSIsImltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucywgbG9hZGVyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEF0bGFzU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9BdGxhc1Nwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi4vdWkvdWlDb25zdGFudHNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL3VpL21lbnVCYXJcIjtcbmltcG9ydCBNdXNpY1BsYXllciBmcm9tICcuLi9tdXNpYy9NdXNpY1BsYXllcidcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5cblxuZXhwb3J0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgICBcbiAgICB0aWxlZFNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0O1xuICAgIGF0bGFzU3ByaXRlc2hlZXQ6IEF0bGFzU3ByaXRlc2hlZXQ7XG4gICAgXG4gICAgbWFwOiBUaWxlZE1hcDtcbiAgICBwaXhpQXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIG11c2ljUGxheWVyOk11c2ljUGxheWVyO1xuICAgIFxuICAgIHVwZGF0ZVNjaGVkdWxlcjogVXBkYXRlU2NoZWR1bGVyO1xuICAgIGtleWJvYXJkTWFuYWdlcjogS2V5Ym9hcmRNYW5hZ2VyO1xuICAgIG1lbnVCYXI6IE1lbnVCYXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vQ3JlYXRlIGEgUGl4aSBBcHBsaWNhdGlvblxuICAgICAgICBjbGFzcyBQaXhpT3B0aW9ucyBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uT3B0aW9ucyB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGgsIHB1YmxpYyBoZWlnaHQsIHB1YmxpYyB2aWV3KSB7IH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG4gICAgICAgIGNvbnN0IHBpeGlPcHRpb25zID0gbmV3IFBpeGlPcHRpb25zKHVpQ29uc3RhbnRzLnN0YWdlLndpZHRoLCB1aUNvbnN0YW50cy5zdGFnZS5oZWlnaHQsIGNhbnZhcyk7XG4gICAgICAgIHRoaXMucGl4aUFwcCA9IG5ldyBBcHBsaWNhdGlvbihwaXhpT3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvTG9hZCA9IFtcbiAgICAgICAgICAgIHtuYW1lOid0aWxlZFNwcml0ZXNoZWV0VGV4dHVyZScsIHVybDpgJHtDb25zdGFudHMuQVNTRVRfUEFUSH0vc3ByaXRlc2hlZXQucG5nYH0sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldFRleHR1cmUnLCB1cmw6YCR7Q29uc3RhbnRzLkFTU0VUX1BBVEh9L3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0LnBuZ2B9LFxuICAgICAgICAgICAge25hbWU6J2F0bGFzU3ByaXRlc2hlZXREYXRhJywgdXJsOmAke0NvbnN0YW50cy5BU1NFVF9QQVRIfS9zcHJpdGVzbWl0aF9zcHJpdGVzaGVldC5qc29uYH0sXG4gICAgICAgICAgICB7bmFtZTonbWFwRGF0YScsIHVybDpgJHtDb25zdGFudHMuTUFQX1BBVEh9L21hcDIuanNvbmB9LFxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICBsb2FkZXIuYWRkKHRvTG9hZCkubG9hZCh0aGlzLmxvYWRlckZpbmlzaGVkKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgbG9hZGVyRmluaXNoZWQgPSAoKT0+e1xuICAgICAgICBcbiAgICAgICAgdGhpcy5rZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGVyID0gbmV3IFVwZGF0ZVNjaGVkdWxlcigpO1xuXG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIgPSBuZXcgTXVzaWNQbGF5ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIikpO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKGAke0NvbnN0YW50cy5NVVNJQ19QQVRIfS9nb2dvZ28ubXAzYCk7XG4gICAgICAgIHRoaXMubXVzaWNQbGF5ZXIuYWRkTXVzaWMoYCR7Q29uc3RhbnRzLk1VU0lDX1BBVEh9L0xldHNfUmVzdC5tcDNgKTtcbiAgICAgICAgdGhpcy5tdXNpY1BsYXllci5hZGRNdXNpYyhgJHtDb25zdGFudHMuTVVTSUNfUEFUSH0vTGFfQ2FsYWhvcnJhLm1wM2ApO1xuICAgICAgICB0aGlzLm11c2ljUGxheWVyLmFkZE11c2ljKGAke0NvbnN0YW50cy5NVVNJQ19QQVRIfS9Ub3dlbF9EZWZlbmNlX0VuZGluZy5tcDNgKTtcbiAgICAgICAgLy90aGlzLm11c2ljUGxheWVyLnBsYXkoKTtcbiAgICAgICAgXG4gICAgICAgIC8vS2VubnkgU3ByaXRlc2hlZXQgc2VlIGRhdGEvbWFwcy9LZW5uZXkgUlBHIFRpbGVzLnRzeFxuICAgICAgICB0aGlzLnRpbGVkU3ByaXRlc2hlZXQgPSBuZXcgVGlsZWRTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMudGlsZWRTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgMSwgMTYsIDE2LCAzMSwgNTcpXG4gICAgICAgIC8vQXRsYXMgU3ByaXRlc2hlZXRcbiAgICAgICAgdGhpcy5hdGxhc1Nwcml0ZXNoZWV0ID0gbmV3IEF0bGFzU3ByaXRlc2hlZXQoUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXRUZXh0dXJlLnRleHR1cmUsIFBJWEkubG9hZGVyLnJlc291cmNlcy5hdGxhc1Nwcml0ZXNoZWV0RGF0YS5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vUmVnaXN0ZXIgVXBkYXRlIHNjaGVkdWxlclxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLmFkZCh0aGlzLnVwZGF0ZVNjaGVkdWxlci5kb1N0ZXApO1xuICAgICAgICBcbiAgICAgICAgLy9Mb2FkIE1hcFxuICAgICAgICB0aGlzLm1hcCA9IFRpbGVkTWFwLmxvYWRNYXAoUElYSS5sb2FkZXIucmVzb3VyY2VzLm1hcERhdGEuZGF0YSk7XG4gICAgICAgIFxuICAgICAgICAvL0Rpc3BsYXkgTWFwXG4gICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1hcCk7XG4gICAgICAgIFxuICAgICAgICAvL1NldCBQbGF5ZXIgQ29udHJvbHNcbiAgICAgICAgY29uc3QgcGxheWVycyA9IHRoaXMubWFwLnBsYXllcnM7XG4gICAgICAgIHBsYXllcnNbMF0uc2V0S2V5cyhcIndcIiwgXCJzXCIsIFwiYVwiLCBcImRcIiwgXCJjXCIsIFwieVwiLCBcInhcIik7XG4gICAgICAgIHBsYXllcnNbMF0uc2V0Q29sb3IoMHhDQ0VFQUEpO1xuICAgICAgICBwbGF5ZXJzWzFdLnNldEtleXMoXCJBcnJvd1VwXCIsIFwiQXJyb3dEb3duXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIm1cIiwgXCJiXCIsIFwiblwiKTtcbiAgICAgICAgcGxheWVyc1sxXS5zZXRDb2xvcigweENDQ0NGRik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9EcmF3IG1lbnVcbiAgICAgICAgdGhpcy5kcmF3TWVudUJhcihwbGF5ZXJzKTtcbiAgICAgICAgXG4gICAgICAgIC8vU3RhcnQgUGl4aSBBcHBcbiAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5zdGFydCgpO1xuICAgICAgICBcbiAgICAgICAgLy90aGlzLnRlc3QoKTtcblxuICAgIH1cblxuICAgIFxuICAgIGRyYXdNZW51QmFyKHBsYXllcnM6IFBsYXllcltdKSB7XG4gICAgICAgIHRoaXMubWVudUJhciA9IG5ldyBNZW51QmFyKHBsYXllcnMpO1xuICAgICAgICB0aGlzLnBpeGlBcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5tZW51QmFyKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgdGVzdCgpIHtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5UTlRfUFVNUEtJTiwxMDApO1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLlRPTUFUT19QUk9KRUNUSUxFLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uV0FMTCwxMDApO1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7XG4gICAgfVxuICAgIFxufVxuXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEhpdEV2ZW50IHtcblxuICAgIGluaXRpYXRvcjogUGxheWVyO1xuICAgIGRhbWFnZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaW5pdGlhdG9yOiBQbGF5ZXIsIGRhbWFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdG9yID0gaW5pdGlhdG9yO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblxuICAgIH1cblxufSIsImltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnkge1xuXG4gICAgdG9tYXRvX3Byb2plY3RpbGU6IG51bWJlciA9IDA7XG4gICAgdG50X3B1bXBraW46IG51bWJlciA9IDA7XG4gICAgdG9tYXRvX3BsYW50OiBudW1iZXIgPSBCYWxhbmNpbmcudG9tYXRvUGxhbnQuc3RhcnRTZWVkcztcbiAgICBwdW1wa2luX3BsYW50OiBudW1iZXIgPSBCYWxhbmNpbmcucHVtcGtpblBsYW50LnN0YXJ0U2VlZHM7XG4gICAgd2FsbDogbnVtYmVyID0gMDtcblxuICAgIGdldEl0ZW0oaXRlbVR5cGU6IElURU0pOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvbWF0b19wbGFudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcGxhbnQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHVtcGtpbl9wbGFudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdW1wa2luX3BsYW50LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b21hdG9fcHJvamVjdGlsZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcHJvamVjdGlsZS0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50bnRfcHVtcGtpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bnRfcHVtcGtpbi0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53YWxsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGwtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2l2ZUl0ZW0oaXRlbVR5cGU6IElURU0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdpdmUgJHtpdGVtVHlwZX0geCAke2NvdW50fWApO1xuICAgICAgICBzd2l0Y2ggKGl0ZW1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMudG9tYXRvX3Byb2plY3RpbGUgKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMudG50X3B1bXBraW4gKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy53YWxsICs9IGNvdW50OyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDogdGhpcy50b21hdG9fcGxhbnQgKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDogdGhpcy5wdW1wa2luX3BsYW50ICs9IGNvdW50OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJlbnVtIElURU0ge1xuICAgIFRPTUFUT19QTEFOVCA9IFwidG9tYXRvX3BsYW50XCIsXG4gICAgVE9NQVRPX1BST0pFQ1RJTEUgPSBcInRvbWF0b19wcm9qZWN0aWxlXCIsXG4gICAgUFVNUEtJTl9QTEFOVCA9IFwicHVtcGtpbl9wbGFudFwiLFxuICAgIFROVF9QVU1QS0lOID0gXCJ0bnRfcHVtcGtpblwiLFxuICAgIFdBTEwgPSBcIndhbGxcIixcbiAgICBIQU5EID0gXCJoYW5kXCIsXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkTWFuYWdlciB7XG5cbiAgICAga2V5VXBzID0ge307XG4gICAgIGtleURvd25zID0ge307XG4gICAgIEFOWV9LRVkgPSBcImFueV9rZXlcIjtcblxuICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgICBvbktleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleVVwcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5VXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlVcCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleURvd25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlEb3duc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5RG93biA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICByZWdpc3RlcktleShrZXksIG9uS2V5RG93biwgb25LZXlVcCwgaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlEb3duOiBvbktleURvd24gfTtcbiAgICAgICAgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleVVwOiBvbktleVVwIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXJLZXkoaWRlbnRpZmllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXTtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdO1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wIHtcbiAgICB0eXBlOiBJVEVNLFxuICAgIGNvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYW50IGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0aWMgZ3Jvd1N0YXRlczogbnVtYmVyID0gNTtcbiAgICBjcm9wczogQ3JvcFtdO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyb3coKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBncm93KCk7XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZ1bG5lcmFibGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IGhpdEV2ZW50LmluaXRpYXRvci5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xuICAgICAgICAvL0hhcnZlc3QgeW91cnNlbGZcbiAgICAgICAgZm9yIChjb25zdCBjcm9wIG9mIHRoaXMuY3JvcHMpIHtcbiAgICAgICAgICAgIGhpdEV2ZW50LmluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oY3JvcC50eXBlLCBjcm9wLmNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICAvL2dpdmUgdGhlIGluaXRpYXRvciB0aGUgaXRlbXNcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IFBvaW50LCBleHRyYXMsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFRvbWF0b1Byb2plY3RpbGUgfSBmcm9tICcuL1RvbWF0b1Byb2plY3RpbGUnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tICcuL0JhbGFuY2luZyc7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gJy4vSGl0RXZlbnQnO1xuaW1wb3J0IHsgSW52ZW50b3J5IH0gZnJvbSBcIi4vSW52ZW50b3J5XCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgZW51bSBESVJFQ1RJT04geyBVUCA9IFwidXBcIiwgUklHSFQgPSBcInJpZ2h0XCIsIERPV04gPSBcImRvd25cIiwgTEVGVCA9IFwibGVmdFwiLCBTVE9QID0gXCJzdG9wXCIgfTtcbmV4cG9ydCBpbnRlcmZhY2UgSGl0Ym94IHtcbiAgICBsZWZ0WDogbnVtYmVyO1xuICAgIHJpZ2h0WDogbnVtYmVyO1xuICAgIHVwcGVyWTogbnVtYmVyO1xuICAgIGxvd2VyWTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG4gICAgc3RhdGljIEhJVEJPWF9UT0xFUkFOQ0VfSE9SSVpPTlRBTCA9IDEwO1xuICAgIHN0YXRpYyBISVRCT1hfVE9MRVJBTkNFX1RPUCA9IDEwO1xuICAgIHN0YXRpYyBkYW1hZ2VTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vYXV0c2NoLm1wM2ApO1xuXG4gICAgcGxheWVySWQ6IG51bWJlcjtcbiAgICAvL0EgaGV4IHZhbHVlIG9mIGEgY29sb3IgYWxsIHBsYXllcidzIHNwcml0ZXMgYXJlIHRpbnRlZCB3aXRoXG4gICAgY29sb3I6IG51bWJlciA9IDB4RkZGRkZGO1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBzcHJpdGU6IGV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBhbmltYXRpb25zO1xuICAgIHZ4OiBudW1iZXI7XG4gICAgdnk6IG51bWJlcjtcblxuICAgIC8vUGxheWVyIGlnbm9yZXMgZG9TdGVwLCBvbkFjdGlvbiBhbmQgb25IaXQgRXZlbnRzIGlmIHN0dW5uZWRcbiAgICBzdHVubmVkOiBib29sZWFuO1xuXG4gICAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG5cbiAgICBwbGFjZU1vZGU6IElURU07XG4gICAgbGFzdEtleTogc3RyaW5nO1xuICAgIC8qKiBTYXZlcyB0aGUgY3VycmVudCBkaXJlY3Rpb24gKFNUT1Agd2lsbCBub3QgYmUgc2F2ZWQgaGVyZSwgaW4gdGhpcyBjYXNlIHRoZSB2YWx1ZSBpcyB0aGUgbGFzdCBkaXJlY3Rpb24gYmVmb3JlIFNUT1ApICovXG4gICAgY3VycmVudERpcmVjdGlvbjogRElSRUNUSU9OO1xuXG5cbiAgICB1cEtleTogc3RyaW5nO1xuICAgIGRvd25LZXk6IHN0cmluZztcbiAgICBsZWZ0S2V5OiBzdHJpbmc7XG4gICAgcmlnaHRLZXk6IHN0cmluZztcbiAgICBhY3Rpb25LZXk6IHN0cmluZztcbiAgICBzZWxlY3RLZXk6IHN0cmluZztcbiAgICBwbGFjZUtleTogc3RyaW5nO1xuICAgIGxhc3RUaW50ZWRUaWxlOiBUaWxlO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1hcDogVGlsZWRNYXAsIHBsYXllcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuICAgICAgICB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BMQU5UO1xuXG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zLndhbGtbRElSRUNUSU9OLkRPV05dKTtcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IERJUkVDVElPTi5ET1dOO1xuICAgICAgICB0aGlzLnNwcml0ZS54ID0geDtcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBQbGF5ZXIuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmltYXRpb25TcGVlZCA9IDAuMTM7XG4gICAgICAgIHRoaXMuc3ByaXRlLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuXG4gICAgICAgIC8vcmVnaXN0ZXIga2V5IGV2ZW50c1xuICAgICAgICBnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIucmVnaXN0ZXJLZXkoZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLkFOWV9LRVksIHRoaXMua2V5RG93biwgdGhpcy5rZXlVcCwgXCJwbGF5ZXJcIiArIHBsYXllcklkKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKFwicGxheWVyXCIgKyBwbGF5ZXJJZCwgdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgZ2V0SGl0Ym94KCk6IEhpdGJveCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0WDogdGhpcy5zcHJpdGUueCArIFBsYXllci5ISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwsXG4gICAgICAgICAgICByaWdodFg6IHRoaXMuc3ByaXRlLnggKyB0aGlzLnNwcml0ZS53aWR0aCAtIFBsYXllci5ISVRCT1hfVE9MRVJBTkNFX0hPUklaT05UQUwsXG4gICAgICAgICAgICB1cHBlclk6IHRoaXMuc3ByaXRlLnkgKyBQbGF5ZXIuSElUQk9YX1RPTEVSQU5DRV9UT1AsXG4gICAgICAgICAgICBsb3dlclk6IHRoaXMuc3ByaXRlLnkgKyB0aGlzLnNwcml0ZS5oZWlnaHRcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIGxvYWRBbmltYXRpb25zKCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xuICAgICAgICAgICAgd2Fsazoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1dDoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJTdGF0ZU5hbWUgaW4gYW5pbWF0aW9uc1tzdGF0ZU5hbWVdKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGBwbGF5ZXJfJHtzdGF0ZU5hbWV9XyR7c3ViU3RhdGVOYW1lfV8ke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGFjZU1vZGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbGFjZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE5UX1BVTVBLSU47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BMQU5UOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5XQUxMOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uSEFORDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uSEFORDogdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlBVTVBLSU5fUExBTlQ7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGFuZ2VkIFBsYWNlTW9kZS4gTmV3IG1vZGUgaXM6ICR7dGhpcy5wbGFjZU1vZGV9YCk7XG4gICAgfVxuXG4gICAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbjogRElSRUNUSU9OKSB7XG4gICAgICAgIGlmICh0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIC8vUGxheWVyIGlzIHN0dW5uZWQgYW5kIGNhbid0IGNoYW5nZSBpdCdzIGRpcmVjdGlvblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBESVJFQ1RJT04uU1RPUCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZXMgPSB0aGlzLmFuaW1hdGlvbnMud2Fsa1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXVt0aGlzLmN1cnJlbnREaXJlY3Rpb25dO1xuXG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKVxuXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gZm9yd2FyZHNcbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiBmcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vV2FpdCBhIG1vbWVudFxuICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg4MCk7XG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBiYWNrd2FyZHNcbiAgICAgICAgZm9yIChsZXQgaSA9IGZyYW1lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IGZyYW1lc1tpXTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9SZXN0b3JlIGxhc3QgZGlyZWN0aW9uJ3MgdGV4dHVyZVxuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24odGhpcy5jdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHNldEtleXModXBLZXksIGRvd25LZXksIGxlZnRLZXksIHJpZ2h0S2V5LCBhY3Rpb25LZXksIHNlbGVjdEtleSwgcGxhY2VLZXkpIHtcbiAgICAgICAgdGhpcy51cEtleSA9IHVwS2V5O1xuICAgICAgICB0aGlzLmRvd25LZXkgPSBkb3duS2V5O1xuICAgICAgICB0aGlzLmxlZnRLZXkgPSBsZWZ0S2V5O1xuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gcmlnaHRLZXk7XG4gICAgICAgIHRoaXMuYWN0aW9uS2V5ID0gYWN0aW9uS2V5O1xuICAgICAgICB0aGlzLnNlbGVjdEtleSA9IHNlbGVjdEtleTtcbiAgICAgICAgdGhpcy5wbGFjZUtleSA9IHBsYWNlS2V5O1xuICAgIH1cblxuICAgIHNldENvbG9yKGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNwcml0ZS50aW50ID0gY29sb3I7XG4gICAgfVxuXG4gICAga2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9IHRoaXMubGFzdEtleSAmJiAhdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RLZXkgPSBldmVudC5rZXk7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy51cEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlVQKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5ET1dOKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IDEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMubGVmdEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLkxFRlQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gLTEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMucmlnaHRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5SSUdIVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAxICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnBsYWNlS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGxhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNlbGVjdEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hQbGFjZU1vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZG9TdGVwID0gKGRlbHRhKTogdm9pZCA9PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcblxuICAgICAgICAgICAgY29uc3QgaGl0Ym94ID0gdGhpcy5nZXRIaXRib3goKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBYID0gdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICAgICAgY29uc3Qgc3RlcFkgPSB0aGlzLnZ5ICogZGVsdGE7XG4gICAgICAgICAgICBjb25zdCB0aWxlV2lkdGggPSB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHRpbGVIZWlnaHQgPSB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllciBpZiBoZSB3b3VsZCBkbyBhIHN0ZXAgaW4gZGlyZWN0aW9uIChzdGVwWHxzdGVwWSlcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigoaGl0Ym94LmxlZnRYICsgc3RlcFgpIC8gdGlsZVdpZHRoKSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigoaGl0Ym94LnJpZ2h0WCArIHN0ZXBYKSAvIHRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigoaGl0Ym94LnVwcGVyWSArIHN0ZXBZKSAvIHRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChoaXRib3gubG93ZXJZICsgc3RlcFkpIC8gdGlsZUhlaWdodClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vQ2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoaXMgbmV3IHBvc2l0aW9ucyB3b3VsZCBiZSBpbiBhIHNvbGlkIHRpbGUgb3Igb3V0IG9mIHRoZSBtYXBcbiAgICAgICAgICAgIGxldCBibG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggPSB4UmFuZ2UuZnJvbTsgeCA8PSB4UmFuZ2UudG87IHgrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSB5UmFuZ2UuZnJvbTsgeSA8PSB5UmFuZ2UudG87IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXAuZ2V0VGlsZSh4LCB5KSA9PSB1bmRlZmluZWQgfHwgKHRoaXMubWFwLmdldFRpbGUoeCwgeSkudGlsZU9iamVjdCAmJiB0aGlzLm1hcC5nZXRUaWxlKHgsIHkpLnRpbGVPYmplY3Quc29saWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJsb2NrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS54ICs9IHN0ZXBYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgKz0gc3RlcFk7XG4gICAgICAgICAgICAgICAgLy9UaW50IHRoZSBuZXcgY3VycmVudFRpbGVcbiAgICAgICAgICAgICAgICB0aGlzLnRpbnRDdXJyZW50VGlsZSgpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGFjdGl2ZSBUaWxlLlxuICAgICogVGhpcyBpcyBhbHdheXMgdGhlIHRpbGUgdGhlIHBsYXllcidzIHN0YW5kaW5nIG9uLlxuICAgICovXG4gICAgZ2V0Q3VycmVudFRpbGUoKTogVGlsZSB7XG4gICAgICAgIGxldCBncmlkWCA9IE1hdGguZmxvb3IoKHRoaXMuc3ByaXRlLnggKyB0aGlzLnNwcml0ZS53aWR0aCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpO1xuICAgICAgICBsZXQgZ3JpZFkgPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMikgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRUaWxlKGdyaWRYLCBncmlkWSk7XG4gICAgfVxuXG4gICAgdGludEN1cnJlbnRUaWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0VGludGVkVGlsZSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGludGVkVGlsZS5zZXRUaW50KDB4RkZGRkZGKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdCA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgaWYgKGN0KSB7XG4gICAgICAgICAgICBjdC5zZXRUaW50KHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUgPSBjdDtcblxuICAgIH1cblxuICAgIG9uUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcblxuICAgICAgICAgICAgLy9DcmVhdGUgaGl0RXZlbnQgaWYgcGxhY2VNb2RlIGlzIEhBTkRcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlTW9kZSA9PSBJVEVNLkhBTkQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vbkhpdChuZXcgSGl0RXZlbnQodGhpcywgQmFsYW5jaW5nLnBsYXllci5oaXREYW1hZ2UpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQ3JlYXRlIFRvbWF0byBpZiBuZWNjZXNzYXJ5XG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5UT01BVE9fUFJPSkVDVElMRSAmJiB0aGlzLmludmVudG9yeS5nZXRJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUpKSB7XG4gICAgICAgICAgICAgICAgbmV3IFRvbWF0b1Byb2plY3RpbGUodGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgdGhpcy5jdXJyZW50RGlyZWN0aW9uLCB0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vRWxzZSBwbGFjZSB0aWxlT2JqZWN0IGlmIHJlc3NvdXJjZXMgYXJlIGluIGludmVudG9yeVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pbnZlbnRvcnkuZ2V0SXRlbSh0aGlzLnBsYWNlTW9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJwdXRcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25QbGFjZSh0aGlzLnBsYWNlTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpdCA9IGFzeW5jIChoaXRFdmVudDogSGl0RXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3R1bm5lZCA9IHRydWU7XG4gICAgICAgICAgICBQbGF5ZXIuZGFtYWdlU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdChCYWxhbmNpbmcucGxheWVyLmtub2NrZG93bik7XG4gICAgICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHdpZ2dsZSh0aW1lcykge1xuXG4gICAgICAgIC8vUHJvbG9nXG4gICAgICAgIGNvbnN0IHJhZGlhbnQgPSAwLjE7XG4gICAgICAgIHRoaXMuc3ByaXRlLnggKz0gdGhpcy5zcHJpdGUud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS55ICs9IHRoaXMuc3ByaXRlLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gKz0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucm90YXRpb24gKz0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcblxuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMuc3ByaXRlLnggLT0gdGhpcy5zcHJpdGUud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnNwcml0ZS55IC09IHRoaXMuc3ByaXRlLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBQdW1wa2luUGxhbnQgZXh0ZW5kcyBQbGFudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwicHVtcGtpbl9wbGFudF8wXCIpLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLmNyb3BzID0gQmFsYW5jaW5nLnB1bXBraW5QbGFudC5jcm9wcztcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgUHVtcGtpblBsYW50Lmdyb3dTdGF0ZXM7IGdyb3dTdGVwKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wdW1wa2luUGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShgcHVtcGtpbl9wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0O1xuXG4gICAgICAgIC8vRHJhdyBmcmFtZVxuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5saW5lU3R5bGUoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCB0aGlzLmJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvcmRlclJlY3RhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvL0NsZWFyIGxhc3QgcHJvZ3Jlc3MgU2hhcGVcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NTaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDAuMSkgeyAvL0RyYXcgdG9vIHNtYWxsIHByb2dyZXNzIGxvb2tzIHVnbHlcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gNjQgKiB0aGlzLnByb2dyZXNzIC0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrID0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMjtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZSh0aGljaywgdGhpcy5wcm9ncmVzc0NvbG9yKVxuICAgICAgICAgICAgICAgIC5tb3ZlVG8oU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTIC0gMSwgdGhpY2sgLSAxKVxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHNldCBwcm9ncmVzcyBsb3dlciB0aGFuIDAgb3IgaGlnaGVyIHRoYW4gMVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVG50UHVtcGtpbiB9IGZyb20gXCIuL1RudFB1bXBraW5cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFRvbWF0b1BsYW50IH0gZnJvbSBcIi4vVG9tYXRvUGxhbnRcIjtcbmltcG9ydCB7IFB1bXBraW5QbGFudCB9IGZyb20gXCIuL1B1bXBraW5QbGFudFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgdGlsZU9iamVjdDogVGlsZU9iamVjdDtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgbWFwOiBUaWxlZE1hcCkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5ncmlkWCA9IGdyaWRYO1xuICAgICAgICB0aGlzLmdyaWRZID0gZ3JpZFk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAvL2NhbGN1bGF0ZSBvd24gcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IGdyaWRYICogbWFwLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QgPSBuZXdUaWxlT2JqZWN0O1xuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgICAgIHRoaXMubWFwLnRpbGVPYmplY3RDb250YWluZXIuYWRkQ2hpbGQobmV3VGlsZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBhZGQgVGlsZU9iamVjdCB0byBhIFRpbGUgdGhhdCBhbGxyZWFkeSBoYXMgYW4gVGlsZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IaXQoaGl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblBsYWNlKG9iamVjdFR5cGU6IElURU0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBUb21hdG9QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBQdW1wa2luUGxhbnQodGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRudFB1bXBraW4odGhpcyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOlxuICAgICAgICAgICAgICAgICAgICBuZXcgV2FsbCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0ZyZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVPYmplY3QgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBwbGF5ZXIgdGhhdCBvY2N1cGllcyB0aGlzIHRpbGUuXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyB0aWxlIGlzIG5vdCBvY2N1cGllZFxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeSgpOiBQbGF5ZXIge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB0aGlzLm1hcC5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKHBsYXllci5zcHJpdGUueCArIHBsYXllci5zcHJpdGUud2lkdGgpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IocGxheWVyLnNwcml0ZS55IC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS55ICsgcGxheWVyLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFggPj0geFJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWCA8PSB4UmFuZ2UudG8gJiYgdGhpcy5ncmlkWSA+PSB5UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRZIDw9IHlSYW5nZS50bykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhbnkgcGxheWVyIG9uIHRoaXMgdGlsZS5cbiAgICAgKi9cbiAgICBpc09jY3VwaWVkQnlBbnlQbGF5ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuaXNPY2N1cGllZEJ5KCk7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib2NjdXBpZWQgYnkgcGxheWVyXCIgKyBwbGF5ZXIucGxheWVySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW50KGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0LnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaWxlT2JqZWN0IGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBvbkhpdFNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9oaXQubXAzYCk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9ibG9iLm1wM2ApO1xuXG4gICAgbW90aGVyOiBUaWxlO1xuICAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdnVsbmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUsIHNvbGlkPzogYm9vbGVhbikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG5cbiAgICAgICAgdGhpcy5tb3RoZXIuYWRkVGlsZU9iamVjdCh0aGlzKTtcblxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5tb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcblxuICAgICAgICAvL1NldCB0aW1lciBmb3Igc29saWQgdGlsZXNcbiAgICAgICAgaWYgKHNvbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEFBQUFBQTtcbiAgICAgICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3Rlcihgd2FpdF90b19iZWNvbWVfc29saWRfJHt0aGlzLm1vdGhlci5ncmlkWH1fJHt0aGlzLm1vdGhlci5ncmlkWX1gLCB0aGlzLnRyeVRvQmVjb21lU29saWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJ5VG9CZWNvbWVTb2xpZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdGhlci5pc09jY3VwaWVkQnlBbnlQbGF5ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25IaXQoaGl0ZXZlbnQ6IEhpdEV2ZW50KSB7IH07XG5cblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5tb3RoZXIudGlsZU9iamVjdDtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfTtcblxuICAgIGFzeW5jIHdpZ2dsZSh0aW1lcykge1xuXG4gICAgICAgIC8vUHJvbG9nXG4gICAgICAgIGNvbnN0IHJhZGlhbnQgPSAwLjA3O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XG5cbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLnggLT0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxuXG4gICAgYXN5bmMgc2hyaW5rKCkge1xuXG4gICAgICAgIC8vUHJvbG9nICAgICAgICBcbiAgICAgICAgY29uc3Qgc2NhbGVEaWZmID0gMC4yO1xuICAgICAgICAvL0NoYW5nZSBhbmNob3JcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUsIDEpO1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGhpcy5zY2FsZS54ID4gMCAmJiB0aGlzLnNjYWxlLnkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggLT0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgdGhpcy5zY2FsZS55IC09IHNjYWxlRGlmZjtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxuICAgIGFzeW5jIGJsaW5rKHRpbWVzKSB7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIC8vR2l2ZSB0aGUgdGlsZW9iamVjdCBhIGdyZWVuIHRpbnRcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZBQUFBO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMjAwKTtcbiAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSB0aW50XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDIwMCk7XG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG5cblxuXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkTWFwIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHN0YXRpYyBNQVBfWk9PTSA9IDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcblxuICAgIHBsYXllcnM6IFBsYXllcltdO1xuICAgIGlzUGF1c2VkOiBib29sZWFuO1xuICAgIGZpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgZmluYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqSG9sZCBhbGwgVGlsZXMuIFVzYWdlOiB0aWxlc1t5XVt4XSAqL1xuICAgIHByaXZhdGUgdGlsZXM6IFRpbGVbXVtdO1xuICAgIGdyaWRXaWR0aDogbnVtYmVyO1xuICAgIGdyaWRIZWlnaHQ6IG51bWJlcjtcbiAgICB0aWxlQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcGxheWVyQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgdGlsZU9iamVjdENvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIGV4dHJhU3R1ZmZDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2V0TWFwT2JqZWN0UHJvcGVydHkobWFwT2JqZWN0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL0xvYWRzIHRoZSBtYXAgd2l0aCBzcHJpdGVzaGVldC4gTGFzdCBwYXJhbWV0ZXIgaXMgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHBhcnNpbmcgdGhlIG1hcCB3aXRoIHRoZSBuZXcgcGFyc2VkIG1hcCBhcyBwYXJhbWV0ZXJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBEYXRhKSB7XG5cbiAgICAgICAgY29uc3QgbWFwID0gbmV3IFRpbGVkTWFwKCk7XG4gICAgICAgIGNvbnN0IHRpbGVkU3ByaXRlc2hlZXQgPSBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0O1xuICAgICAgICBjb25zdCBhdGxhc1Nwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldDtcblxuICAgICAgICBsZXQgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFNQUklURV9TQ0FMRS54O1xuICAgICAgICBtYXAuZmluYWxUaWxlSGVpZ2h0ID0gdGlsZWRTcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogU1BSSVRFX1NDQUxFLnk7XG5cbiAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XG5cbiAgICAgICAgICAgICAgICBtYXAuZ3JpZFdpZHRoID0gdGwud2lkdGg7XG4gICAgICAgICAgICAgICAgbWFwLmdyaWRIZWlnaHQgPSB0bC5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvL0luaXQgbWFwJ3MgdGlsZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC50aWxlc1tpXSA9IG5ldyBBcnJheShtYXAuZ3JpZFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFRpbGVzIGZvciBlYWNoIHRpbGUgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRsLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByb3cgKiB0bC53aWR0aCArIGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bC5kYXRhW2luZGV4XSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IG5ldyBUaWxlKHRleHR1cmUsIGNvbHVtbiwgcm93LCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0l0ZXJhdGUgdGhyb3VnaCBPYmplY3QgTGF5ZXJzXG4gICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcblxuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG5cblxuICAgICAgICAgICAgICAgIC8vQWRkIGFsbCBwbGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICogICAgICBfX19fXyAgXyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fIFxcfCB8ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8IHxfXykgfCB8IF9fIF8gXyAgIF8gIF9fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfX18vfCB8LyBfYCB8IHwgfCB8LyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8ICAgIHwgfCAoX3wgfCB8X3wgfCAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfF98ICAgIHxffFxcX18sX3xcXF9fLCB8XFxfX198X3wgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBfXy8gfCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgIHxfX18vICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gKE1hdGgucm91bmQoY28ueSkgLSBjby5oZWlnaHQpICogU1BSSVRFX1NDQUxFLnk7IC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBTcHJpdGVzIGZvciBlYWNoIG9iamVjdCB0byB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwvIF8gXFwgXFwgL1xcIC8gLyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInRvd2VyXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwib3duZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG93ZXIgPSBuZXcgVG93ZXIodGV4dHVyZSwgbW90aGVyLCBvd25lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1Rvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8XyBfXyBfX18gIF9fXyBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAnX18vIF8gXFwvIF8gXFxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCB8IHwgIF9fLyAgX18vXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8X3xffCAgXFxfX198XFxfX198XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ0cmVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgX18gICAgICAgICAgX18gICBfIF8gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICBcXCBcXCAgICAgICAgLyAvICB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIFxcIFxcICAvXFwgIC8gL18gX3wgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgIFxcIFxcLyAgXFwvIC8gX2AgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIFxcICAvXFwgIC8gKF98IHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgXFwvICBcXC8gXFxfXyxffF98X3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ3YWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ldyBXYWxsKG1vdGhlcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cblxuXG5cbiAgICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAgICAgLy9wbGF5ZXIuc3ByaXRlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllcnNbcGxheWVyLnBsYXllcklkXSA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQocGxheWVyLnNwcml0ZSk7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdCh0aWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIHRpbGVPYmplY3Quc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHRpbGVPYmplY3QpO1xuICAgIH1cblxuICAgIGFkZFRpbGUodGlsZTogVGlsZSkge1xuICAgICAgICB0aWxlLnggPSB0aWxlLmdyaWRYICogZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC50aWxlV2lkdGggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgdGlsZS55ID0gdGlsZS5ncmlkWSAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55O1xuICAgICAgICB0aWxlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuXG4gICAgICAgIHRoaXMudGlsZXNbdGlsZS5ncmlkWV1bdGlsZS5ncmlkWF0gPSB0aWxlO1xuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIuYWRkQ2hpbGQodGlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGlsZSBhdCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgeCBhbmQgeSBncmlkIGNvb3JkaW5hdGVzXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gdGlsZSBhdCB0aGlzIGNvb3JkaW5hdGVzXG4gICAgICogQHBhcmFtIGdyaWRYIHgtY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSBncmlkWSB5LWNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBnZXRUaWxlKGdyaWRYOm51bWJlcixncmlkWTpudW1iZXIpOlRpbGV7XG4gICAgICAgIGlmKHRoaXMudGlsZXNbZ3JpZFldKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2dyaWRZXVtncmlkWF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdDogUmVjdGFuZ2xlKSB7XG5cbiAgICAgICAgLy9hbiBPYmplY3QgY2FuIGJlIHBsYWNlZCBcImJldHdlZW5cIiB0aWxlcyBpbiB0aWxlZCBtYXAgZWRpdG9yLiBCdXQgZXZudHMgY2FuIGJlIHRyaWdnZXJlZCBvbmx5IGZyb20gd2hvbGUgdGlsZXMuIFNvIHRoZSBvYmVqY2N0cyBwb3NpdGlvbiBpcyBtYXBwZWQgdG8gdGhlIG5lYXJlc3QgVGlsZVxuXG4gICAgICAgIGxldCBvcmlnaW5hbFggPSBtYXBPYmplY3QueCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICBsZXQgeFRpbGVzID0gb3JpZ2luYWxYIC8gdGhpcy5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgeFRpbGVzID0gTWF0aC5yb3VuZCh4VGlsZXMpO1xuXG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSAobWFwT2JqZWN0LnkgLSBtYXBPYmplY3QuaGVpZ2h0KSAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55OyAgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IHlUaWxlcyA9IG9yaWdpbmFsWSAvIHRoaXMuZmluYWxUaWxlSGVpZ2h0O1xuICAgICAgICB5VGlsZXMgPSBNYXRoLnJvdW5kKHlUaWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZ3JpZFg6IHhUaWxlcywgZ3JpZFk6IHlUaWxlcyB9O1xuICAgIH1cblxuICAgIGdldFRpbGVOZWFyZXN0VG8obWFwT2JqZWN0OiBSZWN0YW5nbGUpOiBUaWxlIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlc1twb3MuZ3JpZFldW3Bvcy5ncmlkWF07XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZFNwcml0ZXNoZWV0e1xuXG5cdGJvcmRlcjogbnVtYmVyO1xuXHR0aWxlSGVpZ2h0OiBudW1iZXI7XG5cdHRpbGVXaWR0aDogbnVtYmVyO1xuXHRyb3dzOiBudW1iZXI7XG5cdGNvbHVtbnM6IG51bWJlcjtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblx0dGV4dHVyZXM6IFRleHR1cmVbXTtcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLGJvcmRlcix0aWxlV2lkdGgsdGlsZUhlaWdodCxyb3dzLGNvbHVtbnMpe1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHRcdHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG5cdFx0dGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XG5cdFx0dGhpcy5yb3dzID0gcm93cztcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdO1xuXHR9XG5cblx0Z2V0VGV4dHVyZShnaWQ6bnVtYmVyKTpUZXh0dXJlICB7XG5cdFx0Ly9DaGVjayB3ZXRoZXIgdGV4dHVyZXMgd2FzIGFsbHJlYWR5IGZyYW1lZCBmb3JtIHNwcml0ZXNoZWV0XG5cdFx0aWYgKHRoaXMudGV4dHVyZXNbZ2lkXSkge1xuXHRcdCAgcmV0dXJuIHRoaXMudGV4dHVyZXNbZ2lkXTtcblx0XHR9IGVsc2Uge1xuXHRcdCAgLy9DYWxjdWxhdGUgcm93IGFuZCBjb2x1bW4gZnJvbSBnaWRcblx0XHQgIGxldCByb3c6bnVtYmVyID0gTWF0aC5mbG9vcigoZ2lkIC0gMSkgLyB0aGlzLmNvbHVtbnMpO1xuXHRcdCAgbGV0IGNvbHVtbjpudW1iZXIgPSAoZ2lkIC0gMSkgJSB0aGlzLmNvbHVtbnM7XG5cdFxuXHRcdCAgbGV0IHRpbGVXaWR0aDpudW1iZXIgPSB0aGlzLnRpbGVXaWR0aDtcblx0XHQgIGxldCB0aWxlSGVpZ2h0Om51bWJlciA9IHRoaXMudGlsZUhlaWdodDtcblx0XG5cdFx0ICBsZXQgeDpudW1iZXIgPSBjb2x1bW4gKiB0aWxlV2lkdGggKyBjb2x1bW4gKiB0aGlzLmJvcmRlcjtcblx0XHQgIGxldCB5Om51bWJlciA9IHJvdyAqIHRpbGVIZWlnaHQgKyByb3cgKiB0aGlzLmJvcmRlcjtcblx0XG5cdFx0ICBsZXQgdDpUZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHgsIHksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkpO1xuXHRcdCAgLy9TYXZlIFRleHR1cmUgaW4gY2FjaGUgYXJyYXlcblx0XHQgIHRoaXMudGV4dHVyZXNbZ2lkXSA9IHQ7XG5cdFx0ICByZXR1cm4gdDtcblx0XHR9XG5cdCAgfVxuXHRcblxufSIsImltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xuXG4gICAgc3RhdGljIHRpY2tTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0va2xpY2subXAzYCk7XG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbyhgJHtDb25zdGFudHMuU09VTkRfUEFUSH0vZXhwbG9kZS5tcDNgKTtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSAmJiBoaXRFdmVudC5kYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgVG50UHVtcGtpbi50aWNrU291bmQucGxheSgpO1xuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGluayg0KTtcbiAgICAgICAgICAgIC8vVHJpZ2dlciBUaWxlT2JqZWN0cyBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXNBcm91bmQpe1xuICAgICAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KGhpdEV2ZW50LmluaXRpYXRvcixCYWxhbmNpbmcudG50UHVtcGtpbi5leHBsb3Npb25EYW1hZ2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9FeHBsb2RlISEhXG4gICAgICAgICAgICBUbnRQdW1wa2luLmV4cGxvZGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXlBbmltYXRpb24oXCJleHBsb2RlXCIpO1xuICAgICAgICAgICAgLy9EZXN0cm95IHB1bXBraW4gOi0oXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIGV4cGxvZGU6IDEyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHB1bXBraW5fJHtzdGF0ZU5hbWV9XyR7aX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0aW9uc1tzdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXG4gICAgICogVGhpcyBhcnJheSBob2xkcyBvbmx5IGV4aXN0aW5nIHRpbGVzIGFuZCBubyB1bmRlZmluZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcbiAgICAgICAgY29uc3QgbXlYID0gdGhpcy5tb3RoZXIuZ3JpZFg7XG4gICAgICAgIGNvbnN0IG15WSA9IHRoaXMubW90aGVyLmdyaWRZO1xuXG4gICAgICAgIGxldCB0aWxlczogVGlsZVtdID0gW107XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYICsgMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgKyAxKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgLSAxKSk7XG5cbiAgICAgICAgLy9GaWx0ZXIgbm90IGV4aXN0aW5nIHRpbGVzXG4gICAgICAgIGxldCB0b1JldHVybjpUaWxlW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xuICAgICAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoMSwwKSk7XG4gICAgICAgIG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDIsMCkpO1xuICAgICAgICBwLm9uSGl0KG5ldyBIaXRFdmVudChnYW1lTWFuYWdlci5tYXAucGxheWVyc1swXSwgMSkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUGxhbnQgZXh0ZW5kcyBQbGFudHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwidG9tYXRvX3BsYW50XzBcIiksbW90aGVyKTtcbiAgICAgICAgdGhpcy5jcm9wcyA9IEJhbGFuY2luZy50b21hdG9QbGFudC5jcm9wcztcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgVG9tYXRvUGxhbnQuZ3Jvd1N0YXRlczsgZ3Jvd1N0ZXArKykge1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnRvbWF0b1BsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQb2ludCwgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gJy4vQmFsYW5jaW5nJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vQ29uc3RhbnRzJztcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSAnLi9IaXRFdmVudCc7XG5pbXBvcnQgeyBESVJFQ1RJT04sIFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gJy4vVGlsZU9iamVjdCc7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tICcuL1VwZGF0ZVNjaGVkdWxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9Qcm9qZWN0aWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuICAgIHN0YXRpYyB0aHJvd1NvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9zbmFwLm1wM2ApO1xuICAgIHN0YXRpYyBzbWFzaFNvdW5kID0gbmV3IEF1ZGlvKGAke0NvbnN0YW50cy5TT1VORF9QQVRIfS9zbWFzaC5tcDNgKTtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG93bmVyOiBQbGF5ZXI7XG4gICAgcHJpdmF0ZSBpbml0aWF0b3IgOiBQbGF5ZXIgfCBUaWxlT2JqZWN0O1xuICAgIHByaXZhdGUgdng6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB2eTogbnVtYmVyID0gMDtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW10gPSBbXTtcblxuXG4gICAgc3RhdGljIGdldE5ld0lkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdG9tYXRvX3Byb2plY3RpbGVfJHtUb21hdG9Qcm9qZWN0aWxlLmlkQ291bnRlcisrfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHggeC1jb29yZGluYXRlIHRvIHN0YXJ0XG4gICAgICogQHBhcmFtIHkgeS1jb29yZGluYXRlIHRvIHN0YXJ0XG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBkaXJlY3Rpb24gdG8gZmx5XG4gICAgICogQHBhcmFtIGluaXRpYXRvciB0aGUgcGxheWVyIG9yIG9iamVjdCB0aGF0IGNyZWF0ZXMgdGhpcyB0b21hdGUgKHRoaXMgcGxheWVyIHdpbGwgYmUgaW11biB0byB0aGlzIHRvbWF0bylcbiAgICAgKiBAcGFyYW0gb3duZXIgdGhlIHBsYXllciB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBpbiBoaXRFdmVudCBpZiB0aGUgdG9tYXRvIGhpdHMgc29tZXRoaW5nXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpcmVjdGlvbjogRElSRUNUSU9OLCBpbml0aWF0b3I6IFBsYXllciB8IFRpbGVPYmplY3QsIG93bmVyOiBQbGF5ZXIpIHtcblxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcHJvamVjdGlsZV9mbHlcIikpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBUb21hdG9Qcm9qZWN0aWxlLmdldE5ld0lkKCk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG5cbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBQb2ludCgyLCAyKTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOiB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5ET1dOOiB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6IHRoaXMudnggPSAtMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOiB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGB0b21hdG9fcHJvamVjdGlsZV9zbWFzaF8ke2l9YDtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2godGV4dHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIodGhpcy5pZCwgdGhpcy5kb1N0ZXApO1xuICAgICAgICBnYW1lTWFuYWdlci5tYXAuZXh0cmFTdHVmZkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgVG9tYXRvUHJvamVjdGlsZS50aHJvd1NvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAvL0NhbGN1bGF0ZSB0aGVvcmV0aWNhbGx5IG5leHQgcG9zaXRpb25cbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnggKyB0aGlzLnZ4ICogZGVsdGE7XG4gICAgICAgIGxldCBuZXdZID0gdGhpcy55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgd2hlbiBtb3ZpbmcgdGhlIG5leHQgc3RlcFxuICAgICAgICBsZXQgeFJhbmdlID0ge1xuICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigobmV3WCAtIHRoaXMud2lkdGggLyAyKSAvIGdhbWVNYW5hZ2VyLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WCArIHRoaXMud2lkdGggLyAyKSAvIGdhbWVNYW5hZ2VyLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigobmV3WSAtIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcbiAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdZICsgdGhpcy5oZWlnaHQgLyAyKSAvIGdhbWVNYW5hZ2VyLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgIH07XG5cblxuICAgICAgICAvL0NoZWNrIGlmIHRoZSB0b21hdG8gaGl0cyBhIFBsYXllclxuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBnYW1lTWFuYWdlci5tYXAucGxheWVycykge1xuICAgICAgICAgICAgY29uc3QgaGl0Ym94ID0gcGxheWVyLmdldEhpdGJveCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueCA8IGhpdGJveC5yaWdodFggJiYgdGhpcy54ICsgdGhpcy53aWR0aCA+IGhpdGJveC5sZWZ0WCAmJiB0aGlzLnkgPCBoaXRib3gubG93ZXJZICYmIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gaGl0Ym94LnVwcGVyWSkge1xuICAgICAgICAgICAgICAgIC8vRmx5IGludG8gdGhlIFBsYXllclxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogMjtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy52eSAqIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5zbWFzaChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxuICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSB5UmFuZ2UuZnJvbTsgeSA8PSB5UmFuZ2UudG87IHkrKykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LCB5KSA9PSB1bmRlZmluZWQgfHwgZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCwgeSkudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja2VkVGlsZSA9IGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICAvL0ZseSBpbnRvIHRoZSB0aWxlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnZ4ICogMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtYXNoKGJsb2NrZWRUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vSWYgbm8gY29sbGlzaW9uLCBqdXN0IGZseSB5b3VyIHdheVxuICAgICAgICB0aGlzLnggPSBuZXdYO1xuICAgICAgICB0aGlzLnkgPSBuZXdZO1xuICAgICAgICB0aGlzLnJvdGF0aW9uICs9IDAuNSAqIGRlbHRhO1xuXG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgYXN5bmMgc21hc2goY29sbGlkZXI6IFRpbGUgfCBQbGF5ZXIpIHtcbiAgICAgICAgaWYgKGNvbGxpZGVyICE9IHRoaXMuaW5pdGlhdG9yKSB7IC8vRG9udCBoaXQgdGhlIGluaXRpYXRvclxuICAgICAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnVucmVnaXN0ZXIodGhpcy5pZCk7XG4gICAgICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLnNtYXNoU291bmQucGxheSgpOyAvL1BsYXkgU21hc2ggc291bmRcblxuICAgICAgICAgICAgLy9UcmlnZ2VyIEhpdCBldmVudCBvbiBoaXR0ZW4gdGlsZSBvciBQbGF5ZXJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlcikge1xuICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9uSGl0KG5ldyBIaXRFdmVudCh0aGlzLm93bmVyLCBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5oaXREYW1hZ2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9QbGF5IFNtYXNoIGFuaW1hdGlvblxuICAgICAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg0MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBESVJFQ1RJT04sIFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSBcIi4vVG9tYXRvUHJvamVjdGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBvd25lcklkOiBzdHJpbmc7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudG93ZXIuZGVmYXVsdEhlYWx0aDtcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgb3duZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlciwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMub3duZXJJZCA9IG93bmVySWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGggLyBCYWxhbmNpbmcudG93ZXIuZGVmYXVsdEhlYWx0aCk7XG4gICAgICAgICAgICAgICAgVG93ZXIub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoQmFsYW5jaW5nLnRvd2VyLmNvb2xkb3duKTtcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG9zIGFzIGRlZmVuc2UgYWN0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZUhlaWdodCA9IHRoaXMubW90aGVyLm1hcC5maW5hbFRpbGVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZVdpZHRoID0gdGhpcy5tb3RoZXIubWFwLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdGhlci5ncmlkWSAtIDEgPj0gMCkgeyBuZXcgVG9tYXRvUHJvamVjdGlsZSh0aGlzLngsICh0aGlzLm1vdGhlci5ncmlkWSAtIDEpICogdGlsZUhlaWdodCwgRElSRUNUSU9OLlVQLCB0aGlzLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRYIC0gMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKCh0aGlzLm1vdGhlci5ncmlkWCAtIDEpICogdGlsZVdpZHRoLCB0aGlzLnksIERJUkVDVElPTi5MRUZULCB0aGlzLCB0aGlzLmdldE93bmVyKCkpOyB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW90aGVyLmdyaWRZICsgMSA+PSAwKSB7IG5ldyBUb21hdG9Qcm9qZWN0aWxlKHRoaXMueCwgKHRoaXMubW90aGVyLmdyaWRZICsgMSkgKiB0aWxlSGVpZ2h0LCBESVJFQ1RJT04uRE9XTiwgdGhpcywgdGhpcy5nZXRPd25lcigpKTsgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdGhlci5ncmlkWCArIDEgPj0gMCkgeyBuZXcgVG9tYXRvUHJvamVjdGlsZSgodGhpcy5tb3RoZXIuZ3JpZFggKyAxKSAqIHRpbGVXaWR0aCwgdGhpcy55LCBESVJFQ1RJT04uUklHSFQsIHRoaXMsIHRoaXMuZ2V0T3duZXIoKSk7IH1cbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBhbGVydChgUGxheWVyJHt0aGlzLm93bmVySWR9IGhhcyBsb3N0IWApO1xuICAgIH1cblxuICAgIGdldE93bmVyKCk6IFBsYXllciB7XG4gICAgICAgIHJldHVybiBnYW1lTWFuYWdlci5tYXAucGxheWVyc1t0aGlzLm93bmVySWRdO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7QmFsYW5jaW5nfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLnRyZWUuZGVmYXVsdEhlYWx0aDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIG1vdGhlcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBUcmVlLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBpbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKElURU0uV0FMTCwgQmFsYW5jaW5nLnRyZWUuY3JvcENvdW50KTtcbiAgICAgICAgVHJlZS5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG5cblxufSIsImV4cG9ydCBjbGFzcyBVcGRhdGVTY2hlZHVsZXIge1xuXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xuICAgICBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmNsaWVudHNbaWRdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5jbGllbnRzW2lkXTtcbiAgICB9XG5cbiAgICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2FsbGJhY2sgPSB0aGlzLmNsaWVudHNbaV0uY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY3VycmVudENhbGxiYWNrKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzeW5jaHJvbnVzIFByb21pc2UgZm9yIHdhaXRpbmcgdGhlIGdpdmVuIHRpbWUgaW4gbXNcbiAgICAgKiBUaGlzIGRvZXMgTk9UIHBhdXNlIG9yIHN0b3AgdGhlIFVwZGF0ZVNjaGVkdWxlclxuICAgICAqL1xuICAgIHN0YXRpYyB3YWl0ID0gbXMgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aDtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKDk0OSksIG1vdGhlciwgdHJ1ZSk7IC8vOTQ5IGlzIGEgYm94IHNwcml0ZVxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCAqIGFzIGpzbWVkaWF0YWdzIGZyb20gXCJqc21lZGlhdGFnc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpY1BsYXllciB7XG5cbiAgICBwbGF5bGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBwbGF5bGlzdFBvc2l0aW9uID0gMDtcbiAgICBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudDtcblxuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYXJ0aXN0OiBzdHJpbmc7XG4gICAgY292ZXI6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihodG1sUGFyZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZUMzIzJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgICAgICAgICAgI2NvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMzhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjFlMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2MTYxNjE7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm11c2ljUGxheWVyQ292ZXJ7fVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllclRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tdXNpY1BsYXllckFydGlzdHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubXVzaWNQbGF5ZXJJbmZve1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtdXNpY1BsYXllckNvdmVyXCIgd2lkdGg9XCI4MHB4XCIgc3JjPVwiaHR0cHM6Ly93d3cuc3VwZXJqb2pvLmRlL21haW4vcGljcy9tZW5zYS5wbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVzaWNQbGF5ZXJJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdXNpY1BsYXllclRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWVwIGFuZCBmdW5reSBtdXNpY1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11c2ljUGxheWVyQXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNaXN0ZXIgYm9tYmFzdGljXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGh0bWxQYXJlbnQuaW5uZXJIVE1MICs9IGh0bWw7XG4gICAgfVxuXG4gICAgYWRkTXVzaWMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGxheWxpc3QucHVzaChwYXRoKTtcbiAgICB9XG5cbiAgICBwbGF5ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE11c2ljQXQodGhpcy5wbGF5bGlzdFBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwYXVzZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNdXNpY0F0KHBvczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGxheWxpc3RQb3NpdGlvbiA9IHBvcztcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLnBsYXlsaXN0W3Bvc107XG4gICAgICAgIGlmIChwYXRoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW011c2ljIFBsYXllcl0gQ2FudCBwbGF5IG11c2ljLiBNdXNpYyBjYW50IGJlIGZvdW5kIGluIHBsYXlsaXN0IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKHBhdGgpO1xuICAgICAgICB0aGlzLmF1ZGlvLm9uZW5kZWQgPSB0aGlzLm5leHRUcmFjaztcblxuICAgICAgICAvL0xvYWQgTWV0YSBJbmZvXG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODg4Ny8nICsgcGF0aCk7XG4gICAgICAgIGxldCBibG9iID0gYXdhaXQgcmVzcC5ibG9iKCk7XG5cbiAgICAgICAganNtZWRpYXRhZ3MucmVhZChibG9iLCB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50YWdzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVzaWNQbGF5ZXJUaXRsZScpLmlubmVySFRNTCA9IGRhdGEudGFncy50aXRsZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVzaWNQbGF5ZXJBcnRpc3QnKS5pbm5lckhUTUwgPSAgZGF0YS50YWdzLmFydGlzdDtcblxuICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGRhdGEudGFncy5waWN0dXJlO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZTY0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShpbWFnZS5kYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gXCJkYXRhOlwiICsgaW1hZ2UuZm9ybWF0ICsgXCI7YmFzZTY0LFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idG9hKGJhc2U2NFN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpY1BsYXllckNvdmVyJykuc2V0QXR0cmlidXRlKCdzcmMnLCBiYXNlNjQpO1xuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnOignLCBlcnJvci50eXBlLCBlcnJvci5pbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dFRyYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZE11c2ljQXQoKyt0aGlzLnBsYXlsaXN0UG9zaXRpb24gJSB0aGlzLnBsYXlsaXN0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuXG5cblxufSIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWwvUGxheWVyXCJcbmltcG9ydCBQbGF5ZXJNZW51IGZyb20gXCIuL3BsYXllck1lbnVcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi91aUNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHBsYXllck1lbnVzOiBQbGF5ZXJNZW51W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllcnM6IFBsYXllcltdKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnVXaWR0aCA9IHVpQ29uc3RhbnRzLnN0YWdlLndpZHRoIC8gcGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJNZW51ID0gbmV3IFBsYXllck1lbnUocGxheWVyc1tpXSwgbWVudVdpZHRoLCBtZW51V2lkdGggKiBpKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyTWVudXMucHVzaChwbGF5ZXJNZW51KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocGxheWVyTWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBDb250YWluZXIsIFJlY3RhbmdsZSwgR3JhcGhpY3MsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWwvUGxheWVyXCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi4vbW9kZWwvQmFsYW5jaW5nXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4uL21vZGVsL0l0ZW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1lbnUgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgcGxheWVyOiBQbGF5ZXI7XG4gICAgYWN0aW9uSWNvbjpTcHJpdGU7XG4gICAgdG9tYXRvUHJvamVjdGlsZVNwcml0ZXM6U3ByaXRlW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCB3aWR0aDogbnVtYmVyLCB4Om51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcblxuICAgICAgICB0aGlzLnkgPSB1aUNvbnN0YW50cy5zdGFnZS5oZWlnaHQgLSB1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0geDtcblxuICAgICAgICBsZXQgYmdTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICBiZ1NoYXBlLmJlZ2luRmlsbChwbGF5ZXIuY29sb3IpO1xuICAgICAgICBiZ1NoYXBlLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCB1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCk7XG4gICAgICAgIGJnU2hhcGUuZW5kRmlsbCgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGJnU2hhcGUpO1xuXG4gICAgICAgIGxldCBhaSA9IG5ldyBTcHJpdGUoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHBsYXllci5wbGFjZU1vZGUpKTtcbiAgICAgICAgYWkuc2NhbGUuc2V0KHVpQ29uc3RhbnRzLm1lbnVCYXIuaWNvbi5zY2FsZSk7XG4gICAgICAgIGFpLnggPSAodWlDb25zdGFudHMubWVudUJhci5oZWlnaHQgLSBhaS53aWR0aCkgLyAyXG4gICAgICAgIGFpLnkgPSAodWlDb25zdGFudHMubWVudUJhci5oZWlnaHQgLSBhaS53aWR0aCkgLyAyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYWkpO1xuICAgICAgICB0aGlzLmFjdGlvbkljb24gPSBhaTtcblxuICAgICAgICAvL0NyZWF0ZSB0b21hdG8gc3ByaXRlc1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy53aWR0aCAtICgodWlDb25zdGFudHMubWVudUJhci5pbnZlbnRvcnkuc3BhY2luZyArIHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwcml0ZVNpemVcbiAgICAgICAgICAgICkgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5pbnZlbnRvcnlMaW1pdClcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLmludmVudG9yeUxpbWl0O2krKyl7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoSVRFTS5UT01BVE9fUFJPSkVDVElMRSkpO1xuICAgICAgICAgICAgc3ByaXRlLnggPSAodWlDb25zdGFudHMubWVudUJhci5pbnZlbnRvcnkuc3ByaXRlU2l6ZSArIHVpQ29uc3RhbnRzLm1lbnVCYXIuaW52ZW50b3J5LnNwYWNpbmcpICogaSArIG9mZnNldFg7XG4gICAgICAgICAgICBzcHJpdGUueSA9IDU7XG4gICAgICAgICAgICB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzLnB1c2goc3ByaXRlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllck1lbnVcIitwbGF5ZXIucGxheWVySWQsdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgZG9TdGVwID0gKCk9PntcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGhpcy5wbGF5ZXIucGxhY2VNb2RlKTtcbiAgICAgICAgLy9kaXNwbGF5IHRvbWF0b2VzXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudG9tYXRvUHJvamVjdGlsZVNwcml0ZXMubGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgdGhpcy5wbGF5ZXIuaW52ZW50b3J5LnRvbWF0b19wcm9qZWN0aWxlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvbWF0b1Byb2plY3RpbGVTcHJpdGVzW2luZGV4XS50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMudG9tYXRvUHJvamVjdGlsZVNwcml0ZXNbaW5kZXhdLnRpbnQgPSAweDIyMjIyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IHVpQ29uc3RhbnRzID0ge1xuICAgIG1lbnVCYXI6IHtcbiAgICAgICAgaGVpZ2h0OiAxMTUsXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHNjYWxlOiAzLFxuICAgICAgICB9LFxuICAgICAgICBpbnZlbnRvcnk6IHtcbiAgICAgICAgICAgIHNwYWNpbmc6IDMsXG4gICAgICAgICAgICBzcHJpdGVTaXplIDogMTYsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YWdlOiB7XG4gICAgICAgIHdpZHRoOiAxMDIwLFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9