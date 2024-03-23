import { IShow } from "../interface/Ishow";
import { Person } from "./person";
export abstract class Worker extends Person implements IShow{
    work_experience: number;
    salary: number;
    type_work: string;
    constructor(name: string, age: number, work_experience: number, salary: number, type_work:string, shower: IShow){

        super(name, age);
        this.work_experience = work_experience;
        this.salary = salary;
        this.type_work = type_work;
        shower.show('Про '+ this.name + "\nПрацює "+ this.type_work + ", Йому "+ this.age + ", Має зарплату "+ this.salary + ", Працює вже "+ this.work_experience + " р., Що робить?: "+ this.to_do()+'.');
    }
    show(s: string): void {
        throw new Error("Method not implemented.");
    }
    abstract to_do(): string;
}