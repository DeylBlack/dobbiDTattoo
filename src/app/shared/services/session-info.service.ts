import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";

@Injectable()
export class SessionInfoService {
  private userDataSelector = 'dobbiDAdmin';

  public setUserData(data: UserModel): void {
    localStorage.setItem(this.userDataSelector, JSON.stringify(data));
  }

  public getUserData(): string {
    return localStorage.getItem(this.userDataSelector) || '';
  }

  public removeUserData(): void {
    localStorage.removeItem(this.userDataSelector);
  }
}
