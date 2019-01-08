class Player {


    static UP: number = 0;
    static RIGHT: number = 1;
    static DOWN: number = 2;
    static LEFT: number = 3;
    static STOP: number = 4;

    static SPRITE_WIDTH: number = 96 / 3;
    static SPRITE_HEIGHT: number = 144 / 4;
    static SPRITE_SCALE: PIXI.Point = new PIXI.Point(1.2, 1.2);


    sprite: PIXI.extras.AnimatedSprite;
    vx: number;
    vy: number;
    animations: PIXI.Texture[][];
    map: Map;

    constructor(x: number, y: number, map: Map) {
        this.map = map;
        this.animations = [];
        let baseTexture: PIXI.BaseTexture = PIXI.Texture.fromImage("data/assets/ranger_2.png").baseTexture;
        for (let row = 0; row < 4; row++) {
            let textureArray: PIXI.Texture[] = [];
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
    }

    changeDirection(direction: number) {
        if (0 <= direction && direction <= 3) {
            this.sprite.textures = this.animations[direction];
            this.sprite.play();
        }
        else if (direction == Player.STOP) {
            this.sprite.stop();
        }
    }

    keyDown(event) {
        switch (event.key) {
            case "ArrowUp":
                this.vy = -1 * PLAYER_SPEED;
                this.changeDirection(Player.UP);
                break;
            case "ArrowDown":
                this.vy = 1 * PLAYER_SPEED;
                this.changeDirection(Player.DOWN);
                break;
            case "ArrowLeft":
                this.vx = -1 * PLAYER_SPEED;
                this.changeDirection(Player.LEFT);
                break;
            case "ArrowRight":
                this.vx = 1 * PLAYER_SPEED;
                this.changeDirection(Player.RIGHT);
                break;
        }
    }

    keyUp(event) {
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

        for (let x = xRange.from; x <= xRange.to; x++) {
            for (let y = yRange.from; y <= yRange.to; y++) {
                if (this.map.collisionBitMap[y][x] == true) {
                    blocked = true;
                }
            }
        }


        if (blocked == false) {
            this.sprite.x = newX;
            this.sprite.y = newY;
        }
    }


}