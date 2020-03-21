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
        _this.blinkRecursiv = function (times) {
            if (times > 0) {
                switch (times % 2) {
                    case 0:
                        _this.tint = 0xCCFFCC;
                        break;
                    case 1:
                        _this.tint = 0xFFFFFF;
                        break;
                }
                setTimeout(function () { _this.blinkRecursiv(--times); }, 100);
            }
            else {
                _this.tint = 0xFFFFFF;
                _this.vulnerable = true;
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
    TileObject.prototype.blink = function (times) {
        this.vulnerable = false;
        this.blinkRecursiv(times * 2);
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
        var _this = _super.call(this, external_PIXI_["Texture"].fromImage(TntPumpkin.texturePath, true, external_PIXI_["SCALE_MODES"].NEAREST), mother) || this;
        _this.exploding = false;
        return _this;
    }
    TntPumpkin.prototype.onHit = function (hitEvent) {
        if (!this.exploding) {
            this.exploding = true;
            this.wiggle(1);
            this.blink(3);
            //Blink very dangerous
            //Explode!!!
            //this.shrinkAndDie();
        }
    };
    TntPumpkin.texturePath = "../../data/assets/pumpkin.png";
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
                    _this.sprite.x = newX;
                    _this.sprite.y = newY;
                    //Tint the new currentTile
                    _this.tintCurrentTile();
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
                            if (_this.inventory.pumpkin_item > 0) {
                                _this.inventory.pumpkin_item--;
                                new TntPumpkin_TntPumpkin(currentTile);
                            }
                        }
                        break;
                    case ACTION_MODE.PLACE_WALL:
                        if (currentTile.isFree() && currentTile.isOccupiedByAnyPlayer() == false) {
                            if (_this.inventory.wood_item > 0) {
                                _this.inventory.wood_item--;
                                new Wall_Wall(currentTile);
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
            this.currentDirection = direction;
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
            ct.setTint(0xCCFFCC);
        }
        this.lastTintedTile = ct;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vZXh0ZXJuYWwgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi9leHRlcm5hbCBcIiRcIiIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RpbGVkU3ByaXRlc2hlZXQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9UaWxlT2JqZWN0LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvU3RhdHVzQmFyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvSGl0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9JdGVtcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RyZWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9QbGFudC50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1RudFB1bXBraW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9Ub21hdG9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUHVtcGtpblBsYW50LnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVG9tYXRvUGxhbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9XYWxsLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvUGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL21vZGVsL1Rvd2VyLnRzIiwid2VicGFjazovL2JhdHRsZVBsYW50YXRpb24vLi9zcmMvbW9kZWwvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9LZXlib2FyZE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9VcGRhdGVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlUGxhbnRhdGlvbi8uL3NyYy9tb2RlbC9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVQbGFudGF0aW9uLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLHNCOzs7Ozs7QUNBQSxtQjs7Ozs7Ozs7Ozs7OztBQ0EwRDtBQUUxRDtJQVdDLDBCQUFZ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Q0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7IiwiaW1wb3J0IHsgVGV4dHVyZSwgU0NBTEVfTU9ERVMsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZFNwcml0ZXNoZWV0e1xuXG5cdHBhdGg6IHN0cmluZztcblx0Ym9yZGVyOiBudW1iZXI7XG5cdHRpbGVIZWlnaHQ6IG51bWJlcjtcblx0dGlsZVdpZHRoOiBudW1iZXI7XG5cdHJvd3M6IG51bWJlcjtcblx0Y29sdW1uczogbnVtYmVyO1xuXHRiaWdUZXh0dXJlOiBUZXh0dXJlO1xuXHR0ZXh0dXJlczogVGV4dHVyZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHBhdGgsYm9yZGVyLHRpbGVXaWR0aCx0aWxlSGVpZ2h0LHJvd3MsY29sdW1ucyl7XG5cdFx0dGhpcy5wYXRoID0gcGF0aDtcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0XHR0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xuXHRcdHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xuXHRcdHRoaXMucm93cyA9IHJvd3M7XG5cdFx0dGhpcy5jb2x1bW5zID0gY29sdW1ucztcblx0XHR0aGlzLmJpZ1RleHR1cmUgPSBUZXh0dXJlLmZyb21JbWFnZShwYXRoLCB0cnVlLCBTQ0FMRV9NT0RFUy5ORUFSRVNUKTtcblx0XHR0aGlzLnRleHR1cmVzID0gW107XG5cdH1cblxuXHRnZXRUZXh0dXJlKGdpZDpudW1iZXIpOlRleHR1cmUgIHtcblx0XHQvL0NoZWNrIHdldGhlciB0ZXh0dXJlcyB3YXMgYWxscmVhZHkgZnJhbWVkIGZvcm0gc3ByaXRlc2hlZXRcblx0XHRpZiAodGhpcy50ZXh0dXJlc1tnaWRdKSB7XG5cdFx0ICByZXR1cm4gdGhpcy50ZXh0dXJlc1tnaWRdO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICAvL0NhbGN1bGF0ZSByb3cgYW5kIGNvbHVtbiBmcm9tIGdpZFxuXHRcdCAgbGV0IHJvdzpudW1iZXIgPSBNYXRoLmZsb29yKChnaWQgLSAxKSAvIHRoaXMuY29sdW1ucyk7XG5cdFx0ICBsZXQgY29sdW1uOm51bWJlciA9IChnaWQgLSAxKSAlIHRoaXMuY29sdW1ucztcblx0XG5cdFx0ICBsZXQgdGlsZVdpZHRoOm51bWJlciA9IHRoaXMudGlsZVdpZHRoO1xuXHRcdCAgbGV0IHRpbGVIZWlnaHQ6bnVtYmVyID0gdGhpcy50aWxlSGVpZ2h0O1xuXHRcblx0XHQgIGxldCB4Om51bWJlciA9IGNvbHVtbiAqIHRpbGVXaWR0aCArIGNvbHVtbiAqIHRoaXMuYm9yZGVyO1xuXHRcdCAgbGV0IHk6bnVtYmVyID0gcm93ICogdGlsZUhlaWdodCArIHJvdyAqIHRoaXMuYm9yZGVyO1xuXHRcblx0XHQgIGxldCB0OlRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmJpZ1RleHR1cmUuYmFzZVRleHR1cmUsIG5ldyBSZWN0YW5nbGUoeCwgeSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KSk7XG5cdFx0ICAvL1NhdmUgVGV4dHVyZSBpbiBjYWNoZSBhcnJheVxuXHRcdCAgdGhpcy50ZXh0dXJlc1tnaWRdID0gdDtcblx0XHQgIHJldHVybiB0O1xuXHRcdH1cblx0ICB9XG5cdFxuXG59IiwiaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IEhpdEV2ZW50IH0gZnJvbSBcIi4vSGl0RXZlbnRcIjtcbmltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBQb2ludCB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUaWxlT2JqZWN0IGV4dGVuZHMgU3ByaXRlIHtcblxuICAgIHN0YXRpYyBvbkhpdFNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iNC5tcDMnKTtcbiAgICBzdGF0aWMgb25EZXN0cm95U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2IxLm1wMycpO1xuXG4gICAgbW90aGVyOiBUaWxlO1xuICAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdnVsbmVyYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBtb3RoZXI6IFRpbGUpIHtcbiAgICAgICAgc3VwZXIodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubW90aGVyID0gbW90aGVyO1xuXG4gICAgICAgIHRoaXMubW90aGVyLmFkZFRpbGVPYmplY3QodGhpcyk7ICAgICBcblxuXG5cbiAgICAgICAgLy9zZXQgcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IHRoaXMubW90aGVyLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMubW90aGVyLnk7XG4gICAgfVxuXG5cblxuICAgIG9uSGl0KGhpdGV2ZW50OiBIaXRFdmVudCkgeyB9O1xuXG4gICAgb25QbGFudChwbGFudDogUGxhbnQpIHsgfTtcblxuICAgIG9uSGFydmVzdChpbml0aWF0b3I6IFBsYXllcikgeyB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vdGhlci50aWxlT2JqZWN0O1xuICAgICAgICB0aGlzLnNocmlua0FuZERpZSgpO1xuICAgIH07XG5cbiAgICB3aWdnbGUodGltZXMpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMud2lnZ2xlUmVjdXJzaXYodGltZXMgKiA0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpZ2dsZVJlY3Vyc2l2ID0gKHRpbWVzOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcmFkaWFudCA9IDAuMDc7XG4gICAgICAgIGlmICh0aW1lcyA+IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGltZXMgJSA0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogdGhpcy5yb3RhdGlvbiAtPSByYWRpYW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHRoaXMucm90YXRpb24gLT0gcmFkaWFudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLnJvdGF0aW9uICs9IHJhZGlhbnQ7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMud2lnZ2xlUmVjdXJzaXYoLS10aW1lcykgfSwgMzApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yLnNldCgwKTtcbiAgICAgICAgICAgIHRoaXMudnVsbmVyYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNocmlua0FuZERpZSgpIHtcbiAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41LCAxKTtcbiAgICAgICAgdGhpcy5zaHJpbmtBbmREaWVSZWN1cnNpdmUodGhpcy5zY2FsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaHJpbmtBbmREaWVSZWN1cnNpdmUgPSAoc2NhbGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2NhbGVEaWZmID0gMC4yO1xuICAgICAgICBpZiAoc2NhbGUueCA8PSAwIHx8IHNjYWxlLnkgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSBzY2FsZS54IC0gc2NhbGVEaWZmO1xuICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0gc2NhbGUueSAtIHNjYWxlRGlmZjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnNocmlua0FuZERpZVJlY3Vyc2l2ZSh0aGlzLnNjYWxlKSB9LCAxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibGluayh0aW1lcykge1xuICAgICAgICB0aGlzLnZ1bG5lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ibGlua1JlY3Vyc2l2KHRpbWVzICogMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBibGlua1JlY3Vyc2l2ID0gKHRpbWVzOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRpbWVzID4gMCkge1xuICAgICAgICAgICAgc3dpdGNoICh0aW1lcyAlIDIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHRoaXMudGludCA9IDB4Q0NGRkNDOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHRoaXMudGludCA9IDB4RkZGRkZGOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmJsaW5rUmVjdXJzaXYoLS10aW1lcykgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGludCA9IDB4RkZGRkZGO1xuICAgICAgICAgICAgdGhpcy52dWxuZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBib3JkZXJSZWN0YW5nbGU6IEdyYXBoaWNzO1xuICAgIGJvcmRlckNvbG9yOiBudW1iZXJcbiAgICBwcm9ncmVzc1NoYXBlOiBHcmFwaGljcztcbiAgICBwcm9ncmVzc0NvbG9yOiBudW1iZXI7XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjsgLy9Gcm9tIDAgdG8gMVxuICAgIG1vdGhlcjogVGlsZU9iamVjdDtcblxuICAgIHN0YXRpYyBMSU5FX1RISUNLTkVTUyA9IDM7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6IFRpbGVPYmplY3QsIHZpc2libGU/OiBib29sZWFuLCBwcm9ncmVzcz86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHByb2dyZXNzQ29sb3I/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBtb3RoZXI7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiB2aXNpYmxlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MgfHwgMTtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yIHx8IDB4RkYwMDAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ29sb3IgPSBwcm9ncmVzc0NvbG9yIHx8IDB4MDBGRjAwO1xuXG4gICAgICAgIC8vQWRkIHRvIHBpeGkgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1vdGhlci5tb3RoZXIubWFwO1xuXG4gICAgICAgIG1hcC50aWxlT2JqZWN0Q29udGFpbmVyLmFkZENoaWxkKHRoaXMpO1xuXG4gICAgICAgIC8vcG9zaXRpb24gcmVsYXRpdmUgdG8gbW90aGVyXG4gICAgICAgIHRoaXMueCA9IG1vdGhlci54O1xuICAgICAgICB0aGlzLnkgPSBtb3RoZXIueTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1vdGhlci53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtb3RoZXIuaGVpZ2h0XG5cbiAgICAgICAgLy9EcmF3IGZyYW1lXG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMuYm9yZGVyUmVjdGFuZ2xlLmxpbmVTdHlsZShTdGF0dXNCYXIuTElORV9USElDS05FU1MsIHRoaXMuYm9yZGVyQ29sb3IpO1xuICAgICAgICB0aGlzLmJvcmRlclJlY3RhbmdsZS5kcmF3UmVjdCgwLCAwLCBtYXAuZmluYWxUaWxlV2lkdGgsIFN0YXR1c0Jhci5MSU5FX1RISUNLTkVTUyAqIDMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9yZGVyUmVjdGFuZ2xlKTtcblxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vQ2xlYXIgbGFzdCBwcm9ncmVzcyBTaGFwZVxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1NoYXBlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMucHJvZ3Jlc3NTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMC4xKSB7IC8vRHJhdyB0b28gc21hbGwgcHJvZ3Jlc3MgbG9va3MgdWdseVxuICAgICAgICAgICAgLy9EcmF3IG5ldyBwcm9ncmVzc2JhclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1NoYXBlID0gbmV3IEdyYXBoaWNzKCk7XG5cbiAgICAgICAgICAgIC8vRG9uJ3Qgd29ycnkgYWJvdXQgdGhpcyBjcmF6eSArMS8tMSBwaXhlbHMsIHRoZXkgYXJlIGNyYXp5LCBidXQgbmVjZXNzYXJ5XG4gICAgICAgICAgICBjb25zdCBsaW5lV2lkdGggPSA2NCAqIHRoaXMucHJvZ3Jlc3MgLSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKyAxO1xuICAgICAgICAgICAgY29uc3QgdGhpY2sgPSBTdGF0dXNCYXIuTElORV9USElDS05FU1MgKiAyO1xuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzU2hhcGUubGluZVN0eWxlKHRoaWNrLCB0aGlzLnByb2dyZXNzQ29sb3IpXG4gICAgICAgICAgICAgICAgLm1vdmVUbyhTdGF0dXNCYXIuTElORV9USElDS05FU1MgLSAxLCB0aGljayAtIDEpXG4gICAgICAgICAgICAgICAgLmxpbmVUbyhsaW5lV2lkdGgsIHRoaWNrIC0gMSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wcm9ncmVzc1NoYXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHByb2dyZXNzIDwgMCB8fCBwcm9ncmVzcyA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3Qgc2V0IHByb2dyZXNzIGxvd2VyIHRoYW4gMCBvciBoaWdoZXIgdGhhbiAxXCIpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgSGl0RXZlbnQge1xuXG4gICAgaW5pdGlhdG9yOiBQbGF5ZXI7XG4gICAgZGFtYWdlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0aWF0b3I6IFBsYXllciwgZGFtYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0b3IgPSBpbml0aWF0b3I7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXG4gICAgfVxuXG59IiwiZW51bSBJVEVNIHtcbiAgICBUT01BVE9fUExBTlQgPSBcInRvbWF0b19wbGFudFwiLFxuICAgIFRPTUFUT19JVEVNID0gXCJ0b21hdG9faXRlbVwiLFxuICAgIFRPTUFUT19QUk9KRUNUSUxFID0gXCJ0b21hdG9fcHJvamVjdGlsZVwiLFxuICAgIFBVTVBLSU5fUExBTlQgPSBcInB1bXBraW5fcGxhbnRcIixcbiAgICBQVU1QS0lOX0lURU0gPSBcInB1bXBraW5faXRlbVwiLFxuICAgIFROVF9QVU1QS0lOID0gXCJ0bnRfcHVtcGtpblwiLFxuICAgIFdPT0RfSVRFTSA9IFwid29vZF9pdGVtXCJcbn1cblxuXG5leHBvcnQgeyBJVEVNIH07XG4iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IElURU0gfSBmcm9tIFwiLi9JdGVtc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlZSBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgaGVhbHRoOiBudW1iZXIgPSAxO1xuICAgIHN0YXRpYyBvbkhpdFNvdW5kID0gbmV3IEF1ZGlvKCcuLi9kYXRhL2Fzc2V0cy9zb3VuZC9ibG9iNC5tcDMnKTtcbiAgICBzdGF0aWMgb25EZXN0cm95U291bmQgPSBuZXcgQXVkaW8oJy4uL2RhdGEvYXNzZXRzL3NvdW5kL2Jsb2IxLm1wMycpO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZSwgbW90aGVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy52dWxuZXJhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBoaXRFdmVudC5kYW1hZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCAwLjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3koaGl0RXZlbnQuaW5pdGlhdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyLnNldFByb2dyZXNzKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndpZ2dsZSgzKTtcbiAgICAgICAgICAgICAgICBUcmVlLm9uSGl0U291bmQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRGVzdHJveShpbml0aWF0b3I6IFBsYXllcikge1xuICAgICAgICBpbml0aWF0b3IuZ2l2ZUl0ZW0oSVRFTS5XT09EX0lURU0sIDEpO1xuICAgICAgICBUcmVlLm9uRGVzdHJveVNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIuZGVzdHJveSh7IGNoaWxkcmVuOiB0cnVlIH0pO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koaW5pdGlhdG9yKTtcbiAgICB9XG5cbiAgICBvbkhhcnZlc3QoaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vbkhpdChuZXcgSGl0RXZlbnQoaW5pdGlhdG9yLDAuMikpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQge2dhbWVNYW5hZ2VyfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQbGFudCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG4gICAgc3RhdGljIGdyb3dTdGF0ZXM6IG51bWJlciA9IDQ7XG4gICAgc3RhdGljIGdyb3dTdGVwVGltZTogbnVtYmVyID0gMzAwMDtcblxuICAgIHNwcml0ZVByZWZpeDogc3RyaW5nO1xuICAgIGNyb3A6IG9iamVjdDtcbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICByZWFkeTpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOlRleHR1cmUsIG1vdGhlcjogVGlsZSkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlLG1vdGhlcik7XG4gICAgICAgIGNvbnN0IGlkID0gXCJwbGFudFwiICsgbW90aGVyLmdyaWRYICsgXCItXCIgKyBtb3RoZXIuZ3JpZFk7XG4gICAgICAgIC8vZ2FtZU1hbmFnZXIudXBkYXRlU2NoZWR1bGVyLnJlZ2lzdGVyKGlkLCB0aGlzLmdyb3cpO1xuICAgIH1cblxuICAgIGdyb3cgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gZ3Jvd2luZy4uLlwiKTtcbiAgICB9XG5cblxuICAgIG9uSGFydmVzdChpbml0aW5hdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgLy9IYXJ2ZXN0IHlvdXJzZWxmXG4gICAgICAgIC8vZ2l2ZSB0aGUgaW5pdGlhdG9yIHRoZSBpdGVtc1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IGdhbWVNYW5hZ2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBUZXh0dXJlLCBTQ0FMRV9NT0RFUyB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUbnRQdW1wa2luIGV4dGVuZHMgVGlsZU9iamVjdHtcblxuICAgIHN0YXRpYyB0ZXh0dXJlUGF0aCA9IFwiLi4vLi4vZGF0YS9hc3NldHMvcHVtcGtpbi5wbmdcIjtcblxuICAgIGV4cGxvZGluZzpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb3RoZXI6VGlsZSl7XG4gICAgICAgIHN1cGVyKFRleHR1cmUuZnJvbUltYWdlKFRudFB1bXBraW4udGV4dHVyZVBhdGgsIHRydWUsIFNDQUxFX01PREVTLk5FQVJFU1QpLG1vdGhlcik7XG4gICAgfVxuXG4gICAgb25IaXQoaGl0RXZlbnQ6SGl0RXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMuZXhwbG9kaW5nKXtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMud2lnZ2xlKDEpO1xuICAgICAgICAgICAgdGhpcy5ibGluaygzKTtcbiAgICAgICAgICAgIC8vQmxpbmsgdmVyeSBkYW5nZXJvdXNcbiAgICAgICAgICAgIC8vRXhwbG9kZSEhIVxuICAgICAgICAgICAgLy90aGlzLnNocmlua0FuZERpZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQge0RJUkVDVElPTn0gZnJvbSBcIi4vUGxheWVyXCJcblxuZXhwb3J0IGNsYXNzIFRvbWF0b1Byb2plY3RpbGUgZXh0ZW5kcyBTcHJpdGV7XG5cbnN0YXRpYyBjcmVhdGVUb21hdG9Qcm9qZWN0aWxlKHg6bnVtYmVyLHk6bnVtYmVyLGRpcmVjdGlvbjpESVJFQ1RJT04pe1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgdG9tYXRvIHByb2plY3RpbGUhISFcIik7XG59XG5cbn0iLCJpbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vVGlsZVwiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIFB1bXBraW5QbGFudCBleHRlbmRzIFBsYW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuc3ByaXRlU2hlZXQuZ2V0VGV4dHVyZSg0NzEpLG1vdGhlcik7XG4gICAgfVxufSIsImltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgVG9tYXRvUGxhbnQgZXh0ZW5kcyBQbGFudHtcblxuICAgIGNvbnN0cnVjdG9yKG1vdGhlcjpUaWxlKXtcbiAgICAgICAgc3VwZXIoZ2FtZU1hbmFnZXIuc3ByaXRlU2hlZXQuZ2V0VGV4dHVyZSg0NzEpLG1vdGhlcik7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL1N0YXR1c0JhclwiO1xuaW1wb3J0IHsgSGl0RXZlbnQgfSBmcm9tIFwiLi9IaXRFdmVudFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBnYW1lTWFuYWdlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5leHBvcnQgY2xhc3MgV2FsbCBleHRlbmRzIFRpbGVPYmplY3Qge1xuXG5cbiAgICBzdGF0dXNCYXI6IFN0YXR1c0JhcjtcbiAgICBoZWFsdGg6IG51bWJlciA9IDE7XG4gIFxuXG4gICAgY29uc3RydWN0b3IobW90aGVyKSB7XG4gICAgICAgIHN1cGVyKGdhbWVNYW5hZ2VyLnNwcml0ZVNoZWV0LmdldFRleHR1cmUoOTQ5KSwgbW90aGVyKTsgLy82NjUgaXMgYSBib3ggc3ByaXRlXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0Jhcih0aGlzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xuICAgIH1cblxuXG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudnVsbmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gaGl0RXZlbnQuZGFtYWdlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDwgMC4wMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25EZXN0cm95KGhpdEV2ZW50LmluaXRpYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0Jhci5zZXRQcm9ncmVzcyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWdnbGUoMyk7XG4gICAgICAgICAgICAgICAgV2FsbC5vbkhpdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRlc3Ryb3koaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgV2FsbC5vbkRlc3Ryb3lTb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRlc3Ryb3koeyBjaGlsZHJlbjogdHJ1ZSB9KTtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KGluaXRpYXRvcik7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBUcmVlIH0gZnJvbSAnLi9UcmVlJztcbmltcG9ydCB7IFRpbGVkTWFwIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcbmltcG9ydCB7IFBvaW50LCBleHRyYXMsIFRleHR1cmUsIEJhc2VUZXh0dXJlLCBSZWN0YW5nbGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgZ2FtZU1hbmFnZXIgfSBmcm9tIFwiLi8uLi9pbmRleFwiXG5pbXBvcnQgeyBJVEVNIH0gZnJvbSBcIi4vSXRlbXNcIjtcbmltcG9ydCB7IFBsYW50IH0gZnJvbSBcIi4vUGxhbnRcIjtcbmltcG9ydCB7IFRudFB1bXBraW4gfSBmcm9tICcuL1RudFB1bXBraW4nO1xuaW1wb3J0IHsgVG9tYXRvUHJvamVjdGlsZSB9IGZyb20gJy4vVG9tYXRvUHJvamVjdGlsZSc7XG5pbXBvcnQgeyBQdW1wa2luUGxhbnQgfSBmcm9tICcuL1B1bXBraW5QbGFudCc7XG5pbXBvcnQgeyBUb21hdG9QbGFudCB9IGZyb20gJy4vVG9tYXRvUGxhbnQnO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gJy4vV2FsbCc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi9UaWxlJztcblxuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcbiAgICB0b21hdG9faXRlbTogbnVtYmVyID0gMDtcbiAgICBwdW1wa2luX2l0ZW06IG51bWJlciA9IDA7XG4gICAgd29vZF9pdGVtOiBudW1iZXIgPSAwO1xufVxuXG5cbmV4cG9ydCBlbnVtIERJUkVDVElPTiB7IFVQLCBSSUdIVCwgRE9XTiwgTEVGVCwgU1RPUCB9O1xuZXhwb3J0IGVudW0gQUNUSU9OX01PREUgeyBIQVJWRVNULCBQTEFDRV9QVU1QS0lOX1NFRUQsIFBMQUNFX1RPTUFUT19TRUVELCBQTEFDRV9UTlRfUFVNUEtJTiwgUExBQ0VfV0FMTCwgU0hPT1QgfTtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cblxuICAgIHN0YXRpYyBTUFJJVEVfV0lEVEg6IG51bWJlciA9IDk2IC8gMztcbiAgICBzdGF0aWMgU1BSSVRFX0hFSUdIVDogbnVtYmVyID0gMTQ0IC8gNDtcbiAgICBzdGF0aWMgU1BSSVRFX1NDQUxFOiBQb2ludCA9IG5ldyBQb2ludCgxLjUsIDEuNSk7XG4gICAgc3RhdGljIFBMQVlFUl9TUEVFRCA9IDQ7XG5cbiAgICBwbGF5ZXJJZDogbnVtYmVyO1xuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBzcHJpdGU6IGV4dHJhcy5BbmltYXRlZFNwcml0ZTtcbiAgICBhbmltYXRpb25zOiBUZXh0dXJlW11bXTtcbiAgICB2eDogbnVtYmVyO1xuICAgIHZ5OiBudW1iZXI7XG4gICAgc3R1bm5lZDogYm9vbGVhbjtcblxuICAgIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgYWN0aW9uTW9kZTogQUNUSU9OX01PREU7XG4gICAgbGFzdEtleTogc3RyaW5nO1xuICAgIGN1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTjtcblxuICAgIHVwS2V5OiBzdHJpbmc7XG4gICAgZG93bktleTogc3RyaW5nO1xuICAgIGxlZnRLZXk6IHN0cmluZztcbiAgICByaWdodEtleTogc3RyaW5nO1xuICAgIGFjdGlvbktleTogc3RyaW5nO1xuICAgIHNlbGVjdEtleTogc3RyaW5nO1xuICAgIGxhc3RUaW50ZWRUaWxlOiBUaWxlO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG1hcDogVGlsZWRNYXAsIHBsYXllcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuc3R1bm5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xuICAgICAgICB0aGlzLmFjdGlvbk1vZGUgPSBBQ1RJT05fTU9ERS5IQVJWRVNUO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgYmFzZVRleHR1cmU6IEJhc2VUZXh0dXJlID0gVGV4dHVyZS5mcm9tSW1hZ2UoYGRhdGEvYXNzZXRzL3BsYXllcl8ke3BsYXllcklkfS5wbmdgKS5iYXNlVGV4dHVyZTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlQXJyYXk6IFRleHR1cmVbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgMzsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdCA9IG5ldyBUZXh0dXJlKGJhc2VUZXh0dXJlLCBuZXcgUmVjdGFuZ2xlKGNvbHVtbiAqIFBsYXllci5TUFJJVEVfV0lEVEgsIHJvdyAqIFBsYXllci5TUFJJVEVfSEVJR0hULCBQbGF5ZXIuU1BSSVRFX1dJRFRILCBQbGF5ZXIuU1BSSVRFX0hFSUdIVCkpO1xuICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheS5wdXNoKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2godGV4dHVyZUFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IGV4dHJhcy5BbmltYXRlZFNwcml0ZSh0aGlzLmFuaW1hdGlvbnNbRElSRUNUSU9OLkRPV05dKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gRElSRUNUSU9OLkRPV047XG4gICAgICAgIHRoaXMuc3ByaXRlLnggPSB4O1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0geTtcbiAgICAgICAgdGhpcy52eCA9IDA7XG4gICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICB0aGlzLnNwcml0ZS5zY2FsZSA9IFBsYXllci5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1hdGlvblNwZWVkID0gMC4xMztcbiAgICAgICAgdGhpcy5zcHJpdGUubG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG5cbiAgICAgICAgLy9yZWdpc3RlciBrZXkgZXZlbnRzXG4gICAgICAgIGdhbWVNYW5hZ2VyLmtleWJvYXJkTWFuYWdlci5yZWdpc3RlcktleShnYW1lTWFuYWdlci5rZXlib2FyZE1hbmFnZXIuQU5ZX0tFWSwgdGhpcy5rZXlEb3duLCB0aGlzLmtleVVwLCBcInBsYXllclwiICsgcGxheWVySWQpO1xuICAgICAgICBnYW1lTWFuYWdlci51cGRhdGVTY2hlZHVsZXIucmVnaXN0ZXIoXCJwbGF5ZXJcIiArIHBsYXllcklkLCB0aGlzLmRvU3RlcCk7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBESVJFQ1RJT04pIHtcbiAgICAgICAgaWYgKDAgPD0gZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS50ZXh0dXJlcyA9IHRoaXMuYW5pbWF0aW9uc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBESVJFQ1RJT04uU1RPUCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0S2V5cyh1cEtleSwgZG93bktleSwgbGVmdEtleSwgcmlnaHRLZXksIGFjdGlvbktleSwgc2VsZWN0S2V5KSB7XG4gICAgICAgIHRoaXMudXBLZXkgPSB1cEtleTtcbiAgICAgICAgdGhpcy5kb3duS2V5ID0gZG93bktleTtcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gbGVmdEtleTtcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHJpZ2h0S2V5O1xuICAgICAgICB0aGlzLmFjdGlvbktleSA9IGFjdGlvbktleTtcbiAgICAgICAgdGhpcy5zZWxlY3RLZXkgPSBzZWxlY3RLZXk7XG4gICAgfVxuXG4gICAga2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9IHRoaXMubGFzdEtleSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0S2V5ID0gZXZlbnQua2V5O1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5VUCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAtMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5kb3duS2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uRE9XTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudnkgPSAxICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52eCA9IC0xICogUGxheWVyLlBMQVlFUl9TUEVFRDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihESVJFQ1RJT04uUklHSFQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMSAqIFBsYXllci5QTEFZRVJfU1BFRUQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5hY3Rpb25LZXk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubGFzdEtleSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMudXBLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRvd25LZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmxlZnRLZXk6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oRElSRUNUSU9OLlNUT1ApO1xuICAgICAgICAgICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnJpZ2h0S2V5OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKERJUkVDVElPTi5TVE9QKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZ4ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZG9TdGVwID0gKGRlbHRhKSA9PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0dW5uZWQpIHtcblxuICAgICAgICAgICAgLy9DYWxjdWxhdGUgdGhlb3JldGljYWxseSBuZXh0IHBvc2l0aW9uXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHRoaXMuc3ByaXRlLnggKyB0aGlzLnZ4ICogZGVsdGE7XG4gICAgICAgICAgICBsZXQgbmV3WSA9IHRoaXMuc3ByaXRlLnkgKyB0aGlzLnZ5ICogZGVsdGE7XG5cbiAgICAgICAgICAgIC8vR2V0IGFsbCB0aWxlcyB0aGF0IHdvdWxkIGJlIHRvdWNoZWQgYnkgdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKG5ld1ggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgdG86IE1hdGguZmxvb3IoKG5ld1ggKyB0aGlzLnNwcml0ZS53aWR0aCkgLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCB5UmFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihuZXdZIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigobmV3WSArIHRoaXMuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL0NoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGlzIG5ldyBwb3NpdGlvbnMgd291bGQgYmUgaW4gYSBzb2xpZCB0aWxlIG9yIG91dCBvZiB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYmxvY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0geFJhbmdlLmZyb207IHggPD0geFJhbmdlLnRvOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0geVJhbmdlLmZyb207IHkgPD0geVJhbmdlLnRvOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLnRpbGVzW3ldID09IHVuZGVmaW5lZCB8fCB0aGlzLm1hcC50aWxlc1t5XVt4XSA9PSB1bmRlZmluZWQgfHwgKHRoaXMubWFwLnRpbGVzW3ldW3hdLnRpbGVPYmplY3QgJiYgdGhpcy5tYXAudGlsZXNbeV1beF0udGlsZU9iamVjdC5zb2xpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmxvY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSBuZXdZO1xuICAgICAgICAgICAgICAgIC8vVGludCB0aGUgbmV3IGN1cnJlbnRUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy50aW50Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdpdmVJdGVtKGl0ZW1UeXBlOiBJVEVNLCBjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVySWQgKyBcIiBnb3QgXCIgKyBjb3VudCArIFwiIHBpZWNlcyBvZiBcIiArIGl0ZW1UeXBlKTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlbaXRlbVR5cGVdICs9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGFjdGl2ZSBUaWxlLlxuICAgICogVGhpcyBpcyBhbHdheXMgdGhlIG5leHQgdGlsZSBpbiBjdXJyZW50RGlyZWN0aW9uLCB3aGljaCBpcyBub3Qgb2NjdXBpZWQgYnkgdGhlIHBsYXllciBoaW1zZWxmLlxuICAgICogVGhlIGN1cnJlbnQgVGlsZSBtYXkgYmUgdW5kZWZpbmVkLCBpZiBpdCB3b3VsZCBiZSBvdXQgb2YgYm91bmRzLlxuICAgICovXG4gICAgZ2V0Q3VycmVudFRpbGUoKTogVGlsZSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25WZWN0b3I6IFBvaW50O1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudERpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uVVA6IGRpcmVjdGlvblZlY3RvciA9IG5ldyBQb2ludCgwLCAtMSk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6IGRpcmVjdGlvblZlY3RvciA9IG5ldyBQb2ludCgxLCAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOiBkaXJlY3Rpb25WZWN0b3IgPSBuZXcgUG9pbnQoLTEsIDApOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkRPV046IGRpcmVjdGlvblZlY3RvciA9IG5ldyBQb2ludCgwLCAxKTsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3JpZFggPSBNYXRoLmZsb29yKCh0aGlzLnNwcml0ZS54ICsgdGhpcy5zcHJpdGUud2lkdGggLyAyKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKTtcbiAgICAgICAgbGV0IGdyaWRZID0gTWF0aC5mbG9vcigodGhpcy5zcHJpdGUueSArIHRoaXMuc3ByaXRlLmhlaWdodCkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHRpbGVzID0gdGhpcy5tYXAudGlsZXM7XG4gICAgICAgIHdoaWxlICh0aWxlc1tncmlkWV0gJiYgdGlsZXNbZ3JpZFldW2dyaWRYXSAmJiB0aWxlc1tncmlkWV1bZ3JpZFhdLmlzT2NjdXBpZWRCeSgpID09IHRoaXMpIHtcbiAgICAgICAgICAgIGdyaWRYICs9IGRpcmVjdGlvblZlY3Rvci54O1xuICAgICAgICAgICAgZ3JpZFkgKz0gZGlyZWN0aW9uVmVjdG9yLnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGlsZXNbZ3JpZFldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGlsZXNbZ3JpZFldW2dyaWRYXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRpbnRDdXJyZW50VGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbnRlZFRpbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbnRlZFRpbGUuc2V0VGludCgweEZGRkZGRik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmdldEN1cnJlbnRUaWxlKCk7XG4gICAgICAgIGlmIChjdCkge1xuICAgICAgICAgICAgY3Quc2V0VGludCgweENDRkZDQyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0VGludGVkVGlsZSA9IGN0O1xuXG4gICAgfVxuXG4gICAgb25BY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdHVubmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0Q3VycmVudFRpbGUoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3Rpb25Nb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5IQVJWRVNUOlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGN1cnJlbnRUaWxlLnRpbGVPYmplY3QgaW5zdGFuY2VvZiBQbGFudCAmJiBjdXJyZW50VGlsZS50aWxlT2JqZWN0LnJlYWR5KSB8fCBjdXJyZW50VGlsZS50aWxlT2JqZWN0IGluc3RhbmNlb2YgVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUudGlsZU9iamVjdC5vbkhhcnZlc3QodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5QTEFDRV9QVU1QS0lOX1NFRUQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5pc0ZyZWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFB1bXBraW5QbGFudChjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5QTEFDRV9UT01BVE9fU0VFRDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG9tYXRvUGxhbnQoY3VycmVudFRpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OX01PREUuUExBQ0VfVE5UX1BVTVBLSU46XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5pc0ZyZWUoKSAmJiBjdXJyZW50VGlsZS5pc09jY3VwaWVkQnlBbnlQbGF5ZXIoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5LnB1bXBraW5faXRlbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludmVudG9yeS5wdW1wa2luX2l0ZW0tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVG50UHVtcGtpbihjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTl9NT0RFLlBMQUNFX1dBTEw6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5pc0ZyZWUoKSAmJiBjdXJyZW50VGlsZS5pc09jY3VwaWVkQnlBbnlQbGF5ZXIoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Lndvb2RfaXRlbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludmVudG9yeS53b29kX2l0ZW0tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgV2FsbChjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05fTU9ERS5TSE9PVDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5LnRvbWF0b19pdGVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkudG9tYXRvX2l0ZW0tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvbWF0b1Byb2plY3RpbGUuY3JlYXRlVG9tYXRvUHJvamVjdGlsZSh0aGlzLnNwcml0ZS54LCB0aGlzLnNwcml0ZS55LCB0aGlzLmN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSIsImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tIFwiLi9UaWxlT2JqZWN0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBQbGFudCB9IGZyb20gXCIuL1BsYW50XCI7XG5pbXBvcnQgeyBUbnRQdW1wa2luIH0gZnJvbSBcIi4vVG50UHVtcGtpblwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGlsZSBleHRlbmRzIFNwcml0ZSB7XG5cbiAgICBncmlkWDogbnVtYmVyO1xuICAgIGdyaWRZOiBudW1iZXI7XG4gICAgdGlsZU9iamVjdDogVGlsZU9iamVjdDtcbiAgICBtYXA6IFRpbGVkTWFwO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgbWFwOiBUaWxlZE1hcCkge1xuICAgICAgICBzdXBlcih0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5ncmlkWCA9IGdyaWRYO1xuICAgICAgICB0aGlzLmdyaWRZID0gZ3JpZFk7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAvL2NhbGN1bGF0ZSBvd24gcmVuZGVyIGNvb3JkaW5hdGVzXG4gICAgICAgIHRoaXMueCA9IGdyaWRYICogbWFwLmZpbmFsVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnkgPSBncmlkWSAqIG1hcC5maW5hbFRpbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgYWRkVGlsZU9iamVjdChuZXdUaWxlT2JqZWN0OiBUaWxlT2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnJlZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3QgPSBuZXdUaWxlT2JqZWN0O1xuICAgICAgICAgICAgbmV3VGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgICAgIHRoaXMubWFwLnRpbGVPYmplY3RDb250YWluZXIuYWRkQ2hpbGQobmV3VGlsZU9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBhZGQgVGlsZU9iamVjdCB0byBhIFRpbGUgdGhhdCBhbGxyZWFkeSBoYXMgYW4gVGlsZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGl0KGhpdEV2ZW50OiBIaXRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy50aWxlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVPYmplY3Qub25IaXQoaGl0RXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGFudChwbGFudDogUGxhbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uUGxhbnQocGxhbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGFjZShwdW1wa2luOiBUbnRQdW1wa2luKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbGVPYmplY3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYWNpbmcgUHVtcGtpbiBUTlRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhhcnZlc3QoaW5pdGlhdG9yOiBQbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGlsZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0Lm9uSGFydmVzdChpbml0aWF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNGcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlT2JqZWN0ID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3ZXRoZXIgdGhpcyB0aWxlIGlzIG9jY3VwZWQgYnkgYW55IHBsYXllciBhbmQgcmV0dXJucyB0aGUgZmlyc3QgcGxheWVyIHRoYXQgb2NjdXBpZXMgdGhpcyB0aWxlLlxuICAgICAqIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoaXMgdGlsZSBpcyBub3Qgb2NjdXBpZWRcbiAgICAgKi9cbiAgICBpc09jY3VwaWVkQnkoKTpQbGF5ZXJ7XG4gICAgICAgIGZvcihjb25zdCBwbGF5ZXIgb2YgdGhpcy5tYXAucGxheWVycyl7XG4gICAgICAgICAgICAgICAgICAgLy9HZXQgYWxsIHRpbGVzIHRoYXQgd291bGQgYmUgdG91Y2hlZCBieSB0aGUgcGxheWVyXG4gICAgICAgICAgICAgICAgICAgbGV0IHhSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnggLyB0aGlzLm1hcC5maW5hbFRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgICAgIHRvOiBNYXRoLmZsb29yKChwbGF5ZXIuc3ByaXRlLnggKyBwbGF5ZXIuc3ByaXRlLndpZHRoKSAvIHRoaXMubWFwLmZpbmFsVGlsZVdpZHRoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHlSYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogTWF0aC5mbG9vcihwbGF5ZXIuc3ByaXRlLnkgLyB0aGlzLm1hcC5maW5hbFRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICB0bzogTWF0aC5mbG9vcigocGxheWVyLnNwcml0ZS55ICsgcGxheWVyLnNwcml0ZS5oZWlnaHQpIC8gdGhpcy5tYXAuZmluYWxUaWxlSGVpZ2h0KVxuICAgICAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFggPj0geFJhbmdlLmZyb20gJiYgdGhpcy5ncmlkWCA8PSB4UmFuZ2UudG8gJiYgdGhpcy5ncmlkWSA+PSB5UmFuZ2UuZnJvbSAmJiB0aGlzLmdyaWRZIDw9IHlSYW5nZS50byl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdldGhlciB0aGlzIHRpbGUgaXMgb2NjdXBlZCBieSBhbnkgcGxheWVyIGFuZCByZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYW55IHBsYXllciBvbiB0aGlzIHRpbGUuXG4gICAgICovXG4gICAgaXNPY2N1cGllZEJ5QW55UGxheWVyKCk6Ym9vbGVhbntcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5pc09jY3VwaWVkQnkoKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9jY3VwaWVkIGJ5IHBsYXllclwiICsgcGxheWVyLnBsYXllcklkKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGludChjb2xvcjpudW1iZXIpe1xuICAgICAgICB0aGlzLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgaWYoIXRoaXMuaXNGcmVlKCkpe1xuICAgICAgICAgICAgdGhpcy50aWxlT2JqZWN0LnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSBcIi4vVGlsZU9iamVjdFwiO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSBcIi4vU3RhdHVzQmFyXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBIaXRFdmVudCB9IGZyb20gXCIuL0hpdEV2ZW50XCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgVGlsZU9iamVjdCB7XG5cbiAgICBvd25lcjogUGxheWVyO1xuICAgIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xuXG4gICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSwgbW90aGVyOiBUaWxlLCBvd25lcjogUGxheWVyKSB7XG4gICAgICAgIHN1cGVyKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICBvbkhpdChoaXRFdmVudDogSGl0RXZlbnQpIHtcbiAgICB9O1xuXG4gICAgb25EZXN0cm95KGluaXRpYXRvcjogUGxheWVyKSB7XG5cbiAgICB9XG5cblxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgVGlsZWRTcHJpdGVzaGVldCB9IGZyb20gXCIuL1RpbGVkU3ByaXRlc2hlZXRcIjtcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL1Rvd2VyXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IHsgVGlsZU9iamVjdCB9IGZyb20gXCIuL1RpbGVPYmplY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IFdhbGwgfSBmcm9tIFwiLi9XYWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlZE1hcCBleHRlbmRzIENvbnRhaW5lciB7XG5cbiAgICBzdGF0aWMgTUFQX1pPT00gPSA0O1xuICAgIHN0YXRpYyBTUFJJVEVfU0NBTEU6IFBvaW50ID0gbmV3IFBvaW50KFRpbGVkTWFwLk1BUF9aT09NLCBUaWxlZE1hcC5NQVBfWk9PTSk7XG5cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBzcHJpdGVzaGVldDogVGlsZWRTcHJpdGVzaGVldDtcbiAgICBpc1BhdXNlZDogYm9vbGVhbjtcbiAgICBmaW5hbFRpbGVXaWR0aDogbnVtYmVyO1xuICAgIGZpbmFsVGlsZUhlaWdodDogbnVtYmVyO1xuICAgIHRpbGVzOiBUaWxlW11bXTtcbiAgICBncmlkV2lkdGg6IG51bWJlcjtcbiAgICBncmlkSGVpZ2h0OiBudW1iZXI7XG4gICAgdGlsZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHBsYXllckNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHRpbGVPYmplY3RDb250YWluZXI6IENvbnRhaW5lcjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50aWxlT2JqZWN0Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGlsZU9iamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wbGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2V0TWFwT2JqZWN0UHJvcGVydHkobWFwT2JqZWN0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgbWFwT2JqZWN0LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL0xvYWRzIHRoZSBtYXAgd2l0aCBzcHJpdGVzaGVldC4gTGFzdCBwYXJhbWV0ZXIgaXMgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHBhcnNpbmcgdGhlIG1hcCB3aXRoIHRoZSBuZXcgcGFyc2VkIG1hcCBhcyBwYXJhbWV0ZXJcbiAgICBzdGF0aWMgbG9hZE1hcChtYXBQYXRoOiBzdHJpbmcsIHNwcml0ZXNoZWV0OiBUaWxlZFNwcml0ZXNoZWV0LCBjYWxsYmFjazogRnVuY3Rpb24pIHtcblxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgVGlsZWRNYXAoKTtcblxuICAgICAgICAvL0xvYWQgU3ByaXRlc2hlZXRcbiAgICAgICAgbGV0IFNQUklURV9TQ0FMRTogUG9pbnQgPSBuZXcgUG9pbnQoVGlsZWRNYXAuTUFQX1pPT00sIFRpbGVkTWFwLk1BUF9aT09NKTtcbiAgICAgICAgbWFwLmZpbmFsVGlsZVdpZHRoID0gc3ByaXRlc2hlZXQudGlsZVdpZHRoICogU1BSSVRFX1NDQUxFLng7XG4gICAgICAgIG1hcC5maW5hbFRpbGVIZWlnaHQgPSBzcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogU1BSSVRFX1NDQUxFLnk7XG4gICAgICAgIG1hcC5zcHJpdGVzaGVldCA9IHNwcml0ZXNoZWV0O1xuXG4gICAgICAgIC8vTG9hZCBNYXAgYW5kIFBhcnNlIGl0XG4gICAgICAgICQuZ2V0SlNPTihtYXBQYXRoLCB7fSwgZnVuY3Rpb24gKG1hcERhdGEpIHtcblxuICAgICAgICAgICAgLy9CdWlsZCBhbGwgVGlsZUxheWVycyBmaXJzdFxuICAgICAgICAgICAgZm9yIChjb25zdCB0bCBvZiBtYXBEYXRhLmxheWVycykge1xuICAgICAgICAgICAgICAgIGlmICh0bC50eXBlID09IFwidGlsZWxheWVyXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBtYXAuZ3JpZFdpZHRoID0gdGwud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5ncmlkSGVpZ2h0ID0gdGwuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vSW5pdCBtYXAncyB0aWxlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICBtYXAudGlsZXMgPSBuZXcgQXJyYXkobWFwLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnRpbGVzW2ldID0gbmV3IEFycmF5KG1hcC5ncmlkV2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9HZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCB0aWxlIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGwuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGwud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcm93ICogdGwud2lkdGggKyBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRsLmRhdGFbaW5kZXhdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHNwcml0ZXNoZWV0LmdldFRleHR1cmUodGwuZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUaWxlID0gbmV3IFRpbGUodGV4dHVyZSwgcm93LCBjb2x1bW4sIG1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlKG5ld1RpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0l0ZXJhdGUgdGhyb3VnaCBPYmplY3QgTGF5ZXJzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRsIG9mIG1hcERhdGEubGF5ZXJzKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGwudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIGFsbCBwbGF5ZXJzIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY28gb2YgdGwub2JqZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fXyAgXyAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfXyBcXHwgfCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgfF9fKSB8IHwgX18gXyBfICAgXyAgX19fIF8gX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8ICBfX18vfCB8LyBfYCB8IHwgfCB8LyBfIFxcICdfX3xcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgIHwgfCAgICB8IHwgKF98IHwgfF98IHwgIF9fLyB8ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X3wgICAgfF98XFxfXyxffFxcX18sIHxcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBfXy8gfCAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICB8X19fLyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY28udHlwZSA9PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLnJvdW5kKGNvLnggKiBTUFJJVEVfU0NBTEUueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSAoTWF0aC5yb3VuZChjby55KSAtIGNvLmhlaWdodCkgKiBTUFJJVEVfU0NBTEUueTsgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVySWQ6IG51bWJlciA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJwbGF5ZXJJZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIG1hcCwgcGxheWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRQbGF5ZXIobmV3UGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIFNwcml0ZXMgZm9yIGVhY2ggb2JqZWN0IHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjbyBvZiB0bC5vYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICBfX19fX19fICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgfF9fICAgX198ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICB8IHwgX19fX18gICAgICBfX19fXyBfIF9fIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfC8gXyBcXCBcXCAvXFwgLyAvIF8gXFwgJ19ffFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCAoXykgXFwgViAgViAvICBfXy8gfCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHxffFxcX19fLyBcXF8vXFxfLyBcXF9fX3xffCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjby50eXBlID09IFwidG93ZXJcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGVzaGVldC5nZXRUZXh0dXJlKGNvLmdpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3duZXJJZCA9IG1hcC5nZXRNYXBPYmplY3RQcm9wZXJ0eShjbywgXCJvd25lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lciA9IG1hcC5wbGF5ZXJzW293bmVySWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG93ZXIgPSBuZXcgVG93ZXIodGV4dHVyZSwgbW90aGVyLCBvd25lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VG93ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIF9fX19fX18gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICB8X18gICBfX3wgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfF8gX18gX19fICBfX18gXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfCB8ICdfXy8gXyBcXC8gXyBcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgIHwgfCB8IHwgIF9fLyAgX18vXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgfF98X3wgIFxcX19ffFxcX19ffFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY28udHlwZSA9PSBcInRyZWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc3ByaXRlc2hlZXQuZ2V0VGV4dHVyZShjby5naWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdGhlciA9IG1hcC5nZXRUaWxlTmVhcmVzdFRvKGNvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKHRleHR1cmUsIG1vdGhlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmFkZFRpbGVPYmplY3QobmV3VHJlZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIF9fICAgICAgICAgIF9fICAgXyBfIFxuICAgICAgICAgICAgICAgICAgICAgICAgICogICAgIFxcIFxcICAgICAgICAvIC8gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgIFxcIFxcICAvXFwgIC8gL18gX3wgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICBcXCBcXC8gIFxcLyAvIF9gIHwgfCB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgXFwgIC9cXCAgLyAoX3wgfCB8IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgXFwvICBcXC8gXFxfXyxffF98X3xcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjby50eXBlID09IFwid2FsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW90aGVyID0gbWFwLmdldFRpbGVOZWFyZXN0VG8oY28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5hZGRUaWxlT2JqZWN0KG5ldyBXYWxsKG1vdGhlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9DYWxsIG9uRmluaXNoIENhbGxiYWNrXG4gICAgICAgICAgICBjYWxsYmFjayhtYXApO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xuICAgICAgICAvL3BsYXllci5zcHJpdGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG4gICAgICAgIHRoaXMucGxheWVyc1twbGF5ZXIucGxheWVySWRdID0gcGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllckNvbnRhaW5lci5hZGRDaGlsZChwbGF5ZXIuc3ByaXRlKTtcbiAgICB9XG5cbiAgICBhZGRUaWxlT2JqZWN0KHRpbGVPYmplY3Q6IFRpbGVPYmplY3QpIHtcbiAgICAgICAgdGlsZU9iamVjdC5zY2FsZSA9IFRpbGVkTWFwLlNQUklURV9TQ0FMRTtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb250YWluZXIuYWRkQ2hpbGQodGlsZU9iamVjdCk7XG4gICAgfVxuXG4gICAgYWRkVGlsZSh0aWxlOiBUaWxlKSB7XG4gICAgICAgIHRpbGUueCA9IHRpbGUuZ3JpZFggKiB0aGlzLnNwcml0ZXNoZWV0LnRpbGVXaWR0aCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICB0aWxlLnkgPSB0aWxlLmdyaWRZICogdGhpcy5zcHJpdGVzaGVldC50aWxlSGVpZ2h0ICogVGlsZWRNYXAuU1BSSVRFX1NDQUxFLnk7XG4gICAgICAgIHRpbGUuc2NhbGUgPSBUaWxlZE1hcC5TUFJJVEVfU0NBTEU7XG5cbiAgICAgICAgdGhpcy50aWxlc1t0aWxlLmdyaWRZXVt0aWxlLmdyaWRYXSA9IHRpbGU7XG4gICAgICAgIHRoaXMudGlsZUNvbnRhaW5lci5hZGRDaGlsZCh0aWxlKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE9iamVjdENvb3JkaW5hdGVzKG1hcE9iamVjdDogUmVjdGFuZ2xlKSB7XG5cbiAgICAgICAgLy9hbiBPYmplY3QgY2FuIGJlIHBsYWNlZCBcImJldHdlZW5cIiB0aWxlcyBpbiB0aWxlZCBtYXAgZWRpdG9yLiBCdXQgZXZudHMgY2FuIGJlIHRyaWdnZXJlZCBvbmx5IGZyb20gd2hvbGUgdGlsZXMuIFNvIHRoZSBvYmVqY2N0cyBwb3NpdGlvbiBpcyBtYXBwZWQgdG8gdGhlIG5lYXJlc3QgVGlsZVxuXG4gICAgICAgIGxldCBvcmlnaW5hbFggPSBtYXBPYmplY3QueCAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS54O1xuICAgICAgICBsZXQgeFRpbGVzID0gb3JpZ2luYWxYIC8gdGhpcy5maW5hbFRpbGVXaWR0aDtcbiAgICAgICAgeFRpbGVzID0gTWF0aC5yb3VuZCh4VGlsZXMpO1xuXG4gICAgICAgIGxldCBvcmlnaW5hbFkgPSAobWFwT2JqZWN0LnkgLSBtYXBPYmplY3QuaGVpZ2h0KSAqIFRpbGVkTWFwLlNQUklURV9TQ0FMRS55OyAgLy8gLWNvLmhlaWdodCBiZWNhdXNlIHRpbGVkIHVzZXMgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBmb3IgY29vcmRpbmF0ZXMgYW5kIFBJWEkgdXNlcyB0aGUgdG9wLWxlZnQgY29ybmVyICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IHlUaWxlcyA9IG9yaWdpbmFsWSAvIHRoaXMuZmluYWxUaWxlSGVpZ2h0O1xuICAgICAgICB5VGlsZXMgPSBNYXRoLnJvdW5kKHlUaWxlcyk7XG5cbiAgICAgICAgcmV0dXJuIHsgZ3JpZFg6IHhUaWxlcywgZ3JpZFk6IHlUaWxlcyB9O1xuICAgIH1cblxuICAgIGdldFRpbGVOZWFyZXN0VG8obWFwT2JqZWN0OiBSZWN0YW5nbGUpOiBUaWxlIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRPYmplY3RDb29yZGluYXRlcyhtYXBPYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlc1twb3MuZ3JpZFldW3Bvcy5ncmlkWF07XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkTWFuYWdlciB7XG5cbiAgICAga2V5VXBzID0ge307XG4gICAgIGtleURvd25zID0ge307XG4gICAgIEFOWV9LRVkgPSBcImFueV9rZXlcIjtcblxuICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uS2V5VXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuICAgIH1cblxuICAgICBvbktleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleVVwcykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMua2V5VXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5ID09IHRoaXMuQU5ZX0tFWSB8fCBldmVudC5rZXkgPT0gZWxlbWVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQub25LZXlVcCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleVVwKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmtleURvd25zKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5rZXlEb3duc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmtleSA9PSB0aGlzLkFOWV9LRVkgfHwgZXZlbnQua2V5ID09IGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uS2V5RG93biA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbktleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICByZWdpc3RlcktleShrZXksIG9uS2V5RG93biwgb25LZXlVcCwgaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLmtleURvd25zW2lkZW50aWZpZXJdID0geyBrZXk6IGtleSwgb25LZXlEb3duOiBvbktleURvd24gfTtcbiAgICAgICAgdGhpcy5rZXlVcHNbaWRlbnRpZmllcl0gPSB7IGtleToga2V5LCBvbktleVVwOiBvbktleVVwIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXJLZXkoaWRlbnRpZmllcikge1xuICAgICAgICBkZWxldGUgdGhpcy5rZXlEb3duc1tpZGVudGlmaWVyXTtcbiAgICAgICAgZGVsZXRlIHRoaXMua2V5VXBzW2lkZW50aWZpZXJdO1xuICAgIH1cblxuXG5cbn1cbiIsImV4cG9ydCBjbGFzcyBVcGRhdGVTY2hlZHVsZXIge1xuXG4gICAgIGNsaWVudHM6IG9iamVjdCA9IHt9O1xuICAgICBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgIHJlZ2lzdGVyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmNsaWVudHNbaWRdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgIHVucmVnaXN0ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5jbGllbnRzW2lkXTtcbiAgICB9XG5cbiAgICAgZG9TdGVwID0gKGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY2xpZW50cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2FsbGJhY2sgPSB0aGlzLmNsaWVudHNbaV0uY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY3VycmVudENhbGxiYWNrKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IFRpbGVkU3ByaXRlc2hlZXQgfSBmcm9tIFwiLi9UaWxlZFNwcml0ZXNoZWV0XCI7XG5pbXBvcnQgeyBUaWxlZE1hcCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XG5pbXBvcnQgeyBLZXlib2FyZE1hbmFnZXIgfSBmcm9tIFwiLi9LZXlib2FyZE1hbmFnZXJcIjtcbmltcG9ydCB7IFVwZGF0ZVNjaGVkdWxlciB9IGZyb20gXCIuL1VwZGF0ZVNjaGVkdWxlclwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24sIEFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gXCJwaXhpLmpzXCI7XG5cblxuXG5jb25zdCBBUFBfV0lEVEggPSA1MTI7XG5jb25zdCBBUFBfSEVJR0hUID0gNTEyO1xuXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIge1xuXG4gICAgc3ByaXRlU2hlZXQ6IFRpbGVkU3ByaXRlc2hlZXQ7XG5cblxuICAgIG1hcDogVGlsZWRNYXA7XG5cbiAgICBwaXhpQXBwOiBBcHBsaWNhdGlvbjtcblxuICAgIHVwZGF0ZVNjaGVkdWxlcjogVXBkYXRlU2NoZWR1bGVyO1xuICAgIGtleWJvYXJkTWFuYWdlcjogS2V5Ym9hcmRNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRNYW5hZ2VyID0gbmV3IEtleWJvYXJkTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjaGVkdWxlciA9IG5ldyBVcGRhdGVTY2hlZHVsZXIoKTtcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBUaWxlZFNwcml0ZXNoZWV0KFwiZGF0YS9hc3NldHMvc3ByaXRlc2hlZXQucG5nXCIsIDEsIDE2LCAxNiwgMzEsIDU3KSAvL0tlbm55IFNwcml0ZXNoZWV0IHNlZSBkYXRhL21hcHMvS2VubmV5IFJQRyBUaWxlcy50c3hcbiAgICB9XG5cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy9DcmVhdGUgUGl4aSBzdHVmZlxuICAgICAgICAvL0NyZWF0ZSBhIFBpeGkgQXBwbGljYXRpb25cbiAgICAgICAgY2xhc3MgUGl4aU9wdGlvbnMgaW1wbGVtZW50cyBBcHBsaWNhdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHVibGljIHdpZHRoLCBwdWJsaWMgaGVpZ2h0KSB7IH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaXhpT3B0aW9ucyA9IG5ldyBQaXhpT3B0aW9ucyhBUFBfV0lEVEgsIEFQUF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMucGl4aUFwcCA9IG5ldyBBcHBsaWNhdGlvbihwaXhpT3B0aW9ucyk7XG5cbiAgICAgICAgLy9BZGQgdGhlIGNhbnZhcyB0aGF0IFBpeGkgYXV0b21hdGljYWxseSBjcmVhdGVkIGZvciB5b3UgdG8gdGhlIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgLy9TdGlsbCBuZWNjZXNhcnJ5Pz8/P1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucGl4aUFwcC52aWV3KTtcblxuICAgICAgICAvL1JlZ2lzdGVyIFVwZGF0ZSBzY2hlZHVsZXJcbiAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5hZGQodGhpcy51cGRhdGVTY2hlZHVsZXIuZG9TdGVwKTtcblxuXG4gICAgICAgIFRpbGVkTWFwLmxvYWRNYXAoXCJkYXRhL21hcHMvbWFwMS5qc29uXCIsIHRoaXMuc3ByaXRlU2hlZXQsIChwYXJzZWRNYXA6IFRpbGVkTWFwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IHBhcnNlZE1hcDtcbiAgICAgICAgICAgIHRoaXMucGl4aUFwcC5zdGFnZS5hZGRDaGlsZChwYXJzZWRNYXApO1xuICAgICAgICAgICAgdGhpcy5waXhpQXBwLnRpY2tlci5zdGFydCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gcGFyc2VkTWFwLnBsYXllcnM7XG4gICAgICAgICAgICBwbGF5ZXJzWzBdLnNldEtleXMoXCJBcnJvd1VwXCIsIFwiQXJyb3dEb3duXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiLCBcIm1cIiwgXCJuXCIpO1xuICAgICAgICAgICAgcGxheWVyc1sxXS5zZXRLZXlzKFwid1wiLCBcInNcIiwgXCJhXCIsIFwiZFwiLCBcInhcIiwgXCJ5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IHtHYW1lTWFuYWdlcn0gZnJvbSBcIi4vbW9kZWwvR2FtZU1hbmFnZXJcIlxuXG5jb25zdCBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpO1xuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XG5cbmV4cG9ydCB7Z2FtZU1hbmFnZXJ9O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9