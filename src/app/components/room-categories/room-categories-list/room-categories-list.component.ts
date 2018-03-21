import { Component, OnInit } from '@angular/core';
import {RoomCategory} from '../../../model/roomCategory';
import {RoomCategoryService} from '../../../service/room-category/room-category.service';

@Component({
  selector: 'app-room-categories-list',
  templateUrl: './room-categories-list.component.html',
  styleUrls: ['./room-categories-list.component.css']
})
export class RoomCategoriesListComponent implements OnInit {

  dataSource: RoomCategory[];
  displayedColumns = ['id', 'name', 'description'];
  isLoaded = false;

  constructor(private roomCategoryService: RoomCategoryService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllRoomCategories();
  }

  getAllRoomCategories(): void {
    this.roomCategoryService.getAllRoomCategories().subscribe(
      (data: RoomCategory[]) => {
        this.dataSource = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }
}
