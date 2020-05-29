import { switchMap } from 'rxjs/operators';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) {
    this.orders$ = this.authService.user$.pipe(
      switchMap((u) => this.orderService.getOrdersByUser(u.uid))
    );
  }

  openSnackbar() {
    this.snackBar.open('Feature coming soon!', `I'll Wait`, {
      duration: 2000,
    });
  }
}
