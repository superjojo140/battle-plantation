import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { Texture } from "pixi.js";
import { HitEvent } from "./HitEvent";

export abstract class Plant extends TileObject {

    static growStates: number = 4;

    spritePrefix: string;
    crop: object;
    statusBar: StatusBar;
    ready:boolean = false;

    constructor(texture:Texture, mother: Tile) {
        super(texture,mother);
        const id = "plant" + mother.gridX + "-" + mother.gridY;
        //gameManager.updateScheduler.register(id, this.grow);
    }

    grow = (delta: number) => {
        console.log("I am growing...");
    }


    async onHit(hitEvent:HitEvent) {
        this.vulnerable = false;
        //Harvest yourself
        //give the initiator the items
        await this.shrink();
        this.onDestroy(hitEvent.initiator);
    }

}