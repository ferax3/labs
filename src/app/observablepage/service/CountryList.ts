import { Country } from './Country';
export class CountryList{
    cnt=new Map();
    constructor(){
        this.cnt.set(0,{id:0, name:'Україна'});
        this.cnt.set(1,{id:1, name:'Великобританія'});
    }
    add(country: Country){
        this.cnt.set(country.id,{id:country.id, name: country.name});
    }
}