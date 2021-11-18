import { Ilevel, LevelType } from "./interface";

export class PrepareLevel implements Ilevel {

    type: LevelType;
    hostId: number;
    during: number;
    totalDuration: number;
    isEnd: boolean;
    init(levelData: any): void {

        this.isEnd = false;
    }
    tick(dt: number): void {
        this.during += dt;
        if (this.during >= this.totalDuration) {
            this.isEnd = true;
        }
    }

}

export class PvELevel extends PrepareLevel {
    startBattle: number;
    isStart: boolean;
    tick(dt: number) {
        super.tick(dt);
        if (!this.isStart && this.during > this.startBattle) {
            this.isStart = true;
        }

    }
}
export class PvPLevel extends PrepareLevel {
    startBattle: number;
    isStart: boolean;
    tick(dt: number) {
        super.tick(dt);
        if (!this.isStart && this.during > this.startBattle) {
            this.isStart = true;
        }

    }
}