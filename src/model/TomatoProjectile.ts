import { Player } from './Player';
import { Sprite } from 'pixi.js';
import {DIRECTION} from "./Player"

export class TomatoProjectile extends Sprite{

static createTomatoProjectile(x:number,y:number,direction:DIRECTION){
    console.log("creating tomato projectile!!!");
}

}