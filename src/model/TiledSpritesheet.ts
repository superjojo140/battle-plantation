import { Texture, SCALE_MODES, Rectangle } from "pixi.js";

export class TiledSpritesheet{

	border: number;
	tileHeight: number;
	tileWidth: number;
	rows: number;
	columns: number;
	bigTexture: Texture;
	textures: Texture[];

	constructor(texture,border,tileWidth,tileHeight,rows,columns){
		this.border = border;
		this.tileHeight = tileHeight;
		this.tileWidth = tileWidth;
		this.rows = rows;
		this.columns = columns;
		this.bigTexture = texture;
		this.bigTexture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
		this.textures = [];
	}

	getTexture(gid:number):Texture  {
		//Check wether textures was allready framed form spritesheet
		if (this.textures[gid]) {
		  return this.textures[gid];
		} else {
		  //Calculate row and column from gid
		  let row:number = Math.floor((gid - 1) / this.columns);
		  let column:number = (gid - 1) % this.columns;
	
		  let tileWidth:number = this.tileWidth;
		  let tileHeight:number = this.tileHeight;
	
		  let x:number = column * tileWidth + column * this.border;
		  let y:number = row * tileHeight + row * this.border;
	
		  let t:Texture = new Texture(this.bigTexture.baseTexture, new Rectangle(x, y, tileWidth, tileHeight));
		  //Save Texture in cache array
		  this.textures[gid] = t;
		  return t;
		}
	  }
	

}