import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.html'
})
export class CartComponent
implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.loadCart();

  }

  loadCart() {

    this.cartService
      .getCart()
      .subscribe({
        next: (res: any) => {
          this.cartItems = res.items;
          this.total = res.total;
        },
        error: (err: any) => {
          console.error('Error loading cart:', err);
        }
      });

  }

  increase(item: any) {

    this.cartService
      .updateQuantity(
        item._id,
        item.quantity + 1
      )
      .subscribe(() => {

        this.loadCart();

      });

  }

  decrease(item: any) {

    if (item.quantity <= 1) {
      return;
    }

    this.cartService
      .updateQuantity(
        item._id,
        item.quantity - 1
      )
      .subscribe(() => {

        this.loadCart();

      });

  }

  remove(id: string) {

    this.cartService
      .removeItem(id)
      .subscribe(() => {

        this.loadCart();

      });

  }

}