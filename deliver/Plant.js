class Plant extends TileObject {
    constructor(parent) {
        super(parent);
        const id = "plant" + parent.gridX + "-" + parent.gridY;
        UpdateScheduler.register(id, this.grow, this);
    }
    grow(myself, delta) {
        console.log("I am growing...");
    }
    onHarvest(initinator) {
        //Harvest yourself
        //give the initiator the items
        this.destroy();
    }
}
Plant.growStates = 4;
Plant.growStepTime = 3000;
