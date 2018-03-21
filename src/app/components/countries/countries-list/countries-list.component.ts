import { Component, OnInit } from '@angular/core';
import { Country } from '../../../model/country';
import { CountriesService } from '../../../service/countries/countries.service';
import { MatTableDataSource } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  dataSource: MatTableDataSource<Country>;
  displayedColumns = ['name'];
  isLoaded = false;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countriesService.getAllCountries().subscribe(
      (data: Country[]) => {
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

  gotoCountry(id: string): void {
    this.router.navigate(['/country', id]);
  }

  addCountry(): void {
    this.router.navigate(['/countries', '0']);
  }
}
