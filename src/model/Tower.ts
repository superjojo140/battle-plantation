class Tower extends TileObject {

    owner: Player;
    statusBar: StatusBar;

    constructor(texture: PIXI.Texture, parent: Tile, owner: Player) {
        super(texture, parent);
        this.owner = owner;
    }

    onHit(hitEvent: HitEvent) {
    };

    onDestroy(initiator: Player) {

    }


}