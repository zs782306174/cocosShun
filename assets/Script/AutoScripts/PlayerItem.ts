

import { Component,_decorator,Sprite,Label, } from "cc";
const {ccclass, property} = _decorator;
@ccclass
export default class PlayerItem extends Component {
	@property(Sprite)
	avatar: Sprite;
	@property(Label)
	nameLabel: Label;
	@property(Label)
	levelLabel: Label;
	@property(Label)
	hpLabel: Label;
 
}