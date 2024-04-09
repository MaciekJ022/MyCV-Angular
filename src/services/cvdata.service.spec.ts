import { TestBed } from '@angular/core/testing';

import { CvdataService } from './cvdata.service';

describe('CvdataService', () => {
  let service: CvdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
