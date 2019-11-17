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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "PIXI"
var external_PIXI_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/model/TiledSpritesheet.ts

var TiledSpritesheet_TiledSpritesheet = /** @class */ (function () {
    function TiledSpritesheet(path, border, tileWidth, tileHeight, rows, columns) {
        this.path = path;
        this.border = border;
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;
        this.rows = rows;
        this.columns = columns;
        this.bigTexture = external_PIXI_["Texture"].fromImage(path, true, external_PIXI_["SCALE_MODES"].NEAREST);
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


// CONCATENATED MODULE: ./src/model/Player.ts


var Inventory = /** @class */ (function () {
    function Inventory() {
        this.tomato_item = 0;
        this.pumpkin_item = 0;
    }
    return Inventory;
}());
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["UP"] = 0] = "UP";
    DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    DIRECTION[DIRECTION["DOWN"] = 2] = "DOWN";
    DIRECTION[DIRECTION["LEFT"] = 3] = "LEFT";
    DIRECTION[DIRECTION["STOP"] = 4] = "STOP";
})(DIRECTION || (DIRECTION = {}));
;
var ACTION_MODE;
(function (ACTION_MODE) {
    ACTION_MODE[ACTION_MODE["HARVEST"] = 0] = "HARVEST";
    ACTION_MODE[ACTION_MODE["PLACE_PUMPKIN_SEED"] = 1] = "PLACE_PUMPKIN_SEED";
    ACTION_MODE[ACTION_MODE["PLACE_TOMATO_SEED"] = 2] = "PLACE_TOMATO_SEED";
    ACTION_MODE[ACTION_MODE["PLACE_TNT_PUMPKIN"] = 3] = "PLACE_TNT_PUMPKIN";
    ACTION_MODE[ACTION_MODE["SHOOT"] = 4] = "SHOOT";
})(ACTION_MODE || (ACTION_MODE = {}));
;
var Player_Player = /** @class */ (function () {
    function Player(x, y, map, playerId) {
        var _this = this;
        this.keyDown = function (event) {
            if (event.key != _this.lastKey) {
                _this.lastKey = event.key;
                switch (event.key) {
                    case _this.upKey:
                        _this.changeDirection(DIRECTION.UP);
                        _this.vy = -1 * Player.PLAYER_SPEED;
                        break;
                    case _this.downKey:
                        _this.changeDirection(DIRECTION.DOWN);
                        _this.vy = 1 * Player.PLAYER_SPEED;
                        break;
                    case _this.leftKey:
                        _this.changeDirection(DIRECTION.LEFT);
                        _this.vx = -1 * Player.PLAYER_SPEED;
                        break;
                    case _this.rightKey:
                        _this.changeDirection(DIRECTION.RIGHT);
                        _this.vx = 1 * Player.PLAYER_SPEED;
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
                }
            }
        };
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory();
        this.actionMode = ACTION_MODE.PLACE_TOMATO_SEED;
        this.animations = [];
        var baseTexture = external_PIXI_["Texture"].fromImage("data/assets/player_" + playerId + ".png").baseTexture;
        for (var row = 0; row < 4; row++) {
            var textureArray = [];
            for (var column = 0; column < 3; column++) {
                var t = new external_PIXI_["Texture"](baseTexture, new external_PIXI_["Rectangle"](column * Player.SPRITE_WIDTH, row * Player.SPRITE_HEIGHT, Player.SPRITE_WIDTH, Player.SPRITE_HEIGHT));
                textureArray.push(t);
            }
            this.animations.push(textureArray);
        }
        this.sprite = new external_PIXI_["extras"].AnimatedSprite(this.animations[DIRECTION.DOWN]);
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
    Player.prototype.changeDirection = function (direction) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == DIRECTION.STOP) {
            this.sprite.stop();
        }
    };
    Player.prototype.setKeys = function (upKey, downKey, leftKey, rightKey, actionKey, selectKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.selectKey = selectKey;
    };
    Player.prototype.giveItem = function (itemType, count) {
        console.log(this.playerId + " got " + count + " pieces of " + itemType);
        this.inventory[itemType] += count;
    };
    Player.prototype.getCurrentTile = function () {
        var xTiles = this.sprite.x / this.map.finalTileWidth;
        xTiles = Math.round(xTiles);
        var yTiles = this.sprite.y / this.map.finalTileHeight;
        yTiles = Math.round(yTiles);
        return this.map.tiles[yTiles][xTiles];
    };
    Player.SPRITE_WIDTH = 96 / 3;
    Player.SPRITE_HEIGHT = 144 / 4;
    Player.SPRITE_SCALE = new external_PIXI_["Point"](1.5, 1.5);
    Player.PLAYER_SPEED = 4;
    return Player;
}());


// CONCATENATED MODULE: ./src/model/Tile.ts
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
    Tile.prototype.onHit = function (hitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    };
    Tile.prototype.onPlant = function (plant) {
        if (this.tileObject) {
            this.tileObject.onPlant(plant);
        }
    };
    Tile.prototype.onPlace = function (pumpkin) {
        if (this.tileObject == undefined) {
            console.log("Placing Pumpkin TNT");
        }
    };
    Tile.prototype.onHarvest = function (initiator) {
        if (this.tileObject) {
            this.tileObject.onHarvest(initiator);
        }
    };
    Tile.prototype.isFree = function () {
        return this.tileObject ? false : true;
    };
    return Tile;
}(external_PIXI_["Sprite"]));


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

