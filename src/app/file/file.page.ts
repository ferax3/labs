import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  //масив з даними
  data: any = [];
  data_users: any = [];
  //Видимість елементів
  showDetails: boolean[] = new Array(1000).fill(false);
  //адреса файлу
  dataUrl = 'https://api.jsonbin.io/v3/b/65e5cb81dc74654018ada2f2';
  //об'єкт для очікування
  loading: any;
  
  constructor(public loadingController:LoadingController){

  }
  async load(){
    // Очищення попередніх даних
    this.data = [];
    this.data_users = [];
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...'
    });
    //Present the loading controller
    await this.loading.present();
    //Отримання запиту асинхроно
    fetch(this.dataUrl).then(res => res.json()).then(json => {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      console.log(this.data);
      while (this.data[i] != undefined){
        this.data_users.push(this.data[i][0]);
        i++;
      }
      this.loading.dismiss();
    });
  }
  toggleDetails(i:number){
    if(this.showDetails[i]){
      this.showDetails[i]=false;
    }
    else{
      this.showDetails[i]=true;
    }
  }
  //Запит. Ввести прізвище автора у окремій формі та позначити кольором всі статті даного автора.
  getColor(a: any, b: any){
    return a == b ? 'var(--ion-color-primary)' : 'grey';
  }

  ngOnInit() {
  }

}
