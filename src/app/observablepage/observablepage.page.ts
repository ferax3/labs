import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryList } from './service/CountryList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { CityList } from './service/CityList';
import { City } from './service/City';
import { Country } from './service/Country';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit, OnDestroy{
  cnts = new CountryList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  cityList = new CityList(this.configService);
  cnt: Country = new Country();
  count=0;

  constructor() { }

  nextCountry(){
    if(this.count < this.cnts.cnt.size-1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setCnt(this.cnts.cnt.get(this.count));
  }
  addCity(name: any, count:any, devision:any, sq: any, tel: any){
    let city = new City();
    city.name = name;
    city.count = count;
    city.devision = devision;
    city.sq = sq;
    city.tel = tel;

    

    city.cnt_id = this.cnt.id;
    this.cityList.add(city);
  }
  addCountry(cnt: any){
    let l = new Country();
    l.id = this.cnts.cnt.size;
    l.name = cnt;
    this.cnts.add(l);
  }
  ngOnInit() {
    const cntSub = this.configService.cnt$
    .subscribe(()=> {this.cnt = this.configService.cnt$.value;});
    this.subscriptions.push(cntSub);
  }
  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }


}
