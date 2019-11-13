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


// CONCATENATED MODULE: ./src/model/KeyboardManager.ts
var KeyboardManager = /** @class */ (function () {
    function KeyboardManager() {
    }
    KeyboardManager.init = function () {
        document.addEventListener('keyup', KeyboardManager.onKeyUp);
        document.addEventListener('keydown', KeyboardManager.onKeyDown);
    };
    KeyboardManager.onKeyUp = function (event) {
        for (var i in KeyboardManager.keyUps) {
            var element = KeyboardManager.keyUps[i];
            if (element.key == KeyboardManager.ANY_KEY || event.key == element.key) {
                if (typeof element.onKeyUp == "function") {
                    element.onKeyUp(event);
                }
            }
        }
    };
    KeyboardManager.onKeyDown = function (event) {
        for (var i in KeyboardManager.keyDowns) {
            var element = KeyboardManager.keyDowns[i];
            if (element.key == KeyboardManager.ANY_KEY || event.key == element.key) {
                if (typeof element.onKeyDown == "function") {
                    element.onKeyDown(event);
                }
            }
        }
    };
    KeyboardManager.registerKey = function (key, onKeyDown, onKeyUp, identifier) {
        KeyboardManager.keyDowns[identifier] = { key: key, onKeyDown: onKeyDown };
        KeyboardManager.keyUps[identifier] = { key: key, onKeyUp: onKeyUp };
    };
    KeyboardManager.unregisterKey = function (identifier) {
        delete KeyboardManager.keyDowns[identifier];
        delete KeyboardManager.keyUps[identifier];
    };
    KeyboardManager.keyUps = {};
    KeyboardManager.keyDowns = {};
    KeyboardManager.ANY_KEY = "any_key";
    return KeyboardManager;
}());


// CONCATENATED MODULE: ./src/model/UpdateScheduler.ts
var UpdateScheduler = /** @class */ (function () {
    function UpdateScheduler() {
    }
    UpdateScheduler.register = function (id, callback) {
        UpdateScheduler.clients[id] = {
            callback: callback
        };
    };
    UpdateScheduler.unregister = function (id) {
        delete UpdateScheduler.clients[id];
    };
    UpdateScheduler.doStep = function (delta) {
        if (!UpdateScheduler.isPaused) {
            for (var i in UpdateScheduler.clients) {
                var currentCallback = UpdateScheduler.clients[i].callback;
                currentCallback(delta);
            }
        }
    };
    UpdateScheduler.clients = {};
    UpdateScheduler.isPaused = false;
    return UpdateScheduler;
}());


// CONCATENATED MODULE: ./src/model/Player.ts



