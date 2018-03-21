import { Component, OnInit } from '@angular/core';
import {Room} from '../../../model/room';
import {RoomService} from '../../../service/room/room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  dataSource: Room[];
  displayedColumns = ['hotel', 'city', 'country', 'number', 'roomCategory'];
  isLoaded = false;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllRooms();
  }

  getAllRooms(): void {
    this.roomService.getAllRooms().subscribe(
      (data: Room[]) => {
        this.dataSource = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  gotoRoom(id: number): void {
    this.router.navigate(['/rooms', id]);
  }

  addRoom(): void {
    this.router.navigate(['/rooms', '0']);
  }

}