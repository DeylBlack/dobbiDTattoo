import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
