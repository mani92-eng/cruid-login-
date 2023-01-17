import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {

  employeeData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(
      (res:any)=>{
       this.employeeData=res;
       console.log(res);

})


}
}
