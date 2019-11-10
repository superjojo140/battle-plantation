class Tree extends TileObject {

    
    statusBar: StatusBar;

    constructor(texture: PIXI.Texture, parent: Tile) {
        super(texture, parent);
    }

    onHit(hitEvent: HitEvent) {
    };

    onDestroy(initiator: Player) {

    }

    onHarvest(initiator:Player){

    }


}