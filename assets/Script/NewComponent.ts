
import { _decorator, Component, Node, assetManager, Texture2D, ImageAsset, SpriteFrame, ProgressBar, director } from 'cc';
import ResManager from './common/manager/ResManager';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent
 * DateTime = Thu Sep 16 2021 10:17:28 GMT+0800 (中国标准时间)
 * Author = Hi_Creator
 * FileBasename = NewComponent.ts
 * FileBasenameNoExtension = NewComponent
 * URL = db://assets/Script/NewComponent.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('NewComponent')
export class NewComponent extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null;
    async start() {
        let scene = ResManager.preloadScene('game','game',(c, t) => {
            this.setProgress(c, t);
        });
        await Promise.all([scene]);
        director.loadScene('game');

    }
    setProgress(c, t) {
        this.progressBar.progress = c / t;
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

