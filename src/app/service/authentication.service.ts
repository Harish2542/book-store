import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private regData : User= new User();

  constructor() { }
  setData(regData:User){
    this.regData = regData;
    console.log(this.regData);
  }

  getData(){
    return this.regData;
  }
}
