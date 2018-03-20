import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {City} from '../../../model/city';
import {CitiesService} from '../../../service/cities.service';
import {CountriesService} from '../../../service/countries.service';
import {Country} from '../../../model/country';
import {CityRequest} from '../../../model/request/cityRequest';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  dataSource: City;
  countries: Country[];
  countryId: number;
  isLoaded = false;

  constructor(
    private citiesService: CitiesService,
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '0') {
      this.dataSource = new City();
      this.isLoaded = true;
    } else {
      this.getCity(id);
    }
  }

  getCity(id: string): void {
    this.citiesService.getCity(id).subscribe(
      (data: City) => {
        this.dataSource = data;
        this.countryId = this.dataSource.country.id;
        this.getCountries();
       },
      (error: any) => {
        console.log(error);
      });
  }

  getCountries(): void {
    this.countriesService.getAllCountries().subscribe(
     (data: Country[]) => {
      this.countries = data;
      this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  onCitySubmit(): void {
    const cityRequest = new CityRequest();
    cityRequest.id = this.dataSource.id;
    cityRequest.name = this.dataSource.name;
    cityRequest.countryId = this.countryId;
    this.citiesService.saveCity(cityRequest).subscribe(
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
