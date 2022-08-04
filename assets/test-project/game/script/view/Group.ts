
import { _decorator, Component, Node, Collider } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Group
 * DateTime = Fri Jan 28 2022 14:24:26 GMT+0800 (中国标准时间)
 * Author = Hi_Creator
 * FileBasename = Group.ts
 * FileBasenameNoExtension = Group
 * URL = db://assets/game/Script/demo/view/Group.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('Group')
export class Group extends Component {

    @property
    group = 0;

    start() {
        // [3]
        this.getComponent(Collider).setGroup(1 << this.group);
        console.log( this.getComponent(Collider).getGroup());
        
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
