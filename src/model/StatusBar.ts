import { TileObject } from "./TileObject";
import { Container, Graphics } from "pixi.js";

export class StatusBar extends Container {

    borderRectangle: Graphics;
    borderColor: number
    progressShape: Graphics;
    progressColor: number;
    progress: number; //From 0 to 1
    mother: TileObject;

    static LINE_THICKNESS = 3;

    constructor(mother: TileObject, visible?: boolean, progress?: number, borderColor?: number, progressColor?: number) {
        super();
        this.mother = mother;
        this.visible = visible === undefined ? true : visible;
        this.progress = progress || 1;
        this.borderColor = borderColor || 0xFF0000;
        this.progressColor = progressColor || 0x00FF00;

        //Add to pixi container
        const map = mother.mother.map;

        map.extraStuffContainer.addChild(this);

        //position relative to mother
        this.x = mother.x;
        this.y = mother.y;
        this.width = mother.width;
        this.height = mother.height;

        //Draw frame
        this.borderRectangle = new Graphics();
        this.borderRectangle.lineStyle(StatusBar.LINE_THICKNESS, this.borderColor);
        this.borderRectangle.drawRect(0, 0, map.finalTileWidth, StatusBar.LINE_THICKNESS * 3);
        this.addChild(this.borderRectangle);

        this.setProgress(this.progress);
    }

    updateView() {
        //Clear last progress Shape
        if (this.progressShape) {
            this.removeChild(this.progressShape);
        }
        if (this.progress >= 0.1) { //Draw too small progress looks ugly
            //Draw new progressbar
            this.progressShape = new Graphics();

            //Don't worry about this crazy +1/-1 pixels, they are crazy, but necessary
            const lineWidth = 64 * this.progress - StatusBar.LINE_THICKNESS + 1;
            const thick = StatusBar.LINE_THICKNESS * 2;

            this.progressShape.lineStyle(thick, this.progressColor)
                .moveTo(StatusBar.LINE_THICKNESS - 1, thick - 1)
                .lineTo(lineWidth, thick - 1);

            this.addChild(this.progressShape);
        }
    }

    setProgress(progress: number) {
        if (progress < 0 || progress > 1) {
            throw Error("Can't set progress lower than 0 or higher than 1")
        }
        this.progress = progress;
        this.updateView();
    }


}