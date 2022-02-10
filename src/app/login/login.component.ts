import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isVisible:boolean=false;
  name:string=""
  email:string=""
  u:User=new User()
  temp:boolean;

  constructor(private router :Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  save(){
    
    
  for (let entry of this.dataService.map.entries()) {  
    console.log(entry[0], entry[1]);   
}  

  }
  login(){
    if (this.u.email===''||this.u.password==='')
    {
  
      alert("enter required data")
    }
    else{
      this.temp=this.dataService.loginVerify(this.u.email, this.u.password);
    if(this.temp)
    {
      this.router.navigate(['/home', this.u.email]);
    }
    }
    

    
  }
  get(){
    // console.log(this.dataService.getlist);
  }

}
