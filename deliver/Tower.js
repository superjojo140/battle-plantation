class Tower extends TileObject {
    constructor(texture, parent, owner) {
        super(texture, parent);
        this.owner = owner;
    }
    onHit(hitEvent) {
    }
    ;
    onDestroy(initiator) {
    }
}
