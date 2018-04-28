import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { City } from '../../model/entity/city';
import {catchError} from 'rxjs/operators';
import {CityRequest} from '../../model/request/cityRequest';

@Injectable()
export class CitiesService {

  private url = 'http://localhost:8080/cities';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }

  getCity(id: number): Observable<City> {
    return this.http.get<City>(this.url + '/' + id)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

  saveCity(city: CityRequest): Observable<City> {
    return this.http.post<CityRequest>(this.url, city, this.httpOptions)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }
}