var TileObject = /** @class */ (function (_super) {
    TileObject_extends(TileObject, _super);
    function TileObject(texture, mother) {
        var _this = _super.call(this, texture) || this;
        _this.solid = false;
        _this.vulnerable = true;
        _this.wiggleRecursiv = function (times) {
            var radiant = 0.07;
            if (times > 0) {
                switch (times % 4) {
                    case 0:
                        _this.rotation += radiant;
                        break;
                    case 1:
                        _this.rotation -= radiant;
                        break;
                    case 2:
                        _this.rotation -= radiant;
                        break;
                    case 3:
                        _this.rotation += radiant;
                        break;
                }
                setTimeout(function () { _this.wiggleRecursiv(--times); }, 30);
            }
            else {
                _this.x -= _this.width / 2;
                _this.y -= _this.height / 2;
                _this.anchor.set(0);
                _this.vulnerable = true;
            }
        };
        _this.shrinkAndDieRecursive = function (scale) {
            var scaleDiff = 0.2;
            if (scale.x <= 0 || scale.y <= 0) {
                _this.destroy();
            }
            else {
                _this.scale.x = scale.x - scaleDiff;
                _this.scale.y = scale.y - scaleDiff;
                setTimeout(function () { _this.shrinkAndDieRecursive(_this.scale); }, 10);
            }
        };
        _this.mother = mother;
        if (_this.mother.isFree()) {
            _this.mother.tileObject = _this;
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }
        //set render coordinates
        _this.x = _this.mother.x;
        _this.y = _this.mother.y;
        return _this;
    }
    TileObject.prototype.onHit = function (hitevent) { };
    ;
    TileObject.prototype.onPlant = function (plant) { };
    ;
    TileObject.prototype.onHarvest = function (initiator) { };
    ;
    TileObject.prototype.onDestroy = function (initiator) {
        delete this.mother.tileObject;
        this.shrinkAndDie();
    };
    ;
    TileObject.prototype.wiggle = function (times) {
        this.vulnerable = false;
        this.x += this.width / 2;
        this.y += this.height / 2;
        this.anchor.set(0.5);
        this.wiggleRecursiv(times * 4);
    };
    TileObject.prototype.shrinkAndDie = function () {
        this.vulnerable = false;
        this.x += this.width / 2;
        this.y += this.height;
        this.anchor.set(0.5, 1);
        this.shrinkAndDieRecursive(this.scale);
    };
    TileObject.onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    TileObject.onDestroySound = new Audio('../data/assets/sound/blob1.mp3');
    return TileObject;
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

var Tower = /** @class */ (function (_super) {
    Tower_extends(Tower, _super);
    function Tower(texture, mother, owner) {
        var _this = _super.call(this, texture, mother) || this;
        _this.owner = owner;
        return _this;
    }
    Tower.prototype.onHit = function (hitEvent) {
    };
    ;
    Tower.prototype.onDestroy = function (initiator) {
    };
    return Tower;
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
        map.tileObjectContainer.addChild(_this);
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


// CONCATENATED MODULE: ./src/model/Items.ts
var ITEM;
(function (ITEM) {
    ITEM[ITEM["TOMATO_PLANT"] = 0] = "TOMATO_PLANT";
    ITEM[ITEM["TOMATO_ITEM"] = 1] = "TOMATO_ITEM";
    ITEM[ITEM["TOMATO_PROJECTILE"] = 2] = "TOMATO_PROJECTILE";
    ITEM[ITEM["PUMPKIN_PLANT"] = 3] = "PUMPKIN_PLANT";
    ITEM[ITEM["PUMPKIN_ITEM"] = 4] = "PUMPKIN_ITEM";
    ITEM[ITEM["TNT_PUMPKIN"] = 5] = "TNT_PUMPKIN";
    ITEM[ITEM["WOOD_ITEM"] = 6] = "WOOD_ITEM";
})(ITEM || (ITEM = {}));


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



var Tree_Tree = /** @class */ (function (_super) {
    Tree_extends(Tree, _super);
    function Tree(texture, mother) {
        var _this = _super.call(this, texture, mother) || this;
        _this.health = 1;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        return _this;
    }
    Tree.prototype.onHit = function (hitEvent) {
        if (this.vulnerable) {
            this.health -= hitEvent.damage;
            if (this.health < 0.01) {
                this.onDestroy(hitEvent.initiator);
            }
            else {
                this.statusBar.visible = true;
                this.statusBar.setProgress(this.health);
                this.wiggle(3);
                Tree.onHitSound.play();
            }
        }
    };
    ;
    Tree.prototype.onDestroy = function (initiator) {
        initiator.giveItem(ITEM.WOOD_ITEM, 1);
        Tree.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        _super.prototype.onDestroy.call(this, initiator);
    };
    Tree.prototype.onHarvest = function (initiator) {
    };
    Tree.onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    Tree.onDestroySound = new Audio('../data/assets/sound/blob1.mp3');
    return Tree;
}(TileObject));


// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

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



var Wall_Wall = /** @class */ (function (_super) {
    Wall_extends(Wall, _super);
    function Wall(mother) {
        var _this = _super.call(this, gameManager.spriteSheet.getTexture(949), mother) || this;
        _this.health = 1;
        _this.statusBar = new StatusBar_StatusBar(_this, false);
        _this.solid = true;
        return _this;
    }
    Wall.prototype.onHit = function (hitEvent) {
        if (this.vulnerable) {
            this.health -= hitEvent.damage;
            if (this.health < 0.01) {
                this.onDestroy(hitEvent.initiator);
            }
            else {
                this.statusBar.visible = true;
                this.statusBar.setProgress(this.health);
                this.wiggle(3);
                Wall.onHitSound.play();
            }
        }
    };
    ;
    Wall.prototype.onDestroy = function (initiator) {
        Wall.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        _super.prototype.onDestroy.call(this, initiator);
    };
    return Wall;
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
    TiledMap.loadMap = function (mapPath, spritesheet, callback) {
        var map = new TiledMap();
        //Load Spritesheet
        var SPRITE_SCALE = new external_PIXI_["Point"](TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
        map.finalTileWidth = spritesheet.tileWidth * SPRITE_SCALE.x;
        map.finalTileHeight = spritesheet.tileHeight * SPRITE_SCALE.y;
        map.spritesheet = spritesheet;
        //Load Map and Parse it
        external_$_["getJSON"](mapPath, {}, function (mapData) {
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
                                var texture = spritesheet.getTexture(tl.data[index]);
                                var newTile = new Tile(texture, row, column, map);
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
                            var texture = spritesheet.getTexture(co.gid);
                            var ownerId = map.getMapObjectProperty(co, "owner");
                            var owner = map.players[ownerId];
                            var mother = map.getTileNearestTo(co);
                            var newTower = new Tower(texture, mother, owner);
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
                            var texture = spritesheet.getTexture(co.gid);
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
            //Call onFinish Callback
            callback(map);
        });
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
        tile.x = tile.gridX * this.spritesheet.tileWidth * TiledMap.SPRITE_SCALE.x;
        tile.y = tile.gridY * this.spritesheet.tileHeight * TiledMap.SPRITE_SCALE.y;
        tile.scale = TiledMap.SPRITE_SCALE;
        this.tiles[tile.gridY][tile.gridX] = tile;
        this.tileContainer.addChild(tile);
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


// CONCATENATED MODULE: ./src/model/GameManager.ts





var APP_WIDTH = 512;
var APP_HEIGHT = 512;
var GameManager_GameManager = /** @class */ (function () {
    function GameManager() {
        this.keyboardManager = new KeyboardManager();
        this.updateScheduler = new UpdateScheduler();
        this.spriteSheet = new TiledSpritesheet_TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57); //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
    }
    GameManager.prototype.startGame = function () {
        var _this = this;
        //Create Pixi stuff
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
        //Still neccesarry????
        document.body.appendChild(this.pixiApp.view);
        //Register Update scheduler
        this.pixiApp.ticker.add(this.updateScheduler.doStep);
        TiledMap_TiledMap.loadMap("data/maps/map1.json", this.spriteSheet, function (parsedMap) {
            _this.map = parsedMap;
            _this.pixiApp.stage.addChild(parsedMap);
            _this.pixiApp.ticker.start();
            var players = parsedMap.players;
            players[0].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "n");
            players[1].setKeys("w", "s", "a", "d", "x", "y");
        });
    };
    return GameManager;
}());


// CONCATENATED MODULE: ./src/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameManager", function() { return gameManager; });

var gameManager = new GameManager_GameManager();
gameManager.startGame();



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi9leHRlcm5hbCBcIiRcIiIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkU3ByaXRlc2hlZXQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZU9iamVjdC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvU3RhdHVzQmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UcmVlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvV2FsbC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkTWFwLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVXBkYXRlU2NoZWR1bGVyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9pbmRleC50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QUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQzs7OztBQzNERDtBQUErQztBQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUN0QyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFSCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7IiwibW9kdWxlLmV4cG9ydHMgPSAkOyIsImltcG9ydCB7IFRleHR1cmUsIFNDQUxFX01PREVTLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGlsZWRTcHJpdGVzaGVldHtcblxuXHRwYXRoOiBzdHJpbmc7XG5cdGJvcmRlcjogbnVtYmVyO1xuXHR0aWxlSGVpZ2h0OiBudW1iZXI7XG5cdHRpbGVXaWR0aDogbnVtYmVyO1xuXHRyb3dzOiBudW1iZXI7XG5cdGNvbHVtbnM6IG51bWJlcjtcblx0YmlnVGV4dHVyZTogVGV4dHVyZTtcblx0dGV4dHVyZXM6IFRleHR1cmVbXTtcblxuXHRjb25zdHJ1Y3RvcihwYXRoLGJvcmRlcix0aWxlV2lkdGgsdGlsZUhlaWdodCxyb3dzLGNvbHVtbnMpe1xuXHRcdHRoaXMucGF0aCA9IHBhdGg7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdFx0dGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcblx0XHR0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcblx0XHR0aGlzLnJvd3MgPSByb3dzO1xuXHRcdHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG5cdFx0dGhpcy5iaWdUZXh0dXJlID0gVGV4dHVyZS5mcm9tSW1hZ2UocGF0aCwgdHJ1ZSwgU0NBTEVfTU9ERVMuTkVBUkVTVCk7XG5cdFx0dGhpcy50ZXh0dXJlcyA9IFtdO1xuXHR9XG5cblx0Z2V0VGV4dHVyZShnaWQ6bnVtYmVyKTpUZXh0dXJlICB7XG5cdFx0Ly9DaGVjayB3ZXRoZXIgdGV4dHVyZXMgd2FzIGFsbHJlYWR5IGZyYW1lZCBmb3JtIHNwcml0ZXNoZWV0XG5cdFx0aWYgKHRoaXMudGV4dHVyZXNbZ2lkXSkge1xuXHRcdCAgcmV0dXJuIHRoaXMudGV4dHVyZXNbZ2lkXTtcblx0XHR9IGVsc2Uge1xuXHRcdCAgLy9DYWxjdWxhdGUgcm93IGFuZCBjb2x1bW4gZnJvbSBnaWRcblx0XHQgIGxldCByb3c6bnVtYmVyID0gTWF0aC5mbG9vcigoZ2lkIC0gMSkgLyB0aGlzLmNvbHVtbnMpO1xuXHRcdCAgbGV0IGNvbHVtbjpudW1iZXIgPSAoZ2lkIC0gMSkgJSB0aGlzLmNvbHVtbnM7XG5cdFxuXHRcdCAgbGV0IHRpbGVXaWR0aDpudW1iZXIgPSB0aGlzLnRpbGVXaWR0aDtcblx0XHQgIGxldCB0aWxlSGVpZ2h0Om51bWJlciA9IHRoaXMudGlsZUhlaWdodDtcblx0XG5cdFx0ICBsZXQgeDpudW1iZXIgPSBjb2x1bW4gKiB0aWxlV2lkdGggKyBjb2x1bW4gKiB0aGlzLmJvcmRlcjtcblx0XHQgIGxldCB5Om51bWJlciA9IHJvdyAqIHRpbGVIZWlnaHQgKyByb3cgKiB0aGlzLmJvcmRlcjtcblx0XG5cdFx0ICBsZXQgdDpUZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5iaWdUZXh0dXJlLmJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKHgsIHksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkpO1xuXHRcdCAgLy9TYXZlIFRleHR1cmUgaW4gY2FjaGUgYXJyYXlcblx0XHQgIHRoaXMudGV4dHVyZXNbZ2lkXSA9IHQ7XG5cdFx0ICByZXR1cm4gdDtcblx0XHR9XG5cdCAgfVxuXHRcblxufSIsImltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IFBvaW50LCBleHRyYXMsIFRleHR1cmUsIEJhc2VUZXh0dXJlLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuY2xhc3MgSW52ZW50b3J5IHtcbiAgICB0b21hdG9faXRlbTogbnVtYmVyID0gMDtcbiAgICBwdW1wa2luX2l0ZW06IG51bWJlciA9IDA7XG59XG5cbmVudW0gRElSRUNUSU9OIHtVUCxSSUdIVCxET1dOLExFRlQsU1RPUH07XG5lbnVtIEFDVElPTl9NT0RFIHtIQVJWRVNULFBMQUNFX1BVTVBLSU5fU0VFRCxQTEFDRV9UT01BVE9fU0VFRCxQTEFDRV9UTlRfUFVNUEtJTixTSE9PVH07XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgeyAgXG5cblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG4gICAgc3RhdGljIFBMQVlFUl9TUEVFRCA9IDQ7XG5cbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBzcHJpdGU6IGV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW11bXTtcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgYWN0aW9uTW9kZTogQUNUSU9OX01PREU7XG4gICAgbGFzdEtleTogc3RyaW5nO1xuICAgIHVwS2V5OiBzdHJpbmc7XG4gICAgZG93bktleTogc3RyaW5nO1xuICAgIGxlZnRLZXk6IHN0cmluZztcbiAgICByaWdodEtleTogc3RyaW5nO1xuICAgIGFjdGlvbktleTogc3RyaW5nO1xuICAgIHNlbGVjdEtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1hcDogVGlsZWRNYXAsIHBsYXllcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBBQ1RJT05fTU9ERS5QTEFDRV9UT01BVE9fU0VFRDtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGJhc2VUZXh0dXJlOiBCYXNlVGV4dHVyZSA9IFRleHR1cmUuZnJvbUltYWdlKGBkYXRhL2Fzc2V0cy9wbGF5ZXJfJHtwbGF5ZXJJZH0ucG5nYCkuYmFzZVRleHR1cmU7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZUFycmF5OiBUZXh0dXJlW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVGV4dHVyZShiYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShjb2x1bW4gKiBQbGF5ZXIuU1BSSVRFX1dJRFRILCByb3cgKiBQbGF5ZXIuU1BSSVRFX0hFSUdIVCwgUGxheWVyLlNQUklURV9XSURUSCwgUGxheWVyLlNQUklURV9IRUlHSFQpKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlQXJyYXkucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmVBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnggPSB4O1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0geTtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwcml0ZS5zY2FsZSA9IFBsYXllci5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4xMztcbiAgICAgICAgdGhpcy5zcHJpdGUubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG5cbiAgICAgICAgLy9yZWdpc3RlciBrZXkgZXZlbnRzXG4gICAgICAgIGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5yZWdpc3RlcktleShnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIuQU5ZX0tFWSwgdGhpcy5rZXlEb3duLCB0aGlzLmtleVVwLCBcInBsYXllclwiICsgcGxheWVySWQpO1xuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJcIiArIHBsYXllcklkLCB0aGlzLmRvU3RlcCk7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKDAgPD0gZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9uc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBESVJFQ1RJT04uU1RPUCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgfVxuXG4gICAga2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9IHRoaXMubGFzdEtleSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSkgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG5cbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxuICAgICAgICAgICAgbGV0IG5ld1ggPSB0aGlzLnNwcml0ZS54ICsgdGhpcy52eCAqIGRlbHRhO1xuICAgICAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnNwcml0ZS55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgICAgICAvL0dldCBhbGwgdGlsZXMgdGhhdCB3b3VsZCBiZSB0b3VjaGVkIGJ5IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIGxldCB4UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdYIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxuICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChuZXdYICsgdGhpcy5zcHJpdGUud2lkdGgpIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgeVJhbmdlID0ge1xuICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IobmV3WSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxuICAgICAgICAgICAgbGV0IGJsb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHlSYW5nZS5mcm9tOyB5IDw9IHlSYW5nZS50bzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcC50aWxlc1t5XSA9PSB1bmRlZmluZWQgfHwgdGhpcy5tYXAudGlsZXNbeV1beF0gPT0gdW5kZWZpbmVkIHx8ICh0aGlzLm1hcC50aWxlc1t5XVt4XS50aWxlT2JqZWN0ICYmIHRoaXMubWFwLnRpbGVzW3ldW3hdLnRpbGVPYmplY3Quc29saWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSBuZXdZO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2l2ZUl0ZW0oaXRlbVR5cGU6IElURU0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJJZCArIFwiIGdvdCBcIiArIGNvdW50ICsgXCIgcGllY2VzIG9mIFwiICsgaXRlbVR5cGUpO1xuICAgICAgICB0aGlzLmludmVudG9yeVtpdGVtVHlwZV0gKz0gY291bnQ7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRpbGUoKXtcbiAgICAgICAgIGxldCB4VGlsZXMgPSB0aGlzLnNwcml0ZS54IC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgICB4VGlsZXMgPSBNYXRoLnJvdW5kKHhUaWxlcyk7XG4gXG4gICAgICAgICBsZXQgeVRpbGVzID0gdGhpcy5zcHJpdGUueSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgIHlUaWxlcyA9IE1hdGgucm91bmQoeVRpbGVzKTtcbiBcbiAgICAgICAgIHJldHVybiB0aGlzLm1hcC50aWxlc1t5VGlsZXNdW3hUaWxlc107XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tIFwiLi9UbnRQdW1wa2luXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIGdyaWRYOiBudW1iZXI7XG4gICAgZ3JpZFk6IG51bWJlcjtcbiAgICB0aWxlT2JqZWN0OiBUaWxlT2JqZWN0O1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBtYXA6VGlsZWRNYXApIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ3JpZFggPSBncmlkWDtcbiAgICAgICAgdGhpcy5ncmlkWSA9IGdyaWRZO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgLy9jYWxjdWxhdGUgb3duIHJlbmRlciBjb29yZGluYXRlc1xuICAgICAgICB0aGlzLnggPSBncmlkWCAqIG1hcC5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gZ3JpZFkgKiBtYXAuZmluYWxUaWxlSGVpZ2h0O1xuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IaXQoaGl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGFudChwbGFudDogUGxhbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uUGxhbnQocGxhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGFjZShwdW1wa2luOiBUbnRQdW1wa2luKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYWNpbmcgUHVtcGtpbiBUTlRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhhcnZlc3QoaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uSGFydmVzdChpbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGcmVlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVPYmplY3QgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG5cblxuXG5cblxufSIsImltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFNwcml0ZSwgVGV4dHVyZSwgUG9pbnQgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGlsZU9iamVjdCBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvYmxvYjQubXAzJyk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcblxuICAgIG1vdGhlcjogVGlsZTtcbiAgICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHZ1bG5lcmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLm1vdGhlciA9IG1vdGhlcjtcbiAgICAgICAgaWYgKHRoaXMubW90aGVyLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm1vdGhlci50aWxlT2JqZWN0ID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXQgcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XG4gICAgfVxuXG4gICAgb25IaXQoaGl0ZXZlbnQ6IEhpdEV2ZW50KSB7IH07XG5cbiAgICBvblBsYW50KHBsYW50OiBQbGFudCkgeyB9O1xuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7IH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuc2hyaW5rQW5kRGllKCk7XG4gICAgfTtcblxuICAgIHdpZ2dsZSh0aW1lcykge1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy53aWdnbGVSZWN1cnNpdih0aW1lcyAqIDQpO1xuICAgIH1cblxuICAgIHdpZ2dsZVJlY3Vyc2l2ID0gKHRpbWVzOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XG4gICAgICAgIGlmICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGltZXMgJSA0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHRoaXMucm90YXRpb24gLT0gcmFkaWFudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMud2lnZ2xlUmVjdXJzaXYoLS10aW1lcykgfSwgMzApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcbiAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNocmlua0FuZERpZSgpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LDEpO1xuICAgICAgICB0aGlzLnNocmlua0FuZERpZVJlY3Vyc2l2ZSh0aGlzLnNjYWxlKTtcbiAgICB9XG5cbiAgICBzaHJpbmtBbmREaWVSZWN1cnNpdmUgPSAoc2NhbGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2NhbGVEaWZmID0gMC4yO1xuICAgICAgICBpZihzY2FsZS54IDw9IDAgfHwgc2NhbGUueSA8PSAwKXtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSBzY2FsZS54IC0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gc2NhbGUueSAtIHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9Pnt0aGlzLnNocmlua0FuZERpZVJlY3Vyc2l2ZSh0aGlzLnNjYWxlKX0sMTApO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIG93bmVyOiBQbGF5ZXI7XG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUsIG93bmVyOiBQbGF5ZXIpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcblxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIGJvcmRlclJlY3RhbmdsZTogR3JhcGhpY3M7XG4gICAgYm9yZGVyQ29sb3I6IG51bWJlclxuICAgIHByb2dyZXNzU2hhcGU6IEdyYXBoaWNzO1xuICAgIHByb2dyZXNzQ29sb3I6IG51bWJlcjtcbiAgICBwcm9ncmVzczogbnVtYmVyOyAvL0Zyb20gMCB0byAxXG4gICAgbW90aGVyOiBUaWxlT2JqZWN0O1xuXG4gICAgc3RhdGljIExJTkVfVEhJQ0tORVNTID0gMztcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZU9iamVjdCwgdmlzaWJsZT86IGJvb2xlYW4sIHByb2dyZXNzPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlciwgcHJvZ3Jlc3NDb2xvcj86IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vdGhlciA9IG1vdGhlcjtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHZpc2libGU7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcyB8fCAxO1xuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3IgfHwgMHhGRjAwMDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHByb2dyZXNzQ29sb3IgfHwgMHgwMEZGMDA7XG5cbiAgICAgICAgLy9BZGQgdG8gcGl4aSBjb250YWluZXJcbiAgICAgICAgY29uc3QgbWFwID0gbW90aGVyLm1vdGhlci5tYXA7XG5cbiAgICAgICAgbWFwLnRpbGVPYmplY3RDb250YWluZXIuYWRkQ2hpbGQodGhpcyk7XG5cbiAgICAgICAgLy9wb3NpdGlvbiByZWxhdGl2ZSB0byBtb3RoZXJcbiAgICAgICAgdGhpcy54ID0gbW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IG1vdGhlci55O1xuICAgICAgICB0aGlzLndpZHRoID0gbW90aGVyLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1vdGhlci5oZWlnaHRcblxuICAgICAgICAvL0RyYXcgZnJhbWVcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgdGhpcy5ib3JkZXJDb2xvcik7XG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlLmRyYXdSZWN0KDAsIDAsIG1hcC5maW5hbFRpbGVXaWR0aCwgU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTICogMyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib3JkZXJSZWN0YW5nbGUpO1xuXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy9DbGVhciBsYXN0IHByb2dyZXNzIFNoYXBlXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzU2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wcm9ncmVzc1NoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAwLjEpIHsgLy9EcmF3IHRvbyBzbWFsbCBwcm9ncmVzcyBsb29rcyB1Z2x5XG4gICAgICAgICAgICAvL0RyYXcgbmV3IHByb2dyZXNzYmFyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUgPSBuZXcgR3JhcGhpY3MoKTtcblxuICAgICAgICAgICAgLy9Eb24ndCB3b3JyeSBhYm91dCB0aGlzIGNyYXp5ICsxLy0xIHBpeGVscywgdGhleSBhcmUgY3JhenksIGJ1dCBuZWNlc3NhcnlcbiAgICAgICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDY0ICogdGhpcy5wcm9ncmVzcyAtIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyArIDE7XG4gICAgICAgICAgICBjb25zdCB0aGljayA9IFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDI7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NTaGFwZS5saW5lU3R5bGUodGhpY2ssIHRoaXMucHJvZ3Jlc3NDb2xvcilcbiAgICAgICAgICAgICAgICAubW92ZVRvKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAtIDEsIHRoaWNrIC0gMSlcbiAgICAgICAgICAgICAgICAubGluZVRvKGxpbmVXaWR0aCwgdGhpY2sgLSAxKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPCAwIHx8IHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBzZXQgcHJvZ3Jlc3MgbG93ZXIgdGhhbiAwIG9yIGhpZ2hlciB0aGFuIDFcIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuXG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQsXG4gICAgVE9NQVRPX0lURU0sXG4gICAgVE9NQVRPX1BST0pFQ1RJTEUsXG4gICAgUFVNUEtJTl9QTEFOVCxcbiAgICBQVU1QS0lOX0lURU0sXG4gICAgVE5UX1BVTVBLSU4sXG4gICAgV09PRF9JVEVNXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvYmxvYjQubXAzJyk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIG1vdGhlcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgVHJlZS5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgaW5pdGlhdG9yLmdpdmVJdGVtKElURU0uV09PRF9JVEVNLCAxKTtcbiAgICAgICAgVHJlZS5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7XG5cbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGwgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSAxO1xuICBcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcikge1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5zcHJpdGVTaGVldC5nZXRUZXh0dXJlKDk0OSksIG1vdGhlcik7IC8vNjY1IGlzIGEgYm94IHNwcml0ZVxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8IDAuMDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMud2lnZ2xlKDMpO1xuICAgICAgICAgICAgICAgIFdhbGwub25IaXRTb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIFdhbGwub25EZXN0cm95U291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kZXN0cm95KHsgY2hpbGRyZW46IHRydWUgfSk7XG4gICAgICAgIHN1cGVyLm9uRGVzdHJveShpbml0aWF0b3IpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlZFNwcml0ZXNoZWV0IH0gZnJvbSBcIi4vVGlsZWRTcHJpdGVzaGVldFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vVG93ZXJcIjtcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gXCIuL1dhbGxcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkTWFwIGV4dGVuZHMgQ29udGFpbmVyIHtcblxuICAgIHN0YXRpYyBNQVBfWk9PTSA9IDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcblxuICAgIHBsYXllcnM6IFBsYXllcltdO1xuICAgIHNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0O1xuICAgIGlzUGF1c2VkOiBib29sZWFuO1xuICAgIGZpbmFsVGlsZVdpZHRoOiBudW1iZXI7XG4gICAgZmluYWxUaWxlSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZXM6IFRpbGVbXVtdO1xuICAgIGdyaWRXaWR0aDogbnVtYmVyO1xuICAgIGdyaWRIZWlnaHQ6IG51bWJlcjtcbiAgICB0aWxlQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcGxheWVyQ29udGFpbmVyOiBDb250YWluZXI7XG4gICAgdGlsZU9iamVjdENvbnRhaW5lcjogQ29udGFpbmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRpbGVPYmplY3RDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aWxlT2JqZWN0Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBsYXllckNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgfVxuXG5cbiAgICBnZXRNYXBPYmplY3RQcm9wZXJ0eShtYXBPYmplY3Q6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBtYXBPYmplY3QucHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vTG9hZHMgdGhlIG1hcCB3aXRoIHNwcml0ZXNoZWV0LiBMYXN0IHBhcmFtZXRlciBpcyBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgcGFyc2luZyB0aGUgbWFwIHdpdGggdGhlIG5ldyBwYXJzZWQgbWFwIGFzIHBhcmFtZXRlclxuICAgIHN0YXRpYyBsb2FkTWFwKG1hcFBhdGg6IHN0cmluZywgc3ByaXRlc2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBUaWxlZE1hcCgpO1xuXG4gICAgICAgIC8vTG9hZCBTcHJpdGVzaGVldFxuICAgICAgICBsZXQgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSBzcHJpdGVzaGVldC50aWxlV2lkdGggKiBTUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBTUFJJVEVfU0NBTEUueTtcbiAgICAgICAgbWFwLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgLy9Mb2FkIE1hcCBhbmQgUGFyc2UgaXRcbiAgICAgICAgJC5nZXRKU09OKG1hcFBhdGgsIHt9LCBmdW5jdGlvbiAobWFwRGF0YSkge1xuXG4gICAgICAgICAgICAvL0J1aWxkIGFsbCBUaWxlTGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcC5ncmlkV2lkdGggPSB0bC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbWFwLmdyaWRIZWlnaHQgPSB0bC5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9Jbml0IG1hcCdzIHRpbGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIG1hcC50aWxlcyA9IG5ldyBBcnJheShtYXAuZ3JpZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXNbaV0gPSBuZXcgQXJyYXkobWFwLmdyaWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFRpbGVzIGZvciBlYWNoIHRpbGUgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0bC53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByb3cgKiB0bC53aWR0aCArIGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgVGlsZSh0ZXh0dXJlLCByb3csIGNvbHVtbiwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGUobmV3VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vSXRlcmF0ZSB0aHJvdWdoIE9iamVjdCBMYXllcnNcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwib2JqZWN0Z3JvdXBcIikge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLy9BZGQgYWxsIHBsYXllcnMgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fICBfICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fIFxcfCB8ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8X18pIHwgfCBfXyBfIF8gICBfICBfX18gXyBfXyBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgIF9fXy98IHwvIF9gIHwgfCB8IHwvIF8gXFwgJ19ffFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8ICAgIHwgfCAoX3wgfCB8X3wgfCAgX18vIHwgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHxffCAgICB8X3xcXF9fLF98XFxfXywgfFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgIF9fLyB8ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgIHxfX18vICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjby50eXBlID09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IChNYXRoLnJvdW5kKGNvLnkpIC0gY28uaGVpZ2h0KSAqIFNQUklURV9TQ0FMRS55OyAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJJZDogbnVtYmVyID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcInBsYXllcklkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFBsYXllcihuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgU3ByaXRlcyBmb3IgZWFjaCBvYmplY3QgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvIG9mIHRsLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8LyBfIFxcIFxcIC9cXCAvIC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IChfKSBcXCBWICBWIC8gIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVyID0gbWFwLnBsYXllcnNbb3duZXJJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUb3dlciA9IG5ldyBUb3dlcih0ZXh0dXJlLCBtb3RoZXIsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8XyBfXyBfX18gIF9fXyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IHwgfCAgX18vICBfXy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8X3xffCAgXFxfX198XFxfX198XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUcmVlID0gbmV3IFRyZWUodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgX18gICAgICAgICAgX18gICBfIF8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgXFwgXFwgICAgICAgIC8gLyAgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgXFwgXFwgIC9cXCAgLyAvXyBffCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgIFxcIFxcLyAgXFwvIC8gX2AgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICBcXCAgL1xcICAvIChffCB8IHwgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICBcXC8gIFxcLyBcXF9fLF98X3xffFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvLnR5cGUgPT0gXCJ3YWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3RoZXIgPSBtYXAuZ2V0VGlsZU5lYXJlc3RUbyhjbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3IFdhbGwobW90aGVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NhbGwgb25GaW5pc2ggQ2FsbGJhY2tcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hcCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIHRoaXMuc3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0OiBSZWN0YW5nbGUpIHtcblxuICAgICAgICAvL2FuIE9iamVjdCBjYW4gYmUgcGxhY2VkIFwiYmV0d2VlblwiIHRpbGVzIGluIHRpbGVkIG1hcCBlZGl0b3IuIEJ1dCBldm50cyBjYW4gYmUgdHJpZ2dlcmVkIG9ubHkgZnJvbSB3aG9sZSB0aWxlcy4gU28gdGhlIG9iZWpjY3RzIHBvc2l0aW9uIGlzIG1hcHBlZCB0byB0aGUgbmVhcmVzdCBUaWxlXG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWCA9IG1hcE9iamVjdC54ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIGxldCB4VGlsZXMgPSBvcmlnaW5hbFggLyB0aGlzLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB4VGlsZXMgPSBNYXRoLnJvdW5kKHhUaWxlcyk7XG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWSA9IChtYXBPYmplY3QueSAtIG1hcE9iamVjdC5oZWlnaHQpICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7ICAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXIgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgeVRpbGVzID0gb3JpZ2luYWxZIC8gdGhpcy5maW5hbFRpbGVIZWlnaHQ7XG4gICAgICAgIHlUaWxlcyA9IE1hdGgucm91bmQoeVRpbGVzKTtcblxuICAgICAgICByZXR1cm4geyBncmlkWDogeFRpbGVzLCBncmlkWTogeVRpbGVzIH07XG4gICAgfVxuXG4gICAgZ2V0VGlsZU5lYXJlc3RUbyhtYXBPYmplY3Q6IFJlY3RhbmdsZSk6IFRpbGUge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvcy5ncmlkWV1bcG9zLmdyaWRYXTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgS2V5Ym9hcmRNYW5hZ2VyIHtcblxuICAgICBrZXlVcHMgPSB7fTtcbiAgICAga2V5RG93bnMgPSB7fTtcbiAgICAgQU5ZX0tFWSA9IFwiYW55X2tleVwiO1xuXG4gICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG4gICAgfVxuXG4gICAgIG9uS2V5VXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMua2V5VXBzKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlVcHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkgPT0gdGhpcy5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleVVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICBvbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMua2V5RG93bnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmtleURvd25zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlEb3duID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIHJlZ2lzdGVyS2V5KGtleSwgb25LZXlEb3duLCBvbktleVVwLCBpZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleURvd246IG9uS2V5RG93biB9O1xuICAgICAgICB0aGlzLmtleVVwc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5VXA6IG9uS2V5VXAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcktleShpZGVudGlmaWVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdO1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl07XG4gICAgfVxuXG5cblxufVxuIiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XG5cbiAgICAgY2xpZW50czogb2JqZWN0ID0ge307XG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgcmVnaXN0ZXIoaWQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAgdW5yZWdpc3RlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xuICAgIH1cblxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jbGllbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2soZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IEtleWJvYXJkTWFuYWdlciB9IGZyb20gXCIuL0tleWJvYXJkTWFuYWdlclwiO1xuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSBcInBpeGkuanNcIjtcblxuXG5cbmNvbnN0IEFQUF9XSURUSCA9IDUxMjtcbmNvbnN0IEFQUF9IRUlHSFQgPSA1MTI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciB7XG5cbiAgICBzcHJpdGVTaGVldDogVGlsZWRTcHJpdGVzaGVldDtcblxuXG4gICAgbWFwOiBUaWxlZE1hcDtcblxuICAgIHBpeGlBcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgdXBkYXRlU2NoZWR1bGVyOiBVcGRhdGVTY2hlZHVsZXI7XG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGVyID0gbmV3IFVwZGF0ZVNjaGVkdWxlcigpO1xuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IFRpbGVkU3ByaXRlc2hlZXQoXCJkYXRhL2Fzc2V0cy9zcHJpdGVzaGVldC5wbmdcIiwgMSwgMTYsIDE2LCAzMSwgNTcpIC8vS2VubnkgU3ByaXRlc2hlZXQgc2VlIGRhdGEvbWFwcy9LZW5uZXkgUlBHIFRpbGVzLnRzeFxuICAgIH1cblxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICAvL0NyZWF0ZSBQaXhpIHN0dWZmXG4gICAgICAgIC8vQ3JlYXRlIGEgUGl4aSBBcHBsaWNhdGlvblxuICAgICAgICBjbGFzcyBQaXhpT3B0aW9ucyBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uT3B0aW9ucyB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGgsIHB1YmxpYyBoZWlnaHQpIHsgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpeGlPcHRpb25zID0gbmV3IFBpeGlPcHRpb25zKEFQUF9XSURUSCwgQVBQX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5waXhpQXBwID0gbmV3IEFwcGxpY2F0aW9uKHBpeGlPcHRpb25zKTtcblxuICAgICAgICAvL0FkZCB0aGUgY2FudmFzIHRoYXQgUGl4aSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgZm9yIHlvdSB0byB0aGUgSFRNTCBkb2N1bWVudFxuICAgICAgICAvL1N0aWxsIG5lY2Nlc2Fycnk/Pz8/XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waXhpQXBwLnZpZXcpO1xuXG4gICAgICAgIC8vUmVnaXN0ZXIgVXBkYXRlIHNjaGVkdWxlclxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLmFkZCh0aGlzLnVwZGF0ZVNjaGVkdWxlci5kb1N0ZXApO1xuXG5cbiAgICAgICAgVGlsZWRNYXAubG9hZE1hcChcImRhdGEvbWFwcy9tYXAxLmpzb25cIiwgdGhpcy5zcHJpdGVTaGVldCwgKHBhcnNlZE1hcDogVGlsZWRNYXApID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gcGFyc2VkTWFwO1xuICAgICAgICAgICAgdGhpcy5waXhpQXBwLnN0YWdlLmFkZENoaWxkKHBhcnNlZE1hcCk7XG4gICAgICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBwYXJzZWRNYXAucGxheWVycztcbiAgICAgICAgICAgIHBsYXllcnNbMF0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcIm5cIik7XG4gICAgICAgICAgICBwbGF5ZXJzWzFdLnNldEtleXMoXCJ3XCIsIFwic1wiLCBcImFcIiwgXCJkXCIsIFwieFwiLCBcInlcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4iLCJpbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi9tb2RlbC9HYW1lTWFuYWdlclwiXG5cbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKCk7XG5nYW1lTWFuYWdlci5zdGFydEdhbWUoKTtcblxuZXhwb3J0IHtnYW1lTWFuYWdlcn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=