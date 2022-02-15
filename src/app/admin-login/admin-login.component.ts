import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string="";
  password:string="";
  role:string="";

  data:Admin={
    username:"",
    password:"",
    email:"",
    role:""
  }

  constructor(private admin:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  checklogin(){
    this.data=this.admin.getAdmin();
    console.log(this.username===this.data.username)
    console.log(this.password===this.data.password)
    console.log(this.role===this.data.role)
    if(this.username===this.data.username && this.password===this.data.password && this.role===this.data.role){
      alert("sucess");
      this.router.navigateByUrl("/adminproduct");

    }
    else{
      alert("fail");
      this.router.navigateByUrl("/home");
      }
    }
    

}
