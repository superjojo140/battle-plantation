import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { HitEvent } from "./HitEvent";
import { Player } from "./Player";
import { gameManager } from "../index";

export class Wall extends TileObject {


    statusBar: StatusBar;
    health: number = 1;
  

    constructor(mother) {
        super(gameManager.tiledSpritesheet.getTexture(949), mother); //665 is a box sprite
        this.statusBar = new StatusBar(this, false);
        this.solid = true;
    }



    async onHit(hitEvent: HitEvent) {
        if (this.vulnerable) {
            this.health -= hitEvent.damage;
            if (this.health < 0.01) {
                this.onDestroy(hitEvent.initiator);
            }
            else {
                this.vulnerable = false;
                this.statusBar.visible = true;
                this.statusBar.setProgress(this.health);
                Wall.onHitSound.play();
                await this.wiggle(3);
                this.vulnerable = true;
            }
        }
    };

    onDestroy(initiator: Player) {
        Wall.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        super.onDestroy(initiator);
    }


}