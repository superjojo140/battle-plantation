import { Plant } from "./Plant";
import { Tile } from "./Tile";
import { gameManager } from "../index";
import { Balancing } from "./Balancing";
import { UpdateScheduler } from "./UpdateScheduler";

export class PumpkinPlant extends Plant {

    constructor(mother: Tile) {
        super(gameManager.atlasSpritesheet.getTexture("pumpkin_plant_0"), mother);
    }

    async grow() {
        for (let growStep = 1; growStep < PumpkinPlant.growStates; growStep++) {
            await UpdateScheduler.wait(Balancing.pumpkinPlant.growStepTime);
            this.texture = gameManager.atlasSpritesheet.getTexture(`pumpkin_plant_${growStep}`)
        }
        this.vulnerable = true;
    }


}