import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

  isAdminPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isAdminPage = e.url.startsWith('/admin');
      });
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get isAdminLoggedIn(): boolean {
    return !!localStorage.getItem('adminToken');
  }

  get userName(): string | null {
    return localStorage.getItem('name');
  }

  logout() {

 localStorage.clear();

 this.router.navigate(['/']);

}
}