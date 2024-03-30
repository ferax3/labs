import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number=0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getRecursion(x:number, mul:number, n:number, sum: number, top: number=x*x){
    let mem,
    min = 1E-12;

    //mem=1, n=1, mul=-1;
    mem=(top)/this.factorialize(2*n);
    sum=sum+mul*mem;

    top*=x*x;
    mul=-mul;
    n++;
    if(mem > min || mem <-min){
      this.getRecursion(x, mul, n, sum, top);
    }
    else this.yy = sum;
    
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
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1){
    let x = xn, y = 1.0;
    while(x <= xk){
      this.getRecursion(x, -1, 1, y);
      this.xy.set(x, this.yy);
      if(this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + this.yy.toFixed(4));
      x=x+h;
    }
    return this.xy;
  }
}
