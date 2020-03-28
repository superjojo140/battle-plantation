import { Tree } from './Tree';
import { TiledMap } from "./TiledMap";
import { Point, extras } from "pixi.js";
import { gameManager } from "./../index"
import { ITEM } from "./Items";
import { Plant } from "./Plant";
import { TntPumpkin } from './TntPumpkin';
import { TomatoProjectile } from './TomatoProjectile';
import { PumpkinPlant } from './PumpkinPlant';
import { TomatoPlant } from './TomatoPlant';
import { Wall } from './Wall';
import { Tile } from './Tile';


export class Inventory {
    tomato_item: number = 0;
    pumpkin_item: number = 0;
    wood_item: number = 0;
}


export enum DIRECTION { UP = "up", RIGHT = "right", DOWN = "down", LEFT = "left", STOP = "stop" };
export enum ACTION_MODE { HARVEST, PLACE_PUMPKIN_SEED, PLACE_TOMATO_SEED, PLACE_TNT_PUMPKIN, PLACE_WALL, SHOOT };

export class Player {


    static SPRITE_WIDTH: number = 96 / 3;
    static SPRITE_HEIGHT: number = 144 / 4;
    static SPRITE_SCALE: Point = new Point(1.5, 1.5);
    static PLAYER_SPEED = 4;

    playerId: number;
    //A hex value of a color all player's sprites are tinted with
    color:number = 0xFFFFFF;
    map: TiledMap;

    sprite: extras.AnimatedSprite;
    animations;
    vx: number;
    vy: number;

    //Player ignores doStep and onAction Events if stunned
    stunned: boolean;

    inventory: Inventory;

    actionMode: ACTION_MODE;
    lastKey: string;
    currentDirection: DIRECTION;

    upKey: string;
    downKey: string;
    leftKey: string;
    rightKey: string;
    actionKey: string;
    selectKey: string;
    lastTintedTile: Tile;

