import { Container, Rectangle, Graphics, Sprite } from "pixi.js";
import { Player } from "../model/Player";
import uiConstants from "./uiConstants";
import { gameManager } from "../index";
import { Balancing } from "../model/Balancing";
import { ITEM } from "../model/Items";

export default class PlayerMenu extends Container {

    player: Player;
    actionIcon:Sprite;
    tomatoProjectileSprites:Sprite[] = [];

    constructor(player: Player, width: number, x:number) {
        super();
        this.player = player;

        this.y = uiConstants.stage.height - uiConstants.menuBar.height;
        this.x = x;

        let bgShape = new Graphics();
        bgShape.beginFill(player.color);
        bgShape.drawRect(0, 0, width, uiConstants.menuBar.height);
        bgShape.endFill();
        this.addChild(bgShape);

        let ai = new Sprite(gameManager.atlasSpritesheet.getTexture(player.placeMode));
        ai.scale.set(uiConstants.menuBar.icon.scale);
        ai.x = (uiConstants.menuBar.height - ai.width) / 2
        ai.y = (uiConstants.menuBar.height - ai.width) / 2
        this.addChild(ai);
        this.actionIcon = ai;

        //Create tomato sprites
        const offsetX = this.width - ((uiConstants.menuBar.inventory.spacing + uiConstants.menuBar.inventory.spriteSize
            ) * Balancing.tomatoProjectile.inventoryLimit)
        for(let i=0; i< Balancing.tomatoProjectile.inventoryLimit;i++){
            let sprite = new Sprite(gameManager.atlasSpritesheet.getTexture(ITEM.TOMATO_PROJECTILE));
            sprite.x = (uiConstants.menuBar.inventory.spriteSize + uiConstants.menuBar.inventory.spacing) * i + offsetX;
            sprite.y = 5;
            this.tomatoProjectileSprites.push(sprite);
            this.addChild(sprite);
        }

        gameManager.updateScheduler.register("playerMenu"+player.playerId,this.doStep);

    }

    doStep = ()=>{
        this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(this.player.placeMode);
        //display tomatoes
        for(let index = 0; index < this.tomatoProjectileSprites.length; index++){
            if(index < this.player.inventory.tomato_projectile){
                this.tomatoProjectileSprites[index].tint = 0xFFFFFF;
            }
            else{
                this.tomatoProjectileSprites[index].tint = 0x222222;
            }
        }
    }

}