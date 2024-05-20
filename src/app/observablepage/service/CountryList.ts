import { Country } from './Country';
export class CountryList{
    cnt=new Array();
    constructor(){  }
    add(country: Country){
        this.cnt.push(country);
    }
}