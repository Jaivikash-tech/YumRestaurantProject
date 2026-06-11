import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from '../../services/order';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
   './admin-orders.html'
})
export class AdminOrdersComponent
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
      .getAllOrders()
      .subscribe((res: any) => {

        this.orders = res;

      });

  }

  updateStatus(
    id: string,
    status: string
  ) {

    this.orderService
      .updateStatus(
        id,
        status
      )
      .subscribe(() => {

        this.loadOrders();

      });

  }

}