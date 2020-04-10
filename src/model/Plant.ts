import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { Texture } from "pixi.js";
import { HitEvent } from "./HitEvent";
import { UpdateScheduler } from "./UpdateScheduler";
import { ITEM } from "./Items";

export interface Crop{
    type:ITEM,
    count:number
}

export abstract class Plant extends TileObject {

    static growStates: number = 5;
    crop: Crop;

    constructor(texture:Texture, mother: Tile) {
        super(texture,mother);
        this.vulnerable = false;
        this.grow();
    }

    abstract async grow();

    async onHit(hitEvent:HitEvent) {
        if(!this.vulnerable){
            return;
        }


        this.vulnerable = false;
        await hitEvent.initiator.playAnimation("put");
        //Harvest yourself
        hitEvent.initiator.inventory.giveItem(this.crop.type,this.crop.count);
        //give the initiator the items
        await this.shrink();
        this.onDestroy(hitEvent.initiator);
    }


}