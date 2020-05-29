import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent {
  orders$;

  constructor(
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) {
    this.orders$ = this.orderService.getOrders();
  }

  openSnackbar() {
    this.snackBar.open('Feature coming soon!', `I'll Wait`, {
      duration: 2000,
    });
  }
}
