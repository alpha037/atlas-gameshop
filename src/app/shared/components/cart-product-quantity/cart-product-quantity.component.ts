import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cart-product-quantity',
  templateUrl: './cart-product-quantity.component.html',
  styleUrls: ['./cart-product-quantity.component.css'],
})
export class CartProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(
    private cartService: ShoppingCartService,
    private snackBar: MatSnackBar
  ) {}

  addToCart() {
    this.cartService.addToCart(this.product);
    this.openSnackBar('Added to cart.', 'Dismiss');
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
    this.openSnackBar('Removed from cart.', 'Okay');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
