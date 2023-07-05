import { NgModule } from '@angular/core';
import {AuthService} from "./services/auth.service";
import { LoadingComponent } from './components/loading/loading.component';
import {AuthGuardService} from "./services/can-activate.service";
import {SessionInfoService} from "./services/session-info.service";
import {ReviewsService} from "./services/reviews.service";
import {CustomDatePipe} from "./pipes/cutom-date.pipe";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    LoadingComponent,
    CustomDatePipe,
    ModalComponent,
  ],
  imports: [
  ],
  exports: [
    LoadingComponent,
    CustomDatePipe,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    SessionInfoService,
    ReviewsService,
  ],
})
export class SharedModule { }
