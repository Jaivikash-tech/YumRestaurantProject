import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiUrl = 'http://localhost:5000/api/foods';

  constructor(
    private http: HttpClient
  ) {}

  private adminHeaders() {
    const token = localStorage.getItem('adminToken') || '';
    return { headers: { Authorization: token } };
  }

  getFoods() {
    return this.http.get(
      `${this.apiUrl}/customer?_=${new Date().getTime()}`
    );
  }

  addFood(data: any) {
    return this.http.post(this.apiUrl, data, this.adminHeaders());
  }

  updateFood(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data, this.adminHeaders());
  }

  deleteFood(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.adminHeaders());
  }

  getAdminFoods() {
    return this.http.get(`${this.apiUrl}/admin`, this.adminHeaders());
  }

getFoodById(id: string) {

  return this.http.get(
    `${this.apiUrl}/${id}`
  );

}
}