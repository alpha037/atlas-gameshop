import { ShoppingCart } from 'shared/models/shopping-cart';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from 'shared/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object(`/shopping-carts/${cartId}`)
      .snapshotChanges()
      .pipe(map((x) => new ShoppingCart(x.payload.val()['items'])));
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object(`/shopping-carts/${cartId}/items`).remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object(`/shopping-carts/${cartId}/items/${productId}`);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private async updateItem(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let itemRef = this.getItem(cartId, product.key);

    itemRef
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item) => {
        let quantity =
          (item.payload.exists() ? item.payload.val()['quantity'] : 0) + change;

        if (quantity === 0) itemRef.remove();
        else
          itemRef.update({
            // product: product,
            key: product.key,
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: quantity,
          });
      });
  }
}
