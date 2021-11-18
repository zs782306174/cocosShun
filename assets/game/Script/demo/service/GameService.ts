import { Scene } from "../../ecs/Scene";
import CardPool from "./CardPool"
import { Ilevel, LevelType } from "./interface";
import { PrepareLevel, PvELevel, PvPLevel } from "./Level";
import Player from "./Player"

export default class GameService {
    players: Map<number, Player>;
    cardPool: CardPool;

    currentLevel: Ilevel;

    level: number;
    scenes:Scene[] = [];
    constructor(){
        this.cardPool = new CardPool();
        this.level = 0;
    }

    initLevel(levelData) {
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
    refreshWaitCard(id: number) {
        let cards = [];
        let player = this.players.get(id);
       
        for (let index = player.waitCards.length - 1; index >= 0; index--) {
            const card = player.waitCards.pop();
            this.cardPool.putCard(card);
            cards.push();
        }
        player.waitCards =  this.cardPool.getCards(player.qualityArr, 5);
    }

    recycleCard(id: number, card) {
        let player = this.players.get(id);
        player.removeCard(card);
        this.cardPool.putCard(card);
    }
    catchCard(id: number, index: number) {
        let player = this.players.get(id);
        player.addCard(index);
    }

    tick(dt) {
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