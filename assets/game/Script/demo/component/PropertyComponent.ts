import { Component } from "../../ecs/Component";

export enum EffectMethod {
    OverWrite,
    Add,
    Reduce
}
export class PropertyVo {
    public key: string;
    public data: any;
    public method: EffectMethod;
}
export class PropertyComponent extends Component {

    setProperty(property: PropertyVo) {
        switch (property.method) {
            case EffectMethod.OverWrite:
                this[property.key] = property.data;
                break;
            case EffectMethod.Add:
                this[property.key] += property.data;
                break;
            case EffectMethod.Reduce:
                this[property.key] -= property.data;
                break;
        }

    }
}