import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http:HttpClient) { }

  getObjects():Observable<any> {
    const x =  this.http.get('localhost:8080');
    console.log(x);
    return x;
  }
}
