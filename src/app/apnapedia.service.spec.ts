import { TestBed } from '@angular/core/testing';

import { ApnapediaService } from './apnapedia.service';

describe('ApnapediaService', () => {
  let service: ApnapediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApnapediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
