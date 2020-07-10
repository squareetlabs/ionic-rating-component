import { TestBed } from '@angular/core/testing';

import { IonicRatingService } from './ionic-rating.service';

describe('IonicRatingService', () => {
  let service: IonicRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
