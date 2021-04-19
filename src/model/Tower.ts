import { TileObject } from "./TileObject";
import { StatusBar } from "./StatusBar";
import { DIRECTION, Player } from "./Player";
import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Texture } from "pixi.js";
import { Balancing } from "./Balancing";
import { TomatoProjectile } from "./TomatoProjectile";
import { gameManager } from "..";

export class Tower extends TileObject {

    ownerId: string;
    health: number = Balancing.tower.defaultHealth;
    statusBar: StatusBar;

    constructor(texture: Texture, mother: Tile, ownerId: string) {
        super(texture, mother, true);
        this.statusBar = new StatusBar(this, false);
        this.ownerId = ownerId;
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
                this.statusBar.setProgress(this.health / Balancing.tower.defaultHealth);
                Tower.onHitSound.play();
                await this.wiggle(Balancing.tower.cooldown);
                //Create Tomatos as defense action
                const tileHeight = this.mother.map.finalTileHeight;
                const tileWidth = this.mother.map.finalTileWidth;
                if (this.mother.gridY - 1 >= 0) { new TomatoProjectile(this.x, (this.mother.gridY - 1) * tileHeight, DIRECTION.UP, this.getOwner()); }
                if (this.mother.gridX - 1 >= 0) { new TomatoProjectile((this.mother.gridX - 1) * tileWidth, this.y, DIRECTION.LEFT, this.getOwner()); }
                if (this.mother.gridY + 1 >= 0) { new TomatoProjectile(this.x, (this.mother.gridY + 1) * tileHeight, DIRECTION.DOWN, this.getOwner()); }
                if (this.mother.gridX + 1 >= 0) { new TomatoProjectile((this.mother.gridX + 1) * tileWidth, this.y, DIRECTION.RIGHT, this.getOwner()); }
                this.vulnerable = true;
            }
        }
    };

    onDestroy(initiator: Player) {
        alert(`Player${this.ownerId} has lost!`);
    }

    getOwner(): Player {
        return gameManager.map.players[this.ownerId];
    }


}