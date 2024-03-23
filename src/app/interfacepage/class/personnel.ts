import { IShow } from "../interface/Ishow";
import { MaxExp } from "../interface/max_experience";
import { SumSalary } from "../interface/sum_salary";
import { Worker } from "./worker";

export class Personnel implements SumSalary, MaxExp, IShow{
    name: string;
    workers: Worker[];
    constructor(name: string, workers: Worker[], shower: IShow){
        this.name = name;
        // this.workers = workers.slice(); // копіюємо масив
        this.workers = [];
        let i = 0
        for (; i < workers.length; i++) {
            this.workers.push(workers[i]);
        }
        shower.show("КАДРИ: "+ this.name +", К-сть працівників: "+ i + ", Сума зарплат: "+ this.sum_salary() + ", Найдовше працює: " + this.max_work_experience()+".");
    }
    show(s: string): void {
        throw new Error("Method not implemented.");
    }
    sum_salary(){
        let sum = 0;
        for(let i = 0; i < this.workers.length; i++){
            sum += this.workers[i].salary;
        }
        return sum;
    }
    max_work_experience(){
        // if (this.workers.length === 0) {
        //     return "Немає працівників";
        // }
        let max_worker = this.workers[0];
        for(let i = 1; i < this.workers.length; i++){
            if(max_worker.work_experience < this.workers[i].work_experience){
                max_worker = this.workers[i];
            }
        }
        return max_worker.name;
    }
}