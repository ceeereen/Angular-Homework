import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, map, of } from 'rxjs';
import { from } from 'rxjs';
import { Posts } from './posts';
import { Comments } from './comments';


@Injectable({
  providedIn: 'root'
})
export class commentService {

  private commentUrl: string;


  constructor(private http: HttpClient) {
    this.commentUrl = 'http://localhost:8080/comments';
     //spring boot connection
  }


  public findAll(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.commentUrl);
  
  }

  public save(comment: Comments) {
    return this.http.post<Comments>(this.commentUrl, comment);
  }

  getCommentByID(id: number): Observable<Comments> {
    return this.http.get<Comments>(`${this.commentUrl}/${id}`);
  
  }

  //matches post table with comments used in Post-List
  getCommentsByPostID(postID: number): Observable<Comments[]> {
    const url = `${this.commentUrl}?postID=${postID}`; 
    return this.http.get<Comments[]>(url).pipe(
    map(comments => comments.filter(comment => comment.postID === postID))
    );
  }

  //matches user table with comments used in Post-List
  getCommentsByUserID(userID: number): Observable<Comments[]> {
    const url = `${this.commentUrl}?userID=${userID}`; // 
    return this.http.get<Comments[]>(url).pipe(
    map(comments => comments.filter(comment => comment.userID === userID))
    );
  }
  
  updateComment(id: number, comment: Comments): Observable<Comments> {
    const url = `${this.commentUrl}/${id}`;
    return this.http.put<Comments>(url, comment);
  }
  
  deletePost(id:number) : Observable<Object>{
    return this.http.delete(`${this.commentUrl}/${id}`);
  }

  checkUserHasComments(userID: number): Observable<boolean> {
    // checks number of post, request HTTP
    return this.http.get<Comments[]>(`${this.commentUrl}/${userID}`).pipe(
      map(posts => posts.length > 0) // if number of post is 0,  return false
    );
  }
}
