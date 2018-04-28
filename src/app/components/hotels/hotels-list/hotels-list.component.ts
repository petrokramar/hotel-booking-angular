import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Hotel} from '../../../model/entity/hotel';
import {HotelsService} from '../../../service/hotels/hotels.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  dataSource: MatTableDataSource<Hotel>;
  displayedColumns = ['hotel', 'city', 'country'];
  isLoaded = false;

  constructor(
    private hotelsService: HotelsService,
    private router: Router) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllHotels();
  }

  getAllHotels(): void {
    this.hotelsService.getAllHotels().subscribe(
      (data: Hotel[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }

  gotoHotel(id: number): void {
    this.router.navigate(['/hotels', id]);
  }

  addHotel(): void {
    this.router.navigate(['/hotels', '0']);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
