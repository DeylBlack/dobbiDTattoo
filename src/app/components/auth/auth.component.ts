import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../shared/models/user.model";
import {Toast, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // @ts-ignore
  public authForm: FormGroup;
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
  ) {
  }

  public auth(): void {
    const user: UserModel = this.authForm.value;
    this.isLoading = true;
    this.authService.authAdmin(user).subscribe((user) => {
      this.isLoading = false;
      this.authService.login(user);
      this.router.navigate(['/admin']);
    }, (error: Error) => {
      this.toaster.error('', 'Auth Error')
      this.isLoading = false;
    })
  }

  private createForm(): void {
    this.authForm = new FormGroup<any>({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

}
