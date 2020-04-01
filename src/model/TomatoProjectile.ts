import { Player } from './Player';
import { Sprite, Point, Texture } from 'pixi.js';
import { DIRECTION } from "./Player"
import { gameManager } from '../index';
import { Balancing } from './Balancing';
import { Tile } from './Tile';
import { HitEvent } from './HitEvent';
import { UpdateScheduler } from './UpdateScheduler';

export class TomatoProjectile extends Sprite {

    static idCounter = 0;
    static throwSound = new Audio('../data/assets/sound/snap.mp3');
    static smashSound = new Audio('../data/assets/sound/smash.mp3');

    private id: string;
    private initiator: Player;
    private vx: number = 0;
    private vy: number = 0;
    animations: Texture[] = [];

    static getNewId(): string {
        return `tomato_projectile_${TomatoProjectile.idCounter++}`;
    }

    constructor(x: number, y: number, direction: DIRECTION, initiator: Player) {

        super(gameManager.atlasSpritesheet.getTexture("tomato_projectile_fly"));
        this.id = TomatoProjectile.getNewId();


        this.x = x;
        this.y = y;

        this.scale = new Point(2, 2);
        this.x += this.width;
        this.y += this.height;
        this.anchor.set(0.5);

        switch (direction) {
            case DIRECTION.UP: this.vy = -1 * Balancing.tomatoProjectile.speed; break;
            case DIRECTION.DOWN: this.vy = 1 * Balancing.tomatoProjectile.speed; break;
            case DIRECTION.LEFT: this.vx = -1 * Balancing.tomatoProjectile.speed; break;
            case DIRECTION.RIGHT: this.vx = 1 * Balancing.tomatoProjectile.speed; break;
        }

        for (let i = 0; i < 6; i++) {
            const textureName = `tomato_projectile_smash_${i}`;
            const texture = gameManager.atlasSpritesheet.getTexture(textureName);
            this.animations.push(texture);
        }


        this.initiator = initiator;

        gameManager.updateScheduler.register(this.id, this.doStep);

        gameManager.map.extraStuffContainer.addChild(this);

        TomatoProjectile.throwSound.play();

    }

    doStep = (delta: number) => {
        //Calculate theoretically next position
        let newX = this.x + this.vx * delta;
        let newY = this.y + this.vy * delta;

        //Get all tiles that would be touched by the player
        let xRange = {
            from: Math.floor((newX - this.width / 2) / gameManager.map.finalTileWidth),
            to: Math.floor((newX + this.width / 2) / gameManager.map.finalTileWidth)
        };

        let yRange = {
            from: Math.floor((newY - this.height / 2) / gameManager.map.finalTileHeight),
            to: Math.floor((newY + this.height / 2) / gameManager.map.finalTileHeight)
        };

        //Check if at least one of this new positions would be in a solid tile or out of the map
        let blocked = false;
        let blockedTile: Tile;

        for (let x = xRange.from; x <= xRange.to; x++) {
            for (let y = yRange.from; y <= yRange.to; y++) {
                if ( gameManager.map.getTile(x,y) == undefined || gameManager.map.getTile(x,y).tileObject) {
                    blocked = true;
                    blockedTile = gameManager.map.getTile(x,y);
                }
            }
        }

        if (blocked == false) {
            this.x = newX;
            this.y = newY;
            this.rotation += 0.5 * delta;
        }
        else {
            //Fly into the tileObject
            this.x += this.vx * 2;
            this.y += this.vy * 2;
            this.smash(blockedTile);
        }
    }



    private async smash(tile: Tile) {
        gameManager.updateScheduler.unregister(this.id);

        //Play Smash sound
        TomatoProjectile.smashSound.play();

        //Trigger Hit event on hitten tile
        if (tile) {
            tile.onHit(new HitEvent(this.initiator, Balancing.tomatoProjectile.hitDamage));
        }

        //Play Smash animation
        for (const frame of this.animations) {
            this.texture = frame;
            await UpdateScheduler.wait(40);
        }

        this.destroy();
    }
}