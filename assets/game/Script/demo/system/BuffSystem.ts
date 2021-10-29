
import { Component } from "../../ecs/Component";
import { System } from "../../ecs/System";
import { BuffComponent } from "../component/BuffComponent";

export class BuffSystem extends System{

    protected readonly _componentTypes: Array<typeof Component> = [BuffComponent];
    
    public execute(buffComponent: BuffComponent, dt) {
        buffComponent.buffs.forEach((buff)=>{
            buff?.update(dt,this.scene);
        });
    }
}