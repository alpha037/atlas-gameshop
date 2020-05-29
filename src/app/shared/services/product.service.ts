import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((action) => ({
            key: action.key,
            val: action.payload.val(),
          }))
        )
      );
  }

  get(productId) {
    return this.db.object(`/products/${productId}`).valueChanges();
  }

  update(productId, product) {
    return this.db.object(`/products/${productId}`).update(product);
  }

  delete(productId) {
    return this.db.object(`/products/${productId}`).remove();
  }
}
