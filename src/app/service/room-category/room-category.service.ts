import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {RoomCategory} from '../../model/roomCategory';

@Injectable()
export class RoomCategoryService {

  private url = 'http://localhost:8080/roomCategories';

  constructor(private http: HttpClient) { }

  getAllRoomCategories(): Observable<RoomCategory[]> {
    return this.http.get<RoomCategory[]>(this.url);
  }
}
