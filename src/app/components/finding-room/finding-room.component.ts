import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city';
import {CitiesService} from '../../service/cities/cities.service';

@Component({
  selector: 'app-finding-room-list',
  templateUrl: './finding-room.component.html',
  styleUrls: ['./finding-room.component.css']
})
export class FindingRoomComponent implements OnInit {

  cities: City[];
  isLoaded = false;

  constructor(
    private citiesService: CitiesService,
  ) { }

  ngOnInit() {
    this.getCities();
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
}
