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

var TomatoProjectile = /** @class */ (function (_super) {
    __extends(TomatoProjectile, _super);
    function TomatoProjectile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TomatoProjectile.createTomatoProjectile = function (x, y, direction) {
        console.log("creating tomato projectile!!!");
    };
    return TomatoProjectile;
}(external_PIXI_["Sprite"]));


// CONCATENATED MODULE: ./src/model/Balancing.ts
var Balancing = {
    tree: {
        defaultHealth: 1,
    },
    wall: {
        defaultHealth: 3,
    },
    tntPumpkin: {
        explosionDamage: 0.5,
    },
    player: {
        speed: 4,
        hitDamage: 0.2,
    },
    tower: {
        defaultHealth: 10,
    }
};


// CONCATENATED MODULE: ./src/model/HitEvent.ts
var HitEvent = /** @class */ (function () {
    function HitEvent(initiator, damage) {
        this.initiator = initiator;
        this.damage = damage;
    }
    return HitEvent;
}());


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
                    return false;
                }
                break;
            case ITEM.TNT_PUMPKIN:
                if (this.tnt_pumpkin > 0) {
                    this.tnt_pumpkin--;
                    return true;
                }
                else {
                    return false;
                }
                break;
            case ITEM.WALL:
                if (this.wall > 0) {
                    this.wall--;
                    return true;
                }
                else {
                    return false;
                }
                break;
        }
    };
    Inventory.prototype.giveItem = function (itemType, count) {
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
                        if (_this.map.tiles[y] == undefined || _this.map.tiles[y][x] == undefined || (_this.map.tiles[y][x].tileObject && _this.map.tiles[y][x].tileObject.solid)) {
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
                    TomatoProjectile.createTomatoProjectile(_this.sprite.x, _this.sprite.y, _this.currentDirection);
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
                        return [4 /*yield*/, Player.wait(50)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: 
                    //Wait a moment
                    return [4 /*yield*/, Player.wait(80)];
                    case 5:
                        //Wait a moment
                        _a.sent();
                        i = frames.length - 1;
                        _a.label = 6;
                    case 6:
                        if (!(i >= 0)) return [3 /*break*/, 9];
                        this.sprite.texture = frames[i];
                        return [4 /*yield*/, Player.wait(50)];
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
    * This is always the next tile in currentDirection, which is not occupied by the player himself.
    * The current Tile may be undefined, if it would be out of bounds.
    */
    Player.prototype.getCurrentTile = function () {
        var directionVector;
        switch (this.currentDirection) {
            case DIRECTION.UP:
                directionVector = new external_PIXI_["Point"](0, -1);
                break;
            case DIRECTION.RIGHT:
                directionVector = new external_PIXI_["Point"](1, 0);
                break;
            case DIRECTION.LEFT:
                directionVector = new external_PIXI_["Point"](-1, 0);
                break;
            case DIRECTION.DOWN:
                directionVector = new external_PIXI_["Point"](0, 1);
                break;
        }
        var gridX = Math.floor((this.sprite.x + this.sprite.width / 2) / this.map.finalTileWidth);
        var gridY = Math.floor((this.sprite.y + this.sprite.height) / this.map.finalTileHeight);
        var tiles = this.map.tiles;
        while (tiles[gridY] && tiles[gridY][gridX] && tiles[gridY][gridX].isOccupiedBy() == this) {
            gridX += directionVector.x;
            gridY += directionVector.y;
        }
        if (tiles[gridY]) {
            return tiles[gridY][gridX];
        }
        else {
            return undefined;
        }
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
    Player.wait = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
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

var TileObject = /** @class */ (function (_super) {
    TileObject_extends(TileObject, _super);
    function TileObject(texture, mother) {
        var _this = _super.call(this, texture) || this;
        _this.solid = false;
        _this.vulnerable = true;
        _this.mother = mother;
        _this.mother.addTileObject(_this);
        //set render coordinates
        _this.x = _this.mother.x;
        _this.y = _this.mother.y;
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
                        return [4 /*yield*/, TileObject.wait(30)];
                    case 2:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, TileObject.wait(30)];
                    case 3:
                        _a.sent();
                        this.rotation -= radiant;
                        return [4 /*yield*/, TileObject.wait(30)];
                    case 4:
                        _a.sent();
                        this.rotation += radiant;
                        return [4 /*yield*/, TileObject.wait(30)];
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
                        return [4 /*yield*/, TileObject.wait(10)];
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
                        return [4 /*yield*/, TileObject.wait(200)];
                    case 1:
                        _a.sent();
                        //Remove the tint
                        this.tint = 0xFFFFFF;
                        return [4 /*yield*/, TileObject.wait(200)];
                    case 2:
                        _a.sent();
                        times--;
                        return [3 /*break*/, 0];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TileObject.onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    TileObject.onDestroySound = new Audio('../data/assets/sound/blob1.mp3');
    TileObject.wait = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
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
                        return [4 /*yield*/, TileObject.wait(50)];
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
        var p = new TntPumpkin(gameManager.map.tiles[0][1]);
        new TntPumpkin(gameManager.map.tiles[0][2]);
        p.onHit(new HitEvent(gameManager.map.players[0], 1));
    };
    TntPumpkin.tickSound = new Audio('../data/assets/sound/blob2.mp3');
    TntPumpkin.explodeSound = new Audio('../data/assets/sound/explode.mp3');
    return TntPumpkin;
}(TileObject));


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
        var _this = _super.call(this, gameManager.tiledSpritesheet.getTexture(949), mother) || this;
        _this.health = Balancing.wall.defaultHealth;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        _this.solid = true;
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
}(TileObject));


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
        _this.ready = false;
        _this.grow = function (delta) {
            console.log("I am growing...");
        };
        var id = "plant" + mother.gridX + "-" + mother.gridY;
        return _this;
        //gameManager.updateScheduler.register(id, this.grow);
    }
    Plant.prototype.onHit = function (hitEvent) {
        return Plant_awaiter(this, void 0, void 0, function () {
            return Plant_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.vulnerable = false;
                        //Harvest yourself
                        //give the initiator the items
                        return [4 /*yield*/, this.shrink()];
                    case 1:
                        //Harvest yourself
                        //give the initiator the items
                        _a.sent();
                        this.onDestroy(hitEvent.initiator);
                        return [2 /*return*/];
                }
            });
        });
    };
    Plant.growStates = 4;
    return Plant;
}(TileObject));


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


var TomatoPlant_TomatoPlant = /** @class */ (function (_super) {
    TomatoPlant_extends(TomatoPlant, _super);
    function TomatoPlant(mother) {
        return _super.call(this, gameManager.tiledSpritesheet.getTexture(471), mother) || this;
    }
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


var PumpkinPlant_PumpkinPlant = /** @class */ (function (_super) {
    PumpkinPlant_extends(PumpkinPlant, _super);
    function PumpkinPlant(mother) {
        return _super.call(this, gameManager.tiledSpritesheet.getTexture(471), mother) || this;
    }
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
        if (this.isFree() && this.isOccupiedByAnyPlayer() == false) {
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
            console.log("occupied by player" + player.playerId);
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
}(TileObject));


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
        _this.solid = true;
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
                        initiator.inventory.giveItem(ITEM.WALL, 1);
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
}(TileObject));


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
    return UpdateScheduler;
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


// CONCATENATED MODULE: ./src/model/GameManager.ts







var APP_WIDTH = 512;
var APP_HEIGHT = 512;
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
            players[0].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "b", "n");
            players[0].setColor(0xCCCCFF);
            players[1].setKeys("w", "s", "a", "d", "x", "c", "y");
            players[1].setColor(0xCCEEAA);
            //Start Pixi App
            _this.pixiApp.ticker.start();
        };
        //Create a Pixi Application
        var PixiOptions = /** @class */ (function () {
            function PixiOptions(width, height) {
                this.width = width;
                this.height = height;
            }
            return PixiOptions;
        }());
        var pixiOptions = new PixiOptions(APP_WIDTH, APP_HEIGHT);
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
    GameManager.prototype.test = function () {
        this.map.players[0].inventory.giveItem(ITEM.TNT_PUMPKIN, 100);
    };
    return GameManager;
}());


// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameManager", function() { return gameManager; });

var gameManager = new GameManager_GameManager();
gameManager.startGame();



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlZFNwcml0ZXNoZWV0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQmFsYW5jaW5nLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSGl0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG50UHVtcGtpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1dhbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RvbWF0b1BsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVXBkYXRlU2NoZWR1bGVyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvQXRsYXNTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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QUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFxQ0QsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDOzs7O0FDekZEO0FBQStDO0FBRS9DLElBQU0sV0FBVyxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkU3ByaXRlc2hlZXR7XG5cblx0Ym9yZGVyOiBudW1iZXI7XG5cdHRpbGVIZWlnaHQ6IG51bWJlcjtcblx0dGlsZVdpZHRoOiBudW1iZXI7XG5cdHJvd3M6IG51bWJlcjtcblx0Y29sdW1uczogbnVtYmVyO1xuXHRiaWdUZXh0dXJlOiBUZXh0dXJlO1xuXHR0ZXh0dXJlczogVGV4dHVyZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHRleHR1cmUsYm9yZGVyLHRpbGVXaWR0aCx0aWxlSGVpZ2h0LHJvd3MsY29sdW1ucyl7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdFx0dGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcblx0XHR0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcblx0XHR0aGlzLnJvd3MgPSByb3dzO1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy5iaWdUZXh0dXJlID0gdGV4dHVyZTtcblx0XHR0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gU0NBTEVfTU9ERVMuTkVBUkVTVDtcblx0XHR0aGlzLnRleHR1cmVzID0gW107XG5cdH1cblxuXHRnZXRUZXh0dXJlKGdpZDpudW1iZXIpOlRleHR1cmUgIHtcblx0XHQvL0NoZWNrIHdldGhlciB0ZXh0dXJlcyB3YXMgYWxscmVhZHkgZnJhbWVkIGZvcm0gc3ByaXRlc2hlZXRcblx0XHRpZiAodGhpcy50ZXh0dXJlc1tnaWRdKSB7XG5cdFx0ICByZXR1cm4gdGhpcy50ZXh0dXJlc1tnaWRdO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICAvL0NhbGN1bGF0ZSByb3cgYW5kIGNvbHVtbiBmcm9tIGdpZFxuXHRcdCAgbGV0IHJvdzpudW1iZXIgPSBNYXRoLmZsb29yKChnaWQgLSAxKSAvIHRoaXMuY29sdW1ucyk7XG5cdFx0ICBsZXQgY29sdW1uOm51bWJlciA9IChnaWQgLSAxKSAlIHRoaXMuY29sdW1ucztcblx0XG5cdFx0ICBsZXQgdGlsZVdpZHRoOm51bWJlciA9IHRoaXMudGlsZVdpZHRoO1xuXHRcdCAgbGV0IHRpbGVIZWlnaHQ6bnVtYmVyID0gdGhpcy50aWxlSGVpZ2h0O1xuXHRcblx0XHQgIGxldCB4Om51bWJlciA9IGNvbHVtbiAqIHRpbGVXaWR0aCArIGNvbHVtbiAqIHRoaXMuYm9yZGVyO1xuXHRcdCAgbGV0IHk6bnVtYmVyID0gcm93ICogdGlsZUhlaWdodCArIHJvdyAqIHRoaXMuYm9yZGVyO1xuXHRcblx0XHQgIGxldCB0OlRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUoeCwgeSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XG5cdFx0ICAvL1NhdmUgVGV4dHVyZSBpbiBjYWNoZSBhcnJheVxuXHRcdCAgdGhpcy50ZXh0dXJlc1tnaWRdID0gdDtcblx0XHQgIHJldHVybiB0O1xuXHRcdH1cblx0ICB9XG5cdFxuXG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQgPSBcInRvbWF0b19wbGFudFwiLFxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcbiAgICBUTlRfUFVNUEtJTiA9IFwidG50X3B1bXBraW5cIixcbiAgICBXQUxMID0gXCJ3YWxsXCIsXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQge0RJUkVDVElPTn0gZnJvbSBcIi4vUGxheWVyXCJcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1Byb2plY3RpbGUgZXh0ZW5kcyBTcHJpdGV7XG5cbnN0YXRpYyBjcmVhdGVUb21hdG9Qcm9qZWN0aWxlKHg6bnVtYmVyLHk6bnVtYmVyLGRpcmVjdGlvbjpESVJFQ1RJT04pe1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9tYXRvIHByb2plY3RpbGUhISFcIik7XG59XG5cbn0iLCJcbmNvbnN0IEJhbGFuY2luZyA9IHtcbiAgICB0cmVlOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEsXG4gICAgfSxcblxuICAgIHdhbGw6IHtcbiAgICAgICAgZGVmYXVsdEhlYWx0aDogMyxcbiAgICB9LFxuXG4gICAgdG50UHVtcGtpbjoge1xuICAgICAgICBleHBsb3Npb25EYW1hZ2U6IDAuNSxcbiAgICB9LFxuXG4gICAgcGxheWVyOiB7XG4gICAgICAgIHNwZWVkOiA0LFxuICAgICAgICBoaXREYW1hZ2U6IDAuMixcbiAgICB9LFxuICAgIFxuICAgIHRvd2VyOiB7XG4gICAgICAgIGRlZmF1bHRIZWFsdGg6IDEwLFxuICAgIH1cblxufVxuXG5leHBvcnQgeyBCYWxhbmNpbmcgfSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgSGl0RXZlbnQge1xuXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XG4gICAgZGFtYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnkge1xuXG4gICAgdG9tYXRvX3Byb2plY3RpbGU6IG51bWJlciA9IDA7XG4gICAgdG50X3B1bXBraW46IG51bWJlciA9IDA7XG4gICAgd2FsbDogbnVtYmVyID0gMDtcblxuICAgIGdldEl0ZW0oaXRlbVR5cGU6IElURU0pOiBib29sZWFuIHtcbiAgICAgICAgc3dpdGNoIChpdGVtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDogcmV0dXJuIHRydWU7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlBVTVBLSU5fUExBTlQ6IHJldHVybiB0cnVlOyBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFOiBpZiAodGhpcy50b21hdG9fcHJvamVjdGlsZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvbWF0b19wcm9qZWN0aWxlLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogaWYgKHRoaXMudG50X3B1bXBraW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50bnRfcHVtcGtpbi0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIElURU0uV0FMTDogaWYgKHRoaXMud2FsbCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGwtLTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUFJPSkVDVElMRTogdGhpcy50b21hdG9fcHJvamVjdGlsZSArPSBjb3VudDsgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5UTlRfUFVNUEtJTjogdGhpcy50bnRfcHVtcGtpbiArPSBjb3VudDsgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiB0aGlzLndhbGwgKz0gY291bnQ7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IFBvaW50LCBleHRyYXMsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFRvbWF0b1Byb2plY3RpbGUgfSBmcm9tICcuL1RvbWF0b1Byb2plY3RpbGUnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vVGlsZSc7XG5pbXBvcnQgeyBCYWxhbmNpbmcgfSBmcm9tICcuL0JhbGFuY2luZyc7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gJy4vSGl0RXZlbnQnO1xuaW1wb3J0IHsgSW52ZW50b3J5IH0gZnJvbSBcIi4vSW52ZW50b3J5XCI7XG5cbmV4cG9ydCBlbnVtIERJUkVDVElPTiB7IFVQID0gXCJ1cFwiLCBSSUdIVCA9IFwicmlnaHRcIiwgRE9XTiA9IFwiZG93blwiLCBMRUZUID0gXCJsZWZ0XCIsIFNUT1AgPSBcInN0b3BcIiB9O1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG5cbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xuICAgIC8vQSBoZXggdmFsdWUgb2YgYSBjb2xvciBhbGwgcGxheWVyJ3Mgc3ByaXRlcyBhcmUgdGludGVkIHdpdGhcbiAgICBjb2xvcjogbnVtYmVyID0gMHhGRkZGRkY7XG4gICAgbWFwOiBUaWxlZE1hcDtcblxuICAgIHNwcml0ZTogZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuICAgIGFuaW1hdGlvbnM7XG4gICAgdng6IG51bWJlcjtcbiAgICB2eTogbnVtYmVyO1xuXG4gICAgLy9QbGF5ZXIgaWdub3JlcyBkb1N0ZXAgYW5kIG9uQWN0aW9uIEV2ZW50cyBpZiBzdHVubmVkXG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgcGxhY2VNb2RlOiBJVEVNO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICAvKiogU2F2ZXMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIChTVE9QIHdpbGwgbm90IGJlIHNhdmVkIGhlcmUsIGluIHRoaXMgY2FzZSB0aGUgdmFsdWUgaXMgdGhlIGxhc3QgZGlyZWN0aW9uIGJlZm9yZSBTVE9QKSAqL1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuXG4gICAgdXBLZXk6IHN0cmluZztcbiAgICBkb3duS2V5OiBzdHJpbmc7XG4gICAgbGVmdEtleTogc3RyaW5nO1xuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XG4gICAgYWN0aW9uS2V5OiBzdHJpbmc7XG4gICAgc2VsZWN0S2V5OiBzdHJpbmc7XG4gICAgcGxhY2VLZXk6IHN0cmluZztcbiAgICBsYXN0VGludGVkVGlsZTogVGlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5wbGFjZU1vZGUgPSBJVEVNLlRPTUFUT19QTEFOVDtcblxuICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25zKCk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgZXh0cmFzLkFuaW1hdGVkU3ByaXRlKHRoaXMuYW5pbWF0aW9ucy53YWxrW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBESVJFQ1RJT04uRE9XTjtcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlID0gUGxheWVyLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbWF0aW9uU3BlZWQgPSAwLjEzO1xuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcblxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcbiAgICAgICAgZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLnJlZ2lzdGVyS2V5KGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5BTllfS0VZLCB0aGlzLmtleURvd24sIHRoaXMua2V5VXAsIFwicGxheWVyXCIgKyBwbGF5ZXJJZCk7XG4gICAgICAgIGdhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihcInBsYXllclwiICsgcGxheWVySWQsIHRoaXMuZG9TdGVwKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0ID0gbXMgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRBbmltYXRpb25zKCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xuICAgICAgICAgICAgd2Fsazoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1dDoge1xuICAgICAgICAgICAgICAgIHVwOiAzLFxuICAgICAgICAgICAgICAgIGRvd246IDMsXG4gICAgICAgICAgICAgICAgbGVmdDogMyxcbiAgICAgICAgICAgICAgICByaWdodDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzdGF0ZU5hbWUgaW4gYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJTdGF0ZU5hbWUgaW4gYW5pbWF0aW9uc1tzdGF0ZU5hbWVdKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RnJhbWVzQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlTmFtZSA9IGBwbGF5ZXJfJHtzdGF0ZU5hbWV9XyR7c3ViU3RhdGVOYW1lfV8ke2l9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZXNBcnJheS5wdXNoKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbc3RhdGVOYW1lXVtzdWJTdGF0ZU5hbWVdID0gY3VycmVudEZyYW1lc0FycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGFjZU1vZGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbGFjZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgSVRFTS5QVU1QS0lOX1BMQU5UOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE5UX1BVTVBLSU47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uVE9NQVRPX1BMQU5UOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5UT01BVE9fUExBTlQ6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5UT01BVE9fUFJPSkVDVElMRTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIElURU0uVE9NQVRPX1BST0pFQ1RJTEU6IHRoaXMucGxhY2VNb2RlID0gSVRFTS5XQUxMOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSVRFTS5XQUxMOiB0aGlzLnBsYWNlTW9kZSA9IElURU0uUFVNUEtJTl9QTEFOVDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENoYW5nZWQgUGxhY2VNb2RlLiBOZXcgbW9kZSBpczogJHt0aGlzLnBsYWNlTW9kZX1gKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBESVJFQ1RJT04pIHtcbiAgICAgICAgaWYgKHRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgLy9QbGF5ZXIgaXMgc3R1bm5lZCBhbmQgY2FuJ3QgY2hhbmdlIGl0J3MgZGlyZWN0aW9uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IERJUkVDVElPTi5TVE9QKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9ucy53YWxrW2RpcmVjdGlvbl07XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwbGF5QW5pbWF0aW9uKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzOiBUZXh0dXJlW10gPSB0aGlzLmFuaW1hdGlvbnNbc3RhdGVdW3RoaXMuY3VycmVudERpcmVjdGlvbl07XG5cbiAgICAgICAgdGhpcy5zdHVubmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpXG5cbiAgICAgICAgLy9QbGF5IGFuaW1hdGlvbiBmb3J3YXJkc1xuICAgICAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgYXdhaXQgUGxheWVyLndhaXQoNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9XYWl0IGEgbW9tZW50XG4gICAgICAgIGF3YWl0IFBsYXllci53YWl0KDgwKTtcblxuICAgICAgICAvL1BsYXkgYW5pbWF0aW9uIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKGxldCBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgYXdhaXQgUGxheWVyLndhaXQoNTApO1xuICAgICAgICB9XG5cblxuICAgICAgICAvL1Jlc3RvcmUgbGFzdCBkaXJlY3Rpb24ncyB0ZXh0dXJlXG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLmN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5LCBwbGFjZUtleSkge1xuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XG4gICAgICAgIHRoaXMuZG93bktleSA9IGRvd25LZXk7XG4gICAgICAgIHRoaXMubGVmdEtleSA9IGxlZnRLZXk7XG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXkgPSBhY3Rpb25LZXk7XG4gICAgICAgIHRoaXMuc2VsZWN0S2V5ID0gc2VsZWN0S2V5O1xuICAgICAgICB0aGlzLnBsYWNlS2V5ID0gcGxhY2VLZXk7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IoY29sb3I6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3ByaXRlLnRpbnQgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBrZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT0gdGhpcy5sYXN0S2V5ICYmICF0aGlzLnN0dW5uZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uVVApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gLTEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZG93bktleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLkRPV04pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIEJhbGFuY2luZy5wbGF5ZXIuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlJJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IDEgKiBCYWxhbmNpbmcucGxheWVyLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuYWN0aW9uS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5wbGFjZUtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zZWxlY3RLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxhY2VNb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSkgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxuICAgICAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnNwcml0ZS54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnNwcml0ZS55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdYIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdYICsgdGhpcy5zcHJpdGUud2lkdGgpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IobmV3WSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxuICAgICAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHlSYW5nZS5mcm9tOyB5IDw9IHlSYW5nZS50bzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcC50aWxlc1t5XSA9PSB1bmRlZmluZWQgfHwgdGhpcy5tYXAudGlsZXNbeV1beF0gPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC50aWxlc1t5XVt4XS50aWxlT2JqZWN0ICYmIHRoaXMubWFwLnRpbGVzW3ldW3hdLnRpbGVPYmplY3Quc29saWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJsb2NrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS54ID0gbmV3WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICAvL1RpbnQgdGhlIG5ldyBjdXJyZW50VGlsZVxuICAgICAgICAgICAgICAgIHRoaXMudGludEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIFRpbGUuXG4gICAgKiBUaGlzIGlzIGFsd2F5cyB0aGUgbmV4dCB0aWxlIGluIGN1cnJlbnREaXJlY3Rpb24sIHdoaWNoIGlzIG5vdCBvY2N1cGllZCBieSB0aGUgcGxheWVyIGhpbXNlbGYuXG4gICAgKiBUaGUgY3VycmVudCBUaWxlIG1heSBiZSB1bmRlZmluZWQsIGlmIGl0IHdvdWxkIGJlIG91dCBvZiBib3VuZHMuXG4gICAgKi9cbiAgICBnZXRDdXJyZW50VGlsZSgpOiBUaWxlIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblZlY3RvcjogUG9pbnQ7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5VUDogZGlyZWN0aW9uVmVjdG9yID0gbmV3IFBvaW50KDAsIC0xKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDogZGlyZWN0aW9uVmVjdG9yID0gbmV3IFBvaW50KDEsIDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6IGRpcmVjdGlvblZlY3RvciA9IG5ldyBQb2ludCgtMSwgMCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRE9XTjogZGlyZWN0aW9uVmVjdG9yID0gbmV3IFBvaW50KDAsIDEpOyBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBncmlkWCA9IE1hdGguZmxvb3IoKHRoaXMuc3ByaXRlLnggKyB0aGlzLnNwcml0ZS53aWR0aCAvIDIpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpO1xuICAgICAgICBsZXQgZ3JpZFkgPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS55ICsgdGhpcy5zcHJpdGUuaGVpZ2h0KSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGlsZXMgPSB0aGlzLm1hcC50aWxlcztcbiAgICAgICAgd2hpbGUgKHRpbGVzW2dyaWRZXSAmJiB0aWxlc1tncmlkWV1bZ3JpZFhdICYmIHRpbGVzW2dyaWRZXVtncmlkWF0uaXNPY2N1cGllZEJ5KCkgPT0gdGhpcykge1xuICAgICAgICAgICAgZ3JpZFggKz0gZGlyZWN0aW9uVmVjdG9yLng7XG4gICAgICAgICAgICBncmlkWSArPSBkaXJlY3Rpb25WZWN0b3IueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWxlc1tncmlkWV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc1tncmlkWV1bZ3JpZFhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGludEN1cnJlbnRUaWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0VGludGVkVGlsZSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGludGVkVGlsZS5zZXRUaW50KDB4RkZGRkZGKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdCA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgaWYgKGN0KSB7XG4gICAgICAgICAgICBjdC5zZXRUaW50KHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUgPSBjdDtcblxuICAgIH1cblxuICAgIG9uUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcblxuICAgICAgICAgICAgLy9DcmVhdGUgVG9tYXRvIGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlTW9kZSA9PSBJVEVNLlRPTUFUT19QUk9KRUNUSUxFICYmIHRoaXMuaW52ZW50b3J5LmdldEl0ZW0oSVRFTS5UT01BVE9fUFJPSkVDVElMRSkpIHtcbiAgICAgICAgICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLmNyZWF0ZVRvbWF0b1Byb2plY3RpbGUodGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgdGhpcy5jdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9FbHNlIHBsYWNlIHRpbGVPYmplY3QgaWYgcmVzc291cmNlcyBhcmUgaW4gaW52ZW50b3J5XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmludmVudG9yeS5nZXRJdGVtKHRoaXMucGxhY2VNb2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcInB1dFwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vblBsYWNlKHRoaXMucGxhY2VNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3R1bm5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5vbkhpdChuZXcgSGl0RXZlbnQodGhpcywgQmFsYW5jaW5nLnBsYXllci5oaXREYW1hZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSwgUG9pbnQgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGlsZU9iamVjdCBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvYmxvYjQubXAzJyk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcblxuICAgIG1vdGhlcjogVGlsZTtcbiAgICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHZ1bG5lcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLm1vdGhlciA9IG1vdGhlcjtcblxuICAgICAgICB0aGlzLm1vdGhlci5hZGRUaWxlT2JqZWN0KHRoaXMpO1xuXG5cblxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5tb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FpdCA9IG1zID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfVxuXG4gICAgb25IaXQoaGl0ZXZlbnQ6IEhpdEV2ZW50KSB7IH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBhc3luYyB3aWdnbGUodGltZXMpIHtcblxuICAgICAgICAvL1Byb2xvZ1xuICAgICAgICBjb25zdCByYWRpYW50ID0gMC4wNztcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcblxuICAgICAgICAvL0xvb3BcbiAgICAgICAgd2hpbGUgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVGlsZU9iamVjdC53YWl0KDMwKTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gLT0gcmFkaWFudDtcbiAgICAgICAgICAgIGF3YWl0IFRpbGVPYmplY3Qud2FpdCgzMCk7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7XG4gICAgICAgICAgICBhd2FpdCBUaWxlT2JqZWN0LndhaXQoMzApO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiArPSByYWRpYW50O1xuICAgICAgICAgICAgYXdhaXQgVGlsZU9iamVjdC53YWl0KDMwKTtcblxuICAgICAgICAgICAgdGltZXMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMueCAtPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDApO1xuXG4gICAgfVxuXG5cbiAgICBhc3luYyBzaHJpbmsoKSB7XG5cbiAgICAgICAgLy9Qcm9sb2cgICAgICAgIFxuICAgICAgICBjb25zdCBzY2FsZURpZmYgPSAwLjI7XG4gICAgICAgIC8vQ2hhbmdlIGFuY2hvclxuICAgICAgICB0aGlzLnggKz0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSwgMSk7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aGlzLnNjYWxlLnggPiAwICYmIHRoaXMuc2NhbGUueSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCAtPSBzY2FsZURpZmY7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgLT0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgYXdhaXQgVGlsZU9iamVjdC53YWl0KDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRXBpbG9nXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcblxuICAgIH1cblxuICAgIGFzeW5jIGJsaW5rKHRpbWVzKSB7XG5cbiAgICAgICAgLy9Mb29wXG4gICAgICAgIHdoaWxlICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIC8vR2l2ZSB0aGUgdGlsZW9iamVjdCBhIGdyZWVuIHRpbnRcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZBQUFBO1xuICAgICAgICAgICAgYXdhaXQgVGlsZU9iamVjdC53YWl0KDIwMCk7XG4gICAgICAgICAgICAvL1JlbW92ZSB0aGUgdGludFxuICAgICAgICAgICAgdGhpcy50aW50ID0gMHhGRkZGRkY7XG4gICAgICAgICAgICBhd2FpdCBUaWxlT2JqZWN0LndhaXQoMjAwKTtcbiAgICAgICAgICAgIHRpbWVzLS07XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuXG5cbn1cbiIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBUbnRQdW1wa2luIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBwcml2YXRlIGFuaW1hdGlvbnM7XG5cbiAgICBzdGF0aWMgdGlja1NvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMi5tcDMnKTtcbiAgICBzdGF0aWMgZXhwbG9kZVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9leHBsb2RlLm1wMycpO1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShcInB1bXBraW5faWRsZVwiKSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlICYmIGhpdEV2ZW50LmRhbWFnZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy53aWdnbGUoMSk7XG4gICAgICAgICAgICBUbnRQdW1wa2luLnRpY2tTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAvL0JsaW5rIHZlcnkgZGFuZ2Vyb3VzXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJsaW5rKDQpO1xuICAgICAgICAgICAgLy9UcmlnZ2VyIFRpbGVPYmplY3RzIGFyb3VuZFxuICAgICAgICAgICAgY29uc3QgdGlsZXNBcm91bmQgPSB0aGlzLmdldFRpbGVzQXJvdW5kKCk7XG4gICAgICAgICAgICBmb3IoY29uc3QgdGlsZSBvZiB0aWxlc0Fyb3VuZCl7XG4gICAgICAgICAgICAgICAgdGlsZS5vbkhpdChuZXcgSGl0RXZlbnQoaGl0RXZlbnQuaW5pdGlhdG9yLEJhbGFuY2luZy50bnRQdW1wa2luLmV4cGxvc2lvbkRhbWFnZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0V4cGxvZGUhISFcbiAgICAgICAgICAgIFRudFB1bXBraW4uZXhwbG9kZVNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGxheUFuaW1hdGlvbihcImV4cGxvZGVcIik7XG4gICAgICAgICAgICAvL0Rlc3Ryb3kgcHVtcGtpbiA6LShcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRBbmltYXRpb25zKCkge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0ge1xuICAgICAgICAgICAgZXhwbG9kZTogMTJcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgc3RhdGVOYW1lIGluIGFuaW1hdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gYW5pbWF0aW9uc1tzdGF0ZU5hbWVdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRGcmFtZXNBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkZyYW1lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZU5hbWUgPSBgcHVtcGtpbl8ke3N0YXRlTmFtZX1fJHtpfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdhbWVNYW5hZ2VyLmF0bGFzU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0ZXh0dXJlTmFtZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudEZyYW1lc0FycmF5LnB1c2godGV4dHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltYXRpb25zW3N0YXRlTmFtZV0gPSBjdXJyZW50RnJhbWVzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgICB9XG5cbiAgICBhc3luYyBwbGF5QW5pbWF0aW9uKHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzOiBUZXh0dXJlW10gPSB0aGlzLmFuaW1hdGlvbnNbc3RhdGVdO1xuXG4gICAgICAgIC8vUGxheSBhbmltYXRpb24gZm9yd2FyZHNcbiAgICAgICAgZm9yIChjb25zdCBmcmFtZSBvZiBmcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGZyYW1lO1xuICAgICAgICAgICAgYXdhaXQgVGlsZU9iamVjdC53YWl0KDUwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSBvcnRob2dvbmFsIHRvIGl0J3Mgb3duIHRpbGUuXG4gICAgICogVGhpcyBhcnJheSBob2xkcyBvbmx5IGV4aXN0aW5nIHRpbGVzIGFuZCBubyB1bmRlZmluZWQgdmFsdWVzLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGlsZXNBcm91bmQoKTogVGlsZVtdIHtcbiAgICAgICAgY29uc3QgbXlYID0gdGhpcy5tb3RoZXIuZ3JpZFg7XG4gICAgICAgIGNvbnN0IG15WSA9IHRoaXMubW90aGVyLmdyaWRZO1xuXG4gICAgICAgIGxldCB0aWxlczogVGlsZVtdID0gW107XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYICsgMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYIC0gMSwgbXlZKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgKyAxKSk7XG4gICAgICAgIHRpbGVzLnB1c2goZ2FtZU1hbmFnZXIubWFwLmdldFRpbGUobXlYLCBteVkgLSAxKSk7XG5cbiAgICAgICAgLy9GaWx0ZXIgbm90IGV4aXN0aW5nIHRpbGVzXG4gICAgICAgIGxldCB0b1JldHVybjpUaWxlW10gPSBbXTtcbiAgICAgICAgZm9yKGNvbnN0IHRpbGUgb2YgdGlsZXMpe1xuICAgICAgICAgICAgaWYodGlsZSl7XG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyB0ZXN0RXhwbG9zaW9uKCkge1xuICAgICAgICBjb25zdCBwID0gbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLnRpbGVzWzBdWzFdKTtcbiAgICAgICAgbmV3IFRudFB1bXBraW4oZ2FtZU1hbmFnZXIubWFwLnRpbGVzWzBdWzJdKTtcbiAgICAgICAgcC5vbkhpdChuZXcgSGl0RXZlbnQoZ2FtZU1hbmFnZXIubWFwLnBsYXllcnNbMF0sIDEpKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmFwaGljcyB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgYm9yZGVyUmVjdGFuZ2xlOiBHcmFwaGljcztcbiAgICBib3JkZXJDb2xvcjogbnVtYmVyXG4gICAgcHJvZ3Jlc3NTaGFwZTogR3JhcGhpY3M7XG4gICAgcHJvZ3Jlc3NDb2xvcjogbnVtYmVyO1xuICAgIHByb2dyZXNzOiBudW1iZXI7IC8vRnJvbSAwIHRvIDFcbiAgICBtb3RoZXI6IFRpbGVPYmplY3Q7XG5cbiAgICBzdGF0aWMgTElORV9USElDS05FU1MgPSAzO1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlT2JqZWN0LCB2aXNpYmxlPzogYm9vbGVhbiwgcHJvZ3Jlc3M/OiBudW1iZXIsIGJvcmRlckNvbG9yPzogbnVtYmVyLCBwcm9ncmVzc0NvbG9yPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09PSB1bmRlZmluZWQgPyB0cnVlIDogdmlzaWJsZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzIHx8IDE7XG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvciB8fCAweEZGMDAwMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvbG9yID0gcHJvZ3Jlc3NDb2xvciB8fCAweDAwRkYwMDtcblxuICAgICAgICAvL0FkZCB0byBwaXhpIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBtYXAgPSBtb3RoZXIubW90aGVyLm1hcDtcblxuICAgICAgICBtYXAuZXh0cmFTdHVmZkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzKTtcblxuICAgICAgICAvL3Bvc2l0aW9uIHJlbGF0aXZlIHRvIG1vdGhlclxuICAgICAgICB0aGlzLnggPSBtb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gbW90aGVyLnk7XG4gICAgICAgIHRoaXMud2lkdGggPSBtb3RoZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbW90aGVyLmhlaWdodDtcblxuICAgICAgICAvL0RyYXcgZnJhbWVcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgdGhpcy5ib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlLmRyYXdSZWN0KDAsIDAsIG1hcC5maW5hbFRpbGVXaWR0aCwgU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib3JkZXJSZWN0YW5nbGUpO1xuXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy9DbGVhciBsYXN0IHByb2dyZXNzIFNoYXBlXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzU2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wcm9ncmVzc1NoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAwLjEpIHsgLy9EcmF3IHRvbyBzbWFsbCBwcm9ncmVzcyBsb29rcyB1Z2x5XG4gICAgICAgICAgICAvL0RyYXcgbmV3IHByb2dyZXNzYmFyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUgPSBuZXcgR3JhcGhpY3MoKTtcblxuICAgICAgICAgICAgLy9Eb24ndCB3b3JyeSBhYm91dCB0aGlzIGNyYXp5ICsxLy0xIHBpeGVscywgdGhleSBhcmUgY3JhenksIGJ1dCBuZWNlc3NhcnlcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDY0ICogdGhpcy5wcm9ncmVzcyAtIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyArIDE7XG4gICAgICAgICAgICBjb25zdCB0aGljayA9IFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDI7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZS5saW5lU3R5bGUodGhpY2ssIHRoaXMucHJvZ3Jlc3NDb2xvcilcbiAgICAgICAgICAgICAgICAubW92ZVRvKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAtIDEsIHRoaWNrIC0gMSlcbiAgICAgICAgICAgICAgICAubGluZVRvKGxpbmVXaWR0aCwgdGhpY2sgLSAxKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAwIHx8IHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBzZXQgcHJvZ3Jlc3MgbG93ZXIgdGhhbiAwIG9yIGhpZ2hlciB0aGFuIDFcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQmFsYW5jaW5nIH0gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy53YWxsLmRlZmF1bHRIZWFsdGg7XG4gIFxuXG4gICAgY29uc3RydWN0b3IobW90aGVyKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSg5NDkpLCBtb3RoZXIpOyAvLzk0OSBpcyBhIGJveCBzcHJpdGVcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zb2xpZCA9IHRydWU7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy53YWxsLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFdhbGwub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIFdhbGwub25EZXN0cm95U291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kZXN0cm95KHsgY2hpbGRyZW46IHRydWUgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hyaW5rKCk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveShpbml0aWF0b3IpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGxhbnQgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXRpYyBncm93U3RhdGVzOiBudW1iZXIgPSA0O1xuXG4gICAgc3ByaXRlUHJlZml4OiBzdHJpbmc7XG4gICAgY3JvcDogb2JqZWN0O1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIHJlYWR5OmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6VGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsbW90aGVyKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInBsYW50XCIgKyBtb3RoZXIuZ3JpZFggKyBcIi1cIiArIG1vdGhlci5ncmlkWTtcbiAgICAgICAgLy9nYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoaWQsIHRoaXMuZ3Jvdyk7XG4gICAgfVxuXG4gICAgZ3JvdyA9IChkZWx0YTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBncm93aW5nLi4uXCIpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6SGl0RXZlbnQpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIC8vSGFydmVzdCB5b3Vyc2VsZlxuICAgICAgICAvL2dpdmUgdGhlIGluaXRpYXRvciB0aGUgaXRlbXNcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1BsYW50IGV4dGVuZHMgUGxhbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSg0NzEpLG1vdGhlcik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBQdW1wa2luUGxhbnQgZXh0ZW5kcyBQbGFudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSg0NzEpLG1vdGhlcik7XG4gICAgfVxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFRvbWF0b1BsYW50IH0gZnJvbSBcIi4vVG9tYXRvUGxhbnRcIjtcbmltcG9ydCB7IFB1bXBraW5QbGFudCB9IGZyb20gXCIuL1B1bXBraW5QbGFudFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgdGlsZU9iamVjdDogVGlsZU9iamVjdDtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgbWFwOiBUaWxlZE1hcCkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5ncmlkWCA9IGdyaWRYO1xuICAgICAgICB0aGlzLmdyaWRZID0gZ3JpZFk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAvL2NhbGN1bGF0ZSBvd24gcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IGdyaWRYICogbWFwLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QgPSBuZXdUaWxlT2JqZWN0O1xuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgICAgIHRoaXMubWFwLnRpbGVPYmplY3RDb250YWluZXIuYWRkQ2hpbGQobmV3VGlsZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBhZGQgVGlsZU9iamVjdCB0byBhIFRpbGUgdGhhdCBhbGxyZWFkeSBoYXMgYW4gVGlsZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IaXQoaGl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblBsYWNlKG9iamVjdFR5cGU6IElURU0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkgJiYgdGhpcy5pc09jY3VwaWVkQnlBbnlQbGF5ZXIoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc3dpdGNoIChvYmplY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlRPTUFUT19QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRvbWF0b1BsYW50KHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIElURU0uUFVNUEtJTl9QTEFOVDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IFB1bXBraW5QbGFudCh0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLlROVF9QVU1QS0lOOlxuICAgICAgICAgICAgICAgICAgICBuZXcgVG50UHVtcGtpbih0aGlzKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJVEVNLldBTEw6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKHRoaXMpOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdGhlIGZpcnN0IHBsYXllciB0aGF0IG9jY3VwaWVzIHRoaXMgdGlsZS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIHRpbGUgaXMgbm90IG9jY3VwaWVkXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5KCk6IFBsYXllciB7XG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMubWFwLnBsYXllcnMpIHtcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueCAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS54ICsgcGxheWVyLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnkgKyBwbGF5ZXIuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkWCA+PSB4UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRYIDw9IHhSYW5nZS50byAmJiB0aGlzLmdyaWRZID49IHlSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFkgPD0geVJhbmdlLnRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGFueSBwbGF5ZXIgb24gdGhpcyB0aWxlLlxuICAgICAqL1xuICAgIGlzT2NjdXBpZWRCeUFueVBsYXllcigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5pc09jY3VwaWVkQnkoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2NjdXBpZWQgYnkgcGxheWVyXCIgKyBwbGF5ZXIucGxheWVySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW50KGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aW50ID0gY29sb3I7XG4gICAgICAgIGlmICghdGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0LnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEJhbGFuY2luZyB9IGZyb20gXCIuL0JhbGFuY2luZ1wiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIG93bmVyOiBQbGF5ZXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSBCYWxhbmNpbmcudG93ZXIuZGVmYXVsdEhlYWx0aDtcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgb3duZXI6IFBsYXllcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgvQmFsYW5jaW5nLnRvd2VyLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRvd2VyLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG5cbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5pbXBvcnQge0JhbGFuY2luZ30gZnJvbSBcIi4vQmFsYW5jaW5nXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVlIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IEJhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGg7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zb2xpZCA9IHRydWU7XG4gICAgfVxuXG5cblxuICAgIGFzeW5jIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoL0JhbGFuY2luZy50cmVlLmRlZmF1bHRIZWFsdGgpO1xuICAgICAgICAgICAgICAgIFRyZWUub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIGluaXRpYXRvci5pbnZlbnRvcnkuZ2l2ZUl0ZW0oSVRFTS5XQUxMLCAxKTtcbiAgICAgICAgVHJlZS5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5zaHJpbmsoKTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vVG93ZXJcIjtcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgVGlsZWRNYXAgZXh0ZW5kcyBDb250YWluZXIge1xuXG4gICAgc3RhdGljIE1BUF9aT09NID0gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuXG4gICAgcGxheWVyczogUGxheWVyW107XG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XG4gICAgZmluYWxUaWxlV2lkdGg6IG51bWJlcjtcbiAgICBmaW5hbFRpbGVIZWlnaHQ6IG51bWJlcjtcbiAgICAvKipIb2xkIGFsbCBUaWxlcy4gVXNhZ2U6IHRpbGVzW3ldW3hdICovXG4gICAgdGlsZXM6IFRpbGVbXVtdO1xuICAgIGdyaWRXaWR0aDogbnVtYmVyO1xuICAgIGdyaWRIZWlnaHQ6IG51bWJlcjtcbiAgICB0aWxlQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcGxheWVyQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgdGlsZU9iamVjdENvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIGV4dHJhU3R1ZmZDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuZXh0cmFTdHVmZkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmV4dHJhU3R1ZmZDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2V0TWFwT2JqZWN0UHJvcGVydHkobWFwT2JqZWN0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL0xvYWRzIHRoZSBtYXAgd2l0aCBzcHJpdGVzaGVldC4gTGFzdCBwYXJhbWV0ZXIgaXMgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHBhcnNpbmcgdGhlIG1hcCB3aXRoIHRoZSBuZXcgcGFyc2VkIG1hcCBhcyBwYXJhbWV0ZXJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBEYXRhKSB7XG5cbiAgICAgICAgY29uc3QgbWFwID0gbmV3IFRpbGVkTWFwKCk7XG4gICAgICAgIGNvbnN0IHRpbGVkU3ByaXRlc2hlZXQgPSBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0O1xuICAgICAgICBjb25zdCBhdGxhc1Nwcml0ZXNoZWV0ID0gZ2FtZU1hbmFnZXIuYXRsYXNTcHJpdGVzaGVldDtcblxuICAgICAgICBsZXQgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSB0aWxlZFNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFNQUklURV9TQ0FMRS54O1xuICAgICAgICBtYXAuZmluYWxUaWxlSGVpZ2h0ID0gdGlsZWRTcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogU1BSSVRFX1NDQUxFLnk7XG5cbiAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxuICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcInRpbGVsYXllclwiKSB7XG5cbiAgICAgICAgICAgICAgICBtYXAuZ3JpZFdpZHRoID0gdGwud2lkdGg7XG4gICAgICAgICAgICAgICAgbWFwLmdyaWRIZWlnaHQgPSB0bC5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvL0luaXQgbWFwJ3MgdGlsZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcC50aWxlc1tpXSA9IG5ldyBBcnJheShtYXAuZ3JpZFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFRpbGVzIGZvciBlYWNoIHRpbGUgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRsLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByb3cgKiB0bC53aWR0aCArIGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bC5kYXRhW2luZGV4XSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRpbGVkU3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IG5ldyBUaWxlKHRleHR1cmUsIHJvdywgY29sdW1uLCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0l0ZXJhdGUgdGhyb3VnaCBPYmplY3QgTGF5ZXJzXG4gICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcblxuICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG5cblxuICAgICAgICAgICAgICAgIC8vQWRkIGFsbCBwbGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICogICAgICBfX19fXyAgXyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fIFxcfCB8ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8IHxfXykgfCB8IF9fIF8gXyAgIF8gIF9fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfX18vfCB8LyBfYCB8IHwgfCB8LyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8ICAgIHwgfCAoX3wgfCB8X3wgfCAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgfF98ICAgIHxffFxcX18sX3xcXF9fLCB8XFxfX198X3wgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBfXy8gfCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgIHxfX18vICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gKE1hdGgucm91bmQoY28ueSkgLSBjby5oZWlnaHQpICogU1BSSVRFX1NDQUxFLnk7IC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkUGxheWVyKG5ld1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBTcHJpdGVzIGZvciBlYWNoIG9iamVjdCB0byB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwvIF8gXFwgXFwgL1xcIC8gLyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInRvd2VyXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwib3duZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lciA9IG1hcC5wbGF5ZXJzW293bmVySWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Rvd2VyID0gbmV3IFRvd2VyKHRleHR1cmUsIG1vdGhlciwgb3duZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHxfIF9fIF9fXyAgX19fIFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8ICdfXy8gXyBcXC8gXyBcXFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IHwgfCAgX18vICBfXy9cbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffF98ICBcXF9fX3xcXF9fX3xcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY28udHlwZSA9PSBcInRyZWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSB0aWxlZFNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUcmVlID0gbmV3IFRyZWUodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1RyZWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgICAgICAgICAqICAgICBfXyAgICAgICAgICBfXyAgIF8gXyBcbiAgICAgICAgICAgICAgICAgICAgICogICAgIFxcIFxcICAgICAgICAvIC8gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgXFwgXFwgIC9cXCAgLyAvXyBffCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgXFwgXFwvICBcXC8gLyBfYCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgXFwgIC9cXCAgLyAoX3wgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICogICAgICAgICBcXC8gIFxcLyBcXF9fLF98X3xffFxuICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY28udHlwZSA9PSBcIndhbGxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3IFdhbGwobW90aGVyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuXG5cblxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xuICAgICAgICAvL3BsYXllci5zcHJpdGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMucGxheWVyc1twbGF5ZXIucGxheWVySWRdID0gcGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZChwbGF5ZXIuc3ByaXRlKTtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KHRpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgdGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQodGlsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgYWRkVGlsZSh0aWxlOiBUaWxlKSB7XG4gICAgICAgIHRpbGUueCA9IHRpbGUuZ3JpZFggKiBnYW1lTWFuYWdlci50aWxlZFNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICB0aWxlLnkgPSB0aWxlLmdyaWRZICogZ2FtZU1hbmFnZXIudGlsZWRTcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7XG4gICAgICAgIHRpbGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG5cbiAgICAgICAgdGhpcy50aWxlc1t0aWxlLmdyaWRZXVt0aWxlLmdyaWRYXSA9IHRpbGU7XG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lci5hZGRDaGlsZCh0aWxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0aWxlIGF0IHBvc2l0aW9uIHNwZWNpZmllZCBieSB4IGFuZCB5IGdyaWQgY29vcmRpbmF0ZXNcbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyB0aWxlIGF0IHRoaXMgY29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0gZ3JpZFggeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIGdyaWRZIHktY29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGdldFRpbGUoZ3JpZFg6bnVtYmVyLGdyaWRZOm51bWJlcik6VGlsZXtcbiAgICAgICAgaWYodGhpcy50aWxlc1tncmlkWV0pe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbZ3JpZFldW2dyaWRYXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0OiBSZWN0YW5nbGUpIHtcblxuICAgICAgICAvL2FuIE9iamVjdCBjYW4gYmUgcGxhY2VkIFwiYmV0d2VlblwiIHRpbGVzIGluIHRpbGVkIG1hcCBlZGl0b3IuIEJ1dCBldm50cyBjYW4gYmUgdHJpZ2dlcmVkIG9ubHkgZnJvbSB3aG9sZSB0aWxlcy4gU28gdGhlIG9iZWpjY3RzIHBvc2l0aW9uIGlzIG1hcHBlZCB0byB0aGUgbmVhcmVzdCBUaWxlXG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWCA9IG1hcE9iamVjdC54ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIGxldCB4VGlsZXMgPSBvcmlnaW5hbFggLyB0aGlzLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB4VGlsZXMgPSBNYXRoLnJvdW5kKHhUaWxlcyk7XG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWSA9IChtYXBPYmplY3QueSAtIG1hcE9iamVjdC5oZWlnaHQpICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7ICAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXIgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgeVRpbGVzID0gb3JpZ2luYWxZIC8gdGhpcy5maW5hbFRpbGVIZWlnaHQ7XG4gICAgICAgIHlUaWxlcyA9IE1hdGgucm91bmQoeVRpbGVzKTtcblxuICAgICAgICByZXR1cm4geyBncmlkWDogeFRpbGVzLCBncmlkWTogeVRpbGVzIH07XG4gICAgfVxuXG4gICAgZ2V0VGlsZU5lYXJlc3RUbyhtYXBPYmplY3Q6IFJlY3RhbmdsZSk6IFRpbGUge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvcy5ncmlkWV1bcG9zLmdyaWRYXTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgS2V5Ym9hcmRNYW5hZ2VyIHtcblxuICAgICBrZXlVcHMgPSB7fTtcbiAgICAga2V5RG93bnMgPSB7fTtcbiAgICAgQU5ZX0tFWSA9IFwiYW55X2tleVwiO1xuXG4gICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgfVxuXG4gICAgIG9uS2V5VXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMua2V5VXBzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlVcHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleVVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICBvbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMua2V5RG93bnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleURvd25zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlEb3duID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIHJlZ2lzdGVyS2V5KGtleSwgb25LZXlEb3duLCBvbktleVVwLCBpZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleURvd246IG9uS2V5RG93biB9O1xuICAgICAgICB0aGlzLmtleVVwc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5VXA6IG9uS2V5VXAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcktleShpZGVudGlmaWVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdO1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl07XG4gICAgfVxuXG5cblxufVxuIiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XG5cbiAgICAgY2xpZW50czogb2JqZWN0ID0ge307XG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgcmVnaXN0ZXIoaWQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xuICAgIH1cblxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jbGllbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2soZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdGxhc1Nwcml0ZXNoZWV0IHtcblxuXHRhdGxhc0RhdGE7XG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XG5cblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBhdGxhc0RhdGEpIHtcblx0XHR0aGlzLmF0bGFzRGF0YSA9IGF0bGFzRGF0YTtcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBTQ0FMRV9NT0RFUy5ORUFSRVNUO1x0XHRcblx0fVxuXG5cdGdldFRleHR1cmUobmFtZTogc3RyaW5nKTogVGV4dHVyZSB7XG5cblx0XHRjb25zdCBwcm9wcyA9IHRoaXMuYXRsYXNEYXRhLml0ZW1zW25hbWVdO1xuXHRcdGlmIChwcm9wcyA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZmluZCB0ZXh0dXJlICcke25hbWV9JyBpbiBzcHJpdGVzaGVldGApO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUocHJvcHMueCwgcHJvcHMueSwgcHJvcHMud2lkdGgsIHByb3BzLmhlaWdodCkpO1xuXHR9XG5cblxufSIsImltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucywgbG9hZGVyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tIFwiLi9UbnRQdW1wa2luXCI7XG5pbXBvcnQgeyBBdGxhc1Nwcml0ZXNoZWV0IH0gZnJvbSBcIi4vQXRsYXNTcHJpdGVzaGVldFwiO1xuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XG5cbmNvbnN0IEFQUF9XSURUSCA9IDUxMjtcbmNvbnN0IEFQUF9IRUlHSFQgPSA1MTI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciB7XG5cbiAgICB0aWxlZFNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0O1xuICAgIGF0bGFzU3ByaXRlc2hlZXQ6IEF0bGFzU3ByaXRlc2hlZXQ7XG5cbiAgICBtYXA6IFRpbGVkTWFwO1xuICAgIHBpeGlBcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9DcmVhdGUgYSBQaXhpIEFwcGxpY2F0aW9uXG4gICAgICAgIGNsYXNzIFBpeGlPcHRpb25zIGltcGxlbWVudHMgQXBwbGljYXRpb25PcHRpb25zIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCkgeyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnMoQVBQX1dJRFRILCBBUFBfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLnBpeGlBcHAgPSBuZXcgQXBwbGljYXRpb24ocGl4aU9wdGlvbnMpO1xuXG4gICAgICAgIC8vQWRkIHRoZSBjYW52YXMgdGhhdCBQaXhpIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCBmb3IgeW91IHRvIHRoZSBIVE1MIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waXhpQXBwLnZpZXcpO1xuICAgIH1cblxuXG4gICAgc3RhcnRHYW1lKCkge1xuXG4gICAgICAgIGNvbnN0IHRvTG9hZCA9IFtcbiAgICAgICAgICAgIHtuYW1lOid0aWxlZFNwcml0ZXNoZWV0VGV4dHVyZScsIHVybDonZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nJ30sXG4gICAgICAgICAgICB7bmFtZTonYXRsYXNTcHJpdGVzaGVldFRleHR1cmUnLCB1cmw6J2RhdGEvYXNzZXRzL3Nwcml0ZXNtaXRoX3Nwcml0ZXNoZWV0LnBuZyd9LFxuICAgICAgICAgICAge25hbWU6J2F0bGFzU3ByaXRlc2hlZXREYXRhJywgdXJsOidkYXRhL2Fzc2V0cy9zcHJpdGVzbWl0aF9zcHJpdGVzaGVldC5qc29uJ30sXG4gICAgICAgICAgICB7bmFtZTonbWFwRGF0YScsIHVybDonZGF0YS9tYXBzL21hcDEuanNvbid9LFxuICAgICAgICBdXG5cbiAgICAgICAgbG9hZGVyLmFkZCh0b0xvYWQpLmxvYWQodGhpcy5sb2FkZXJGaW5pc2hlZCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRlckZpbmlzaGVkID0gKCk9PntcblxuICAgICAgICB0aGlzLmtleWJvYXJkTWFuYWdlciA9IG5ldyBLZXlib2FyZE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XG5cbiAgICAgICAgLy9LZW5ueSBTcHJpdGVzaGVldCBzZWUgZGF0YS9tYXBzL0tlbm5leSBSUEcgVGlsZXMudHN4XG4gICAgICAgIHRoaXMudGlsZWRTcHJpdGVzaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFBJWEkubG9hZGVyLnJlc291cmNlcy50aWxlZFNwcml0ZXNoZWV0VGV4dHVyZS50ZXh0dXJlLCAxLCAxNiwgMTYsIDMxLCA1NylcbiAgICAgICAgLy9BdGxhcyBTcHJpdGVzaGVldFxuICAgICAgICB0aGlzLmF0bGFzU3ByaXRlc2hlZXQgPSBuZXcgQXRsYXNTcHJpdGVzaGVldChQSVhJLmxvYWRlci5yZXNvdXJjZXMuYXRsYXNTcHJpdGVzaGVldFRleHR1cmUudGV4dHVyZSwgUElYSS5sb2FkZXIucmVzb3VyY2VzLmF0bGFzU3ByaXRlc2hlZXREYXRhLmRhdGEpO1xuXG4gICAgICAgIC8vUmVnaXN0ZXIgVXBkYXRlIHNjaGVkdWxlclxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLmFkZCh0aGlzLnVwZGF0ZVNjaGVkdWxlci5kb1N0ZXApO1xuXG4gICAgICAgIC8vTG9hZCBNYXBcbiAgICAgICAgdGhpcy5tYXAgPSBUaWxlZE1hcC5sb2FkTWFwKFBJWEkubG9hZGVyLnJlc291cmNlcy5tYXBEYXRhLmRhdGEpO1xuXG4gICAgICAgIC8vRGlzcGxheSBNYXBcbiAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFwKTtcblxuICAgICAgICAvL1NldCBQbGF5ZXIgQ29udHJvbHNcbiAgICAgICAgY29uc3QgcGxheWVycyA9IHRoaXMubWFwLnBsYXllcnM7XG4gICAgICAgIHBsYXllcnNbMF0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcImJcIiwgXCJuXCIpO1xuICAgICAgICBwbGF5ZXJzWzBdLnNldENvbG9yKDB4Q0NDQ0ZGKTtcbiAgICAgICAgcGxheWVyc1sxXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcInhcIiwgXCJjXCIsIFwieVwiKTtcbiAgICAgICAgcGxheWVyc1sxXS5zZXRDb2xvcigweENDRUVBQSk7XG5cbiAgICAgICAgLy9TdGFydCBQaXhpIEFwcFxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIHRlc3QoKSB7XG4gICAgICAgIHRoaXMubWFwLnBsYXllcnNbMF0uaW52ZW50b3J5LmdpdmVJdGVtKElURU0uVE5UX1BVTVBLSU4sMTAwKTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IHtHYW1lTWFuYWdlcn0gZnJvbSBcIi4vbW9kZWwvR2FtZU1hbmFnZXJcIlxuXG5jb25zdCBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpO1xuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XG5cbmV4cG9ydCB7Z2FtZU1hbmFnZXJ9O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9