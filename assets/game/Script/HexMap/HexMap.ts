import RoadNode from "./RoadNode";

export default class HexMap {

    private map: Array<Array<RoadNode>> = new Array<Array<RoadNode>>();
    private row:number = 0;
    private col:number = 0;
    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
        for (let i = 0; i < row; i++) {
            this.map.push([]);
            for (let j = 0; j < col; j++) {
                this.map[i][j] = new RoadNode(j, i, 1);
            }
        }
        this.link();
    }

    public getNode(x:number,y:number){
        if (x >= 0 && x < this.col && y >= 0 && y < this.row)
            return this.map[y][x];
        return null;
    }

    /**
     *用于检索一个节点周围6个点的向量数组 格子列数为奇数时使用
     */
    private _neighbor1: number[][] = [[-1, 0], [1, 0], [0, -1], [1, -1], [0, 1], [1, 1]];
    /**
     *用于检索一个节点周围6个点的向量数组 格子列数为偶数时使用
     */
    private _neighbor2: number[][] = [[-1, 0], [1, 0], [-1, -1], [0, -1], [-1, 1], [0, 1]];
    private link() {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                let node = this.map[i][j];
                let neighbors = this._neighbor1;
                if (i % 2 == 0) {
                    neighbors = this._neighbor2;
                }
                for (const iterator of neighbors) {
                    let x = node.x + iterator[0];
                    let y = node.y + iterator[1];
                    if (x >= 0 && x < this.col && y >= 0 && y < this.row) {
                        node.neighbors.push(this.map[y][x]);
                    }
                }
            }
        }
    }


}
