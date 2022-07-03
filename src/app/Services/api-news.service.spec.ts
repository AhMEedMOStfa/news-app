import { TestBed } from '@angular/core/testing';

import { ApiPoliticsService } from './api-news.service';

describe('ApiPoliticsService', () => {
  let service: ApiPoliticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoliticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
