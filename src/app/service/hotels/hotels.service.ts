import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Hotel} from '../../model/entity/hotel';
import {City} from '../../model/entity/city';
import {CityRequest} from '../../model/request/cityRequest';
import {catchError} from 'rxjs/operators';
import {HotelRequest} from '../../model/request/hotelRequest';
import {CountryListDTO} from '../../model/dto/countryListDTO';
import {HotelListDTO} from '../../model/dto/hotelListDTO';

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

  findHotels(filter: string, sortOrder: string, pageIndex: number, pageSize: number): Observable<HotelListDTO> {
    return this.http.get<HotelListDTO>(this.url, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('page', pageIndex.toString())
        .set('size', pageSize.toString())
    })
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
    return this.http.post<HotelRequest>(this.url, hotel, this.httpOptions)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }
}
