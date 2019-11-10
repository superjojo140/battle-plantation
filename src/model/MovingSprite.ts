import { Sprite, Texture } from "pixi.js";

export class MovingSprite extends Sprite {

    vx: number;
    vy: number;
    speed: number;

    constructor(texture: Texture) {
        super(texture);
        this.vx = 0;
        this.vy = 0;
        this.speed = 0;
    }

}