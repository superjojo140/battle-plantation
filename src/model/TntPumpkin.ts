import { Texture } from "pixi.js";
import { gameManager } from "../index";
import { Balancing } from "./Balancing";
import { Constants } from "./Constants";
import { HitEvent } from "./HitEvent";
import { ITEM } from "./Items";
import { Tile } from "./Tile";
import { TileObject } from "./TileObject";
import { UpdateScheduler } from "./UpdateScheduler";

export class TntPumpkin extends TileObject {

    private animations;

    static tickSound = new Audio(`${Constants.SOUND_PATH}/klick.mp3`);
    static explodeSound = new Audio(`${Constants.SOUND_PATH}/explode.mp3`);

    constructor(mother: Tile) {
        super(gameManager.atlasSpritesheet.getTexture("pumpkin_idle"), mother);
        this.loadAnimations();
    }

    async onHit(hitEvent: HitEvent) {
        if (this.vulnerable && hitEvent.damage > 0) {
            this.vulnerable = false;
            this.wiggle(1);
            TntPumpkin.tickSound.play();
            //Blink very dangerous
            await this.blink(4);
            //Trigger TileObjects around
            const tilesAround = this.getTilesAround();
            for(const tile of tilesAround){
                tile.onHit(new HitEvent(hitEvent.initiator,Balancing[ITEM.TNT_PUMPKIN].explosionDamage))
            }
            //Explode!!!
            TntPumpkin.explodeSound.play();
            await this.playAnimation("explode");
            //Destroy pumpkin :-(
            this.onDestroy(hitEvent.initiator);
        }
    }

    private loadAnimations() {
        const animations = {
            explode: 12
        }

        for (const stateName in animations) {
            const numberOfFrames = animations[stateName];
            let currentFramesArray = [];
            for (let i = 0; i < numberOfFrames; i++) {
                const textureName = `pumpkin_${stateName}_${i}`;
                const texture = gameManager.atlasSpritesheet.getTexture(textureName);
                currentFramesArray.push(texture);
            }
            animations[stateName] = currentFramesArray;
        }
        this.animations = animations;
    }

    async playAnimation(state: string) {
        const frames: Texture[] = this.animations[state];

        //Play animation forwards
        for (const frame of frames) {
            this.texture = frame;
            await UpdateScheduler.wait(50);
        }

    }

    /**
     * Returns an array of tiles that are orthogonal to it's own tile.
     * This array holds only existing tiles and no undefined values.
     */
    private getTilesAround(): Tile[] {
        const myX = this.mother.gridX;
        const myY = this.mother.gridY;

        let tiles: Tile[] = [];
        tiles.push(gameManager.map.getTile(myX + 1, myY));
        tiles.push(gameManager.map.getTile(myX - 1, myY));
        tiles.push(gameManager.map.getTile(myX, myY + 1));
        tiles.push(gameManager.map.getTile(myX, myY - 1));

        //Filter not existing tiles
        let toReturn:Tile[] = [];
        for(const tile of tiles){
            if(tile){
                toReturn.push(tile);
            }
        }
        return toReturn;
        
    }

    static testExplosion() {
        const p = new TntPumpkin(gameManager.map.getTile(1,0));
        new TntPumpkin(gameManager.map.getTile(2,0));
        p.onHit(new HitEvent(gameManager.map.players[0], 1));
    }

}