import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url: string = 'http://localhost:8000';
  degrees: any;
  constructor(private http: HttpClient) { }
  httpoptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  listrole() {
    return this.http.get<Role>(this.url + '/api/role/');
  }
  addrole(role: Role): Observable<any> {
    return (this.http.post<Role>(this.url + '/api/role/', role, this.httpoptions));
  }
  find(id: number): Observable<any> { return this.http.get<any>(this.url + '/api/role/' + id); }

  update(id: any, role: Role[]): Observable<any> {
    return (this.http.put(this.url + '/api/role/' + id, role, this.httpoptions));
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/api/role/' + id, this.httpoptions);
  }
}
