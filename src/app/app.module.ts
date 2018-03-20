import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatInputModule, MatMenuModule, MatOptionModule, MatSelectModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AlertModule, TabsModule } from 'ngx-bootstrap';
import { AuthenticationService } from './service/auth/authentication.service';
import { CountriesListComponent } from './components/countries/countries-list/countries-list.component';
import { CitiesListComponent } from './components/cities/cities-list/cities-list.component';
import { HotelsListComponent } from './components/hotels/hotels-list/hotels-list.component';
import {CountriesService} from './service/countries.service';
import {CitiesService} from './service/cities.service';
import {HotelsService} from './service/hotels.service';
import { RoomsListComponent } from './components/rooms/rooms-list/rooms-list.component';
import {RoomCategoryService} from './service/room-category.service';
import {RoomCategoriesListComponent} from './components/room-categories/room-categories-list/room-categories-list.component';
import {RoomService} from './service/room.service';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import {BookingService} from './service/booking.service';
import { CountryComponent } from './components/countries/country/country.component';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import { CityComponent } from './components/cities/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UsersListComponent,
    CountriesListComponent,
    CitiesListComponent,
    HotelsListComponent,
    RoomsListComponent,
    RoomCategoriesListComponent,
    BookingListComponent,
    CountryComponent,
    CityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    BookingService,
    CountriesService,
    CitiesService,
    HotelsService,
    RoomService,
    RoomCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