    constructor(x: number, y: number, map: TiledMap, playerId: number) {
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory();
        this.actionMode = ACTION_MODE.HARVEST;

        this.loadAnimations();

        this.sprite = new extras.AnimatedSprite(this.animations.walk[DIRECTION.DOWN]);
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

    private loadAnimations() {
        const animations = {
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
        }

        for (const stateName in animations) {
            for (const subStateName in animations[stateName]) {

                const numberOfFrames = animations[stateName][subStateName] - 1;
                let currentFramesArray = [];

                for (let i = 0; i < numberOfFrames; i++) {
                    const textureName = `player_${stateName}_${subStateName}_${i}`;
                    const texture = gameManager.atlasSpritesheet.getTexture(textureName);
                    currentFramesArray.push(texture);
                }

                animations[stateName][subStateName] = currentFramesArray;
            }
        }

        this.animations = animations;
    }

    changeDirection(direction: DIRECTION) {
        if (direction == DIRECTION.STOP) {
            this.sprite.stop();
        }
        else {
            this.sprite.textures = this.animations.walk[direction];
            this.sprite.play();
            this.currentDirection = direction;
        }
    }

    setKeys(upKey, downKey, leftKey, rightKey, actionKey, selectKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.selectKey = selectKey;
    }

    setColor(color:number){
        this.color = color;
        this.sprite.tint = color;
    }

    keyDown = (event) => {
        if (event.key != this.lastKey) {
            this.lastKey = event.key;
            switch (event.key) {
                case this.upKey:
                    this.changeDirection(DIRECTION.UP);
                    this.vy = -1 * Player.PLAYER_SPEED;
                    break;
                case this.downKey:
                    this.changeDirection(DIRECTION.DOWN);
                    this.vy = 1 * Player.PLAYER_SPEED;
                    break;
                case this.leftKey:
                    this.changeDirection(DIRECTION.LEFT);
                    this.vx = -1 * Player.PLAYER_SPEED;
                    break;
                case this.rightKey:
                    this.changeDirection(DIRECTION.RIGHT);
                    this.vx = 1 * Player.PLAYER_SPEED;
                    break;
                case this.actionKey:
                    this.onAction();
                    break;

            }
        }
    }

    keyUp = (event) => {
        this.lastKey = "";
        switch (event.key) {
            case this.upKey:
                this.changeDirection(DIRECTION.STOP);
                this.vy = 0;
                break;
            case this.downKey:
                this.changeDirection(DIRECTION.STOP);
                this.vy = 0;
                break;
            case this.leftKey:
                this.changeDirection(DIRECTION.STOP);
                this.vx = 0;
                break;
            case this.rightKey:
                this.changeDirection(DIRECTION.STOP);
                this.vx = 0;
                break;
        }
    }


    doStep = (delta) => {

        if (!this.stunned) {

            //Calculate theoretically next position
            let newX = this.sprite.x + this.vx * delta;
            let newY = this.sprite.y + this.vy * delta;

            //Get all tiles that would be touched by the player
            let xRange = {
                from: Math.floor(newX / this.map.finalTileWidth),
                to: Math.floor((newX + this.sprite.width) / this.map.finalTileWidth)
            };

            let yRange = {
                from: Math.floor(newY / this.map.finalTileHeight),
                to: Math.floor((newY + this.sprite.height) / this.map.finalTileHeight)
            };

            //Check if at least one of this new positions would be in a solid tile or out of the map
            let blocked = false;

            for (let x = xRange.from; x <= xRange.to; x++) {
                for (let y = yRange.from; y <= yRange.to; y++) {
                    if (this.map.tiles[y] == undefined || this.map.tiles[y][x] == undefined || (this.map.tiles[y][x].tileObject && this.map.tiles[y][x].tileObject.solid)) {
                        blocked = true;
                    }
                }
            }

            if (blocked == false) {
                this.sprite.x = newX;
                this.sprite.y = newY;
                //Tint the new currentTile
                this.tintCurrentTile();
            }


        }

    }

    giveItem(itemType: ITEM, count: number) {
        console.log(this.playerId + " got " + count + " pieces of " + itemType);
        this.inventory[itemType] += count;
    }

    /**
    * Returns the currently active Tile.
    * This is always the next tile in currentDirection, which is not occupied by the player himself.
    * The current Tile may be undefined, if it would be out of bounds.
    */
    getCurrentTile(): Tile {
        let directionVector: Point;
        switch (this.currentDirection) {
            case DIRECTION.UP: directionVector = new Point(0, -1); break;
            case DIRECTION.RIGHT: directionVector = new Point(1, 0); break;
            case DIRECTION.LEFT: directionVector = new Point(-1, 0); break;
            case DIRECTION.DOWN: directionVector = new Point(0, 1); break;
        }

        let gridX = Math.floor((this.sprite.x + this.sprite.width / 2) / this.map.finalTileWidth);
        let gridY = Math.floor((this.sprite.y + this.sprite.height) / this.map.finalTileHeight);

        const tiles = this.map.tiles;
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

    }

    tintCurrentTile() {
        if (this.lastTintedTile) {
            this.lastTintedTile.setTint(0xFFFFFF);
        }
        const ct = this.getCurrentTile();
        if (ct) {
            ct.setTint(this.color);
        }
        this.lastTintedTile = ct;

    }

    onAction = () => {
        if (!this.stunned) {
            const currentTile = this.getCurrentTile();
            switch (this.actionMode) {
                case ACTION_MODE.HARVEST:
                    if ((currentTile.tileObject instanceof Plant && currentTile.tileObject.ready) || currentTile.tileObject instanceof Tree) {
                        currentTile.tileObject.onHarvest(this);
                    }
                    break;
                case ACTION_MODE.PLACE_PUMPKIN_SEED:
                    if (currentTile.isFree()) {
                        new PumpkinPlant(currentTile);
                    }
                    break;
                case ACTION_MODE.PLACE_TOMATO_SEED:
                    if (currentTile.isFree()) {
                        new TomatoPlant(currentTile);
                    }
                    break;
                case ACTION_MODE.PLACE_TNT_PUMPKIN:
                    if (currentTile.isFree() && currentTile.isOccupiedByAnyPlayer() == false) {
                        if (this.inventory.pumpkin_item > 0) {
                            this.inventory.pumpkin_item--;
                            new TntPumpkin(currentTile);
                        }

                    }
                    break;
                case ACTION_MODE.PLACE_WALL:
                    if (currentTile.isFree() && currentTile.isOccupiedByAnyPlayer() == false) {
                        if (this.inventory.wood_item > 0) {
                            this.inventory.wood_item--;
                            new Wall(currentTile);
                        }
                    }
                    break;
                case ACTION_MODE.SHOOT:
                    if (this.inventory.tomato_item > 0) {
                        this.inventory.tomato_item--;
                        TomatoProjectile.createTomatoProjectile(this.sprite.x, this.sprite.y, this.currentDirection);
                    }
                    break;
            }
        }
    };

}