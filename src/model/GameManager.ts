import { TiledSpritesheet } from "./TiledSpritesheet";
import { TiledMap } from "./TiledMap";
import { KeyboardManager } from "./KeyboardManager";
import { UpdateScheduler } from "./UpdateScheduler";
import { Application, ApplicationOptions, loader } from "pixi.js";
import { TntPumpkin } from "./TntPumpkin";
import { AtlasSpritesheet } from "./AtlasSpritesheet";

const APP_WIDTH = 512;
const APP_HEIGHT = 512;

export class GameManager {

    tiledSpritesheet: TiledSpritesheet;
    atlasSpritesheet: AtlasSpritesheet;

    map: TiledMap;
    pixiApp: Application;

    updateScheduler: UpdateScheduler;
    keyboardManager: KeyboardManager;

    constructor() {
        //Create a Pixi Application
        class PixiOptions implements ApplicationOptions {
            constructor(public width, public height) { }
        }
        const pixiOptions = new PixiOptions(APP_WIDTH, APP_HEIGHT);

        this.pixiApp = new Application(pixiOptions);

        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(this.pixiApp.view);
    }


    startGame() {

        const toLoad = [
            {name:'tiledSpritesheetTexture', url:'data/assets/spritesheet.png'},
            {name:'atlasSpritesheetTexture', url:'data/assets/spritesmith_spritesheet.png'},
            {name:'atlasSpritesheetData', url:'data/assets/spritesmith_spritesheet.json'},
            {name:'mapData', url:'data/maps/map1.json'},
        ]

        loader.add(toLoad).load(this.loaderFinished);

    }

    private loaderFinished = ()=>{

        this.keyboardManager = new KeyboardManager();
        this.updateScheduler = new UpdateScheduler();

        //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
        this.tiledSpritesheet = new TiledSpritesheet(PIXI.loader.resources.tiledSpritesheetTexture.texture, 1, 16, 16, 31, 57)
        //Atlas Spritesheet
        this.atlasSpritesheet = new AtlasSpritesheet(PIXI.loader.resources.atlasSpritesheetTexture.texture, PIXI.loader.resources.atlasSpritesheetData.data);

        //Register Update scheduler
        this.pixiApp.ticker.add(this.updateScheduler.doStep);

        //Load Map
        this.map = TiledMap.loadMap(PIXI.loader.resources.mapData.data);

        //Display Map
        this.pixiApp.stage.addChild(this.map);

        //Set Player Controls
        const players = this.map.players;
        players[0].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "n");
        players[0].setColor(0xCCCCFF);
        players[1].setKeys("w", "s", "a", "d", "x", "y");
        players[1].setColor(0xCCEEAA);

        //Start Pixi App
        this.pixiApp.ticker.start();

    }





    test() {
        TntPumpkin.testExplosion();
    }

}

