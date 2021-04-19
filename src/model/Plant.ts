import { TileObject } from "./TileObject";
import { Tile } from "./Tile";
import { Texture } from "pixi.js";
import { HitEvent } from "./HitEvent";
import { ITEM } from "./Items";

export interface Crop {
    type: ITEM,
    count: number
}

export abstract class Plant extends TileObject {

    static growStates: number = 5;
    crops: Crop[];

    constructor(texture: Texture, mother: Tile) {
        super(texture, mother);
        this.vulnerable = false;
        this.grow();
    }

    abstract grow();

    async onHit(hitEvent: HitEvent) {
        if (!this.vulnerable) { return; }

        this.vulnerable = false;
        await hitEvent.initiator.playAnimation("put");
        //Harvest yourself
        for (const crop of this.crops) {
            hitEvent.initiator.inventory.giveItem(crop.type, crop.count);
        }
        //give the initiator the items
        await this.shrink();
        this.onDestroy(hitEvent.initiator);
    }


}