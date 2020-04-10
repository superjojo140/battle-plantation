import { Container, Rectangle, Graphics, Sprite } from "pixi.js";
import { Player } from "../model/Player";
import uiConstants from "./uiConstants";
import { gameManager } from "../index";

export default class PlayerMenu extends Container {

    player: Player;

    actionIcon:Sprite;

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

        gameManager.updateScheduler.register("playerMenu"+player.playerId,this.doStep);

    }

    doStep = ()=>{
        this.actionIcon.texture = gameManager.atlasSpritesheet.getTexture(this.player.placeMode);
    }

}