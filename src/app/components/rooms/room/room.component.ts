import { Component, OnInit } from '@angular/core';
import {City} from '../../../model/city';
import {Country} from '../../../model/country';
import {Location} from '@angular/common';
import {CitiesService} from '../../../service/cities/cities.service';
import {CountriesService} from '../../../service/countries/countries.service';
import {CityRequest} from '../../../model/request/cityRequest';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../../../model/room';
import {RoomCategory} from '../../../model/roomCategory';
import {RoomService} from '../../../service/room/room.service';
import {RoomCategoryService} from '../../../service/room-category/room-category.service';
import {Hotel} from '../../../model/hotel';
import {HotelsService} from '../../../service/hotels/hotels.service';
import {RoomRequest} from '../../../model/request/roomRequest';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  dataSource: Room;
  hotels: Hotel[];
  hotelId: number;
  roomCategories: RoomCategory[];
  roomCategoryId: number;
  isLoaded = false;

  constructor(
    private roomService: RoomService,
    private hotelService: HotelsService,
    private roomCategoryService: RoomCategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.isLoaded = false;
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (id === 0) {
      this.dataSource = new Room();
      this.dataSource.id = 0;
      this.hotelId = id;
      this.roomCategoryId = id;
      this.getHotels();
    } else {
      this.getRoom(id);
    }
  }

  getRoom(id: number): void {
    this.roomService.getRoom(id).subscribe(
      (data: Room) => {
        this.dataSource = data;
        this.hotelId = this.dataSource.hotel.id;
        this.roomCategoryId = this.dataSource.roomCategory.id;
        this.getHotels();
      },
      (error: any) => {
        console.log(error);
      });
  }

  getHotels(): void {
    this.hotelService.getAllHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data;
        this.getRoomCategories();
      },
      (error: any) => {
        console.log(error);
      });
  }

  getRoomCategories(): void {
    this.roomCategoryService.getAllRoomCategories().subscribe(
      (data: RoomCategory[]) => {
        this.roomCategories = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  onRoomSubmit(): void {
    const roomRequest = new RoomRequest();
    roomRequest.id = this.dataSource.id;
    roomRequest.number = this.dataSource.number;
    roomRequest.hotelId = this.hotelId;
    roomRequest.roomCategoryId = this.roomCategoryId;
    this.roomService.saveRoom(roomRequest).subscribe(
      () => {
        this.goBack()
      },
      (error: any) => {
        console.log(error);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
