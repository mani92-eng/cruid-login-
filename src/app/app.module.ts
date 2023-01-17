import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeDeshboardComponent } from './employe-deshboard/employe-deshboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { MatComponent } from './mat/mat.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeDeshboardComponent,
    LoginComponent,
    SignupComponent,
    MatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
