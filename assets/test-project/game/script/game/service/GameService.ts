import { Scene } from "../../ecs/Scene";
import Card from "./Card";
import CardPool from "./CardPool";
import { Ilevel, LevelType } from "./interface";
import { PvELevel, PvPLevel, PrepareLevel } from "./Level";
import Player from "./Player";

export default class GameService {
    players: Map<number, Player> = new Map();
    cardPool: CardPool;

    currentLevel!: Ilevel;

    level: number;
    scenes: Scene[] = [];
    selfPlayerId = 0;
    constructor() {
        this.cardPool = new CardPool();
        this.level = 0;
    }

    initLevel(levelData:any) {
        switch (levelData.type) {
            case LevelType.PVE:
                this.currentLevel = new PvELevel();
                this.currentLevel.init(levelData);
                break;
            case LevelType.PVP:
                this.currentLevel = new PvPLevel();
                this.currentLevel.init(levelData);
                break;
            case LevelType.Prepare:
                this.currentLevel = new PrepareLevel();
                this.currentLevel.init(levelData);
                break;
        }

    }
    refreshWaitCard(playerId?: number) :Card[]|null{
        playerId = playerId || this.selfPlayerId;
        let cards = [];
        let player = this.players.get(playerId);
        if (player) {
            for (let index = player.waitCards.length - 1; index >= 0; index--) {
                const card = player.waitCards.pop();
                if (card) {
                    this.cardPool.putCard(card);
                    cards.push();
                }
            }
            player.waitCards = this.cardPool.getCards(player.qualityArr, 5);
            return player.waitCards;
        }
        return null;
    }

    recycleCard(pos: number, playerId?: number) {
        playerId = playerId || this.selfPlayerId;
        let player = this.players.get(playerId);
        if (player) {
            let card = player.recycleCard(pos);
            this.cardPool.putCard(card);
        }
       
    }
    catchCard(index: number, playerId?: number) {
        playerId = playerId || this.selfPlayerId;
        let player = this.players.get(playerId);
        if (player) {
            return player.catchCard(index);
        }
        return -1;
    }
    moveCard(startPos: number,endPos: number,playerId?: number) {
        playerId = playerId || this.selfPlayerId;
        let player = this.players.get(playerId);
        if (player) {
            player.moveCard(startPos,endPos);
        }
       
    }
    tick(dt:number) {
        this.currentLevel.tick(dt);
        if (this.currentLevel.isEnd) {
            this.level++;
            for (const scene of this.scenes) {
                scene.clear();
            }
            this.scenes.length = 0;
            this.initLevel(this.level);
        }
        if ((this.currentLevel as PvPLevel).isStart) {
            for (const scene of this.scenes) {
                scene.update(dt);
            }
        }
    }

}