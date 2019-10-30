class Player {
    constructor(x, y, map) {
        this.map = map;
        this.animations = [];
        let baseTexture = PIXI.Texture.fromImage("data/assets/ranger_2.png").baseTexture;
        for (let row = 0; row < 4; row++) {
            let textureArray = [];
            for (let column = 0; column < 3; column++) {
                let t = new PIXI.Texture(baseTexture, new PIXI.Rectangle(column * Player.SPRITE_WIDTH, row * Player.SPRITE_HEIGHT, Player.SPRITE_WIDTH, Player.SPRITE_HEIGHT));
                textureArray.push(t);
            }
            this.animations.push(textureArray);
        }
        this.sprite = new PIXI.extras.AnimatedSprite(this.animations[Player.DOWN]);
        this.sprite.x = x;
        this.sprite.y = y;
        this.vx = 0;
        this.vy = 0;
        this.sprite.scale = Player.SPRITE_SCALE;
        this.sprite.animationSpeed = 0.13;
        this.sprite.loop = true;
        this.lastKey = "";
    }
    changeDirection(direction) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == Player.STOP) {
            this.sprite.stop();
        }
    }
    keyDown(event) {
        if (event.key != this.lastKey) {
            this.lastKey = event.key;
            switch (event.key) {
                case "ArrowUp":
                    this.vy = -1 * Player.PLAYER_SPEED;
                    this.changeDirection(Player.UP);
                    break;
                case "ArrowDown":
                    this.vy = 1 * Player.PLAYER_SPEED;
                    this.changeDirection(Player.DOWN);
                    break;
                case "ArrowLeft":
                    this.vx = -1 * Player.PLAYER_SPEED;
                    this.changeDirection(Player.LEFT);
                    break;
                case "ArrowRight":
                    this.vx = 1 * Player.PLAYER_SPEED;
                    this.changeDirection(Player.RIGHT);
                    break;
            }
        }
    }
    keyUp(event) {
        this.lastKey = "";
        switch (event.key) {
            case "ArrowUp":
                this.vy = 0;
                this.changeDirection(Player.STOP);
                break;
            case "ArrowDown":
                this.vy = 0;
                this.changeDirection(Player.STOP);
                break;
            case "ArrowLeft":
                this.vx = 0;
                this.changeDirection(Player.STOP);
                break;
            case "ArrowRight":
                this.vx = 0;
                this.changeDirection(Player.STOP);
                break;
        }
    }
    doStep(delta) {
        let newX = this.sprite.x + this.vx * delta;
        let newY = this.sprite.y + this.vy * delta;
        let xRange = {
            from: Math.floor(newX / this.map.finalTileWidth),
            to: Math.floor((newX + this.sprite.width) / this.map.finalTileWidth)
        };
        let yRange = {
            from: Math.floor(newY / this.map.finalTileHeight),
            to: Math.floor((newY + this.sprite.height) / this.map.finalTileHeight)
        };
        let blocked = false;
        /*
        for (let x = xRange.from; x <= xRange.to; x++) {
            for (let y = yRange.from; y <= yRange.to; y++) {
                if (this.map.collisionBitMap[y] == undefined || this.map.collisionBitMap[y][x] == undefined || this.map.collisionBitMap[y][x] == true) {
                    blocked = true;
                }
            }
        }*/
        if (blocked == false) {
            this.sprite.x = newX;
            this.sprite.y = newY;
        }
        //Check for event
        let originalX = this.sprite.x;
        let xTiles = originalX / this.map.finalTileWidth;
        xTiles = Math.round(xTiles);
        let originalY = this.sprite.y;
        let yTiles = originalY / this.map.finalTileHeight;
        yTiles = Math.round(yTiles);
    }
}
Player.UP = 0;
Player.RIGHT = 1;
Player.DOWN = 2;
Player.LEFT = 3;
Player.STOP = 4;
Player.SPRITE_WIDTH = 96 / 3;
Player.SPRITE_HEIGHT = 144 / 4;
Player.SPRITE_SCALE = new PIXI.Point(1.5, 1.5);
Player.PLAYER_SPEED = 3;
