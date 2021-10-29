
import { Component } from "../../ecs/Component";
import { Scene } from "../../ecs/Scene";
import { PropertyComponent, PropertyVo } from "./PropertyComponent";

export class BuffVo {
    public propertys:PropertyVo[] = [];
    public totalTime?: number;
}
export abstract class Buff {
    public targatId: number = null;
    public fromId: number = null;
    public effect: BuffVo = null;

    public abstract update(dt,scene: Scene): void;
}
export class FlashDamageBuff extends Buff {
    public update(dt,scene: Scene) {
        let targatUnit = scene.getEntity(this.targatId);
        if (targatUnit) {
            let propertyComponent = targatUnit.getComponent(PropertyComponent) as PropertyComponent;
            for (const property of this.effect.propertys) {
                propertyComponent?.setProperty(property);
            }
            (targatUnit.getComponent(BuffComponent) as BuffComponent)?.removeBuff(this);
        }
    }
}
export class ContinueDamageBuff extends Buff {
    //isStart = false;
    public constructor(effect) {
        super();
        this.effect = effect;
        this.currentTime = 0;
        this.count = 0;
        this.totalTime = this.effect.totalTime;

    }
    private currentTime = 0;
    private totalTime = 3;
    private count = 0;
    public update(dt,scene: Scene) {
        let targatUnit = scene.getEntity(this.targatId);
        this.currentTime += dt;
        if (targatUnit) {
            if (this.currentTime > this.count) {
                let propertyComponent = targatUnit.getComponent(PropertyComponent) as PropertyComponent;
                for (const property of this.effect.propertys) {
                    propertyComponent?.setProperty(property);
                }
                ++this.count;
            }
            if (this.count >= this.totalTime) {
                (targatUnit.getComponent(BuffComponent) as BuffComponent)?.removeBuff(this);
            }  
        }
    }
}
export class BuffComponent extends Component {
    public buffs: Set<Buff> = new Set<Buff>();
    public removeBuff(buff: Buff) {
        return this.buffs.delete(buff);
    }
    public addBuff(buff: Buff) {
        this.buffs.add(buff);
    }
    public clear() {
        this.buffs.clear();
    }
}