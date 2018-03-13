import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Country} from '../model/country';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CountriesService {

  private url = 'http://localhost:8080/countries';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }}
