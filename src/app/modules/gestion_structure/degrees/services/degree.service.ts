import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Degree } from '../degree';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  url: string = 'http://localhost:8000';
  degrees: any;
  constructor(private http: HttpClient) { }
  httpoptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  listDegree() {
    return this.http.get(this.url + '/api/degree/');
  }
  addDegree(degree: Degree): Observable<any> {
    return (this.http.post<Degree>(this.url + '/api/degree/', degree, this.httpoptions));
  }
  find(id: number): Observable<any> { return this.http.get<any>(this.url + '/api/degree/' + id); }

  update(id: any, deg: Degree): Observable<any> {
    return (this.http.put(this.url + '/api/degree/' + id, deg, this.httpoptions));
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/api/degree/' + id, this.httpoptions);
  }
}
