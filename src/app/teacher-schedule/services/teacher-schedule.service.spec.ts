import { TestBed, async, inject } from '@angular/core/testing';
import { TeacherScheduleService } from './teacher-schedule.service';

describe('Service: ClassGroups', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherScheduleService]
    });
  });

  it('should ...', inject([TeacherScheduleService], (service: TeacherScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
