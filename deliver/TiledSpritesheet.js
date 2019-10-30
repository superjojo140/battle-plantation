class TiledSpritesheet {
    constructor(path, border, tileWidth, tileHeight, rows, columns) {
        this.path = path;
        this.border = border;
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;
        this.rows = rows;
        this.columns = columns;
        this.bigTexture = PIXI.Texture.fromImage(path, true, PIXI.SCALE_MODES.NEAREST);
        this.textures = [];
    }
    getTexture(gid) {
        //Check wether textures was allready framed form spritesheet
        if (this.textures[gid]) {
            return this.textures[gid];
        }
        else {
            //Calculate row and column from gid
            let row = Math.floor((gid - 1) / this.columns);
            let column = (gid - 1) % this.columns;
            let tileWidth = this.tileWidth;
            let tileHeight = this.tileHeight;
            let x = column * tileWidth + column * this.border;
            let y = row * tileHeight + row * this.border;
            let t = new PIXI.Texture(this.bigTexture.baseTexture, new PIXI.Rectangle(x, y, tileWidth, tileHeight));
            //Save Texture in cache array
            this.textures[gid] = t;
            return t;
        }
    }
}
