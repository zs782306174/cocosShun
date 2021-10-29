
import { _decorator, Component, Node, instantiate, director, PhysicsSystem } from 'cc';
import { InputComponent } from './demo/component/InputComponent';
import MoveComponent from './demo/component/MoveComponent';
import { Skill, SkillComponent } from './demo/component/SkillComponent';
import { UnitViewComponent } from './demo/component/UnitViewComponent';
import { MoveSystem } from './demo/system/MoveSystem';
import UnitView from './demo/view/UnitView';
import { Entity } from './ecs/Entity';
import { Scene } from './ecs/Scene';
import HexMap from './HexMap/HexMap';
const { ccclass, property } = _decorator;

@ccclass('MapScene')
export class MapScene extends Component {

    @property(Node)
    prefab: Node;
    scene:Scene
    start() {
        console.log(director.getScene());
        
        PhysicsSystem.instance.enable = true;
        let config = [
            [0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0],
        ]
        let map = new HexMap(8, 7);
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 7; x++) {
                let ball = instantiate(this.prefab);
                let node = map.getNode(x,y);
                ball.parent = this.prefab.parent;
                ball.setPosition(node.worldPos.x,node.worldPos.y,-0.5);
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
    update(dt){
        this.scene?.update(dt);
    }
}

