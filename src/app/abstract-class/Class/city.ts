import { Settlement } from "./settlement";

export class City extends Settlement{
    population: number;
    constructor(override type: string, population: number, override area: number){
        if(population <= 0) throw new Error("population <= 0");
        super(type, area);
        this.population = population;
    }

    override Density() {
        this.density = this.population / this.area;
    }
}