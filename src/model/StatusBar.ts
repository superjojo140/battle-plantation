import { TileObject } from "./TileObject";

export class StatusBar extends PIXI.Container{

    frame : PIXI.Graphics;
    progressShape : PIXI.Graphics;
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