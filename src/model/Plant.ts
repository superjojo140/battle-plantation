import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Tile } from "./Tile";
import { Player } from "./Player";
import { Texture } from "pixi.js";
import {gameManager} from "./../index"

export abstract class Plant extends TileObject {

    static growStates: number = 4;
    static growStepTime: number = 3000;

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


    onHarvest(initinator: Player) {
        //Harvest yourself
        //give the initiator the items
        this.destroy();
    }

}