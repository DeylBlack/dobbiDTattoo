import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {UserModel} from "../models/user.model";
import {appSettings} from "../../core/CONSTANTS";
import {SessionInfoService} from "./session-info.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  public constructor(
    private http: HttpClient,
    private sessionInfo: SessionInfoService,
    private router: Router,
  ) {
  }

  public isLogin(): Observable<boolean> {
    let user;

    if (this.sessionInfo.getUserData()) {
      user = JSON.parse(this.sessionInfo.getUserData())
    }

    return this.isCanActivate(user);
  }

  public login(user: UserModel): void {
    this.sessionInfo.setUserData(user);
    this.router.navigate(['admin']);
  }

  public logout(): void {
    this.sessionInfo.removeUserData();
    this.router.navigate(['/']);
  }

  public authAdmin(user: UserModel): Observable<UserModel> {
    console.log(appSettings.apiUrl)
    return this.http.post<UserModel>(`${appSettings.apiUrl}/login`, user);
  }

  private isCanActivate(user: UserModel): Observable<boolean> {
    return this.http.post<boolean>(`${appSettings.apiUrl}/isCanActivate`, user);
  }
}
