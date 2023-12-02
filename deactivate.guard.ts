import { CanActivateFn } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const deactivateGuard: CanActivateFn = (route, state) => {
  
  return true;
};
