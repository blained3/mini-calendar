import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'mini-calendar',
  templateUrl: 'mini-calendar.component.html',
  styleUrls: ['mini-calendar.component.less']
})
export class MiniCalendarComponent implements OnInit {
  @Input() mainColor = '#03a9f4';
  @Input() secondaryColor = '#ff5';
  @Input() showWeek: boolean;
  @Input() selectedDate: any;
  @Output() selectedDateChange = new EventEmitter();

  public month;
  weeks: any[];

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.month = moment(this.selectedDate).clone();

    const start = moment(this.selectedDate).clone();
    start.date(1);
    this._removeTime(start.day(0));

    this._buildMonth(start, this.month);
    this.select(moment(this.selectedDate).clone());
    this.ref.detectChanges();
  }

  public select(day) {
    this.selectedDate = day.date;
    this.selectedDateChange.emit(this.selectedDate);
  }

  getBgColor(day) {
    return {
      'background-color': this.isInWeek(day) ? this.secondaryColor : day.isToday ? this.mainColor : '',
      'opacity': day.isToday ? '.5' : '1'
    };
  }

  public isInWeek(day) {
    if (this.selectedDate && this.selectedDate.isSame) {
      if (this.showWeek) {
        const tempMoment = this.selectedDate.clone();
        tempMoment.isoWeekday(0);
        const otherTempMoment = this.selectedDate.clone();
        otherTempMoment.isoWeekday(7);
        otherTempMoment.isAfter(day.date);
        return tempMoment.isSame(day.date) || (tempMoment.isBefore(day.date) && otherTempMoment.isAfter(day.date));
      } else {
        return this.selectedDate.isSame(day.date);
      }
    }
    return false;
  }

  public next() {
    const next = this.month.clone();
    this._removeTime(next.month(next.month() + 1).date(1));
    this.month.month(this.month.month() + 1);
    this._buildMonth(next, this.month);
  }

  public previous() {
    const previous = this.month.clone();
    this._removeTime(previous.month(previous.month() - 1).date(1));
    this.month.month(this.month.month() - 1);
    this._buildMonth(previous, this.month);
  }

  public _removeTime(date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  public _buildWeek(date, month) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        name: date.format('dd').substring(0, 1),
        numb: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date: date
      });
      date = date.clone();
      date.add(1, 'd');
    }
    return days;
  }

  public _buildMonth(start, month) {
    this.weeks = [];
    const date = start.clone();
    let done = false, monthIndex = date.month(), count = 0;
    while (!done) {
      this.weeks.push({ days: this._buildWeek(date.clone(), month) });
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  }

}
