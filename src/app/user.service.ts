import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: User[] = 
    [
      {
        userID: 1,
        username: "cstoyle0",
        email: "zsergison0@cbc.ca",
        creationDate: "2018-10-12T14:31:57Z",
        isActive: true
      },
      {
        userID: 2,
        username: "gdufty1",
        email: "kblincko1@biglobe.ne.jp",
        creationDate: "2021-09-30T10:46:00Z",
        isActive: true
      },
      {
        userID: 3,
        username: "cdenacamp2",
        email: "vhebden2@ed.gov",
        creationDate: "2021-08-25T03:47:55Z",
        isActive: true
      },
      {
        userID: 4,
        username: "hremmers3",
        email: "rbennell3@time.com",
        creationDate: "2020-10-20T15:46:20Z",
        isActive: true
      },
      {
        userID: 5,
        username: "bsemkins4",
        email: "fmcdermid4@github.com",
        creationDate: "2016-11-29T10:56:13Z",
        isActive: false
      },
      {
        userID: 6,
        username: "toloinn5",
        email: "cbanfield5@jugem.jp",
        creationDate: "2019-07-02T06:08:52Z",
        isActive: false
      },
      {
        userID: 7,
        username: "lmacalister6",
        email: "stutin6@walmart.com",
        creationDate: "2019-03-21T06:18:17Z",
        isActive: false
      },
      {
        userID: 8,
        username: "cettels7",
        email: "brudd7@mozilla.com",
        creationDate: "2022-04-13T23:51:56Z",
        isActive: false
      },
      {
        userID: 9,
        username: "sharrington8",
        email: "cklesl8@princeton.edu",
        creationDate: "2018-12-02T08:46:34Z",
        isActive: true
      },
      {
        userID: 10,
        username: "jlathee9",
        email: "jbudnik9@narod.ru",
        creationDate: "2019-06-19T09:53:49Z",
        isActive: false
      }
  ]

 
  private usersUrl: string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
     //spring boot connection
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  getUserByID(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  
  }
  
  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put<User>(url, user);
  }
  
  deleteUser(id:number) : Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${id}`);
  }
}
