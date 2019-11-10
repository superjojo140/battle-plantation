class Tile extends PIXI.Sprite {

    gridX: number;
    gridY: number;
    tileObject: TileObject;

    constructor(texture: PIXI.Texture, gridX: number, gridY: number) {
        super(texture);
        this.gridX = gridX;
        this.gridY = gridY;
    }

    onHit(hitEvent: HitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    }

    onPlant(plant: Plant) {
        if (this.tileObject) {
            this.tileObject.onPlant(plant);
        }
    }

    onPlace(pumpkin: TntPumpkin) {
        if (this.tileObject == undefined) {
            console.log("Placing Pumpkin TNT");
        }
    }

    onHarvest(initiator: Player) {
        if (this.tileObject) {
            this.tileObject.onHarvest(initiator);
        }
    }

    isFree(){
        return this.tileObject ? true : false;
    }






}