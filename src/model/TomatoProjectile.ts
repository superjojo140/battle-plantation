import { Point, Sprite, Texture } from 'pixi.js';
import { gameManager } from '../index';
import { Balancing } from './Balancing';
import { Constants } from './Constants';
import { HitEvent } from './HitEvent';
import { DIRECTION, Player } from './Player';
import { Tile } from './Tile';
import { TileObject } from './TileObject';
import { UpdateScheduler } from './UpdateScheduler';

export class TomatoProjectile extends Sprite {

    static idCounter = 0;
    static throwSound = new Audio(`${Constants.SOUND_PATH}/snap.mp3`);
    static smashSound = new Audio(`${Constants.SOUND_PATH}/smash.mp3`);

    private id: string;
    private owner: Player;
    private initiator : Player | TileObject;
    private vx: number = 0;
    private vy: number = 0;
    animations: Texture[] = [];


    static getNewId(): string {
        return `tomato_projectile_${TomatoProjectile.idCounter++}`;
    }

    /**
     * 
     * @param x x-coordinate to start
     * @param y y-coordinate to start
     * @param direction direction to fly
     * @param initiator the player or object that creates this tomate (this player will be imun to this tomato)
     * @param owner the player that will be referenced in hitEvent if the tomato hits something
     */
    constructor(x: number, y: number, direction: DIRECTION, initiator: Player | TileObject, owner: Player) {

        super(gameManager.atlasSpritesheet.getTexture("tomato_projectile_fly"));

        this.id = TomatoProjectile.getNewId();
        this.x = x;
        this.y = y;
        this.owner = owner;
        this.initiator = initiator;

        this.scale = new Point(2, 2);
        this.x += this.width;
        this.y += this.height;
        this.anchor.set(0.5);

        switch (direction) {
            case DIRECTION.UP: this.vy = -1 * Balancing.tomato_projectile.speed; break;
            case DIRECTION.DOWN: this.vy = 1 * Balancing.tomato_projectile.speed; break;
            case DIRECTION.LEFT: this.vx = -1 * Balancing.tomato_projectile.speed; break;
            case DIRECTION.RIGHT: this.vx = 1 * Balancing.tomato_projectile.speed; break;
        }

        for (let i = 0; i < 6; i++) {
            const textureName = `tomato_projectile_smash_${i}`;
            const texture = gameManager.atlasSpritesheet.getTexture(textureName);
            this.animations.push(texture);
        }

        gameManager.updateScheduler.register(this.id, this.doStep);
        gameManager.map.extraStuffContainer.addChild(this);
        TomatoProjectile.throwSound.play();
    }

    doStep = (delta: number) => {
        //Calculate theoretically next position
        let newX = this.x + this.vx * delta;
        let newY = this.y + this.vy * delta;

        //Get all tiles that would be touched when moving the next step
        let xRange = {
            from: Math.floor((newX - this.width / 2) / gameManager.map.finalTileWidth),
            to: Math.floor((newX + this.width / 2) / gameManager.map.finalTileWidth)
        };

        let yRange = {
            from: Math.floor((newY - this.height / 2) / gameManager.map.finalTileHeight),
            to: Math.floor((newY + this.height / 2) / gameManager.map.finalTileHeight)
        };


        //Check if the tomato hits a Player
        for (const player of gameManager.map.players) {
            const hitbox = player.getHitbox();
            if (this.x < hitbox.rightX && this.x + this.width > hitbox.leftX && this.y < hitbox.lowerY && this.y + this.height > hitbox.upperY) {
                //Fly into the Player
                this.x += this.vx * 2;
                this.y += this.vy * 2;
                this.smash(player);
                return;
            }
        }


        //Check if at least one of this new positions would be in a solid tile or out of the map
        for (let x = xRange.from; x <= xRange.to; x++) {
            for (let y = yRange.from; y <= yRange.to; y++) {
                if (gameManager.map.getTile(x, y) == undefined || gameManager.map.getTile(x, y).tileObject) {
                    const blockedTile = gameManager.map.getTile(x, y);
                    //Fly into the tileObject
                    this.x += this.vx * 2;
                    this.y += this.vy * 2;
                    this.smash(blockedTile);
                    return;
                }
            }
        }

        //If no collision, just fly your way
        this.x = newX;
        this.y = newY;
        this.rotation += 0.5 * delta;

    }



    private async smash(collider: Tile | Player) {
        if (collider != this.initiator) { //Dont hit the initiator
            gameManager.updateScheduler.unregister(this.id);
            TomatoProjectile.smashSound.play(); //Play Smash sound

            //Trigger Hit event on hitten tile or Player
            if (collider) {
                collider.onHit(new HitEvent(this.owner, Balancing.tomato_projectile.hitDamage));
            }

            //Play Smash animation
            for (const frame of this.animations) {
                this.texture = frame;
                await UpdateScheduler.wait(40);
            }
            this.destroy();
        }
    }
}