import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Book } from '../model/book';
import { Note } from '../model/note';
import { Items } from '../model/items';
import { Router } from '@angular/router';
import { AdminProductComponent } from '../admin-product/admin-product.component';
import { LoginService } from '../service/login.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Prods } from '../model/prods';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

isUpdate:boolean=false;
editBook:Book = new Book();

title="Bajaj Finserv";
books : Book[]=[]


book:Book={id:1,name:"harry potter",author:"abc",cost:499}
stringBook=JSON.stringify(this.book)
ipType="text"
display(){
  console.log("function display")
  console.log(this.stringBook)
  this.title="Bajaj Finserv"

}
addBook(){
  this.books.push(this.book)
  this.book=new Book()
  console.log(this.books)
}
deleteBook(x:Book){
  this.books.pop()
  this.book=new Book()
  console.log(this.books)

}
updateBook(book:Book){
  this.isUpdate=true;
  this.editBook=book;
  console.log("Update Book" + JSON.stringify(this.book))
  
}
query : string='';

notes : Note[]=[]

constructor(private router: Router , private adminproduct: AdminProductComponent , private activatedRoute:ActivatedRoute , private loginservice:LoginService){
  this.notes.push(new Note(1,"Think & Grow Rich","Napoleon Hill",199));
  this.notes.push(new Note(2,"Atomic Habits","James Clear",480));
  this.notes.push(new Note(3,"The Psychology of Money","Morgan Housel",240));
  this.notes.push(new Note(4,"Rich Dad Poor Dad","Robert T.Kiyosaki",240));

}

  productId: string | null = null

  product: Prods | null = null







ngOnInit(): void {

  this.productId = this.activatedRoute.snapshot.paramMap.get('id')

 

    if (this.productId !== null) {
      this.product = this.loginservice.getProduct(this.productId)
    }




















  }
  isCartOpen = false;
  isProductOpen = true;
  totalAmt = 0;

  itemObj1 : Items = new Items();
  itemObj2 : Items = new Items();
  itemObj3 : Items = new Items();
  itemObj4 : Items = new Items();

  homeItems : Items[] = [this.itemObj1,this.itemObj2,this.itemObj3,this.itemObj4];

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
    itemObj.qnt++;
    this.totalAmt = this.totalAmt + itemObj.cost;
  }

  decrease(itemObj : Items){
    
    itemObj.qnt--;
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

  addToCart(itemObj : Items){
    console.log(itemObj);
    let flag : boolean = true;
    for(let i=0;i<this.cartItems.length;i++)
    {
      if(this.cartItems[i].id === itemObj.id && this.cartItems[i].name=== itemObj.name)
      {
        this.cartItems[i].qnt++;
        this.totalAmt = this.totalAmt + itemObj.cost;
        flag = false;
        break;
      }
    }
    if(flag === true)
    {
      if(itemObj.qnt === 0)
      {
        itemObj.qnt = 1;
        
      }
      this.totalAmt = this.totalAmt + itemObj.cost;
      this.cartItems.push(itemObj);
    }
    // console.log(this.cartItems);
    console.log(this.totalAmt);
  }
}


