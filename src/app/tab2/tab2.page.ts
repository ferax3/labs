import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  //Оголосимо змінні у вигляді полів класу та вкажемо їх тип
  a: number = 0;
  b: number = 0;
  c: number = 0;
  //Метод для розрахунку на вході дані з Input типу string
  search(a: any, b:any){
  //Записуємо дані у змінні, перетворюючи тип у int
    try{
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.c = 0;

      //Валідування введення
      if((isNaN(this.a) == true) || (isNaN(this.b) == true)){
        throw new Error('Parameter is not a number!');
      }
      //Перевіряємо числа та виконуємо розрахунки
      for(let num = this.a; num<=this.b; num++){
        if(num % 29 == 0 && num % 2 == 0 && num % 5 == 2){
          this.c++;
        }
      }
    }
    catch (error){
    console.log(error);
    }
  }
}
