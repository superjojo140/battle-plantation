class TileObject extends PIXI.Sprite {
    constructor(texture, parent) {
        super(texture);
        this.parent = parent;
        if (this.parent.isFree()) {
            this.parent.tileObject = this;
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }
        //set render coordinates
        this.x = this.parent.x;
        this.y = this.parent.y;
    }
    onHit(hitevent) { }
    ;
    onPlant(plant) { }
    ;
    onHarvest(initiator) { }
    ;
    onDestroy(initiator) {
        delete this.parent.tileObject;
        this.destroy();
    }
    ;
}
