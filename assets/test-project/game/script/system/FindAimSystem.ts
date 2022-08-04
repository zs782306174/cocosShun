
import { Component } from "../ecs/Component";
import { System } from "../ecs/System";
import FindAimComponent from "../component/FindAimComponent";
import MoveComponent from "../component/MoveComponent";
import { Entity } from "../ecs/Entity";
import Astar from "../HexMap/Astar";
export class FindAimSystem extends System {

    protected readonly _componentTypes: Array<typeof Component> = [FindAimComponent];
    public getNearestUnit(unit: Entity): Entity {
        let distance = 0;
        let aimUnit = null;
        let units = this.scene.getOtherEntitysByTag(unit.tag);
        for (let index = 0; index < units.length; index++) {
            const tagartUnit = units[index];
            if (unit.enabled) {
                let pos1 = unit.getComponent(MoveComponent).pos;
                let pos2 = tagartUnit.getComponent(MoveComponent).pos;
                let d = (pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.y - pos2.y) * (pos1.y - pos2.y);
                if (distance == 0 || d < distance) {
                    distance = d;
                    aimUnit = tagartUnit;
                }
            }
        }
        return aimUnit;
    }

    public execute(findAimComponent: FindAimComponent, dt) {
        if (findAimComponent.aimUnit || !findAimComponent.aimUnit.enabled || !findAimComponent.entity.getComponent(MoveComponent)) {
            return;
        }
        findAimComponent.aimUnit = this.getNearestUnit(findAimComponent.entity);
        let moveComponent1 = findAimComponent.entity.getComponent(MoveComponent);
        let moveComponent2 = findAimComponent.aimUnit.getComponent(MoveComponent);
        let path = Astar.seekPath(moveComponent1.node, moveComponent2.node);
        if (path && path.length > 0) {
            moveComponent1.path = path;
        }
    }
}