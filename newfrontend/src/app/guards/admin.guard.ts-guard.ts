import { CanActivateFn } from '@angular/router';

export const adminGuard:
CanActivateFn = () => {

  const token =
   localStorage.getItem(
     'adminToken'
   );

  if (token) {
    return true;
  }

  alert(
    'Admin Login Required'
  );

  return false;

};