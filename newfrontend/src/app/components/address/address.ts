import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order';
import { AddressService } from '../../services/address';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './address.html'
})
export class AddressComponent
implements OnInit {

  addresses: any[] = [];

  fullName = '';
  mobile = '';
  houseNo = '';
  street = '';
  city = '';
  state = '';
  pincode = '';

  constructor(
    private addressService: AddressService,
    private orderService: OrderService,
  private router: Router
  ) {}

  ngOnInit(): void {

    this.loadAddresses();

  }

  loadAddresses() {

    this.addressService
      .getAddresses()
      .subscribe((res: any) => {

        this.addresses = res;

      });

  }

  saveAddress() {

    const data = {

      fullName: this.fullName,
      mobile: this.mobile,
      houseNo: this.houseNo,
      street: this.street,
      city: this.city,
      state: this.state,
      pincode: this.pincode

    };

    this.addressService
      .addAddress(data)
      .subscribe(() => {

        alert('Address Saved');

        this.loadAddresses();

      });

  }

  deleteAddress(id: string) {

    this.addressService
      .deleteAddress(id)
      .subscribe(() => {

        this.loadAddresses();

      });

  }

  selectedAddressId = '';

placeOrder() {

  this.orderService
    .placeOrder(this.selectedAddressId)
    .subscribe(() => {

      alert('Order Placed');

      this.router.navigate(['/orders']);

    });

}

}