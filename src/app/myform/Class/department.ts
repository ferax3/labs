export class Department{
    name: string = "";
    head: string ="";
    count: number = 5;
    address: string ="";
    professors: string[]=[];
    constructor(name: string, head: string, count: number, address: string, professors: string[]){
        this.name = name;
        this.head = head;
        this.count = count;
        this.address = address;
        this.professors = professors;
    }
}