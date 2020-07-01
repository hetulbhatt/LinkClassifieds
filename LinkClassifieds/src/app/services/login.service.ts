import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validate(email: string, password: string): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/login', {
      observe: 'response',
      eml: email,
      pwd: password
    });
  }
}
