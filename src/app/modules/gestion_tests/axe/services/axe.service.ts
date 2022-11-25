import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Axe } from '../axe';
import { testAxe } from '../test_axe';

@Injectable({
  providedIn: 'root'
})
export class AxeService {
  private baseURL = 'http://localhost:8000/api/axe';
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<Axe>(this.baseURL);
  }
  gettest() {
    return this.httpClient.get<testAxe>('http://localhost:8000/api/test_axe');
  }
  getDataById(id: any) {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  insertData(data: any): Observable<Axe[]> {
    return this.httpClient.post<Axe[]>(this.baseURL, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
  updateData(data: any) {
    return this.httpClient.put(this.baseURL + "/" + data.id, data);
  }
}
