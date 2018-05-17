import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './app.LoginComponent';
import {routing }       from './app.routing';
import {FormsModule }   from '@angular/forms';
import { SearchFilterComponent } from './SearchFilterComponent/searchFilterComponent';
import { SummaryComponent } from './SummaryComponent/summaryComponent';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchFilterComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
