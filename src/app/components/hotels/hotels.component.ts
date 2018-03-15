import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {CitiesService} from '../../service/cities.service';
import {City} from '../../model/city';
import {Hotel} from '../../model/hotel';
import {HotelsService} from '../../service/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  dataSource: MatTableDataSource<Hotel>;
  displayedColumns = ['id', 'name', 'cityId', 'cityName', 'countryId', 'countryName'];
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
