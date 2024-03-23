import { Leader } from './leader';
import { Administration } from "./administration";
import { Engineer } from "./engineer";
import { Personnel } from "./personnel";
import { Show_Console } from "./show_console"
import { Show_Desktop } from "./show_desktop";

describe("Administration and Personnel Testing", ()=>{
    let shower: Show_Console;
    let shower1: Show_Desktop;
    let eng1: Engineer;
    let eng2: Engineer;
    let eng3: Engineer;
    let eng4: Engineer;
    let leader: Leader;
    let personnel1: Personnel;
    let personnel2: Personnel;
    let admin: Administration;
    beforeEach(()=> {
        shower = new Show_Console;
        shower1 = new Show_Desktop;
        eng1 = new Engineer("Dan", 25, 2, 2500, "Engineer", shower);
        eng2 = new Engineer("Ann", 32, 1, 4000, "Engineer", shower);
        eng3 = new Engineer("Alex", 23, 5, 4500, "Engineer", shower);
        eng4 = new Engineer("Max", 31, 6, 3000, "Engineer", shower);

        leader = new Leader("Tom", 45, 2, 5000, "Leader", shower);

        personnel1 = new Personnel("Інженерний", [eng1, eng2], shower);
        personnel2 = new Personnel("Інженерний", [eng3, eng4], shower);
        admin = new Administration(leader,[personnel1, personnel2], shower);
    })
    it("Створення екземпляру класу Shower", ()=>{
        expect(shower).toBeTruthy();
    })
    it("Створення екземпляру класу Shower1", ()=>{
        expect(shower1).toBeTruthy();
    })
    it("Створення екземпляру класу Engineer", ()=>{
        expect(eng1).toBeTruthy();
    })
    it("Створення екземпляру класу Personnel", ()=>{
        expect(personnel1).toBeTruthy();
    })
    it("Створення екземпляру класу Administration", ()=>{
        expect(admin).toBeTruthy();
    })

    it("Пошук працівника, що працює найдовше серед кадрів", ()=>{
        let a1 = personnel1.max_work_experience();
        let a2 = "Dan";
        expect(a1).toBe(a2);
    })
    it("Розрахунок витрати на зарплату в кадрах", ()=>{
        let a1 = personnel1.sum_salary();
        let a2 = 2500 + 4000;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    })
    it("Пошук працівника, що працює найдовше", ()=>{
        let a1 = admin.max_work_experience();
        let a2 = "Max";
        expect(a1).toBe(a2);
    })
    it("Розрахунок витрати на зарплату серед кадрів", ()=>{
        let a1 = admin.sum_salary();
        let a2 = 2500 + 4000 + 4500 + 3000;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    })





    // let show_con = new Show_Console();
    // let show_dest = new Show_Desktop();
    // let eng1 = new Engineer("Dan", 25, 2, 2500, "Engineer", show_con);
    // let eng2 = new Engineer("Ann", 32, 1, 4000, "Engineer", show_con);

    // let eng3 = new Engineer("Alex", 23, 5, 4500, "Engineer", show_con);
    // let eng4 = new Engineer("Anna", 21, 2, 2000, "Engineer", show_con);
    // let eng5 = new Engineer("Max", 31, 6, 3000, "Engineer", show_con);

    // let leader = new Leader("Tom", 45, 2, 5000, "Leader", show_con);

    // let personnel1 = new Personnel("Інженерний", [eng1, eng2], show_dest);
    // this.show = show_dest.info;
 
    // let personnel2 = new Personnel("Інженерний", [eng3, eng4, eng5], show_dest);
    // this.show += "\n" + show_dest.info;

    // let admin = new Administration(leader,[personnel1, personnel2], show_dest);
    // this.show += "\n" + show_dest.info;
})