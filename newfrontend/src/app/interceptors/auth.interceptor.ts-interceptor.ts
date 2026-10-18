import {
  HttpInterceptorFn
} from '@angular/common/http';

export const authInterceptor:
HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('token');
  const adminToken = localStorage.getItem('adminToken');

  if (req.url.includes('/admin') || (req.url.includes('/foods') && req.method !== 'GET')) {
    token = adminToken || token;
  }

  if (token) {

    req = req.clone({

      setHeaders: {
        Authorization: token
      }

    });

  }

  return next(req);

};