import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading:boolean=true;
  constructor(private service:SharedserviceService) { }

  ngOnInit(): void {
  }
  login(form:any){
    console.log("login is created");
   
  }
}
