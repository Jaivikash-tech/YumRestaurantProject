import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressService } from '../../services/address';

import { OrderService } from '../../services/order';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-order.html'
})
export class PlaceOrderComponent
implements OnInit {

  addresses: any[] = [];

  selectedAddress = '';

  constructor(
    private addressService: AddressService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.addressService
      .getAddresses()
      .subscribe((res: any) => {

        this.addresses = res;

      });

  }

  placeOrder() {

    this.orderService
      .placeOrder(
        this.selectedAddress
      )
      .subscribe(() => {

        alert(
          'Order Placed Successfully'
        );

      });

  }

}