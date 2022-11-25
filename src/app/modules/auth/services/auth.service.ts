import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { AuthModel } from '../models/auth.model';
//import { AuthHTTPService } from './auth-http/auth-http.service.ts';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthHTTPService } from './auth-http/auth-http.service';

export type UserType = UserModel | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  // public fields
        currentUser$: Observable<UserType>;
        isLoading$: Observable<boolean>;
        currentUserSubject: BehaviorSubject<UserType>;
        isLoadingSubject: BehaviorSubject<boolean>;
        test: any;
        id: number;
    role: AuthModel | undefined;


  get currentUserValue(): any {
    return this.getAuthFromLocalStorage();
  }

  set currentUserValue(user: UserType) {
        this.currentUserSubject.next(user);
  }

  constructor(
        private authHttpService: AuthHTTPService,
        private router: Router,
        private http: HttpClient
  ) {
        this.isLoadingSubject = new BehaviorSubject<boolean>(false);
        this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
  }

  
  login(username: string, password: string): Observable<any>  {
    this.isLoadingSubject.next(true);
    return this.http.post<any>(`http://localhost:8000/api/login`, {
      username,
      password,
    })
      .pipe(map(auth => {
        if (auth && auth.authToken) {
          this.setAuthFromLocalStorage(auth);
          this.currentUserSubject.next(auth);
          this.test = auth;
          return auth;
        }
      }),
         
        catchError((err) => {
          console.error('err', err);
          return of(undefined);
        }),
        finalize(() => this.isLoadingSubject.next(false))
      );
  }

  logout() {
    localStorage.removeItem(this.authLocalStorageToken);

          this.router.navigate(['/auth/login'], {
            queryParams: {},
    });
  }
  
  getUserByToken(): Observable<any> {
         const auth = this.getAuthFromLocalStorage();
          if (!auth || !auth.authToken) {
            return of(undefined);
    }
      this.test = auth;
    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken(auth).pipe(
      map((user: UserType) => {
            if (user) {
              this.currentUserSubject.next(user);
            } else {
              this.logout();
            }
            return user;
          }),
          finalize(() => this.isLoadingSubject.next(false))
    );
  }


  // need create new user then login
  registration(user: any): Observable<any> {
    this.isLoadingSubject.next(true);
    return (this.http.post<any>('http://localhost:8000/api/user/',user)).pipe(
      map((test:any) => {
            this.isLoadingSubject.next(false);
          }),
          switchMap(() => this.login(user.username, user.password)),
          catchError((err) => {
            console.error('err', err);
            return of(undefined);
          }),
          finalize(() => this.isLoadingSubject.next(false))
        );
  }

  /*forgotPassword(username: string): Observable<boolean> {
          this.isLoadingSubject.next(true);
          return this.authHttpService
            .forgotPassword(username)
            .pipe(finalize(() => this.isLoadingSubject.next(false)));
  }
  /**/
  // private methods
  private setAuthFromLocalStorage(auth: AuthModel): boolean {
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.authToken) {
       localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): AuthModel | undefined {
          try {
            const lsValue = localStorage.getItem(this.authLocalStorageToken);

            if (!lsValue) {
              return undefined;
            }

            const authData = JSON.parse(lsValue);
            return authData;
          } catch (error) {
            console.error(error);
            return undefined;
          }
  }
  public getRole() {
    this.role = this.getAuthFromLocalStorage();
    return this.role;
  }

  ngOnDestroy() {
          this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
