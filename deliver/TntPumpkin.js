class TntPumpkin extends TileObject {
    constructor() {
        super(...arguments);
        this.exploding = false;
    }
    onHit(hitEvent) {
        if (!this.exploding) {
            this.exploding = true;
            //Blink very dangerous
            //Explode!!!
            this.destroy();
        }
    }
}
