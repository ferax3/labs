import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorCountService {

  validate_count(value: number){
    if (value > 2){
      return true;
    }
    else return false;
  }
  constructor() { }
}
