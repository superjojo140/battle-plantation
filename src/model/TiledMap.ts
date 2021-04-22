import { Player } from "./Player";
import { Tile } from "./Tile";
import { Tower } from "./Tower";
import { Tree } from "./Tree";
import { TileObject } from "./TileObject";
import { Container, Point, Rectangle } from "pixi.js";
import { Wall } from "./Wall";
import { gameManager } from "../index";

export class TiledMap extends Container {

    static MAP_ZOOM = 4;
    static SPRITE_SCALE: Point = new Point(TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);

    players: Player[];
    isPaused: boolean;
    finalTileWidth: number;
    finalTileHeight: number;
    /**Hold all Tiles. Usage: tiles[y][x] */
    private tiles: Tile[][];
    gridWidth: number;
    gridHeight: number;
    tileContainer: Container;
    playerContainer: Container;
    tileObjectContainer: Container;
    extraStuffContainer: Container;


    constructor() {
        super();

        this.tileContainer = new Container();
        this.addChild(this.tileContainer);

        this.tileObjectContainer = new Container();
        this.addChild(this.tileObjectContainer);

        this.playerContainer = new Container();
        this.addChild(this.playerContainer);

        this.extraStuffContainer = new Container();
        this.addChild(this.extraStuffContainer);

        this.players = [];
    }


    getMapObjectProperty(mapObject: any, name: string) {
        for (const prop of mapObject.properties) {
            if (prop.name == name) {
                return prop.value;
            }
        }

    }

    //Loads the map with spritesheet. Last parameter is callback function which is called after parsing the map with the new parsed map as parameter
    static loadMap(mapData) {

        const map = new TiledMap();
        const tiledSpritesheet = gameManager.tiledSpritesheet;
        const atlasSpritesheet = gameManager.atlasSpritesheet;

        let SPRITE_SCALE: Point = new Point(TiledMap.MAP_ZOOM, TiledMap.MAP_ZOOM);
        map.finalTileWidth = tiledSpritesheet.tileWidth * SPRITE_SCALE.x;
        map.finalTileHeight = tiledSpritesheet.tileHeight * SPRITE_SCALE.y;

        //Build all TileLayers first
        for (const tl of mapData.layers) {
            if (tl.type == "tilelayer") {

                map.gridWidth = tl.width;
                map.gridHeight = tl.height;

                //Init map's tiles array
                map.tiles = new Array(map.gridHeight);
                for (let i = 0; i < map.tiles.length; i++) {
                    map.tiles[i] = new Array(map.gridWidth);
                }

                //Generate Tiles for each tile to the container
                for (let row = 0; row < tl.height; row++) {
                    for (let column = 0; column < tl.width; column++) {
                        let index = row * tl.width + column;
                        if (tl.data[index] > 0) {
                            let texture = tiledSpritesheet.getTexture(tl.data[index]);
                            const newTile = new Tile(texture, column, row, map);
                            map.addTile(newTile);
                        }
                    }
                }

            }
        }

        //Iterate through Object Layers
        for (const tl of mapData.layers) {

            if (tl.type == "objectgroup") {


                //Add all players first
                for (const co of tl.objects) {
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
                        const playerId: number = map.getMapObjectProperty(co, "playerId");
                        const newPlayer = new Player(x, y, map, playerId);
                        map.addPlayer(newPlayer);
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

                        let texture = tiledSpritesheet.getTexture(co.gid);
                        const ownerId = map.getMapObjectProperty(co, "owner");
                        const mother = map.getTileNearestTo(co);
                        let newTower = new Tower(texture, mother, ownerId);
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
                        let texture = tiledSpritesheet.getTexture(co.gid);
                        const mother = map.getTileNearestTo(co);
                        let newTree = new Tree(texture, mother);
                        map.addTileObject(newTree);
                    }


                    /***
                     *     __          __   _ _ 
                     *     \ \        / /  | | |
                     *      \ \  /\  / /_ _| | |
                     *       \ \/  \/ / _` | | |
                     *        \  /\  / (_| | | |
                     *         \/  \/ \__,_|_|_|
                     *                          
                     *                          
                     */

                    else if (co.type == "wall") {
                        const mother = map.getTileNearestTo(co);
                        map.addTileObject(new Wall(mother));
                    }
                }
            }
        }

        return map;
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
        tile.x = tile.gridX * gameManager.tiledSpritesheet.tileWidth * TiledMap.SPRITE_SCALE.x;
        tile.y = tile.gridY * gameManager.tiledSpritesheet.tileHeight * TiledMap.SPRITE_SCALE.y;
        tile.scale = TiledMap.SPRITE_SCALE;

        this.tiles[tile.gridY][tile.gridX] = tile;
        this.tileContainer.addChild(tile);
    }

    /**
     * Returns the tile at position specified by x and y grid coordinates
     * Returns undefined if there is no tile at this coordinates
     * @param gridX x-coordinate
     * @param gridY y-coordinate
     */
    getTile(gridX:number,gridY:number):Tile{
        if(this.tiles[gridY]){
            return this.tiles[gridY][gridX];
        }
        else{
            return undefined;
        }
    }

    pause() {
        this.isPaused = true;
    }

    play() {
        this.isPaused = false;
    }

    getObjectCoordinates(mapObject: Rectangle) {

        //an Object can be placed "between" tiles in tiled map editor. But evnts can be triggered only from whole tiles. So the obejccts position is mapped to the nearest Tile

        let originalX = mapObject.x * TiledMap.SPRITE_SCALE.x;
        let xTiles = originalX / this.finalTileWidth;
        xTiles = Math.round(xTiles);

        let originalY = (mapObject.y - mapObject.height) * TiledMap.SPRITE_SCALE.y;  // -co.height because tiled uses the bottom-left corner for coordinates and PIXI uses the top-left corner              
        let yTiles = originalY / this.finalTileHeight;
        yTiles = Math.round(yTiles);

        return { gridX: xTiles, gridY: yTiles };
    }

    getTileNearestTo(mapObject: Rectangle): Tile {
        const pos = this.getObjectCoordinates(mapObject);
        return this.tiles[pos.gridY][pos.gridX];
    }

}