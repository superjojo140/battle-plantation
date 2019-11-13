import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Plant } from "./Plant";
import { Player } from "./Player";
import { Sprite, Texture } from "pixi.js";

export abstract class TileObject extends Sprite {

    mother: Tile;
    solid: boolean;

    constructor(texture: Texture, mother: Tile) {
        super(texture);
        this.mother = mother;
        if (this.mother.isFree()) {
            this.mother.tileObject = this;
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }

        //set render coordinates
        this.x = this.mother.x;
        this.y = this.mother.y;
    }

    onHit(hitevent: HitEvent) { };

    onPlant(plant: Plant) { };

    onHarvest(initiator: Player) { };

    onDestroy(initiator: Player) {
        delete this.mother.tileObject;
        this.destroy();
    };



}