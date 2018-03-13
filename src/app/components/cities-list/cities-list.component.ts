import { Component, OnInit } from '@angular/core';
import {Country} from '../../model/country';
import {City} from '../../model/city';
import {CountriesService} from '../../service/countries.service';
import {CitiesService} from '../../service/cities.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities: City[] = [];
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
        this.cities = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }
}
