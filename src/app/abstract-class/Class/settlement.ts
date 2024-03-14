export abstract class Settlement {
    type!: string;
    area!: number;
    density!: number;
    constructor() {    
    }
    show(){
        return "Тип = " + this.type + ", Площа = " + this.area.toFixed(2) + ", Щільність = " + this.density.toFixed(2);
    }
    abstract Density(): any;
}