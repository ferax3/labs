import { Worker } from "./worker";

export class Engineer extends Worker{
    // constructor(name: string, age: number, work_experience: number, salary: number){
    //     super(name, age, work_experience, salary);
    // }
    to_do() {
        return "Створює, проектує, вдосконалює технічні системи";
    }
}