import { LoginComponent } from './login/login.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'products', component: ProductsComponent },

  { path: 'Orders', component: MyOrdersComponent },

  { path: 'admin/orders', component: AdminOrdersComponent },

  { path: 'admin/products', component: AdminProductComponent },

  { path: 'productcart', component: ProductcardComponent },

  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
