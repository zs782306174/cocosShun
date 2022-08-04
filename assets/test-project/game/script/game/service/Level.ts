import { Ilevel, LevelType } from "./interface";

export class PrepareLevel implements Ilevel {

    type: LevelType = LevelType.Prepare;
    hostId: number = -1;
    during: number = 0;
    totalDuration: number = 0;
    isEnd: boolean = false;
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
    startBattle: number = 0;
    isStart: boolean = false;
    tick(dt: number) {
        super.tick(dt);
        if (!this.isStart && this.during > this.startBattle) {
            this.isStart = true;
        }

    }
}
export class PvPLevel extends PrepareLevel {
    startBattle: number = 0;
    isStart: boolean = false;
    tick(dt: number) {
        super.tick(dt);
        if (!this.isStart && this.during > this.startBattle) {
            this.isStart = true;
        }

    }
}