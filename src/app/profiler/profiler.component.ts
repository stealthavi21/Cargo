import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.css']
})
export class ProfilerComponent implements OnInit {
  u:User=new User()
  email:string | null= ""  
 name: string | null=""
  type: string=""
  t:boolean|null=true
  constructor(private toastr: ToastrService,public activatedRoute: ActivatedRoute,public dataService:DataService,private router :Router) { 
    this.email=this.activatedRoute.snapshot.paramMap.get('id1');
    this.name=this.dataService.map.get(this.email)[1];
    this.t=this.dataService.map.get(this.email)[3];
    if(this.t)
    {
      this.type="User"
    }
    else{
      this.type="Transport Supplier"
    }
  }

  ngOnInit(): void {
    this.email=this.activatedRoute.snapshot.paramMap.get('id1');
    this.name=this.dataService.map.get(this.email)[1];
    this.t=this.dataService.map.get(this.email)[3];
    if(this.t)
    {
      this.type="User"
    }
    else{
      this.type="Transport Supplier"
    }
  }
  edit(){
    this.dataService.updateuser(this.email,this.name)
    
    this.router.navigate(['/home', this.email]);
    this.toastr.success('Profile Edited','Success')
  }

 

}
