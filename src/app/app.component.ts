import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';

  constructor(private router:Router ){

  }
  login(){
    this.router.navigateByUrl("/login");
  }
  register(){
    this.router.navigateByUrl("/register");
  }
  home(){
    this.router.navigateByUrl("/home");
  }
  address(){
    this.router.navigateByUrl("/address");
  }
  admin(){
    this.router.navigateByUrl("/admin");
  }
  logout(){
  
    this.router.navigateByUrl("/home");
  }

}
