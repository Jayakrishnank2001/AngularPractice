import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { childGuard } from './child.guard';

describe('childGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
