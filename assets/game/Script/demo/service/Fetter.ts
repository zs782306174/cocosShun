import { KV } from "../common/Types";

export default class Fetter {
    id: number;
    levelArr: number[] = [2, 4, 8];
    buffs: KV<number, number>[] = [];
    currentLevel: number = -1;

    peoples: Map<number, number[]> = new Map();

    add(id:number, pos:number) {
        if (!this.peoples.has(id)) {
            this.peoples.set(id, [pos])
        } else
            this.peoples.get(id).push(id);
        this.jisuan();
    }
    reduce(id:number, pos:number) {
        let arr = this.peoples.get(id);
        arr.splice(arr.indexOf(pos));
        this.jisuan();
    }
    jisuan() {
        let level = -1;
        let ids = Array.from(this.peoples.keys());
        for (const iterator of this.levelArr) {
            if (ids.length >= iterator) {
                level++;
            }
        }
        this.currentLevel = level;
    }
}
