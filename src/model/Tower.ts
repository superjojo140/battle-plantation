import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Player } from "./Player";
import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";

export class Tower extends TileObject {

    owner: Player;
    statusBar: StatusBar;

    constructor(texture: PIXI.Texture, parent: Tile, owner: Player) {
        super(texture, parent);
        this.owner = owner;
    }

    onHit(hitEvent: HitEvent) {
    };

    onDestroy(initiator: Player) {

    }


}