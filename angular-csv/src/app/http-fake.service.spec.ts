import { TestBed } from '@angular/core/testing';

import { HttpFakeService } from './http-fake.service';

describe('HttpFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFakeService = TestBed.get(HttpFakeService);
    expect(service).toBeTruthy();
  });
});
