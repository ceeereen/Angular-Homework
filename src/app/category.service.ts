import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from './categories';

//http://localhost:8080/categorydetails/:categoryID

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = 'http://localhost:8080/categories';
     //spring boot connection
  }


  public findAll(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.categoryUrl);
  
  }

  public save(category: Categories) {
    return this.http.post<Categories>(this.categoryUrl, category);
  }


  getCategoryByID(id: number): Observable<Categories> {
    return this.http.get<Categories>(`${this.categoryUrl}/${id}`);
  
  }
  
  updateCategory(id: number, category: Categories): Observable<Categories> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.put<Categories>(url, category);
  }
  
  deleteCategory(id:number) : Observable<Object>{
    return this.http.delete(`${this.categoryUrl}/${id}`);
  }

}
