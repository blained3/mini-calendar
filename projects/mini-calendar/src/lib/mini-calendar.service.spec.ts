import { TestBed } from '@angular/core/testing';

import { MiniCalendarService } from './mini-calendar.service';

describe('MiniCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniCalendarService = TestBed.get(MiniCalendarService);
    expect(service).toBeTruthy();
  });
});
