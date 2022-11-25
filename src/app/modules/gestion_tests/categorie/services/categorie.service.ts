import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseURL = 'http://localhost:8000/api/category';
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<Category>(this.baseURL);
  }getlang() {
    return this.httpClient.get<any>('http://localhost:8000/api/language');
  }
  getDataById(id: any) {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  insertData(data: any): Observable<Category[]> {
    return this.httpClient.post<Category[]>(this.baseURL, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  updateData(data: any) {
    return this.httpClient.put(this.baseURL + "/" + data.id, data);
  }
}
