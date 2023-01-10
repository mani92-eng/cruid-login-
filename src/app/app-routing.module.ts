import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeDeshboardComponent } from './employe-deshboard/employe-deshboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 {path:'login',component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'dashboard',component:EmployeDeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
