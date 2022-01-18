import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userslogin=[];
  login=[];
  onchange1:boolean=false;
  constructor(private dataservice:DataService, private loginservice:LoginService,private routeservice: Router,private toaster:ToastrService){}

  ngOnInit(): void {


  }
  onSub(userregistrationform)
  {
    this.dataservice.sendPostRequest(userregistrationform.value,`api/User`).subscribe(res=>this.toaster.success("Registration Success"),err=>{this.toaster.error("Registration Failed");});
    console.log(userregistrationform.value);
  }
  onlogin(userloginform:NgForm)
  {
    console.log(userloginform.value);
    this.loginservice.sendPostRequest(userloginform.value).subscribe(
      (data: string)=>{
        console.log(data);
        sessionStorage.setItem("token", data)
        this.routeservice.navigate(["home"])
      }, err => {
        this.toaster.error('Invalid username/password')
      }
    );

  }

  status: boolean = false;
onsignin(){

    this.status = false;
    console.log(this.status);

}
onsignup(){

  this.status = true;
  console.log(this.status);

}
log(x: any){console.log(x);}

}
