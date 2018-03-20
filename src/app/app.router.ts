import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import {CountriesListComponent} from './components/countries/countries-list/countries-list.component';
import {CitiesListComponent} from './components/cities/cities-list/cities-list.component';
import {RoomCategoriesListComponent} from './components/room-categories/room-categories-list/room-categories-list.component';
import {RoomsListComponent} from './components/rooms/rooms-list/rooms-list.component';
import {BookingListComponent} from './components/booking/booking-list/booking-list.component';
import {CountryComponent} from './components/countries/country/country.component';
import {HotelsListComponent} from './components/hotels/hotels-list/hotels-list.component';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {CityComponent} from './components/cities/city/city.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'booking',
        component: BookingListComponent
    },
    {
        path: 'cities/:id',
        component: CityComponent
    },
    {
        path: 'cities',
        component: CitiesListComponent
    },
    {
        path: 'country/:id',
        component: CountryComponent
    },
    {
        path: 'countries',
        component: CountriesListComponent
    },
    {
        path: 'hotels',
        component: HotelsListComponent
    },
    {
        path: 'rooms',
        component: RoomsListComponent
    },
    {
        path: 'roomCategories',
        component: RoomCategoriesListComponent
    },
    {
        path: 'users',
        component: UsersListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