var Player_Player = /** @class */ (function () {
    function Player(x, y, map, playerId) {
        var _this = this;
        this.keyDown = function (event) {
            if (event.key != _this.lastKey) {
                _this.lastKey = event.key;
                switch (event.key) {
                    case _this.upKey:
                        _this.changeDirection(Player.UP);
                        _this.vy = -1 * Player.PLAYER_SPEED;
                        break;
                    case _this.downKey:
                        _this.changeDirection(Player.DOWN);
                        _this.vy = 1 * Player.PLAYER_SPEED;
                        break;
                    case _this.leftKey:
                        _this.changeDirection(Player.LEFT);
                        _this.vx = -1 * Player.PLAYER_SPEED;
                        break;
                    case _this.rightKey:
                        _this.changeDirection(Player.RIGHT);
                        _this.vx = 1 * Player.PLAYER_SPEED;
                        break;
                }
            }
        };
        this.keyUp = function (event) {
            _this.lastKey = "";
            switch (event.key) {
                case _this.upKey:
                    _this.changeDirection(Player.STOP);
                    _this.vy = 0;
                    break;
                case _this.downKey:
                    _this.changeDirection(Player.STOP);
                    _this.vy = 0;
                    break;
                case _this.leftKey:
                    _this.changeDirection(Player.STOP);
                    _this.vx = 0;
                    break;
                case _this.rightKey:
                    _this.changeDirection(Player.STOP);
                    _this.vx = 0;
                    break;
            }
        };
        this.doStep = function (delta) {
            var newX = _this.sprite.x + _this.vx * delta;
            var newY = _this.sprite.y + _this.vy * delta;
            _this.sprite.x = newX;
            _this.sprite.y = newY;
        };
        this.map = map;
        this.playerId = playerId;
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
        this.sprite = new external_PIXI_["extras"].AnimatedSprite(this.animations[Player.DOWN]);
        this.sprite.x = x;
        this.sprite.y = y;
        this.vx = 0;
        this.vy = 0;
        this.sprite.scale = Player.SPRITE_SCALE;
        this.sprite.animationSpeed = 0.13;
        this.sprite.loop = true;
        this.lastKey = "";
        //register key events
        KeyboardManager.registerKey(KeyboardManager.ANY_KEY, this.keyDown, this.keyUp, "player" + playerId);
        UpdateScheduler.register("player" + playerId, this.doStep);
    }
    Player.prototype.changeDirection = function (direction) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == Player.STOP) {
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
    Player.UP = 0;
    Player.RIGHT = 1;
    Player.DOWN = 2;
    Player.LEFT = 3;
    Player.STOP = 4;
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
        this.destroy();
    };
    ;
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
    function StatusBar(mother, progress) {
        var _this = _super.call(this) || this;
        _this.mother = mother;
        _this.progress = progress;
        var map = mother.mother.map;
        map.tileObjectContainer.addChild(_this);
        //position relative to mother
        _this.x = mother.x;
        _this.y = mother.y;
        _this.width = mother.width;
        _this.height = mother.height;
        //Draw yourself
        _this.frame = new external_PIXI_["Graphics"]();
        // set the line style to have a width of 5 and set the color to red
        _this.frame.lineStyle(StatusBar.LINE_THICKNESS, 0xFF0000);
        // draw a rectangle
        _this.frame.drawRect(0, 0, 64, StatusBar.LINE_THICKNESS * 3);
        _this.addChild(_this.frame);
        _this.setProgress(progress);
        return _this;
    }
    StatusBar.prototype.updateView = function () {
        //Paint yourself
        this.progressShape = new external_PIXI_["Graphics"]();
        // set the line style to have a width of 5 and set the color to red
        this.progressShape.lineStyle(StatusBar.LINE_THICKNESS, 0x00FF00);
        // draw a rectangle
        this.progressShape.drawRect(StatusBar.LINE_THICKNESS, StatusBar.LINE_THICKNESS, 64 * this.progress, StatusBar.LINE_THICKNESS);
        this.addChild(this.progressShape);
    };
    StatusBar.prototype.setProgress = function (progress) {
        this.progress = progress;
        this.updateView();
    };
    StatusBar.LINE_THICKNESS = 3;
    return StatusBar;
}(external_PIXI_["Container"]));


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
        _this.statusBar = new StatusBar_StatusBar(_this, 0.5);
        return _this;
    }
    Tree.prototype.onHit = function (hitEvent) {
    };
    ;
    Tree.prototype.onDestroy = function (initiator) {
    };
    Tree.prototype.onHarvest = function (initiator) {
    };
    return Tree;
}(TileObject));


// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

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
                            var newPlayer = new Player_Player(x, y, this, playerId);
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


// CONCATENATED MODULE: ./src/model/GameManager.ts





var SPRITESHEET = new TiledSpritesheet_TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57); //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
//TODO Parse this information automatixally from tsx file
var APP_WIDTH = 512;
var APP_HEIGHT = 512;
var GameManager_GameManager = /** @class */ (function () {
    function GameManager() {
    }
    GameManager.startGame = function () {
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
        GameManager.pixiApp = new external_PIXI_["Application"](pixiOptions);
        //Add the canvas that Pixi automatically created for you to the HTML document
        //Still neccesarry????
        document.body.appendChild(GameManager.pixiApp.view);
        //Init Keyboard Manager
        KeyboardManager.init();
        //Register Update scheduler
        GameManager.pixiApp.ticker.add(UpdateScheduler.doStep);
        TiledMap_TiledMap.loadMap("data/maps/map1.json", SPRITESHEET, function (parsedMap) {
            console.log("Map parsed");
            GameManager.map = parsedMap;
            GameManager.pixiApp.stage.addChild(parsedMap);
            GameManager.pixiApp.ticker.start();
            console.log(parsedMap);
            var players = parsedMap.players;
            players[0].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "n");
            players[1].setKeys("w", "s", "a", "d", "x", "y");
        });
    };
    return GameManager;
}());


// CONCATENATED MODULE: ./src/index.ts

