import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService:LogService) { }
  getSeries (x:number){
    let sum: number=1, 
    top=x*x,
    min = 1E-12, mem=1, n=1, mul=-1;
    do{
      mem=(top)/this.factorialize(2*n);
      sum=sum+mul*mem;

      top*=x*x;
      mul=-mul;
      n++;
    }while(mem > min || mem <-min)
    return sum;
  }
  factorialize(num:number): number {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * this.factorialize(num - 1));
    }
  }
  getTab(xn:number=0.1, xk: number=3.14, h:number=0.1){
    let x=xn, y = 0.0;
    while(x<=xk){
      y=this.getSeries(x);
      this.xy.set(x,y);
      if(this.logService)
        this.logService.write("x="+x.toFixed(2)+" y="+y.toFixed(4));
      x=x+h;
    }
    return this.xy;
  }
}
