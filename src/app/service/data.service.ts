import { Injectable } from '@angular/core';
import { v } from '@angular/core/src/render3';

import { User } from 'src/model/user';
import { Cargo } from '../cargo/cargo';
import { Vehicle } from '../vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apppData: string = "Bajaj";
  d:string="";
  makeorder:boolean=false;
  u:User=new User()
  profile:boolean=false;
  type:boolean=false;
  // tempUser = new User("rupam@gmail.com", "rupam", "1234",false)
  public usersArr: User[] = [];
   map = new Map([]);
   vehiclelist = []
   cargolist=[]
 cname:string=""
  cemail:string=""
  l=[] 
  constructor() { }
  loginVerify(email: string="", pass: string): boolean {
    var index=false;
    var index=this.map.has(email)
    
    console.log(index);
    console.log(this.map.get(email),this.map.get(email)[2])
    if (index !== false) {
      if (this.map.get(email)[0] === email && this.map.get(email)[2] === pass) {
        localStorage.setItem("email", email);
        this.cemail=email
        this.cname=this.map.get(email)[1]
        this.type=this.map.get(email)[3]
        return true;
        console.log('working')
      } 
      else {
        alert("Wrong Password");
        console.log("Wrong Password");
        return false;
      }
    } 
    else {
      alert("User not registured");
      console.log("User not registured");
      return false;
    }
  }
  
  getData(): string {
    return this.d;
  }
  setprofile(profile:boolean){
    this.profile=profile
    
  }
  setmakeorder(profile:boolean){
    this.profile=profile
    
  }
  approve(code:string,code1:string){
    for (let i = 0; i < this.cargolist.length; i++) {
      console.log(this.cargolist[i][3])
     if (this.cargolist[i][0]===code)
     {
     this.cargolist[i][7]=true
     this.cargolist[i][8]=false
     }
    }
   this.vehiclestatus(code1,true)
    
  }
  reject(code:string,code1:string){
    for (let i = 0; i < this.cargolist.length; i++) {
      console.log(this.cargolist[i][3])
     if (this.cargolist[i][0]===code)
     {
     this.cargolist[i][7]=false
     this.cargolist[i][8]=true
     }
    }
    this.vehiclestatus(code1,false)
   
   
  }
  deleteorder(code:string,code1:string)
  {
    for (let i = 0; i < this.cargolist.length; i++) {
      console.log(this.cargolist[i][3])
     if (this.cargolist[i][0]===code)
     {
     this.cargolist.splice(i,1)
       
       console.log("deleted")
     }
     
    }
  }
  deletevehicle(code:string)
  {
    for (let i = 0; i < this.vehiclelist.length; i++) {
      console.log(this.vehiclelist[i][3])
     if (this.vehiclelist[i][0]===code)
     {
     this.vehiclelist.splice(i,1)
       
       console.log("deleted")
     }
    }
  }
  editvehicle(code:string,name:string,type:string,rate:number){
    for (let i = 0; i < this.vehiclelist.length; i++) {
     
     if (this.vehiclelist[i][0]===code)
     {
      this.vehiclelist[i][1]=name
      this.vehiclelist[i][2]=type
      this.vehiclelist[i][3]=rate
       
       console.log(this.vehiclelist[i][0],this.vehiclelist[i][1],this.vehiclelist[i][2])
     }
    }
  }
  updateuser(email:string,name:string)

  
  {
    this.map.get(email)[1]=name
    console.log('new name:',  this.map.get(email)[1]=name)
  }
  createNewUser(email: string,name: string,password: string,type:boolean,order:Array<string>,
    rorder:Array<string>) {
    let newUser = new User();
    this.map.set(email,[email,name,password,type,order,rorder])
    this.cemail=email
    this.cname=name
    this.type=this.map.get(email)[3]
    console.log('cemail',this.cemail,this.type)
   
    
    console.log(this.map);
  }
  getallveh()
  {
    var z1=[]
    for (let i = 0; i < this.vehiclelist.length; i++) {
     
     if (this.vehiclelist[i][6]===false)
     {
     z1.push([this.vehiclelist[i][0],this.vehiclelist[i][1],this.vehiclelist[i][2]
    ,this.vehiclelist[i][3],this.vehiclelist[i][4],this.vehiclelist[i][5]
  ,this.vehiclelist[i][6]])
       
     }

    }
    
    console.log('newlist',z1)
    return z1

  }
  vehiclestatus(code:string,busy)
  {
 for (let i = 0; i < this.vehiclelist.length; i++) {
     
     if (this.vehiclelist[i][0]===code)
     {
       if (busy===true)
       { this.vehiclelist[i][6]=true
       
        console.log("vehicle busy")

       }
      else if(busy===false)
      {
        this.vehiclelist[i][6]=false
       
        console.log("vehiclefree")
      }
    
     }
    }
  }
  createorder(code:string,name:string,desc:string,load:number,pick:string,to:string,dist:number,vehicle:Array<string|number>,cost:number)
   {
    let c=new Cargo();
    this.cargolist.push([code,name,desc,load,pick,to,dist,c.aprv,c.rej,this.cname,this.cemail,vehicle,cost])
   
    console.log('cargolist'+this.cargolist)
    console.log('cost'+this.cargolist[0][11]+this.cargolist[0][12])
    console.log('cost2'+vehicle)
    this.vehiclestatus(String(vehicle[0]),true)
  }
  createnewvehicle(code:string,name:string,type:string,rate:number)
  {

      let v=new Vehicle();
      this.vehiclelist.push([code,name,type,rate,this.cname,this.cemail,v.busy])
      console.log(this.vehiclelist)
  }
  getvehiclelist(){
  //   var z1=[]
  //   for (let i = 0; i < this.vehiclelist.length; i++) {
     
  //    if (this.vehiclelist[i][5]===this.cemail)
  //    {
  //    z1.push([this.vehiclelist[i][0],this.vehiclelist[i][1],this.vehiclelist[i][2]
  //   ,this.vehiclelist[i][3],this.vehiclelist[i][4],this.vehiclelist[i][5]
  // ,this.vehiclelist[i][6]])
       
  //    }

  //   }
    
  //   console.log('newlist',z1)
    return this.vehiclelist
  }
  getcargolist(){
   

    return this.cargolist
  }

  // setUser(user: User){
  //   this.user=user;
  // }
  // getUser():User{
  //   return this.user
  //     }
  //     adduserlist(user:User){
  //       this.wishlist.push(user);
  //     }
  //     getlist(){
  //       return this.wishlist;
  //     }
}