GameManager_GameManager.startGame();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUElYSVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIiRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGlsZWRTcHJpdGVzaGVldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvS2V5Ym9hcmRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGlsZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVG93ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL1N0YXR1c0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVHJlZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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QUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHdkQsaUJBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUMsV0FBVyxFQUFDLFVBQVMsU0FBa0I7WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixXQUFXLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUM1QixXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDOzs7O0FDdEQ4QztBQUUvQyx1QkFBVyxDQUFDLFNBQVMsRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZFNwcml0ZXNoZWV0e1xuXG5cdHBhdGg6IHN0cmluZztcblx0Ym9yZGVyOiBudW1iZXI7XG5cdHRpbGVIZWlnaHQ6IG51bWJlcjtcblx0dGlsZVdpZHRoOiBudW1iZXI7XG5cdHJvd3M6IG51bWJlcjtcblx0Y29sdW1uczogbnVtYmVyO1xuXHRiaWdUZXh0dXJlOiBUZXh0dXJlO1xuXHR0ZXh0dXJlczogVGV4dHVyZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHBhdGgsYm9yZGVyLHRpbGVXaWR0aCx0aWxlSGVpZ2h0LHJvd3MsY29sdW1ucyl7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0XHR0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuXHRcdHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuXHRcdHRoaXMucm93cyA9IHJvd3M7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSBUZXh0dXJlLmZyb21JbWFnZShwYXRoLCB0cnVlLCBTQ0FMRV9NT0RFUy5ORUFSRVNUKTtcblx0XHR0aGlzLnRleHR1cmVzID0gW107XG5cdH1cblxuXHRnZXRUZXh0dXJlKGdpZCk6VGV4dHVyZSAge1xuXHRcdC8vQ2hlY2sgd2V0aGVyIHRleHR1cmVzIHdhcyBhbGxyZWFkeSBmcmFtZWQgZm9ybSBzcHJpdGVzaGVldFxuXHRcdGlmICh0aGlzLnRleHR1cmVzW2dpZF0pIHtcblx0XHQgIHJldHVybiB0aGlzLnRleHR1cmVzW2dpZF07XG5cdFx0fSBlbHNlIHtcblx0XHQgIC8vQ2FsY3VsYXRlIHJvdyBhbmQgY29sdW1uIGZyb20gZ2lkXG5cdFx0ICBsZXQgcm93Om51bWJlciA9IE1hdGguZmxvb3IoKGdpZCAtIDEpIC8gdGhpcy5jb2x1bW5zKTtcblx0XHQgIGxldCBjb2x1bW46bnVtYmVyID0gKGdpZCAtIDEpICUgdGhpcy5jb2x1bW5zO1xuXHRcblx0XHQgIGxldCB0aWxlV2lkdGg6bnVtYmVyID0gdGhpcy50aWxlV2lkdGg7XG5cdFx0ICBsZXQgdGlsZUhlaWdodDpudW1iZXIgPSB0aGlzLnRpbGVIZWlnaHQ7XG5cdFxuXHRcdCAgbGV0IHg6bnVtYmVyID0gY29sdW1uICogdGlsZVdpZHRoICsgY29sdW1uICogdGhpcy5ib3JkZXI7XG5cdFx0ICBsZXQgeTpudW1iZXIgPSByb3cgKiB0aWxlSGVpZ2h0ICsgcm93ICogdGhpcy5ib3JkZXI7XG5cdFxuXHRcdCAgbGV0IHQ6VGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZSh4LCB5LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpKTtcblx0XHQgIC8vU2F2ZSBUZXh0dXJlIGluIGNhY2hlIGFycmF5XG5cdFx0ICB0aGlzLnRleHR1cmVzW2dpZF0gPSB0O1xuXHRcdCAgcmV0dXJuIHQ7XG5cdFx0fVxuXHQgIH1cblx0XG5cbn0iLCJleHBvcnQgY2xhc3MgS2V5Ym9hcmRNYW5hZ2VyIHtcblxuICAgIHN0YXRpYyBrZXlVcHMgPSB7fTtcbiAgICBzdGF0aWMga2V5RG93bnMgPSB7fTtcbiAgICBzdGF0aWMgQU5ZX0tFWSA9IFwiYW55X2tleVwiO1xuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgS2V5Ym9hcmRNYW5hZ2VyLm9uS2V5VXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgS2V5Ym9hcmRNYW5hZ2VyLm9uS2V5RG93bik7XG4gICAgfVxuXG4gICAgc3RhdGljIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIEtleWJvYXJkTWFuYWdlci5rZXlVcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBLZXlib2FyZE1hbmFnZXIua2V5VXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IEtleWJvYXJkTWFuYWdlci5BTllfS0VZIHx8IGV2ZW50LmtleSA9PSBlbGVtZW50LmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleVVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIEtleWJvYXJkTWFuYWdlci5rZXlEb3ducykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEtleWJvYXJkTWFuYWdlci5rZXlEb3duc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSBLZXlib2FyZE1hbmFnZXIuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlEb3duID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5RG93bihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZ2lzdGVyS2V5KGtleSwgb25LZXlEb3duLCBvbktleVVwLCBpZGVudGlmaWVyKSB7XG4gICAgICAgIEtleWJvYXJkTWFuYWdlci5rZXlEb3duc1tpZGVudGlmaWVyXSA9IHsga2V5OiBrZXksIG9uS2V5RG93bjogb25LZXlEb3duIH07XG4gICAgICAgIEtleWJvYXJkTWFuYWdlci5rZXlVcHNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleVVwOiBvbktleVVwIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHVucmVnaXN0ZXJLZXkoaWRlbnRpZmllcikge1xuICAgICAgICBkZWxldGUgS2V5Ym9hcmRNYW5hZ2VyLmtleURvd25zW2lkZW50aWZpZXJdO1xuICAgICAgICBkZWxldGUgS2V5Ym9hcmRNYW5hZ2VyLmtleVVwc1tpZGVudGlmaWVyXTtcbiAgICB9XG5cblxuXG59XG4iLCJleHBvcnQgY2xhc3MgVXBkYXRlU2NoZWR1bGVyIHtcblxuICAgIHN0YXRpYyBjbGllbnRzOiBvYmplY3QgPSB7fTtcbiAgICBzdGF0aWMgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN0YXRpYyByZWdpc3RlcihpZDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgVXBkYXRlU2NoZWR1bGVyLmNsaWVudHNbaWRdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgVXBkYXRlU2NoZWR1bGVyLmNsaWVudHNbaWRdO1xuICAgIH1cblxuICAgIHN0YXRpYyBkb1N0ZXAoZGVsdGE6IG51bWJlcikge1xuICAgICAgICBpZiAoIVVwZGF0ZVNjaGVkdWxlci5pc1BhdXNlZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBVcGRhdGVTY2hlZHVsZXIuY2xpZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2FsbGJhY2sgPSBVcGRhdGVTY2hlZHVsZXIuY2xpZW50c1tpXS5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2soZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgUG9pbnQsIGV4dHJhcywgVGV4dHVyZSwgQmFzZVRleHR1cmUsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuXG4gICAgc3RhdGljIFVQOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBSSUdIVDogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgRE9XTjogbnVtYmVyID0gMjtcbiAgICBzdGF0aWMgTEVGVDogbnVtYmVyID0gMztcbiAgICBzdGF0aWMgU1RPUDogbnVtYmVyID0gNDtcblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG4gICAgc3RhdGljIFBMQVlFUl9TUEVFRCA9IDQ7XG5cblxuICAgIHNwcml0ZTogZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xuICAgIHZ4OiBudW1iZXI7XG4gICAgdnk6IG51bWJlcjtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW11bXTtcbiAgICBtYXA6IFRpbGVkTWFwO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICBwbGF5ZXJJZDpudW1iZXI7XG5cbiAgICB1cEtleTpzdHJpbmc7XG4gICAgZG93bktleTpzdHJpbmc7XG4gICAgbGVmdEtleTpzdHJpbmc7XG4gICAgcmlnaHRLZXk6c3RyaW5nO1xuICAgIGFjdGlvbktleTpzdHJpbmc7XG4gICAgc2VsZWN0S2V5OnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLHBsYXllcklkOm51bWJlcikge1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGJhc2VUZXh0dXJlOiBCYXNlVGV4dHVyZSA9IFRleHR1cmUuZnJvbUltYWdlKGBkYXRhL2Fzc2V0cy9wbGF5ZXJfJHtwbGF5ZXJJZH0ucG5nYCkuYmFzZVRleHR1cmU7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZUFycmF5OiBUZXh0dXJlW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVGV4dHVyZShiYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShjb2x1bW4gKiBQbGF5ZXIuU1BSSVRFX1dJRFRILCByb3cgKiBQbGF5ZXIuU1BSSVRFX0hFSUdIVCwgUGxheWVyLlNQUklURV9XSURUSCwgUGxheWVyLlNQUklURV9IRUlHSFQpKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlQXJyYXkucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmVBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zW1BsYXllci5ET1dOXSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnggPSB4O1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0geTtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwcml0ZS5zY2FsZSA9IFBsYXllci5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4xMztcbiAgICAgICAgdGhpcy5zcHJpdGUubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG5cbiAgICAgICAgLy9yZWdpc3RlciBrZXkgZXZlbnRzXG4gICAgICAgIEtleWJvYXJkTWFuYWdlci5yZWdpc3RlcktleShLZXlib2FyZE1hbmFnZXIuQU5ZX0tFWSx0aGlzLmtleURvd24sdGhpcy5rZXlVcCxcInBsYXllclwiK3BsYXllcklkKTtcbiAgICAgICAgVXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKFwicGxheWVyXCIrcGxheWVySWQsdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICgwIDw9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPD0gMykge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZXMgPSB0aGlzLmFuaW1hdGlvbnNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gUGxheWVyLlNUT1ApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEtleXModXBLZXksZG93bktleSxsZWZ0S2V5LHJpZ2h0S2V5LGFjdGlvbktleSxzZWxlY3RLZXkpe1xuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XG4gICAgICAgIHRoaXMuZG93bktleSA9IGRvd25LZXk7XG4gICAgICAgIHRoaXMubGVmdEtleSA9IGxlZnRLZXk7XG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXkgPSBhY3Rpb25LZXk7XG4gICAgICAgIHRoaXMuc2VsZWN0S2V5ID0gc2VsZWN0S2V5O1xuICAgIH1cblxuICAgIGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPSB0aGlzLmxhc3RLZXkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihQbGF5ZXIuVVApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gLTEgKiBQbGF5ZXIuUExBWUVSX1NQRUVEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuZG93bktleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oUGxheWVyLkRPV04pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihQbGF5ZXIuTEVGVCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAtMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oUGxheWVyLlJJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IDEgKiBQbGF5ZXIuUExBWUVSX1NQRUVEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5VXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5sYXN0S2V5ID0gXCJcIjtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy51cEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihQbGF5ZXIuU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZG93bktleTogIFxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKFBsYXllci5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5sZWZ0S2V5OiAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihQbGF5ZXIuU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMucmlnaHRLZXk6ICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihQbGF5ZXIuU1RPUCk7XG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRvU3RlcCA9IChkZWx0YSkgPT4ge1xuXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5zcHJpdGUueCArIHRoaXMudnggKiBkZWx0YTtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLnNwcml0ZS55ICsgdGhpcy52eSAqIGRlbHRhO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0gbmV3WTtcblxuICAgIH1cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgdGlsZU9iamVjdDogVGlsZU9iamVjdDtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgbWFwOlRpbGVkTWFwKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUpO1xuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XG4gICAgICAgIHRoaXMuZ3JpZFkgPSBncmlkWTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gZ3JpZFggKiBtYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHRoaXMueSA9IGdyaWRZICogbWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICB9XG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uSGl0KGhpdEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxhbnQocGxhbnQ6IFBsYW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vblBsYW50KHBsYW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxhY2UocHVtcGtpbjogVG50UHVtcGtpbikge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGFjaW5nIFB1bXBraW4gVE5UXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhhcnZlc3QoaW5pdGlhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlT2JqZWN0ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGlsZU9iamVjdCBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBtb3RoZXI6IFRpbGU7XG4gICAgc29saWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuICAgICAgICBpZiAodGhpcy5tb3RoZXIuaXNGcmVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubW90aGVyLnRpbGVPYmplY3QgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgYWRkIFRpbGVPYmplY3QgdG8gYSBUaWxlIHRoYXQgYWxscmVhZHkgaGFzIGFuIFRpbGVPYmplY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5tb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcbiAgICB9XG5cbiAgICBvbkhpdChoaXRldmVudDogSGl0RXZlbnQpIHsgfTtcblxuICAgIG9uUGxhbnQocGxhbnQ6IFBsYW50KSB7IH07XG5cbiAgICBvbkhhcnZlc3QoaW5pdGlhdG9yOiBQbGF5ZXIpIHsgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5tb3RoZXIudGlsZU9iamVjdDtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfTtcblxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBvd25lcjogUGxheWVyO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcjogUGxheWVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG5cbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBmcmFtZTogR3JhcGhpY3M7XG4gICAgcHJvZ3Jlc3NTaGFwZTogR3JhcGhpY3M7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlciA6IFRpbGVPYmplY3Q7XG5cbiAgICBzdGF0aWMgTElORV9USElDS05FU1MgPSAzO1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOiBUaWxlT2JqZWN0LCBwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG5cbiAgICAgICAgY29uc3QgbWFwID0gbW90aGVyLm1vdGhlci5tYXA7XG4gICAgICAgIG1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuICAgICAgICAvL3Bvc2l0aW9uIHJlbGF0aXZlIHRvIG1vdGhlclxuICAgICAgICB0aGlzLnggPSBtb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gbW90aGVyLnk7XG4gICAgICAgIHRoaXMud2lkdGggPSBtb3RoZXIud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbW90aGVyLmhlaWdodFxuICAgICAgICAvL0RyYXcgeW91cnNlbGZcbiAgICAgICAgdGhpcy5mcmFtZSA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICAvLyBzZXQgdGhlIGxpbmUgc3R5bGUgdG8gaGF2ZSBhIHdpZHRoIG9mIDUgYW5kIHNldCB0aGUgY29sb3IgdG8gcmVkXG4gICAgICAgIHRoaXMuZnJhbWUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgMHhGRjAwMDApO1xuICAgICAgICAvLyBkcmF3IGEgcmVjdGFuZ2xlXG4gICAgICAgIHRoaXMuZnJhbWUuZHJhd1JlY3QoMCwgMCwgNjQsIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyozKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZyYW1lKTtcblxuIFxuXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vUGFpbnQgeW91cnNlbGZcbiAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIC8vIHNldCB0aGUgbGluZSBzdHlsZSB0byBoYXZlIGEgd2lkdGggb2YgNSBhbmQgc2V0IHRoZSBjb2xvciB0byByZWRcbiAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlLmxpbmVTdHlsZShTdGF0dXNCYXIuTElORV9USElDS05FU1MsIDB4MDBGRjAwKTtcbiAgICAgICAgLy8gZHJhdyBhIHJlY3RhbmdsZVxuICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUuZHJhd1JlY3QoU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MsIDY0ICogdGhpcy5wcm9ncmVzcywgU3RhdHVzQmFyLkxJTkVfVEhJQ0tORVNTKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xuICAgIH1cblxuICAgIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsbW90aGVyKXtcbiAgICAgICAgc3VwZXIodGV4dHVyZSxtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywwLjUpO1xuICAgIH1cblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuXG4gICAgfVxuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjpQbGF5ZXIpe1xuXG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi9Ub3dlclwiO1xuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL1RyZWVcIjtcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBzcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgfVxuXG5cbiAgICBnZXRNYXBPYmplY3RQcm9wZXJ0eShtYXBPYmplY3Q6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBtYXBPYmplY3QucHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vTG9hZHMgdGhlIG1hcCB3aXRoIHNwcml0ZXNoZWV0LiBMYXN0IHBhcmFtZXRlciBpcyBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgcGFyc2luZyB0aGUgbWFwIHdpdGggdGhlIG5ldyBwYXJzZWQgbWFwIGFzIHBhcmFtZXRlclxuICAgIHN0YXRpYyBsb2FkTWFwKG1hcFBhdGg6IHN0cmluZywgc3ByaXRlc2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBUaWxlZE1hcCgpO1xuXG4gICAgICAgIC8vTG9hZCBTcHJpdGVzaGVldFxuICAgICAgICBsZXQgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludChUaWxlZE1hcC5NQVBfWk9PTSwgVGlsZWRNYXAuTUFQX1pPT00pO1xuICAgICAgICBtYXAuZmluYWxUaWxlV2lkdGggPSBzcHJpdGVzaGVldC50aWxlV2lkdGggKiBTUFJJVEVfU0NBTEUueDtcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBTUFJJVEVfU0NBTEUueTtcbiAgICAgICAgbWFwLnNwcml0ZXNoZWV0ID0gc3ByaXRlc2hlZXQ7XG5cbiAgICAgICAgLy9Mb2FkIE1hcCBhbmQgUGFyc2UgaXRcbiAgICAgICAgJC5nZXRKU09OKG1hcFBhdGgsIHt9LCBmdW5jdGlvbiAobWFwRGF0YSkge1xuXG4gICAgICAgICAgICAvL0J1aWxkIGFsbCBUaWxlTGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcC5ncmlkV2lkdGggPSB0bC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbWFwLmdyaWRIZWlnaHQgPSB0bC5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9Jbml0IG1hcCdzIHRpbGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIG1hcC50aWxlcyA9IG5ldyBBcnJheShtYXAuZ3JpZEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG1hcC50aWxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXNbaV0gPSBuZXcgQXJyYXkobWFwLmdyaWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFRpbGVzIGZvciBlYWNoIHRpbGUgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0bC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0bC53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByb3cgKiB0bC53aWR0aCArIGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGwuZGF0YVtpbmRleF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBuZXcgVGlsZSh0ZXh0dXJlLCByb3csIGNvbHVtbixtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZShuZXdUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9JdGVyYXRlIHRocm91Z2ggT2JqZWN0IExheWVyc1xuICAgICAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICAvL0FkZCBhbGwgcGxheWVycyBmaXJzdFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvIG9mIHRsLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX18gIF8gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX18gXFx8IHwgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8IHxfXykgfCB8IF9fIF8gXyAgIF8gIF9fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX19fL3wgfC8gX2AgfCB8IHwgfC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8IHwgICAgfCB8IChffCB8IHxffCB8ICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF98ICAgIHxffFxcX18sX3xcXF9fLCB8XFxfX198X3wgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgX18vIHwgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgfF9fXy8gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5yb3VuZChjby54ICogU1BSSVRFX1NDQUxFLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gKE1hdGgucm91bmQoY28ueSkgLSBjby5oZWlnaHQpICogU1BSSVRFX1NDQUxFLnk7IC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcklkOiBudW1iZXIgPSBtYXAuZ2V0TWFwT2JqZWN0UHJvcGVydHkoY28sIFwicGxheWVySWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcih4LCB5LCB0aGlzLCBwbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFBsYXllcihuZXdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgU3ByaXRlcyBmb3IgZWFjaCBvYmplY3QgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvIG9mIHRsLm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8LyBfIFxcIFxcIC9cXCAvIC8gXyBcXCAnX198XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IChfKSBcXCBWICBWIC8gIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVyID0gbWFwLnBsYXllcnNbb3duZXJJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUb3dlciA9IG5ldyBUb3dlcih0ZXh0dXJlLCBtb3RoZXIsIG93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUb3dlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHxfXyAgIF9ffCAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8XyBfXyBfX18gIF9fXyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8IHwgfCAgX18vICBfXy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8X3xffCAgXFxfX198XFxfX198XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUcmVlID0gbmV3IFRyZWUodGV4dHVyZSwgbW90aGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkVGlsZU9iamVjdChuZXdUcmVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0NhbGwgb25GaW5pc2ggQ2FsbGJhY2tcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hcCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYWRkUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllci5wbGF5ZXJJZF0gPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHBsYXllci5zcHJpdGUpO1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QodGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZCh0aWxlT2JqZWN0KTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpIHtcbiAgICAgICAgdGlsZS54ID0gdGlsZS5ncmlkWCAqIHRoaXMuc3ByaXRlc2hlZXQudGlsZVdpZHRoICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcbiAgICAgICAgdGlsZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcblxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyLmFkZENoaWxkKHRpbGUpO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0OiBSZWN0YW5nbGUpIHtcblxuICAgICAgICAvL2FuIE9iamVjdCBjYW4gYmUgcGxhY2VkIFwiYmV0d2VlblwiIHRpbGVzIGluIHRpbGVkIG1hcCBlZGl0b3IuIEJ1dCBldm50cyBjYW4gYmUgdHJpZ2dlcmVkIG9ubHkgZnJvbSB3aG9sZSB0aWxlcy4gU28gdGhlIG9iZWpjY3RzIHBvc2l0aW9uIGlzIG1hcHBlZCB0byB0aGUgbmVhcmVzdCBUaWxlXG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWCA9IG1hcE9iamVjdC54ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIGxldCB4VGlsZXMgPSBvcmlnaW5hbFggLyB0aGlzLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB4VGlsZXMgPSBNYXRoLnJvdW5kKHhUaWxlcyk7XG5cbiAgICAgICAgbGV0IG9yaWdpbmFsWSA9IChtYXBPYmplY3QueSAtIG1hcE9iamVjdC5oZWlnaHQpICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7ICAvLyAtY28uaGVpZ2h0IGJlY2F1c2UgdGlsZWQgdXNlcyB0aGUgYm90dG9tLWxlZnQgY29ybmVyIGZvciBjb29yZGluYXRlcyBhbmQgUElYSSB1c2VzIHRoZSB0b3AtbGVmdCBjb3JuZXIgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgeVRpbGVzID0gb3JpZ2luYWxZIC8gdGhpcy5maW5hbFRpbGVIZWlnaHQ7XG4gICAgICAgIHlUaWxlcyA9IE1hdGgucm91bmQoeVRpbGVzKTtcblxuICAgICAgICByZXR1cm4geyBncmlkWDogeFRpbGVzLCBncmlkWTogeVRpbGVzIH07XG4gICAgfVxuXG4gICAgZ2V0VGlsZU5lYXJlc3RUbyhtYXBPYmplY3Q6IFJlY3RhbmdsZSk6IFRpbGUge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzW3Bvcy5ncmlkWV1bcG9zLmdyaWRYXTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUaWxlZFNwcml0ZXNoZWV0IH0gZnJvbSBcIi4vVGlsZWRTcHJpdGVzaGVldFwiO1xuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmRNYW5hZ2VyIH0gZnJvbSBcIi4vS2V5Ym9hcmRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVcGRhdGVTY2hlZHVsZXIgfSBmcm9tIFwiLi9VcGRhdGVTY2hlZHVsZXJcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5jb25zdCBTUFJJVEVTSEVFVCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFwiZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nXCIsIDEsIDE2LCAxNiwgMzEsIDU3KSAvL0tlbm55IFNwcml0ZXNoZWV0IHNlZSBkYXRhL21hcHMvS2VubmV5IFJQRyBUaWxlcy50c3hcbi8vVE9ETyBQYXJzZSB0aGlzIGluZm9ybWF0aW9uIGF1dG9tYXRpeGFsbHkgZnJvbSB0c3ggZmlsZVxuXG5jb25zdCBBUFBfV0lEVEggPSA1MTI7XG5jb25zdCBBUFBfSEVJR0hUID0gNTEyO1xuXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xuXG4gICAgc3RhdGljIG1hcDogVGlsZWRNYXA7XG5cbiAgICBzdGF0aWMgcGl4aUFwcCA6IEFwcGxpY2F0aW9uO1xuXG5cbiAgICBzdGF0aWMgc3RhcnRHYW1lKCkge1xuICAgICAgICAvL0NyZWF0ZSBQaXhpIHN0dWZmXG4gICAgICAgIC8vQ3JlYXRlIGEgUGl4aSBBcHBsaWNhdGlvblxuICAgICAgICBjbGFzcyBQaXhpT3B0aW9ucyBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uT3B0aW9uc3tcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCxwdWJsaWMgaGVpZ2h0KXt9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGl4aU9wdGlvbnMgPSBuZXcgUGl4aU9wdGlvbnMoQVBQX1dJRFRILEFQUF9IRUlHSFQpO1xuXG4gICAgICAgIEdhbWVNYW5hZ2VyLnBpeGlBcHAgPSBuZXcgQXBwbGljYXRpb24ocGl4aU9wdGlvbnMpO1xuXG4gICAgICAgIC8vQWRkIHRoZSBjYW52YXMgdGhhdCBQaXhpIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCBmb3IgeW91IHRvIHRoZSBIVE1MIGRvY3VtZW50XG4gICAgICAgIC8vU3RpbGwgbmVjY2VzYXJyeT8/Pz9cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChHYW1lTWFuYWdlci5waXhpQXBwLnZpZXcpO1xuXG4gICAgICAgIC8vSW5pdCBLZXlib2FyZCBNYW5hZ2VyXG4gICAgICAgIEtleWJvYXJkTWFuYWdlci5pbml0KCk7XG5cbiAgICAgICAgLy9SZWdpc3RlciBVcGRhdGUgc2NoZWR1bGVyXG4gICAgICAgIEdhbWVNYW5hZ2VyLnBpeGlBcHAudGlja2VyLmFkZChVcGRhdGVTY2hlZHVsZXIuZG9TdGVwKTtcblxuICAgICAgICBcbiAgICAgICAgVGlsZWRNYXAubG9hZE1hcChcImRhdGEvbWFwcy9tYXAxLmpzb25cIixTUFJJVEVTSEVFVCxmdW5jdGlvbihwYXJzZWRNYXA6VGlsZWRNYXApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXAgcGFyc2VkXCIpO1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIubWFwID0gcGFyc2VkTWFwO1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIucGl4aUFwcC5zdGFnZS5hZGRDaGlsZChwYXJzZWRNYXApO1xuICAgICAgICAgICAgR2FtZU1hbmFnZXIucGl4aUFwcC50aWNrZXIuc3RhcnQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkTWFwKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVycyA9IHBhcnNlZE1hcC5wbGF5ZXJzO1xuICAgICAgICAgICAgcGxheWVyc1swXS5zZXRLZXlzKFwiQXJyb3dVcFwiLFwiQXJyb3dEb3duXCIsXCJBcnJvd0xlZnRcIixcIkFycm93UmlnaHRcIixcIm1cIixcIm5cIik7XG4gICAgICAgICAgICBwbGF5ZXJzWzFdLnNldEtleXMoXCJ3XCIsXCJzXCIsXCJhXCIsXCJkXCIsXCJ4XCIsXCJ5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0dhbWVNYW5hZ2VyfSBmcm9tIFwiLi9tb2RlbC9HYW1lTWFuYWdlclwiXG5cbkdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=