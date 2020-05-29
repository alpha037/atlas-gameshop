import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  chipCategory: string = 'All Categories';
  param: string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.route.queryParamMap
      .pipe(
        switchMap((params) => {
          this.param = params.get('category');

          return this.categoryService.getCategory(this.param);
        })
      )
      .subscribe((c) => (this.chipCategory = c.toString() || 'All Categories'));
  }
}
