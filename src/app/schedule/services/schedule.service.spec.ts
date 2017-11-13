/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';

describe('Service: ClassGroups', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleService]
    });
  });

  it('should ...', inject([ScheduleService], (service: ScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
