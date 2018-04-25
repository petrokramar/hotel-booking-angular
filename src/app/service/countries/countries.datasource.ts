import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Country} from '../../model/country';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CountriesService} from './countries.service';
import {Observable} from 'rxjs/Observable';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

export class CountriesDataSource implements DataSource<Country> {

  private countriesSubject = new BehaviorSubject<Country[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private countriesService: CountriesService) {

  }

  loadCountries(filter: string,
              sortDirection: string,
              pageIndex: number,
              pageSize: number) {

    this.loadingSubject.next(true);

    this.countriesService.findCountries(filter, sortDirection,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lessons => this.countriesSubject.next(lessons));

  }

  connect(collectionViewer: CollectionViewer): Observable<Country[]> {
    console.log('Connecting data source');
    return this.countriesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.countriesSubject.complete();
    this.loadingSubject.complete();
  }

}
