import { TiledMap } from "./TiledMap";
import { Point, extras, Texture } from "pixi.js";
import { gameManager } from "./../index"
import { ITEM } from "./Items";
import { TomatoProjectile } from './TomatoProjectile';
import { Tile } from './Tile';
import { Balancing } from './Balancing';
import { HitEvent } from './HitEvent';
import { Inventory } from "./Inventory";
import { UpdateScheduler } from "./UpdateScheduler";

export enum DIRECTION { UP = "up", RIGHT = "right", DOWN = "down", LEFT = "left", STOP = "stop" };

export class Player {

    static SPRITE_WIDTH: number = 96 / 3;
    static SPRITE_HEIGHT: number = 144 / 4;
    static SPRITE_SCALE: Point = new Point(1.5, 1.5);

    playerId: number;
    //A hex value of a color all player's sprites are tinted with
    color: number = 0xFFFFFF;
    map: TiledMap;

    sprite: extras.AnimatedSprite;
    animations;
    vx: number;
    vy: number;

    //Player ignores doStep and onAction Events if stunned
    stunned: boolean;

    inventory: Inventory;

    placeMode: ITEM;
    lastKey: string;
    /** Saves the current direction (STOP will not be saved here, in this case the value is the last direction before STOP) */
    currentDirection: DIRECTION;


    upKey: string;
    downKey: string;
    leftKey: string;
    rightKey: string;
    actionKey: string;
    selectKey: string;
    placeKey: string;
    lastTintedTile: Tile;

    constructor(x: number, y: number, map: TiledMap, playerId: number) {
        this.map = map;
        this.stunned = false;
        this.playerId = playerId;
        this.inventory = new Inventory();
        this.placeMode = ITEM.TOMATO_PLANT;

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

                const numberOfFrames = animations[stateName][subStateName];
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

    switchPlaceMode() {
        switch (this.placeMode) {
            case ITEM.PUMPKIN_PLANT: this.placeMode = ITEM.TNT_PUMPKIN; break;
            case ITEM.TNT_PUMPKIN: this.placeMode = ITEM.TOMATO_PLANT; break;
            case ITEM.TOMATO_PLANT: this.placeMode = ITEM.TOMATO_PROJECTILE; break;
            case ITEM.TOMATO_PROJECTILE: this.placeMode = ITEM.WALL; break;
            case ITEM.WALL: this.placeMode = ITEM.HAND; break;
            case ITEM.HAND: this.placeMode = ITEM.PUMPKIN_PLANT; break;
        }
        console.log(`Changed PlaceMode. New mode is: ${this.placeMode}`);
    }

    changeDirection(direction: DIRECTION) {
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
    }

    async playAnimation(state: string) {
        const frames: Texture[] = this.animations[state][this.currentDirection];

        this.stunned = true;
        this.sprite.stop()

        //Play animation forwards
        for (const frame of frames) {
            this.sprite.texture = frame;
            await UpdateScheduler.wait(50);
        }

        //Wait a moment
        await UpdateScheduler.wait(80);

        //Play animation backwards
        for (let i = frames.length - 1; i >= 0; i--) {
            this.sprite.texture = frames[i];
            await UpdateScheduler.wait(50);
        }


        //Restore last direction's texture
        this.stunned = false;
        this.changeDirection(this.currentDirection);
        this.sprite.stop();
    }

    setKeys(upKey, downKey, leftKey, rightKey, actionKey, selectKey, placeKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.actionKey = actionKey;
        this.selectKey = selectKey;
        this.placeKey = placeKey;
    }

    setColor(color: number) {
        this.color = color;
        this.sprite.tint = color;
    }

    keyDown = (event) => {
        if (event.key != this.lastKey && !this.stunned) {
            this.lastKey = event.key;
            switch (event.key) {
                case this.upKey:
                    this.changeDirection(DIRECTION.UP);
                    this.vy = -1 * Balancing.player.speed;
                    break;
                case this.downKey:
                    this.changeDirection(DIRECTION.DOWN);
                    this.vy = 1 * Balancing.player.speed;
                    break;
                case this.leftKey:
                    this.changeDirection(DIRECTION.LEFT);
                    this.vx = -1 * Balancing.player.speed;
                    break;
                case this.rightKey:
                    this.changeDirection(DIRECTION.RIGHT);
                    this.vx = 1 * Balancing.player.speed;
                    break;
                case this.actionKey:
                    this.onHit();
                    break;
                case this.placeKey:
                    this.onPlace();
                    break;
                case this.selectKey:
                    this.switchPlaceMode();
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
                    if (this.map.getTile(x, y) == undefined || (this.map.getTile(x, y).tileObject && this.map.getTile(x, y).tileObject.solid)) {
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



    /**
    * Returns the currently active Tile.
    * This is always the tile the player's standing on.
    */
    getCurrentTile(): Tile {
        let gridX = Math.floor((this.sprite.x + this.sprite.width / 2) / this.map.finalTileWidth);
        let gridY = Math.floor((this.sprite.y + this.sprite.height / 2) / this.map.finalTileHeight);

        return this.map.getTile(gridX, gridY);
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

    onPlace = () => {
        if (!this.stunned) {
            const currentTile = this.getCurrentTile();

            //Create hitEvent if placeMode is HAND
            if (this.placeMode == ITEM.HAND) {
                const currentTile = this.getCurrentTile();
                currentTile.onHit(new HitEvent(this, Balancing.player.hitDamage));
                return;
            }

            //Create Tomato if neccessary
            if (this.placeMode == ITEM.TOMATO_PROJECTILE && this.inventory.getItem(ITEM.TOMATO_PROJECTILE)) {
                new TomatoProjectile(this.sprite.x, this.sprite.y, this.currentDirection, this);
                return;
            }

            //Else place tileObject if ressources are in inventory
            else if (this.inventory.getItem(this.placeMode)) {
                this.playAnimation("put");
                currentTile.onPlace(this.placeMode);
            }
        }
    }

    onHit = () => {

    }

}