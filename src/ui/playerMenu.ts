import { Container, Rectangle, Graphics, Sprite } from "pixi.js";
import { Player } from "../model/Player";
import uiConstants from "./uiConstants";
import { gameManager } from "../index";
import { Balancing } from "../model/Balancing";
import { ITEM } from "../model/Items";

interface InventorySprites {
    item: ITEM;
    sprites: Sprite[];
}

export default class PlayerMenu extends Container {

    player: Player;
    actionIcon: Sprite;
    inventorySpritesList: InventorySprites[] = [];

    constructor(player: Player, width: number, x: number) {
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

        this.createInventorySprites(ITEM.TOMATO_PROJECTILE,5);
        this.createInventorySprites(ITEM.TNT_PUMPKIN,20);
        this.createInventorySprites(ITEM.WALL,35);


        gameManager.updateScheduler.register("playerMenu" + player.playerId, this.doStep);

    }

    createInventorySprites(item: ITEM, y: number) {
        const offsetX = this.width - ((uiConstants.menuBar.inventory.spacing + uiConstants.menuBar.inventory.spriteSize
        ) * Balancing[item].inventoryLimit);
        const invSprites = { item: item, sprites: [] };
        for (let i = 0; i < Balancing[item].inventoryLimit; i++) {
            let sprite = new Sprite(gameManager.atlasSpritesheet.getTexture(item));
            sprite.x = (uiConstants.menuBar.inventory.spriteSize + uiConstants.menuBar.inventory.spacing) * i + offsetX;
            sprite.y = y;
            invSprites.sprites.push(sprite);
            this.addChild(sprite);
        }
        this.inventorySpritesList.push(invSprites);
    }

    doStep = () => {
        this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(this.player.placeMode);
        //display tomatoes
        // for (let index = 0; index < this.tomatoProjectileSprites.length; index++) {
        //     if (index < this.player.inventory.tomato_projectile) {
        //         this.tomatoProjectileSprites[index].tint = 0xFFFFFF;
        //     }
        //     else {
        //         this.tomatoProjectileSprites[index].tint = 0x222222;
        //     }
        // }
    }

}