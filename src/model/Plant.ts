import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { UpdateScheduler } from "./UpdateScheduler";
import { Player } from "./Player";

export abstract class Plant extends TileObject {

    static growStates: number = 4;
    static growStepTime: number = 3000;

    spritePrefix: string;
    crop: object;
    statusBar: StatusBar;

    constructor(texture:PIXI.Texture, parent: Tile) {
        super(texture,parent);
        const id = "plant" + parent.gridX + "-" + parent.gridY;
        UpdateScheduler.register(id, this.grow, this);
    }

    grow(myself: Plant, delta: number) {
        console.log("I am growing...");
    }


    onHarvest(initinator: Player) {
        //Harvest yourself
        //give the initiator the items
        this.destroy();
    }

}