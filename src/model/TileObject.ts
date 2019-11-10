
abstract class TileObject extends PIXI.Sprite{

    parent:Tile;
    solid:boolean;

    constructor(texture : PIXI.Texture ,parent:Tile){
        super(texture);
        this.parent = parent;
    }

    onHit(hitevent:HitEvent){};

    onPlant(plant:Plant){};

    onHarvest(initiator:Player){};

    onDestroy(initiator:Player){
        delete this.parent.tileObject;
        this.destroy();
    };



}