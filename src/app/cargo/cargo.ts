import { Vehicle } from "../vehicle/vehicle"

export class Cargo {
    code:string
    name:string
    desc:string
    load:number
    pick:string
    to:string
    dist:number
    aprv:boolean
    rej:boolean
    owner:string
    ownerid:string
    vehicle:Array<string | number>
    cost:number
    constructor(){
        this.code=""
        this.load=0
        this.name=""
        this.desc=""
        this.pick=""
        this.to=""
        this.dist=0
        this.aprv=false
        this.rej=false
        this.owner=""
        this.ownerid=""
        this.vehicle=[]
        this.cost=0
    
    }
   
}