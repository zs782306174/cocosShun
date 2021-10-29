import { Entity } from "./Entity";

export class Component {
    public static create(component: typeof Component) {
        return new component();
    }
    private _entity: Entity = null;

    private _enabled: boolean = true;
    public get entity() {
        return this._entity;
    }
    public set entity(entity: Entity) {
        this._entity = entity;
    }
    public get enabled() {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        if (value == this._enabled)
            return;
        this._enabled = value;
    }
    public constructor() { }
    public init(...arg) {

    }
    public clear() {
        this._entity = null;
    }
}