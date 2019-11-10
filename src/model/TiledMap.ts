class TiledMap extends PIXI.Container {

    static MAP_ZOOM = 4;

    players: Player[];
    spritesheet: TiledSpritesheet;
    isPaused: boolean;
    finalTileWidth: number;
    finalTileHeight: number;
    tiles : Tile[][];
    tileContainer:PIXI.Container;
    playerContainer: PIXI.Container;
    tileObjectContainer: PIXI.Container;


    constructor() {
        super();
        this.playerContainer = new PIXI.Container();
        this.addChild(this.playerContainer);

        this.tileObjectContainer = new PIXI.Container();
        this.addChild(this.tileObjectContainer);

        this.tileContainer = new PIXI.Container();
        this.addChild(this.tileContainer);
    }


    static getMapObjectProperty(mapObject: any, name: string) {
        for (const prop of mapObject.properties) {
            if (prop.name == name) {
                return prop.value();
            }
        }

    }

    //Loads the map with spritesheet. Last parameter is callback function which is called after parsing the map with the new parsed map as parameter
    static loadMap(mapPath: string, spritesheet: TiledSpritesheet, callback: Function) {
        //Create new Map
        let map: TiledMap = new TiledMap();

        //Load Spritesheet
        let SPRITE_SCALE: PIXI.Point = new PIXI.Point(TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
        map.finalTileWidth = spritesheet.tileWidth * SPRITE_SCALE.x;
        map.finalTileHeight = spritesheet.tileHeight * SPRITE_SCALE.y;
        map.spritesheet = spritesheet;

        //Load Map and Parse it
        $.getJSON(mapPath, {}, function (mapData) {

            //Iterate thorugh Tile Layers
            for (let layerIndex in mapData.layers) {
                let tl = mapData.layers[layerIndex];

                if (tl.type == "objectgroup") {


                    //Add all players first
                    for (const co of tl.obejcts) {
                        /*
                        *      _____  _                       
                        *     |  __ \| |                      
                        *     | |__) | | __ _ _   _  ___ _ __ 
                        *     |  ___/| |/ _` | | | |/ _ \ '__|
                        *     | |    | | (_| | |_| |  __/ |   
                        *     |_|    |_|\__,_|\__, |\___|_|   
                        *                      __/ |          
                        *                     |___/           
                        */

                        if (co.type == "player") {
                            let x = Math.round(co.x * SPRITE_SCALE.x);
                            let y = (Math.round(co.y) - co.height) * SPRITE_SCALE.y; // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner
                            const playerId: number = TiledMap.getMapObjectProperty(co, "playerId");
                            const newPlayer = new Player(x, y, map, playerId);
                            this.addPlayer(newPlayer);
                        }
                    }



                    //Generate Sprites for each object to the container
                    for (const co of tl.objects) {
                        /*
                         *      _______                     
                         *     |__   __|                    
                         *        | | _____      _____ _ __ 
                         *        | |/ _ \ \ /\ / / _ \ '__|
                         *        | | (_) \ V  V /  __/ |   
                         *        |_|\___/ \_/\_/ \___|_|   
                         *                                  
                         *                                  
                         */


                        if (co.type == "tower") {

                            let texture = spritesheet.getTexture(co.gid);
                            const ownerId = TiledMap.getMapObjectProperty(co, "owner");
                            const owner = map.players[ownerId];
                            const parent = map.getTileNearestTo(co);
                            let newTower = new Tower(texture, parent, owner);
                            newTower.scale = SPRITE_SCALE;
                            map.addTileObject(newTower);
                        }


                        /*
                         *      _______            
                         *     |__   __|           
                         *        | |_ __ ___  ___ 
                         *        | | '__/ _ \/ _ \
                         *        | | | |  __/  __/
                         *        |_|_|  \___|\___|
                         *                         
                         *                         
                         */


                         //TODO ADD A TREE 





                    }

                } else {
                    if (tl.type == "tilelayer") {

                        //Could be reused for safe areas
                        if (tl.name == "Collision" || tl.name == "collision") {
                            /*map.collisionBitMap = [];
                            //Generate Bitmap for Collisions. Any GID != 0 is interpreted as solid
                            for (let row = 0; row < tl.height; row++) {
                                map.collisionBitMap[row] = [];
                                for (let column = 0; column < tl.width; column++) {
                                    let index = row * tl.width + column;
                                    // gid != 0 means solid
                                    if (tl.data[index] != 0) {
                                        map.collisionBitMap[row][column] = true;
                                    }
                                    else {
                                        map.collisionBitMap[row][column] = false;
                                    }
                                }
                            }*/
                        }
                        else { //Not the collision layer


                            //}if(true){  //Draw the CollisionLayer - only for Debug



                            //Create new PIXI Container for this layer
                            let container = new PIXI.Container();
                            container.width = tl.width * spritesheet.tileWidth;
                            container.height = tl.height * spritesheet.tileHeight;
                            container.x = tl.x;
                            container.y = tl.y;
                            map.addChild(container);

                            //Generate Sprites for each tile to the container
                            for (let row = 0; row < tl.height; row++) {
                                for (let column = 0; column < tl.width; column++) {
                                    let index = row * tl.width + column;
                                    if (tl.data[index] > 0) {
                                        let texture = spritesheet.getTexture(tl.data[index]);
                                        let sprite = new PIXI.Sprite(texture);
                                        sprite.x = column * spritesheet.tileWidth * SPRITE_SCALE.x;
                                        sprite.y = row * spritesheet.tileHeight * SPRITE_SCALE.y;
                                        sprite.scale = SPRITE_SCALE;
                                        container.addChild(sprite);
                                    }
                                }
                            }
                        }
                    } else //Layer is not of type "tilelayer"
                        console.warn(`Ignoring Layer "${tl.name}". Layers of type "${tl.type}" are not supported yet.`);
                }
            }

            //Call onFinish Callback
            callback(map);
        });

    }

    addPlayer(player: Player) {
        this.players[player.playerId] = player;
        this.playerContainer.addChild(player.sprite);
    }

    addTileObject(tileObject: TileObject) {
        this.playerContainer.addChild(tileObject);
    }

    addTile(tile:Tile){
        this.tiles[tile.gridY][tile.gridX] = tile;
    }

    pause() {
        this.isPaused = true;
    }

    play() {
        this.isPaused = false;
    }

    getObjectCoordinates(mapObject:PIXI.Rectangle) {
        let SPRITE_SCALE: PIXI.Point = new PIXI.Point(TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
        //an Object can be placed "between" tiles in tiled map editor. But evnts can be triggered only from whole tiles. So the obejccts position is mapped to the nearest Tile

        let originalX = mapObject.x * SPRITE_SCALE.x;
        let xTiles = originalX / this.finalTileWidth;
        xTiles = Math.round(xTiles);

        let originalY = (mapObject.y - mapObject.height) * SPRITE_SCALE.y;  // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner              
        let yTiles = originalY / this.finalTileHeight;
        yTiles = Math.round(yTiles);

        const gridX = xTiles * this.finalTileWidth;
        const gridY = yTiles * this.finalTileHeight;

        return { gridX: gridX, gridY: gridY };
    }

    getTileNearestTo(mapObject:PIXI.Rectangle):Tile{
        const pos = this.getObjectCoordinates(mapObject);
        return this.tiles[pos.gridY][pos.gridX];
    }

}