import { TestBed } from '@angular/core/testing';

import { AuthIntercepterService } from './auth-intercepter-service.service';

describe('AuthIntercepterServiceService', () => {
  let service: AuthIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
