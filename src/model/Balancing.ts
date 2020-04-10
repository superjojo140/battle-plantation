
const Balancing = {
    tree: {
        defaultHealth: 1,
        cropCount: 3,
    },

    wall: {
        defaultHealth: 3,
    },

    tntPumpkin: {
        explosionDamage: 1,
    },

    player: {
        speed: 4,
        hitDamage: 0.1,
    },
    
    tower: {
        defaultHealth: 10,
    },

    tomatoProjectile:{
        speed : 7,
        hitDamage: 0.3,
    },

    tomatoPlant:{
        growStepTime : 4000,
        cropCount: 5
    },

    pumpkinPlant:{
        growStepTime : 10000,
        cropCount: 3
    },

}

export { Balancing }