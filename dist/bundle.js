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
    ITEM["TOMATO_PLANT"] = "tomato_plant";
    ITEM["TOMATO_ITEM"] = "tomato_item";
    ITEM["TOMATO_PROJECTILE"] = "tomato_projectile";
    ITEM["PUMPKIN_PLANT"] = "pumpkin_plant";
    ITEM["PUMPKIN_ITEM"] = "pumpkin_item";
    ITEM["TNT_PUMPKIN"] = "tnt_pumpkin";
    ITEM["WOOD_ITEM"] = "wood_item";
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


// CONCATENATED MODULE: ./src/model/Player.ts









var Inventory = /** @class */ (function () {
    function Inventory() {
        this.tomato_item = 0;
        this.pumpkin_item = 0;
        this.wood_item = 0;
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
    ACTION_MODE[ACTION_MODE["PLACE_WALL"] = 4] = "PLACE_WALL";
    ACTION_MODE[ACTION_MODE["SHOOT"] = 5] = "SHOOT";
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
                        if (currentTile.isFree()) {
                            new PumpkinPlant_PumpkinPlant(currentTile);
                        }
                        break;
                    case ACTION_MODE.PLACE_TOMATO_SEED:
                        if (currentTile.isFree()) {
                            new TomatoPlant_TomatoPlant(currentTile);
                        }
                        break;
                    case ACTION_MODE.PLACE_TNT_PUMPKIN:
                        if (currentTile.isFree() && currentTile.isOccupiedByAnyPlayer() == false) {
                            new TntPumpkin_TntPumpkin(currentTile);
                        }
                        break;
                    case ACTION_MODE.PLACE_WALL:
                        if (currentTile.isFree() && currentTile.isOccupiedByAnyPlayer() == false) {
                            if (_this.inventory.wood_item > 0) {
                                _this.inventory.wood_item--;
                                new Wall_Wall(currentTile);
                                console.warn("Please invent something to get out of this stupid wall!");
                            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi9leHRlcm5hbCBcIiRcIiIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkU3ByaXRlc2hlZXQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvU3RhdHVzQmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSGl0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JdGVtcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG9tYXRvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9LZXlib2FyZE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLHNCOzs7Ozs7QUNBQSxtQjs7Ozs7Ozs7Ozs7OztBQ0EwRDtBQUUxRDtJQVdDLDBCQUFZ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VyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVDLDZFQUE2RTtRQUM3RSxzQkFBc0I7UUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHckQsaUJBQVEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFDLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU1QixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoRixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDOzs7O0FDM0REO0FBQStDO0FBRS9DLElBQU0sV0FBVyxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZWRTcHJpdGVzaGVldHtcclxuXHJcblx0cGF0aDogc3RyaW5nO1xyXG5cdGJvcmRlcjogbnVtYmVyO1xyXG5cdHRpbGVIZWlnaHQ6IG51bWJlcjtcclxuXHR0aWxlV2lkdGg6IG51bWJlcjtcclxuXHRyb3dzOiBudW1iZXI7XHJcblx0Y29sdW1uczogbnVtYmVyO1xyXG5cdGJpZ1RleHR1cmU6IFRleHR1cmU7XHJcblx0dGV4dHVyZXM6IFRleHR1cmVbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocGF0aCxib3JkZXIsdGlsZVdpZHRoLHRpbGVIZWlnaHQscm93cyxjb2x1bW5zKXtcclxuXHRcdHRoaXMucGF0aCA9IHBhdGg7XHJcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcclxuXHRcdHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XHJcblx0XHR0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcclxuXHRcdHRoaXMucm93cyA9IHJvd3M7XHJcblx0XHR0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xyXG5cdFx0dGhpcy5iaWdUZXh0dXJlID0gVGV4dHVyZS5mcm9tSW1hZ2UocGF0aCwgdHJ1ZSwgU0NBTEVfTU9ERVMuTkVBUkVTVCk7XHJcblx0XHR0aGlzLnRleHR1cmVzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXRUZXh0dXJlKGdpZDpudW1iZXIpOlRleHR1cmUgIHtcclxuXHRcdC8vQ2hlY2sgd2V0aGVyIHRleHR1cmVzIHdhcyBhbGxyZWFkeSBmcmFtZWQgZm9ybSBzcHJpdGVzaGVldFxyXG5cdFx0aWYgKHRoaXMudGV4dHVyZXNbZ2lkXSkge1xyXG5cdFx0ICByZXR1cm4gdGhpcy50ZXh0dXJlc1tnaWRdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgLy9DYWxjdWxhdGUgcm93IGFuZCBjb2x1bW4gZnJvbSBnaWRcclxuXHRcdCAgbGV0IHJvdzpudW1iZXIgPSBNYXRoLmZsb29yKChnaWQgLSAxKSAvIHRoaXMuY29sdW1ucyk7XHJcblx0XHQgIGxldCBjb2x1bW46bnVtYmVyID0gKGdpZCAtIDEpICUgdGhpcy5jb2x1bW5zO1xyXG5cdFxyXG5cdFx0ICBsZXQgdGlsZVdpZHRoOm51bWJlciA9IHRoaXMudGlsZVdpZHRoO1xyXG5cdFx0ICBsZXQgdGlsZUhlaWdodDpudW1iZXIgPSB0aGlzLnRpbGVIZWlnaHQ7XHJcblx0XHJcblx0XHQgIGxldCB4Om51bWJlciA9IGNvbHVtbiAqIHRpbGVXaWR0aCArIGNvbHVtbiAqIHRoaXMuYm9yZGVyO1xyXG5cdFx0ICBsZXQgeTpudW1iZXIgPSByb3cgKiB0aWxlSGVpZ2h0ICsgcm93ICogdGhpcy5ib3JkZXI7XHJcblx0XHJcblx0XHQgIGxldCB0OlRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUoeCwgeSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XHJcblx0XHQgIC8vU2F2ZSBUZXh0dXJlIGluIGNhY2hlIGFycmF5XHJcblx0XHQgIHRoaXMudGV4dHVyZXNbZ2lkXSA9IHQ7XHJcblx0XHQgIHJldHVybiB0O1xyXG5cdFx0fVxyXG5cdCAgfVxyXG5cdFxyXG5cclxufSIsImltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcclxuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBQb2ludCB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGlsZU9iamVjdCBleHRlbmRzIFNwcml0ZSB7XHJcblxyXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2I0Lm1wMycpO1xyXG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcclxuXHJcbiAgICBtb3RoZXI6IFRpbGU7XHJcbiAgICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdnVsbmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XHJcblxyXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7ICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAvL3NldCByZW5kZXIgY29vcmRpbmF0ZXNcclxuICAgICAgICB0aGlzLnggPSB0aGlzLm1vdGhlci54O1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkhpdChoaXRldmVudDogSGl0RXZlbnQpIHsgfTtcclxuXHJcbiAgICBvblBsYW50KHBsYW50OiBQbGFudCkgeyB9O1xyXG5cclxuICAgIG9uSGFydmVzdChpbml0aWF0b3I6IFBsYXllcikgeyB9O1xyXG5cclxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vdGhlci50aWxlT2JqZWN0O1xyXG4gICAgICAgIHRoaXMuc2hyaW5rQW5kRGllKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpZ2dsZSh0aW1lcykge1xyXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMud2lnZ2xlUmVjdXJzaXYodGltZXMgKiA0KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWdnbGVSZWN1cnNpdiA9ICh0aW1lczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XHJcbiAgICAgICAgaWYgKHRpbWVzID4gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRpbWVzICUgNCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiB0aGlzLnJvdGF0aW9uIC09IHJhZGlhbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLndpZ2dsZVJlY3Vyc2l2KC0tdGltZXMpIH0sIDMwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDApO1xyXG4gICAgICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hyaW5rQW5kRGllKCkge1xyXG4gICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSwgMSk7XHJcbiAgICAgICAgdGhpcy5zaHJpbmtBbmREaWVSZWN1cnNpdmUodGhpcy5zY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hyaW5rQW5kRGllUmVjdXJzaXZlID0gKHNjYWxlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVEaWZmID0gMC4yO1xyXG4gICAgICAgIGlmIChzY2FsZS54IDw9IDAgfHwgc2NhbGUueSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0gc2NhbGUueCAtIHNjYWxlRGlmZjtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gc2NhbGUueSAtIHNjYWxlRGlmZjtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2hyaW5rQW5kRGllUmVjdXJzaXZlKHRoaXMuc2NhbGUpIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBDb250YWluZXIge1xyXG5cclxuICAgIGJvcmRlclJlY3RhbmdsZTogR3JhcGhpY3M7XHJcbiAgICBib3JkZXJDb2xvcjogbnVtYmVyXHJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcclxuICAgIHByb2dyZXNzQ29sb3I6IG51bWJlcjtcclxuICAgIHByb2dyZXNzOiBudW1iZXI7IC8vRnJvbSAwIHRvIDFcclxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcclxuXHJcbiAgICBzdGF0aWMgTElORV9USElDS05FU1MgPSAzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjogVGlsZU9iamVjdCwgdmlzaWJsZT86IGJvb2xlYW4sIHByb2dyZXNzPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlciwgcHJvZ3Jlc3NDb2xvcj86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzIHx8IDE7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDb2xvciA9IHByb2dyZXNzQ29sb3IgfHwgMHgwMEZGMDA7XHJcblxyXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgbWFwID0gbW90aGVyLm1vdGhlci5tYXA7XHJcblxyXG4gICAgICAgIG1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICAvL3Bvc2l0aW9uIHJlbGF0aXZlIHRvIG1vdGhlclxyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xyXG4gICAgICAgIHRoaXMueSA9IG1vdGhlci55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBtb3RoZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0XHJcblxyXG4gICAgICAgIC8vRHJhdyBmcmFtZVxyXG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlID0gbmV3IEdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUubGluZVN0eWxlKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUywgdGhpcy5ib3JkZXJDb2xvcik7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJSZWN0YW5nbGUuZHJhd1JlY3QoMCwgMCwgbWFwLmZpbmFsVGlsZVdpZHRoLCBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAzKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9yZGVyUmVjdGFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgIC8vQ2xlYXIgbGFzdCBwcm9ncmVzcyBTaGFwZVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzU2hhcGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAwLjEpIHsgLy9EcmF3IHRvbyBzbWFsbCBwcm9ncmVzcyBsb29rcyB1Z2x5XHJcbiAgICAgICAgICAgIC8vRHJhdyBuZXcgcHJvZ3Jlc3NiYXJcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgICAgICAvL0Rvbid0IHdvcnJ5IGFib3V0IHRoaXMgY3JhenkgKzEvLTEgcGl4ZWxzLCB0aGV5IGFyZSBjcmF6eSwgYnV0IG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSA2NCAqIHRoaXMucHJvZ3Jlc3MgLSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCB0aGljayA9IFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUubGluZVN0eWxlKHRoaWNrLCB0aGlzLnByb2dyZXNzQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAubW92ZVRvKFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAtIDEsIHRoaWNrIC0gMSlcclxuICAgICAgICAgICAgICAgIC5saW5lVG8obGluZVdpZHRoLCB0aGljayAtIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnByb2dyZXNzU2hhcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMCB8fCBwcm9ncmVzcyA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBzZXQgcHJvZ3Jlc3MgbG93ZXIgdGhhbiAwIG9yIGhpZ2hlciB0aGFuIDFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRFdmVudCB7XHJcblxyXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XHJcbiAgICBkYW1hZ2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmluaXRpYXRvciA9IGluaXRpYXRvcjtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZW51bSBJVEVNIHtcclxuICAgIFRPTUFUT19QTEFOVCA9IFwidG9tYXRvX3BsYW50XCIsXHJcbiAgICBUT01BVE9fSVRFTSA9IFwidG9tYXRvX2l0ZW1cIixcclxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxyXG4gICAgUFVNUEtJTl9QTEFOVCA9IFwicHVtcGtpbl9wbGFudFwiLFxyXG4gICAgUFVNUEtJTl9JVEVNID0gXCJwdW1wa2luX2l0ZW1cIixcclxuICAgIFROVF9QVU1QS0lOID0gXCJ0bnRfcHVtcGtpblwiLFxyXG4gICAgV09PRF9JVEVNID0gXCJ3b29kX2l0ZW1cIlxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgSVRFTSB9O1xyXG4iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcclxuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgSVRFTSB9IGZyb20gXCIuL0l0ZW1zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRpbGVPYmplY3Qge1xyXG5cclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gICAgaGVhbHRoOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIG9uSGl0U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2I0Lm1wMycpO1xyXG4gICAgc3RhdGljIG9uRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iMS5tcDMnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlLCBtb3RoZXIpIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlLCBtb3RoZXIpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IGhpdEV2ZW50LmRhbWFnZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIuc2V0UHJvZ3Jlc3ModGhpcy5oZWFsdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWdnbGUoMyk7XHJcbiAgICAgICAgICAgICAgICBUcmVlLm9uSGl0U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcclxuICAgICAgICBpbml0aWF0b3IuZ2l2ZUl0ZW0oSVRFTS5XT09EX0lURU0sIDEpO1xyXG4gICAgICAgIFRyZWUub25EZXN0cm95U291bmQucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhhcnZlc3QoaW5pdGlhdG9yOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm9uSGl0KG5ldyBIaXRFdmVudChpbml0aWF0b3IsMC4yKSk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7Z2FtZU1hbmFnZXJ9IGZyb20gXCIuLy4uL2luZGV4XCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xyXG5cclxuICAgIHN0YXRpYyBncm93U3RhdGVzOiBudW1iZXIgPSA0O1xyXG4gICAgc3RhdGljIGdyb3dTdGVwVGltZTogbnVtYmVyID0gMzAwMDtcclxuXHJcbiAgICBzcHJpdGVQcmVmaXg6IHN0cmluZztcclxuICAgIGNyb3A6IG9iamVjdDtcclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gICAgcmVhZHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6VGV4dHVyZSwgbW90aGVyOiBUaWxlKSB7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZSxtb3RoZXIpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gXCJwbGFudFwiICsgbW90aGVyLmdyaWRYICsgXCItXCIgKyBtb3RoZXIuZ3JpZFk7XHJcbiAgICAgICAgLy9nYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoaWQsIHRoaXMuZ3Jvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JvdyA9IChkZWx0YTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGdyb3dpbmcuLi5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uSGFydmVzdChpbml0aW5hdG9yOiBQbGF5ZXIpIHtcclxuICAgICAgICAvL0hhcnZlc3QgeW91cnNlbGZcclxuICAgICAgICAvL2dpdmUgdGhlIGluaXRpYXRvciB0aGUgaXRlbXNcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG50UHVtcGtpbiBleHRlbmRzIFRpbGVPYmplY3R7XHJcblxyXG5cclxuICAgIGV4cGxvZGluZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW90aGVyOlRpbGUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnNwcml0ZVNoZWV0LmdldFRleHR1cmUoNDcxKSxtb3RoZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGl0KGhpdEV2ZW50OkhpdEV2ZW50KXtcclxuICAgICAgICBpZiAoIXRoaXMuZXhwbG9kaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5leHBsb2RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL0JsaW5rIHZlcnkgZGFuZ2Vyb3VzXHJcbiAgICAgICAgICAgIC8vRXhwbG9kZSEhIVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7RElSRUNUSU9OfSBmcm9tIFwiLi9QbGF5ZXJcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRvbWF0b1Byb2plY3RpbGUgZXh0ZW5kcyBTcHJpdGV7XHJcblxyXG5zdGF0aWMgY3JlYXRlVG9tYXRvUHJvamVjdGlsZSh4Om51bWJlcix5Om51bWJlcixkaXJlY3Rpb246RElSRUNUSU9OKXtcclxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9tYXRvIHByb2plY3RpbGUhISFcIik7XHJcbn1cclxuXHJcbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XHJcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVtcGtpblBsYW50IGV4dGVuZHMgUGxhbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcclxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5zcHJpdGVTaGVldC5nZXRUZXh0dXJlKDQ3MSksbW90aGVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb21hdG9QbGFudCBleHRlbmRzIFBsYW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcclxuICAgICAgICBzdXBlcihnYW1lTWFuYWdlci5zcHJpdGVTaGVldC5nZXRUZXh0dXJlKDQ3MSksbW90aGVyKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9TdGF0dXNCYXJcIjtcclxuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXYWxsIGV4dGVuZHMgVGlsZU9iamVjdCB7XHJcblxyXG5cclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gICAgaGVhbHRoOiBudW1iZXIgPSAxO1xyXG4gIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcikge1xyXG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnNwcml0ZVNoZWV0LmdldFRleHR1cmUoOTQ5KSwgbW90aGVyKTsgLy82NjUgaXMgYSBib3ggc3ByaXRlXHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBuZXcgU3RhdHVzQmFyKHRoaXMsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZ1bG5lcmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveShoaXRFdmVudC5pbml0aWF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZ2dsZSgzKTtcclxuICAgICAgICAgICAgICAgIFdhbGwub25IaXRTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xyXG4gICAgICAgIFdhbGwub25EZXN0cm95U291bmQucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gJy4vVHJlZSc7XHJcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcclxuaW1wb3J0IHsgUG9pbnQsIGV4dHJhcywgVGV4dHVyZSwgQmFzZVRleHR1cmUsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4vLi4vaW5kZXhcIlxyXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcclxuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xyXG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSAnLi9UbnRQdW1wa2luJztcclxuaW1wb3J0IHsgVG9tYXRvUHJvamVjdGlsZSB9IGZyb20gJy4vVG9tYXRvUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IFB1bXBraW5QbGFudCB9IGZyb20gJy4vUHVtcGtpblBsYW50JztcclxuaW1wb3J0IHsgVG9tYXRvUGxhbnQgfSBmcm9tICcuL1RvbWF0b1BsYW50JztcclxuaW1wb3J0IHsgV2FsbCB9IGZyb20gJy4vV2FsbCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XHJcbiAgICB0b21hdG9faXRlbTogbnVtYmVyID0gMDtcclxuICAgIHB1bXBraW5faXRlbTogbnVtYmVyID0gMDtcclxuICAgIHdvb2RfaXRlbTpudW1iZXIgPSAwO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBESVJFQ1RJT04geyBVUCwgUklHSFQsIERPV04sIExFRlQsIFNUT1AgfTtcclxuZXhwb3J0IGVudW0gQUNUSU9OX01PREUgeyBIQVJWRVNULCBQTEFDRV9QVU1QS0lOX1NFRUQsIFBMQUNFX1RPTUFUT19TRUVELCBQTEFDRV9UTlRfUFVNUEtJTiwgUExBQ0VfV0FMTCwgU0hPT1QgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG5cclxuXHJcbiAgICBzdGF0aWMgU1BSSVRFX1dJRFRIOiBudW1iZXIgPSA5NiAvIDM7XHJcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcclxuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KDEuNSwgMS41KTtcclxuICAgIHN0YXRpYyBQTEFZRVJfU1BFRUQgPSA0O1xyXG5cclxuICAgIHBsYXllcklkOiBudW1iZXI7XHJcbiAgICBtYXA6IFRpbGVkTWFwO1xyXG5cclxuICAgIHNwcml0ZTogZXh0cmFzLkFuaW1hdGVkU3ByaXRlO1xyXG4gICAgYW5pbWF0aW9uczogVGV4dHVyZVtdW107XHJcbiAgICB2eDogbnVtYmVyO1xyXG4gICAgdnk6IG51bWJlcjtcclxuICAgIHN0dW5uZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgaW52ZW50b3J5OiBJbnZlbnRvcnk7XHJcblxyXG4gICAgYWN0aW9uTW9kZTogQUNUSU9OX01PREU7XHJcbiAgICBsYXN0S2V5OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RGlyZWN0aW9uOiBESVJFQ1RJT047XHJcblxyXG4gICAgdXBLZXk6IHN0cmluZztcclxuICAgIGRvd25LZXk6IHN0cmluZztcclxuICAgIGxlZnRLZXk6IHN0cmluZztcclxuICAgIHJpZ2h0S2V5OiBzdHJpbmc7XHJcbiAgICBhY3Rpb25LZXk6IHN0cmluZztcclxuICAgIHNlbGVjdEtleTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBtYXA6IFRpbGVkTWFwLCBwbGF5ZXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5zdHVubmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTW9kZSA9IEFDVElPTl9NT0RFLkhBUlZFU1Q7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBiYXNlVGV4dHVyZTogQmFzZVRleHR1cmUgPSBUZXh0dXJlLmZyb21JbWFnZShgZGF0YS9hc3NldHMvcGxheWVyXyR7cGxheWVySWR9LnBuZ2ApLmJhc2VUZXh0dXJlO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlQXJyYXk6IFRleHR1cmVbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCAzOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgVGV4dHVyZShiYXNlVGV4dHVyZSwgbmV3IFJlY3RhbmdsZShjb2x1bW4gKiBQbGF5ZXIuU1BSSVRFX1dJRFRILCByb3cgKiBQbGF5ZXIuU1BSSVRFX0hFSUdIVCwgUGxheWVyLlNQUklURV9XSURUSCwgUGxheWVyLlNQUklURV9IRUlHSFQpKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheS5wdXNoKHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHRleHR1cmVBcnJheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBleHRyYXMuQW5pbWF0ZWRTcHJpdGUodGhpcy5hbmltYXRpb25zW0RJUkVDVElPTi5ET1dOXSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gRElSRUNUSU9OLkRPV047XHJcbiAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUgPSBQbGF5ZXIuU1BSSVRFX1NDQUxFO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4xMztcclxuICAgICAgICB0aGlzLnNwcml0ZS5sb29wID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhc3RLZXkgPSBcIlwiO1xyXG5cclxuICAgICAgICAvL3JlZ2lzdGVyIGtleSBldmVudHNcclxuICAgICAgICBnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIucmVnaXN0ZXJLZXkoZ2FtZU1hbmFnZXIua2V5Ym9hcmRNYW5hZ2VyLkFOWV9LRVksIHRoaXMua2V5RG93biwgdGhpcy5rZXlVcCwgXCJwbGF5ZXJcIiArIHBsYXllcklkKTtcclxuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJcIiArIHBsYXllcklkLCB0aGlzLmRvU3RlcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb246IERJUkVDVElPTikge1xyXG4gICAgICAgIGlmICgwIDw9IGRpcmVjdGlvbiAmJiBkaXJlY3Rpb24gPD0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9uc1tkaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBESVJFQ1RJT04uU1RPUCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRLZXlzKHVwS2V5LCBkb3duS2V5LCBsZWZ0S2V5LCByaWdodEtleSwgYWN0aW9uS2V5LCBzZWxlY3RLZXkpIHtcclxuICAgICAgICB0aGlzLnVwS2V5ID0gdXBLZXk7XHJcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcclxuICAgICAgICB0aGlzLmxlZnRLZXkgPSBsZWZ0S2V5O1xyXG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSByaWdodEtleTtcclxuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcclxuICAgICAgICB0aGlzLnNlbGVjdEtleSA9IHNlbGVjdEtleTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPSB0aGlzLmxhc3RLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eSA9IC0xICogUGxheWVyLlBMQVlFUl9TUEVFRDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5ET1dOKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMubGVmdEtleTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uTEVGVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogUGxheWVyLlBMQVlFUl9TUEVFRDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnggPSAxICogUGxheWVyLlBMQVlFUl9TUEVFRDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25LZXk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlVcCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnVwS2V5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uU1RPUCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMubGVmdEtleTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yaWdodEtleTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkb1N0ZXAgPSAoZGVsdGEpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZW9yZXRpY2FsbHkgbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHRoaXMuc3ByaXRlLnggKyB0aGlzLnZ4ICogZGVsdGE7XHJcbiAgICAgICAgICAgIGxldCBuZXdZID0gdGhpcy5zcHJpdGUueSArIHRoaXMudnkgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxyXG4gICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdYIC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKG5ld1kgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1kgKyB0aGlzLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9DaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhpcyBuZXcgcG9zaXRpb25zIHdvdWxkIGJlIGluIGEgc29saWQgdGlsZSBvciBvdXQgb2YgdGhlIG1hcFxyXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IHhSYW5nZS5mcm9tOyB4IDw9IHhSYW5nZS50bzsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXAudGlsZXNbeV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMubWFwLnRpbGVzW3ldW3hdID09IHVuZGVmaW5lZCB8fCAodGhpcy5tYXAudGlsZXNbeV1beF0udGlsZU9iamVjdCAmJiB0aGlzLm1hcC50aWxlc1t5XVt4XS50aWxlT2JqZWN0LnNvbGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50VGlsZSgpLnRpbnQgPSAweEZGRkZGRjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUueSA9IG5ld1k7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUaWxlKCkudGludCA9IDB4MDBGRjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXJJZCArIFwiIGdvdCBcIiArIGNvdW50ICsgXCIgcGllY2VzIG9mIFwiICsgaXRlbVR5cGUpO1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5W2l0ZW1UeXBlXSArPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VGlsZSgpIHtcclxuICAgICAgICBsZXQgeFRpbGVzID0gdGhpcy5zcHJpdGUueCAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoO1xyXG4gICAgICAgIHhUaWxlcyA9IE1hdGgucm91bmQoeFRpbGVzKTtcclxuXHJcbiAgICAgICAgbGV0IHlUaWxlcyA9IHRoaXMuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQ7XHJcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAudGlsZXNbeVRpbGVzXVt4VGlsZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaWxlID0gdGhpcy5nZXRDdXJyZW50VGlsZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aW9uTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5IQVJWRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFRpbGUudGlsZU9iamVjdCBpbnN0YW5jZW9mIFBsYW50ICYmIGN1cnJlbnRUaWxlLnRpbGVPYmplY3QucmVhZHkpIHx8IGN1cnJlbnRUaWxlLnRpbGVPYmplY3QgaW5zdGFuY2VvZiBUcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLnRpbGVPYmplY3Qub25IYXJ2ZXN0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX01PREUuUExBQ0VfUFVNUEtJTl9TRUVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHVtcGtpblBsYW50KGN1cnJlbnRUaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9NT0RFLlBMQUNFX1RPTUFUT19TRUVEOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9tYXRvUGxhbnQoY3VycmVudFRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX01PREUuUExBQ0VfVE5UX1BVTVBLSU46XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmlzRnJlZSgpICYmIGN1cnJlbnRUaWxlLmlzT2NjdXBpZWRCeUFueVBsYXllcigpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUbnRQdW1wa2luKGN1cnJlbnRUaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9NT0RFLlBMQUNFX1dBTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmlzRnJlZSgpICYmIGN1cnJlbnRUaWxlLmlzT2NjdXBpZWRCeUFueVBsYXllcigpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludmVudG9yeS53b29kX2l0ZW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludmVudG9yeS53b29kX2l0ZW0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBXYWxsKGN1cnJlbnRUaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSBpbnZlbnQgc29tZXRoaW5nIHRvIGdldCBvdXQgb2YgdGhpcyBzdHVwaWQgd2FsbCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9NT0RFLlNIT09UOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmludmVudG9yeS50b21hdG9faXRlbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkudG9tYXRvX2l0ZW0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9tYXRvUHJvamVjdGlsZS5jcmVhdGVUb21hdG9Qcm9qZWN0aWxlKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMuY3VycmVudERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XHJcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcclxuaW1wb3J0IHsgUGxhbnQgfSBmcm9tIFwiLi9QbGFudFwiO1xyXG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgU3ByaXRlIHtcclxuXHJcbiAgICBncmlkWDogbnVtYmVyO1xyXG4gICAgZ3JpZFk6IG51bWJlcjtcclxuICAgIHRpbGVPYmplY3Q6IFRpbGVPYmplY3Q7XHJcbiAgICBtYXA6IFRpbGVkTWFwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG1hcDogVGlsZWRNYXApIHtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmdyaWRYID0gZ3JpZFg7XHJcbiAgICAgICAgdGhpcy5ncmlkWSA9IGdyaWRZO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIC8vY2FsY3VsYXRlIG93biByZW5kZXIgY29vcmRpbmF0ZXNcclxuICAgICAgICB0aGlzLnggPSBncmlkWCAqIG1hcC5maW5hbFRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0ID0gbmV3VGlsZU9iamVjdDtcclxuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcclxuICAgICAgICAgICAgdGhpcy5tYXAudGlsZU9iamVjdENvbnRhaW5lci5hZGRDaGlsZChuZXdUaWxlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IGFkZCBUaWxlT2JqZWN0IHRvIGEgVGlsZSB0aGF0IGFsbHJlYWR5IGhhcyBhbiBUaWxlT2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZU9iamVjdC5vbkhpdChoaXRFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUGxhbnQocGxhbnQ6IFBsYW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25QbGFudChwbGFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUGxhY2UocHVtcGtpbjogVG50UHVtcGtpbikge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhY2luZyBQdW1wa2luIFROVFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IYXJ2ZXN0KGluaXRpYXRvcjogUGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IYXJ2ZXN0KGluaXRpYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRnJlZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlT2JqZWN0ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBwbGF5ZXIgdGhhdCBvY2N1cGllcyB0aGlzIHRpbGUuXHJcbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIHRpbGUgaXMgbm90IG9jY3VwaWVkXHJcbiAgICAgKi9cclxuICAgIGlzT2NjdXBpZWRCeSgpOlBsYXllcntcclxuICAgICAgICBmb3IoY29uc3QgcGxheWVyIG9mIHRoaXMubWFwLnBsYXllcnMpe1xyXG4gICAgICAgICAgICAgICAgICAgLy9HZXQgYWxsIHRpbGVzIHRoYXQgd291bGQgYmUgdG91Y2hlZCBieSB0aGUgcGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICBsZXQgeFJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IE1hdGguZmxvb3IocGxheWVyLnNwcml0ZS54IC8gdGhpcy5tYXAuZmluYWxUaWxlV2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnggKyBwbGF5ZXIuc3ByaXRlLndpZHRoKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHlSYW5nZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHBsYXllci5zcHJpdGUueSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKHBsYXllci5zcHJpdGUueSArIHBsYXllci5zcHJpdGUuaGVpZ2h0KSAvIHRoaXMubWFwLmZpbmFsVGlsZUhlaWdodClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRYID49IHhSYW5nZS5mcm9tICYmIHRoaXMuZ3JpZFggPD0geFJhbmdlLnRvICYmIHRoaXMuZ3JpZFkgPj0geVJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWSA8PSB5UmFuZ2UudG8pe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2V0aGVyIHRoaXMgdGlsZSBpcyBvY2N1cGVkIGJ5IGFueSBwbGF5ZXIgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhbnkgcGxheWVyIG9uIHRoaXMgdGlsZS5cclxuICAgICAqL1xyXG4gICAgaXNPY2N1cGllZEJ5QW55UGxheWVyKCk6Ym9vbGVhbntcclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmlzT2NjdXBpZWRCeSgpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9jY3VwaWVkIGJ5IHBsYXllclwiICsgcGxheWVyLnBsYXllcklkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgVGlsZU9iamVjdCB7XHJcblxyXG4gICAgb3duZXI6IFBsYXllcjtcclxuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUsIG1vdGhlcjogVGlsZSwgb3duZXI6IFBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBUaWxlZFNwcml0ZXNoZWV0IH0gZnJvbSBcIi4vVGlsZWRTcHJpdGVzaGVldFwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XHJcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlXCI7XHJcbmltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBXYWxsIH0gZnJvbSBcIi4vV2FsbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVkTWFwIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHJcbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xyXG4gICAgc3RhdGljIFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcclxuXHJcbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcclxuICAgIHNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0O1xyXG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XHJcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xyXG4gICAgZmluYWxUaWxlSGVpZ2h0OiBudW1iZXI7XHJcbiAgICB0aWxlczogVGlsZVtdW107XHJcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcclxuICAgIGdyaWRIZWlnaHQ6IG51bWJlcjtcclxuICAgIHRpbGVDb250YWluZXI6IENvbnRhaW5lcjtcclxuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xyXG4gICAgdGlsZU9iamVjdENvbnRhaW5lcjogQ29udGFpbmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVPYmplY3RDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRpbGVPYmplY3RDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGxheWVyQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1hcE9iamVjdFByb3BlcnR5KG1hcE9iamVjdDogYW55LCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9Mb2FkcyB0aGUgbWFwIHdpdGggc3ByaXRlc2hlZXQuIExhc3QgcGFyYW1ldGVyIGlzIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBwYXJzaW5nIHRoZSBtYXAgd2l0aCB0aGUgbmV3IHBhcnNlZCBtYXAgYXMgcGFyYW1ldGVyXHJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBQYXRoOiBzdHJpbmcsIHNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0LCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IFRpbGVkTWFwKCk7XHJcblxyXG4gICAgICAgIC8vTG9hZCBTcHJpdGVzaGVldFxyXG4gICAgICAgIGxldCBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XHJcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gc3ByaXRlc2hlZXQudGlsZVdpZHRoICogU1BSSVRFX1NDQUxFLng7XHJcbiAgICAgICAgbWFwLmZpbmFsVGlsZUhlaWdodCA9IHNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBTUFJJVEVfU0NBTEUueTtcclxuICAgICAgICBtYXAuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldDtcclxuXHJcbiAgICAgICAgLy9Mb2FkIE1hcCBhbmQgUGFyc2UgaXRcclxuICAgICAgICAkLmdldEpTT04obWFwUGF0aCwge30sIGZ1bmN0aW9uIChtYXBEYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAvL0J1aWxkIGFsbCBUaWxlTGF5ZXJzIGZpcnN0XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGwgb2YgbWFwRGF0YS5sYXllcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwidGlsZWxheWVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLmdyaWRXaWR0aCA9IHRsLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0luaXQgbWFwJ3MgdGlsZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwLnRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC50aWxlc1tpXSA9IG5ldyBBcnJheShtYXAuZ3JpZFdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vR2VuZXJhdGUgVGlsZXMgZm9yIGVhY2ggdGlsZSB0byB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGwuaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0bC53aWR0aDsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHJvdyAqIHRsLndpZHRoICsgY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRsLmRhdGFbaW5kZXhdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc3ByaXRlc2hlZXQuZ2V0VGV4dHVyZSh0bC5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IG5ldyBUaWxlKHRleHR1cmUsIHJvdywgY29sdW1uLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9JdGVyYXRlIHRocm91Z2ggT2JqZWN0IExheWVyc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRsLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0FkZCBhbGwgcGxheWVycyBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX18gIF8gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCB8X18pIHwgfCBfXyBfIF8gICBfICBfX18gXyBfXyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfCAgX19fL3wgfC8gX2AgfCB8IHwgfC8gXyBcXCAnX198XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHxffCAgICB8X3xcXF9fLF98XFxfXywgfFxcX19ffF98ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgX18vIHwgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGgucm91bmQoY28ueCAqIFNQUklURV9TQ0FMRS54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gKE1hdGgucm91bmQoY28ueSkgLSBjby5oZWlnaHQpICogU1BSSVRFX1NDQUxFLnk7IC8vIC1jby5oZWlnaHQgYmVjYXVzZSB0aWxlZCB1c2VzIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgZm9yIGNvb3JkaW5hdGVzIGFuZCBQSVhJIHVzZXMgdGhlIHRvcC1sZWZ0IGNvcm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgbWFwLCBwbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAuYWRkUGxheWVyKG5ld1BsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBTcHJpdGVzIGZvciBlYWNoIG9iamVjdCB0byB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCBfX19fXyAgICAgIF9fX19fIF8gX18gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwvIF8gXFwgXFwgL1xcIC8gLyBfIFxcICdfX3xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98XFxfX18vIFxcXy9cXF8vIFxcX19ffF98ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvLnR5cGUgPT0gXCJ0b3dlclwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcklkID0gbWFwLmdldE1hcE9iamVjdFByb3BlcnR5KGNvLCBcIm93bmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3duZXIgPSBtYXAucGxheWVyc1tvd25lcklkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUb3dlciA9IG5ldyBUb3dlcih0ZXh0dXJlLCBtb3RoZXIsIG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1Rvd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgX19fX19fXyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgJ19fLyBfIFxcLyBfIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgfCB8ICBfXy8gIF9fL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwidHJlZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHNwcml0ZXNoZWV0LmdldFRleHR1cmUoY28uZ2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUcmVlID0gbmV3IFRyZWUodGV4dHVyZSwgbW90aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ld1RyZWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgX18gICAgICAgICAgX18gICBfIF8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICBcXCBcXCAgICAgICAgLyAvICB8IHwgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIFxcIFxcICAvXFwgIC8gL18gX3wgfCB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgIFxcIFxcLyAgXFwvIC8gX2AgfCB8IHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIFxcICAvXFwgIC8gKF98IHwgfCB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgXFwvICBcXC8gXFxfXyxffF98X3xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY28udHlwZSA9PSBcIndhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3IFdhbGwobW90aGVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9DYWxsIG9uRmluaXNoIENhbGxiYWNrXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG1hcCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIC8vcGxheWVyLnNwcml0ZS5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcclxuICAgICAgICB0aGlzLnBsYXllcnNbcGxheWVyLnBsYXllcklkXSA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZChwbGF5ZXIuc3ByaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUaWxlT2JqZWN0KHRpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcclxuICAgICAgICB0aWxlT2JqZWN0LnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29udGFpbmVyLmFkZENoaWxkKHRpbGVPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRpbGUodGlsZTogVGlsZSkge1xyXG4gICAgICAgIHRpbGUueCA9IHRpbGUuZ3JpZFggKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xyXG4gICAgICAgIHRpbGUueSA9IHRpbGUuZ3JpZFkgKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVIZWlnaHQgKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueTtcclxuICAgICAgICB0aWxlLnNjYWxlID0gVGlsZWRNYXAuU1BSSVRFX1NDQUxFO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVzW3RpbGUuZ3JpZFldW3RpbGUuZ3JpZFhdID0gdGlsZTtcclxuICAgICAgICB0aGlzLnRpbGVDb250YWluZXIuYWRkQ2hpbGQodGlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0OiBSZWN0YW5nbGUpIHtcclxuXHJcbiAgICAgICAgLy9hbiBPYmplY3QgY2FuIGJlIHBsYWNlZCBcImJldHdlZW5cIiB0aWxlcyBpbiB0aWxlZCBtYXAgZWRpdG9yLiBCdXQgZXZudHMgY2FuIGJlIHRyaWdnZXJlZCBvbmx5IGZyb20gd2hvbGUgdGlsZXMuIFNvIHRoZSBvYmVqY2N0cyBwb3NpdGlvbiBpcyBtYXBwZWQgdG8gdGhlIG5lYXJlc3QgVGlsZVxyXG5cclxuICAgICAgICBsZXQgb3JpZ2luYWxYID0gbWFwT2JqZWN0LnggKiBUaWxlZE1hcC5TUFJJVEVfU0NBTEUueDtcclxuICAgICAgICBsZXQgeFRpbGVzID0gb3JpZ2luYWxYIC8gdGhpcy5maW5hbFRpbGVXaWR0aDtcclxuICAgICAgICB4VGlsZXMgPSBNYXRoLnJvdW5kKHhUaWxlcyk7XHJcblxyXG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSAobWFwT2JqZWN0LnkgLSBtYXBPYmplY3QuaGVpZ2h0KSAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55OyAgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgeVRpbGVzID0gb3JpZ2luYWxZIC8gdGhpcy5maW5hbFRpbGVIZWlnaHQ7XHJcbiAgICAgICAgeVRpbGVzID0gTWF0aC5yb3VuZCh5VGlsZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBncmlkWDogeFRpbGVzLCBncmlkWTogeVRpbGVzIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZU5lYXJlc3RUbyhtYXBPYmplY3Q6IFJlY3RhbmdsZSk6IFRpbGUge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0T2JqZWN0Q29vcmRpbmF0ZXMobWFwT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlc1twb3MuZ3JpZFldW3Bvcy5ncmlkWF07XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkTWFuYWdlciB7XHJcblxyXG4gICAgIGtleVVwcyA9IHt9O1xyXG4gICAgIGtleURvd25zID0ge307XHJcbiAgICAgQU5ZX0tFWSA9IFwiYW55X2tleVwiO1xyXG5cclxuICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIH1cclxuXHJcbiAgICAgb25LZXlVcCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleVVwcykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlVcHNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlVcCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9uS2V5VXAoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICBvbktleURvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5rZXlEb3ducykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlEb3duc1tpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5vbktleURvd24gPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleURvd24oZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICByZWdpc3RlcktleShrZXksIG9uS2V5RG93biwgb25LZXlVcCwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIHRoaXMua2V5RG93bnNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleURvd246IG9uS2V5RG93biB9O1xyXG4gICAgICAgIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlVcDogb25LZXlVcCB9O1xyXG4gICAgfVxyXG5cclxuICAgICB1bnJlZ2lzdGVyS2V5KGlkZW50aWZpZXIpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVwZGF0ZVNjaGVkdWxlciB7XHJcblxyXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xyXG4gICAgIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2xpZW50c1tpZF0gPSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsaWVudHNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgICBkb1N0ZXAgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDYWxsYmFjayA9IHRoaXMuY2xpZW50c1tpXS5jYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFjayhkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcclxuaW1wb3J0IHsgVGlsZWRNYXAgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXBkYXRlU2NoZWR1bGVyIH0gZnJvbSBcIi4vVXBkYXRlU2NoZWR1bGVyXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBUFBfV0lEVEggPSA1MTI7XHJcbmNvbnN0IEFQUF9IRUlHSFQgPSA1MTI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xyXG5cclxuICAgIHNwcml0ZVNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0O1xyXG5cclxuXHJcbiAgICBtYXA6IFRpbGVkTWFwO1xyXG5cclxuICAgIHBpeGlBcHA6IEFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHVwZGF0ZVNjaGVkdWxlcjogVXBkYXRlU2NoZWR1bGVyO1xyXG4gICAga2V5Ym9hcmRNYW5hZ2VyOiBLZXlib2FyZE1hbmFnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZE1hbmFnZXIgPSBuZXcgS2V5Ym9hcmRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZXIgPSBuZXcgVXBkYXRlU2NoZWR1bGVyKCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFwiZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nXCIsIDEsIDE2LCAxNiwgMzEsIDU3KSAvL0tlbm55IFNwcml0ZXNoZWV0IHNlZSBkYXRhL21hcHMvS2VubmV5IFJQRyBUaWxlcy50c3hcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIC8vQ3JlYXRlIFBpeGkgc3R1ZmZcclxuICAgICAgICAvL0NyZWF0ZSBhIFBpeGkgQXBwbGljYXRpb25cclxuICAgICAgICBjbGFzcyBQaXhpT3B0aW9ucyBpbXBsZW1lbnRzIEFwcGxpY2F0aW9uT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB3aWR0aCwgcHVibGljIGhlaWdodCkgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBpeGlPcHRpb25zID0gbmV3IFBpeGlPcHRpb25zKEFQUF9XSURUSCwgQVBQX0hFSUdIVCk7XHJcblxyXG4gICAgICAgIHRoaXMucGl4aUFwcCA9IG5ldyBBcHBsaWNhdGlvbihwaXhpT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vQWRkIHRoZSBjYW52YXMgdGhhdCBQaXhpIGF1dG9tYXRpY2FsbHkgY3JlYXRlZCBmb3IgeW91IHRvIHRoZSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgLy9TdGlsbCBuZWNjZXNhcnJ5Pz8/P1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5waXhpQXBwLnZpZXcpO1xyXG5cclxuICAgICAgICAvL1JlZ2lzdGVyIFVwZGF0ZSBzY2hlZHVsZXJcclxuICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLmFkZCh0aGlzLnVwZGF0ZVNjaGVkdWxlci5kb1N0ZXApO1xyXG5cclxuXHJcbiAgICAgICAgVGlsZWRNYXAubG9hZE1hcChcImRhdGEvbWFwcy9tYXAxLmpzb25cIiwgdGhpcy5zcHJpdGVTaGVldCwgKHBhcnNlZE1hcDogVGlsZWRNYXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXAgPSBwYXJzZWRNYXA7XHJcbiAgICAgICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZChwYXJzZWRNYXApO1xyXG4gICAgICAgICAgICB0aGlzLnBpeGlBcHAudGlja2VyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gcGFyc2VkTWFwLnBsYXllcnM7XHJcbiAgICAgICAgICAgIHBsYXllcnNbMF0uc2V0S2V5cyhcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwibVwiLCBcIm5cIik7XHJcbiAgICAgICAgICAgIHBsYXllcnNbMV0uc2V0S2V5cyhcIndcIiwgXCJzXCIsIFwiYVwiLCBcImRcIiwgXCJ4XCIsIFwieVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7R2FtZU1hbmFnZXJ9IGZyb20gXCIuL21vZGVsL0dhbWVNYW5hZ2VyXCJcclxuXHJcbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKCk7XHJcbmdhbWVNYW5hZ2VyLnN0YXJ0R2FtZSgpO1xyXG5cclxuZXhwb3J0IHtnYW1lTWFuYWdlcn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9