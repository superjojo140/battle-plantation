import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Player } from "./Player";
import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Texture } from "pixi.js";

export class Tower extends TileObject {

    owner: Player;
    statusBar: StatusBar;

    constructor(texture: Texture, mother: Tile, owner: Player) {
        super(texture, mother);
        this.owner = owner;
    }

    onHit(hitEvent: HitEvent) {
    };

    onDestroy(initiator: Player) {

    }


}