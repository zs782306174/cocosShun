import RoadNode from "./RoadNode";

export default class Astar {
    private static COST = 1;
    private static maxStep = 1000;
    /**
     * 开启列表
     */
    private static _openlist: Array<RoadNode>;

    /**
     *关闭列表 
    */
    private static _closelist: Array<RoadNode>;

    /**
     *开始节点 
     */
    private static _startNode: RoadNode;

    /**
     *当前检索节点 
     */
    private static _currentNode: RoadNode;

    /**
     *目标节点 
     */
    private static _targetNode: RoadNode;
    /**
     * 对路节点进行排序
     * @param node1 
     * @param node2 
     */
    private static sortNode(node1: RoadNode, node2: RoadNode) {
        if (node1.f < node2.f) {
            return -1;
        } else if (node1.f > node2.f) {
            return 1;
        }

        return 0;
    }
    /**
     *查找一个节点周围可通过的点 
     * @param node
     */
    private static searchRoundNodes(node: RoadNode): void {
        var round: Array<RoadNode> = node.neighbors;

        for (var i: number = 0; i < round.length; i++) {
            var node2: RoadNode = round[i];
            if (node2 != null && node2 != this._startNode && node2.state == 0 && !this.isInCloseList(node2)) {
                this.setNodeF(node2);
            }
        }
    }
    /**
     *设置节点的F值 
     * @param node
     */
    public static setNodeF(node: RoadNode): void {
        var g = this._currentNode.g + this.COST;
        if (this.isInOpenList(node)) {
            if (g < node.g) {
                node.g = g;

            } else {
                return;
            }
        } else {
            node.g = g;
            this._openlist.push(node);
        }

        node.parent = this._currentNode;
        node.h = (Math.abs(this._targetNode.x - node.x) + Math.abs(this._targetNode.y - node.y)) * this.COST;
        node.f = node.g + node.h;
    }
    /**
     *节点是否在开启列表 
     * @param node
     */
    private static isInOpenList(node: RoadNode): Boolean {
        return this._openlist.indexOf(node) != -1 ? true : false;
    }
    /**
     *节点是否在关闭列表 
    * 
    */
    private static isInCloseList(node: RoadNode): Boolean {
        return this._closelist.indexOf(node) != -1 ? true : false;
    }

    private static getPath() {
        var node = this._targetNode;
        let path = [];
        //终点
        //path.push(node);
        while (node.parent != this._startNode) {
            node = node.parent;
            path.unshift(node);
        }
        return path;
    }
    public static seekPath(startNode: RoadNode, targetNode: RoadNode): Array<RoadNode> {
        this._startNode = startNode;
        this._currentNode = startNode;
        this._targetNode = targetNode;

        if (!this._startNode || !this._targetNode)
            return [];

        if (this._targetNode.state == 1) {
            console.log("目标不可达到：");
            return [];
        }


        this._openlist = [];
        this._closelist = [];

        var step: number = 0;

        while (true) {
            if (step > this.maxStep) {
                console.log("没找到目标计算步骤为：", step);
                return [];
            }

            step++;

            this.searchRoundNodes(this._currentNode);

            if (this._openlist.length == 0) {
                console.log("没找到目标计算步骤为：", step);
                return [];
            }

            this._openlist.sort(this.sortNode);

            this._currentNode = this._openlist.shift();

            if (this._currentNode == this._targetNode) {
                console.log("找到目标计算步骤为：", step);
                return this.getPath();
            } else {
                this._closelist.push(this._currentNode);
            }

        }
    }
}