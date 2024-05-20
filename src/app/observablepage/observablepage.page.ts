import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryList } from './service/CountryList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { CityList } from './service/CityList';
import { City } from './service/City';
import { Country } from './service/Country';
import { FirebaseService } from './service/firebase.service';
import * as firebase from 'firebase/app'
@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit, OnDestroy {
  cnts = new CountryList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  cityList = new CityList(this.configService);
  cnt: Country = new Country();
  count=0;
  bdCity = 'City';
  bdDCountry ='Country';
  constructor(public fbService: FirebaseService) { }
  ngOnInit() {
    this.fetchTask(this.bdCity, true);
    let taskRes = this.fbService.getRecordList(this.bdCity, true);
    taskRes.snapshotChanges().subscribe(

    )
    this.fetchTask(this.bdDCountry, false);
    let taskRes1 = this.fbService.getRecordList(this.bdDCountry, false);
    taskRes1.snapshotChanges().subscribe(
    )
    const cntSub = this.configService.cnt$
      .subscribe(()=>{this.cnt = this.configService.cnt$.value; });
    this.subscriptions.push(cntSub);
  }
  fetchTask(bd:any, op:any){
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res =>{
      console.log(res)
      if (op) this.cityList.cityList = res;
      else {
        this.cnts.cnt = res;
        this.cnt = this.cnts.cnt[this.count];
        this.cityList.search(this.cnt.id);
      }
    })
  }
  nextCountry(){
    if(this.count < this.cnts.cnt.length-1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setCnt(this.cnts.cnt[this.count]);
  }
  addCity(name: any, count:any, devision:any, sq: any, tel: any){
    let city = new City();
    city.name = name;
    city.count = count;
    city.devision = devision;
    city.sq = sq;
    city.tel = tel;
    city.cnt_id = this.cnt.id;
    this.fbService.createCity(city);
    this.cityList.search(this.cnt.id);
    this.cityList.add(city);
  }
  addCountry(cnt: any){
    let l = new Country();
    l.id = this.cnts.cnt.length+1;
    l.name = cnt;
    this.fbService.createCnt(l);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
