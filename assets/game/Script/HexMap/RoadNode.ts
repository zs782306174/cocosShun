import { Vec2 } from "cc";

export enum RoadNodeState {
    None,
    Wall,
    Move
}
export default class RoadNode {

    private _x: number;//网格坐标x
    private _y: number;//网格坐标y
    private _state: RoadNodeState = 0;//节点的值
    private _f: number = 0; //路点的f值
    private _g: number = 0; //路点的g值	
    private _h: number = 0; //路点的h值
    private _parent: RoadNode = null; //路点的父节点
    private _radius: number = 0;
    private _worldPos: Vec2 = new Vec2();
    public neighbors:Array<RoadNode> = new Array();
    constructor(x, y, radius?: number) {
        this._x = x;
        this._y = y;
        if (radius) {
            this._radius = radius;
        }
    }
    public get worldPos(): Vec2 {
        
        if (this._y % 2 == 0) {
            this._worldPos.x = this._x * this._radius;
        }else{
            this._worldPos.x = this._x * this._radius + this._radius * Math.cos(Math.PI/3);
        }
        this._worldPos.y = this._y * this._radius * Math.sin(Math.PI/3) ;
        return this._worldPos;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public get state(): RoadNodeState {
        return this._state;
    }

    public set state(val: RoadNodeState) {
        this._state = val;
    }

    public get f(): number {
        return this._f;
    }

    public set f(value: number) {
        this._f = value;
    }

    public get g(): number {
        return this._g;
    }

    public set g(value: number) {
        this._g = value;
    }

    public get h(): number {
        return this._h;
    }

    public set h(value: number) {
        this._h = value;
    }

    public get parent(): RoadNode {
        return this._parent;
    }

    public set parent(value: RoadNode) {
        this._parent = value;
    }

}