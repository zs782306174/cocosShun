

import { director } from "cc";
import pb from "../../../../proto/msg.js";
import { channel } from "../../../Script/net/Channel";
export default class LoginService {

    userName: string = '782306174@qq.com';
    password: string = '12345678';

    userData!: pb.msg.IUserInfo;
    constructor() {

    }
   
    async login() {
        await channel.connect();
        let res: pb.msg.ILoginResponse = await channel.call({ email: this.userName, passWord: this.password }, pb.msg.LoginRequest)
        this.userData = res.userInfo!;
        await channel.connect(res.adress!);
        let response: pb.msg.IConnectGateResponse = await channel.call({key: res.key}, pb.msg.ConnectGateRequest);
        if (response.code == 200) {
            director.loadScene("scene")
        }
    }

    resiger() {
        // let data = {
        //     email:this.userName,
        //     password:this.password
        // }
        // channel.send(data,pb.msg.LoginRequest)
    }
    onResiger() {

    }
    onLogin(data: pb.msg.LoginResponse) {
        console.log(data);

    }

}
