import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
 ActivatedRoute,
 Router,
 RouterLink
} from '@angular/router';
import { FoodService } from '../../services/food';

@Component({
  selector: 'app-edit-food',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './edit-food.html',
  styleUrl: './edit-food.css'
})
export class EditFoodComponent
implements OnInit {

  foodId = '';

  name = '';
  description = '';
  category = '';
  price = 0;
  image = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {

    this.foodId =
      this.route.snapshot.params['id'];

    this.loadFood();

  }

  loadFood() {

    this.foodService
      .getAdminFoods()
      .subscribe((foods: any) => {

        const food =
          foods.find(
            (f: any) =>
            f._id === this.foodId
          );

        if (food) {

          this.name =
            food.name;

          this.description =
            food.description;

          this.category =
            food.category;

          this.price =
            food.price;

          this.image =
            food.image;

        }

      });

  }

  updateFood() {

    this.foodService
      .updateFood(
        this.foodId,
        {

          name:
            this.name,

          description:
            this.description,

          category:
            this.category,

          price:
            this.price,

          image:
            this.image

        }
      )
      .subscribe(() => {

        alert(
          'Food Updated'
        );

        this.router.navigate([
          '/admin-dashboard'
        ]);

      });

  }

}