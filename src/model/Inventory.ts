import { ITEM } from "./Items";

export class Inventory {

    tomato_projectile: number = 0;
    tnt_pumpkin: number = 0;
    wall: number = 0;

    getItem(itemType: ITEM): boolean {
        switch (itemType) {
            case ITEM.TOMATO_PLANT: return true; break;
            case ITEM.PUMPKIN_PLANT: return true; break;

            case ITEM.TOMATO_PROJECTILE: if (this.tomato_projectile > 0) {
                this.tomato_projectile--;
                return true;
            } else {
                return false;
            } break;

            case ITEM.TNT_PUMPKIN: if (this.tnt_pumpkin > 0) {
                this.tnt_pumpkin--;
                return true;
            } else {
                return false;
            } break;

            case ITEM.WALL: if (this.wall > 0) {
                this.wall--;
                return true;
            } else {
                return false;
            } break;
        }
    }

    giveItem(itemType: ITEM, count: number) {
        switch (itemType) {
            case ITEM.TOMATO_PROJECTILE: this.tomato_projectile += count; break;

            case ITEM.TNT_PUMPKIN: this.tnt_pumpkin += count; break;

            case ITEM.WALL: this.wall += count; break;
        }
    }
}