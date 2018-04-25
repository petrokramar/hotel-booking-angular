import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CountriesService } from '../../../service/countries/countries.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {CountriesDataSource} from '../../../service/countries/countries.datasource';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {merge} from 'rxjs/observable/merge';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit, AfterViewInit {

//  dataSource: MatTableDataSource<Country>;
  dataSource: CountriesDataSource;
  displayedColumns = ['name'];
  totalCountries = 30;
  isLoaded = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.isLoaded = false;
  //   this.getAllCountries();
  // }

  ngOnInit() {

    this.isLoaded = false;

    this.dataSource = new CountriesDataSource(this.countriesService);

    this.dataSource.loadCountries('', 'asc', 0, 10);

    this.isLoaded = true;

  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadLessonsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();

  }

  loadLessonsPage() {
    this.dataSource.loadCountries(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }


  // getAllCountries(): void {
  //      this.countriesService.getAllCountries().subscribe(
  //     (data: Country[]) => {
  //       this.dataSource = new MatTableDataSource(data);
  //       this.isLoaded = true;
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     });
  // }

  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim();
    // filterValue = filterValue.toLowerCase();
    // this.dataSource.filter = filterValue;
  }

  gotoCountry(id: string): void {
    this.router.navigate(['/countries', id]);
  }

  addCountry(): void {
    this.router.navigate(['/countries', '0']);
  }
}

