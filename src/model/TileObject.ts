abstract class TileObject extends PIXI.Sprite{

    parent:Tile;
    solid:boolean;

    constructor(parent){
        super();
        this.parent = parent;
    }

    onHit(hitevent:HitEvent){};

    onPlant(plant:Plant){};

    onHarvest(initiator:Player){};

    destroy(){
        delete this.parent.tileObject;
        super.destroy();
    }

}