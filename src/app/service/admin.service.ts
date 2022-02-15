import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminData : Admin= new Admin();

  constructor() { }
  setAdmin(adminData:Admin){
    this.adminData = adminData;
    console.log(this.adminData);
  }

  getAdmin(){
    return this.adminData;
  }

  
}
