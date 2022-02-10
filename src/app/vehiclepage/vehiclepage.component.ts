import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-vehiclepage',
  templateUrl: './vehiclepage.component.html',
  styleUrls: ['./vehiclepage.component.css']
})
export class VehiclepageComponent implements OnInit {
  vehiclelist=[]
  email:string=""
  showEmptyIcon: boolean = true
  constructor(private toastr: ToastrService,private router :Router,private dataService:DataService,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.email=this.activatedRoute.snapshot.paramMap.get('id1');
    this.vehiclelist = this.dataService.getvehiclelist();
    if (this. vehiclelist.length === 0) {
      this.showEmptyIcon = true
    } else {
      this.showEmptyIcon = false
    }
  }
  addvehicle(){
    
    this.router.navigate(['/addveh', this.dataService.cemail]);

  }
  editProduct(prod: Array<string>) {
    console.log(prod[0],prod[1],prod[2],Number(prod[3]));
    this.router.navigate(['/vehedit', prod[0],prod[1],prod[2],Number(prod[3])]);
  }
  deletevehicle(prod:string){
    this.dataService.deletevehicle(prod)
    
    this.toastr.info('Vehicle Removed','Removed')
  }
  
  }


