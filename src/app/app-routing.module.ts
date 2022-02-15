import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContantComponent } from './contant/contant.component';
import { ProductComponent } from './product/product.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductComponent } from './admin-product/admin-product.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path:'home',component: HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'contact', component:ContantComponent},
  {path : 'product' , component:ProductComponent},
  {path : 'address' , component:AddressComponent},
  {path : 'payment' , component:PaymentComponent},
  {path : 'admin' , component:AdminComponent},
  {path : 'adminregister' , component:AdminRegisterComponent},
  {path : 'adminlogin' , component:AdminLoginComponent},
  {path : 'adminproduct' , component:AdminProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
