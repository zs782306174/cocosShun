import { Vec2 } from "cc";
import { BuffComponent } from "./component/BuffComponent";
import MoveComponent from "./component/MoveComponent";
import { PropertyComponent } from "./component/PropertyComponent";
import { SkillComponent } from "./component/SkillComponent";
import { UnitViewComponent } from "./component/UnitViewComponent";
import { Entity } from "./ecs/Entity";
import { Scene } from "./ecs/Scene";

export default class Factory {
    static createScene(configs:any[]){
        let scene = new Scene();
    }

    static createUnit(scene:Scene,configId:number,tag:number,pos:Vec2){
        let entity = new Entity();
        entity.tag = tag;
        entity.addComponent(PropertyComponent);
        let moveComp = entity.addComponent(MoveComponent);
        entity.addComponent(BuffComponent);
        entity.addComponent(SkillComponent);
        entity.addComponent(UnitViewComponent);
        if (pos instanceof Vec2) {
            moveComp.pos = pos;
        }
        scene.addEntity(entity);
    }
}