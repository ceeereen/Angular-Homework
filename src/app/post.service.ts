import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, map, of } from 'rxjs';
import { from } from 'rxjs';
import { Posts } from './posts';
import { Categories } from './categories';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string;


  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/posts';
     //spring boot connection
  }


  public findAll(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postUrl);
  
  }

  public save(post: Posts) {
    return this.http.post<Posts>(this.postUrl, post);
  }

  getPostByID(id: number): Observable<Posts> {
    return this.http.get<Posts>(`${this.postUrl}/${id}`);
  
  }

  //Will be used for to show user number on Category Details
  getPostsByUserID(userID: number): Observable<Posts[]> {
    const url = `${this.postUrl}?userID=${userID}`; // create API connection via using ID
    return this.http.get<Posts[]>(url).pipe(
    map(posts => posts.filter(post => post.userID === userID))
    );
  }
  //Will be used for to show post number on Category Details
  getPostsByCategoryID(categoryID: number): Observable<Categories[]> {
    const url = `${this.postUrl}?categoryID=${categoryID}`;
    return this.http.get<Categories[]>(url).pipe(
    map(posts => posts.filter(post => post.categoryID === categoryID))
    );
  }
  
  updatePost(id: number, post: Posts): Observable<Posts> {
    const url = `${this.postUrl}/${id}`;
    return this.http.put<Posts>(url, post);
  }
  
  deletePost(id:number) : Observable<Object>{
    return this.http.delete(`${this.postUrl}/${id}`);
  }

  checkUserHasPosts(userID: number): Observable<boolean> {
    // Kullanıcının gönderi sayısını kontrol etmek için ilgili HTTP isteğini yap
    return this.http.get<Posts[]>(`${this.postUrl}/${userID}`).pipe(
      map(posts => posts.length > 0) // Gönderi sayısı 0'dan büyükse true, değilse false döndür
    );
  }

 
}
