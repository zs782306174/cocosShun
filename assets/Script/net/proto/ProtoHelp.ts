
import protobufjs from 'protobufjs';
import  pb  from "../../../../proto/msg.js";
export declare interface ProtoFunction  extends Function{ 
    encode: (message: any, writer: any) => protobufjs.Writer;
}
export default class ProtoHelp {
    public static encode(m:any, type: ProtoFunction) {
        var r = protobufjs.Writer.create();
        let key = type.name;
        r.string(key);
        return type.encode(m, r).finish();
    }
    public static decode(m:any) {
        var r = protobufjs.Reader.create(m);
        let key = r.string();
        return {
            msgid:key,
            //@ts-ignore
            data:pb.msg[key].decode(r)
        };
    }
}