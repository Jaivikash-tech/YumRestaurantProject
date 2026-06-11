import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-login.html'
})
export class AdminLoginComponent {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.authService
      .adminLogin({
        username: this.username,
        password: this.password
      })
      .subscribe((res: any) => {

        localStorage.setItem(
          'adminToken',
          res.token
        );

        this.router.navigate([
          '/admin-dashboard'
        ]);

      });

  }

}