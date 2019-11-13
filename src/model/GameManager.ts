import { TiledSpritesheet } from "./TiledSpritesheet";
import { TiledMap } from "./TiledMap";
import { KeyboardManager } from "./KeyboardManager";
import { UpdateScheduler } from "./UpdateScheduler";
import { Application, ApplicationOptions } from "pixi.js";

const SPRITESHEET = new TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57) //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
//TODO Parse this information automatixally from tsx file

const APP_WIDTH = 512;
const APP_HEIGHT = 512;

export class GameManager {

    static map: TiledMap;

    static pixiApp : Application;


    static startGame() {
        //Create Pixi stuff
        //Create a Pixi Application
        class PixiOptions implements ApplicationOptions{
            constructor(public width,public height){}
        }
        const pixiOptions = new PixiOptions(APP_WIDTH,APP_HEIGHT);

        GameManager.pixiApp = new Application(pixiOptions);

        //Add the canvas that Pixi automatically created for you to the HTML document
        //Still neccesarry????
        document.body.appendChild(GameManager.pixiApp.view);

        //Init Keyboard Manager
        KeyboardManager.init();

        //Register Update scheduler
        GameManager.pixiApp.ticker.add(UpdateScheduler.doStep);

        
        TiledMap.loadMap("data/maps/map1.json",SPRITESHEET,function(parsedMap:TiledMap){
            console.log("Map parsed");
            GameManager.map = parsedMap;
            GameManager.pixiApp.stage.addChild(parsedMap);
            GameManager.pixiApp.ticker.start();

            console.log(parsedMap);

            const players = parsedMap.players;
            players[0].setKeys("ArrowUp","ArrowDown","ArrowLeft","ArrowRight","m","n");
            players[1].setKeys("w","s","a","d","x","y");
        });
    }

}