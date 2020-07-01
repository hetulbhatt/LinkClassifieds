import { Injectable } from '@angular/core';
import { User } from 'src/app/models/Users.models';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';


export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }
  registerUsers(user1: User): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/register', user1 , httpOptions);

  }
}
