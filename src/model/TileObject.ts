import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Plant } from "./Plant";
import { Player } from "./Player";
import { Sprite, Texture, Point } from "pixi.js";
import { UpdateScheduler } from "./UpdateScheduler";
import { gameManager } from "../index";

export abstract class TileObject extends Sprite {

    static onHitSound = new Audio('../data/assets/sound/hit.mp3');
    static onDestroySound = new Audio('../data/assets/sound/blob.mp3');

    mother: Tile;
    solid: boolean = false;
    vulnerable: boolean = true;

    constructor(texture: Texture, mother: Tile, solid?:boolean) {
        super(texture);
        this.mother = mother;

        this.mother.addTileObject(this);

        //set render coordinates
        this.x = this.mother.x;
        this.y = this.mother.y;

        //Set timer for solid tiles
        if(solid){
            this.tint = 0xAAAAAA;
            gameManager.updateScheduler.register(`wait_to_become_solid_${this.mother.gridX}_${this.mother.gridY}`,this.tryToBecomeSolid);
        }
    }

    tryToBecomeSolid = ()=>{
        if(!this.mother.isOccupiedByAnyPlayer()){
            this.tint = 0xFFFFFF;
            this.solid = true;
        }
    }

    
    onHit(hitevent: HitEvent) { };


    onDestroy(initiator: Player) {
        delete this.mother.tileObject;
        this.destroy();
    };

    async wiggle(times) {

        //Prolog
        const radiant = 0.07;
        this.x += this.width / 2;
        this.y += this.height / 2;
        this.anchor.set(0.5);

        //Loop
        while (times > 0) {
            this.rotation += radiant;
            await UpdateScheduler.wait(30);
            this.rotation -= radiant;
            await UpdateScheduler.wait(30);
            this.rotation -= radiant;
            await UpdateScheduler.wait(30);
            this.rotation += radiant;
            await UpdateScheduler.wait(30);

            times--;
        }

        //Epilog
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        this.anchor.set(0);

    }


    async shrink() {

        //Prolog        
        const scaleDiff = 0.2;
        //Change anchor
        this.x += this.width / 2;
        this.y += this.height;
        this.anchor.set(0.5, 1);

        //Loop
        while (this.scale.x > 0 && this.scale.y > 0) {
            this.scale.x -= scaleDiff;
            this.scale.y -= scaleDiff;
            await UpdateScheduler.wait(10);
        }

        //Epilog
        this.anchor.set(0);

    }

    async blink(times) {

        //Loop
        while (times > 0) {
            //Give the tileobject a green tint
            this.tint = 0xFFAAAA;
            await UpdateScheduler.wait(200);
            //Remove the tint
            this.tint = 0xFFFFFF;
            await UpdateScheduler.wait(200);
            times--;
        }

    }






}
