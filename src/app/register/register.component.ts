import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/model/user';
import { DataService } from '../service/data.service';
import { NgForm } from '@angular/forms';  
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router :Router,private dataService:DataService) { }
  d:string="";
  u:User=new User()
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  isValidFormSubmitted = false;  
  value:boolean=true
  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm) {  
    this.isValidFormSubmitted = false;  
  
    if (form.invalid) {  
       return;  
    }  
  
    this.isValidFormSubmitted = true;  
    form.resetForm();  
 }  
 userEmails = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.pattern(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
    ),
  ]),
});
  submit(){
    if (this.u.email===''||this.u.password===''||this.u.name==='')
    {
      console.log("empty")
      alert("enter required data")
    }
    else
    {
    
      this.dataService.createNewUser(this.u.email,this.u.name,this.u.password,this.value
        ,this.u.orders,this.u.veh);
        this.router.navigate(['/home', this.u.email]);
        this.dataService.setprofile(true);
        
    console.log(this.dataService.profile)
    }
  }
  swap1()
  {
    this.value=true
    this.u.type=this.value;
    console.log(  this.u.type)
  }
  swap2(){
    this.value=false
    this.u.type=this.value;
    console.log(  this.u.type)
  }
 
}
