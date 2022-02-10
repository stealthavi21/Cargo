import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ProfilerComponent } from './profiler/profiler.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { ToastrModule } from 'ngx-toastr';
import { VehiclepageComponent } from './vehiclepage/vehiclepage.component';
import { VehicleeditComponent } from './vehicleedit/vehicleedit.component';
import { MakeorderComponent } from './makeorder/makeorder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfilerComponent,
    AddvehicleComponent,
    VehiclepageComponent,
    VehicleeditComponent,
    MakeorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:2500,
      progressAnimation:'increasing',
      progressBar:true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
