import { NgModule } from '@angular/core';
import { MiniCalendarComponent } from './mini-calendar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MiniCalendarComponent],
  exports: [MiniCalendarComponent]
})
export class MiniCalendarModule { }
