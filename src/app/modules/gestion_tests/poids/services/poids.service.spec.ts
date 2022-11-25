import { TestBed } from '@angular/core/testing';

import { PoidsService } from './poids.service';

describe('PoidsService', () => {
  let service: PoidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
