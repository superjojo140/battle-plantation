import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { Texture } from "pixi.js";
import { HitEvent } from "./HitEvent";
import { UpdateScheduler } from "./UpdateScheduler";

export abstract class Plant extends TileObject {

    static growStates: number = 5;
    static crop: object;

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
        //Harvest yourself
        //give the initiator the items
        await this.shrink();
        this.onDestroy(hitEvent.initiator);
    }

}