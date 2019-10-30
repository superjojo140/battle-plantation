const SPRITESHEET = new TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57) //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
//TODO Parse this information automatixally from tsx file

const APP_WIDTH = 1000;
const APP_HEIGHT = 700;

class GameManager {

    static map: TiledMap;

    static myCanvas = document.getElementById("#pixiCanvas");
    static pixiApp;


    static startGame() {
        //Create Pixi stuff
        //Create a Pixi Application
        GameManager.pixiApp = new PIXI.Application({
            width: APP_WIDTH,
            height: APP_HEIGHT,
            view: GameManager.myCanvas
        });

        //Add the canvas that Pixi automatically created for you to the HTML document
        //Still neccesarry????
        document.body.appendChild(GameManager.pixiApp.view);

        //Init Keyboard Manager
        KeyboardManager.init();

        //Register Update scheduler
        GameManager.pixiApp.ticker.add(UpdateScheduler.doStep);
    }

}