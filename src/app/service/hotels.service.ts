import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hotel} from '../model/hotel';
import {City} from '../model/city';
import {CityRequest} from '../model/request/cityRequest';
import {catchError} from 'rxjs/operators';
import {HotelRequest} from '../model/request/hotelRequest';

@Injectable()
export class HotelsService {

  private url = 'http://localhost:8080/hotels';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url)
      .pipe(
      catchError((error: any) => {return Observable.throw(error); })
    );
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(this.url + '/' + id)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

  saveHotel(hotel: HotelRequest): Observable<Hotel> {
    console.log(hotel);
    return this.http.post<HotelRequest>(this.url, hotel, this.httpOptions)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }
}
