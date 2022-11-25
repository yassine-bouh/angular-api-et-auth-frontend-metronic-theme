import { TestBed } from '@angular/core/testing';

import { AxeService } from './axe.service';

describe('AxeService', () => {
  let service: AxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
