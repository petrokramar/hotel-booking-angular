import { Component, OnInit } from '@angular/core';
import { City } from '../../../model/city';
import { CitiesService } from '../../../service/cities.service';
import { MatTableDataSource } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  dataSource: MatTableDataSource<City>;
  displayedColumns = ['city', 'country'];
  isLoaded = false;

  constructor(
    private citiesService: CitiesService,
    private router: Router
  ) { }

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

  gotoCity(id: number): void {
    this.router.navigate(['/cities', id]);
  }

  addCity(): void {
    this.router.navigate(['/cities', '0']);
  }
}
