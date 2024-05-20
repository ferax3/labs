import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from './Country';
import { CountryList } from './CountryList';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentCountry=DEFAULT_CNT;
  cnt$: BehaviorSubject<Country>=new BehaviorSubject<Country>(DEFAULT_CNT);
  setCnt(cnt:Country){
    console.log('Є зміни!!!');
    this.cnt$.next(cnt)
  }
  constructor() { }
}
var countryList=new CountryList();
const DEFAULT_CNT=countryList.cnt.get(0);