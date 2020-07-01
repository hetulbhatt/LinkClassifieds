import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/Posts.models';
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
export class PostService {


  constructor(private http: HttpClient) {
  }

  uploadPost(post1: Post): Observable<any> {
   // alert(post1);
    return this.http.post<HttpResponse<any>>('http://localhost:8000/post', post1 , httpOptions);

  }

  getPosts(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getPosts', httpOptions);
  }

  getBooks(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getBooks', httpOptions);
  }
  getCars(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getCars', httpOptions);
  }
  getElecs(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getElecs', httpOptions);
  }
  getFurn(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getFurn', httpOptions);
  }
  getReal(): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getReal', httpOptions);
  }
  getUserPosts(email): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/getUserPosts', {eml: email} , httpOptions);
  }

  deleteUserPost(post1: Post): Observable<any> {
    return this.http.post<HttpResponse<any>>('http://localhost:8000/deleteUserPost', post1 , httpOptions);
  }
}
