import { TileObject } from "./TileObject";
import { Container, Graphics } from "pixi.js";

export class StatusBar extends Container{

    frame : Graphics;
    progressShape : Graphics;
    progress : number; //From 0 to 1

    constructor(parent:TileObject,progress:number){
        super();
        //position relative to parent
        this.setProgress(progress);
    }

    updateView(){
        //Paint yourself
    }

    setProgress(progress:number){
        this.progress = progress;
        this.updateView();
    }


}