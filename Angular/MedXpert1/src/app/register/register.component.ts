import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
loading:boolean=false;
  constructor(private registerkro:SharedserviceService) { }
otpradio:String="user";
fname:String='';
lname:String='';
  ngOnInit(): void {
  }
  register(form:any){
   console.log("here we are register");
   this.registerkro.register(form.form.value).subscribe(data=>{
     console.log(data);
   });
   this.registerkro.chlna("file:///C:/Users/Anushka%20Jain/Downloads/CovidDataset-20200427T133042Z-001/CovidDataset/Val/Covid/4e43e48d52c9e2d4c6c1fb9bc1544f_jumbo.jpeg").subscribe(data=>{
     console.log(data);
   })
   console.log(form.form.value);

  }

}
