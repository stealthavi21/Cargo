import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/model/user';

import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible:boolean=true;
  comp:boolean=false;
  profile:boolean;
  u:User=new User()
  cemail:string="";
  title = 'Cargo';
  constructor(private router :Router,public dataService:DataService,private toastr: ToastrService) 
  {
    
    console.log( this.profile)
    this.cemail=this.dataService.cemail;
    // this.router.navigateByUrl("/home");
  }
 show(){
  this.toastr.success('1','22')
 }
  login(){
    this.isVisible=false;
   this.comp=true;
    this.router.navigateByUrl("/login");
    
  }

  
  register(){
    this.isVisible=false;
    this.comp=true;
    this.router.navigateByUrl("/reg");
    
  }
  profiler(){
   
   
   console.log(this.dataService.cemail)
    this.router.navigate(['/profile', this.dataService.cemail]);
  }
  homepage(){
    this.router.navigate(['/home', this.dataService.cemail]);
  }
  logout(){
    this.dataService.setprofile(false);
    this.router.navigateByUrl("/login");
  }
  addvehicle(){
    this.router.navigate(['/addveh', this.dataService.cemail]);

  }
  vehiclelist(){
    this.router.navigate(['/vehlist', this.dataService.cemail]);
  }
}

