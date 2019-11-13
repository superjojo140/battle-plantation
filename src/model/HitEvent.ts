import { Player } from "./Player";

export class HitEvent {

    initiator: Player;
    damage: number;

    constructor(initiator: Player, damage: number) {
        this.initiator = initiator;
        this.damage = damage;

    }

}