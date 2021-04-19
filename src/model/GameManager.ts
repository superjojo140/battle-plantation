import { TiledSpritesheet } from "./TiledSpritesheet";
import { TiledMap } from "./TiledMap";
import { KeyboardManager } from "./KeyboardManager";
import { UpdateScheduler } from "./UpdateScheduler";
import { Application, ApplicationOptions, loader } from "pixi.js";
import { AtlasSpritesheet } from "./AtlasSpritesheet";
import { ITEM } from "./Items";
import uiConstants from "../ui/uiConstants";
import { Player } from "./Player";
import MenuBar from "../ui/menuBar";
import MusicPlayer from '../music/MusicPlayer'
import { Constants } from "./Constants";



export class GameManager {
    
    tiledSpritesheet: TiledSpritesheet;
    atlasSpritesheet: AtlasSpritesheet;
    
    map: TiledMap;
    pixiApp: Application;

    musicPlayer:MusicPlayer;
    
    updateScheduler: UpdateScheduler;
    keyboardManager: KeyboardManager;
    menuBar: MenuBar;
    
    constructor() {
        //Create a Pixi Application
        class PixiOptions implements ApplicationOptions {
            constructor(public width, public height) { }
        }
        const pixiOptions = new PixiOptions(uiConstants.stage.width, uiConstants.stage.height);
        
        this.pixiApp = new Application(pixiOptions);
        
        //Add the canvas that Pixi automatically created for you to the HTML document
        document.body.appendChild(this.pixiApp.view);
    }
    
    
    startGame() {
        
        const toLoad = [
            {name:'tiledSpritesheetTexture', url:`${Constants.ASSET_PATH}/spritesheet.png`},
            {name:'atlasSpritesheetTexture', url:`${Constants.ASSET_PATH}/spritesmith_spritesheet.png`},
            {name:'atlasSpritesheetData', url:`${Constants.ASSET_PATH}/spritesmith_spritesheet.json`},
            {name:'mapData', url:`${Constants.MAP_PATH}/map1.json`},
        ]
        
        loader.add(toLoad).load(this.loaderFinished);
        
    }
    
    private loaderFinished = ()=>{
        
        this.keyboardManager = new KeyboardManager();
        this.updateScheduler = new UpdateScheduler();

        this.musicPlayer = new MusicPlayer(document.getElementById("container"));
        this.musicPlayer.addMusic(`${Constants.MUSIC_PATH}/gogogo.mp3`);
        this.musicPlayer.addMusic(`${Constants.MUSIC_PATH}/Lets_Rest.mp3`);
        this.musicPlayer.addMusic(`${Constants.MUSIC_PATH}/La_Calahorra.mp3`);
        this.musicPlayer.addMusic(`${Constants.MUSIC_PATH}/Towel_Defence_Ending.mp3`);
        //this.musicPlayer.play();
        
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
        players[0].setKeys("w", "s", "a", "d", "c", "y", "x");
        players[0].setColor(0xCCEEAA);
        players[1].setKeys("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "m", "b", "n");
        players[1].setColor(0xCCCCFF);
        
        
        //Draw menu
        this.drawMenuBar(players);
        
        //Start Pixi App
        this.pixiApp.ticker.start();
        
        //this.test();

    }

    
    drawMenuBar(players: Player[]) {
        this.menuBar = new MenuBar(players);
        this.pixiApp.stage.addChild(this.menuBar);
    }
    
    
    
    test() {
        this.map.players[0].inventory.giveItem(ITEM.TNT_PUMPKIN,100);
        this.map.players[0].inventory.giveItem(ITEM.TOMATO_PROJECTILE,100);
        this.map.players[0].inventory.giveItem(ITEM.WALL,100);
        this.map.players[0].placeMode = ITEM.TOMATO_PROJECTILE;
    }
    
}

