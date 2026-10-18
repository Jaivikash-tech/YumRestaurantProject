import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { FoodListComponent } from './components/food-list/food-list';
import { AddressComponent } from './components/address/address';
import { OrdersComponent } from './components/orders/orders';
import { AdminLoginComponent } from './components/admin-login/admin-login';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard';
import { AddFoodComponent } from './components/add-food/add-food';
import { PlaceOrderComponent } from './components/place-order/place-order';
import {EditFoodComponent} from './components/edit-food/edit-food';
import { authGuard } from './guards/auth.guard.ts-guard';
import { adminGuard } from './guards/admin.guard.ts-guard';

import { Landing } from './components/landing/landing';

export const routes: Routes = [

  {
    path: '',
    component: Landing
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'foods',
    component: FoodListComponent
  },

  {
  path: 'cart',
  component: CartComponent,
  canActivate:[authGuard]
},

{
  path: 'address',
  component: AddressComponent,
  canActivate:[authGuard]
},

{
  path: 'place-order',
  component: PlaceOrderComponent
},

{
  path: 'orders',
  component: OrdersComponent,
  canActivate:[authGuard]
},

{
  path: 'admin-login',
  component: AdminLoginComponent,
},

{
  path: 'admin-dashboard',
  component: AdminDashboardComponent,
   canActivate:[adminGuard]
},

{
  path: 'add-food',
  component: AddFoodComponent,
   canActivate: [adminGuard]
},

{
  path: 'edit-food/:id',
  component: EditFoodComponent,
  canActivate: [adminGuard]
},


];