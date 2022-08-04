import { Entity } from "./Entity";
import { Node } from "cc";
import { System } from "./System";
export class Scene {


    private _systems: Set<System> = new Set<System>();

    private _entitys: Map<number, Entity> = new Map<number, Entity>();
    private _groups:Map<number, Set<Entity>> = new Map<number,  Set<Entity>>();
    private _sceneNode: Node|null = null;
    private _isStop = true;

    public start() {
        this._isStop = false;
    }
    public set sceneNode(node: Node) {
        this._sceneNode = node;
    }
    public get sceneNode() {
        return this._sceneNode!;
    }
    public addSystem(sys: System) {
        sys.scene = this;
        this._systems.add(sys);
    }
    public foreachAllEntity(callback: (value: Entity) => void) {
        this._entitys.forEach(callback);
    }
    public getEntity(id: number) {
        return this._entitys.get(id);
    }
    public addEntity(entity: Entity) {
        this._entitys.set(entity.id, entity);
        entity.scene = this;
        if(!this._groups.has(entity.tag)){
            this._groups.set(entity.tag,new Set())
        }
        this._groups.get(entity.tag)?.add(entity);
    }
    public getEntitysByTag(tag:number){
        return this._groups.get(tag);
    }
    public getOtherEntitysByTag(tag:number):Entity[]{
        let e:Entity[] = [];
        this._groups.forEach((v,k)=>{
            if (k!=tag) {
                e.push(...Array.from(v));
            }
        })
        return e;
    }
    public removeEntity(entity: number|Entity) {
        let e:Entity;
        if (typeof entity == "number") {
            e = this._entitys.get(entity)!;
        } 
        if (entity instanceof Entity) {
            entity.scene = null;
            this._entitys.delete(entity.id);
            this._groups.get(entity.tag)?.delete(entity);
        }
    }
    public clear() {
        this._entitys.clear();
        this._systems.clear();
        this._isStop = true;
    }
    public update(dt:number) {
        if (this._isStop)
            return;
        this._systems.forEach((s) => {
            s?.update(dt);
        })
    }
}