import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function canActivateDashboard() {
  const router = inject(Router);
  if (localStorage.getItem('isLoggedIn') === 'true') {
    return true;
  }
  return router.parseUrl('/login');
}