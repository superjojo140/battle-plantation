import { TileObject } from "./TileObject";
import { HitEvent } from "./HitEvent";
import { Tile } from "./Tile";
import { gameManager } from "../index";
import { Texture, SCALE_MODES } from "pixi.js";

export class TntPumpkin extends TileObject{

    static texturePath = "../../data/assets/pumpkin.png";

    exploding:boolean = false;

    constructor(mother:Tile){
        super(Texture.fromImage(TntPumpkin.texturePath, true, SCALE_MODES.NEAREST),mother);
    }

    onHit(hitEvent:HitEvent){
        if (!this.exploding){
            this.exploding = true;
            this.wiggle(1);
            this.blink(3);
            //Blink very dangerous
            //Explode!!!
            //this.shrinkAndDie();
        }
    }

}