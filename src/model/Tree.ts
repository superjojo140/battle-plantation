import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Player } from "./Player";

export class Tree extends TileObject {

    
    statusBar: StatusBar;

    constructor(texture: PIXI.Texture, parent: Tile) {
        super(texture, parent);
    }

    onHit(hitEvent: HitEvent) {
    };

    onDestroy(initiator: Player) {

    }

    onHarvest(initiator:Player){

    }


}