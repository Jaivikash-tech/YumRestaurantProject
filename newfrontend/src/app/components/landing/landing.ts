import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FoodListComponent } from '../food-list/food-list';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, FoodListComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements OnInit {
  categories: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Hardcoded categories for the landing page with inline SVG images for guaranteed display
    this.categories = [
      {
        name: 'Biriyani',
        description: 'Authentic and aromatic biriyani cooked to perfection.',
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='100%25' height='100%25' fill='%23e67e22'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' font-weight='bold' fill='%23ffffff'%3E🥘 Biriyani%3C/text%3E%3C/svg%3E"
      },
      {
        name: 'Snacks',
        description: 'Crispy, crunchy, and delicious bites for your cravings.',
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='100%25' height='100%25' fill='%23f1c40f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' font-weight='bold' fill='%23333333'%3E🍟 Snacks%3C/text%3E%3C/svg%3E"
      },
      {
        name: 'Drinks',
        description: 'Refreshing beverages to quench your thirst.',
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='100%25' height='100%25' fill='%233498db'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='40' font-weight='bold' fill='%23ffffff'%3E🥤 Drinks%3C/text%3E%3C/svg%3E"
      }
    ];
  }

  scrollToMenu() {
    document.getElementById('full-menu-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  viewCategory(category: string | null) {
    if (category) {
      this.router.navigate(['/'], { queryParams: { category: category } });
    } else {
      this.router.navigate(['/']);
    }
    setTimeout(() => {
      this.scrollToMenu();
    }, 100);
  }
}
