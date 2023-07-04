import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {ImagesComponent} from "./components/images/images.component";
import {AppointmentsComponent} from "./components/appointments/appointments.component";


export const authRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'images',
      },
      {
        path: 'images',
        component: ImagesComponent,
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
