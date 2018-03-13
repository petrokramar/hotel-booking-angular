import { Component, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: Country[] = [];
  displayedColumns = ['id', 'name'];
  isLoaded = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countriesService.getAllCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }
}
