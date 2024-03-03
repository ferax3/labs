import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  a: number[][] = [];
  n: number = 0;
  dob: number = 1;
  arrayras(n:any){
    this.a = [];
    try{
      this.n = parseInt(n);
      if(isNaN(this.n) == true){
        throw new Error('Parameter is not a number!');
      
      }
      if(n<=0){
        throw new Error ('Parameter less than zero!');
      }
      this.dob = 1;
      let i:number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      let min: number=1, max: number = 20;
      for (i = 0; i < this.n; i++){
        this.a[i]=Array(this.n);
        for(j = 0; j < this.n; j++){
          const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
          this.a[i][j]=randomInt;
          //добуток парних
          if(this.a[i][j] % 2 == 0){
            this.dob = this.a[i][j]*this.dob;
          }
        }
      }
    }
    catch (error){
      console.log(error);
    }
  }
  getColor(b:number){
    return b % 2 == 0 ? 'blue' : '';
  }
}
