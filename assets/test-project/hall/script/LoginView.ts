
import { _decorator, Component, Node, EditBox } from 'cc';
import  LoginService  from './LoginService';
const { ccclass, property } = _decorator;


@ccclass('LoginView')
export class LoginView extends Component {
    @property(EditBox)
    userNameEidt!:EditBox;
    @property(EditBox)
    passWordEidt!:EditBox;

    service = new LoginService();
    start() {
        // [3]
       
    }

    onUserNameChange(text:string){
        this.service.userName = text;
    }
    onPassWordChange(text:string){
        this.service.password = text
    }
    login() {
        this.service.login();
    }
}
