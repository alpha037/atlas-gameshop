import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db
      .list('/categories', (ref) => ref.orderByChild('name'))
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
  // getCategories() {
  //   return this.db
  //     .list('/categories', (ref) => ref.orderByChild('name'))
  //     .snapshotChanges();
  // }

  getCategory(key: string) {
    return this.db.list(`/categories/${key}`).valueChanges();
  }
}
