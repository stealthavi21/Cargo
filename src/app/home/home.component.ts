import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 email:String | null= ""  
 name: String | null=""
 type:string=""
 showEmptyIcon: boolean = true
 cargolist=[]
  constructor(private toastr: ToastrService,private router :Router,public activatedRoute: ActivatedRoute,public dataService:DataService) {
    this.dataService.setprofile(true);
    console.log(this.dataService.profile)
   }
   addorder(){
    this.router.navigate(['/addor', this.dataService.cemail]);
   }
  ngOnInit(): void {
    this.cargolist = this.dataService.getcargolist();
    if (this. cargolist.length === 0) {
      this.showEmptyIcon = true
    } else {
      this.showEmptyIcon = false
    }
    this.email=this.activatedRoute.snapshot.paramMap.get('id1');
    this.name=this.dataService.map.get(this.email)[1]
    console.log(this.name=this.dataService.map.get(this.email)[1])
     if (this.dataService.map.get(this.email)[3]===true)
    {
      this.type="User"
    }
    else{
      this.type="Supplier"
    }
  }
  removeorder(prod:string,prod1:string){
    this.dataService.deleteorder(prod,prod1)
    
    this.toastr.info('Order Removed','Removed')
  }
  approve(prod:string,prod1:string){
    this.dataService.approve(prod,prod1)
    
    this.toastr.success('Order Accepted','Accepted')
  }
  reject(prod:string,prod1:string){
    this.dataService.reject(prod,prod1)
    
    this.toastr.error('Order Rejected','Rejected')
  }
}
