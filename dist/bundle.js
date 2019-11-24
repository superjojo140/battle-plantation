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


// CONCATENATED MODULE: ./src/model/TileObject.ts
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

var TileObject = /** @class */ (function (_super) {
    __extends(TileObject, _super);
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
        _this.mother.addTileObject(_this);
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


// CONCATENATED MODULE: ./src/model/HitEvent.ts
var HitEvent = /** @class */ (function () {
    function HitEvent(initiator, damage) {
        this.initiator = initiator;
        this.damage = damage;
    }
    return HitEvent;
}());


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
        this.onHit(new HitEvent(initiator, 0.2));
    };
    Tree.onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    Tree.onDestroySound = new Audio('../data/assets/sound/blob1.mp3');
    return Tree;
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
    Plant.prototype.onHarvest = function (initinator) {
        //Harvest yourself
        //give the initiator the items
        this.destroy();
    };
    Plant.growStates = 4;
    Plant.growStepTime = 3000;
    return Plant;
}(TileObject));


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


var TntPumpkin_TntPumpkin = /** @class */ (function (_super) {
    TntPumpkin_extends(TntPumpkin, _super);
    function TntPumpkin(mother) {
        var _this = _super.call(this, gameManager.spriteSheet.getTexture(471), mother) || this;
        _this.exploding = false;
        return _this;
    }
    TntPumpkin.prototype.onHit = function (hitEvent) {
        if (!this.exploding) {
            this.exploding = true;
            //Blink very dangerous
            //Explode!!!
            this.destroy();
        }
    };
    return TntPumpkin;
}(TileObject));


