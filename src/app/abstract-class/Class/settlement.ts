export abstract class Settlement {
    type!: string;
    area!: number;
    density!: number;
    constructor(type:string, area:number) {
        if(area <= 0) throw new Error("area <= 0");
        this.type = type;
        this.area = area;
    }
    show(){
        return "Тип = " + this.type + ", Площа = " + this.area.toFixed(2) + ", Щільність = " + this.density.toFixed(2);
    }
    abstract Density(): any;
}