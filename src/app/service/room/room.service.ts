import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Room} from '../../model/room';

@Injectable()
export class RoomService {

  private url = 'http://localhost:8080/rooms';

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url);
  }
}
