import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Country } from '../../model/country';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class CountriesService {

  private url = 'http://localhost:8080/countries';
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })};

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

  getCountry(id: number): Observable<Country> {
    return this.http.get<Country>(this.url + '/' + id)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
    );
  }

  saveCountry(country: Country): Observable<Country> {

    return this.http.post<Country>(this.url, country, this.httpOptions)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }
}
