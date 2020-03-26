import { Texture, SCALE_MODES, Rectangle } from "pixi.js";

export class AtlasSpritesheet {

	atlasData;
	bigTexture: Texture;


	constructor(texture, atlasData) {
		this.atlasData = atlasData;
		this.bigTexture = texture;
		this.bigTexture.baseTexture.scaleMode = SCALE_MODES.NEAREST;		
	}

	getTexture(name: string): Texture {

		const props = this.atlasData.items[name];
		if (props == undefined) {
			throw new Error(`Can't find texture '${name}' in spritesheet`);
		}

		return new Texture(this.bigTexture.baseTexture, new Rectangle(props.x, props.y, props.width, props.height));
	}


}