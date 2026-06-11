import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    'http://localhost:5000/api/auth';

  constructor(
    private http: HttpClient
  ) {}

  register(data: any) {

    return this.http.post(
      `${this.apiUrl}/register`,
      data
    );

  }

  login(data: any) {

    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );

  }

  adminLogin(data: any) {

    return this.http.post(
      `${this.apiUrl}/admin/login`,
      data
    );

  }

}