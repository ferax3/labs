import { IShow } from "../interface/Ishow";
import { MaxExp } from "../interface/max_experience";
import { SumSalary } from "../interface/sum_salary";
import { Leader } from "./leader";
import { Personnel } from "./personnel";

export class Administration implements SumSalary, MaxExp, IShow{
    leader: Leader;
    personnels: Personnel[];
    constructor(leader: Leader, personnels: Personnel[], shower: IShow){
        this.leader = leader;
        this.personnels = personnels.slice(); // копіюємо масив
        shower.show("АДМІНІСТРАЦІЯ: Головний в адміністарції: " + this.leader.name+ ", Витрати на зарплатню: "+ this.sum_salary() + ", Найдовше працює серед всіх " + this.max_work_experience()+".");
    }
    show(s: string): void {
        throw new Error("Method not implemented.");
    }
    sum_salary(){
        let sum = 0;
        for(let i = 0; i < this.personnels.length; i++){
            sum += this.personnels[i].sum_salary();
        }
        return sum;
    }
    max_work_experience() {
        let max_worker = this.personnels[0];
        for(let i = 1; i < this.personnels.length; i++){
            if(max_worker.max_work_experience() < this.personnels[i].max_work_experience()){
                max_worker = this.personnels[i];
            }
        }
        return max_worker.max_work_experience();
    }
}