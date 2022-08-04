
import { _decorator, Component, Node, instantiate, director, PhysicsSystem } from 'cc';
import { InputComponent } from './component/InputComponent';
import MoveComponent from './component/MoveComponent';
import { Skill } from './component/SkillComponent';
import { UnitViewComponent } from './component/UnitViewComponent';
import { Entity } from './ecs/Entity';
import { Scene } from './ecs/Scene';
import HexMap from './HexMap/HexMap';
import { MoveSystem } from './system/MoveSystem';
import UnitView from './view/UnitView';
const { ccclass, property } = _decorator;

@ccclass('MapScene')
export class MapScene extends Component {

    @property(Node)
    cell:Node;
    @property(Node)
    prefab: Node;
    scene:Scene
    start() {
        PhysicsSystem.instance.enable = true;
        let map = new HexMap(8, 7);
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 7; x++) {
                let ball = instantiate(this.cell);
                let node = map.getNode(x,y);
                ball.parent = this.cell.parent;
                ball.setPosition(node.worldPos.x,node.worldPos.y);
            }
        }
        let ball = instantiate(this.prefab);
        let node = map.getNode(0, 0);
        ball.parent = this.prefab.parent;
        ball.setPosition(node.worldPos.x, node.worldPos.y);
        let node1 = map.getNode(0, 1);
        this.prefab.setPosition(node1.worldPos.x, node1.worldPos.y);
        this.scene = new Scene();
        this.scene.addSystem(new MoveSystem());
        let entity = new Entity();
        entity.addComponent(UnitViewComponent).view = ball.getComponent(UnitView);
        entity.addComponent(MoveComponent,node);
        entity.getComponent(MoveComponent).speed = 2;
       
        let entity1 = new Entity();
        entity1.addComponent(UnitViewComponent).view = this.prefab.getComponent(UnitView);
        entity1.addComponent(MoveComponent,node1);
        entity1.getComponent(MoveComponent).speed = 2;
        this.scene.addEntity(entity1);
        this.scene.addEntity(entity);
        //@ts-ignore
        console.log(window.ServiceCenter);
        
        entity.getComponent(MoveComponent).findPath(map.getNode(0, 0),map.getNode(6, 6));
        entity1.getComponent(MoveComponent).findPath(map.getNode(0, 1),map.getNode(3, 4));
      
        this.scene.start();
        let dictanceConditional :behaviourTree.IConditional<Entity>={
            update:(entity,dt)=>{
                entity.getComponent(InputComponent)
                return behaviourTree.TaskStatus.Success;
            }
        } 
        let root = new behaviourTree.ConditionalDecorator(dictanceConditional);
        let skill = new Skill(null);
        let tree = new behaviourTree.BehaviorTree(entity,root);
        console.log(tree);
    }

    initMap(){
        
    }
    update(dt){
        this.scene?.update(dt);
    }
}

