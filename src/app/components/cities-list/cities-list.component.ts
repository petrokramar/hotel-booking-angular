import { Component, OnInit } from '@angular/core';
import { City } from '../../model/city';
import { CitiesService } from '../../service/cities.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  dataSource: MatTableDataSource<City>;
  displayedColumns = ['id', 'name', 'countryId', 'countryName'];
  isLoaded = false;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllCities();
  }

  getAllCities(): void {
    this.citiesService.getAllCities().subscribe(
      (data: City[]) => {
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
