import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { Player } from "./Player";
import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Texture } from "pixi.js";
import { Balancing } from "./Balancing";

export class Tower extends TileObject {

    owner: Player;
    health: number = Balancing.tower.defaultHealth;
    statusBar: StatusBar;

    constructor(texture: Texture, mother: Tile, owner: Player) {
        super(texture, mother);
        this.statusBar = new StatusBar(this, false);
        this.owner = owner;
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
                this.statusBar.setProgress(this.health/Balancing.tower.defaultHealth);
                Tower.onHitSound.play();
                await this.wiggle(3);
                this.vulnerable = true;
            }
        }
    };

    onDestroy(initiator: Player) {

    }


}