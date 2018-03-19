import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Hotel} from '../../../model/hotel';
import {HotelsService} from '../../../service/hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  dataSource: MatTableDataSource<Hotel>;
  displayedColumns = ['hotel', 'city', 'country'];
  isLoaded = false;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllHotels();
  }

  getAllHotels(): void {
    this.hotelsService.getAllHotels().subscribe(
      (data: Hotel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
