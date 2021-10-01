import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { endpoint } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlDesarrollo: string = endpoint;

  constructor(private http: HttpClient) { }

  getStudentForms(studentId: string, token: string) {
    let  headers = new HttpHeaders();
    headers = headers.set('x-token', `${token}`)

    return this.http.get(
      `${this.urlDesarrollo}/formulario/formularios/${studentId}`,
      { headers }
    );
  }
}
