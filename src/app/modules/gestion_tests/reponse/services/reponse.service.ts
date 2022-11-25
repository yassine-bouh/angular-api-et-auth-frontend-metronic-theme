import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  private baseURL = 'http://localhost:8000/api/weight';
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<Response>(this.baseURL);
  } getque() {
    return this.httpClient.get<any>('http://localhost:8000/api/question');
  } getwei() {
    return this.httpClient.get<any>('http://localhost:8000/api/weight');
  }
  getDataById(id: any) {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  insertData(data: any): Observable<any[]> {
    return this.httpClient.post<any[]>(this.baseURL, data);
  }
  insertDataR(data: any): Observable<any[]> {
    return this.httpClient.post<any[]>('http://localhost:8000/api/answer', data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  updateData(data: any) {
    return this.httpClient.put(this.baseURL + "/" + data.id, data);
  }
}
