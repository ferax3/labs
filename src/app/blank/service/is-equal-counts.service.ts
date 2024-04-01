import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsEqualCountsService {

  constructor() { }
  validate_is_equal_counts(count1:number, count2:number){
    if(count1===count2){
      return true;
    }
    else return false;
  }
}
