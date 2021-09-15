import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private urlDesarrollo: string = "http://localhost:8080/api/usuario";

  constructor(private http: HttpClient) {}

  Register(usuario: FormGroup): Observable<any> {
    console.log(usuario);

    return this.http.post<FormGroup>(`${this.urlDesarrollo}/nuevo`, usuario);
  }
}
