class Tower extends TileObject {

    owner: Player;
    health: number;

    constructor(texture:PIXI.Texture, parent: Tile, owner: Player) {
        super(texture,parent);
        this.owner = owner;
    }

    onHit(hitEvent: HitEvent) {
        this.health--;
        if (this.health < 0) {
            this.onDestroy(hitEvent.initator);
        }
    };

    onDestroy(initiator: Player) {

    }


}