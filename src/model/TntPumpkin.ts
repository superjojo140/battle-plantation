import { TileObject } from "./TileObject";
import { HitEvent } from "./HitEvent";
import { Tile } from "./Tile";
import { gameManager } from "../index";
import { Texture } from "pixi.js";

export class TntPumpkin extends TileObject {

    private animations;

    static tickSound = new Audio('../data/assets/sound/blob2.mp3');
    static explodeSound = new Audio('../data/assets/sound/explode.mp3');

    constructor(mother: Tile) {
        super(gameManager.atlasSpritesheet.getTexture("pumpkin_idle"), mother);
        this.loadAnimations();
    }

    async onHit(hitEvent: HitEvent) {
        if (this.vulnerable && hitEvent.damage > 0) {
            this.vulnerable = false;
            await this.wiggle(1);
            TntPumpkin.tickSound.play();
            //Blink very dangerous
            await this.blink(4);
            //Trigger TileObjects around
            const tilesAround = this.getTilesAround();
            for(const tile of tilesAround){
                tile.onHit(new HitEvent(hitEvent.initiator,0.5))
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
            await TileObject.wait(50);
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
        const p = new TntPumpkin(gameManager.map.tiles[0][1]);
        new TntPumpkin(gameManager.map.tiles[0][2]);
        p.onHit(new HitEvent(gameManager.map.players[0], 1));
    }

}