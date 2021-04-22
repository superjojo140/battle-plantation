import { ITEM } from "./Items"

const Balancing = {
    tree: {
        defaultHealth: 1,
        cropCount: 4,
    },

    wall: {
        defaultHealth: 3,
    },

    tntPumpkin: {
        explosionDamage: 1.5,
    },

    player: {
        speed: 4,
        hitDamage: 0.1,
        knockdown : 2000, //Time in milliseconds
    },

    tower: {
        defaultHealth: 10,
        cooldown: 6 //How often this Object wiggles until it is again vulnerable
    },

    tomatoProjectile: {
        speed: 7,
        hitDamage: 0.3,
        inventoryLimit : 10,
    },

    tomatoPlant: {
        growStepTime: 5000,
        crops: [
            { type: ITEM.TOMATO_PROJECTILE, count: 2 },
            { type: ITEM.TOMATO_PLANT, count: 4 },
        ],
        startSeeds: 5,
    },

    pumpkinPlant: {
        growStepTime: 10000,
        crops: [
            { type: ITEM.TNT_PUMPKIN, count: 2 },
            { type: ITEM.PUMPKIN_PLANT, count: 3 },
        ],
        startSeeds: 5,
    },

}

export { Balancing }