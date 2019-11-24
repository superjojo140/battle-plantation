import { Tree } from './Tree';
import { TiledMap } from "./TiledMap";
import { Point, extras, Texture, BaseTexture, Rectangle } from "pixi.js";
import { gameManager } from "./../index"
import { ITEM } from "./Items";
import { Plant } from "./Plant";
import { TntPumpkin } from './TntPumpkin';
import { TomatoProjectile } from './TomatoProjectile';
import { PumpkinPlant } from './PumpkinPlant';
import { TomatoPlant } from './TomatoPlant';
import { Wall } from './Wall';


export class Inventory {
    tomato_item: number = 0;
    pumpkin_item: number = 0;
    wood_item:number = 0;
}

export enum DIRECTION { UP, RIGHT, DOWN, LEFT, STOP };
export enum ACTION_MODE { HARVEST, PLACE_PUMPKIN_SEED, PLACE_TOMATO_SEED, PLACE_TNT_PUMPKIN, PLACE_WALL, SHOOT };

export class Player {


    static SPRITE_WIDTH: number = 96 / 3;
    static SPRITE_HEIGHT: number = 144 / 4;
    static SPRITE_SCALE: Point = new Point(1.5, 1.5);
    static PLAYER_SPEED = 4;

    playerId: number;
    map: TiledMap;

    sprite: extras.AnimatedSprite;
    animations: Texture[][];
    vx: number;
    vy: number;
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

    constructor(x: number, y: number, map: TiledMap, playerId: number) {
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory();
        this.actionMode = ACTION_MODE.HARVEST;

        this.animations = [];
        let baseTexture: BaseTexture = Texture.fromImage(`data/assets/player_${playerId}.png`).baseTexture;
        for (let row = 0; row < 4; row++) {
            let textureArray: Texture[] = [];
            for (let column = 0; column < 3; column++) {
                let t = new Texture(baseTexture, new Rectangle(column * Player.SPRITE_WIDTH, row * Player.SPRITE_HEIGHT, Player.SPRITE_WIDTH, Player.SPRITE_HEIGHT));
                textureArray.push(t);
            }
            this.animations.push(textureArray);
        }

        this.sprite = new extras.AnimatedSprite(this.animations[DIRECTION.DOWN]);
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

    changeDirection(direction: DIRECTION) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == DIRECTION.STOP) {
            this.sprite.stop();
        }
        this.currentDirection = direction;
    }

    setKeys(upKey, downKey, leftKey, rightKey, actionKey, selectKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.selectKey = selectKey;
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
                this.getCurrentTile().tint = 0xFFFFFF;
                this.sprite.x = newX;
                this.sprite.y = newY;
                this.getCurrentTile().tint = 0x00FF00;
            }


        }

    }

    giveItem(itemType: ITEM, count: number) {
        console.log(this.playerId + " got " + count + " pieces of " + itemType);
        this.inventory[itemType] += count;
    }

    getCurrentTile() {
        let xTiles = this.sprite.x / this.map.finalTileWidth;
        xTiles = Math.round(xTiles);

        let yTiles = this.sprite.y / this.map.finalTileHeight;
        yTiles = Math.round(yTiles);

        return this.map.tiles[yTiles][xTiles];
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
                    if (currentTile.tileObject === undefined) {
                        new PumpkinPlant(currentTile);
                    }
                    break;
                case ACTION_MODE.PLACE_TOMATO_SEED:
                    if (currentTile.tileObject === undefined) {
                        new TomatoPlant(currentTile);
                    }
                    break;
                case ACTION_MODE.PLACE_TNT_PUMPKIN:
                    if (currentTile.tileObject === undefined) {
                        new TntPumpkin(currentTile);
                    }
                    break;
                case ACTION_MODE.PLACE_WALL:
                    if (currentTile.tileObject === undefined) {
                        if (this.inventory.wood_item > 0) {
                            this.inventory.wood_item--;
                            new Wall(currentTile);
                            console.warn("Please invent something to get out of this stupid wall!");
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