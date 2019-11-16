import { TiledMap } from "./TiledMap";
import { Point, extras, Texture, BaseTexture, Rectangle } from "pixi.js";
import { gameManager } from "./../index"

class Inventory {
    tomato_item: number = 0;
    pumpkin_item: number = 0;
}

export class Player {


    static UP: number = 0;
    static RIGHT: number = 1;
    static DOWN: number = 2;
    static LEFT: number = 3;
    static STOP: number = 4;

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
    stunned: boolean = false;

    inventory: Inventory;

    actionMode: string;
    lastKey: string;
    upKey: string;
    downKey: string;
    leftKey: string;
    rightKey: string;
    actionKey: string;
    selectKey: string;

    constructor(x: number, y: number, map: TiledMap, playerId: number) {
        this.map = map;
        this.playerId = playerId;
        this.inventory = new Inventory();
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

        this.sprite = new extras.AnimatedSprite(this.animations[Player.DOWN]);
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

    changeDirection(direction: number) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == Player.STOP) {
            this.sprite.stop();
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

    keyDown = (event) => {
        if (event.key != this.lastKey) {
            this.lastKey = event.key;
            switch (event.key) {
                case this.upKey:
                    this.changeDirection(Player.UP);
                    this.vy = -1 * Player.PLAYER_SPEED;
                    break;
                case this.downKey:
                    this.changeDirection(Player.DOWN);
                    this.vy = 1 * Player.PLAYER_SPEED;
                    break;
                case this.leftKey:
                    this.changeDirection(Player.LEFT);
                    this.vx = -1 * Player.PLAYER_SPEED;
                    break;
                case this.rightKey:
                    this.changeDirection(Player.RIGHT);
                    this.vx = 1 * Player.PLAYER_SPEED;
                    break;

            }
        }
    }

    keyUp = (event) => {
        this.lastKey = "";
        switch (event.key) {
            case this.upKey:
                this.changeDirection(Player.STOP);
                this.vy = 0;
                break;
            case this.downKey:
                this.changeDirection(Player.STOP);
                this.vy = 0;
                break;
            case this.leftKey:
                this.changeDirection(Player.STOP);
                this.vx = 0;
                break;
            case this.rightKey:
                this.changeDirection(Player.STOP);
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
            }
        }

    }

    giveItem(itemType: string, count: number) {
        console.log(this.playerId + " got " + count + " pieces of " + itemType);
        this.inventory[itemType] += count;
    }

}