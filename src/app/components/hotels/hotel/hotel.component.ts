import { Component, OnInit } from '@angular/core';
import {City} from '../../../model/city';
import {Country} from '../../../model/country';
import {ActivatedRoute, Router} from '@angular/router';
import {CitiesService} from '../../../service/cities.service';
import {CityRequest} from '../../../model/request/cityRequest';
import {CountriesService} from '../../../service/countries.service';
import {Location} from '@angular/common';
import {Hotel} from '../../../model/hotel';
import {HotelsService} from '../../../service/hotels.service';
import {HotelRequest} from '../../../model/request/hotelRequest';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  dataSource: Hotel;
  cities: City[];
  cityId: number;
  isLoaded = false;

  constructor(
    private hotelsService: HotelsService,
    private citiesService: CitiesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (id === 0) {
      this.dataSource = new Hotel();
      this.dataSource.id = 0;
      this.cityId = id;
      this.getCities();
      this.isLoaded = true;
    } else {
      this.getHotel(id);
    }
  }

  getHotel(id: number): void {
    this.hotelsService.getHotel(id).subscribe(
      (data: Hotel) => {
        this.dataSource = data;
        this.cityId = this.dataSource.city.id;
        this.getCities();
      },
      (error: any) => {
        console.log(error);
      });
  }

  getCities(): void {
    this.citiesService.getAllCities().subscribe(
      (data: City[]) => {
        this.cities = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  onHotelSubmit(): void {
    const hotelRequest = new HotelRequest();
    hotelRequest.id = this.dataSource.id;
    hotelRequest.name = this.dataSource.name;
    hotelRequest.cityId = this.cityId;
    this.hotelsService.saveHotel(hotelRequest).subscribe(
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
