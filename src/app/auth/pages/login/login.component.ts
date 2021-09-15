import { Router } from "@angular/router";
import { ChangeDetectorRef, Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "app/auth/services/login.service";

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
    email: new FormControl("guest@apex.com", [Validators.required]),
    password: new FormControl("Password", [Validators.required]),
    rememberMe: new FormControl(true),
  });

  get lf() {
    return this.loginForm.controls;
  }

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private loginServi: LoginService,
    private ref: ChangeDetectorRef
  ) {}

  // On submit button click
  onSubmit() {
    this.loginServi.obsercavle().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
    });
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
      bdColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      fullScreen: true,
    });

    this.spinner.hide();

    this.loginServi.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem("token", res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(["/page"]);
  }

  signIn() {
    this.loginServi.signIn();
  }

  signOut() {
    this.loginServi.signOut();
  }
}
