export default class ObjectPool {
    static objects: Map<Function, IReference[]> = new Map();
    static get<T extends IReference>(type: (new () => T)): T {
        let pool = this.objects.get(type);
        if (!pool) {
            pool = [];
        }
        let obj = pool.pop();
        if (obj) {
            return obj as T;
        }
        return new type();
    }
    static put<T extends IReference>(type: (new () => T),obj:IReference) {
        let pool = this.objects.get(type);
        if (!pool) {
            pool = [];
        }
        pool.push(obj);
    }
}
    export interface IReference {

}