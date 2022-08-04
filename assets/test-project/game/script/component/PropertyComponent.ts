import { Component } from "../ecs/Component";

export enum EffectMethod {
    OverWrite,
    Add,
    Reduce
}
export class PropertyVo {
    public key!: string;
    public data!: any;
    public method!: EffectMethod;
}
export class PropertyComponent extends Component {

    setProperty(property: PropertyVo) {
        switch (property.method) {
            case EffectMethod.OverWrite:
                //@ts-ignore
                this[property.key] = property.data;
                break;
            case EffectMethod.Add:
                 //@ts-ignore
                this[property.key] += property.data;
                break;
            case EffectMethod.Reduce:
                 //@ts-ignore
                this[property.key] -= property.data;
                break;
        }

    }
}