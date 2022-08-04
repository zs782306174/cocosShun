
import { Component, _decorator } from "cc";
import RoadNode from "./RoadNode";

const {ccclass, property} = _decorator;

@ccclass
export default class Cell extends Component {

    init(node:RoadNode){
        this.node.setPosition( node.worldPos.x, 0 , node.worldPos.y);
    }

}
