import { TileObject } from "./TileObject";
import { TiledMap } from "./TiledMap";
import { HitEvent } from "./HitEvent";
import { Plant } from "./Plant";
import { TntPumpkin } from "./TntPumpkin";
import { Player } from "./Player";

export class Tile extends PIXI.Sprite {

    gridX: number;
    gridY: number;
    tileObject: TileObject;
    map: TiledMap;

    constructor(texture: PIXI.Texture, gridX: number, gridY: number, map:TiledMap) {
        super(texture);
        this.gridX = gridX;
        this.gridY = gridY;
        this.map = map;
        //calculate own render coordinates
        this.x = gridX * map.finalTileWidth;
        this.y = gridY * map.finalTileHeight;
    }

    onHit(hitEvent: HitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    }

    onPlant(plant: Plant) {
        if (this.tileObject) {
            this.tileObject.onPlant(plant);
        }
    }

    onPlace(pumpkin: TntPumpkin) {
        if (this.tileObject == undefined) {
            console.log("Placing Pumpkin TNT");
        }
    }

    onHarvest(initiator: Player) {
        if (this.tileObject) {
            this.tileObject.onHarvest(initiator);
        }
    }

    isFree(){
        return this.tileObject ? false : true;
    }






}