import { Component } from "./Component";
import { Scene } from "./Scene";

export abstract class System {
    scene!: Scene;
   
    protected _componentTypes: Array<typeof Component> = [];


    public get componentTypes() {
        return this._componentTypes;
    }


    public abstract execute(...arg: any[]): void;

    public update(dt: number) {
        this.scene.foreachAllEntity((entity) => {
            let components = [];
            for (const iterator of this._componentTypes) {
                let component = entity.getComponent(iterator);
                if (!component) {
                    return;
                }
                components.push(component);
            }
            this.execute(...components, dt);
        });
    }
}