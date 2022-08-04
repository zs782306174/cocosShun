import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";


export default class FindAimComponent extends Component{
    aimUnit:Entity|null = null;
}