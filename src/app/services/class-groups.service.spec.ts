/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassGroupsService } from './class-groups.service';

describe('Service: ClassGroups', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassGroupsService]
    });
  });

  it('should ...', inject([ClassGroupsService], (service: ClassGroupsService) => {
    expect(service).toBeTruthy();
  }));
});