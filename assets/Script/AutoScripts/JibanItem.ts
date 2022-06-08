

import { Component,_decorator,Sprite,Label, RichText, } from "cc";
const {ccclass, property} = _decorator;
@ccclass
export default class JibanItem extends Component {
	@property(Sprite)
	icon: Sprite;
	@property(Label)
	nameLabel: Label;
	@property(RichText)
	levelLabel:RichText;

	init(){
		
	}
}