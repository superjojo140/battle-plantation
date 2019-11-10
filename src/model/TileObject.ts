
abstract class TileObject extends PIXI.Sprite {

    parent: Tile;
    solid: boolean;

    constructor(texture: PIXI.Texture, parent: Tile) {
        super(texture);
        this.parent = parent;
        if (this.parent.isFree()) {
            this.parent.tileObject = this;
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }
    }

    onHit(hitevent: HitEvent) { };

    onPlant(plant: Plant) { };

    onHarvest(initiator: Player) { };

    onDestroy(initiator: Player) {
        delete this.parent.tileObject;
        this.destroy();
    };



}