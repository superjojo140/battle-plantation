import { Container, Graphics, Sprite } from "pixi.js";
import { gameManager } from "../index";
import { Balancing } from "../model/Balancing";
import { ITEM } from "../model/Items";
import { Player } from "../model/Player";
import uiConstants from "./uiConstants";

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

        //Drae background
        let bgShape = new Graphics();
        bgShape.beginFill(player.color);
        bgShape.drawRect(0, 0, width, uiConstants.menuBar.height);
        bgShape.endFill();
        this.addChild(bgShape);

        //Create placeMode sprite
        let ai = new Sprite(gameManager.atlasSpritesheet.getTexture(player.placeMode));
        ai.scale.set(uiConstants.menuBar.icon.scale);
        ai.x = (uiConstants.menuBar.height - ai.width) / 2
        ai.y = (uiConstants.menuBar.height - ai.width) / 2
        this.addChild(ai);
        this.actionIcon = ai;

        //Create inventory sprites
        const vSpace = uiConstants.menuBar.inventory.verticalSpacing;
        const spriteSize = uiConstants.menuBar.inventory.spriteSize;
        let yPos = vSpace;
        this.createInventorySprites(ITEM.TOMATO_PROJECTILE, yPos);
        this.createInventorySprites(ITEM.TNT_PUMPKIN, yPos += vSpace + spriteSize);
        this.createInventorySprites(ITEM.WALL, yPos += vSpace + spriteSize);

        gameManager.updateScheduler.register("playerMenu" + player.playerId, this.doStep);

    }

    private createInventorySprites(item: ITEM, y: number) {
        const offsetX = this.width - ((uiConstants.menuBar.inventory.horizontalSpacing + uiConstants.menuBar.inventory.spriteSize
        ) * Balancing[item].inventoryLimit);
        const invSprites = { item: item, sprites: [] };
        for (let i = 0; i < Balancing[item].inventoryLimit; i++) {
            let sprite = new Sprite(gameManager.atlasSpritesheet.getTexture(item));
            sprite.x = (uiConstants.menuBar.inventory.spriteSize + uiConstants.menuBar.inventory.horizontalSpacing) * i + offsetX;
            sprite.y = y;
            invSprites.sprites.push(sprite);
            this.addChild(sprite);
        }
        this.inventorySpritesList.push(invSprites);
    }

    doStep = () => {
        this.updatePlaceMode();
        this.updateInventoryState();
    }


    private updateInventoryState() {
        for (let invSprite of this.inventorySpritesList) {
            for (let index = 0; index < invSprite.sprites.length; index++) {
                if (index < this.player.inventory[invSprite.item]) {
                    invSprite.sprites[index].tint = 0xFFFFFF;
                }
                else {
                    invSprite.sprites[index].tint = 0x222222;
                }
            }
        }
    }

    private updatePlaceMode() {
        this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(this.player.placeMode);
    }
}