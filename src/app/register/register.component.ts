import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regData:User=new User();
  email:string="";
  username:string="";
  password:string="";
  constructor(private authentication:AuthenticationService,private router: Router) { }
  str:User[]=[]

  
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.regData.username=this.username;
    this.regData.email=this.email;
    this.regData.password=this.password;
    console.log(this.regData)
    this.authentication.setData(this.regData);

    this.router.navigateByUrl('/login');
  }
  cancel(){
    
  }
  


}
