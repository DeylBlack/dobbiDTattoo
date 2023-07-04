import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import {SessionInfoService} from "./session-info.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private sessionInfo: SessionInfoService,
    private router: Router,
  ) {}

  public canActivate(): boolean {
    this.authService.isLogin().subscribe((isCanActivate: boolean) => {
      if (!isCanActivate) {
        this.router.navigate(['/']);
      }

      return isCanActivate;
    }, error => {
      this.router.navigate(['/']);
      return false;
    })

    return true;
  }
}
