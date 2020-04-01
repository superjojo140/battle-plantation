import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { HitEvent } from "./HitEvent";
import { Player } from "./Player";
import { ITEM } from "./Items";
import {Balancing} from "./Balancing";

export class Tree extends TileObject {

    statusBar: StatusBar;
    health: number = Balancing.tree.defaultHealth;

    constructor(texture, mother) {
        super(texture, mother);
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
                this.statusBar.setProgress(this.health/Balancing.tree.defaultHealth);
                Tree.onHitSound.play();
                await this.wiggle(3);
                this.vulnerable = true;
            }
        }
    };

    async onDestroy(initiator: Player) {
        this.vulnerable = false;
        initiator.inventory.giveItem(ITEM.WALL, 1);
        Tree.onDestroySound.play();
        this.statusBar.destroy({ children: true });
        await this.shrink();
        super.onDestroy(initiator);
    }



}