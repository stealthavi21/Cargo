import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from '../cargo/cargo';
import { NotificationService } from '../notification.service';
import { DataService } from '../service/data.service';
import { Vehicle } from '../vehicle/vehicle';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: ['./makeorder.component.css']
})
export class MakeorderComponent implements OnInit {
  c:Cargo=new Cargo()
  code:string=""
  vehiclelist=[]
  vehcode:string=""
  v:Vehicle=new Vehicle()
 
  constructor(private notifyService : NotificationService,private router :Router,private dataService:DataService,private toastr: ToastrService,public activatedRoute: ActivatedRoute) { }
 
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
  ngOnInit(): void {
    this.vehiclelist = this.dataService.getallveh();
  }
  addcargo(){
    if (this.c.name===''||this.c.desc===''||this.c.load===0
    ||this.c.dist===0||this.c.pick===""||this.c.to==='')
    {
      
      alert("enter required data")
      this.toastr.error('Information not filled','Error')
    }
    else{
     
      this.randomString();
      var cost=Number(this.c.vehicle[3])*this.c.dist
      this.dataService.createorder(this.code,this.c.name,this.c.desc,this.c.load
        ,this.c.pick,this.c.to,this.c.dist,this.c.vehicle,cost)
   
    this.router.navigate(['/home', this.dataService.cemail]);
    this.toastr.success('Order Added','Success')
  }
   
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
  codesave(vehiclecode:string){
    this.vehcode=vehiclecode
    for (let i = 0; i < this.vehiclelist.length; i++) {
      
      if (this.vehiclelist[i][0]===this.vehcode)
      {
        this.c.vehicle=[this.vehiclelist[i][0],this.vehiclelist[i][1],this.vehiclelist[i][2]
        ,this.vehiclelist[i][3],this.vehiclelist[i][4],this.vehiclelist[i][5]
      ,this.vehiclelist[i][6]]
     
        
      }
      console.log(this.c.vehicle)
 
     }
}
}
