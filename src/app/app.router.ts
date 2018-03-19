import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { UsersComponent } from './components/users/users.component';
import {CountriesListComponent} from './components/countries-list/countries-list.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';
import {RoomCategoriesListComponent} from './components/room-categories-list/room-categories-list.component';
import {RoomsListComponent} from './components/rooms-list/rooms-list.component';
import {BookingListComponent} from './components/booking-list/booking-list.component';
import {CountryComponent} from './components/country/country.component';

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
        component: HotelsComponent
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
        component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
