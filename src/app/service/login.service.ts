import { Injectable } from '@angular/core';
//import { User } from '../model/user';
//import { Note } from '../model/note';
import { Prods } from '../model/prods';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public productsArr:Prods[]=[]

  
  
  constructor() { 
    console.log(this.productsArr)
  }
  adminAddProducts(id: string, name: string, author: string , cost : number) {
    
    var tempProd  = new Prods();
    this.productsArr.push(tempProd);
    console.log(this.productsArr);
  }

  getProducts(): Prods[] {
    return this.productsArr
  }

  getProduct(id: string): Prods {

    let index = this.productsArr.findIndex(p => p.id === id)

    return this.productsArr[index]

  }




}
