import { TiledSpritesheet } from "./TiledSpritesheet";
import { TiledMap } from "./TiledMap";
import { KeyboardManager } from "./KeyboardManager";
import { UpdateScheduler } from "./UpdateScheduler";
import { Application, ApplicationOptions } from "pixi.js";



const APP_WIDTH = 512;
const APP_HEIGHT = 512;

export class GameManager {

    spriteSheet: TiledSpritesheet;


    map: TiledMap;

    pixiApp: Application;

    updateScheduler: UpdateScheduler;
    keyboardManager: KeyboardManager;

    constructor() {
        this.keyboardManager = new KeyboardManager();
        this.updateScheduler = new UpdateScheduler();
        this.spriteSheet = new TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57) //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
    }


    startGame() {
        //Create Pixi stuff
        //Create a Pixi Application
        class PixiOptions implements ApplicationOptions {
            constructor(public width, public height) { }
        }
        const pixiOptions = new PixiOptions(APP_WIDTH, APP_HEIGHT);

        this.pixiApp = new Application(pixiOptions);

        //Add the canvas that Pixi automatically created for you to the HTML document
        //Still neccesarry????
        document.body.appendChild(this.pixiApp.view);

        //Register Update scheduler
        this.pixiApp.ticker.add(this.updateScheduler.doStep);


        TiledMap.loadMap("data/maps/map1.json", this.spriteSheet, (parsedMap: TiledMap) => {
            this.map = parsedMap;
            this.pixiApp.stage.addChild(parsedMap);
            this.pixiApp.ticker.start();

            const players = parsedMap.players;
            players[0].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "n");
            players[1].setKeys("w", "s", "a", "d", "x", "y");
        });
    }

}

