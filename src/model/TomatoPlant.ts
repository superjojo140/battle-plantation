import { Plant } from "./Plant";
import { Tile } from "./Tile";
import { gameManager } from "../index";

export class TomatoPlant extends Plant{

    constructor(mother:Tile){
        super(gameManager.spriteSheet.getTexture(471),mother);
    }

}