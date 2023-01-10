import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Validators } from '@angular/forms';

import{FormControl,FormBuilder,FormGroup}from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupform:any=FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(){
    this.signupform=this.formbuilder.group({
      fullname:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
    })

  }

  submit(){
    this.http.post('http://localhost:3000/comments',this.signupform.value).subscribe(
      (res:any)=>{
        alert("signup sccuss");
        this.signupform.reset();
        this.router.navigate(['login'])

      }
    )
  }


}
