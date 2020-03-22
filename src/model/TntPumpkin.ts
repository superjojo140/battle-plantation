import { TileObject } from "./TileObject";
import { HitEvent } from "./HitEvent";
import { Tile } from "./Tile";
import { Texture, SCALE_MODES } from "pixi.js";
import { gameManager } from "../index";

export class TntPumpkin extends TileObject {

    static texturePath = "../../data/assets/pumpkin.png";

    exploding: boolean = false;

    constructor(mother: Tile) {
        super(Texture.fromImage(TntPumpkin.texturePath, true, SCALE_MODES.NEAREST), mother);
    }

    async onHit(hitEvent: HitEvent) {
        if (!this.exploding) {
            this.exploding = true;
            //this.wiggle(1);
            //Blink very dangerous
            await this.blink(4);            
            //Explode!!!
            this.onDestroy(hitEvent.initiator);
        }
    }

    static testExplosion() {
        const p = new TntPumpkin(gameManager.map.tiles[0][1]);
        p.onHit({ initiator: null, damage: 0 });
    }

}