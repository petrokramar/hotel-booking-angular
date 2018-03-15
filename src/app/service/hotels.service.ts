import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../model/hotel';

@Injectable()
export class HotelsService {

  private url = 'http://localhost:8080/hotels';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url);
  }
}
