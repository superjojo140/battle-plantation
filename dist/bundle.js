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
        alert("Player" + this.ownerId + " has lost!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlZFNwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9CYWxhbmNpbmcudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9IaXRFdmVudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1VwZGF0ZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG50UHVtcGtpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1dhbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1BsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQXRsYXNTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL3VpQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvdWkvcGxheWVyTWVudS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL3VpL21lbnVCYXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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RyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDM0QsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQzs7OztBQ3pHRDtBQUErQztBQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZWRTcHJpdGVzaGVldHtcclxuXHJcblx0Ym9yZGVyOiBudW1iZXI7XHJcblx0dGlsZUhlaWdodDogbnVtYmVyO1xyXG5cdHRpbGVXaWR0aDogbnVtYmVyO1xyXG5cdHJvd3M6IG51bWJlcjtcclxuXHRjb2x1bW5zOiBudW1iZXI7XHJcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcclxuXHR0ZXh0dXJlczogVGV4dHVyZVtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLGJvcmRlcix0aWxlV2lkdGgsdGlsZUhlaWdodCxyb3dzLGNvbHVtbnMpe1xyXG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XHJcblx0XHR0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xyXG5cdFx0dGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XHJcblx0XHR0aGlzLnJvd3MgPSByb3dzO1xyXG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcclxuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IHRleHR1cmU7XHJcblx0XHR0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuXHRcdHRoaXMudGV4dHVyZXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldFRleHR1cmUoZ2lkOm51bWJlcik6VGV4dHVyZSAge1xyXG5cdFx0Ly9DaGVjayB3ZXRoZXIgdGV4dHVyZXMgd2FzIGFsbHJlYWR5IGZyYW1lZCBmb3JtIHNwcml0ZXNoZWV0XHJcblx0XHRpZiAodGhpcy50ZXh0dXJlc1tnaWRdKSB7XHJcblx0XHQgIHJldHVybiB0aGlzLnRleHR1cmVzW2dpZF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0ICAvL0NhbGN1bGF0ZSByb3cgYW5kIGNvbHVtbiBmcm9tIGdpZFxyXG5cdFx0ICBsZXQgcm93Om51bWJlciA9IE1hdGguZmxvb3IoKGdpZCAtIDEpIC8gdGhpcy5jb2x1bW5zKTtcclxuXHRcdCAgbGV0IGNvbHVtbjpudW1iZXIgPSAoZ2lkIC0gMSkgJSB0aGlzLmNvbHVtbnM7XHJcblx0XHJcblx0XHQgIGxldCB0aWxlV2lkdGg6bnVtYmVyID0gdGhpcy50aWxlV2lkdGg7XHJcblx0XHQgIGxldCB0aWxlSGVpZ2h0Om51bWJlciA9IHRoaXMudGlsZUhlaWdodDtcclxuXHRcclxuXHRcdCAgbGV0IHg6bnVtYmVyID0gY29sdW1uICogdGlsZVdpZHRoICsgY29sdW1uICogdGhpcy5ib3JkZXI7XHJcblx0XHQgIGxldCB5Om51bWJlciA9IHJvdyAqIHRpbGVIZWlnaHQgKyByb3cgKiB0aGlzLmJvcmRlcjtcclxuXHRcclxuXHRcdCAgbGV0IHQ6VGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZSh4LCB5LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpKTtcclxuXHRcdCAgLy9TYXZlIFRleHR1cmUgaW4gY2FjaGUgYXJyYXlcclxuXHRcdCAgdGhpcy50ZXh0dXJlc1tnaWRdID0gdDtcclxuXHRcdCAgcmV0dXJuIHQ7XHJcblx0XHR9XHJcblx0ICB9XHJcblx0XHJcblxyXG59IiwiZW51bSBJVEVNIHtcclxuICAgIFRPTUFUT19QTEFOVCA9IFwidG9tYXRvX3BsYW50XCIsXHJcbiAgICBUT01BVE9fUFJPSkVDVElMRSA9IFwidG9tYXRvX3Byb2plY3RpbGVcIixcclxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcclxuICAgIFROVF9QVU1QS0lOID0gXCJ0bnRfcHVtcGtpblwiLFxyXG4gICAgV0FMTCA9IFwid2FsbFwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgSVRFTSB9O1xyXG4iLCJcclxuY29uc3QgQmFsYW5jaW5nID0ge1xyXG4gICAgdHJlZToge1xyXG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEsXHJcbiAgICAgICAgY3JvcENvdW50OiA0LFxyXG4gICAgfSxcclxuXHJcbiAgICB3YWxsOiB7XHJcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcclxuICAgIH0sXHJcblxyXG4gICAgdG50UHVtcGtpbjoge1xyXG4gICAgICAgIGV4cGxvc2lvbkRhbWFnZTogMS41LFxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgICBoaXREYW1hZ2U6IDAuMSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRvd2VyOiB7XHJcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMTAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRvbWF0b1Byb2plY3RpbGU6e1xyXG4gICAgICAgIHNwZWVkIDogNyxcclxuICAgICAgICBoaXREYW1hZ2U6IDAuMyxcclxuICAgIH0sXHJcblxyXG4gICAgdG9tYXRvUGxhbnQ6e1xyXG4gICAgICAgIGdyb3dTdGVwVGltZSA6IDUwMDAsXHJcbiAgICAgICAgY3JvcENvdW50OiAyXHJcbiAgICB9LFxyXG5cclxuICAgIHB1bXBraW5QbGFudDp7XHJcbiAgICAgICAgZ3Jvd1N0ZXBUaW1lIDogMTAwMDAsXHJcbiAgICAgICAgY3JvcENvdW50OiAyXHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgQmFsYW5jaW5nIH0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRFdmVudCB7XHJcblxyXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XHJcbiAgICBkYW1hZ2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XHJcblxyXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xyXG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFjayhkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc3luY2hyb251cyBQcm9taXNlIGZvciB3YWl0aW5nIHRoZSBnaXZlbiB0aW1lIGluIG1zXHJcbiAgICAgKiBUaGlzIGRvZXMgTk9UIHBhdXNlIG9yIHN0b3AgdGhlIFVwZGF0ZVNoZWR1bGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB3YWl0ID0gbXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IHsgU3ByaXRlLCBQb2ludCwgVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tIFwiLi9QbGF5ZXJcIlxyXG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSAnLi9CYWxhbmNpbmcnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcclxuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcclxuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSAnLi9VcGRhdGVTY2hlZHVsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvbWF0b1Byb2plY3RpbGUgZXh0ZW5kcyBTcHJpdGUge1xyXG5cclxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xyXG4gICAgc3RhdGljIHRocm93U291bmQgPSBuZXcgQXVkaW8oJ2RhdGEvYXNzZXRzL3NvdW5kL3NuYXAubXAzJyk7XHJcbiAgICBzdGF0aWMgc21hc2hTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvc21hc2gubXAzJyk7XHJcblxyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpbml0aWF0b3I6IFBsYXllcjtcclxuICAgIHByaXZhdGUgdng6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHZ5OiBudW1iZXIgPSAwO1xyXG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgc3RhdGljIGdldE5ld0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGB0b21hdG9fcHJvamVjdGlsZV8ke1RvbWF0b1Byb2plY3RpbGUuaWRDb3VudGVyKyt9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uOiBESVJFQ1RJT04sIGluaXRpYXRvcjogUGxheWVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInRvbWF0b19wcm9qZWN0aWxlX2ZseVwiKSk7XHJcbiAgICAgICAgdGhpcy5pZCA9IFRvbWF0b1Byb2plY3RpbGUuZ2V0TmV3SWQoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IG5ldyBQb2ludCgyLCAyKTtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlVQOiB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkRPV046IHRoaXMudnkgPSAxICogQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuc3BlZWQ7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOiB0aGlzLnZ4ID0gLTEgKiBCYWxhbmNpbmcudG9tYXRvUHJvamVjdGlsZS5zcGVlZDsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOiB0aGlzLnZ4ID0gMSAqIEJhbGFuY2luZy50b21hdG9Qcm9qZWN0aWxlLnNwZWVkOyBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHRvbWF0b19wcm9qZWN0aWxlX3NtYXNoXyR7aX1gO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKHRleHR1cmVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XHJcblxyXG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3Rlcih0aGlzLmlkLCB0aGlzLmRvU3RlcCk7XHJcblxyXG4gICAgICAgIGdhbWVNYW5hZ2VyLm1hcC5leHRyYVN0dWZmQ29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLnRocm93U291bmQucGxheSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxyXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy54ICsgdGhpcy52eCAqIGRlbHRhO1xyXG4gICAgICAgIGxldCBuZXdZID0gdGhpcy55ICsgdGhpcy52eSAqIGRlbHRhO1xyXG5cclxuICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcclxuICAgICAgICBsZXQgeFJhbmdlID0ge1xyXG4gICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKChuZXdYIC0gdGhpcy53aWR0aCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZVdpZHRoKSxcclxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLndpZHRoIC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlV2lkdGgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHlSYW5nZSA9IHtcclxuICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcigobmV3WSAtIHRoaXMuaGVpZ2h0IC8gMikgLyBnYW1lTWFuYWdlci5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcclxuICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLmhlaWdodCAvIDIpIC8gZ2FtZU1hbmFnZXIubWFwLmZpbmFsVGlsZUhlaWdodClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXHJcbiAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYmxvY2tlZFRpbGU6IFRpbGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSB4UmFuZ2UuZnJvbTsgeCA8PSB4UmFuZ2UudG87IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICggZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCx5KSA9PSB1bmRlZmluZWQgfHwgZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUoeCx5KS50aWxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tlZFRpbGUgPSBnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSh4LHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICs9IDAuNSAqIGRlbHRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9GbHkgaW50byB0aGUgdGlsZU9iamVjdFxyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy52eCAqIDI7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnZ5ICogMjtcclxuICAgICAgICAgICAgdGhpcy5zbWFzaChibG9ja2VkVGlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzbWFzaCh0aWxlOiBUaWxlKSB7XHJcbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnVucmVnaXN0ZXIodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIC8vUGxheSBTbWFzaCBzb3VuZFxyXG4gICAgICAgIFRvbWF0b1Byb2plY3RpbGUuc21hc2hTb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgICAgIC8vVHJpZ2dlciBIaXQgZXZlbnQgb24gaGl0dGVuIHRpbGVcclxuICAgICAgICBpZiAodGlsZSkge1xyXG4gICAgICAgICAgICB0aWxlLm9uSGl0KG5ldyBIaXRFdmVudCh0aGlzLmluaXRpYXRvciwgQmFsYW5jaW5nLnRvbWF0b1Byb2plY3RpbGUuaGl0RGFtYWdlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1BsYXkgU21hc2ggYW5pbWF0aW9uXHJcbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZnJhbWU7XHJcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDQwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcclxuXHJcbiAgICB0b21hdG9fcHJvamVjdGlsZTogbnVtYmVyID0gMDtcclxuICAgIHRudF9wdW1wa2luOiBudW1iZXIgPSAwO1xyXG4gICAgd2FsbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBnZXRJdGVtKGl0ZW1UeXBlOiBJVEVNKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiByZXR1cm4gdHJ1ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiByZXR1cm4gdHJ1ZTsgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IGlmICh0aGlzLnRvbWF0b19wcm9qZWN0aWxlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b21hdG9fcHJvamVjdGlsZS0tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FudCBnZXQgJHtpdGVtVHlwZX0uIEludmVudG9yeSBpcyBlbXB0eSFgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiBpZiAodGhpcy50bnRfcHVtcGtpbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG50X3B1bXBraW4tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbnQgZ2V0ICR7aXRlbVR5cGV9LiBJbnZlbnRvcnkgaXMgZW1wdHkhYClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiBpZiAodGhpcy53YWxsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YWxsLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW50IGdldCAke2l0ZW1UeXBlfS4gSW52ZW50b3J5IGlzIGVtcHR5IWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGdpdmUgJHtpdGVtVHlwZX14JHtjb3VudH1gKTtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW1UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTogdGhpcy50b21hdG9fcHJvamVjdGlsZSArPSBjb3VudDsgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMudG50X3B1bXBraW4gKz0gY291bnQ7IGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMud2FsbCArPSBjb3VudDsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xyXG5pbXBvcnQgeyBQb2ludCwgZXh0cmFzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXHJcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xyXG5pbXBvcnQgeyBUb21hdG9Qcm9qZWN0aWxlIH0gZnJvbSAnLi9Ub21hdG9Qcm9qZWN0aWxlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XHJcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gJy4vQmFsYW5jaW5nJztcclxuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tICcuL0hpdEV2ZW50JztcclxuaW1wb3J0IHsgSW52ZW50b3J5IH0gZnJvbSBcIi4vSW52ZW50b3J5XCI7XHJcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xyXG5cclxuZXhwb3J0IGVudW0gRElSRUNUSU9OIHsgVVAgPSBcInVwXCIsIFJJR0hUID0gXCJyaWdodFwiLCBET1dOID0gXCJkb3duXCIsIExFRlQgPSBcImxlZnRcIiwgU1RPUCA9IFwic3RvcFwiIH07XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XHJcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcclxuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KDEuNSwgMS41KTtcclxuXHJcbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xyXG4gICAgLy9BIGhleCB2YWx1ZSBvZiBhIGNvbG9yIGFsbCBwbGF5ZXIncyBzcHJpdGVzIGFyZSB0aW50ZWQgd2l0aFxyXG4gICAgY29sb3I6IG51bWJlciA9IDB4RkZGRkZGO1xyXG4gICAgbWFwOiBUaWxlZE1hcDtcclxuXHJcbiAgICBzcHJpdGU6IGV4dHJhcy5BbmltYXRlZFNwcml0ZTtcclxuICAgIGFuaW1hdGlvbnM7XHJcbiAgICB2eDogbnVtYmVyO1xyXG4gICAgdnk6IG51bWJlcjtcclxuXHJcbiAgICAvL1BsYXllciBpZ25vcmVzIGRvU3RlcCBhbmQgb25BY3Rpb24gRXZlbnRzIGlmIHN0dW5uZWRcclxuICAgIHN0dW5uZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XHJcblxyXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xyXG4gICAgbGFzdEtleTogc3RyaW5nO1xyXG4gICAgLyoqIFNhdmVzIHRoZSBjdXJyZW50IGRpcmVjdGlvbiAoU1RPUCB3aWxsIG5vdCBiZSBzYXZlZCBoZXJlLCBpbiB0aGlzIGNhc2UgdGhlIHZhbHVlIGlzIHRoZSBsYXN0IGRpcmVjdGlvbiBiZWZvcmUgU1RPUCkgKi9cclxuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcclxuXHJcblxyXG4gICAgdXBLZXk6IHN0cmluZztcclxuICAgIGRvd25LZXk6IHN0cmluZztcclxuICAgIGxlZnRLZXk6IHN0cmluZztcclxuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XHJcbiAgICBhY3Rpb25LZXk6IHN0cmluZztcclxuICAgIHNlbGVjdEtleTogc3RyaW5nO1xyXG4gICAgcGxhY2VLZXk6IHN0cmluZztcclxuICAgIGxhc3RUaW50ZWRUaWxlOiBUaWxlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgICAgIHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUExBTlQ7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUudGludCA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gRElSRUNUSU9OLkRPV047XHJcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBQbGF5ZXIuU1BSSVRFX1NDQUxFO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4xMztcclxuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xyXG5cclxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcclxuICAgICAgICBnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIucmVnaXN0ZXJLZXkoZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLkFOWV9LRVksIHRoaXMua2V5RG93biwgdGhpcy5rZXlVcCwgXCJwbGF5ZXJcIiArIHBsYXllcklkKTtcclxuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJcIiArIHBsYXllcklkLCB0aGlzLmRvU3RlcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xyXG4gICAgICAgICAgICB3YWxrOiB7XHJcbiAgICAgICAgICAgICAgICB1cDogMyxcclxuICAgICAgICAgICAgICAgIGRvd246IDMsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHV0OiB7XHJcbiAgICAgICAgICAgICAgICB1cDogMyxcclxuICAgICAgICAgICAgICAgIGRvd246IDMsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN1YlN0YXRlTmFtZSBpbiBhbmltYXRpb25zW3N0YXRlTmFtZV0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZXNBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHBsYXllcl8ke3N0YXRlTmFtZX1fJHtzdWJTdGF0ZU5hbWV9XyR7aX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGV4dHVyZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBsYWNlTW9kZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGxhY2VNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE5UX1BVTVBLSU47IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIElURU0uVE5UX1BVTVBLSU46IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUExBTlQ7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5XQUxMOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5QVU1QS0lOX1BMQU5UOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYENoYW5nZWQgUGxhY2VNb2RlLiBOZXcgbW9kZSBpczogJHt0aGlzLnBsYWNlTW9kZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBESVJFQ1RJT04pIHtcclxuICAgICAgICBpZiAodGhpcy5zdHVubmVkKSB7XHJcbiAgICAgICAgICAgIC8vUGxheWVyIGlzIHN0dW5uZWQgYW5kIGNhbid0IGNoYW5nZSBpdCdzIGRpcmVjdGlvblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTi5TVE9QKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmVzID0gdGhpcy5hbmltYXRpb25zLndhbGtbZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlBbmltYXRpb24oc3RhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lczogVGV4dHVyZVtdID0gdGhpcy5hbmltYXRpb25zW3N0YXRlXVt0aGlzLmN1cnJlbnREaXJlY3Rpb25dO1xyXG5cclxuICAgICAgICB0aGlzLnN0dW5uZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKVxyXG5cclxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXHJcbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IGZyYW1lO1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1dhaXQgYSBtb21lbnRcclxuICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg4MCk7XHJcblxyXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gYmFja3dhcmRzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZyYW1lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWVzW2ldO1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCg1MCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy9SZXN0b3JlIGxhc3QgZGlyZWN0aW9uJ3MgdGV4dHVyZVxyXG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMuY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEtleXModXBLZXksIGRvd25LZXksIGxlZnRLZXksIHJpZ2h0S2V5LCBhY3Rpb25LZXksIHNlbGVjdEtleSwgcGxhY2VLZXkpIHtcclxuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XHJcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcclxuICAgICAgICB0aGlzLmxlZnRLZXkgPSBsZWZ0S2V5O1xyXG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcclxuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcclxuICAgICAgICB0aGlzLnNlbGVjdEtleSA9IHNlbGVjdEtleTtcclxuICAgICAgICB0aGlzLnBsYWNlS2V5ID0gcGxhY2VLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3IoY29sb3I6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnNwcml0ZS50aW50ID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAga2V5RG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgIT0gdGhpcy5sYXN0S2V5ICYmICF0aGlzLnN0dW5uZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5ET1dOKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMubGVmdEtleTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uTEVGVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAxICogQmFsYW5jaW5nLnBsYXllci5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25LZXk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnBsYWNlS2V5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNlbGVjdEtleTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFBsYWNlTW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMubGVmdEtleTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkb1N0ZXAgPSAoZGVsdGEpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHRoaXMuc3ByaXRlLnggKyB0aGlzLnZ4ICogZGVsdGE7XHJcbiAgICAgICAgICAgIGxldCBuZXdZID0gdGhpcy5zcHJpdGUueSArIHRoaXMudnkgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxyXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdYIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKG5ld1kgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxyXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXAuZ2V0VGlsZSh4LHkpID09IHVuZGVmaW5lZCB8fCAodGhpcy5tYXAuZ2V0VGlsZSh4LHkpLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAuZ2V0VGlsZSh4LHkpLnRpbGVPYmplY3Quc29saWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJsb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUueSA9IG5ld1k7XHJcbiAgICAgICAgICAgICAgICAvL1RpbnQgdGhlIG5ldyBjdXJyZW50VGlsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIFRpbGUuXHJcbiAgICAqIFRoaXMgaXMgYWx3YXlzIHRoZSB0aWxlIHRoZSBwbGF5ZXIncyBzdGFuZGluZyBvbi5cclxuICAgICovXHJcbiAgICBnZXRDdXJyZW50VGlsZSgpOiBUaWxlIHtcclxuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcclxuICAgICAgICBsZXQgZ3JpZFkgPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMikgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0VGlsZShncmlkWCxncmlkWSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGludEN1cnJlbnRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW50ZWRUaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5nZXRDdXJyZW50VGlsZSgpO1xyXG4gICAgICAgIGlmIChjdCkge1xyXG4gICAgICAgICAgICBjdC5zZXRUaW50KHRoaXMuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RUaW50ZWRUaWxlID0gY3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUGxhY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0NyZWF0ZSBUb21hdG8gaWYgbmVjY2Vzc2FyeVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFjZU1vZGUgPT0gSVRFTS5UT01BVE9fUFJPSkVDVElMRSAmJiB0aGlzLmludmVudG9yeS5nZXRJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVG9tYXRvUHJvamVjdGlsZSh0aGlzLnNwcml0ZS54LCB0aGlzLnNwcml0ZS55LCB0aGlzLmN1cnJlbnREaXJlY3Rpb24sdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vRWxzZSBwbGFjZSB0aWxlT2JqZWN0IGlmIHJlc3NvdXJjZXMgYXJlIGluIGludmVudG9yeVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmludmVudG9yeS5nZXRJdGVtKHRoaXMucGxhY2VNb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwicHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGUub25QbGFjZSh0aGlzLnBsYWNlTW9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9uSGl0KG5ldyBIaXRFdmVudCh0aGlzLCBCYWxhbmNpbmcucGxheWVyLmhpdERhbWFnZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSwgUG9pbnQgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaWxlT2JqZWN0IGV4dGVuZHMgU3ByaXRlIHtcclxuXHJcbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvaGl0Lm1wMycpO1xyXG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCdkYXRhL2Fzc2V0cy9zb3VuZC9ibG9iLm1wMycpO1xyXG5cclxuICAgIG1vdGhlcjogVGlsZTtcclxuICAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2dWxuZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUsIHNvbGlkPzpib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XHJcblxyXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7XHJcblxyXG4gICAgICAgIC8vc2V0IHJlbmRlciBjb29yZGluYXRlc1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcclxuXHJcbiAgICAgICAgLy9TZXQgdGltZXIgZm9yIHNvbGlkIHRpbGVzXHJcbiAgICAgICAgaWYoc29saWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEFBQUFBQTtcclxuICAgICAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKGB3YWl0X3RvX2JlY29tZV9zb2xpZF8ke3RoaXMubW90aGVyLmdyaWRYfV8ke3RoaXMubW90aGVyLmdyaWRZfWAsdGhpcy50cnlUb0JlY29tZVNvbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5VG9CZWNvbWVTb2xpZCA9ICgpPT57XHJcbiAgICAgICAgaWYoIXRoaXMubW90aGVyLmlzT2NjdXBpZWRCeUFueVBsYXllcigpKXtcclxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XHJcbiAgICAgICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uSGl0KGhpdGV2ZW50OiBIaXRFdmVudCkgeyB9O1xyXG5cclxuXHJcbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5tb3RoZXIudGlsZU9iamVjdDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgd2lnZ2xlKHRpbWVzKSB7XHJcblxyXG4gICAgICAgIC8vUHJvbG9nXHJcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgIC8vTG9vcFxyXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gLT0gcmFkaWFudDtcclxuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMzApO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XHJcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDMwKTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgzMCk7XHJcblxyXG4gICAgICAgICAgICB0aW1lcy0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9FcGlsb2dcclxuICAgICAgICB0aGlzLnggLT0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBzaHJpbmsoKSB7XHJcblxyXG4gICAgICAgIC8vUHJvbG9nICAgICAgICBcclxuICAgICAgICBjb25zdCBzY2FsZURpZmYgPSAwLjI7XHJcbiAgICAgICAgLy9DaGFuZ2UgYW5jaG9yXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcclxuXHJcbiAgICAgICAgLy9Mb29wXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuc2NhbGUueCA+IDAgJiYgdGhpcy5zY2FsZS55ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggLT0gc2NhbGVEaWZmO1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgLT0gc2NhbGVEaWZmO1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0VwaWxvZ1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYmxpbmsodGltZXMpIHtcclxuXHJcbiAgICAgICAgLy9Mb29wXHJcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xyXG4gICAgICAgICAgICAvL0dpdmUgdGhlIHRpbGVvYmplY3QgYSBncmVlbiB0aW50XHJcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZBQUFBO1xyXG4gICAgICAgICAgICBhd2FpdCBVcGRhdGVTY2hlZHVsZXIud2FpdCgyMDApO1xyXG4gICAgICAgICAgICAvL1JlbW92ZSB0aGUgdGludFxyXG4gICAgICAgICAgICB0aGlzLnRpbnQgPSAweEZGRkZGRjtcclxuICAgICAgICAgICAgYXdhaXQgVXBkYXRlU2NoZWR1bGVyLndhaXQoMjAwKTtcclxuICAgICAgICAgICAgdGltZXMtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUbnRQdW1wa2luIGV4dGVuZHMgVGlsZU9iamVjdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltYXRpb25zO1xyXG5cclxuICAgIHN0YXRpYyB0aWNrU291bmQgPSBuZXcgQXVkaW8oJ2RhdGEvYXNzZXRzL3NvdW5kL2tsaWNrLm1wMycpO1xyXG4gICAgc3RhdGljIGV4cGxvZGVTb3VuZCA9IG5ldyBBdWRpbygnZGF0YS9hc3NldHMvc291bmQvZXhwbG9kZS5tcDMnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGUpIHtcclxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX2lkbGVcIiksIG1vdGhlcik7XHJcbiAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUgJiYgaGl0RXZlbnQuZGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy53aWdnbGUoMSk7XHJcbiAgICAgICAgICAgIFRudFB1bXBraW4udGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgLy9CbGluayB2ZXJ5IGRhbmdlcm91c1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJsaW5rKDQpO1xyXG4gICAgICAgICAgICAvL1RyaWdnZXIgVGlsZU9iamVjdHMgYXJvdW5kXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbGVzQXJvdW5kID0gdGhpcy5nZXRUaWxlc0Fyb3VuZCgpO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgdGlsZSBvZiB0aWxlc0Fyb3VuZCl7XHJcbiAgICAgICAgICAgICAgICB0aWxlLm9uSGl0KG5ldyBIaXRFdmVudChoaXRFdmVudC5pbml0aWF0b3IsQmFsYW5jaW5nLnRudFB1bXBraW4uZXhwbG9zaW9uRGFtYWdlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0V4cGxvZGUhISFcclxuICAgICAgICAgICAgVG50UHVtcGtpbi5leHBsb2RlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXlBbmltYXRpb24oXCJleHBsb2RlXCIpO1xyXG4gICAgICAgICAgICAvL0Rlc3Ryb3kgcHVtcGtpbiA6LShcclxuICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xyXG4gICAgICAgICAgICBleHBsb2RlOiAxMlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZXNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRnJhbWVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVOYW1lID0gYHB1bXBraW5fJHtzdGF0ZU5hbWV9XyR7aX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWVzQXJyYXkucHVzaCh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbmltYXRpb25zW3N0YXRlTmFtZV0gPSBjdXJyZW50RnJhbWVzQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheUFuaW1hdGlvbihzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWVzOiBUZXh0dXJlW10gPSB0aGlzLmFuaW1hdGlvbnNbc3RhdGVdO1xyXG5cclxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGZvcndhcmRzXHJcbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiBmcmFtZXMpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZnJhbWU7XHJcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KDUwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXHJcbiAgICAgKiBUaGlzIGFycmF5IGhvbGRzIG9ubHkgZXhpc3RpbmcgdGlsZXMgYW5kIG5vIHVuZGVmaW5lZCB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcclxuICAgICAgICBjb25zdCBteVggPSB0aGlzLm1vdGhlci5ncmlkWDtcclxuICAgICAgICBjb25zdCBteVkgPSB0aGlzLm1vdGhlci5ncmlkWTtcclxuXHJcbiAgICAgICAgbGV0IHRpbGVzOiBUaWxlW10gPSBbXTtcclxuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCArIDEsIG15WSkpO1xyXG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XHJcbiAgICAgICAgdGlsZXMucHVzaChnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZShteVgsIG15WSArIDEpKTtcclxuICAgICAgICB0aWxlcy5wdXNoKGdhbWVNYW5hZ2VyLm1hcC5nZXRUaWxlKG15WCwgbXlZIC0gMSkpO1xyXG5cclxuICAgICAgICAvL0ZpbHRlciBub3QgZXhpc3RpbmcgdGlsZXNcclxuICAgICAgICBsZXQgdG9SZXR1cm46VGlsZVtdID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xyXG4gICAgICAgICAgICBpZih0aWxlKXtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBuZXcgVG50UHVtcGtpbihnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSgxLDApKTtcclxuICAgICAgICBuZXcgVG50UHVtcGtpbihnYW1lTWFuYWdlci5tYXAuZ2V0VGlsZSgyLDApKTtcclxuICAgICAgICBwLm9uSGl0KG5ldyBIaXRFdmVudChnYW1lTWFuYWdlci5tYXAucGxheWVyc1swXSwgMSkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XHJcblxyXG4gICAgYm9yZGVyUmVjdGFuZ2xlOiBHcmFwaGljcztcclxuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcclxuICAgIHByb2dyZXNzU2hhcGU6IEdyYXBoaWNzO1xyXG4gICAgcHJvZ3Jlc3NDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxyXG4gICAgbW90aGVyOiBUaWxlT2JqZWN0O1xyXG5cclxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlT2JqZWN0LCB2aXNpYmxlPzogYm9vbGVhbiwgcHJvZ3Jlc3M/OiBudW1iZXIsIGJvcmRlckNvbG9yPzogbnVtYmVyLCBwcm9ncmVzc0NvbG9yPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1vdGhlciA9IG1vdGhlcjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogdmlzaWJsZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3IgfHwgMHhGRjAwMDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gcHJvZ3Jlc3NDb2xvciB8fCAweDAwRkYwMDtcclxuXHJcbiAgICAgICAgLy9BZGQgdG8gcGl4aSBjb250YWluZXJcclxuICAgICAgICBjb25zdCBtYXAgPSBtb3RoZXIubW90aGVyLm1hcDtcclxuXHJcbiAgICAgICAgbWFwLmV4dHJhU3R1ZmZDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXHJcbiAgICAgICAgdGhpcy54ID0gbW90aGVyLng7XHJcbiAgICAgICAgdGhpcy55ID0gbW90aGVyLnk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG1vdGhlci5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vRHJhdyBmcmFtZVxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgdGhpcy5ib3JkZXJDb2xvcik7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9yZGVyUmVjdGFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgIC8vQ2xlYXIgbGFzdCBwcm9ncmVzcyBTaGFwZVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzU2hhcGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAwLjEpIHsgLy9EcmF3IHRvbyBzbWFsbCBwcm9ncmVzcyBsb29rcyB1Z2x5XHJcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSA2NCAqIHRoaXMucHJvZ3Jlc3MgLSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCB0aGljayA9IFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUubGluZVN0eWxlKHRoaWNrLCB0aGlzLnByb2dyZXNzQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAubW92ZVRvKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAtIDEsIHRoaWNrIC0gMSlcclxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMCB8fCBwcm9ncmVzcyA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBzZXQgcHJvZ3Jlc3MgbG93ZXIgdGhhbiAwIG9yIGhpZ2hlciB0aGFuIDFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcclxuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIFRpbGVPYmplY3Qge1xyXG5cclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcud2FsbC5kZWZhdWx0SGVhbHRoO1xyXG4gIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcikge1xyXG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSg5NDkpLCBtb3RoZXIsIHRydWUpOyAvLzk0OSBpcyBhIGJveCBzcHJpdGVcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgvQmFsYW5jaW5nLndhbGwuZGVmYXVsdEhlYWx0aCk7XHJcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kZXN0cm95KHsgY2hpbGRyZW46IHRydWUgfSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xyXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHtcclxuICAgIHR5cGU6SVRFTSxcclxuICAgIGNvdW50Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGxhbnQgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcclxuXHJcbiAgICBzdGF0aWMgZ3Jvd1N0YXRlczogbnVtYmVyID0gNTtcclxuICAgIGNyb3A6IENyb3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTpUZXh0dXJlLCBtb3RoZXI6IFRpbGUpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLG1vdGhlcik7XHJcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ncm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgYXN5bmMgZ3JvdygpO1xyXG5cclxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OkhpdEV2ZW50KSB7XHJcbiAgICAgICAgaWYoIXRoaXMudnVsbmVyYWJsZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCBoaXRFdmVudC5pbml0aWF0b3IucGxheUFuaW1hdGlvbihcInB1dFwiKTtcclxuICAgICAgICAvL0hhcnZlc3QgeW91cnNlbGZcclxuICAgICAgICBoaXRFdmVudC5pbml0aWF0b3IuaW52ZW50b3J5LmdpdmVJdGVtKHRoaXMuY3JvcC50eXBlLHRoaXMuY3JvcC5jb3VudCk7XHJcbiAgICAgICAgLy9naXZlIHRoZSBpbml0aWF0b3IgdGhlIGl0ZW1zXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xyXG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcclxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9tYXRvUGxhbnQgZXh0ZW5kcyBQbGFudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKFwidG9tYXRvX3BsYW50XzBcIiksbW90aGVyKTtcclxuICAgICAgICB0aGlzLmNyb3AgPSB7dHlwZTpJVEVNLlRPTUFUT19QUk9KRUNUSUxFLCBjb3VudDpCYWxhbmNpbmcudG9tYXRvUGxhbnQuY3JvcENvdW50fTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBncm93KCkge1xyXG4gICAgICAgIGZvciAobGV0IGdyb3dTdGVwID0gMTsgZ3Jvd1N0ZXAgPCBUb21hdG9QbGFudC5ncm93U3RhdGVzOyBncm93U3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy50b21hdG9QbGFudC5ncm93U3RlcFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoYHRvbWF0b19wbGFudF8ke2dyb3dTdGVwfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tIFwiLi9CYWxhbmNpbmdcIjtcclxuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XHJcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1bXBraW5QbGFudCBleHRlbmRzIFBsYW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGUpIHtcclxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUoXCJwdW1wa2luX3BsYW50XzBcIiksIG1vdGhlcik7XHJcbiAgICAgICAgdGhpcy5jcm9wID0ge3R5cGU6SVRFTS5UTlRfUFVNUEtJTiwgY291bnQ6QmFsYW5jaW5nLnB1bXBraW5QbGFudC5jcm9wQ291bnR9O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdyb3coKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZ3Jvd1N0ZXAgPSAxOyBncm93U3RlcCA8IFB1bXBraW5QbGFudC5ncm93U3RhdGVzOyBncm93U3RlcCsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFVwZGF0ZVNjaGVkdWxlci53YWl0KEJhbGFuY2luZy5wdW1wa2luUGxhbnQuZ3Jvd1N0ZXBUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGBwdW1wa2luX3BsYW50XyR7Z3Jvd1N0ZXB9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcclxuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tIFwiLi9UbnRQdW1wa2luXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xyXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcclxuaW1wb3J0IHsgVG9tYXRvUGxhbnQgfSBmcm9tIFwiLi9Ub21hdG9QbGFudFwiO1xyXG5pbXBvcnQgeyBQdW1wa2luUGxhbnQgfSBmcm9tIFwiLi9QdW1wa2luUGxhbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcclxuXHJcbiAgICBncmlkWDogbnVtYmVyO1xyXG4gICAgZ3JpZFk6IG51bWJlcjtcclxuICAgIHRpbGVPYmplY3Q6IFRpbGVPYmplY3Q7XHJcbiAgICBtYXA6IFRpbGVkTWFwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG1hcDogVGlsZWRNYXApIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XHJcbiAgICAgICAgdGhpcy5ncmlkWSA9IGdyaWRZO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcclxuICAgICAgICB0aGlzLnggPSBncmlkWCAqIG1hcC5maW5hbFRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0ID0gbmV3VGlsZU9iamVjdDtcclxuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcclxuICAgICAgICAgICAgdGhpcy5tYXAudGlsZU9iamVjdENvbnRhaW5lci5hZGRDaGlsZChuZXdUaWxlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhpdChoaXRFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblBsYWNlKG9iamVjdFR5cGU6IElURU0pIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9iamVjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRvbWF0b1BsYW50KHRoaXMpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQdW1wa2luUGxhbnQodGhpcyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUbnRQdW1wa2luKHRoaXMpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKHRoaXMpOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0ZyZWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0aGUgZmlyc3QgcGxheWVyIHRoYXQgb2NjdXBpZXMgdGhpcyB0aWxlLlxyXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyB0aWxlIGlzIG5vdCBvY2N1cGllZFxyXG4gICAgICovXHJcbiAgICBpc09jY3VwaWVkQnkoKTogUGxheWVyIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB0aGlzLm1hcC5wbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxyXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXHJcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS54ICsgcGxheWVyLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXHJcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS55ICsgcGxheWVyLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFggPj0geFJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWCA8PSB4UmFuZ2UudG8gJiYgdGhpcy5ncmlkWSA+PSB5UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRZIDw9IHlSYW5nZS50bykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYW55IHBsYXllciBvbiB0aGlzIHRpbGUuXHJcbiAgICAgKi9cclxuICAgIGlzT2NjdXBpZWRCeUFueVBsYXllcigpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmlzT2NjdXBpZWRCeSgpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvY2N1cGllZCBieSBwbGF5ZXJcIiArIHBsYXllci5wbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW50KGNvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0LnRpbnQgPSBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgVGlsZU9iamVjdCB7XHJcblxyXG4gICAgb3duZXJJZDogc3RyaW5nO1xyXG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudG93ZXIuZGVmYXVsdEhlYWx0aDtcclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgb3duZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMub3duZXJJZCA9IG93bmVySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgvQmFsYW5jaW5nLnRvd2VyLmRlZmF1bHRIZWFsdGgpO1xyXG4gICAgICAgICAgICAgICAgVG93ZXIub25IaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZSgzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xyXG4gICAgICAgIGFsZXJ0KGBQbGF5ZXIke3RoaXMub3duZXJJZH0gaGFzIGxvc3QhYCk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcclxuaW1wb3J0IHtCYWxhbmNpbmd9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcclxuXHJcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcclxuICAgIGhlYWx0aDogbnVtYmVyID0gQmFsYW5jaW5nLnRyZWUuZGVmYXVsdEhlYWx0aDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBtb3RoZXIpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aC9CYWxhbmNpbmcudHJlZS5kZWZhdWx0SGVhbHRoKTtcclxuICAgICAgICAgICAgICAgIFRyZWUub25IaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndpZ2dsZSgzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLCBCYWxhbmNpbmcudHJlZS5jcm9wQ291bnQpO1xyXG4gICAgICAgIFRyZWUub25EZXN0cm95U291bmQucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNocmluaygpO1xyXG4gICAgICAgIHN1cGVyLm9uRGVzdHJveShpbml0aWF0b3IpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vVG93ZXJcIjtcclxuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcclxuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XHJcblxyXG4gICAgc3RhdGljIE1BUF9aT09NID0gNDtcclxuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XHJcblxyXG4gICAgcGxheWVyczogUGxheWVyW107XHJcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcclxuICAgIGZpbmFsVGlsZVdpZHRoOiBudW1iZXI7XHJcbiAgICBmaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIC8qKkhvbGQgYWxsIFRpbGVzLiBVc2FnZTogdGlsZXNbeV1beF0gKi9cclxuICAgIHByaXZhdGUgdGlsZXM6IFRpbGVbXVtdO1xyXG4gICAgZ3JpZFdpZHRoOiBudW1iZXI7XHJcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XHJcbiAgICB0aWxlQ29udGFpbmVyOiBDb250YWluZXI7XHJcbiAgICBwbGF5ZXJDb250YWluZXI6IENvbnRhaW5lcjtcclxuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcclxuICAgIGV4dHJhU3R1ZmZDb250YWluZXI6IENvbnRhaW5lcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlT2JqZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBsYXllckNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRNYXBPYmplY3RQcm9wZXJ0eShtYXBPYmplY3Q6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIG1hcE9iamVjdC5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3AudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vTG9hZHMgdGhlIG1hcCB3aXRoIHNwcml0ZXNoZWV0LiBMYXN0IHBhcmFtZXRlciBpcyBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgcGFyc2luZyB0aGUgbWFwIHdpdGggdGhlIG5ldyBwYXJzZWQgbWFwIGFzIHBhcmFtZXRlclxyXG4gICAgc3RhdGljIGxvYWRNYXAobWFwRGF0YSkge1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgVGlsZWRNYXAoKTtcclxuICAgICAgICBjb25zdCB0aWxlZFNwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldDtcclxuICAgICAgICBjb25zdCBhdGxhc1Nwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldDtcclxuXHJcbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcclxuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFNQUklURV9TQ0FMRS54O1xyXG4gICAgICAgIG1hcC5maW5hbFRpbGVIZWlnaHQgPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBTUFJJVEVfU0NBTEUueTtcclxuXHJcbiAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxyXG4gICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcclxuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcC5ncmlkV2lkdGggPSB0bC53aWR0aDtcclxuICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSW5pdCBtYXAncyB0aWxlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgbWFwLnRpbGVzID0gbmV3IEFycmF5KG1hcC5ncmlkSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLnRpbGVzW2ldID0gbmV3IEFycmF5KG1hcC5ncmlkV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgVGlsZXMgZm9yIGVhY2ggdGlsZSB0byB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHJvdyAqIHRsLndpZHRoICsgY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IFRpbGUodGV4dHVyZSwgcm93LCBjb2x1bW4sIG1hcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZShuZXdUaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSXRlcmF0ZSB0aHJvdWdoIE9iamVjdCBMYXllcnNcclxuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9BZGQgYWxsIHBsYXllcnMgZmlyc3RcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fICBfICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAqICAgICB8IHxfXykgfCB8IF9fIF8gXyAgIF8gIF9fXyBfIF9fIFxyXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fXy98IHwvIF9gIHwgfCB8IHwvIF8gXFwgJ19ffFxyXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfF98ICAgIHxffFxcX18sX3xcXF9fLCB8XFxfX198X3wgICBcclxuICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgIF9fLyB8ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJwbGF5ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAoTWF0aC5yb3VuZChjby55KSAtIGNvLmhlaWdodCkgKiBTUFJJVEVfU0NBTEUueTsgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcklkOiBudW1iZXIgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwicGxheWVySWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRQbGF5ZXIobmV3UGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFNwcml0ZXMgZm9yIGVhY2ggb2JqZWN0IHRvIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfC8gXyBcXCBcXCAvXFwgLyAvIF8gXFwgJ19ffFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgKF8pIFxcIFYgIFYgLyAgX18vIHwgICBcclxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInRvd2VyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwib3duZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rvd2VyID0gbmV3IFRvd2VyKHRleHR1cmUsIG1vdGhlciwgb3duZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1Rvd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHxfIF9fIF9fXyAgX19fIFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCB8IHwgIF9fLyAgX18vXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffF98ICBcXF9fX3xcXF9fX3xcclxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gdGlsZWRTcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXh0dXJlLCBtb3RoZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUcmVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICBcXCBcXCAgICAgICAgLyAvICB8IHwgfFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgXFwgXFwgIC9cXCAgLyAvXyBffCB8IHxcclxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIFxcICAvXFwgIC8gKF98IHwgfCB8XHJcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICBcXC8gIFxcLyBcXF9fLF98X3xffFxyXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ3YWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXcgV2FsbChtb3RoZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgLy9wbGF5ZXIuc3ByaXRlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xyXG4gICAgICAgIHRoaXMucGxheWVyc1twbGF5ZXIucGxheWVySWRdID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xyXG4gICAgICAgIHRpbGVPYmplY3Quc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQodGlsZU9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlsZSh0aWxlOiBUaWxlKSB7XHJcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XHJcbiAgICAgICAgdGlsZS55ID0gdGlsZS5ncmlkWSAqIGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQudGlsZUhlaWdodCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55O1xyXG4gICAgICAgIHRpbGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNbdGlsZS5ncmlkWV1bdGlsZS5ncmlkWF0gPSB0aWxlO1xyXG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lci5hZGRDaGlsZCh0aWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHRpbGUgYXQgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IHggYW5kIHkgZ3JpZCBjb29yZGluYXRlc1xyXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gdGlsZSBhdCB0aGlzIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFggeC1jb29yZGluYXRlXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFkgeS1jb29yZGluYXRlXHJcbiAgICAgKi9cclxuICAgIGdldFRpbGUoZ3JpZFg6bnVtYmVyLGdyaWRZOm51bWJlcik6VGlsZXtcclxuICAgICAgICBpZih0aGlzLnRpbGVzW2dyaWRZXSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2dyaWRZXVtncmlkWF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdDogUmVjdGFuZ2xlKSB7XHJcblxyXG4gICAgICAgIC8vYW4gT2JqZWN0IGNhbiBiZSBwbGFjZWQgXCJiZXR3ZWVuXCIgdGlsZXMgaW4gdGlsZWQgbWFwIGVkaXRvci4gQnV0IGV2bnRzIGNhbiBiZSB0cmlnZ2VyZWQgb25seSBmcm9tIHdob2xlIHRpbGVzLiBTbyB0aGUgb2JlamNjdHMgcG9zaXRpb24gaXMgbWFwcGVkIHRvIHRoZSBuZWFyZXN0IFRpbGVcclxuXHJcbiAgICAgICAgbGV0IG9yaWdpbmFsWCA9IG1hcE9iamVjdC54ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XHJcbiAgICAgICAgbGV0IHhUaWxlcyA9IG9yaWdpbmFsWCAvIHRoaXMuZmluYWxUaWxlV2lkdGg7XHJcbiAgICAgICAgeFRpbGVzID0gTWF0aC5yb3VuZCh4VGlsZXMpO1xyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxZID0gKG1hcE9iamVjdC55IC0gbWFwT2JqZWN0LmhlaWdodCkgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTsgIC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lciAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHlUaWxlcyA9IG9yaWdpbmFsWSAvIHRoaXMuZmluYWxUaWxlSGVpZ2h0O1xyXG4gICAgICAgIHlUaWxlcyA9IE1hdGgucm91bmQoeVRpbGVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZ3JpZFg6IHhUaWxlcywgZ3JpZFk6IHlUaWxlcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbGVOZWFyZXN0VG8obWFwT2JqZWN0OiBSZWN0YW5nbGUpOiBUaWxlIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbcG9zLmdyaWRZXVtwb3MuZ3JpZFhdO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBLZXlib2FyZE1hbmFnZXIge1xyXG5cclxuICAgICBrZXlVcHMgPSB7fTtcclxuICAgICBrZXlEb3ducyA9IHt9O1xyXG4gICAgIEFOWV9LRVkgPSBcImFueV9rZXlcIjtcclxuXHJcbiAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgIG9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlVcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5VXBzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5VXAgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleVVwKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMua2V5RG93bnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5RG93bnNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlEb3duID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25LZXlEb3duKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgcmVnaXN0ZXJLZXkoa2V5LCBvbktleURvd24sIG9uS2V5VXAsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlEb3duOiBvbktleURvd24gfTtcclxuICAgICAgICB0aGlzLmtleVVwc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5VXA6IG9uS2V5VXAgfTtcclxuICAgIH1cclxuXHJcbiAgICAgdW5yZWdpc3RlcktleShpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFRleHR1cmUsIFNDQUxFX01PREVTLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF0bGFzU3ByaXRlc2hlZXQge1xyXG5cclxuXHRhdGxhc0RhdGE7XHJcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsIGF0bGFzRGF0YSkge1xyXG5cdFx0dGhpcy5hdGxhc0RhdGEgPSBhdGxhc0RhdGE7XHJcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSB0ZXh0dXJlO1xyXG5cdFx0dGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XHRcdFxyXG5cdH1cclxuXHJcblx0Z2V0VGV4dHVyZShuYW1lOiBzdHJpbmcpOiBUZXh0dXJlIHtcclxuXHJcblx0XHRjb25zdCBwcm9wcyA9IHRoaXMuYXRsYXNEYXRhLml0ZW1zW25hbWVdO1xyXG5cdFx0aWYgKHByb3BzID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGZpbmQgdGV4dHVyZSAnJHtuYW1lfScgaW4gc3ByaXRlc2hlZXRgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHByb3BzLngsIHByb3BzLnksIHByb3BzLndpZHRoLCBwcm9wcy5oZWlnaHQpKTtcclxuXHR9XHJcblxyXG5cclxufSIsImNvbnN0IHVpQ29uc3RhbnRzID0ge1xyXG4gICAgbWVudUJhcjoge1xyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIGljb246e1xyXG4gICAgICAgICAgICBzY2FsZTozLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFnZToge1xyXG4gICAgICAgIHdpZHRoOiA1MTIsXHJcbiAgICAgICAgaGVpZ2h0OiA2MTIsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVpQ29uc3RhbnRzOyIsImltcG9ydCB7IENvbnRhaW5lciwgUmVjdGFuZ2xlLCBHcmFwaGljcywgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xyXG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllck1lbnUgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cclxuICAgIHBsYXllcjogUGxheWVyO1xyXG5cclxuICAgIGFjdGlvbkljb246U3ByaXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCB3aWR0aDogbnVtYmVyLCB4Om51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIHRoaXMueSA9IHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCAtIHVpQ29uc3RhbnRzLm1lbnVCYXIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcblxyXG4gICAgICAgIGxldCBiZ1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgICAgYmdTaGFwZS5iZWdpbkZpbGwocGxheWVyLmNvbG9yKTtcclxuICAgICAgICBiZ1NoYXBlLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCB1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCk7XHJcbiAgICAgICAgYmdTaGFwZS5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChiZ1NoYXBlKTtcclxuXHJcbiAgICAgICAgbGV0IGFpID0gbmV3IFNwcml0ZShnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUocGxheWVyLnBsYWNlTW9kZSkpO1xyXG4gICAgICAgIGFpLnNjYWxlLnNldCh1aUNvbnN0YW50cy5tZW51QmFyLmljb24uc2NhbGUpO1xyXG4gICAgICAgIGFpLnggPSAodWlDb25zdGFudHMubWVudUJhci5oZWlnaHQgLSBhaS53aWR0aCkgLyAyXHJcbiAgICAgICAgYWkueSA9ICh1aUNvbnN0YW50cy5tZW51QmFyLmhlaWdodCAtIGFpLndpZHRoKSAvIDJcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGFpKTtcclxuICAgICAgICB0aGlzLmFjdGlvbkljb24gPSBhaTtcclxuXHJcbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKFwicGxheWVyTWVudVwiK3BsYXllci5wbGF5ZXJJZCx0aGlzLmRvU3RlcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRvU3RlcCA9ICgpPT57XHJcbiAgICAgICAgdGhpcy5hY3Rpb25JY29uLnRleHR1cmUgPSBnYW1lTWFuYWdlci5hdGxhc1Nwcml0ZXNoZWV0LmdldFRleHR1cmUodGhpcy5wbGF5ZXIucGxhY2VNb2RlKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWwvUGxheWVyXCJcclxuaW1wb3J0IFBsYXllck1lbnUgZnJvbSBcIi4vcGxheWVyTWVudVwiO1xyXG5pbXBvcnQgdWlDb25zdGFudHMgZnJvbSBcIi4vdWlDb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXIgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cclxuICAgIHBsYXllck1lbnVzOiBQbGF5ZXJNZW51W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzOiBQbGF5ZXJbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVXaWR0aCA9IHVpQ29uc3RhbnRzLnN0YWdlLndpZHRoIC8gcGxheWVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck1lbnUgPSBuZXcgUGxheWVyTWVudShwbGF5ZXJzW2ldLCBtZW51V2lkdGgsIG1lbnVXaWR0aCAqIGkpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1lbnVzLnB1c2gocGxheWVyTWVudSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocGxheWVyTWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XHJcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRNYW5hZ2VyIH0gZnJvbSBcIi4vS2V5Ym9hcmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zLCBsb2FkZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xyXG5pbXBvcnQgeyBBdGxhc1Nwcml0ZXNoZWV0IH0gZnJvbSBcIi4vQXRsYXNTcHJpdGVzaGVldFwiO1xyXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcclxuaW1wb3J0IHVpQ29uc3RhbnRzIGZyb20gXCIuLi91aS91aUNvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4uL3VpL21lbnVCYXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcclxuICAgIFxyXG4gICAgdGlsZWRTcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcclxuICAgIGF0bGFzU3ByaXRlc2hlZXQ6IEF0bGFzU3ByaXRlc2hlZXQ7XHJcbiAgICBcclxuICAgIG1hcDogVGlsZWRNYXA7XHJcbiAgICBwaXhpQXBwOiBBcHBsaWNhdGlvbjtcclxuICAgIFxyXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XHJcbiAgICBrZXlib2FyZE1hbmFnZXI6IEtleWJvYXJkTWFuYWdlcjtcclxuICAgIG1lbnVCYXI6IE1lbnVCYXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vQ3JlYXRlIGEgUGl4aSBBcHBsaWNhdGlvblxyXG4gICAgICAgIGNsYXNzIFBpeGlPcHRpb25zIGltcGxlbWVudHMgQXBwbGljYXRpb25PcHRpb25zIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnModWlDb25zdGFudHMuc3RhZ2Uud2lkdGgsIHVpQ29uc3RhbnRzLnN0YWdlLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5waXhpQXBwID0gbmV3IEFwcGxpY2F0aW9uKHBpeGlPcHRpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICAvL0FkZCB0aGUgY2FudmFzIHRoYXQgUGl4aSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgZm9yIHlvdSB0byB0aGUgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waXhpQXBwLnZpZXcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b0xvYWQgPSBbXHJcbiAgICAgICAgICAgIHtuYW1lOid0aWxlZFNwcml0ZXNoZWV0VGV4dHVyZScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0VGV4dHVyZScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQucG5nJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOidhdGxhc1Nwcml0ZXNoZWV0RGF0YScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc21pdGhfc3ByaXRlc2hlZXQuanNvbid9LFxyXG4gICAgICAgICAgICB7bmFtZTonbWFwRGF0YScsIHVybDonZGF0YS9tYXBzL21hcDEuanNvbid9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBcclxuICAgICAgICBsb2FkZXIuYWRkKHRvTG9hZCkubG9hZCh0aGlzLmxvYWRlckZpbmlzaGVkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBsb2FkZXJGaW5pc2hlZCA9ICgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XHJcbiAgICAgICAgdGhpcy50aWxlZFNwcml0ZXNoZWV0ID0gbmV3IFRpbGVkU3ByaXRlc2hlZXQoUElYSS5sb2FkZXIucmVzb3VyY2VzLnRpbGVkU3ByaXRlc2hlZXRUZXh0dXJlLnRleHR1cmUsIDEsIDE2LCAxNiwgMzEsIDU3KVxyXG4gICAgICAgIC8vQXRsYXMgU3ByaXRlc2hlZXRcclxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vUmVnaXN0ZXIgVXBkYXRlIHNjaGVkdWxlclxyXG4gICAgICAgIHRoaXMucGl4aUFwcC50aWNrZXIuYWRkKHRoaXMudXBkYXRlU2NoZWR1bGVyLmRvU3RlcCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9Mb2FkIE1hcFxyXG4gICAgICAgIHRoaXMubWFwID0gVGlsZWRNYXAubG9hZE1hcChQSVhJLmxvYWRlci5yZXNvdXJjZXMubWFwRGF0YS5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICAvL0Rpc3BsYXkgTWFwXHJcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcclxuICAgICAgICBcclxuICAgICAgICAvL1NldCBQbGF5ZXIgQ29udHJvbHNcclxuICAgICAgICBjb25zdCBwbGF5ZXJzID0gdGhpcy5tYXAucGxheWVycztcclxuICAgICAgICBwbGF5ZXJzWzBdLnNldEtleXMoXCJ3XCIsIFwic1wiLCBcImFcIiwgXCJkXCIsIFwieFwiLCBcImNcIiwgXCJ5XCIpO1xyXG4gICAgICAgIHBsYXllcnNbMF0uc2V0Q29sb3IoMHhDQ0VFQUEpO1xyXG4gICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xyXG4gICAgICAgIHBsYXllcnNbMV0uc2V0Q29sb3IoMHhDQ0NDRkYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRHJhdyBtZW51XHJcbiAgICAgICAgdGhpcy5kcmF3TWVudUJhcihwbGF5ZXJzKTtcclxuICAgICAgICBcclxuICAgICAgICAvL1N0YXJ0IFBpeGkgQXBwXHJcbiAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy50ZXN0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZHJhd01lbnVCYXIocGxheWVyczogUGxheWVyW10pIHtcclxuICAgICAgICB0aGlzLm1lbnVCYXIgPSBuZXcgTWVudUJhcihwbGF5ZXJzKTtcclxuICAgICAgICB0aGlzLnBpeGlBcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5tZW51QmFyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAucGxheWVyc1swXS5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5UTlRfUFVNUEtJTiwxMDApO1xyXG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE9NQVRPX1BST0pFQ1RJTEUsMTAwKTtcclxuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLmludmVudG9yeS5naXZlSXRlbShJVEVNLldBTEwsMTAwKTtcclxuICAgICAgICB0aGlzLm1hcC5wbGF5ZXJzWzBdLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BST0pFQ1RJTEU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuIiwiaW1wb3J0IHtHYW1lTWFuYWdlcn0gZnJvbSBcIi4vbW9kZWwvR2FtZU1hbmFnZXJcIlxyXG5cclxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcclxuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XHJcblxyXG5leHBvcnQge2dhbWVNYW5hZ2VyfTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=