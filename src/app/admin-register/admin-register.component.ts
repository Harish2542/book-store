import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  adminData:Admin=new Admin();
  email:string="";
  username:string="";
  password:string="";
  role:string="";

  constructor(private admin:AdminService , private router:Router) { }
  str:Admin[]=[]

  ngOnInit(): void {
  }
  onSubmit(){
    this.adminData.username=this.username;
    this.adminData.email=this.email;
    this.adminData.password=this.password;
    this.adminData.role=this.role;
    console.log(this.adminData)
    this.admin.setAdmin(this.adminData);

    this.router.navigateByUrl('/adminlogin');
  }
  cancel(){
    
  }

}
