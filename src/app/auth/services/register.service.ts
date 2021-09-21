import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";
import { endpoint } from '../../../environments/environment'

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private urlDesarrollo: string = endpoint;

  constructor(private http: HttpClient) {}

  Register(usuario: FormGroup): Observable<any> {
    console.log(usuario);

    return this.http.post<FormGroup>(`${this.urlDesarrollo}/nuevo`, usuario);
  }
}
