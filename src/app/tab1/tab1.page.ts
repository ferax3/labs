import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  //Оголосимо змінні у вигляді полів класу та вкажемо їх тип
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  //Метод для розрахунку на вході дані з Input типу string
  ras(a: any, b:any, c:any){
    //Записуємо дані у змінні, перетворюючи тип у дійсний
     try{
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0;
      //Валідування введення
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true)){
        throw new Error('Parameter is not a number!');
      }
      //Перевіряємо числа та виконуємо розрахунки
      if((this.a > 0 || this.b > 0 ||this.c > 0)){
        this.d = (this.a + this.b + this.c) * (this.a + this.b + this.c);
      }
      else{
        this.d = this.a*this.a + this.b*this.b + this.c*this.c;
      }
     }
     catch (error){
      console.log(error);
     }
  }
}
