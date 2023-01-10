import { Component } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators,Validator} from '@angular/forms'
import { borderTopRightRadius } from 'html2canvas/dist/types/css/property-descriptors/border-radius';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform:any=FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(){
    this.loginform=this.formbuilder.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),

    })
   
  }


  submit(){
    this.http.get('http://localhost:3000/comments').subscribe(
      (res:any)=>{
        const user=res.find(
          (a:any)=>{
            return a.email===this.loginform.value.email && a.password=== this.loginform.value.password
          }
        );
        if(user){
          alert("login success");
          this.loginform.reset();
          this.router.navigate(['dashboard'])
        }else{
          alert("somthing wrong");

        }
        
      }
    )
    
  }

}
