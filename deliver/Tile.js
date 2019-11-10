class Tile extends PIXI.Sprite {
    constructor(texture, gridX, gridY, map) {
        super(texture);
        this.gridX = gridX;
        this.gridY = gridY;
        this.map = map;
        //calculate own render coordinates
        this.x = gridX * map.finalTileWidth;
        this.y = gridY * map.finalTileHeight;
    }
    onHit(hitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    }
    onPlant(plant) {
        if (this.tileObject) {
            this.tileObject.onPlant(plant);
        }
    }
    onPlace(pumpkin) {
        if (this.tileObject == undefined) {
            console.log("Placing Pumpkin TNT");
        }
    }
    onHarvest(initiator) {
        if (this.tileObject) {
            this.tileObject.onHarvest(initiator);
        }
    }
    isFree() {
        return this.tileObject ? false : true;
    }
}
