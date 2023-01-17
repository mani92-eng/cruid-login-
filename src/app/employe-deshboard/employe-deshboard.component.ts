import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormsModule,FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Employee } from './employee';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employe-deshboard',
  templateUrl: './employe-deshboard.component.html',
  styleUrls: ['./employe-deshboard.component.css']
})
export class EmployeDeshboardComponent {
  myform !:FormGroup;
  Employemodelobj:Employee=new Employee();
  emplist:any;

  showaddbtn!:boolean ;
  shoeupdatebtn !:boolean;


  constructor(private api:ApiService,
    private formbuilder:FormBuilder,
    private rouer:Router,
    public toster:ToastrService,
   
    ){}

  ngOnInit(){


   this.myform=this.formbuilder.group({

    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required],
    mobile:['',Validators.required],
    salary:['',Validators.required],

    });
    this.get();

   
  }



  clickAddEmploye(){

    this.myform.reset();
    this.showaddbtn=true;
    this.shoeupdatebtn=false;

  
    
  }

  post(){
    
    this.Employemodelobj.firstname=this.myform.value.firstname;
    this.Employemodelobj.lastname=this.myform.value.lastname;
 this.Employemodelobj.email=this.myform.value.email;
 this.Employemodelobj.mobile=this.myform.value.mobile;
 this.Employemodelobj.salary=this.myform.value.salary;

    this.api.postEmploye(this.Employemodelobj).subscribe(
      (res:any)=>{
             alert("employe added Sucess");
             console.log(res);
             let ref=document.getElementById('cancel')
             ref?.click()
             this.myform.reset();
             this.get();
            

      }
    )

  }

  get(){
    this.api.getEmploye().subscribe(
      (res:any)=>{
        this.emplist=res;
        console.log(res);
       

      }
    )
}

delete(row:any){
  this.api.DeleteEmploye(row.id).subscribe(
    (res:any)=>{
      alert("delated success");
      console.log(res);
      this.get();

    }
  )
}

onedit(row:any){
  this.shoeupdatebtn=true;
  this.showaddbtn=false;
  this.Employemodelobj.id=row.id;
  this.myform.controls['firstname'].setValue(row.firstname);
  this.myform.controls['lastname'].setValue(row.lastname);
  this.myform.controls['email'].setValue(row.email);
  this.myform.controls['mobile'].setValue(row.mobile);
  this.myform.controls['salary'].setValue(row.salary);
  this.Employemodelobj.id=row.id;
}


onupdate(){

  this.Employemodelobj.firstname=this.myform.value.firstname;
    this.Employemodelobj.lastname=this.myform.value.lastname;
    this.Employemodelobj.email=this.myform.value.email;
    this.Employemodelobj.mobile=this.myform.value.mobile;
    this.Employemodelobj.salary=this.myform.value.salary;

    this.api.updateEmploye(this.Employemodelobj,this.Employemodelobj.id).subscribe(
      (res)=>{
        this.toster.success("Data Added !!", "Data Added successfully !!")

        console.log(res);
        let ref=document.getElementById('cancel')
             ref?.click()
        this.myform.reset();
        this.get();
      }
    )


}

logout(){
  this.rouer.navigate(['login']);

}


}
