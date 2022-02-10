import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../service/data.service';
import { Vehicle } from '../vehicle/vehicle';

@Component({
  selector: 'app-vehicleedit',
  templateUrl: './vehicleedit.component.html',
  styleUrls: ['./vehicleedit.component.css']
})
export class VehicleeditComponent implements OnInit {
  v:Vehicle=new Vehicle()
  code:string| null= ""
  name:string| null= ""  
  type:string| null= ""  
  rate: number
    
  constructor(private toastr: ToastrService,public activatedRoute: ActivatedRoute,public dataService:DataService,private router :Router) { 
    this.code=this.activatedRoute.snapshot.paramMap.get('id1')
    this.name=this.activatedRoute.snapshot.paramMap.get('id2')
    this.type=this.activatedRoute.snapshot.paramMap.get('id3')
    this.getid()
  }
  getid()
  {
    for (let i = 0; i < this.dataService.vehiclelist.length; i++) {
      console.log(this.dataService.vehiclelist[i][3])
     if (this.dataService.vehiclelist[i][0]===this.code)
     {
       this.rate=Number(this.dataService.vehiclelist[i][3])
       console.log(this.dataService.vehiclelist[i][3])
     }
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
  editvehicle()
  {
    
    
    this.dataService.editvehicle(this.code,this.name,this.type,this.rate)
    this.router.navigate(['/vehlist', this.dataService.cemail]);
    this.toastr.success('Vehicle Edited','Success')

    
  }
  deletevehicle(){
    
  }
  ngOnInit(): void {
  }

}
