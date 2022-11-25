import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseURL = 'http://localhost:8000/api/test';
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<Test>(this.baseURL);
  }getstudents() {
    return this.httpClient.get<any>('http://localhost:8000/api/student');
  }
  getDataById(id: any) {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  insertData(data: any): Observable<Test[]> {
    return this.httpClient.post<Test[]>(this.baseURL, data);
  }
  insertDataTA(data: any): Observable<any[]> {
    return this.httpClient.post<any[]>('http://localhost:8000/api/test_axe', data);
  }
  insertDataTQ(datat: any): Observable<any[]> {
    return this.httpClient.post<any[]>('http://localhost:8000/api/question_test', datat);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  updateData(data: any) {
    return this.httpClient.put(this.baseURL + "/" + data.id, data);
  }
}
