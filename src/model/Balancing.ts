
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
    },
    
    tower: {
        defaultHealth: 10,
        cooldown : 6 //How often this Object wiggles until it is again vulnerable
    },

    tomatoProjectile:{
        speed : 7,
        hitDamage: 0.3,
    },

    tomatoPlant:{
        growStepTime : 5000,
        cropCount: 2
    },

    pumpkinPlant:{
        growStepTime : 10000,
        cropCount: 2
    },

}

export { Balancing }