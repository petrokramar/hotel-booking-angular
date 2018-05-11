import { Component, OnInit } from '@angular/core';
import {City} from '../../model/entity/city';
import {CitiesService} from '../../service/cities/cities.service';
import {FormControl} from '@angular/forms';
import {CityListDTO} from '../../model/dto/cityListDTO';

@Component({
  selector: 'app-finding-room-list',
  templateUrl: './finding-room.component.html',
  styleUrls: ['./finding-room.component.css']
})
export class FindingRoomComponent implements OnInit {

  PAGE_INDEX = 0;
  PAGE_SIZE = 5;
  SORT_ORDER = 'asc';

  filteredCities: City[] = [];
  cityCtrl: FormControl;
  isLoaded = false;

  constructor(
    private citiesService: CitiesService
  ) {
    this.cityCtrl = new FormControl();
    this.cityCtrl.valueChanges
      .subscribe(data => {
        this.findCities(data);
      })
  }

  ngOnInit() {
   }

  displayCity(city): string {
    return city ? city.name : city;
  }

  findCities(name: string): void {
    this.citiesService.findCities(name, this.SORT_ORDER, this.PAGE_INDEX, this.PAGE_SIZE).subscribe(
      (data: CityListDTO) => {
        this.filteredCities = data.cities;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  findHotels(): void {
    console.log(this.cityCtrl.value.id);
  }
}
