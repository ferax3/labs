import { Settlement } from "./settlement";

export class UrbanTown extends Settlement{
    population: number;
    constructor(override type: string, population: number, override area: number){
        super(type, area);
        this.population = population;
        if(population <= 0) throw new Error("population_urbantown <= 0");
    }

    override Density() {
        this.density = this.population / this.area;
    }
}