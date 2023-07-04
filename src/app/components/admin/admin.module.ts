import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { ImagesComponent } from './components/images/images.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [
    AdminComponent,
    ImagesComponent,
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
