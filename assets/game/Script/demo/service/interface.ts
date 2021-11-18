export enum LevelType{
    Prepare,
    PVE,
    PVP
}
export interface Ilevel{
    type:LevelType;
    hostId:number;
    during:number;
    totalDuration:number;
    isEnd:boolean;
    init(levelData:any):void;
    tick(dt:number):void;
}