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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
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
})(ITEM || (ITEM = {}));


// CONCATENATED MODULE: ./src/model/Balancing.ts
var Balancing = {
    tree: {
        defaultHealth: 1,
        cropCount: 3,
    },
    wall: {
        defaultHealth: 3,
    },
    tntPumpkin: {
        explosionDamage: 1,
    },
    player: {
        speed: 4,
        hitDamage: 0.1,
    },
    tower: {
        defaultHealth: 10,
    },
    tomatoProjectile: {
        speed: 7,
        hitDamage: 0.3,
    },
    tomatoPlant: {
        growStepTime: 4000,
        cropCount: 5
    },
    pumpkinPlant: {
        growStepTime: 10000,
        cropCount: 3
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
    TomatoProjectile.throwSound = new Audio('../data/assets/sound/snap.mp3');
    TomatoProjectile.smashSound = new Audio('../data/assets/sound/smash.mp3');
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
                    from: Math.floor(newX / _this.map.finalTileWidth),
                    to: Math.floor((newX + _this.sprite.width) / _this.map.finalTileWidth)
                };
                var yRange = {
                    from: Math.floor(newY / _this.map.finalTileHeight),
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
                //Create Tomato if neccessary
                if (_this.placeMode == ITEM.TOMATO_PROJECTILE && _this.inventory.getItem(ITEM.TOMATO_PROJECTILE)) {
                    new TomatoProjectile_TomatoProjectile(_this.sprite.x, _this.sprite.y, _this.currentDirection, _this);
                }
                //Else place tileObject if ressources are in inventory
                else if (_this.inventory.getItem(_this.placeMode)) {
                    _this.playAnimation("put");
                    currentTile.onPlace(_this.placeMode);
                }
            }
        };
        this.onHit = function () {
            if (!_this.stunned) {
                var currentTile = _this.getCurrentTile();
                currentTile.onHit(new HitEvent(_this, Balancing.player.hitDamage));
            }
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
    TileObject.onHitSound = new Audio('../data/assets/sound/hit.mp3');
    TileObject.onDestroySound = new Audio('../data/assets/sound/blob.mp3');
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
    TntPumpkin.tickSound = new Audio('../data/assets/sound/klick.mp3');
    TntPumpkin.explodeSound = new Audio('../data/assets/sound/explode.mp3');
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
    function Tower(texture, mother, owner) {
        var _this = _super.call(this, texture, mother) || this;
        _this.health = Balancing.tower.defaultHealth;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        _this.owner = owner;
        return _this;
    }
    Tower.prototype.onHit = function (hitEvent) {
        return Tower_awaiter(this, void 0, void 0, function () {
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
    Tower.prototype.onDestroy = function (initiator) {
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
                        var owner = map.players[ownerId];
                        var mother = map.getTileNearestTo(co);
                        var newTower = new Tower_Tower(texture, mother, owner);
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

// CONCATENATED MODULE: ./src/model/GameManager.ts









var GameManager_GameManager = /** @class */ (function () {
    function GameManager() {
        var _this = this;
        this.loaderFinished = function () {
            _this.keyboardManager = new KeyboardManager();
            _this.updateScheduler = new UpdateScheduler();
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
            players[0].setKeys("w", "s", "a", "d", "x", "c", "y");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlZFNwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9CYWxhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1VwZGF0ZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG50UHVtcGtpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1dhbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1BsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQXRsYXNTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL21lbnVCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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QUksQ0FBQyxpQkFBaUIsQ0FBQztJQUMzRCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDOzs7O0FDekdEO0FBQStDO0FBRS9DLElBQU0sV0FBVyxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkU3ByaXRlc2hlZXR7XG5cblx0Ym9yZGVyOiBudW1iZXI7XG5cdHRpbGVIZWlnaHQ6IG51bWJlcjtcblx0dGlsZVdpZHRoOiBudW1iZXI7XG5cdHJvd3M6IG51bWJlcjtcblx0Y29sdW1uczogbnVtYmVyO1xuXHRiaWdUZXh0dXJlOiBUZXh0dXJlO1xuXHR0ZXh0dXJlczogVGV4dHVyZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsYm9yZGVyLHRpbGVXaWR0aCx0aWxlSGVpZ2h0LHJvd3MsY29sdW1ucyl7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdFx0dGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcblx0XHR0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcblx0XHR0aGlzLnJvd3MgPSByb3dzO1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy5iaWdUZXh0dXJlID0gdGV4dHVyZTtcblx0XHR0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gU0NBTEVfTU9ERVMuTkVBUkVTVDtcblx0XHR0aGlzLnRleHR1cmVzID0gW107XG5cdH1cblxuXHRnZXRUZXh0dXJlKGdpZDpudW1iZXIpOlRleHR1cmUgIHtcblx0XHQvL0NoZWNrIHdldGhlciB0ZXh0dXJlcyB3YXMgYWxscmVhZHkgZnJhbWVkIGZvcm0gc3ByaXRlc2hlZXRcblx0XHRpZiAodGhpcy50ZXh0dXJlc1tnaWRdKSB7XG5cdFx0ICByZXR1cm4gdGhpcy50ZXh0dXJlc1tnaWRdO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICAvL0NhbGN1bGF0ZSByb3cgYW5kIGNvbHVtbiBmcm9tIGdpZFxuXHRcdCAgbGV0IHJvdzpudW1iZXIgPSBNYXRoLmZsb29yKChnaWQgLSAxKSAvIHRoaXMuY29sdW1ucyk7XG5cdFx0ICBsZXQgY29sdW1uOm51bWJlciA9IChnaWQgLSAxKSAlIHRoaXMuY29sdW1ucztcblx0XG5cdFx0ICBsZXQgdGlsZVdpZHRoOm51bWJlciA9IHRoaXMudGlsZVdpZHRoO1xuXHRcdCAgbGV0IHRpbGVIZWlnaHQ6bnVtYmVyID0gdGhpcy50aWxlSGVpZ2h0O1xuXHRcblx0XHQgIGxldCB4Om51bWJlciA9IGNvbHVtbiAqIHRpbGVXaWR0aCArIGNvbHVtbiAqIHRoaXMuYm9yZGVyO1xuXHRcdCAgbGV0IHk6bnVtYmVyID0gcm93ICogdGlsZUhlaWdodCArIHJvdyAqIHRoaXMuYm9yZGVyO1xuXHRcblx0XHQgIGxldCB0OlRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUoeCwgeSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XG5cdFx0ICAvL1NhdmUgVGV4dHVyZSBpbiBjYWNoZSBhcnJheVxuXHRcdCAgdGhpcy50ZXh0dXJlc1tnaWRdID0gdDtcblx0XHQgIHJldHVybiB0O1xuXHRcdH1cblx0ICB9XG5cdFxuXG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQgPSBcInRvbWF0b19wbGFudFwiLFxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcbiAgICBUTlRfUFVNUEtJTiA9IFwidG50X3B1bXBraW5cIixcbiAgICBXQUxMID0gXCJ3YWxsXCIsXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiXG5jb25zdCBCYWxhbmNpbmcgPSB7XG4gICAgdHJlZToge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxLFxuICAgICAgICBjcm9wQ291bnQ6IDMsXG4gICAgfSxcblxuICAgIHdhbGw6IHtcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcbiAgICB9LFxuXG4gICAgdG50UHVtcGtpbjoge1xuICAgICAgICBleHBsb3Npb25EYW1hZ2U6IDEsXG4gICAgfSxcblxuICAgIHBsYXllcjoge1xuICAgICAgICBzcGVlZDogNCxcbiAgICAgICAgaGl0RGFtYWdlOiAwLjEsXG4gICAgfSxcbiAgICBcbiAgICB0b3dlcjoge1xuICAgICAgICBkZWZhdWx0SGVhbHRoOiAxMCxcbiAgICB9LFxuXG4gICAgdG9tYXRvUHJvamVjdGlsZTp7XG4gICAgICAgIHNwZWVkIDogNyxcbiAgICAgICAgaGl0RGFtYWdlOiAwLjMsXG4gICAgfSxcblxuICAgIHRvbWF0b1BsYW50OntcbiAgICAgICAgZ3Jvd1N0ZXBUaW1lIDogNDAwMCxcbiAgICAgICAgY3JvcENvdW50OiA1XG4gICAgfSxcblxuICAgIHB1bXBraW5QbGFudDp7XG4gICAgICAgIGdyb3dTdGVwVGltZSA6IDEwMDAwLFxuICAgICAgICBjcm9wQ291bnQ6IDNcbiAgICB9LFxuXG59XG5cbmV4cG9ydCB7IEJhbGFuY2luZyB9IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBIaXRFdmVudCB7XG5cbiAgICBpbml0aWF0b3I6IFBsYXllcjtcbiAgICBkYW1hZ2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRpYXRvcjogUGxheWVyLCBkYW1hZ2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG5cbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgVXBkYXRlU2NoZWR1bGVyIHtcblxuICAgICBjbGllbnRzOiBvYmplY3QgPSB7fTtcbiAgICAgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICByZWdpc3RlcihpZDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jbGllbnRzW2lkXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2xpZW50c1tpZF07XG4gICAgfVxuXG4gICAgIGRvU3RlcCA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNsaWVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudENhbGxiYWNrID0gdGhpcy5jbGllbnRzW2ldLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFjayhkZWx0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb251cyBQcm9taXNlIGZvciB3YWl0aW5nIHRoZSBnaXZlbiB0aW1lIGluIG1zXG4gICAgICogVGhpcyBkb2VzIE5PVCBwYXVzZSBvciBzdG9wIHRoZSBVcGRhdGVTaGVkdWxlclxuICAgICAqL1xuICAgIHN0YXRpYyB3YWl0ID0gbXMgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBTcHJpdGUsIFBvaW50LCBUZXh0dXJlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi9QbGF5ZXJcIlxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tICcuL0JhbGFuY2luZyc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSAnLi9IaXRFdmVudCc7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tICcuL1VwZGF0ZVNjaGVkdWxlcic7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9Qcm9qZWN0aWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xuICAgIHN0YXRpYyB0aHJvd1NvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9zbmFwLm1wMycpO1xuICAgIHN0YXRpYyBzbWFzaFNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9zbWFzaC5tcDMnKTtcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluaXRpYXRvcjogUGxheWVyO1xuICAgIHByaXZhdGUgdng6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB2eTogbnVtYmVyID0gMDtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW10gPSBbXTtcblxuICAgIHN0YXRpYyBnZXROZXdJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHRvbWF0b19wcm9qZWN0aWxlXyR7VG9tYXRvUHJvamVjdGlsZS5pZENvdW50ZXIrK31gO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IERJUkVDVElPTiwgaW5pdGlhdG9yOiBQbGF5ZXIpIHtcblxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcHJvamVjdGlsZV9mbHlcIikpO1xuICAgICAgICB0aGlzLmlkID0gVG9tYXRvUHJvamVjdGlsZS5nZXROZXdJZCgpO1xuXG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcblxuICAgICAgICB0aGlzLnNjYWxlID0gbmV3IFBvaW50KDIsIDIpO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uVVA6IHRoaXMudnkgPSAtMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkRPV046IHRoaXMudnkgPSAxICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDogdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6IHRoaXMudnggPSAxICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHRvbWF0b19wcm9qZWN0aWxlX3NtYXNoXyR7aX1gO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCh0ZXh0dXJlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG5cbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKHRoaXMuaWQsIHRoaXMuZG9TdGVwKTtcblxuICAgICAgICBnYW1lTWFuYWdlci5tYXAuZXh0cmFTdHVmZkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzKTtcblxuICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLnRocm93U291bmQucGxheSgpO1xuXG4gICAgfVxuXG4gICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICBsZXQgbmV3WSA9IHRoaXMueSArIHRoaXMudnkgKiBkZWx0YTtcblxuICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1ggLSB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IoKG5ld1kgLSB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vQ2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoaXMgbmV3IHBvc2l0aW9ucyB3b3VsZCBiZSBpbiBhIHNvbGlkIHRpbGUgb3Igb3V0IG9mIHRoZSBtYXBcbiAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGJsb2NrZWRUaWxlOiBUaWxlO1xuXG4gICAgICAgIGZvciAobGV0IHggPSB4UmFuZ2UuZnJvbTsgeCA8PSB4UmFuZ2UudG87IHgrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IHlSYW5nZS5mcm9tOyB5IDw9IHlSYW5nZS50bzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LHkpID09IHVuZGVmaW5lZCB8fCBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LHkpLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrZWRUaWxlID0gZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCx5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy54ID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMueSA9IG5ld1k7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IDAuNSAqIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9GbHkgaW50byB0aGUgdGlsZU9iamVjdFxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMudnggKiAyO1xuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMudnkgKiAyO1xuICAgICAgICAgICAgdGhpcy5zbWFzaChibG9ja2VkVGlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBhc3luYyBzbWFzaCh0aWxlOiBUaWxlKSB7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci51bnJlZ2lzdGVyKHRoaXMuaWQpO1xuXG4gICAgICAgIC8vUGxheSBTbWFzaCBzb3VuZFxuICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLnNtYXNoU291bmQucGxheSgpO1xuXG4gICAgICAgIC8vVHJpZ2dlciBIaXQgZXZlbnQgb24gaGl0dGVuIHRpbGVcbiAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMuaW5pdGlhdG9yLCBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5oaXREYW1hZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vUGxheSBTbWFzaCBhbmltYXRpb25cbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxufSIsImltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcblxuICAgIHRvbWF0b19wcm9qZWN0aWxlOiBudW1iZXIgPSAwO1xuICAgIHRudF9wdW1wa2luOiBudW1iZXIgPSAwO1xuICAgIHdhbGw6IG51bWJlciA9IDA7XG5cbiAgICBnZXRJdGVtKGl0ZW1UeXBlOiBJVEVNKTogYm9vbGVhbiB7XG4gICAgICAgIHN3aXRjaCAoaXRlbVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHJldHVybiB0cnVlOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiByZXR1cm4gdHJ1ZTsgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTogaWYgKHRoaXMudG9tYXRvX3Byb2plY3RpbGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcHJvamVjdGlsZS0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogaWYgKHRoaXMudG50X3B1bXBraW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50bnRfcHVtcGtpbi0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiBpZiAodGhpcy53YWxsID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FsbC0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnaXZlSXRlbShpdGVtVHlwZTogSVRFTSwgY291bnQ6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2l2ZSAke2l0ZW1UeXBlfXgke2NvdW50fWApO1xuICAgICAgICBzd2l0Y2ggKGl0ZW1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMudG9tYXRvX3Byb2plY3RpbGUgKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMudG50X3B1bXBraW4gKz0gY291bnQ7IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogdGhpcy53YWxsICs9IGNvdW50OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBQb2ludCwgZXh0cmFzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vLi4vaW5kZXhcIlxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSAnLi9Ub21hdG9Qcm9qZWN0aWxlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcbmltcG9ydCB7IEludmVudG9yeSB9IGZyb20gXCIuL0ludmVudG9yeVwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5cbmV4cG9ydCBlbnVtIERJUkVDVElPTiB7IFVQID0gXCJ1cFwiLCBSSUdIVCA9IFwicmlnaHRcIiwgRE9XTiA9IFwiZG93blwiLCBMRUZUID0gXCJsZWZ0XCIsIFNUT1AgPSBcInN0b3BcIiB9O1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG5cbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xuICAgIC8vQSBoZXggdmFsdWUgb2YgYSBjb2xvciBhbGwgcGxheWVyJ3Mgc3ByaXRlcyBhcmUgdGludGVkIHdpdGhcbiAgICBjb2xvcjogbnVtYmVyID0gMHhGRkZGRkY7XG4gICAgbWFwOiBUaWxlZE1hcDtcblxuICAgIHNwcml0ZTogZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuICAgIGFuaW1hdGlvbnM7XG4gICAgdng6IG51bWJlcjtcbiAgICB2eTogbnVtYmVyO1xuXG4gICAgLy9QbGF5ZXIgaWdub3JlcyBkb1N0ZXAgYW5kIG9uQWN0aW9uIEV2ZW50cyBpZiBzdHVubmVkXG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICAvKiogU2F2ZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIChTVE9QIHdpbGwgbm90IGJlIHNhdmVkIGhlcmUsIGluIHRoaXMgY2FzZSB0aGUgdmFsdWUgaXMgdGhlIGxhc3QgZGlyZWN0aW9uIGJlZm9yZSBTVE9QKSAqL1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuXG4gICAgdXBLZXk6IHN0cmluZztcbiAgICBkb3duS2V5OiBzdHJpbmc7XG4gICAgbGVmdEtleTogc3RyaW5nO1xuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XG4gICAgYWN0aW9uS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0S2V5OiBzdHJpbmc7XG4gICAgcGxhY2VLZXk6IHN0cmluZztcbiAgICBsYXN0VGludGVkVGlsZTogVGlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDtcblxuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBESVJFQ1RJT04uRE9XTjtcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gUGxheWVyLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjEzO1xuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcblxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcbiAgICAgICAgZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLnJlZ2lzdGVyS2V5KGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5BTllfS0VZLCB0aGlzLmtleURvd24sIHRoaXMua2V5VXAsIFwicGxheWVyXCIgKyBwbGF5ZXJJZCk7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllclwiICsgcGxheWVySWQsIHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgXG5cbiAgICBwcml2YXRlIGxvYWRBbmltYXRpb25zKCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xuICAgICAgICAgICAgd2Fsazoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1dDoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJTdGF0ZU5hbWUgaW4gYW5pbWF0aW9uc1tzdGF0ZU5hbWVdKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGBwbGF5ZXJfJHtzdGF0ZU5hbWV9XyR7c3ViU3RhdGVOYW1lfV8ke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGFjZU1vZGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbGFjZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE5UX1BVTVBLSU47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BMQU5UOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5XQUxMOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uUFVNUEtJTl9QTEFOVDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENoYW5nZWQgUGxhY2VNb2RlLiBOZXcgbW9kZSBpczogJHt0aGlzLnBsYWNlTW9kZX1gKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBESVJFQ1RJT04pIHtcbiAgICAgICAgaWYgKHRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgLy9QbGF5ZXIgaXMgc3R1bm5lZCBhbmQgY2FuJ3QgY2hhbmdlIGl0J3MgZGlyZWN0aW9uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTi5TVE9QKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9ucy53YWxrW2RpcmVjdGlvbl07XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwbGF5QW5pbWF0aW9uKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzOiBUZXh0dXJlW10gPSB0aGlzLmFuaW1hdGlvbnNbc3RhdGVdW3RoaXMuY3VycmVudERpcmVjdGlvbl07XG5cbiAgICAgICAgdGhpcy5zdHVubmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpXG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBmb3J3YXJkc1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9XYWl0IGEgbW9tZW50XG4gICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDgwKTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKGxldCBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoNTApO1xuICAgICAgICB9XG5cblxuICAgICAgICAvL1Jlc3RvcmUgbGFzdCBkaXJlY3Rpb24ncyB0ZXh0dXJlXG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLmN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5LCBwbGFjZUtleSkge1xuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XG4gICAgICAgIHRoaXMuZG93bktleSA9IGRvd25LZXk7XG4gICAgICAgIHRoaXMubGVmdEtleSA9IGxlZnRLZXk7XG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXkgPSBhY3Rpb25LZXk7XG4gICAgICAgIHRoaXMuc2VsZWN0S2V5ID0gc2VsZWN0S2V5O1xuICAgICAgICB0aGlzLnBsYWNlS2V5ID0gcGxhY2VLZXk7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBrZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT0gdGhpcy5sYXN0S2V5ICYmICF0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uVVApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZG93bktleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlJJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IDEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSkgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxuICAgICAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnNwcml0ZS54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnNwcml0ZS55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdYIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdYICsgdGhpcy5zcHJpdGUud2lkdGgpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IobmV3WSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxuICAgICAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHlSYW5nZS5mcm9tOyB5IDw9IHlSYW5nZS50bzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcC5nZXRUaWxlKHgseSkgPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC5nZXRUaWxlKHgseSkudGlsZU9iamVjdCAmJiB0aGlzLm1hcC5nZXRUaWxlKHgseSkudGlsZU9iamVjdC5zb2xpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSBuZXdZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgVGlsZS5cbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cbiAgICAqL1xuICAgIGdldEN1cnJlbnRUaWxlKCk6IFRpbGUge1xuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCxncmlkWSk7XG4gICAgfVxuXG4gICAgdGludEN1cnJlbnRUaWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0VGludGVkVGlsZSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGludGVkVGlsZS5zZXRUaW50KDB4RkZGRkZGKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdCA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgaWYgKGN0KSB7XG4gICAgICAgICAgICBjdC5zZXRUaW50KHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUgPSBjdDtcblxuICAgIH1cblxuICAgIG9uUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcblxuICAgICAgICAgICAgLy9DcmVhdGUgVG9tYXRvIGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlTW9kZSA9PSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFICYmIHRoaXMuaW52ZW50b3J5LmdldEl0ZW0oSVRFTS5UT01BVE9fUFJPSkVDVElMRSkpIHtcbiAgICAgICAgICAgICAgICBuZXcgVG9tYXRvUHJvamVjdGlsZSh0aGlzLnNwcml0ZS54LCB0aGlzLnNwcml0ZS55LCB0aGlzLmN1cnJlbnREaXJlY3Rpb24sdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vRWxzZSBwbGFjZSB0aWxlT2JqZWN0IGlmIHJlc3NvdXJjZXMgYXJlIGluIGludmVudG9yeVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pbnZlbnRvcnkuZ2V0SXRlbSh0aGlzLnBsYWNlTW9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJwdXRcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25QbGFjZSh0aGlzLnBsYWNlTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaWxlID0gdGhpcy5nZXRDdXJyZW50VGlsZSgpO1xuICAgICAgICAgICAgY3VycmVudFRpbGUub25IaXQobmV3IEhpdEV2ZW50KHRoaXMsIEJhbGFuY2luZy5wbGF5ZXIuaGl0RGFtYWdlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIFBvaW50IH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRpbGVPYmplY3QgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2hpdC5tcDMnKTtcbiAgICBzdGF0aWMgb25EZXN0cm95U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2IubXAzJyk7XG5cbiAgICBtb3RoZXI6IFRpbGU7XG4gICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2dWxuZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgc29saWQ/OmJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7XG5cbiAgICAgICAgLy9zZXQgcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XG5cbiAgICAgICAgLy9TZXQgdGltZXIgZm9yIHNvbGlkIHRpbGVzXG4gICAgICAgIGlmKHNvbGlkKXtcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4QUFBQUFBO1xuICAgICAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKGB3YWl0X3RvX2JlY29tZV9zb2xpZF8ke3RoaXMubW90aGVyLmdyaWRYfV8ke3RoaXMubW90aGVyLmdyaWRZfWAsdGhpcy50cnlUb0JlY29tZVNvbGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyeVRvQmVjb21lU29saWQgPSAoKT0+e1xuICAgICAgICBpZighdGhpcy5tb3RoZXIuaXNPY2N1cGllZEJ5QW55UGxheWVyKCkpe1xuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIG9uSGl0KGhpdGV2ZW50OiBIaXRFdmVudCkgeyB9O1xuXG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4wNztcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xuXG4gICAgICAgICAgICB0aW1lcy0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9FcGlsb2dcbiAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cblxuICAgIGFzeW5jIHNocmluaygpIHtcblxuICAgICAgICAvL1Byb2xvZyAgICAgICAgXG4gICAgICAgIGNvbnN0IHNjYWxlRGlmZiA9IDAuMjtcbiAgICAgICAgLy9DaGFuZ2UgYW5jaG9yXG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRoaXMuc2NhbGUueCA+IDAgJiYgdGhpcy5zY2FsZS55ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS54IC09IHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSAtPSBzY2FsZURpZmY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgxMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0VwaWxvZ1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XG5cbiAgICB9XG5cbiAgICBhc3luYyBibGluayh0aW1lcykge1xuXG4gICAgICAgIC8vTG9vcFxuICAgICAgICB3aGlsZSAodGltZXMgPiAwKSB7XG4gICAgICAgICAgICAvL0dpdmUgdGhlIHRpbGVvYmplY3QgYSBncmVlbiB0aW50XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGQUFBQTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDIwMCk7XG4gICAgICAgICAgICAvL1JlbW92ZSB0aGUgdGludFxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgyMDApO1xuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xuXG4gICAgc3RhdGljIHRpY2tTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQva2xpY2subXAzJyk7XG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvZXhwbG9kZS5tcDMnKTtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSAmJiBoaXRFdmVudC5kYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgVG50UHVtcGtpbi50aWNrU291bmQucGxheSgpO1xuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGluayg0KTtcbiAgICAgICAgICAgIC8vVHJpZ2dlciBUaWxlT2JqZWN0cyBhcm91bmRcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXNBcm91bmQpe1xuICAgICAgICAgICAgICAgIHRpbGUub25IaXQobmV3IEhpdEV2ZW50KGhpdEV2ZW50LmluaXRpYXRvcixCYWxhbmNpbmcudG50UHVtcGtpbi5leHBsb3Npb25EYW1hZ2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9FeHBsb2RlISEhXG4gICAgICAgICAgICBUbnRQdW1wa2luLmV4cGxvZGVTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXlBbmltYXRpb24oXCJleHBsb2RlXCIpO1xuICAgICAgICAgICAgLy9EZXN0cm95IHB1bXBraW4gOi0oXG4gICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICAgICAgICAgIGV4cGxvZGU6IDEyXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlTmFtZSBpbiBhbmltYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHB1bXBraW5fJHtzdGF0ZU5hbWV9XyR7aX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5pbWF0aW9uc1tzdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gICAgfVxuXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXG4gICAgICAgIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBmcmFtZTtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXG4gICAgICogVGhpcyBhcnJheSBob2xkcyBvbmx5IGV4aXN0aW5nIHRpbGVzIGFuZCBubyB1bmRlZmluZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcbiAgICAgICAgY29uc3QgbXlYID0gdGhpcy5tb3RoZXIuZ3JpZFg7XG4gICAgICAgIGNvbnN0IG15WSA9IHRoaXMubW90aGVyLmdyaWRZO1xuXG4gICAgICAgIGxldCB0aWxlczogVGlsZVtdID0gW107XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYICsgMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgKyAxKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgLSAxKSk7XG5cbiAgICAgICAgLy9GaWx0ZXIgbm90IGV4aXN0aW5nIHRpbGVzXG4gICAgICAgIGxldCB0b1JldHVybjpUaWxlW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xuICAgICAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoMSwwKSk7XG4gICAgICAgIG5ldyBUbnRQdW1wa2luKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKDIsMCkpO1xuICAgICAgICBwLm9uSGl0KG5ldyBIaXRFdmVudChnYW1lTWFuYWdlci5tYXAucGxheWVyc1swXSwgMSkpO1xuICAgIH1cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0O1xuXG4gICAgICAgIC8vRHJhdyBmcmFtZVxuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5saW5lU3R5bGUoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCB0aGlzLmJvcmRlckNvbG9yKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvcmRlclJlY3RhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvL0NsZWFyIGxhc3QgcHJvZ3Jlc3MgU2hhcGVcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NTaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDAuMSkgeyAvL0RyYXcgdG9vIHNtYWxsIHByb2dyZXNzIGxvb2tzIHVnbHlcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxuICAgICAgICAgICAgY29uc3QgbGluZVdpZHRoID0gNjQgKiB0aGlzLnByb2dyZXNzIC0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHRoaWNrID0gU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMjtcblxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZSh0aGljaywgdGhpcy5wcm9ncmVzc0NvbG9yKVxuICAgICAgICAgICAgICAgIC5tb3ZlVG8oU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTIC0gMSwgdGhpY2sgLSAxKVxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAgfHwgcHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNhbid0IHNldCBwcm9ncmVzcyBsb3dlciB0aGFuIDAgb3IgaGlnaGVyIHRoYW4gMVwiKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aDtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKDk0OSksIG1vdGhlciwgdHJ1ZSk7IC8vOTQ5IGlzIGEgYm94IHNwcml0ZVxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHtcbiAgICB0eXBlOklURU0sXG4gICAgY291bnQ6bnVtYmVyXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdGljIGdyb3dTdGF0ZXM6IG51bWJlciA9IDU7XG4gICAgY3JvcDogQ3JvcDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6VGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsbW90aGVyKTtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3JvdygpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGFzeW5jIGdyb3coKTtcblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OkhpdEV2ZW50KSB7XG4gICAgICAgIGlmKCF0aGlzLnZ1bG5lcmFibGUpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgaGl0RXZlbnQuaW5pdGlhdG9yLnBsYXlBbmltYXRpb24oXCJwdXRcIik7XG4gICAgICAgIC8vSGFydmVzdCB5b3Vyc2VsZlxuICAgICAgICBoaXRFdmVudC5pbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKHRoaXMuY3JvcC50eXBlLHRoaXMuY3JvcC5jb3VudCk7XG4gICAgICAgIC8vZ2l2ZSB0aGUgaW5pdGlhdG9yIHRoZSBpdGVtc1xuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xuICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9QbGFudCBleHRlbmRzIFBsYW50e1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOlRpbGUpe1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJ0b21hdG9fcGxhbnRfMFwiKSxtb3RoZXIpO1xuICAgICAgICB0aGlzLmNyb3AgPSB7dHlwZTpJVEVNLlRPTUFUT19QUk9KRUNUSUxFLCBjb3VudDpCYWxhbmNpbmcudG9tYXRvUGxhbnQuY3JvcENvdW50fTtcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgVG9tYXRvUGxhbnQuZ3Jvd1N0YXRlczsgZ3Jvd1N0ZXArKykge1xuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoQmFsYW5jaW5nLnRvbWF0b1BsYW50Lmdyb3dTdGVwVGltZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFB1bXBraW5QbGFudCBleHRlbmRzIFBsYW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX3BsYW50XzBcIiksIG1vdGhlcik7XG4gICAgICAgIHRoaXMuY3JvcCA9IHt0eXBlOklURU0uVE5UX1BVTVBLSU4sIGNvdW50OkJhbGFuY2luZy5wdW1wa2luUGxhbnQuY3JvcENvdW50fTtcbiAgICB9XG5cbiAgICBhc3luYyBncm93KCkge1xuICAgICAgICBmb3IgKGxldCBncm93U3RlcCA9IDE7IGdyb3dTdGVwIDwgUHVtcGtpblBsYW50Lmdyb3dTdGF0ZXM7IGdyb3dTdGVwKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wdW1wa2luUGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShgcHVtcGtpbl9wbGFudF8ke2dyb3dTdGVwfWApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuaW1wb3J0IHsgVG9tYXRvUGxhbnQgfSBmcm9tIFwiLi9Ub21hdG9QbGFudFwiO1xuaW1wb3J0IHsgUHVtcGtpblBsYW50IH0gZnJvbSBcIi4vUHVtcGtpblBsYW50XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIGdyaWRYOiBudW1iZXI7XG4gICAgZ3JpZFk6IG51bWJlcjtcbiAgICB0aWxlT2JqZWN0OiBUaWxlT2JqZWN0O1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XG4gICAgICAgIHRoaXMuZ3JpZFkgPSBncmlkWTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gZ3JpZFggKiBtYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IGdyaWRZICogbWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KG5ld1RpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdCA9IG5ld1RpbGVPYmplY3Q7XG4gICAgICAgICAgICBuZXdUaWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICAgICAgdGhpcy5tYXAudGlsZU9iamVjdENvbnRhaW5lci5hZGRDaGlsZChuZXdUaWxlT2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhpdChoaXRFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uUGxhY2Uob2JqZWN0VHlwZTogSVRFTSkge1xuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgc3dpdGNoIChvYmplY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRvbWF0b1BsYW50KHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFB1bXBraW5QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVG50UHVtcGtpbih0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdGhlIGZpcnN0IHBsYXllciB0aGF0IG9jY3VwaWVzIHRoaXMgdGlsZS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIHRpbGUgaXMgbm90IG9jY3VwaWVkXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5KCk6IFBsYXllciB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueCAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS54ICsgcGxheWVyLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnkgKyBwbGF5ZXIuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkWCA+PSB4UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRYIDw9IHhSYW5nZS50byAmJiB0aGlzLmdyaWRZID49IHlSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFkgPD0geVJhbmdlLnRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGFueSBwbGF5ZXIgb24gdGhpcyB0aWxlLlxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeUFueVBsYXllcigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5pc09jY3VwaWVkQnkoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvY2N1cGllZCBieSBwbGF5ZXJcIiArIHBsYXllci5wbGF5ZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbnQoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgaWYgKCF0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QudGludCA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgb3duZXI6IFBsYXllcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50b3dlci5kZWZhdWx0SGVhbHRoO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcjogUGxheWVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcudG93ZXIuZGVmYXVsdEhlYWx0aCk7XG4gICAgICAgICAgICAgICAgVG93ZXIub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcblxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7QmFsYW5jaW5nfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLnRyZWUuZGVmYXVsdEhlYWx0aDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIG1vdGhlcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoKTtcbiAgICAgICAgICAgICAgICBUcmVlLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICBpbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKElURU0uV0FMTCwgQmFsYW5jaW5nLnRyZWUuY3JvcENvdW50KTtcbiAgICAgICAgVHJlZS5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vVG93ZXJcIjtcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZWRNYXAgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgc3RhdGljIE1BUF9aT09NID0gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuXG4gICAgcGxheWVyczogUGxheWVyW107XG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gICAgZmluYWxUaWxlV2lkdGg6IG51bWJlcjtcbiAgICBmaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgICAvKipIb2xkIGFsbCBUaWxlcy4gVXNhZ2U6IHRpbGVzW3ldW3hdICovXG4gICAgcHJpdmF0ZSB0aWxlczogVGlsZVtdW107XG4gICAgZ3JpZFdpZHRoOiBudW1iZXI7XG4gICAgZ3JpZEhlaWdodDogbnVtYmVyO1xuICAgIHRpbGVDb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBwbGF5ZXJDb250YWluZXI6IENvbnRhaW5lcjtcbiAgICB0aWxlT2JqZWN0Q29udGFpbmVyOiBDb250YWluZXI7XG4gICAgZXh0cmFTdHVmZkNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRpbGVPYmplY3RDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlT2JqZWN0Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBsYXllckNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5leHRyYVN0dWZmQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgfVxuXG5cbiAgICBnZXRNYXBPYmplY3RQcm9wZXJ0eShtYXBPYmplY3Q6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBtYXBPYmplY3QucHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vTG9hZHMgdGhlIG1hcCB3aXRoIHNwcml0ZXNoZWV0LiBMYXN0IHBhcmFtZXRlciBpcyBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgcGFyc2luZyB0aGUgbWFwIHdpdGggdGhlIG5ldyBwYXJzZWQgbWFwIGFzIHBhcmFtZXRlclxuICAgIHN0YXRpYyBsb2FkTWFwKG1hcERhdGEpIHtcblxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgVGlsZWRNYXAoKTtcbiAgICAgICAgY29uc3QgdGlsZWRTcHJpdGVzaGVldCA9IGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQ7XG4gICAgICAgIGNvbnN0IGF0bGFzU3ByaXRlc2hlZXQgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0O1xuXG4gICAgICAgIGxldCBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG4gICAgICAgIG1hcC5maW5hbFRpbGVXaWR0aCA9IHRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIG1hcC5maW5hbFRpbGVIZWlnaHQgPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBTUFJJVEVfU0NBTEUueTtcblxuICAgICAgICAvL0J1aWxkIGFsbCBUaWxlTGF5ZXJzIGZpcnN0XG4gICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwidGlsZWxheWVyXCIpIHtcblxuICAgICAgICAgICAgICAgIG1hcC5ncmlkV2lkdGggPSB0bC53aWR0aDtcbiAgICAgICAgICAgICAgICBtYXAuZ3JpZEhlaWdodCA9IHRsLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vSW5pdCBtYXAncyB0aWxlcyBhcnJheVxuICAgICAgICAgICAgICAgIG1hcC50aWxlcyA9IG5ldyBBcnJheShtYXAuZ3JpZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXAudGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnRpbGVzW2ldID0gbmV3IEFycmF5KG1hcC5ncmlkV2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgVGlsZXMgZm9yIGVhY2ggdGlsZSB0byB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGwuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0bC53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHJvdyAqIHRsLndpZHRoICsgY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRsLmRhdGFbaW5kZXhdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRsLmRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IFRpbGUodGV4dHVyZSwgcm93LCBjb2x1bW4sIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGUobmV3VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vSXRlcmF0ZSB0aHJvdWdoIE9iamVjdCBMYXllcnNcbiAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuXG4gICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcblxuXG4gICAgICAgICAgICAgICAgLy9BZGQgYWxsIHBsYXllcnMgZmlyc3RcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvIG9mIHRsLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fICBfICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX18gXFx8IHwgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgfF9fKSB8IHwgX18gXyBfICAgXyAgX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fXy98IHwvIF9gIHwgfCB8IHwvIF8gXFwgJ19ffFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8IHwgICAgfCB8IChffCB8IHxffCB8ICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8X3wgICAgfF98XFxfXyxffFxcX18sIHxcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgIF9fLyB8ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgfF9fXy8gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjby50eXBlID09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChjby54ICogU1BSSVRFX1NDQUxFLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAoTWF0aC5yb3VuZChjby55KSAtIGNvLmhlaWdodCkgKiBTUFJJVEVfU0NBTEUueTsgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJJZDogbnVtYmVyID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcInBsYXllcklkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcih4LCB5LCBtYXAsIHBsYXllcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRQbGF5ZXIobmV3UGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFNwcml0ZXMgZm9yIGVhY2ggb2JqZWN0IHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvIG9mIHRsLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IF9fX19fICAgICAgX19fX18gXyBfXyBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfC8gXyBcXCBcXCAvXFwgLyAvIF8gXFwgJ19ffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IChfKSBcXCBWICBWIC8gIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8X3xcXF9fXy8gXFxfL1xcXy8gXFxfX198X3wgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjby50eXBlID09IFwidG93ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3duZXJJZCA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJvd25lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVyID0gbWFwLnBsYXllcnNbb3duZXJJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG93ZXIgPSBuZXcgVG93ZXIodGV4dHVyZSwgbW90aGVyLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgfCB8ICBfXy8gIF9fL1xuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8qKipcbiAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgXFwgXFwgICAgICAgIC8gLyAgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBcXCBcXCAgL1xcICAvIC9fIF98IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICBcXCAgL1xcICAvIChffCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgIFxcLyAgXFwvIFxcX18sX3xffF98XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXcgV2FsbChtb3RoZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG5cblxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbGUgYXQgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHggYW5kIHkgZ3JpZCBjb29yZGluYXRlc1xuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHRpbGUgYXQgdGhpcyBjb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSBncmlkWCB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0gZ3JpZFkgeS1jb29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0VGlsZShncmlkWDpudW1iZXIsZ3JpZFk6bnVtYmVyKTpUaWxle1xuICAgICAgICBpZih0aGlzLnRpbGVzW2dyaWRZXSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1tncmlkWV1bZ3JpZFhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3Q6IFJlY3RhbmdsZSkge1xuXG4gICAgICAgIC8vYW4gT2JqZWN0IGNhbiBiZSBwbGFjZWQgXCJiZXR3ZWVuXCIgdGlsZXMgaW4gdGlsZWQgbWFwIGVkaXRvci4gQnV0IGV2bnRzIGNhbiBiZSB0cmlnZ2VyZWQgb25seSBmcm9tIHdob2xlIHRpbGVzLiBTbyB0aGUgb2JlamNjdHMgcG9zaXRpb24gaXMgbWFwcGVkIHRvIHRoZSBuZWFyZXN0IFRpbGVcblxuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbWFwT2JqZWN0LnggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbGV0IHhUaWxlcyA9IG9yaWdpbmFsWCAvIHRoaXMuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcblxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gKG1hcE9iamVjdC55IC0gbWFwT2JqZWN0LmhlaWdodCkgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTsgIC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lciAgICAgICAgICAgICAgXG4gICAgICAgIGxldCB5VGlsZXMgPSBvcmlnaW5hbFkgLyB0aGlzLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB7IGdyaWRYOiB4VGlsZXMsIGdyaWRZOiB5VGlsZXMgfTtcbiAgICB9XG5cbiAgICBnZXRUaWxlTmVhcmVzdFRvKG1hcE9iamVjdDogUmVjdGFuZ2xlKTogVGlsZSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zLmdyaWRZXVtwb3MuZ3JpZFhdO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xuXG4gICAgIGtleVVwcyA9IHt9O1xuICAgICBrZXlEb3ducyA9IHt9O1xuICAgICBBTllfS0VZID0gXCJhbnlfa2V5XCI7XG5cbiAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcbiAgICB9XG5cbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleVVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xuICAgIH1cblxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF0bGFzU3ByaXRlc2hlZXQge1xuXG5cdGF0bGFzRGF0YTtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblxuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIGF0bGFzRGF0YSkge1xuXHRcdHRoaXMuYXRsYXNEYXRhID0gYXRsYXNEYXRhO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XHRcdFxuXHR9XG5cblx0Z2V0VGV4dHVyZShuYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcblxuXHRcdGNvbnN0IHByb3BzID0gdGhpcy5hdGxhc0RhdGEuaXRlbXNbbmFtZV07XG5cdFx0aWYgKHByb3BzID09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBmaW5kIHRleHR1cmUgJyR7bmFtZX0nIGluIHNwcml0ZXNoZWV0YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShwcm9wcy54LCBwcm9wcy55LCBwcm9wcy53aWR0aCwgcHJvcHMuaGVpZ2h0KSk7XG5cdH1cblxuXG59IiwiY29uc3QgdWlDb25zdGFudHMgPSB7XG4gICAgbWVudUJhcjoge1xuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgaWNvbjp7XG4gICAgICAgICAgICBzY2FsZTozLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICB3aWR0aDogNTEyLFxuICAgICAgICBoZWlnaHQ6IDYxMixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsImltcG9ydCB7IENvbnRhaW5lciwgUmVjdGFuZ2xlLCBHcmFwaGljcywgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi91aUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTWVudSBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXI6IFBsYXllcjtcblxuICAgIGFjdGlvbkljb246U3ByaXRlO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIHdpZHRoOiBudW1iZXIsIHg6bnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuXG4gICAgICAgIHRoaXMueSA9IHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCAtIHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0O1xuICAgICAgICB0aGlzLnggPSB4O1xuXG4gICAgICAgIGxldCBiZ1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIGJnU2hhcGUuYmVnaW5GaWxsKHBsYXllci5jb2xvcik7XG4gICAgICAgIGJnU2hhcGUuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0KTtcbiAgICAgICAgYmdTaGFwZS5lbmRGaWxsKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYmdTaGFwZSk7XG5cbiAgICAgICAgbGV0IGFpID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUocGxheWVyLnBsYWNlTW9kZSkpO1xuICAgICAgICBhaS5zY2FsZS5zZXQodWlDb25zdGFudHMubWVudUJhci5pY29uLnNjYWxlKTtcbiAgICAgICAgYWkueCA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgYWkueSA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChhaSk7XG4gICAgICAgIHRoaXMuYWN0aW9uSWNvbiA9IGFpO1xuXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllck1lbnVcIitwbGF5ZXIucGxheWVySWQsdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgZG9TdGVwID0gKCk9PntcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGhpcy5wbGF5ZXIucGxhY2VNb2RlKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiXG5pbXBvcnQgUGxheWVyTWVudSBmcm9tIFwiLi9wbGF5ZXJNZW51XCI7XG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBwbGF5ZXJNZW51czogUGxheWVyTWVudVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51V2lkdGggPSB1aUNvbnN0YW50cy5zdGFnZS53aWR0aCAvIHBsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyTWVudSA9IG5ldyBQbGF5ZXJNZW51KHBsYXllcnNbaV0sIG1lbnVXaWR0aCwgbWVudVdpZHRoICogaSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllck1lbnVzLnB1c2gocGxheWVyTWVudSk7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHBsYXllck1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEtleWJvYXJkTWFuYWdlciB9IGZyb20gXCIuL0tleWJvYXJkTWFuYWdlclwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBsb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgVG50UHVtcGtpbiB9IGZyb20gXCIuL1RudFB1bXBraW5cIjtcbmltcG9ydCB7IEF0bGFzU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9BdGxhc1Nwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB1aUNvbnN0YW50cyBmcm9tIFwiLi4vdWkvdWlDb25zdGFudHNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL3VpL21lbnVCYXJcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgXG4gICAgdGlsZWRTcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBhdGxhc1Nwcml0ZXNoZWV0OiBBdGxhc1Nwcml0ZXNoZWV0O1xuICAgIFxuICAgIG1hcDogVGlsZWRNYXA7XG4gICAgcGl4aUFwcDogQXBwbGljYXRpb247XG4gICAgXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XG4gICAgbWVudUJhcjogTWVudUJhcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9DcmVhdGUgYSBQaXhpIEFwcGxpY2F0aW9uXG4gICAgICAgIGNsYXNzIFBpeGlPcHRpb25zIGltcGxlbWVudHMgQXBwbGljYXRpb25PcHRpb25zIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCkgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnModWlDb25zdGFudHMuc3RhZ2Uud2lkdGgsIHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBpeGlBcHAgPSBuZXcgQXBwbGljYXRpb24ocGl4aU9wdGlvbnMpO1xuICAgICAgICBcbiAgICAgICAgLy9BZGQgdGhlIGNhbnZhcyB0aGF0IFBpeGkgYXV0b21hdGljYWxseSBjcmVhdGVkIGZvciB5b3UgdG8gdGhlIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBpeGlBcHAudmlldyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvTG9hZCA9IFtcbiAgICAgICAgICAgIHtuYW1lOid0aWxlZFNwcml0ZXNoZWV0VGV4dHVyZScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nJ30sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldFRleHR1cmUnLCB1cmw6J2RhdGEvYXNzZXRzL3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0LnBuZyd9LFxuICAgICAgICAgICAge25hbWU6J2F0bGFzU3ByaXRlc2hlZXREYXRhJywgdXJsOidkYXRhL2Fzc2V0cy9zcHJpdGVzbWl0aF9zcHJpdGVzaGVldC5qc29uJ30sXG4gICAgICAgICAgICB7bmFtZTonbWFwRGF0YScsIHVybDonZGF0YS9tYXBzL21hcDEuanNvbid9LFxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICBsb2FkZXIuYWRkKHRvTG9hZCkubG9hZCh0aGlzLmxvYWRlckZpbmlzaGVkKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgbG9hZGVyRmluaXNoZWQgPSAoKT0+e1xuICAgICAgICBcbiAgICAgICAgdGhpcy5rZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGVyID0gbmV3IFVwZGF0ZVNjaGVkdWxlcigpO1xuICAgICAgICBcbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XG4gICAgICAgIHRoaXMudGlsZWRTcHJpdGVzaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy50aWxlZFNwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCAxLCAxNiwgMTYsIDMxLCA1NylcbiAgICAgICAgLy9BdGxhcyBTcHJpdGVzaGVldFxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy9SZWdpc3RlciBVcGRhdGUgc2NoZWR1bGVyXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudXBkYXRlU2NoZWR1bGVyLmRvU3RlcCk7XG4gICAgICAgIFxuICAgICAgICAvL0xvYWQgTWFwXG4gICAgICAgIHRoaXMubWFwID0gVGlsZWRNYXAubG9hZE1hcChQSVhJLmxvYWRlci5yZXNvdXJjZXMubWFwRGF0YS5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheSBNYXBcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IFBsYXllciBDb250cm9sc1xuICAgICAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5tYXAucGxheWVycztcbiAgICAgICAgcGxheWVyc1swXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcInhcIiwgXCJjXCIsIFwieVwiKTtcbiAgICAgICAgcGxheWVyc1swXS5zZXRDb2xvcigweENDRUVBQSk7XG4gICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xuICAgICAgICBwbGF5ZXJzWzFdLnNldENvbG9yKDB4Q0NDQ0ZGKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL0RyYXcgbWVudVxuICAgICAgICB0aGlzLmRyYXdNZW51QmFyKHBsYXllcnMpO1xuICAgICAgICBcbiAgICAgICAgLy9TdGFydCBQaXhpIEFwcFxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG4gICAgICAgIFxuICAgICAgICAvL3RoaXMudGVzdCgpO1xuXG4gICAgfVxuXG4gICAgXG4gICAgZHJhd01lbnVCYXIocGxheWVyczogUGxheWVyW10pIHtcbiAgICAgICAgdGhpcy5tZW51QmFyID0gbmV3IE1lbnVCYXIocGxheWVycyk7XG4gICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1lbnVCYXIpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICB0ZXN0KCkge1xuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLlROVF9QVU1QS0lOLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUsMTAwKTtcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLDEwMCk7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0ucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTtcbiAgICB9XG4gICAgXG59XG5cbiIsImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuL21vZGVsL0dhbWVNYW5hZ2VyXCJcblxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcbmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xuXG5leHBvcnQge2dhbWVNYW5hZ2VyfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==