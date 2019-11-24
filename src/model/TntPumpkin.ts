import { TileObject } from "./TileObject";
import { HitEvent } from "./HitEvent";
import { Tile } from "./Tile";
import { gameManager } from "../index";

export class TntPumpkin extends TileObject{


    exploding:boolean = false;

    constructor(mother:Tile){
        super(gameManager.spriteSheet.getTexture(471),mother);
    }

    onHit(hitEvent:HitEvent){
        if (!this.exploding){
            this.exploding = true;
            //Blink very dangerous
            //Explode!!!
            
            this.destroy();
        }
    }

}