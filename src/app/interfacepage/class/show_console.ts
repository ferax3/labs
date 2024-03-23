import { IShow } from "../interface/Ishow";

export class Show_Console implements IShow{
    show(s:string){
        console.log(s+ "\n");
    }
}