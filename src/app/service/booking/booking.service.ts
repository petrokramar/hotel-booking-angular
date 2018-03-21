import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Booking} from '../../model/booking';

@Injectable()
export class BookingService {

  private url = 'http://localhost:8080/booking';

  constructor(private http: HttpClient) { }

  getAllBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url);
  }
}
