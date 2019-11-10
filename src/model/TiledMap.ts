class TiledMap extends PIXI.Container {

    static MAP_ZOOM = 4;
    static SPRITE_SCALE: PIXI.Point = new PIXI.Point(TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);

    players: Player[];
    spritesheet: TiledSpritesheet;
    isPaused: boolean;
    finalTileWidth: number;
    finalTileHeight: number;
    tiles: Tile[][];
    tileContainer: PIXI.Container;
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
                        else if (co.type == "tree") {
                            let texture = spritesheet.getTexture(co.gid);
                            const parent = map.getTileNearestTo(co);
                            let newTree = new Tree(texture, parent);
                            map.addTileObject(newTree);
                        }





                    }

                } else {
                    if (tl.type == "tilelayer") {

                        //Generate Tiles for each tile to the container
                        for (let row = 0; row < tl.height; row++) {
                            for (let column = 0; column < tl.width; column++) {
                                let index = row * tl.width + column;
                                if (tl.data[index] > 0) {
                                    let texture = spritesheet.getTexture(tl.data[index]);
                                    const newTile = new Tile(texture, row, column);
                                    map.addTile(newTile);
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
        //player.sprite.scale = TiledMap.SPRITE_SCALE;
        this.players[player.playerId] = player;
        this.playerContainer.addChild(player.sprite);
    }

    addTileObject(tileObject: TileObject) {
        tileObject.scale = TiledMap.SPRITE_SCALE;
        this.playerContainer.addChild(tileObject);
    }

    addTile(tile: Tile) {
        tile.x = tile.gridX * this.spritesheet.tileWidth * TiledMap.SPRITE_SCALE.x;
        tile.y = tile.gridY * this.spritesheet.tileHeight * TiledMap.SPRITE_SCALE.y;
        tile.scale = TiledMap.SPRITE_SCALE;

        this.tiles[tile.gridY][tile.gridX] = tile;        
    }

    pause() {
        this.isPaused = true;
    }

    play() {
        this.isPaused = false;
    }

    getObjectCoordinates(mapObject: PIXI.Rectangle) {
       
        //an Object can be placed "between" tiles in tiled map editor. But evnts can be triggered only from whole tiles. So the obejccts position is mapped to the nearest Tile

        let originalX = mapObject.x * TiledMap.SPRITE_SCALE.x;
        let xTiles = originalX / this.finalTileWidth;
        xTiles = Math.round(xTiles);

        let originalY = (mapObject.y - mapObject.height) * TiledMap.SPRITE_SCALE.y;  // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner              
        let yTiles = originalY / this.finalTileHeight;
        yTiles = Math.round(yTiles);

        const gridX = xTiles * this.finalTileWidth;
        const gridY = yTiles * this.finalTileHeight;

        return { gridX: gridX, gridY: gridY };
    }

    getTileNearestTo(mapObject: PIXI.Rectangle): Tile {
        const pos = this.getObjectCoordinates(mapObject);
        return this.tiles[pos.gridY][pos.gridX];
    }

}