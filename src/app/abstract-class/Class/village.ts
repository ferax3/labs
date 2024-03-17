import { Settlement } from "./settlement";

export class Village extends Settlement{
    numberOfHouses: number;
    residentsPerHouse: number;
    constructor(override type: string, numberOfHouses: number, residentsPerHouse: number, override area: number){        
        if(numberOfHouses <= 0) throw new Error("numberOfHouses <= 0");
        if(residentsPerHouse <= 0) throw new Error("residentsPerHouse <= 0");
        if(numberOfHouses*residentsPerHouse >10000) throw new Error("THIS IS NOT A VILLAGE");
        super(type, area);

        this.numberOfHouses = numberOfHouses;
        this.residentsPerHouse = residentsPerHouse;
    }

    override Density() {
        let population = this.numberOfHouses * this.residentsPerHouse;
        this.density = population / this.area;
    }
}