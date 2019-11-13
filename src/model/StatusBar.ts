import { TileObject } from "./TileObject";
import { Container, Graphics } from "pixi.js";
import { GameManager } from "./GameManager";

export class StatusBar extends Container {

    frame: Graphics;
    progressShape: Graphics;
    progress: number; //From 0 to 1
    mother : TileObject;

    static LINE_THICKNESS = 3;

    constructor(mother: TileObject, progress: number) {
        super();
        this.mother = mother;
        this.progress = progress;

        const map = mother.mother.map;
        map.tileObjectContainer.addChild(this);
        //position relative to mother
        this.x = mother.x;
        this.y = mother.y;
        this.width = mother.width;
        this.height = mother.height
        //Draw yourself
        this.frame = new Graphics();
        // set the line style to have a width of 5 and set the color to red
        this.frame.lineStyle(StatusBar.LINE_THICKNESS, 0xFF0000);
        // draw a rectangle
        this.frame.drawRect(0, 0, 64, StatusBar.LINE_THICKNESS*3);
        this.addChild(this.frame);

 

        this.setProgress(progress);
    }

    updateView() {
        //Paint yourself
        this.progressShape = new Graphics();
        // set the line style to have a width of 5 and set the color to red
        this.progressShape.lineStyle(StatusBar.LINE_THICKNESS, 0x00FF00);
        // draw a rectangle
        this.progressShape.drawRect(StatusBar.LINE_THICKNESS, StatusBar.LINE_THICKNESS, 64 * this.progress, StatusBar.LINE_THICKNESS);
        this.addChild(this.progressShape);
    }

    setProgress(progress: number) {
        this.progress = progress;
        this.updateView();
    }


}