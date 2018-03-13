import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { UsersComponent } from './components/users/users.component';
import {CountriesListComponent} from './components/countries-list/countries-list.component';
import {CitiesListComponent} from './components/cities-list/cities-list.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cities',
        component: CitiesListComponent
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
        path: 'users',
        component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
