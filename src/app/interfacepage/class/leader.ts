import { Worker } from "./worker";

export class Leader extends Worker{

    to_do(){
        return "Головний серед всіх!";
    }
}