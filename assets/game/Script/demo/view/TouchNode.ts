import { Camera, Component, geometry, Node, PhysicsSystem, Touch, v3, Vec2, _decorator } from "cc";
import HexMap from "../../HexMap/HexMap";
const { ccclass, property } = _decorator;

@ccclass('TouchNode')
export default class TouchNode extends Component {
    @property(Camera)
    cameraCom: Camera;

    catchNode: Node;

    pos: Vec2 = new Vec2();

    outRay: geometry.Ray = new geometry.Ray();
    map= new HexMap(8, 7);

    controller
    startPos
    onEnable() {
        PhysicsSystem.instance.enable = true;
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }
    onDisable() {
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchStart(e: Touch) {
        e.getLocation(this.pos);
        console.log(this.pos);
        this.cameraCom.screenPointToRay(this.pos.x, this.pos.y, this.outRay);
        PhysicsSystem.instance.raycast(this.outRay,1 <<0 );
        let result = PhysicsSystem.instance.raycastResults;
        console.log(result);
        if (result.length > 0) {
            this.catchNode = result[0].collider.node;
            this.startPos = this.catchNode?.position.clone();
            this.catchNode?.translate(v3(0,0.2,0));
        }
       
    }
    onTouchEnd() {
        if (this.catchNode) {
            this.catchNode.translate(v3(0,-0.2,0));
            let node = this.map.getCellByPos(this.catchNode.position.x,this.catchNode.position.y);
            if (node) {
                this.catchNode.setPosition(node.worldPos.x,node.worldPos.y);
            }else{
                this.catchNode.setPosition(this.startPos);
            }
        }
      
        
        
        this.catchNode = null;
    }
    onTouchMove(e: Touch) {
        e.getLocation(this.pos);
        this.cameraCom.screenPointToRay(this.pos.x, this.pos.y, this.outRay);
        PhysicsSystem.instance.raycast(this.outRay, 1 <<1 );
        let result = PhysicsSystem.instance.raycastResults;
        console.log(result);
        console.log(this.catchNode);

        if (result.length > 0) {
            let pos = result[0].hitPoint;
            if (this.catchNode) {
                this.catchNode.setWorldPosition(pos.x, this.catchNode.worldPosition.y, pos.z);
            }

        }
        // if (this.catchNode) {
        //     this.catchNode.position = this.catchNode.position.add(v3(e.getDelta().x,e.getDelta().y));
        // }
    }
}