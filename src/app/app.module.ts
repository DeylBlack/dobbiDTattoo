import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AuthModule} from "./components/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterOutlet,
    AuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
