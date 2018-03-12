import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // login(credentials): Observable<Response> {
  //   return this.http.post(`${API_URL}/users/authenticate`, credentials);
  // }
  //
  // signup(credentials): Observable<Response> {
  //   return this.http.post(`${API_URL}/users`, credentials);
  // }
  //
  // finishAuthentication(token): void {
  //   localStorage.setItem('token', token)
  //   this.router.navigate(['profile']);
  // }
  //
  // logout(): void {
  //   localStorage.removeItem('token');
  // }
  //
  // isAuthenticated(): boolean {
  //   return tokenNotExpired('token');
  // }
  //
  // isAdmin(): boolean {
  //   return jwtDecode(this.getToken()).scope === 'admin';
  // }
  //
  // getToken(): string {
  //   return localStorage.getItem('token');
  // }
  //
  // getUseRole(): string {
  //   return jwtDecode(this.getToken()).scope;
  // }

}
