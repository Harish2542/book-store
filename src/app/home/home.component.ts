import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  contact(){
    this.router.navigateByUrl("/contact");
  }
  product(){
    this.router.navigateByUrl("/product");
  }
  home(){
    this.router.navigateByUrl("/home");
  }
}
