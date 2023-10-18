import { TestBed } from '@angular/core/testing';

import { FitlerUnitsService } from './fitler-units.service';

describe('FitlerUnitsService', () => {
  let service: FitlerUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitlerUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
