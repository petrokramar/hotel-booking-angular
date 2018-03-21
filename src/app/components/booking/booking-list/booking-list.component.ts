import { Component, OnInit } from '@angular/core';
import {Booking} from '../../../model/booking';
import {BookingService} from '../../../service/booking/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  dataSource: Booking[];
  displayedColumns = ['hotel', 'city', 'country', 'room', 'dateBegin', 'dateEnd', 'user'];
  isLoaded = false;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.isLoaded = false;
    this.getAllBooking();
  }

  getAllBooking(): void {
    this.bookingService.getAllBooking().subscribe(
      (data: Booking[]) => {
        this.dataSource = data;
        this.isLoaded = true;
      },
      (error: any) => {
        console.log(error);
      });
  }
}
