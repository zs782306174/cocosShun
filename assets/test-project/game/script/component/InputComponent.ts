import { Component } from "../ecs/Component";


export  class InputComponent extends Component {

    public slectedEntityID:number|undefined;
    public inputs:string[] = [];
    addInput(input:string){
        this.inputs.push(input);
    }
}
