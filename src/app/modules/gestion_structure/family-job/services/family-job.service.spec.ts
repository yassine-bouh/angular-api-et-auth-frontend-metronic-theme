import { TestBed } from '@angular/core/testing';

import { FamilyJobService } from './family-job.service';

describe('FamilyJobService', () => {
  let service: FamilyJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
