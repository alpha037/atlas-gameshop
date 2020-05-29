import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatFilterListComponent } from './components/mat-filter-list/mat-filter-list.component';
import { CategoryService } from 'shared/services/category.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    MatFilterListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'check-out',
        canActivate: [AuthGuard],
        component: CheckOutComponent,
      },
      {
        path: 'order-success/:id',
        canActivate: [AuthGuard],
        component: OrderSuccessComponent,
      },
      {
        path: 'my/orders',
        canActivate: [AuthGuard],
        component: MyOrdersComponent,
      },
    ]),
  ],
  providers: [ProductFilterComponent],
})
export class ShoppingModule {}
