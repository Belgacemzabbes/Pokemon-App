import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './in-memory-data.service';
import { FormsModule } from "@angular/forms";

import { LoginComponent} from './login.component';
import {  LoginRoutingModule} from "./login-routing.module";

import {PokemonsModule} from './pokemons/pokemons.module'
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonsModule,
    LoginRoutingModule,
   AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
