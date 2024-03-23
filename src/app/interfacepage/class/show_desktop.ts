import { IShow } from "../interface/Ishow";

export class Show_Desktop implements IShow{
    info: string = "";
    show(s:string){
        this.info = "Інформація: " + s + '\n';
    }
}