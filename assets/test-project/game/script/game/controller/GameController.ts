import { GameManager } from "../scene/GameManager";
import GameService from "../service/GameService";
import { EventTarget } from "cc";
export class GameController  extends EventTarget{

    constructor(){
        super();
    }
  
    gamemanger:GameManager;
    gameservice:GameService;
    init(){
        
    }
   
    reqRefreshWaitCard(playerId?: number){
    }
    resRefreshWaitCard(data){

    }

     
    reqRecycleCard(pos: number, playerId?: number){

    }

    resRecycleCard(data){

    }

    reqCatchCard(index: number, playerId?: number){

    }

    resCatchCard(data){

    }
    reqMoveCard(startPos: number,endPos: number,playerId?: number){

    }
    resMoveCard(data){

    }
    refreshWaitCard(playerId?: number) {
        let cards = this.gameservice.refreshWaitCard(playerId);
    }

    recycleCard(pos: number, playerId?: number) {
        this.gameservice.recycleCard(pos,playerId);
    }
    catchCard(index: number, playerId?: number) {
        let pos = this.gameservice.catchCard(index,playerId);
    }
    moveCard(startPos: number,endPos: number,playerId?: number) {
        this.gameservice.moveCard(startPos,endPos,playerId);
    }
}
