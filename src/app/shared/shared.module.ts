import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthService} from "./services/auth.service";
import { LoadingComponent } from './components/loading/loading.component';
import {AuthGuardService} from "./services/can-activate.service";
import {SessionInfoService} from "./services/session-info.service";

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
  ],
  exports: [
    LoadingComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    SessionInfoService,
  ],
})
export class SharedModule { }
