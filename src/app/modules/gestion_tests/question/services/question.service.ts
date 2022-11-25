import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseURL = 'http://localhost:8000/api/question';
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<Question>(this.baseURL);
  } getlang() {
    return this.httpClient.get<any>('http://localhost:8000/api/language');
  }getcat() {
    return this.httpClient.get<any>('http://localhost:8000/api/category');
  }
  getDataById(id: any) {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  insertData(data: any): Observable<Question[]> {
    return this.httpClient.post<Question[]>(this.baseURL, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  updateData(data: any) {
    return this.httpClient.put(this.baseURL + "/" + data.id, data);
  }
}
