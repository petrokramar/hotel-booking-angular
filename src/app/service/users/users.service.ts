import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/user';

@Injectable()
export class UsersService {

  private url = 'http://localhost:8080/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

}
