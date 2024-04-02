import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from './Class/department';
import { IsEqualCountsService } from '../blank/service/is-equal-counts.service';
import { AlertController } from '@ionic/angular';
import { countValidator } from '../blank/service/countValidator';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  departmentForm!: FormGroup;
  department!: Department;

//? інша лаб
  //Батьківський компонент слухає цю подію та отримує дані
  @Output()departmentAdd: EventEmitter<Department> = new EventEmitter<Department>();
  //Патерн для перевірки введення адреси
  fullnamePattern = "^[А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,} [А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,} [А-ЯҐІЇЄа-яґіїєa-zA-Z']{2,}$";
  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.departmentForm = this.fb.group({
      departmentName: ['', [Validators.required]],
      departmentHead: ['', Validators.pattern(this.fullnamePattern)],
      departmentCount: ['', [countValidator()]],
      departmentAddress: [''],
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
    let name = this.departmentForm.value.departmentName;
    let head = this.departmentForm.value.departmentHead;
    let address = this.departmentForm.value.departmentAddress;
    let professors = this.departmentForm.value.professors;

    let count1 = this.departmentForm.value.departmentCount;
    let professorsControl = this.departmentForm.get('professors');
    
    if(professorsControl !== null && count1 !== null) { // перевірка на null
      let count2 = professorsControl.value.length;
      let valid = new IsEqualCountsService();
      if (valid.validate_is_equal_counts(count1, count2)){
        this.department = new Department(name, head, count1, address, professors);
        console.log("Submit");
        console.log(this.department);
        this.departmentAdd.emit(this.department);
      }
      else
        this.presentAlert("К-сть викладачів не співпадає з к-стю викладачами в списку.. \nВиправте це 😊");
    } else {
      // Обробка ситуації, коли контроль викладачів має значення null
      this.presentAlert("Error: Professors form control is null");
    }
   }
  ngOnInit() {}

  async presentAlert(message1: string){
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: message1,
      buttons: ["OK"],
    });
    await alert.present();
  }

}
