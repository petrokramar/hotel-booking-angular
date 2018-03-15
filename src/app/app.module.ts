import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatInputModule, MatMenuModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertModule, TabsModule } from 'ngx-bootstrap';
import { AuthenticationService } from './service/auth/authentication.service';
import { UsersComponent } from './components/users/users.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import {CountriesService} from './service/countries.service';
import {CitiesService} from './service/cities.service';
import {HotelsService} from './service/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HotelsComponent,
    HeaderComponent,
    UsersComponent,
    CountriesListComponent,
    CitiesListComponent,
    HotelsListComponent
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
    MatTableModule,
    MatToolbarModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    CountriesService,
    CitiesService,
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
