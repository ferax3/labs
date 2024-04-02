import { Component, OnInit } from '@angular/core';
import { Department } from '../myform/Class/department';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  show_update: boolean = false;
  departments: Department[]=[];
  constructor() { }

  ngOnInit() {}
  addProfessor(event: any){
    //Перевіряємо чи є отримана подія саме типом Department
    if(event as Department){
      let department: Department = event;
      this.departments.push(department);
      console.log(this.departments);
    }
    else
    throw new Error("Error of type");
  }
  update(){this.show_update=true;}
  showUp(event:any){
    if(typeof event === 'boolean'){
      this.show_update = event;
    }
    else
    throw new Error("Error of type");
  }
  update_save(event:any, i:number){
    //Перевіряємо тип event
    if (event as Department){
      this.departments[i]=event;
    }
    else throw new Error("Error of type1");
  }
}
