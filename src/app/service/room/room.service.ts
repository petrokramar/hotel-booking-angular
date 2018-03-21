import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Room} from '../../model/room';
import {City} from '../../model/city';
import {catchError} from 'rxjs/operators';
import {CityRequest} from '../../model/request/cityRequest';
import {RoomRequest} from '../../model/request/roomRequest';

@Injectable()
export class RoomService {

  private url = 'http://localhost:8080/rooms';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.url + '/' + id)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

  saveRoom(room: RoomRequest): Observable<Room> {
    return this.http.post<RoomRequest>(this.url, room, this.httpOptions)
      .pipe(
        catchError((error: any) => {return Observable.throw(error); })
      );
  }

}