// CONCATENATED MODULE: ./src/model/TomatoProjectile.ts
var TomatoProjectile_extends = (undefined && undefined.__extends) || (function () {
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
    TomatoProjectile_extends(TomatoProjectile, _super);
    function TomatoProjectile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TomatoProjectile.createTomatoProjectile = function (x, y, direction) {
        console.log("creating tomato projectile!!!");
    };
    return TomatoProjectile;
}(external_PIXI_["Sprite"]));


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
        return _super.call(this, gameManager.spriteSheet.getTexture(471), mother) || this;
    }
    return PumpkinPlant;
}(Plant));


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
        return _super.call(this, gameManager.spriteSheet.getTexture(471), mother) || this;
    }
    return TomatoPlant;
}(Plant));


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
                    case _this.actionKey:
                        _this.onAction();
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
                    _this.getCurrentTile().tint = 0xFFFFFF;
                    _this.sprite.x = newX;
                    _this.sprite.y = newY;
                    _this.getCurrentTile().tint = 0x00FF00;
                }
            }
        };
        this.onAction = function () {
            if (!_this.stunned) {
                var currentTile = _this.getCurrentTile();
                switch (_this.actionMode) {
                    case ACTION_MODE.HARVEST:
                        if ((currentTile.tileObject instanceof Plant && currentTile.tileObject.ready) || currentTile.tileObject instanceof Tree_Tree) {
                            currentTile.tileObject.onHarvest(_this);
                        }
                        break;
                    case ACTION_MODE.PLACE_PUMPKIN_SEED:
                        if (currentTile.tileObject === undefined) {
                            new PumpkinPlant_PumpkinPlant(currentTile);
                        }
                        break;
                    case ACTION_MODE.PLACE_TOMATO_SEED:
                        if (currentTile.tileObject === undefined) {
                            new TomatoPlant_TomatoPlant(currentTile);
                        }
                        break;
                    case ACTION_MODE.PLACE_TNT_PUMPKIN:
                        if (currentTile.tileObject === undefined) {
                            new TntPumpkin_TntPumpkin(currentTile);
                        }
                        break;
                    case ACTION_MODE.SHOOT:
                        if (_this.inventory.tomato_item > 0) {
                            _this.inventory.tomato_item--;
                            TomatoProjectile.createTomatoProjectile(_this.sprite.x, _this.sprite.y, _this.currentDirection);
                        }
                        break;
                }
            }
        };
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory();
        this.actionMode = ACTION_MODE.HARVEST;
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
    Player.prototype.changeDirection = function (direction) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == DIRECTION.STOP) {
            this.sprite.stop();
        }
        this.currentDirection = direction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi9leHRlcm5hbCBcIiRcIiIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkU3ByaXRlc2hlZXQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvU3RhdHVzQmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSGl0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JdGVtcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG9tYXRvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG93ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9LZXlib2FyZE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLHNCOzs7Ozs7QUNBQSxtQjs7Ozs7Ozs7Ozs7OztBQ0EwRDtBQUUxRDtJQVdDLDBCQUFZ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QUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUM7Ozs7QUMzREQ7QUFBK0M7QUFFL0MsSUFBTSxXQUFXLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7QUFDdEMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRUgiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBQSVhJOyIsIm1vZHVsZS5leHBvcnRzID0gJDsiLCJpbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUywgUmVjdGFuZ2xlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGVkU3ByaXRlc2hlZXR7XG5cblx0cGF0aDogc3RyaW5nO1xuXHRib3JkZXI6IG51bWJlcjtcblx0dGlsZUhlaWdodDogbnVtYmVyO1xuXHR0aWxlV2lkdGg6IG51bWJlcjtcblx0cm93czogbnVtYmVyO1xuXHRjb2x1bW5zOiBudW1iZXI7XG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XG5cdHRleHR1cmVzOiBUZXh0dXJlW107XG5cblx0Y29uc3RydWN0b3IocGF0aCxib3JkZXIsdGlsZVdpZHRoLHRpbGVIZWlnaHQscm93cyxjb2x1bW5zKXtcblx0XHR0aGlzLnBhdGggPSBwYXRoO1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHRcdHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XG5cdFx0dGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XG5cdFx0dGhpcy5yb3dzID0gcm93cztcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuXHRcdHRoaXMuYmlnVGV4dHVyZSA9IFRleHR1cmUuZnJvbUltYWdlKHBhdGgsIHRydWUsIFNDQUxFX01PREVTLk5FQVJFU1QpO1xuXHRcdHRoaXMudGV4dHVyZXMgPSBbXTtcblx0fVxuXG5cdGdldFRleHR1cmUoZ2lkOm51bWJlcik6VGV4dHVyZSAge1xuXHRcdC8vQ2hlY2sgd2V0aGVyIHRleHR1cmVzIHdhcyBhbGxyZWFkeSBmcmFtZWQgZm9ybSBzcHJpdGVzaGVldFxuXHRcdGlmICh0aGlzLnRleHR1cmVzW2dpZF0pIHtcblx0XHQgIHJldHVybiB0aGlzLnRleHR1cmVzW2dpZF07XG5cdFx0fSBlbHNlIHtcblx0XHQgIC8vQ2FsY3VsYXRlIHJvdyBhbmQgY29sdW1uIGZyb20gZ2lkXG5cdFx0ICBsZXQgcm93Om51bWJlciA9IE1hdGguZmxvb3IoKGdpZCAtIDEpIC8gdGhpcy5jb2x1bW5zKTtcblx0XHQgIGxldCBjb2x1bW46bnVtYmVyID0gKGdpZCAtIDEpICUgdGhpcy5jb2x1bW5zO1xuXHRcblx0XHQgIGxldCB0aWxlV2lkdGg6bnVtYmVyID0gdGhpcy50aWxlV2lkdGg7XG5cdFx0ICBsZXQgdGlsZUhlaWdodDpudW1iZXIgPSB0aGlzLnRpbGVIZWlnaHQ7XG5cdFxuXHRcdCAgbGV0IHg6bnVtYmVyID0gY29sdW1uICogdGlsZVdpZHRoICsgY29sdW1uICogdGhpcy5ib3JkZXI7XG5cdFx0ICBsZXQgeTpudW1iZXIgPSByb3cgKiB0aWxlSGVpZ2h0ICsgcm93ICogdGhpcy5ib3JkZXI7XG5cdFxuXHRcdCAgbGV0IHQ6VGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuYmlnVGV4dHVyZS5iYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZSh4LCB5LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpKTtcblx0XHQgIC8vU2F2ZSBUZXh0dXJlIGluIGNhY2hlIGFycmF5XG5cdFx0ICB0aGlzLnRleHR1cmVzW2dpZF0gPSB0O1xuXHRcdCAgcmV0dXJuIHQ7XG5cdFx0fVxuXHQgIH1cblx0XG5cbn0iLCJpbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIFBvaW50IH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRpbGVPYmplY3QgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2I0Lm1wMycpO1xuICAgIHN0YXRpYyBvbkRlc3Ryb3lTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvYmxvYjEubXAzJyk7XG5cbiAgICBtb3RoZXI6IFRpbGU7XG4gICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2dWxuZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG5cbiAgICAgICAgdGhpcy5tb3RoZXIuYWRkVGlsZU9iamVjdCh0aGlzKTsgICAgIFxuXG5cblxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcbiAgICAgICAgdGhpcy54ID0gdGhpcy5tb3RoZXIueDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5tb3RoZXIueTtcbiAgICB9XG5cblxuXG4gICAgb25IaXQoaGl0ZXZlbnQ6IEhpdEV2ZW50KSB7IH07XG5cbiAgICBvblBsYW50KHBsYW50OiBQbGFudCkgeyB9O1xuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7IH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW90aGVyLnRpbGVPYmplY3Q7XG4gICAgICAgIHRoaXMuc2hyaW5rQW5kRGllKCk7XG4gICAgfTtcblxuICAgIHdpZ2dsZSh0aW1lcykge1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy53aWdnbGVSZWN1cnNpdih0aW1lcyAqIDQpO1xuICAgIH1cblxuICAgIHdpZ2dsZVJlY3Vyc2l2ID0gKHRpbWVzOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XG4gICAgICAgIGlmICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGltZXMgJSA0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHRoaXMucm90YXRpb24gLT0gcmFkaWFudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMud2lnZ2xlUmVjdXJzaXYoLS10aW1lcykgfSwgMzApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcbiAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNocmlua0FuZERpZSgpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcbiAgICAgICAgdGhpcy5zaHJpbmtBbmREaWVSZWN1cnNpdmUodGhpcy5zY2FsZSk7XG4gICAgfVxuXG4gICAgc2hyaW5rQW5kRGllUmVjdXJzaXZlID0gKHNjYWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjYWxlRGlmZiA9IDAuMjtcbiAgICAgICAgaWYgKHNjYWxlLnggPD0gMCB8fCBzY2FsZS55IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0gc2NhbGUueCAtIHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHNjYWxlLnkgLSBzY2FsZURpZmY7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zaHJpbmtBbmREaWVSZWN1cnNpdmUodGhpcy5zY2FsZSkgfSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0XG5cbiAgICAgICAgLy9EcmF3IGZyYW1lXG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlLmxpbmVTdHlsZShTdGF0dXNCYXIuTElORV9USElDS05FU1MsIHRoaXMuYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5kcmF3UmVjdCgwLCAwLCBtYXAuZmluYWxUaWxlV2lkdGgsIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9yZGVyUmVjdGFuZ2xlKTtcblxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vQ2xlYXIgbGFzdCBwcm9ncmVzcyBTaGFwZVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1NoYXBlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMC4xKSB7IC8vRHJhdyB0b28gc21hbGwgcHJvZ3Jlc3MgbG9va3MgdWdseVxuICAgICAgICAgICAgLy9EcmF3IG5ldyBwcm9ncmVzc2JhclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XG5cbiAgICAgICAgICAgIC8vRG9uJ3Qgd29ycnkgYWJvdXQgdGhpcyBjcmF6eSArMS8tMSBwaXhlbHMsIHRoZXkgYXJlIGNyYXp5LCBidXQgbmVjZXNzYXJ5XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSA2NCAqIHRoaXMucHJvZ3Jlc3MgLSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKyAxO1xuICAgICAgICAgICAgY29uc3QgdGhpY2sgPSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAyO1xuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUubGluZVN0eWxlKHRoaWNrLCB0aGlzLnByb2dyZXNzQ29sb3IpXG4gICAgICAgICAgICAgICAgLm1vdmVUbyhTdGF0dXNCYXIuTElORV9USElDS05FU1MgLSAxLCB0aGljayAtIDEpXG4gICAgICAgICAgICAgICAgLmxpbmVUbyhsaW5lV2lkdGgsIHRoaWNrIC0gMSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wcm9ncmVzc1NoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMCB8fCBwcm9ncmVzcyA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3Qgc2V0IHByb2dyZXNzIGxvd2VyIHRoYW4gMCBvciBoaWdoZXIgdGhhbiAxXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgSGl0RXZlbnQge1xuXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XG4gICAgZGFtYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXG4gICAgfVxuXG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQsXG4gICAgVE9NQVRPX0lURU0sXG4gICAgVE9NQVRPX1BST0pFQ1RJTEUsXG4gICAgUFVNUEtJTl9QTEFOVCxcbiAgICBQVU1QS0lOX0lURU0sXG4gICAgVE5UX1BVTVBLSU4sXG4gICAgV09PRF9JVEVNXG59XG5cblxuZXhwb3J0IHsgSVRFTSB9O1xuIiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWUgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgb25IaXRTb3VuZCA9IG5ldyBBdWRpbygnLi4vZGF0YS9hc3NldHMvc291bmQvYmxvYjQubXAzJyk7XG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmUsIG1vdGhlcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIodGhpcywgZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgVHJlZS5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgaW5pdGlhdG9yLmdpdmVJdGVtKElURU0uV09PRF9JVEVNLCAxKTtcbiAgICAgICAgVHJlZS5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMub25IaXQobmV3IEhpdEV2ZW50KGluaXRpYXRvciwwLjIpKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHtnYW1lTWFuYWdlcn0gZnJvbSBcIi4vLi4vaW5kZXhcIlxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGxhbnQgZXh0ZW5kcyBUaWxlT2JqZWN0IHtcblxuICAgIHN0YXRpYyBncm93U3RhdGVzOiBudW1iZXIgPSA0O1xuICAgIHN0YXRpYyBncm93U3RlcFRpbWU6IG51bWJlciA9IDMwMDA7XG5cbiAgICBzcHJpdGVQcmVmaXg6IHN0cmluZztcbiAgICBjcm9wOiBvYmplY3Q7XG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgcmVhZHk6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTpUZXh0dXJlLCBtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSxtb3RoZXIpO1xuICAgICAgICBjb25zdCBpZCA9IFwicGxhbnRcIiArIG1vdGhlci5ncmlkWCArIFwiLVwiICsgbW90aGVyLmdyaWRZO1xuICAgICAgICAvL2dhbWVNYW5hZ2VyLnVwZGF0ZVNjaGVkdWxlci5yZWdpc3RlcihpZCwgdGhpcy5ncm93KTtcbiAgICB9XG5cbiAgICBncm93ID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGdyb3dpbmcuLi5cIik7XG4gICAgfVxuXG5cbiAgICBvbkhhcnZlc3QoaW5pdGluYXRvcjogUGxheWVyKSB7XG4gICAgICAgIC8vSGFydmVzdCB5b3Vyc2VsZlxuICAgICAgICAvL2dpdmUgdGhlIGluaXRpYXRvciB0aGUgaXRlbXNcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3R7XG5cblxuICAgIGV4cGxvZGluZzpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnNwcml0ZVNoZWV0LmdldFRleHR1cmUoNDcxKSxtb3RoZXIpO1xuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OkhpdEV2ZW50KXtcbiAgICAgICAgaWYgKCF0aGlzLmV4cGxvZGluZyl7XG4gICAgICAgICAgICB0aGlzLmV4cGxvZGluZyA9IHRydWU7XG4gICAgICAgICAgICAvL0JsaW5rIHZlcnkgZGFuZ2Vyb3VzXG4gICAgICAgICAgICAvL0V4cGxvZGUhISFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICdwaXhpLmpzJztcbmltcG9ydCB7RElSRUNUSU9OfSBmcm9tIFwiLi9QbGF5ZXJcIlxuXG5leHBvcnQgY2xhc3MgVG9tYXRvUHJvamVjdGlsZSBleHRlbmRzIFNwcml0ZXtcblxuc3RhdGljIGNyZWF0ZVRvbWF0b1Byb2plY3RpbGUoeDpudW1iZXIseTpudW1iZXIsZGlyZWN0aW9uOkRJUkVDVElPTil7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGluZyB0b21hdG8gcHJvamVjdGlsZSEhIVwiKTtcbn1cblxufSIsImltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgUHVtcGtpblBsYW50IGV4dGVuZHMgUGxhbnQge1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOlRpbGUpe1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5zcHJpdGVTaGVldC5nZXRUZXh0dXJlKDQ3MSksbW90aGVyKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBUb21hdG9QbGFudCBleHRlbmRzIFBsYW50e1xuXG4gICAgY29uc3RydWN0b3IobW90aGVyOlRpbGUpe1xuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5zcHJpdGVTaGVldC5nZXRUZXh0dXJlKDQ3MSksbW90aGVyKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSAnLi9UcmVlJztcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IFBvaW50LCBleHRyYXMsIFRleHR1cmUsIEJhc2VUZXh0dXJlLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tICcuL1RudFB1bXBraW4nO1xuaW1wb3J0IHsgVG9tYXRvUHJvamVjdGlsZSB9IGZyb20gJy4vVG9tYXRvUHJvamVjdGlsZSc7XG5pbXBvcnQgeyBQdW1wa2luUGxhbnQgfSBmcm9tICcuL1B1bXBraW5QbGFudCc7XG5pbXBvcnQgeyBUb21hdG9QbGFudCB9IGZyb20gJy4vVG9tYXRvUGxhbnQnO1xuXG5cbmNsYXNzIEludmVudG9yeSB7XG4gICAgdG9tYXRvX2l0ZW06IG51bWJlciA9IDA7XG4gICAgcHVtcGtpbl9pdGVtOiBudW1iZXIgPSAwO1xufVxuXG5leHBvcnQgZW51bSBESVJFQ1RJT04geyBVUCwgUklHSFQsIERPV04sIExFRlQsIFNUT1AgfTtcbmV4cG9ydCBlbnVtIEFDVElPTl9NT0RFIHsgSEFSVkVTVCwgUExBQ0VfUFVNUEtJTl9TRUVELCBQTEFDRV9UT01BVE9fU0VFRCwgUExBQ0VfVE5UX1BVTVBLSU4sIFNIT09UIH07XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuXG5cbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XG4gICAgc3RhdGljIFNQUklURV9IRUlHSFQ6IG51bWJlciA9IDE0NCAvIDQ7XG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoMS41LCAxLjUpO1xuICAgIHN0YXRpYyBQTEFZRVJfU1BFRUQgPSA0O1xuXG4gICAgcGxheWVySWQ6IG51bWJlcjtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgc3ByaXRlOiBleHRyYXMuQW5pbWF0ZWRTcHJpdGU7XG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdW107XG4gICAgdng6IG51bWJlcjtcbiAgICB2eTogbnVtYmVyO1xuICAgIHN0dW5uZWQ6IGJvb2xlYW47XG5cbiAgICBpbnZlbnRvcnk6IEludmVudG9yeTtcblxuICAgIGFjdGlvbk1vZGU6IEFDVElPTl9NT0RFO1xuICAgIGxhc3RLZXk6IHN0cmluZztcbiAgICBjdXJyZW50RGlyZWN0aW9uOiBESVJFQ1RJT047XG5cbiAgICB1cEtleTogc3RyaW5nO1xuICAgIGRvd25LZXk6IHN0cmluZztcbiAgICBsZWZ0S2V5OiBzdHJpbmc7XG4gICAgcmlnaHRLZXk6IHN0cmluZztcbiAgICBhY3Rpb25LZXk6IHN0cmluZztcbiAgICBzZWxlY3RLZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLnN0dW5uZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcbiAgICAgICAgdGhpcy5hY3Rpb25Nb2RlID0gQUNUSU9OX01PREUuSEFSVkVTVDtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IGJhc2VUZXh0dXJlOiBCYXNlVGV4dHVyZSA9IFRleHR1cmUuZnJvbUltYWdlKGBkYXRhL2Fzc2V0cy9wbGF5ZXJfJHtwbGF5ZXJJZH0ucG5nYCkuYmFzZVRleHR1cmU7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgdGV4dHVyZUFycmF5OiBUZXh0dXJlW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVGV4dHVyZShiYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShjb2x1bW4gKiBQbGF5ZXIuU1BSSVRFX1dJRFRILCByb3cgKiBQbGF5ZXIuU1BSSVRFX0hFSUdIVCwgUGxheWVyLlNQUklURV9XSURUSCwgUGxheWVyLlNQUklURV9IRUlHSFQpKTtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlQXJyYXkucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmVBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zW0RJUkVDVElPTi5ET1dOXSk7XG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IERJUkVDVElPTi5ET1dOO1xuICAgICAgICB0aGlzLnNwcml0ZS54ID0geDtcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBQbGF5ZXIuU1BSSVRFX1NDQUxFO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmltYXRpb25TcGVlZCA9IDAuMTM7XG4gICAgICAgIHRoaXMuc3ByaXRlLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xuXG4gICAgICAgIC8vcmVnaXN0ZXIga2V5IGV2ZW50c1xuICAgICAgICBnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIucmVnaXN0ZXJLZXkoZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLkFOWV9LRVksIHRoaXMua2V5RG93biwgdGhpcy5rZXlVcCwgXCJwbGF5ZXJcIiArIHBsYXllcklkKTtcbiAgICAgICAgZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKFwicGxheWVyXCIgKyBwbGF5ZXJJZCwgdGhpcy5kb1N0ZXApO1xuXG4gICAgfVxuXG4gICAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbjogRElSRUNUSU9OKSB7XG4gICAgICAgIGlmICgwIDw9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPD0gMykge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUudGV4dHVyZXMgPSB0aGlzLmFuaW1hdGlvbnNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gRElSRUNUSU9OLlNUT1ApIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgfVxuXG4gICAga2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9IHRoaXMubGFzdEtleSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25LZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZG9TdGVwID0gKGRlbHRhKSA9PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcblxuICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHRoaXMuc3ByaXRlLnggKyB0aGlzLnZ4ICogZGVsdGE7XG4gICAgICAgICAgICBsZXQgbmV3WSA9IHRoaXMuc3ByaXRlLnkgKyB0aGlzLnZ5ICogZGVsdGE7XG5cbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKG5ld1ggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdZIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLnRpbGVzW3ldID09IHVuZGVmaW5lZCB8fCB0aGlzLm1hcC50aWxlc1t5XVt4XSA9PSB1bmRlZmluZWQgfHwgKHRoaXMubWFwLnRpbGVzW3ldW3hdLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAudGlsZXNbeV1beF0udGlsZU9iamVjdC5zb2xpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChibG9ja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50VGlsZSgpLnRpbnQgPSAweEZGRkZGRjtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS54ID0gbmV3WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS55ID0gbmV3WTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUaWxlKCkudGludCA9IDB4MDBGRjAwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2l2ZUl0ZW0oaXRlbVR5cGU6IElURU0sIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJJZCArIFwiIGdvdCBcIiArIGNvdW50ICsgXCIgcGllY2VzIG9mIFwiICsgaXRlbVR5cGUpO1xuICAgICAgICB0aGlzLmludmVudG9yeVtpdGVtVHlwZV0gKz0gY291bnQ7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRpbGUoKSB7XG4gICAgICAgIGxldCB4VGlsZXMgPSB0aGlzLnNwcml0ZS54IC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGg7XG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcblxuICAgICAgICBsZXQgeVRpbGVzID0gdGhpcy5zcHJpdGUueSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodDtcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1hcC50aWxlc1t5VGlsZXNdW3hUaWxlc107XG4gICAgfVxuXG4gICAgb25BY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5IQVJWRVNUOlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRUaWxlLnRpbGVPYmplY3QgaW5zdGFuY2VvZiBQbGFudCAmJiBjdXJyZW50VGlsZS50aWxlT2JqZWN0LnJlYWR5KSB8fCBjdXJyZW50VGlsZS50aWxlT2JqZWN0IGluc3RhbmNlb2YgVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUudGlsZU9iamVjdC5vbkhhcnZlc3QodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5QTEFDRV9QVU1QS0lOX1NFRUQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS50aWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQdW1wa2luUGxhbnQoY3VycmVudFRpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX01PREUuUExBQ0VfVE9NQVRPX1NFRUQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS50aWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUb21hdG9QbGFudChjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5QTEFDRV9UTlRfUFVNUEtJTjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLnRpbGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRudFB1bXBraW4oY3VycmVudFRpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX01PREUuU0hPT1Q6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludmVudG9yeS50b21hdG9faXRlbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LnRvbWF0b19pdGVtLS07XG4gICAgICAgICAgICAgICAgICAgICAgICBUb21hdG9Qcm9qZWN0aWxlLmNyZWF0ZVRvbWF0b1Byb2plY3RpbGUodGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgdGhpcy5jdXJyZW50RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xuaW1wb3J0IHsgVG50UHVtcGtpbiB9IGZyb20gXCIuL1RudFB1bXBraW5cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbGUgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgZ3JpZFg6IG51bWJlcjtcbiAgICBncmlkWTogbnVtYmVyO1xuICAgIHRpbGVPYmplY3Q6IFRpbGVPYmplY3Q7XG4gICAgbWFwOiBUaWxlZE1hcDtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG1hcDogVGlsZWRNYXApIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ3JpZFggPSBncmlkWDtcbiAgICAgICAgdGhpcy5ncmlkWSA9IGdyaWRZO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgLy9jYWxjdWxhdGUgb3duIHJlbmRlciBjb29yZGluYXRlc1xuICAgICAgICB0aGlzLnggPSBncmlkWCAqIG1hcC5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy55ID0gZ3JpZFkgKiBtYXAuZmluYWxUaWxlSGVpZ2h0O1xuICAgIH1cblxuICAgIGFkZFRpbGVPYmplY3QobmV3VGlsZU9iamVjdDogVGlsZU9iamVjdCkge1xuICAgICAgICBpZiAodGhpcy5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0ID0gbmV3VGlsZU9iamVjdDtcbiAgICAgICAgICAgIG5ld1RpbGVPYmplY3Quc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgICAgICB0aGlzLm1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKG5ld1RpbGVPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgYWRkIFRpbGVPYmplY3QgdG8gYSBUaWxlIHRoYXQgYWxscmVhZHkgaGFzIGFuIFRpbGVPYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uSGl0KGhpdEV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxhbnQocGxhbnQ6IFBsYW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vblBsYW50KHBsYW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxhY2UocHVtcGtpbjogVG50UHVtcGtpbikge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGFjaW5nIFB1bXBraW4gVE5UXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhhcnZlc3QoaW5pdGlhdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRnJlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZU9iamVjdCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cblxuXG5cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgb3duZXI6IFBsYXllcjtcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcblxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgb3duZXI6IFBsYXllcikge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxuXG4gICAgb25IaXQoaGl0RXZlbnQ6IEhpdEV2ZW50KSB7XG4gICAgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuXG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cblxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuICAgIGhlYWx0aDogbnVtYmVyID0gMTtcbiAgXG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXIpIHtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuc3ByaXRlU2hlZXQuZ2V0VGV4dHVyZSg5NDkpLCBtb3RoZXIpOyAvLzY2NSBpcyBhIGJveCBzcHJpdGVcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zb2xpZCA9IHRydWU7XG4gICAgfVxuXG5cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndpZ2dsZSgzKTtcbiAgICAgICAgICAgICAgICBXYWxsLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBXYWxsLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBzcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2V0TWFwT2JqZWN0UHJvcGVydHkobWFwT2JqZWN0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL0xvYWRzIHRoZSBtYXAgd2l0aCBzcHJpdGVzaGVldC4gTGFzdCBwYXJhbWV0ZXIgaXMgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHBhcnNpbmcgdGhlIG1hcCB3aXRoIHRoZSBuZXcgcGFyc2VkIG1hcCBhcyBwYXJhbWV0ZXJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBQYXRoOiBzdHJpbmcsIHNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0LCBjYWxsYmFjazogRnVuY3Rpb24pIHtcblxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgVGlsZWRNYXAoKTtcblxuICAgICAgICAvL0xvYWQgU3ByaXRlc2hlZXRcbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gc3ByaXRlc2hlZXQudGlsZVdpZHRoICogU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIG1hcC5maW5hbFRpbGVIZWlnaHQgPSBzcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogU1BSSVRFX1NDQUxFLnk7XG4gICAgICAgIG1hcC5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0O1xuXG4gICAgICAgIC8vTG9hZCBNYXAgYW5kIFBhcnNlIGl0XG4gICAgICAgICQuZ2V0SlNPTihtYXBQYXRoLCB7fSwgZnVuY3Rpb24gKG1hcERhdGEpIHtcblxuICAgICAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxuICAgICAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuICAgICAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwidGlsZWxheWVyXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBtYXAuZ3JpZFdpZHRoID0gdGwud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vSW5pdCBtYXAncyB0aWxlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnRpbGVzW2ldID0gbmV3IEFycmF5KG1hcC5ncmlkV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCB0aWxlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGwuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcm93ICogdGwud2lkdGggKyBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRsLmRhdGFbaW5kZXhdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHNwcml0ZXNoZWV0LmdldFRleHR1cmUodGwuZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IFRpbGUodGV4dHVyZSwgcm93LCBjb2x1bW4sIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0l0ZXJhdGUgdGhyb3VnaCBPYmplY3QgTGF5ZXJzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIGFsbCBwbGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fXyAgXyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgfF9fKSB8IHwgX18gXyBfICAgXyAgX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfX18vfCB8LyBfYCB8IHwgfCB8LyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X3wgICAgfF98XFxfXyxffFxcX18sIHxcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBfXy8gfCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKGNvLnggKiBTUFJJVEVfU0NBTEUueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAoTWF0aC5yb3VuZChjby55KSAtIGNvLmhlaWdodCkgKiBTUFJJVEVfU0NBTEUueTsgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIG1hcCwgcGxheWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRQbGF5ZXIobmV3UGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFNwcml0ZXMgZm9yIGVhY2ggb2JqZWN0IHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgX19fX18gICAgICBfX19fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfC8gXyBcXCBcXCAvXFwgLyAvIF8gXFwgJ19ffFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffFxcX19fLyBcXF8vXFxfLyBcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjby50eXBlID09IFwidG93ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3duZXJJZCA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJvd25lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lciA9IG1hcC5wbGF5ZXJzW293bmVySWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG93ZXIgPSBuZXcgVG93ZXIodGV4dHVyZSwgbW90aGVyLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8ICdfXy8gXyBcXC8gXyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCB8IHwgIF9fLyAgX18vXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY28udHlwZSA9PSBcInRyZWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIFxcIFxcICAgICAgICAvIC8gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIFxcIFxcICAvXFwgIC8gL18gX3wgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgXFwgIC9cXCAgLyAoX3wgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgXFwvICBcXC8gXFxfXyxffF98X3xcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ldyBXYWxsKG1vdGhlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9DYWxsIG9uRmluaXNoIENhbGxiYWNrXG4gICAgICAgICAgICBjYWxsYmFjayhtYXApO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xuICAgICAgICAvL3BsYXllci5zcHJpdGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMucGxheWVyc1twbGF5ZXIucGxheWVySWRdID0gcGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZChwbGF5ZXIuc3ByaXRlKTtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KHRpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgdGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQodGlsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgYWRkVGlsZSh0aWxlOiBUaWxlKSB7XG4gICAgICAgIHRpbGUueCA9IHRpbGUuZ3JpZFggKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICB0aWxlLnkgPSB0aWxlLmdyaWRZICogdGhpcy5zcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7XG4gICAgICAgIHRpbGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG5cbiAgICAgICAgdGhpcy50aWxlc1t0aWxlLmdyaWRZXVt0aWxlLmdyaWRYXSA9IHRpbGU7XG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lci5hZGRDaGlsZCh0aWxlKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdDogUmVjdGFuZ2xlKSB7XG5cbiAgICAgICAgLy9hbiBPYmplY3QgY2FuIGJlIHBsYWNlZCBcImJldHdlZW5cIiB0aWxlcyBpbiB0aWxlZCBtYXAgZWRpdG9yLiBCdXQgZXZudHMgY2FuIGJlIHRyaWdnZXJlZCBvbmx5IGZyb20gd2hvbGUgdGlsZXMuIFNvIHRoZSBvYmVqY2N0cyBwb3NpdGlvbiBpcyBtYXBwZWQgdG8gdGhlIG5lYXJlc3QgVGlsZVxuXG4gICAgICAgIGxldCBvcmlnaW5hbFggPSBtYXBPYmplY3QueCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICBsZXQgeFRpbGVzID0gb3JpZ2luYWxYIC8gdGhpcy5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgeFRpbGVzID0gTWF0aC5yb3VuZCh4VGlsZXMpO1xuXG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSAobWFwT2JqZWN0LnkgLSBtYXBPYmplY3QuaGVpZ2h0KSAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55OyAgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IHlUaWxlcyA9IG9yaWdpbmFsWSAvIHRoaXMuZmluYWxUaWxlSGVpZ2h0O1xuICAgICAgICB5VGlsZXMgPSBNYXRoLnJvdW5kKHlUaWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZ3JpZFg6IHhUaWxlcywgZ3JpZFk6IHlUaWxlcyB9O1xuICAgIH1cblxuICAgIGdldFRpbGVOZWFyZXN0VG8obWFwT2JqZWN0OiBSZWN0YW5nbGUpOiBUaWxlIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlc1twb3MuZ3JpZFldW3Bvcy5ncmlkWF07XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkTWFuYWdlciB7XG5cbiAgICAga2V5VXBzID0ge307XG4gICAgIGtleURvd25zID0ge307XG4gICAgIEFOWV9LRVkgPSBcImFueV9rZXlcIjtcblxuICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgICBvbktleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleVVwcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5VXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlVcCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleURvd25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlEb3duc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5RG93biA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICByZWdpc3RlcktleShrZXksIG9uS2V5RG93biwgb25LZXlVcCwgaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlEb3duOiBvbktleURvd24gfTtcbiAgICAgICAgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleVVwOiBvbktleVVwIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXJLZXkoaWRlbnRpZmllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXTtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdO1xuICAgIH1cblxuXG5cbn1cbiIsImV4cG9ydCBjbGFzcyBVcGRhdGVTY2hlZHVsZXIge1xuXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xuICAgICBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmNsaWVudHNbaWRdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5jbGllbnRzW2lkXTtcbiAgICB9XG5cbiAgICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2FsbGJhY2sgPSB0aGlzLmNsaWVudHNbaV0uY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY3VycmVudENhbGxiYWNrKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gXCJwaXhpLmpzXCI7XG5cblxuXG5jb25zdCBBUFBfV0lEVEggPSA1MTI7XG5jb25zdCBBUFBfSEVJR0hUID0gNTEyO1xuXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xuXG4gICAgc3ByaXRlU2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQ7XG5cblxuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBwaXhpQXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIHVwZGF0ZVNjaGVkdWxlcjogVXBkYXRlU2NoZWR1bGVyO1xuICAgIGtleWJvYXJkTWFuYWdlcjogS2V5Ym9hcmRNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRNYW5hZ2VyID0gbmV3IEtleWJvYXJkTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlciA9IG5ldyBVcGRhdGVTY2hlZHVsZXIoKTtcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFwiZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nXCIsIDEsIDE2LCAxNiwgMzEsIDU3KSAvL0tlbm55IFNwcml0ZXNoZWV0IHNlZSBkYXRhL21hcHMvS2VubmV5IFJQRyBUaWxlcy50c3hcbiAgICB9XG5cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy9DcmVhdGUgUGl4aSBzdHVmZlxuICAgICAgICAvL0NyZWF0ZSBhIFBpeGkgQXBwbGljYXRpb25cbiAgICAgICAgY2xhc3MgUGl4aU9wdGlvbnMgaW1wbGVtZW50cyBBcHBsaWNhdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7IH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaXhpT3B0aW9ucyA9IG5ldyBQaXhpT3B0aW9ucyhBUFBfV0lEVEgsIEFQUF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMucGl4aUFwcCA9IG5ldyBBcHBsaWNhdGlvbihwaXhpT3B0aW9ucyk7XG5cbiAgICAgICAgLy9BZGQgdGhlIGNhbnZhcyB0aGF0IFBpeGkgYXV0b21hdGljYWxseSBjcmVhdGVkIGZvciB5b3UgdG8gdGhlIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgLy9TdGlsbCBuZWNjZXNhcnJ5Pz8/P1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGl4aUFwcC52aWV3KTtcblxuICAgICAgICAvL1JlZ2lzdGVyIFVwZGF0ZSBzY2hlZHVsZXJcbiAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5hZGQodGhpcy51cGRhdGVTY2hlZHVsZXIuZG9TdGVwKTtcblxuXG4gICAgICAgIFRpbGVkTWFwLmxvYWRNYXAoXCJkYXRhL21hcHMvbWFwMS5qc29uXCIsIHRoaXMuc3ByaXRlU2hlZXQsIChwYXJzZWRNYXA6IFRpbGVkTWFwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IHBhcnNlZE1hcDtcbiAgICAgICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZChwYXJzZWRNYXApO1xuICAgICAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5zdGFydCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gcGFyc2VkTWFwLnBsYXllcnM7XG4gICAgICAgICAgICBwbGF5ZXJzWzBdLnNldEtleXMoXCJBcnJvd1VwXCIsIFwiQXJyb3dEb3duXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIm1cIiwgXCJuXCIpO1xuICAgICAgICAgICAgcGxheWVyc1sxXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcInhcIiwgXCJ5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IHtHYW1lTWFuYWdlcn0gZnJvbSBcIi4vbW9kZWwvR2FtZU1hbmFnZXJcIlxuXG5jb25zdCBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpO1xuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XG5cbmV4cG9ydCB7Z2FtZU1hbmFnZXJ9O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9