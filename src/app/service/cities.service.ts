import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/city';

@Injectable()
export class CitiesService {

  private url = 'http://localhost:8080/cities';

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
}
