import { Component } from "./Component";
import { Scene } from "./Scene";
declare type Constructor<T = unknown> = new (...args: any[]) => T;
export class Entity {

    public static _idGenerator: number = 0;
    private components: Map<string, Component> = new Map<string, Component>();

    /**
     * 当前实体所属的场景
     */

    private _scene: Scene;
    private _enabled: boolean = true;
    private _tag: number;
    public readonly id: number;
    public get tag() {
        return this._tag;
    }
    public set tag(value: number) {
        this._tag = value;
    }
    public get enabled() {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        if (value == this._enabled)
            return;
        this._enabled = value;
    }
    public get scene() {
        return this._scene;
    }

    public set scene(value: Scene) {
        this._scene = value;
    }

    public constructor() {
        this.id = Entity._idGenerator++;
    }

    public addComponent<T extends Component>(component: Constructor<T>,...arg): T {
        if (this.components.has(component.name)) {
            console.error(component.name + '已经存在');
            return;
        }
        let c = new component();
        c.entity = this;
        c.init(...arg);
        this.components.set(component.name, c);
        return c;
    }
    public removeComponent<T extends Component>(component: Constructor<T>): void {
        this.getComponent(component)?.clear();
        this.components.delete(component.name);
    }
    public removeAllComponent(): void {
        this.components.forEach((c, k) => {
            c.clear();
            this.components.delete(k);
        });
    }

    public hasComponent(component: typeof Component): boolean {
        return this.components.has(component.name);
    }
    public getComponent<T extends Component>(component: Constructor<T>): T {
        return this.components.get(component.name) as T;
    }
}