import { Router } from "@angular/router";
import { ChangeDetectorRef, Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "app/auth/services/login.service";
import { Store } from "@ngrx/store";
import { AppState } from "app/reducers";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { loginAction } from "app/auth/auth.actions";
import { User } from '../../models/user.model';
import { userRolesDashboardPaths } from '../../user-roles';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;
  user!: gapi.auth2.GoogleUser;

  loginForm = new FormGroup({
    email: new FormControl("alexis@alexis.com", [Validators.required]),
    password: new FormControl("123456", [Validators.required]),
    rememberMe: new FormControl(true),
  });

  get lf() {
    return this.loginForm.controls;
  }

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private ref: ChangeDetectorRef,
    private store: Store<AppState>,
    private toastr: ToastrService
  ) {}

  // On submit button click
  onSubmit() {
    this.loginService.observable().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
    });

    this.loginFormSubmitted = true;

    if (this.loginForm.invalid) { return; }

    this.loginService.login(this.loginForm.value)
      .pipe(
        tap(res => {
          // Convertir la respuesta del servidor en un objeto del tipo User
          const user: User = {
            data: res['usuario'],
            token: res['token']
          };
          
          // Guardar la información del usuario en el Store
          this.store.dispatch( loginAction( { user } ) );

          // Navegar hacia el dashboard
          this.router.navigateByUrl(userRolesDashboardPaths[user.data.rol]);
        })
      )
      .subscribe(noop, (err) => {
        this.toastr.error(`${err}`, '¡Error!');
      });

    // this.spinner.show(undefined, {
    //   type: "ball-triangle-path",
    //   size: "medium",
    //   bdColor: "rgba(0, 0, 0, 0.8)",
    //   color: "#fff",
    //   fullScreen: true,
    // });

    // this.spinner.hide();
  }

  signIn() {
    this.loginService.signIn();
  }

  signOut() {
    this.loginService.signOut();
  }
}
