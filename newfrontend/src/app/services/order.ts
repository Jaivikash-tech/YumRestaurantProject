import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://yumrestaurantproject.onrender.com/api/orders';

  constructor(
    private http: HttpClient
  ) {}

  placeOrder(addressId: string) {

    return this.http.post(
      this.apiUrl,
      { addressId }
    );

  }

  getMyOrders() {

    return this.http.get(
      `${this.apiUrl}/my-orders`
    );

  }

  getAllOrders() {
  return this.http.get(`${this.apiUrl}/admin/all`);
}


updateStatus(orderId: string, status: string) {
  return this.http.put(
    `${this.apiUrl}/admin/${orderId}`,
    { status }
  );
}

}