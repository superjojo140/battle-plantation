import { Balancing } from "./Balancing";
import { ITEM } from "./Items";

export class Inventory {

    tomato_projectile: number = 0;
    tnt_pumpkin: number = 0;
    tomato_plant: number = Balancing.tomatoPlant.startSeeds;
    pumpkin_plant: number = Balancing.pumpkinPlant.startSeeds;
    wall: number = 0;

    getItem(itemType: ITEM): boolean {
        switch (itemType) {

            case ITEM.TOMATO_PLANT:
                if (this.tomato_plant > 0) {
                    this.tomato_plant--;
                    return true;
                } break;

            case ITEM.PUMPKIN_PLANT:
                if (this.pumpkin_plant > 0) {
                    this.pumpkin_plant--;
                    return true;
                } break;

            case ITEM.TOMATO_PROJECTILE:
                if (this.tomato_projectile > 0) {
                    this.tomato_projectile--;
                    return true;
                } break;


            case ITEM.TNT_PUMPKIN:
                if (this.tnt_pumpkin > 0) {
                    this.tnt_pumpkin--;
                    return true;
                } break;

            case ITEM.WALL:
                if (this.wall > 0) {
                    this.wall--;
                    return true;
                } break;
        }
        console.log(`Cant get ${itemType}. Inventory is empty!`)
        return false;
    }

    giveItem(itemType: ITEM, count: number) {
        console.log(`give ${itemType} x ${count}`);
        switch (itemType) {
            case ITEM.TOMATO_PROJECTILE: this.tomato_projectile += count; break;

            case ITEM.TNT_PUMPKIN: this.tnt_pumpkin += count; break;

            case ITEM.WALL: this.wall += count; break;

            case ITEM.TOMATO_PLANT: this.tomato_plant += count; break;

            case ITEM.PUMPKIN_PLANT: this.pumpkin_plant += count; break;
        }
    }
}