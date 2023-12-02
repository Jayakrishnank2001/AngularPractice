import { CanActivateFn } from '@angular/router';

export const childGuard: CanActivateFn = (route, state) => {
  return true;
};
