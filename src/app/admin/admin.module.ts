import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        canActivate: [AuthGuard, AdminAuthGuard],
        component: ProductFormComponent,
      },
      {
        path: 'admin/products/:id',
        canActivate: [AuthGuard, AdminAuthGuard],
        component: ProductFormComponent,
      },
      {
        path: 'admin/products',
        canActivate: [AuthGuard, AdminAuthGuard],
        component: AdminProductsComponent,
      },
      {
        path: 'admin/orders',
        canActivate: [AuthGuard, AdminAuthGuard],
        component: AdminOrdersComponent,
      },
    ]),
  ],
  providers: [AdminAuthGuard],
})
export class AdminModule {}
