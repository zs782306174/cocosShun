import { Button, Component, EventHandler, Tween, tween,Node, UITransform, v3, _decorator, } from "cc";
import { DynamicList } from "./DynamicList";

const { ccclass, property, disallowMultiple, menu, executionOrder } = _decorator;

/**ITEM消失的动画类型 */
export enum DisappearAnimType {
    UP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3,
}

@ccclass
@disallowMultiple()
@executionOrder(-5001)//先于List
export default class ListItem extends Component {
    /**依赖的DynamicList组件 */
    public list!: DynamicList;

    /**序列id */
    public id!: number;

    /**按钮组件 */
    private _btnCom: Button|null = null;

    /**是否已经注册过事件 */
    private _eventReg: boolean = false;

    private _selected: boolean = false;

    onLoad() {
        this._btnCom = this.node.getComponent(Button);
    }

    _registerEvent() {
        if (this._btnCom && this.list.selectedMode > 0 && !this._eventReg) {
            let eh: EventHandler = new EventHandler();
            eh.target = this.node;
            eh.component = 'ListItem';
            eh.handler = 'onClickThis';
            this._btnCom.clickEvents.unshift(eh);
            this._eventReg = true;
        }
    }

    onClickThis() {
        this.list.setSelectId(this.id);
    }

    /**
     * 设置视图信息，子类继承
     * @param data 
     */
    setData(data: any) {

    }

    /**
     * 当前item是否选中，根据结果刷新视图，子类继承实现
     * @param val 
     */
    setSelected(val: boolean) {
        this._selected = val;
    }
    getSelected() {
        return this._selected;
    }

    /**
     * 消失动画
     * @param aniType 
     * @param finishCb 
     * @param del 
     */
    disappearAnim(aniType: DisappearAnimType, finishCb: Function, del: boolean) {
        let t:Tween<Node>;
        let transform:UITransform = this.node.getComponent(UITransform)!;
        switch (aniType) {
            case DisappearAnimType.UP: //向上消失
                t = tween(this.node).to(.2,{scale:v3(.7,.7,.7)}).by(.3,{position:v3(0,transform.height * 2)});
                break;
            case DisappearAnimType.RIGHT: //向右消失
                t = tween(this.node).to(.2,{scale:v3(.7,.7,.7)}).by(.3,{position:v3(transform.width * 2,0)});
                break;
            case DisappearAnimType.BOTTOM: //向下消失
                t = tween(this.node).to(.2,{scale:v3(.7,.7,.7)}).by(.3,{position:v3(0,-transform.height * 2)});
                break;
            case DisappearAnimType.LEFT: //向左消失
                t = tween(this.node).to(.2,{scale:v3(.7,.7,.7)}).by(.3,{position:v3(-transform.width * 2,0)});
                break;
            default: //默认：缩小消失
                t = tween(this.node).to(.3,{scale:v3(.1,.1,.1)});
                break;
        }
        t.start();
    }
}

