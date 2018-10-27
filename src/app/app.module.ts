import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MiniCalendarModule } from 'mini-calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MiniCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
