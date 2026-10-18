import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:5000/api/cart';

  constructor(
    private http: HttpClient
  ) {}

  // Add Item To Cart
  addToCart(foodId: string): Observable<any> {

    return this.http.post(
      this.apiUrl,
      { foodId }
    );

  }

  // Get Cart Items
  getCart(): Observable<any> {

    return this.http.get(
      this.apiUrl
    );

  }

  // Update Quantity
  updateQuantity(
    cartId: string,
    quantity: number
  ): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/${cartId}`,
      { quantity }
    );

  }

  // Remove Cart Item
  removeItem(
    cartId: string
  ): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/${cartId}`
    );

  }

  // Clear Cart
  clearCart(): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/clear/all`
    );

  }

}