abstract class Plant extends TileObject {

    static growStates: number = 4;
    static growStepTime: number = 3000;

    spritePrefix: string;
    crop: object;
    statusBar: StatusBar;

    constructor(parent: Tile) {
        super(parent);
        const id = "plant" + parent.gridX + "-" + parent.gridY;
        UpdateScheduler.register(id, this.grow, this);
    }

    grow(myself: Plant, delta: number) {
        console.log("I am growing...");
    }


    onHarvest(initinator: Player) {
        //Harvest yourself
        //give the initiator the items
        this.destroy();
    }

}