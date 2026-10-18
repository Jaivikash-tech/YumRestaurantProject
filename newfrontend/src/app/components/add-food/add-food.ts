import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { FoodService } from '../../services/food';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './add-food.html',
  styleUrl: './add-food.css'
})
export class AddFoodComponent {

  name = '';
  description = '';
  category = '';
  price = 0;
  image = '';

  constructor(
    private foodService: FoodService,
    private router: Router
  ) {}

  save() {

    this.foodService
      .addFood({

        name: this.name,
        description:
          this.description,

        category:
          this.category,

        price:
          this.price,

        image:
          this.image

      })
      .subscribe({
        next: () => {
          alert('Food Added Successfully!');
          this.router.navigate(['/admin-dashboard']);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to add food. Ensure you are logged in as admin.');
        }
      });

  }

}