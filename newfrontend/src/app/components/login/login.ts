import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {

      localStorage.setItem(
        'token',
        res.token
      );
      

      const displayName = res.name || this.email.split('@')[0];
      localStorage.setItem(
        'name',
        displayName
      );

      this.router.navigate(['/']);

    });

  }

}