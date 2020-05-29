import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'shared/services/category.service';
@Component({
  selector: 'mat-filter-list',
  templateUrl: './mat-filter-list.component.html',
  styleUrls: ['./mat-filter-list.component.css'],
})
export class MatFilterListComponent {
  categories$: Observable<any>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getAll();
  }
}
