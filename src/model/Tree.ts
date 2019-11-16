import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { HitEvent } from "./HitEvent";
import { Player } from "./Player";
import { ITEM } from "./Items";

export class Tree extends TileObject {

    statusBar: StatusBar;
    health: number = 1;
    static onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    static onDestroySound = new Audio('../data/assets/sound/blob1.mp3');

    constructor(texture, mother) {
        super(texture, mother);
        this.statusBar = new StatusBar(this, false);
    }



    onHit(hitEvent: HitEvent) {
        if (this.vulnerable) {
            this.health -= hitEvent.damage;
            if (this.health < 0.01) {
                this.onDestroy(hitEvent.initiator);
            }
            else {
                this.statusBar.visible = true;
                this.statusBar.setProgress(this.health);
                this.wiggle(3);
                Tree.onHitSound.play();
            }
        }
    };

    onDestroy(initiator: Player) {
        initiator.giveItem(ITEM.WOOD_ITEM, 1);
        Tree.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        super.onDestroy(initiator);
    }

    onHarvest(initiator: Player) {

    }


}