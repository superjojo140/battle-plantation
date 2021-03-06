import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { HitEvent } from "./HitEvent";
import { Player } from "./Player";
import { gameManager } from "../index";
import { Balancing } from "./Balancing";
import { ITEM } from "./Items";

export class Wall extends TileObject {

    statusBar: StatusBar;
    health: number = Balancing[ITEM.WALL].defaultHealth;
  

    constructor(mother) {
        super(gameManager.tiledSpritesheet.getTexture(949), mother, true); //949 is a box sprite
        this.statusBar = new StatusBar(this, false);
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
                this.statusBar.setProgress(this.health/Balancing[ITEM.WALL].defaultHealth);
                Wall.onHitSound.play();
                await this.wiggle(3);
                this.vulnerable = true;
            }
        }
    };

    async onDestroy(initiator: Player) {
        this.vulnerable = false;
        Wall.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        await this.shrink();
        super.onDestroy(initiator);
    }


}