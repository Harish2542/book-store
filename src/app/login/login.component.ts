import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  data:User={
    username:"",
    password:"",
    email:""
  }
  constructor(private authentication: AuthenticationService , private router: Router) { }

  ngOnInit(): void {
  }
  checklogin(){
    this.data=this.authentication.getData();
    console.log(this.username===this.data.username)
    console.log(this.password===this.data.password)
    if(this.username===this.data.username && this.password===this.data.password){
      alert("sucess");
      this.router.navigateByUrl("/product");

    }
    else{
      alert("fail");
      this.router.navigateByUrl("/home");
      }
    }
    

  }


