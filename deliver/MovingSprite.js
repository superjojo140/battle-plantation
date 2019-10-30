class MovingSprite extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.vx = 0;
        this.vy = 0;
        this.speed = 0;
    }
}
