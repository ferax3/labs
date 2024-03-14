import { Settlement } from "./settlement";

export class City extends Settlement{
    population: number;
    constructor(override type: string, population: number, override area: number){
        super();
        this.population = population;
    }

    override Density() {
        this.density = this.population / this.area;
    }
}