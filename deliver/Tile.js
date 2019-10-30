class Tile extends PIXI.Sprite {
    constructor() {
        super();
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
}
