import { Plant } from "./Plant";
import { Tile } from "./Tile";
import { gameManager } from "../index";
import { UpdateScheduler } from "./UpdateScheduler";
import { Balancing } from "./Balancing";

export class TomatoPlant extends Plant{

    constructor(mother:Tile){
        super(gameManager.atlasSpritesheet.getTexture("tomato_plant_0"),mother);
    }

    async grow() {
        for (let growStep = 1; growStep < TomatoPlant.growStates; growStep++) {
            await UpdateScheduler.wait(Balancing.tomatoPlant.growStepTime);
            this.texture = gameManager.atlasSpritesheet.getTexture(`tomato_plant_${growStep}`)
        }
        this.vulnerable = true;
    }

}