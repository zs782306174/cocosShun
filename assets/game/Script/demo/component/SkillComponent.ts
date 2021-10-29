import { Component } from "../../ecs/Component";


export class Skill {
    cd: number;
    fire: boolean;
    skillData: any;
    constructor(skillData) {
        this.skillData = this.skillData;
        this.fire = false;
        this.cd = 0;
    }

    onKeyDown() {
        this.fire = true;
        this.cd = this.skillData.cd;
    }
    
    update(dt?) {
        this.cd -= dt;
        if (this.cd <= 0) {
            this.fire = false;
            this.cd = 0;
        }
    }
}
export class SkillComponent extends Component {
    skills: Array<Skill> = [];
}