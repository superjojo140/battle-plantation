import { Tile } from "./Tile";
import { HitEvent } from "./HitEvent";
import { Plant } from "./Plant";
import { Player } from "./Player";
import { Sprite, Texture, Point } from "pixi.js";

export abstract class TileObject extends Sprite {

    static onHitSound = new Audio('../data/assets/sound/blob4.mp3');
    static onDestroySound = new Audio('../data/assets/sound/blob1.mp3');

    mother: Tile;
    solid: boolean = false;
    vulnerable: boolean = true;

    constructor(texture: Texture, mother: Tile) {
        super(texture);
        this.mother = mother;

        this.mother.addTileObject(this);



        //set render coordinates
        this.x = this.mother.x;
        this.y = this.mother.y;
    }

    static wait = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    onHit(hitevent: HitEvent) { };

    onPlant(plant: Plant) { };

    onHarvest(initiator: Player) { };

    onDestroy(initiator: Player) {
        delete this.mother.tileObject;
        this.shrinkAndDie();
    };

    wiggle(times) {
        this.vulnerable = false;
        this.x += this.width / 2;
        this.y += this.height / 2;
        this.anchor.set(0.5);
        this.wiggleRecursiv(times * 4);
    }

    private wiggleRecursiv = (times: number) => {
        const radiant = 0.07;
        if (times > 0) {
            switch (times % 4) {
                case 0: this.rotation += radiant; break;
                case 1: this.rotation -= radiant; break;
                case 2: this.rotation -= radiant; break;
                case 3: this.rotation += radiant; break;
            }
            setTimeout(() => { this.wiggleRecursiv(--times) }, 30);
        }
        else {
            this.x -= this.width / 2;
            this.y -= this.height / 2;
            this.anchor.set(0);
            this.vulnerable = true;
        }

    }

    shrinkAndDie() {
        this.vulnerable = false;
        this.x += this.width / 2;
        this.y += this.height;
        this.anchor.set(0.5, 1);
        this.shrinkAndDieRecursive(this.scale);
    }

    private shrinkAndDieRecursive = (scale) => {
        const scaleDiff = 0.2;
        if (scale.x <= 0 || scale.y <= 0) {
            this.destroy();
        }
        else {
            this.scale.x = scale.x - scaleDiff;
            this.scale.y = scale.y - scaleDiff;
            setTimeout(() => { this.shrinkAndDieRecursive(this.scale) }, 10);
        }
    }

    async blink(times) {

        //Prolog
        this.vulnerable = false;

        //Loop
        while (times > 0) {
            //Give the tileobject a green tint
            this.tint = 0xFFAAAA;
            await TileObject.wait(200);
            //Remove the tint
            this.tint = 0xFFFFFF;
            await TileObject.wait(200);
            times--;
        }

        //Epilog
        this.vulnerable = true;

    }






}
