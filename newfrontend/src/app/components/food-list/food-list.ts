import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { FoodService } from '../../services/food';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './food-list.html'
})
export class FoodListComponent implements OnInit {

  foods: any[] = [];
  filteredFoods: any[] = [];
  currentCategory: string | null = null;
  isLoading: boolean = true;

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Listen to query parameters to filter foods
    this.route.queryParams.subscribe(params => {
      this.currentCategory = params['category'] || null;
      this.filterFoods();
    });

    // 2. Fetch foods
    this.foodService
      .getFoods()
      .subscribe({
        next: (data: any) => {
          this.foods = data;
          console.log("Loaded foods:", data);
          this.filterFoods();
          this.isLoading = false;
        },
        error: (err: any) => {
          console.error('Error fetching foods:', err);
          this.isLoading = false;
          alert('Error fetching foods: ' + (err.message || 'Unknown error'));
        }
      });
  }
  
  filterFoods() {
    if (this.currentCategory) {
      this.filteredFoods = this.foods.filter(f => 
        f.category && f.category.toLowerCase() === this.currentCategory!.toLowerCase()
      );
    } else {
      this.filteredFoods = [...this.foods];
    }
  }

  addToCart(foodId: string) {
    if (!localStorage.getItem('token')) {
      alert('Please login to add items to your cart.');
      this.router.navigate(['/login']);
      return;
    }

    this.cartService
      .addToCart(foodId)
      .subscribe({

        next: (res) => {

          alert('Item added to cart successfully!');

        },

        error: (err) => {

          console.log(err);
          alert('Failed to add to cart. Please try again.');

        }

      });

  }

}