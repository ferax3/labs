import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  //Поле для створення графіку
  //Змінні як додаткові
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  
  //any тип для якого не потрібна перевірка типів
  lineChart:any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];
  constructor() { Chart.register(...registerables); }
  ngOnInit() {
  }
  graphras(xn: any, xk: any, a:any, h: any){
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x<this.xk) {
      if (x <= 0){
        y = (Math.tan(Math.pow((x+3), 2)))/(Math.pow(Math.abs(x), 1.2) * Math.sin(3*x));
      }
      else 
      if (x > this.a) {
        y = (Math.tan(0.1*3.14*x*x)+x)/(Math.pow(Math.cos(2*x+3), 2));
      }
      else{
        y = (x*x*x - 4*x +2)/(x*x + Math.sin(7*x)-1);
        
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = "x: " + x.toFixed(1) + ", y: " + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }
  lineChartMethod(){
    //*? Якщо графік існує то видаляємо його
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    //*?Створюємо новий графік з наступними параметрами
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    });
  }
}
