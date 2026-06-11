import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FoodService } from '../../services/food';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboardComponent implements OnInit {

  foods: any[] = [];
  filteredFoods: any[] = [];
  searchTerm = '';
  showDeleteModal = false;
  foodToDelete: any = null;
  loading = true;

  constructor(
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods() {
    this.loading = true;
    this.foodService.getAdminFoods().subscribe({
      next: (res: any) => {
        this.foods = res;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredFoods = [...this.foods];
    } else {
      this.filteredFoods = this.foods.filter(f =>
        f.name.toLowerCase().includes(term) ||
        f.category.toLowerCase().includes(term)
      );
    }
  }

  editFood(id: string, event: Event) {
    event.stopPropagation();
    this.router.navigate(['/edit-food', id]);
  }

  requestDelete(food: any, event: Event) {
    event.stopPropagation();
    this.foodToDelete = food;
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.foodToDelete = null;
  }

  confirmDelete() {
    if (!this.foodToDelete) return;
    this.foodService.deleteFood(this.foodToDelete._id).subscribe({
      next: () => {
        this.showDeleteModal = false;
        this.foodToDelete = null;
        this.loadFoods();
      },
      error: () => {
        alert('Failed to delete food item.');
        this.showDeleteModal = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/admin-login']);
  }
}