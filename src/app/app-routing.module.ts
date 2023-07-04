import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MainComponent} from "./components/main/main.component";
import {AuthGuardService} from "./shared/services/can-activate.service";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
