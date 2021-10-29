import { Component, Vec2,_decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass('UnitView')
export default class UnitView extends Component {

    updatePos(pos:Vec2){
        this.node.setPosition(pos.x,pos.y);
    }

}