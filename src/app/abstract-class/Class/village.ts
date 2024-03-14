import { Settlement } from "./settlement";

export class Village extends Settlement{
    numberOfHouses: number;
    residentsPerHouse: number;
    constructor(override type: string, numberOfHouses: number, residentsPerHouse: number, override area: number){
        super(type, area);
        this.numberOfHouses = numberOfHouses;
        this.residentsPerHouse = residentsPerHouse;
    }

    override Density() {
        let population = this.numberOfHouses * this.residentsPerHouse;
        this.density = population / this.area;
    }
}