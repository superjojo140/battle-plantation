class TileObject extends PIXI.Sprite {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    onHit(hitevent) { }
    ;
    onPlant(plant) { }
    ;
    onHarvest(initiator) { }
    ;
    destroy() {
        delete this.parent.tileObject;
        super.destroy();
    }
}
