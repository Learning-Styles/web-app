import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private auth2!: gapi.auth2.GoogleAuth;

  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);
  constructor(private http: HttpClient) {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "65224485945-p4j4p9fov31nq054pvvitrrstuj8t1so.apps.googleusercontent.com",
      });
    });
  }

  private urlDesarrollo: string = "http://localhost:8080/api";

  login(usuario: FormGroup): Observable<any> {
    return this.http.post<FormGroup>(
      `${this.urlDesarrollo}/auth/login`,
      usuario
    );
  }

  signIn() {
    this.auth2
      .signIn({})
      .then((user) => {
        let id_token = user.getAuthResponse().id_token;
        this.GoogleSignIn(id_token).subscribe(
          (res) => {
            localStorage.setItem("token", res);
          },
          (err) => {
            console.log(err);
          }
        );

        this.subject.next(user);
      })
      .catch(() => {
        this.subject.next(null!);
      });
  }

  signOut() {
    this.auth2.signOut().then(() => {
      this.subject.next(null!);
    });
  }
  obsercavle(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }

  GoogleSignIn(id_token: string): Observable<any> {
    return this.http.post(`${this.urlDesarrollo}/auth/google`, {
      id_token,
    });
  }
}
