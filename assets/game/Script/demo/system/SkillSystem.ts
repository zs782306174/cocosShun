import { Component } from "../../ecs/Component";
import { System } from "../../ecs/System";
import { SkillComponent } from "../component/SkillComponent";


export class InputSystem extends System{
    protected readonly _componentTypes: Array<typeof Component> = [SkillComponent];
    public execute(skillComponent: SkillComponent,dt) {
        for (const skill of skillComponent.skills) {
            if (skill.fire) {
                skill.update(dt);
            }
        }
    }
    
}