

import { Component,_decorator,Sprite,Label, RichText, } from "cc";
const {ccclass, property} = _decorator;
@ccclass
export default class CardItem extends Component {
	@property(Sprite)
	quality: Sprite;
	@property(Label)
	costLael: Label;
	@property(Label)
	nameLabel: Label;
	@property(Sprite)
	avatar: Sprite;
	@property(RichText)
	jibanLabel:RichText;
}