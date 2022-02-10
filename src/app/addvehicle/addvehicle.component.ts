import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Vehicle } from '../vehicle/vehicle';
import {  ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from '../notification.service';
import { ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  v:Vehicle=new Vehicle()
  email:string=""
  code:string=""
  constructor(private notifyService : NotificationService,private router :Router,private dataService:DataService,private toastr: ToastrService,public activatedRoute: ActivatedRoute) { }
  show(){
    console.log(this.v.name,this.v.rate,this.v.type)

  }
  randomString() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
   }
    this.code = randomstring;
    return 0;
   }
   
 addvehicle()
 
  {
   
    if (this.v.name===''||this.v.type==='')
    {
  
      alert("enter required data")
      this.toastr.error('Information not filled','Error')
    }
    else{

   
    this.dataService.createnewvehicle(this.code,this.v.name,this.v.type,this.v.rate)
    this.router.navigate(['/vehlist', this.dataService.cemail]);
    this.toastr.success('Vehicle Added','Success')
  }
   
    
  }
  ngOnInit(): void {
    this.randomString()
    console.log('code is:',this.code)
    this.email=this.activatedRoute.snapshot.paramMap.get('id1');
  }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
