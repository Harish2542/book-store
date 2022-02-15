import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../model/items';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  isCartOpen = false;
  isProductOpen = true;
  totalAmt = 0;

  itemObj1 : Items = new Items();
  itemObj2 : Items = new Items();
  itemObj3 : Items = new Items();
  itemObj4 : Items = new Items();
  itemObj5 : Items = new Items();
  homeItems : Items[] = [this.itemObj1,this.itemObj2,this.itemObj3,this.itemObj4,this.itemObj5];

  cartItems : Items[] = [];

  openCart(){
    this.isCartOpen = true;
    this.isProductOpen = false;
  }

  openHome(){
    this.isCartOpen = false;
    this.isProductOpen = true;
  }
  address(){
    this.router.navigateByUrl("/address");
  }

  increase(itemObj : Items){
    itemObj.qnt+=1;
    this.totalAmt = this.totalAmt + itemObj.cost;
  }

  decrease(itemObj : Items){
    
    itemObj.qnt-=1;
    this.totalAmt = this.totalAmt - itemObj.cost;
    if(itemObj.qnt === 0)
    {
      let idx = this.cartItems.indexOf(itemObj);
      if(idx !== -1)
      {
        this.cartItems.splice(idx,1);
      }
    }
  }


}
