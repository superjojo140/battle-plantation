import { Container } from "pixi.js";
import { Player } from "../model/Player"
import PlayerMenu from "./playerMenu";
import uiConstants from "./uiConstants";

export default class MenuBar extends Container {

    playerMenus: PlayerMenu[] = [];

    constructor(players: Player[]) {
        super();

        for (let i: number = 0; i < players.length; i++) {
            const menuWidth = uiConstants.stage.width / players.length;
            const playerMenu = new PlayerMenu(players[i], menuWidth, menuWidth * i);
            this.playerMenus.push(playerMenu);
            this.addChild(playerMenu);
        }
    }

}