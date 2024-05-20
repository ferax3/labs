import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { City } from './City';
import { Country } from './Country';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  cityListRef?: AngularFireList<any>;
  countryListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  createCity(city: City){
    return this.cityListRef?.push({
      cnt_id: city.cnt_id,
      name: city.name,
      count: city.count,
      sq: city.sq,
      devicion: city.devision,
      tel: city.tel
    })
  }
  createCnt(cnt: Country){
    return this.countryListRef?.push({
      id: cnt.id,
      name: cnt.name
    })
  }
  getRecord(id: string, bd:string){
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef="+this.bdRef.snapshotChanges());
    return this.bdRef;
  }
  //true-city
  //false-country
  getRecordList(bd:string, op: boolean){
    if(op){
      this.cityListRef = this.db.list('/' + bd);
      return this.cityListRef;
    }
    else{
      this.countryListRef = this.db.list('/' + bd);
      return this.countryListRef;
    }

  }    
  updateCity(id:number, city: City, bd: string){
      this.bdRef = this.db.object('/'+bd+'/'+id);
      return this.bdRef.update({
        cnt_id: city.cnt_id,
        name: city.name,
        count: city.count,
        sq: city.sq,
        devicion: city.devision,
        tel: city.tel
      })
  }
  updateCountry(id:number, cnt: Country, bd: string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.update({
      id: cnt.id,
      name: cnt.name
    })
  }
  deleteRecord(id:string, bd: string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    this.bdRef.remove();
  }
}
