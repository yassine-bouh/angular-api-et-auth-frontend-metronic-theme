import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url: string = 'http://localhost:8000';
  users: any;
  constructor(private http: HttpClient) { }
  httpoptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  listuser() {
    return this.http.get(this.url + '/api/user/');
  }
  adduser(user: any): Observable<any> {
    return (this.http.post(this.url + '/api/user/', user, this.httpoptions));
  }
  find(id: number): Observable<any> { return this.http.get<any>(this.url + '/api/degree/' + id); }

  update(id: any, deg: any): Observable<any> {
    return (this.http.put(this.url + '/api/user/' + id, deg, this.httpoptions));
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/api/user/' + id, this.httpoptions);
  }
}
