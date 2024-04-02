import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from '../myform/Class/department';
import { ValidatorCountService } from '../blank/service/validator-count.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {
  //властивості для редагування
  @Input() department!: Department;
  @Input() show: boolean = true;
  @Output() departmentChange: EventEmitter<Department> = new EventEmitter<Department>();
  @Output() showChange = new EventEmitter();
  constructor() { }
  // validate_count(d: number): boolean {
  //   let validator = new ValidatorCountService()
  //   if (d)
  //     if (!validator.validate_count(d)) return false; 
  //     else return true;
  //   else return false;//? question
  // }
  save(a: any, head:any, b: any){
    this.show = false;
    this.department = new Department(a, head,this.department.count, b, this.department.professors);
    this.departmentChange.emit(this.department);
    this.showChange.emit(this.show);
  }
  ngOnInit() {}

}
