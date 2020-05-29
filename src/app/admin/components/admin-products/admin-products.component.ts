import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Product } from 'shared/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['title', 'price', 'edit', 'delete'];
  pageSizeOptions: number[] = [3, 5, 10, 25, 100];
  length: number;
  pageSize: number = 5;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((products) => {
      this.filteredProducts = this.products = products.map((product) => {
        return <Product>{
          key: product.key,
          title: product.val['title'],
          category: product.val['category'],
          price: product.val['price'],
          imageUrl: product.val['imageUrl'],
        };
      });

      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.length = this.products.length;
    });
  }

  delete(key) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(key);
  }

  filter(query: string) {
    // this.filteredProducts = query
    //   ? this.filteredProducts.filter((p) =>
    //       p.title.toLowerCase().includes(query.toLowerCase())
    //     )
    //   : this.products;
    this.dataSource.filter = query.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
