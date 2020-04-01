import { TileObject } from "./TileObject";
import { TiledMap } from "./TiledMap";
import { HitEvent } from "./HitEvent";
import { TntPumpkin } from "./TntPumpkin";
import { Player } from "./Player";
import { Sprite, Texture } from "pixi.js";
import { Wall } from "./Wall";
import { ITEM } from "./Items";
import { TomatoPlant } from "./TomatoPlant";
import { PumpkinPlant } from "./PumpkinPlant";

export class Tile extends Sprite {

    gridX: number;
    gridY: number;
    tileObject: TileObject;
    map: TiledMap;

    constructor(texture: Texture, gridX: number, gridY: number, map: TiledMap) {
        super(texture);
        this.gridX = gridX;
        this.gridY = gridY;
        this.map = map;
        //calculate own render coordinates
        this.x = gridX * map.finalTileWidth;
        this.y = gridY * map.finalTileHeight;
    }

    addTileObject(newTileObject: TileObject) {
        if (this.isFree()) {
            this.tileObject = newTileObject;
            newTileObject.scale = TiledMap.SPRITE_SCALE;
            this.map.tileObjectContainer.addChild(newTileObject);
        }
        else {
            throw new Error("Can't add TileObject to a Tile that allready has an TileObject");
        }
    }

    onHit(hitEvent: HitEvent) {
        if (this.tileObject) {
            this.tileObject.onHit(hitEvent);
        }
    }


    onPlace(objectType: ITEM) {
        if (this.isFree() && this.isOccupiedByAnyPlayer() == false) {
            switch (objectType) {
                case ITEM.TOMATO_PLANT:
                    new TomatoPlant(this); break;
                case ITEM.PUMPKIN_PLANT:
                    new PumpkinPlant(this); break;
                case ITEM.TNT_PUMPKIN:
                    new TntPumpkin(this); break;
                case ITEM.WALL:
                    new Wall(this); break;
            }
        }
    }

    isFree() {
        return this.tileObject ? false : true;
    }

    /**
     * Checks wether this tile is occuped by any player and returns the first player that occupies this tile.
     * Returns undefined if this tile is not occupied
     */
    isOccupiedBy(): Player {
        for (const player of this.map.players) {
            //Get all tiles that would be touched by the player
            let xRange = {
                from: Math.floor(player.sprite.x / this.map.finalTileWidth),
                to: Math.floor((player.sprite.x + player.sprite.width) / this.map.finalTileWidth)
            };

            let yRange = {
                from: Math.floor(player.sprite.y / this.map.finalTileHeight),
                to: Math.floor((player.sprite.y + player.sprite.height) / this.map.finalTileHeight)
            };

            if (this.gridX >= xRange.from && this.gridX <= xRange.to && this.gridY >= yRange.from && this.gridY <= yRange.to) {
                return player;
            }
        }
        return undefined;
    }

    /**
     * Checks wether this tile is occuped by any player and returns true if there is any player on this tile.
     */
    isOccupiedByAnyPlayer(): boolean {
        const player = this.isOccupiedBy();
        if (player === undefined) {
            return false
        }
        else {
            console.log("occupied by player" + player.playerId);
            return true;
        }
    }

    setTint(color: number) {
        this.tint = color;
        if (!this.isFree()) {
            this.tileObject.tint = color;
        }
    }






}