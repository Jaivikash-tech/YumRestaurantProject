import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiUrl =
    'http://localhost:5000/api/address';

  constructor(
    private http: HttpClient
  ) {}

  addAddress(data: any) {

    return this.http.post(
      this.apiUrl,
      data
    );

  }

  getAddresses() {

    return this.http.get(
      this.apiUrl
    );

  }

  updateAddress(
    id: string,
    data: any
  ) {

    return this.http.put(
      `${this.apiUrl}/${id}`,
      data
    );

  }

  deleteAddress(id: string) {

    return this.http.delete(
      `${this.apiUrl}/${id}`
    );

  }

}