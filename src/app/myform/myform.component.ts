import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from './Class/department';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  departmentForm!: FormGroup;
  department!: Department;
  //Патерн для перевірки введення адреси
  fullnamePattern = "^[А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,} [А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,} [А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,}$";
  // addressPattern = "^(?=.*[а-яА-ЯіІїЇєЄёa-zA-Z0-9])(?=.*[^\s])(?=.*[0-9]).{3,}$";
  constructor(private fb: FormBuilder) {
    this.departmentForm = this.fb.group({
      departmentName: ['', [Validators.required]],
      departmentHead: ['', Validators.pattern(this.fullnamePattern)],
      departmentCount: [''],
      departmentAddress: [''],

      // departmentAddress: ['', Validators.pattern(this.addressPattern)],
      professors: new FormArray([new FormControl()]),
    });
   }
   addProfessors(){
    console.log("Add");
    (this.departmentForm.controls['professors'] as FormArray).push(
      new FormControl()
    )
   }
   deleteProfessor(i:any){
    console.log("Delete");
    (this.departmentForm.controls['professors'] as FormArray).removeAt(i)
   }
   getControls(){
    return (this.departmentForm.get('professors') as FormArray).controls;
   }
   onSubmit(){
    console.log("Submit");
   }
  ngOnInit() {}

}
