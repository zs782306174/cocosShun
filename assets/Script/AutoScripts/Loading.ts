

import { Component,_decorator,ProgressBar, } from "cc";
const {ccclass, property} = _decorator;
@ccclass
export default class Loading extends Component {
	@property(ProgressBar)
	progressBar: ProgressBar;
 
}