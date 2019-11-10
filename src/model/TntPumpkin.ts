import { TileObject } from "./TileObject";
import { HitEvent } from "./HitEvent";

export class TntPumpkin extends TileObject{

    exploding:boolean = false;

    onHit(hitEvent:HitEvent){
        if (!this.exploding){
            this.exploding = true;
            //Blink very dangerous
            //Explode!!!
            
            this.destroy();
        }
    }

}