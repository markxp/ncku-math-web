import { TestBed } from '@angular/core/testing';

import { ChairmanService } from './chairman.service';

describe('ChairmanService', () => {
  let service: ChairmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChairmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
