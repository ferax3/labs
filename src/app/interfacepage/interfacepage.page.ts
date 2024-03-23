import { Component} from '@angular/core';
import { Show_Console } from './class/show_console';
import { Show_Desktop } from './class/show_desktop';
import { Engineer } from './class/engineer';
import { Personnel } from './class/personnel';
import { Administration } from './class/administration';
import { Leader } from './class/leader';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage {
  show: string = "";
  constructor() { }




  ras(){
    let show_con = new Show_Console();
    let show_dest = new Show_Desktop();
    let eng1 = new Engineer("Dan", 25, 2, 2500, "Engineer", show_con);
    let eng2 = new Engineer("Ann", 32, 1, 4000, "Engineer", show_con);

    let eng3 = new Engineer("Alex", 23, 5, 4500, "Engineer", show_con);
    let eng4 = new Engineer("Anna", 21, 2, 2000, "Engineer", show_con);
    let eng5 = new Engineer("Max", 31, 6, 3000, "Engineer", show_con);

    let leader = new Leader("Tom", 45, 2, 5000, "Leader", show_con);

    let personnel1 = new Personnel("Інженерний", [eng1, eng2], show_dest);
    this.show = show_dest.info;
 
    let personnel2 = new Personnel("Інженерний", [eng3, eng4, eng5], show_dest);
    this.show += "\n" + show_dest.info;

    let admin = new Administration(leader,[personnel1, personnel2], show_dest);
    this.show += "\n" + show_dest.info;
  }
}
