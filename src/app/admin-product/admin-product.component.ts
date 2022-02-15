import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { LoginService } from '../service/login.service';
import { Validators } from '@angular/forms';
import { Prods } from '../model/prods';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {


  
isUpdate:boolean=false;
editBook:Book = new Book();

title="Bajaj Finserv";
product = {id:101, name:"Dell laptop"}
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




adminProductsArr: Prods[] = []

  displayStyle = "none";


  constructor(private loginservice:LoginService , private router:Router, private fb:FormBuilder) { }

  prodIdRegx = /^[0-9]*$/
  nameRegx = /^[a-zA-Z ]*$/

  newProductAddingForm = this.fb.group({
    id: ["", [Validators.required, Validators.pattern(this.prodIdRegx)]],
    name: ["", [Validators.required, Validators.pattern(this.nameRegx)]],
    author: ["", [Validators.required, Validators.pattern(this.nameRegx)]],
    cost: ["", [Validators.required, Validators.pattern(this.prodIdRegx)]]
    
  })

  onSubmit() {
    if (this.newProductAddingForm.valid) {
      console.log(this.newProductAddingForm.value);
      var tempProd: Prods = this.newProductAddingForm.value;
      this.loginservice.adminAddProducts(tempProd.id, tempProd.name, tempProd.author, tempProd.cost);

      this.newProductAddingForm.setValue({
        id: "",
        name: "",
        author: null,
        cost: ""
      })

      this.newProductAddingForm.markAsUntouched()

      //this.router.navigate(['/seller-add-product']);

    } else {
      alert("Invalid product")
    }

    this.displayStyle = "block";
  }


  ngOnInit(): void {
  }






















}
