import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Country} from '../../model/country';
import { CountriesService} from '../../service/countries.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  dataSource: Country;
  isLoaded = false;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '0') {
      this.dataSource = new Country();
      this.dataSource.id = id;
      this.isLoaded = true;
    } else {
        this.getCountry(id);
    }
  }

  getCountry(id: string): void {
    this.countriesService.getCountry(id).subscribe(
      (data: Country) => {
        this.dataSource = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  onCountrySubmit(): void {
    this.countriesService.saveCountry(this.dataSource)
      .subscribe(
        () => this.goBack()
      );
  }

  goBack(): void {
    this.location.back();
  }
}
