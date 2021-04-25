import { ITEM } from "./Items"

let Balancing = {
    tree: {
        defaultHealth: 1,
        cropCount: 4,
    },

    player: {
        speed: 4,
        hitDamage: 0.1,
        knockdown: 2000, //Time in milliseconds
    },

    tower: {
        defaultHealth: 10,
        cooldown: 6 //How often this Object wiggles until it is again vulnerable
    },
}

Balancing[ITEM.WALL] = {
    inventoryLimit: 10,
    defaultHealth: 3,
};

Balancing[ITEM.TNT_PUMPKIN] = {
    inventoryLimit: 10,
    explosionDamage: 1.5,
};

Balancing[ITEM.TOMATO_PROJECTILE] = {
    speed: 7,
    hitDamage: 0.3,
    inventoryLimit: 10,
};

Balancing[ITEM.TOMATO_PLANT] = {
    growStepTime: 5000,
    crops: [
        { type: ITEM.TOMATO_PROJECTILE, count: 2 },
        { type: ITEM.TOMATO_PLANT, count: 4 },
    ],
    inventoryLimit: 10,
    startSeeds: 5,
};

Balancing[ITEM.PUMPKIN_PLANT] = {
    growStepTime: 10000,
    crops: [
        { type: ITEM.TNT_PUMPKIN, count: 2 },
        { type: ITEM.PUMPKIN_PLANT, count: 3 },
    ],
    inventoryLimit: 10,
    startSeeds: 5,
};

export { Balancing }