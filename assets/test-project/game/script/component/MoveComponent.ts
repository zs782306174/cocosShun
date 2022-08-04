
import { Vec2 } from "cc";
import { Component } from "../ecs/Component";
import Astar from "../HexMap/Astar";
import RoadNode, { RoadNodeState } from "../HexMap/RoadNode";
export default class MoveComponent extends Component {

    path: RoadNode[] = [];
    //nextPos: Vec2;
    node!:RoadNode;
    nextNode!:RoadNode;
    pos!: Vec2;
    speed!: number;
    direction:Vec2 = new Vec2();
    init(startNode:RoadNode){
        this.node = startNode;
        this.pos = startNode.worldPos;
        this.node.state = RoadNodeState.Move;
    }
    findPath(startPos:RoadNode, aimPos:RoadNode) {
        this.path = Astar.seekPath(startPos, aimPos);
    }
}