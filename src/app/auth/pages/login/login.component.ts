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
    private ref: ChangeDetectorRef
  ) {}

  // On submit button click
  onSubmit() {
    this.loginService.observable().subscribe((user) => {
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

    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        // localStorage.setItem("token", JSON.parse(res));
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(["/page"]);
  }

  signIn() {
    this.loginService.signIn();
  }

  signOut() {
    this.loginService.signOut();
  }
}
