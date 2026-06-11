import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from '../../services/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html'
})
export class OrdersComponent
implements OnInit {

  orders: any[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.loadOrders();

  }

  loadOrders() {

    this.orderService
      .getMyOrders()
      .subscribe((res: any) => {

        this.orders = res;

      });

  }

}