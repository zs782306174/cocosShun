import { Component } from "../../ecs/Component";

export  class InputComponent extends Component {

    public slectedEntityID:number;
    public inputs:string[] = [];
    addInput(input:string){
        this.inputs.push(input);
    }
}
