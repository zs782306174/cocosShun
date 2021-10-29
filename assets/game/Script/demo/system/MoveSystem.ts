
import { Vec2 } from "cc";
import { Component } from "../../ecs/Component";
import { System } from "../../ecs/System";
import { RoadNodeState } from "../../HexMap/RoadNode";
import FindAimComponent from "../component/FindAimComponent";
import MoveComponent from "../component/MoveComponent";
import { UnitViewComponent } from "../component/UnitViewComponent";

export class MoveSystem extends System {

    protected readonly _componentTypes: Array<typeof Component> = [MoveComponent];

    public execute(com: MoveComponent, dt) {
        if (!com.nextNode) {
            let roadNode = com.path?.shift();
            if (roadNode) {
                com.nextNode = roadNode;
            }
        }
        if (com.nextNode) {
            if (com.nextNode.state != RoadNodeState.None) {
                com.nextNode = null;
                com.path = null;
                let findAimComponent= com.entity.getComponent(FindAimComponent);
                if (findAimComponent) {
                    findAimComponent.aimUnit = null;
                }
                return;
            }
            if (Vec2.distance(com.nextNode.worldPos, com.pos) <= 0.01) {
                com.pos = com.nextNode.worldPos;
                let view = com.entity.getComponent(UnitViewComponent);
                if (view) {
                    view.view.updatePos(com.pos);
                }
                com.node.state = RoadNodeState.None;
                com.node = com.nextNode;
                com.node.state = RoadNodeState.Move;
                let roadNode = com.path?.shift();
                if (roadNode) {
                    com.nextNode = roadNode ;
                   
                }else{
                    com.nextNode = null;
                    return;
                }
            }
            Vec2.subtract(com.direction, com.nextNode.worldPos, com.pos);
            com.direction = com.direction.normalize();
            com.pos.add(com.direction.multiplyScalar(com.speed * dt)) ;
            let view = com.entity.getComponent(UnitViewComponent);
            if (view) {
                view.view.updatePos(com.pos);
            }
        }
    }
}