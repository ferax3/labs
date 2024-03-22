import { Component, OnInit } from '@angular/core';
import { Settlement } from './Class/settlement';
import { Village } from './Class/village';
import { City } from './Class/city';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage  {

  //поліморфний контейнер
  settlement: Settlement[] = [];
  //мінімальне значення
  min: number = 999999;//? може змінити...

  constructor() { }
  //Генерація випадкових чисел від 1 до макс

  getRandomInt(min:number, max: number){
    // return Math.floor(Math.random()* Math.floor(max) + 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //функція проведення розрахунків
  //*вхід - кількість елементів у поліморфному контейнері
  ras(nn: any){
    //створюємо масив 
    this.settlement=new Array();
    //отримуємо введене значення
    let n = parseInt(nn);
    for(let i = 0; i < n; i++){
      //додаємо у контейнер
      this.settlement.push(new Village("Село", this.getRandomInt(1, 100), this.getRandomInt(1,4), this.getRandomInt(1, 15)));//km^2
      this.settlement.push(new City("Місто", this.getRandomInt(10000, 1000000), this.getRandomInt(10,350)));
    }
    this.min=999999;
    //шукаємо населений пункт з мінімальною щільністю
    this.settlement.forEach((element)=>{
      element.Density();
      if(this.min > element.density) this.min = element.density;
      console.log(element.show());
    });
  }

  getColor(el:number, min: number){
    return(Math.abs(el-min)<0.01) ? "green" : "";
  }
}
