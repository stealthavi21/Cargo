import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakeorderComponent } from './makeorder/makeorder.component';
import { ProfilerComponent } from './profiler/profiler.component';
import { RegisterComponent } from './register/register.component';
import { VehicleeditComponent } from './vehicleedit/vehicleedit.component';
import { VehiclepageComponent } from './vehiclepage/vehiclepage.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'home/:id1',component:HomeComponent},
  {path:'profile/:id1',component:ProfilerComponent},
  {path:'addveh/:id1',component:AddvehicleComponent},
  {path:'vehlist/:id1',component:VehiclepageComponent},
  {path:'vehedit/:id1/:id2/:id3/:id4',component:VehicleeditComponent},
  {path:'addor/:id1',component:MakeorderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
